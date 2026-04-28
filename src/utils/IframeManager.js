// src/utils/IframeManager.js
class IframeManager {
  constructor() {
    // 存储所有 iframe 实例: { key: HTMLIFrameElement }
    this.iframes = new Map();
    // 存储每个 iframe 的配置信息: { key: { src, ...options } }
    this.configs = new Map();
    // 存储当前激活的 iframe key
    this.activeKey = null;
    // 存储每个 iframe 当前应用的主题: { key: theme }
    this.currentThemes = new Map();
    
    // 创建一个固定的仓库容器，所有 iframe 都放在这里，不移动
    this.storageContainer = document.createElement('div');
    this.storageContainer.id = 'iframe-storage-container';
    Object.assign(this.storageContainer.style, {
      width: '100%',
      height: '100%',
      zIndex: '0'
    });
    this._initStorageContainer();
  }

  async _initStorageContainer() {
    const appBody = await this._waitForElement('app-body-container');
    if (appBody) {
      appBody.appendChild(this.storageContainer);
    } else {
      console.error('[IframeManager] Failed to find app-body-container element');
    }
  }

  _waitForElement(elementId, timeout = 10000) {
    return new Promise((resolve) => {
      const element = document.getElementById(elementId);
      if (element) {
        resolve(element);
        return;
      }

      const observer = new MutationObserver(() => {
        const element = document.getElementById(elementId);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, timeout);
    });
  }

  /**
   * 获取或创建 iframe
   * @param {string} key - 唯一标识
   * @param {string} src - iframe 地址
   * @param {object} options - 其他属性 (如 name, id, style 等)
   */
  getOrCreate(key, src, options = {}) {
    if (this.iframes.has(key)) {
      return this.iframes.get(key);
    }

    const iframe = document.createElement('iframe');
    iframe.src = src;
    
    // 设置默认样式
    Object.assign(iframe.style, {
      width: '100%',
      height: '100%',
      border: 'none',
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'none',
      zIndex: '-1'
    });

    // 设置其他属性
    if (options.name) iframe.name = options.name;
    if (options.id) iframe.id = options.id;
    if (options.allow) iframe.allow = options.allow;
    if (options.sandbox) iframe.sandbox = options.sandbox;

    // 放入仓库容器，永远不移除
    this.storageContainer.appendChild(iframe);
    
    this.iframes.set(key, iframe);
    this.configs.set(key, { src, options });
    
    console.log(`[IframeManager] Created new iframe for key: ${key}`);
    return iframe;
  }

  /**
   * 激活 iframe：显示指定的 iframe，隐藏其他
   * @param {string} key - 唯一标识
   * @param {string} src - iframe 地址（如果 iframe 不存在则使用此地址创建）
   * @param {object} options - 其他属性
   */
  activate(key, src = null, options = {}) {    
    // 如果 iframe 不存在，自动创建
    if (!this.iframes.has(key)) {
      if (!src) {
        console.error(`[IframeManager] Iframe with key "${key}" not found and no src provided.`);
        return;
      }
      this.getOrCreate(key, src, options);
    }

    const iframe = this.iframes.get(key);
    if (!iframe) {
      console.error(`[IframeManager] Iframe with key "${key}" not found.`);
      return;
    }

    // 隐藏之前激活的 iframe
    if (this.activeKey && this.activeKey !== key) {
      const prevIframe = this.iframes.get(this.activeKey);
      if (prevIframe) {
        prevIframe.style.display = 'none';
        prevIframe.style.zIndex = '-1';
        prevIframe.style.pointerEvents = 'none';
      }
    }

    // 显示当前 iframe
    iframe.style.visibility = 'hidden';
    iframe.style.display = 'block';
    iframe.style.zIndex = '10';
    iframe.style.pointerEvents = 'auto';
    
    this.activeKey = key;  
    
    // 触发 resize 事件
    setTimeout(() => {   
      if (options.theme !== undefined) {
        this.applyThemeToIframe(key, iframe, options.theme);
      }   
      iframe.style.visibility = 'visible';
      window.dispatchEvent(new Event('resize'));
    }, 60);
    
    console.log(`[IframeManager] Activated iframe for key: ${key}`);
  }

  /**
   * 停用 iframe：隐藏指定的 iframe
   * @param {string} key - 唯一标识
   */
  deactivate(key) {
    const iframe = this.iframes.get(key);
    if (!iframe) return;

    iframe.style.display = 'none';
    iframe.style.zIndex = '-1';
    iframe.style.pointerEvents = 'none';
    
    if (this.activeKey === key) {
      this.activeKey = null;
    }
    
    console.log(`[IframeManager] Deactivated iframe for key: ${key}`);
  }

  /**
   * 销毁 iframe
   * @param {string} key 
   */
  destroy(key) {
    const iframe = this.iframes.get(key);
    if (iframe) {
      iframe.remove();
      this.iframes.delete(key);
      this.configs.delete(key);
      if (this.activeKey === key) {
        this.activeKey = null;
      }
      console.log(`[IframeManager] Destroyed iframe for key: ${key}`);
    }
  }

  /** 应用主题 */
  applyTheme(key, theme) {
    const iframe = this.iframes.get(key);
    if (!iframe) return;
    this.applyThemeToIframe(key, iframe, theme);
  }
  
  /**
   * 获取所有已创建的 iframe keys
   */
  getKeys() {
    return Array.from(this.iframes.keys());
  }

  applyThemeToIframe(key, iframe, theme) {
    if (!theme) return;
    const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDocument) return;
    
    const iframeRoot = iframeDocument.documentElement;
    if (!iframeRoot) return;    
    
    // 如果之前已经应用过主题，先移除旧主题
    if (key && this.currentThemes.has(key)) {
      const oldTheme = this.currentThemes.get(key);
      if (oldTheme !== theme) {
        iframeRoot.classList.remove(oldTheme);
      }
    }
    
    // 添加新主题
    iframeRoot.classList.add(theme);
    
    // 更新当前主题记录
    if (key) {
      this.currentThemes.set(key, theme);
    }
  }
}

// 导出单例
export const iframeManager = new IframeManager();
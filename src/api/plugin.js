var plugin = {};
plugin.install = function (Vue, options) {
  Vue.mixin({
    methods:{
      /**方法功能：
       * 获取一个随机字符串
       * @param number：返回字符串长度
       * */
      getRandomString(number) {
        let str = "qwertyuiopasdfghjklzxcvbnm123456789QWERTYUIOPLKJHGFDSAZXCVBNM";
        let tempString = "";
        for (let i = 0; i < number; i++) {
          let randomNum = parseInt(Math.random() * str.length);
          tempString += str[randomNum];
        }
        let date = new Date().getTime();
        return tempString + date;
      },

      uuid() {
        function S4() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        function STime() {
          return ((new Date().getTime())|0).toString(16);
        }
        let tempString = S4()+S4()+S4()+S4()+S4()+S4()+S4()+STime();
        return tempString;
      },

      // 对像拷贝
      assignObject(src) {
        return JSON.parse(JSON.stringify(src));
      },

      /**
       * 当前时间戳
       * @returns {number}
       */
      curTimestamp: function () {
        return new Date().getTime() / 1000; //获取时间戳 并返回
      },

      dateToTimestamp: function (date) {
        return date.getTime() / 1000;
      },

      /**
       * 当前时间字符串 (yyyy-mm-dd hh:mm:ss)
       * @returns {string}
       */
      curDateTimeStr: function () {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let second = date.getSeconds();
        return year + "-" + this.addZero(month + 1) + "-" + this.addZero(day) + " " + this.addZero(hour) + ":" + this.addZero(minutes) + ":" + this.addZero(second);
      },

      /**
       * 去掉时间字符串中的秒
       * @param value
       */
      timeRemoveSec: function(value, dateFormat) {
        try {
          return this.dateMagic(this.dateMagic(value), dateFormat ? dateFormat : 'yyyy-mm-dd hh:mm');
        } catch (e) {
          return value;
        }
        //return /\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}/g.exec(value)[0];
      },

      /**方法功能：
       * 给数据进行添 0 操作
       * 参数：
       * number：需要添加的数
       * type:保留
       * */
      addZero: function (number, type) {
        if (parseInt(number) < 10) {
          return "0" + number;
        } else {
          return number;
        }
      },


      /**
       * 搜索数组指定字段， 返回给定字段的值
       * @param items
       * @param findKey
       * @param outKey 要返回的列表项的key,如果不指定，则返回整个列表项对象
       * @param val
       * @returns {undefined|*}
       */
      findArrayFirst: function (items, findKey, outKey, val) {
         if (items && val != undefined && items.length > 0) {
           for (let i=0; i<items.length; i++) {
             if (items[i] && items[i][findKey] == val) {
               if (outKey == undefined)
                 return items[i];
               return items[i][outKey];
             }
           }
         }
         return undefined;
      },

      /**
       * 用于数字输入框在input方法中控制精度的实现逻辑
       * @param value 当前的数字，必填
       * @param decimal 精度，为正整数
       * @param isPositive 是否为正数 布尔值
       * @param isRound 是否四舍五入，默认为false，此时只做位数输入控制，不做进位
       * @return {string} 返回的数字
       * @constructor
       */
      NumberInputChangeControlDecimal(value, decimal, isPositive, isRound) {
        if (!isRound) {
          isRound = false
        }

        let newValue = value.toString().replace();
        decimal = parseInt(decimal);
        if (newValue !== '') {
          if (/^[\d|.|-]+$/.test(newValue) && /[-|\d]/.test(newValue[0])) {
            // 首位字符
            let firstNum = newValue[0]
            // 其他字符
            let nextNum = newValue.substring(1)
            // 首位字符为负号，其他字符的逻辑
            if (firstNum === '-') {
              if (isPositive) {
                firstNum = firstNum.replace(/-/g, '');
              }
              nextNum = nextNum.replace(/-/g, '')
              nextNum = nextNum.replace(/^\./, '')
            } else {
              // 替换掉nextNum中所有的负号
              nextNum = nextNum.replace(/-/g, '')
              if (/\d/.test(nextNum[0]) && firstNum === '0') {
                firstNum = '';
              }
            }
            // 精度为0时，控制小数点的输入
            if (decimal === 0) {
              nextNum = nextNum.replace(/\./g, '')
            }
            // 处理.的个数问题
            let spotArr = nextNum.split('.')
            let spotLen = spotArr.length - 1
            if (spotLen >= 1) {
              if (spotArr[1].length > decimal) {
                if (isRound === true) {
                  nextNum = spotArr[0] + '.' + spotArr[1].slice(0, decimal);
                } else {
                  let decimalNum = spotArr[1].slice(0, decimal + 1)
                  // 给小数第一位补1，保证为0不会被number处理掉
                  decimalNum = '1' + decimalNum
                  // 对于末尾四舍五入
                  decimalNum = parseInt((decimalNum / 10).toFixed(0)).toString()

                  if (decimalNum[0] === '2') {
                    // 模拟类似于1.999末尾四舍五入为2的情况
                    nextNum = Number(spotArr[0]) + 1
                  } else if (Number(decimalNum) / Math.pow(10, decimal) === 1) {
                    // 模拟类似末尾1.001末尾四舍五入为1的情况
                    nextNum = spotArr[0]
                  } else {
                    // 首位为1，且其他位不都为0的情况
                    nextNum = spotArr[0] + '.' + decimalNum.slice(1)
                  }
                }
              } else {
                nextNum = spotArr[0] + '.' + spotArr[1]
              }
            }
            newValue = firstNum + nextNum
          } else {
            newValue = newValue.replace(/\D/g, '')
          }
        }
        return newValue;
      },
    },
  });
};

export default plugin;

## ʲô�� Markdown

Markdown ��һ�ַ�����䡢��д�Ĵ��ı�������ԣ��û�����ʹ����Щ��Ƿ�������С������������ɼ������������ĵ���Ʃ���������Ķ�������ĵ�����ʹ�ü򵥵ķ��ű�ǲ�ͬ�ı��⣬�ָͬ�Ķ��䣬**����** ���� *б��* ĳЩ���֣��������ǣ���������

------

## Markdown �����﷨�ֲ�

### 1. б��ʹ���

ʹ�� * �� ** ��ʾб��ʹ��塣

ʾ����

���� *б��*������ **����**��

### 2. �ּ�����

ʹ�� === ��ʾһ�����⣬ʹ�� --- ��ʾ�������⡣Ҳ����ѡ�������׼Ӿ��ű�ʾ��ͬ����ı��� (H1-H6)�����磺# H1, ## H2, ### H3��#### H4, ##### H5, ###### H6��

ʾ����

```
����һ��һ������
============================

����һ����������
--------------------------------------------------

# ��Ҳ��һ��һ������

## ���Ƕ�������

### ����һ����������

#### ����4������

##### ����5������

###### ����6������
```

### 3. ������

ʹ�� \[����](���ӵ�ַ) Ϊ�������������ӡ�

ʾ����

����ȥ�� [���˲���](http://yangyxd.github.com) �����ӡ�

����һ���Զ����ֵĳ����� http://yangyxd.github.com

### 4. �����б�

ʹ�� *��+��- ��ʾ�����б�

ʾ����

- �����б��� һ
- �����б��� ��
- �����б��� ��

### 5. �����б�

ʹ�����ֺ͵��ʾ�����б�

ʾ����

1. �����б��� һ
2. �����б��� ��
3. �����б��� ��

### 6. ��������

ʹ�� > ��ʾ�������á�

ʾ����

> Ұ���ղ��������紵������

### 7. ���ڴ����

ʹ�� \`����` ��ʾ���ڴ���顣

ʾ����

���������� `html`��

### 8.  �����

ʹ�� **�ĸ������ո�** ��ʾ����顣

ʾ����

    ����һ������飬����������ĸ����ɼ��Ŀո�

### 9.  ����ͼ��

ʹ�� \!\[����](ͼƬ���ӵ�ַ) ����ͼ��

ʾ����

![�ҵ�ͷ��](https://www.baidu.com/img/flexible/logo/pc/result.png)

### 10. ɾ����

ʹ�� ~~ ��ʾɾ���ߡ�

~~����һ�δ�����ı���~~

### 11. ��ǩ����

�ڱ༭�������е�����λ���������´�����ĸ��ǩ��

��ǩ�� ��ѧ Ӣ�� Markdown

### 12. ��Ƕͼ��

ʹ��

    :fa-weibo:
    :weibo:
    ��
    <i class="icon-weibo"></i>

����ʾ΢����ͼ�꣺ <i class="icon-weibo icon-2x"></i> :weibo:

�滻 ������ `weibo` �滻������ʾ��ͬ��ͼ�꣬���磺

:fa-calendar: :fa-bullseye: :compass: :fa-font: :fa-qrcode: :fa-pencil: :forward: :fire:

�����ͼ����淨���Բο� [font-awesome](http://fortawesome.github.io/Font-Awesome/3.2.1/icons/) �ٷ���վ��

### 13. ע��

ʹ�� [^keyword] ��ʾע�š�

����һ��ע��[^footnote]��������

���ǵڶ���ע��[^footnote2]��������

[^footnote]: ����һ�� *ע��* �� **�ı�**��

[^footnote2]: ������һ�� *ע��* �� **�ı�**��

### 14. LaTeX ��ʽ

$ ��ʾ���ڹ�ʽ��

�����غ㷽�̿�����һ���ܼ��ķ���ʽ $E=mc^2$ ����

$$ ��ʾ���й�ʽ��

$$\sum_{i=1}^n a_i=0$$

$$f(x_1,x_x,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2 $$

$$\sum^{j-1}_{k=0}{\widehat{\gamma}_{kj} z_k}$$

���� [MathJax](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference) �ο�����ʹ�÷�����

### 15. ��ǿ�Ĵ����

֧����ʮһ�ֱ�����Ե��﷨��������ʾ���к���ʾ��

�Ǵ���ʾ����

```
$ sudo apt-get install vim-gnome
```

Python ʾ����

```python
@requires_authorization
class SomeClass:
    pass

if __name__ == &#39;__main__&#39;:
    # A comment
    print &#39;hello world&#39;
```

### 16. ����ͼ

```flow
st=&gt;start: Start
op=&gt;operation: Your Operation
cond=&gt;condition: Yes or No?
e=&gt;end

st-&gt;op-&gt;cond
cond(yes)-&gt;e
cond(no)-&gt;op
```

### 17. ����ͼ

```seq
Title: Here is a title
A->B: Normal line
B-->C: Dashed line
C->>D: Open arrow
D-->>A: Dashed open arrow
```

### 17. ����ͼ

```gantt
    title ��Ŀ��������
    section ��Ŀȷ��
        �������       :a1, 2016-06-22, 3d
        �����Ա���     :after a1, 5d
        ������֤       : 5d
    section ��Ŀʵʩ
        ��Ҫ���      :2016-07-05  , 5d
        ��ϸ���      :2016-07-08, 10d
        ����          :2016-07-15, 10d
        ����          :2016-07-22, 5d
    section ��������
        ����: 2d
        ����: 3d
```

### 18. PlantUML

#### PlantUML ����ͼ��
```plantuml
@startuml
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
@enduml
```
#### PlantUML ����ͼ��
```plantuml
@startuml
start
    :��ʼ;
partition ��˴���{
    :������;
    if(��ԱID?) then
        :����token;
    else
        :������Ϣ����Ҫע��/��;
    endif;
}
    if(token?) then
        :����������;
        else
        :����ע��󶨽���;
        endif;
stop
@enduml
```

�����﷨�ο���[PlantUML ����](https://plantuml.com/zh/)

### 19. Mermaid ����ͼ

```graphLR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

#### �����﷨�ο���[Mermaid ����ͼ�﷨�ο�](https://knsv.github.io/mermaid/#flowcharts-basic-syntax)

### 20. Mermaid ����ͼ

```sequence
    Alice->John: Hello John, how are you?
    loop every minute
        John-->Alice: Great!
    end
```

### 21. ���֧��

| ��Ŀ        | �۸�   |  ����  |
| --------   | -----:  | :----:  |
| �����     | \$1600 |   5     |
| �ֻ�        |   \$12   |   12   |
| ����        |    \$1    |  234  |

### 22. �������б�

���� 1
:   ���� 1�������һ���ɼ���ð�ź��ĸ����ɼ��Ŀո�

����� 2
:   ���Ǵ����Ķ��壨�����һ���ɼ���ð�ź��ĸ����ɼ��Ŀո�

        ����飨����а˸����ɼ��Ŀո�

### 23. �������� Todo �б�

ʹ�ô��� [ ] �� [x] ��δ��ɻ�����ɣ�����б��﷨׫дһ�����������б�����֧�����б�Ƕ���Լ�����Markdown�﷨�����磺

    - [ ] **Markdown ����**
        - [ ] ֧���� PDF ��ʽ�����ĸ�
    - [ ] **��������׼��**
        - [ ] ׼����������ҪЯ������Ʒ
        - [ ] ����ձ���˰�����Ʒ
        - [x] ��������ʯ����������һ�յĴ�Ʊ

��Ӧ��ʾ���´������� Todo �б�

- [ ] **Markdown ����**
    - [ ] ֧���� PDF ��ʽ�����ĸ�
- [ ] **��������׼��**
    - [ ] ׼����������ҪЯ������Ʒ
    - [ ] ����ձ���˰�����Ʒ
    - [x] ��������ʯ����������һ�յĴ�Ʊ

### 24. Html ��ǩ

֧���� Markdown �﷨��Ƕ�� `Html` ��ǩ��Ʃ�磬������� Html дһ���ݿ����еı��

<table>
    <tr>
        <th rowspan="2">ֵ����Ա</th>
        <th>����һ</th>
        <th>���ڶ�</th>
        <th>������</th>
    </tr>
    <tr>
        <td>��ǿ</td>
        <td>����</td>
        <td>��ƽ</td>
    </tr>
</table>

### 25. ����Ŀ¼

�ڶ�������д `[TOC]` ����ʾȫ�����ݵ�Ŀ¼�ṹ��

[TOC]

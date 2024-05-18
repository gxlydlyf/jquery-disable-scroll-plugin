# jQuery禁用滚动插件

[//]: # (这个“中文”不需要翻译)
**[中文](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/README_zh.md)**
|
**[English](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/README.md)**

这个插件可以禁用页面滚动功能，且不隐藏滚动条

# 依赖

必须先安装[jQuery](https://jquery.com/)
至少需要1.7.0版本

# 安装

## NPM

### 安装依赖

```shell
npm install jquery
```

### 安装本体

```shell
npm install jquery-disable-scroll-plugin
```

### 引入

```html

<script src="path/to/node_modules/jquery/dist/jquery.min.js"></script>
<script src="path/to/node_modules/jquery-disable-scroll-plugin/jquery.disable-scroll.min.js"></script>
```

## cdn

### unpkg

```html

<script src="https://unpkg.com/jquery@latest/dist/jquery.min.js"></script>
<script src="https://unpkg.com/jquery-disable-scroll-plugin@latest/jquery.disable-scroll.min.js"></script>
```

### 知乎镜像unpkg

```html

<script src="https://unpkg.zhimg.com/jquery@latest/dist/jquery.min.js"></script>
<script src="https://unpkg.zhimg.com/jquery-disable-scroll-plugin@latest/jquery.disable-scroll.min.js"></script>
```

### jsdelivr

```html

<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-disable-scroll-plugin@latest/jquery.disable-scroll.min.js"></script>
```

## 本地

### 下载jQuery

> https://jquery.com/download/

### 下载插件

> https://github.com/gxlydlyf/jquery-disable-scroll-plugin/releases/latest

### 引入

```html

<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.disable-scroll.min.js"></script>
```

# 使用方法

参数解析->[查看](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/JSDOC/JSDOC.md)

```javascript
var $element = $('#element');// 控制的元素
```

## 禁用/启用 滚动

### x和y

```javascript
// 启用滚动，任选其中一种方式
$element.EnableScroll();
$element.EnableScroll("xy");
$element.EnableScroll("all");
$element.ControlScroll(true);
$element.ControlScroll(true, "xy");
$element.ControlScroll(true, "all");

// 禁用滚动，任选其中一种方式
$element.DisableScroll();
$element.DisableScroll("xy");
$element.DisableScroll("all");
$element.ControlScroll(false);
$element.ControlScroll(false, "xy");
$element.ControlScroll(false, "all");
```

### x或y

```javascript
var direction;
direction = "x";// 需要设置x时
direction = "y";// 需要设置y时

// 启用滚动，任选其中一种方式
$element.EnableScroll(direction);
$element.ControlScroll(true, direction);

// 禁用滚动，任选其中一种方式
$element.DisableScroll(direction);
$element.ControlScroll(false, direction);
```

### id的应用

当所有id均被删除时，将可以滚动

```javascript
$element.ControlScroll(false, "x", "id_name");//禁用x轴，id名为“id_name”
```

```javascript
// 禁用x，添加x的id：id1和id2。禁用y，添加y的id：id1
$element.DisableScroll({
    x: ['id1', 'id2'],
    y: 'id1'
});
//等同于
$element.ControlScroll(false, {
    x: ['id1', 'id2'],
    y: 'id1'
});

// 禁用xy，添加xy的id：id1和id2
$element.DisableScroll("xy", ['id1', 'id2']);
```

#### 获取所有id

```javascript
$element.disableScrollId();//返回对象
```

```json
{
  "x": {
    "id1": true,
    "id2": true
  },
  "y": {
    "id1": true,
    "id": true
  }
}
```

### 参数转写

```javascript
$('#div').ControlScroll(
    {
        status: false,
        direction: 'x',
        id: 'id'
    }
);//禁用x轴，添加id：id
$('#div').DisableScroll(
    {
        status: false,
        direction: 'y',
        id: 'id'
    }
);//禁用y轴，添加id：id
$('#div').DisableScroll(
    {
        status: true,
        direction: 'y',
        id: 'id'
    }
);//启用y轴，删除id：id
```

### 获取禁用状态

```javascript
$element.disableScrollStatus();//返回对象
```

false为禁用状态，true为启用状态

```json
{
  "x": false,
  "y": true
}
```

## 修改默认值

### 查看默认配置

```javascript
jQuery.DisableScroll.defaults
```

```json
{
  "direction": "xy",
  "id": "default",
  "status": "disable"
}
```

### 修改

```javascript
jQuery.DisableScroll.direction = "x";
jQuery.DisableScroll.id = "id";
jQuery.DisableScroll.status = "enable";//适用于ControlScroll，也可以为bool值，true表示默认启用，false表示默认禁用
```

# 函数名冲突

## 描述

`noConflict` 函数用于处理插件名的冲突问题，确保插件在不同环境中能够正常运行。

## 参数

- `type` (String): 可选参数，指定处理类型，可选值为 'fn', 'fn-ext', 'fn-default', 'method'。如果未提供或不在可选范围内，则默认为 'method'。

## 返回值

- 如果处理类型是 'method'，则返回 `plugin` 对象。
- 如果处理类型是 'fn', 'fn-ext', 'fn-default'，则返回包含 `disable`, `control`, `enable` 方法的对象。
- 如果参数不在可选范围内，返回 `false`。

## 示例

### 处理类型为 'method' 的示例

```javascript
jQuery.NewName = jQuery.DisableScroll.noConflict('method');
//此后jQuery.NewName将等同于原先的jQuery.DisableScroll
```

### 处理类型为 'fn' 的示例

函数名包含有

```json
{
  "fn": [
    "controlScroll",
    "ctrlScroll",
    "disableScroll",
    "offScroll",
    "enableScroll",
    "onScroll",
    "ControlScroll",
    "Control_scroll",
    "control_scroll",
    "controlscroll",
    "CtrlScroll",
    "ctrl_scroll",
    "ctrlscroll",
    "DisableScroll",
    "Disable_scroll",
    "disable_scroll",
    "disablescroll",
    "OffScroll",
    "off_scroll",
    "offscroll",
    "enableScroll",
    "enable_scroll",
    "enable_scroll",
    "enablescroll",
    "OnScroll",
    "on_scroll",
    "onscroll"
  ]
}
```

```javascript

var names = jQuery.DisableScroll.noConflict('fn');
//赋值
jQuery.fn.newControl = names.control;
jQuery.fn.newDisable = names.disable;
jQuery.fn.newEnable = names.enable;
//使用
$element.newControl();//等同于原先$element.ControlScroll();
$element.newDisable();//等同于原先$element.DisableScroll();
$element.newEnable();//等同于原先$element.EnableScroll();
```

### 处理类型为 'fn-ext' 的示例

与处理类型为 'fn' 相似，
函数名包含有

```json
{
  "fn-ext": [
    "ControlScroll",
    "Control_scroll",
    "control_scroll",
    "controlscroll",
    "CtrlScroll",
    "ctrl_scroll",
    "ctrlscroll",
    "DisableScroll",
    "Disable_scroll",
    "disable_scroll",
    "disablescroll",
    "OffScroll",
    "off_scroll",
    "offscroll",
    "enableScroll",
    "enable_scroll",
    "enable_scroll",
    "enablescroll",
    "OnScroll",
    "on_scroll",
    "onscroll"
  ]
}
```

### 处理类型为 'fn-default' 的示例

与处理类型为 'fn' 相似，
函数名包含有

```json
{
  "fn-default": [
    "controlScroll",
    "ctrlScroll",
    "disableScroll",
    "offScroll",
    "enableScroll",
    "onScroll"
  ]
}
```

# 别名

|      原名       |                                                                                  别名                                                                                  |
|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| ControlScroll | ctrlScrool<br/>CtrlScroll<br/>ctrlscroll<br/>ctrl_scroll<br/>Ctrl_scroll<br/>controlScroll<br/>control_scroll<br/>Control_scroll<br/>ControlScroll<br/>controlscroll |
| DisableScroll |   offScrool<br/>OffScroll<br/>offscroll<br/>off_scroll<br/>Off_scroll<br/>disableScroll<br/>disable_scroll<br/>Disable_scroll<br/>DisableScroll<br/>disablescroll    |
| EnableScroll  |    onScroll<br/>OnScrolll<br/>onscrolll<br/>on_scrolll<br/>On_scrolll<br/>enableScrolll<br/>enable_scrolll<br/>Enable_scrolll<br/>EnableScrolll<br/>enablescroll     |

# 演示

下载项目之后打开**index.html**文件可以查看效果
或
[在此在线查看](https://gxlydlyf.github.io/jquery-disable-scroll-plugin/index.html)

# 兼容性

理论上可以兼容所有浏览器

# 建议与问题

均可以在[issues](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/issues)提出
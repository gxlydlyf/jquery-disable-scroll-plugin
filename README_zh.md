# jQuery禁用滚动插件

**[中文](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/README_zh.md)**
|
**[English](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/README.md)**


* [jQuery禁用滚动插件](#jquery禁用滚动插件)
* [使用方法](#使用方法)
	* [禁用/启用 滚动](#禁用启用-滚动)
		* [x和y](#x和y)
		* [x或y](#x或y)
		* [id的应用](#id的应用)
			* [获取所有id](#获取所有id)
		* [获取禁用状态](#获取禁用状态)
* [别名](#别名)
* [演示](#演示)

这个插件可以禁用页面滚动功能，且不隐藏滚动条

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

```javascript
$element.ControlScroll(false, "x", "id_name");//禁用x轴，id名为“id_name”
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

### 获取禁用状态

```javascript
$element.disableScrollStatus();//返回对象
```

false为禁用状态，true为启用状态

```json
{
  "x": false,
  "y": false
}
```

# 别名

|      原名       |                                                                别名                                                                 |
|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------:|
| ControlScroll | ctrlScrool<br/>CtrlScroll<br/>ctrlscroll<br/>ctrl_scroll<br/>controlScroll<br/>control_scroll<br/>ControlScroll<br/>controlscroll |
| DisableScroll |   offScrool<br/>OffScroll<br/>offscroll<br/>off_scroll<br/>disableScroll<br/>disable_scroll<br/>DisableScroll<br/>disablescroll   |
| EnableScroll  |    onScroll<br/>OnScrolll<br/>onscrolll<br/>on_scrolll<br/>enableScrolll<br/>enable_scrolll<br/>EnableScrolll<br/>enablescroll    |

# 演示
下载项目之后打开**index.html**文件可以查看效果
或
[在此在线查看](https://gxlydlyf.github.io/jquery-disable-scroll-plugin/index.html)
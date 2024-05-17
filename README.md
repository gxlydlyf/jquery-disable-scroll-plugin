# jQuery Disable Scroll Plugin

**[中文](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/README_zh.md)**
|
**[English](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/README.md)**

* [jQuery Disable Scroll Plugin](#jquery-disable-scroll-plugin)
* [Usage](#usage)
	* [Disable/Enable Scrolling](#disableenable-scrolling)
		* [x and y](#x-and-y)
		* [x or y](#x-or-y)
		* [Application with IDs](#application-with-ids)
			* [Get All IDs](#get-all-ids)
		* [Get Disable Status](#get-disable-status)
* [Aliases](#aliases)
* [Demo](#demo)

This plugin allows you to disable the scrolling functionality of a page without hiding the scrollbars.

# Usage

Parameter breakdown->[View](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/JSDOC/JSDOC.md)

```javascript
var $element = $('#element'); // Element to control
```

## Disable/Enable Scrolling

### x and y

```javascript
// Enable scrolling, choose one of the following ways
$element.EnableScroll();
$element.EnableScroll("xy");
$element.EnableScroll("all");
$element.ControlScroll(true);
$element.ControlScroll(true, "xy");
$element.ControlScroll(true, "all");

// Disable scrolling, choose one of the following ways
$element.DisableScroll();
$element.DisableScroll("xy");
$element.DisableScroll("all");
$element.ControlScroll(false);
$element.ControlScroll(false, "xy");
$element.ControlScroll(false, "all");
```

### x or y

```javascript
var direction;
direction = "x"; // When setting x
direction = "y"; // When setting y

// Enable scrolling, choose one of the following ways
$element.EnableScroll(direction);
$element.ControlScroll(true, direction);

// Disable scrolling, choose one of the following ways
$element.DisableScroll(direction);
$element.ControlScroll(false, direction);
```

### Application with IDs

```javascript
$element.ControlScroll(false, "x", "id_name"); // Disable x-axis, with ID "id_name"
```

#### Get All IDs

```javascript
$element.disableScrollId(); // Returns an object
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

### Get Disable Status

```javascript
$element.disableScrollStatus(); // Returns an object
```

False indicates disabled status, true indicates enabled status

```json
{
  "x": false,
  "y": false
}
```

# Aliases

| Original Name |                                                              Aliases                                                              |
|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------:|
| ControlScroll | ctrlScrool<br/>CtrlScroll<br/>ctrlscroll<br/>ctrl_scroll<br/>controlScroll<br/>control_scroll<br/>ControlScroll<br/>controlscroll |
| DisableScroll |   offScrool<br/>OffScroll<br/>offscroll<br/>off_scroll<br/>disableScroll<br/>disable_scroll<br/>DisableScroll<br/>disablescroll   |
| EnableScroll  |    onScroll<br/>OnScrolll<br/>onscrolll<br/>on_scrolll<br/>enableScrolll<br/>enable_scrolll<br/>EnableScrolll<br/>enablescroll    |

# Demo

After downloading the project, open the **index.html** file to see the effect
or
[View it online here](https://gxlydlyf.github.io/jquery-disable-scroll-plugin/index.html)
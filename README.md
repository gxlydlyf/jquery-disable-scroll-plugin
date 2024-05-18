# jQuery Disable Scroll Plugin

[//]: # (This section does not require translation)

**[中文](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/README_zh.md)**
|
**[English](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/README.md)**

This plugin allows you to disable page scrolling without hiding the scrollbars.

# Dependencies

You need to have [jQuery](https://jquery.com/) installed.
Version 1.7.0 or higher is required.

# Installation

## NPM

### Install dependencies

```shell
npm install jquery
```

### Install the plugin

```shell
npm install jquery-disable-scroll-plugin
```

### Include

```html

<script src="path/to/node_modules/jquery/dist/jquery.min.js"></script>
<script src="path/to/node_modules/jquery-disable-scroll-plugin/jquery.disable-scroll.min.js"></script>
```

## CDN

### unpkg

```html

<script src="https://unpkg.com/jquery@latest/dist/jquery.min.js"></script>
<script src="https://unpkg.com/jquery-disable-scroll-plugin@latest/jquery.disable-scroll.min.js"></script>
```

### Zhihu Mirror unpkg

```html

<script src="https://unpkg.zhimg.com/jquery@latest/dist/jquery.min.js"></script>
<script src="https://unpkg.zhimg.com/jquery-disable-scroll-plugin@latest/jquery.disable-scroll.min.js"></script>
```

### jsdelivr

```html

<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-disable-scroll-plugin@latest/jquery.disable-scroll.min.js"></script>
```

## Local

### Download jQuery

> https://jquery.com/download/

### Download the plugin

> https://github.com/gxlydlyf/jquery-disable-scroll-plugin/releases/latest

### Include

```html

<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.disable-scroll.min.js"></script>
```

# Usage

For parameter details, refer to [here](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/JSDOC/JSDOC.md).

```javascript
var $element = $('#element'); // Element to control
```

## Disable/Enable Scroll

### x and y

```javascript
// Enable scrolling, choose one of the following methods
$element.EnableScroll();
$element.EnableScroll("xy");
$element.EnableScroll("all");
$element.ControlScroll(true);
$element.ControlScroll(true, "xy");
$element.ControlScroll(true, "all");

// Disable scrolling, choose one of the following methods
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

// Enable scrolling, choose one of the following methods
$element.EnableScroll(direction);
$element.ControlScroll(true, direction);

// Disable scrolling, choose one of the following methods
$element.DisableScroll(direction);
$element.ControlScroll(false, direction);
```

### Application of IDs

Scrolling will be enabled when all IDs are removed.

```javascript
$element.ControlScroll(false, "x", "id_name"); // Disable x-axis with ID "id_name"
```

```javascript
// Disable x-axis with IDs 'id1' and 'id2', disable y-axis with ID 'id1'
$element.DisableScroll({
    x: ['id1', 'id2'],
    y: 'id1'
});
// Equivalent to
$element.ControlScroll(false, {
    x: ['id1', 'id2'],
    y: 'id1'
});

// Disable both axes with IDs 'id1' and 'id2'
$element.DisableScroll("xy", ['id1', 'id2']);
```

#### Get all IDs

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

### Parameter Rewriting

```javascript
$('#div').ControlScroll(
    {
        status: false,
        direction: 'x',
        id: 'id'
    }
); // Disable x-axis with ID 'id'
$('#div').DisableScroll(
    {
        status: false,
        direction: 'y',
        id: 'id'
    }
); // Disable y-axis with ID 'id'
$('#div').DisableScroll(
    {
        status: true,
        direction: 'y',
        id: 'id'
    }
); // Enable y-axis, remove ID 'id'
```

### Get Disable Status

```javascript
$element.disableScrollStatus(); // Returns an object
```

False indicates disabled status, true indicates enabled status.

```json
{
  "x": false,
  "y": true
}
```

## Modify Defaults

### View Default Configuration

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

### Modify

```javascript
jQuery.DisableScroll.direction = "x";
jQuery.DisableScroll.id = "id";
jQuery.DisableScroll.status = "enable"; // Applicable to ControlScroll, can also be a boolean value, true for default enabled, false for default disabled
```

# Function Name Conflict

## Description

The `noConflict` function is used to handle conflicts with plugin names, ensuring that the plugin can function properly in different environments.

## Parameters

- `type` (String): Optional parameter specifying the handling type, with possible values 'fn', 'fn-ext', 'fn-default', 'method'. If not provided or out of range, defaults to 'method'.

## Returns

- If the handling type is 'method', it returns the `plugin` object.
- If the handling type is 'fn', 'fn-ext', 'fn-default', it returns an object containing the `disable`, `control`, `enable` methods.
- If the parameter is out of range, it returns `false`.

## Examples

### Example with handling type 'method'

```javascript
jQuery.NewName = jQuery.DisableScroll.noConflict('method');
// jQuery.NewName will now be equivalent to the original jQuery.DisableScroll
```

### Example with handling type 'fn'

Function names include

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
// Assign
jQuery.fn.newControl = names.control;
jQuery.fn.newDisable = names.disable;
jQuery.fn.newEnable = names.enable;
// Usage
$element.newControl(); // Equivalent to $element.ControlScroll();
$element.newDisable(); // Equivalent to $element.DisableScroll();
$element.newEnable(); // Equivalent to $element.EnableScroll();
```

### Example with handling type 'fn-ext'

Similar to handling type 'fn',
Function names include

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

### Example with handling type 'fn-default'

Similar to handling type 'fn',
Function names include

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

# Aliases

| Original Name |                                                                  Aliases                                                                  |
|:-------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| ControlScroll | ctrlScrool<br/>CtrlScroll<br/>ctrlscroll<br/>ctrl_scroll<br/>Ctrl_scroll<br/>controlScroll<br/>control_scroll<br/>Control_scroll<br/>ControlScroll<br/>controlscroll |
| DisableScroll |   offScrool<br/>OffScroll<br/>offscroll<br/>off_scroll<br/>Off_scroll<br/>disableScroll<br/>disable_scroll<br/>Disable_scroll<br/>DisableScroll<br/>disablescroll    |
| EnableScroll  |    onScroll<br/>OnScrolll<br/>onscrolll<br/>on_scrolll<br/>On_scrolll<br/>enableScrolll<br/>enable_scrolll<br/>Enable_scrolll<br/>EnableScrolll<br/>enablescroll     |

# Demo

After downloading the project, open the **index.html** file to see the effect
or
[View it online here](https://gxlydlyf.github.io/jquery-disable-scroll-plugin/index.html)

# Compatibility

The plugin is theoretically compatible with all browsers.

# discuss

[Visit the forum](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/discussions)

# Suggestions and Issues

Feel free to raise any suggestions or issues on [GitHub Issues](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/issues)
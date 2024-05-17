# JSDOC

**[中文](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/JSDOC/JSDOC_zh.md)**
|
**[English](https://github.com/gxlydlyf/jquery-disable-scroll-plugin/blob/main/JSDOC/JSDOC.md)**


## ControlScroll

Function for controlling scrolling, used to set scroll status, direction, and ID.

### Parameters

- `status` (optional): Boolean, object, or array representing status, transcription, or direction.
- `direction` (optional): String or array representing direction or ID.
- `id` (optional): String or array of strings representing ID.

### Return Value

Returns a jQuery object.

### Examples

#### Default Values

By default, the parameters are as follows:

- Direction: "xy"
- ID: "default"
- Status: false

#### Status

- If the input is a boolean, it represents the status.
	- `false`: disable
	- `true`: enable
- If the input is an object and contains status, ID, or direction keys, the parameters will be transcribed.
	- `{status: false, direction: "xy", id: "default"}`
- If the input is an object and does not contain the above keys, it will be treated as a direction parameter.

#### Direction

- If the status parameter is treated as a direction parameter, it will be treated as an ID parameter.
- If the input is a string, the parameter is the direction to be set.
	- "xy"
- If the input is an array, each item in the array will be treated as the direction to be set.
	- `['x', 'y', 'horizontal', 'vertical']`
- If the input is an object, the key and value of the object are the corresponding direction and ID.
	- `{x: "id1", y: ["id2"], xy: ["id3", "id4"]}`

#### ID

- When the ID is empty and status is true, all IDs and corresponding listening functions will be cleared.
	- `""`, `0`, `false`, `{}`, `[]`, `undefined`, `null`
- If the input is a string, the parameter is the ID to be set.
	- "id"
- If the input is an array, each item in the array will be treated as the ID to be set.
	- `['id1', 'id2', 'id3', 'id4']`

## DisableScroll

Function to disable scrolling, used to set direction and ID.

### Parameters

- `direction` (optional): String or array representing direction.
- `id` (optional): String or array of strings representing ID.

### Return Value

Returns a jQuery object.

### Examples

#### Default Values

By default, the parameters are as follows:

- Direction: "xy"
- ID: "default"
- Status: false

#### Direction

- If the input is a string, the parameter is the direction to be set.
	- "xy"
- If the input is an array, each item in the array will be treated as the direction to be set.
	- `['x', 'y', 'horizontal', 'vertical']`
- If the input is an object, the key and value of the object are the corresponding direction and ID.
	- `{x: "id1", y: ["id2"], xy: ["id3", "id4"]}`

#### ID

- If the input is a string, the parameter is the ID to be set.
	- "id"
- If the input is an array, each item in the array will be treated as the ID to be set.
	- `['id1', 'id2', 'id3', 'id4']`

## EnableScroll

Function to enable scrolling, used to set direction and ID.

### Parameters

- `direction` (optional): String or array representing direction.
- `id` (optional): String or array of strings representing ID.

### Return Value

Returns a jQuery object.

### Examples

#### Default Values

By default, the parameters are as follows:

- Direction: "xy"
- ID: undefined
- Status: true

#### Direction

- If the input is a string, the parameter is the direction to be set.
	- "xy"
- If the input is an array, each item in the array will be treated as the direction to be set.
	- `['x', 'y', 'horizontal', 'vertical']`
- If the input is an object, the key and value of the object are the corresponding direction and ID.
	- `{x: "id1", y: ["id2"], xy: ["id3", "id4"]}`

#### ID

- When the ID is empty and status is true, all IDs and corresponding listening functions will be cleared.
	- `""`, `0`, `false`, `{}`, `[]`, `undefined`, `null`
- If the input is a string, the parameter is the ID to be set.
	- "id"
- If the input is an array, each item in the array will be treated as the ID to be set.
	- `['id1', 'id2', 'id3', 'id4']`

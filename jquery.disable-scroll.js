;(function ($) {
    "use strict";

    if (!$) {
        $ = {};
        $.extend = $.each = $.isArray = $.now = $.merge = function () {

        };
    } else {
        $ = ($);
    }

    var version = '1.0.1';
    var plugin = function () {
        return {
            version: version
        };
    };
    var extend = $.extend;
    var isObject = function (obj) {
        var class2type = {};
        var hasOwn = class2type.hasOwnProperty;
        var isWindow = function (obj) {
            /* jshint eqeqeq: false */
            return obj != null && obj === obj.window;
        }
        var key;

        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor property.
        // Make sure that DOM nodes and window objects don't pass through, as well
        if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
            return false;
        }

        try {

            // Not own constructor property must be Object
            if (obj.constructor &&
                !hasOwn.call(obj, "constructor") &&
                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {

            // IE8,9 Will throw exceptions on certain host objects #9897
            return false;
        }

        // Support: IE<9
        // Handle iteration over inherited properties before own properties.
        if (!{}.ownFirst) {
            for (key in obj) {
                if (1 + 1) {
                    return hasOwn.call(obj, key);
                }
            }
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        for (key in obj) {
        }

        return key === undefined || hasOwn.call(obj, key);
    };
    var each = $.each;
    var isArray = $.isArray;
    var isEmpty = function (variable) {
        if (typeof variable === 'string') {
            return (variable === '');
        }
        if (typeof variable === 'boolean') {
            return !variable;
        }
        if (typeof variable === 'number') {
            return (variable === 0);
        }
        if (typeof variable === 'function') {
            return true;
        }

        return $.isEmptyObject(variable);
    };
    var merge = function () {
        var args = {};
        for (var i = 0; i < arguments.length; i++) {
            args[i] = arguments[i];
        }

        var mergedArray = [];
        each(args, function (index, array) {
            mergedArray = $.merge(mergedArray, array);
        });
        return mergedArray;
    };
    var now = $.now;
    var fn = $.fn;
    var direction_ = 'direction';
    var id_ = 'id';
    var status_ = 'status';
    var scroll = 'scroll';
    var Scroll = 'Scroll';
    var disable = 'disable';
    var Disable = 'Disable';
    var enable = 'enable';
    var Enable = 'enable';
    var control = 'control';
    var Control = 'Control';
    var x = 'x';
    var y = 'y';
    var defaults = {
        direction: 'xy',
        id: 'default',
        status: 'disable'
    };
    var unique_id = function () {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        var id = now();

        each(Array(10), function () {
            id += '-' + S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4() + '-' + now();
        });

        return id;
    }
    var toLowerCase = function (string) {
        /*
        return string.replace(/[A-Z]/g, function (match) {
            return String.fromCharCode(match.charCodeAt(0) + 32);
        });
         */
        return String(string).toLowerCase();
    }
    var capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var has_value = function (value, array) {
        return $.inArray(value, array) !== -1;
    }
    var has_key = function (object, keys) {
        var exist = false;
        // 遍历键数组
        each(keys, function (index, key) {
            // 检查对象是否具有当前键
            if (key in object) {
                exist = true;
                return false;
            }
        });
        // 返回存在标志
        return exist;
    }
    var options = function () {
        return extend({}, defaults, plugin.defaults);
    }
    plugin.language = undefined;
    var language = function () {
        var language = false;
        try {
            language = plugin.language || navigator.language || navigator['userLanguage'];
        } catch (e) {

        }
        return language;
    };
    var error_message = function (message_name, replace) {
        var lang = toLowerCase(language());
        if (lang !== 'zh-cn') {
            lang = 'en';
        }
        return {
            'id': {
                'en': "The 'id'(value: " + replace + ") parameter must be a string and cannot have whitespace characters",
                'zh-cn': "id(值:“" + replace + "”)参数必须是字符串并且不能有空字符"
            },
            'direction': {
                'en': "The 'direction'(value: " + replace + ") parameter is incorrect, you can try: x or y or xy",
                'zh-cn': "direction(值: " + replace + ")参数不正确，您可尝试：x 或 y 或 xy"
            },
            'no_conflict': {
                'en': "Unable to remove jQuery.DisableScroll, please try removing it manually:\n",
                'zh-cn': "无法删除 jQuery.DisableScroll，请尝试手动删除：\n"
            },
            'jquery_version': {
                'en': "Not compatible with current jQuery(Current version: " + replace + "), please use version 1.7 or above",
                'zh-cn': "不兼容当前jQuery(当前版本: " + replace + ")，请使用1.7及以上的版本"
            },
            'no_jquery': {
                'en': "Requires jQuery",
                'zh-cn': "需要jQuery"
            }
        }[message_name][lang];
    };

    try {
        if (!($() instanceof window.jQuery)) {
        }
    } catch (e) {
        throw new Error(error_message('no_jquery'));
    }

    var jquery_version = $.fn.jquery;
    var jquery_version_obj = jquery_version.split('.');
    if (jquery_version_obj.length <= 1) {
        jquery_version_obj = [1, 0];
    }
    if (parseInt(jquery_version_obj[0]) < 1 || (parseInt(jquery_version_obj[0]) === 1 && parseInt(jquery_version_obj[1]) < 7)) {
        throw new Error(error_message("jquery_version", jquery_version));
    }

    var verify_id = unique_id();
    plugin.verify = verify_id;
    plugin.noConflict = function (type) {
        if (!has_value(type, ['fn', 'fn-ext', 'fn-default', 'method'])) {
            type = 'method';
        }
        if (type === 'method') {
            var error = function () {
                if (window.console && window.console.error) {
                    console.error(error_message("no_conflict") + "jQuery.NewDisableScroll = jQuery.DisableScroll;\njQuery.DisableScroll = undefined;");
                }
            }
            try {
                if ($.DisableScroll.verify === verify_id) {
                    $.DisableScroll = undefined;
                } else {
                    error();
                }
            } catch (e) {
                error();
            }
            return plugin;
        }
        var fn_disable = create_control(false);
        var fn_control = fn_disable;
        var fn_enable = create_control(true);
        var fn_all = {
            disable: fn_disable,
            control: fn_control,
            enable: fn_enable
        };
        if (type.indexOf("fn") === 0) {
            var each_names;

            if (type === 'fn') {
                each_names = merge([], fn_names);
            }
            if (type === 'fn-ext') {
                each_names = merge([], fn_ext_names);
            }
            if (type === 'fn-default') {
                each_names = merge([], fn_default_names);
            }
            each(each_names, function (index, name) {
                delete fn[name];
            });
            return fn_all;
        }
        return false;
    };
    plugin.defaults = extend({}, {}, defaults);

    var event_name = [
        "scroll",
        "mouseenter",
        "mouseover",
        "mouseout",
        "mousedown",
        "mouseup",
        "select",
        "paste",
        "focus",
        "touchstart",
        "touchmove",
        "touchend"
    ];
    event_name = merge(
        event_name,
        ("onwheel" in window.document || window.document['documentMode'] >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"]
    );
    var direction_rewrite_x = [x, '横', '水平', 'horizontal', 'h'];
    var direction_rewrite_y = [y, '纵', '竖', '垂直', 'vertical', 'v', 'vert'];
    var direction_rewrite_xy = ['all', '所有', '全部', '尽是', '统统', '一切', '皆是', '皆', '都', '全', '通通', '通', '芸芸', '芸', '个个', '万事', '整', '佥', '通共', '均是', '均'];
    each(direction_rewrite_x, function (index, xName) {
        each(direction_rewrite_y, function (index, yName) {
            each(['and', '和', '&', '&&', '', ' '], function (index, and) {
                var and2 = ' ' + and + ' ';
                each(['轴', 'axis', ''], function (index, extName) {
                    var push = function (prefix, suffix) {
                        var x = prefix + xName + suffix;
                        var y = prefix + yName + suffix;
                        direction_rewrite_xy.push(
                            x + and + y,
                            y + and + x,
                            y + and2 + x,
                            y + and2 + x
                        );
                    }
                    each([' ' + extName, '-' + extName, extName], function (index, suffix) {
                        push('', suffix);
                    });
                    each([extName + ' ', extName + '-', extName], function (index, prefix) {
                        push(prefix, '');
                    });
                });
            });
        })
    });
    // console.log(direction_rewrite_xy);
    var direction_rewrite = function (direction) {
        if (isEmpty(direction)) {
            direction = options().direction;
        }
        var _direction = String(direction);
        _direction = toLowerCase(_direction);

        if (has_value(_direction, direction_rewrite_x)) {
            _direction = [x];
        } else if (has_value(_direction, direction_rewrite_y)) {
            _direction = [y];
        } else if (has_value(_direction, direction_rewrite_xy)) {
            _direction = [x, y];
        } else {
            throw new Error(error_message("direction", direction));
        }
        return _direction;
    };
    // var status_rewrite_disable = [false, 'false', 'disable', 'dis', 'd'];
    var status_rewrite_enable = [true, 'true', 'enable', 'en', 'e'];
    var status_rewrite = function (status) {
        if (isEmpty(status)) {
            status = options().status;
        }
        status = has_value(toLowerCase(status), status_rewrite_enable);
        return status;
    };
    var check_id = function (id) {
        if (isEmpty(id)) {
            id = options()[id_];
        }
        var _id = String(id);
        if ((typeof _id !== 'string') || !_id || /\s/.test(_id)) {
            throw new Error(error_message(id_, id));
        }
        return id;
    };
    var create_element_event_id = function (This) {
        var element = This;
        return {
            init: function () {
                var event_id = element.disable_scroll_plugin_event_id;
                if (!isObject(event_id)) {
                    event_id = {};
                }
                if (!(x in event_id)) {
                    event_id.x = {};
                }
                if (!(y in event_id)) {
                    event_id.y = {};
                }
                event_id = {
                    x: event_id[x] || {},
                    y: event_id[y] || {}
                };
                if (!isObject(event_id.x)) {
                    event_id.x = {};
                }
                if (!isObject(event_id.y)) {
                    event_id.y = {};
                }
                element.disable_scroll_plugin_event_id = event_id;
                return event_id;
            },
            set: function (direction, key, value) {
                var event_id = this.init();
                if (direction === x) {
                    if (value) {
                        event_id.x[key] = value;
                    } else {
                        delete event_id.x[key];
                    }
                }
                if (direction === y) {
                    if (value) {
                        event_id.y[key] = value;
                    } else {
                        delete event_id.y[key];
                    }
                }
            },
            get: function (direction, key) {
                var event_id = this.init();
                if (direction === x) {
                    return event_id.x[key];
                }
                if (direction === y) {
                    return event_id.y[key];
                }
            }
        };
    };
    var event_name_class = '.disable-scroll';
    var event_name_class_prefix = event_name_class + '-';
    var control_scroll = function (element, status, direction, id) {
        var This = element;
        var $This = $(element);
        if (isObject(status)) {
            var parameters = extend({}, defaults, status);
            status = parameters[status_];
            direction = parameters[direction_];
            id = parameters[id_];
        }
        status = status_rewrite(status);
        if (isObject(direction)) {
            if (has_key(direction, [status_, id_, direction_])) {
                control_scroll($This, extend(defaults, direction));
            } else {
                each(direction, function (direction, id) {
                    direction = direction_rewrite(direction);
                    control_scroll($This, status, direction, id);
                });
            }
            return This;
        } else if (isArray(direction)) {
            each(direction, function (index, direction) {
                direction = direction_rewrite(direction).join('');
                control_scroll($This, status, direction, id);
            });
            return This;
        } else {
            direction = direction_rewrite(direction);
        }
        if (isEmpty(id) && status) {
            id = 0;
        } else {
            if (isArray(id)) {
                each(id, function (index, id) {
                    id = check_id(id);
                    control_scroll($This, status, direction, id);
                });
                return This;
            }
            id = check_id(id);
        }
        each(This, function () {
            var element_event_id = create_element_event_id(this);
            var $element = $(this);
            var element = this;
            var listening_function;
            if (!status) {// 禁用
                element.disable_scroll_plugin_scroll_left = $element.scrollLeft();
                element.disable_scroll_plugin_scroll_top = $element.scrollTop();
                listening_function = function (position_name) {
                    var save_key = 'disable_scroll_plugin_scroll_' + position_name;
                    var assign_key = 'scroll' + capitalizeFirstLetter(position_name);
                    $element[assign_key](parseFloat(element[save_key]) || 0);
                    element[save_key] = $element[assign_key]();
                };
            }
            each(direction, function (index, direction) {
                if (has_value(direction, [x, y])) {
                    if (status) {// 启用
                        if (isEmpty(id)) {
                            element_event_id.init()[direction] = {};
                            $element.off(event_name_class_prefix + direction);
                        }
                        element_event_id.set(direction, id, false);
                        $element.off(event_name_class_prefix + direction + '-' + id);
                    } else {// 禁用
                        each(event_name, function (index, current_event_name) {
                            var position_name = {x: 'left', y: 'top'}[direction];
                            element_event_id.set(direction, id, true);
                            $element.on(
                                current_event_name + event_name_class_prefix + direction + '-' + id +
                                event_name_class_prefix + direction +
                                event_name_class,
                                function () {
                                    listening_function(position_name);
                                }
                            );
                        });
                    }
                }
            });
        });
        return This;
    }
    var fn_control_scroll_default_names = [control + Scroll, 'ctrl' + Scroll];
    var fn_control_scroll_ext_names = [
        Control + Scroll, Control + '_' + scroll, control + '_' + scroll, control + scroll,
        'Ctrl' + Scroll, 'ctrl_' + scroll, 'ctrl' + scroll
    ];
    var fn_control_scroll_names = merge(fn_control_scroll_default_names, fn_control_scroll_ext_names);

    var fn_disable_scroll_default_names = [disable + Scroll, 'off' + Scroll];
    var fn_disable_scroll_ext_names = [
        Disable + Scroll, Disable + '_' + scroll, disable + '_' + scroll, disable + scroll,
        'Off' + Scroll, 'off_' + scroll, 'off' + scroll
    ];
    var fn_disable_scroll_names = merge(fn_disable_scroll_default_names, fn_disable_scroll_ext_names);

    var fn_enable_scroll_default_names = [enable + Scroll, 'on' + Scroll];
    var fn_enable_scroll_ext_names = [
        Enable + Scroll, Enable + '_' + scroll, enable + '_' + scroll, enable + scroll,
        'On' + Scroll, 'on_' + scroll, 'on' + scroll
    ];
    var fn_enable_scroll_names = merge(fn_enable_scroll_default_names, fn_enable_scroll_ext_names);

    var fn_default_names = merge(
        fn_control_scroll_default_names,
        fn_disable_scroll_default_names,
        fn_enable_scroll_default_names
    );
    var fn_ext_names = merge(
        fn_control_scroll_ext_names,
        fn_disable_scroll_ext_names,
        fn_enable_scroll_ext_names
    );
    var fn_names = merge(fn_default_names, fn_ext_names);

    each(fn_control_scroll_names, function (index, name) {
        fn[name] = function (status, direction, id) {
            if (!status) {
                status = false;
            }
            if (typeof status === 'object') {
                if (has_key(status, [status_, id_, direction_])) {
                    status = extend({}, defaults, status);
                }
            }
            return control_scroll($(this), status, direction, id);
        };
    });
    var create_control = function (default_status) {
        if (!default_status) {
            default_status = false;
        }
        return function (direction, id) {
            return control_scroll(this, default_status, direction, id);
        };
    }
    each(fn_disable_scroll_names, function (index, name) {
        fn[name] = create_control();
    });
    each(fn_enable_scroll_names, function (index, name) {
        fn[name] = create_control(true);
    });

    var disable_scroll_id = function ($element) {
        var id_list = [];
        each($element, function () {
            // var $element = $(this);
            id_list.push(extend({}, create_element_event_id(this).init()));
        });
        if (id_list.length <= 1) {
            id_list = id_list[0] || {};
        }
        return id_list;
    };

    $.fn.disableScrollId = function () {
        return disable_scroll_id($(this));
    };

    $.fn.disableScrollStatus = function () {
        var id = disable_scroll_id($(this));
        return {
            x: isEmpty(id.x),
            y: isEmpty(id.y)
        };
    };
    $.DisableScroll = plugin;

    //Code completion
    (function CodeCompletion() {
        /**
         * @param {boolean | Object | Array} [status] - status or transcribe or direction
         * @param {string | Array} [direction] - direction or id
         * @param {string | string[]} [id] - id
         * @return {jQuery} - jQuery object
         * @desc ███▶default value(默认值):
         * @desc  ┏ direction: "xy"
         * @desc  ┣ id: "default"
         * @desc  ┗ status: false
         * @desc ███▶status:
         * @desc  ┏ If input is a boolean, it represents the status.
         * @desc  ┣ 如果输入是布尔值，则表示状态。
         * @desc  ┣ false: disable
         * @desc  ┗ true: enable
         * @desc  ┏ If the input is an Object, and it contains status or id or direction keys, the parameters will be transcribed.
         * @desc  ┣ 如果输入是Object，且其中包含 status或id或direction 键，则会转写其中参数。
         * @desc  ┗ {status: false, direction: "xy", id: "default"}
         * @desc  ┏ If the input is an Object and does not contain the above keys, it will be treated as a direction parameter.
         * @desc  ┗ 如果输入是Object，且不包含上述键，则会被视为direction参数。
         * @desc ███▶direction:
         * @desc  ┏ If the status parameter is treated as a direction parameter, it will be treated as an id parameter.
         * @desc  ┗ 如果status参数被视为direction参数，则会被视为id参数。
         * @desc  ┏ If the input is a String, the parameter is the direction to be set.
         * @desc  ┣ 如果输入是String，参数则为要设置的方向。
         * @desc  ┗ "xy"
         * @desc  ┏ If the input is an Array, each item in the array will be treated as the direction to be set.
         * @desc  ┣ 如果输入是Array，则数组每一项会被视为要设置的方向。
         * @desc  ┗ ['x', 'y', '横', '纵']
         * @desc  ┏ If the input is an Object, the key and value of the object are the corresponding direction and id.
         * @desc  ┣ 如果输入是Object，则对象的键和值为对应的方向和id。
         * @desc  ┗ {x: "id1", y: ["id2"], xy: ["id3", "id4"]}
         * @desc ███▶id:
         * @desc  ┏ When id is empty and status is true, all ids and corresponding listening functions will be cleared.
         * @desc  ┣ 当id为空且status为true时，将会清除所有id及对应的监听函数。
         * @desc  ┗ "", 0, false, {}, [], undefined, null
         * @desc  ┏ If the input is a String, the parameter is the id to be set.
         * @desc  ┣ 如果输入是String，参数则为要设置的id。
         * @desc  ┗ "id"
         * @desc  ┏ If the input is an Array, each item in the array will be treated as the id to be set.
         * @desc  ┣ 如果输入是Array，则数组每一项会被视为要设置的id。
         * @desc  ┗ ['id1', 'id2', 'id3', 'id4']
         */
        var ControlScroll = function (status, direction, id) {
        };
        /**
         * @param {string | Array} [direction] - direction
         * @param {string | string[]} [id] - id
         * @return {jQuery} - jQuery object
         * @desc ███▶default value(默认值):
         * @desc  ┏ direction: "xy"
         * @desc  ┣ id: "default"
         * @desc  ┗ status: false
         * @desc ███▶direction:
         * @desc  ┏ If the input is a String, the parameter is the direction to be set.
         * @desc  ┣ 如果输入是String，参数则为要设置的方向。
         * @desc  ┗ "xy"
         * @desc  ┏ If the input is an Array, each item in the array will be treated as the direction to be set.
         * @desc  ┣ 如果输入是Array，则数组每一项会被视为要设置的方向。
         * @desc  ┗ ['x', 'y', '横', '纵']
         * @desc  ┏ If the input is an Object, the key and value of the object are the corresponding direction and id.
         * @desc  ┣ 如果输入是Object，则对象的键和值为对应的方向和id。
         * @desc  ┗ {x: "id1", y: ["id2"], xy: ["id3", "id4"]}
         * @desc ███▶id:
         * @desc  ┏ If the input is a String, the parameter is the id to be set.
         * @desc  ┣ 如果输入是String，参数则为要设置的id。
         * @desc  ┗ "id"
         * @desc  ┏ If the input is an Array, each item in the array will be treated as the id to be set.
         * @desc  ┣ 如果输入是Array，则数组每一项会被视为要设置的id。
         * @desc  ┗ ['id1', 'id2', 'id3', 'id4']
         */
        var DisableScroll = function (direction, id) {
        };
        /**
         * @param {string | Array} [direction] - direction
         * @param {string | string[]} [id] - id
         * @return {jQuery} - jQuery object
         * @desc ███▶default value(默认值):
         * @desc  ┏ direction: "xy"
         * @desc  ┣ id: undefined
         * @desc  ┗ status: true
         * @desc ███▶direction:。
         * @desc  ┏ If the input is a String, the parameter is the direction to be set.
         * @desc  ┣ 如果输入是String，参数则为要设置的方向。
         * @desc  ┗ "xy"
         * @desc  ┏ If the input is an Array, each item in the array will be treated as the direction to be set.
         * @desc  ┣ 如果输入是Array，则数组每一项会被视为要设置的方向。
         * @desc  ┗ ['x', 'y', '横', '纵']
         * @desc  ┏ If the input is an Object, the key and value of the object are the corresponding direction and id.
         * @desc  ┣ 如果输入是Object，则对象的键和值为对应的方向和id。
         * @desc  ┗ {x: "id1", y: ["id2"], xy: ["id3", "id4"]}
         * @desc ███▶id:
         * @desc  ┏ When id is empty and status is true, all ids and corresponding listening functions will be cleared.
         * @desc  ┣ 当id为空时，将会清除所有id及对应的监听函数。
         * @desc  ┗ "", 0, false, {}, [], undefined, null
         * @desc  ┏ If the input is a String, the parameter is the id to be set.
         * @desc  ┣ 如果输入是String，参数则为要设置的id。
         * @desc  ┗ "id"
         * @desc  ┏ If the input is an Array, each item in the array will be treated as the id to be set.
         * @desc  ┣ 如果输入是Array，则数组每一项会被视为要设置的id。
         * @desc  ┗ ['id1', 'id2', 'id3', 'id4']
         */
        var EnableScroll = function (direction, id) {
        };

        var cc = {};//code_completion
        cc.ctrlScrool = cc.CtrlScroll = cc.ctrlscroll = cc.ctrl_scroll =
            cc.controlScroll = cc.control_scroll = cc.ControlScroll = cc.controlscroll = ControlScroll;

        cc.offScrool = cc.OffScroll = cc.offscroll = cc.off_scroll =
            cc.disableScroll = cc.disable_scroll = cc.DisableScroll = cc.disablescroll = DisableScroll;

        cc.onScrool = cc.OnScroll = cc.onscroll = cc.on_scroll =
            cc.enableScroll = cc.enable_scroll = cc.EnableScroll = cc.enablescroll = EnableScroll;
    })();
})(window.jQuery);
import { i as __toCommonJS, n as __esmMin, r as __exportAll } from "./rolldown-runtime-CL6CfywC.js";
import { r as importShared } from "./_virtual___federation_fn_import-ChPcBYrR.js";
import { t as require_jsx_runtime } from "./jsx-runtime-DedqF-TD.js";
//#region node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
//#endregion
//#region node_modules/lodash-es/_root.js
/** Detect free variable `self`. */
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function("return this")();
//#endregion
//#region node_modules/lodash-es/_Symbol.js
/** Built-in value references. */
var Symbol$1 = root.Symbol;
//#endregion
//#region node_modules/lodash-es/_arrayMap.js
/**
* A specialized version of `_.map` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the new mapped array.
*/
function arrayMap(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
//#endregion
//#region node_modules/lodash-es/isArray.js
/**
* Checks if `value` is classified as an `Array` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array, else `false`.
* @example
*
* _.isArray([1, 2, 3]);
* // => true
*
* _.isArray(document.body.children);
* // => false
*
* _.isArray('abc');
* // => false
*
* _.isArray(_.noop);
* // => false
*/
var isArray$2 = Array.isArray;
//#endregion
//#region node_modules/lodash-es/_getRawTag.js
/** Used for built-in method references. */
var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$3.hasOwnProperty;
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString$1 = objectProto$3.toString;
/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	var isOwn = hasOwnProperty$5.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
	else delete value[symToStringTag$1];
	return result;
}
//#endregion
//#region node_modules/lodash-es/_objectToString.js
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString = Object.prototype.toString;
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
//#endregion
//#region node_modules/lodash-es/_baseGetTag.js
/** `Object#toString` result references. */
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
//#endregion
//#region node_modules/lodash-es/isObjectLike.js
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
//#endregion
//#region node_modules/lodash-es/isSymbol.js
/** `Object#toString` result references. */
var symbolTag = "[object Symbol]";
/**
* Checks if `value` is classified as a `Symbol` primitive or object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
* @example
*
* _.isSymbol(Symbol.iterator);
* // => true
*
* _.isSymbol('abc');
* // => false
*/
function isSymbol(value) {
	return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
//#endregion
//#region node_modules/lodash-es/_baseToString.js
/** Used as references for various `Number` constants. */
var INFINITY = Infinity;
/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
/**
* The base implementation of `_.toString` which doesn't convert nullish
* values to empty strings.
*
* @private
* @param {*} value The value to process.
* @returns {string} Returns the string.
*/
function baseToString(value) {
	if (typeof value == "string") return value;
	if (isArray$2(value)) return arrayMap(value, baseToString) + "";
	if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
//#endregion
//#region node_modules/lodash-es/toString.js
/**
* Converts `value` to a string. An empty string is returned for `null`
* and `undefined` values. The sign of `-0` is preserved.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
* @example
*
* _.toString(null);
* // => ''
*
* _.toString(-0);
* // => '-0'
*
* _.toString([1, 2, 3]);
* // => '1,2,3'
*/
function toString(value) {
	return value == null ? "" : baseToString(value);
}
//#endregion
//#region node_modules/lodash-es/_baseSlice.js
/**
* The base implementation of `_.slice` without an iteratee call guard.
*
* @private
* @param {Array} array The array to slice.
* @param {number} [start=0] The start position.
* @param {number} [end=array.length] The end position.
* @returns {Array} Returns the slice of `array`.
*/
function baseSlice(array, start, end) {
	var index = -1, length = array.length;
	if (start < 0) start = -start > length ? 0 : length + start;
	end = end > length ? length : end;
	if (end < 0) end += length;
	length = start > end ? 0 : end - start >>> 0;
	start >>>= 0;
	var result = Array(length);
	while (++index < length) result[index] = array[index + start];
	return result;
}
//#endregion
//#region node_modules/lodash-es/_castSlice.js
/**
* Casts `array` to a slice if it's needed.
*
* @private
* @param {Array} array The array to inspect.
* @param {number} start The start position.
* @param {number} [end=array.length] The end position.
* @returns {Array} Returns the cast slice.
*/
function castSlice(array, start, end) {
	var length = array.length;
	end = end === void 0 ? length : end;
	return !start && end >= length ? array : baseSlice(array, start, end);
}
//#endregion
//#region node_modules/lodash-es/_hasUnicode.js
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
/**
* Checks if `string` contains Unicode symbols.
*
* @private
* @param {string} string The string to inspect.
* @returns {boolean} Returns `true` if a symbol is found, else `false`.
*/
function hasUnicode(string) {
	return reHasUnicode.test(string);
}
//#endregion
//#region node_modules/lodash-es/_asciiToArray.js
/**
* Converts an ASCII `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function asciiToArray(string) {
	return string.split("");
}
//#endregion
//#region node_modules/lodash-es/_unicodeToArray.js
/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff", rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
	rsNonAstral,
	rsRegional,
	rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
	rsNonAstral + rsCombo + "?",
	rsCombo,
	rsRegional,
	rsSurrPair,
	rsAstral
].join("|") + ")";
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
/**
* Converts a Unicode `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function unicodeToArray(string) {
	return string.match(reUnicode) || [];
}
//#endregion
//#region node_modules/lodash-es/_stringToArray.js
/**
* Converts `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function stringToArray(string) {
	return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
//#endregion
//#region node_modules/lodash-es/_createCaseFirst.js
/**
* Creates a function like `_.lowerFirst`.
*
* @private
* @param {string} methodName The name of the `String` case method to use.
* @returns {Function} Returns the new case function.
*/
function createCaseFirst(methodName) {
	return function(string) {
		string = toString(string);
		var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
		var chr = strSymbols ? strSymbols[0] : string.charAt(0);
		var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
		return chr[methodName]() + trailing;
	};
}
//#endregion
//#region node_modules/lodash-es/upperFirst.js
/**
* Converts the first character of `string` to upper case.
*
* @static
* @memberOf _
* @since 4.0.0
* @category String
* @param {string} [string=''] The string to convert.
* @returns {string} Returns the converted string.
* @example
*
* _.upperFirst('fred');
* // => 'Fred'
*
* _.upperFirst('FRED');
* // => 'FRED'
*/
var upperFirst = createCaseFirst("toUpperCase");
//#endregion
//#region node_modules/lodash-es/capitalize.js
/**
* Converts the first character of `string` to upper case and the remaining
* to lower case.
*
* @static
* @memberOf _
* @since 3.0.0
* @category String
* @param {string} [string=''] The string to capitalize.
* @returns {string} Returns the capitalized string.
* @example
*
* _.capitalize('FRED');
* // => 'Fred'
*/
function capitalize(string) {
	return upperFirst(toString(string).toLowerCase());
}
//#endregion
//#region node_modules/lodash-es/compact.js
/**
* Creates an array with all falsey values removed. The values `false`, `null`,
* `0`, `-0`, `0n`, `""`, `undefined`, and `NaN` are falsy.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Array
* @param {Array} array The array to compact.
* @returns {Array} Returns the new array of filtered values.
* @example
*
* _.compact([0, 1, false, 2, '', 3]);
* // => [1, 2, 3]
*/
function compact(array) {
	var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	while (++index < length) {
		var value = array[index];
		if (value) result[resIndex++] = value;
	}
	return result;
}
//#endregion
//#region node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var objectProto$2 = Object.prototype;
/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$2);
}
//#endregion
//#region node_modules/lodash-es/_overArg.js
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
//#endregion
//#region node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg(Object.keys, Object);
//#endregion
//#region node_modules/lodash-es/_baseKeys.js
/** Used to check objects for own properties. */
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
/**
* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeys(object) {
	if (!isPrototype(object)) return nativeKeys(object);
	var result = [];
	for (var key in Object(object)) if (hasOwnProperty$4.call(object, key) && key != "constructor") result.push(key);
	return result;
}
//#endregion
//#region node_modules/lodash-es/isObject.js
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject$2(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
//#endregion
//#region node_modules/lodash-es/isFunction.js
/** `Object#toString` result references. */
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
/**
* Checks if `value` is classified as a `Function` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a function, else `false`.
* @example
*
* _.isFunction(_);
* // => true
*
* _.isFunction(/abc/);
* // => false
*/
function isFunction$2(value) {
	if (!isObject$2(value)) return false;
	var tag = baseGetTag(value);
	return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
//#endregion
//#region node_modules/lodash-es/_coreJsData.js
/** Used to detect overreaching core-js shims. */
var coreJsData = root["__core-js_shared__"];
//#endregion
//#region node_modules/lodash-es/_isMasked.js
/** Used to detect methods masquerading as native. */
var maskSrcKey = function() {
	var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
	return uid ? "Symbol(src)_1." + uid : "";
}();
/**
* Checks if `func` has its source masked.
*
* @private
* @param {Function} func The function to check.
* @returns {boolean} Returns `true` if `func` is masked, else `false`.
*/
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
//#endregion
//#region node_modules/lodash-es/_toSource.js
/** Used to resolve the decompiled source of functions. */
var funcToString$1 = Function.prototype.toString;
/**
* Converts `func` to its source code.
*
* @private
* @param {Function} func The function to convert.
* @returns {string} Returns the source code.
*/
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$1.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
//#endregion
//#region node_modules/lodash-es/_baseIsNative.js
/**
* Used to match `RegExp`
* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
*/
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */
var funcProto = Function.prototype, objectProto$1 = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$1.hasOwnProperty;
/** Used to detect if a method is native. */
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
* The base implementation of `_.isNative` without bad shim checks.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a native function,
*  else `false`.
*/
function baseIsNative(value) {
	if (!isObject$2(value) || isMasked(value)) return false;
	return (isFunction$2(value) ? reIsNative : reIsHostCtor).test(toSource(value));
}
//#endregion
//#region node_modules/lodash-es/_getValue.js
/**
* Gets the value at `key` of `object`.
*
* @private
* @param {Object} [object] The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
//#endregion
//#region node_modules/lodash-es/_getNative.js
/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
	var value = getValue(object, key);
	return baseIsNative(value) ? value : void 0;
}
//#endregion
//#region node_modules/lodash-es/_DataView.js
var DataView = getNative(root, "DataView");
//#endregion
//#region node_modules/lodash-es/_Map.js
var Map$1 = getNative(root, "Map");
//#endregion
//#region node_modules/lodash-es/_Promise.js
var Promise$1 = getNative(root, "Promise");
//#endregion
//#region node_modules/lodash-es/_Set.js
var Set$1 = getNative(root, "Set");
//#endregion
//#region node_modules/lodash-es/_WeakMap.js
var WeakMap$1 = getNative(root, "WeakMap");
//#endregion
//#region node_modules/lodash-es/_getTag.js
/** `Object#toString` result references. */
var mapTag$2 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$2 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
/**
* Gets the `toStringTag` of `value`.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
var getTag = baseGetTag;
if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$2 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$2 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) getTag = function(value) {
	var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
	if (ctorString) switch (ctorString) {
		case dataViewCtorString: return dataViewTag$1;
		case mapCtorString: return mapTag$2;
		case promiseCtorString: return promiseTag;
		case setCtorString: return setTag$2;
		case weakMapCtorString: return weakMapTag$1;
	}
	return result;
};
var _getTag_default = getTag;
//#endregion
//#region node_modules/lodash-es/_baseIsArguments.js
/** `Object#toString` result references. */
var argsTag$1 = "[object Arguments]";
/**
* The base implementation of `_.isArguments`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*/
function baseIsArguments(value) {
	return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
//#endregion
//#region node_modules/lodash-es/isArguments.js
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto.hasOwnProperty;
/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
* Checks if `value` is likely an `arguments` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*  else `false`.
* @example
*
* _.isArguments(function() { return arguments; }());
* // => true
*
* _.isArguments([1, 2, 3]);
* // => false
*/
var isArguments = baseIsArguments(function() {
	return arguments;
}()) ? baseIsArguments : function(value) {
	return isObjectLike(value) && hasOwnProperty$2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
//#endregion
//#region node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
//#endregion
//#region node_modules/lodash-es/isArrayLike.js
/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike$1(value) {
	return value != null && isLength(value.length) && !isFunction$2(value);
}
//#endregion
//#region node_modules/lodash-es/stubFalse.js
/**
* This method returns `false`.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {boolean} Returns `false`.
* @example
*
* _.times(2, _.stubFalse);
* // => [false, false]
*/
function stubFalse() {
	return false;
}
//#endregion
//#region node_modules/lodash-es/isBuffer.js
/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
/** Built-in value references. */
var Buffer = freeModule$1 && freeModule$1.exports === freeExports$1 ? root.Buffer : void 0;
/**
* Checks if `value` is a buffer.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
* @example
*
* _.isBuffer(new Buffer(2));
* // => true
*
* _.isBuffer(new Uint8Array(2));
* // => false
*/
var isBuffer = (Buffer ? Buffer.isBuffer : void 0) || stubFalse;
//#endregion
//#region node_modules/lodash-es/_baseIsTypedArray.js
/** `Object#toString` result references. */
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
* The base implementation of `_.isTypedArray` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
*/
function baseIsTypedArray(value) {
	return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
//#endregion
//#region node_modules/lodash-es/_baseUnary.js
/**
* The base implementation of `_.unary` without support for storing metadata.
*
* @private
* @param {Function} func The function to cap arguments for.
* @returns {Function} Returns the new capped function.
*/
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
//#endregion
//#region node_modules/lodash-es/_nodeUtil.js
/** Detect free variable `exports`. */
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
/** Detect free variable `process` from Node.js. */
var freeProcess = freeModule && freeModule.exports === freeExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */
var nodeUtil = function() {
	try {
		var types = freeModule && freeModule.require && freeModule.require("util").types;
		if (types) return types;
		return freeProcess && freeProcess.binding && freeProcess.binding("util");
	} catch (e) {}
}();
//#endregion
//#region node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
* Checks if `value` is classified as a typed array.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
* @example
*
* _.isTypedArray(new Uint8Array);
* // => true
*
* _.isTypedArray([]);
* // => false
*/
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
//#endregion
//#region node_modules/lodash-es/isEmpty.js
/** `Object#toString` result references. */
var mapTag = "[object Map]", setTag = "[object Set]";
/** Used to check objects for own properties. */
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
/**
* Checks if `value` is an empty object, collection, map, or set.
*
* Objects are considered empty if they have no own enumerable string keyed
* properties.
*
* Array-like values such as `arguments` objects, arrays, buffers, strings, or
* jQuery-like collections are considered empty if they have a `length` of `0`.
* Similarly, maps and sets are considered empty if they have a `size` of `0`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is empty, else `false`.
* @example
*
* _.isEmpty(null);
* // => true
*
* _.isEmpty(true);
* // => true
*
* _.isEmpty(1);
* // => true
*
* _.isEmpty([1, 2, 3]);
* // => false
*
* _.isEmpty({ 'a': 1 });
* // => false
*/
function isEmpty(value) {
	if (value == null) return true;
	if (isArrayLike$1(value) && (isArray$2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
	var tag = _getTag_default(value);
	if (tag == mapTag || tag == setTag) return !value.size;
	if (isPrototype(value)) return !baseKeys(value).length;
	for (var key in value) if (hasOwnProperty$1.call(value, key)) return false;
	return true;
}
//#endregion
//#region src/common/utils/strings.ts
function getFallbackString(value) {
	return value.replace(/[^a-zA-Z0-9\s]/g, "").split(" ").map((item) => item.slice(0, 1).toUpperCase()).join("");
}
//#endregion
//#region src/common/utils/urlUtils.ts
/**
* Determines if the given string is a search query rather than a URL.
* @param {string} input - The input string to check
* @returns {boolean} True if the input appears to be a search query, false if it's likely a URL
*/
function isSearchQuery(input) {
	if (!input) return false;
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return true;
	if (/^https?:\/\//i.test(trimmedInput)) return false;
	if (/^(?:localhost|127(?:\.\d{1,3}){3}|\[::1\])(?::\d+)?$/i.test(trimmedInput)) return false;
	if (/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/.*)?$/.test(trimmedInput)) return false;
	if (/^www\./i.test(trimmedInput)) return false;
	if (/[+\-"'(){}[\]]/.test(trimmedInput) || /\b(and|or|not)\b/i.test(trimmedInput)) return true;
	if (!/\./.test(trimmedInput)) return true;
	return true;
}
/**
* Formats a web address, optionally detecting if it's a search query.
* @param {string} address - The address to format.
* @param {boolean} [detectSearchQuery] - Whether to detect if it's a search query.
* @returns {string} The formatted address.
*/
function formatWebAddress(address, detectSearchQuery) {
	if (!address) return "";
	if (detectSearchQuery && isSearchQuery(address)) return `https://google.com/search?q=${encodeURIComponent(address)}`;
	const protocolRegex = /^(?:https?:\/\/|ftp:\/\/|www\.)/i;
	if (/^(?:localhost|127(?:\.\d{1,3}){3}|\[::1\])(?::\d+)?$/i.test(address)) {
		if (!address.match(/^https?:\/\//i)) return "http://" + address;
		return address;
	}
	let formattedAddress = address;
	if (formattedAddress.match(/^(?:https?:\/\/)?www\./i)) formattedAddress = formattedAddress.replace(/^(https?:\/\/)?www\./i, "$1");
	formattedAddress = formattedAddress.replace(/\/$/, "");
	if (protocolRegex.test(address)) {
		if (address.startsWith("www.") && !address.match(/^https?:\/\//i)) return "https://" + formattedAddress;
		return formattedAddress;
	} else return "https://" + formattedAddress;
}
//#endregion
//#region node_modules/redux/dist/redux.mjs
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
`${/* @__PURE__ */ randomString()}`, `${/* @__PURE__ */ randomString()}`;
function isPlainObject$2(obj) {
	if (typeof obj !== "object" || obj === null) return false;
	let proto = obj;
	while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
	return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function isAction(action) {
	return isPlainObject$2(action) && "type" in action && typeof action.type === "string";
}
//#endregion
//#region node_modules/immer/dist/immer.mjs
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
function die(error, ...args) {
	throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
var O$2 = Object;
var getPrototypeOf = O$2.getPrototypeOf;
var CONSTRUCTOR = "constructor";
var PROTOTYPE = "prototype";
var CONFIGURABLE = "configurable";
var ENUMERABLE = "enumerable";
var WRITABLE = "writable";
var VALUE = "value";
var isDraft = (value) => !!value && !!value[DRAFT_STATE];
function isDraftable(value) {
	if (!value) return false;
	return isPlainObject$1(value) || isArray$1(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = O$2[PROTOTYPE][CONSTRUCTOR].toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject$1(value) {
	if (!value || !isObjectish(value)) return false;
	const proto = getPrototypeOf(value);
	if (proto === null || proto === O$2[PROTOTYPE]) return true;
	const Ctor = O$2.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
	if (Ctor === Object) return true;
	if (!isFunction$1(Ctor)) return false;
	let ctorString = cachedCtorStrings.get(Ctor);
	if (ctorString === void 0) {
		ctorString = Function.toString.call(Ctor);
		cachedCtorStrings.set(Ctor, ctorString);
	}
	return ctorString === objectCtorString;
}
function each$1(obj, iter, strict = true) {
	if (getArchtype(obj) === 0) (strict ? Reflect.ownKeys(obj) : O$2.keys(obj)).forEach((key) => {
		iter(key, obj[key], obj);
	});
	else obj.forEach((entry, index) => iter(index, entry, obj));
}
function getArchtype(thing) {
	const state = thing[DRAFT_STATE];
	return state ? state.type_ : isArray$1(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
var has = (thing, prop, type = getArchtype(thing)) => type === 2 ? thing.has(prop) : O$2[PROTOTYPE].hasOwnProperty.call(thing, prop);
var get = (thing, prop, type = getArchtype(thing)) => type === 2 ? thing.get(prop) : thing[prop];
var set = (thing, propOrOldValue, value, type = getArchtype(thing)) => {
	if (type === 2) thing.set(propOrOldValue, value);
	else if (type === 3) thing.add(value);
	else thing[propOrOldValue] = value;
};
function is$1(x, y) {
	if (x === y) return x !== 0 || 1 / x === 1 / y;
	else return x !== x && y !== y;
}
var isArray$1 = Array.isArray;
var isMap = (target) => target instanceof Map;
var isSet = (target) => target instanceof Set;
var isObjectish = (target) => typeof target === "object";
var isFunction$1 = (target) => typeof target === "function";
var isBoolean$1 = (target) => typeof target === "boolean";
function isArrayIndex(value) {
	const n = +value;
	return Number.isInteger(n) && String(n) === value;
}
var latest = (state) => state.copy_ || state.base_;
var getFinalValue = (state) => state.modified_ ? state.copy_ : state.base_;
function shallowCopy(base, strict) {
	if (isMap(base)) return new Map(base);
	if (isSet(base)) return new Set(base);
	if (isArray$1(base)) return Array[PROTOTYPE].slice.call(base);
	const isPlain = isPlainObject$1(base);
	if (strict === true || strict === "class_only" && !isPlain) {
		const descriptors = O$2.getOwnPropertyDescriptors(base);
		delete descriptors[DRAFT_STATE];
		let keys = Reflect.ownKeys(descriptors);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			const desc = descriptors[key];
			if (desc[WRITABLE] === false) {
				desc[WRITABLE] = true;
				desc[CONFIGURABLE] = true;
			}
			if (desc.get || desc.set) descriptors[key] = {
				[CONFIGURABLE]: true,
				[WRITABLE]: true,
				[ENUMERABLE]: desc[ENUMERABLE],
				[VALUE]: base[key]
			};
		}
		return O$2.create(getPrototypeOf(base), descriptors);
	} else {
		const proto = getPrototypeOf(base);
		if (proto !== null && isPlain) return { ...base };
		const obj = O$2.create(proto);
		return O$2.assign(obj, base);
	}
}
function freeze(obj, deep = false) {
	if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
	if (getArchtype(obj) > 1) O$2.defineProperties(obj, {
		set: dontMutateMethodOverride,
		add: dontMutateMethodOverride,
		clear: dontMutateMethodOverride,
		delete: dontMutateMethodOverride
	});
	O$2.freeze(obj);
	if (deep) each$1(obj, (_key, value) => {
		freeze(value, true);
	}, false);
	return obj;
}
function dontMutateFrozenCollections() {
	die(2);
}
var dontMutateMethodOverride = { [VALUE]: dontMutateFrozenCollections };
function isFrozen(obj) {
	if (obj === null || !isObjectish(obj)) return true;
	return O$2.isFrozen(obj);
}
var PluginMapSet = "MapSet";
var PluginPatches = "Patches";
var PluginArrayMethods = "ArrayMethods";
var plugins = {};
function getPlugin(pluginKey) {
	const plugin = plugins[pluginKey];
	if (!plugin) die(0, pluginKey);
	return plugin;
}
var isPluginLoaded = (pluginKey) => !!plugins[pluginKey];
var currentScope;
var getCurrentScope = () => currentScope;
var createScope = (parent_, immer_) => ({
	drafts_: [],
	parent_,
	immer_,
	canAutoFreeze_: true,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0,
	arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods) ? getPlugin(PluginArrayMethods) : void 0
});
function usePatchesInScope(scope, patchListener) {
	if (patchListener) {
		scope.patchPlugin_ = getPlugin(PluginPatches);
		scope.patches_ = [];
		scope.inversePatches_ = [];
		scope.patchListener_ = patchListener;
	}
}
function revokeScope(scope) {
	leaveScope(scope);
	scope.drafts_.forEach(revokeDraft);
	scope.drafts_ = null;
}
function leaveScope(scope) {
	if (scope === currentScope) currentScope = scope.parent_;
}
var enterScope = (immer2) => currentScope = createScope(currentScope, immer2);
function revokeDraft(draft) {
	const state = draft[DRAFT_STATE];
	if (state.type_ === 0 || state.type_ === 1) state.revoke_();
	else state.revoked_ = true;
}
function processResult(result, scope) {
	scope.unfinalizedDrafts_ = scope.drafts_.length;
	const baseDraft = scope.drafts_[0];
	if (result !== void 0 && result !== baseDraft) {
		if (baseDraft[DRAFT_STATE].modified_) {
			revokeScope(scope);
			die(4);
		}
		if (isDraftable(result)) result = finalize(scope, result);
		const { patchPlugin_ } = scope;
		if (patchPlugin_) patchPlugin_.generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope);
	} else result = finalize(scope, baseDraft);
	maybeFreeze(scope, result, true);
	revokeScope(scope);
	if (scope.patches_) scope.patchListener_(scope.patches_, scope.inversePatches_);
	return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value) {
	if (isFrozen(value)) return value;
	const state = value[DRAFT_STATE];
	if (!state) return handleValue(value, rootScope.handledSet_, rootScope);
	if (!isSameScope(state, rootScope)) return value;
	if (!state.modified_) return state.base_;
	if (!state.finalized_) {
		const { callbacks_ } = state;
		if (callbacks_) while (callbacks_.length > 0) callbacks_.pop()(rootScope);
		generatePatchesAndFinalize(state, rootScope);
	}
	return state.copy_;
}
function maybeFreeze(scope, value, deep = false) {
	if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) freeze(value, deep);
}
function markStateFinalized(state) {
	state.finalized_ = true;
	state.scope_.unfinalizedDrafts_--;
}
var isSameScope = (state, rootScope) => state.scope_ === rootScope;
var EMPTY_LOCATIONS_RESULT = [];
function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
	const parentCopy = latest(parent);
	const parentType = parent.type_;
	if (originalKey !== void 0) {
		if (get(parentCopy, originalKey, parentType) === draftValue) {
			set(parentCopy, originalKey, finalizedValue, parentType);
			return;
		}
	}
	if (!parent.draftLocations_) {
		const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
		each$1(parentCopy, (key, value) => {
			if (isDraft(value)) {
				const keys = draftLocations.get(value) || [];
				keys.push(key);
				draftLocations.set(value, keys);
			}
		});
	}
	const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
	for (const location of locations) set(parentCopy, location, finalizedValue, parentType);
}
function registerChildFinalizationCallback(parent, child, key) {
	parent.callbacks_.push(function childCleanup(rootScope) {
		const state = child;
		if (!state || !isSameScope(state, rootScope)) return;
		rootScope.mapSetPlugin_?.fixSetContents(state);
		const finalizedValue = getFinalValue(state);
		updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
		generatePatchesAndFinalize(state, rootScope);
	});
}
function generatePatchesAndFinalize(state, rootScope) {
	if (state.modified_ && !state.finalized_ && (state.type_ === 3 || state.type_ === 1 && state.allIndicesReassigned_ || (state.assigned_?.size ?? 0) > 0)) {
		const { patchPlugin_ } = rootScope;
		if (patchPlugin_) {
			const basePath = patchPlugin_.getPath(state);
			if (basePath) patchPlugin_.generatePatches_(state, basePath, rootScope);
		}
		markStateFinalized(state);
	}
}
function handleCrossReference(target, key, value) {
	const { scope_ } = target;
	if (isDraft(value)) {
		const state = value[DRAFT_STATE];
		if (isSameScope(state, scope_)) state.callbacks_.push(function crossReferenceCleanup() {
			prepareCopy(target);
			updateDraftInParent(target, value, getFinalValue(state), key);
		});
	} else if (isDraftable(value)) target.callbacks_.push(function nestedDraftCleanup() {
		const targetCopy = latest(target);
		if (target.type_ === 3) {
			if (targetCopy.has(value)) handleValue(value, scope_.handledSet_, scope_);
		} else if (get(targetCopy, key, target.type_) === value) {
			if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) handleValue(get(target.copy_, key, target.type_), scope_.handledSet_, scope_);
		}
	});
}
function handleValue(target, handledSet, rootScope) {
	if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) return target;
	if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) return target;
	handledSet.add(target);
	each$1(target, (key, value) => {
		if (isDraft(value)) {
			const state = value[DRAFT_STATE];
			if (isSameScope(state, rootScope)) {
				set(target, key, getFinalValue(state), target.type_);
				markStateFinalized(state);
			}
		} else if (isDraftable(value)) handleValue(value, handledSet, rootScope);
	});
	return target;
}
function createProxyProxy(base, parent) {
	const baseIsArray = isArray$1(base);
	const state = {
		type_: baseIsArray ? 1 : 0,
		scope_: parent ? parent.scope_ : getCurrentScope(),
		modified_: false,
		finalized_: false,
		assigned_: void 0,
		parent_: parent,
		base_: base,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: false,
		callbacks_: void 0
	};
	let target = state;
	let traps = objectTraps;
	if (baseIsArray) {
		target = [state];
		traps = arrayTraps;
	}
	const { revoke, proxy } = Proxy.revocable(target, traps);
	state.draft_ = proxy;
	state.revoke_ = revoke;
	return [proxy, state];
}
var objectTraps = {
	get(state, prop) {
		if (prop === DRAFT_STATE) return state;
		let arrayPlugin = state.scope_.arrayMethodsPlugin_;
		const isArrayWithStringProp = state.type_ === 1 && typeof prop === "string";
		if (isArrayWithStringProp) {
			if (arrayPlugin?.isArrayOperationMethod(prop)) return arrayPlugin.createMethodInterceptor(state, prop);
		}
		const source = latest(state);
		if (!has(source, prop, state.type_)) return readPropFromProto(state, source, prop);
		const value = source[prop];
		if (state.finalized_ || !isDraftable(value)) return value;
		if (isArrayWithStringProp && state.operationMethod && arrayPlugin?.isMutatingArrayMethod(state.operationMethod) && isArrayIndex(prop)) return value;
		if (value === peek(state.base_, prop)) {
			prepareCopy(state);
			const childKey = state.type_ === 1 ? +prop : prop;
			const childDraft = createProxy(state.scope_, value, state, childKey);
			return state.copy_[childKey] = childDraft;
		}
		return value;
	},
	has(state, prop) {
		return prop in latest(state);
	},
	ownKeys(state) {
		return Reflect.ownKeys(latest(state));
	},
	set(state, prop, value) {
		const desc = getDescriptorFromProto(latest(state), prop);
		if (desc?.set) {
			desc.set.call(state.draft_, value);
			return true;
		}
		if (!state.modified_) {
			const current2 = peek(latest(state), prop);
			const currentState = current2?.[DRAFT_STATE];
			if (currentState && currentState.base_ === value) {
				state.copy_[prop] = value;
				state.assigned_.set(prop, false);
				return true;
			}
			if (is$1(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_))) return true;
			prepareCopy(state);
			markChanged(state);
		}
		if (state.copy_[prop] === value && (value !== void 0 || prop in state.copy_) || Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
		state.copy_[prop] = value;
		state.assigned_.set(prop, true);
		handleCrossReference(state, prop, value);
		return true;
	},
	deleteProperty(state, prop) {
		prepareCopy(state);
		if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
			state.assigned_.set(prop, false);
			markChanged(state);
		} else state.assigned_.delete(prop);
		if (state.copy_) delete state.copy_[prop];
		return true;
	},
	getOwnPropertyDescriptor(state, prop) {
		const owner = latest(state);
		const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
		if (!desc) return desc;
		return {
			[WRITABLE]: true,
			[CONFIGURABLE]: state.type_ !== 1 || prop !== "length",
			[ENUMERABLE]: desc[ENUMERABLE],
			[VALUE]: owner[prop]
		};
	},
	defineProperty() {
		die(11);
	},
	getPrototypeOf(state) {
		return getPrototypeOf(state.base_);
	},
	setPrototypeOf() {
		die(12);
	}
};
var arrayTraps = {};
for (let key in objectTraps) {
	let fn = objectTraps[key];
	arrayTraps[key] = function() {
		const args = arguments;
		args[0] = args[0][0];
		return fn.apply(this, args);
	};
}
arrayTraps.deleteProperty = function(state, prop) {
	return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
	return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
	const state = draft[DRAFT_STATE];
	return (state ? latest(state) : draft)[prop];
}
function readPropFromProto(state, source, prop) {
	const desc = getDescriptorFromProto(source, prop);
	return desc ? VALUE in desc ? desc[VALUE] : desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
	if (!(prop in source)) return void 0;
	let proto = getPrototypeOf(source);
	while (proto) {
		const desc = Object.getOwnPropertyDescriptor(proto, prop);
		if (desc) return desc;
		proto = getPrototypeOf(proto);
	}
}
function markChanged(state) {
	if (!state.modified_) {
		state.modified_ = true;
		if (state.parent_) markChanged(state.parent_);
	}
}
function prepareCopy(state) {
	if (!state.copy_) {
		state.assigned_ = /* @__PURE__ */ new Map();
		state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
	}
}
var Immer2 = class {
	constructor(config) {
		this.autoFreeze_ = true;
		this.useStrictShallowCopy_ = false;
		this.useStrictIteration_ = false;
		/**
		* The `produce` function takes a value and a "recipe function" (whose
		* return value often depends on the base state). The recipe function is
		* free to mutate its first argument however it wants. All mutations are
		* only ever applied to a __copy__ of the base state.
		*
		* Pass only a function to create a "curried producer" which relieves you
		* from passing the recipe function every time.
		*
		* Only plain objects and arrays are made mutable. All other objects are
		* considered uncopyable.
		*
		* Note: This function is __bound__ to its `Immer` instance.
		*
		* @param {any} base - the initial state
		* @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
		* @param {Function} patchListener - optional function that will be called with all the patches produced here
		* @returns {any} a new state, or the initial state if nothing was modified
		*/
		this.produce = (base, recipe, patchListener) => {
			if (isFunction$1(base) && !isFunction$1(recipe)) {
				const defaultBase = recipe;
				recipe = base;
				const self = this;
				return function curriedProduce(base2 = defaultBase, ...args) {
					return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
				};
			}
			if (!isFunction$1(recipe)) die(6);
			if (patchListener !== void 0 && !isFunction$1(patchListener)) die(7);
			let result;
			if (isDraftable(base)) {
				const scope = enterScope(this);
				const proxy = createProxy(scope, base, void 0);
				let hasError = true;
				try {
					result = recipe(proxy);
					hasError = false;
				} finally {
					if (hasError) revokeScope(scope);
					else leaveScope(scope);
				}
				usePatchesInScope(scope, patchListener);
				return processResult(result, scope);
			} else if (!base || !isObjectish(base)) {
				result = recipe(base);
				if (result === void 0) result = base;
				if (result === NOTHING) result = void 0;
				if (this.autoFreeze_) freeze(result, true);
				if (patchListener) {
					const p = [];
					const ip = [];
					getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
						patches_: p,
						inversePatches_: ip
					});
					patchListener(p, ip);
				}
				return result;
			} else die(1, base);
		};
		this.produceWithPatches = (base, recipe) => {
			if (isFunction$1(base)) return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
			let patches, inversePatches;
			return [
				this.produce(base, recipe, (p, ip) => {
					patches = p;
					inversePatches = ip;
				}),
				patches,
				inversePatches
			];
		};
		if (isBoolean$1(config?.autoFreeze)) this.setAutoFreeze(config.autoFreeze);
		if (isBoolean$1(config?.useStrictShallowCopy)) this.setUseStrictShallowCopy(config.useStrictShallowCopy);
		if (isBoolean$1(config?.useStrictIteration)) this.setUseStrictIteration(config.useStrictIteration);
	}
	createDraft(base) {
		if (!isDraftable(base)) die(8);
		if (isDraft(base)) base = current(base);
		const scope = enterScope(this);
		const proxy = createProxy(scope, base, void 0);
		proxy[DRAFT_STATE].isManual_ = true;
		leaveScope(scope);
		return proxy;
	}
	finishDraft(draft, patchListener) {
		const state = draft && draft[DRAFT_STATE];
		if (!state || !state.isManual_) die(9);
		const { scope_: scope } = state;
		usePatchesInScope(scope, patchListener);
		return processResult(void 0, scope);
	}
	/**
	* Pass true to automatically freeze all copies created by Immer.
	*
	* By default, auto-freezing is enabled.
	*/
	setAutoFreeze(value) {
		this.autoFreeze_ = value;
	}
	/**
	* Pass true to enable strict shallow copy.
	*
	* By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
	*/
	setUseStrictShallowCopy(value) {
		this.useStrictShallowCopy_ = value;
	}
	/**
	* Pass false to use faster iteration that skips non-enumerable properties
	* but still handles symbols for compatibility.
	*
	* By default, strict iteration is enabled (includes all own properties).
	*/
	setUseStrictIteration(value) {
		this.useStrictIteration_ = value;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(base, patches) {
		let i;
		for (i = patches.length - 1; i >= 0; i--) {
			const patch = patches[i];
			if (patch.path.length === 0 && patch.op === "replace") {
				base = patch.value;
				break;
			}
		}
		if (i > -1) patches = patches.slice(i + 1);
		const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
		if (isDraft(base)) return applyPatchesImpl(base, patches);
		return this.produce(base, (draft) => applyPatchesImpl(draft, patches));
	}
};
function createProxy(rootScope, value, parent, key) {
	const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent) : createProxyProxy(value, parent);
	(parent?.scope_ ?? getCurrentScope()).drafts_.push(draft);
	state.callbacks_ = parent?.callbacks_ ?? [];
	state.key_ = key;
	if (parent && key !== void 0) registerChildFinalizationCallback(parent, state, key);
	else state.callbacks_.push(function rootDraftCleanup(rootScope2) {
		rootScope2.mapSetPlugin_?.fixSetContents(state);
		const { patchPlugin_ } = rootScope2;
		if (state.modified_ && patchPlugin_) patchPlugin_.generatePatches_(state, [], rootScope2);
	});
	return draft;
}
function current(value) {
	if (!isDraft(value)) die(10, value);
	return currentImpl(value);
}
function currentImpl(value) {
	if (!isDraftable(value) || isFrozen(value)) return value;
	const state = value[DRAFT_STATE];
	let copy;
	let strict = true;
	if (state) {
		if (!state.modified_) return state.base_;
		state.finalized_ = true;
		copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
		strict = state.scope_.immer_.shouldUseStrictIteration();
	} else copy = shallowCopy(value, true);
	each$1(copy, (key, childValue) => {
		set(copy, key, currentImpl(childValue));
	}, strict);
	if (state) state.finalized_ = false;
	return copy;
}
var produce = new Immer2().produce;
typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
function createAction(type, prepareAction) {
	function actionCreator(...args) {
		if (prepareAction) {
			let prepared = prepareAction(...args);
			if (!prepared) throw new Error(formatProdErrorMessage(0));
			return {
				type,
				payload: prepared.payload,
				..."meta" in prepared && { meta: prepared.meta },
				..."error" in prepared && { error: prepared.error }
			};
		}
		return {
			type,
			payload: args[0]
		};
	}
	actionCreator.toString = () => `${type}`;
	actionCreator.type = type;
	actionCreator.match = (action) => isAction(action) && action.type === type;
	return actionCreator;
}
function freezeDraftable(val) {
	return isDraftable(val) ? produce(val, () => {}) : val;
}
function getOrInsertComputed(map, key, compute) {
	if (map.has(key)) return map.get(key);
	return map.set(key, compute(key)).get(key);
}
function executeReducerBuilderCallback(builderCallback) {
	const actionsMap = {};
	const actionMatchers = [];
	let defaultCaseReducer;
	const builder = {
		addCase(typeOrActionCreator, reducer) {
			const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
			if (!type) throw new Error(formatProdErrorMessage(28));
			if (type in actionsMap) throw new Error(formatProdErrorMessage(29));
			actionsMap[type] = reducer;
			return builder;
		},
		addAsyncThunk(asyncThunk, reducers) {
			if (reducers.pending) actionsMap[asyncThunk.pending.type] = reducers.pending;
			if (reducers.rejected) actionsMap[asyncThunk.rejected.type] = reducers.rejected;
			if (reducers.fulfilled) actionsMap[asyncThunk.fulfilled.type] = reducers.fulfilled;
			if (reducers.settled) actionMatchers.push({
				matcher: asyncThunk.settled,
				reducer: reducers.settled
			});
			return builder;
		},
		addMatcher(matcher, reducer) {
			actionMatchers.push({
				matcher,
				reducer
			});
			return builder;
		},
		addDefaultCase(reducer) {
			defaultCaseReducer = reducer;
			return builder;
		}
	};
	builderCallback(builder);
	return [
		actionsMap,
		actionMatchers,
		defaultCaseReducer
	];
}
function isStateFunction(x) {
	return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
	let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
	let getInitialState;
	if (isStateFunction(initialState)) getInitialState = () => freezeDraftable(initialState());
	else {
		const frozenInitialState = freezeDraftable(initialState);
		getInitialState = () => frozenInitialState;
	}
	function reducer(state = getInitialState(), action) {
		let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({ matcher }) => matcher(action)).map(({ reducer: reducer2 }) => reducer2)];
		if (caseReducers.filter((cr) => !!cr).length === 0) caseReducers = [finalDefaultCaseReducer];
		return caseReducers.reduce((previousState, caseReducer) => {
			if (caseReducer) if (isDraft(previousState)) {
				const result = caseReducer(previousState, action);
				if (result === void 0) return previousState;
				return result;
			} else if (!isDraftable(previousState)) {
				const result = caseReducer(previousState, action);
				if (result === void 0) {
					if (previousState === null) return previousState;
					throw Error("A case reducer on a non-draftable value must not return undefined");
				}
				return result;
			} else return produce(previousState, (draft) => {
				return caseReducer(draft, action);
			});
			return previousState;
		}, state);
	}
	reducer.getInitialState = getInitialState;
	return reducer;
}
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function getType(slice, actionKey) {
	return `${slice}/${actionKey}`;
}
function buildCreateSlice({ creators } = {}) {
	const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
	return function createSlice2(options) {
		const { name, reducerPath = name } = options;
		if (!name) throw new Error(formatProdErrorMessage(11));
		const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
		const reducerNames = Object.keys(reducers);
		const context = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		};
		const contextMethods = {
			addCase(typeOrActionCreator, reducer2) {
				const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
				if (!type) throw new Error(formatProdErrorMessage(12));
				if (type in context.sliceCaseReducersByType) throw new Error(formatProdErrorMessage(13));
				context.sliceCaseReducersByType[type] = reducer2;
				return contextMethods;
			},
			addMatcher(matcher, reducer2) {
				context.sliceMatchers.push({
					matcher,
					reducer: reducer2
				});
				return contextMethods;
			},
			exposeAction(name2, actionCreator) {
				context.actionCreators[name2] = actionCreator;
				return contextMethods;
			},
			exposeCaseReducer(name2, reducer2) {
				context.sliceCaseReducersByName[name2] = reducer2;
				return contextMethods;
			}
		};
		reducerNames.forEach((reducerName) => {
			const reducerDefinition = reducers[reducerName];
			const reducerDetails = {
				reducerName,
				type: getType(name, reducerName),
				createNotation: typeof options.reducers === "function"
			};
			if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
			else handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
		});
		function buildReducer() {
			const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
			const finalCaseReducers = {
				...extraReducers,
				...context.sliceCaseReducersByType
			};
			return createReducer(options.initialState, (builder) => {
				for (let key in finalCaseReducers) builder.addCase(key, finalCaseReducers[key]);
				for (let sM of context.sliceMatchers) builder.addMatcher(sM.matcher, sM.reducer);
				for (let m of actionMatchers) builder.addMatcher(m.matcher, m.reducer);
				if (defaultCaseReducer) builder.addDefaultCase(defaultCaseReducer);
			});
		}
		const selectSelf = (state) => state;
		const injectedSelectorCache = /* @__PURE__ */ new Map();
		const injectedStateCache = /* @__PURE__ */ new WeakMap();
		let _reducer;
		function reducer(state, action) {
			if (!_reducer) _reducer = buildReducer();
			return _reducer(state, action);
		}
		function getInitialState() {
			if (!_reducer) _reducer = buildReducer();
			return _reducer.getInitialState();
		}
		function makeSelectorProps(reducerPath2, injected = false) {
			function selectSlice(state) {
				let sliceState = state[reducerPath2];
				if (typeof sliceState === "undefined") {
					if (injected) sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
				}
				return sliceState;
			}
			function getSelectors(selectState = selectSelf) {
				return getOrInsertComputed(getOrInsertComputed(injectedSelectorCache, injected, () => /* @__PURE__ */ new WeakMap()), selectState, () => {
					const map = {};
					for (const [name2, selector] of Object.entries(options.selectors ?? {})) map[name2] = wrapSelector(selector, selectState, () => getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
					return map;
				});
			}
			return {
				reducerPath: reducerPath2,
				getSelectors,
				get selectors() {
					return getSelectors(selectSlice);
				},
				selectSlice
			};
		}
		const slice = {
			name,
			reducer,
			actions: context.actionCreators,
			caseReducers: context.sliceCaseReducersByName,
			getInitialState,
			...makeSelectorProps(reducerPath),
			injectInto(injectable, { reducerPath: pathOpt, ...config } = {}) {
				const newReducerPath = pathOpt ?? reducerPath;
				injectable.inject({
					reducerPath: newReducerPath,
					reducer
				}, config);
				return {
					...slice,
					...makeSelectorProps(newReducerPath, true)
				};
			}
		};
		return slice;
	};
}
function wrapSelector(selector, selectState, getInitialState, injected) {
	function wrapper(rootState, ...args) {
		let sliceState = selectState(rootState);
		if (typeof sliceState === "undefined") {
			if (injected) sliceState = getInitialState();
		}
		return selector(sliceState, ...args);
	}
	wrapper.unwrapped = selector;
	return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
	function asyncThunk(payloadCreator, config) {
		return {
			_reducerDefinitionType: "asyncThunk",
			payloadCreator,
			...config
		};
	}
	asyncThunk.withTypes = () => asyncThunk;
	return {
		reducer(caseReducer) {
			return Object.assign({ [caseReducer.name](...args) {
				return caseReducer(...args);
			} }[caseReducer.name], { _reducerDefinitionType: "reducer" });
		},
		preparedReducer(prepare, reducer) {
			return {
				_reducerDefinitionType: "reducerWithPrepare",
				prepare,
				reducer
			};
		},
		asyncThunk
	};
}
function handleNormalReducerDefinition({ type, reducerName, createNotation }, maybeReducerWithPrepare, context) {
	let caseReducer;
	let prepareCallback;
	if ("reducer" in maybeReducerWithPrepare) {
		if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) throw new Error(formatProdErrorMessage(17));
		caseReducer = maybeReducerWithPrepare.reducer;
		prepareCallback = maybeReducerWithPrepare.prepare;
	} else caseReducer = maybeReducerWithPrepare;
	context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
	return reducerDefinition._reducerDefinitionType === "asyncThunk";
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
	return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
}
function handleThunkCaseReducerDefinition({ type, reducerName }, reducerDefinition, context, cAT) {
	if (!cAT) throw new Error(formatProdErrorMessage(18));
	const { payloadCreator, fulfilled, pending, rejected, settled, options } = reducerDefinition;
	const thunk = cAT(type, payloadCreator, options);
	context.exposeAction(reducerName, thunk);
	if (fulfilled) context.addCase(thunk.fulfilled, fulfilled);
	if (pending) context.addCase(thunk.pending, pending);
	if (rejected) context.addCase(thunk.rejected, rejected);
	if (settled) context.addMatcher(thunk.settled, settled);
	context.exposeCaseReducer(reducerName, {
		fulfilled: fulfilled || noop$2,
		pending: pending || noop$2,
		rejected: rejected || noop$2,
		settled: settled || noop$2
	});
}
function noop$2() {}
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
`${cancelled}`;
`${completed}`;
`${listener}${cancelled}`;
`${listener}${completed}`;
var { assign } = Object;
var alm = "listenerMiddleware";
var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/add`), { withTypes: () => addListener });
`${alm}`;
var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/remove`), { withTypes: () => removeListener });
function formatProdErrorMessage(code) {
	return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
//#endregion
//#region extension/src/renderer/reducer.ts
var customActionsSlice = createSlice({
	initialState: {
		customCards: [],
		view: "list",
		editingCard: void 0,
		saveCards: false,
		urlCatchingSession: void 0
	},
	name: "customActions",
	reducers: {
		updateState: (state, action) => {
			state[action.payload.key] = action.payload.value;
		},
		addCard: (state) => {
			state.editingCard = {
				id: "temp",
				title: "",
				cardType: "terminal_browser",
				urlConfig: {
					type: "nothing",
					openImmediately: true,
					timeout: 5
				},
				categories: { pinned: true },
				actions: [],
				env: []
			};
			state.view = "form";
		},
		removeCard: (state) => {
			state.customCards = state.customCards.filter((item) => item.id !== state.editingCard?.id);
			state.editingCard = void 0;
			state.view = "list";
			state.saveCards = true;
		},
		saveCard: (state) => {
			const targetCard = state.editingCard;
			let targetUrl = targetCard.urlConfig.customUrl;
			if (targetUrl) {
				targetUrl = formatWebAddress(targetUrl);
				targetCard.urlConfig.customUrl = targetUrl;
			}
			if (state.customCards.some((card) => card.id === targetCard.id)) state.customCards = state.customCards.map((card) => card.id === targetCard.id ? targetCard : card);
			else state.customCards = [...state.customCards, targetCard];
			state.view = "list";
			state.editingCard = void 0;
			state.saveCards = true;
		},
		setTitle: (state, action) => {
			if (state.editingCard) {
				const targetId = `${action.payload}_custom_action`;
				state.customCards = state.customCards.map((item) => item.id === state.editingCard.id ? {
					...item,
					id: targetId
				} : item);
				state.editingCard.title = action.payload;
				state.editingCard.id = targetId;
			}
		},
		setCardType: (state, action) => {
			if (state.editingCard) state.editingCard.cardType = action.payload;
		},
		setDescription: (state, action) => {
			if (state.editingCard) state.editingCard.description = action.payload;
		},
		setIcon: (state, action) => {
			if (state.editingCard) state.editingCard.icon = action.payload;
		},
		setView: (state, action) => {
			state.view = action.payload;
		},
		setEditingCard: (state, action) => {
			state.editingCard = action.payload;
		},
		setUrlConfigType: (state, action) => {
			if (state.editingCard) state.editingCard.urlConfig.type = action.payload;
		},
		setCustomUrl: (state, action) => {
			if (state.editingCard) state.editingCard.urlConfig.customUrl = action.payload;
		},
		setOpenImmediately: (state, action) => {
			if (state.editingCard) state.editingCard.urlConfig.openImmediately = action.payload;
		},
		setTimeoutValue: (state, action) => {
			if (state.editingCard) state.editingCard.urlConfig.timeout = action.payload;
		},
		setFindLine: (state, action) => {
			if (state.editingCard) state.editingCard.urlConfig.findLine = action.payload;
		},
		setCategories: (state, action) => {
			if (state.editingCard) state.editingCard.categories[action.payload.id] = action.payload.value;
		},
		setActions: (state, action) => {
			if (state.editingCard) state.editingCard.actions = action.payload;
		},
		removeAction: (state, action) => {
			if (state.editingCard) state.editingCard.actions = state.editingCard.actions.filter((_, index) => index !== action.payload);
		},
		addAction: (state, action) => {
			if (state.editingCard) state.editingCard.actions = [...state.editingCard.actions, action.payload];
		},
		updateAction: (state, action) => {
			if (state.editingCard && state.editingCard.actions[action.payload.index]) state.editingCard.actions[action.payload.index].action = action.payload.newAction;
		},
		setEnv: (state, action) => {
			if (state.editingCard) state.editingCard.env = action.payload;
		},
		addEnv: (state, action) => {
			if (state.editingCard) state.editingCard.env = [...state.editingCard.env || [], action.payload];
		},
		removeEnv: (state, action) => {
			if (state.editingCard && state.editingCard.env) state.editingCard.env = state.editingCard.env.filter((_, index) => index !== action.payload);
		},
		updateEnv: (state, action) => {
			if (state.editingCard && state.editingCard.env && state.editingCard.env[action.payload.index]) state.editingCard.env[action.payload.index] = {
				key: action.payload.key,
				value: action.payload.value
			};
		},
		clearSaveCards: (state) => {
			state.saveCards = false;
		},
		startUrlCatching: (state, action) => {
			state.urlCatchingSession = {
				ptyId: action.payload.ptyId,
				tabId: action.payload.tabId,
				findLine: action.payload.findLine,
				urlFound: false
			};
		},
		stopUrlCatching: (state) => {
			state.urlCatchingSession = void 0;
		},
		setUrlFound: (state) => {
			if (state.urlCatchingSession) state.urlCatchingSession.urlFound = true;
		},
		importCards: (state, action) => {
			const existingIds = new Set(state.customCards.map((c) => c.id));
			const newCards = action.payload.map((card) => {
				let newId = card.id;
				let newTitle = card.title;
				let counter = 1;
				while (existingIds.has(newId)) {
					newId = `${card.id}_import_${counter}`;
					newTitle = `${card.title} (Imported ${counter})`;
					counter++;
				}
				existingIds.add(newId);
				return {
					...card,
					id: newId,
					title: newTitle
				};
			});
			state.customCards = [...state.customCards, ...newCards];
			state.saveCards = true;
		}
	}
});
var selectCustomCards = (state) => state.customActions.customCards;
var selectView = (state) => state.customActions.view;
var selectEditingCard = (state) => state.customActions.editingCard;
var selectSaveCards = (state) => state.customActions.saveCards;
var selectUrlCatchingSession = (state) => state.customActions.urlCatchingSession;
var reducerActions = customActionsSlice.actions;
var reducer_default = customActionsSlice.reducer;
//#endregion
//#region src/renderer/mainWindow/components/ToolsCard.tsx
var import_jsx_runtime = require_jsx_runtime();
var { Avatar, Card: Card$2, Description: Description$2, Label: Label$3 } = await importShared("@heroui/react");
/**
* A card component for the Tools page, featuring a spotlight effect and hover animations.
*/
function ToolsCard({ title, description, icon, onPress, footer, avatarClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$2, {
		className: "w-75 h-46 relative group transform border border-surface  hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer",
		onClick: onPress,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card$2.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2",
				children: [typeof icon === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
					className: `size-12 shrink-0 ring-LynxPurple ring-2 ${avatarClassName}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar.Image, {
						src: icon,
						alt: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar.Fallback, { children: getFallbackString(title) })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `size-12 rounded-full ring-2 ring-LynxPurple flex items-center justify-center  ${avatarClassName}`,
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$3, { children: title })
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card$2.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description$2, {
				className: "line-clamp-3 text-xs",
				children: description
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card$2.Footer, { children: footer })
		]
	});
}
//#endregion
//#region src/common/consts/ipcChannels/browser.ts
/**
* IPC channels for browser-related functionality.
* Handles tab management, navigation, zoom, volume, and other webview interactions.
*/
var browserChannels = {
	createBrowser: "browser:create-browser",
	removeBrowser: "browser:remove-browser",
	loadURL: "browser:load-url",
	setVisible: "browser:set-visible",
	openFindInPage: "browser:openFindInPage",
	openZoom: "browser:openZoom",
	openVolume: "browser:openVolume",
	onZoomChanged: "browser:on-zoom-changed",
	onLinkHover: "browser:on-link-hover",
	resizeLinkPreview: "browser:resize-link-preview",
	resizeBrowserView: "browser:resize-browser-view",
	findInPage: "browser:findInPage",
	stopFindInPage: "browser:stopFindInPage",
	onFoundInPage: "browser:on-found-in-page",
	setZoomFactor: "browser:setZoomFactor",
	focusWebView: "browser:focus-webview",
	clearCache: "browser:clear-cache",
	clearCookies: "browser:clear-cookies",
	reload: "browser:reload",
	focus: "browser:focus",
	stop: "browser:stop",
	goBack: "browser:goBack",
	goForward: "browser:goForward",
	toggleDevTools: "browser:toggle-devtools",
	onCanGo: "browser:on-can-go",
	isLoading: "browser:is-loading",
	onTitleChange: "browser:on-title-change",
	onFavIconChange: "browser:on-favicon-change",
	onUrlChange: "browser:on-url-change",
	onDomReady: "browser:on-dom-ready",
	getUserAgent: "browser:get-user-agent",
	updateUserAgent: "browser:update-user-agent",
	clearHistory: "browser:clear-history",
	onFailedLoadUrl: "browser:on-failed-load-url",
	onClearFailed: "browser:on-clear-failed",
	setVolume: "volume:set",
	setMuted: "volume:setMuted",
	getState: "volume:getState",
	updateTabVolume: "volume:updateTabVolume",
	updateTabMuted: "volume:updateTabMuted",
	onTabVolumeUpdate: "volume:onTabVolumeUpdate",
	onTabMutedUpdate: "volume:onTabMutedUpdate",
	onAudioStateChange: "volume:onAudioStateChange"
};
//#endregion
//#region src/renderer/shared/ipc/ipcEvents.ts
var listeners = {
	before: /* @__PURE__ */ new Set(),
	after: /* @__PURE__ */ new Set()
};
var channelListeners = {
	before: /* @__PURE__ */ new Map(),
	after: /* @__PURE__ */ new Map()
};
var getListenersForEvent = (event) => {
	const base = [...listeners[event.phase]];
	const perChannel = channelListeners[event.phase].get(event.channel);
	if (perChannel) base.push(...perChannel);
	return base;
};
var logHookError = (error) => {
	console.error("Extension renderer IPC hook failed:", error);
};
var runListenerSync = (listener, event) => {
	try {
		const result = listener(event);
		if (result && typeof result.then === "function") result.catch(logHookError);
	} catch (error) {
		logHookError(error);
	}
};
var runListener = async (listener, event) => {
	try {
		await listener(event);
	} catch (error) {
		logHookError(error);
	}
};
var emitRendererIpcEventSync = (event) => {
	for (const listener of getListenersForEvent(event)) runListenerSync(listener, event);
};
var emitRendererIpcEvent = async (event) => {
	for (const listener of getListenersForEvent(event)) await runListener(listener, event);
};
//#endregion
//#region src/renderer/shared/ipc/lynxIpc.ts
var ipc = window.electron.ipcRenderer;
var send = (channel, ...args) => {
	const eventStart = Date.now();
	const beforeEvent = {
		phase: "before",
		method: "send",
		channel,
		args: [...args],
		timestamp: eventStart
	};
	emitRendererIpcEventSync(beforeEvent);
	try {
		ipc.send(channel, ...args);
		emitRendererIpcEventSync({
			...beforeEvent,
			phase: "after",
			status: "success",
			durationMs: Date.now() - eventStart
		});
	} catch (error) {
		emitRendererIpcEventSync({
			...beforeEvent,
			phase: "after",
			status: "error",
			durationMs: Date.now() - eventStart,
			error
		});
		throw error;
	}
};
var sendSync = (channel, ...args) => {
	const eventStart = Date.now();
	const beforeEvent = {
		phase: "before",
		method: "sendSync",
		channel,
		args: [...args],
		timestamp: eventStart
	};
	emitRendererIpcEventSync(beforeEvent);
	try {
		const result = ipc.sendSync(channel, ...args);
		emitRendererIpcEventSync({
			...beforeEvent,
			phase: "after",
			status: "success",
			durationMs: Date.now() - eventStart,
			result
		});
		return result;
	} catch (error) {
		emitRendererIpcEventSync({
			...beforeEvent,
			phase: "after",
			status: "error",
			durationMs: Date.now() - eventStart,
			error
		});
		throw error;
	}
};
var invoke = async (channel, ...args) => {
	const eventStart = Date.now();
	const beforeEvent = {
		phase: "before",
		method: "invoke",
		channel,
		args: [...args],
		timestamp: eventStart
	};
	await emitRendererIpcEvent(beforeEvent);
	try {
		const result = await ipc.invoke(channel, ...args);
		await emitRendererIpcEvent({
			...beforeEvent,
			phase: "after",
			status: "success",
			durationMs: Date.now() - eventStart,
			result
		});
		return result;
	} catch (error) {
		await emitRendererIpcEvent({
			...beforeEvent,
			phase: "after",
			status: "error",
			durationMs: Date.now() - eventStart,
			error
		});
		throw error;
	}
};
var on = (channel, callback) => ipc.on(channel, (_, ...args) => {
	const typedArgs = args;
	const eventStart = Date.now();
	const beforeEvent = {
		phase: "before",
		method: "on",
		channel,
		args: [...typedArgs],
		timestamp: eventStart
	};
	emitRendererIpcEventSync(beforeEvent);
	try {
		const result = callback(...typedArgs);
		emitRendererIpcEventSync({
			...beforeEvent,
			phase: "after",
			status: "success",
			durationMs: Date.now() - eventStart,
			result
		});
	} catch (error) {
		emitRendererIpcEventSync({
			...beforeEvent,
			phase: "after",
			status: "error",
			durationMs: Date.now() - eventStart,
			error
		});
		throw error;
	}
});
var once = (channel, callback) => ipc.once(channel, (_, ...args) => {
	const typedArgs = args;
	const eventStart = Date.now();
	const beforeEvent = {
		phase: "before",
		method: "once",
		channel,
		args: [...typedArgs],
		timestamp: eventStart
	};
	emitRendererIpcEventSync(beforeEvent);
	try {
		const result = callback(...typedArgs);
		emitRendererIpcEventSync({
			...beforeEvent,
			phase: "after",
			status: "success",
			durationMs: Date.now() - eventStart,
			result
		});
	} catch (error) {
		emitRendererIpcEventSync({
			...beforeEvent,
			phase: "after",
			status: "error",
			durationMs: Date.now() - eventStart,
			error
		});
		throw error;
	}
});
var lynxIpc = {
	send,
	sendSync,
	on,
	once,
	invoke
};
//#endregion
//#region src/renderer/shared/ipc/browser.ts
var invokeWithSoftTimeout = async (channel, timeoutMessage, ...args) => {
	try {
		await Promise.race([lynxIpc.invoke(channel, ...args), new Promise((_, reject) => setTimeout(() => reject(new Error(timeoutMessage)), 8e3))]);
	} catch {}
};
var browserIpc = {
	send: {
		resizeLinkPreview: (width) => lynxIpc.send(browserChannels.resizeLinkPreview, width),
		resizeBrowserView: (data) => lynxIpc.send(browserChannels.resizeBrowserView, data),
		createBrowser: (id) => lynxIpc.send(browserChannels.createBrowser, id),
		removeBrowser: (id) => lynxIpc.send(browserChannels.removeBrowser, id),
		loadURL: (id, url) => lynxIpc.send(browserChannels.loadURL, id, url),
		setVisible: (id, visible) => lynxIpc.send(browserChannels.setVisible, id, visible),
		openFindInPage: (id, customPosition) => lynxIpc.send(browserChannels.openFindInPage, id, customPosition),
		openZoom: (id, customPosition) => lynxIpc.send(browserChannels.openZoom, id, customPosition),
		openVolume: (data, customPosition) => lynxIpc.send(browserChannels.openVolume, data, customPosition),
		findInPage: (id, value, options) => lynxIpc.send(browserChannels.findInPage, id, value, options),
		stopFindInPage: (id, action) => lynxIpc.send(browserChannels.stopFindInPage, id, action),
		focusWebView: (id) => lynxIpc.send(browserChannels.focusWebView, id),
		setZoomFactor: (id, factor) => lynxIpc.send(browserChannels.setZoomFactor, id, factor),
		reload: (id) => lynxIpc.send(browserChannels.reload, id),
		focus: (id) => lynxIpc.send(browserChannels.focus, id),
		stop: (id) => lynxIpc.send(browserChannels.stop, id),
		goBack: (id) => lynxIpc.send(browserChannels.goBack, id),
		goForward: (id) => lynxIpc.send(browserChannels.goForward, id),
		toggleDevTools: (id) => lynxIpc.send(browserChannels.toggleDevTools, id),
		updateUserAgent: () => lynxIpc.send(browserChannels.updateUserAgent),
		clearHistory: (selected) => lynxIpc.send(browserChannels.clearHistory, selected),
		updateTabVolume: (tabId, volume) => lynxIpc.send(browserChannels.updateTabVolume, tabId, volume),
		updateTabMuted: (tabId, muted) => lynxIpc.send(browserChannels.updateTabMuted, tabId, muted)
	},
	on: {
		linkHover: (callback) => lynxIpc.on(browserChannels.onLinkHover, callback),
		canGoBackForward: (result) => lynxIpc.on(browserChannels.onCanGo, result),
		loading: (result) => lynxIpc.on(browserChannels.isLoading, result),
		titleChanged: (result) => lynxIpc.on(browserChannels.onTitleChange, result),
		favIconChanged: (result) => lynxIpc.on(browserChannels.onFavIconChange, result),
		urlChanged: (result) => lynxIpc.on(browserChannels.onUrlChange, result),
		domReady: (result) => lynxIpc.on(browserChannels.onDomReady, result),
		failedLoadUrl: (result) => lynxIpc.on(browserChannels.onFailedLoadUrl, result),
		clearFailed: (result) => lynxIpc.on(browserChannels.onClearFailed, result),
		onAudioStateChange: (callback) => lynxIpc.on(browserChannels.onAudioStateChange, callback),
		onTabVolumeUpdate: (callback) => lynxIpc.on(browserChannels.onTabVolumeUpdate, callback),
		onTabMutedUpdate: (callback) => lynxIpc.on(browserChannels.onTabMutedUpdate, callback),
		foundInPage: (callback) => lynxIpc.on(browserChannels.onFoundInPage, callback),
		onZoomChanged: (callback) => lynxIpc.on(browserChannels.onZoomChanged, callback)
	},
	invoke: {
		clearCache: () => lynxIpc.invoke(browserChannels.clearCache),
		clearCookies: () => lynxIpc.invoke(browserChannels.clearCookies),
		getUserAgent: (type) => lynxIpc.invoke(browserChannels.getUserAgent, type),
		setVolume: (id, volume) => invokeWithSoftTimeout(browserChannels.setVolume, "Volume set operation timed out", id, volume),
		setMuted: (id, muted) => invokeWithSoftTimeout(browserChannels.setMuted, "Mute set operation timed out", id, muted)
	}
};
//#endregion
//#region src/common/consts/ipcChannels/pty.ts
/**
* IPC channels for PTY (Pseudo-Terminal) operations.
* Handles terminal process management, input/output, resizing, and custom commands.
*/
var ptyChannels = {
	process: "pty-process",
	customProcess: "pty-custom-process",
	emptyProcess: "pty-custom-process",
	stopProcess: "pty-stop-process",
	customCommands: "pty-custom-commands",
	write: "pty-write",
	clear: "pty-clear",
	resize: "pty-resize",
	onData: "pty-on-data",
	onTitle: "pty-on-title",
	onExit: "pty-on-exit-code",
	onProgress: "pty-on-progress"
};
//#endregion
//#region src/renderer/shared/ipc/pty.ts
var ptyIpc = {
	process: (id, cardId) => lynxIpc.send(ptyChannels.process, id, cardId),
	customProcess: (id, dir, file) => lynxIpc.send(ptyChannels.customProcess, id, dir, file),
	emptyProcess: (id, dir) => lynxIpc.send(ptyChannels.emptyProcess, id, dir),
	customCommands: (id, commands, dir) => lynxIpc.send(ptyChannels.customCommands, id, commands, dir),
	stop: (id) => lynxIpc.send(ptyChannels.stopProcess, id),
	write: (id, data) => lynxIpc.send(ptyChannels.write, id, data),
	clear: (id) => lynxIpc.send(ptyChannels.clear, id),
	resize: (id, cols, rows) => lynxIpc.send(ptyChannels.resize, id, cols, rows),
	onData: (result) => lynxIpc.on(ptyChannels.onData, result),
	onTitle: (result) => lynxIpc.on(ptyChannels.onTitle, result),
	onExit: (result) => lynxIpc.on(ptyChannels.onExit, result)
};
//#endregion
//#region src/renderer/mainWindow/redux/reducers/cards.ts
var { useSelector: useSelector$12 } = await importShared("react-redux");
var buildRunningCardBase = (tabId, id) => ({
	tabId,
	id,
	webUIAddress: "",
	customAddress: "",
	currentAddress: "",
	browserTitle: "Browser",
	startTime: (/* @__PURE__ */ new Date()).toString()
});
var cardsSlice = createSlice({
	initialState: {
		autoUpdate: [],
		installedCards: [],
		pinnedCards: [],
		updateAvailable: [],
		updatingCards: [],
		runningCard: [],
		recentlyUsedCards: [],
		homeCategory: [],
		autoUpdateExtensions: [],
		updatingExtensions: void 0,
		duplicates: [],
		checkUpdateInterval: 0,
		activeTab: "",
		browserDomReadyIds: [],
		updateChecking: ""
	},
	name: "cards",
	reducers: {
		addUpdateAvailable: (state, action) => {
			if (!state.updateAvailable.includes(action.payload)) state.updateAvailable.push(action.payload);
		},
		setUpdateAvailable: (state, action) => {
			state.updateAvailable = action.payload;
		},
		setUpdateChecking: (state, action) => {
			state.updateChecking = action.payload;
		},
		removeUpdateAvailable: (state, action) => {
			state.updateAvailable = state.updateAvailable.filter((card) => card !== action.payload);
		},
		setUpdatingExtensions: (state, action) => {
			state.updatingExtensions = action.payload;
		},
		setUpdateInterval: (state, action) => {
			state.checkUpdateInterval = action.payload;
		},
		addUpdatingCard: (state, action) => {
			if (!state.updatingCards.some((card) => card.id === action.payload.id)) state.updatingCards.push(action.payload);
		},
		removeUpdatingCard: (state, action) => {
			const cardId = action.payload;
			state.updatingCards = state.updatingCards.filter((card) => card.id !== cardId);
		},
		setAutoUpdate: (state, action) => {
			state.autoUpdate = action.payload;
		},
		setAutoUpdateExtensions: (state, action) => {
			state.autoUpdateExtensions = action.payload;
		},
		setInstalledCards: (state, action) => {
			state.installedCards = action.payload;
		},
		setPinnedCards: (state, action) => {
			state.pinnedCards = action.payload;
		},
		setHomeCategory: (state, action) => {
			state.homeCategory = action.payload;
		},
		setRecentlyUsedCards: (state, action) => {
			state.recentlyUsedCards = action.payload;
		},
		setDuplicates: (state, action) => {
			state.duplicates = action.payload;
		},
		addDomReady: (state, action) => {
			if (!state.browserDomReadyIds.includes(action.payload)) state.browserDomReadyIds.push(action.payload);
		},
		addRunningEmpty: (state, action) => {
			const { tabId, type } = action.payload;
			const id = `${tabId}_${type}`;
			const currentView = type === "browser" ? "browser" : "terminal";
			state.runningCard.push({
				...buildRunningCardBase(tabId, id),
				type,
				currentView,
				isEmptyRunning: true
			});
			if (type !== "terminal") browserIpc.send.createBrowser(id);
			if (type !== "browser") ptyIpc.emptyProcess(id);
		},
		addRunningCard: (state, action) => {
			const { tabId, id } = action.payload;
			state.runningCard.push({
				...buildRunningCardBase(tabId, id),
				type: "both",
				currentView: "terminal",
				isEmptyRunning: false
			});
			browserIpc.send.createBrowser(id);
		},
		setRunningCardAddress: (state, action) => {
			const { tabId, address } = action.payload;
			state.runningCard = state.runningCard.map((card) => card.tabId === tabId ? {
				...card,
				webUIAddress: address
			} : card);
		},
		setRunningCardCustomAddress: (state, action) => {
			const { tabId, address } = action.payload;
			state.runningCard = state.runningCard.map((card) => card.tabId === tabId ? {
				...card,
				customAddress: address
			} : card);
		},
		setRunningCardCurrentAddress: (state, action) => {
			const { tabId, address } = action.payload;
			state.runningCard = state.runningCard.map((card) => card.tabId === tabId ? {
				...card,
				currentAddress: address
			} : card);
		},
		setRunningCardView: (state, action) => {
			const { tabId, view } = action.payload;
			state.runningCard = state.runningCard.map((card) => card.tabId === tabId ? {
				...card,
				currentView: view
			} : card);
		},
		setRunningCardBrowserTitle: (state, action) => {
			const { tabId, title } = action.payload;
			state.runningCard = state.runningCard.map((card) => card.tabId === tabId ? {
				...card,
				browserTitle: title
			} : card);
		},
		toggleRunningCardView: (state, action) => {
			if (!state.runningCard) return;
			const { tabId } = action.payload;
			state.runningCard = state.runningCard.map((card) => {
				const currentView = card.currentView === "browser" ? "terminal" : "browser";
				return card.tabId === tabId ? {
					...card,
					currentView
				} : card;
			});
		},
		stopRunningCard: (state, action) => {
			const id = state.runningCard.find((card) => card.tabId === action.payload.tabId)?.id;
			if (id) {
				browserIpc.send.removeBrowser(id);
				state.browserDomReadyIds = state.browserDomReadyIds.filter((item) => item !== id);
			}
			state.runningCard = state.runningCard.filter((card) => card.tabId !== action.payload.tabId);
		}
	}
});
var cardsActions = cardsSlice.actions;
cardsSlice.reducer;
var package_default = {
	name: "lynxhub",
	productName: "LynxHub",
	version: "3.5.5-insider-1",
	type: "module",
	description: "Cross-platform, extensible terminal/browser for AI management",
	main: "./out/main/index.cjs",
	author: {
		"name": "KindaBrazy",
		"email": "kindofbrazy@gmail.com"
	},
	repository: {
		"type": "git",
		"url": "https://github.com/KindaBrazy/LynxHub"
	},
	license: "AGPL-3.0",
	homepage: "https://github.com/KindaBrazy/LynxHub",
	appDetails: {
		"title": "LynxHub",
		"buildNumber": 51,
		"detailedDescription": "Open-source, cross-platform terminal and browser, designed for managing AI. Highly modular and extensible, it's the all-in-one environment for AI power users.",
		"moduleApiVersion": "2.1.0",
		"extensionApiVersion": "2.0.0"
	},
	scripts: {
		"typecheck:node": "tsc --noEmit -p tsconfig.node.json --composite false",
		"typecheck:web": "tsc --noEmit -p tsconfig.web.json --composite false",
		"typecheck": "npm run typecheck:node && npm run typecheck:web",
		"fix-linter:web": "prettier --write src/renderer --list-different && eslint --fix src/renderer",
		"fix-linter:node": "prettier --write src/main --list-different && eslint --fix src/main",
		"fix-linter": "prettier --write src --list-different && eslint --fix src",
		"fix-linter-ext": "prettier --write extension --list-different && eslint --fix extension",
		"validate:web": "npm run fix-linter:web && npm run typecheck:web",
		"validate:node": "npm run fix-linter:node && npm run typecheck:node",
		"validate:ext": "npm run fix-linter-ext && npm run typecheck",
		"validate": "npm run fix-linter && npm run typecheck",
		"preview": "electron-vite preview --noSandbox",
		"preview:skip": "electron-vite preview --noSandbox --skipBuild",
		"dev": "run-script-os",
		"dev:win32": "electron-vite dev",
		"dev:default": "electron-vite dev --noSandbox",
		"prof": "electron-vite dev -w --noSandbox -- --js-flags=\"--prof\"",
		"dev:srouce": "electron-vite dev -w --noSandbox --sourcemap",
		"postinstall": "electron-builder install-app-deps",
		"build": "electron-vite build",
		"rebuild": "electron-builder node-gyp-rebuild",
		"removeDotExtension": "node fixExtension.js",
		"build:extension": "rimraf extension_out && electron-vite build --config extension/electron.vite.config.ts && npm run removeDotExtension",
		"build:module": "rimraf module_out && rollup --config module/rollup.config.mjs",
		"build:unpack": "npm run build && electron-builder --dir --config electron-builder_x64.config.cjs",
		"build:win_x64": "npm run build && electron-builder --win --config electron-builder_x64.config.cjs --publish never",
		"build:win_arm": "npm run build && electron-builder --win --config electron-builder_arm.config.cjs --publish never",
		"build:win_portable_x64": "npm run build && electron-builder --win --config electron-builder-portable_x64.config.cjs --publish never",
		"build:win_portable_arm": "npm run build && electron-builder --win --config electron-builder-portable_arm.config.cjs --publish never",
		"build:linux_x64": "npm run build && electron-builder --linux --config electron-builder_x64.config.cjs --publish never",
		"build:linux_arm": "npm run build && electron-builder --linux --config electron-builder_arm.config.cjs --publish never",
		"build:linux_portable_x64": "npm run build && electron-builder --linux --config electron-builder-portable_x64.config.cjs --publish never",
		"build:linux_portable_arm": "npm run build && electron-builder --linux --config electron-builder-portable_arm.config.cjs --publish never",
		"build:mac_x64": "npm run build && electron-builder --mac --config electron-builder_x64.config.cjs --publish never",
		"build:mac_arm": "npm run build && electron-builder --mac --config electron-builder_arm.config.cjs --publish never",
		"build:linux-test": "npm run build && electron-builder --linux --config electron-builder-test.config.cjs --publish never",
		"release": "electron-builder",
		"publish": "electron-builder -p always --config electron-builder_x64.config.cjs"
	},
	dependencies: {
		"@electron-toolkit/preload": "^3.0.2",
		"@electron-toolkit/utils": "^4.0.0",
		"@originjs/vite-plugin-federation": "^1.4.1",
		"@sentry/electron": "^7.14.0",
		"@sentry/react": "^10.60.0",
		"axios": "^1.18.1",
		"fix-path": "^5.0.0",
		"graceful-fs": "^4.2.11",
		"keytar": "^7.9.0",
		"lowdb": "^7.0.1",
		"mitt": "^3.0.1",
		"node-pty": "^1.2.0-beta.13",
		"prism-react-renderer": "^2.4.1",
		"react-syntax-highlighter": "^16.1.1",
		"semver": "^7.8.5",
		"tree-kill": "^1.2.2",
		"zustand": "^5.0.14"
	},
	devDependencies: {
		"@electron-toolkit/eslint-config-prettier": "^3.0.0",
		"@electron-toolkit/tsconfig": "^2.0.0",
		"@eslint/js": "^10.0.1",
		"@heroui/react": "^3.2.1",
		"@heroui/styles": "^3.2.1",
		"@icons-pack/react-simple-icons": "^13.13.0",
		"@number-flow/react": "^0.6.0",
		"@reduxjs/toolkit": "^2.12.0",
		"@sentry/vite-plugin": "^5.3.0",
		"@solar-icons/react-perf": "^2.1.1",
		"@tailwindcss/typography": "^0.5.20",
		"@tailwindcss/vite": "^4.3.1",
		"@types/decompress": "^4.2.7",
		"@types/fontfaceobserver": "^2.1.3",
		"@types/graceful-fs": "^4.1.9",
		"@types/lodash-es": "^4.17.12",
		"@types/node": "^24.13.2",
		"@types/react": "^19.2.17",
		"@types/react-dom": "^19.2.3",
		"@types/react-highlight-words": "^0.20.1",
		"@types/react-syntax-highlighter": "^15.5.13",
		"@types/semver": "^7.7.1",
		"@types/serve-handler": "^6.1.4",
		"@vitejs/plugin-react": "^6.0.3",
		"@xterm/addon-canvas": "^0.7.0",
		"@xterm/addon-clipboard": "^0.2.0",
		"@xterm/addon-fit": "^0.11.0",
		"@xterm/addon-ligatures": "^0.10.0",
		"@xterm/addon-progress": "^0.2.0",
		"@xterm/addon-search": "^0.16.0",
		"@xterm/addon-serialize": "^0.14.0",
		"@xterm/addon-unicode11": "^0.9.0",
		"@xterm/addon-web-links": "^0.12.0",
		"@xterm/addon-webgl": "^0.19.0",
		"@xterm/xterm": "^6.0.0",
		"chokidar": "^5.0.0",
		"decompress": "^4.2.1",
		"electron": "^42.5.0",
		"electron-builder": "^26.15.3",
		"electron-dl": "^4.0.0",
		"electron-log": "^5.4.4",
		"electron-updater": "^6.8.9",
		"electron-vite": "^6.0.0-beta.1",
		"eslint": "^10.5.0",
		"eslint-plugin-jsx-a11y": "^6.10.2",
		"eslint-plugin-perfectionist": "^5.9.1",
		"eslint-plugin-react": "^7.37.5",
		"eslint-plugin-react-hooks": "^7.1.1",
		"eslint-plugin-simple-import-sort": "^13.0.0",
		"fontfaceobserver": "^2.3.0",
		"framer-motion": "^12.41.0",
		"globals": "^17.7.0",
		"lodash-es": "^4.18.1",
		"lucide-react": "^1.21.0",
		"normalize-url": "^9.0.1",
		"ogl": "^1.0.11",
		"overlayscrollbars": "^2.16.0",
		"overlayscrollbars-react": "^0.5.6",
		"prettier": "^3.8.4",
		"react": "^19.2.7",
		"react-dom": "^19.2.7",
		"react-error-boundary": "^6.1.2",
		"react-highlight-words": "^0.21.0",
		"react-intersection-observer": "^10.0.3",
		"react-markdown": "^10.1.0",
		"react-redux": "^9.3.0",
		"rehype-highlight": "^7.0.2",
		"rehype-raw": "^7.0.0",
		"rehype-slug": "^6.0.0",
		"remark-gfm": "^4.0.1",
		"run-script-os": "^1.1.6",
		"simple-git": "^3.36.0",
		"tailwindcss": "^4.3.1",
		"three": "^0.184.0",
		"typescript": "^6.0.3",
		"typescript-eslint": "^8.62.0",
		"vite": "^8.1.0"
	},
	allowScripts: {
		"electron": true,
		"esbuild": true,
		"keytar": true,
		"node-pty": true,
		"@sentry/cli": true
	}
};
//#endregion
//#region src/common/consts/index.ts
/** Application name from package.json */
var APP_NAME = package_default.appDetails.title;
/** Application version from package.json */
var APP_VERSION = package_default.version;
package_default.appDetails.buildNumber;
package_default.description;
package_default.author.name;
package_default.appDetails.detailedDescription;
`${package_default.homepage}`;
package_default.author.email;
`${package_default.repository.url}`;
`${package_default.repository.url}`;
package_default.license;
package_default.appDetails.moduleApiVersion;
package_default.appDetails.extensionApiVersion;
/** Application version with 'V' prefix */
var APP_VERSION_V = `V${APP_VERSION}`;
`${APP_NAME}${APP_VERSION}`;
`${APP_NAME}${APP_VERSION_V}`;
APP_VERSION_V.split("-").map((v) => capitalize(v)).join(" ");
/**
* Page IDs used for navigation.
*/
var PageID = {
	home: "home_page",
	imageGen: "imageGen_page",
	textGen: "textGen_page",
	audioGen: "audioGen_page",
	tools: "tools_page",
	games: "games_page",
	others: "others_page",
	agents: "agents_page",
	dashboard: "dashboard_page",
	plugins: "plugins_page",
	settings: "settings_page"
};
PageID.home, PageID.imageGen, PageID.textGen, PageID.audioGen, PageID.tools, PageID.games, PageID.others, PageID.agents, PageID.dashboard, PageID.plugins, PageID.settings;
//#endregion
//#region src/renderer/mainWindow/utils/constants.tsx
/**
* Default tab descriptor used when creating or resetting tabs.
*/
var defaultTabItem = {
	id: "tab",
	title: "Home",
	isLoading: false,
	isTerminal: false,
	pageID: PageID.home,
	favIcon: {
		show: false,
		url: ""
	}
};
//#endregion
//#region src/renderer/mainWindow/redux/reducers/tabs.ts
var { useSelector: useSelector$11 } = await importShared("react-redux");
var findUniqueTabId = (baseId, tabs) => {
	let idNumber = 1;
	let candidateId = baseId;
	while (tabs.some((tab) => tab.id === candidateId)) {
		candidateId = `${baseId}_${idNumber}`;
		idNumber += 1;
	}
	return candidateId;
};
var updateTabById = (tabs, tabID, updater) => tabs.map((tab) => tab.id === tabID ? updater(tab) : tab);
var tabsSlice = createSlice({
	name: "tabs",
	initialState: {
		tabs: [defaultTabItem],
		activeTab: defaultTabItem.id,
		activePage: defaultTabItem.pageID,
		prevTab: ""
	},
	reducers: {
		setTabState: (state, action) => {
			state[action.payload.key] = action.payload.value;
		},
		addTab: (state, action) => {
			const { background, ...nextTabPayload } = action.payload;
			const newID = findUniqueTabId(nextTabPayload.id, state.tabs);
			state.tabs.push({
				...nextTabPayload,
				id: newID
			});
			if (!background) {
				state.activeTab = newID;
				state.activePage = nextTabPayload.pageID;
			}
		},
		removeTab: (state, action) => {
			const tabIdToRemove = action.payload;
			const tabIndexToRemove = state.tabs.findIndex((tab) => tab.id === tabIdToRemove);
			state.tabs = state.tabs.filter((tab) => tab.id !== tabIdToRemove);
			if (state.activeTab === tabIdToRemove) if (state.tabs.length > 0) {
				const newActiveTabIndex = Math.min(tabIndexToRemove, state.tabs.length - 1);
				state.activeTab = state.tabs[newActiveTabIndex].id;
				state.activePage = state.tabs[newActiveTabIndex].pageID;
			} else {
				state.activeTab = defaultTabItem.id;
				state.activePage = defaultTabItem.pageID;
			}
			if (state.tabs.length <= 0) state.tabs = [defaultTabItem];
		},
		setActiveTab: (state, action) => {
			state.prevTab = state.activeTab;
			state.activeTab = action.payload;
			state.activePage = state.tabs.find((tab) => tab.id === action.payload)?.pageID || defaultTabItem.pageID;
		},
		switchTab: (state, action) => {
			if (state.tabs.length <= 1) return;
			const currentIndex = state.tabs.findIndex((tab) => tab.id === state.activeTab);
			if (currentIndex === -1) return;
			const direction = action.payload?.direction || "next";
			let nextIndex;
			if (direction === "next") nextIndex = (currentIndex + 1) % state.tabs.length;
			else nextIndex = (currentIndex - 1 + state.tabs.length) % state.tabs.length;
			state.prevTab = state.activeTab;
			state.activeTab = state.tabs[nextIndex].id;
			state.activePage = state.tabs[nextIndex].pageID;
		},
		setTabLoading: (state, action) => {
			const { tabID, isLoading } = action.payload;
			state.tabs = updateTabById(state.tabs, tabID, (tab) => ({
				...tab,
				isLoading
			}));
		},
		setActiveTabLoading: (state, action) => {
			state.tabs = updateTabById(state.tabs, state.activeTab, (tab) => ({
				...tab,
				isLoading: action.payload
			}));
		},
		setTabTitle: (state, action) => {
			const { tabID, title } = action.payload;
			state.tabs = updateTabById(state.tabs, tabID, (tab) => ({
				...tab,
				title
			}));
		},
		setTabIsTerminal: (state, action) => {
			const { tabID, isTerminal } = action.payload;
			state.tabs = updateTabById(state.tabs, tabID, (tab) => ({
				...tab,
				isTerminal
			}));
		},
		setActiveTabTitle: (state, action) => {
			state.tabs = updateTabById(state.tabs, state.activeTab, (tab) => ({
				...tab,
				title: action.payload
			}));
		},
		setTabFavIcon: (state, action) => {
			const { tabID, ...favIcon } = action.payload;
			state.tabs = updateTabById(state.tabs, tabID, (tab) => ({
				...tab,
				favIcon
			}));
		},
		setTabProgress: (state, action) => {
			const { tabID, progress } = action.payload;
			state.tabs = updateTabById(state.tabs, tabID, (tab) => ({
				...tab,
				progress
			}));
		},
		setActivePage: (state, action) => {
			const index = state.tabs.findIndex((tab) => tab.id === state.activeTab);
			if (index !== -1) {
				const { pageID, title, isTerminal } = action.payload;
				state.tabs[index] = {
					...state.tabs[index],
					pageID,
					title,
					isTerminal: isTerminal ?? false,
					favIcon: {
						show: false,
						url: ""
					}
				};
			}
			state.activePage = action.payload.pageID;
		}
	}
});
/**
* Hook to access tabs reducer state by key with inferred return type.
*/
var useTabsState = (key) => useSelector$11((state) => state.tabs[key]);
tabsSlice.actions;
tabsSlice.reducer;
//#endregion
//#region src/common/consts/ipcChannels/files.ts
/**
* IPC channels for file system operations.
* Handles directory listing, file dialogs, path manipulation, and other file-related tasks.
*/
var fileChannels = {
	getAppDirectories: "app:getAppDirectories",
	dialog: "app:openDialog",
	extensionsNames: "app:extensionsFolder",
	openPath: "app:openPath",
	saveToFile: "app:saveToFile",
	removeDir: "app:removeDir",
	trashDir: "app:trashDir",
	listDir: "app:listDir",
	checkFilesExist: "app:checkFilesExist",
	calcFolderSize: "app:calcFolderSize",
	getRelativePath: "app:getRelativePath",
	getAbsolutePath: "app:getAbsolutePath",
	isEmptyDir: "app:isEmptyDir",
	isAbsolute: "app:isAbsolute"
};
//#endregion
//#region src/renderer/shared/ipc/files.ts
var filesIpc = {
	openDlg: (option) => lynxIpc.invoke(fileChannels.dialog, option),
	openDlgMany: (option) => lynxIpc.invoke(fileChannels.dialog, {
		...option,
		properties: Array.from(/* @__PURE__ */ new Set([...option.properties || [], "multiSelections"]))
	}).then((result) => Array.isArray(result) ? result : result ? [result] : []),
	openPath: (dir) => lynxIpc.send(fileChannels.openPath, dir),
	saveToFile: (content) => lynxIpc.invoke(fileChannels.saveToFile, content),
	getAppDirectories: (name) => lynxIpc.invoke(fileChannels.getAppDirectories, name),
	removeDir: (dir) => lynxIpc.invoke(fileChannels.removeDir, dir),
	trashDir: (dir) => lynxIpc.invoke(fileChannels.trashDir, dir),
	listDir: (dirPath, relatives) => lynxIpc.invoke(fileChannels.listDir, dirPath, relatives),
	checkFilesExist: (dir, fileNames) => lynxIpc.invoke(fileChannels.checkFilesExist, dir, fileNames),
	calcFolderSize: (dir) => lynxIpc.invoke(fileChannels.calcFolderSize, dir),
	getRelativePath: (basePath, targetPath) => lynxIpc.invoke(fileChannels.getRelativePath, basePath, targetPath),
	getAbsolutePath: (basePath, targetPath) => lynxIpc.invoke(fileChannels.getAbsolutePath, basePath, targetPath),
	isEmptyDir: (dir) => lynxIpc.invoke(fileChannels.isEmptyDir, dir),
	isAbsolute: (dir) => lynxIpc.invoke(fileChannels.isAbsolute, dir)
};
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/lib/IconBase.mjs
var { forwardRef: e$1 } = await importShared("react");
var r$17 = e$1((e, r) => {
	let { alt: i, color: a = `currentColor`, size: o = `1em`, mirrored: s = !1, children: c, ...l } = e;
	return (0, import_jsx_runtime.jsxs)(`svg`, {
		ref: r,
		xmlns: `http://www.w3.org/2000/svg`,
		width: o,
		height: o,
		color: a,
		fill: `none`,
		viewBox: `0 0 24 24`,
		transform: s ? `scale(-1, 1)` : void 0,
		...l,
		children: [!!i && (0, import_jsx_runtime.jsx)(`title`, { children: i }), c]
	});
});
r$17.displayName = `IconBase`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/arrows-action/BoldDuotone/Export.mjs
var { forwardRef: t$15 } = await importShared("react");
var i$15 = t$15((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		d: `M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12L4 12Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		fillRule: `evenodd`,
		clipRule: `evenodd`,
		d: `M15.5303 7.53033C15.2374 7.82322 14.7626 7.82322 14.4697 7.53033L12.75 5.81066L12.75 14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14L11.25 5.81066L9.53033 7.53033C9.23744 7.82322 8.76256 7.82322 8.46967 7.53033C8.17678 7.23744 8.17678 6.76256 8.46967 6.46967L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L15.5303 6.46967C15.8232 6.76256 15.8232 7.23744 15.5303 7.53033Z`,
		fill: `currentColor`
	})]
}));
i$15.displayName = `Export`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/arrows-action/BoldDuotone/Import.mjs
var { forwardRef: t$14 } = await importShared("react");
var i$14 = t$14((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		d: `M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12L4 12Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		fillRule: `evenodd`,
		clipRule: `evenodd`,
		d: `M15.5303 10.4697C15.2374 10.1768 14.7626 10.1768 14.4697 10.4697L12.75 12.1893L12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L11.25 12.1893L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697C8.17678 10.7626 8.17678 11.2374 8.46967 11.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697Z`,
		fill: `currentColor`
	})]
}));
i$14.displayName = `Import`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/arrows/BoldDuotone/ArrowLeft.mjs
var { forwardRef: t$13 } = await importShared("react");
var i$13 = t$13((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		fillRule: `evenodd`,
		clipRule: `evenodd`,
		d: `M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		d: `M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z`,
		fill: `currentColor`
	})]
}));
i$13.displayName = `ArrowLeft`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/astronomy/BoldDuotone/Earth.mjs
var { forwardRef: t$12 } = await importShared("react");
var i$12 = t$12((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [
		(0, import_jsx_runtime.jsx)(`circle`, {
			opacity: `0.5`,
			cx: `12`,
			cy: `12`,
			r: `10`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M8.57516 9.44737C8.3879 7.36316 6.7806 5.42105 6.00035 4.71053L5.56934 4.34189C7.30792 2.88037 9.55133 2 12.0004 2C14.2137 2 16.2592 2.7191 17.9158 3.93642C18.1498 4.64695 17.704 6.13158 17.2359 6.84211C17.0663 7.09947 16.6818 7.41898 16.2602 7.72186C15.3097 8.40477 14.1102 8.74254 13.5004 10C13.326 10.3595 13.3335 10.7108 13.4173 11.0163C13.4776 11.2358 13.5161 11.4745 13.5167 11.708C13.5187 12.4629 12.7552 13.0082 12.0004 13C10.0361 12.9786 8.7502 11.3955 8.57516 9.44737Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M13.4365 18.2761C14.4246 16.414 17.7182 16.414 17.7182 16.414C21.1502 16.3782 21.6138 14.2944 21.9237 13.2412C21.369 17.7226 17.8494 21.2849 13.3885 21.9046C13.0659 21.2256 12.6837 19.6946 13.4365 18.2761Z`,
			fill: `currentColor`
		})
	]
}));
i$12.displayName = `Earth`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/devices/BoldDuotone/Diskette.mjs
var { forwardRef: t$11 } = await importShared("react");
var i$11 = t$11((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [
		(0, import_jsx_runtime.jsx)(`path`, {
			opacity: `0.5`,
			d: `M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.6585 22 11.4878 21.9848 11.3142C21.9142 10.5049 21.586 9.71257 21.0637 9.09034C20.9516 8.95687 20.828 8.83317 20.5806 8.58578L15.4142 3.41944C15.1668 3.17206 15.0431 3.04835 14.9097 2.93631C14.2874 2.414 13.4951 2.08581 12.6858 2.01515C12.5122 2 12.3415 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.1485 21.2196 5.02727 21.5841 6.25 21.7784L7.75 21.9313C8.9058 22 10.2996 22 12 22C13.7004 22 15.0942 22 16.25 21.9313L17.75 21.7784C18.9727 21.5841 19.8515 21.2196 20.5355 20.5355Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75H13C13.4142 8.75 13.75 8.41421 13.75 8C13.75 7.58579 13.4142 7.25 13 7.25H7Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M13.052 16.25C13.9505 16.25 14.6997 16.2499 15.2945 16.3299C15.9223 16.4143 16.4891 16.6 16.9445 17.0555C17.4 17.5109 17.5857 18.0777 17.6701 18.7055C17.7501 19.3003 17.75 20.0495 17.75 20.948V20.948L17.75 21.7812L16.25 21.9219V21C16.25 20.036 16.2484 19.3884 16.1835 18.9054C16.1214 18.4439 16.0142 18.2464 15.8839 18.1161C15.7536 17.9858 15.5561 17.8786 15.0946 17.8165C14.6116 17.7516 13.964 17.75 13 17.75H11C10.036 17.75 9.38843 17.7516 8.90539 17.8165C8.44393 17.8786 8.24644 17.9858 8.11612 18.1161C7.9858 18.2464 7.87858 18.4439 7.81654 18.9054C7.7516 19.3884 7.75 20.036 7.75 21V21.9258L6.25 21.7773L6.25 20.948V20.948C6.24997 20.0495 6.24995 19.3003 6.32991 18.7055C6.41432 18.0777 6.59999 17.5109 7.05546 17.0555C7.51093 16.6 8.07773 16.4143 8.70552 16.3299C9.3003 16.2499 10.0495 16.25 10.948 16.25H10.948H13.052H13.052Z`,
			fill: `currentColor`
		})
	]
}));
i$11.displayName = `Diskette`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/files/BoldDuotone/FileCheck.mjs
var { forwardRef: t$10 } = await importShared("react");
var i$10 = t$10((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [
		(0, import_jsx_runtime.jsx)(`path`, {
			opacity: `0.5`,
			fillRule: `evenodd`,
			clipRule: `evenodd`,
			d: `M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M10.5606 15.4983C10.8358 15.1887 10.8079 14.7146 10.4983 14.4395C10.1887 14.1643 9.71464 14.1921 9.43945 14.5017L7.33334 16.8711L6.56056 16.0017C6.28538 15.6921 5.81132 15.6643 5.50174 15.9395C5.19215 16.2146 5.16426 16.6887 5.43945 16.9983L6.77278 18.4983C6.91511 18.6584 7.11911 18.75 7.33334 18.75C7.54757 18.75 7.75157 18.6584 7.8939 18.4983L10.5606 15.4983Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z`,
			fill: `currentColor`
		})
	]
}));
i$10.displayName = `FileCheck`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/folders/BoldDuotone/FolderOpen.mjs
var { forwardRef: t$9 } = await importShared("react");
var i$9 = t$9((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		fillRule: `evenodd`,
		clipRule: `evenodd`,
		d: `M3.35791 12.7787C2.74772 13.7201 2.99956 15.0291 3.50323 17.647C3.8658 19.5316 4.04709 20.4738 4.67523 21.0991C4.8382 21.2614 5.02054 21.4052 5.2186 21.5277C5.98195 21.9999 6.99539 21.9999 9.02227 21.9999H15.9777C18.0046 21.9999 19.0181 21.9999 19.7814 21.5277C19.9795 21.4052 20.1618 21.2614 20.3248 21.0991C20.9529 20.4738 21.1342 19.5316 21.4968 17.647C22.0004 15.0291 22.2523 13.7201 21.6421 12.7787C21.4864 12.5384 21.2943 12.321 21.0721 12.1332C20.2011 11.3975 18.7933 11.3975 15.9777 11.3975H9.02227C6.20667 11.3975 4.79888 11.3975 3.92792 12.1332C3.70566 12.321 3.51363 12.5384 3.35791 12.7787ZM9.69518 17.1806C9.69518 16.7814 10.0376 16.4577 10.4601 16.4577H14.5398C14.9622 16.4577 15.3047 16.7814 15.3047 17.1806C15.3047 17.5798 14.9622 17.9035 14.5398 17.9035H10.4601C10.0376 17.9035 9.69518 17.5798 9.69518 17.1806Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		d: `M3.5762 12.4846C3.68271 12.3586 3.80034 12.241 3.92792 12.1332C4.79888 11.3975 6.20667 11.3975 9.02227 11.3975H15.9777C18.7933 11.3975 20.2011 11.3975 21.0721 12.1332C21.2 12.2413 21.3179 12.3592 21.4247 12.4857V9.75579C21.4247 8.84687 21.4247 8.09279 21.3394 7.49156C21.2494 6.85704 21.0531 6.29458 20.5839 5.83245C20.5074 5.75707 20.4266 5.68552 20.342 5.61807C19.8302 5.21023 19.2167 5.04345 18.5222 4.96608C17.8531 4.89155 17.0102 4.89157 15.9769 4.89158L15.6242 4.89158C14.6421 4.89158 14.29 4.88587 13.9711 4.80533C13.7837 4.75802 13.604 4.69195 13.4352 4.60878C13.151 4.46867 12.9033 4.25762 12.2077 3.64132L11.7336 3.22128C11.5345 3.04489 11.3987 2.9245 11.2531 2.81755C10.6284 2.35879 9.86779 2.08132 9.07145 2.01534C8.88602 1.99998 8.6968 1.99999 8.41356 2.00002L8.29714 2.00001C7.65647 1.9999 7.23365 1.99983 6.86652 2.0612C5.26167 2.32947 3.96392 3.45143 3.64782 4.93575C3.57591 5.27344 3.57602 5.66035 3.57619 6.21853L3.5762 12.4846Z`,
		fill: `currentColor`
	})]
}));
i$9.displayName = `FolderOpen`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/it/BoldDuotone/Code.mjs
var { forwardRef: t$8 } = await importShared("react");
var i$8 = t$8((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M16.4425 7.32787C16.7196 7.01999 17.1938 6.99503 17.5017 7.27213L19.2392 8.83587C19.9756 9.49853 20.5864 10.0482 21.0058 10.5468C21.4468 11.071 21.7603 11.6343 21.7603 12.3296C21.7603 13.0249 21.4468 13.5882 21.0058 14.1124C20.5864 14.611 19.9756 15.1607 19.2392 15.8233L17.5017 17.3871C17.1938 17.6642 16.7196 17.6392 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7453C18.9826 14.0362 19.5138 13.5558 19.8579 13.1468C20.1882 12.7542 20.2603 12.525 20.2603 12.3296C20.2603 12.1342 20.1882 11.905 19.8579 11.5124C19.5138 11.1034 18.9826 10.623 18.1947 9.91389L16.4983 8.38707C16.1904 8.10997 16.1654 7.63576 16.4425 7.32787Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M7.50178 8.38707C7.80966 8.10997 7.83462 7.63576 7.55752 7.32787C7.28043 7.01999 6.80621 6.99503 6.49833 7.27213L4.76084 8.83587C4.0245 9.49853 3.41369 10.0482 2.99428 10.5468C2.55325 11.071 2.23975 11.6343 2.23975 12.3296C2.23975 13.0249 2.55325 13.5882 2.99428 14.1124C3.41369 14.611 4.02449 15.1607 4.76082 15.8233L6.49833 17.3871C6.80621 17.6642 7.28043 17.6392 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7453C5.01743 14.0362 4.48623 13.5558 4.14213 13.1468C3.81188 12.7542 3.73975 12.525 3.73975 12.3296C3.73975 12.1342 3.81188 11.905 4.14213 11.5124C4.48623 11.1034 5.01743 10.623 5.80531 9.91389L7.50178 8.38707Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			opacity: `0.5`,
			d: `M14.1816 4.2755C14.5817 4.3827 14.8191 4.79396 14.7119 5.19406L10.7383 20.0238C10.6311 20.4239 10.2198 20.6613 9.81974 20.5541C9.41964 20.4469 9.18221 20.0356 9.28941 19.6355L13.263 4.80583C13.3702 4.40573 13.7815 4.16829 14.1816 4.2755Z`,
			fill: `currentColor`
		})
	]
}));
i$8.displayName = `Code`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/messages/BoldDuotone/Pen.mjs
var { forwardRef: t$7 } = await importShared("react");
var i$7 = t$7((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		d: `M20.8487 8.71306C22.3844 7.17735 22.3844 4.68748 20.8487 3.15178C19.313 1.61607 16.8231 1.61607 15.2874 3.15178L14.4004 4.03882C14.4125 4.0755 14.4251 4.11268 14.4382 4.15035C14.7633 5.0875 15.3768 6.31601 16.5308 7.47002C17.6848 8.62403 18.9133 9.23749 19.8505 9.56262C19.888 9.57563 19.925 9.58817 19.9615 9.60026L20.8487 8.71306Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		d: `M14.4386 4L14.4004 4.03819C14.4125 4.07487 14.4251 4.11206 14.4382 4.14973C14.7633 5.08687 15.3768 6.31538 16.5308 7.4694C17.6848 8.62341 18.9133 9.23686 19.8505 9.56199C19.8876 9.57489 19.9243 9.58733 19.9606 9.59933L11.4001 18.1598C10.823 18.7369 10.5343 19.0255 10.2162 19.2737C9.84082 19.5665 9.43469 19.8175 9.00498 20.0223C8.6407 20.1959 8.25351 20.3249 7.47918 20.583L3.39584 21.9442C3.01478 22.0712 2.59466 21.972 2.31063 21.688C2.0266 21.4039 1.92743 20.9838 2.05445 20.6028L3.41556 16.5194C3.67368 15.7451 3.80273 15.3579 3.97634 14.9936C4.18114 14.5639 4.43213 14.1578 4.7249 13.7824C4.97307 13.4643 5.26165 13.1757 5.83874 12.5986L14.4386 4Z`,
		fill: `currentColor`
	})]
}));
i$7.displayName = `Pen`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/notes/BoldDuotone/Clipboard.mjs
var { forwardRef: t$6 } = await importShared("react");
var i$6 = t$6((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [
		(0, import_jsx_runtime.jsx)(`path`, {
			opacity: `0.5`,
			d: `M21 15.9983V9.99826C21 7.16983 21 5.75562 20.1213 4.87694C19.3529 4.10856 18.175 4.01211 16 4H8C5.82497 4.01211 4.64706 4.10856 3.87868 4.87694C3 5.75562 3 7.16983 3 9.99826V15.9983C3 18.8267 3 20.2409 3.87868 21.1196C4.75736 21.9983 6.17157 21.9983 9 21.9983H15C17.8284 21.9983 19.2426 21.9983 20.1213 21.1196C21 20.2409 21 18.8267 21 15.9983Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			fillRule: `evenodd`,
			clipRule: `evenodd`,
			d: `M6.25 10.5C6.25 10.0858 6.58579 9.75 7 9.75H17C17.4142 9.75 17.75 10.0858 17.75 10.5C17.75 10.9142 17.4142 11.25 17 11.25H7C6.58579 11.25 6.25 10.9142 6.25 10.5ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H16C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14ZM8.25 17.5C8.25 17.0858 8.58579 16.75 9 16.75H15C15.4142 16.75 15.75 17.0858 15.75 17.5C15.75 17.9142 15.4142 18.25 15 18.25H9C8.58579 18.25 8.25 17.9142 8.25 17.5Z`,
			fill: `currentColor`
		})
	]
}));
i$6.displayName = `Clipboard`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/school/BoldDuotone/Bookmark.mjs
var { forwardRef: t$5 } = await importShared("react");
var i$5 = t$5((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		d: `M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		d: `M9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75H15C15.4142 6.75 15.75 6.41421 15.75 6C15.75 5.58579 15.4142 5.25 15 5.25H9Z`,
		fill: `currentColor`
	})]
}));
i$5.displayName = `Bookmark`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/settings/BoldDuotone/Widget6.mjs
var { forwardRef: t$4 } = await importShared("react");
var i$4 = t$4((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M2 17.5C2 15.0147 4.01472 13 6.5 13H9.2C9.83006 13 10.1451 13 10.3857 13.1226C10.5974 13.2305 10.7695 13.4026 10.8774 13.6143C11 13.8549 11 14.1699 11 14.8V17.5C11 19.9853 8.98528 22 6.5 22C4.01472 22 2 19.9853 2 17.5Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M13 6.5C13 4.01472 15.0147 2 17.5 2C19.9853 2 22 4.01472 22 6.5C22 8.98528 19.9853 11 17.5 11H14.2857C14.1365 11 14.0618 11 13.999 10.9929C13.4775 10.9342 13.0658 10.5225 13.0071 10.001C13 9.93818 13 9.86355 13 9.71429V6.5Z`,
			fill: `currentColor`
		}),
		(0, import_jsx_runtime.jsxs)(`g`, {
			opacity: `0.5`,
			children: [(0, import_jsx_runtime.jsx)(`path`, {
				d: `M2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5V9.5C11 9.84874 11 10.0231 10.9617 10.1662C10.8576 10.5544 10.5544 10.8576 10.1662 10.9617C10.0231 11 9.84874 11 9.5 11H6.5C4.01472 11 2 8.98528 2 6.5Z`,
				fill: `currentColor`
			}), (0, import_jsx_runtime.jsx)(`path`, {
				d: `M13 14.5C13 14.1513 13 13.9769 13.0383 13.8338C13.1424 13.4456 13.4456 13.1424 13.8338 13.0383C13.9769 13 14.1513 13 14.5 13H17.5C19.9853 13 22 15.0147 22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5V14.5Z`,
				fill: `currentColor`
			})]
		})
	]
}));
i$4.displayName = `Widget6`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/ui/BoldDuotone/Copy.mjs
var { forwardRef: t$3 } = await importShared("react");
var i$3 = t$3((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		d: `M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		d: `M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z`,
		fill: `currentColor`
	})]
}));
i$3.displayName = `Copy`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/ui/BoldDuotone/TrashBin2.mjs
var { forwardRef: t$2 } = await importShared("react");
var i$2 = t$2((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		d: `M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		d: `M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z`,
		fill: `currentColor`
	})]
}));
i$2.displayName = `TrashBin2`;
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/video/BoldDuotone/Play.mjs
var { forwardRef: t$1 } = await importShared("react");
var i$1 = t$1((t, i) => (0, import_jsx_runtime.jsxs)(r$17, {
	ref: i,
	...t,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		fillRule: `evenodd`,
		clipRule: `evenodd`,
		d: `M23 12C23 10.9648 22.4695 9.92953 21.4086 9.35258L8.59661 2.38548C6.53435 1.26402 4 2.72368 4 5.0329L4 12H23Z`,
		fill: `currentColor`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		opacity: `0.5`,
		d: `M8.59662 21.6145L21.4086 14.6474C22.4695 14.0705 23 13.0352 23 12H4L4 18.9671C4 21.2763 6.53435 22.736 8.59662 21.6145Z`,
		fill: `currentColor`
	})]
}));
i$1.displayName = `Play`;
//#endregion
//#region extension/src/cross/CrossUtils.ts
var customActionsChannels = {
	setCards: "customActions_setCards",
	getCards: "customActions_getCards",
	startExe: "customActions_startExe",
	exportToFile: "customActions_exportToFile",
	importFromFile: "customActions_importFromFile"
};
//#endregion
//#region src/renderer/mainWindow/redux/reducers/app.ts
var { useSelector: useSelector$10 } = await importShared("react-redux");
var appSlice = createSlice({
	name: "app",
	initialState: {
		darkMode: true,
		fullscreen: false,
		isOnline: false,
		maximized: false,
		onFocus: true,
		navBar: true,
		appTitle: void 0,
		initializer: {
			showWizard: false,
			isUpgradeFlow: false
		}
	},
	reducers: {
		setAppState: (state, action) => {
			state[action.payload.key] = action.payload.value;
		},
		setAppTitle: (state, action) => {
			state.appTitle = action.payload;
		},
		toggleAppState: (state, action) => {
			const key = action.payload;
			state[key] = !state[key];
		}
	}
});
/**
* Hook to access app state
* @param key - The key of the app state to retrieve
* @returns The value of the specified app state
*/
var useAppState = (key) => useSelector$10((state) => state.app[key]);
appSlice.actions;
appSlice.reducer;
//#endregion
//#region node_modules/overlayscrollbars/overlayscrollbars.mjs
/*!
* OverlayScrollbars
* Version: 2.16.0
*
* Copyright (c) Rene Haas | KingSora.
* https://github.com/KingSora
*
* Released under the MIT license.
*/
var createCache = (t, n) => {
	const { o, i: s, u: e } = t;
	let c = o;
	let r;
	const cacheUpdateContextual = (t, n) => {
		const o = c;
		const i = t;
		const l = n || (s ? !s(o, i) : o !== i);
		if (l || e) {
			c = i;
			r = o;
		}
		return [
			c,
			l,
			r
		];
	};
	const cacheUpdateIsolated = (t) => cacheUpdateContextual(n(c, r), t);
	const getCurrentCache = (t) => [
		c,
		!!t,
		r
	];
	return [n ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
};
var n$1 = typeof window !== "undefined" && typeof HTMLElement !== "undefined" && !!window.document ? window : {};
var o = Math.max;
var s = Math.min;
var e = Math.round;
var c = Math.abs;
var r$1 = Math.sign;
var i = n$1.cancelAnimationFrame;
var l = n$1.requestAnimationFrame;
var a = n$1.setTimeout;
var u = n$1.clearTimeout;
var getApi = (t) => typeof n$1[t] !== "undefined" ? n$1[t] : void 0;
var f = getApi("MutationObserver");
var _ = getApi("IntersectionObserver");
var d$1 = getApi("ResizeObserver");
var p$1 = getApi("ScrollTimeline");
var isUndefined = (t) => t === void 0;
var isNull = (t) => t === null;
var isNumber = (t) => typeof t === "number";
var isString = (t) => typeof t === "string";
var isBoolean = (t) => typeof t === "boolean";
var isFunction = (t) => typeof t === "function";
var isArray = (t) => Array.isArray(t);
var isObject$1 = (t) => typeof t === "object" && !isArray(t) && !isNull(t);
var isArrayLike = (t) => {
	const n = !!t && t.length;
	const o = isNumber(n) && n > -1 && n % 1 == 0;
	return isArray(t) || !isFunction(t) && o ? n > 0 && isObject$1(t) ? n - 1 in t : true : false;
};
var isPlainObject = (t) => !!t && t.constructor === Object;
var isHTMLElement$1 = (t) => t instanceof HTMLElement;
var isElement = (t) => t instanceof Element;
function each(t, n) {
	if (isArrayLike(t)) {
		for (let o = 0; o < t.length; o++) if (n(t[o], o, t) === false) break;
	} else if (t) each(Object.keys(t), ((o) => n(t[o], o, t)));
	return t;
}
var inArray = (t, n) => t.indexOf(n) >= 0;
var concat = (t, n) => t.concat(n);
var push = (t, n, o) => {
	if (!isString(n) && isArrayLike(n)) Array.prototype.push.apply(t, n);
	else t.push(n);
	return t;
};
var from = (t) => Array.from(t || []);
var createOrKeepArray = (t) => {
	if (isArray(t)) return t;
	return !isString(t) && isArrayLike(t) ? from(t) : [t];
};
var isEmptyArray = (t) => !!t && !t.length;
var deduplicateArray = (t) => from(new Set(t));
var runEachAndClear = (t, n, o) => {
	const runFn = (t) => t ? t.apply(void 0, n || []) : true;
	each(t, runFn);
	if (!o) t.length = 0;
};
var v = "paddingTop";
var g$1 = "paddingRight";
var h = "paddingLeft";
var b = "paddingBottom";
var y = "marginLeft";
var w$1 = "marginRight";
var S$1 = "marginBottom";
var m = "overflowX";
var O$1 = "overflowY";
var C$1 = "width";
var $ = "height";
var x = "visible";
var H = "hidden";
var E$1 = "scroll";
var capitalizeFirstLetter = (t) => {
	const n = String(t || "");
	return n ? n[0].toUpperCase() + n.slice(1) : "";
};
var equal = (t, n, o, s) => {
	if (t && n) {
		let s = true;
		each(o, ((o) => {
			if (t[o] !== n[o]) s = false;
		}));
		return s;
	}
	return false;
};
var equalWH = (t, n) => equal(t, n, ["w", "h"]);
var equalXY = (t, n) => equal(t, n, ["x", "y"]);
var equalTRBL = (t, n) => equal(t, n, [
	"t",
	"r",
	"b",
	"l"
]);
var bind = (t, ...n) => t.bind(0, ...n);
var selfClearTimeout = (t) => {
	let n;
	const o = t ? a : l;
	const s = t ? u : i;
	return [(e) => {
		s(n);
		n = o((() => e()), isFunction(t) ? t() : t);
	}, () => s(n)];
};
var getDebouncer = (t) => {
	const n = isFunction(t) ? t() : t;
	if (isNumber(n)) {
		const t = n ? a : l;
		const o = n ? u : i;
		return (s) => {
			const e = t((() => s()), n);
			return () => {
				o(e);
			};
		};
	}
	return n && n._;
};
var debounce = (t, n) => {
	const { p: o, v: s, S: e, m: c } = n || {};
	let r;
	let i;
	let l;
	let a;
	const u = function invokeFunctionToDebounce(n) {
		if (i) i();
		if (r) r();
		a = i = r = l = void 0;
		t.apply(this, n);
	};
	const mergeParms = (t) => c && l ? c(l, t) : t;
	const flush = () => {
		if (i && l) u(mergeParms(l) || l);
	};
	const f = function debouncedFn() {
		const t = from(arguments);
		const n = getDebouncer(o);
		if (n) {
			const o = typeof e === "function" ? e() : e;
			const c = getDebouncer(s);
			const _ = mergeParms(t) || t;
			const d = u.bind(0, _);
			if (i) i();
			if (o && !a) {
				d();
				a = true;
				i = n((() => a = void 0));
			} else {
				i = n(d);
				if (c && !r) r = c(flush);
			}
			l = _;
		} else u(t);
	};
	f.O = flush;
	return f;
};
var hasOwnProperty = (t, n) => Object.prototype.hasOwnProperty.call(t, n);
var keys = (t) => t ? Object.keys(t) : [];
var assignDeep = (t, n, o, s, e, c, r) => {
	const i = [
		n,
		o,
		s,
		e,
		c,
		r
	];
	if ((typeof t !== "object" || isNull(t)) && !isFunction(t)) t = {};
	each(i, ((n) => {
		each(n, ((o, s) => {
			const e = n[s];
			if (t === e) return true;
			const c = isArray(e);
			if (e && isPlainObject(e)) {
				const n = t[s];
				let o = n;
				if (c && !isArray(n)) o = [];
				else if (!c && !isPlainObject(n)) o = {};
				t[s] = assignDeep(o, e);
			} else t[s] = c ? e.slice() : e;
		}));
	}));
	return t;
};
var removeUndefinedProperties = (t, n) => each(assignDeep({}, t), ((t, n, o) => {
	if (t === void 0) delete o[n];
	else if (t && isPlainObject(t)) o[n] = removeUndefinedProperties(t);
}));
var isEmptyObject = (t) => !keys(t).length;
var noop$1 = () => {};
var capNumber = (t, n, e) => o(t, s(n, e));
var getDomTokensArray = (t) => deduplicateArray((isArray(t) ? t : (t || "").split(" ")).filter(((t) => t)));
var getAttr = (t, n) => t && t.getAttribute(n);
var hasAttr = (t, n) => t && t.hasAttribute(n);
var setAttrs = (t, n, o) => {
	each(getDomTokensArray(n), ((n) => {
		if (t) t.setAttribute(n, String(o || ""));
	}));
};
var removeAttrs = (t, n) => {
	each(getDomTokensArray(n), ((n) => t && t.removeAttribute(n)));
};
var domTokenListAttr = (t, n) => {
	const o = getDomTokensArray(getAttr(t, n));
	const s = bind(setAttrs, t, n);
	const domTokenListOperation = (t, n) => {
		const s = new Set(o);
		each(getDomTokensArray(t), ((t) => {
			s[n](t);
		}));
		return from(s).join(" ");
	};
	return {
		C: (t) => s(domTokenListOperation(t, "delete")),
		$: (t) => s(domTokenListOperation(t, "add")),
		H: (t) => {
			const n = getDomTokensArray(t);
			return n.reduce(((t, n) => t && o.includes(n)), n.length > 0);
		}
	};
};
var removeAttrClass = (t, n, o) => {
	domTokenListAttr(t, n).C(o);
	return bind(addAttrClass, t, n, o);
};
var addAttrClass = (t, n, o) => {
	domTokenListAttr(t, n).$(o);
	return bind(removeAttrClass, t, n, o);
};
var addRemoveAttrClass = (t, n, o, s) => (s ? addAttrClass : removeAttrClass)(t, n, o);
var hasAttrClass = (t, n, o) => domTokenListAttr(t, n).H(o);
var createDomTokenListClass = (t) => domTokenListAttr(t, "class");
var removeClass = (t, n) => {
	createDomTokenListClass(t).C(n);
};
var addClass = (t, n) => {
	createDomTokenListClass(t).$(n);
	return bind(removeClass, t, n);
};
var find = (t, n) => {
	const o = n ? isElement(n) && n : document;
	return o ? from(o.querySelectorAll(t)) : [];
};
var findFirst = (t, n) => {
	const o = n ? isElement(n) && n : document;
	return o && o.querySelector(t);
};
var is = (t, n) => isElement(t) && t.matches(n);
var isBodyElement = (t) => is(t, "body");
var contents = (t) => t ? from(t.childNodes) : [];
var parent = (t) => t && t.parentElement;
var closest = (t, n) => isElement(t) && t.closest(n);
var getFocusedElement = (t) => document.activeElement;
var liesBetween = (t, n, o) => {
	const s = closest(t, n);
	const e = t && findFirst(o, s);
	const c = closest(e, n) === s;
	return s && e ? s === t || e === t || c && closest(closest(t, o), n) !== s : false;
};
var removeElements = (t) => {
	each(createOrKeepArray(t), ((t) => {
		const n = parent(t);
		if (t && n) n.removeChild(t);
	}));
};
var appendChildren = (t, n) => bind(removeElements, t && n && each(createOrKeepArray(n), ((n) => {
	if (n) t.appendChild(n);
})));
var D;
var getTrustedTypePolicy = () => D;
var setTrustedTypePolicy = (t) => {
	D = t;
};
var createDiv = (t) => {
	const n = document.createElement("div");
	setAttrs(n, "class", t);
	return n;
};
var createDOM = (t) => {
	const n = createDiv();
	const o = getTrustedTypePolicy();
	const s = t.trim();
	n.innerHTML = o ? o.createHTML(s) : s;
	return each(contents(n), ((t) => removeElements(t)));
};
var getCSSVal = (t, n) => t.getPropertyValue(n) || t[n] || "";
var validFiniteNumber = (t) => {
	const n = t || 0;
	return isFinite(n) ? n : 0;
};
var parseToZeroOrNumber = (t) => validFiniteNumber(parseFloat(t || ""));
var roundCssNumber = (t) => Math.round(t * 1e4) / 1e4;
var numberToCssPx = (t) => `${roundCssNumber(validFiniteNumber(t))}px`;
function setStyles(t, n) {
	t && n && each(n, ((n, o) => {
		try {
			const s = t.style;
			const e = isNull(n) || isBoolean(n) ? "" : isNumber(n) ? numberToCssPx(n) : n;
			if (o.indexOf("--") === 0) s.setProperty(o, e);
			else s[o] = e;
		} catch (s) {}
	}));
}
function getStyles(t, o, s) {
	const e = isString(o);
	let c = e ? "" : {};
	if (t) {
		const r = n$1.getComputedStyle(t, s) || t.style;
		c = e ? getCSSVal(r, o) : from(o).reduce(((t, n) => {
			t[n] = getCSSVal(r, n);
			return t;
		}), c);
	}
	return c;
}
var topRightBottomLeft = (t, n, o) => {
	const s = n ? `${n}-` : "";
	const e = o ? `-${o}` : "";
	const c = `${s}top${e}`;
	const r = `${s}right${e}`;
	const i = `${s}bottom${e}`;
	const l = `${s}left${e}`;
	const a = getStyles(t, [
		c,
		r,
		i,
		l
	]);
	return {
		t: parseToZeroOrNumber(a[c]),
		r: parseToZeroOrNumber(a[r]),
		b: parseToZeroOrNumber(a[i]),
		l: parseToZeroOrNumber(a[l])
	};
};
var getTrasformTranslateValue = (t, n) => `translate${isObject$1(t) ? `(${t.x},${t.y})` : `${n ? "X" : "Y"}(${t})`}`;
var elementHasDimensions = (t) => !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
var z = {
	w: 0,
	h: 0
};
var getElmWidthHeightProperty = (t, n) => n ? {
	w: n[`${t}Width`],
	h: n[`${t}Height`]
} : z;
var getWindowSize = (t) => getElmWidthHeightProperty("inner", t || n$1);
var I = bind(getElmWidthHeightProperty, "offset");
var A = bind(getElmWidthHeightProperty, "client");
var T = bind(getElmWidthHeightProperty, "scroll");
var getFractionalSize = (t) => {
	const n = parseFloat(getStyles(t, C$1)) || 0;
	const o = parseFloat(getStyles(t, $)) || 0;
	return {
		w: n - e(n),
		h: o - e(o)
	};
};
var getBoundingClientRect = (t) => t.getBoundingClientRect();
var hasDimensions = (t) => !!t && elementHasDimensions(t);
var domRectHasDimensions = (t) => !!(t && (t[$] || t[C$1]));
var domRectAppeared = (t, n) => {
	const o = domRectHasDimensions(t);
	return !domRectHasDimensions(n) && o;
};
var removeEventListener = (t, n, o, s) => {
	each(getDomTokensArray(n), ((n) => {
		if (t) t.removeEventListener(n, o, s);
	}));
};
var addEventListener = (t, n, o, s) => {
	var e;
	const c = (e = s && s.D) != null ? e : true;
	const r = s && s.I || false;
	const i = s && s.A || false;
	const l = {
		passive: c,
		capture: r
	};
	return bind(runEachAndClear, getDomTokensArray(n).map(((n) => {
		const s = i ? (e) => {
			removeEventListener(t, n, s, r);
			if (o) o(e);
		} : o;
		if (t) t.addEventListener(n, s, l);
		return bind(removeEventListener, t, n, s, r);
	})));
};
var stopPropagation = (t) => t.stopPropagation();
var preventDefault = (t) => t.preventDefault();
var stopAndPrevent = (t) => stopPropagation(t) || preventDefault(t);
var scrollElementTo = (t, n) => {
	const { x: o, y: s } = isNumber(n) ? {
		x: n,
		y: n
	} : n || {};
	isNumber(o) && (t.scrollLeft = o);
	isNumber(s) && (t.scrollTop = s);
};
var getElementScroll = (t) => ({
	x: t.scrollLeft,
	y: t.scrollTop
});
var getZeroScrollCoordinates = () => ({
	T: {
		x: 0,
		y: 0
	},
	k: {
		x: 0,
		y: 0
	}
});
var sanitizeScrollCoordinates = (t, n) => {
	const { T: o, k: s } = t;
	const { w: e, h: i } = n;
	const sanitizeAxis = (t, n, o) => {
		let s = r$1(t) * o;
		let e = r$1(n) * o;
		if (s === e) {
			const o = c(t);
			const r = c(n);
			e = o > r ? 0 : e;
			s = o < r ? 0 : s;
		}
		s = s === e ? 0 : s;
		return [s + 0, e + 0];
	};
	const [l, a] = sanitizeAxis(o.x, s.x, e);
	const [u, f] = sanitizeAxis(o.y, s.y, i);
	return {
		T: {
			x: l,
			y: u
		},
		k: {
			x: a,
			y: f
		}
	};
};
var isDefaultDirectionScrollCoordinates = ({ T: t, k: n }) => {
	const getAxis = (t, n) => t === 0 && t <= n;
	return {
		x: getAxis(t.x, n.x),
		y: getAxis(t.y, n.y)
	};
};
var getScrollCoordinatesPercent = ({ T: t, k: n }, o) => {
	const getAxis = (t, n, o) => capNumber(0, 1, (t - o) / (t - n) || 0);
	return {
		x: getAxis(t.x, n.x, o.x),
		y: getAxis(t.y, n.y, o.y)
	};
};
var focusElement = (t) => {
	if (t && t.focus) t.focus({
		preventScroll: true,
		focusVisible: false
	});
};
var manageListener = (t, n) => {
	each(createOrKeepArray(n), t);
};
var createEventListenerHub = (t) => {
	const n = /* @__PURE__ */ new Map();
	const removeEvent = (t, o) => {
		if (t) {
			const s = n.get(t);
			manageListener(((t) => {
				if (s) s[t ? "delete" : "clear"](t);
			}), o);
		} else {
			n.forEach(((t) => {
				t.clear();
			}));
			n.clear();
		}
	};
	const addEvent = (t, o) => {
		if (isString(t)) {
			const s = n.get(t) || /* @__PURE__ */ new Set();
			n.set(t, s);
			manageListener(((t) => {
				if (isFunction(t)) s.add(t);
			}), o);
			return bind(removeEvent, t, o);
		}
		if (isBoolean(o) && o) removeEvent();
		const s = keys(t);
		const e = [];
		each(s, ((n) => {
			const o = t[n];
			if (o) push(e, addEvent(n, o));
		}));
		return bind(runEachAndClear, e);
	};
	const triggerEvent = (t, o) => {
		each(from(n.get(t)), ((t) => {
			if (o && !isEmptyArray(o)) t.apply(0, o);
			else t();
		}));
	};
	addEvent(t || {});
	return [
		addEvent,
		removeEvent,
		triggerEvent
	];
};
var k = {};
var M = {};
var addPlugins = (t) => {
	each(t, ((t) => each(t, ((n, o) => {
		k[o] = t[o];
	}))));
};
var registerPluginModuleInstances = (t, n, o) => keys(t).map(((s) => {
	const { static: e, instance: c } = t[s];
	const [r, i, l] = o || [];
	const a = o ? c : e;
	if (a) {
		const t = o ? a(r, i, n) : a(n);
		return (l || M)[s] = t;
	}
}));
var getInstancePluginModuleInstance = (t, n) => t[n];
var getStaticPluginModuleInstance = (t) => getInstancePluginModuleInstance(M, t);
var R = "__osOptionsValidationPlugin";
var V = `data-overlayscrollbars`;
var L = "os-environment";
var P = `${L}-scrollbar-hidden`;
var U = `${V}-initialize`;
var N = "noClipping";
var q$1 = `${V}-body`;
var B = V;
var F$1 = "host";
var j = `${V}-viewport`;
var X = m;
var Y = O$1;
var W = "arrange";
var J = "measuring";
var G = "scrolling";
var K = "scrollbarHidden";
var Q = "noContent";
var Z = `${V}-padding`;
var tt = `${V}-content`;
var nt = "os-size-observer";
var ot = `${nt}-appear`;
var st = `${nt}-listener`;
`${st}`;
`${st}`;
var it = "os-trinsic-observer";
var lt = "os-theme-none";
var at = "os-scrollbar";
var ut = `${at}-rtl`;
var ft = `${at}-horizontal`;
var _t = `${at}-vertical`;
var dt = `${at}-track`;
var pt = `${at}-handle`;
var vt = `${at}-visible`;
var gt = `${at}-cornerless`;
var ht = `${at}-interaction`;
var bt = `${at}-unusable`;
var yt = `${at}-auto-hide`;
var wt = `${yt}-hidden`;
var St = `${at}-wheel`;
var mt = `${dt}-interactive`;
var Ot = `${pt}-interactive`;
var Ct = "__osSizeObserverPlugin";
var getShowNativeOverlaidScrollbars = (t, n) => {
	const { M: o } = n;
	const [s, e] = t("showNativeOverlaidScrollbars");
	return [s && o.x && o.y, e];
};
var overflowIsVisible = (t) => t.indexOf(x) === 0;
var overflowBehaviorToOverflowStyle = (t) => t.replace(`${x}-`, "");
var overflowCssValueToOverflowStyle = (t, n) => {
	if (t === "auto") return n ? E$1 : H;
	const o = t || H;
	return [
		H,
		E$1,
		x
	].includes(o) ? o : H;
};
var getElementOverflowStyle = (t, n) => {
	const { overflowX: o, overflowY: s } = getStyles(t, [m, O$1]);
	return {
		x: overflowCssValueToOverflowStyle(o, n.x),
		y: overflowCssValueToOverflowStyle(s, n.y)
	};
};
var xt = "__osScrollbarsHidingPlugin";
var Et = "__osClickScrollPlugin";
var opsStringify = (t) => JSON.stringify(t, ((t, n) => {
	if (isFunction(n)) throw 0;
	return n;
}));
var getPropByPath = (t, n) => t ? `${n}`.split(".").reduce(((t, n) => t && hasOwnProperty(t, n) ? t[n] : void 0), t) : void 0;
var zt = [0, 33];
var It = [33, 99];
var At = [
	222,
	666,
	true
];
var Tt = {
	paddingAbsolute: false,
	showNativeOverlaidScrollbars: false,
	update: {
		elementEvents: [["img", "load"]],
		debounce: {
			mutation: zt,
			resize: null,
			event: It,
			env: At
		},
		attributes: null,
		ignoreMutation: null,
		flowDirectionStyles: null
	},
	overflow: {
		x: "scroll",
		y: "scroll"
	},
	scrollbars: {
		theme: "os-theme-dark",
		visibility: "auto",
		autoHide: "never",
		autoHideDelay: 1300,
		autoHideSuspend: false,
		dragScroll: true,
		clickScroll: false,
		pointers: [
			"mouse",
			"touch",
			"pen"
		]
	}
};
var getOptionsDiff = (t, n) => {
	const o = {};
	each(concat(keys(n), keys(t)), ((s) => {
		const e = t[s];
		const c = n[s];
		if (isObject$1(e) && isObject$1(c)) {
			assignDeep(o[s] = {}, getOptionsDiff(e, c));
			if (isEmptyObject(o[s])) delete o[s];
		} else if (hasOwnProperty(n, s) && c !== e) {
			let t = true;
			if (isArray(e) || isArray(c)) try {
				if (opsStringify(e) === opsStringify(c)) t = false;
			} catch (r) {}
			if (t) o[s] = c;
		}
	}));
	return o;
};
var createOptionCheck = (t, n, o) => (s) => [getPropByPath(t, s), o || getPropByPath(n, s) !== void 0];
var kt;
var getNonce = () => kt;
var setNonce = (t) => {
	kt = t;
};
var Mt;
var createEnvironment = () => {
	const getNativeScrollbarSize = (t, n, o) => {
		appendChildren(document.body, t);
		appendChildren(document.body, t);
		const s = A(t);
		const e = I(t);
		const c = getFractionalSize(n);
		if (o) removeElements(t);
		return {
			x: e.h - s.h + c.h,
			y: e.w - s.w + c.w
		};
	};
	const getNativeScrollbarsHiding = (t) => {
		let n = false;
		const o = addClass(t, P);
		try {
			n = getStyles(t, "scrollbar-width") === "none" || getStyles(t, "display", "::-webkit-scrollbar") === "none";
		} catch (s) {}
		o();
		return n;
	};
	const s = createDOM(`<div class="${L}"><div></div><style>${`.${L}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${L} div{width:200%;height:200%;margin:10px 0}.${P}{scrollbar-width:none!important}.${P}::-webkit-scrollbar,.${P}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`)[0];
	const e = s.firstChild;
	const c = s.lastChild;
	const r = getNonce();
	if (r) c.nonce = r;
	const [i, , l] = createEventListenerHub();
	const [a, u] = createCache({
		o: getNativeScrollbarSize(s, e),
		i: equalXY
	}, bind(getNativeScrollbarSize, s, e, true));
	const [f] = u();
	const _ = getNativeScrollbarsHiding(s);
	const d = {
		x: f.x === 0,
		y: f.y === 0
	};
	const v = {
		elements: {
			host: null,
			padding: !_,
			viewport: (t) => _ && isBodyElement(t) && t,
			content: false
		},
		scrollbars: { slot: true },
		cancel: {
			nativeScrollbarsOverlaid: false,
			body: null
		}
	};
	const g = assignDeep({}, Tt);
	const h = bind(assignDeep, {}, g);
	const b = bind(assignDeep, {}, v);
	const y = {
		U: f,
		M: d,
		P: _,
		J: !!p$1,
		G: bind(i, "r"),
		K: b,
		Z: (t) => assignDeep(v, t) && b(),
		tt: h,
		nt: (t) => assignDeep(g, t) && h(),
		ot: assignDeep({}, v),
		st: assignDeep({}, g)
	};
	removeAttrs(s, "style");
	removeElements(s);
	addEventListener(n$1, "resize", (() => {
		l("r", []);
	}));
	if (isFunction(n$1.matchMedia) && !_ && (!d.x || !d.y)) {
		const addZoomListener = (t) => {
			addEventListener(n$1.matchMedia(`(resolution: ${n$1.devicePixelRatio}dppx)`), "change", (() => {
				t();
				addZoomListener(t);
			}), { A: true });
		};
		addZoomListener((() => {
			const [t, n] = a();
			assignDeep(y.U, t);
			l("r", [n]);
		}));
	}
	return y;
};
var getEnvironment = () => {
	if (!Mt) Mt = createEnvironment();
	return Mt;
};
var createEventContentChange = (t, n, o) => {
	let s = false;
	const e = o ? /* @__PURE__ */ new WeakMap() : false;
	const destroy = () => {
		s = true;
	};
	const updateElements = (c) => {
		if (e && o) each(o.map(((n) => {
			const [o, s] = n || [];
			return [s && o ? (c || find)(o, t) : [], s];
		})), ((o) => each(o[0], ((c) => {
			const r = o[1];
			const i = e.get(c) || [];
			if (t.contains(c) && r) {
				const t = addEventListener(c, r, ((o) => {
					if (s) {
						t();
						e.delete(c);
					} else n(o);
				}));
				e.set(c, push(i, t));
			} else {
				runEachAndClear(i);
				e.delete(c);
			}
		}))));
	};
	updateElements();
	return [destroy, updateElements];
};
var createDOMObserver = (t, n, o, s) => {
	let e = false;
	const { et: c, ct: r, rt: i, it: l, lt: a, ut: u } = s || {};
	const [_, d] = createEventContentChange(t, (() => e && o(true)), i);
	const p = c || [];
	const v = r || [];
	const g = concat(p, v);
	const observerCallback = (e, c) => {
		if (!isEmptyArray(c)) {
			const r = a || noop$1;
			const i = u || noop$1;
			const f = [];
			const _ = [];
			let p = false;
			let g = false;
			each(c, ((o) => {
				const { attributeName: e, target: c, type: a, oldValue: u, addedNodes: d, removedNodes: h } = o;
				const b = a === "attributes";
				const y = a === "childList";
				const w = t === c;
				const S = b && e;
				const m = S && getAttr(c, e || "");
				const O = isString(m) ? m : null;
				const C = S && u !== O;
				const $ = inArray(v, e) && C;
				if (n && (y || !w)) {
					const n = b && C;
					const a = n && l && is(c, l);
					const p = (a ? !r(c, e, u, O) : !b || n) && !i(o, !!a, t, s);
					each(d, ((t) => push(f, t)));
					each(h, ((t) => push(f, t)));
					g = g || p;
				}
				if (!n && w && C && !r(c, e, u, O)) {
					push(_, e);
					p = p || $;
				}
			}));
			d(((t) => deduplicateArray(f).reduce(((n, o) => {
				push(n, find(t, o));
				return is(o, t) ? push(n, o) : n;
			}), [])));
			if (n) {
				if (!e && g) o(false);
				return [false];
			}
			if (!isEmptyArray(_) || p) {
				const t = [deduplicateArray(_), p];
				if (!e) o.apply(0, t);
				return t;
			}
		}
	};
	const h = new f(bind(observerCallback, false));
	return [() => {
		h.observe(t, {
			attributes: true,
			attributeOldValue: true,
			attributeFilter: g,
			subtree: n,
			childList: n,
			characterData: n
		});
		e = true;
		return () => {
			if (e) {
				_();
				h.disconnect();
				e = false;
			}
		};
	}, () => {
		if (e) return observerCallback(true, h.takeRecords());
	}];
};
var Rt = null;
var createSizeObserver = (t, n, o) => {
	const { ft: s } = o || {};
	const e = getStaticPluginModuleInstance(Ct);
	const [c] = createCache({
		o: false,
		u: true
	});
	return () => {
		const o = [];
		const i = createDOM(`<div class="${nt}"><div class="${st}"></div></div>`)[0];
		const l = i.firstChild;
		const onSizeChangedCallbackProxy = (t) => {
			const o = isArray(t) && !isEmptyArray(t);
			let s = false;
			let e = false;
			if (o) {
				const n = t[0];
				const [o, , r] = c(n.contentRect);
				const i = domRectHasDimensions(o);
				e = domRectAppeared(o, r);
				s = !e && !i;
			} else e = t === true;
			if (!s) n({
				_t: true,
				ft: e
			});
		};
		if (d$1) {
			if (!isBoolean(Rt)) {
				const n = new d$1(noop$1);
				n.observe(t, { get box() {
					Rt = true;
				} });
				Rt = Rt || false;
				n.disconnect();
			}
			const n = debounce(onSizeChangedCallbackProxy, {
				p: 0,
				v: 0
			});
			const resizeObserverCallback = (t) => n(t);
			const s = new d$1(resizeObserverCallback);
			s.observe(Rt ? t : l);
			push(o, [() => {
				s.disconnect();
			}, !Rt && appendChildren(t, i)]);
			if (Rt) {
				const n = new d$1(resizeObserverCallback);
				n.observe(t, { box: "border-box" });
				push(o, (() => n.disconnect()));
			}
		} else if (e) {
			const [n, c] = e(l, onSizeChangedCallbackProxy, s);
			push(o, concat([
				addClass(i, ot),
				addEventListener(i, "animationstart", n),
				appendChildren(t, i)
			], c));
		} else return noop$1;
		return bind(runEachAndClear, o);
	};
};
var createTrinsicObserver = (t, n) => {
	let o;
	const isHeightIntrinsic = (t) => t.h === 0 || t.isIntersecting || t.intersectionRatio > 0;
	const s = createDiv(it);
	const [e] = createCache({ o: false });
	const triggerOnTrinsicChangedCallback = (t, o) => {
		if (t) {
			const s = e(isHeightIntrinsic(t));
			const [, c] = s;
			return c && !o && n(s) && [s];
		}
	};
	const intersectionObserverCallback = (t, n) => triggerOnTrinsicChangedCallback(n.pop(), t);
	return [() => {
		const n = [];
		if (_) {
			o = new _(bind(intersectionObserverCallback, false), { root: t });
			o.observe(s);
			push(n, (() => {
				o.disconnect();
			}));
		} else {
			const onSizeChanged = () => {
				triggerOnTrinsicChangedCallback(I(s));
			};
			push(n, createSizeObserver(s, onSizeChanged)());
			onSizeChanged();
		}
		return bind(runEachAndClear, push(n, appendChildren(t, s)));
	}, () => o && intersectionObserverCallback(true, o.takeRecords())];
};
var createObserversSetup = (t, n, o, s) => {
	let e;
	let c;
	let r;
	let i;
	let l;
	let a;
	let u;
	let f;
	const _ = `[${B}]`;
	const p = `[${j}]`;
	const v = [
		"id",
		"class",
		"style",
		"open",
		"wrap",
		"cols",
		"rows"
	];
	const { dt: g, vt: h, L: b, gt: y, ht: w, V: S, bt: m, yt: O, wt: C, St: $ } = t;
	const getDirectionIsRTL = (t) => getStyles(t, "direction") === "rtl";
	const createDebouncedObservesUpdate = () => {
		let t;
		let n;
		let o;
		const e = debounce(s, {
			p: () => t,
			v: () => n,
			S: () => o,
			m(t, n) {
				const [o] = t;
				const [s] = n;
				return [concat(keys(o), keys(s)).reduce(((t, n) => {
					t[n] = o[n] || s[n];
					return t;
				}), {})];
			}
		});
		const fn = (s, c) => {
			if (isArray(c)) {
				const [s, e, r] = c;
				t = s;
				n = e;
				o = r;
			} else if (isNumber(c)) {
				t = c;
				n = false;
				o = false;
			} else {
				t = false;
				n = false;
				o = false;
			}
			e(s);
		};
		fn.O = e.O;
		return fn;
	};
	const x = {
		Ot: false,
		B: getDirectionIsRTL(g)
	};
	const H = getEnvironment();
	const E = getStaticPluginModuleInstance(xt);
	const [D] = createCache({
		i: equalWH,
		o: {
			w: 0,
			h: 0
		}
	}, (() => {
		const s = E && E.R(t, n, x, H, o).Y;
		const c = !(m && S) && hasAttrClass(h, B, N);
		const r = !S && O(W);
		const i = r && getElementScroll(y);
		const l = i && $();
		const a = C(J, c);
		const u = r && s && s();
		const f = T(b);
		const _ = getFractionalSize(b);
		if (u) u();
		scrollElementTo(y, i);
		if (l) l();
		if (c) a();
		return {
			w: f.w + _.w,
			h: f.h + _.h
		};
	}));
	const z = createDebouncedObservesUpdate();
	const setDirection = (t) => {
		const n = getDirectionIsRTL(g);
		assignDeep(t, { Ct: f !== n });
		assignDeep(x, { B: n });
		f = n;
	};
	const onTrinsicChanged = (t, n) => {
		const [o, e] = t;
		const c = { $t: e };
		assignDeep(x, { Ot: o });
		if (!n) s(c);
		return c;
	};
	const onSizeChanged = ({ _t: t, ft: n }) => {
		const o = n ? s : z;
		const e = {
			_t: t || n,
			ft: n
		};
		setDirection(e);
		o(e, c);
	};
	const onContentMutation = (t, n) => {
		const [, o] = D();
		const s = { xt: o };
		setDirection(s);
		if (o && !n) z(s, t ? r : e);
		return s;
	};
	const onHostMutation = (t, n, o) => {
		const s = { Ht: n };
		setDirection(s);
		if (n && !o) z(s, e);
		return s;
	};
	const [I, A] = w ? createTrinsicObserver(h, onTrinsicChanged) : [];
	const k = !S && createSizeObserver(h, onSizeChanged, { ft: true });
	const [M, R] = createDOMObserver(h, false, onHostMutation, {
		ct: v,
		et: v
	});
	const V = S && d$1 && new d$1(((t) => {
		const n = t[t.length - 1].contentRect;
		onSizeChanged({
			_t: true,
			ft: domRectAppeared(n, u)
		});
		u = n;
	}));
	return [
		() => {
			if (V) V.observe(h);
			const t = k && k();
			const n = I && I();
			const o = M();
			const s = H.G(((t) => {
				const [, n] = D();
				z({
					Et: t,
					xt: n,
					_t: m
				}, i);
			}));
			return () => {
				if (V) V.disconnect();
				if (t) t();
				if (n) n();
				if (a) a();
				o();
				s();
			};
		},
		({ Dt: t, zt: n, It: o }) => {
			const s = {};
			const [u] = t("update.ignoreMutation");
			const [f, d] = t("update.attributes");
			const [g, h] = t("update.elementEvents");
			const [y, m] = t("update.debounce");
			const O = h || d;
			const C = n || o;
			const ignoreMutationFromOptions = (t) => isFunction(u) && !!u(t);
			if (O) {
				if (l) l();
				if (a) a();
				const [t, n] = createDOMObserver(w || b, true, onContentMutation, {
					et: concat(v, f || []),
					rt: g,
					it: _,
					ut: (t, n) => {
						const { target: o, attributeName: s } = t;
						return (!n && s && !S ? liesBetween(o, _, p) : false) || !!closest(o, `.${at}`) || ignoreMutationFromOptions(t);
					}
				});
				a = t();
				l = n;
			}
			if (m) {
				z.O();
				if (isArray(y) || isNumber(y)) {
					e = y;
					c = false;
					r = It;
					i = At;
				} else if (isPlainObject(y)) {
					e = y.mutation;
					c = y.resize;
					r = y.event;
					i = y.env;
				} else {
					e = false;
					c = false;
					r = false;
					i = false;
				}
			}
			if (C) {
				const t = R();
				const n = A && A();
				const o = l && l();
				if (t) assignDeep(s, onHostMutation(t[0], t[1], C));
				if (n) assignDeep(s, onTrinsicChanged(n[0], C));
				if (o) assignDeep(s, onContentMutation(o[0], C));
			}
			setDirection(s);
			return s;
		},
		x
	];
};
var resolveInitialization = (t, n) => isFunction(n) ? n.apply(0, t) : n;
var staticInitializationElement = (t, n, o, s) => {
	return resolveInitialization(t, isUndefined(s) ? o : s) || n.apply(0, t);
};
var dynamicInitializationElement = (t, n, o, s) => {
	const c = resolveInitialization(t, isUndefined(s) ? o : s);
	return !!c && (isHTMLElement$1(c) ? c : n.apply(0, t));
};
var cancelInitialization = (t, n) => {
	const { nativeScrollbarsOverlaid: o, body: s } = n || {};
	const { M: e, P: c, K: r } = getEnvironment();
	const { nativeScrollbarsOverlaid: i, body: l } = r().cancel;
	const a = o != null ? o : i;
	const u = isUndefined(s) ? l : s;
	const f = (e.x || e.y) && a;
	const _ = t && (isNull(u) ? !c : u);
	return !!f || !!_;
};
var createScrollbarsSetupElements = (t, n, o, s) => {
	const e = "--os-viewport-percent";
	const c = "--os-scroll-percent";
	const r = "--os-scroll-direction";
	const { K: i } = getEnvironment();
	const { scrollbars: l } = i();
	const { slot: a } = l;
	const { dt: u, vt: f, L: _, At: d, gt: v, bt: g, V: h } = n;
	const { scrollbars: b } = d ? {} : t;
	const { slot: y } = b || {};
	const w = [];
	const S = [];
	const m = [];
	const O = dynamicInitializationElement([
		u,
		f,
		_
	], (() => h && g ? u : f), a, y);
	const initScrollTimeline = (t) => {
		if (p$1) {
			let n = null;
			let s = [];
			const e = new p$1({
				source: v,
				axis: t
			});
			const cancelAnimation = () => {
				if (n) n.cancel();
				n = null;
			};
			const _setScrollPercentAnimation = (c) => {
				const { Tt: r } = o;
				const i = isDefaultDirectionScrollCoordinates(r)[t];
				const l = t === "x";
				const a = [getTrasformTranslateValue(0, l), getTrasformTranslateValue(`calc(-100% + 100cq${l ? "w" : "h"})`, l)];
				const u = i ? a : a.reverse();
				if (s[0] === u[0] && s[1] === u[1]) return cancelAnimation;
				s = u;
				cancelAnimation();
				n = c.kt.animate({
					clear: ["left"],
					transform: u
				}, { timeline: e });
				return cancelAnimation;
			};
			return { Mt: _setScrollPercentAnimation };
		}
	};
	const C = {
		x: initScrollTimeline("x"),
		y: initScrollTimeline("y")
	};
	const getViewportPercent = () => {
		const { Rt: t, Vt: n } = o;
		const getAxisValue = (t, n) => capNumber(0, 1, t / (t + n) || 0);
		return {
			x: getAxisValue(n.x, t.x),
			y: getAxisValue(n.y, t.y)
		};
	};
	const scrollbarStructureAddRemoveClass = (t, n, o) => {
		const s = o ? addClass : removeClass;
		each(t, ((t) => {
			s(t.Lt, n);
		}));
	};
	const scrollbarStyle = (t, n) => {
		each(t, ((t) => {
			const [o, s] = n(t);
			setStyles(o, s);
		}));
	};
	const scrollbarsAddRemoveClass = (t, n, o) => {
		const s = isBoolean(o);
		const e = s ? o : true;
		const c = s ? !o : true;
		if (e) scrollbarStructureAddRemoveClass(S, t, n);
		if (c) scrollbarStructureAddRemoveClass(m, t, n);
	};
	const refreshScrollbarsHandleLength = () => {
		const t = getViewportPercent();
		const createScrollbarStyleFn = (t) => (n) => [n.Lt, { [e]: roundCssNumber(t) + "" }];
		scrollbarStyle(S, createScrollbarStyleFn(t.x));
		scrollbarStyle(m, createScrollbarStyleFn(t.y));
	};
	const refreshScrollbarsHandleOffset = () => {
		if (!p$1) {
			const { Tt: t } = o;
			const n = getScrollCoordinatesPercent(t, getElementScroll(v));
			const createScrollbarStyleFn = (t) => (n) => [n.Lt, { [c]: roundCssNumber(t) + "" }];
			scrollbarStyle(S, createScrollbarStyleFn(n.x));
			scrollbarStyle(m, createScrollbarStyleFn(n.y));
		}
	};
	const refreshScrollbarsScrollCoordinates = () => {
		const { Tt: t } = o;
		const n = isDefaultDirectionScrollCoordinates(t);
		const createScrollbarStyleFn = (t) => (n) => [n.Lt, { [r]: t ? "0" : "1" }];
		scrollbarStyle(S, createScrollbarStyleFn(n.x));
		scrollbarStyle(m, createScrollbarStyleFn(n.y));
		if (p$1) {
			S.forEach(C.x.Mt);
			m.forEach(C.y.Mt);
		}
	};
	const refreshScrollbarsScrollbarOffset = () => {
		if (h && !g) {
			const { Rt: t, Tt: n } = o;
			const s = isDefaultDirectionScrollCoordinates(n);
			const e = getScrollCoordinatesPercent(n, getElementScroll(v));
			const styleScrollbarPosition = (n) => {
				const { Lt: o } = n;
				const c = parent(o) === _ && o;
				const getTranslateValue = (t, n, o) => {
					const s = n * t;
					return numberToCssPx(o ? s : -s);
				};
				return [c, c && { transform: getTrasformTranslateValue({
					x: getTranslateValue(e.x, t.x, s.x),
					y: getTranslateValue(e.y, t.y, s.y)
				}) }];
			};
			scrollbarStyle(S, styleScrollbarPosition);
			scrollbarStyle(m, styleScrollbarPosition);
		}
	};
	const generateScrollbarDOM = (t) => {
		const n = t ? "x" : "y";
		const e = createDiv(`${at} ${t ? ft : _t}`);
		const c = createDiv(dt);
		const r = createDiv(pt);
		const i = {
			Lt: e,
			Pt: c,
			kt: r
		};
		const l = C[n];
		push(t ? S : m, i);
		push(w, [
			appendChildren(e, c),
			appendChildren(c, r),
			bind(removeElements, e),
			l && l.Mt(i),
			s(i, scrollbarsAddRemoveClass, t)
		]);
		return i;
	};
	const $ = bind(generateScrollbarDOM, true);
	const x = bind(generateScrollbarDOM, false);
	const appendElements = () => {
		appendChildren(O, S[0].Lt);
		appendChildren(O, m[0].Lt);
		return bind(runEachAndClear, w);
	};
	$();
	x();
	return [{
		Ut: refreshScrollbarsHandleLength,
		Nt: refreshScrollbarsHandleOffset,
		qt: refreshScrollbarsScrollCoordinates,
		Bt: refreshScrollbarsScrollbarOffset,
		Ft: scrollbarsAddRemoveClass,
		jt: {
			Xt: S,
			Yt: $,
			Wt: bind(scrollbarStyle, S)
		},
		Jt: {
			Xt: m,
			Yt: x,
			Wt: bind(scrollbarStyle, m)
		}
	}, appendElements];
};
var createScrollbarsSetupEvents = (t, n, o, s, r) => (i, l, u) => {
	const { vt: f, L: _, V: d, gt: p, Gt: v, St: g } = n;
	const { Lt: h, Pt: b, kt: y } = i;
	const [w, S] = selfClearTimeout(333);
	const [m, O] = selfClearTimeout(444);
	const scrollOffsetElementScrollBy = (t) => {
		if (isFunction(p.scrollBy)) p.scrollBy({
			behavior: "smooth",
			left: t.x,
			top: t.y
		});
	};
	const createInteractiveScrollEvents = () => {
		const n = "pointerup pointercancel lostpointercapture";
		const r = `client${u ? "X" : "Y"}`;
		const i = u ? C$1 : $;
		const l = u ? "left" : "top";
		const a = u ? "w" : "h";
		const f = u ? "x" : "y";
		const _ = [];
		return addEventListener(b, "pointerdown", s(((s) => {
			const d = closest(s.target, `.${pt}`) === y;
			const h = d ? y : b;
			const w = t.scrollbars;
			const S = w[d ? "dragScroll" : "clickScroll"];
			const { button: C, isPrimary: $, pointerType: x } = s;
			const { pointers: H } = w;
			if (C === 0 && $ && S && (H || []).includes(x)) {
				runEachAndClear(_);
				O();
				const t = !d && (s.shiftKey || S === "instant");
				const w = bind(getBoundingClientRect, y);
				const C = bind(getBoundingClientRect, b);
				const getHandleOffset = (t, n) => (t || w())[l] - (n || C())[l];
				const $ = e(getBoundingClientRect(p)[i]) / I(p)[a] || 1;
				const x = getElementScroll(p)[f];
				const scrollRelative = (t) => {
					scrollElementTo(p, { [f]: x + t });
				};
				const moveHandleRelative = (t) => {
					const { Rt: n } = o;
					const s = I(b)[a] - I(y)[a];
					scrollRelative(1 / $ * t / s * n[f]);
				};
				const H = s[r];
				const E = w();
				const D = C();
				const z = E[i];
				const A = getHandleOffset(E, D) + z / 2;
				const k = H - D[l] - A;
				const M = d ? 0 : k;
				const releasePointerCapture = (t) => {
					runEachAndClear(L);
					h.releasePointerCapture(t.pointerId);
				};
				const R = d || t;
				const V = g();
				const L = [
					addEventListener(v, n, releasePointerCapture),
					addEventListener(v, "selectstart", ((t) => preventDefault(t)), { D: false }),
					addEventListener(b, n, releasePointerCapture),
					R && addEventListener(b, "pointermove", ((t) => moveHandleRelative(M + t[r] - H))),
					R && (() => {
						const t = getElementScroll(p);
						V();
						const n = getElementScroll(p);
						const o = {
							x: n.x - t.x,
							y: n.y - t.y
						};
						if (c(o.x) > 3 || c(o.y) > 3) {
							g();
							scrollElementTo(p, t);
							scrollOffsetElementScrollBy(o);
							m(V);
						}
					})
				];
				h.setPointerCapture(s.pointerId);
				if (t) moveHandleRelative(k);
				else if (!d) {
					const t = getStaticPluginModuleInstance(Et);
					if (t) {
						const { Vt: n } = o;
						const s = t(scrollRelative, moveHandleRelative, bind(getHandleOffset), k, n[f], S, !!u, ((t) => {
							if (t) V();
							else push(L, V);
						}));
						push(L, s);
						push(_, bind(s, true));
					}
				}
			}
		})));
	};
	let x = true;
	return bind(runEachAndClear, [
		addEventListener(y, "pointermove pointerleave", s(r)),
		addEventListener(h, "pointerenter", s((() => {
			l(ht, true);
		}))),
		addEventListener(h, "pointerleave pointercancel", s((() => {
			l(ht, false);
		}))),
		addEventListener(h, "wheel", s(((t) => {
			const { deltaX: n, deltaY: o, deltaMode: s } = t;
			if (x && s === 0 && parent(h) === f) scrollOffsetElementScrollBy({
				x: n,
				y: o
			});
			x = false;
			l(St, true);
			w((() => {
				x = true;
				l(St);
			}));
			preventDefault(t);
		})), {
			D: false,
			I: true
		}),
		!d && addEventListener(h, "mousedown", s((() => {
			const t = getFocusedElement();
			if (hasAttr(t, j) || hasAttr(t, B) || t === document.body) a(bind(focusElement, _), 25);
		}))),
		addEventListener(h, "pointerdown", (() => {
			const t = addEventListener(v, "click", ((t) => {
				n();
				stopAndPrevent(t);
			}), {
				A: true,
				I: true,
				D: false
			});
			const n = addEventListener(v, "pointerup pointercancel", (() => {
				n();
				setTimeout(t, 150);
			}), {
				I: true,
				D: true
			});
		}), {
			I: true,
			D: true
		}),
		createInteractiveScrollEvents(),
		S,
		O
	]);
};
var createScrollbarsSetup = (t, n, o, s, e, c, r) => {
	let i;
	let l;
	let a;
	let u;
	let f;
	let _ = noop$1;
	let d = 0;
	const p = ["mouse", "pen"];
	const skipEventIfSleeping = (t) => (n) => {
		if (!o.Kt) t(n);
	};
	const isHoverablePointerType = (t) => p.includes(t.pointerType);
	const [v, g] = selfClearTimeout();
	const [h, b] = selfClearTimeout(100);
	const [y, w] = selfClearTimeout(50);
	const [S, m] = selfClearTimeout((() => d));
	const [O, C] = createScrollbarsSetupElements(t, c, e, createScrollbarsSetupEvents(n, c, e, skipEventIfSleeping, ((t) => isHoverablePointerType(t) && manageScrollbarsAutoHideInstantInteraction())));
	const { vt: $, Qt: H, bt: D } = c;
	const { Ft: z, Ut: I, Nt: A, qt: T, Bt: k } = O;
	const manageScrollbarsAutoHide = (t, n) => {
		m();
		const hide = (t) => {
			if (o.Kt) return;
			z(wt, t);
		};
		if (t) hide();
		else {
			const t = a ? !i : true;
			if (d > 0 && !n) S(bind(hide, t));
			else hide(t);
		}
	};
	const manageScrollbarsAutoHideInstantInteraction = () => {
		if (a ? !i : !u) {
			manageScrollbarsAutoHide(true);
			h((() => {
				manageScrollbarsAutoHide(false);
			}));
		}
	};
	const onHostMouseEnter = (t) => {
		if (isHoverablePointerType(t)) {
			i = true;
			if (!o.Kt && a) manageScrollbarsAutoHide(true);
		}
	};
	const onHostMouseLeave = (t) => {
		if (isHoverablePointerType(t)) {
			i = false;
			if (!o.Kt && a) manageScrollbarsAutoHide(false);
		}
	};
	const manageAutoHideSuspension = (t) => {
		z(yt, t, true);
		z(yt, t, false);
	};
	const M = [
		m,
		b,
		w,
		g,
		() => _(),
		addEventListener($, "pointerover", onHostMouseEnter, { A: true }),
		addEventListener($, "pointerenter", onHostMouseEnter),
		addEventListener($, "pointerleave", onHostMouseLeave),
		addEventListener($, "pointermove", skipEventIfSleeping(((t) => {
			if (isHoverablePointerType(t) && l) manageScrollbarsAutoHideInstantInteraction();
		}))),
		addEventListener(H, "scroll", skipEventIfSleeping(((t) => {
			v((() => {
				A();
				manageScrollbarsAutoHideInstantInteraction();
			}));
			r(t);
			k();
		})))
	];
	const R = getStaticPluginModuleInstance(xt);
	return [
		() => bind(runEachAndClear, push(M, C())),
		({ Dt: t, It: n, Zt: o, tn: c }) => {
			const { nn: r, sn: i, en: p, cn: v } = c || {};
			const { Ct: g, ft: h } = o || {};
			const { B: b } = s;
			const { M: w, P: S } = getEnvironment();
			const { rn: m, j: O } = e;
			const [C, $] = t("showNativeOverlaidScrollbars");
			const [M, V] = t("scrollbars.theme");
			const [L, P] = t("scrollbars.visibility");
			const [U, N] = t("scrollbars.autoHide");
			const [q, B] = t("scrollbars.autoHideSuspend");
			const [F] = t("scrollbars.autoHideDelay");
			const [j, X] = t("scrollbars.dragScroll");
			const [Y, W] = t("scrollbars.clickScroll");
			const [J, G] = t("overflow");
			const K = h && !n;
			const Q = r || i || v || g || n;
			const Z = p || P || G;
			const tt = C && w.x && w.y;
			const nt = !S && !R;
			const ot = tt || nt;
			const setScrollbarVisibility = (t, n, o) => {
				const s = t.includes(E$1) && (L === x || L === "auto" && n === E$1);
				z(vt, s, o);
				return s;
			};
			d = F;
			if ($ || nt) z(lt, ot);
			if (V) {
				z(f);
				z(M, true);
				f = M;
			}
			if (B || K) {
				manageAutoHideSuspension(!q);
				if (K && q) if (O.x || O.y) {
					_();
					y((() => {
						_ = addEventListener(H, E$1, skipEventIfSleeping(bind(manageAutoHideSuspension, true)), { A: true });
					}));
				} else manageAutoHideSuspension(true);
			}
			if (N) {
				l = U === "move";
				a = U === "leave";
				u = U === "never";
				manageScrollbarsAutoHide(u, true);
			}
			if (X) z(Ot, j);
			if (W) z(mt, !!Y);
			if (Z) {
				const t = setScrollbarVisibility(J.x, m.x, true);
				const n = setScrollbarVisibility(J.y, m.y, false);
				z(gt, !(t && n));
			}
			if (Q) {
				A();
				I();
				k();
				if (v) T();
				z(bt, !O.x, true);
				z(bt, !O.y, false);
				z(ut, b && !D);
			}
		},
		{},
		O
	];
};
var createStructureSetupElements = (t) => {
	const { K: s, P: e } = getEnvironment();
	const { elements: c } = s();
	const { padding: r, viewport: i, content: l } = c;
	const a = isHTMLElement$1(t);
	const u = a ? {} : t;
	const { elements: f } = u;
	const { padding: _, viewport: d, content: p } = f || {};
	const v = a ? t : u.target;
	const g = isBodyElement(v);
	const h = v.ownerDocument;
	const b = h.documentElement;
	const getDocumentWindow = () => h.defaultView || n$1;
	const y = bind(staticInitializationElement, [v]);
	const w = bind(dynamicInitializationElement, [v]);
	const S = bind(createDiv, "");
	const C = bind(y, S, i);
	const $ = bind(w, S, l);
	const elementHasOverflow = (t) => {
		const n = I(t);
		const o = T(t);
		const s = getStyles(t, m);
		const e = getStyles(t, O$1);
		return o.w - n.w > 0 && !overflowIsVisible(s) || o.h - n.h > 0 && !overflowIsVisible(e);
	};
	const x = C(d);
	const H = x === v;
	const E = H && g;
	const D = !H && $(p);
	const z = !H && x === D;
	const A = E ? b : x;
	const k = E ? A : v;
	const M = !H && w(S, r, _);
	const R = !z && D;
	const V = [
		R,
		A,
		M,
		k
	].map(((t) => isHTMLElement$1(t) && !parent(t) && t));
	const elementIsGenerated = (t) => t && inArray(V, t);
	const L = !elementIsGenerated(A) && elementHasOverflow(A) ? A : v;
	const P = E ? b : A;
	const X = {
		dt: v,
		vt: k,
		L: A,
		ln: M,
		ht: R,
		gt: P,
		Qt: E ? h : A,
		an: g ? b : L,
		Gt: h,
		bt: g,
		At: a,
		V: H,
		un: getDocumentWindow,
		yt: (t) => hasAttrClass(A, j, t),
		wt: (t, n) => addRemoveAttrClass(A, j, t, n),
		St: () => addRemoveAttrClass(P, j, G, true)
	};
	const { dt: Y, vt: W, ln: J, L: Q, ht: nt } = X;
	const ot = [() => {
		removeAttrs(W, [B, U]);
		removeAttrs(Y, U);
		if (g) removeAttrs(b, [U, B]);
	}];
	let st = contents([
		nt,
		Q,
		J,
		W,
		Y
	].find(((t) => t && !elementIsGenerated(t))));
	const et = E ? Y : nt || Q;
	const ct = bind(runEachAndClear, ot);
	const appendElements = () => {
		const t = getDocumentWindow();
		const n = getFocusedElement();
		const unwrap = (t) => {
			appendChildren(parent(t), contents(t));
			removeElements(t);
		};
		const prepareWrapUnwrapFocus = (t) => addEventListener(t, "focusin focusout focus blur", stopAndPrevent, {
			I: true,
			D: false
		});
		const o = "tabindex";
		const s = getAttr(Q, o);
		const c = prepareWrapUnwrapFocus(n);
		setAttrs(W, B, H ? "" : F$1);
		setAttrs(J, Z, "");
		setAttrs(Q, j, "");
		setAttrs(nt, tt, "");
		if (!H) {
			setAttrs(Q, o, s || "-1");
			if (g) setAttrs(b, q$1, "");
		}
		appendChildren(et, st);
		appendChildren(W, J);
		appendChildren(J || W, !H && Q);
		appendChildren(Q, nt);
		push(ot, [c, () => {
			const t = getFocusedElement();
			const n = elementIsGenerated(Q);
			const e = n && t === Q ? Y : t;
			const c = prepareWrapUnwrapFocus(e);
			removeAttrs(J, Z);
			removeAttrs(nt, tt);
			removeAttrs(Q, j);
			if (g) removeAttrs(b, q$1);
			if (s) setAttrs(Q, o, s);
			else removeAttrs(Q, o);
			if (elementIsGenerated(nt)) unwrap(nt);
			if (n) unwrap(Q);
			if (elementIsGenerated(J)) unwrap(J);
			focusElement(e);
			c();
		}]);
		if (e && !H) {
			addAttrClass(Q, j, K);
			push(ot, bind(removeAttrs, Q, j));
		}
		focusElement(!H && g && n === Y && t.top === t ? Q : n);
		c();
		st = 0;
		return ct;
	};
	return [
		X,
		appendElements,
		ct
	];
};
var createTrinsicUpdateSegment = ({ ht: t }) => ({ Zt: n, fn: o, It: s }) => {
	const { $t: e } = n || {};
	const { Ot: c } = o;
	if (t && (e || s)) setStyles(t, { [$]: c && "100%" });
};
var createPaddingUpdateSegment = ({ vt: t, ln: n, L: o, V: s }, e) => {
	const [c, r] = createCache({
		i: equalTRBL,
		o: topRightBottomLeft()
	}, bind(topRightBottomLeft, t, "padding", ""));
	return ({ Dt: t, Zt: i, fn: l, It: a }) => {
		let [u, f] = r(a);
		const { P: _ } = getEnvironment();
		const { _t: d, xt: p, Ct: m } = i || {};
		const { B: O } = l;
		const [$, x] = t("paddingAbsolute");
		if (d || f || a || p) [u, f] = c(a);
		const E = !s && (x || m || f);
		if (E) {
			const t = !$ || !n && !_;
			const s = u.r + u.l;
			const c = u.t + u.b;
			const r = {
				[w$1]: t && !O ? -s : 0,
				[S$1]: t ? -c : 0,
				[y]: t && O ? -s : 0,
				top: t ? -u.t : 0,
				right: t ? O ? -u.r : "auto" : 0,
				left: t ? O ? "auto" : -u.l : 0,
				[C$1]: t && `calc(100% + ${s}px)`
			};
			const i = {
				[v]: t ? u.t : 0,
				[g$1]: t ? u.r : 0,
				[b]: t ? u.b : 0,
				[h]: t ? u.l : 0
			};
			setStyles(n || o, r);
			setStyles(o, i);
			assignDeep(e, {
				ln: u,
				_n: !t,
				F: n ? i : assignDeep({}, r, i)
			});
		}
		return { dn: E };
	};
};
var createOverflowUpdateSegment = (t, s) => {
	const e = getEnvironment();
	const { vt: r, ln: i, L: a, V: u, Qt: f, gt: _, bt: d, wt: p, un: v } = t;
	const { P: g } = e;
	const h = d && u;
	const b = bind(o, 0);
	const y = {
		display: () => false,
		direction: (t) => t !== "ltr",
		flexDirection: (t) => t.endsWith("-reverse"),
		writingMode: (t) => t !== "horizontal-tb"
	};
	const w = keys(y);
	const S = {
		i: equalWH,
		o: {
			w: 0,
			h: 0
		}
	};
	const m = {
		i: equalXY,
		o: {}
	};
	const setMeasuringMode = (t) => {
		p(J, !h && t);
	};
	const getFlowDirectionStyles = () => getStyles(a, w);
	const getMeasuredScrollCoordinates = (t, n) => {
		const o = !keys(t).length;
		const s = n ? true : w.some(((n) => {
			const o = t[n];
			return isString(o) && y[n](o);
		}));
		if (o || !s || !hasDimensions(a)) return {
			T: {
				x: 0,
				y: 0
			},
			k: {
				x: 1,
				y: 1
			}
		};
		setMeasuringMode(true);
		const e = getElementScroll(_);
		const r = addEventListener(f, E$1, ((t) => {
			const n = getElementScroll(_);
			if (t.isTrusted && n.x === e.x && n.y === e.y) stopPropagation(t);
		}), {
			I: true,
			A: true
		});
		const i = p(Q, true);
		scrollElementTo(_, {
			x: 0,
			y: 0
		});
		i();
		const u = getElementScroll(_);
		const d = T(_);
		scrollElementTo(_, {
			x: d.w,
			y: d.h
		});
		const v = getElementScroll(_);
		const g = {
			x: v.x - u.x,
			y: v.y - u.y
		};
		scrollElementTo(_, {
			x: -d.w,
			y: -d.h
		});
		const h = getElementScroll(_);
		const b = {
			x: h.x - u.x,
			y: h.y - u.y
		};
		const S = {
			x: c(g.x) >= c(b.x) ? v.x : h.x,
			y: c(g.y) >= c(b.y) ? v.y : h.y
		};
		scrollElementTo(_, e);
		l((() => r()));
		return {
			T: u,
			k: S
		};
	};
	const getOverflowAmount = (t, o) => {
		const s = n$1.devicePixelRatio % 1 !== 0 ? 1 : 0;
		const e = {
			w: b(t.w - o.w),
			h: b(t.h - o.h)
		};
		return {
			w: e.w > s ? e.w : 0,
			h: e.h > s ? e.h : 0
		};
	};
	const getViewportOverflowStyle = (t, n) => {
		const getAxisOverflowStyle = (t, n, o, s) => {
			const e = t === x ? H : overflowBehaviorToOverflowStyle(t);
			const c = overflowIsVisible(t);
			const r = overflowIsVisible(o);
			if (!n && !s) return H;
			if (c && r) return x;
			if (c) return n && s ? e : n ? x : H;
			return n ? e : r && s ? x : H;
		};
		return {
			x: getAxisOverflowStyle(n.x, t.x, n.y, t.y),
			y: getAxisOverflowStyle(n.y, t.y, n.x, t.x)
		};
	};
	const setViewportOverflowStyle = (t) => {
		const createAllOverflowStyleClassNames = (t) => [
			x,
			H,
			E$1
		].map(((n) => createViewportOverflowStyleClassName(overflowCssValueToOverflowStyle(n), t)));
		p(createAllOverflowStyleClassNames(true).concat(createAllOverflowStyleClassNames()).join(" "));
		p(keys(t).map(((n) => createViewportOverflowStyleClassName(t[n], n === "x"))).join(" "), true);
	};
	const [O, C] = createCache(S, bind(getFractionalSize, a));
	const [$, D] = createCache(S, bind(T, a));
	const [z, I] = createCache(S);
	const [k] = createCache(m);
	const [M, R] = createCache(S);
	const [V] = createCache(m);
	const [L] = createCache({
		i: (t, n) => equal(t, n, deduplicateArray(concat(keys(t), keys(n)))),
		o: {}
	});
	const [P, U] = createCache({
		i: (t, n) => equalXY(t.T, n.T) && equalXY(t.k, n.k),
		o: getZeroScrollCoordinates()
	});
	const q = getStaticPluginModuleInstance(xt);
	const createViewportOverflowStyleClassName = (t, n) => {
		return `${n ? X : Y}${capitalizeFirstLetter(t)}`;
	};
	return ({ Dt: n, Zt: o, fn: c, It: l }, { dn: u }) => {
		const { _t: f, Ht: _, xt: d, Ct: y, ft: w, Et: S } = o || {};
		const { X: x, Y: H, W: E } = q && q.R(t, s, c, e, n) || {};
		const [T, F] = getShowNativeOverlaidScrollbars(n, e);
		const [j, X] = n("overflow");
		const Y = overflowIsVisible(j.x);
		const W = overflowIsVisible(j.y);
		const J = f || u || d || y || S || F;
		let G = C(l);
		let Q = D(l);
		let tt = I(l);
		let nt = R(l);
		if (F && g) p(K, !T);
		if (J) {
			if (hasAttrClass(r, B, N)) setMeasuringMode(true);
			const t = H && H();
			const [n] = G = O(l);
			const [o] = Q = $(l);
			const s = A(a);
			const e = h && getWindowSize(v());
			const c = {
				w: b(o.w + n.w),
				h: b(o.h + n.h)
			};
			const i = {
				w: b((e ? e.w : s.w + b(s.w - o.w)) + n.w),
				h: b((e ? e.h : s.h + b(s.h - o.h)) + n.h)
			};
			if (t) t();
			nt = M(i);
			tt = z(getOverflowAmount(c, i), l);
		}
		const [ot, st] = nt;
		const [et, ct] = tt;
		const [rt, it] = Q;
		const [lt, at] = G;
		const [ut] = k({
			x: et.w > 0,
			y: et.h > 0
		});
		const ft = Y && W && (ut.x || ut.y) || Y && ut.x && !ut.y || W && ut.y && !ut.x;
		const _t = u || y || S || at || it || st || ct || X || F || J || _ && h;
		const [dt] = n("update.flowDirectionStyles");
		const [pt, vt] = L(dt ? dt(a) || {} : getFlowDirectionStyles(), l);
		const [ht, bt] = y || w || vt || l ? P(getMeasuredScrollCoordinates(pt, !!dt), l) : U();
		let yt = getViewportOverflowStyle(ut, j);
		setMeasuringMode(false);
		if (_t) {
			setViewportOverflowStyle(yt);
			yt = getElementOverflowStyle(a, ut);
			if (E && x) {
				x(yt, rt, lt);
				setStyles(a, E(yt));
			}
		}
		const [wt, St] = V(yt);
		addRemoveAttrClass(r, B, N, ft);
		addRemoveAttrClass(i, Z, N, ft);
		assignDeep(s, {
			rn: wt,
			Vt: {
				x: ot.w,
				y: ot.h
			},
			Rt: {
				x: et.w,
				y: et.h
			},
			j: ut,
			Tt: sanitizeScrollCoordinates(ht, et)
		});
		return {
			en: St,
			nn: st,
			sn: ct,
			cn: bt || ct
		};
	};
};
var createStructureSetup = (t) => {
	const [n, o, s] = createStructureSetupElements(t);
	const e = {
		ln: {
			t: 0,
			r: 0,
			b: 0,
			l: 0
		},
		_n: false,
		F: {
			[w$1]: 0,
			[S$1]: 0,
			[y]: 0,
			[v]: 0,
			[g$1]: 0,
			[b]: 0,
			[h]: 0
		},
		Vt: {
			x: 0,
			y: 0
		},
		Rt: {
			x: 0,
			y: 0
		},
		rn: {
			x: H,
			y: H
		},
		j: {
			x: false,
			y: false
		},
		Tt: getZeroScrollCoordinates()
	};
	const { dt: c, gt: r, V: i, St: l } = n;
	const { P: a, M: u } = getEnvironment();
	const f = !a && (u.x || u.y);
	const _ = [
		createTrinsicUpdateSegment(n),
		createPaddingUpdateSegment(n, e),
		createOverflowUpdateSegment(n, e)
	];
	return [
		o,
		(t) => {
			const n = {};
			const s = f && getElementScroll(r);
			const e = s && l();
			each(_, ((o) => {
				assignDeep(n, o(t, n) || {});
			}));
			scrollElementTo(r, s);
			if (e) e();
			if (!i) scrollElementTo(c, 0);
			return n;
		},
		e,
		n,
		s
	];
};
var createSetups = (t, n, o, s) => {
	let e = false;
	const c = {
		Kt: false,
		pn: false
	};
	const r = createOptionCheck(n, {});
	const [i, l, a, u, f] = createStructureSetup(t);
	const [_, d, p] = createObserversSetup(u, a, r, ((t) => {
		update({}, t);
	}));
	const [v, g, , h] = createScrollbarsSetup(t, n, c, p, a, u, s);
	const updateHintsAreTruthy = (t) => keys(t).some(((n) => !!t[n]));
	const update = (t, s) => {
		const { Kt: r, pn: i } = c;
		if (i || r && e) return false;
		const { vn: a, It: u, zt: f } = t;
		const _ = a || {};
		const v = !!u || !e;
		const h = {
			Dt: createOptionCheck(n, _, v),
			vn: _,
			It: v
		};
		const b = s || d(assignDeep({}, h, { zt: f }));
		const y = l(assignDeep({}, h, {
			fn: p,
			Zt: b
		}));
		g(assignDeep({}, h, {
			Zt: b,
			tn: y
		}));
		const w = updateHintsAreTruthy(b);
		const S = updateHintsAreTruthy(y);
		const m = w || S || !isEmptyObject(_) || v;
		e = true;
		if (m) o(t, {
			Zt: b,
			tn: y
		});
		return m;
	};
	return [
		() => {
			const { an: t, gt: n, St: o } = u;
			const s = getElementScroll(t);
			const e = [
				_(),
				i(),
				v(),
				() => {
					c.pn = true;
				}
			];
			const r = o();
			scrollElementTo(n, s);
			r();
			return bind(runEachAndClear, e);
		},
		update,
		(t) => {
			const n = c.Kt;
			c.Kt = t;
			if (!t && n !== t) update({
				It: true,
				zt: true
			});
		},
		() => {
			g({
				Dt: createOptionCheck(n, {}, false),
				vn: {},
				It: false
			});
		},
		() => ({
			gn: c,
			hn: p,
			bn: a
		}),
		{
			yn: u,
			wn: h
		},
		f
	];
};
var Vt = /* @__PURE__ */ new WeakMap();
var addInstance = (t, n) => {
	Vt.set(t, n);
};
var removeInstance = (t) => {
	Vt.delete(t);
};
var getInstance = (t) => Vt.get(t);
var OverlayScrollbars = (t, n, o) => {
	const { tt: s } = getEnvironment();
	const e = isHTMLElement$1(t);
	const c = e ? t : t.target;
	const r = getInstance(c);
	if (n && !r) {
		const r = [];
		const i = {};
		const validateOptions = (t) => {
			const n = removeUndefinedProperties(t);
			const o = getStaticPluginModuleInstance(R);
			return o ? o(n, true) : n;
		};
		const l = assignDeep({}, s(), validateOptions(n));
		const [a, u, f] = createEventListenerHub();
		const [_, d, p] = createEventListenerHub(o);
		const triggerEvent = (t, n) => {
			p(t, n);
			f(t, n);
		};
		const [v, g, h, b, y, w, S] = createSetups(t, l, (({ vn: t, It: n }, { Zt: o, tn: s }) => {
			const { _t: e, Ct: c, $t: r, xt: i, Ht: l, ft: a } = o;
			const { nn: u, sn: f, en: _, cn: d } = s;
			triggerEvent("updated", [m, {
				updateHints: {
					sizeChanged: !!e,
					directionChanged: !!c,
					heightIntrinsicChanged: !!r,
					overflowEdgeChanged: !!u,
					overflowAmountChanged: !!f,
					overflowStyleChanged: !!_,
					scrollCoordinatesChanged: !!d,
					contentMutation: !!i,
					hostMutation: !!l,
					appear: !!a
				},
				changedOptions: t || {},
				force: !!n
			}]);
		}), ((t) => triggerEvent("scroll", [m, t])));
		const destroy = (t) => {
			const { gn: n } = y();
			const { pn: o } = n;
			if (o) return;
			removeInstance(c);
			runEachAndClear(r);
			triggerEvent("destroyed", [m, t]);
			u();
			d();
		};
		const update = (t) => g({
			It: t,
			zt: true
		});
		const m = {
			options(t, n) {
				if (t) {
					const e = getOptionsDiff(l, assignDeep(n ? s() : {}, validateOptions(t)));
					if (!isEmptyObject(e)) {
						assignDeep(l, e);
						g({ vn: e });
					}
				}
				return assignDeep({}, l);
			},
			on: _,
			off: (t, n) => {
				if (t && n) d(t, n);
			},
			state() {
				const { gn: t, hn: n, bn: o } = y();
				const { pn: s, Kt: e } = t;
				const { B: c } = n;
				const { Vt: r, Rt: i, rn: l, j: a, ln: u, _n: f, Tt: _ } = o;
				return assignDeep({}, {
					overflowEdge: r,
					overflowAmount: i,
					overflowStyle: l,
					hasOverflow: a,
					scrollCoordinates: {
						start: _.T,
						end: _.k
					},
					padding: u,
					paddingAbsolute: f,
					directionRTL: c,
					sleeping: e,
					destroyed: s
				});
			},
			elements() {
				const { dt: t, vt: n, ln: o, L: s, ht: e, gt: c, Qt: r } = w.yn;
				const { jt: i, Jt: l } = w.wn;
				const translateScrollbarStructure = (t) => {
					const { kt: n, Pt: o, Lt: s } = t;
					return {
						scrollbar: s,
						track: o,
						handle: n
					};
				};
				const translateScrollbarsSetupElement = (t) => {
					const { Xt: n, Yt: o } = t;
					return assignDeep({}, translateScrollbarStructure(n[0]), { clone: () => {
						const t = translateScrollbarStructure(o());
						b();
						return t;
					} });
				};
				return assignDeep({}, {
					target: t,
					host: n,
					padding: o || s,
					viewport: s,
					content: e || s,
					scrollOffsetElement: c,
					scrollEventElement: r,
					scrollbarHorizontal: translateScrollbarsSetupElement(i),
					scrollbarVertical: translateScrollbarsSetupElement(l)
				});
			},
			update,
			destroy: bind(destroy, false),
			sleep: h,
			plugin: (t) => i[keys(t)[0]]
		};
		push(r, [S]);
		addInstance(c, m);
		registerPluginModuleInstances(k, OverlayScrollbars, [
			m,
			a,
			i
		]);
		if (cancelInitialization(w.yn.bt, !e && t.cancel)) {
			destroy(true);
			return m;
		}
		push(r, v());
		triggerEvent("initialized", [m]);
		m.update();
		return m;
	}
	return r;
};
OverlayScrollbars.plugin = (t) => {
	const n = isArray(t);
	const o = n ? t : [t];
	const s = o.map(((t) => registerPluginModuleInstances(t, OverlayScrollbars)[0]));
	addPlugins(o);
	return n ? s : s[0];
};
OverlayScrollbars.valid = (t) => {
	const n = t && t.elements;
	const o = isFunction(n) && n();
	return isPlainObject(o) && !!getInstance(o.target);
};
OverlayScrollbars.env = () => {
	const { U: t, M: n, P: o, J: s, ot: e, st: c, K: r, Z: i, tt: l, nt: a } = getEnvironment();
	return assignDeep({}, {
		scrollbarsSize: t,
		scrollbarsOverlaid: n,
		scrollbarsHiding: o,
		scrollTimeline: s,
		staticDefaultInitialization: e,
		staticDefaultOptions: c,
		getDefaultInitialization: r,
		setDefaultInitialization: i,
		getDefaultOptions: l,
		setDefaultOptions: a
	});
};
OverlayScrollbars.nonce = setNonce;
OverlayScrollbars.trustedTypePolicy = setTrustedTypePolicy;
//#endregion
//#region node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs
var w = await importShared("react");
var { useMemo: C, useRef: d, useEffect: p, forwardRef: E, useImperativeHandle: O } = w;
var S = () => {
	if (typeof window > "u") {
		const n = () => {};
		return [n, n];
	}
	let l, o;
	const t = window, c = typeof t.requestIdleCallback == "function", a = t.requestAnimationFrame, i = t.cancelAnimationFrame, r = c ? t.requestIdleCallback : a, u = c ? t.cancelIdleCallback : i, s = () => {
		u(l), i(o);
	};
	return [(n, e) => {
		s(), l = r(c ? () => {
			s(), o = a(n);
		} : n, typeof e == "object" ? e : { timeout: 2233 });
	}, s];
}, F = (l) => {
	const { options: o, events: t, defer: c } = l || {}, [a, i] = C(S, []), r = d(null), u = d(c), s = d(o), n = d(t);
	return p(() => {
		u.current = c;
	}, [c]), p(() => {
		const { current: e } = r;
		s.current = o, OverlayScrollbars.valid(e) && e.options(o || {}, !0);
	}, [o]), p(() => {
		const { current: e } = r;
		n.current = t, OverlayScrollbars.valid(e) && e.on(t || {}, !0);
	}, [t]), p(() => () => {
		var e;
		i(), (e = r.current) == null || e.destroy();
	}, []), C(() => [(e) => {
		const v = r.current;
		if (OverlayScrollbars.valid(v)) return;
		const f = u.current, y = s.current || {}, b = n.current || {}, m = () => r.current = OverlayScrollbars(e, y, b);
		f ? a(m, f) : m();
	}, () => r.current], []);
}, q = (l, o) => {
	const { element: t = "div", options: c, events: a, defer: i, children: r, ...u } = l, s = t, n = d(null), e = d(null), [v, f] = F({
		options: c,
		events: a,
		defer: i
	});
	return p(() => {
		const { current: y } = n, { current: b } = e;
		if (!y) return;
		const m = y;
		return v(t === "body" ? {
			target: m,
			cancel: { body: null }
		} : {
			target: m,
			elements: {
				viewport: b,
				content: b
			}
		}), () => {
			var R;
			return (R = f()) == null ? void 0 : R.destroy();
		};
	}, [v, t]), O(o, () => ({
		osInstance: f,
		getElement: () => n.current
	}), []), /* @__PURE__ */ w.createElement(s, {
		"data-overlayscrollbars-initialize": "",
		ref: n,
		...u
	}, t === "body" ? r : /* @__PURE__ */ w.createElement("div", {
		"data-overlayscrollbars-contents": "",
		ref: e
	}, r));
}, g = E(q);
//#endregion
//#region src/renderer/mainWindow/components/LynxScroll.tsx
/**
* Custom scrollbar component wrapping OverlayScrollbars.
* Adapts theme based on app state.
*/
function LynxScroll({ children, className, overflow = {
	x: "hidden",
	y: "scroll"
}, ref }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g, {
		options: {
			overflow,
			scrollbars: {
				autoHide: "leave",
				theme: useAppState("darkMode") ? "os-theme-light" : "os-theme-dark"
			}
		},
		ref,
		className,
		children
	});
}
//#endregion
//#region src/renderer/mainWindow/components/TabModal.tsx
var { Modal: Modal$1 } = await importShared("@heroui/react");
var { useEffect: useEffect$8, useState: useState$9 } = await importShared("react");
var { UNSAFE_PortalProvider } = await importShared("react-aria");
function TabModal({ isOpen, onOpenChange, children, size = "cover", isDismissable = false, backdropVariant, dialogClassName, containerClassName, isKeyboardDismissDisabled }) {
	const activeTab = useTabsState("activeTab");
	const [targetContainer, setTargetContainer] = useState$9(null);
	useEffect$8(() => {
		setTargetContainer(isOpen ? document.getElementById(`${activeTab}_wrapper`) : null);
	}, [isOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal$1, {
		isOpen,
		onOpenChange,
		children: targetContainer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UNSAFE_PortalProvider, {
			getContainer: () => targetContainer,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal$1.Backdrop, {
				className: "h-full",
				variant: backdropVariant,
				isDismissable,
				isKeyboardDismissDisabled,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal$1.Container, {
					size,
					scroll: "inside",
					className: `h-full max-h-full ${containerClassName}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal$1.Dialog, {
						className: size === "cover" ? `h-full max-h-full ${dialogClassName}` : dialogClassName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UNSAFE_PortalProvider, {
							getContainer: () => document.body,
							children
						})
					})
				})
			})
		})
	});
}
//#endregion
//#region src/common/utils/toast.ts
var { DEFAULT_TOAST_TIMEOUT } = await importShared("@heroui/react");
function createToastFunction(queue) {
	const toastFn = (message, options) => {
		const timeout = options?.timeout !== void 0 ? options.timeout : DEFAULT_TOAST_TIMEOUT;
		return queue.add({
			title: message,
			description: options?.description,
			indicator: options?.indicator,
			variant: options?.variant || "default",
			actionProps: options?.actionProps,
			isLoading: options?.isLoading
		}, {
			timeout,
			onClose: () => {
				requestAnimationFrame(() => {
					options?.onClose?.();
				});
			}
		});
	};
	toastFn.success = (message, options) => {
		return toastFn(message, {
			...options,
			variant: "success"
		});
	};
	toastFn.danger = (message, options) => {
		return toastFn(message, {
			...options,
			variant: "danger"
		});
	};
	toastFn.info = (message, options) => {
		return toastFn(message, {
			...options,
			variant: "accent"
		});
	};
	toastFn.warning = (message, options) => {
		return toastFn(message, {
			...options,
			variant: "warning"
		});
	};
	toastFn.promise = (promise, options) => {
		const promiseFn = typeof promise === "function" ? promise() : promise;
		const loadingId = queue.add({
			title: options.loading,
			variant: "default",
			isLoading: true
		}, { timeout: 0 });
		promiseFn.then((data) => {
			const successMessage = typeof options.success === "function" ? options.success(data) : options.success;
			queue.close(loadingId);
			return toastFn.success(successMessage);
		}).catch((error) => {
			const errorMessage = typeof options.error === "function" ? options.error(error) : options.error;
			queue.close(loadingId);
			return toastFn.danger(errorMessage);
		});
		return loadingId;
	};
	toastFn.getQueue = () => queue.getQueue();
	toastFn.close = (key) => queue.close(key);
	toastFn.pauseAll = () => queue.pauseAll();
	toastFn.resumeAll = () => queue.resumeAll();
	toastFn.clear = () => queue.clear();
	return toastFn;
}
//#endregion
//#region src/renderer/mainWindow/layouts/ToastProviders.tsx
var { Toast, ToastContent, ToastDescription, ToastIndicator, ToastQueue, ToastTitle } = await importShared("@heroui/react");
var { memo: memo$1 } = await importShared("react");
var bottomQueue = new ToastQueue({ maxVisibleToasts: 3 });
var topQueue = new ToastQueue({ maxVisibleToasts: 3 });
var topToast = createToastFunction(topQueue);
createToastFunction(bottomQueue);
memo$1(() => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast.Provider, {
		placement: "top",
		queue: topQueue,
		children: ({ toast: toastItem }) => {
			const content = toastItem.content;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toast, {
				toast: toastItem,
				variant: content.variant,
				className: "border notDraggable",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastIndicator, { variant: content.variant }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col pr-6",
						children: [content.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastTitle, { children: content.title }) : null, content.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastDescription, { children: content.description }) : null]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast.CloseButton, { className: "notDraggable" })]
			});
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast.Provider, {
		queue: bottomQueue,
		placement: "bottom end",
		children: ({ toast: toastItem }) => {
			const content = toastItem.content;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toast, {
				toast: toastItem,
				className: "border",
				variant: content.variant,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastIndicator, { variant: content.variant }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col pr-6",
						children: [content.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastTitle, { children: content.title }) : null, content.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastDescription, { children: content.description }) : null]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast.CloseButton, {})]
			});
		}
	})] });
});
//#endregion
//#region node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var { createContext: createContext$8 } = await importShared("react");
var LayoutGroupContext = createContext$8({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-constant.mjs
var { useRef: useRef$10 } = await importShared("react");
/**
* Creates a constant value over the lifecycle of a component.
*
* Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
* a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
* you can ensure that initialisers don't execute twice or more.
*/
function useConstant(init) {
	const ref = useRef$10(null);
	if (ref.current === null) ref.current = init();
	return ref.current;
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser$1 = typeof window !== "undefined";
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var { useLayoutEffect, useEffect: useEffect$7 } = await importShared("react");
var useIsomorphicLayoutEffect = isBrowser$1 ? useLayoutEffect : useEffect$7;
//#endregion
//#region node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var { createContext: createContext$7 } = await importShared("react");
/**
* @public
*/
var PresenceContext = /* @__PURE__ */ createContext$7(null);
//#endregion
//#region node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index = arr.indexOf(item);
	if (index > -1) arr.splice(index, 1);
}
function moveItem([ ...arr], fromIndex, toIndex) {
	const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
	if (startIndex >= 0 && startIndex < arr.length) {
		const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
		const [item] = arr.splice(fromIndex, 1);
		arr.splice(endIndex, 0, item);
	}
	return arr;
}
//#endregion
//#region node_modules/motion-utils/dist/es/clamp.mjs
var clamp = (min, max, v) => {
	if (v > max) return max;
	if (v < min) return min;
	return v;
};
//#endregion
//#region node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};
//#endregion
//#region node_modules/motion-utils/dist/es/is-numerical-string.mjs
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
//#endregion
//#region node_modules/motion-utils/dist/es/is-object.mjs
var isObject = (value) => typeof value === "object" && value !== null;
//#endregion
//#region node_modules/motion-utils/dist/es/is-zero-value-string.mjs
/**
* Check if the value is a zero value string like "0px" or "0%"
*/
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
//#endregion
//#region node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function memo(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}
//#endregion
//#region node_modules/motion-utils/dist/es/noop.mjs
var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
//#endregion
//#region node_modules/motion-utils/dist/es/pipe.mjs
/**
* Pipe
* Compose other transformers to run linearily
* pipe(min(20), max(40))
* @param  {...functions} transformers
* @return {function}
*/
var pipe = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));
//#endregion
//#region node_modules/motion-utils/dist/es/progress.mjs
var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
	const range = to - from;
	return range ? (value - from) / range : 1;
};
//#endregion
//#region node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(handler) {
		addUniqueItem(this.subscriptions, handler);
		return () => removeItem(this.subscriptions, handler);
	}
	notify(a, b, c) {
		const numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (let i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			const handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
//#endregion
//#region node_modules/motion-utils/dist/es/time-conversion.mjs
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
//#endregion
//#region node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;
//#endregion
//#region node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = lowerBound + (upperBound - lowerBound) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - x;
		if (currentX > 0) upperBound = currentT;
		else lowerBound = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
/*#__NO_SIDE_EFFECTS__*/
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
	return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => 1 - easing(1 - p);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /*@__PURE__*/ cubicBezier(.33, 1.53, .69, .99);
var backIn = /*@__PURE__*/ reverseEasing(backOut);
var backInOut = /*@__PURE__*/ mirrorEasing(backIn);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? .5 * backIn(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));
//#endregion
//#region node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = /* @__PURE__ */ reverseEasing(circIn);
var circInOut = /* @__PURE__ */ mirrorEasing(circIn);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /*@__PURE__*/ cubicBezier(.42, 0, 1, 1);
var easeOut = /*@__PURE__*/ cubicBezier(0, 0, .58, 1);
var easeInOut = /*@__PURE__*/ cubicBezier(.42, 0, .58, 1);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease) => {
	return Array.isArray(ease) && typeof ease[0] !== "number";
};
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
};
var isValidEasing = (easing) => {
	return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
	if (/* @__PURE__ */ isBezierDefinition(definition)) {
		definition.length;
		const [x1, y1, x2, y2] = definition;
		return /* @__PURE__ */ cubicBezier(x1, y1, x2, y2);
	} else if (isValidEasing(definition)) {
		easingLookup[definition], `${definition}`;
		return easingLookup[definition];
	}
	return definition;
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
	/**
	* We create and reuse two queues, one to queue jobs for the current frame
	* and one for the next. We reuse to avoid triggering GC after x frames.
	*/
	let thisFrame = /* @__PURE__ */ new Set();
	let nextFrame = /* @__PURE__ */ new Set();
	/**
	* Track whether we're currently processing jobs in this step. This way
	* we can decide whether to schedule new jobs for this frame or next.
	*/
	let isProcessing = false;
	let flushNextFrame = false;
	/**
	* A set of processes which were marked keepAlive when scheduled.
	*/
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	let latestFrameData = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	function triggerCallback(callback) {
		if (toKeepAlive.has(callback)) {
			step.schedule(callback);
			runNextFrame();
		}
		callback(latestFrameData);
	}
	const step = {
		/**
		* Schedule a process to run on the next frame.
		*/
		schedule: (callback, keepAlive = false, immediate = false) => {
			const queue = immediate && isProcessing ? thisFrame : nextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			queue.add(callback);
			return callback;
		},
		/**
		* Cancel the provided callback from running on the next frame.
		*/
		cancel: (callback) => {
			nextFrame.delete(callback);
			toKeepAlive.delete(callback);
		},
		/**
		* Execute all schedule callbacks.
		*/
		process: (frameData) => {
			latestFrameData = frameData;
			/**
			* If we're already processing we've probably been triggered by a flushSync
			* inside an existing process. Instead of executing, mark flushNextFrame
			* as true and ensure we flush the following frame at the end of this one.
			*/
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			const prevFrame = thisFrame;
			thisFrame = nextFrame;
			nextFrame = prevFrame;
			thisFrame.forEach(triggerCallback);
			thisFrame.clear();
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData);
			}
		}
	};
	return step;
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
	let runNextFrame = false;
	let useDefaultElapsed = true;
	const state = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	const flagRunNextFrame = () => runNextFrame = true;
	const steps = stepsOrder.reduce((acc, key) => {
		acc[key] = createRenderStep(flagRunNextFrame);
		return acc;
	}, {});
	const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
	const processBatch = () => {
		const useManualTiming = MotionGlobalConfig.useManualTiming;
		const timestamp = useManualTiming ? state.timestamp : performance.now();
		runNextFrame = false;
		if (!useManualTiming) state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
		state.timestamp = timestamp;
		state.isProcessing = true;
		setup.process(state);
		read.process(state);
		resolveKeyframes.process(state);
		preUpdate.process(state);
		update.process(state);
		preRender.process(state);
		render.process(state);
		postRender.process(state);
		state.isProcessing = false;
		if (runNextFrame && allowKeepAlive) {
			useDefaultElapsed = false;
			scheduleNextBatch(processBatch);
		}
	};
	const wake = () => {
		runNextFrame = true;
		useDefaultElapsed = true;
		if (!state.isProcessing) scheduleNextBatch(processBatch);
	};
	const schedule = stepsOrder.reduce((acc, key) => {
		const step = steps[key];
		acc[key] = (process, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process) => {
		for (let i = 0; i < stepsOrder.length; i++) steps[stepsOrder[i]].cancel(process);
	};
	return {
		schedule,
		cancel,
		state,
		steps
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
	now = void 0;
}
/**
* An eventloop-synchronous alternative to performance.now().
*
* Ensures that time measurements remain consistent within a synchronous context.
* Usually calling performance.now() twice within the same synchronous context
* will return different values which isn't useful for animations when we're usually
* trying to sync animations to the same frame.
*/
var time = {
	now: () => {
		if (now === void 0) time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
		return now;
	},
	set: (newTime) => {
		now = newTime;
		queueMicrotask(clearTime);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
var startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
	if (!startsAsVariableToken(value)) return false;
	return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
/**
* Check if a value contains a CSS variable anywhere (e.g. inside calc()).
* Unlike isCSSVariableToken which checks if the value IS a var() token,
* this checks if the value CONTAINS var() somewhere in the string.
*/
function containsCSSVariable(value) {
	if (typeof value !== "string") return false;
	return value.split("/*")[0].includes("var(--");
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
var alpha = {
	...number,
	transform: (v) => clamp(0, 1, v)
};
var scale = {
	...number,
	default: 1
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
	return v == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/utils.mjs
/**
* Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
* but false if a number or multiple colors
*/
var isColorString = (type, testProp) => (v) => {
	return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
	if (typeof v !== "string") return v;
	const [a, b, c, alpha] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha !== void 0 ? parseFloat(alpha) : 1
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
	...number,
	transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
	test: /*@__PURE__*/ isColorString("rgb", "red"),
	parse: /*@__PURE__*/ splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function parseHex(v) {
	let r = "";
	let g = "";
	let b = "";
	let a = "";
	if (v.length > 5) {
		r = v.substring(1, 3);
		g = v.substring(3, 5);
		b = v.substring(5, 7);
		a = v.substring(7, 9);
	} else {
		r = v.substring(1, 2);
		g = v.substring(2, 3);
		b = v.substring(3, 4);
		a = v.substring(4, 5);
		r += r;
		g += g;
		b += b;
		a += a;
	}
	return {
		red: parseInt(r, 16),
		green: parseInt(g, 16),
		blue: parseInt(b, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	};
}
var hex = {
	test: /*@__PURE__*/ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
	test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
var degrees = /*@__PURE__*/ createUnitType("deg");
var percent = /*@__PURE__*/ createUnitType("%");
var px = /*@__PURE__*/ createUnitType("px");
var vh = /*@__PURE__*/ createUnitType("vh");
var vw = /*@__PURE__*/ createUnitType("vw");
var progressPercentage = /*@__PURE__*/ (() => ({
	...percent,
	parse: (v) => percent.parse(v) / 100,
	transform: (v) => percent.transform(v * 100)
}))();
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
	test: /*@__PURE__*/ isColorString("hsl", "hue"),
	parse: /*@__PURE__*/ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
	test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba.test(v)) return rgba.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
	},
	getAnimatableNone: (v) => {
		const parsed = color.parse(v);
		parsed.alpha = 0;
		return color.transform(parsed);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function test(v) {
	return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
	const originalValue = value.toString();
	const values = [];
	const indexes = {
		color: [],
		number: [],
		var: []
	};
	const types = [];
	let i = 0;
	return {
		values,
		split: originalValue.replace(complexRegex, (parsedValue) => {
			if (color.test(parsedValue)) {
				indexes.color.push(i);
				types.push(COLOR_TOKEN);
				values.push(color.parse(parsedValue));
			} else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
				indexes.var.push(i);
				types.push(VAR_TOKEN);
				values.push(parsedValue);
			} else {
				indexes.number.push(i);
				types.push(NUMBER_TOKEN);
				values.push(parseFloat(parsedValue));
			}
			++i;
			return SPLIT_TOKEN;
		}).split(SPLIT_TOKEN),
		indexes,
		types
	};
}
function parseComplexValue(v) {
	return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
	const numSections = split.length;
	return (v) => {
		let output = "";
		for (let i = 0; i < numSections; i++) {
			output += split[i];
			if (v[i] !== void 0) {
				const type = types[i];
				if (type === NUMBER_TOKEN) output += sanitize(v[i]);
				else if (type === COLOR_TOKEN) output += color.transform(v[i]);
				else output += v[i];
			}
		}
		return output;
	};
}
function createTransformer(source) {
	return buildTransformer(analyseComplexValue(source));
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
/**
* Convert a parsed value to its zero equivalent, but preserve numbers
* that act as divisors in CSS calc() expressions.
*
* analyseComplexValue extracts numbers from CSS strings and puts the
* surrounding text into a `split` template array. For example:
*   "calc(var(--gap) / 5)"  →  values: [var(--gap), 5]
*                               split:  ["calc(", " / ", ")"]
*
* When building a zero-equivalent for animation, naively zeroing all
* numbers turns the divisor into 0 → "calc(var(--gap) / 0)" → NaN.
* We detect this by checking whether the text preceding a number
* (split[i]) ends with "/" — the CSS calc division operator.
*/
var convertToZero = (value, splitBefore) => {
	if (typeof value === "number") return splitBefore?.trim().endsWith("/") ? value : 0;
	return convertNumbersToZero(value);
};
function getAnimatableNone$1(v) {
	const info = analyseComplexValue(v);
	return buildTransformer(info)(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;
		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
	return (p) => p > 0 ? b : a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber$1 = (from, to, progress) => {
	return from + (to - from) * progress;
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
	const fromExpo = from * from;
	const expo = v * (to * to - fromExpo) + fromExpo;
	return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [
	hex,
	rgba,
	hsla
];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
	const type = getColorType(color);
	`${color}`;
	if (!Boolean(type)) return false;
	let model = type.parse(color);
	if (type === hsla) model = hslaToRgba(model);
	return model;
}
var mixColor = (from, to) => {
	const fromRGBA = asRGBA(from);
	const toRGBA = asRGBA(to);
	if (!fromRGBA || !toRGBA) return mixImmediate(from, to);
	const blended = { ...fromRGBA };
	return (v) => {
		blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
		blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
		blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
		blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
		return rgba.transform(blended);
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
/**
* Returns a function that, when provided a progress value between 0 and 1,
* will return the "none" or "hidden" string only when the progress is that of
* the origin or target.
*/
function mixVisibility(origin, target) {
	if (invisibleValues.has(origin)) return (p) => p <= 0 ? origin : target;
	else return (p) => p >= 1 ? target : origin;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber(a, b) {
	return (p) => mixNumber$1(a, b, p);
}
function getMixer(a) {
	if (typeof a === "number") return mixNumber;
	else if (typeof a === "string") return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
	else if (Array.isArray(a)) return mixArray;
	else if (typeof a === "object") return color.test(a) ? mixColor : mixObject;
	return mixImmediate;
}
function mixArray(a, b) {
	const output = [...a];
	const numValues = output.length;
	const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
	return (p) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](p);
		return output;
	};
}
function mixObject(a, b) {
	const output = {
		...a,
		...b
	};
	const blendValue = {};
	for (const key in output) if (a[key] !== void 0 && b[key] !== void 0) blendValue[key] = getMixer(a[key])(a[key], b[key]);
	return (v) => {
		for (const key in blendValue) output[key] = blendValue[key](v);
		return output;
	};
}
function matchOrder(origin, target) {
	const orderedOrigin = [];
	const pointers = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < target.values.length; i++) {
		const type = target.types[i];
		const originIndex = origin.indexes[type][pointers[type]];
		orderedOrigin[i] = origin.values[originIndex] ?? 0;
		pointers[type]++;
	}
	return orderedOrigin;
}
var mixComplex = (origin, target) => {
	const template = complex.createTransformer(target);
	const originStats = analyseComplexValue(origin);
	const targetStats = analyseComplexValue(target);
	if (originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length) {
		if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) return mixVisibility(origin, target);
		return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
	} else {
		`${origin}${target}`;
		return mixImmediate(origin, target);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
	if (typeof from === "number" && typeof to === "number" && typeof p === "number") return mixNumber$1(from, to, p);
	return getMixer(from)(from, to);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
		stop: () => cancelFrame(passTimestamp),
		/**
		* If we're processing this frame we can use the
		* framelocked timestamp to keep things in sync.
		*/
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
	let points = "";
	const numPoints = Math.max(Math.round(duration / resolution), 2);
	for (let i = 0; i < numPoints; i++) points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${points.substring(0, points.length - 2)})`;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
/**
* Implement a practical max duration for keyframe generation
* to prevent infinite loops
*/
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
	let duration = 0;
	const timeStep = 50;
	let state = generator.next(duration);
	while (!state.done && duration < 2e4) {
		duration += timeStep;
		state = generator.next(duration);
	}
	return duration >= 2e4 ? Infinity : duration;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
/**
* Create a progress => progress easing function from a generator.
*/
function createGeneratorEasing(options, scale = 100, createGenerator) {
	const generator = createGenerator({
		...options,
		keyframes: [0, scale]
	});
	const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (progress) => {
			return generator.next(duration * progress).value / scale;
		},
		duration: /* @__PURE__ */ millisecondsToSeconds(duration)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
/**
* This is ported from the Framer implementation of duration-based spring resolution.
*/
var safeMin = .001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
	let envelope;
	let derivative;
	springDefaults.maxDuration;
	let dampingRatio = 1 - bounce;
	/**
	* Restrict dampingRatio and duration to within acceptable ranges.
	*/
	dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
	duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		/**
		* Underdamped spring
		*/
		envelope = (undampedFreq) => {
			const exponentialDecay = undampedFreq * dampingRatio;
			const delta = exponentialDecay * duration;
			const a = exponentialDecay - velocity;
			const b = calcAngularFreq(undampedFreq, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - a / b * c;
		};
		derivative = (undampedFreq) => {
			const delta = undampedFreq * dampingRatio * duration;
			const d = delta * velocity + velocity;
			const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
			return (-envelope(undampedFreq) + safeMin > 0 ? -1 : 1) * ((d - e) * f) / g;
		};
	} else {
		/**
		* Critically-damped spring
		*/
		envelope = (undampedFreq) => {
			return -.001 + Math.exp(-undampedFreq * duration) * ((undampedFreq - velocity) * duration + 1);
		};
		derivative = (undampedFreq) => {
			return Math.exp(-undampedFreq * duration) * ((velocity - undampedFreq) * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
	duration = /* @__PURE__ */ secondsToMilliseconds(duration);
	if (isNaN(undampedFreq)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration
	};
	else {
		const stiffness = Math.pow(undampedFreq, 2) * mass;
		return {
			stiffness,
			damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
			duration
		};
	}
}
var durationKeys = ["duration", "bounce"];
var physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(options, keys) {
	return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
	let springOptions = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: false,
		...options
	};
	if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
		springOptions.velocity = 0;
		if (options.visualDuration) {
			const visualDuration = options.visualDuration;
			const root = 2 * Math.PI / (visualDuration * 1.2);
			const stiffness = root * root;
			const damping = 2 * clamp(.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
			springOptions = {
				...springOptions,
				mass: springDefaults.mass,
				stiffness,
				damping
			};
		} else {
			const derived = findSpring({
				...options,
				velocity: 0
			});
			springOptions = {
				...springOptions,
				...derived,
				mass: springDefaults.mass
			};
			springOptions.isResolvedFromDuration = true;
		}
	}
	return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
	const options = typeof optionsOrVisualDuration !== "object" ? {
		visualDuration: optionsOrVisualDuration,
		keyframes: [0, 1],
		bounce
	} : optionsOrVisualDuration;
	let { restSpeed, restDelta } = options;
	const origin = options.keyframes[0];
	const target = options.keyframes[options.keyframes.length - 1];
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: origin
	};
	const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
		...options,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(options.velocity || 0)
	});
	const initialVelocity = velocity || 0;
	const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
	const initialDelta = target - origin;
	const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
	/**
	* If we're working on a granular scale, use smaller defaults for determining
	* when the spring is finished.
	*
	* These defaults have been selected emprically based on what strikes a good
	* ratio between feeling good and finishing as soon as changes are imperceptible.
	*/
	const isGranularScale = Math.abs(initialDelta) < 5;
	restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
	restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
	let resolveSpring;
	let resolveVelocity;
	let angularFreq;
	let A;
	let sinCoeff;
	let cosCoeff;
	if (dampingRatio < 1) {
		angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		A = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
		resolveSpring = (t) => {
			return target - Math.exp(-dampingRatio * undampedAngularFreq * t) * (A * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
		};
		sinCoeff = dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
		cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
		resolveVelocity = (t) => {
			return Math.exp(-dampingRatio * undampedAngularFreq * t) * (sinCoeff * Math.sin(angularFreq * t) + cosCoeff * Math.cos(angularFreq * t));
		};
	} else if (dampingRatio === 1) {
		resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
		const C = initialVelocity + undampedAngularFreq * initialDelta;
		resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * C * t - initialVelocity);
	} else {
		const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
		resolveSpring = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
		};
		const P = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
		const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
		const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
		resolveVelocity = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return envelope * (sinhCoeff * Math.sinh(freqForT) + coshCoeff * Math.cosh(freqForT));
		};
	}
	const generator = {
		calculatedDuration: isResolvedFromDuration ? duration || null : null,
		velocity: (t) => /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t)),
		next: (t) => {
			/**
			* For underdamped physics springs we need both position and
			* velocity each tick. Compute shared trig values once to avoid
			* duplicate Math.exp/sin/cos calls on the hot path.
			*/
			if (!isResolvedFromDuration && dampingRatio < 1) {
				const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
				const sin = Math.sin(angularFreq * t);
				const cos = Math.cos(angularFreq * t);
				const current = target - envelope * (A * sin + initialDelta * cos);
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(envelope * (sinCoeff * sin + cosCoeff * cos));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
				state.value = state.done ? target : current;
				return state;
			}
			const current = resolveSpring(t);
			if (!isResolvedFromDuration) {
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
			} else state.done = t >= duration;
			state.value = state.done ? target : current;
			return state;
		},
		toString: () => {
			const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
			const easing = generateLinearEasing((progress) => generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
			return calculatedDuration + "ms " + easing;
		},
		toTransition: () => {}
	};
	return generator;
}
spring.applyToOptions = (options) => {
	const generatorOptions = createGeneratorEasing(options, 100, spring);
	options.ease = generatorOptions.ease;
	options.duration = /* @__PURE__ */ secondsToMilliseconds(generatorOptions.duration);
	options.type = "keyframes";
	return options;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
	const prevT = Math.max(t - velocitySampleDuration, 0);
	return /* @__PURE__ */ velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = .5, restSpeed }) {
	const origin = keyframes[0];
	const state = {
		done: false,
		value: origin
	};
	const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
	const nearestBoundary = (v) => {
		if (min === void 0) return max;
		if (max === void 0) return min;
		return Math.abs(min - v) < Math.abs(max - v) ? min : max;
	};
	let amplitude = power * velocity;
	const ideal = origin + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	/**
	* If the target has changed we need to re-calculate the amplitude, otherwise
	* the animation will start from the wrong position.
	*/
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
	const calcLatest = (t) => target + calcDelta(t);
	const applyFriction = (t) => {
		const delta = calcDelta(t);
		const latest = calcLatest(t);
		state.done = Math.abs(delta) <= restDelta;
		state.value = state.done ? target : latest;
	};
	/**
	* Ideally this would resolve for t in a stateless way, we could
	* do that by always precalculating the animation but as we know
	* this will be done anyway we can assume that spring will
	* be discovered during that.
	*/
	let timeReachedBoundary;
	let spring$1;
	const checkCatchBoundary = (t) => {
		if (!isOutOfBounds(state.value)) return;
		timeReachedBoundary = t;
		spring$1 = spring({
			keyframes: [state.value, nearestBoundary(state.value)],
			velocity: getGeneratorVelocity(calcLatest, t, state.value),
			damping: bounceDamping,
			stiffness: bounceStiffness,
			restDelta,
			restSpeed
		});
	};
	checkCatchBoundary(0);
	return {
		calculatedDuration: null,
		next: (t) => {
			/**
			* We need to resolve the friction to figure out if we need a
			* spring but we don't want to do this twice per frame. So here
			* we flag if we updated for this frame and later if we did
			* we can skip doing it again.
			*/
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t);
				checkCatchBoundary(t);
			}
			/**
			* If we have a spring and the provided t is beyond the moment the friction
			* animation crossed the min/max boundary, use the spring.
			*/
			if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t);
				return state;
			}
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease) mixer = pipe(Array.isArray(ease) ? ease[i] || noop : ease, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
/**
* Create a function that maps from a numerical input array to a generic output array.
*
* Accepts:
*   - Numbers
*   - Colors (hex, hsl, hsla, rgb, rgba)
*   - Complex (combinations of one or more numbers or strings)
*
* ```jsx
* const mixColor = interpolate([0, 1], ['#fff', '#000'])
*
* mixColor(0.5) // 'rgba(128, 128, 128, 1)'
* ```
*
* TODO Revisit this approach once we've moved to data models for values,
* probably not needed to pregenerate mixer functions.
*
* @public
*/
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
	const inputLength = input.length;
	output.length;
	/**
	* If we're only provided a single input, we can just make a function
	* that returns the output.
	*/
	if (inputLength === 1) return () => output[0];
	if (inputLength === 2 && output[0] === output[1]) return () => output[1];
	const isZeroDeltaRange = input[0] === input[1];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease, mixer);
	const numMixers = mixers.length;
	const interpolator = (v) => {
		if (isZeroDeltaRange && v < input[0]) return output[0];
		let i = 0;
		if (numMixers > 1) {
			for (; i < input.length - 2; i++) if (v < input[i + 1]) break;
		}
		const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v);
		return mixers[i](progressInRange);
	};
	return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
	const min = offset[offset.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
		offset.push(mixNumber$1(min, 1, offsetProgress));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
	const offset = [0];
	fillOffset(offset, arr.length - 1);
	return offset;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
	return offset.map((o) => o * duration);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
	/**
	* Easing functions can be externally defined as strings. Here we convert them
	* into actual functions.
	*/
	const easingFunctions = /* @__PURE__ */ isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: keyframeValues[0]
	};
	const mapTimeToKeyframe = interpolate(convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration), keyframeValues, { ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions) });
	return {
		calculatedDuration: duration,
		next: (t) => {
			state.value = mapTimeToKeyframe(t);
			state.done = t >= duration;
			return state;
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
	const resolvedKeyframes = keyframes.filter(isNotNull);
	const index = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
	return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(transition) {
	if (typeof transition.type === "string") transition.type = transitionTypeMap[transition.type];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((resolve) => {
			this.resolve = resolve;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	/**
	* Allows the animation to be awaited.
	*
	* @deprecated Use `finished` instead.
	*/
	then(onResolve, onReject) {
		return this.finished.then(onResolve, onReject);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent) => percent / 100;
var JSAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.state = "idle";
		this.startTime = null;
		this.isStopped = false;
		/**
		* The current time of the animation.
		*/
		this.currentTime = 0;
		/**
		* The time at which the animation was paused.
		*/
		this.holdTime = null;
		/**
		* Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
		*/
		this.playbackSpeed = 1;
		/**
		* Reusable state object for the delay phase to avoid
		* allocating a new object every frame.
		*/
		this.delayState = {
			done: false,
			value: void 0
		};
		/**
		* This method is bound to the instance to fix a pattern where
		* animation.stop is returned as a reference from a useEffect.
		*/
		this.stop = () => {
			const { motionValue } = this.options;
			if (motionValue && motionValue.updatedAt !== time.now()) this.tick(time.now());
			this.isStopped = true;
			if (this.state === "idle") return;
			this.teardown();
			this.options.onStop?.();
		};
		this.options = options;
		this.initAnimation();
		this.play();
		if (options.autoplay === false) this.pause();
	}
	initAnimation() {
		const { options } = this;
		replaceTransitionType(options);
		const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
		let { keyframes: keyframes$1 } = options;
		const generatorFactory = type || keyframes;
		if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
			this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
			keyframes$1 = [0, 100];
		}
		const generator = generatorFactory({
			...options,
			keyframes: keyframes$1
		});
		/**
		* If we have a mirror repeat type we need to create a second generator that outputs the
		* mirrored (not reversed) animation and later ping pong between the two generators.
		*/
		if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
			...options,
			keyframes: [...keyframes$1].reverse(),
			velocity: -velocity
		});
		/**
		* If duration is undefined and we have repeat options,
		* we need to calculate a duration from the generator.
		*
		* We set it to the generator itself to cache the duration.
		* Any timeline resolver will need to have already precalculated
		* the duration by this step.
		*/
		if (generator.calculatedDuration === null) generator.calculatedDuration = calcGeneratorDuration(generator);
		const { calculatedDuration } = generator;
		this.calculatedDuration = calculatedDuration;
		this.resolvedDuration = calculatedDuration + repeatDelay;
		this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
		this.generator = generator;
	}
	updateTime(timestamp) {
		const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
		if (this.holdTime !== null) this.currentTime = this.holdTime;
		else this.currentTime = animationTime;
	}
	tick(timestamp, sample = false) {
		const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
		if (this.startTime === null) return generator.next(0);
		const { delay = 0, keyframes, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
		/**
		* requestAnimationFrame timestamps can come through as lower than
		* the startTime as set by performance.now(). Here we prevent this,
		* though in the future it could be possible to make setting startTime
		* a pending operation that gets resolved here.
		*/
		if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
		else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
		if (sample) this.currentTime = timestamp;
		else this.updateTime(timestamp);
		const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
		const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
		this.currentTime = Math.max(timeWithoutDelay, 0);
		if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
		let elapsed = this.currentTime;
		let frameGenerator = generator;
		if (repeat) {
			/**
			* Get the current progress (0-1) of the animation. If t is >
			* than duration we'll get values like 2.5 (midway through the
			* third iteration)
			*/
			const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
			/**
			* Get the current iteration (0 indexed). For instance the floor of
			* 2.5 is 2.
			*/
			let currentIteration = Math.floor(progress);
			/**
			* Get the current progress of the iteration by taking the remainder
			* so 2.5 is 0.5 through iteration 2
			*/
			let iterationProgress = progress % 1;
			/**
			* If iteration progress is 1 we count that as the end
			* of the previous iteration.
			*/
			if (!iterationProgress && progress >= 1) iterationProgress = 1;
			iterationProgress === 1 && currentIteration--;
			currentIteration = Math.min(currentIteration, repeat + 1);
			if (Boolean(currentIteration % 2)) {
				if (repeatType === "reverse") {
					iterationProgress = 1 - iterationProgress;
					if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
				} else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
			}
			elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
		}
		/**
		* If we're in negative time, set state as the initial keyframe.
		* This prevents delay: x, duration: 0 animations from finishing
		* instantly.
		*/
		let state;
		if (isInDelayPhase) {
			this.delayState.value = keyframes[0];
			state = this.delayState;
		} else state = frameGenerator.next(elapsed);
		if (mixKeyframes && !isInDelayPhase) state.value = mixKeyframes(state.value);
		let { done } = state;
		if (!isInDelayPhase && calculatedDuration !== null) done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
		const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
		if (isAnimationFinished && type !== inertia) state.value = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
		if (onUpdate) onUpdate(state.value);
		if (isAnimationFinished) this.finish();
		return state;
	}
	/**
	* Allows the returned animation to be awaited or promise-chained. Currently
	* resolves when the animation finishes at all but in a future update could/should
	* reject if its cancels.
	*/
	then(resolve, reject) {
		return this.finished.then(resolve, reject);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(newTime) {
		newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		this.currentTime = newTime;
		if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) this.holdTime = newTime;
		else if (this.driver) this.startTime = this.driver.now() - newTime / this.playbackSpeed;
		if (this.driver) this.driver.start(false);
		else {
			this.startTime = 0;
			this.state = "paused";
			this.holdTime = newTime;
			this.tick(newTime);
		}
	}
	/**
	* Returns the generator's velocity at the current time in units/second.
	* Uses the analytical derivative when available (springs), avoiding
	* the MotionValue's frame-dependent velocity estimation.
	*/
	getGeneratorVelocity() {
		const t = this.currentTime;
		if (t <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(t);
		const current = this.generator.next(t).value;
		return getGeneratorVelocity((s) => this.generator.next(s).value, t, current);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(newSpeed) {
		const hasChanged = this.playbackSpeed !== newSpeed;
		if (hasChanged && this.driver) this.updateTime(time.now());
		this.playbackSpeed = newSpeed;
		if (hasChanged && this.driver) this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	play() {
		if (this.isStopped) return;
		const { driver = frameloopDriver, startTime } = this.options;
		if (!this.driver) this.driver = driver((timestamp) => this.tick(timestamp));
		this.options.onPlay?.();
		const now = this.driver.now();
		if (this.state === "finished") {
			this.updateFinished();
			this.startTime = now;
		} else if (this.holdTime !== null) this.startTime = now - this.holdTime;
		else if (!this.startTime) this.startTime = startTime ?? now;
		if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
		this.holdTime = null;
		/**
		* Set playState to running only after we've used it in
		* the previous logic.
		*/
		this.state = "running";
		this.driver.start();
	}
	pause() {
		this.state = "paused";
		this.updateTime(time.now());
		this.holdTime = this.currentTime;
	}
	complete() {
		if (this.state !== "running") this.play();
		this.state = "finished";
		this.holdTime = null;
	}
	finish() {
		this.notifyFinished();
		this.teardown();
		this.state = "finished";
		this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null;
		this.startTime = 0;
		this.tick(0);
		this.teardown();
		this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle";
		this.stopDriver();
		this.startTime = this.holdTime = null;
	}
	stopDriver() {
		if (!this.driver) return;
		this.driver.stop();
		this.driver = void 0;
	}
	sample(sampleTime) {
		this.startTime = 0;
		return this.tick(sampleTime, true);
	}
	attachTimeline(timeline) {
		if (this.options.allowFlatten) {
			this.options.type = "keyframes";
			this.options.ease = "linear";
			this.initAnimation();
		}
		this.driver?.stop();
		return timeline.observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes) {
	for (let i = 1; i < keyframes.length; i++) keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate = (v) => {
	return rebaseAngle(radToDeg(Math.atan2(v[1], v[0])));
};
var matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (v) => radToDeg(Math.atan(v[1])),
	skewY: (v) => radToDeg(Math.atan(v[2])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
	angle = angle % 360;
	if (angle < 0) angle += 360;
	return angle;
};
var rotateZ = rotate;
var scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
var scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
var matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (v) => (scaleX(v) + scaleY(v)) / 2,
	rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
	rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (v) => radToDeg(Math.atan(v[4])),
	skewY: (v) => radToDeg(Math.atan(v[1])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
	return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
	if (!transform || transform === "none") return defaultTransformValue(name);
	const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let parsers;
	let match;
	if (matrix3dMatch) {
		parsers = matrix3dParsers;
		match = matrix3dMatch;
	} else {
		const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		parsers = matrix2dParsers;
		match = matrix2dMatch;
	}
	if (!match) return defaultTransformValue(name);
	const valueParser = parsers[name];
	const values = match[1].split(",").map(convertTransformToNumber);
	return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
	const { transform = "none" } = getComputedStyle(instance);
	return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
	return parseFloat(value.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
/**
* Generate a list of every possible transform key.
*/
var transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
];
/**
* A quick lookup for transform props.
*
* `pathRotation` is a transform for routing purposes (skipped from raw
* style application, wired to the transform composite, flags transform
* dirty) but is intentionally NOT in `transformPropOrder` — it is
* composed onto `rotate` at the build sites, not serialized in its own
* slot, and must stay out of the order-array consumers (parse-transform,
* unit-conversion, keys-position).
*/
var transformProps = /*@__PURE__*/ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
	const removedTransforms = [];
	nonTranslationalTransformKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (value !== void 0) {
			removedTransforms.push([key, value.get()]);
			value.set(key.startsWith("scale") ? 1 : 0);
		}
	});
	return removedTransforms;
}
var positionalValues = {
	width: ({ x }, { paddingLeft = "0", paddingRight = "0", boxSizing }) => {
		const width = x.max - x.min;
		return boxSizing === "border-box" ? width : width - parseFloat(paddingLeft) - parseFloat(paddingRight);
	},
	height: ({ y }, { paddingTop = "0", paddingBottom = "0", boxSizing }) => {
		const height = y.max - y.min;
		return boxSizing === "border-box" ? height : height - parseFloat(paddingTop) - parseFloat(paddingBottom);
	},
	top: (_bbox, { top }) => parseFloat(top),
	left: (_bbox, { left }) => parseFloat(left),
	bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
	right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
	x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
	y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
		const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
		const transformsToRestore = /* @__PURE__ */ new Map();
		/**
		* Write pass
		* If we're measuring elements we want to remove bounding box-changing transforms.
		*/
		elementsToMeasure.forEach((element) => {
			const removedTransforms = removeNonTranslationalTransform(element);
			if (!removedTransforms.length) return;
			transformsToRestore.set(element, removedTransforms);
			element.render();
		});
		resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
		elementsToMeasure.forEach((element) => {
			element.render();
			const restore = transformsToRestore.get(element);
			if (restore) restore.forEach(([key, value]) => {
				element.getValue(key)?.set(value);
			});
		});
		resolversToMeasure.forEach((resolver) => resolver.measureEndState());
		resolversToMeasure.forEach((resolver) => {
			if (resolver.suspendedScrollY !== void 0) window.scrollTo(0, resolver.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = false;
	isScheduled = false;
	toResolve.forEach((resolver) => resolver.complete(isForced));
	toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((resolver) => {
		resolver.readKeyframes();
		if (resolver.needsMeasurement) anyNeedsMeasurement = true;
	});
}
function flushKeyframeResolvers() {
	isForced = true;
	readAllKeyframes();
	measureAllKeyframes();
	isForced = false;
}
var KeyframeResolver = class {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
		this.state = "pending";
		/**
		* Track whether this resolver is async. If it is, it'll be added to the
		* resolver queue and flushed in the next frame. Resolvers that aren't going
		* to trigger read/write thrashing don't need to be async.
		*/
		this.isAsync = false;
		/**
		* Track whether this resolver needs to perform a measurement
		* to resolve its keyframes.
		*/
		this.needsMeasurement = false;
		this.unresolvedKeyframes = [...unresolvedKeyframes];
		this.onComplete = onComplete;
		this.name = name;
		this.motionValue = motionValue;
		this.element = element;
		this.isAsync = isAsync;
	}
	scheduleResolve() {
		this.state = "scheduled";
		if (this.isAsync) {
			toResolve.add(this);
			if (!isScheduled) {
				isScheduled = true;
				frame.read(readAllKeyframes);
				frame.resolveKeyframes(measureAllKeyframes);
			}
		} else {
			this.readKeyframes();
			this.complete();
		}
	}
	readKeyframes() {
		const { unresolvedKeyframes, name, element, motionValue } = this;
		if (unresolvedKeyframes[0] === null) {
			const currentValue = motionValue?.get();
			const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
			if (currentValue !== void 0) unresolvedKeyframes[0] = currentValue;
			else if (element && name) {
				const valueAsRead = element.readValue(name, finalKeyframe);
				if (valueAsRead !== void 0 && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
			}
			if (unresolvedKeyframes[0] === void 0) unresolvedKeyframes[0] = finalKeyframe;
			if (motionValue && currentValue === void 0) motionValue.set(unresolvedKeyframes[0]);
		}
		fillWildcards(unresolvedKeyframes);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(isForcedComplete = false) {
		this.state = "complete";
		this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
		toResolve.delete(this);
	}
	cancel() {
		if (this.state === "scheduled") {
			toResolve.delete(this);
			this.state = "pending";
		}
	}
	resume() {
		if (this.state === "pending") this.scheduleResolve();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
	isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/flags.mjs
/**
* Add the ability for test suites to manually set support flags
* to better test more environments.
*/
var supportsFlags = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
	const memoized = /* @__PURE__ */ memo(callback);
	return () => supportsFlags[supportsFlag] ?? memoized();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /*@__PURE__*/ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch (e) {
		return false;
	}
	return true;
}, "linearEasing");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
	if (!easing) return;
	else if (typeof easing === "function") return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
	else if (/* @__PURE__ */ isBezierDefinition(easing)) return cubicBezierAsString(easing);
	else if (Array.isArray(easing)) return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
	else return supportedWaapiEasing[easing];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, pseudoElement = void 0) {
	const keyframeOptions = { [valueName]: keyframes };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease, duration);
	/**
	* If this is an easing array, apply to keyframes, not animation as a whole
	*/
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	const options = {
		delay,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	};
	if (pseudoElement) options.pseudoElement = pseudoElement;
	return element.animate(keyframeOptions, options);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
	return typeof type === "function" && "applyToOptions" in type;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
	if (isGenerator(type) && supportsLinearEasing()) return type.applyToOptions(options);
	else {
		options.duration ?? (options.duration = 300);
		options.ease ?? (options.ease = "easeOut");
	}
	return options;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
/**
* NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
*/
var NativeAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.finishedTime = null;
		this.isStopped = false;
		/**
		* Tracks a manually-set start time that takes precedence over WAAPI's
		* dynamic startTime. This is cleared when play() or time setter is called,
		* allowing WAAPI to take over timing.
		*/
		this.manualStartTime = null;
		if (!options) return;
		const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
		this.isPseudoElement = Boolean(pseudoElement);
		this.allowFlatten = allowFlatten;
		this.options = options;
		options.type;
		const transition = applyGeneratorOptions(options);
		this.animation = startWaapiAnimation(element, name, keyframes, transition, pseudoElement);
		if (transition.autoplay === false) this.animation.pause();
		this.animation.onfinish = () => {
			this.finishedTime = this.time;
			if (!pseudoElement) {
				const keyframe = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
				if (this.updateMotionValue) this.updateMotionValue(keyframe);
				/**
				* If we can, we want to commit the final style as set by the user,
				* rather than the computed keyframe value supplied by the animation.
				* We always do this, even when a motion value is present, to prevent
				* a visual flash in Firefox where the WAAPI animation's fill is removed
				* during cancel() before the scheduled render can apply the correct value.
				*/
				setStyle(element, name, keyframe);
				this.animation.cancel();
			}
			onComplete?.();
			this.notifyFinished();
		};
	}
	play() {
		if (this.isStopped) return;
		this.manualStartTime = null;
		this.animation.play();
		if (this.state === "finished") this.updateFinished();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch (e) {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = true;
		const { state } = this;
		if (state === "idle" || state === "finished") return;
		if (this.updateMotionValue) this.updateMotionValue();
		else this.commitStyles();
		if (!this.isPseudoElement) this.cancel();
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* In this method, we commit styles back to the DOM before cancelling
	* the animation.
	*
	* This is designed to be overridden by NativeAnimationExtended, which
	* will create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to also correctly calculate velocity for any subsequent animation
	* while deferring the commit until the next animation frame.
	*/
	commitStyles() {
		const element = this.options?.element;
		if (!this.isPseudoElement && element?.isConnected) this.animation.commitStyles?.();
	}
	get duration() {
		const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(duration));
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(newTime) {
		const wasFinished = this.finishedTime !== null;
		this.manualStartTime = null;
		this.finishedTime = null;
		this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		if (wasFinished) this.animation.pause();
	}
	/**
	* The playback speed of the animation.
	* 1 = normal speed, 2 = double speed, 0.5 = half speed.
	*/
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(newSpeed) {
		if (newSpeed < 0) this.finishedTime = null;
		this.animation.playbackRate = newSpeed;
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState;
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(newStartTime) {
		this.manualStartTime = this.animation.startTime = newStartTime;
	}
	/**
	* Attaches a timeline to the animation, for instance the `ScrollTimeline`.
	*/
	attachTimeline({ timeline, rangeStart, rangeEnd, observe }) {
		if (this.allowFlatten) this.animation.effect?.updateTiming({ easing: "linear" });
		this.animation.onfinish = null;
		if (timeline && supportsScrollTimeline()) {
			this.animation.timeline = timeline;
			if (rangeStart) this.animation.rangeStart = rangeStart;
			if (rangeEnd) this.animation.rangeEnd = rangeEnd;
			return noop;
		} else return observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(key) {
	return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
	if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) transition.ease = unsupportedEasingFunctions[transition.ease];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
/**
* 10ms is chosen here as it strikes a balance between smooth
* results (more than one keyframe per frame at 60fps) and
* keyframe quantity.
*/
var sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
	constructor(options) {
		/**
		* The base NativeAnimation function only supports a subset
		* of Motion easings, and WAAPI also only supports some
		* easing functions via string/cubic-bezier definitions.
		*
		* This function replaces those unsupported easing functions
		* with a JS easing function. This will later get compiled
		* to a linear() easing function.
		*/
		replaceStringEasing(options);
		/**
		* Ensure we replace the transition type with a generator function
		* before passing to WAAPI.
		*
		* TODO: Does this have a better home? It could be shared with
		* JSAnimation.
		*/
		replaceTransitionType(options);
		super(options);
		/**
		* Only set startTime when the animation should autoplay.
		* Setting startTime on a paused WAAPI animation unpauses it
		* (per the WAAPI spec), which breaks autoplay: false.
		*/
		if (options.startTime !== void 0 && options.autoplay !== false) this.startTime = options.startTime;
		this.options = options;
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* Rather than read committed styles back out of the DOM, we can
	* create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to calculate velocity for any subsequent animation.
	*/
	updateMotionValue(value) {
		const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
		if (!motionValue) return;
		if (value !== void 0) {
			motionValue.set(value);
			return;
		}
		const sampleAnimation = new JSAnimation({
			...options,
			autoplay: false
		});
		/**
		* Use wall-clock elapsed time for sampling.
		* Under CPU load, WAAPI's currentTime may not reflect actual
		* elapsed time, causing incorrect sampling and visual jumps.
		*/
		const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
		const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
		const current = sampleAnimation.sample(sampleTime).value;
		/**
		* Write the estimated value to inline style so it persists
		* after cancel(), covering the async gap before the next
		* animation starts.
		*/
		const { name } = this.options;
		if (element && name) setStyle(element, name, current);
		motionValue.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
		sampleAnimation.stop();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
var isAnimatable = (value, name) => {
	if (name === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes) {
	const current = keyframes[0];
	if (keyframes.length === 1) return true;
	for (let i = 0; i < keyframes.length; i++) if (keyframes[i] !== current) return true;
}
function canAnimate(keyframes, name, type, velocity) {
	/**
	* Check if we're able to animate between the start and end keyframes,
	* and throw a warning if we're attempting to animate between one that's
	* animatable and another that isn't.
	*/
	const originKeyframe = keyframes[0];
	if (originKeyframe === null) return false;
	/**
	* These aren't traditionally animatable but we do support them.
	* In future we could look into making this more generic or replacing
	* this function with mix() === mixImmediate
	*/
	if (name === "display" || name === "visibility") return true;
	const targetKeyframe = keyframes[keyframes.length - 1];
	const isOriginAnimatable = isAnimatable(originKeyframe, name);
	const isTargetAnimatable = isAnimatable(targetKeyframe, name);
	`${name}${originKeyframe}${targetKeyframe}${isOriginAnimatable ? targetKeyframe : originKeyframe}`;
	if (!isOriginAnimatable || !isTargetAnimatable) return false;
	return hasKeyframesChanged(keyframes) || (type === "spring" || isGenerator(type)) && velocity;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
	options.duration = 0;
	options.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
/**
* A list of values that can be hardware-accelerated.
*/
var acceleratedValues = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes) {
	for (let i = 0; i < keyframes.length; i++) if (typeof keyframes[i] === "string" && browserColorFunctions.test(keyframes[i])) return true;
	return false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var colorProperties = /* @__PURE__ */ new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]);
var supportsWaapi = /*@__PURE__*/ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
	const { motionValue, name, repeatDelay, repeatType, damping, type, keyframes } = options;
	/**
	* We use this check instead of isHTMLElement() because we explicitly
	* **don't** want elements in different timing contexts (i.e. popups)
	* to be accelerated, as it's not possible to sync these animations
	* properly with those driven from the main window frameloop.
	*/
	if (!(motionValue?.owner?.current instanceof HTMLElement)) return false;
	const { onUpdate, transformTemplate } = motionValue.owner.getProps();
	return supportsWaapi() && name && (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes)) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
/**
* Maximum time allowed between an animation being created and it being
* resolved for us to use the latter as the start time.
*
* This is to ensure that while we prefer to "start" an animation as soon
* as it's triggered, we also want to avoid a visual jump if there's a big delay
* between these two moments.
*/
var MAX_RESOLVE_DELAY = 40;
var AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...options }) {
		super();
		/**
		* Bound to support return animation.stop pattern
		*/
		this.stop = () => {
			if (this._animation) {
				this._animation.stop();
				this.stopTimeline?.();
			}
			this.keyframeResolver?.cancel();
		};
		this.createdAt = time.now();
		const optionsWithDefaults = {
			autoplay,
			delay,
			type,
			repeat,
			repeatDelay,
			repeatType,
			name,
			motionValue,
			element,
			...options
		};
		const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
		this.keyframeResolver = new KeyframeResolver$1(keyframes, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
		this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
		this.keyframeResolver = void 0;
		const { name, type, velocity, delay, isHandoff, onUpdate } = options;
		this.resolvedAt = time.now();
		/**
		* If we can't animate this value with the resolved keyframes
		* then we should complete it immediately.
		*/
		let canAnimateValue = true;
		if (!canAnimate(keyframes, name, type, velocity)) {
			canAnimateValue = false;
			if (MotionGlobalConfig.instantAnimations || !delay) onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
			keyframes[0] = keyframes[keyframes.length - 1];
			makeAnimationInstant(options);
			options.repeat = 0;
		}
		const resolvedOptions = {
			startTime: sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe,
			...options,
			keyframes
		};
		/**
		* Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
		* WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
		* optimised animation.
		*
		* Also skip WAAPI when keyframes aren't animatable, as the resolved
		* values may not be valid CSS and would trigger browser warnings.
		*/
		const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(resolvedOptions);
		const element = resolvedOptions.motionValue?.owner?.current;
		let animation;
		if (useWaapi) try {
			animation = new NativeAnimationExtended({
				...resolvedOptions,
				element
			});
		} catch {
			animation = new JSAnimation(resolvedOptions);
		}
		else animation = new JSAnimation(resolvedOptions);
		animation.finished.then(() => {
			this.notifyFinished();
		}).catch(noop);
		if (this.pendingTimeline) {
			this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
			this.pendingTimeline = void 0;
		}
		this._animation = animation;
	}
	get finished() {
		if (!this._animation) return this._finished;
		else return this.animation.finished;
	}
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
	get animation() {
		if (!this._animation) {
			this.keyframeResolver?.resume();
			flushKeyframeResolvers();
		}
		return this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(newTime) {
		this.animation.time = newTime;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(newSpeed) {
		this.animation.speed = newSpeed;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(timeline) {
		if (this._animation) this.stopTimeline = this.animation.attachTimeline(timeline);
		else this.pendingTimeline = timeline;
		return () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		if (this._animation) this.animation.cancel();
		this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
/**
* If `transition` has `inherit: true`, shallow-merge it with
* `parentTransition` (child keys win) and strip the `inherit` key.
* Otherwise return `transition` unchanged.
*/
function resolveTransition(transition, parentTransition) {
	if (transition?.inherit && parentTransition) {
		const { inherit: _, ...rest } = transition;
		return {
			...parentTransition,
			...rest
		};
	}
	return transition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
	const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
	if (valueTransition !== transition) return resolveTransition(valueTransition, transition);
	return valueTransition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
	type: "spring",
	stiffness: 550,
	damping: target === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
});
var keyframesTransition = {
	type: "keyframes",
	duration: .8
};
/**
* Default easing curve is a slightly shallower version of
* the default browser easing curve.
*/
var ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
};
var getDefaultTransition = (valueKey, { keyframes }) => {
	if (keyframes.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
	return ease;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var orchestrationKeys = /* @__PURE__ */ new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined(transition) {
	for (const key in transition) if (!orchestrationKeys.has(key)) return true;
	return false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
	const valueTransition = getValueTransition(transition, name) || {};
	/**
	* Most transition values are currently completely overwritten by value-specific
	* transitions. In the future it'd be nicer to blend these transitions. But for now
	* delay actually does inherit from the root transition if not value-specific.
	*/
	const delay = valueTransition.delay || transition.delay || 0;
	/**
	* Elapsed isn't a public transition option but can be passed through from
	* optimized appear effects in milliseconds.
	*/
	let { elapsed = 0 } = transition;
	elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay);
	const options = {
		keyframes: Array.isArray(target) ? target : [null, target],
		ease: "easeOut",
		velocity: value.getVelocity(),
		...valueTransition,
		delay: -elapsed,
		onUpdate: (v) => {
			value.set(v);
			valueTransition.onUpdate && valueTransition.onUpdate(v);
		},
		onComplete: () => {
			onComplete();
			valueTransition.onComplete && valueTransition.onComplete();
		},
		name,
		motionValue: value,
		element: isHandoff ? void 0 : element
	};
	/**
	* If there's no transition defined for this value, we can generate
	* unique transition settings for this value.
	*/
	if (!isTransitionDefined(valueTransition)) Object.assign(options, getDefaultTransition(name, options));
	/**
	* Both WAAPI and our internal animation functions use durations
	* as defined by milliseconds, while our external API defines them
	* as seconds.
	*/
	options.duration && (options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration));
	options.repeatDelay && (options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay));
	/**
	* Support deprecated way to set initial value. Prefer keyframe syntax.
	*/
	if (options.from !== void 0) options.keyframes[0] = options.from;
	let shouldSkip = false;
	if (options.type === false || options.duration === 0 && !options.repeatDelay) {
		makeAnimationInstant(options);
		if (options.delay === 0) shouldSkip = true;
	}
	if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
		shouldSkip = true;
		makeAnimationInstant(options);
		options.delay = 0;
	}
	/**
	* If the transition type or easing has been explicitly set by the user
	* then we don't want to allow flattening the animation.
	*/
	options.allowFlatten = !valueTransition.type && !valueTransition.ease;
	/**
	* If we can or must skip creating the animation, and apply only
	* the final keyframe, do so. We also check once keyframes are resolved but
	* this early check prevents the need to create an animation at all.
	*/
	if (shouldSkip && !isHandoff && value.get() !== void 0) {
		const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
		if (finalKeyframe !== void 0) {
			frame.update(() => {
				options.onUpdate(finalKeyframe);
				options.onComplete();
			});
			return;
		}
	}
	return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
var optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
	x: false,
	y: false
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
	if (axis === "x" || axis === "y") if (isDragging[axis]) return null;
	else {
		isDragging[axis] = true;
		return () => {
			isDragging[axis] = false;
		};
	}
	else if (isDragging.x || isDragging.y) return null;
	else {
		isDragging.x = isDragging.y = true;
		return () => {
			isDragging.x = isDragging.y = false;
		};
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
	if (elementOrSelector == null) return [];
	if (elementOrSelector instanceof EventTarget) return [elementOrSelector];
	else if (typeof elementOrSelector === "string") {
		let root = document;
		if (scope) root = scope.current;
		const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
		return elements ? Array.from(elements) : [];
	}
	return Array.from(elementOrSelector).filter((element) => element != null);
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
	const elements = resolveElements(elementOrSelector);
	const gestureAbortController = new AbortController();
	const eventOptions = {
		passive: true,
		...options,
		signal: gestureAbortController.signal
	};
	const cancel = () => gestureAbortController.abort();
	return [
		elements,
		eventOptions,
		cancel
	];
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
	return !(event.pointerType === "touch" || isDragActive());
}
/**
* Create a hover gesture. hover() is different to .addEventListener("pointerenter")
* in that it has an easier syntax, filters out polyfilled touch events, interoperates
* with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
*
* @public
*/
function hover(elementOrSelector, onHoverStart, options = {}) {
	const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
	elements.forEach((element) => {
		let isPressed = false;
		let deferredHoverEnd = false;
		let hoverEndCallback;
		const removePointerLeave = () => {
			element.removeEventListener("pointerleave", onPointerLeave);
		};
		const endHover = (event) => {
			if (hoverEndCallback) {
				hoverEndCallback(event);
				hoverEndCallback = void 0;
			}
			removePointerLeave();
		};
		const onPointerUp = (event) => {
			isPressed = false;
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerUp);
			if (deferredHoverEnd) {
				deferredHoverEnd = false;
				endHover(event);
			}
		};
		const onPointerDown = () => {
			isPressed = true;
			window.addEventListener("pointerup", onPointerUp, eventOptions);
			window.addEventListener("pointercancel", onPointerUp, eventOptions);
		};
		const onPointerLeave = (leaveEvent) => {
			if (leaveEvent.pointerType === "touch") return;
			if (isPressed) {
				deferredHoverEnd = true;
				return;
			}
			endHover(leaveEvent);
		};
		const onPointerEnter = (enterEvent) => {
			if (!isValidHover(enterEvent)) return;
			deferredHoverEnd = false;
			const onHoverEnd = onHoverStart(element, enterEvent);
			if (typeof onHoverEnd !== "function") return;
			hoverEndCallback = onHoverEnd;
			element.addEventListener("pointerleave", onPointerLeave, eventOptions);
		};
		element.addEventListener("pointerenter", onPointerEnter, eventOptions);
		element.addEventListener("pointerdown", onPointerDown, eventOptions);
	});
	return cancel;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-html-element.mjs
/**
* Checks if an element is an HTML element in a way
* that works across iframes
*/
function isHTMLElement(element) {
	return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
/**
* Recursively traverse up the tree to check whether the provided child node
* is the parent or a descendant of it.
*
* @param parent - Element to find
* @param child - Element to test against parent
*/
var isNodeOrChild = (parent, child) => {
	if (!child) return false;
	else if (parent === child) return true;
	else return isNodeOrChild(parent, child.parentElement);
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
	if (event.pointerType === "mouse") return typeof event.button !== "number" || event.button <= 0;
	else
 /**
	* isPrimary is true for all mice buttons, whereas every touch point
	* is regarded as its own input. So subsequent concurrent touch points
	* will be false.
	*
	* Specifically match against false here as incomplete versions of
	* PointerEvents in very old browser might have it set as undefined.
	*/
	return event.isPrimary !== false;
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var keyboardAccessibleElements = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
/**
* Checks if an element is natively keyboard accessible (focusable).
* Used by the press gesture to determine if we need to add tabIndex.
*/
function isElementKeyboardAccessible(element) {
	return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
var textInputElements = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
/**
* Checks if an element has text selection or direct interaction behavior
* that should block drag gestures from starting.
*
* This specifically targets form controls where the user might want to select
* text or interact with the control (e.g., sliders, dropdowns).
*
* Buttons and links are NOT included because they don't have click-and-move
* actions of their own - they only respond to click events, so dragging
* should still work when initiated from these elements.
*/
function isElementTextInput(element) {
	return textInputElements.has(element.tagName) || element.isContentEditable === true;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
/**
* Filter out events that are not "Enter" keys.
*/
function filterEvents(callback) {
	return (event) => {
		if (event.key !== "Enter") return;
		callback(event);
	};
}
function firePointerEvent(target, type) {
	target.dispatchEvent(new PointerEvent("pointer" + type, {
		isPrimary: true,
		bubbles: true
	}));
}
var enableKeyboardPress = (focusEvent, eventOptions) => {
	const element = focusEvent.currentTarget;
	if (!element) return;
	const handleKeydown = filterEvents(() => {
		if (isPressing.has(element)) return;
		firePointerEvent(element, "down");
		const handleKeyup = filterEvents(() => {
			firePointerEvent(element, "up");
		});
		const handleBlur = () => firePointerEvent(element, "cancel");
		element.addEventListener("keyup", handleKeyup, eventOptions);
		element.addEventListener("blur", handleBlur, eventOptions);
	});
	element.addEventListener("keydown", handleKeydown, eventOptions);
	/**
	* Add an event listener that fires on blur to remove the keydown events.
	*/
	element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/index.mjs
/**
* Filter out events that are not primary pointer events, or are triggering
* while a Motion gesture is active.
*/
function isValidPressEvent(event) {
	return isPrimaryPointer(event) && !isDragActive();
}
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
/**
* Create a press gesture.
*
* Press is different to `"pointerdown"`, `"pointerup"` in that it
* automatically filters out secondary pointer events like right
* click and multitouch.
*
* It also adds accessibility support for keyboards, where
* an element with a press gesture will receive focus and
*  trigger on Enter `"keydown"` and `"keyup"` events.
*
* This is different to a browser's `"click"` event, which does
* respond to keyboards but only for the `"click"` itself, rather
* than the press start and end/cancel. The element also needs
* to be focusable for this to work, whereas a press gesture will
* make an element focusable by default.
*
* @public
*/
function press(targetOrSelector, onPressStart, options = {}) {
	const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
	const startPress = (startEvent) => {
		const target = startEvent.currentTarget;
		if (!isValidPressEvent(startEvent)) return;
		if (claimedPointerDownEvents.has(startEvent)) return;
		isPressing.add(target);
		if (options.stopPropagation) claimedPointerDownEvents.add(startEvent);
		const onPressEnd = onPressStart(target, startEvent);
		/**
		* End listeners run in the capture phase so a descendant calling
		* stopPropagation() in its own pointerup handler can't prevent the
		* press gesture from ending. This also keeps the gesture-end
		* ordering consistent with the drag gesture. See #2794.
		*/
		const endEventOptions = {
			...eventOptions,
			capture: true
		};
		const onPointerEnd = (endEvent, success) => {
			window.removeEventListener("pointerup", onPointerUp, endEventOptions);
			window.removeEventListener("pointercancel", onPointerCancel, endEventOptions);
			if (isPressing.has(target)) isPressing.delete(target);
			if (!isValidPressEvent(endEvent)) return;
			if (typeof onPressEnd === "function") onPressEnd(endEvent, { success });
		};
		const onPointerUp = (upEvent) => {
			onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
		};
		const onPointerCancel = (cancelEvent) => {
			onPointerEnd(cancelEvent, false);
		};
		window.addEventListener("pointerup", onPointerUp, endEventOptions);
		window.addEventListener("pointercancel", onPointerCancel, endEventOptions);
	};
	targets.forEach((target) => {
		(options.useGlobalTarget ? window : target).addEventListener("pointerdown", startPress, eventOptions);
		if (isHTMLElement(target)) {
			target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
			if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) target.tabIndex = 0;
		}
	});
	return cancelEvents;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
/**
* Checks if an element is an SVG element in a way
* that works across iframes
*/
function isSVGElement(element) {
	return isObject(element) && "ownerSVGElement" in element;
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
	if (borderBoxSize && borderBoxSize[0]) return borderBoxSize[0][borderBoxAxis + "Size"];
	else if (isSVGElement(target) && "getBBox" in target) return target.getBBox()[svgAxis];
	else return target[htmlAxis];
};
var getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
var getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
	resizeHandlers.get(target)?.forEach((handler) => {
		handler(target, {
			get width() {
				return getWidth(target, borderBoxSize);
			},
			get height() {
				return getHeight(target, borderBoxSize);
			}
		});
	});
}
function notifyAll(entries) {
	entries.forEach(notifyTarget);
}
function createResizeObserver() {
	if (typeof ResizeObserver === "undefined") return;
	observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
	if (!observer) createResizeObserver();
	const elements = resolveElements(target);
	elements.forEach((element) => {
		let elementHandlers = resizeHandlers.get(element);
		if (!elementHandlers) {
			elementHandlers = /* @__PURE__ */ new Set();
			resizeHandlers.set(element, elementHandlers);
		}
		elementHandlers.add(handler);
		observer?.observe(element);
	});
	return () => {
		elements.forEach((element) => {
			const elementHandlers = resizeHandlers.get(element);
			elementHandlers?.delete(handler);
			if (!elementHandlers?.size) observer?.unobserve(element);
		});
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
	windowResizeHandler = () => {
		const info = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		windowCallbacks.forEach((callback) => callback(info));
	};
	window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
	windowCallbacks.add(callback);
	if (!windowResizeHandler) createWindowResizeHandler();
	return () => {
		windowCallbacks.delete(callback);
		if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
			window.removeEventListener("resize", windowResizeHandler);
			windowResizeHandler = void 0;
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/index.mjs
function resize(a, b) {
	return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/transform.mjs
function transform(...args) {
	const useImmediate = !Array.isArray(args[0]);
	const argOffset = useImmediate ? 0 : -1;
	const inputValue = args[0 + argOffset];
	const inputRange = args[1 + argOffset];
	const outputRange = args[2 + argOffset];
	const options = args[3 + argOffset];
	const interpolator = interpolate(inputRange, outputRange, options);
	return useImmediate ? interpolator(inputValue) : interpolator;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/index.mjs
/**
* Maximum time between the value of two frames, beyond which we
* assume the velocity has since been 0.
*/
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
var collectMotionValues = { current: void 0 };
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = class {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*/
	constructor(init, options = {}) {
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = null;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		this.updateAndNotify = (v) => {
			const currentTime = time.now();
			/**
			* If we're updating the value during another frame or eventloop
			* than the previous frame, then the we set the previous frame value
			* to current.
			*/
			if (this.updatedAt !== currentTime) this.setPrevFrameValue();
			this.prev = this.current;
			this.setCurrent(v);
			if (this.current !== this.prev) {
				this.events.change?.notify(this.current);
				if (this.dependents) for (const dependent of this.dependents) dependent.dirty();
			}
		};
		this.hasAnimated = false;
		this.setCurrent(init);
		this.owner = options.owner;
	}
	setCurrent(current) {
		this.current = current;
		this.updatedAt = time.now();
		if (this.canTrackVelocity === null && current !== void 0) this.canTrackVelocity = isFloat(this.current);
	}
	setPrevFrameValue(prevFrameValue = this.current) {
		this.prevFrameValue = prevFrameValue;
		this.prevUpdatedAt = this.updatedAt;
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.on("change", updateOpacity)
	*     const unsubscribeY = y.on("change", updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <motion.div style={{ x }} />
	* }
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @deprecated
	*/
	onChange(subscription) {
		return this.on("change", subscription);
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		const unsubscribe = this.events[eventName].add(callback);
		if (eventName === "change") return () => {
			unsubscribe();
			/**
			* If we have no more change listeners by the start
			* of the next frame, stop active animations.
			*/
			frame.read(() => {
				if (!this.events.change.getSize()) this.stop();
			});
		};
		return unsubscribe;
	}
	clearListeners() {
		for (const eventManagers in this.events) this.events[eventManagers].clear();
	}
	/**
	* Attaches a passive effect to the `MotionValue`.
	*/
	attach(passiveEffect, stopPassiveEffect) {
		this.passiveEffect = passiveEffect;
		this.stopPassiveEffect = stopPassiveEffect;
	}
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	set(v) {
		if (!this.passiveEffect) this.updateAndNotify(v);
		else this.passiveEffect(v, this.updateAndNotify);
	}
	setWithVelocity(prev, current, delta) {
		this.set(current);
		this.prev = void 0;
		this.prevFrameValue = prev;
		this.prevUpdatedAt = this.updatedAt - delta;
	}
	/**
	* Set the state of the `MotionValue`, stopping any active animations,
	* effects, and resets velocity to `0`.
	*/
	jump(v, endAnimation = true) {
		this.updateAndNotify(v);
		this.prev = v;
		this.prevUpdatedAt = this.prevFrameValue = void 0;
		endAnimation && this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(dependent) {
		if (!this.dependents) this.dependents = /* @__PURE__ */ new Set();
		this.dependents.add(dependent);
	}
	removeDependent(dependent) {
		if (this.dependents) this.dependents.delete(dependent);
	}
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	get() {
		if (collectMotionValues.current) collectMotionValues.current.push(this);
		return this.current;
	}
	/**
	* @public
	*/
	getPrevious() {
		return this.prev;
	}
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	getVelocity() {
		const currentTime = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return /* @__PURE__ */ velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
	}
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*/
	start(startAnimation) {
		this.stop();
		return new Promise((resolve) => {
			this.hasAnimated = true;
			this.animation = startAnimation(resolve);
			if (this.events.animationStart) this.events.animationStart.notify();
		}).then(() => {
			if (this.events.animationComplete) this.events.animationComplete.notify();
			this.clearAnimation();
		});
	}
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	stop() {
		if (this.animation) {
			this.animation.stop();
			if (this.events.animationCancel) this.events.animationCancel.notify();
		}
		this.clearAnimation();
	}
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	destroy() {
		this.dependents?.clear();
		this.events.destroy?.notify();
		this.clearListeners();
		this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
};
function motionValue(init, options) {
	return new MotionValue(init, options);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function isWillChangeMotionValue(value) {
	return Boolean(isMotionValue(value) && value.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
	const willChange = visualElement.getValue("willChange");
	/**
	* It could be that a user has set willChange to a regular MotionValue,
	* in which case we can't add the value to it.
	*/
	if (isWillChangeMotionValue(willChange)) return willChange.add(key);
	else if (!willChange && MotionGlobalConfig.WillChange) {
		const newWillChange = new MotionGlobalConfig.WillChange("auto");
		visualElement.addValue("willChange", newWillChange);
		newWillChange.add(key);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/Feature.mjs
/**
* Feature base class for extending VisualElement functionality.
* Features are plugins that can be mounted/unmounted to add behavior
* like gestures, animations, or layout tracking.
*/
var Feature = class {
	constructor(node) {
		this.isMounted = false;
		this.node = node;
	}
	update() {}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToBox({ top, left, right, bottom }) {
	return {
		x: {
			min: left,
			max: right
		},
		y: {
			min: top,
			max: bottom
		}
	};
}
function convertBoxToBoundingBox({ x, y }) {
	return {
		top: y.min,
		right: x.max,
		bottom: y.max,
		left: x.min
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoxPoints(point, transformPoint) {
	if (!transformPoint) return point;
	const topLeft = transformPoint({
		x: point.left,
		y: point.top
	});
	const bottomRight = transformPoint({
		x: point.right,
		y: point.bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale) {
	return scale === void 0 || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
	return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
	return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
	return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
	return value && value !== "0%";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
/**
* Scales a point based on a factor and an originPoint
*/
function scalePoint(point, scale, originPoint) {
	return originPoint + scale * (point - originPoint);
}
/**
* Applies a translate/scale delta to a point
*/
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
	if (boxScale !== void 0) point = scalePoint(point, boxScale, originPoint);
	return scalePoint(point, scale, originPoint) + translate;
}
/**
* Applies a translate/scale delta to an axis
*/
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
	axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Applies a translate/scale delta to a box
*/
function applyBoxDelta(box, { x, y }) {
	applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
	applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
* Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
* in a tree upon our box before then calculating how to project it into our desired viewport-relative box
*
* This is the final nested loop within updateLayoutDelta for future refactoring
*/
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
	const treeLength = treePath.length;
	if (!treeLength) return;
	treeScale.x = treeScale.y = 1;
	let node;
	let delta;
	for (let i = 0; i < treeLength; i++) {
		node = treePath[i];
		delta = node.projectionDelta;
		/**
		* TODO: Prefer to remove this, but currently we have motion components with
		* display: contents in Framer.
		*/
		const { visualElement } = node.options;
		if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
		if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
			translateAxis(box.x, -node.scroll.offset.x);
			translateAxis(box.y, -node.scroll.offset.y);
		}
		if (delta) {
			treeScale.x *= delta.x.scale;
			treeScale.y *= delta.y.scale;
			applyBoxDelta(box, delta);
		}
		if (isSharedTransition && hasTransform(node.latestValues)) transformBox(box, node.latestValues, node.layout?.layoutBox);
	}
	/**
	* Snap tree scale back to 1 if it's within a non-perceivable threshold.
	* This will help reduce useless scales getting rendered.
	*/
	if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1;
	if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1;
}
function translateAxis(axis, distance) {
	axis.min += distance;
	axis.max += distance;
}
/**
* Apply a transform to an axis from the latest resolved motion values.
* This function basically acts as a bridge between a flat motion value map
* and applyAxisDelta
*/
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = .5) {
	applyAxisDelta(axis, axisTranslate, axisScale, mixNumber$1(axis.min, axis.max, axisOrigin), boxScale);
}
function resolveAxisTranslate(value, axis) {
	if (typeof value === "string") return parseFloat(value) / 100 * (axis.max - axis.min);
	return value;
}
/**
* Apply a transform to a box from the latest resolved motion values.
*/
function transformBox(box, transform, sourceBox) {
	const resolveBox = sourceBox ?? box;
	transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
	transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
	const viewportBox = measureViewportBox(element, transformPagePoint);
	const { scroll } = rootProjectionNode;
	if (scroll) {
		translateAxis(viewportBox.x, scroll.offset.x);
		translateAxis(viewportBox.y, scroll.offset.y);
	}
	return viewportBox;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]);
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
/**
* ValueType for "auto"
*/
var auto = {
	test: (v) => v === "auto",
	parse: (v) => v
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/test.mjs
/**
* Tests a provided value against a ValueType
*/
var testValueType = (v) => (type) => type.test(v);
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/dimensions.mjs
/**
* A list of value types commonly used for dimensions
*/
var dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
	const match = splitCSSVariableRegex.exec(current);
	if (!match) return [,];
	const [, token1, token2, fallback] = match;
	return [`--${token1 ?? token2}`, fallback];
}
function getVariableValue(current, element, depth = 1) {
	`${current}`;
	const [token, fallback] = parseCSSVariable(current);
	if (!token) return;
	const resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	}
	return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
	else return true;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
/**
* Properties that should default to 1 or 100%
*/
var maxDefaults = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	const [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number] = value.match(floatRegex) || [];
	if (!number) return v;
	const unit = value.replace(number, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
	...complex,
	getAnimatableNone: (v) => {
		const functions = v.match(functionRegex);
		return functions ? functions.map(applyDefaultFilter).join(" ") : v;
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
var mask = {
	...complex,
	getAnimatableNone: (v) => {
		const parsed = complex.parse(v);
		return complex.createTransformer(v)(parsed.map((v) => typeof v === "number" ? 0 : typeof v === "object" ? {
			...v,
			alpha: 1
		} : v));
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
	...number,
	transform: Math.round
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	inset: px,
	insetBlock: px,
	insetBlockStart: px,
	insetBlockEnd: px,
	insetInline: px,
	insetInlineStart: px,
	insetInlineEnd: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	paddingBlock: px,
	paddingBlockStart: px,
	paddingBlockEnd: px,
	paddingInline: px,
	paddingInlineStart: px,
	paddingInlineEnd: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	marginBlock: px,
	marginBlockStart: px,
	marginBlockEnd: px,
	marginInline: px,
	marginInlineStart: px,
	marginInlineEnd: px,
	fontSize: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	rotate: degrees,
	/**
	* Internal channel for `transition.path` orientToPath. Composed onto
	* `rotate` at the transform-build sites so the user's `rotate` is
	* never read or overwritten. Not part of `transformPropOrder`.
	*/
	pathRotation: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
/**
* A map of default value types for common values
*/
var defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter,
	mask,
	WebkitMask: mask
};
/**
* Gets the default ValueType for the provided value key
*/
var getDefaultValueType = (key) => defaultValueTypes[key];
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
var customTypes = /*@__PURE__*/ new Set([filter, mask]);
function getAnimatableNone(key, value) {
	let defaultValueType = getDefaultValueType(key);
	if (!customTypes.has(defaultValueType)) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
/**
* If we encounter keyframes like "none" or "0" and we also have keyframes like
* "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
* the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
* zero equivalents, i.e. "#fff0" or "0px 0px".
*/
var invalidTemplates = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
	let i = 0;
	let animatableTemplate = void 0;
	while (i < unresolvedKeyframes.length && !animatableTemplate) {
		const keyframe = unresolvedKeyframes[i];
		if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
		i++;
	}
	if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes) unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
		super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
	}
	readKeyframes() {
		const { unresolvedKeyframes, element, name } = this;
		if (!element || !element.current) return;
		super.readKeyframes();
		/**
		* If any keyframe is a CSS variable, we need to find its value by sampling the element
		*/
		for (let i = 0; i < unresolvedKeyframes.length; i++) {
			let keyframe = unresolvedKeyframes[i];
			if (typeof keyframe === "string") {
				keyframe = keyframe.trim();
				if (isCSSVariableToken(keyframe)) {
					const resolved = getVariableValue(keyframe, element.current);
					if (resolved !== void 0) unresolvedKeyframes[i] = resolved;
					if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
				}
			}
		}
		/**
		* Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
		* This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
		* have a far bigger performance impact.
		*/
		this.resolveNoneKeyframes();
		/**
		* Check to see if unit type has changed. If so schedule jobs that will
		* temporarily set styles to the destination keyframes.
		* Skip if we have more than two keyframes or this isn't a positional value.
		* TODO: We can throw if there are multiple keyframes and the value type changes.
		*/
		if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) return;
		const [origin, target] = unresolvedKeyframes;
		const originType = findDimensionValueType(origin);
		const targetType = findDimensionValueType(target);
		if (containsCSSVariable(origin) !== containsCSSVariable(target) && positionalValues[name]) {
			this.needsMeasurement = true;
			return;
		}
		/**
		* Either we don't recognise these value types or we can animate between them.
		*/
		if (originType === targetType) return;
		/**
		* If both values are numbers or pixels, we can animate between them by
		* converting them to numbers.
		*/
		if (isNumOrPxType(originType) && isNumOrPxType(targetType)) for (let i = 0; i < unresolvedKeyframes.length; i++) {
			const value = unresolvedKeyframes[i];
			if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
		}
		else if (positionalValues[name])
 /**
		* Else, the only way to resolve this is by measuring the element.
		*/
		this.needsMeasurement = true;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes, name } = this;
		const noneKeyframeIndexes = [];
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
		if (noneKeyframeIndexes.length) makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
	}
	measureInitialState() {
		const { element, unresolvedKeyframes, name } = this;
		if (!element || !element.current) return;
		if (name === "height") this.suspendedScrollY = window.pageYOffset;
		this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		unresolvedKeyframes[0] = this.measuredOrigin;
		const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
		if (measureKeyframe !== void 0) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
	}
	measureEndState() {
		const { element, name, unresolvedKeyframes } = this;
		if (!element || !element.current) return;
		const value = element.getValue(name);
		value && value.jump(this.measuredOrigin, false);
		const finalKeyframeIndex = unresolvedKeyframes.length - 1;
		const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
		unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		if (finalKeyframe !== null && this.finalKeyframe === void 0) this.finalKeyframe = finalKeyframe;
		if (this.removedTransforms?.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
			element.getValue(unsetTransformName).set(unsetTransformValue);
		});
		this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
});
var createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
});
var createAxis = () => ({
	min: 0,
	max: 0
});
var createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/find.mjs
/**
* A list of all ValueTypes
*/
var valueTypes = [
	...dimensionValueTypes,
	color,
	complex
];
/**
* Tests a value against the list of ValueTypes
*/
var findValueType = (v) => valueTypes.find(testValueType(v));
//#endregion
//#region node_modules/motion-dom/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function isAnimationControls(v) {
	return v !== null && typeof v === "object" && typeof v.start === "function";
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
/**
* Decides if the supplied variable is variant label
*/
function isVariantLabel(v) {
	return typeof v === "string" || Array.isArray(v);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
];
var variantProps = ["initial", ...variantPriorityOrder];
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
	return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
	return Boolean(isControllingVariants(props) || props.variants);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
/**
* Updates motion values from props changes.
* Uses `any` type for element to avoid circular dependencies with VisualElement.
*/
function updateMotionValuesFromProps(element, next, prev) {
	for (const key in next) {
		const nextValue = next[key];
		const prevValue = prev[key];
		if (isMotionValue(nextValue))
 /**
		* If this is a motion value found in props or style, we want to add it
		* to our visual element's motion value map.
		*/
		element.addValue(key, nextValue);
		else if (isMotionValue(prevValue))
 /**
		* If we're swapping from a motion value to a static value,
		* create a new motion value from that
		*/
		element.addValue(key, motionValue(nextValue, { owner: element }));
		else if (prevValue !== nextValue)
 /**
		* If this is a flat value that has changed, update the motion value
		* or create one if it doesn't exist. We only want to do this if we're
		* not handling the value with our animation state.
		*/
		if (element.hasValue(key)) {
			const existingValue = element.getValue(key);
			if (existingValue.liveStyle === true) existingValue.jump(nextValue);
			else if (!existingValue.hasAnimated) existingValue.set(nextValue);
		} else {
			const latestValue = element.getStaticValue(key);
			element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
		}
	}
	for (const key in prev) if (next[key] === void 0) element.removeValue(key);
	return next;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
var isBrowser = typeof window !== "undefined";
function initPrefersReducedMotion() {
	hasReducedMotionListener.current = true;
	if (!isBrowser) return;
	if (window.matchMedia) {
		const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
		const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
		motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
		setReducedMotionPreferences();
	} else prefersReducedMotion.current = false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
	const state = [{}, {}];
	visualElement?.values.forEach((value, key) => {
		state[0][key] = value.get();
		state[1][key] = value.getVelocity();
	});
	return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
	/**
	* If the variant definition is a function, resolve.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	/**
	* If the variant definition is a variant label, or
	* the function returned a variant label, resolve.
	*/
	if (typeof definition === "string") definition = props.variants && props.variants[definition];
	/**
	* At this point we've resolved both functions and variant labels,
	* but the resolved variant label might itself have been a function.
	* If so, resolve. This can only have returned a valid target object.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	return definition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/VisualElement.mjs
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
];
/**
* Static feature definitions - can be injected by framework layer
*/
var featureDefinitions = {};
/**
* Set feature definitions for all VisualElements.
* This should be called by the framework layer (e.g., framer-motion) during initialization.
*/
function setFeatureDefinitions(definitions) {
	featureDefinitions = definitions;
}
/**
* Get the current feature definitions
*/
function getFeatureDefinitions() {
	return featureDefinitions;
}
/**
* A VisualElement is an imperative abstraction around UI elements such as
* HTMLElement, SVGElement, Three.Object3D etc.
*/
var VisualElement = class {
	/**
	* This method takes React props and returns found MotionValues. For example, HTML
	* MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
	*
	* This isn't an abstract method as it needs calling in the constructor, but it is
	* intended to be one.
	*/
	scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
		return {};
	}
	constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
		/**
		* A reference to the current underlying Instance, e.g. a HTMLElement
		* or Three.Mesh etc.
		*/
		this.current = null;
		/**
		* A set containing references to this VisualElement's children.
		*/
		this.children = /* @__PURE__ */ new Set();
		/**
		* Determine what role this visual element should take in the variant tree.
		*/
		this.isVariantNode = false;
		this.isControllingVariants = false;
		/**
		* Decides whether this VisualElement should animate in reduced motion
		* mode.
		*
		* TODO: This is currently set on every individual VisualElement but feels
		* like it could be set globally.
		*/
		this.shouldReduceMotion = null;
		/**
		* Decides whether animations should be skipped for this VisualElement.
		* Useful for E2E tests and visual regression testing.
		*/
		this.shouldSkipAnimations = false;
		/**
		* A map of all motion values attached to this visual element. Motion
		* values are source of truth for any given animated value. A motion
		* value might be provided externally by the component via props.
		*/
		this.values = /* @__PURE__ */ new Map();
		this.KeyframeResolver = KeyframeResolver;
		/**
		* Cleanup functions for active features (hover/tap/exit etc)
		*/
		this.features = {};
		/**
		* A map of every subscription that binds the provided or generated
		* motion values onChange listeners to this visual element.
		*/
		this.valueSubscriptions = /* @__PURE__ */ new Map();
		/**
		* A reference to the previously-provided motion values as returned
		* from scrapeMotionValuesFromProps. We use the keys in here to determine
		* if any motion values need to be removed after props are updated.
		*/
		this.prevMotionValues = {};
		/**
		* Track whether this element has been mounted before, to detect
		* remounts after Suspense unmount/remount cycles.
		*/
		this.hasBeenMounted = false;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		/**
		* An object containing an unsubscribe function for each prop event subscription.
		* For example, every "Update" event can have multiple subscribers via
		* VisualElement.on(), but only one of those can be defined via the onUpdate prop.
		*/
		this.propEventSubscriptions = {};
		this.notifyUpdate = () => this.notify("Update", this.latestValues);
		this.render = () => {
			if (!this.current) return;
			this.triggerBuild();
			this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
		};
		this.renderScheduledAt = 0;
		this.scheduleRender = () => {
			const now = time.now();
			if (this.renderScheduledAt < now) {
				this.renderScheduledAt = now;
				frame.render(this.render, false, true);
			}
		};
		const { latestValues, renderState } = visualState;
		this.latestValues = latestValues;
		this.baseTarget = { ...latestValues };
		this.initialValues = props.initial ? { ...latestValues } : {};
		this.renderState = renderState;
		this.parent = parent;
		this.props = props;
		this.presenceContext = presenceContext;
		this.depth = parent ? parent.depth + 1 : 0;
		this.reducedMotionConfig = reducedMotionConfig;
		this.skipAnimationsConfig = skipAnimations;
		this.options = options;
		this.blockInitialAnimation = Boolean(blockInitialAnimation);
		this.isControllingVariants = isControllingVariants(props);
		this.isVariantNode = isVariantNode(props);
		if (this.isVariantNode) this.variantChildren = /* @__PURE__ */ new Set();
		this.manuallyAnimateOnMount = Boolean(parent && parent.current);
		/**
		* Any motion values that are provided to the element when created
		* aren't yet bound to the element, as this would technically be impure.
		* However, we iterate through the motion values and set them to the
		* initial values for this component.
		*
		* TODO: This is impure and we should look at changing this to run on mount.
		* Doing so will break some tests but this isn't necessarily a breaking change,
		* more a reflection of the test.
		*/
		const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
		for (const key in initialMotionValues) {
			const value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key]);
		}
	}
	mount(instance) {
		/**
		* If this element has been mounted before (e.g. after a Suspense
		* unmount/remount), reset motion values to their initial state
		* so animations replay correctly from initial → animate.
		*/
		if (this.hasBeenMounted) for (const key in this.initialValues) {
			this.values.get(key)?.jump(this.initialValues[key]);
			this.latestValues[key] = this.initialValues[key];
		}
		this.current = instance;
		visualElementStore.set(instance, this);
		if (this.projection && !this.projection.instance) this.projection.mount(instance);
		if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
		this.values.forEach((value, key) => this.bindToMotionValue(key, value));
		/**
		* Determine reduced motion preference. Only initialize the matchMedia
		* listener if we actually need the dynamic value (i.e., when config
		* is neither "never" nor "always").
		*/
		if (this.reducedMotionConfig === "never") this.shouldReduceMotion = false;
		else if (this.reducedMotionConfig === "always") this.shouldReduceMotion = true;
		else {
			if (!hasReducedMotionListener.current) initPrefersReducedMotion();
			this.shouldReduceMotion = prefersReducedMotion.current;
		}
		/**
		* Set whether animations should be skipped based on the config.
		*/
		this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
		this.parent?.addChild(this);
		this.update(this.props, this.presenceContext);
		this.hasBeenMounted = true;
	}
	unmount() {
		this.projection && this.projection.unmount();
		cancelFrame(this.notifyUpdate);
		cancelFrame(this.render);
		this.valueSubscriptions.forEach((remove) => remove());
		this.valueSubscriptions.clear();
		this.removeFromVariantTree && this.removeFromVariantTree();
		this.parent?.removeChild(this);
		for (const key in this.events) this.events[key].clear();
		for (const key in this.features) {
			const feature = this.features[key];
			if (feature) {
				feature.unmount();
				feature.isMounted = false;
			}
		}
		this.current = null;
	}
	addChild(child) {
		this.children.add(child);
		this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
		this.enteringChildren.add(child);
	}
	removeChild(child) {
		this.children.delete(child);
		this.enteringChildren && this.enteringChildren.delete(child);
	}
	bindToMotionValue(key, value) {
		if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
		if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
			const { factory, keyframes, times, ease, duration } = value.accelerate;
			const animation = new NativeAnimation({
				element: this.current,
				name: key,
				keyframes,
				times,
				ease,
				duration: /* @__PURE__ */ secondsToMilliseconds(duration)
			});
			const cleanup = factory(animation);
			this.valueSubscriptions.set(key, () => {
				cleanup();
				animation.cancel();
			});
			return;
		}
		const valueIsTransform = transformProps.has(key);
		if (valueIsTransform && this.onBindTransform) this.onBindTransform();
		const removeOnChange = value.on("change", (latestValue) => {
			this.latestValues[key] = latestValue;
			this.props.onUpdate && frame.preRender(this.notifyUpdate);
			if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
			this.scheduleRender();
		});
		let removeSyncCheck;
		if (typeof window !== "undefined" && window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
		this.valueSubscriptions.set(key, () => {
			removeOnChange();
			if (removeSyncCheck) removeSyncCheck();
		});
	}
	sortNodePosition(other) {
		/**
		* If these nodes aren't even of the same type we can't compare their depth.
		*/
		if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
		return this.sortInstanceNodePosition(this.current, other.current);
	}
	updateFeatures() {
		let key = "animation";
		for (key in featureDefinitions) {
			const featureDefinition = featureDefinitions[key];
			if (!featureDefinition) continue;
			const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
			/**
			* If this feature is enabled but not active, make a new instance.
			*/
			if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
			/**
			* If we have a feature, mount or update it.
			*/
			if (this.features[key]) {
				const feature = this.features[key];
				if (feature.isMounted) feature.update();
				else {
					feature.mount();
					feature.isMounted = true;
				}
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	/**
	* Measure the current viewport box with or without transforms.
	* Only measures axis-aligned boxes, rotate and skew must be manually
	* removed with a re-render to work.
	*/
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(key) {
		return this.latestValues[key];
	}
	setStaticValue(key, value) {
		this.latestValues[key] = value;
	}
	/**
	* Update the provided props. Ensure any newly-added motion values are
	* added to our map, old ones removed, and listeners updated.
	*/
	update(props, presenceContext) {
		if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
		this.prevProps = this.props;
		this.props = props;
		this.prevPresenceContext = this.presenceContext;
		this.presenceContext = presenceContext;
		/**
		* Update prop event handlers ie onAnimationStart, onAnimationComplete
		*/
		for (let i = 0; i < propEventHandlers.length; i++) {
			const key = propEventHandlers[i];
			if (this.propEventSubscriptions[key]) {
				this.propEventSubscriptions[key]();
				delete this.propEventSubscriptions[key];
			}
			const listener = props["on" + key];
			if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
		if (this.handleChildMotionValue) this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	/**
	* Returns the variant definition with a given name.
	*/
	getVariant(name) {
		return this.props.variants ? this.props.variants[name] : void 0;
	}
	/**
	* Returns the defined default transition on this component.
	*/
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	/**
	* Add a child visual element to our set of children.
	*/
	addVariantChild(child) {
		const closestVariantNode = this.getClosestVariantNode();
		if (closestVariantNode) {
			closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
			return () => closestVariantNode.variantChildren.delete(child);
		}
	}
	/**
	* Add a motion value and bind it to this visual element.
	*/
	addValue(key, value) {
		const existingValue = this.values.get(key);
		if (value !== existingValue) {
			if (existingValue) this.removeValue(key);
			this.bindToMotionValue(key, value);
			this.values.set(key, value);
			this.latestValues[key] = value.get();
		}
	}
	/**
	* Remove a motion value and unbind any active subscriptions.
	*/
	removeValue(key) {
		this.values.delete(key);
		const unsubscribe = this.valueSubscriptions.get(key);
		if (unsubscribe) {
			unsubscribe();
			this.valueSubscriptions.delete(key);
		}
		delete this.latestValues[key];
		this.removeValueFromRenderState(key, this.renderState);
	}
	/**
	* Check whether we have a motion value for this key
	*/
	hasValue(key) {
		return this.values.has(key);
	}
	getValue(key, defaultValue) {
		if (this.props.values && this.props.values[key]) return this.props.values[key];
		let value = this.values.get(key);
		if (value === void 0 && defaultValue !== void 0) {
			value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
			this.addValue(key, value);
		}
		return value;
	}
	/**
	* If we're trying to animate to a previously unencountered value,
	* we need to check for it in our state and as a last resort read it
	* directly from the instance (which might have performance implications).
	*/
	readValue(key, target) {
		let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
		if (value !== void 0 && value !== null) {
			if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) value = parseFloat(value);
			else if (!findValueType(value) && complex.test(target)) value = getAnimatableNone(key, target);
			this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
		}
		return isMotionValue(value) ? value.get() : value;
	}
	/**
	* Set the base target to later animate back to. This is currently
	* only hydrated on creation and when we first read a value.
	*/
	setBaseTarget(key, value) {
		this.baseTarget[key] = value;
	}
	/**
	* Find the base target for a value thats been removed from all animation
	* props.
	*/
	getBaseTarget(key) {
		const { initial } = this.props;
		let valueFromInitial;
		if (typeof initial === "string" || typeof initial === "object") {
			const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
			if (variant) valueFromInitial = variant[key];
		}
		/**
		* If this value still exists in the current initial variant, read that.
		*/
		if (initial && valueFromInitial !== void 0) return valueFromInitial;
		/**
		* Alternatively, if this VisualElement config has defined a getBaseTarget
		* so we can read the value from an alternative source, try that.
		*/
		const target = this.getBaseTargetFromProps(this.props, key);
		if (target !== void 0 && !isMotionValue(target)) return target;
		/**
		* If the value was initially defined on initial, but it doesn't any more,
		* return undefined. Otherwise return the value as initially read from the DOM.
		*/
		return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		return this.events[eventName].add(callback);
	}
	notify(eventName, ...args) {
		if (this.events[eventName]) this.events[eventName].notify(...args);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments);
		this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(a, b) {
		/**
		* compareDocumentPosition returns a bitmask, by using the bitwise &
		* we're returning true if 2 in that bitmask is set to true. 2 is set
		* to true if b preceeds a.
		*/
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(props, key) {
		const style = props.style;
		return style ? style[key] : void 0;
	}
	removeValueFromRenderState(key, { vars, style }) {
		delete vars[key];
		delete style[key];
	}
	handleChildMotionValue() {
		if (this.childSubscription) {
			this.childSubscription();
			delete this.childSubscription;
		}
		const { children } = this.props;
		if (isMotionValue(children)) this.childSubscription = children.on("change", (latest) => {
			if (this.current) this.current.textContent = `${latest}`;
		});
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
var getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
/**
* Build a CSS transform style from individual x/y/scale etc properties.
*
* This outputs with a default order of transforms/scales/rotations, this can be customised by
* providing a transformTemplate function.
*/
function buildTransform(latestValues, transform, transformTemplate) {
	let transformString = "";
	let transformIsDefault = true;
	/**
	* Loop over all possible transforms in order, adding the ones that
	* are present to the transform string.
	*/
	for (let i = 0; i < numTransforms; i++) {
		const key = transformPropOrder[i];
		const value = latestValues[key];
		if (value === void 0) continue;
		let valueIsDefault = true;
		if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
		else {
			const parsed = parseFloat(value);
			valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
		}
		if (!valueIsDefault || transformTemplate) {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (!valueIsDefault) {
				transformIsDefault = false;
				const transformName = translateAlias[key] || key;
				transformString += `${transformName}(${valueAsType}) `;
			}
			if (transformTemplate) transform[key] = valueAsType;
		}
	}
	const pathRotation = latestValues.pathRotation;
	if (pathRotation) {
		transformIsDefault = false;
		transformString += `rotate(${getValueAsType(pathRotation, numberValueTypes.pathRotation)}) `;
	}
	transformString = transformString.trim();
	if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
	else if (transformIsDefault) transformString = "none";
	return transformString;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
	const { style, vars, transformOrigin } = state;
	let hasTransform = false;
	let hasTransformOrigin = false;
	/**
	* Loop over all our latest animated values and decide whether to handle them
	* as a style or CSS variable.
	*
	* Transforms and transform origins are kept separately for further processing.
	*/
	for (const key in latestValues) {
		const value = latestValues[key];
		if (transformProps.has(key)) {
			hasTransform = true;
			continue;
		} else if (isCSSVariableName(key)) {
			vars[key] = value;
			continue;
		} else {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (key.startsWith("origin")) {
				hasTransformOrigin = true;
				transformOrigin[key] = valueAsType;
			} else style[key] = valueAsType;
		}
	}
	if (!latestValues.transform) {
		if (hasTransform || transformTemplate) style.transform = buildTransform(latestValues, state.transform, transformTemplate);
		else if (style.transform)
 /**
		* If we have previously created a transform but currently don't have any,
		* reset transform style to none.
		*/
		style.transform = "none";
	}
	/**
	* Build a transformOrigin style. Uses the same defaults as the browser for
	* undefined origins.
	*/
	if (hasTransformOrigin) {
		const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
		style.transformOrigin = `${originX} ${originY} ${originZ}`;
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
	const elementStyle = element.style;
	let key;
	for (key in style) elementStyle[key] = style[key];
	projection?.applyProjectionStyles(elementStyle, styleProp);
	for (key in vars) elementStyle.setProperty(key, vars[key]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
	if (axis.max === axis.min) return 0;
	return pixels / (axis.max - axis.min) * 100;
}
/**
* We always correct borderRadius as a percentage rather than pixels to reduce paints.
* For example, if you are projecting a box that is 100px wide with a 10px borderRadius
* into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
* borderRadius in both states. If we animate between the two in pixels that will trigger
* a paint each time. If we animate between the two in percentage we'll avoid a paint.
*/
var correctBorderRadius = { correct: (latest, node) => {
	if (!node.target) return latest;
	/**
	* If latest is a string, if it's a percentage we can return immediately as it's
	* going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
	*/
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	return `${pixelsToPercent(latest, node.target.x)}% ${pixelsToPercent(latest, node.target.y)}%`;
} };
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = { correct: (latest, { treeScale, projectionDelta }) => {
	const original = latest;
	const shadow = complex.parse(latest);
	if (shadow.length > 5) return original;
	const template = complex.createTransformer(latest);
	const offset = typeof shadow[0] !== "number" ? 1 : 0;
	const xScale = projectionDelta.x.scale * treeScale.x;
	const yScale = projectionDelta.y.scale * treeScale.y;
	shadow[0 + offset] /= xScale;
	shadow[1 + offset] /= yScale;
	/**
	* Ideally we'd correct x and y scales individually, but because blur and
	* spread apply to both we have to take a scale average and apply that instead.
	* We could potentially improve the outcome of this by incorporating the ratio between
	* the two scales.
	*/
	const averageScale = mixNumber$1(xScale, yScale, .5);
	if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
	if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
	return template(shadow);
} };
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout, layoutId }) {
	return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
	const style = props.style;
	const prevStyle = prevProps?.style;
	const newValues = {};
	if (!style) return newValues;
	for (const key in style) if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) newValues[key] = style[key];
	return newValues;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle$1(element) {
	return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "html";
		this.renderInstance = renderHTML;
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
		else {
			const computedStyle = getComputedStyle$1(instance);
			const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
			return typeof value === "string" ? value.trim() : value;
		}
	}
	measureInstanceViewportBox(instance, { transformPagePoint }) {
		return measureViewportBox(instance, transformPagePoint);
	}
	build(renderState, latestValues, props) {
		buildHTMLStyles(renderState, latestValues, props.transformTemplate);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
var camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
/**
* Build SVG path properties. Uses the path's measured length to convert
* our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
* and stroke-dasharray attributes.
*
* This function is mutative to reduce per-frame GC.
*
* Note: We use unitless values for stroke-dasharray and stroke-dashoffset
* because Safari incorrectly scales px values when the page is zoomed.
*/
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
	attrs.pathLength = 1;
	const keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = `${-offset}`;
	attrs[keys.array] = `${length} ${spacing}`;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
/**
* CSS Motion Path properties that should remain as CSS styles on SVG elements.
*/
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
/**
* Build SVG visual attributes, like cx and style.transform
*/
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, ...latest }, isSVGTag, transformTemplate, styleProp) {
	buildHTMLStyles(state, latest, transformTemplate);
	/**
	* For svg tags we just want to make sure viewBox is animatable and treat all the styles
	* as normal HTML tags.
	*/
	if (isSVGTag) {
		if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
		return;
	}
	state.attrs = state.style;
	state.style = {};
	const { attrs, style } = state;
	/**
	* However, we apply transforms as CSS transforms.
	* So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
	*/
	if (attrs.transform) {
		style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (style.transform || attrs.transformOrigin) {
		style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
		delete attrs.transformOrigin;
	}
	if (style.transform) {
		/**
		* SVG's element transform-origin uses its own median as a reference.
		* Therefore, transformBox becomes a fill-box
		*/
		style.transformBox = styleProp?.transformBox ?? "fill-box";
		delete attrs.transformBox;
	}
	for (const key of cssMotionPathProperties) if (attrs[key] !== void 0) {
		style[key] = attrs[key];
		delete attrs[key];
	}
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (attrScale !== void 0) attrs.scale = attrScale;
	if (pathLength !== void 0) buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
* A set of attribute names that are always read/written as camel case.
*/
var camelCaseAttributes = /* @__PURE__ */ new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
	renderHTML(element, renderState, void 0, projection);
	for (const key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
	const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	for (const key in props) if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
		const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "svg";
		this.isSVGTag = false;
		this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(props, key) {
		return props[key];
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) {
			const defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		}
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return instance.getAttribute(key);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps(props, prevProps, visualElement);
	}
	build(renderState, latestValues, props) {
		buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
	}
	renderInstance(instance, renderState, styleProp, projection) {
		renderSVG(instance, renderState, styleProp, projection);
	}
	mount(instance) {
		this.isSVGTag = isSVGTag(instance.tagName);
		super.mount(instance);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
	const props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
	return Array.isArray(v);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
/**
* Set VisualElement's MotionValue, creating a new MotionValue for it if
* it doesn't exist.
*/
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function resolveFinalValueInKeyframes(v) {
	return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
	let { transitionEnd = {}, transition = {}, ...target } = resolveVariant(visualElement, definition) || {};
	target = {
		...target,
		...transitionEnd
	};
	for (const key in target) setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
	return visualElement.props[optimizedAppearDataAttribute];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
/**
* Decide whether we should block this animation. Previously, we achieved this
* just by checking whether the key was listed in protectedKeys, but this
* posed problems if an animation was triggered by afterChildren and protectedKeys
* had been set to true in the meantime.
*/
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
	const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
	needsAnimating[key] = false;
	return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
	let { transition, transitionEnd, ...target } = targetAndTransition;
	const defaultTransition = visualElement.getDefaultTransition();
	transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
	const reduceMotion = transition?.reduceMotion;
	const skipAnimations = transition?.skipAnimations;
	if (transitionOverride) transition = transitionOverride;
	const animations = [];
	const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
	const path = transition?.path;
	if (path) path.animateVisualElement(visualElement, target, transition, delay, animations);
	for (const key in target) {
		const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
		const valueTarget = target[key];
		if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		const valueTransition = {
			delay,
			...getValueTransition(transition || {}, key)
		};
		if (skipAnimations) valueTransition.skipAnimations = true;
		/**
		* If the value is already at the defined target, skip the animation.
		* We still re-assert the value via frame.update to take precedence
		* over any stale transitionEnd callbacks from previous animations.
		*/
		const currentValue = value.get();
		if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
			frame.update(() => value.set(valueTarget));
			continue;
		}
		/**
		* If this is the first time a value is being animated, check
		* to see if we're handling off from an existing animation.
		*/
		let isHandoff = false;
		if (window.MotionHandoffAnimation) {
			const appearId = getOptimisedAppearId(visualElement);
			if (appearId) {
				const startTime = window.MotionHandoffAnimation(appearId, key, frame);
				if (startTime !== null) {
					valueTransition.startTime = startTime;
					isHandoff = true;
				}
			}
		}
		addValueToWillChange(visualElement, key);
		const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
		value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
		const animation = value.animation;
		if (animation) animations.push(animation);
	}
	if (transitionEnd) {
		const applyTransitionEnd = () => frame.update(() => {
			transitionEnd && setTarget(visualElement, transitionEnd);
		});
		if (animations.length) Promise.all(animations).then(applyTransitionEnd);
		else applyTransitionEnd();
	}
	return animations;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
	const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
	const numChildren = children.size;
	const maxStaggerDuration = (numChildren - 1) * staggerChildren;
	return typeof delayChildren === "function" ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
	const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? visualElement.presenceContext?.custom : void 0);
	let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
	if (options.transitionOverride) transition = options.transitionOverride;
	/**
	* If we have a variant, create a callback that runs it as an animation.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
	/**
	* If we have children, create a callback that runs all their animations.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
		const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
		return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
	} : () => Promise.resolve();
	/**
	* If the transition explicitly defines a "when" option, we need to resolve either
	* this animation or all children animations before playing the other.
	*/
	const { when } = transition;
	if (when) {
		const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
		return first().then(() => last());
	} else return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}
function animateChildren(visualElement, variant, delay = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
	const animations = [];
	for (const child of visualElement.variantChildren) {
		child.notify("AnimationStart", variant);
		animations.push(animateVariant(child, variant, {
			...options,
			delay: delay + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
		}).then(() => child.notify("AnimationComplete", variant)));
	}
	return Promise.all(animations);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
	visualElement.notify("AnimationStart", definition);
	let animation;
	if (Array.isArray(definition)) {
		const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
		animation = Promise.all(animations);
	} else if (typeof definition === "string") animation = animateVariant(visualElement, definition, options);
	else {
		const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
		animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
	}
	return animation.then(() => {
		visualElement.notify("AnimationComplete", definition);
	});
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/get-variant-context.mjs
var numVariantProps = variantProps.length;
/**
* Get variant context from a visual element's parent chain.
* Uses `any` type for visualElement to avoid circular dependencies.
*/
function getVariantContext(visualElement) {
	if (!visualElement) return void 0;
	if (!visualElement.isControllingVariants) {
		const context = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
		if (visualElement.props.initial !== void 0) context.initial = visualElement.props.initial;
		return context;
	}
	const context = {};
	for (let i = 0; i < numVariantProps; i++) {
		const name = variantProps[i];
		const prop = visualElement.props[name];
		if (isVariantLabel(prop) || prop === false) context[name] = prop;
	}
	return context;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
	if (!Array.isArray(prev)) return false;
	const prevLength = prev.length;
	if (prevLength !== next.length) return false;
	for (let i = 0; i < prevLength; i++) if (prev[i] !== next[i]) return false;
	return true;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function createAnimateFunction(visualElement) {
	return (animations) => {
		return Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
	};
}
function createAnimationState(visualElement) {
	let animate = createAnimateFunction(visualElement);
	let state = createState();
	let isInitialRender = true;
	/**
	* Track whether the animation state has been reset (e.g. via StrictMode
	* double-invocation or Suspense unmount/remount). On the first
	* animateChanges() call after a reset we need to behave like the initial
	* render for variant-inheritance checks, even though isInitialRender is
	* already false.
	*/
	let wasReset = false;
	/**
	* This function will be used to reduce the animation definitions for
	* each active animation type into an object of resolved values for it.
	*/
	const buildResolvedTypeValues = (type) => (acc, definition) => {
		const resolved = resolveVariant(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : void 0);
		if (resolved) {
			const { transition, transitionEnd, ...target } = resolved;
			acc = {
				...acc,
				...target,
				...transitionEnd
			};
		}
		return acc;
	};
	/**
	* This just allows us to inject mocked animation functions
	* @internal
	*/
	function setAnimateFunction(makeAnimator) {
		animate = makeAnimator(visualElement);
	}
	/**
	* When we receive new props, we need to:
	* 1. Create a list of protected keys for each type. This is a directory of
	*    value keys that are currently being "handled" by types of a higher priority
	*    so that whenever an animation is played of a given type, these values are
	*    protected from being animated.
	* 2. Determine if an animation type needs animating.
	* 3. Determine if any values have been removed from a type and figure out
	*    what to animate those to.
	*/
	function animateChanges(changedActiveType) {
		const { props } = visualElement;
		const context = getVariantContext(visualElement.parent) || {};
		/**
		* A list of animations that we'll build into as we iterate through the animation
		* types. This will get executed at the end of the function.
		*/
		const animations = [];
		/**
		* Keep track of which values have been removed. Then, as we hit lower priority
		* animation types, we can check if they contain removed values and animate to that.
		*/
		const removedKeys = /* @__PURE__ */ new Set();
		/**
		* A dictionary of all encountered keys. This is an object to let us build into and
		* copy it without iteration. Each time we hit an animation type we set its protected
		* keys - the keys its not allowed to animate - to the latest version of this object.
		*/
		let encounteredKeys = {};
		/**
		* If a variant has been removed at a given index, and this component is controlling
		* variant animations, we want to ensure lower-priority variants are forced to animate.
		*/
		let removedVariantIndex = Infinity;
		/**
		* Iterate through all animation types in reverse priority order. For each, we want to
		* detect which values it's handling and whether or not they've changed (and therefore
		* need to be animated). If any values have been removed, we want to detect those in
		* lower priority props and flag for animation.
		*/
		for (let i = 0; i < numAnimationTypes; i++) {
			const type = reversePriorityOrder[i];
			const typeState = state[type];
			const prop = props[type] !== void 0 ? props[type] : context[type];
			const propIsVariant = isVariantLabel(prop);
			/**
			* If this type has *just* changed isActive status, set activeDelta
			* to that status. Otherwise set to null.
			*/
			const activeDelta = type === changedActiveType ? typeState.isActive : null;
			if (activeDelta === false) removedVariantIndex = i;
			/**
			* If this prop is an inherited variant, rather than been set directly on the
			* component itself, we want to make sure we allow the parent to trigger animations.
			*
			* TODO: Can probably change this to a !isControllingVariants check
			*/
			let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
			if (isInherited && (isInitialRender || wasReset) && visualElement.manuallyAnimateOnMount) isInherited = false;
			/**
			* Set all encountered keys so far as the protected keys for this type. This will
			* be any key that has been animated or otherwise handled by active, higher-priortiy types.
			*/
			typeState.protectedKeys = { ...encounteredKeys };
			if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") continue;
			/**
			* If exit is already active and wasn't just activated, skip
			* re-processing to prevent interrupting running exit animations.
			* Re-resolving exit with a changed custom value can start new
			* value animations that stop the originals, leaving the exit
			* animation promise unresolved and the component stuck in the DOM.
			*/
			if (type === "exit" && typeState.isActive && activeDelta !== true) {
				if (typeState.prevResolvedValues) encounteredKeys = {
					...encounteredKeys,
					...typeState.prevResolvedValues
				};
				continue;
			}
			/**
			* As we go look through the values defined on this type, if we detect
			* a changed value or a value that was removed in a higher priority, we set
			* this to true and add this prop to the animation list.
			*/
			const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
			let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
			let handledRemovedValues = false;
			/**
			* As animations can be set as variant lists, variants or target objects, we
			* coerce everything to an array if it isn't one already
			*/
			const definitionList = Array.isArray(prop) ? prop : [prop];
			/**
			* Build an object of all the resolved values. We'll use this in the subsequent
			* animateChanges calls to determine whether a value has changed.
			*/
			let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
			if (activeDelta === false) resolvedValues = {};
			/**
			* Now we need to loop through all the keys in the prev prop and this prop,
			* and decide:
			* 1. If the value has changed, and needs animating
			* 2. If it has been removed, and needs adding to the removedKeys set
			* 3. If it has been removed in a higher priority type and needs animating
			* 4. If it hasn't been removed in a higher priority but hasn't changed, and
			*    needs adding to the type's protectedKeys list.
			*/
			const { prevResolvedValues = {} } = typeState;
			const allKeys = {
				...prevResolvedValues,
				...resolvedValues
			};
			const markToAnimate = (key) => {
				shouldAnimateType = true;
				if (removedKeys.has(key)) {
					handledRemovedValues = true;
					removedKeys.delete(key);
				}
				typeState.needsAnimating[key] = true;
				const motionValue = visualElement.getValue(key);
				if (motionValue) motionValue.liveStyle = false;
			};
			for (const key in allKeys) {
				const next = resolvedValues[key];
				const prev = prevResolvedValues[key];
				if (encounteredKeys.hasOwnProperty(key)) continue;
				/**
				* If the value has changed, we probably want to animate it.
				*/
				let valueHasChanged = false;
				if (isKeyframesTarget(next) && isKeyframesTarget(prev)) valueHasChanged = !shallowCompare(next, prev) || variantDidChange;
				else valueHasChanged = next !== prev;
				if (valueHasChanged) if (next !== void 0 && next !== null) markToAnimate(key);
				else removedKeys.add(key);
				else if (next !== void 0 && removedKeys.has(key))
 /**
				* If next hasn't changed and it isn't undefined, we want to check if it's
				* been removed by a higher priority
				*/
				markToAnimate(key);
				else
 /**
				* If it hasn't changed, we add it to the list of protected values
				* to ensure it doesn't get animated.
				*/
				typeState.protectedKeys[key] = true;
			}
			/**
			* Update the typeState so next time animateChanges is called we can compare the
			* latest prop and resolvedValues to these.
			*/
			typeState.prevProp = prop;
			typeState.prevResolvedValues = resolvedValues;
			if (typeState.isActive) encounteredKeys = {
				...encounteredKeys,
				...resolvedValues
			};
			if ((isInitialRender || wasReset) && visualElement.blockInitialAnimation) shouldAnimateType = false;
			/**
			* If this is an inherited prop we want to skip this animation
			* unless the inherited variants haven't changed on this render.
			*/
			const willAnimateViaParent = isInherited && variantDidChange;
			if (shouldAnimateType && (!willAnimateViaParent || handledRemovedValues)) animations.push(...definitionList.map((animation) => {
				const options = { type };
				/**
				* If we're performing the initial animation, but we're not
				* rendering at the same time as the variant-controlling parent,
				* we want to use the parent's transition to calculate the stagger.
				*/
				if (typeof animation === "string" && (isInitialRender || wasReset) && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
					const { parent } = visualElement;
					const parentVariant = resolveVariant(parent, animation);
					if (parent.enteringChildren && parentVariant) {
						const { delayChildren } = parentVariant.transition || {};
						options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
					}
				}
				return {
					animation,
					options
				};
			}));
		}
		/**
		* If there are some removed value that haven't been dealt with,
		* we need to create a new animation that falls back either to the value
		* defined in the style prop, or the last read value.
		*/
		if (removedKeys.size) {
			const fallbackAnimation = {};
			/**
			* If the initial prop contains a transition we can use that, otherwise
			* allow the animation function to use the visual element's default.
			*/
			if (typeof props.initial !== "boolean") {
				const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
				if (initialTransition && initialTransition.transition) fallbackAnimation.transition = initialTransition.transition;
			}
			removedKeys.forEach((key) => {
				const fallbackTarget = visualElement.getBaseTarget(key);
				const motionValue = visualElement.getValue(key);
				if (motionValue) motionValue.liveStyle = true;
				fallbackAnimation[key] = fallbackTarget ?? null;
			});
			animations.push({ animation: fallbackAnimation });
		}
		let shouldAnimate = Boolean(animations.length);
		if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
		isInitialRender = false;
		wasReset = false;
		return shouldAnimate ? animate(animations) : Promise.resolve();
	}
	/**
	* Change whether a certain animation type is active.
	*/
	function setActive(type, isActive) {
		if (state[type].isActive === isActive) return Promise.resolve();
		visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
		state[type].isActive = isActive;
		const animations = animateChanges(type);
		for (const key in state) state[key].protectedKeys = {};
		return animations;
	}
	return {
		animateChanges,
		setActive,
		setAnimateFunction,
		getState: () => state,
		reset: () => {
			state = createState();
			wasReset = true;
		}
	};
}
function checkVariantsDidChange(prev, next) {
	if (typeof next === "string") return next !== prev;
	else if (Array.isArray(next)) return !shallowCompare(next, prev);
	return false;
}
function createTypeState(isActive = false) {
	return {
		isActive,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	return {
		animate: createTypeState(true),
		whileInView: createTypeState(),
		whileHover: createTypeState(),
		whileTap: createTypeState(),
		whileDrag: createTypeState(),
		whileFocus: createTypeState(),
		exit: createTypeState()
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var SCALE_MIN = .9999;
var SCALE_MAX = 1.0001;
var TRANSLATE_MIN = -.01;
var TRANSLATE_MAX = .01;
function calcLength(axis) {
	return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
	return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = .5) {
	delta.origin = origin;
	delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
	delta.scale = calcLength(target) / calcLength(source);
	delta.translate = mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
	if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) delta.scale = 1;
	if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
	calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
	calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
	target.min = (anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min) + relative.min;
	target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
	calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
	calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout, parent, anchor = 0) {
	const anchorPoint = anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min;
	target.min = layout.min - anchorPoint;
	target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent, anchor) {
	calcRelativeAxisPosition(target.x, layout.x, parent.x, anchor?.x);
	calcRelativeAxisPosition(target.y, layout.y, parent.y, anchor?.y);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
	return [callback("x"), callback("y")];
}
//#endregion
//#region node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
	target.addEventListener(eventName, handler, options);
	return () => target.removeEventListener(eventName, handler, options);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
/**
* If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
*/
function resolveMotionValue(value) {
	return isMotionValue(value) ? value.get() : value;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/group.mjs
var notify = (node) => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
	const nodes = /* @__PURE__ */ new Set();
	const subscriptions = /* @__PURE__ */ new WeakMap();
	const dirtyAll = () => nodes.forEach(notify);
	return {
		add: (node) => {
			nodes.add(node);
			subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
		},
		remove: (node) => {
			nodes.delete(node);
			const unsubscribe = subscriptions.get(node);
			if (unsubscribe) {
				unsubscribe();
				subscriptions.delete(node);
			}
			dirtyAll();
		},
		dirty: dirtyAll
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes, options) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
	return motionValue$1.animation;
}
//#endregion
//#region node_modules/motion-dom/dist/es/stats/buffer.mjs
var statsBuffer = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/delay.mjs
/**
* Timeout defined in ms
*/
function delay(callback, timeout) {
	const start = time.now();
	const checkElapsed = ({ timestamp }) => {
		const elapsed = timestamp - start;
		if (elapsed >= timeout) {
			cancelFrame(checkElapsed);
			callback(elapsed - timeout);
		}
	};
	frame.setup(checkElapsed, true);
	return () => cancelFrame(checkElapsed);
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
/**
* Checks if an element is specifically an SVGSVGElement (the root SVG element)
* in a way that works across iframes
*/
function isSVGSVGElement(element) {
	return isSVGElement(element) && element.tagName === "svg";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var borderLabels = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
];
var numBorders = borderLabels.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
	if (shouldCrossfadeOpacity) {
		target.opacity = mixNumber$1(0, lead.opacity ?? 1, easeCrossfadeIn(progress));
		target.opacityExit = mixNumber$1(follow.opacity ?? 1, 0, easeCrossfadeOut(progress));
	} else if (isOnlyMember) target.opacity = mixNumber$1(follow.opacity ?? 1, lead.opacity ?? 1, progress);
	/**
	* Mix border radius
	*/
	for (let i = 0; i < numBorders; i++) {
		const borderLabel = borderLabels[i];
		let followRadius = getRadius(follow, borderLabel);
		let leadRadius = getRadius(lead, borderLabel);
		if (followRadius === void 0 && leadRadius === void 0) continue;
		followRadius || (followRadius = 0);
		leadRadius || (leadRadius = 0);
		if (followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius)) {
			target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress), 0);
			if (percent.test(leadRadius) || percent.test(followRadius)) target[borderLabel] += "%";
		} else target[borderLabel] = leadRadius;
	}
	/**
	* Mix rotation
	*/
	if (follow.rotate || lead.rotate) target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress);
}
function getRadius(values, radiusName) {
	return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /*@__PURE__*/ compress(0, .5, circOut);
var easeCrossfadeOut = /*@__PURE__*/ compress(.5, .95, noop);
function compress(min, max, easing) {
	return (p) => {
		if (p < min) return 0;
		if (p > max) return 1;
		return easing(/* @__PURE__ */ progress(min, max, p));
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
/**
* Reset an axis to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisInto(axis, originAxis) {
	axis.min = originAxis.min;
	axis.max = originAxis.max;
}
/**
* Reset a box to the provided origin box.
*
* This is a mutative operation.
*/
function copyBoxInto(box, originBox) {
	copyAxisInto(box.x, originBox.x);
	copyAxisInto(box.y, originBox.y);
}
/**
* Reset a delta to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisDeltaInto(delta, originDelta) {
	delta.translate = originDelta.translate;
	delta.scale = originDelta.scale;
	delta.originPoint = originDelta.originPoint;
	delta.origin = originDelta.origin;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
/**
* Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
*/
function removePointDelta(point, translate, scale, originPoint, boxScale) {
	point -= translate;
	point = scalePoint(point, 1 / scale, originPoint);
	if (boxScale !== void 0) point = scalePoint(point, 1 / boxScale, originPoint);
	return point;
}
/**
* Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
*/
function removeAxisDelta(axis, translate = 0, scale = 1, origin = .5, boxScale, originAxis = axis, sourceAxis = axis) {
	if (percent.test(translate)) {
		translate = parseFloat(translate);
		translate = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100) - sourceAxis.min;
	}
	if (typeof translate !== "number") return;
	let originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
	if (axis === originAxis) originPoint -= translate;
	axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
	removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
* The names of the motion values we want to apply as translation, scale and origin.
*/
var xKeys = [
	"x",
	"scaleX",
	"originX"
];
var yKeys = [
	"y",
	"scaleY",
	"originY"
];
/**
* Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
	removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
	removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
	return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
	return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
	return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
	return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
	return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
	return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
	return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
	return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(node) {
		addUniqueItem(this.members, node);
		for (let i = this.members.length - 1; i >= 0; i--) {
			const member = this.members[i];
			if (member === node || member === this.lead || member === this.prevLead) continue;
			const inst = member.instance;
			if ((!inst || inst.isConnected === false) && !member.snapshot) {
				removeItem(this.members, member);
				member.unmount();
			}
		}
		node.scheduleRender();
	}
	remove(node) {
		removeItem(this.members, node);
		if (node === this.prevLead) this.prevLead = void 0;
		if (node === this.lead) {
			const prevLead = this.members[this.members.length - 1];
			if (prevLead) this.promote(prevLead);
		}
	}
	relegate(node) {
		for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
			const member = this.members[i];
			if (member.isPresent !== false && member.instance?.isConnected !== false) {
				this.promote(member);
				return true;
			}
		}
		return false;
	}
	promote(node, preserveFollowOpacity) {
		const prevLead = this.lead;
		if (node === prevLead) return;
		this.prevLead = prevLead;
		this.lead = node;
		node.show();
		if (prevLead) {
			prevLead.updateSnapshot();
			node.scheduleRender();
			const { layoutDependency: prevDep } = prevLead.options;
			const { layoutDependency: nextDep } = node.options;
			if (prevDep === void 0 || prevDep !== nextDep) {
				node.resumeFrom = prevLead;
				if (preserveFollowOpacity) prevLead.preserveOpacity = true;
				if (prevLead.snapshot) {
					node.snapshot = prevLead.snapshot;
					node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
				}
				if (node.root?.isUpdating) node.isLayoutDirty = true;
			}
			if (node.options.crossfade === false) prevLead.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((member) => {
			member.options.onExitComplete?.();
			member.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((member) => member.instance && member.scheduleRender(false));
	}
	removeLeadSnapshot() {
		if (this.lead?.snapshot) this.lead.snapshot = void 0;
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
	let transform = "";
	/**
	* The translations we use to calculate are always relative to the viewport coordinate space.
	* But when we apply scales, we also scale the coordinate space of an element and its children.
	* For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
	* to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
	*/
	const xTranslate = delta.x.translate / treeScale.x;
	const yTranslate = delta.y.translate / treeScale.y;
	const zTranslate = latestTransform?.z || 0;
	if (xTranslate || yTranslate || zTranslate) transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
	/**
	* Apply scale correction for the tree transform.
	* This will apply scale to the screen-orientated axes.
	*/
	if (treeScale.x !== 1 || treeScale.y !== 1) transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
	if (latestTransform) {
		const { transformPerspective, rotate, pathRotation, rotateX, rotateY, skewX, skewY } = latestTransform;
		if (transformPerspective) transform = `perspective(${transformPerspective}px) ${transform}`;
		if (rotate) transform += `rotate(${rotate}deg) `;
		if (pathRotation) transform += `rotate(${pathRotation}deg) `;
		if (rotateX) transform += `rotateX(${rotateX}deg) `;
		if (rotateY) transform += `rotateY(${rotateY}deg) `;
		if (skewX) transform += `skewX(${skewX}deg) `;
		if (skewY) transform += `skewY(${skewY}deg) `;
	}
	/**
	* Apply scale to match the size of the element to the size we want it.
	* This will apply scale to the element-orientated axes.
	*/
	const elementScaleX = delta.x.scale * treeScale.x;
	const elementScaleY = delta.y.scale * treeScale.y;
	if (elementScaleX !== 1 || elementScaleY !== 1) transform += `scale(${elementScaleX}, ${elementScaleY})`;
	return transform || "none";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
var FlatTree = class {
	constructor() {
		this.children = [];
		this.isDirty = false;
	}
	add(child) {
		addUniqueItem(this.children, child);
		this.isDirty = true;
	}
	remove(child) {
		removeItem(this.children, child);
		this.isDirty = true;
	}
	forEach(callback) {
		this.isDirty && this.children.sort(compareByDepth);
		this.isDirty = false;
		this.children.forEach(callback);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/state.mjs
/**
* This should only ever be modified on the client otherwise it'll
* persist through server requests. If we need instanced states we
* could lazy-init via root.
*/
var globalProjectionState = {
	/**
	* Global flag as to whether the tree has animated since the last time
	* we resized the window
	*/
	hasAnimatedSinceResize: true,
	/**
	* We set this to true once, on the first update. Any nodes added to the tree beyond that
	* update will be given a `data-projection-id` attribute.
	*/
	hasEverUpdated: false
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
var metrics = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
};
var transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
/**
* We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
* which has a noticeable difference in spring animations
*/
var animationTarget = 1e3;
var id$1 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
	const { latestValues } = visualElement;
	if (latestValues[key]) {
		values[key] = latestValues[key];
		visualElement.setStaticValue(key, 0);
		if (sharedAnimationValues) sharedAnimationValues[key] = 0;
	}
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
	projectionNode.hasCheckedOptimisedAppear = true;
	if (projectionNode.root === projectionNode) return;
	const { visualElement } = projectionNode.options;
	if (!visualElement) return;
	const appearId = getOptimisedAppearId(visualElement);
	if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
		const { layout, layoutId } = projectionNode.options;
		window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout || layoutId));
	}
	const { parent } = projectionNode;
	if (parent && !parent.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(parent);
}
function createProjectionNode$1({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
	return class ProjectionNode {
		constructor(latestValues = {}, parent = defaultParent?.()) {
			/**
			* A unique ID generated for every projection node.
			*/
			this.id = id$1++;
			/**
			* An id that represents a unique session instigated by startUpdate.
			*/
			this.animationId = 0;
			this.animationCommitId = 0;
			/**
			* A Set containing all this component's children. This is used to iterate
			* through the children.
			*
			* TODO: This could be faster to iterate as a flat array stored on the root node.
			*/
			this.children = /* @__PURE__ */ new Set();
			/**
			* Options for the node. We use this to configure what kind of layout animations
			* we should perform (if any).
			*/
			this.options = {};
			/**
			* We use this to detect when its safe to shut down part of a projection tree.
			* We have to keep projecting children for scale correction and relative projection
			* until all their parents stop performing layout animations.
			*/
			this.isTreeAnimating = false;
			this.isAnimationBlocked = false;
			/**
			* Flag to true if we think this layout has been changed. We can't always know this,
			* currently we set it to true every time a component renders, or if it has a layoutDependency
			* if that has changed between renders. Additionally, components can be grouped by LayoutGroup
			* and if one node is dirtied, they all are.
			*/
			this.isLayoutDirty = false;
			/**
			* Flag to true if we think the projection calculations for this node needs
			* recalculating as a result of an updated transform or layout animation.
			*/
			this.isProjectionDirty = false;
			/**
			* Flag to true if the layout *or* transform has changed. This then gets propagated
			* throughout the projection tree, forcing any element below to recalculate on the next frame.
			*/
			this.isSharedProjectionDirty = false;
			/**
			* Flag transform dirty. This gets propagated throughout the whole tree but is only
			* respected by shared nodes.
			*/
			this.isTransformDirty = false;
			/**
			* Block layout updates for instant layout transitions throughout the tree.
			*/
			this.updateManuallyBlocked = false;
			this.updateBlockedByResize = false;
			/**
			* Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
			* call.
			*/
			this.isUpdating = false;
			/**
			* If this is an SVG element we currently disable projection transforms
			*/
			this.isSVG = false;
			/**
			* Flag to true (during promotion) if a node doing an instant layout transition needs to reset
			* its projection styles.
			*/
			this.needsReset = false;
			/**
			* Flags whether this node should have its transform reset prior to measuring.
			*/
			this.shouldResetTransform = false;
			/**
			* Store whether this node has been checked for optimised appear animations. As
			* effects fire bottom-up, and we want to look up the tree for appear animations,
			* this makes sure we only check each path once, stopping at nodes that
			* have already been checked.
			*/
			this.hasCheckedOptimisedAppear = false;
			/**
			* An object representing the calculated contextual/accumulated/tree scale.
			* This will be used to scale calculcated projection transforms, as these are
			* calculated in screen-space but need to be scaled for elements to layoutly
			* make it to their calculated destinations.
			*
			* TODO: Lazy-init
			*/
			this.treeScale = {
				x: 1,
				y: 1
			};
			/**
			*
			*/
			this.eventHandlers = /* @__PURE__ */ new Map();
			this.hasTreeAnimated = false;
			this.layoutVersion = 0;
			this.updateScheduled = false;
			this.scheduleUpdate = () => this.update();
			this.projectionUpdateScheduled = false;
			this.checkUpdateFailed = () => {
				if (this.isUpdating) {
					this.isUpdating = false;
					this.clearAllSnapshots();
				}
			};
			/**
			* This is a multi-step process as shared nodes might be of different depths. Nodes
			* are sorted by depth order, so we need to resolve the entire tree before moving to
			* the next step.
			*/
			this.updateProjection = () => {
				this.projectionUpdateScheduled = false;
				/**
				* Reset debug counts. Manually resetting rather than creating a new
				* object each frame.
				*/
				if (statsBuffer.value) metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
				this.nodes.forEach(propagateDirtyNodes);
				this.nodes.forEach(resolveTargetDelta);
				this.nodes.forEach(calcProjection);
				this.nodes.forEach(cleanDirtyNodes);
				if (statsBuffer.addProjectionMetrics) statsBuffer.addProjectionMetrics(metrics);
			};
			/**
			* Frame calculations
			*/
			this.resolvedRelativeTargetAt = 0;
			this.linkedParentVersion = 0;
			this.hasProjected = false;
			this.isVisible = true;
			this.animationProgress = 0;
			/**
			* Shared layout
			*/
			this.sharedNodes = /* @__PURE__ */ new Map();
			this.latestValues = latestValues;
			this.root = parent ? parent.root || parent : this;
			this.path = parent ? [...parent.path, parent] : [];
			this.parent = parent;
			this.depth = parent ? parent.depth + 1 : 0;
			for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = true;
			if (this.root === this) this.nodes = new FlatTree();
		}
		addEventListener(name, handler) {
			if (!this.eventHandlers.has(name)) this.eventHandlers.set(name, new SubscriptionManager());
			return this.eventHandlers.get(name).add(handler);
		}
		notifyListeners(name, ...args) {
			const subscriptionManager = this.eventHandlers.get(name);
			subscriptionManager && subscriptionManager.notify(...args);
		}
		hasListeners(name) {
			return this.eventHandlers.has(name);
		}
		/**
		* Lifecycles
		*/
		mount(instance) {
			if (this.instance) return;
			this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
			this.instance = instance;
			const { layoutId, layout, visualElement } = this.options;
			if (visualElement && !visualElement.current) visualElement.mount(instance);
			this.root.nodes.add(this);
			this.parent && this.parent.children.add(this);
			if (this.root.hasTreeAnimated && (layout || layoutId)) this.isLayoutDirty = true;
			if (attachResizeListener) {
				let cancelDelay;
				let innerWidth = 0;
				const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
				frame.read(() => {
					innerWidth = window.innerWidth;
				});
				attachResizeListener(instance, () => {
					const newInnerWidth = window.innerWidth;
					if (newInnerWidth === innerWidth) return;
					innerWidth = newInnerWidth;
					this.root.updateBlockedByResize = true;
					cancelDelay && cancelDelay();
					cancelDelay = delay(resizeUnblockUpdate, 250);
					if (globalProjectionState.hasAnimatedSinceResize) {
						globalProjectionState.hasAnimatedSinceResize = false;
						this.nodes.forEach(finishAnimation);
					}
				});
			}
			if (layoutId) this.root.registerSharedNode(layoutId, this);
			if (this.options.animate !== false && visualElement && (layoutId || layout)) this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0;
					this.relativeTarget = void 0;
					return;
				}
				const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
				const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
				/**
				* The target layout of the element might stay the same,
				* but its position relative to its parent has changed.
				*/
				const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
				/**
				* If the layout hasn't seemed to have changed, it might be that the
				* element is visually in the same place in the document but its position
				* relative to its parent has indeed changed. So here we check for that.
				*/
				const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
				if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
					if (this.resumeFrom) {
						this.resumingFrom = this.resumeFrom;
						this.resumingFrom.resumingFrom = void 0;
					}
					const animationOptions = {
						...getValueTransition(layoutTransition, "layout"),
						onPlay: onLayoutAnimationStart,
						onComplete: onLayoutAnimationComplete
					};
					if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
						animationOptions.delay = 0;
						animationOptions.type = false;
					}
					this.startAnimation(animationOptions);
					/**
					* Set animation origin after starting animation to avoid layout jump
					* caused by stopping previous layout animation
					*/
					this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
				} else {
					/**
					* If the layout hasn't changed and we have an animation that hasn't started yet,
					* finish it immediately. Otherwise it will be animating from a location
					* that was probably never committed to screen and look like a jumpy box.
					*/
					if (!hasLayoutChanged) finishAnimation(this);
					if (this.isLead() && this.options.onExitComplete) this.options.onExitComplete();
				}
				this.targetLayout = newLayout;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate();
			this.root.nodes.remove(this);
			const stack = this.getStack();
			stack && stack.remove(this);
			this.parent && this.parent.children.delete(this);
			this.instance = void 0;
			this.eventHandlers.clear();
			cancelFrame(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = true;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = false;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
		}
		startUpdate() {
			if (this.isUpdateBlocked()) return;
			this.isUpdating = true;
			this.nodes && this.nodes.forEach(resetSkewAndRotation);
			this.animationId++;
		}
		getTransformTemplate() {
			const { visualElement } = this.options;
			return visualElement && visualElement.getProps().transformTemplate;
		}
		willUpdate(shouldNotifyListeners = true) {
			this.root.hasTreeAnimated = true;
			if (this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			/**
			* If we're running optimised appear animations then these must be
			* cancelled before measuring the DOM. This is so we can measure
			* the true layout of the element rather than the WAAPI animation
			* which will be unaffected by the resetSkewAndRotate step.
			*
			* Note: This is a DOM write. Worst case scenario is this is sandwiched
			* between other snapshot reads which will cause unnecessary style recalculations.
			* This has to happen here though, as we don't yet know which nodes will need
			* snapshots in startUpdate(), but we only want to cancel optimised animations
			* if a layout animation measurement is actually going to be affected by them.
			*/
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(this);
			!this.root.isUpdating && this.root.startUpdate();
			if (this.isLayoutDirty) return;
			this.isLayoutDirty = true;
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				node.shouldResetTransform = true;
				/**
				* Percentage translates resolve against layoutBox dimensions,
				* so ancestors with them must be re-measured after transform reset.
				*/
				if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") node.isLayoutDirty = true;
				node.updateScroll("snapshot");
				if (node.options.layoutRoot) node.willUpdate(false);
			}
			const { layoutId, layout } = this.options;
			if (layoutId === void 0 && !layout) return;
			const transformTemplate = this.getTransformTemplate();
			this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			this.updateSnapshot();
			shouldNotifyListeners && this.notifyListeners("willUpdate");
		}
		update() {
			this.updateScheduled = false;
			if (this.isUpdateBlocked()) {
				const wasBlockedByResize = this.updateBlockedByResize;
				this.unblockUpdate();
				this.updateBlockedByResize = false;
				this.clearAllSnapshots();
				/**
				* When blocked by resize, still measure layouts so
				* callbacks like onLayoutMeasure fire (e.g. Reorder).
				* Skip notifyLayoutUpdate to prevent animations.
				*/
				if (wasBlockedByResize) this.nodes.forEach(forceLayoutMeasure);
				this.nodes.forEach(clearMeasurements);
				return;
			}
			/**
			* If this is a repeat of didUpdate then ignore the animation.
			*/
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(clearIsLayoutDirty);
				return;
			}
			this.animationCommitId = this.animationId;
			if (!this.isUpdating) this.nodes.forEach(clearIsLayoutDirty);
			else {
				this.isUpdating = false;
				/**
				* Ensure animation-blocked nodes (e.g. during drag)
				* get measured even when memoized (willUpdate skipped).
				*/
				this.nodes.forEach(ensureDraggedNodesSnapshotted);
				/**
				* Write
				*/
				this.nodes.forEach(resetTransformStyle);
				/**
				* Read ==================
				*/
				this.nodes.forEach(updateLayout);
				/**
				* Write
				*/
				this.nodes.forEach(notifyLayoutUpdate);
			}
			this.clearAllSnapshots();
			/**
			* Manually flush any pending updates. Ideally
			* we could leave this to the following requestAnimationFrame but this seems
			* to leave a flash of incorrectly styled content.
			*/
			const now = time.now();
			frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp);
			frameData.timestamp = now;
			frameData.isProcessing = true;
			frameSteps.update.process(frameData);
			frameSteps.preRender.process(frameData);
			frameSteps.render.process(frameData);
			frameData.isProcessing = false;
		}
		didUpdate() {
			if (!this.updateScheduled) {
				this.updateScheduled = true;
				microtask.read(this.scheduleUpdate);
			}
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot);
			this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			if (!this.projectionUpdateScheduled) {
				this.projectionUpdateScheduled = true;
				frame.preRender(this.updateProjection, false, true);
			}
		}
		scheduleCheckAfterUnmount() {
			/**
			* If the unmounting node is in a layoutGroup and did trigger a willUpdate,
			* we manually call didUpdate to give a chance to the siblings to animate.
			* Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
			*/
			frame.postRender(() => {
				if (this.isLayoutDirty) this.root.didUpdate();
				else this.root.checkUpdateFailed();
			});
		}
		/**
		* Update measurements
		*/
		updateSnapshot() {
			if (this.snapshot || !this.instance) return;
			this.snapshot = this.measure();
			if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) this.snapshot = void 0;
		}
		updateLayout() {
			if (!this.instance) return;
			this.updateScroll();
			if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) return;
			/**
			* When a node is mounted, it simply resumes from the prevLead's
			* snapshot instead of taking a new one, but the ancestors scroll
			* might have updated while the prevLead is unmounted. We need to
			* update the scroll again to make sure the layout we measure is
			* up to date.
			*/
			if (this.resumeFrom && !this.resumeFrom.instance) for (let i = 0; i < this.path.length; i++) this.path[i].updateScroll();
			const prevLayout = this.layout;
			this.layout = this.measure(false);
			this.layoutVersion++;
			if (!this.layoutCorrected) this.layoutCorrected = createBox();
			this.isLayoutDirty = false;
			this.projectionDelta = void 0;
			this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement } = this.options;
			visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
		}
		updateScroll(phase = "measure") {
			let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) needsMeasurement = false;
			if (needsMeasurement && this.instance) {
				const isRoot = checkIsScrollRoot(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase,
					isRoot,
					offset: measureScroll(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : isRoot
				};
			}
		}
		resetTransform() {
			if (!resetTransform) return;
			const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
			const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
			const transformTemplate = this.getTransformTemplate();
			const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
			if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
				resetTransform(this.instance, transformTemplateValue);
				this.shouldResetTransform = false;
				this.scheduleRender();
			}
		}
		measure(removeTransform = true) {
			const pageBox = this.measurePageBox();
			let layoutBox = this.removeElementScroll(pageBox);
			/**
			* Measurements taken during the pre-render stage
			* still have transforms applied so we remove them
			* via calculation.
			*/
			if (removeTransform) layoutBox = this.removeTransform(layoutBox);
			roundBox(layoutBox);
			return {
				animationId: this.root.animationId,
				measuredBox: pageBox,
				layoutBox,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			const { visualElement } = this.options;
			if (!visualElement) return createBox();
			const box = visualElement.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				const { scroll } = this.root;
				if (scroll) {
					translateAxis(box.x, scroll.offset.x);
					translateAxis(box.y, scroll.offset.y);
				}
			}
			return box;
		}
		removeElementScroll(box) {
			const boxWithoutScroll = createBox();
			copyBoxInto(boxWithoutScroll, box);
			if (this.scroll?.wasRoot) return boxWithoutScroll;
			/**
			* Performance TODO: Keep a cumulative scroll offset down the tree
			* rather than loop back up the path.
			*/
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				const { scroll, options } = node;
				if (node !== this.root && scroll && options.layoutScroll) {
					/**
					* If this is a new scroll root, we want to remove all previous scrolls
					* from the viewport box.
					*/
					if (scroll.wasRoot) copyBoxInto(boxWithoutScroll, box);
					translateAxis(boxWithoutScroll.x, scroll.offset.x);
					translateAxis(boxWithoutScroll.y, scroll.offset.y);
				}
			}
			return boxWithoutScroll;
		}
		applyTransform(box, transformOnly = false, output) {
			const withTransforms = output || createBox();
			copyBoxInto(withTransforms, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
					translateAxis(withTransforms.x, -node.scroll.offset.x);
					translateAxis(withTransforms.y, -node.scroll.offset.y);
				}
				if (!hasTransform(node.latestValues)) continue;
				transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
			}
			if (hasTransform(this.latestValues)) transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
			return withTransforms;
		}
		removeTransform(box) {
			const boxWithoutTransform = createBox();
			copyBoxInto(boxWithoutTransform, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!hasTransform(node.latestValues)) continue;
				let sourceBox;
				if (node.instance) {
					hasScale(node.latestValues) && node.updateSnapshot();
					sourceBox = createBox();
					copyBoxInto(sourceBox, node.measurePageBox());
				}
				removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
			}
			if (hasTransform(this.latestValues)) removeBoxTransforms(boxWithoutTransform, this.latestValues);
			return boxWithoutTransform;
		}
		setTargetDelta(delta) {
			this.targetDelta = delta;
			this.root.scheduleUpdateProjection();
			this.isProjectionDirty = true;
		}
		setOptions(options) {
			this.options = {
				...this.options,
				...options,
				crossfade: options.crossfade !== void 0 ? options.crossfade : true
			};
		}
		clearMeasurements() {
			this.scroll = void 0;
			this.layout = void 0;
			this.snapshot = void 0;
			this.prevTransformTemplateValue = void 0;
			this.targetDelta = void 0;
			this.target = void 0;
			this.isLayoutDirty = false;
		}
		forceRelativeParentToResolveTarget() {
			if (!this.relativeParent) return;
			/**
			* If the parent target isn't up-to-date, force it to update.
			* This is an unfortunate de-optimisation as it means any updating relative
			* projection will cause all the relative parents to recalculate back
			* up the tree.
			*/
			if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) this.relativeParent.resolveTargetDelta(true);
		}
		resolveTargetDelta(forceRecalculation = false) {
			/**
			* Once the dirty status of nodes has been spread through the tree, we also
			* need to check if we have a shared node of a different depth that has itself
			* been dirtied.
			*/
			const lead = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
			this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
			this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			if (!(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			const { layout, layoutId } = this.options;
			/**
			* If we have no layout, we can't perform projection, so early return
			*/
			if (!this.layout || !(layout || layoutId)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			const relativeParent = this.getClosestProjectingParent();
			if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) this.removeRelativeTarget();
			/**
			* If we don't have a targetDelta but do have a layout, we can attempt to resolve
			* a relativeParent. This will allow a component to perform scale correction
			* even if no animation has started.
			*/
			if (!this.targetDelta && !this.relativeTarget) if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
			else this.removeRelativeTarget();
			/**
			* If we have no relative target or no target delta our target isn't valid
			* for this frame.
			*/
			if (!this.relativeTarget && !this.targetDelta) return;
			/**
			* Lazy-init target data structure
			*/
			if (!this.target) {
				this.target = createBox();
				this.targetWithTransforms = createBox();
			}
			/**
			* If we've got a relative box for this component, resolve it into a target relative to the parent.
			*/
			if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
				this.forceRelativeParentToResolveTarget();
				calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
			} else if (this.targetDelta) {
				if (Boolean(this.resumingFrom)) this.applyTransform(this.layout.layoutBox, false, this.target);
				else copyBoxInto(this.target, this.layout.layoutBox);
				applyBoxDelta(this.target, this.targetDelta);
			} else
 /**
			* If no target, use own layout as target
			*/
			copyBoxInto(this.target, this.layout.layoutBox);
			/**
			* If we've been told to attempt to resolve a relative target, do so.
			*/
			if (this.attemptToResolveRelativeTarget) {
				this.attemptToResolveRelativeTarget = false;
				if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
				else this.relativeParent = this.relativeTarget = void 0;
			}
			/**
			* Increase debug counter for resolved target deltas
			*/
			if (statsBuffer.value) metrics.calculatedTargetDeltas++;
		}
		getClosestProjectingParent() {
			if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) return;
			if (this.parent.isProjecting()) return this.parent;
			else return this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(relativeParent, layout, parentLayout) {
			this.relativeParent = relativeParent;
			this.linkedParentVersion = relativeParent.layoutVersion;
			this.forceRelativeParentToResolveTarget();
			this.relativeTarget = createBox();
			this.relativeTargetOrigin = createBox();
			calcRelativePosition(this.relativeTargetOrigin, layout, parentLayout, this.options.layoutAnchor || void 0);
			copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			const lead = this.getLead();
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			let canSkip = true;
			/**
			* If this is a normal layout animation and neither this node nor its nearest projecting
			* is dirty then we can't skip.
			*/
			if (this.isProjectionDirty || this.parent?.isProjectionDirty) canSkip = false;
			/**
			* If this is a shared layout animation and this node's shared projection is dirty then
			* we can't skip.
			*/
			if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) canSkip = false;
			/**
			* If we have resolved the target this frame we must recalculate the
			* projection to ensure it visually represents the internal calculations.
			*/
			if (this.resolvedRelativeTargetAt === frameData.timestamp) canSkip = false;
			if (canSkip) return;
			const { layout, layoutId } = this.options;
			/**
			* If this section of the tree isn't animating we can
			* delete our target sources for the following frame.
			*/
			this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
			if (!this.isTreeAnimating) this.targetDelta = this.relativeTarget = void 0;
			if (!this.layout || !(layout || layoutId)) return;
			/**
			* Reset the corrected box with the latest values from box, as we're then going
			* to perform mutative operations on it.
			*/
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			/**
			* Record previous tree scales before updating.
			*/
			const prevTreeScaleX = this.treeScale.x;
			const prevTreeScaleY = this.treeScale.y;
			/**
			* Apply all the parent deltas to this box to produce the corrected box. This
			* is the layout box, as it will appear on screen as a result of the transforms of its parents.
			*/
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
			/**
			* If this layer needs to perform scale correction but doesn't have a target,
			* use the layout as the target.
			*/
			if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
				lead.target = lead.layout.layoutBox;
				lead.targetWithTransforms = createBox();
			}
			const { target } = lead;
			if (!target) {
				/**
				* If we don't have a target to project into, but we were previously
				* projecting, we want to remove the stored transform and schedule
				* a render to ensure the elements reflect the removed transform.
				*/
				if (this.prevProjectionDelta) {
					this.createProjectionDeltas();
					this.scheduleRender();
				}
				return;
			}
			if (!this.projectionDelta || !this.prevProjectionDelta) this.createProjectionDeltas();
			else {
				copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
				copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
			}
			/**
			* Update the delta between the corrected box and the target box before user-set transforms were applied.
			* This will allow us to calculate the corrected borderRadius and boxShadow to compensate
			* for our layout reprojection, but still allow them to be scaled correctly by the user.
			* It might be that to simplify this we may want to accept that user-set scale is also corrected
			* and we wouldn't have to keep and calc both deltas, OR we could support a user setting
			* to allow people to choose whether these styles are corrected based on just the
			* layout reprojection or the final bounding box.
			*/
			calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
			if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
				this.hasProjected = true;
				this.scheduleRender();
				this.notifyListeners("projectionUpdate", target);
			}
			/**
			* Increase debug counter for recalculated projections
			*/
			if (statsBuffer.value) metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = false;
		}
		show() {
			this.isVisible = true;
		}
		scheduleRender(notifyAll = true) {
			this.options.visualElement?.scheduleRender();
			if (notifyAll) {
				const stack = this.getStack();
				stack && stack.scheduleRender();
			}
			if (this.resumingFrom && !this.resumingFrom.instance) this.resumingFrom = void 0;
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta();
			this.projectionDelta = createDelta();
			this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
			const snapshot = this.snapshot;
			const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
			const mixedValues = { ...this.latestValues };
			const targetDelta = createDelta();
			if (!this.relativeParent || !this.relativeParent.options.layoutRoot) this.relativeTarget = this.relativeTargetOrigin = void 0;
			this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
			const relativeLayout = createBox();
			const isSharedLayoutAnimation = (snapshot ? snapshot.source : void 0) !== (this.layout ? this.layout.source : void 0);
			const stack = this.getStack();
			const isOnlyMember = !stack || stack.members.length <= 1;
			const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let prevRelativeTarget;
			const interpolate = pathFn?.interpolateProjection(delta);
			this.mixTargetDelta = (latest) => {
				const progress = latest / 1e3;
				const point = interpolate?.(progress);
				if (point) {
					targetDelta.x.translate = point.x;
					targetDelta.x.scale = mixNumber$1(delta.x.scale, 1, progress);
					targetDelta.x.origin = delta.x.origin;
					targetDelta.x.originPoint = delta.x.originPoint;
					targetDelta.y.translate = point.y;
					targetDelta.y.scale = mixNumber$1(delta.y.scale, 1, progress);
					targetDelta.y.origin = delta.y.origin;
					targetDelta.y.originPoint = delta.y.originPoint;
				} else {
					mixAxisDeltaLinear(targetDelta.x, delta.x, progress);
					mixAxisDeltaLinear(targetDelta.y, delta.y, progress);
				}
				this.setTargetDelta(targetDelta);
				if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
					calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
					mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
					/**
					* If this is an unchanged relative target we can consider the
					* projection not dirty.
					*/
					if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) this.isProjectionDirty = false;
					if (!prevRelativeTarget) prevRelativeTarget = createBox();
					copyBoxInto(prevRelativeTarget, this.relativeTarget);
				}
				if (isSharedLayoutAnimation) {
					this.animationValues = mixedValues;
					mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
				}
				if (point && point.rotate !== void 0) {
					if (!this.animationValues) this.animationValues = mixedValues;
					this.animationValues.pathRotation = point.rotate;
				}
				this.root.scheduleUpdateProjection();
				this.scheduleRender();
				this.animationProgress = progress;
			};
			this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(options) {
			this.notifyListeners("animationStart");
			this.currentAnimation?.stop();
			this.resumingFrom?.currentAnimation?.stop();
			if (this.pendingAnimation) {
				cancelFrame(this.pendingAnimation);
				this.pendingAnimation = void 0;
			}
			/**
			* Start the animation in the next frame to have a frame with progress 0,
			* where the target is the same as when the animation started, so we can
			* calculate the relative positions correctly for instant transitions.
			*/
			this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = true;
				this.motionValue || (this.motionValue = motionValue(0));
				this.motionValue.jump(0, false);
				this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...options,
					velocity: 0,
					isSync: true,
					onUpdate: (latest) => {
						this.mixTargetDelta(latest);
						options.onUpdate && options.onUpdate(latest);
					},
					onComplete: () => {
						options.onComplete && options.onComplete();
						this.completeAnimation();
					}
				});
				if (this.resumingFrom) this.resumingFrom.currentAnimation = this.currentAnimation;
				this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			if (this.resumingFrom) {
				this.resumingFrom.currentAnimation = void 0;
				this.resumingFrom.preserveOpacity = void 0;
			}
			const stack = this.getStack();
			stack && stack.exitAnimationComplete();
			this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
			this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			if (this.currentAnimation) {
				this.mixTargetDelta && this.mixTargetDelta(animationTarget);
				this.currentAnimation.stop();
			}
			this.completeAnimation();
		}
		applyTransformsToTarget() {
			const lead = this.getLead();
			let { targetWithTransforms, target, layout, latestValues } = lead;
			if (!targetWithTransforms || !target || !layout) return;
			/**
			* If we're only animating position, and this element isn't the lead element,
			* then instead of projecting into the lead box we instead want to calculate
			* a new target that aligns the two boxes but maintains the layout shape.
			*/
			if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
				target = this.target || createBox();
				const xLength = calcLength(this.layout.layoutBox.x);
				target.x.min = lead.target.x.min;
				target.x.max = target.x.min + xLength;
				const yLength = calcLength(this.layout.layoutBox.y);
				target.y.min = lead.target.y.min;
				target.y.max = target.y.min + yLength;
			}
			copyBoxInto(targetWithTransforms, target);
			/**
			* Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
			* This is the final box that we will then project into by calculating a transform delta and
			* applying it to the corrected box.
			*/
			transformBox(targetWithTransforms, latestValues);
			/**
			* Update the delta between the corrected box and the final target box, after
			* user-set transforms are applied to it. This will be used by the renderer to
			* create a transform style that will reproject the element from its layout layout
			* into the desired bounding box.
			*/
			calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
		}
		registerSharedNode(layoutId, node) {
			if (!this.sharedNodes.has(layoutId)) this.sharedNodes.set(layoutId, new NodeStack());
			this.sharedNodes.get(layoutId).add(node);
			const config = node.options.initialPromotionConfig;
			node.promote({
				transition: config ? config.transition : void 0,
				preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
			});
		}
		isLead() {
			const stack = this.getStack();
			return stack ? stack.lead === this : true;
		}
		getLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.lead || this : this;
		}
		getPrevLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			const { layoutId } = this.options;
			if (layoutId) return this.root.sharedNodes.get(layoutId);
		}
		promote({ needsReset, transition, preserveFollowOpacity } = {}) {
			const stack = this.getStack();
			if (stack) stack.promote(this, preserveFollowOpacity);
			if (needsReset) {
				this.projectionDelta = void 0;
				this.needsReset = true;
			}
			if (transition) this.setOptions({ transition });
		}
		relegate() {
			const stack = this.getStack();
			if (stack) return stack.relegate(this);
			else return false;
		}
		resetSkewAndRotation() {
			const { visualElement } = this.options;
			if (!visualElement) return;
			let hasDistortingTransform = false;
			/**
			* An unrolled check for rotation values. Most elements don't have any rotation and
			* skipping the nested loop and new object creation is 50% faster.
			*/
			const { latestValues } = visualElement;
			if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) hasDistortingTransform = true;
			if (!hasDistortingTransform) return;
			const resetValues = {};
			if (latestValues.z) resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
			for (let i = 0; i < transformAxes.length; i++) {
				resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
				resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
			}
			visualElement.render();
			for (const key in resetValues) {
				visualElement.setStaticValue(key, resetValues[key]);
				if (this.animationValues) this.animationValues[key] = resetValues[key];
			}
			visualElement.scheduleRender();
		}
		applyProjectionStyles(targetStyle, styleProp) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				targetStyle.visibility = "hidden";
				return;
			}
			const transformTemplate = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = false;
				targetStyle.visibility = "";
				targetStyle.opacity = "";
				targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
				return;
			}
			const lead = this.getLead();
			if (!this.projectionDelta || !this.layout || !lead.target) {
				if (this.options.layoutId) {
					targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
					targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				}
				if (this.hasProjected && !hasTransform(this.latestValues)) {
					targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
					this.hasProjected = false;
				}
				return;
			}
			targetStyle.visibility = "";
			const valuesToRender = lead.animationValues || lead.latestValues;
			this.applyTransformsToTarget();
			let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
			if (transformTemplate) transform = transformTemplate(valuesToRender, transform);
			targetStyle.transform = transform;
			const { x, y } = this.projectionDelta;
			targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
			if (lead.animationValues)
 /**
			* If the lead component is animating, assign this either the entering/leaving
			* opacity
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
			else
 /**
			* Or we're not animating at all, set the lead component to its layout
			* opacity and other components to hidden.
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
			/**
			* Apply scale correction
			*/
			for (const key in scaleCorrectors) {
				if (valuesToRender[key] === void 0) continue;
				const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
				/**
				* Only apply scale correction to the value if we have an
				* active projection transform. Otherwise these values become
				* vulnerable to distortion if the element changes size without
				* a corresponding layout animation.
				*/
				const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
				if (applyTo) {
					const num = applyTo.length;
					for (let i = 0; i < num; i++) targetStyle[applyTo[i]] = corrected;
				} else if (isCSSVariable) this.options.visualElement.renderState.vars[key] = corrected;
				else targetStyle[key] = corrected;
			}
			/**
			* Disable pointer events on follow components. This is to ensure
			* that if a follow component covers a lead component it doesn't block
			* pointer events on the lead.
			*/
			if (this.options.layoutId) targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((node) => node.currentAnimation?.stop());
			this.root.nodes.forEach(clearMeasurements);
			this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(node) {
	node.updateLayout();
}
function notifyLayoutUpdate(node) {
	const snapshot = node.resumeFrom?.snapshot || node.snapshot;
	if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
		const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
		const { animationType } = node.options;
		const isShared = snapshot.source !== node.layout.source;
		if (animationType === "size") eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(axisSnapshot);
			axisSnapshot.min = layout[axis].min;
			axisSnapshot.max = axisSnapshot.min + length;
		});
		else if (animationType === "x" || animationType === "y") {
			const snapAxis = animationType === "x" ? "y" : "x";
			copyAxisInto(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout[snapAxis]);
		} else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(layout[axis]);
			axisSnapshot.max = axisSnapshot.min + length;
			/**
			* Ensure relative target gets resized and rerendererd
			*/
			if (node.relativeTarget && !node.currentAnimation) {
				node.isProjectionDirty = true;
				node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
			}
		});
		const layoutDelta = createDelta();
		calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
		const visualDelta = createDelta();
		if (isShared) calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
		else calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
		const hasLayoutChanged = !isDeltaZero(layoutDelta);
		let hasRelativeLayoutChanged = false;
		if (!node.resumeFrom) {
			const relativeParent = node.getClosestProjectingParent();
			/**
			* If the relativeParent is itself resuming from a different element then
			* the relative snapshot is not relavent
			*/
			if (relativeParent && !relativeParent.resumeFrom) {
				const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
				if (parentSnapshot && parentLayout) {
					const anchor = node.options.layoutAnchor || void 0;
					const relativeSnapshot = createBox();
					calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
					const relativeLayout = createBox();
					calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox, anchor);
					if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) hasRelativeLayoutChanged = true;
					if (relativeParent.options.layoutRoot) {
						node.relativeTarget = relativeLayout;
						node.relativeTargetOrigin = relativeSnapshot;
						node.relativeParent = relativeParent;
					}
				}
			}
		}
		node.notifyListeners("didUpdate", {
			layout,
			snapshot,
			delta: visualDelta,
			layoutDelta,
			hasLayoutChanged,
			hasRelativeLayoutChanged
		});
	} else if (node.isLead()) {
		const { onExitComplete } = node.options;
		onExitComplete && onExitComplete();
	}
	/**
	* Clearing transition
	* TODO: Investigate why this transition is being passed in as {type: false } from Framer
	* and why we need it at all
	*/
	node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
	/**
	* Increase debug counter for nodes encountered this frame
	*/
	if (statsBuffer.value) metrics.nodes++;
	if (!node.parent) return;
	/**
	* If this node isn't projecting, propagate isProjectionDirty. It will have
	* no performance impact but it will allow the next child that *is* projecting
	* but *isn't* dirty to just check its parent to see if *any* ancestor needs
	* correcting.
	*/
	if (!node.isProjecting()) node.isProjectionDirty = node.parent.isProjectionDirty;
	/**
	* Propagate isSharedProjectionDirty and isTransformDirty
	* throughout the whole tree. A future revision can take another look at
	* this but for safety we still recalcualte shared nodes.
	*/
	node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
	node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
	node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
	node.clearSnapshot();
}
function clearMeasurements(node) {
	node.clearMeasurements();
}
function forceLayoutMeasure(node) {
	node.isLayoutDirty = true;
	node.updateLayout();
}
function clearIsLayoutDirty(node) {
	node.isLayoutDirty = false;
}
/**
* When a node is animation-blocked (e.g. during drag) and its component
* didn't re-render (memoized), willUpdate() is never called so there's
* no snapshot. Use the previous layout as a snapshot and mark dirty so
* resetTransform/updateLayout/notifyLayoutUpdate process it normally.
*/
function ensureDraggedNodesSnapshotted(node) {
	if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
		node.snapshot = node.layout;
		node.isLayoutDirty = true;
	}
}
function resetTransformStyle(node) {
	const { visualElement } = node.options;
	if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) visualElement.notify("BeforeLayoutMeasure");
	node.resetTransform();
}
function finishAnimation(node) {
	node.finishAnimation();
	node.targetDelta = node.relativeTarget = node.target = void 0;
	node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
	node.resolveTargetDelta();
}
function calcProjection(node) {
	node.calcProjection();
}
function resetSkewAndRotation(node) {
	node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
	stack.removeLeadSnapshot();
}
function mixAxisDeltaLinear(output, delta, p) {
	output.translate = mixNumber$1(delta.translate, 0, p);
	output.scale = mixNumber$1(delta.scale, 1, p);
	output.origin = delta.origin;
	output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
	output.min = mixNumber$1(from.min, to.min, p);
	output.max = mixNumber$1(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
	mixAxis(output.x, from.x, to.x, p);
	mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
	return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
};
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
/**
* Measured bounding boxes must be rounded in Safari and
* left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
* can appear to jump.
*/
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
	axis.min = roundPoint(axis.min);
	axis.max = roundPoint(axis.max);
}
function roundBox(box) {
	roundAxis(box.x);
	roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
	return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout), .2);
}
function checkNodeWasScrollRoot(node) {
	return node !== node.root && node.scroll?.wasRoot;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode$1({
	attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => true
});
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = { current: void 0 };
var HTMLProjectionNode = createProjectionNode$1({
	measureScroll: (instance) => ({
		x: instance.scrollLeft,
		y: instance.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			const documentNode = new DocumentProjectionNode({});
			documentNode.mount(window);
			documentNode.setOptions({ layoutScroll: true });
			rootProjectionNode.current = documentNode;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (instance, value) => {
		instance.style.transform = value !== void 0 ? value : "none";
	},
	checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var { createContext: createContext$6 } = await importShared("react");
/**
* @public
*/
var MotionConfigContext = createContext$6({
	transformPagePoint: (p) => p,
	isStatic: false,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
var React$2 = await importShared("react");
/**
* Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
*/
/**
* Set a given ref to a given value
* This utility takes care of different types of refs: callback refs and RefObject(s)
*/
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
/**
* A utility to compose multiple refs together
* Accepts callback refs and RefObject(s)
*/
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
/**
* A custom hook that composes multiple refs
* Accepts callback refs and RefObject(s)
*/
function useComposedRefs(...refs) {
	return React$2.useCallback(composeRefs(...refs), refs);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var React$1 = await importShared("react");
var { useId: useId$2, useRef: useRef$9, useContext: useContext$11, useInsertionEffect: useInsertionEffect$2 } = await importShared("react");
/**
* Measurement functionality has to be within a separate component
* to leverage snapshot lifecycle.
*/
var PopChildMeasure = class extends React$1.Component {
	getSnapshotBeforeUpdate(prevProps) {
		const element = this.props.childRef.current;
		if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
			const parent = element.offsetParent;
			const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
			const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
			const computedStyle = getComputedStyle(element);
			const size = this.props.sizeRef.current;
			size.height = parseFloat(computedStyle.height);
			size.width = parseFloat(computedStyle.width);
			size.top = element.offsetTop;
			size.left = element.offsetLeft;
			size.right = parentWidth - size.width - size.left;
			size.bottom = parentHeight - size.height - size.top;
			size.direction = computedStyle.direction;
		}
		return null;
	}
	/**
	* Required with getSnapshotBeforeUpdate to stop React complaining.
	*/
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
	const id = useId$2();
	const ref = useRef$9(null);
	const size = useRef$9({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: "ltr"
	});
	const { nonce } = useContext$11(MotionConfigContext);
	const composedRef = useComposedRefs(ref, children.props?.ref ?? children?.ref);
	/**
	* We create and inject a style block so we can apply this explicit
	* sizing in a non-destructive manner by just deleting the style block.
	*
	* We can't apply size via render as the measurement happens
	* in getSnapshotBeforeUpdate (post-render), likewise if we apply the
	* styles directly on the DOM node, we might be overwriting
	* styles set via the style prop.
	*/
	useInsertionEffect$2(() => {
		const { width, height, top, left, right, bottom, direction } = size.current;
		if (isPresent || pop === false || !ref.current || !width || !height) return;
		const isRTL = direction === "rtl";
		const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
		const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
		ref.current.dataset.motionPopId = id;
		const style = document.createElement("style");
		if (nonce) style.nonce = nonce;
		const parent = root ?? document.head;
		parent.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
		return () => {
			ref.current?.removeAttribute("data-motion-pop-id");
			if (parent.contains(style)) parent.removeChild(style);
		};
	}, [isPresent]);
	return (0, import_jsx_runtime.jsx)(PopChildMeasure, {
		isPresent,
		childRef: ref,
		sizeRef: size,
		pop,
		children: pop === false ? children : React$1.cloneElement(children, { ref: composedRef })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var React = await importShared("react");
var { useId: useId$1, useRef: useRef$8, useMemo: useMemo$14 } = await importShared("react");
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
	const presenceChildren = useConstant(newChildrenMap);
	const id = useId$1();
	const isPresentRef = useRef$8(isPresent);
	const onExitCompleteRef = useRef$8(onExitComplete);
	useIsomorphicLayoutEffect(() => {
		isPresentRef.current = isPresent;
		onExitCompleteRef.current = onExitComplete;
	});
	let isReusedContext = true;
	let context = useMemo$14(() => {
		isReusedContext = false;
		return {
			id,
			initial,
			isPresent,
			custom,
			onExitComplete: (childId) => {
				presenceChildren.set(childId, true);
				for (const isComplete of presenceChildren.values()) if (!isComplete) return;
				onExitComplete && onExitComplete();
			},
			register: (childId) => {
				presenceChildren.set(childId, false);
				return () => {
					presenceChildren.delete(childId);
					!isPresentRef.current && !presenceChildren.size && onExitCompleteRef.current?.();
				};
			}
		};
	}, [
		isPresent,
		presenceChildren,
		onExitComplete
	]);
	/**
	* If the presence of a child affects the layout of the components around it,
	* we want to make a new context value to ensure they get re-rendered
	* so they can detect that layout change.
	*/
	if (presenceAffectsLayout && isReusedContext) context = { ...context };
	useMemo$14(() => {
		presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
	}, [isPresent]);
	/**
	* If there's no `motion` components to fire exit animations, we want to remove this
	* component immediately.
	*/
	React.useEffect(() => {
		!isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
	}, [isPresent]);
	children = (0, import_jsx_runtime.jsx)(PopChild, {
		pop: mode === "popLayout",
		isPresent,
		anchorX,
		anchorY,
		root,
		children
	});
	return (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
		value: context,
		children
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var { useContext: useContext$10, useId, useEffect: useEffect$6, useCallback: useCallback$2 } = await importShared("react");
/**
* When a component is the child of `AnimatePresence`, it can use `usePresence`
* to access information about whether it's still present in the React tree.
*
* ```jsx
* import { usePresence } from "framer-motion"
*
* export const Component = () => {
*   const [isPresent, safeToRemove] = usePresence()
*
*   useEffect(() => {
*     !isPresent && setTimeout(safeToRemove, 1000)
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* If `isPresent` is `false`, it means that a component has been removed from the tree,
* but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
*
* @public
*/
function usePresence(subscribe = true) {
	const context = useContext$10(PresenceContext);
	if (context === null) return [true, null];
	const { isPresent, onExitComplete, register } = context;
	const id = useId();
	useEffect$6(() => {
		if (subscribe) return register(id);
	}, [subscribe]);
	const safeToRemove = useCallback$2(() => subscribe && onExitComplete && onExitComplete(id), [
		id,
		onExitComplete,
		subscribe
	]);
	return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var { Children, isValidElement } = await importShared("react");
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
	const filtered = [];
	Children.forEach(children, (child) => {
		if (isValidElement(child)) filtered.push(child);
	});
	return filtered;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var { useMemo: useMemo$13, useRef: useRef$7, useState: useState$8, useContext: useContext$9 } = await importShared("react");
/**
* `AnimatePresence` enables the animation of components that have been removed from the tree.
*
* When adding/removing more than a single child, every child **must** be given a unique `key` prop.
*
* Any `motion` components that have an `exit` property defined will animate out when removed from
* the tree.
*
* ```jsx
* import { motion, AnimatePresence } from 'framer-motion'
*
* export const Items = ({ items }) => (
*   <AnimatePresence>
*     {items.map(item => (
*       <motion.div
*         key={item.id}
*         initial={{ opacity: 0 }}
*         animate={{ opacity: 1 }}
*         exit={{ opacity: 0 }}
*       />
*     ))}
*   </AnimatePresence>
* )
* ```
*
* You can sequence exit animations throughout a tree using variants.
*
* If a child contains multiple `motion` components with `exit` props, it will only unmount the child
* once all `motion` components have finished animating out. Likewise, any components using
* `usePresence` all need to call `safeToRemove`.
*
* @public
*/
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
	const [isParentPresent, safeToRemove] = usePresence(propagate);
	/**
	* Filter any children that aren't ReactElements. We can only track components
	* between renders with a props.key.
	*/
	const presentChildren = useMemo$13(() => onlyElements(children), [children]);
	/**
	* Track the keys of the currently rendered children. This is used to
	* determine which children are exiting.
	*/
	const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
	/**
	* If `initial={false}` we only want to pass this to components in the first render.
	*/
	const isInitialRender = useRef$7(true);
	/**
	* A ref containing the currently present children. When all exit animations
	* are complete, we use this to re-render the component with the latest children
	* *committed* rather than the latest children *rendered*.
	*/
	const pendingPresentChildren = useRef$7(presentChildren);
	/**
	* Track which exiting children have finished animating out.
	*/
	const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
	/**
	* Track which components are currently processing exit to prevent duplicate processing.
	*/
	const exitingComponents = useRef$7(/* @__PURE__ */ new Set());
	/**
	* Save children to render as React state. To ensure this component is concurrent-safe,
	* we check for exiting children via an effect.
	*/
	const [diffedChildren, setDiffedChildren] = useState$8(presentChildren);
	const [renderedChildren, setRenderedChildren] = useState$8(presentChildren);
	useIsomorphicLayoutEffect(() => {
		isInitialRender.current = false;
		pendingPresentChildren.current = presentChildren;
		/**
		* Update complete status of exiting children.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const key = getChildKey(renderedChildren[i]);
			if (!presentKeys.includes(key)) {
				if (exitComplete.get(key) !== true) exitComplete.set(key, false);
			} else {
				exitComplete.delete(key);
				exitingComponents.current.delete(key);
			}
		}
	}, [
		renderedChildren,
		presentKeys.length,
		presentKeys.join("-")
	]);
	const exitingChildren = [];
	if (presentChildren !== diffedChildren) {
		let nextChildren = [...presentChildren];
		/**
		* Loop through all the currently rendered components and decide which
		* are exiting.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const child = renderedChildren[i];
			const key = getChildKey(child);
			if (!presentKeys.includes(key)) {
				nextChildren.splice(i, 0, child);
				exitingChildren.push(child);
			}
		}
		/**
		* If we're in "wait" mode, and we have exiting children, we want to
		* only render these until they've all exited.
		*/
		if (mode === "wait" && exitingChildren.length) nextChildren = exitingChildren;
		setRenderedChildren(onlyElements(nextChildren));
		setDiffedChildren(presentChildren);
		/**
		* Early return to ensure once we've set state with the latest diffed
		* children, we can immediately re-render.
		*/
		return null;
	}
	/**
	* If we've been provided a forceRender function by the LayoutGroupContext,
	* we can use it to force a re-render amongst all surrounding components once
	* all components have finished animating out.
	*/
	const { forceRender } = useContext$9(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
		const key = getChildKey(child);
		const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
		const onExit = () => {
			if (exitingComponents.current.has(key)) return;
			if (exitComplete.has(key)) {
				exitingComponents.current.add(key);
				exitComplete.set(key, true);
			} else return;
			let isEveryExitComplete = true;
			exitComplete.forEach((isExitComplete) => {
				if (!isExitComplete) isEveryExitComplete = false;
			});
			if (isEveryExitComplete) {
				forceRender?.();
				setRenderedChildren(pendingPresentChildren.current);
				propagate && safeToRemove?.();
				onExitComplete && onExitComplete();
			}
		};
		return (0, import_jsx_runtime.jsx)(PresenceChild, {
			isPresent,
			initial: !isInitialRender.current || initial ? void 0 : false,
			custom,
			presenceAffectsLayout,
			mode,
			root,
			onExitComplete: isPresent ? void 0 : onExit,
			anchorX,
			anchorY,
			children: child
		}, key);
	}) });
};
//#endregion
//#region node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var { createContext: createContext$5 } = await importShared("react");
/**
* Note: Still used by components generated by old versions of Framer
*
* @deprecated
*/
var DeprecatedLayoutGroupContext = createContext$5(null);
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var { useRef: useRef$6 } = await importShared("react");
function useIsMounted() {
	const isMounted = useRef$6(false);
	useIsomorphicLayoutEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);
	return isMounted;
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var { useState: useState$7, useCallback: useCallback$1 } = await importShared("react");
function useForceUpdate() {
	const isMounted = useIsMounted();
	const [forcedRenderCount, setForcedRenderCount] = useState$7(0);
	const forceRender = useCallback$1(() => {
		isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
	}, [forcedRenderCount]);
	return [useCallback$1(() => frame.postRender(forceRender), [forceRender]), forcedRenderCount];
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var { useContext: useContext$8, useRef: useRef$5, useMemo: useMemo$12 } = await importShared("react");
var shouldInheritGroup = (inherit) => inherit === true;
var shouldInheritId = (inherit) => shouldInheritGroup(inherit === true) || inherit === "id";
var LayoutGroup = ({ children, id, inherit = true }) => {
	const layoutGroupContext = useContext$8(LayoutGroupContext);
	const deprecatedLayoutGroupContext = useContext$8(DeprecatedLayoutGroupContext);
	const [forceRender, key] = useForceUpdate();
	const context = useRef$5(null);
	const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
	if (context.current === null) {
		if (shouldInheritId(inherit) && upstreamId) id = id ? upstreamId + "-" + id : upstreamId;
		context.current = {
			id,
			group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
		};
	}
	const memoizedContext = useMemo$12(() => ({
		...context.current,
		forceRender
	}), [key]);
	return (0, import_jsx_runtime.jsx)(LayoutGroupContext.Provider, {
		value: memoizedContext,
		children
	});
};
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
/**
* We keep these listed separately as we use the lowercase tag names as part
* of the runtime bundle to detect SVG components
*/
var lowercaseSVGElements = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
	if (typeof Component !== "string" || Component.includes("-")) return false;
	else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/u.test(Component)) return true;
	return false;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var { Fragment: Fragment$2 } = await importShared("react");
var createDomVisualElement = (Component, options) => {
	return options.isSVG ?? isSVGComponent(Component) ? new SVGVisualElement(options) : new HTMLVisualElement(options, { allowProjection: Component !== Fragment$2 });
};
//#endregion
//#region node_modules/framer-motion/dist/es/context/LazyContext.mjs
var { createContext: createContext$4 } = await importShared("react");
var LazyContext = createContext$4({ strict: false });
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var { createContext: createContext$3 } = await importShared("react");
var MotionContext = /* @__PURE__ */ createContext$3({});
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
	if (isControllingVariants(props)) {
		const { initial, animate } = props;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context : {};
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var { useContext: useContext$7, useMemo: useMemo$11 } = await importShared("react");
function useCreateMotionContext(props) {
	const { initial, animate } = getCurrentTreeVariants(props, useContext$7(MotionContext));
	return useMemo$11(() => ({
		initial,
		animate
	}), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
	return Array.isArray(prop) ? prop.join(" ") : prop;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/use-props.mjs
var { useMemo: useMemo$10 } = await importShared("react");
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate }, visualState) {
	return useMemo$10(() => {
		const state = createHtmlRenderState();
		buildHTMLStyles(state, visualState, transformTemplate);
		return Object.assign({}, state.vars, state.style);
	}, [visualState]);
}
function useStyle(props, visualState) {
	const styleProp = props.style || {};
	const style = {};
	/**
	* Copy non-Motion Values straight into style
	*/
	copyRawValuesOnly(style, styleProp, props);
	Object.assign(style, useInitialMotionValues(props, visualState));
	return style;
}
function useHTMLProps(props, visualState) {
	const htmlProps = {};
	const style = useStyle(props, visualState);
	if (props.drag && props.dragListener !== false) {
		htmlProps.draggable = false;
		style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
		style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
	}
	if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
	htmlProps.style = style;
	return htmlProps;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var { useMemo: useMemo$9 } = await importShared("react");
function useSVGProps(props, visualState, _isStatic, Component) {
	const visualProps = useMemo$9(() => {
		const state = createSvgRenderState();
		buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
		return {
			...state.attrs,
			style: { ...state.style }
		};
	}, [visualState]);
	if (props.style) {
		const rawStyles = {};
		copyRawValuesOnly(rawStyles, props.style, props);
		visualProps.style = {
			...rawStyles,
			...visualProps.style
		};
	}
	return visualProps;
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
* A list of all valid MotionProps.
*
* @privateRemarks
* This doesn't throw if a `MotionProp` name is missing - it should.
*/
var validMotionProps = /* @__PURE__ */ new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"propagate",
	"ignoreStrict",
	"viewport"
]);
/**
* Check whether a prop name is a valid `MotionProp` key.
*
* @param key - Name of the property to check
* @returns `true` is key is a valid `MotionProp`.
*
* @public
*/
function isValidMotionProp(key) {
	return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var is_prop_valid_framer_motion_exports = /* @__PURE__ */ __exportAll({ default: () => is_prop_valid_framer_motion_default });
var is_prop_valid_framer_motion_default;
var init_is_prop_valid_framer_motion = __esmMin((() => {
	is_prop_valid_framer_motion_default = {};
	throw new Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`);
}));
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
	if (typeof isValidProp !== "function") return;
	shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
* Emotion and Styled Components both allow users to pass through arbitrary props to their components
* to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
* of these should be passed to the underlying DOM node.
*
* However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
* as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
* passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
* `@emotion/is-prop-valid`, however to fix this problem we need to use it.
*
* By making it an optionalDependency we can offer this functionality only in the situations where it's
* actually required.
*/
try {
	loadExternalIsValidProp((init_is_prop_valid_framer_motion(), __toCommonJS(is_prop_valid_framer_motion_exports)).default);
} catch {}
function filterProps(props, isDom, forwardMotionProps) {
	const filteredProps = {};
	for (const key in props) {
		/**
		* values is considered a valid prop by Emotion, so if it's present
		* this will be rendered out to the DOM unless explicitly filtered.
		*
		* We check the type as it could be used with the `feColorMatrix`
		* element, which we support.
		*/
		if (key === "values" && typeof props.values === "object") continue;
		if (isMotionValue(props[key])) continue;
		if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
	}
	return filteredProps;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var { Fragment: Fragment$1, useMemo: useMemo$8, createElement: createElement$3 } = await importShared("react");
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
	const visualProps = (isSVG ?? isSVGComponent(Component) ? useSVGProps : useHTMLProps)(props, latestValues, isStatic, Component);
	const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
	const elementProps = Component !== Fragment$1 ? {
		...filteredProps,
		...visualProps,
		ref
	} : {};
	/**
	* If component has been handed a motion value as its child,
	* memoise its initial value and render that. Subsequent updates
	* will be handled by the onChange handler
	*/
	const { children } = props;
	const renderedChildren = useMemo$8(() => isMotionValue(children) ? children.get() : children, [children]);
	return createElement$3(Component, {
		...elementProps,
		children: renderedChildren
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var { useContext: useContext$6 } = await importShared("react");
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
	return {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
		renderState: createRenderState()
	};
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const motionValues = scrapeMotionValues(props, {});
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants$1 = isControllingVariants(props);
	const isVariantNode$1 = isVariantNode(props);
	if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
		if (initial === void 0) initial = context.initial;
		if (animate === void 0) animate = context.animate;
	}
	let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
	isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
	const variantToSet = isInitialAnimationBlocked ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
		const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
		for (let i = 0; i < list.length; i++) {
			const resolved = resolveVariantFromProps(props, list[i]);
			if (resolved) {
				const { transitionEnd, transition, ...target } = resolved;
				for (const key in target) {
					let valueTarget = target[key];
					if (Array.isArray(valueTarget)) {
						/**
						* Take final keyframe if the initial animation is blocked because
						* we want to initialise at the end of that blocked animation.
						*/
						const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
						valueTarget = valueTarget[index];
					}
					if (valueTarget !== null) values[key] = valueTarget;
				}
				for (const key in transitionEnd) values[key] = transitionEnd[key];
			}
		}
	}
	return values;
}
var makeUseVisualState = (config) => (props, isStatic) => {
	const context = useContext$6(MotionContext);
	const presenceContext = useContext$6(PresenceContext);
	const make = () => makeState(config, props, context, presenceContext);
	return isStatic ? make() : useConstant(make);
};
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
});
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
};
var isInitialized = false;
/**
* Initialize feature definitions with isEnabled checks.
* This must be called before any motion components are rendered.
*/
function initFeatureDefinitions() {
	if (isInitialized) return;
	const initialFeatureDefinitions = {};
	for (const key in featureProps) initialFeatureDefinitions[key] = { isEnabled: (props) => featureProps[key].some((name) => !!props[name]) };
	setFeatureDefinitions(initialFeatureDefinitions);
	isInitialized = true;
}
/**
* Get the current feature definitions, initializing if needed.
*/
function getInitializedFeatureDefinitions() {
	initFeatureDefinitions();
	return getFeatureDefinitions();
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
	const featureDefinitions = getInitializedFeatureDefinitions();
	for (const key in features) featureDefinitions[key] = {
		...featureDefinitions[key],
		...features[key]
	};
	setFeatureDefinitions(featureDefinitions);
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var { useRef: useRef$4, useInsertionEffect: useInsertionEffect$1, useCallback } = await importShared("react");
/**
* Creates a ref function that, when called, hydrates the provided
* external ref and VisualElement.
*/
function useMotionRef(visualState, visualElement, externalRef) {
	/**
	* Store externalRef in a ref to avoid including it in the useCallback
	* dependency array. Including externalRef in dependencies causes issues
	* with libraries like Radix UI that create new callback refs on each render
	* when using asChild - this would cause the callback to be recreated,
	* triggering element remounts and breaking AnimatePresence exit animations.
	*/
	const externalRefContainer = useRef$4(externalRef);
	useInsertionEffect$1(() => {
		externalRefContainer.current = externalRef;
	});
	const refCleanup = useRef$4(null);
	return useCallback((instance) => {
		if (instance) visualState.onMount?.(instance);
		if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
		const ref = externalRefContainer.current;
		if (typeof ref === "function") if (instance) {
			const cleanup = ref(instance);
			if (typeof cleanup === "function") refCleanup.current = cleanup;
		} else if (refCleanup.current) {
			refCleanup.current();
			refCleanup.current = null;
		} else ref(instance);
		else if (ref) ref.current = instance;
	}, [visualElement]);
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var { createContext: createContext$2 } = await importShared("react");
/**
* Internal, exported only for usage in Framer
*/
var SwitchLayoutGroupContext = createContext$2({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
	return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var { useContext: useContext$5, useRef: useRef$3, useInsertionEffect, useEffect: useEffect$5 } = await importShared("react");
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
	const { visualElement: parent } = useContext$5(MotionContext);
	const lazyContext = useContext$5(LazyContext);
	const presenceContext = useContext$5(PresenceContext);
	const motionConfig = useContext$5(MotionConfigContext);
	const reducedMotionConfig = motionConfig.reducedMotion;
	const skipAnimations = motionConfig.skipAnimations;
	const visualElementRef = useRef$3(null);
	/**
	* Track whether the component has been through React's commit phase.
	* Used to detect when LazyMotion features load after the component has mounted.
	*/
	const hasMountedOnce = useRef$3(false);
	/**
	* If we haven't preloaded a renderer, check to see if we have one lazy-loaded
	*/
	createVisualElement = createVisualElement || lazyContext.renderer;
	if (!visualElementRef.current && createVisualElement) {
		visualElementRef.current = createVisualElement(Component, {
			visualState,
			parent,
			props,
			presenceContext,
			blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
			reducedMotionConfig,
			skipAnimations,
			isSVG
		});
		/**
		* If the component has already mounted before features loaded (e.g. via
		* LazyMotion with async feature loading), we need to force the initial
		* animation to run. Otherwise state changes that occurred before features
		* loaded will be lost and the element will snap to its final state.
		*/
		if (hasMountedOnce.current && visualElementRef.current) visualElementRef.current.manuallyAnimateOnMount = true;
	}
	const visualElement = visualElementRef.current;
	/**
	* Load Motion gesture and animation features. These are rendered as renderless
	* components so each feature can optionally make use of React lifecycle methods.
	*/
	const initialLayoutGroupConfig = useContext$5(SwitchLayoutGroupContext);
	if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
	const isMounted = useRef$3(false);
	useInsertionEffect(() => {
		/**
		* Check the component has already mounted before calling
		* `update` unnecessarily. This ensures we skip the initial update.
		*/
		if (visualElement && isMounted.current) visualElement.update(props, presenceContext);
	});
	/**
	* Cache this value as we want to know whether HandoffAppearAnimations
	* was present on initial render - it will be deleted after this.
	*/
	const optimisedAppearId = props[optimizedAppearDataAttribute];
	const wantsHandoff = useRef$3(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
	useIsomorphicLayoutEffect(() => {
		/**
		* Track that this component has mounted. This is used to detect when
		* LazyMotion features load after the component has already committed.
		*/
		hasMountedOnce.current = true;
		if (!visualElement) return;
		isMounted.current = true;
		window.MotionIsMounted = true;
		visualElement.updateFeatures();
		visualElement.scheduleRenderMicrotask();
		/**
		* Ideally this function would always run in a useEffect.
		*
		* However, if we have optimised appear animations to handoff from,
		* it needs to happen synchronously to ensure there's no flash of
		* incorrect styles in the event of a hydration error.
		*
		* So if we detect a situtation where optimised appear animations
		* are running, we use useLayoutEffect to trigger animations.
		*/
		if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
	});
	useEffect$5(() => {
		if (!visualElement) return;
		if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
		if (wantsHandoff.current) {
			queueMicrotask(() => {
				window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
			});
			wantsHandoff.current = false;
		}
		/**
		* Now we've finished triggering animations for this element we
		* can wipe the enteringChildren set for the next render.
		*/
		visualElement.enteringChildren = void 0;
	});
	return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
	const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
	visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
	visualElement.projection.setOptions({
		layoutId,
		layout,
		alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
		visualElement,
		/**
		* TODO: Update options in an effect. This could be tricky as it'll be too late
		* to update by the time layout animations run.
		* We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
		* ensuring it gets called if there's no potential layout animations.
		*
		*/
		animationType: typeof layout === "string" ? layout : "both",
		initialPromotionConfig,
		crossfade: layoutCrossfade,
		layoutScroll,
		layoutRoot,
		layoutAnchor
	});
}
function getClosestProjectingNode(visualElement) {
	if (!visualElement) return void 0;
	return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/index.mjs
var { forwardRef: forwardRef$4, useContext: useContext$4 } = await importShared("react");
/**
* Create a `motion` component.
*
* This function accepts a Component argument, which can be either a string (ie "div"
* for `motion.div`), or an actual React component.
*
* Alongside this is a config option which provides a way of rendering the provided
* component "offline", or outside the React render cycle.
*/
function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
	preloadedFeatures && loadFeatures(preloadedFeatures);
	/**
	* Determine whether to use SVG or HTML rendering based on:
	* 1. Explicit `type` option (highest priority)
	* 2. Auto-detection via `isSVGComponent`
	*/
	const isSVG = type ? type === "svg" : isSVGComponent(Component);
	const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
	function MotionDOMComponent(props, externalRef) {
		/**
		* If we need to measure the element we load this functionality in a
		* separate class component in order to gain access to getSnapshotBeforeUpdate.
		*/
		let MeasureLayout;
		const configAndProps = {
			...useContext$4(MotionConfigContext),
			...props,
			layoutId: useLayoutId(props)
		};
		const { isStatic } = configAndProps;
		const context = useCreateMotionContext(props);
		const visualState = useVisualState(props, isStatic);
		if (!isStatic && typeof window !== "undefined") {
			useStrictMode(configAndProps, preloadedFeatures);
			const layoutProjection = getProjectionFunctionality(configAndProps);
			MeasureLayout = layoutProjection.MeasureLayout;
			/**
			* Create a VisualElement for this component. A VisualElement provides a common
			* interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
			* providing a way of rendering to these APIs outside of the React render loop
			* for more performant animations and interactions
			*/
			context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
		}
		/**
		* The mount order and hierarchy is specific to ensure our element ref
		* is hydrated by the time features fire their effects.
		*/
		return (0, import_jsx_runtime.jsxs)(MotionContext.Provider, {
			value: context,
			children: [MeasureLayout && context.visualElement ? (0, import_jsx_runtime.jsx)(MeasureLayout, {
				visualElement: context.visualElement,
				...configAndProps
			}) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)]
		});
	}
	MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
	const ForwardRefMotionComponent = forwardRef$4(MotionDOMComponent);
	ForwardRefMotionComponent[motionComponentSymbol] = Component;
	return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
	const layoutGroupId = useContext$4(LayoutGroupContext).id;
	return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
	useContext$4(LazyContext).strict;
}
function getProjectionFunctionality(props) {
	const { drag, layout } = getInitializedFeatureDefinitions();
	if (!drag && !layout) return {};
	const combined = {
		...drag,
		...layout
	};
	return {
		MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : void 0,
		ProjectionNode: combined.ProjectionNode
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
	if (typeof Proxy === "undefined") return createMotionComponent;
	/**
	* A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
	* Rather than generating them anew every render.
	*/
	const componentCache = /* @__PURE__ */ new Map();
	const factory = (Component, options) => {
		return createMotionComponent(Component, options, preloadedFeatures, createVisualElement);
	};
	/**
	* Support for deprecated`motion(Component)` pattern
	*/
	const deprecatedFactoryFunction = (Component, options) => {
		return factory(Component, options);
	};
	return new Proxy(deprecatedFactoryFunction, { 
	/**
	* Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
	* The prop name is passed through as `key` and we can use that to generate a `motion`
	* DOM component with that name.
	*/
get: (_target, key) => {
		if (key === "create") return factory;
		/**
		* If this element doesn't exist in the component cache, create it and cache.
		*/
		if (!componentCache.has(key)) componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
		return componentCache.get(key);
	} });
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
	/**
	* We dynamically generate the AnimationState manager as it contains a reference
	* to the underlying animation library. We only want to load that if we load this,
	* so people can optionally code split it out using the `m` component.
	*/
	constructor(node) {
		super(node);
		node.animationState || (node.animationState = createAnimationState(node));
	}
	updateAnimationControlsSubscription() {
		const { animate } = this.node.getProps();
		if (isAnimationControls(animate)) this.unmountControls = animate.subscribe(this.node);
	}
	/**
	* Subscribe any provided AnimationControls to the component's VisualElement
	*/
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate } = this.node.getProps();
		const { animate: prevAnimate } = this.node.prevProps || {};
		if (animate !== prevAnimate) this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset();
		this.unmountControls?.();
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.id = id++;
		this.isExitComplete = false;
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent, onExitComplete } = this.node.presenceContext;
		const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || isPresent === prevIsPresent) return;
		if (isPresent && prevIsPresent === false) {
			/**
			* When re-entering, if the exit animation already completed
			* (element is at rest), reset to initial values so the enter
			* animation replays from the correct position.
			*/
			if (this.isExitComplete) {
				const { initial, custom } = this.node.getProps();
				if (typeof initial === "string" || typeof initial === "object" && initial !== null && !Array.isArray(initial)) {
					const resolved = resolveVariant(this.node, initial, custom);
					if (resolved) {
						const { transition, transitionEnd, ...target } = resolved;
						for (const key in target) this.node.getValue(key)?.jump(target[key]);
					}
				}
				this.node.animationState.reset();
				this.node.animationState.animateChanges();
			} else this.node.animationState.setActive("exit", false);
			this.isExitComplete = false;
			return;
		}
		const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
		if (onExitComplete && !isPresent) exitAnimation.then(() => {
			this.isExitComplete = true;
			onExitComplete(this.id);
		});
	}
	mount() {
		const { register, onExitComplete } = this.node.presenceContext || {};
		if (onExitComplete) onExitComplete(this.id);
		if (register) this.unmount = register(this.id);
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: ExitAnimationFeature }
};
//#endregion
//#region node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event) {
	return { point: {
		x: event.pageX,
		y: event.pageY
	} };
}
var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
//#endregion
//#region node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
	return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({ current }) => {
	return current ? current.ownerDocument.defaultView : null;
};
//#endregion
//#region node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
	const xDelta = distance(a.x, b.x);
	const yDelta = distance(a.y, b.y);
	return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var overflowStyles$1 = /*#__PURE__*/ new Set(["auto", "scroll"]);
/**
* @internal
*/
var PanSession = class {
	constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
		/**
		* @internal
		*/
		this.startEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEventInfo = null;
		/**
		* Raw (untransformed) event info, re-transformed each frame
		* so transformPagePoint sees the current parent matrix.
		* @internal
		*/
		this.lastRawMoveEventInfo = null;
		/**
		* @internal
		*/
		this.handlers = {};
		/**
		* @internal
		*/
		this.contextWindow = window;
		/**
		* Scroll positions of scrollable ancestors and window.
		* @internal
		*/
		this.scrollPositions = /* @__PURE__ */ new Map();
		/**
		* Cleanup function for scroll listeners.
		* @internal
		*/
		this.removeScrollListeners = null;
		this.onElementScroll = (event) => {
			this.handleScroll(event.target);
		};
		this.onWindowScroll = () => {
			this.handleScroll(window);
		};
		this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			if (this.lastRawMoveEventInfo) this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
			const info = getPanInfo(this.lastMoveEventInfo, this.history);
			const isPanStarted = this.startEvent !== null;
			const isDistancePastThreshold = distance2D(info.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!isPanStarted && !isDistancePastThreshold) return;
			const { point } = info;
			const { timestamp } = frameData;
			this.history.push({
				...point,
				timestamp
			});
			const { onStart, onMove } = this.handlers;
			if (!isPanStarted) {
				onStart && onStart(this.lastMoveEvent, info);
				this.startEvent = this.lastMoveEvent;
			}
			onMove && onMove(this.lastMoveEvent, info);
		};
		this.handlePointerMove = (event, info) => {
			this.lastMoveEvent = event;
			this.lastRawMoveEventInfo = info;
			this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
			frame.update(this.updatePoint, true);
		};
		this.handlePointerUp = (event, info) => {
			this.end();
			const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
			if (this.dragSnapToOrigin || !this.startEvent) resumeAnimation && resumeAnimation();
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const panInfo = getPanInfo(event.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
			if (this.startEvent && onEnd) onEnd(event, panInfo);
			onSessionEnd && onSessionEnd(event, panInfo);
		};
		if (!isPrimaryPointer(event)) return;
		this.dragSnapToOrigin = dragSnapToOrigin;
		this.handlers = handlers;
		this.transformPagePoint = transformPagePoint;
		this.distanceThreshold = distanceThreshold;
		this.contextWindow = contextWindow || window;
		const initialInfo = transformPoint(extractEventInfo(event), this.transformPagePoint);
		const { point } = initialInfo;
		const { timestamp } = frameData;
		this.history = [{
			...point,
			timestamp
		}];
		const { onSessionStart } = handlers;
		onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
		const eventOptions = {
			passive: true,
			capture: true
		};
		this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove, eventOptions), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp, eventOptions), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp, eventOptions));
		if (element) this.startScrollTracking(element);
	}
	/**
	* Start tracking scroll on ancestors and window.
	*/
	startScrollTracking(element) {
		let current = element.parentElement;
		while (current) {
			const style = getComputedStyle(current);
			if (overflowStyles$1.has(style.overflowX) || overflowStyles$1.has(style.overflowY)) this.scrollPositions.set(current, {
				x: current.scrollLeft,
				y: current.scrollTop
			});
			current = current.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		});
		window.addEventListener("scroll", this.onElementScroll, { capture: true });
		window.addEventListener("scroll", this.onWindowScroll);
		this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: true });
			window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	/**
	* Handle scroll compensation during drag.
	*
	* For element scroll: adjusts history origin since pageX/pageY doesn't change.
	* For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
	*/
	handleScroll(target) {
		const initial = this.scrollPositions.get(target);
		if (!initial) return;
		const isWindow = target === window;
		const current = isWindow ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: target.scrollLeft,
			y: target.scrollTop
		};
		const delta = {
			x: current.x - initial.x,
			y: current.y - initial.y
		};
		if (delta.x === 0 && delta.y === 0) return;
		if (isWindow) {
			if (this.lastMoveEventInfo) {
				this.lastMoveEventInfo.point.x += delta.x;
				this.lastMoveEventInfo.point.y += delta.y;
			}
		} else if (this.history.length > 0) {
			this.history[0].x -= delta.x;
			this.history[0].y -= delta.y;
		}
		this.scrollPositions.set(target, current);
		frame.update(this.updatePoint, true);
	}
	updateHandlers(handlers) {
		this.handlers = handlers;
	}
	end() {
		this.removeListeners && this.removeListeners();
		this.removeScrollListeners && this.removeScrollListeners();
		this.scrollPositions.clear();
		cancelFrame(this.updatePoint);
	}
};
function transformPoint(info, transformPagePoint) {
	return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	};
}
function getPanInfo({ point }, history) {
	return {
		point,
		delta: subtractPoint(point, lastDevicePoint(history)),
		offset: subtractPoint(point, startDevicePoint(history)),
		velocity: getVelocity(history, .1)
	};
}
function startDevicePoint(history) {
	return history[0];
}
function lastDevicePoint(history) {
	return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
	if (history.length < 2) return {
		x: 0,
		y: 0
	};
	let i = history.length - 1;
	let timestampedPoint = null;
	const lastPoint = lastDevicePoint(history);
	while (i >= 0) {
		timestampedPoint = history[i];
		if (lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta)) break;
		i--;
	}
	if (!timestampedPoint) return {
		x: 0,
		y: 0
	};
	/**
	* If the selected point is the pointer-down origin (history[0]),
	* there are better movement points available, and the time gap
	* is suspiciously large (>2x timeDelta), use the next point instead.
	* This prevents stale pointer-down points from diluting velocity
	* in hold-then-flick gestures.
	*/
	if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta) * 2) timestampedPoint = history[1];
	const time = /* @__PURE__ */ millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
	if (time === 0) return {
		x: 0,
		y: 0
	};
	const currentVelocity = {
		x: (lastPoint.x - timestampedPoint.x) / time,
		y: (lastPoint.y - timestampedPoint.y) / time
	};
	if (currentVelocity.x === Infinity) currentVelocity.x = 0;
	if (currentVelocity.y === Infinity) currentVelocity.y = 0;
	return currentVelocity;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
/**
* Apply constraints to a point. These constraints are both physical along an
* axis, and an elastic factor that determines how much to constrain the point
* by if it does lie outside the defined parameters.
*/
function applyConstraints(point, { min, max }, elastic) {
	if (min !== void 0 && point < min) point = elastic ? mixNumber$1(min, point, elastic.min) : Math.max(point, min);
	else if (max !== void 0 && point > max) point = elastic ? mixNumber$1(max, point, elastic.max) : Math.min(point, max);
	return point;
}
/**
* Calculate constraints in terms of the viewport when defined relatively to the
* measured axis. This is measured from the nearest edge, so a max constraint of 200
* on an axis with a max value of 300 would return a constraint of 500 - axis length
*/
function calcRelativeAxisConstraints(axis, min, max) {
	return {
		min: min !== void 0 ? axis.min + min : void 0,
		max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
	};
}
/**
* Calculate constraints in terms of the viewport when
* defined relatively to the measured bounding box.
*/
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
	return {
		x: calcRelativeAxisConstraints(layoutBox.x, left, right),
		y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative axis
*/
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
	let min = constraintsAxis.min - layoutAxis.min;
	let max = constraintsAxis.max - layoutAxis.max;
	if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) [min, max] = [max, min];
	return {
		min,
		max
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative box
*/
function calcViewportConstraints(layoutBox, constraintsBox) {
	return {
		x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
		y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
	};
}
/**
* Calculate a transform origin relative to the source axis, between 0-1, that results
* in an asthetically pleasing scale/transform needed to project from source to target.
*/
function calcOrigin(source, target) {
	let origin = .5;
	const sourceLength = calcLength(source);
	const targetLength = calcLength(target);
	if (targetLength > sourceLength) origin = /* @__PURE__ */ progress(target.min, target.max - sourceLength, source.min);
	else if (sourceLength > targetLength) origin = /* @__PURE__ */ progress(source.min, source.max - targetLength, target.min);
	return clamp(0, 1, origin);
}
/**
* Rebase the calculated viewport constraints relative to the layout.min point.
*/
function rebaseAxisConstraints(layout, constraints) {
	const relativeConstraints = {};
	if (constraints.min !== void 0) relativeConstraints.min = constraints.min - layout.min;
	if (constraints.max !== void 0) relativeConstraints.max = constraints.max - layout.min;
	return relativeConstraints;
}
var defaultElastic = .35;
/**
* Accepts a dragElastic prop and returns resolved elastic values for each axis.
*/
function resolveDragElastic(dragElastic = defaultElastic) {
	if (dragElastic === false) dragElastic = 0;
	else if (dragElastic === true) dragElastic = defaultElastic;
	return {
		x: resolveAxisElastic(dragElastic, "left", "right"),
		y: resolveAxisElastic(dragElastic, "top", "bottom")
	};
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
	return {
		min: resolvePointElastic(dragElastic, minLabel),
		max: resolvePointElastic(dragElastic, maxLabel)
	};
}
function resolvePointElastic(dragElastic, label) {
	return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
	constructor(visualElement) {
		this.openDragLock = null;
		this.isDragging = false;
		this.currentDirection = null;
		this.originPoint = {
			x: 0,
			y: 0
		};
		/**
		* The permitted boundaries of travel, in pixels.
		*/
		this.constraints = false;
		this.hasMutatedConstraints = false;
		/**
		* The per-axis resolved elastic values.
		*/
		this.elastic = createBox();
		/**
		* The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPointerEvent = null;
		/**
		* The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPanInfo = null;
		this.visualElement = visualElement;
	}
	start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
		/**
		* Don't start dragging if this component is exiting
		*/
		const { presenceContext } = this.visualElement;
		if (presenceContext && presenceContext.isPresent === false) return;
		const onSessionStart = (event) => {
			if (snapToCursor) this.snapToCursor(extractEventInfo(event).point);
			this.stopAnimation();
		};
		const onStart = (event, info) => {
			const { drag, dragPropagation, onDragStart } = this.getProps();
			if (drag && !dragPropagation) {
				if (this.openDragLock) this.openDragLock();
				this.openDragLock = setDragLock(drag);
				if (!this.openDragLock) return;
			}
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.isDragging = true;
			this.currentDirection = null;
			this.resolveConstraints();
			if (this.visualElement.projection) {
				this.visualElement.projection.isAnimationBlocked = true;
				this.visualElement.projection.target = void 0;
			}
			/**
			* Record gesture origin and pointer offset
			*/
			eachAxis((axis) => {
				let current = this.getAxisMotionValue(axis).get() || 0;
				/**
				* If the MotionValue is a percentage value convert to px
				*/
				if (percent.test(current)) {
					const { projection } = this.visualElement;
					if (projection && projection.layout) {
						const measuredAxis = projection.layout.layoutBox[axis];
						if (measuredAxis) current = calcLength(measuredAxis) * (parseFloat(current) / 100);
					}
				}
				this.originPoint[axis] = current;
			});
			if (onDragStart) frame.update(() => onDragStart(event, info), false, true);
			addValueToWillChange(this.visualElement, "transform");
			const { animationState } = this.visualElement;
			animationState && animationState.setActive("whileDrag", true);
		};
		const onMove = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
			if (!dragPropagation && !this.openDragLock) return;
			const { offset } = info;
			if (dragDirectionLock && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(offset);
				if (this.currentDirection !== null) onDirectionLock && onDirectionLock(this.currentDirection);
				return;
			}
			this.updateAxis("x", info.point, offset);
			this.updateAxis("y", info.point, offset);
			/**
			* Ideally we would leave the renderer to fire naturally at the end of
			* this frame but if the element is about to change layout as the result
			* of a re-render we want to ensure the browser can read the latest
			* bounding box to ensure the pointer and element don't fall out of sync.
			*/
			this.visualElement.render();
			/**
			* This must fire after the render call as it might trigger a state
			* change which itself might trigger a layout update.
			*/
			if (onDrag) frame.update(() => onDrag(event, info), false, true);
		};
		const onSessionEnd = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.stop(event, info);
			this.latestPointerEvent = null;
			this.latestPanInfo = null;
		};
		const resumeAnimation = () => {
			const { dragSnapToOrigin: snap } = this.getProps();
			if (snap || this.constraints) this.startAnimation({
				x: 0,
				y: 0
			});
		};
		const { dragSnapToOrigin } = this.getProps();
		this.panSession = new PanSession(originEvent, {
			onSessionStart,
			onStart,
			onMove,
			onSessionEnd,
			resumeAnimation
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin,
			distanceThreshold,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	/**
	* @internal
	*/
	stop(event, panInfo) {
		const finalEvent = event || this.latestPointerEvent;
		const finalPanInfo = panInfo || this.latestPanInfo;
		const isDragging = this.isDragging;
		this.cancel();
		if (!isDragging || !finalPanInfo || !finalEvent) return;
		const { velocity } = finalPanInfo;
		this.startAnimation(velocity);
		const { onDragEnd } = this.getProps();
		if (onDragEnd) frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
	}
	/**
	* @internal
	*/
	cancel() {
		this.isDragging = false;
		const { projection, animationState } = this.visualElement;
		if (projection) projection.isAnimationBlocked = false;
		this.endPanSession();
		const { dragPropagation } = this.getProps();
		if (!dragPropagation && this.openDragLock) {
			this.openDragLock();
			this.openDragLock = null;
		}
		animationState && animationState.setActive("whileDrag", false);
	}
	/**
	* Clean up the pan session without modifying other drag state.
	* This is used during unmount to ensure event listeners are removed
	* without affecting projection animations or drag locks.
	* @internal
	*/
	endPanSession() {
		this.panSession && this.panSession.end();
		this.panSession = void 0;
	}
	updateAxis(axis, _point, offset) {
		const { drag } = this.getProps();
		if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
		const axisValue = this.getAxisMotionValue(axis);
		let next = this.originPoint[axis] + offset[axis];
		if (this.constraints && this.constraints[axis]) next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
		axisValue.set(next);
	}
	resolveConstraints() {
		const { dragConstraints, dragElastic } = this.getProps();
		const layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
		const prevConstraints = this.constraints;
		if (dragConstraints && isRefObject(dragConstraints)) {
			if (!this.constraints) this.constraints = this.resolveRefConstraints();
		} else if (dragConstraints && layout) this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
		else this.constraints = false;
		this.elastic = resolveDragElastic(dragElastic);
		/**
		* If we're outputting to external MotionValues, we want to rebase the measured constraints
		* from viewport-relative to component-relative. This only applies to relative (non-ref)
		* constraints, as ref-based constraints from calcViewportConstraints are already in the
		* correct coordinate space for the motion value transform offset.
		*/
		if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout && this.constraints && !this.hasMutatedConstraints) eachAxis((axis) => {
			if (this.constraints !== false && this.getAxisMotionValue(axis)) this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
		});
	}
	resolveRefConstraints() {
		const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
		if (!constraints || !isRefObject(constraints)) return false;
		const constraintsElement = constraints.current;
		const { projection } = this.visualElement;
		if (!projection || !projection.layout) return false;
		/**
		* Refresh the root scroll offset so the constraint's viewport box
		* translates to correct page coordinates. The scroll captured at
		* drag mount can be stale if the document was scrolled afterwards —
		* e.g. via the browser restoring scroll on refresh, or an ancestor
		* layout effect running after this element's mount (#2829).
		*
		* Clear the cached scroll first so `updateScroll` bypasses its
		* per-animationId cache and re-reads the live value.
		*/
		if (projection.root) {
			projection.root.scroll = void 0;
			projection.root.updateScroll();
		}
		const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
		let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
		/**
		* If there's an onMeasureDragConstraints listener we call it and
		* if different constraints are returned, set constraints to that
		*/
		if (onMeasureDragConstraints) {
			const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
			this.hasMutatedConstraints = !!userConstraints;
			if (userConstraints) measuredConstraints = convertBoundingBoxToBox(userConstraints);
		}
		return measuredConstraints;
	}
	startAnimation(velocity) {
		const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
		const constraints = this.constraints || {};
		const momentumAnimations = eachAxis((axis) => {
			if (!shouldDrag(axis, drag, this.currentDirection)) return;
			let transition = constraints && constraints[axis] || {};
			if (dragSnapToOrigin === true || dragSnapToOrigin === axis) transition = {
				min: 0,
				max: 0
			};
			/**
			* Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
			* of spring animations so we should look into adding a disable spring option to `inertia`.
			* We could do something here where we affect the `bounceStiffness` and `bounceDamping`
			* using the value of `dragElastic`.
			*/
			const bounceStiffness = dragElastic ? 200 : 1e6;
			const bounceDamping = dragElastic ? 40 : 1e7;
			const inertia = {
				type: "inertia",
				velocity: dragMomentum ? velocity[axis] : 0,
				bounceStiffness,
				bounceDamping,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...dragTransition,
				...transition
			};
			return this.startAxisValueAnimation(axis, inertia);
		});
		return Promise.all(momentumAnimations).then(onDragTransitionEnd);
	}
	startAxisValueAnimation(axis, transition) {
		const axisValue = this.getAxisMotionValue(axis);
		addValueToWillChange(this.visualElement, axis);
		return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
	}
	stopAnimation() {
		eachAxis((axis) => this.getAxisMotionValue(axis).stop());
	}
	/**
	* Drag works differently depending on which props are provided.
	*
	* - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
	* - Otherwise, we apply the delta to the x/y motion values.
	*/
	getAxisMotionValue(axis) {
		const dragKey = `_drag${axis.toUpperCase()}`;
		const externalMotionValue = this.visualElement.getProps()[dragKey];
		return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
	}
	snapToCursor(point) {
		eachAxis((axis) => {
			const { drag } = this.getProps();
			if (!shouldDrag(axis, drag, this.currentDirection)) return;
			const { projection } = this.visualElement;
			const axisValue = this.getAxisMotionValue(axis);
			if (projection && projection.layout) {
				const { min, max } = projection.layout.layoutBox[axis];
				/**
				* The layout measurement includes the current transform value,
				* so we need to add it back to get the correct snap position.
				* This fixes an issue where elements with initial coordinates
				* would snap to the wrong position on the first drag.
				*/
				const current = axisValue.get() || 0;
				axisValue.set(point[axis] - mixNumber$1(min, max, .5) + current);
			}
		});
	}
	/**
	* When the viewport resizes we want to check if the measured constraints
	* have changed and, if so, reposition the element within those new constraints
	* relative to where it was before the resize.
	*/
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag, dragConstraints } = this.getProps();
		const { projection } = this.visualElement;
		if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
		/**
		* Stop current animations as there can be visual glitching if we try to do
		* this mid-animation
		*/
		this.stopAnimation();
		/**
		* Record the relative position of the dragged element relative to the
		* constraints box and save as a progress value.
		*/
		const boxProgress = {
			x: 0,
			y: 0
		};
		eachAxis((axis) => {
			const axisValue = this.getAxisMotionValue(axis);
			if (axisValue && this.constraints !== false) {
				const latest = axisValue.get();
				boxProgress[axis] = calcOrigin({
					min: latest,
					max: latest
				}, this.constraints[axis]);
			}
		});
		/**
		* Update the layout of this element and resolve the latest drag constraints
		*/
		const { transformTemplate } = this.visualElement.getProps();
		this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
		projection.root && projection.root.updateScroll();
		projection.updateLayout();
		/**
		* Reset constraints so resolveConstraints() will recalculate them
		* with the freshly measured layout rather than returning the cached value.
		*/
		this.constraints = false;
		this.resolveConstraints();
		/**
		* For each axis, calculate the current progress of the layout axis
		* within the new constraints.
		*/
		eachAxis((axis) => {
			if (!shouldDrag(axis, drag, null)) return;
			/**
			* Calculate a new transform based on the previous box progress
			*/
			const axisValue = this.getAxisMotionValue(axis);
			const { min, max } = this.constraints[axis];
			axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
		});
		/**
		* Flush the updated transform to the DOM synchronously to prevent
		* a visual flash at the element's CSS layout position (0,0) when
		* the transform was stripped for measurement.
		*/
		this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		const element = this.visualElement.current;
		/**
		* Attach a pointerdown event listener on this DOM element to initiate drag tracking.
		*/
		const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
			const { drag, dragListener = true } = this.getProps();
			const target = event.target;
			/**
			* Only block drag if clicking on a text input child element
			* (input, textarea, select, contenteditable) where users might
			* want to select text or interact with the control.
			*
			* Buttons and links don't block drag since they don't have
			* click-and-move actions of their own.
			*/
			const isClickingTextInputChild = target !== element && isElementTextInput(target);
			if (drag && dragListener && !isClickingTextInputChild) this.start(event);
		});
		/**
		* If using ref-based constraints, observe both the draggable element
		* and the constraint container for size changes via ResizeObserver.
		* Setup is deferred because dragConstraints.current is null when
		* addListeners first runs (React hasn't committed the ref yet).
		*/
		let stopResizeObservers;
		const measureDragConstraints = () => {
			const { dragConstraints } = this.getProps();
			if (isRefObject(dragConstraints) && dragConstraints.current) {
				this.constraints = this.resolveRefConstraints();
				if (!stopResizeObservers) stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
			}
		};
		const { projection } = this.visualElement;
		const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
		if (projection && !projection.layout) {
			projection.root && projection.root.updateScroll();
			projection.updateLayout();
		}
		frame.read(measureDragConstraints);
		/**
		* Attach a window resize listener to scale the draggable target within its defined
		* constraints as the window resizes.
		*/
		const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
		/**
		* If the element's layout changes, calculate the delta and apply that to
		* the drag gesture's origin point.
		*/
		const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
			if (this.isDragging && hasLayoutChanged) {
				eachAxis((axis) => {
					const motionValue = this.getAxisMotionValue(axis);
					if (!motionValue) return;
					this.originPoint[axis] += delta[axis].translate;
					motionValue.set(motionValue.get() + delta[axis].translate);
				});
				this.visualElement.render();
			}
		}));
		return () => {
			stopResizeListener();
			stopPointerListener();
			stopMeasureLayoutListener();
			stopLayoutUpdateListener && stopLayoutUpdateListener();
			stopResizeObservers && stopResizeObservers();
		};
	}
	getProps() {
		const props = this.visualElement.getProps();
		const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
		return {
			...props,
			drag,
			dragDirectionLock,
			dragPropagation,
			dragConstraints,
			dragElastic,
			dragMomentum
		};
	}
};
function skipFirstCall(callback) {
	let isFirst = true;
	return () => {
		if (isFirst) {
			isFirst = false;
			return;
		}
		callback();
	};
}
function startResizeObservers(element, constraintsElement, onResize) {
	const stopElement = resize(element, skipFirstCall(onResize));
	const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
	return () => {
		stopElement();
		stopContainer();
	};
}
function shouldDrag(direction, drag, currentDirection) {
	return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
* Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
* than the provided threshold, return `null`.
*
* @param offset - The x/y offset from origin.
* @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
*/
function getCurrentDirection(offset, lockThreshold = 10) {
	let direction = null;
	if (Math.abs(offset.y) > lockThreshold) direction = "y";
	else if (Math.abs(offset.x) > lockThreshold) direction = "x";
	return direction;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
	constructor(node) {
		super(node);
		this.removeGroupControls = noop;
		this.removeListeners = noop;
		this.controls = new VisualElementDragControls(node);
	}
	mount() {
		const { dragControls } = this.node.getProps();
		if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		this.removeListeners = this.controls.addListeners() || noop;
	}
	update() {
		const { dragControls } = this.node.getProps();
		const { dragControls: prevDragControls } = this.node.prevProps || {};
		if (dragControls !== prevDragControls) {
			this.removeGroupControls();
			if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		}
	}
	unmount() {
		this.removeGroupControls();
		this.removeListeners();
		/**
		* In React 19, during list reorder reconciliation, components may
		* briefly unmount and remount while the drag is still active. If we're
		* actively dragging, we should NOT end the pan session - it will
		* continue tracking pointer events via its window-level listeners.
		*
		* The pan session will be properly cleaned up when:
		* 1. The drag ends naturally (pointerup/pointercancel)
		* 2. The component is truly removed from the DOM
		*/
		if (!this.controls.isDragging) this.controls.endPanSession();
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
	if (handler) frame.update(() => handler(event, info), false, true);
};
var PanGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.removePointerDownListener = noop;
	}
	onPointerDown(pointerDownEvent) {
		this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(onPanSessionStart),
			onStart: asyncHandler(onPanStart),
			onMove: asyncHandler(onPan),
			onEnd: (event, info) => {
				delete this.session;
				if (onPanEnd) frame.postRender(() => onPanEnd(event, info));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener();
		this.session && this.session.end();
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var { useContext: useContext$3, Component } = await importShared("react");
/**
* Track whether we've taken any snapshots yet. If not,
* we can safely skip notification of didUpdate.
*
* Difficult to capture in a test but to prevent flickering
* we must set this to true either on update or unmount.
* Running `next-env/layout-id` in Safari will show this behaviour if broken.
*/
var hasTakenAnySnapshot = false;
var MeasureLayoutWithContext = class extends Component {
	/**
	* This only mounts projection nodes for components that
	* need measuring, we might want to do it for all components
	* in order to incorporate transforms
	*/
	componentDidMount() {
		const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
		const { projection } = visualElement;
		if (projection) {
			if (layoutGroup.group) layoutGroup.group.add(projection);
			if (switchLayoutGroup && switchLayoutGroup.register && layoutId) switchLayoutGroup.register(projection);
			if (hasTakenAnySnapshot) projection.root.didUpdate();
			projection.addEventListener("animationComplete", () => {
				this.safeToRemove();
			});
			projection.setOptions({
				...projection.options,
				layoutDependency: this.props.layoutDependency,
				onExitComplete: () => this.safeToRemove()
			});
		}
		globalProjectionState.hasEverUpdated = true;
	}
	getSnapshotBeforeUpdate(prevProps) {
		const { layoutDependency, visualElement, drag, isPresent } = this.props;
		const { projection } = visualElement;
		if (!projection) return null;
		/**
		* TODO: We use this data in relegate to determine whether to
		* promote a previous element. There's no guarantee its presence data
		* will have updated by this point - if a bug like this arises it will
		* have to be that we markForRelegation and then find a new lead some other way,
		* perhaps in didUpdate
		*/
		projection.isPresent = isPresent;
		if (prevProps.layoutDependency !== layoutDependency) projection.setOptions({
			...projection.options,
			layoutDependency
		});
		hasTakenAnySnapshot = true;
		if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) projection.willUpdate();
		else this.safeToRemove();
		if (prevProps.isPresent !== isPresent) {
			if (isPresent) projection.promote();
			else if (!projection.relegate())
 /**
			* If there's another stack member taking over from this one,
			* it's in charge of the exit animation and therefore should
			* be in charge of the safe to remove. Otherwise we call it here.
			*/
			frame.postRender(() => {
				const stack = projection.getStack();
				if (!stack || !stack.members.length) this.safeToRemove();
			});
		}
		return null;
	}
	componentDidUpdate() {
		const { visualElement, layoutAnchor } = this.props;
		const { projection } = visualElement;
		if (projection) {
			projection.options.layoutAnchor = layoutAnchor;
			projection.root.didUpdate();
			microtask.postRender(() => {
				if (!projection.currentAnimation && projection.isLead()) this.safeToRemove();
			});
		}
	}
	componentWillUnmount() {
		const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
		const { projection } = visualElement;
		hasTakenAnySnapshot = true;
		if (projection) {
			projection.scheduleCheckAfterUnmount();
			if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
			if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
		}
	}
	safeToRemove() {
		const { safeToRemove } = this.props;
		safeToRemove && safeToRemove();
	}
	render() {
		return null;
	}
};
function MeasureLayout(props) {
	const [isPresent, safeToRemove] = usePresence();
	const layoutGroup = useContext$3(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(MeasureLayoutWithContext, {
		...props,
		layoutGroup,
		switchLayoutGroup: useContext$3(SwitchLayoutGroupContext),
		isPresent,
		safeToRemove
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleHoverEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.animationState && props.whileHover) node.animationState.setActive("whileHover", lifecycle === "Start");
	const callback = props["onHover" + lifecycle];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var HoverGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		this.unmount = hover(current, (_element, startEvent) => {
			handleHoverEvent(this.node, startEvent, "Start");
			return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
		});
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.isActive = false;
	}
	onFocus() {
		let isFocusVisible = false;
		/**
		* If this element doesn't match focus-visible then don't
		* apply whileHover. But, if matches throws that focus-visible
		* is not a valid selector then in that browser outline styles will be applied
		* to the element by default and we want to match that behaviour with whileFocus.
		*/
		try {
			isFocusVisible = this.node.current.matches(":focus-visible");
		} catch (e) {
			isFocusVisible = true;
		}
		if (!isFocusVisible || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", true);
		this.isActive = true;
	}
	onBlur() {
		if (!this.isActive || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", false);
		this.isActive = false;
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.current instanceof HTMLButtonElement && node.current.disabled) return;
	if (node.animationState && props.whileTap) node.animationState.setActive("whileTap", lifecycle === "Start");
	const callback = props["onTap" + (lifecycle === "End" ? "" : lifecycle)];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var PressGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		const { globalTapTarget, propagate } = this.node.props;
		this.unmount = press(current, (_element, startEvent) => {
			handlePressEvent(this.node, startEvent, "Start");
			return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
		}, {
			useGlobalTarget: globalTapTarget,
			stopPropagation: propagate?.tap === false
		});
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
/**
* Map an IntersectionHandler callback to an element. We only ever make one handler for one
* element, so even though these handlers might all be triggered by different
* observers, we can keep them in the same map.
*/
var observerCallbacks = /* @__PURE__ */ new WeakMap();
/**
* Multiple observers can be created for multiple element/document roots. Each with
* different settings. So here we store dictionaries of observers to each root,
* using serialised settings (threshold/margin) as lookup keys.
*/
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
	const callback = observerCallbacks.get(entry.target);
	callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
	entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
	const lookupRoot = root || document;
	/**
	* If we don't have an observer lookup map for this root, create one.
	*/
	if (!observers.has(lookupRoot)) observers.set(lookupRoot, {});
	const rootObservers = observers.get(lookupRoot);
	const key = JSON.stringify(options);
	/**
	* If we don't have an observer for this combination of root and settings,
	* create one.
	*/
	if (!rootObservers[key]) rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
		root,
		...options
	});
	return rootObservers[key];
}
function observeIntersection(element, options, callback) {
	const rootInteresectionObserver = initIntersectionObserver(options);
	observerCallbacks.set(element, callback);
	rootInteresectionObserver.observe(element);
	return () => {
		observerCallbacks.delete(element);
		rootInteresectionObserver.unobserve(element);
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
	some: 0,
	all: 1
};
var InViewFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.hasEnteredView = false;
		this.isInView = false;
	}
	startObserver() {
		this.stopObserver?.();
		const { viewport = {} } = this.node.getProps();
		const { root, margin: rootMargin, amount = "some", once } = viewport;
		const options = {
			root: root ? root.current : void 0,
			rootMargin,
			threshold: typeof amount === "number" ? amount : thresholdNames[amount]
		};
		const onIntersectionUpdate = (entry) => {
			const { isIntersecting } = entry;
			/**
			* If there's been no change in the viewport state, early return.
			*/
			if (this.isInView === isIntersecting) return;
			this.isInView = isIntersecting;
			/**
			* Handle hasEnteredView. If this is only meant to run once, and
			* element isn't visible, early return. Otherwise set hasEnteredView to true.
			*/
			if (once && !isIntersecting && this.hasEnteredView) return;
			else if (isIntersecting) this.hasEnteredView = true;
			if (this.node.animationState) this.node.animationState.setActive("whileInView", isIntersecting);
			/**
			* Use the latest committed props rather than the ones in scope
			* when this observer is created
			*/
			const { onViewportEnter, onViewportLeave } = this.node.getProps();
			const callback = isIntersecting ? onViewportEnter : onViewportLeave;
			callback && callback(entry);
		};
		this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver === "undefined") return;
		const { props, prevProps } = this.node;
		if ([
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(props, prevProps))) this.startObserver();
	}
	unmount() {
		this.stopObserver?.();
		this.hasEnteredView = false;
		this.isInView = false;
	}
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
	return (name) => viewport[name] !== prevViewport[name];
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} };
//#endregion
//#region node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /*@__PURE__*/ createMotionProxy({
	...animations,
	...gestureAnimations,
	...drag,
	...layout
}, createDomVisualElement);
//#endregion
//#region node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var { createContext: createContext$1 } = await importShared("react");
var ReorderContext = createContext$1(null);
//#endregion
//#region node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order, value, offset, velocity) {
	if (!velocity) return order;
	const index = order.findIndex((item) => item.value === value);
	if (index === -1) return order;
	const nextOffset = velocity > 0 ? 1 : -1;
	const nextItem = order[index + nextOffset];
	if (!nextItem) return order;
	const item = order[index];
	const nextLayout = nextItem.layout;
	const nextItemCenter = mixNumber$1(nextLayout.min, nextLayout.max, .5);
	if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) return moveItem(order, index, index + nextOffset);
	return order;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
var { forwardRef: forwardRef$3, useRef: useRef$2, useEffect: useEffect$4 } = await importShared("react");
function ReorderGroupComponent({ children, as = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
	const Component = useConstant(() => motion[as]);
	const order = [];
	const isReordering = useRef$2(false);
	const groupRef = useRef$2(null);
	const context = {
		axis,
		groupRef,
		registerItem: (value, layout) => {
			const idx = order.findIndex((entry) => value === entry.value);
			if (idx !== -1) order[idx].layout = layout[axis];
			else order.push({
				value,
				layout: layout[axis]
			});
			order.sort(compareMin);
		},
		updateOrder: (item, offset, velocity) => {
			if (isReordering.current) return;
			const newOrder = checkReorder(order, item, offset, velocity);
			if (order !== newOrder) {
				isReordering.current = true;
				const newValues = [...values];
				for (let i = 0; i < newOrder.length; i++) if (order[i].value !== newOrder[i].value) {
					const a = values.indexOf(order[i].value);
					const b = values.indexOf(newOrder[i].value);
					if (a !== -1 && b !== -1) [newValues[a], newValues[b]] = [newValues[b], newValues[a]];
					break;
				}
				onReorder(newValues);
			}
		}
	};
	useEffect$4(() => {
		isReordering.current = false;
	});
	const setRef = (element) => {
		groupRef.current = element;
		if (typeof externalRef === "function") externalRef(element);
		else if (externalRef) externalRef.current = element;
	};
	/**
	* Disable browser scroll anchoring on the group container.
	* When items reorder, scroll anchoring can cause the browser to adjust
	* the scroll position, which interferes with drag position calculations.
	*/
	const groupStyle = {
		overflowAnchor: "none",
		...props.style
	};
	return (0, import_jsx_runtime.jsx)(Component, {
		...props,
		style: groupStyle,
		ref: setRef,
		ignoreStrict: true,
		children: (0, import_jsx_runtime.jsx)(ReorderContext.Provider, {
			value: context,
			children
		})
	});
}
var ReorderGroup = /*@__PURE__*/ forwardRef$3(ReorderGroupComponent);
function compareMin(a, b) {
	return a.layout.min - b.layout.min;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var { useContext: useContext$2, useState: useState$6, useEffect: useEffect$3 } = await importShared("react");
/**
* Creates a `MotionValue` to track the state and velocity of a value.
*
* Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
*
* ```jsx
* export const MyComponent = () => {
*   const scale = useMotionValue(1)
*
*   return <motion.div style={{ scale }} />
* }
* ```
*
* @param initial - The initial state.
*
* @public
*/
function useMotionValue(initial) {
	const value = useConstant(() => motionValue(initial));
	/**
	* If this motion value is being used in static mode, like on
	* the Framer canvas, force components to rerender when the motion
	* value is updated.
	*/
	const { isStatic } = useContext$2(MotionConfigContext);
	if (isStatic) {
		const [, setLatest] = useState$6(initial);
		useEffect$3(() => value.on("change", setLatest), []);
	}
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
	/**
	* Initialise the returned motion value. This remains the same between renders.
	*/
	const value = useMotionValue(combineValues());
	/**
	* Create a function that will update the template motion value with the latest values.
	* This is pre-bound so whenever a motion value updates it can schedule its
	* execution in Framesync. If it's already been scheduled it won't be fired twice
	* in a single frame.
	*/
	const updateValue = () => value.set(combineValues());
	/**
	* Synchronously update the motion value with the latest values during the render.
	* This ensures that within a React render, the styles applied to the DOM are up-to-date.
	*/
	updateValue();
	/**
	* Subscribe to all motion values found within the template. Whenever any of them change,
	* schedule an update.
	*/
	useIsomorphicLayoutEffect(() => {
		const scheduleUpdate = () => frame.preRender(updateValue, false, true);
		const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
		return () => {
			subscriptions.forEach((unsubscribe) => unsubscribe());
			cancelFrame(updateValue);
		};
	});
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
	/**
	* Open session of collectMotionValues. Any MotionValue that calls get()
	* will be saved into this array.
	*/
	collectMotionValues.current = [];
	compute();
	const value = useCombineMotionValues(collectMotionValues.current, compute);
	/**
	* Synchronously close session of collectMotionValues.
	*/
	collectMotionValues.current = void 0;
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
	if (typeof input === "function") return useComputed(input);
	if (outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function") return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
	const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRangeOrMap, options);
	const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
	const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
	if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) result.accelerate = {
		...inputAccelerate,
		times: inputRangeOrTransformer,
		keyframes: outputRangeOrMap,
		isTransformed: true,
		...options?.ease ? { ease: options.ease } : {}
	};
	return result;
}
function useListTransform(values, transformer) {
	const latest = useConstant(() => []);
	return useCombineMotionValues(values, () => {
		latest.length = 0;
		const numValues = values.length;
		for (let i = 0; i < numValues; i++) latest[i] = values[i].get();
		return transformer(latest);
	});
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
	/**
	* Capture keys once to ensure hooks are called in consistent order.
	*/
	const keys = useConstant(() => Object.keys(outputMap));
	const output = useConstant(() => ({}));
	for (const key of keys) output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
	return output;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/Reorder/utils/auto-scroll.mjs
var threshold = 50;
var maxSpeed = 25;
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
var initialScrollLimits = /* @__PURE__ */ new WeakMap();
var activeScrollEdge = /* @__PURE__ */ new WeakMap();
var currentGroupElement = null;
function resetAutoScrollState() {
	if (currentGroupElement) {
		const scrollableAncestor = findScrollableAncestor(currentGroupElement, "y");
		if (scrollableAncestor) {
			activeScrollEdge.delete(scrollableAncestor);
			initialScrollLimits.delete(scrollableAncestor);
		}
		const scrollableAncestorX = findScrollableAncestor(currentGroupElement, "x");
		if (scrollableAncestorX && scrollableAncestorX !== scrollableAncestor) {
			activeScrollEdge.delete(scrollableAncestorX);
			initialScrollLimits.delete(scrollableAncestorX);
		}
		currentGroupElement = null;
	}
}
function isScrollableElement(element, axis) {
	const style = getComputedStyle(element);
	const overflow = axis === "x" ? style.overflowX : style.overflowY;
	const isDocumentScroll = element === document.body || element === document.documentElement;
	return overflowStyles.has(overflow) || isDocumentScroll;
}
function findScrollableAncestor(element, axis) {
	let current = element?.parentElement;
	while (current) {
		if (isScrollableElement(current, axis)) return current;
		current = current.parentElement;
	}
	return null;
}
function getScrollAmount(pointerPosition, scrollElement, axis) {
	const rect = scrollElement.getBoundingClientRect();
	const start = axis === "x" ? Math.max(0, rect.left) : Math.max(0, rect.top);
	const end = axis === "x" ? Math.min(window.innerWidth, rect.right) : Math.min(window.innerHeight, rect.bottom);
	const distanceFromStart = pointerPosition - start;
	const distanceFromEnd = end - pointerPosition;
	if (distanceFromStart < threshold) {
		const intensity = 1 - distanceFromStart / threshold;
		return {
			amount: -25 * intensity * intensity,
			edge: "start"
		};
	} else if (distanceFromEnd < threshold) {
		const intensity = 1 - distanceFromEnd / threshold;
		return {
			amount: maxSpeed * intensity * intensity,
			edge: "end"
		};
	}
	return {
		amount: 0,
		edge: null
	};
}
function autoScrollIfNeeded(groupElement, pointerPosition, axis, velocity) {
	if (!groupElement) return;
	currentGroupElement = groupElement;
	const scrollableAncestor = findScrollableAncestor(groupElement, axis);
	if (!scrollableAncestor) return;
	const { amount: scrollAmount, edge } = getScrollAmount(pointerPosition - (axis === "x" ? window.scrollX : window.scrollY), scrollableAncestor, axis);
	if (edge === null) {
		activeScrollEdge.delete(scrollableAncestor);
		initialScrollLimits.delete(scrollableAncestor);
		return;
	}
	const currentActiveEdge = activeScrollEdge.get(scrollableAncestor);
	const isDocumentScroll = scrollableAncestor === document.body || scrollableAncestor === document.documentElement;
	if (currentActiveEdge !== edge) {
		if (!(edge === "start" && velocity < 0 || edge === "end" && velocity > 0)) return;
		activeScrollEdge.set(scrollableAncestor, edge);
		const maxScroll = axis === "x" ? scrollableAncestor.scrollWidth - (isDocumentScroll ? window.innerWidth : scrollableAncestor.clientWidth) : scrollableAncestor.scrollHeight - (isDocumentScroll ? window.innerHeight : scrollableAncestor.clientHeight);
		initialScrollLimits.set(scrollableAncestor, maxScroll);
	}
	if (scrollAmount > 0) {
		const initialLimit = initialScrollLimits.get(scrollableAncestor);
		if ((axis === "x" ? isDocumentScroll ? window.scrollX : scrollableAncestor.scrollLeft : isDocumentScroll ? window.scrollY : scrollableAncestor.scrollTop) >= initialLimit) return;
	}
	if (axis === "x") if (isDocumentScroll) window.scrollBy({ left: scrollAmount });
	else scrollableAncestor.scrollLeft += scrollAmount;
	else if (isDocumentScroll) window.scrollBy({ top: scrollAmount });
	else scrollableAncestor.scrollTop += scrollAmount;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
var { forwardRef: forwardRef$2, useContext: useContext$1 } = await importShared("react");
function useDefaultMotionValue(value, defaultValue = 0) {
	return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItemComponent({ children, style = {}, value, as = "li", onDrag, onDragEnd, layout = true, ...props }, externalRef) {
	const Component = useConstant(() => motion[as]);
	const context = useContext$1(ReorderContext);
	const point = {
		x: useDefaultMotionValue(style.x),
		y: useDefaultMotionValue(style.y)
	};
	const zIndex = useTransform([point.x, point.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
	const { axis, registerItem, updateOrder, groupRef } = context;
	return (0, import_jsx_runtime.jsx)(Component, {
		drag: axis,
		...props,
		dragSnapToOrigin: true,
		style: {
			...style,
			x: point.x,
			y: point.y,
			zIndex
		},
		layout,
		onDrag: (event, gesturePoint) => {
			const { velocity, point: pointerPoint } = gesturePoint;
			updateOrder(value, point[axis].get(), velocity[axis]);
			autoScrollIfNeeded(groupRef.current, pointerPoint[axis], axis, velocity[axis]);
			onDrag && onDrag(event, gesturePoint);
		},
		onDragEnd: (event, gesturePoint) => {
			resetAutoScrollState();
			onDragEnd && onDragEnd(event, gesturePoint);
		},
		onLayoutMeasure: (measured) => {
			registerItem(value, measured);
		},
		ref: externalRef,
		ignoreStrict: true,
		children
	});
}
var ReorderItem = /*@__PURE__*/ forwardRef$2(ReorderItemComponent);
//#endregion
//#region extension/src/renderer/Components/CardIcons.tsx
function Image_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVG08krhc6L)",
					d: "M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGV0MXhbmY)",
					d: "M20.515 19.46A3.25 3.25 0 0 1 17.75 21H6.25a3.25 3.25 0 0 1-2.765-1.54l6.939-6.812l.135-.123a2.25 2.25 0 0 1 2.889.006l.128.117z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGqcdaMRYX)",
					d: "M16 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 9.567,
						x2: 11.594,
						y1: 12.003,
						y2: 21.477,
						id: "SVGV0MXhbmY",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#b3e0ff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#8cd0ff"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 15.2,
						y1: 5.556,
						x2: 16.661,
						y2: 10.816,
						id: "SVGqcdaMRYX",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#fdfdfd" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#b3e0ff"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						r: 1,
						cx: 0,
						cy: 0,
						id: "SVG08krhc6L",
						gradientUnits: "userSpaceOnUse",
						gradientTransform: "rotate(51.687 5.32 -7.765)scale(49.7729 45.2718)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .338,
							stopColor: "#0fafff"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .529,
							stopColor: "#367af2"
						})]
					})
				] })
			]
		})
	});
}
function Folder_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGPrmugbjO)",
					d: "M8 6.25A2.25 2.25 0 0 1 10.25 4h7.5A2.25 2.25 0 0 1 20 6.25v8.5A2.25 2.25 0 0 1 17.75 17h-7.5A2.25 2.25 0 0 1 8 14.75z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGdBuGNmjL)",
					d: "M8 6.25A2.25 2.25 0 0 1 10.25 4h7.5A2.25 2.25 0 0 1 20 6.25v8.5A2.25 2.25 0 0 1 17.75 17h-7.5A2.25 2.25 0 0 1 8 14.75z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGDSS2BeGC)",
					d: "M4 4.25A2.25 2.25 0 0 1 6.25 2h9a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 15.25 17h-9A2.25 2.25 0 0 1 4 14.75z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGl7J9xcou)",
					d: "M5.25 8A2.25 2.25 0 0 0 3 10.25v8.5A3.25 3.25 0 0 0 6.25 22h11.5A3.25 3.25 0 0 0 21 18.75v-1.5A2.25 2.25 0 0 0 18.75 15h-2.846a.75.75 0 0 1-.55-.24l-5.61-6.04A2.25 2.25 0 0 0 8.097 8z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 21.8,
						y1: 19.5,
						y2: 5.773,
						x2: 23.639,
						id: "SVGPrmugbjO",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#bb45ea" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#9c6cfe"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 20,
						x2: 17,
						y1: 8.5,
						y2: 8.5,
						id: "SVGdBuGNmjL",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .338,
							stopOpacity: 0,
							stopColor: "#5750e2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#5750e2"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 8,
						x1: 6.857,
						x2: 6.857,
						y2: 27.091,
						id: "SVGl7J9xcou",
						gradientUnits: "userSpaceOnUse",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: .241,
								stopColor: "#ffd638"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: .637,
								stopColor: "#fab500"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: .985,
								stopColor: "#ca6407"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						r: 1,
						cx: 0,
						cy: 0,
						id: "SVGDSS2BeGC",
						gradientUnits: "userSpaceOnUse",
						gradientTransform: "matrix(8.775 -11.5 18.53666 14.14428 8.05 14)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: .228,
								stopColor: "#2764e7"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: .685,
								stopColor: "#5cd1ff"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: 1,
								stopColor: "#6ce0ff"
							})
						]
					})
				] })
			]
		})
	});
}
function Code_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "url(#SVGE9DRbcVU)",
				d: "m8.086 18.61l5.996-14.004a1 1 0 0 1 1.878.678l-.04.11l-5.996 14.004a1 1 0 0 1-1.878-.677zl5.996-14.005zm-5.793-7.317l4-4a1 1 0 0 1 1.497 1.32l-.083.094L4.414 12l3.293 3.293a1 1 0 0 1-1.32 1.497l-.094-.083l-4-4a1 1 0 0 1-.083-1.32zl4-4zm14-4.001a1 1 0 0 1 1.32-.083l.093.083l4.001 4a1 1 0 0 1 .083 1.321l-.083.095l-4.001 3.995a1 1 0 0 1-1.497-1.32l.084-.095l3.292-3.289l-3.293-3.293a1 1 0 0 1 0-1.414"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				x1: 2.588,
				y1: 2.933,
				x2: 20.693,
				y2: 22.309,
				id: "SVGE9DRbcVU",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#c76efb" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: 1,
					stopColor: "#8b52f4"
				})]
			}) })]
		})
	});
}
function Bot_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGsatl3bRo)",
					d: "M17.753 14a2.25 2.25 0 0 1 2.25 2.25v.905A3.75 3.75 0 0 1 18.696 20C17.13 21.344 14.89 22.001 12 22.001s-5.128-.657-6.691-2a3.75 3.75 0 0 1-1.305-2.844v-.907A2.25 2.25 0 0 1 6.254 14z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGDzMmSUVC)",
					d: "M17.753 14a2.25 2.25 0 0 1 2.25 2.25v.905A3.75 3.75 0 0 1 18.696 20C17.13 21.344 14.89 22.001 12 22.001s-5.128-.657-6.691-2a3.75 3.75 0 0 1-1.305-2.844v-.907A2.25 2.25 0 0 1 6.254 14z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVG7PdDye0s)",
					d: "m12 2.5l-.102.007a.75.75 0 0 0-.648.743L11.243 5h1.5l.007-1.75l-.007-.102A.75.75 0 0 0 12 2.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGuJDvWcwX)",
					d: "M18 6.25A2.25 2.25 0 0 0 15.75 4h-7.5A2.25 2.25 0 0 0 6 6.25v3.5A2.25 2.25 0 0 0 8.25 12h7.5A2.25 2.25 0 0 0 18 9.75z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGoBTYocsf)",
					d: "M14.242 6.5a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGZjj8ncBg)",
					d: "M9.75 6.5a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 12.003,
						x2: 15.623,
						y1: 13.047,
						y2: 26.573,
						id: "SVGDzMmSUVC",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							stopOpacity: 0,
							stopColor: "#885edb"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#e362f8"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 2,
						y2: 3.871,
						x1: 11.209,
						x2: 12.984,
						id: "SVG7PdDye0s",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#8b52f4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#3d35b1"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 6.596,
						y2: 9.865,
						x1: 13.585,
						x2: 15.479,
						id: "SVGoBTYocsf",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#fdfdfd" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#f9dcfa"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 9.092,
						y1: 6.596,
						y2: 9.865,
						x2: 10.986,
						id: "SVGZjj8ncBg",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#fdfdfd" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#f9dcfa"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						r: 1,
						cx: 0,
						cy: 0,
						id: "SVGsatl3bRo",
						gradientUnits: "userSpaceOnUse",
						gradientTransform: "matrix(19.19176 11.26316 -17.94042 30.56942 .311 11.538)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#f08af4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: .535,
								stopColor: "#9c6cfe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: 1,
								stopColor: "#4e44db"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						r: 1,
						cx: 0,
						cy: 0,
						id: "SVGuJDvWcwX",
						gradientUnits: "userSpaceOnUse",
						gradientTransform: "matrix(15.82499 12.22856 -23.10104 29.89508 1.8 .571)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#f08af4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: .535,
								stopColor: "#9c6cfe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: 1,
								stopColor: "#4e44db"
							})
						]
					})
				] })
			]
		})
	});
}
function Chat_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					fill: "url(#SVGV4VKeb3S)",
					d: "M22 13.5a7.5 7.5 0 1 0-4.411 6.836c1.258.29 2.613.54 3.236.652a.996.996 0 0 0 1.153-1.17a68 68 0 0 0-.681-3.143A7.5 7.5 0 0 0 22 13.5M14.517 18h-.034z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					fill: "url(#SVGEg1SQ7ZX)",
					d: "M2 10.5a7.5 7.5 0 1 1 4.411 6.836c-1.258.29-2.613.54-3.236.652a.996.996 0 0 1-1.153-1.17a68 68 0 0 1 .681-3.143A7.5 7.5 0 0 1 2 10.5M9.483 15h.034z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					r: 1,
					cx: 0,
					cy: 0,
					id: "SVGV4VKeb3S",
					gradientUnits: "userSpaceOnUse",
					gradientTransform: "matrix(6.90278 8.0094 -8.01592 6.9084 11.027 10.005)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .63,
							stopColor: "#3d35b1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .85,
							stopColor: "#6553c9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#7660d3"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					x1: 2,
					y1: 3,
					y2: 18,
					x2: 17.003,
					id: "SVGEg1SQ7ZX",
					gradientUnits: "userSpaceOnUse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#0fafff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: 1,
						stopColor: "#2764e7"
					})]
				})] })
			]
		})
	});
}
function Cloud_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGGGkBpb5G)",
					d: "M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillOpacity: .3,
					fill: "url(#SVGfWl6seYt)",
					d: "M11 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillOpacity: .3,
					fill: "url(#SVGkgWfbcdO)",
					d: "M12 16a6 6 0 1 0-5.92-6.98Q6.287 9 6.5 9a4.5 4.5 0 0 1 3.881 6.779A6 6 0 0 0 12 16"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGncyoccSz)",
					d: "M12 16a6 6 0 1 0-5.92-6.98Q6.287 9 6.5 9a4.5 4.5 0 0 1 3.881 6.779A6 6 0 0 0 12 16"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillOpacity: .5,
					fill: "url(#SVGrWxTRcwo)",
					d: "M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 2.714,
						y1: 6.625,
						x2: 11.675,
						y2: 19.925,
						id: "SVGGGkBpb5G",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#0fafff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#367af2"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 2,
						x2: 8.067,
						y1: 10.542,
						y2: 15.912,
						id: "SVGfWl6seYt",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#fff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopOpacity: 0,
							stopColor: "#fcfcfc"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 8.146,
						x2: 9.739,
						y1: 4.675,
						y2: 12.946,
						id: "SVGkgWfbcdO",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#fff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopOpacity: 0,
							stopColor: "#fcfcfc"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						r: 1,
						cx: 0,
						cy: 0,
						id: "SVGncyoccSz",
						gradientUnits: "userSpaceOnUse",
						gradientTransform: "matrix(6.71887 -2.85 2.55285 6.01833 6.546 13.825)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .412,
							stopColor: "#2c87f5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopOpacity: 0,
							stopColor: "#2c87f5"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						r: 1,
						cx: 0,
						cy: 0,
						id: "SVGrWxTRcwo",
						gradientUnits: "userSpaceOnUse",
						gradientTransform: "matrix(7.70831 15.51136 -111.9801 55.64808 11.167 3.125)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .5,
							stopOpacity: 0,
							stopColor: "#dd3ce2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#dd3ce2"
						})]
					})
				] })
			]
		})
	});
}
function Database_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGXjZNuwPh)",
					d: "M18.328 7.117A7.6 7.6 0 0 0 20 6v12c0 2.21-3.582 4-8 4s-8-1.79-8-4V6c.502.45 1.084.823 1.672 1.117c1.697.848 3.936 1.33 6.328 1.33s4.63-.482 6.328-1.33"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillOpacity: .7,
					fill: "url(#SVGAzI8Wbbi)",
					d: "M18.328 7.117A7.6 7.6 0 0 0 20 6v12c0 2.21-3.582 4-8 4s-8-1.79-8-4V6c.502.45 1.084.823 1.672 1.117c1.697.848 3.936 1.33 6.328 1.33s4.63-.482 6.328-1.33"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGQe0qScNA)",
					d: "M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 7.777,
						y1: 2.396,
						x2: 16.435,
						y2: 20.577,
						id: "SVGXjZNuwPh",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#29c3ff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#367af2"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 7.965,
						x1: 14.476,
						x2: 17.647,
						y2: 23.721,
						id: "SVGAzI8Wbbi",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .533,
							stopOpacity: 0,
							stopColor: "#ff6ce8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#ff6ce8"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 26,
						y1: 14,
						x2: 16.755,
						y2: -2.828,
						id: "SVGQe0qScNA",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#58aafe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#6ce0ff"
						})]
					})
				] })
			]
		})
	});
}
function Document_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGaFQU4dZO)",
					d: "M6 22h12a2 2 0 0 0 2-2V9l-5-2l-2-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillOpacity: .5,
					fill: "url(#SVGKBDgydKg)",
					d: "M6 22h12a2 2 0 0 0 2-2V9l-5-2l-2-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGYLVeYfIb)",
					d: "M13 7.5V2l7 7h-5.5A1.5 1.5 0 0 1 13 7.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 2,
						x1: 15.2,
						y2: 18.87,
						x2: 16.822,
						id: "SVGaFQU4dZO",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#6ce0ff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#4894fe"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 4.917,
						y2: 7.833,
						x1: 16.488,
						x2: 14.738,
						id: "SVGYLVeYfIb",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#9ff0f9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#b3e0ff"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						r: 1,
						cx: 0,
						cy: 0,
						id: "SVGKBDgydKg",
						gradientUnits: "userSpaceOnUse",
						gradientTransform: "matrix(-8.66665 9.09357 -5.3691 -5.11703 20.667 2.625)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .362,
							stopColor: "#4a43cb"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopOpacity: 0,
							stopColor: "#4a43cb"
						})]
					})
				] })
			]
		})
	});
}
function Globe_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGiQCt3dKb)",
					d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					fill: "url(#SVGcxkzteKY)",
					d: "M9.115 2.422a9.6 9.6 0 0 0-.85 1.704c-.48 1.23-.838 2.723-1.049 4.374H2.63q-.271.725-.43 1.5h4.87a29 29 0 0 0 .088 5h-4.7q.246.78.61 1.5h4.297c.215 1.255.52 2.397.9 3.374c.246.63.53 1.205.85 1.704A10 10 0 0 0 12 22a10 10 0 0 0 2.885-.422a9.6 9.6 0 0 0 .85-1.704c.38-.977.685-2.119.9-3.374h4.298q.364-.72.61-1.5h-4.7a29 29 0 0 0 .088-5h4.87a10 10 0 0 0-.43-1.5h-4.587c-.21-1.651-.57-3.144-1.05-4.374a9.6 9.6 0 0 0-.849-1.704A10 10 0 0 0 12 2a10 10 0 0 0-2.885.422M8.73 8.5c.2-1.47.522-2.774.934-3.829c.36-.92.77-1.612 1.194-2.062C11.278 2.163 11.663 2 12 2s.723.163 1.143.609c.423.45.835 1.142 1.194 2.062c.412 1.055.734 2.36.934 3.829zM12 22c.338 0 .723-.163 1.143-.609c.423-.45.835-1.142 1.194-2.062c.316-.81.58-1.765.775-2.829H8.888c.196 1.064.46 2.02.775 2.829c.36.92.77 1.612 1.194 2.062c.42.446.805.609 1.143.609M8.5 12c0 1.048.058 2.055.166 3h6.668a27 27 0 0 0 .094-5H8.573a27 27 0 0 0-.073 2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					r: 1,
					cx: 0,
					cy: 0,
					id: "SVGcxkzteKY",
					gradientUnits: "userSpaceOnUse",
					gradientTransform: "rotate(-135.338 12.654 4.738)scale(16.0089 16.0078)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#25a2f0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: .974,
						stopColor: "#3bd5ff"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					x1: 6.444,
					y1: 5.333,
					x2: 20.889,
					y2: 18.667,
					id: "SVGiQCt3dKb",
					gradientUnits: "userSpaceOnUse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#29c3ff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: 1,
						stopColor: "#2052cb"
					})]
				})] })
			]
		})
	});
}
function Heart_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "url(#SVGEr4iYdiH)",
				d: "m12.82 5.58l-.821.822l-.823-.823a5.375 5.375 0 0 0-7.602 7.601l7.896 7.896a.75.75 0 0 0 1.06 0l7.902-7.897a5.38 5.38 0 0 0-7.612-7.6"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				x2: 8.135,
				x1: -2.376,
				y1: -.938,
				y2: 21.378,
				id: "SVGEr4iYdiH",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#f97dbd" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: 1,
					stopColor: "#d7257d"
				})]
			}) })]
		})
	});
}
function Home_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M9 13h6v8H9z",
					fill: "url(#SVGaNP9XdIb)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGB90o1Tkk)",
					d: "M13.45 4.533a2.25 2.25 0 0 0-2.9 0L3.8 10.228a2.25 2.25 0 0 0-.8 1.72v7.305c0 .966.784 1.75 1.75 1.75H9.5V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v5.753h4.75a1.75 1.75 0 0 0 1.75-1.75v-7.305a2.25 2.25 0 0 0-.8-1.72z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					fill: "url(#SVGBRlFlcTU)",
					d: "M12.804 2.299a1.23 1.23 0 0 0-1.608 0l-8.789 7.63a1.167 1.167 0 0 0-.102 1.672a1.23 1.23 0 0 0 1.711.1L12 4.771l7.984 6.93c.5.435 1.266.39 1.71-.1a1.167 1.167 0 0 0-.101-1.673z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					fill: "url(#SVGBRlFlcTU)",
					d: "M11.196 2.299a1.23 1.23 0 0 1 1.608 0l8.789 7.63c.5.434.546 1.183.102 1.672a1.23 1.23 0 0 1-1.711.1L12 4.771L4.016 11.7a1.23 1.23 0 0 1-1.71-.1a1.167 1.167 0 0 1 .101-1.673z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 12,
						y1: 13,
						x2: 6.707,
						y2: 21.825,
						id: "SVGaNP9XdIb",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#944600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#cd8e02"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 4.718,
						y1: 3.172,
						x2: 21.568,
						y2: 17.673,
						id: "SVGB90o1Tkk",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#ffd394" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#ffb357"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 8.768,
						x2: 13.162,
						y1: -.375,
						y2: 11.505,
						id: "SVGBRlFlcTU",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#ff921f" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#eb4824"
						})]
					})
				] })
			]
		})
	});
}
function Megaphone_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					fill: "url(#SVGynQK5cnD)",
					d: "M8 18a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillOpacity: .8,
					fillRule: "evenodd",
					clipRule: "evenodd",
					fill: "url(#SVGyK6pKbkH)",
					d: "M8 18a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGEIYkHdfr)",
					d: "M9.076 4.318a2.325 2.325 0 0 1 3.795-.577l7.006 7.506a2.325 2.325 0 0 1-.758 3.712L6.968 20.343a1.8 1.8 0 0 1-1.964-.337L3.565 18.65a1.8 1.8 0 0 1-.387-2.091z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillOpacity: .8,
					fill: "url(#SVGP0BGZbDc)",
					d: "M9.076 4.318a2.325 2.325 0 0 1 3.795-.577l7.006 7.506a2.325 2.325 0 0 1-.758 3.712L6.968 20.343a1.8 1.8 0 0 1-1.964-.337L3.565 18.65a1.8 1.8 0 0 1-.387-2.091z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGloWD2dib)",
					d: "M17.212 2.237a.75.75 0 0 0-1.423-.474l-.75 2.249a.75.75 0 0 0 1.423.474zm4.568-.017a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M19 8.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 17.714,
						x2: 14.271,
						y1: 27.143,
						y2: 18.684,
						id: "SVGynQK5cnD",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#43e5ca" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#0c74a1"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 10.286,
						x2: 13.717,
						y1: 15.143,
						y2: 23.713,
						id: "SVGyK6pKbkH",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .08,
							stopColor: "#e362f8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .656,
							stopOpacity: 0,
							stopColor: "#96f"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 3.625,
						y1: 6.282,
						x2: 15.699,
						y2: 18.832,
						id: "SVGEIYkHdfr",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#43e5ca" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#1384b1"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 11.752,
						x2: 19.408,
						y1: 12.841,
						y2: 25.419,
						id: "SVGP0BGZbDc",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							stopOpacity: 0,
							stopColor: "#96f"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .63,
							stopColor: "#e362f8"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						r: 1,
						cx: 0,
						cy: 0,
						id: "SVGloWD2dib",
						gradientUnits: "userSpaceOnUse",
						gradientTransform: "matrix(16.15331 -16.69065 16.69331 16.15589 7.212 17.047)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .623,
							stopColor: "#fb5937"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .935,
							stopColor: "#ffa43d"
						})]
					})
				] })
			]
		})
	});
}
function Gem_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#d9d9d9",
					d: "M17.999 3a.75.75 0 0 1 .605.306l.055.087l3.263 6.028l.038.093l.012.04l.02.102l.006.094a.8.8 0 0 1-.027.2l-.024.062H15.5L13.5 3z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGYOCHuedn)",
					d: "M17.999 3a.75.75 0 0 1 .605.306l.055.087l3.263 6.028l.038.093l.012.04l.02.102l.006.094a.8.8 0 0 1-.027.2l-.024.062H15.5L13.5 3z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#d9d9d9",
					d: "M2.006 9.843L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057l3.25-6a.75.75 0 0 1 .557-.386L5.999 3l4.501.007L8.25 10l-6.21-.009a1 1 0 0 1-.034-.148"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVG1VmhhcZd)",
					d: "M2.006 9.843L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057l3.25-6a.75.75 0 0 1 .557-.386L5.999 3l4.501.007L8.25 10l-6.21-.009a1 1 0 0 1-.034-.148"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGFYjFJeYC)",
					d: "m21.96 9.514l-.038-.093L21.694 9h-5.928l-.769 1.5L12 18.187V21l.125-.01l.077-.017l.098-.033a.7.7 0 0 0 .297-.232l9.234-10.487l.04-.053l.016-.024l.038-.069l.047-.126a.8.8 0 0 0 .027-.199l-.006-.094l-.02-.102z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#a9a9a9",
					d: "m12 21l-.101-.006l-.118-.026a.7.7 0 0 1-.174-.076l-.009-.007a.7.7 0 0 1-.13-.104l-9.29-10.546l-.026-.032l-.04-.059a.75.75 0 0 1-.106-.301L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057L2.303 9h6.04l.655 1.5l3 7.687z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGluppNdXo)",
					d: "m12 21l-.101-.006l-.118-.026a.7.7 0 0 1-.174-.076l-.009-.007a.7.7 0 0 1-.13-.104l-9.29-10.546l-.026-.032l-.04-.059a.75.75 0 0 1-.106-.301L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057L2.303 9h6.04l.655 1.5l3 7.687z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#7c7a7a",
					d: "M9.286 3.521A.75.75 0 0 1 10 3h4a.75.75 0 0 1 .714.521L16.628 9.5H7.373z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGYbSuYXMy)",
					d: "M9.286 3.521A.75.75 0 0 1 10 3h4a.75.75 0 0 1 .714.521L16.628 9.5H7.373z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#3f3f3f",
					d: "m7.533 9l-.247.771a.75.75 0 0 0 .015.502l4 10.25a.75.75 0 0 0 1.398 0l4-10.25a.75.75 0 0 0 .015-.502L16.468 9z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "url(#SVGDHbB3cmm)",
					d: "m7.533 9l-.247.771a.75.75 0 0 0 .015.502l4 10.25a.75.75 0 0 0 1.398 0l4-10.25a.75.75 0 0 0 .015-.502L16.468 9z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fillOpacity: .7,
					fill: "url(#SVGuNsKwdNU)",
					d: "M17.999 3a.75.75 0 0 1 .605.306l.055.087l3.263 6.028l.038.093l.012.04l.02.102l.006.094a.8.8 0 0 1-.027.2l-.047.125l-.038.069a1 1 0 0 1-.075.102l.06-.078l-.025.035l-9.25 10.505a.7.7 0 0 1-.297.232l-.098.033l-.078.017L12 21l-.1-.006l-.118-.026a.7.7 0 0 1-.174-.076l-.009-.007a.7.7 0 0 1-.13-.104l-9.29-10.546l-.026-.032l-.04-.059a.75.75 0 0 1-.106-.301L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057l3.25-6a.75.75 0 0 1 .557-.386L5.999 3z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 3,
						x1: 16.535,
						x2: 21.091,
						y2: 13.647,
						id: "SVGYOCHuedn",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#0fafff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#102784"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: 9.286,
						x2: 5.308,
						y1: .083,
						y2: 8.955,
						id: "SVG1VmhhcZd",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#9ff0f9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#29c3ff"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 3,
						x1: 24.351,
						x2: 13.462,
						y2: 19.603,
						id: "SVGFYjFJeYC",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#1b44b1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#2052cb"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 6.6,
						x1: 3.765,
						x2: 11.05,
						y2: 20.884,
						id: "SVGluppNdXo",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#0094f0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#6ce0ff"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y1: 3,
						x1: 12,
						x2: 12,
						y2: 11.125,
						id: "SVGYbSuYXMy",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#3bd5ff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#367af2"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						y2: 21,
						y1: 4.8,
						x1: 11.994,
						x2: 11.994,
						id: "SVGDHbB3cmm",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#2052cb" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#0fafff"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						x1: -.031,
						x2: 15.123,
						y1: -13.95,
						y2: 22.799,
						id: "SVGuNsKwdNU",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: .533,
							stopOpacity: 0,
							stopColor: "#ff6ce8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: 1,
							stopColor: "#ff6ce8"
						})]
					})
				] })
			]
		})
	});
}
function Star_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "url(#SVGNtR7nbFe)",
				d: "M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777l5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72l.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25l-3.815-3.72c-.801-.78-.359-2.142.748-2.302L8.43 7.88z"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				y2: 2.53,
				x2: 1.427,
				x1: 21.994,
				y1: 21.928,
				id: "SVGNtR7nbFe",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#ff6f47" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: 1,
					stopColor: "#ffcd0f"
				})]
			}) })]
		})
	});
}
function Wrench_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		width: "1em",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "url(#SVGNdDgEeMo)",
				d: "M16.5 2a5.5 5.5 0 0 0-5.348 6.789L2.841 17.1a2.871 2.871 0 1 0 4.06 4.06l8.313-8.311q.621.15 1.286.151a5.5 5.5 0 0 0 5.218-7.245a.75.75 0 0 0-1.242-.292l-2.444 2.444a.75.75 0 0 1-1.06 0l-.879-.878a.75.75 0 0 1 0-1.06l2.445-2.445a.75.75 0 0 0-.293-1.241A5.5 5.5 0 0 0 16.5 2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				y1: 3.249,
				x1: 10.128,
				x2: 13.694,
				y2: 22.707,
				id: "SVGNdDgEeMo",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#2bdabe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: 1,
					stopColor: "#0067bf"
				})]
			}) })]
		})
	});
}
var CardIcons = {
	folder: Folder_Icon,
	document: Document_Icon,
	image: Image_Icon,
	code: Code_Icon,
	bot: Bot_Icon,
	chat: Chat_Icon,
	cloud: Cloud_Icon,
	database: Database_Icon,
	globe: Globe_Icon,
	heart: Heart_Icon,
	home: Home_Icon,
	megaphone: Megaphone_Icon,
	gem: Gem_Icon,
	star: Star_Icon,
	wrench: Wrench_Icon
};
var CardIconsList = Object.keys(CardIcons);
function CardIconById(id) {
	if (!id) return Star_Icon;
	return CardIcons[id] || Star_Icon;
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/AddToCategories.tsx
var { Checkbox: Checkbox$1 } = await importShared("@heroui/react");
var { useMemo: useMemo$7 } = await importShared("react");
var { useDispatch: useDispatch$12 } = await importShared("react-redux");
var { useSelector: useSelector$9 } = await importShared("react-redux");
function AddToCategories() {
	const dispatch = useDispatch$12();
	const editingCard = useSelector$9(selectEditingCard);
	const categories = useMemo$7(() => editingCard?.categories, [editingCard]);
	const handleCategoryChange = (id, value) => {
		dispatch(reducerActions.setCategories({
			id,
			value
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-3 gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
				id: "pinned",
				isSelected: categories?.pinned || false,
				onChange: (value) => handleCategoryChange("pinned", value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox$1.Content, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Control, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Indicator, {}) }), "Pinned"] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
				id: "recentlyUsed",
				isSelected: categories?.recentlyUsed || false,
				onChange: (value) => handleCategoryChange("recentlyUsed", value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox$1.Content, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Control, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Indicator, {}) }), "Recently Used"] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
				id: "all",
				isSelected: categories?.all || false,
				onChange: (value) => handleCategoryChange("all", value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox$1.Content, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Control, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Indicator, {}) }), "All"] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
				id: "image",
				isSelected: categories?.image || false,
				onChange: (value) => handleCategoryChange("image", value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox$1.Content, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Control, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Indicator, {}) }), "Image Generation"] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
				id: "text",
				isSelected: categories?.text || false,
				onChange: (value) => handleCategoryChange("text", value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox$1.Content, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Control, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Indicator, {}) }), "Text Generation"] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
				id: "audio",
				isSelected: categories?.audio || false,
				onChange: (value) => handleCategoryChange("audio", value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox$1.Content, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Control, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1.Indicator, {}) }), "Audio Generation"] })
			})
		]
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/CardDetails.tsx
var { Button: Button$7, Input: Input$3, TextArea } = await importShared("@heroui/react");
var { useEffect: useEffect$2, useRef: useRef$1, useState: useState$5 } = await importShared("react");
var { useDispatch: useDispatch$11 } = await importShared("react-redux");
var { useSelector: useSelector$8 } = await importShared("react-redux");
function CardDetails() {
	const dispatch = useDispatch$11();
	const editingCard = useSelector$8(selectEditingCard);
	const [title, setTitle] = useState$5(editingCard?.title || "");
	const [desc, setDesc] = useState$5(editingCard?.description || "");
	const debounceTimerRef = useRef$1(null);
	useEffect$2(() => {
		return () => {
			if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
		};
	}, []);
	const changeIcon = (icon) => {
		dispatch(reducerActions.setIcon(icon));
	};
	const isFirstTitleRender = useRef$1(true);
	const isFirstDescRender = useRef$1(true);
	useEffect$2(() => {
		if (isFirstTitleRender.current) {
			isFirstTitleRender.current = false;
			return;
		}
		if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
		debounceTimerRef.current = setTimeout(() => {
			dispatch(reducerActions.setTitle(title));
		}, 150);
	}, [title]);
	useEffect$2(() => {
		if (isFirstDescRender.current) {
			isFirstDescRender.current = false;
			return;
		}
		if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
		debounceTimerRef.current = setTimeout(() => {
			dispatch(reducerActions.setDescription(desc));
		}, 150);
	}, [desc]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-2 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$3, {
				value: title || "",
				placeholder: "Card Title (required)",
				onChange: (e) => setTitle(e.target.value),
				fullWidth: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: desc || "",
				onChange: (e) => setDesc(e.target.value),
				placeholder: "Card Description (optional)",
				fullWidth: true
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col items-start justify-center gap-y-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-row flex-wrap gap-2",
				children: CardIconsList.map((icon) => {
					const Target = CardIconById(icon);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$7, {
						size: "lg",
						variant: "ghost",
						onPress: () => changeIcon(icon),
						className: `size-20 ${editingCard?.icon === icon ? "bg-accent-soft-hover" : ""}`,
						isIconOnly: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-14" })
					}, icon);
				})
			})
		})]
	});
}
//#endregion
//#region src/renderer/shared/assets/icons/index.tsx
function Terminal_Icon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...props,
		fill: "none",
		height: "1em",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeWidth: "2.5",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5.46967 7.46967C5.17678 7.17678 5.17678 6.7019 5.46967 6.40901C5.76256 6.11612 6.23744 6.11612 6.53033 6.40901L11.5303 11.409C11.8232 11.7019 11.8232 12.1768 11.5303 12.4697L6.53033 17.4697C6.23744 17.7626 5.76256 17.7626 5.46967 17.4697C5.17678 17.1768 5.17678 16.7019 5.46967 16.409L9.93934 11.9393L5.46967 7.46967Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			opacity: "0.5",
			fill: "currentColor",
			d: "M13.5 16C13.5 15.1716 14.1716 14.5 15 14.5H19C19.8284 14.5 20.5 15.1716 20.5 16C20.5 16.8284 19.8284 17.5 19 17.5H15C14.1716 17.5 13.5 16.8284 13.5 16Z"
		})]
	});
}
//#endregion
//#region node_modules/@solar-icons/react-perf/dist/icons/video/Bold/Play.mjs
var { forwardRef: t } = await importShared("react");
var r = t((t, r) => (0, import_jsx_runtime.jsx)(r$17, {
	ref: r,
	...t,
	children: (0, import_jsx_runtime.jsx)(`path`, {
		d: `M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z`,
		fill: `currentColor`
	})
}));
r.displayName = `Play`;
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/CardType.tsx
var { Description: Description$1, Label: Label$2, ListBox, Select } = await importShared("@heroui/react");
var { useMemo: useMemo$6 } = await importShared("react");
var { useDispatch: useDispatch$10 } = await importShared("react-redux");
var { useSelector: useSelector$7 } = await importShared("react-redux");
function CardType() {
	const dispatch = useDispatch$10();
	const editingCard = useSelector$7(selectEditingCard);
	const cardType = useMemo$6(() => editingCard?.cardType || "terminal_browser", [editingCard]);
	const onSelectionChange = (key) => {
		if (!key || typeof key === "number") return;
		dispatch(reducerActions.setCardType(key));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-y-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value: cardType,
			onChange: onSelectionChange,
			placeholder: "Select Card Type",
			fullWidth: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$2, { children: "Select the card type that fits your needs:" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select.Trigger, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select.Value, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select.Indicator, {})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select.Popover, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListBox, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListBox.Item, {
						id: "executable",
						textValue: "Executable",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label$2, {
								className: "flex items-center gap-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {}), "Executable"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description$1, { children: "Run and manage a program" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBox.ItemIndicator, {})]
					}, "executable"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListBox.Item, {
						id: "terminal_browser",
						textValue: "Terminal & Browser",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label$2, {
								className: "flex items-center gap-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-row items-center gap-x-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal_Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$12, {})]
								}), "Terminal & Browser"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description$1, { children: "Open a terminal and a browser simultaneously." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBox.ItemIndicator, {})]
					}, "terminal_browser"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListBox.Item, {
						id: "browser",
						textValue: "Browser",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label$2, {
								className: "flex items-center gap-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$12, {}), "Browser"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description$1, { children: "Open a browser with a custom URL." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBox.ItemIndicator, {})]
					}, "browser"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListBox.Item, {
						id: "terminal",
						textValue: "Terminal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label$2, {
								className: "flex items-center gap-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal_Icon, {}), "Terminal"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description$1, { children: "Open a terminal to run custom commands or scripts." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBox.ItemIndicator, {})]
					}, "terminal")
				] }) })
			]
		})
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var { createContext, useContext, useMemo: useMemo$5, createElement: createElement$2 } = await importShared("react");
var LucideContext = createContext({});
var useLucideContext = () => useContext(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var { forwardRef: forwardRef$1, createElement: createElement$1 } = await importShared("react");
var Icon = forwardRef$1(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return createElement$1("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => createElement$1(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var { forwardRef, createElement } = await importShared("react");
var createLucideIcon = (iconName, iconNode) => {
	const Component = forwardRef(({ className, ...props }, ref) => createElement(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var GripVertical = createLucideIcon("grip-vertical", [
	["circle", {
		cx: "9",
		cy: "12",
		r: "1",
		key: "1vctgf"
	}],
	["circle", {
		cx: "9",
		cy: "5",
		r: "1",
		key: "hp0tcf"
	}],
	["circle", {
		cx: "9",
		cy: "19",
		r: "1",
		key: "fkjjf6"
	}],
	["circle", {
		cx: "15",
		cy: "12",
		r: "1",
		key: "1tmaij"
	}],
	["circle", {
		cx: "15",
		cy: "5",
		r: "1",
		key: "19l28e"
	}],
	["circle", {
		cx: "15",
		cy: "19",
		r: "1",
		key: "f4zoj3"
	}]
]);
/**
* @license lucide-react v1.21.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/EnvConfig.tsx
var { Button: Button$6, Input: Input$2 } = await importShared("@heroui/react");
var { useState: useState$4 } = await importShared("react");
var { useDispatch: useDispatch$9, useSelector: useSelector$6 } = await importShared("react-redux");
function EnvConfig() {
	const dispatch = useDispatch$9();
	const env = useSelector$6(selectEditingCard)?.env || [];
	const [newKey, setNewKey] = useState$4("");
	const [newValue, setNewValue] = useState$4("");
	const handleAdd = () => {
		if (newKey.trim()) {
			dispatch(reducerActions.addEnv({
				key: newKey.trim(),
				value: newValue
			}));
			setNewKey("");
			setNewValue("");
		}
	};
	const handleRemove = (index) => {
		dispatch(reducerActions.removeEnv(index));
	};
	const handleUpdate = (index, key, value) => {
		dispatch(reducerActions.updateEnv({
			index,
			key,
			value
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-y-4",
		children: [env.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-y-2",
			children: env.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-x-2 w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$2, {
						value: item.key,
						className: "w-1/3",
						placeholder: "KEY (e.g., PORT)",
						onChange: (e) => handleUpdate(index, e.target.value, item.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$2, {
						value: item.value,
						className: "flex-1",
						placeholder: "VALUE",
						onChange: (e) => handleUpdate(index, item.key, e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$6, {
						size: "sm",
						variant: "danger-soft",
						onPress: () => handleRemove(index),
						isIconOnly: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$2, { className: "size-4" })
					})
				]
			}, index))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-x-2 w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$2, {
					value: newKey,
					className: "w-1/3",
					placeholder: "New Key (e.g., NODE_ENV)",
					onChange: (e) => setNewKey(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$2, {
					onKeyDown: (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							handleAdd();
						}
					},
					value: newValue,
					className: "flex-1",
					placeholder: "Value (e.g., production)",
					onChange: (e) => setNewValue(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$6, {
					size: "sm",
					variant: "tertiary",
					onPress: handleAdd,
					isIconOnly: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
				})
			]
		})]
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/AddExe.tsx
var { Button: Button$5 } = await importShared("@heroui/react");
var { useState: useState$3 } = await importShared("react");
var { useDispatch: useDispatch$8 } = await importShared("react-redux");
function AddExe() {
	const dispatch = useDispatch$8();
	const [isLoading, setIsLoading] = useState$3(false);
	const handleAdd = () => {
		setIsLoading(true);
		filesIpc.openDlg({ properties: ["openFile"] }).then((action) => {
			if (action) dispatch(reducerActions.addAction({
				action,
				type: "exe"
			}));
			setIsLoading(false);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$5, {
		onPress: handleAdd,
		isPending: isLoading,
		fullWidth: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {}), "Add Executable"]
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/AddScript.tsx
var { Button: Button$4 } = await importShared("@heroui/react");
var { useState: useState$2 } = await importShared("react");
var { useDispatch: useDispatch$7 } = await importShared("react-redux");
function AddScript() {
	const dispatch = useDispatch$7();
	const [isLoading, setIsLoading] = useState$2(false);
	const handleAdd = () => {
		setIsLoading(true);
		filesIpc.openDlg({ properties: ["openFile"] }).then((action) => {
			if (action) {
				const lastSeparator = Math.max(action.lastIndexOf("/"), action.lastIndexOf("\\"));
				if (lastSeparator > 0) {
					const directory = action.substring(0, lastSeparator);
					dispatch(reducerActions.addAction({
						action: `cd "${directory}"`,
						type: "command"
					}));
				}
				dispatch(reducerActions.addAction({
					action,
					type: "script"
				}));
			}
			setIsLoading(false);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$4, {
		onPress: handleAdd,
		isPending: isLoading,
		fullWidth: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$8, {}), "Add Script"]
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/ExecuteActions.tsx
var { Button: Button$3, ButtonGroup: ButtonGroup$1, Input: Input$1, InputGroup } = await importShared("@heroui/react");
var { useMemo: useMemo$4, useState: useState$1 } = await importShared("react");
var { useDispatch: useDispatch$6 } = await importShared("react-redux");
var { useSelector: useSelector$5 } = await importShared("react-redux");
function ExecuteActions() {
	const dispatch = useDispatch$6();
	const [commandInput, setCommandInput] = useState$1("");
	const editingCard = useSelector$5(selectEditingCard);
	const [addingFile, setAddingFile] = useState$1(false);
	const [addingFolder, setAddingFolder] = useState$1(false);
	const [addingCdFolder, setAddingCdFolder] = useState$1(false);
	const [editingIndex, setEditingIndex] = useState$1(null);
	const [editingValue, setEditingValue] = useState$1("");
	const actions = useMemo$4(() => editingCard?.actions || [], [editingCard]);
	const cardType = useMemo$4(() => editingCard?.cardType || [], [editingCard]);
	const handleAddCommand = () => {
		if (commandInput.trim()) {
			dispatch(reducerActions.addAction({
				action: commandInput,
				type: "command"
			}));
			setCommandInput("");
		}
	};
	const handleCommandKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleAddCommand();
		}
	};
	const handleRemoveCommand = (indexToRemove) => {
		dispatch(reducerActions.removeAction(indexToRemove));
	};
	const handleStartEdit = (index, currentValue) => {
		setEditingIndex(index);
		setEditingValue(currentValue);
	};
	const handleSaveEdit = () => {
		if (editingIndex !== null && editingValue.trim()) dispatch(reducerActions.updateAction({
			index: editingIndex,
			newAction: editingValue.trim()
		}));
		setEditingIndex(null);
		setEditingValue("");
	};
	const handleCancelEdit = () => {
		setEditingIndex(null);
		setEditingValue("");
	};
	const handleEditKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSaveEdit();
		} else if (e.key === "Escape") {
			e.preventDefault();
			handleCancelEdit();
		}
	};
	const onReorder = (items) => {
		const newOrder = items.map((actionName) => actions.find((action) => action.action === actionName));
		if (newOrder.every((item) => item !== void 0)) dispatch(reducerActions.setActions(newOrder));
	};
	const handleAddFile = () => {
		setAddingFile(true);
		filesIpc.openDlg({ properties: ["openFile"] }).then((action) => {
			if (action) dispatch(reducerActions.addAction({
				action,
				type: "open"
			}));
			setAddingFile(false);
		});
	};
	const handleAddFolder = () => {
		setAddingFolder(true);
		filesIpc.openDlg({ properties: ["openDirectory"] }).then((action) => {
			if (action) dispatch(reducerActions.addAction({
				action,
				type: "open"
			}));
			setAddingFolder(false);
		});
	};
	const handleAddCdFolder = () => {
		setAddingCdFolder(true);
		filesIpc.openDlg({ properties: ["openDirectory"] }).then((action) => {
			if (action) dispatch(reducerActions.addAction({
				action: `cd "${action}"`,
				type: "command"
			}));
			setAddingCdFolder(false);
		});
	};
	const renderBody = (item, index) => {
		switch (item.type) {
			case "exe":
			case "script": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [index + 1, "."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$1, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-full text-sm ml-1.5 truncate",
					children: item.action
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$3, {
					size: "sm",
					className: "shrink-0",
					variant: "danger-soft",
					onPress: () => handleRemoveCommand(index),
					isIconOnly: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$2, { className: "size-4" })
				})
			] });
			case "open": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [index + 1, "."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$5, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-full text-sm ml-1.5 truncate",
					children: item.action
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$3, {
					size: "sm",
					className: "shrink-0",
					variant: "danger-soft",
					onPress: () => handleRemoveCommand(index),
					isIconOnly: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$2, { className: "size-4" })
				})
			] });
			case "command": return editingIndex === index ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [index + 1, "."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$8, { className: "shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
					value: editingValue,
					onBlur: handleSaveEdit,
					onKeyDown: handleEditKeyDown,
					onChange: (e) => setEditingValue(e.target.value),
					fullWidth: true,
					autoFocus: true
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [index + 1, "."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$8, { className: "shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-full truncate bg-surface-secondary py-1.5 px-2 rounded-full font-JetBrainsMono",
					children: item.action
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$3, {
					size: "sm",
					variant: "tertiary",
					className: "shrink-0",
					onPress: () => handleStartEdit(index, item.action),
					isIconOnly: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$7, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$3, {
					size: "sm",
					className: "shrink-0",
					variant: "danger-soft",
					onPress: () => handleRemoveCommand(index),
					isIconOnly: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$2, { className: "size-4" })
				})
			] });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full flex flex-row gap-x-4 items-center justify-center",
		children: [cardType === "executable" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddExe, {}) : cardType === "terminal_browser" || cardType === "terminal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddScript, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonGroup$1, {
			variant: "secondary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$3, {
					isPending: addingFile,
					onPress: handleAddFile,
					children: [!addingFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$10, {}), "Add File"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$3, {
					isPending: addingFolder,
					onPress: handleAddFolder,
					children: [!addingFolder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$9, {}), "Add Folder"]
				}),
				(cardType === "terminal_browser" || cardType === "terminal") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$3, {
					isPending: addingCdFolder,
					onPress: handleAddCdFolder,
					children: [!addingCdFolder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$9, {}), "CD Folder"]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [(cardType === "terminal_browser" || cardType === "terminal") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-x-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, {
			fullWidth: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroup.Prefix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal_Icon, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroup.Input, {
				value: commandInput,
				onKeyDown: handleCommandKeyDown,
				placeholder: "Enter command and press Enter...",
				onChange: (e) => setCommandInput(e.target.value)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$3, {
			variant: "tertiary",
			onPress: handleAddCommand,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add"]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "overflow-hidden",
		exit: {
			opacity: 0,
			height: 0,
			marginTop: 0
		},
		initial: {
			opacity: 0,
			height: 0,
			marginTop: 0
		},
		animate: {
			opacity: 1,
			height: "auto",
			marginTop: "1rem"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReorderGroup, {
			axis: "y",
			onReorder,
			className: "flex flex-col gap-y-2 p-1",
			values: actions.map((item) => item.action),
			children: actions.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReorderItem, {
				className: "rounded-full bg-surface shadow-surface cursor-grab active:cursor-grabbing flex flex-row items-center gap-x-2 p-1.5 px-2",
				value: item.action,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "text-muted shrink-0 size-4" }), renderBody(item, index)]
			}, item.action))
		})
	}) })] })] });
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/FormSection.tsx
function FormSection({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm font-base text-semi-muted",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-y-4 rounded-3xl bg-surface-secondary p-4",
			children
		})]
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/NewCard.tsx
var { Card: Card$1 } = await importShared("@heroui/react");
var { useDispatch: useDispatch$5 } = await importShared("react-redux");
function NewCard() {
	const dispatch = useDispatch$5();
	const handleCreateNew = () => dispatch(reducerActions.addCard());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		transition: { duration: .2 },
		whileHover: {
			y: -2,
			scale: 1.02
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
			className: "w-42.5 h-37.5 group items-center justify-center cursor-pointer  border-2 border-dashed border-muted/30 hover:border-muted/60 transition duration-200",
			variant: "secondary",
			onClick: handleCreateNew,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-12 items-center justify-center rounded-full bg-surface-tertiary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-muted group-hover:text-foreground transition-colors duration-300",
				children: "Create New"
			})]
		})
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/PreviewCard.tsx
var { Card, Checkbox } = await importShared("@heroui/react");
function PreviewCard({ card, handleEdit, icon, isSelected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "relative",
		transition: { duration: .2 },
		whileHover: {
			y: -2,
			scale: 1.02
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			variant: "secondary",
			onClick: () => handleEdit(card),
			className: "w-42.5 h-37.5 cursor-pointer items-center justify-center group transition duration-200",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-[3.3rem] items-center justify-center shrink-0",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-center px-2",
				children: card.title
			})]
		}), onSelect && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "absolute top-2 right-2 z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				onChange: onSelect,
				isSelected,
				"aria-label": `Select ${card.title}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox.Control, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox.Indicator, {}) }) })
			})
		})]
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/Elements/UrlConfig.tsx
var { Button: Button$2, ButtonGroup, Description, Input, Label: Label$1, NumberField, Separator, TextField } = await importShared("@heroui/react");
var { useMemo: useMemo$3 } = await importShared("react");
var { useDispatch: useDispatch$4 } = await importShared("react-redux");
var { useSelector: useSelector$4 } = await importShared("react-redux");
function UrlConfig() {
	const dispatch = useDispatch$4();
	const editingCard = useSelector$4(selectEditingCard);
	const urlConfigType = useMemo$3(() => editingCard?.urlConfig.type || "nothing", [editingCard]);
	const customUrl = useMemo$3(() => editingCard?.urlConfig.customUrl, [editingCard]);
	const openImmediately = useMemo$3(() => editingCard?.urlConfig.openImmediately, [editingCard]);
	const timeout = useMemo$3(() => editingCard?.urlConfig.timeout, [editingCard]);
	const findLine = useMemo$3(() => editingCard?.urlConfig.findLine, [editingCard]);
	const setUrlConfigType = (value) => dispatch(reducerActions.setUrlConfigType(value));
	const setCustomUrl = (value) => dispatch(reducerActions.setCustomUrl(value));
	const setOpenImmediately = (value) => dispatch(reducerActions.setOpenImmediately(value));
	const setTimeoutValue = (value) => dispatch(reducerActions.setTimeoutValue(value));
	const setFindLine = (value) => dispatch(reducerActions.setFindLine(value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: "URL Detection Method:"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonGroup, {
				fullWidth: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$2, {
						onPress: () => setUrlConfigType("nothing"),
						variant: urlConfigType === "nothing" ? "primary" : "secondary",
						children: "No Browser"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$2, {
						onPress: () => setUrlConfigType("custom"),
						variant: urlConfigType === "custom" ? "primary" : "secondary",
						children: "Custom URL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$2, {
						onPress: () => setUrlConfigType("findLine"),
						variant: urlConfigType === "findLine" ? "primary" : "secondary",
						children: "Scan Terminal"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [urlConfigType === "custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				exit: {
					opacity: 0,
					height: 0
				},
				initial: {
					opacity: 0,
					height: 0
				},
				className: "flex flex-col gap-y-3",
				animate: {
					opacity: 1,
					height: "auto"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TextField, {
						value: customUrl,
						onChange: setCustomUrl,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, { children: "Custom URL" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Enter custom URL (e.g., http://localhost:7860)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { children: "Specify the exact URL to open in the browser" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-x-4 w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted shrink-0",
								children: "Open URL:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center space-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$2, {
									size: "sm",
									onPress: () => setOpenImmediately(true),
									variant: openImmediately ? "primary" : "secondary",
									children: "Immediately"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$2, {
									size: "sm",
									onPress: () => setOpenImmediately(false),
									variant: openImmediately ? "secondary" : "primary",
									children: "After Timeout (Seconds)"
								})]
							}),
							!openImmediately && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								minValue: 1,
								maxValue: 999,
								value: timeout,
								onChange: setTimeoutValue,
								fullWidth: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NumberField.Group, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField.DecrementButton, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField.Input, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField.IncrementButton, {})
								] })
							})
						]
					})
				]
			}), urlConfigType === "findLine" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "overflow-hidden",
				exit: {
					opacity: 0,
					height: 0
				},
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-y-3 border-t border-border pt-4 mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TextField, {
						value: findLine,
						onChange: setFindLine,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, { children: "Line Must Contain" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "e.g., \"Running on local URL:\" or \"Uvicorn running on\"" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { children: "Enter text to search for in terminal output. The URL will be extracted from that line." })
						]
					})
				})
			})] })
		]
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/CustomActionsManager.tsx
var { useMemo: useMemo$2 } = await importShared("react");
var { useDispatch: useDispatch$3 } = await importShared("react-redux");
var { useSelector: useSelector$3 } = await importShared("react-redux");
function CustomActionsManager({ selectedCardIds, onToggleSelect }) {
	const dispatch = useDispatch$3();
	const cards = useSelector$3(selectCustomCards);
	const editingCard = useSelector$3(selectEditingCard);
	const view = useSelector$3(selectView);
	const handleEdit = (card) => {
		dispatch(reducerActions.setEditingCard(card));
		dispatch(reducerActions.setView("form"));
	};
	const cardType = useMemo$2(() => editingCard?.cardType, [editingCard]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .95,
			y: 10
		},
		initial: {
			opacity: 0,
			scale: .95,
			y: 10
		},
		transition: {
			duration: .15,
			ease: "easeOut"
		},
		className: "size-full flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "size-full p-2",
			children: view === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-row flex-wrap gap-4",
					children: [cards.map((card) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCard, {
							card,
							handleEdit,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardIconById(card.icon), { className: "size-full" }),
							isSelected: selectedCardIds?.includes(card.id),
							onSelect: onToggleSelect ? () => onToggleSelect(card.id) : void 0
						}, `${card.id}_custom_action`);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewCard, {})]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8 pr-2 pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayoutGroup, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
							title: "Card Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardType, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: cardType !== "terminal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
							title: "URL Configuration",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UrlConfig, {})
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
							title: "Execute Actions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecuteActions, {})
						}),
						cardType !== "browser" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
							title: "Environment Variables",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvConfig, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
							title: "Card Details",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDetails, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
							title: "Add To Categories",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddToCategories, {})
						})
					] })
				})
			})
		})
	});
}
//#endregion
//#region extension/src/renderer/Components/Modal/CustomActionsModal.tsx
var { Button: Button$1, Dropdown, Label, Modal } = await importShared("@heroui/react");
var { useEffect: useEffect$1, useMemo: useMemo$1, useRef, useState } = await importShared("react");
var { useDispatch: useDispatch$2 } = await importShared("react-redux");
var { useSelector: useSelector$2 } = await importShared("react-redux");
function CustomActionsModal({ state }) {
	const dispatch = useDispatch$2();
	const view = useSelector$2(selectView);
	const editingCard = useSelector$2(selectEditingCard);
	const customCards = useSelector$2(selectCustomCards);
	const [selectedCardIds, setSelectedCardIds] = useState([]);
	const handleExportClipboard = async () => {
		try {
			if (customCards.length === 0) {
				topToast.danger("No custom cards to export.");
				return;
			}
			await navigator.clipboard.writeText(JSON.stringify(customCards, null, 2));
			topToast.success("Copied all custom cards to clipboard!");
		} catch (err) {
			topToast.danger("Failed to copy to clipboard.");
			console.error(err);
		}
	};
	const handleExportSelectedClipboard = async () => {
		try {
			const selected = customCards.filter((card) => selectedCardIds.includes(card.id));
			if (selected.length === 0) {
				topToast.danger("No custom cards selected to export.");
				return;
			}
			await navigator.clipboard.writeText(JSON.stringify(selected, null, 2));
			topToast.success(`Copied ${selected.length} selected card(s) to clipboard!`);
		} catch (err) {
			topToast.danger("Failed to copy to clipboard.");
			console.error(err);
		}
	};
	const handleImportClipboard = async () => {
		try {
			const text = await navigator.clipboard.readText();
			if (!text.trim()) {
				topToast.danger("Clipboard is empty.");
				return;
			}
			const parsed = JSON.parse(text);
			if (Array.isArray(parsed)) {
				dispatch(reducerActions.importCards(parsed));
				topToast.success(`Successfully imported ${parsed.length} cards!`);
			} else topToast.danger("Clipboard content is not a valid list of cards.");
		} catch (err) {
			topToast.danger("Failed to import from clipboard. Ensure valid JSON format.");
			console.error(err);
		}
	};
	const handleExportFile = async () => {
		try {
			if (customCards.length === 0) {
				topToast.danger("No custom cards to export.");
				return;
			}
			if (await window.electron.ipcRenderer.invoke(customActionsChannels.exportToFile, customCards)) topToast.success("Exported cards to file successfully!");
		} catch (err) {
			topToast.danger("Failed to export to file.");
			console.error(err);
		}
	};
	const handleExportSelectedFile = async () => {
		try {
			const selected = customCards.filter((card) => selectedCardIds.includes(card.id));
			if (selected.length === 0) {
				topToast.danger("No custom cards selected to export.");
				return;
			}
			if (await window.electron.ipcRenderer.invoke(customActionsChannels.exportToFile, selected)) topToast.success(`Exported ${selected.length} card(s) to file successfully!`);
		} catch (err) {
			topToast.danger("Failed to export to file.");
			console.error(err);
		}
	};
	const handleImportFile = async () => {
		try {
			const parsed = await window.electron.ipcRenderer.invoke(customActionsChannels.importFromFile);
			if (parsed) {
				dispatch(reducerActions.importCards(parsed));
				topToast.success(`Successfully imported ${parsed.length} cards from file!`);
			}
		} catch (err) {
			topToast.danger(err.message || "Failed to import from file.");
			console.error(err);
		}
	};
	const handleToggleSelectCard = (id) => {
		setSelectedCardIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
	};
	const formTitle = useMemo$1(() => view === "list" ? "Custom Actions" : editingCard ? `Editing ${editingCard.title || "New Card"}` : "Create New Custom Card", [editingCard, view]);
	const saveDisabled = useMemo$1(() => !editingCard?.title || !editingCard.icon, [editingCard]);
	const handleBackToList = () => {
		dispatch(reducerActions.setView("list"));
		dispatch(reducerActions.setEditingCard(void 0));
	};
	const saveCard = () => {
		dispatch(reducerActions.saveCard());
		topToast.success("Card saved successfully!");
	};
	const deleteCard = () => dispatch(reducerActions.removeCard());
	useEffect$1(() => {
		const onKeyUp = (e) => {
			if (e.key === "Escape") if (view === "form") handleBackToList();
			else state.close();
		};
		document.addEventListener("keyup", onKeyUp);
		return () => document.removeEventListener("keyup", onKeyUp);
	}, [
		handleBackToList,
		view,
		state
	]);
	const prevIsOpen = useRef(state.isOpen);
	useEffect$1(() => {
		if (prevIsOpen.current && !state.isOpen) {
			dispatch(reducerActions.setView("list"));
			dispatch(reducerActions.setEditingCard(void 0));
		}
		prevIsOpen.current = state.isOpen;
	}, [state.isOpen, dispatch]);
	useEffect$1(() => {
		return () => {
			if (state.isOpen) {
				dispatch(reducerActions.setView("list"));
				dispatch(reducerActions.setEditingCard(void 0));
			}
		};
	}, [state.isOpen, dispatch]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabModal, {
		isOpen: state.isOpen,
		dialogClassName: "px-0",
		onOpenChange: state.setOpen,
		isKeyboardDismissDisabled: true,
		children: [
			view !== "form" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal.CloseTrigger, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal.Header, {
				className: "flex-row items-center gap-x-2 px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-10 h-10 flex items-center justify-center",
					children: view === "form" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onPress: handleBackToList,
						isIconOnly: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$13, { className: "size-5" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal.Heading, { children: formTitle })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal.Body, {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LynxScroll, {
					className: "size-full px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomActionsManager, {
						selectedCardIds,
						onToggleSelect: handleToggleSelectCard
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal.Footer, {
				className: "justify-between px-4",
				children: view === "form" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
					onPress: deleteCard,
					variant: "danger-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$2, {}), "Delete"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-row items-center gap-x-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						onPress: saveCard,
						isDisabled: saveDisabled,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$11, {}), "Save Card"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "secondary",
						onPress: handleBackToList,
						children: "Cancel"
					})]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-row justify-between items-center w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted",
						children: [
							customCards.length,
							" card",
							customCards.length !== 1 ? "s" : "",
							" configured",
							selectedCardIds.length > 0 && ` (${selectedCardIds.length} selected)`
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-row items-center gap-x-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
							size: "sm",
							variant: "secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$14, { className: "size-4 text-cyan-500" }), "Manage Cards"]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown.Popover, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown.Menu, {
							onAction: (key) => {
								switch (key) {
									case "import-clipboard":
										handleImportClipboard();
										break;
									case "import-file":
										handleImportFile();
										break;
									case "export-clipboard-all":
										handleExportClipboard();
										break;
									case "export-file-all":
										handleExportFile();
										break;
									case "export-clipboard-selected":
										handleExportSelectedClipboard();
										break;
									case "export-file-selected":
										handleExportSelectedFile();
										break;
									case "clear-selection":
										setSelectedCardIds([]);
										break;
									default: break;
								}
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown.Item, {
									id: "import-clipboard",
									textValue: "Import from Clipboard",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$6, { className: "size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Import from Clipboard" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown.Item, {
									id: "import-file",
									textValue: "Import from File",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$14, { className: "size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Import from File" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown.Item, {
									id: "export-clipboard-all",
									textValue: "Export All to Clipboard",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$3, { className: "size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Export All to Clipboard" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown.Item, {
									id: "export-file-all",
									textValue: "Export All to File",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$15, { className: "size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Export All to File" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown.Item, {
									id: "export-clipboard-selected",
									isDisabled: selectedCardIds.length === 0,
									textValue: `Export Selected (${selectedCardIds.length}) to Clipboard`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$3, { className: "size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: [
										"Export Selected (",
										selectedCardIds.length,
										") to Clipboard"
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown.Item, {
									id: "export-file-selected",
									isDisabled: selectedCardIds.length === 0,
									textValue: `Export Selected (${selectedCardIds.length}) to File`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$15, { className: "size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: [
										"Export Selected (",
										selectedCardIds.length,
										") to File"
									] })]
								}),
								selectedCardIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dropdown.Item, {
									variant: "danger",
									id: "clear-selection",
									textValue: "Clear Selection",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$2, { className: "size-4 shrink-0 text-danger" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Clear Selection" })]
								})
							]
						}) })] })
					})]
				})
			})
		]
	});
}
//#endregion
//#region extension/src/renderer/Components/ActionCard/ActionCard.tsx
var { Button, useOverlayState: useOverlayState$1 } = await importShared("@heroui/react");
var { useDispatch: useDispatch$1 } = await importShared("react-redux");
var LINE_ENDING = window.osPlatform === "win32" ? "\r" : "\n";
var IS_MACOS = window.osPlatform === "darwin";
var IS_WINDOWS = window.osPlatform === "win32";
function ActionCard({ icon: Icon, card }) {
	const dispatch = useDispatch$1();
	const activeTab = useTabsState("activeTab");
	const { title, description, actions, cardType, urlConfig } = card;
	const onClick = () => {
		actions.filter((action) => action.type === "open").forEach((open) => filesIpc.openPath(open.action));
		const manageUrls = (ptyId, onDone) => {
			if (urlConfig.type === "custom" && urlConfig.customUrl) {
				const openUrl = () => {
					dispatch(cardsActions.setRunningCardCustomAddress({
						tabId: activeTab,
						address: urlConfig.customUrl
					}));
					if (onDone) onDone();
				};
				if (urlConfig.openImmediately) openUrl();
				else setTimeout(() => openUrl(), (urlConfig.timeout || 0) * 1e3);
			} else if (urlConfig.type === "findLine" && urlConfig.findLine) dispatch(reducerActions.startUrlCatching({
				ptyId,
				tabId: activeTab,
				findLine: urlConfig.findLine
			}));
		};
		const getScriptCommand = (scriptPath) => {
			const ext = scriptPath.substring(scriptPath.lastIndexOf(".")).toLowerCase();
			if (IS_WINDOWS) switch (ext) {
				case ".py": return `python "${scriptPath}"${LINE_ENDING}`;
				case ".js": return `node "${scriptPath}"${LINE_ENDING}`;
				default: return `& "${scriptPath}"${LINE_ENDING}`;
			}
			else if (IS_MACOS) if (scriptPath.endsWith(".app")) return `open -W "${scriptPath}"${LINE_ENDING}`;
			else if (ext === ".command") return `chmod +x "${scriptPath}" && open "${scriptPath}"${LINE_ENDING}`;
			else if (ext === ".py") return `python3 "${scriptPath}"${LINE_ENDING}`;
			else if (ext === ".js") return `node "${scriptPath}"${LINE_ENDING}`;
			else return `chmod +x "${scriptPath}" && bash "${scriptPath}"${LINE_ENDING}`;
			else switch (ext) {
				case ".py": return `python3 "${scriptPath}"${LINE_ENDING}`;
				case ".js": return `node "${scriptPath}"${LINE_ENDING}`;
				case ".rb": return `ruby "${scriptPath}"${LINE_ENDING}`;
				case ".pl": return `perl "${scriptPath}"${LINE_ENDING}`;
				default: return `chmod +x "${scriptPath}" && bash "${scriptPath}"${LINE_ENDING}`;
			}
		};
		const writeEnvVars = (ptyId) => {
			if (card.env && card.env.length > 0) card.env.forEach((envVar) => {
				if (envVar.key && envVar.key.trim()) if (IS_WINDOWS) ptyIpc.write(ptyId, `$env:${envVar.key.trim()}="${envVar.value}"${LINE_ENDING}`);
				else ptyIpc.write(ptyId, `export ${envVar.key.trim()}="${envVar.value}"${LINE_ENDING}`);
			});
		};
		const runCustomCommands = (ptyId) => {
			writeEnvVars(ptyId);
			actions.forEach((action) => {
				if (action.type === "command") ptyIpc.write(ptyId, `${action.action}${LINE_ENDING}`);
				else if (action.type === "script") ptyIpc.write(ptyId, getScriptCommand(action.action));
			});
		};
		switch (cardType) {
			case "executable": {
				const pathToExe = actions.find((action) => action.type === "exe")?.action;
				if (!pathToExe) return;
				const ptyID = `${activeTab}_both`;
				const envObj = {};
				card.env?.forEach((item) => {
					if (item.key.trim()) envObj[item.key.trim()] = item.value;
				});
				window.electron.ipcRenderer.send(customActionsChannels.startExe, ptyID, pathToExe, envObj);
				dispatch(cardsActions.addRunningCard({
					tabId: activeTab,
					id: ptyID
				}));
				manageUrls(ptyID, () => {
					dispatch(cardsActions.setRunningCardView({
						tabId: activeTab,
						view: "browser"
					}));
				});
				break;
			}
			case "browser":
				dispatch(cardsActions.addRunningEmpty({
					tabId: activeTab,
					type: "browser"
				}));
				manageUrls(`${activeTab}_browser`);
				break;
			case "terminal": {
				dispatch(cardsActions.addRunningEmpty({
					tabId: activeTab,
					type: "terminal"
				}));
				const ptyID = `${activeTab}_terminal`;
				manageUrls(ptyID);
				setTimeout(() => runCustomCommands(ptyID), 100);
				break;
			}
			case "terminal_browser": {
				const ptyID = `${activeTab}_both`;
				dispatch(cardsActions.addRunningEmpty({
					tabId: activeTab,
					type: "both"
				}));
				manageUrls(ptyID, () => {
					dispatch(cardsActions.setRunningCardView({
						tabId: activeTab,
						view: "browser"
					}));
				});
				setTimeout(() => runCustomCommands(ptyID), 100);
				break;
			}
		}
	};
	const modalState = useOverlayState$1();
	const openConfig = () => {
		dispatch(reducerActions.setEditingCard(card));
		dispatch(reducerActions.setView("form"));
		modalState.open();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsCard, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "tertiary",
			onPress: openConfig,
			className: "shrink-0",
			isIconOnly: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$7, { className: "text-semi-muted" })
		}),
		description: description || "No description provided. Click to execute this action, run scripts, or open the configured URL in your workspace.",
		title,
		onPress: onClick,
		avatarClassName: "ring-cyan-500",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-8" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomActionsModal, { state: modalState })] });
}
//#endregion
//#region extension/src/renderer/Components/CardsContainer.tsx
var { useMemo } = await importShared("react");
var { useSelector: useSelector$1 } = await importShared("react-redux");
function CardsContainer({ cards }) {
	return cards.map((card) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionCard, {
			card,
			icon: CardIconById(card.icon)
		}, card.id);
	});
}
function PinnedActions() {
	const customCards = useSelector$1(selectCustomCards);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsContainer, { cards: useMemo(() => compact(customCards.map((card) => card.categories.pinned ? card : null)), [customCards]) });
}
function RecentlyActions() {
	const customCards = useSelector$1(selectCustomCards);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsContainer, { cards: useMemo(() => compact(customCards.map((card) => card.categories.recentlyUsed ? card : null)), [customCards]) });
}
function AllActions() {
	const customCards = useSelector$1(selectCustomCards);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsContainer, { cards: useMemo(() => compact(customCards.map((card) => card.categories.all ? card : null)), [customCards]) });
}
function ImageActions() {
	const customCards = useSelector$1(selectCustomCards);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsContainer, { cards: useMemo(() => compact(customCards.map((card) => card.categories.image ? card : null)), [customCards]) });
}
function TextActions() {
	const customCards = useSelector$1(selectCustomCards);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsContainer, { cards: useMemo(() => compact(customCards.map((card) => card.categories.text ? card : null)), [customCards]) });
}
function AudioActions() {
	const customCards = useSelector$1(selectCustomCards);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsContainer, { cards: useMemo(() => compact(customCards.map((card) => card.categories.audio ? card : null)), [customCards]) });
}
//#endregion
//#region extension/src/renderer/Components/ActionCard/ActionCard_TerminalUtils.ts
/**
* Escapes special characters in a string for use in a regular expression.
*/
function escapeRegExp(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
/**
* Extracts a URL from terminal output that contains a specific keyword.
* @param input - The raw string data from the terminal.
* @param keyword - The keyword to search for (e.g., "To see the GUI go to").
* @returns The captured URL string or undefined if not found.
*/
function catchTerminalAddress(input, keyword) {
	const escapedKeyword = escapeRegExp(keyword);
	const pattern = new RegExp(`${escapedKeyword}.*?:\\s*.*?(https?:\\/\\/.*?)(?=\\s|\\u001b|$)`, "i");
	const match = input.match(pattern);
	if (match) return match[1];
}
//#endregion
//#region extension/src/renderer/Components/CustomHooks.tsx
var { Fragment, useEffect } = await importShared("react");
var { useDispatch } = await importShared("react-redux");
var { useSelector } = await importShared("react-redux");
function CustomHook() {
	const dispatch = useDispatch();
	const customCards = useSelector(selectCustomCards);
	const saveCards = useSelector(selectSaveCards);
	const urlCatchingSession = useSelector(selectUrlCatchingSession);
	useEffect(() => {
		if (saveCards) {
			window.electron.ipcRenderer.send(customActionsChannels.setCards, customCards);
			dispatch(reducerActions.clearSaveCards());
		}
	}, [saveCards, customCards]);
	useEffect(() => {
		window.electron.ipcRenderer.invoke(customActionsChannels.getCards).then((cards) => {
			dispatch(reducerActions.updateState({
				key: "customCards",
				value: cards
			}));
		});
	}, []);
	useEffect(() => {
		if (!urlCatchingSession || urlCatchingSession.urlFound) return;
		const { ptyId, tabId, findLine } = urlCatchingSession;
		const offData = ptyIpc.onData((dataID, data) => {
			if (dataID !== ptyId || urlCatchingSession.urlFound) return;
			const url = catchTerminalAddress(data, findLine);
			if (url && !isEmpty(url)) {
				dispatch(reducerActions.setUrlFound());
				dispatch(cardsActions.setRunningCardAddress({
					address: url,
					tabId
				}));
				dispatch(cardsActions.setRunningCardView({
					view: "browser",
					tabId
				}));
				setTimeout(() => dispatch(reducerActions.stopUrlCatching()), 100);
			}
		});
		return () => offData();
	}, [urlCatchingSession, dispatch]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fragment, {});
}
//#endregion
//#region extension/src/renderer/Components/ToolsPage.tsx
var { useOverlayState } = await importShared("@heroui/react");
function ToolsPage() {
	const state = useOverlayState();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsCard, {
		description: "Create, customize, and manage custom shortcut cards with your own scripts, APIs, or shell commands to automate your daily developer workflows.",
		onPress: state.open,
		title: "Custom Actions",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$4, { className: "size-8 text-cyan-500" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomActionsModal, { state })] });
}
//#endregion
//#region extension/src/renderer/Extension.tsx
function InitialExtensions(lynxAPI) {
	lynxAPI.addReducer([{
		name: "customActions",
		reducer: reducer_default
	}]);
	lynxAPI.customizePages.tools.add.cardsContainer(ToolsPage);
	lynxAPI.customizePages.home.add.pinCategory(PinnedActions);
	lynxAPI.customizePages.home.add.recentlyCategory(RecentlyActions);
	lynxAPI.customizePages.home.add.allCategory(AllActions);
	lynxAPI.customizePages.image.add.cardsContainer(ImageActions);
	lynxAPI.customizePages.text.add.cardsContainer(TextActions);
	lynxAPI.customizePages.audio.add.cardsContainer(AudioActions);
	lynxAPI.addCustomHook(CustomHook);
}
//#endregion
export { InitialExtensions as t };

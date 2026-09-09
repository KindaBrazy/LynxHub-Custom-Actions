//#region \0rolldown/runtime.js
(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "7e66a4581cd13b10744cfc717fce9cd99218f74a" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f1366809-b24f-45dc-8b29-50966cc1ad3a", e._sentryDebugIdIdentifier = "sentry-dbid-f1366809-b24f-45dc-8b29-50966cc1ad3a");
	} catch (e) {}
})();
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
//#endregion
export { __commonJSMin as t };

function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function E(e){return c=e,u=setTimeout(O,t),l?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function O(){var e=g();if(T(e))return S(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function S(e){return u=void 0,p&&o?b(e):(o=r=void 0,a)}function x(){var e=g(),n=T(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return E(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},x.flush=function(){return void 0===u?a:S(g())},x}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b={},E={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};E.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("STORAGE_KEY"),console.log(b)})),E.textarea.addEventListener("input",e(t)((function(e){e.target.value;localStorage.setItem("STORAGE_KEY",JSON.stringify(b))}),500)),E.form.addEventListener("input",(e=>{b[e.target.name]=e.target.value,console.log(b)})),function(e){const t=localStorage.getItem("STORAGE_KEY"),n=JSON.parse(t);n&&(console.log(n),E.textarea.value=n)}();
//# sourceMappingURL=03-feedback.4388b72c.js.map

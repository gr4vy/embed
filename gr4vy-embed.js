!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.gr4vy=n():e.gr4vy=n()}(self,(()=>(()=>{var e={884:function(e,n,t){var r,o,a,i;function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}e=t.nmd(e),i=function(){return function(){"use strict";var e={381:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(609),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".gr4vy__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 100vh;\n  z-index: 100;\n  transition: background-color 0.2s linear, max-height 0s linear;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gr4vy__overlay--visible {\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n\n.gr4vy__overlay__container {\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,\n    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  font-size: 1rem;\n  text-align: center;\n  font-weight: bold;\n}\n\n.gr4vy__overlay__container > * + * {\n  margin-top: 32px;\n}\n\n.gr4vy__overlay__notice > * + * {\n  margin-top: 8px;\n}\n\n.gr4vy__overlay--hidden {\n  max-height: 0;\n  backdrop-filter: unset;\n  background-color: rgba(0, 0, 0, 0);\n  transition: background-color 0.2s linear, max-height 0s linear;\n  transition-delay: 0s, 0.2s;\n  overflow: hidden;\n}\n\n.gr4vy__overlay__link {\n  font-weight: normal;\n  text-decoration: underline;\n  font-weight: normal;\n  color: white;\n  display: block;\n  cursor: pointer;\n}\n\n.gr4vy__frame {\n  height: 100vh;\n  width: 100vw;\n}\n\n@media screen and (min-width: 500px) and (min-height: 350px) {\n  .gr4vy__frame {\n    height: 250px;\n    width: 400px;\n  }\n}\n\n@media screen and (min-width: 500px) and (min-height: 490px) {\n  .gr4vy__frame {\n    height: 390px;\n    width: 400px;\n  }\n}\n\n@media screen and (min-width: 700px) and (min-height: 500px) {\n  .gr4vy__frame {\n    height: 400px;\n    width: 600px;\n  }\n}\n\n@media screen and (min-width: 700px) and (min-height: 600px) {\n  .gr4vy__frame {\n    height: 500px;\n    width: 600px;\n  }\n}\n",""]);var a=o},514:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(609),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"@keyframes gr4vy-sweep {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n\n.gr4vy__skeleton {\n  display: flex;\n  border-bottom: var(--gr4vy-borderWidths-container, 1px) solid\n    var(--gr4vy-colors-containerBorder, #f2f2f2);\n  padding: 16px;\n}\n\n.gr4vy__skeleton:last-child {\n  border-bottom: none;\n}\n\n.gr4vy__skeleton__radio {\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  background-color: var(--gr4vy-colors-containerBorder, #f2f2f2);\n}\n\n.gr4vy__skeleton__block {\n  flex-grow: 1;\n  height: 16px;\n  background-image: linear-gradient(\n    90deg,\n    var(--gr4vy-colors-containerBorder, #f2f2f2) 30%,\n    var(--gr4vy-colors-containerBackground, #ffffff) 50%,\n    var(--gr4vy-colors-containerBorder, #f2f2f2) 70%\n  );\n  background-size: 600px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  margin-left: 16px;\n  border-radius: var(--gr4vy-radii-input, 0);\n  -webkit-animation: gr4vy-sweep 1s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n  animation: gr4vy-sweep 1s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n}\n.gr4vy__container {\n  border: var(--gr4vy-borderWidths-container, 1px) solid\n    var(--gr4vy-colors-containerBorder, #f2f2f2);\n  border-radius: var(--gr4vy-radii-container, 0);\n  background: var(--gr4vy-colors-pageBackground, #ffffff);\n  max-width: 480px;\n}\n",""]);var a=o},609:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},88:function(e,n,t){function r(e){if(("string"==typeof e||e instanceof String)&&(e=document.getElementById(e)),!(e instanceof HTMLFormElement))throw new TypeError("FormNapper requires an HTMLFormElement element or the id string of one.");this.htmlForm=e}r.prototype.hijack=function(e){this.submitHandler||(this.submitHandler=function(n){n.preventDefault?n.preventDefault():n.returnValue=!1,e(n)},null!=t.g.addEventListener?this.htmlForm.addEventListener("submit",this.submitHandler,!1):null!=t.g.attachEvent?this.htmlForm.attachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=this.submitHandler)},r.prototype.inject=function(e,n){var t=this.htmlForm.querySelector('input[name="'+e+'"]');return null==t&&((t=document.createElement("input")).type="hidden",t.name=e,this.htmlForm.appendChild(t)),t.value=n,t},r.prototype.submit=function(){HTMLFormElement.prototype.submit.call(this.htmlForm)},r.prototype.detach=function(){this.submitHandler&&(null!=t.g.removeEventListener?this.htmlForm.removeEventListener("submit",this.submitHandler,!1):null!=t.g.detachEvent?this.htmlForm.detachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=null,delete this.submitHandler)},e.exports=r},496:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(62),o=t.n(r),a=t(381);o()(a.Z,{insert:"head",singleton:!1});var i=a.Z.locals||{}},796:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(62),o=t.n(r),a=t(514);o()(a.Z,{insert:"head",singleton:!1});var i=a.Z.locals||{}},62:function(e,n,t){var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var l=e[o],c=n.base?l[0]+n.base:l[0],s=t[c]||0,u="".concat(c," ").concat(s);t[c]=s+1;var d=i(u),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:v(p,n),references:1}),r.push(u)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function v(e,n){var t,r,o;if(n.singleton){var a=f++;t=m||(m=c(n)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=c(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var c=l(e,n),s=0;s<t.length;s++){var u=i(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=c}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==("undefined"==typeof globalThis?"undefined":l(globalThis)))return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==("undefined"==typeof window?"undefined":l(window)))return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var r={};return function(){t.r(r),t.d(r,{optionKeys:function(){return de},setup:function(){return fe}});var e=function(){var e=!1;try{e=window.ApplePaySession&&ApplePaySession.canMakePayments()&&ApplePaySession.supportsVersion(3)}catch(e){}return e},n=function(){return ApplePaySession.supportsVersion(5)?5:ApplePaySession.supportsVersion(4)?4:ApplePaySession.supportsVersion(3)?3:null},o=function(e,n){var t;e.appleStartSession$.subscribe((function(r){try{(t=new ApplePaySession(n,r)).onvalidatemerchant=function(n){e.appleValidateMerchant$.next(n.validationURL)},t.onpaymentauthorized=function(n){e.applePayAuthorized$.next(n.payment.token)},t.oncancel=function(){e.appleCancelSession$.next()},t.begin()}catch(n){e.appleSessionError$.next()}})),e.appleCompleteMerchantValidation$.subscribe((function(e){t.completeMerchantValidation(e)})),e.appleAbortSession$.subscribe((function(){var e;(null===(e=t)||void 0===e?void 0:e.abort)&&t.abort()})),e.appleCompletePayment$.subscribe((function(n){n?t.completePayment(ApplePaySession.STATUS_SUCCESS):t.completePayment(ApplePaySession.STATUS_FAILURE),e.appleCompleteSession$.next()}))},a=function(e,n){return n.reduce((function(n,t){return void 0!==e[t]&&null!==e[t]&&(n[t]=e[t]),n}),{})},i=function(e){return{current:e}},c=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=new URL("https://".concat(e));return n||(t.protocol="http"),t.toString().replace(/\/$/,"")};function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p={debug:!1,level:"log"},m=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p,r=u(u({},p),t),o=r.debug,a=r.level;o&&console[a]("Gr4vy - ".concat(e),n)},f=function(e,n,t){m(e,n,u(u({},t),{},{level:"warn"}))},v=function(e,n,t){return function(r){e===r.origin&&r.data.channel===n&&t(r.data)}},b=function(e,n){return function(t){e.includes(t.type)&&n(t)}};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=function(e,n,t,r){return function(o){t.postMessage(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({channel:n},o),e),r&&r(o)}},w=function(e){if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.lastChild)},O=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2.22.4";window.gr4vy||(window.gr4vy={version:{}}),window.gr4vy.version||(window.gr4vy.version={}),window.gr4vy.version[e]=n},S=["gr4vyId","environment"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var $,k,E=function(e){var n,t,r,o,a,i=e.gr4vyId,l=e.environment,s=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,S),u=(window.crypto||window.msCrypto).getRandomValues(new Uint32Array(4)).join("").slice(0,32),d="sandbox"===l?"sandbox.":"",p=i?"embed.".concat(d).concat(i,".gr4vy.app"):e.iframeHost,m=i?"api.".concat(d).concat(i,".gr4vy.app"):e.apiHost,f=c(p,e.secure),v=e.form instanceof Element?e.form:document.querySelector(e.form),b=e.element instanceof Element?e.element:document.querySelector(e.element);return _(_({requireSecurityCode:!1,showDeleteButton:!1,store:"ask",display:"all",apiHost:m,apiUrl:c(m,e.secure),gr4vyId:i,iframeHost:p,iframeUrl:f,iframeSrc:(r=f,o={parentUrl:"".concat(document.location.protocol,"//").concat(document.location.host),font:null!==(n=e.theme)&&void 0!==n&&null!==(t=n.fonts)&&void 0!==t&&t.body?encodeURIComponent(e.theme.fonts.body):void 0,channel:u},a=new URL(r),Object.keys(o).forEach((function(e){void 0!==o[e]&&a.searchParams.set(e,o[e])})),a.toString()),channel:u},s),{},{element:b,form:v,environment:l,redirectMode:e.redirectMode||"fallback"})},P=t(88),C=t.n(P),I=new Map,T=0,q=function(e,n,t,r){parseInt(e.dataset.formNapperId)>0&&(I.get(e.dataset.formNapperId).detach(),I.delete(e.dataset.formNapperId)),T+=1,e.dataset.formNapperId=String(T);var o=new(C())(e);I.set(T.toString(),o),o.hijack((function(){var e;"custom"===(null===(e=t.selectedOption$.value())||void 0===e?void 0:e.mode)?r({method:t.selectedOption$.value().method}):t.formSubmit$.next()})),t.transactionCreated$.subscribe((function(e){var t;return o.inject("gr4vy_transaction_id",e.id),o.inject("gr4vy_transaction_status",e.status),null!=e&&null!==(t=e.paymentMethod)&&void 0!==t&&t.id&&o.inject("gr4vy_transaction_payment_method_id",e.paymentMethod.id),"function"==typeof n?n(e):o.submit()}))},A=function(e,n,t){e.src=n,e.title="Secure payment frame - Gr4vy",e.style.visibility="hidden",e.style.display="none",e.style.width="100%",e.style.height="0px",e.style.border="0",e.style.overflow="hidden",e.setAttribute("frameBorder","0"),e.setAttribute("scrolling","no"),e.setAttribute("allowpaymentrequest","true"),e.setAttribute("sandbox","allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"),t.frameHeight$.subscribe((function(n){"unset"===e.style.visibility&&(e.style.height="".concat(n,"px"))})),t.optionsLoaded$.subscribe((function(){e.style.visibility="unset",e.style.display="unset"}))},M=!0,L=String.raw,U=function(e,n){M&&(t(496),M=!1),e.className="gr4vy__overlay gr4vy__overlay--hidden";var r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");a.className="gr4vy__overlay__notice ",a.appendChild(r),a.appendChild(o);var i=document.createElement("div");i.className="gr4vy__overlay__link",i.addEventListener("click",(function(){return n.approvalLost$.next()}));var l=document.createElement("div");l.className="gr4vy__overlay__link",l.addEventListener("click",(function(){return n.approvalCancelled$.next()}));var c=document.createElement("div");c.className="gr4vy__overlay__container",e.appendChild(c);var s=function(e){return e.preventDefault(),n.approvalCancelled$.next(),e.returnValue=!0},u=function(){e.className="gr4vy__overlay gr4vy__overlay--hidden",w(c),window.removeEventListener("beforeunload",s)},d=function(){e.className="gr4vy__overlay gr4vy__overlay--visible",window.addEventListener("beforeunload",s)},p=function(e){var n=e.title,t=e.link,s=e.message,u=e.cancel;r.textContent=n,i.textContent=t,o.textContent=s,l.textContent=u,c.appendChild(a),c.appendChild(i),c.appendChild(l)};n.approvalStarted$.subscribe((function(){var e=n.mode$.value().overlay;p(e),d()})),n.approvalCompleted$.subscribe(u),n.approvalCancelled$.subscribe(u),n.transactionFailed$.subscribe(u),n.transactionCancelled$.subscribe(u),n.approvalUrl$.subscribe((function(e){var t,r,o,a;null!==(t=n.mode$.value())&&void 0!==t&&t.popup||(r=e,c.innerHTML=L($||(o=['\n      <iframe\n        src="','"\n        frameborder="0"\n        class="gr4vy__frame"\n        allowtransparency="true"\n        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"\n      ></iframe>\n    '],a||(a=o.slice(0)),$=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))),r),d())})),n.showOverlay$.subscribe((function(){var e=n.mode$.value().overlay;p(e),d()})),n.hideOverlay$.subscribe(u),n.transactionCreated$.subscribe(u)},H=String.raw,D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i(),n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;n.approvalStarted$.subscribe((function(){var o,a,i,l,c,s,u,d,p,m,f=n.mode$.value();e.current&&(null===(o=e.current)||void 0===o||o.stopCallback(),null===(a=e.current)||void 0===a||null===(i=a.popup)||void 0===i||i.close(),e.current=void 0),null!=f&&f.popup&&"fallback"===t&&(e.current=function(e,n,t,r){var o=open("","loading",e);o.document.write(n);var a,i,l,c=(a=function(){return o.closed},i=t,l=setInterval((function(){!0===a()&&(clearInterval(l),i())}),10),function(){return clearInterval(l)});return r&&setTimeout((function(){return o.close()}),r),{popup:o,stopCallback:c}}(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=t.innerWidth/2-e/2+t.screenLeft,o=t.innerHeight/2-n/2+t.screenTop;return"width=".concat(e,",height=").concat(n,",top=").concat(o,",left=").concat(r)}((null===(l=f.popup)||void 0===l?void 0:l.width)||500,(null===(c=f.popup)||void 0===c?void 0:c.height)||589),(p=(s=n.mode$.value().popup).title,m=s.message,H(k||(u=["\n  <html>\n    <head>\n      <title>","</title>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <style>\n        html,\n        body {\n          margin: 0;\n          padding: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n            'Segoe UI Symbol';\n          text-align: center;\n        }\n        .gr4vy__status {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        @keyframes gr4vy-sweep {\n          0% {\n            background-position: 0 0;\n          }\n          100% {\n            background-position: 600px 0;\n          }\n        }\n\n        .gr4vy__loading {\n          height: 8px;\n          background-image: linear-gradient(\n            90deg,\n            #009cde 25%,\n            #bee7fa 25%,\n            #bee7fa 75%,\n            #009cde 75%\n          );\n          background-size: 600px 8px;\n          -webkit-animation: gr4vy-sweep 2s infinite\n            cubic-bezier(0.2, 0.75, 0.77, 0.25);\n          animation: gr4vy-sweep 2s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n        }\n      </style>\n    </head>\n    <div class=\"gr4vy__loading\"></div>\n    <div class=\"gr4vy__status\">\n      <p>","</p>\n    </div>\n  </html>\n"],d||(d=u.slice(0)),k=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(d)}}))),p,m)),(function(){return n.approvalCancelled$.next()}),r))})),n.approvalUrl$.subscribe((function(t){var r=n.mode$.value();null!=r&&r.popup&&(e.current?function(e,n){e.location.href=n}(e.current.popup,t):(n.hideOverlay$.next(),setTimeout((function(){return window.location.replace(t)}),0)))})),n.approvalLost$.subscribe((function(){e.current&&e.current.popup.focus()})),n.approvalCancelled$.subscribe((function(){var n;null===(n=e.current)||void 0===n||n.popup.close()})),n.approvalCompleted$.subscribe((function(){var n;null===(n=e.current)||void 0===n||n.popup.close()})),n.transactionFailed$.subscribe((function(){var n,t;null===(n=e.current)||void 0===n||n.stopCallback(),null===(t=e.current)||void 0===t||t.popup.close()})),n.formValidationFailed$.subscribe((function(){var n;null===(n=e.current)||void 0===n||n.popup.close()}))};function F(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){V(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var N,R={none:"0",thin:"1px",thick:"2px"},W={rounded:"4px",subtle:"2px",none:"0"},Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(n).reduce((function(t,r){return B(B({},t),{},V({},r,e[n[r]]))}),{})},G=String.raw,J=!0,K=function(e,n,r){var o,a;J&&(t(796),J=!1),r&&function(e,n){n.removeAttribute("style"),function(e){var n=[];return Object.keys(e).forEach((function(t){Object.keys(e[t]).forEach((function(r){n.push(["--gr4vy-".concat(t,"-").concat(r),"".concat(e[t][r])])}))})),n}(e).forEach((function(e){var t,r=function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),2!==a.length);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(t)||function(e,n){if(e){if("string"==typeof e)return F(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?F(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],a=r[1];return n.style.setProperty(o,a)}))}(function(e){var n={};return null!=e&&e.colors&&(n.colors=B({},e.colors)),null!=e&&e.borderWidths&&(n.borderWidths=Z(R,B({},e.borderWidths))),null!=e&&e.radii&&(n.radii=Z(W,B({},e.radii))),n}(r),e),e.innerHTML=G(N||(o=['<div class="gr4vy__container">\n    <div class="gr4vy__skeleton">\n      <div class="gr4vy__skeleton__radio"></div>\n      <div class="gr4vy__skeleton__block"></div>\n    </div>\n    <div class="gr4vy__skeleton">\n      <div class="gr4vy__skeleton__radio"></div>\n      <div class="gr4vy__skeleton__block"></div>\n    </div>\n  </div>'],a||(a=o.slice(0)),N=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}})))),n.optionsLoaded$.subscribe((function(){return e.remove()}))},Q=function(e){var n=e,t=[];return{subscribe:function(e){var n=t.push(e);return{unsubscribe:function(){t.splice(n-1)}}},next:function(e){n=e,t.forEach((function(e){return setTimeout((function(){return e(n)}),0)}))},value:function(){return n}}},X=function(){var e={mode$:Q(),approvalUrl$:Q(),approvalStarted$:Q(),approvalCancelled$:Q(),approvalLost$:Q(),approvalCompleted$:Q(),frameHeight$:Q(0),optionsLoaded$:Q(!1),formSubmit$:Q(),submit$:Q(),transactionCreated$:Q(),beforeTransactionPending$:Q(),transactionFailed$:Q(),transactionCancelled$:Q(),appleStartSession$:Q(),appleValidateMerchant$:Q(),appleCompleteMerchantValidation$:Q(),applePayAuthorized$:Q(),appleCompletePayment$:Q(),appleAbortSession$:Q(),appleSessionError$:Q(),appleCancelSession$:Q(),appleCompleteSession$:Q(),googlePaySessionStarted$:Q(),googlePaySessionCompleted$:Q(),selectedOption$:Q(),showOverlay$:Q(),hideOverlay$:Q(),formValidationFailed$:Q()};return e.formSubmit$.subscribe((function(){var n;null!==(n=e.mode$.value())&&void 0!==n&&n.popup&&e.approvalStarted$.next()})),e.googlePaySessionStarted$.subscribe((function(){e.showOverlay$.next()})),e.googlePaySessionCompleted$.subscribe((function(){e.hideOverlay$.next()})),e.transactionCreated$.subscribe((function(){var n;null!==(n=e.mode$.value())&&void 0!==n&&n.popup&&e.approvalCompleted$.next()})),e},Y=function(e,n,t){n.submit$.subscribe((function(){var e;"custom"===(null===(e=n.selectedOption$.value())||void 0===e?void 0:e.mode)?t({method:n.selectedOption$.value().method}):n.formSubmit$.next()})),n.transactionCreated$.subscribe((function(n){e&&e(n)}))};function ee(e){return ee="function"==typeof Symbol&&"symbol"==l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)},ee(e)}var ne=function(e){var n=e.required,t=e.value;return!n&&[void 0,null].includes(t)},te=function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback;if(t instanceof Element)return!0;var l=document.querySelector(t);return!(!ne({required:a,value:t})&&!l&&(ie({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))},re=function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback;if(ne({required:a,value:t}))return!0;var l=!1;try{l=t===new URL("http://".concat(t)).host}catch(e){}return l||ie({argument:n,message:"".concat(t," ").concat(r),callback:i}),l},oe=function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,l=Number(t),c=l>=0&&l<=99999999;return!(!ne({required:a,value:t})&&!c&&(ie({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))},ae=function(e){var n=e.argument,t=e.value,r=e.message,o=e.type,a=e.required,i=void 0===a||a,l=e.callback,c=ee(t)===o;return!(!ne({required:i,value:t})&&!c&&(ie({argument:n,message:"".concat(t," ").concat(r),callback:l}),1))},ie=function(e){var n=e.argument,t=e.message,r=e.callback,o={code:"argumentError",argument:n,message:t};console.error("Gr4vy - Error",o),null==r||r("argumentError",o)},le=function(e){return te({argument:"element",value:e.element,message:"must be a valid HTML element",callback:e.onEvent})&&te({argument:"form",value:e.form,required:!1,message:"must be a valid HTML form element",callback:e.onEvent})&&ae({argument:"gr4vyId",value:e.gr4vyId,required:!e.iframeHost&&!e.apiHost,type:"string",message:"must be a valid gr4vyId or iframeHost/apiHost",callback:e.onEvent})&&re({argument:"iframeHost",value:e.iframeHost,required:!e.gr4vyId,message:"must be a valid hostname with an optional :port",callback:e.onEvent})&&re({argument:"apiHost",value:e.apiHost,message:"must be a valid hostname with an optional :port",required:!e.gr4vyId,callback:e.onEvent})&&(r=(t={argument:"intent",value:e.intent,message:"must be a valid intent",required:!1,callback:e.onEvent}).argument,a=t.message,l=void 0===(i=t.required)||i,c=t.callback,s="string"==typeof(o=t.value)&&["authorize","capture","approve"].includes(o),!(!ne({required:l,value:o})&&!s&&(ie({argument:r,message:"".concat(o," ").concat(a),callback:c}),1)))&&ae({argument:"onEvent",value:e.onEvent,type:"function",message:"must be a function",required:!1,callback:e.onEvent})&&ae({argument:"token",value:e.token,type:"string",message:"must be a string",callback:e.onEvent})&&ae({argument:"externalIdentifier",value:e.externalIdentifier,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,l="string"==typeof t&&3===t.length;return!(!ne({required:a,value:t})&&!l&&(ie({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))}({argument:"currency",value:e.currency,message:"must be a valid currency format",callback:e.onEvent})&&oe({argument:"amount",value:e.amount,message:"must be valid non-negative number",callback:e.onEvent})&&ae({argument:"debug",value:e.debug,type:"boolean",message:"must be a boolean",required:!1,callback:e.onEvent})&&ae({argument:"buyerExternalIdentifier",value:e.buyerExternalIdentifier,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&ae({argument:"buyerId",value:e.buyerId,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&ae({argument:"environment",value:e.environment,type:"string",message:'must be "production" or "sandbox"',required:!1,callback:e.onEvent})&&function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,l=[!0,!1,"ask"].includes(t);return!(!ne({required:a,value:t})&&!l&&(ie({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))}({argument:"store",value:e.store,message:'must be true, false or "ask"',required:!1})&&ae({argument:"country",value:e.country,type:"string",message:"must be a string ISO country code",required:!0,callback:e.onEvent})&&ae({argument:"display",value:e.display,type:"string",message:'must be "storedOnly", "addOnly", "supportsTokenization" or "all"',required:!1})&&ae({argument:"metadata",value:e.metadata,type:"object",message:"must be an object",required:!1})&&ae({argument:"cartItems",value:e.cartItems,type:"object",message:"must be an array",required:!1})&&ae({argument:"statementDescriptor",value:e.statementDescriptor,type:"object",message:"must be an object",required:!1})&&ae({argument:"secure",value:e.secure,type:"boolean",message:"must be a boolean",required:!1})&&oe({argument:"popupTimeout",value:e.popupTimeout,message:"must be valid non-negative number",required:!1})&&ae({argument:"shippingDetailsId",value:e.shippingDetailsId,required:!1,type:"string",message:"must be a valid uuid"})&&(!!(n={argument:"shippingDetailsId",condition:!e.shippingDetailsId||!(!e.buyerId&&!e.buyerExternalIdentifier),message:"must be used with a buyerId or buyerExternalId"}).condition||(ie({argument:n.argument,message:n.message}),!1))&&ae({argument:"hasBeforeTransaction",value:e.onBeforeTransaction,required:!1,type:"function",message:"must be a valid function that returns a promise"})&&ae({argument:"merchantAccountId",value:e.merchantAccountId,message:"must be a string",required:!1,type:"string"});var n,t,r,o,a,i,l,c,s};function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ce(Object(t),!0).forEach((function(n){ue(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ue(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var de=["amount","currency","intent","apiHost","gr4vyId","token","debug","externalIdentifier","buyerId","buyerExternalIdentifier","environment","store","country","theme","locale","display","apiUrl","customOptions","metadata","paymentSource","cartItems","statementDescriptor","requireSecurityCode","shippingDetailsId","connectionOptions","fullPageReturnUrl","showDeleteButton","merchantAccountId"],pe=new Map,me=0;function fe(t){if(le(t)){var r=E(t),l=X(),c=r.element.dataset.embedId;w(r.element),pe.has(c)&&pe.get(c)(),me+=1,r.element.dataset.embedId=me.toString();var s=document.createElement("div");K(s,l,r.theme);var u=document.createElement("div");U(u,l),r.form?q(r.form,r.onComplete,l,r.onCustomSubmit):Y(r.onComplete,l,r.onCustomSubmit),D(i(),l,r.redirectMode,r.popupTimeout);var d=document.createElement("iframe");A(d,r.iframeSrc,l);var p=e()?n():0;p&&o(l,p),r.element.append(u,s,d);var g=setTimeout((function(){f("Loading Embed UI failed or took too long. Please check that the `gr4vyId` and `environment` values are correct.",t,{debug:!0})}),3e3),y={modeUpdated:l.mode$.next,approvalUrl:l.approvalUrl$.next,resize:function(e){var n;return l.frameHeight$.next(null==e||null===(n=e.frame)||void 0===n?void 0:n.height)},optionsLoaded:l.optionsLoaded$.next,transactionCreated:l.transactionCreated$.next,transactionFailed:l.transactionFailed$.next,transactionCancelled:l.transactionCancelled$.next,appleStartSession:l.appleStartSession$.next,appleCompleteMerchantValidation:l.appleCompleteMerchantValidation$.next,appleCompletePayment:l.appleCompletePayment$.next,appleAbortSession:l.appleAbortSession$.next,googlePaySessionStarted:l.googlePaySessionStarted$.next,googlePaySessionCompleted:l.googlePaySessionCompleted$.next,frameReady:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).version;return e&&O("embed-ui",e),clearTimeout(g),S({type:"updateOptions",data:se(se({},a(r,de)),{},{supportedApplePayVersion:p,supportedGooglePayVersion:1,hasBeforeTransaction:"function"==typeof(null==r?void 0:r.onBeforeTransaction)})})},paymentMethodSelected:l.selectedOption$.next,scrollTo:function(e){var n=e.top;window.scrollTo({top:d.offsetTop+n,left:0,behavior:"smooth"})},beforeTransactionPending:l.beforeTransactionPending$.next,formValidationFailed:l.formValidationFailed$.next},S=h(r.iframeUrl,r.channel,d.contentWindow,(function(e){return m("Page emits",e,{debug:r.debug})})),x=v(r.iframeUrl,r.channel,(function(e){var n;m("Page received",e,{debug:r.debug}),["formUpdate","transactionCreated","transactionFailed","apiError","paymentMethodSelected","transactionCancelled","optionsLoaded"].includes(e.type)&&(null===(n=r.onEvent)||void 0===n||n.call(r,e.type,e.data)),y[e.type]&&y[e.type](e.data)})),_=v(r.apiUrl,r.channel,(function(e){d.contentWindow.postMessage(e,r.iframeUrl)})),j=v(r.iframeUrl,r.channel,b(["approvalErrored","transactionUpdated","approvalCancelled"],(function(e){return d.contentWindow.postMessage(e,r.iframeUrl)})));return l.formSubmit$.subscribe((function(){return S({type:"submitForm"})})),l.beforeTransactionPending$.subscribe((function(){if(null!=r&&r.onBeforeTransaction)return r.onBeforeTransaction(a(r,["metadata"])).then((function(){S({type:"beforeTransactionDone",data:a(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},["externalIdentifier","shippingDetailsId","metadata","token"])})})).catch((function(){S({type:"beforeTransactionError"})}))})),l.approvalCancelled$.subscribe((function(){return S({type:"approvalCancelled"})})),l.applePayAuthorized$.subscribe((function(e){return S({type:"applePayAuthorized",data:e})})),l.appleValidateMerchant$.subscribe((function(e){return S({type:"appleValidateMerchant",data:e})})),l.appleCancelSession$.subscribe((function(){return S({type:"appleCancelSession"})})),l.appleSessionError$.subscribe((function(){return S({type:"appleSessionError"})})),l.appleCompleteSession$.subscribe((function(){return S({type:"appleCompleteSession"})})),window.addEventListener("message",x),window.addEventListener("message",_),window.addEventListener("message",j),O("embed"),pe.set(me.toString(),(function(){window.removeEventListener("message",x),window.removeEventListener("message",_),window.removeEventListener("message",j),delete window.gr4vy})),{submit:function(){l.formSubmit$.next()}}}}}(),r}()},"object"==l(n)&&"object"==l(e)?e.exports=i():(o=[],void 0===(a="function"==typeof(r=i)?r.apply(n,o):r)||(e.exports=a))}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var r={};return(()=>{"use strict";t.r(r),t.d(r,{setup:()=>e});var e=t(884).setup})(),r})()));
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.gr4vy=n():e.gr4vy=n()}(self,(function(){return(()=>{var e={884:function(e,n,t){var r,o,a,i;function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=t.nmd(e),i=function(){return function(){"use strict";var e={588:function(e,n,t){t.r(n),t.d(n,{optionKeys:function(){return Q},setup:function(){return ee}});var r=function(e){var n=new URL("https://".concat(e));return["localhost","127.0.0.1"].includes(n.hostname)&&(n.protocol="http"),n.toString().replace(/\/$/,"")},o=["gr4vyId","environment"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s,u,d=function(e){var n,t,a,c,l,s=e.gr4vyId,u=e.environment,d=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,o),p=(window.crypto||window.msCrypto).getRandomValues(new Uint32Array(4)).join("").slice(0,32),m="sandbox"===u?"sandbox.":"",f=s?"embed.".concat(m).concat(s,".gr4vy.app"):e.iframeHost,v=s?"api.".concat(m).concat(s,".gr4vy.app"):e.apiHost,b=r(f),y=e.form instanceof Element?e.form:document.querySelector(e.form),g=e.element instanceof Element?e.element:document.querySelector(e.element);return i(i({store:"ask",display:"all",apiHost:v,apiUrl:r(v),iframeHost:f,iframeUrl:b,iframeSrc:(a=b,c={parentUrl:"".concat(document.location.protocol,"//").concat(document.location.host),font:null!==(n=e.theme)&&void 0!==n&&null!==(t=n.fonts)&&void 0!==t&&t.body?encodeURIComponent(e.theme.fonts.body):void 0,channel:p},l=new URL(a),Object.keys(c).forEach((function(e){void 0!==c[e]&&l.searchParams.set(e,c[e])})),l.toString()),channel:p},d),{},{element:g,form:y})},p=t(88),m=t.n(p),f=new Map,v=0,b=function(e){if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.lastChild)},y=!0,g=String.raw,h=function(e,n){y&&(t(496),y=!1),e.className="gr4vy__overlay gr4vy__overlay--hidden";var r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");a.className="gr4vy__overlay__notice ",a.appendChild(r),a.appendChild(o);var i=document.createElement("div");i.className="gr4vy__overlay__link",i.addEventListener("click",(function(){return n.approvalLost$.next()}));var c=document.createElement("div");c.className="gr4vy__overlay__link",c.addEventListener("click",(function(){return n.approvalCancelled$.next()}));var l=document.createElement("div");l.className="gr4vy__overlay__container",e.appendChild(l);var u=function(){e.className="gr4vy__overlay gr4vy__overlay--hidden",b(l)},d=function(){e.className="gr4vy__overlay gr4vy__overlay--visible"};n.approvalStarted$.subscribe((function(){var e,t,s,u,p;t=(e=n.mode$.value().overlay).title,s=e.link,u=e.message,p=e.cancel,r.textContent=t,i.textContent=s,o.textContent=u,c.textContent=p,l.appendChild(a),l.appendChild(i),l.appendChild(c),d()})),n.approvalCompleted$.subscribe(u),n.approvalCancelled$.subscribe(u),n.transactionFailed$.subscribe(u),n.approvalUrl$.subscribe((function(e){var t,r,o,a;null!==(t=n.mode$.value())&&void 0!==t&&t.overlay||(r=e,l.innerHTML=g(s||(o=['\n      <iframe\n        src="','"\n        frameborder="0"\n        class="gr4vy__frame"\n        allowtransparency="true"\n      ></iframe>\n    '],a||(a=o.slice(0)),s=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))),r),d())})),n.transactionCreated$.subscribe(u)},w=function(e){return{current:e}},S=String.raw,x=function(e){var n,t,r=e.title,o=e.message;return S(u||(n=["\n  <html>\n    <head>\n      <title>","</title>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <style>\n        html,\n        body {\n          margin: 0;\n          padding: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n            'Segoe UI Symbol';\n          text-align: center;\n        }\n        .gr4vy__status {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        @keyframes gr4vy-sweep {\n          0% {\n            background-position: 0 0;\n          }\n          100% {\n            background-position: 600px 0;\n          }\n        }\n\n        .gr4vy__loading {\n          height: 8px;\n          background-image: linear-gradient(\n            90deg,\n            #009cde 25%,\n            #bee7fa 25%,\n            #bee7fa 75%,\n            #009cde 75%\n          );\n          background-size: 600px 8px;\n          -webkit-animation: gr4vy-sweep 2s infinite\n            cubic-bezier(0.2, 0.75, 0.77, 0.25);\n          animation: gr4vy-sweep 2s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n        }\n      </style>\n    </head>\n    <div class=\"gr4vy__loading\"></div>\n    <div class=\"gr4vy__status\">\n      <p>","</p>\n    </div>\n  </html>\n"],t||(t=n.slice(0)),u=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))),r,o)},_=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=t.innerWidth/2-e/2+t.screenLeft,o=t.innerHeight/2-n/2+t.screenTop;return"width=".concat(e,",height=").concat(n,",top=").concat(o,",left=").concat(r)},O=function(e,n,t){var r=open("","loading",e);r.document.write(n);var o,a,i,c=(o=function(){return r.closed},a=t,i=setInterval((function(){!0===o()&&(clearInterval(i),a())}),10),function(){return clearInterval(i)});return{popup:r,stopCallback:c}},j=function(e,n){e.location.href=n};function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var E=function(e,n){n.removeAttribute("style"),function(e){var n=[];return Object.keys(e).forEach((function(t){Object.keys(e[t]).forEach((function(r){n.push(["--gr4vy-".concat(t,"-").concat(r),"".concat(e[t][r])])}))})),n}(e).forEach((function(e){var t,r=function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),2!==a.length);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(t)||function(e,n){if(e){if("string"==typeof e)return k(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],a=r[1];return n.style.setProperty(o,a)}))};function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){P(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var I,M={none:"0",thin:"1px",thick:"2px"},A={rounded:"4px",subtle:"2px",none:"0"},U=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(n).reduce((function(t,r){return C(C({},t),{},P({},r,e[n[r]]))}),{})},q=String.raw,H=!0,L=function(e){var n=e,t=[];return{subscribe:function(e){var n=t.push(e);return{unsubscribe:function(){t.splice(n-1)}}},next:function(e){n=e,t.forEach((function(e){return setTimeout((function(){return e(n)}),0)}))},value:function(){return n}}};function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var z=function(e,n,t){t&&console.log("Gr4vy - ".concat(e),n)},D=function(e,n,t){return function(r){e===r.origin&&r.data.channel===n&&t(r.data)}};function N(e){return(N="function"==typeof Symbol&&"symbol"==c(Symbol.iterator)?function(e){return c(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":c(e)})(e)}var V=function(e){var n=e.required,t=e.value;return!n&&[void 0,null].includes(t)},B=function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback;if(t instanceof Element)return!0;var c=document.querySelector(t);return!(!V({required:a,value:t})&&!c&&(Z({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))},R=function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback;if(V({required:a,value:t}))return!0;var c=!1;try{c=t===new URL("http://".concat(t)).host}catch(e){}return c||Z({argument:n,message:"".concat(t," ").concat(r),callback:i}),c},W=function(e){var n=e.argument,t=e.value,r=e.message,o=e.type,a=e.required,i=void 0===a||a,c=e.callback,l=N(t)===o;return!(!V({required:i,value:t})&&!l&&(Z({argument:n,message:"".concat(t," ").concat(r),callback:c}),1))},Z=function(e){var n=e.argument,t=e.message,r=e.callback,o={code:"argumentError",argument:n,message:t};console.error("Gr4vy - Error",o),null==r||r("argumentError",o)};function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){K(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function K(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Q=["amount","currency","intent","apiHost","token","debug","externalIdentifier","buyerId","buyerExternalIdentifier","environment","store","country","theme","locale","display","apiUrl","customOptions","metadata","paymentSource","cartItems","statementDescriptor"],X=new Map,Y=0;function ee(e){if(function(e){return B({argument:"element",value:e.element,message:"must be a valid HTML element",callback:e.onEvent})&&B({argument:"form",value:e.form,required:!1,message:"must be a valid HTML form element",callback:e.onEvent})&&W({argument:"gr4vyId",value:e.gr4vyId,required:!e.iframeHost&&!e.apiHost,type:"string",message:"must be a valid gr4vyId or iframeHost/apiHost",callback:e.onEvent})&&R({argument:"iframeHost",value:e.iframeHost,required:!e.gr4vyId,message:"must be a valid hostname with an optional :port",callback:e.onEvent})&&R({argument:"apiHost",value:e.apiHost,message:"must be a valid hostname with an optional :port",required:!e.gr4vyId,callback:e.onEvent})&&(t=(n={argument:"intent",value:e.intent,message:"must be a valid intent",required:!1,callback:e.onEvent}).argument,o=n.message,i=void 0===(a=n.required)||a,c=n.callback,l="string"==typeof(r=n.value)&&["authorize","capture","approve"].includes(r),!(!V({required:i,value:r})&&!l&&(Z({argument:t,message:"".concat(r," ").concat(o),callback:c}),1)))&&W({argument:"onEvent",value:e.onEvent,type:"function",message:"must be a function",required:!1,callback:e.onEvent})&&W({argument:"token",value:e.token,type:"string",message:"must be a string",callback:e.onEvent})&&W({argument:"externalIdentifier",value:e.externalIdentifier,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,c="string"==typeof t&&3===t.length;return!(!V({required:a,value:t})&&!c&&(Z({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))}({argument:"currency",value:e.currency,message:"must be a valid currency format",callback:e.onEvent})&&function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,c=Number(t),l=c>=0&&c<=999999;return!(!V({required:a,value:t})&&!l&&(Z({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))}({argument:"amount",value:e.amount,message:"must be valid non-negative number",callback:e.onEvent})&&W({argument:"debug",value:e.debug,type:"boolean",message:"must be a boolean",required:!1,callback:e.onEvent})&&W({argument:"buyerExternalIdentifier",value:e.buyerExternalIdentifier,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&W({argument:"buyerId",value:e.buyerId,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&W({argument:"environment",value:e.environment,type:"string",message:'must be "production" or "sandbox"',required:!1,callback:e.onEvent})&&function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,c=[!0,!1,"ask"].includes(t);return!(!V({required:a,value:t})&&!c&&(Z({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))}({argument:"store",value:e.store,message:'must be true, false or "ask"',required:!1})&&W({argument:"country",value:e.country,type:"string",message:"must be a string ISO country code",required:!0,callback:e.onEvent})&&W({argument:"display",value:e.display,type:"string",message:'must be "storedOnly", "addOnly", "supportsTokenization" or "all"',required:!1})&&W({argument:"metadata",value:e.metadata,type:"object",message:"must be an object",required:!1})&&W({argument:"cartItems",value:e.cartItems,type:"object",message:"must be an array",required:!1})&&W({argument:"statementDescriptor",value:e.statementDescriptor,type:"object",message:"must be an object",required:!1});var n,t,r,o,a,i,c,l}(e)){var n,r=d(e),o=((n={mode$:L(),approvalUrl$:L(),approvalStarted$:L(),approvalCancelled$:L(),approvalLost$:L(),approvalCompleted$:L(),frameHeight$:L(0),optionsLoaded$:L(!1),formSubmit$:L(),submit$:L(),transactionCreated$:L(),transactionFailed$:L(),appleStartSession$:L(),appleValidateMerchant$:L(),appleCompleteMerchantValidation$:L(),applePayAuthorized$:L(),appleCompletePayment$:L(),appleAbortSession$:L(),appleSessionError$:L(),appleCancelSession$:L(),appleCompleteSession$:L(),selectedOption$:L()}).formSubmit$.subscribe((function(){var e;null!==(e=n.mode$.value())&&void 0!==e&&e.popup&&n.approvalStarted$.next()})),n.transactionCreated$.subscribe((function(){var e;null!==(e=n.mode$.value())&&void 0!==e&&e.popup&&n.approvalCompleted$.next()})),n),a=r.element.dataset.embedId;b(r.element),X.has(a)&&X.get(a)(),Y+=1,r.element.dataset.embedId=Y.toString();var i=document.createElement("div");!function(e,n,r){var o,a;H&&(t(796),H=!1),r&&E(function(e){var n={};return null!=e&&e.colors&&(n.colors=C({},e.colors)),null!=e&&e.borderWidths&&(n.borderWidths=U(M,C({},e.borderWidths))),null!=e&&e.radii&&(n.radii=U(A,C({},e.radii))),n}(r),e),e.innerHTML=q(I||(o=['<div class="gr4vy__container">\n    <div class="gr4vy__skeleton">\n      <div class="gr4vy__skeleton__radio"></div>\n      <div class="gr4vy__skeleton__block"></div>\n    </div>\n    <div class="gr4vy__skeleton">\n      <div class="gr4vy__skeleton__radio"></div>\n      <div class="gr4vy__skeleton__block"></div>\n    </div>\n  </div>'],a||(a=o.slice(0)),I=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}})))),n.optionsLoaded$.subscribe((function(){return e.remove()}))}(i,o,r.theme);var c,l,s,u=document.createElement("div");h(u,o),r.form?function(e,n,t,r){parseInt(e.dataset.formNapperId)>0&&(f.get(e.dataset.formNapperId).detach(),f.delete(e.dataset.formNapperId)),v+=1,e.dataset.formNapperId=String(v);var o=new(m())(e);f.set(v.toString(),o),o.hijack((function(){var e;"custom"===(null===(e=t.selectedOption$.value())||void 0===e?void 0:e.mode)?r({method:t.selectedOption$.value().method}):t.formSubmit$.next()})),t.transactionCreated$.subscribe((function(e){var t;return o.inject("gr4vy_transaction_id",e.id),o.inject("gr4vy_transaction_status",e.status),null!=e&&null!==(t=e.paymentMethod)&&void 0!==t&&t.id&&o.inject("gr4vy_transaction_payment_method_id",e.paymentMethod.id),"function"==typeof n?n(e):o.submit()}))}(r.form,r.onComplete,o,r.onCustomSubmit):(c=r.onComplete,l=o,s=r.onCustomSubmit,l.submit$.subscribe((function(){var e;"custom"===(null===(e=l.selectedOption$.value())||void 0===e?void 0:e.mode)?s({method:l.selectedOption$.value().method}):l.formSubmit$.next()})),l.transactionCreated$.subscribe((function(e){c&&c(e)}))),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w(),n=arguments.length>1?arguments[1]:void 0;n.approvalStarted$.subscribe((function(){e.current=O(_(500,589),x(n.mode$.value().popup),(function(){return n.approvalCancelled$.next()}))})),n.approvalUrl$.subscribe((function(n){e.current&&j(e.current.popup,n)})),n.approvalLost$.subscribe((function(){e.current.stopCallback(),e.current.popup.close(),n.approvalStarted$.next();var t=n.approvalUrl$.value();t&&n.approvalUrl$.next(t)})),n.approvalCancelled$.subscribe((function(){var n;null===(n=e.current)||void 0===n||n.popup.close()})),n.approvalCompleted$.subscribe((function(){var n;null===(n=e.current)||void 0===n||n.popup.close()})),n.transactionFailed$.subscribe((function(){var n,t;null===(n=e.current)||void 0===n||n.stopCallback(),null===(t=e.current)||void 0===t||t.popup.close()}))}(w(),o);var p=document.createElement("iframe");!function(e,n,t){e.src=n,e.title="Secure payment frame - Gr4vy",e.style.visibility="hidden",e.style.display="none",e.style.width="100%",e.style.height="0px",e.style.border="0",e.style.overflow="hidden",e.setAttribute("frameBorder","0"),e.setAttribute("scrolling","no"),t.frameHeight$.subscribe((function(n){"unset"===e.style.visibility&&(e.style.height="".concat(n,"px"))})),t.optionsLoaded$.subscribe((function(){e.style.visibility="unset",e.style.display="unset"}))}(p,r.iframeSrc,o);var y=function(){var e=!1;try{e=window.ApplePaySession&&ApplePaySession.canMakePayments()&&ApplePaySession.supportsVersion(3)}catch(e){}return e}()?ApplePaySession.supportsVersion(5)?5:ApplePaySession.supportsVersion(4)?4:ApplePaySession.supportsVersion(3)?3:null:0;y&&function(e,n){var t;e.appleStartSession$.subscribe((function(r){try{(t=new ApplePaySession(n,r)).onvalidatemerchant=function(n){e.appleValidateMerchant$.next(n.validationURL)},t.onpaymentauthorized=function(n){e.applePayAuthorized$.next(n.payment.token)},t.oncancel=function(){e.appleCancelSession$.next()},t.begin()}catch(n){e.appleSessionError$.next()}})),e.appleCompleteMerchantValidation$.subscribe((function(e){t.completeMerchantValidation(e)})),e.appleAbortSession$.subscribe((function(){var e;(null===(e=t)||void 0===e?void 0:e.abort)&&t.abort()})),e.appleCompletePayment$.subscribe((function(n){n?t.completePayment(ApplePaySession.STATUS_SUCCESS):t.completePayment(ApplePaySession.STATUS_FAILURE),e.appleCompleteSession$.next()}))}(o,y),r.element.append(u,i,p);var g,S,k={modeUpdated:o.mode$.next,approvalUrl:o.approvalUrl$.next,resize:function(e){var n;return o.frameHeight$.next(null==e||null===(n=e.frame)||void 0===n?void 0:n.height)},optionsLoaded:o.optionsLoaded$.next,transactionCreated:o.transactionCreated$.next,transactionFailed:o.transactionFailed$.next,appleStartSession:o.appleStartSession$.next,appleCompleteMerchantValidation:o.appleCompleteMerchantValidation$.next,appleCompletePayment:o.appleCompletePayment$.next,appleAbortSession:o.appleAbortSession$.next,frameReady:function(){return $({type:"updateOptions",data:J(J({},(e=r,n=Q,n.reduce((function(n,t){return n[t]=e[t],n}),{}))),{},{supportedApplePayVersion:y})});var e,n},paymentMethodSelected:o.selectedOption$.next},$=function(e,n,t,r){return function(o){t.postMessage(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){F(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({channel:n},o),e),r&&r(o)}}(r.iframeUrl,r.channel,p.contentWindow,(function(e){return z("Page emits",e,r.debug)})),P=D(r.iframeUrl,r.channel,(function(e){var n;z("Page received",e,r.debug),["formUpdate","transactionCreated","transactionFailed","apiError","paymentMethodSelected","transactionCancelled","optionsLoaded"].includes(e.type)&&(null===(n=r.onEvent)||void 0===n||n.call(r,e.type,e.data)),k[e.type]&&k[e.type](e.data)})),N=D(r.apiUrl,r.channel,(function(e){p.contentWindow.postMessage(e,r.iframeUrl)})),G=D(r.iframeUrl,r.channel,(g=["approvalErrored","transactionUpdated"],S=function(e){return p.contentWindow.postMessage(e,r.iframeUrl)},function(e){g.includes(e.type)&&S(e)}));return o.formSubmit$.subscribe((function(){return $({type:"submitForm"})})),o.approvalCancelled$.subscribe((function(){return $({type:"approvalCancelled"})})),o.applePayAuthorized$.subscribe((function(e){return $({type:"applePayAuthorized",data:e})})),o.appleValidateMerchant$.subscribe((function(e){return $({type:"appleValidateMerchant",data:e})})),o.appleCancelSession$.subscribe((function(){return $({type:"appleCancelSession"})})),o.appleSessionError$.subscribe((function(){return $({type:"appleSessionError"})})),o.appleCompleteSession$.subscribe((function(){return $({type:"appleCompleteSession"})})),window.addEventListener("message",P),window.addEventListener("message",N),window.addEventListener("message",G),X.set(Y.toString(),(function(){window.removeEventListener("message",P),window.removeEventListener("message",N),window.removeEventListener("message",G)})),{submit:function(){o.formSubmit$.next()}}}}},381:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(609),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".gr4vy__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 100vh;\n  z-index: 100;\n  transition: background-color 0.2s linear, max-height 0s linear;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gr4vy__overlay--visible {\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n\n.gr4vy__overlay__container {\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,\n    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  font-size: 1rem;\n  text-align: center;\n  font-weight: bold;\n}\n\n.gr4vy__overlay__container > * + * {\n  margin-top: 32px;\n}\n\n.gr4vy__overlay__notice > * + * {\n  margin-top: 8px;\n}\n\n.gr4vy__overlay--hidden {\n  max-height: 0;\n  backdrop-filter: unset;\n  background-color: rgba(0, 0, 0, 0);\n  transition: background-color 0.2s linear, max-height 0s linear;\n  transition-delay: 0s, 0.2s;\n  overflow: hidden;\n}\n\n.gr4vy__overlay__link {\n  font-weight: normal;\n  text-decoration: underline;\n  font-weight: normal;\n  color: white;\n  display: block;\n  cursor: pointer;\n}\n\n.gr4vy__frame {\n  height: 100vh;\n  width: 100vw;\n}\n\n@media screen and (min-width: 500px) and (min-height: 350px) {\n  .gr4vy__frame {\n    height: 250px;\n    width: 400px;\n  }\n}\n\n@media screen and (min-width: 500px) and (min-height: 490px) {\n  .gr4vy__frame {\n    height: 390px;\n    width: 400px;\n  }\n}\n\n@media screen and (min-width: 700px) and (min-height: 500px) {\n  .gr4vy__frame {\n    height: 400px;\n    width: 600px;\n  }\n}\n\n@media screen and (min-width: 700px) and (min-height: 600px) {\n  .gr4vy__frame {\n    height: 500px;\n    width: 600px;\n  }\n}\n",""]);var a=o},514:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(609),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"@keyframes gr4vy-sweep {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n\n.gr4vy__skeleton {\n  display: flex;\n  border-bottom: var(--gr4vy-borderWidths-container, 1px) solid\n    var(--gr4vy-colors-containerBorder, #f2f2f2);\n  padding: 16px;\n}\n\n.gr4vy__skeleton:last-child {\n  border-bottom: none;\n}\n\n.gr4vy__skeleton__radio {\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  background-color: var(--gr4vy-colors-containerBorder, #f2f2f2);\n}\n\n.gr4vy__skeleton__block {\n  flex-grow: 1;\n  height: 16px;\n  background-image: linear-gradient(\n    90deg,\n    var(--gr4vy-colors-containerBorder, #f2f2f2) 30%,\n    var(--gr4vy-colors-containerBackground, #ffffff) 50%,\n    var(--gr4vy-colors-containerBorder, #f2f2f2) 70%\n  );\n  background-size: 600px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  margin-left: 16px;\n  border-radius: var(--gr4vy-radii-input, 0);\n  -webkit-animation: gr4vy-sweep 1s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n  animation: gr4vy-sweep 1s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n}\n.gr4vy__container {\n  border: var(--gr4vy-borderWidths-container, 1px) solid\n    var(--gr4vy-colors-containerBorder, #f2f2f2);\n  border-radius: var(--gr4vy-radii-container, 0);\n  background: var(--gr4vy-colors-pageBackground, #ffffff);\n  max-width: 480px;\n}\n",""]);var a=o},609:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},88:function(e,n,t){function r(e){if(("string"==typeof e||e instanceof String)&&(e=document.getElementById(e)),!(e instanceof HTMLFormElement))throw new TypeError("FormNapper requires an HTMLFormElement element or the id string of one.");this.htmlForm=e}r.prototype.hijack=function(e){this.submitHandler||(this.submitHandler=function(n){n.preventDefault?n.preventDefault():n.returnValue=!1,e(n)},null!=t.g.addEventListener?this.htmlForm.addEventListener("submit",this.submitHandler,!1):null!=t.g.attachEvent?this.htmlForm.attachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=this.submitHandler)},r.prototype.inject=function(e,n){var t=this.htmlForm.querySelector('input[name="'+e+'"]');return null==t&&((t=document.createElement("input")).type="hidden",t.name=e,this.htmlForm.appendChild(t)),t.value=n,t},r.prototype.submit=function(){HTMLFormElement.prototype.submit.call(this.htmlForm)},r.prototype.detach=function(){this.submitHandler&&(null!=t.g.removeEventListener?this.htmlForm.removeEventListener("submit",this.submitHandler,!1):null!=t.g.detachEvent?this.htmlForm.detachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=null,delete this.submitHandler)},e.exports=r},496:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(62),o=t.n(r),a=t(381);o()(a.Z,{insert:"head",singleton:!1});var i=a.Z.locals||{}},796:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(62),o=t.n(r),a=t(514);o()(a.Z,{insert:"head",singleton:!1});var i=a.Z.locals||{}},62:function(e,n,t){var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],l=n.base?c[0]+n.base:c[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=i(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:v(p,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function v(e,n){var t,r,o;if(n.singleton){var a=f++;t=m||(m=l(n)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=l(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var l=c(e,n),s=0;s<t.length;s++){var u=i(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=l}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}return t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==("undefined"==typeof globalThis?"undefined":c(globalThis)))return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==("undefined"==typeof window?"undefined":c(window)))return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(588)}()},"object"==c(n)&&"object"==c(e)?e.exports=i():(o=[],void 0===(a="function"==typeof(r=i)?r.apply(n,o):r)||(e.exports=a))},723:(e,n,t)=>{"use strict";t.r(n),t.d(n,{setup:()=>r});var r=t(884).setup}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}return t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t(723)})()}));
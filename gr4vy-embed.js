!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.gr4vy=n():e.gr4vy=n()}(self,(function(){return(()=>{var e={884:function(e,n,t){var r,o,a,i;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=t.nmd(e),i=function(){return function(){"use strict";var e={932:function(e,n,t){t.r(n),t.d(n,{optionKeys:function(){return re},setup:function(){return ie}});var r=function(e,n){return n.reduce((function(n,t){return void 0!==e[t]&&null!==e[t]&&(n[t]=e[t]),n}),{})},o=function(e){return{current:e}},a=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=new URL("https://".concat(e));return n||(t.protocol="http"),t.toString().replace(/\/$/,"")};function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u={debug:!1,level:"log"},d=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,r=c(c({},u),t),o=r.debug,a=r.level;o&&console[a]("Gr4vy - ".concat(e),n)},p=function(e,n,t){return function(r){e===r.origin&&r.data.channel===n&&t(r.data)}};function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=function(e){if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.lastChild)},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2.11.3";window.gr4vy||(window.gr4vy={version:{}}),window.gr4vy.version||(window.gr4vy.version={}),window.gr4vy.version[e]=n},y=["gr4vyId","environment"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){w(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O,S,x=function(e){var n,t,r,o,i,l=e.gr4vyId,c=e.environment,s=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,y),u=(window.crypto||window.msCrypto).getRandomValues(new Uint32Array(4)).join("").slice(0,32),d="sandbox"===c?"sandbox.":"",p=l?"embed.".concat(d).concat(l,".gr4vy.app"):e.iframeHost,m=l?"api.".concat(d).concat(l,".gr4vy.app"):e.apiHost,v=a(p,e.secure),f=e.form instanceof Element?e.form:document.querySelector(e.form),b=e.element instanceof Element?e.element:document.querySelector(e.element);return h(h({store:"ask",display:"all",apiHost:m,apiUrl:a(m,e.secure),gr4vyId:l,iframeHost:p,iframeUrl:v,iframeSrc:(r=v,o={parentUrl:"".concat(document.location.protocol,"//").concat(document.location.host),font:null!==(n=e.theme)&&void 0!==n&&null!==(t=n.fonts)&&void 0!==t&&t.body?encodeURIComponent(e.theme.fonts.body):void 0,channel:u},i=new URL(r),Object.keys(o).forEach((function(e){void 0!==o[e]&&i.searchParams.set(e,o[e])})),i.toString()),channel:u},s),{},{element:b,form:f,environment:c})},_=t(88),j=t.n(_),$=new Map,k=0,E=!0,P=String.raw,C=function(e,n){E&&(t(496),E=!1),e.className="gr4vy__overlay gr4vy__overlay--hidden";var r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");a.className="gr4vy__overlay__notice ",a.appendChild(r),a.appendChild(o);var i=document.createElement("div");i.className="gr4vy__overlay__link",i.addEventListener("click",(function(){return n.approvalLost$.next()}));var l=document.createElement("div");l.className="gr4vy__overlay__link",l.addEventListener("click",(function(){return n.approvalCancelled$.next()}));var c=document.createElement("div");c.className="gr4vy__overlay__container",e.appendChild(c);var s=function(){e.className="gr4vy__overlay gr4vy__overlay--hidden",f(c)},u=function(){e.className="gr4vy__overlay gr4vy__overlay--visible"},d=function(e){var n=e.title,t=e.link,s=e.message,u=e.cancel;r.textContent=n,i.textContent=t,o.textContent=s,l.textContent=u,c.appendChild(a),c.appendChild(i),c.appendChild(l)};n.approvalStarted$.subscribe((function(){var e=n.mode$.value().overlay;d(e),u()})),n.approvalCompleted$.subscribe(s),n.approvalCancelled$.subscribe(s),n.transactionFailed$.subscribe(s),n.transactionCancelled$.subscribe(s),n.approvalUrl$.subscribe((function(e){var t,r,o,a;null!==(t=n.mode$.value())&&void 0!==t&&t.popup||(r=e,c.innerHTML=P(O||(o=['\n      <iframe\n        src="','"\n        frameborder="0"\n        class="gr4vy__frame"\n        allowtransparency="true"\n        sandbox="allow-forms allow-popups allow-same-origin allow-scripts"\n      ></iframe>\n    '],a||(a=o.slice(0)),O=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))),r),u())})),n.showOverlay$.subscribe((function(){var e=n.mode$.value().overlay;d(e),u()})),n.hideOverlay$.subscribe(s),n.transactionCreated$.subscribe(s)},I=String.raw,A=function(e){var n,t,r=e.title,o=e.message;return I(S||(n=["\n  <html>\n    <head>\n      <title>","</title>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <style>\n        html,\n        body {\n          margin: 0;\n          padding: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n            'Segoe UI Symbol';\n          text-align: center;\n        }\n        .gr4vy__status {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        @keyframes gr4vy-sweep {\n          0% {\n            background-position: 0 0;\n          }\n          100% {\n            background-position: 600px 0;\n          }\n        }\n\n        .gr4vy__loading {\n          height: 8px;\n          background-image: linear-gradient(\n            90deg,\n            #009cde 25%,\n            #bee7fa 25%,\n            #bee7fa 75%,\n            #009cde 75%\n          );\n          background-size: 600px 8px;\n          -webkit-animation: gr4vy-sweep 2s infinite\n            cubic-bezier(0.2, 0.75, 0.77, 0.25);\n          animation: gr4vy-sweep 2s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n        }\n      </style>\n    </head>\n    <div class=\"gr4vy__loading\"></div>\n    <div class=\"gr4vy__status\">\n      <p>","</p>\n    </div>\n  </html>\n"],t||(t=n.slice(0)),S=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))),r,o)},M=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=t.innerWidth/2-e/2+t.screenLeft,o=t.innerHeight/2-n/2+t.screenTop;return"width=".concat(e,",height=").concat(n,",top=").concat(o,",left=").concat(r)},q=function(e,n,t){var r=open("","loading",e);r.document.write(n);var o,a,i,l=(o=function(){return r.closed},a=t,i=setInterval((function(){!0===o()&&(clearInterval(i),a())}),10),function(){return clearInterval(i)});return{popup:r,stopCallback:l}},U=function(e,n){e.location.href=n};function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var H=function(e,n){n.removeAttribute("style"),function(e){var n=[];return Object.keys(e).forEach((function(t){Object.keys(e[t]).forEach((function(r){n.push(["--gr4vy-".concat(t,"-").concat(r),"".concat(e[t][r])])}))})),n}(e).forEach((function(e){var t,r=function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),2!==a.length);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(t)||function(e,n){if(e){if("string"==typeof e)return L(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?L(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],a=r[1];return n.style.setProperty(o,a)}))};function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){D(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var z,N={none:"0",thin:"1px",thick:"2px"},V={rounded:"4px",subtle:"2px",none:"0"},B=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(n).reduce((function(t,r){return F(F({},t),{},D({},r,e[n[r]]))}),{})},R=String.raw,W=!0,Z=function(e){var n=e,t=[];return{subscribe:function(e){var n=t.push(e);return{unsubscribe:function(){t.splice(n-1)}}},next:function(e){n=e,t.forEach((function(e){return setTimeout((function(){return e(n)}),0)}))},value:function(){return n}}};function G(e){return(G="function"==typeof Symbol&&"symbol"==l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)})(e)}var J=function(e){var n=e.required,t=e.value;return!n&&[void 0,null].includes(t)},K=function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback;if(t instanceof Element)return!0;var l=document.querySelector(t);return!(!J({required:a,value:t})&&!l&&(Y({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))},Q=function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback;if(J({required:a,value:t}))return!0;var l=!1;try{l=t===new URL("http://".concat(t)).host}catch(e){}return l||Y({argument:n,message:"".concat(t," ").concat(r),callback:i}),l},X=function(e){var n=e.argument,t=e.value,r=e.message,o=e.type,a=e.required,i=void 0===a||a,l=e.callback,c=G(t)===o;return!(!J({required:i,value:t})&&!c&&(Y({argument:n,message:"".concat(t," ").concat(r),callback:l}),1))},Y=function(e){var n=e.argument,t=e.message,r=e.callback,o={code:"argumentError",argument:n,message:t};console.error("Gr4vy - Error",o),null==r||r("argumentError",o)};function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){te(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function te(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var re=["amount","currency","intent","apiHost","gr4vyId","token","debug","externalIdentifier","buyerId","buyerExternalIdentifier","environment","store","country","theme","locale","display","apiUrl","customOptions","metadata","paymentSource","cartItems","statementDescriptor"],oe=new Map,ae=0;function ie(e){if(function(e){return K({argument:"element",value:e.element,message:"must be a valid HTML element",callback:e.onEvent})&&K({argument:"form",value:e.form,required:!1,message:"must be a valid HTML form element",callback:e.onEvent})&&X({argument:"gr4vyId",value:e.gr4vyId,required:!e.iframeHost&&!e.apiHost,type:"string",message:"must be a valid gr4vyId or iframeHost/apiHost",callback:e.onEvent})&&Q({argument:"iframeHost",value:e.iframeHost,required:!e.gr4vyId,message:"must be a valid hostname with an optional :port",callback:e.onEvent})&&Q({argument:"apiHost",value:e.apiHost,message:"must be a valid hostname with an optional :port",required:!e.gr4vyId,callback:e.onEvent})&&(t=(n={argument:"intent",value:e.intent,message:"must be a valid intent",required:!1,callback:e.onEvent}).argument,o=n.message,i=void 0===(a=n.required)||a,l=n.callback,c="string"==typeof(r=n.value)&&["authorize","capture","approve"].includes(r),!(!J({required:i,value:r})&&!c&&(Y({argument:t,message:"".concat(r," ").concat(o),callback:l}),1)))&&X({argument:"onEvent",value:e.onEvent,type:"function",message:"must be a function",required:!1,callback:e.onEvent})&&X({argument:"token",value:e.token,type:"string",message:"must be a string",callback:e.onEvent})&&X({argument:"externalIdentifier",value:e.externalIdentifier,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,l="string"==typeof t&&3===t.length;return!(!J({required:a,value:t})&&!l&&(Y({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))}({argument:"currency",value:e.currency,message:"must be a valid currency format",callback:e.onEvent})&&function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,l=Number(t),c=l>=0&&l<=99999999;return!(!J({required:a,value:t})&&!c&&(Y({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))}({argument:"amount",value:e.amount,message:"must be valid non-negative number",callback:e.onEvent})&&X({argument:"debug",value:e.debug,type:"boolean",message:"must be a boolean",required:!1,callback:e.onEvent})&&X({argument:"buyerExternalIdentifier",value:e.buyerExternalIdentifier,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&X({argument:"buyerId",value:e.buyerId,type:"string",message:"must be a string",required:!1,callback:e.onEvent})&&X({argument:"environment",value:e.environment,type:"string",message:'must be "production" or "sandbox"',required:!1,callback:e.onEvent})&&function(e){var n=e.argument,t=e.value,r=e.message,o=e.required,a=void 0===o||o,i=e.callback,l=[!0,!1,"ask"].includes(t);return!(!J({required:a,value:t})&&!l&&(Y({argument:n,message:"".concat(t," ").concat(r),callback:i}),1))}({argument:"store",value:e.store,message:'must be true, false or "ask"',required:!1})&&X({argument:"country",value:e.country,type:"string",message:"must be a string ISO country code",required:!0,callback:e.onEvent})&&X({argument:"display",value:e.display,type:"string",message:'must be "storedOnly", "addOnly", "supportsTokenization" or "all"',required:!1})&&X({argument:"metadata",value:e.metadata,type:"object",message:"must be an object",required:!1})&&X({argument:"cartItems",value:e.cartItems,type:"object",message:"must be an array",required:!1})&&X({argument:"statementDescriptor",value:e.statementDescriptor,type:"object",message:"must be an object",required:!1})&&X({argument:"secure",value:e.secure,type:"boolean",message:"must be a boolean",required:!1});var n,t,r,o,a,i,l,c}(e)){var n,a=x(e),i=((n={mode$:Z(),approvalUrl$:Z(),approvalStarted$:Z(),approvalCancelled$:Z(),approvalLost$:Z(),approvalCompleted$:Z(),frameHeight$:Z(0),optionsLoaded$:Z(!1),formSubmit$:Z(),submit$:Z(),transactionCreated$:Z(),transactionFailed$:Z(),transactionCancelled$:Z(),appleStartSession$:Z(),appleValidateMerchant$:Z(),appleCompleteMerchantValidation$:Z(),applePayAuthorized$:Z(),appleCompletePayment$:Z(),appleAbortSession$:Z(),appleSessionError$:Z(),appleCancelSession$:Z(),appleCompleteSession$:Z(),googlePaySessionStarted$:Z(),googlePaySessionCompleted$:Z(),selectedOption$:Z(),showOverlay$:Z(),hideOverlay$:Z()}).formSubmit$.subscribe((function(){var e;null!==(e=n.mode$.value())&&void 0!==e&&e.popup&&n.approvalStarted$.next()})),n.googlePaySessionStarted$.subscribe((function(){n.showOverlay$.next()})),n.googlePaySessionCompleted$.subscribe((function(){n.hideOverlay$.next()})),n.transactionCreated$.subscribe((function(){var e;null!==(e=n.mode$.value())&&void 0!==e&&e.popup&&n.approvalCompleted$.next()})),n),l=a.element.dataset.embedId;f(a.element),oe.has(l)&&oe.get(l)(),ae+=1,a.element.dataset.embedId=ae.toString();var s=document.createElement("div");!function(e,n,r){var o,a;W&&(t(796),W=!1),r&&H(function(e){var n={};return null!=e&&e.colors&&(n.colors=F({},e.colors)),null!=e&&e.borderWidths&&(n.borderWidths=B(N,F({},e.borderWidths))),null!=e&&e.radii&&(n.radii=B(V,F({},e.radii))),n}(r),e),e.innerHTML=R(z||(o=['<div class="gr4vy__container">\n    <div class="gr4vy__skeleton">\n      <div class="gr4vy__skeleton__radio"></div>\n      <div class="gr4vy__skeleton__block"></div>\n    </div>\n    <div class="gr4vy__skeleton">\n      <div class="gr4vy__skeleton__radio"></div>\n      <div class="gr4vy__skeleton__block"></div>\n    </div>\n  </div>'],a||(a=o.slice(0)),z=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}})))),n.optionsLoaded$.subscribe((function(){return e.remove()}))}(s,i,a.theme);var u,y,g,h=document.createElement("div");C(h,i),a.form?function(e,n,t,r){parseInt(e.dataset.formNapperId)>0&&($.get(e.dataset.formNapperId).detach(),$.delete(e.dataset.formNapperId)),k+=1,e.dataset.formNapperId=String(k);var o=new(j())(e);$.set(k.toString(),o),o.hijack((function(){var e;"custom"===(null===(e=t.selectedOption$.value())||void 0===e?void 0:e.mode)?r({method:t.selectedOption$.value().method}):t.formSubmit$.next()})),t.transactionCreated$.subscribe((function(e){var t;return o.inject("gr4vy_transaction_id",e.id),o.inject("gr4vy_transaction_status",e.status),null!=e&&null!==(t=e.paymentMethod)&&void 0!==t&&t.id&&o.inject("gr4vy_transaction_payment_method_id",e.paymentMethod.id),"function"==typeof n?n(e):o.submit()}))}(a.form,a.onComplete,i,a.onCustomSubmit):(u=a.onComplete,y=i,g=a.onCustomSubmit,y.submit$.subscribe((function(){var e;"custom"===(null===(e=y.selectedOption$.value())||void 0===e?void 0:e.mode)?g({method:y.selectedOption$.value().method}):y.formSubmit$.next()})),y.transactionCreated$.subscribe((function(e){u&&u(e)}))),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o(),n=arguments.length>1?arguments[1]:void 0;n.approvalStarted$.subscribe((function(){var t;null!==(t=n.mode$.value())&&void 0!==t&&t.popup&&(e.current=q(M(500,589),A(n.mode$.value().popup),(function(){return n.approvalCancelled$.next()})))})),n.approvalUrl$.subscribe((function(n){e.current&&U(e.current.popup,n)})),n.approvalLost$.subscribe((function(){if(e.current){e.current.stopCallback(),e.current.popup.close(),n.approvalStarted$.next();var t=n.approvalUrl$.value();t&&n.approvalUrl$.next(t)}})),n.approvalCancelled$.subscribe((function(){var n;null===(n=e.current)||void 0===n||n.popup.close()})),n.approvalCompleted$.subscribe((function(){var n;null===(n=e.current)||void 0===n||n.popup.close()})),n.transactionFailed$.subscribe((function(){var n,t;null===(n=e.current)||void 0===n||n.stopCallback(),null===(t=e.current)||void 0===t||t.popup.close()}))}(o(),i);var w=document.createElement("iframe");!function(e,n,t){e.src=n,e.title="Secure payment frame - Gr4vy",e.style.visibility="hidden",e.style.display="none",e.style.width="100%",e.style.height="0px",e.style.border="0",e.style.overflow="hidden",e.setAttribute("frameBorder","0"),e.setAttribute("scrolling","no"),e.setAttribute("allowpaymentrequest","true"),e.setAttribute("sandbox","allow-forms allow-same-origin allow-scripts"),t.frameHeight$.subscribe((function(n){"unset"===e.style.visibility&&(e.style.height="".concat(n,"px"))})),t.optionsLoaded$.subscribe((function(){e.style.visibility="unset",e.style.display="unset"}))}(w,a.iframeSrc,i);var O=function(){var e=!1;try{e=window.ApplePaySession&&ApplePaySession.canMakePayments()&&ApplePaySession.supportsVersion(3)}catch(e){}return e}()?ApplePaySession.supportsVersion(5)?5:ApplePaySession.supportsVersion(4)?4:ApplePaySession.supportsVersion(3)?3:null:0;O&&function(e,n){var t;e.appleStartSession$.subscribe((function(r){try{(t=new ApplePaySession(n,r)).onvalidatemerchant=function(n){e.appleValidateMerchant$.next(n.validationURL)},t.onpaymentauthorized=function(n){e.applePayAuthorized$.next(n.payment.token)},t.oncancel=function(){e.appleCancelSession$.next()},t.begin()}catch(n){e.appleSessionError$.next()}})),e.appleCompleteMerchantValidation$.subscribe((function(e){t.completeMerchantValidation(e)})),e.appleAbortSession$.subscribe((function(){var e;(null===(e=t)||void 0===e?void 0:e.abort)&&t.abort()})),e.appleCompletePayment$.subscribe((function(n){n?t.completePayment(ApplePaySession.STATUS_SUCCESS):t.completePayment(ApplePaySession.STATUS_FAILURE),e.appleCompleteSession$.next()}))}(i,O),a.element.append(h,s,w);var S,_,E=setTimeout((function(){d("Loading Embed UI failed or took too long. Please check that the `gr4vyId` and `environment` values are correct.",e,c(c({},{debug:!0}),{},{level:"warn"}))}),3e3),P={modeUpdated:i.mode$.next,approvalUrl:i.approvalUrl$.next,resize:function(e){var n;return i.frameHeight$.next(null==e||null===(n=e.frame)||void 0===n?void 0:n.height)},optionsLoaded:i.optionsLoaded$.next,transactionCreated:i.transactionCreated$.next,transactionFailed:i.transactionFailed$.next,transactionCancelled:i.transactionCancelled$.next,appleStartSession:i.appleStartSession$.next,appleCompleteMerchantValidation:i.appleCompleteMerchantValidation$.next,appleCompletePayment:i.appleCompletePayment$.next,appleAbortSession:i.appleAbortSession$.next,googlePaySessionStarted:i.googlePaySessionStarted$.next,googlePaySessionCompleted:i.googlePaySessionCompleted$.next,frameReady:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.version;return n&&b("embed-ui",n),clearTimeout(E),I({type:"updateOptions",data:ne(ne({},r(a,re)),{},{supportedApplePayVersion:O,supportedGooglePayVersion:1})})},paymentMethodSelected:i.selectedOption$.next},I=function(e,n,t,r){return function(o){t.postMessage(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){v(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({channel:n},o),e),r&&r(o)}}(a.iframeUrl,a.channel,w.contentWindow,(function(e){return d("Page emits",e,{debug:a.debug})})),L=p(a.iframeUrl,a.channel,(function(e){var n;d("Page received",e,{debug:a.debug}),["formUpdate","transactionCreated","transactionFailed","apiError","paymentMethodSelected","transactionCancelled","optionsLoaded"].includes(e.type)&&(null===(n=a.onEvent)||void 0===n||n.call(a,e.type,e.data)),P[e.type]&&P[e.type](e.data)})),T=p(a.apiUrl,a.channel,(function(e){w.contentWindow.postMessage(e,a.iframeUrl)})),D=p(a.iframeUrl,a.channel,(S=["approvalErrored","transactionUpdated","approvalCancelled"],_=function(e){return w.contentWindow.postMessage(e,a.iframeUrl)},function(e){S.includes(e.type)&&_(e)}));return i.formSubmit$.subscribe((function(){return I({type:"submitForm"})})),i.approvalCancelled$.subscribe((function(){return I({type:"approvalCancelled"})})),i.applePayAuthorized$.subscribe((function(e){return I({type:"applePayAuthorized",data:e})})),i.appleValidateMerchant$.subscribe((function(e){return I({type:"appleValidateMerchant",data:e})})),i.appleCancelSession$.subscribe((function(){return I({type:"appleCancelSession"})})),i.appleSessionError$.subscribe((function(){return I({type:"appleSessionError"})})),i.appleCompleteSession$.subscribe((function(){return I({type:"appleCompleteSession"})})),window.addEventListener("message",L),window.addEventListener("message",T),window.addEventListener("message",D),b("embed"),oe.set(ae.toString(),(function(){window.removeEventListener("message",L),window.removeEventListener("message",T),window.removeEventListener("message",D),delete window.gr4vy})),{submit:function(){i.formSubmit$.next()}}}}},381:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(609),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".gr4vy__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 100vh;\n  z-index: 100;\n  transition: background-color 0.2s linear, max-height 0s linear;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gr4vy__overlay--visible {\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n\n.gr4vy__overlay__container {\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,\n    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  font-size: 1rem;\n  text-align: center;\n  font-weight: bold;\n}\n\n.gr4vy__overlay__container > * + * {\n  margin-top: 32px;\n}\n\n.gr4vy__overlay__notice > * + * {\n  margin-top: 8px;\n}\n\n.gr4vy__overlay--hidden {\n  max-height: 0;\n  backdrop-filter: unset;\n  background-color: rgba(0, 0, 0, 0);\n  transition: background-color 0.2s linear, max-height 0s linear;\n  transition-delay: 0s, 0.2s;\n  overflow: hidden;\n}\n\n.gr4vy__overlay__link {\n  font-weight: normal;\n  text-decoration: underline;\n  font-weight: normal;\n  color: white;\n  display: block;\n  cursor: pointer;\n}\n\n.gr4vy__frame {\n  height: 100vh;\n  width: 100vw;\n}\n\n@media screen and (min-width: 500px) and (min-height: 350px) {\n  .gr4vy__frame {\n    height: 250px;\n    width: 400px;\n  }\n}\n\n@media screen and (min-width: 500px) and (min-height: 490px) {\n  .gr4vy__frame {\n    height: 390px;\n    width: 400px;\n  }\n}\n\n@media screen and (min-width: 700px) and (min-height: 500px) {\n  .gr4vy__frame {\n    height: 400px;\n    width: 600px;\n  }\n}\n\n@media screen and (min-width: 700px) and (min-height: 600px) {\n  .gr4vy__frame {\n    height: 500px;\n    width: 600px;\n  }\n}\n",""]);var a=o},514:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(609),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"@keyframes gr4vy-sweep {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n\n.gr4vy__skeleton {\n  display: flex;\n  border-bottom: var(--gr4vy-borderWidths-container, 1px) solid\n    var(--gr4vy-colors-containerBorder, #f2f2f2);\n  padding: 16px;\n}\n\n.gr4vy__skeleton:last-child {\n  border-bottom: none;\n}\n\n.gr4vy__skeleton__radio {\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  background-color: var(--gr4vy-colors-containerBorder, #f2f2f2);\n}\n\n.gr4vy__skeleton__block {\n  flex-grow: 1;\n  height: 16px;\n  background-image: linear-gradient(\n    90deg,\n    var(--gr4vy-colors-containerBorder, #f2f2f2) 30%,\n    var(--gr4vy-colors-containerBackground, #ffffff) 50%,\n    var(--gr4vy-colors-containerBorder, #f2f2f2) 70%\n  );\n  background-size: 600px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  margin-left: 16px;\n  border-radius: var(--gr4vy-radii-input, 0);\n  -webkit-animation: gr4vy-sweep 1s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n  animation: gr4vy-sweep 1s infinite cubic-bezier(0.2, 0.75, 0.77, 0.25);\n}\n.gr4vy__container {\n  border: var(--gr4vy-borderWidths-container, 1px) solid\n    var(--gr4vy-colors-containerBorder, #f2f2f2);\n  border-radius: var(--gr4vy-radii-container, 0);\n  background: var(--gr4vy-colors-pageBackground, #ffffff);\n  max-width: 480px;\n}\n",""]);var a=o},609:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},88:function(e,n,t){function r(e){if(("string"==typeof e||e instanceof String)&&(e=document.getElementById(e)),!(e instanceof HTMLFormElement))throw new TypeError("FormNapper requires an HTMLFormElement element or the id string of one.");this.htmlForm=e}r.prototype.hijack=function(e){this.submitHandler||(this.submitHandler=function(n){n.preventDefault?n.preventDefault():n.returnValue=!1,e(n)},null!=t.g.addEventListener?this.htmlForm.addEventListener("submit",this.submitHandler,!1):null!=t.g.attachEvent?this.htmlForm.attachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=this.submitHandler)},r.prototype.inject=function(e,n){var t=this.htmlForm.querySelector('input[name="'+e+'"]');return null==t&&((t=document.createElement("input")).type="hidden",t.name=e,this.htmlForm.appendChild(t)),t.value=n,t},r.prototype.submit=function(){HTMLFormElement.prototype.submit.call(this.htmlForm)},r.prototype.detach=function(){this.submitHandler&&(null!=t.g.removeEventListener?this.htmlForm.removeEventListener("submit",this.submitHandler,!1):null!=t.g.detachEvent?this.htmlForm.detachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=null,delete this.submitHandler)},e.exports=r},496:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(62),o=t.n(r),a=t(381);o()(a.Z,{insert:"head",singleton:!1});var i=a.Z.locals||{}},796:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(62),o=t.n(r),a=t(514);o()(a.Z,{insert:"head",singleton:!1});var i=a.Z.locals||{}},62:function(e,n,t){var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var l=e[o],c=n.base?l[0]+n.base:l[0],s=t[c]||0,u="".concat(c," ").concat(s);t[c]=s+1;var d=i(u),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:f(p,n),references:1}),r.push(u)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function f(e,n){var t,r,o;if(n.singleton){var a=v++;t=m||(m=c(n)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=c(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var c=l(e,n),s=0;s<t.length;s++){var u=i(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=c}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}return t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==("undefined"==typeof globalThis?"undefined":l(globalThis)))return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==("undefined"==typeof window?"undefined":l(window)))return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(932)}()},"object"==l(n)&&"object"==l(e)?e.exports=i():(o=[],void 0===(a="function"==typeof(r=i)?r.apply(n,o):r)||(e.exports=a))},723:(e,n,t)=>{"use strict";t.r(n),t.d(n,{setup:()=>r});var r=t(884).setup}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}return t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t(723)})()}));
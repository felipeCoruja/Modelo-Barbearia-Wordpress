!function(t){function e(e){for(var n,r,a=e[0],c=e[1],s=0,u=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(i&&i(e);u.length;)u.shift()()}var n={},o={32:0};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(t){return r.p+""+({0:"vendors~tainacan-chunks-0~tainacan-chunks-10~tainacan-chunks-12~tainacan-chunks-16~tainacan-chunks-2~cbc78b93",1:"vendors~tainacan-chunks-0~tainacan-chunks-10~tainacan-chunks-14~tainacan-chunks-2~tainacan-chunks-4",2:"vendors~tainacan-chunks-0~tainacan-chunks-10~tainacan-chunks-16~tainacan-chunks-2~tainacan-chunks-4",3:"vendors~tainacan-chunks-0~tainacan-chunks-10~tainacan-chunks-2~tainacan-chunks-4~tainacan-chunks-8",4:"tainacan-chunks-0",5:"tainacan-chunks-10",6:"tainacan-chunks-12",7:"tainacan-chunks-14",8:"tainacan-chunks-16",9:"tainacan-chunks-18",10:"tainacan-chunks-2",11:"tainacan-chunks-20",12:"tainacan-chunks-22",13:"tainacan-chunks-24",14:"tainacan-chunks-4",15:"tainacan-chunks-6",16:"tainacan-chunks-8",17:"vendors~tainacan-chunks-14",18:"vendors~tainacan-chunks-16"}[t]||t)+".js"}(t);var i=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./wp-content/plugins/tainacan/assets/js/",r.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var i=c;r(r.s=77)}({39:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));const o=/(was)? ?(not)? ?@([a-z]+) ?(.*)?/,r=/(?:was )?(?:not )?@[a-z]+ ?.*?(?:(?= and (?:was )?(?:not )?@[a-z])|$)/g,a=t=>void 0===t||"true"===t||"false"!==t&&t,c=t=>{const[,e,n,r,c]=t.match(o);return[r,a(c),"not"===n,"was"===e]},s=(t,e)=>{const n={matches:!1,active:!1,onchange:function(){},start:()=>{n.active||(n.active=!0,o.forEach(t=>t.forEach(t=>t.addListener(a))),a())},stop:()=>{n.active=!1,o.forEach(t=>t.forEach(t=>{t.removeListener&&t.removeListener(a)}))},destroy:()=>{n.stop(),o.length=0}},o=t.split(" or ").map(t=>(t=>t.match(r).map(c))(t).map(t=>((t,e,n)=>(t.invert=e,t.retain=n,t.matched=!1,t))(((t,e,n)=>{const o=h("monitor").find(t=>t.name===e);if(!o)throw new Error(`Conditioner: Cannot find monitor with name "@${e}". Only the "@media" monitor is always available. Custom monitors can be added with the \`addPlugin\` method using the \`monitors\` key. The name of the custom monitor should not include the "@" symbol.`);return o.create(n,t)})(e,...t),...t.splice(2)))),a=()=>{const t=o.reduce((t,e)=>!!t||e.reduce((t,e)=>{if(!t)return!1;const n=e.invert?!e.matches:e.matches;return n&&(e.matched=!0),!(!e.retain||!e.matched)||n},!0),!1);n.matches=t,n.onchange(t)};return n},i=(t,e)=>{const n=s(t,e.element);return n.onchange=t=>t?e.mount():e.unmount(),n.start(),n},u=t=>{const e=((t,e)=>{const n=b("moduleGetName",t),o=p("moduleSetName",n),r={destruct:null,mounting:!1},a={alias:n,name:o,element:t,mounted:!1,unmount:()=>{r.destruct&&a.mounted&&(f("moduleWillUnmount",a),r.destruct(),a.mounted=!1,f("moduleDidUnmount",a),a.onunmount.apply(t))},mount:()=>{if(!a.mounted&&!r.mounting)return r.mounting=!0,f("moduleWillMount",a),b("moduleImport",o).then(e=>{r.destruct=b("moduleGetDestructor",b("moduleGetConstructor",e)(...b("moduleSetConstructorArguments",o,t))),r.mounting=!1,a.mounted=!0,f("moduleDidMount",a),a.onmount.apply(t,[a])}).catch(e=>{throw r.mounting=!1,f("moduleDidCatch",e,a),a.onmounterror.apply(t,[e,a]),new Error("Conditioner: "+e)}),a},destroy:function(){f("moduleWillDestroy",a),a.unmount(),f("moduleDidDestroy",a),a.ondestroy.apply(t),e()},onmounterror:function(){},onmount:function(){},onunmount:function(){},ondestroy:function(){}};return a})(t,()=>o&&o.destroy()),n=b("moduleGetContext",t),o=n&&i(n,e);return n?e:e.mount()},l=t=>[...b("moduleSelector",t)].map(u),m=[],d=t=>m.push(t),h=t=>m.filter(e=>{return n=Object.keys(e),o=t,n.indexOf(o)>-1;var n,o}).map(e=>e[t]),f=(t,...e)=>h(t).forEach(t=>t(...e)),p=(t,...e)=>h(t).reduce((t,e)=>[e(...t)],e).shift(),b=(t,...e)=>h(t).pop()(...e);d({moduleSelector:t=>t.querySelectorAll("[data-module]"),moduleGetContext:t=>t.dataset.context,moduleImport:t=>new Promise((e,n)=>{if(self[t])return e(self[t]);n(`Cannot find module with name "${t}". By default Conditioner will import modules from the global scope, make sure a function named "${t}" is defined on the window object. The scope of a function defined with \`let\` or \`const\` is limited to the <script> block in which it is defined.`)}),moduleGetConstructor:t=>t,moduleGetDestructor:t=>t,moduleSetConstructorArguments:(t,e)=>[e],moduleGetName:t=>t.dataset.module,monitor:{name:"media",create:t=>self.matchMedia(t)}})},77:function(t,e,n){"use strict";n.r(e);var o=n(39);function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n.p=tainacan_plugin.plugin_dir_url+"assets/js/";var c;c=function(){!function(){["items-list","collections-list","terms-list","search-bar","facets-list","dynamic-items-list","carousel-items-list","carousel-terms-list","related-items-list","carousel-collections-list"].forEach((function(t){r(document.getElementsByClassName("wp-block-tainacan-".concat(t))).forEach((function(e){e.getAttribute("data-module")||e.setAttribute("data-module",t)}))}));var t=document.getElementById("tainacan-items-page");t&&!t.getAttribute("data-module")&&t.setAttribute("data-module","faceted-search");var e=document.getElementById("tainacan-item-submission-form");e&&!e.getAttribute("data-module")&&e.setAttribute("data-module","item-submission-form")}(),o.a({moduleSetName:function(t){return"./blocks/".concat(t,"/theme.js")},moduleGetConstructor:function(t){return t.default},moduleImport:function(t){return n(78)("".concat(t))}}),o.b(document.documentElement)},/comp|inter|loaded/.test(document.readyState)?cb():document.addEventListener("DOMContentLoaded",c,!1)},78:function(t,e,n){var o={"./blocks/carousel-collections-list/theme":[62,0,2,1,3,4],"./blocks/carousel-collections-list/theme.js":[62,0,2,1,3,4],"./blocks/carousel-items-list/theme":[63,0,2,1,3,10],"./blocks/carousel-items-list/theme.js":[63,0,2,1,3,10],"./blocks/carousel-terms-list/theme":[64,0,2,1,3,14],"./blocks/carousel-terms-list/theme.js":[64,0,2,1,3,14],"./blocks/collections-list/theme":[65,15],"./blocks/collections-list/theme.js":[65,15],"./blocks/dynamic-items-list/theme":[66,0,3,16],"./blocks/dynamic-items-list/theme.js":[66,0,3,16],"./blocks/faceted-search/theme":[67,0,2,1,3,5],"./blocks/faceted-search/theme.js":[67,0,2,1,3,5],"./blocks/facets-list/theme":[68,0,6],"./blocks/facets-list/theme.js":[68,0,6],"./blocks/item-gallery/theme":[69,1,17,7],"./blocks/item-gallery/theme.js":[69,1,17,7],"./blocks/item-submission-form/theme":[70,0,2,18,8],"./blocks/item-submission-form/theme.js":[70,0,2,18,8],"./blocks/items-list/theme":[71,9],"./blocks/items-list/theme.js":[71,9],"./blocks/related-items-list/theme":[72,11],"./blocks/related-items-list/theme.js":[72,11],"./blocks/search-bar/theme":[73,12],"./blocks/search-bar/theme.js":[73,12],"./blocks/terms-list/theme":[74,13],"./blocks/terms-list/theme.js":[74,13]};function r(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=78,t.exports=r}});
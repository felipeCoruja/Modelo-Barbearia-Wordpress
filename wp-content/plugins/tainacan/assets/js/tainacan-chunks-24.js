(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{110:function(t,i){t.exports=function(t){var i="undefined"!=typeof window&&window.location;if(!i)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=i.protocol+"//"+i.host,r=e+i.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,i){var l,s=i.trim().replace(/^"(.*)"$/,(function(t,i){return i})).replace(/^'(.*)'$/,(function(t,i){return i}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(l=0===s.indexOf("//")?s:0===s.indexOf("/")?e+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(l)+")")}))}},40:function(t,i){t.exports=function(t){var i=[];return i.toString=function(){return this.map((function(i){var e=function(t,i){var e=t[1]||"",r=t[3];if(!r)return e;if(i&&"function"==typeof btoa){var l=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),s=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[e].concat(s).concat([l]).join("\n")}var n;return[e].join("\n")}(i,t);return i[2]?"@media "+i[2]+"{"+e+"}":e})).join("")},i.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},l=0;l<this.length;l++){var s=this[l][0];"number"==typeof s&&(r[s]=!0)}for(l=0;l<t.length;l++){var n=t[l];"number"==typeof n[0]&&r[n[0]]||(e&&!n[2]?n[2]=e:e&&(n[2]="("+n[2]+") and ("+e+")"),i.push(n))}},i}},686:function(t,i,e){var r=e(687);"string"==typeof r&&(r=[[t.i,r,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};e(97)(r,l);r.locals&&(t.exports=r.locals)},687:function(t,i,e){(t.exports=e(40)(!1)).push([t.i,".wp-block-tainacan-terms-list{margin:2em auto}.wp-block-tainacan-terms-list .components-spinner{position:absolute;right:0}.wp-block-tainacan-terms-list ul.terms-list li.term-list-item>button,.wp-block-tainacan-terms-list ul.terms-list li.term-list-item>button:hover{display:none;visibility:hidden;opacity:0}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid{padding:0;flex-wrap:wrap;display:flex;display:-ms-grid;display:grid;-ms-grid-columns:220px 220px 220px 220px 220px;grid-template-columns:repeat(auto-fill, 220px);grid-gap:0px;justify-content:space-evenly;list-style-type:none}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid li.term-list-item,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid li.term-list-item{position:relative;display:block;margin:12px 12px 24px 12px;margin-bottom:12px;width:185px}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid li.term-list-item a,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid li.term-list-item a{color:inherit;border:none;font-weight:bold;line-height:normal}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid li.term-list-item img,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid li.term-list-item img{height:auto;width:185px;min-width:185px;padding:0px;margin-bottom:0.5em}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid li.term-list-item a.term-without-name span,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid li.term-list-item a.term-without-name span{display:none}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid li.term-list-item a,.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid li.term-list-item:hover a,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid li.term-list-item a,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid li.term-list-item:hover a{color:inherit;text-decoration:none}.wp-block-tainacan-terms-list ul.terms-list-edit li.term-list-item{display:flex;align-items:flex-start}.wp-block-tainacan-terms-list ul.terms-list-edit li.term-list-item button{position:absolute !important;background-color:rgba(255,255,255,0.75);color:var(--tainacan-block-gray5, #454647);padding:2px;margin-left:5px;min-width:14px;visibility:hidden;position:relative;opacity:0;right:-14px;top:0px;justify-content:center;z-index:999}.wp-block-tainacan-terms-list ul.terms-list-edit li.term-list-item button .dashicon{margin:0px}.wp-block-tainacan-terms-list ul.terms-list-edit li.term-list-item:hover button{height:auto;visibility:visible;background-color:#fff !important;opacity:1;right:-8px;top:-8px;border:1px solid var(--tainacan-block-gray3, #cbcbcb);border-radius:12px;transition:opacity linear 0.15s, right linear 0.15s}.wp-block-tainacan-terms-list ul.terms-list-edit li.term-list-item:hover button:hover{background-color:#fff !important;border:1px solid var(--tainacan-block-gray3, #cbcbcb) !important}@media only screen and (max-width: 498px){.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid{grid-template-columns:repeat(auto-fill, 100%)}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid li.term-list-item,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid li.term-list-item{width:100%}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-grid li.term-list-item img,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-grid li.term-list-item img{width:100%}}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list{padding:0;display:flex;flex-wrap:wrap;align-items:center;list-style-type:none}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item{position:relative;margin:12px 12px 24px 12px;margin-bottom:12px;min-height:54px;min-width:calc(20% - 24px);width:calc(20% - 24px)}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item a,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item a{color:inherit;height:auto;display:flex;align-items:center;word-break:break-all;word-break:break-word}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item img,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item img{height:auto;width:54px;min-width:54px;padding:0px;margin-right:20px}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item a.term-without-image img,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item a.term-without-image img{display:none}.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item a,.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item:hover a,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item a,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item:hover a{color:inherit;text-decoration:none}@media only screen and (max-width: 1600px){.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item{min-width:calc(25% - 24px);width:calc(25% - 24px)}}@media only screen and (max-width: 1024px){.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item{min-width:calc(33.333% - 24px);width:calc(33.333% - 24px)}}@media only screen and (max-width: 768px){.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item{min-width:calc(50% - 24px);width:calc(50% - 24px)}}@media only screen and (max-width: 498px){.wp-block-tainacan-terms-list ul.terms-list.terms-layout-list li.term-list-item,.wp-block-tainacan-terms-list ul.terms-list-edit.terms-layout-list li.term-list-item{min-width:calc(100% - 24px);width:calc(100% - 24px)}}.block-editor-block-list__block:not(.has-text-color)>.wp-block-tainacan-terms-list li.term-list-item a>span,.block-editor-block-list__block:not(.has-text-color)>.wp-block-tainacan-terms-list li.term-list-item a:hover>span{color:inherit}\n",""])},74:function(t,i,e){"use strict";e.r(i);e(686);i.default=function(){}},97:function(t,i,e){var r,l,s={},n=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===l&&(l=r.apply(this,arguments)),l}),a=function(t,i){return i?i.querySelector(t):document.querySelector(t)},o=function(t){var i={};return function(t,e){if("function"==typeof t)return t();if(void 0===i[t]){var r=a.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}i[t]=r}return i[t]}}(),m=null,c=0,u=[],p=e(110);function d(t,i){for(var e=0;e<t.length;e++){var r=t[e],l=s[r.id];if(l){l.refs++;for(var n=0;n<l.parts.length;n++)l.parts[n](r.parts[n]);for(;n<r.parts.length;n++)l.parts.push(g(r.parts[n],i))}else{var a=[];for(n=0;n<r.parts.length;n++)a.push(g(r.parts[n],i));s[r.id]={id:r.id,refs:1,parts:a}}}}function f(t,i){for(var e=[],r={},l=0;l<t.length;l++){var s=t[l],n=i.base?s[0]+i.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[n]?r[n].parts.push(a):e.push(r[n]={id:n,parts:[a]})}return e}function b(t,i){var e=o(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(i,r.nextSibling):e.appendChild(i):e.insertBefore(i,e.firstChild),u.push(i);else if("bottom"===t.insertAt)e.appendChild(i);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var l=o(t.insertAt.before,e);e.insertBefore(i,l)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var i=u.indexOf(t);i>=0&&u.splice(i,1)}function w(t){var i=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return e.nc}();r&&(t.attrs.nonce=r)}return y(i,t.attrs),b(t,i),i}function y(t,i){Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])}))}function g(t,i){var e,r,l,s;if(i.transform&&t.css){if(!(s="function"==typeof i.transform?i.transform(t.css):i.transform.default(t.css)))return function(){};t.css=s}if(i.singleton){var n=c++;e=m||(m=w(i)),r=k.bind(null,e,n,!1),l=k.bind(null,e,n,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var i=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(i,t.attrs),b(t,i),i}(i),r=j.bind(null,e,i),l=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=w(i),r=U.bind(null,e),l=function(){h(e)});return r(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;r(t=i)}else l()}}t.exports=function(t,i){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(i=i||{}).attrs="object"==typeof i.attrs?i.attrs:{},i.singleton||"boolean"==typeof i.singleton||(i.singleton=n()),i.insertInto||(i.insertInto="head"),i.insertAt||(i.insertAt="bottom");var e=f(t,i);return d(e,i),function(t){for(var r=[],l=0;l<e.length;l++){var n=e[l];(a=s[n.id]).refs--,r.push(a)}t&&d(f(t,i),i);for(l=0;l<r.length;l++){var a;if(0===(a=r[l]).refs){for(var o=0;o<a.parts.length;o++)a.parts[o]();delete s[a.id]}}}};var x,v=(x=[],function(t,i){return x[t]=i,x.filter(Boolean).join("\n")});function k(t,i,e,r){var l=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(i,l);else{var s=document.createTextNode(l),n=t.childNodes;n[i]&&t.removeChild(n[i]),n.length?t.insertBefore(s,n[i]):t.appendChild(s)}}function U(t,i){var e=i.css,r=i.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function j(t,i,e){var r=e.css,l=e.sourceMap,s=void 0===i.convertToAbsoluteUrls&&l;(i.convertToAbsoluteUrls||s)&&(r=p(r)),l&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */");var n=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(n),a&&URL.revokeObjectURL(a)}}}]);
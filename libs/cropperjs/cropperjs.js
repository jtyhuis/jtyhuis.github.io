/* jscs:disable */
/*!
 * Cropper.js v1.1.1
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2015-2017 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2017-10-11T13:22:13.165Z
 */
!function(t,e){t.Cropper = e()}(this,function(){"use strict";function t(t){return"number"==typeof t&&!K(t)}function e(t){return void 0===t}function i(t){return"object"===(void 0===t?"undefined":F(t))&&null!==t}function a(t){if(!i(t))return!1;try{var e=t.constructor,a=e.prototype;return e&&a&&V.call(a,"isPrototypeOf")}catch(t){return!1}}function n(t){return"function"==typeof t}function o(e,a){if(e&&n(a))if(Array.isArray(e)||t(e.length)){var o=e.length,r=void 0;for(r=0;r<o&&!1!==a.call(e,e[r],r,e);r+=1);}else i(e)&&Object.keys(e).forEach(function(t){a.call(e,e[t],t,e)});return e}function r(t){for(var e=arguments.length,a=Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];if(i(t)&&a.length>0){if(Object.assign)return Object.assign.apply(Object,[t].concat(a));a.forEach(function(e){i(e)&&Object.keys(e).forEach(function(i){t[i]=e[i]})})}return t}function h(t,e){for(var i=arguments.length,a=Array(i>2?i-2:0),n=2;n<i;n++)a[n-2]=arguments[n];return function(){for(var i=arguments.length,n=Array(i),o=0;o<i;o++)n[o]=arguments[o];return t.apply(e,a.concat(n))}}function s(e,i){var a=e.style;o(i,function(e,i){G.test(i)&&t(e)&&(e+="px"),a[i]=e})}function c(t,e){return t.classList?t.classList.contains(e):t.className.indexOf(e)>-1}function l(e,i){if(i)if(t(e.length))o(e,function(t){l(t,i)});else if(e.classList)e.classList.add(i);else{var a=e.className.trim();a?a.indexOf(i)<0&&(e.className=a+" "+i):e.className=i}}function d(e,i){i&&(t(e.length)?o(e,function(t){d(t,i)}):e.classList?e.classList.remove(i):e.className.indexOf(i)>=0&&(e.className=e.className.replace(i,"")))}function p(e,i,a){i&&(t(e.length)?o(e,function(t){p(t,i,a)}):a?l(e,i):d(e,i))}function m(t){return t.replace(J,"$1-$2").toLowerCase()}function u(t,e){return i(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-"+m(e))}function g(t,e,a){i(a)?t[e]=a:t.dataset?t.dataset[e]=a:t.setAttribute("data-"+m(e),a)}function f(t,e){if(i(t[e]))delete t[e];else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=null}else t.removeAttribute("data-"+m(e))}function v(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(n(i)){var r=e.trim().split(_);r.length>1?o(r,function(e){v(t,e,i)}):(n(i.onceListener)&&delete(i=i.onceListener).onceListener,t.removeEventListener?t.removeEventListener(e,i,a):t.detachEvent&&t.detachEvent("on"+e,i))}}function w(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(n(i)){var r=e.trim().split(_);if(r.length>1)o(r,function(e){w(t,e,i)});else{if(a.once){var h=i,s=function i(){for(var a=arguments.length,n=Array(a),o=0;o<a;o++)n[o]=arguments[o];return v(t,e,i),h.apply(t,n)};h.onceListener=s,i=s}t.addEventListener?t.addEventListener(e,i,a):t.attachEvent&&t.attachEvent("on"+e,i)}}}function b(t,i,a){if(t.dispatchEvent){var o=void 0;return n(Event)&&n(CustomEvent)?o=e(a)?new Event(i,{bubbles:!0,cancelable:!0}):new CustomEvent(i,{detail:a,bubbles:!0,cancelable:!0}):e(a)?(o=document.createEvent("Event")).initEvent(i,!0,!0):(o=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,a),t.dispatchEvent(o)}return!t.fireEvent||t.fireEvent("on"+i)}function x(t){var e=document.documentElement,i=t.getBoundingClientRect();return{left:i.left+((R.scrollX||e&&e.scrollLeft||0)-(e&&e.clientLeft||0)),top:i.top+((R.scrollY||e&&e.scrollTop||0)-(e&&e.clientTop||0))}}function y(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function M(t){var e=t.match(et);return e&&(e[1]!==tt.protocol||e[2]!==tt.hostname||e[3]!==tt.port)}function C(t){var e="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+e}function D(e){var i=e.rotate,a=e.scaleX,n=e.scaleY,o=e.translateX,r=e.translateY,h=[];t(o)&&0!==o&&h.push("translateX("+o+"px)"),t(r)&&0!==r&&h.push("translateY("+r+"px)"),t(i)&&0!==i&&h.push("rotate("+i+"deg)"),t(a)&&1!==a&&h.push("scaleX("+a+")"),t(n)&&1!==n&&h.push("scaleY("+n+")");var s=h.length?h.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function B(t,e){if(!t.naturalWidth||at){var i=document.createElement("img");i.onload=function(){e(i.width,i.height)},i.src=t.src}else e(t.naturalWidth,t.naturalHeight)}function k(t){var e=r({},t),i=[];return o(t,function(t,a){delete e[a],o(e,function(e){var a=Math.abs(t.startX-e.startX),n=Math.abs(t.startY-e.startY),o=Math.abs(t.endX-e.endX),r=Math.abs(t.endY-e.endY),h=Math.sqrt(a*a+n*n),s=(Math.sqrt(o*o+r*r)-h)/h;i.push(s)})}),i.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),i[0]}function E(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:r({startX:i,startY:a},n)}function T(t){var e=0,i=0,a=0;return o(t,function(t){var n=t.startX,o=t.startY;e+=n,i+=o,a+=1}),e/=a,i/=a,{pageX:e,pageY:i}}function W(t){var e=t.aspectRatio,i=t.height,a=t.width,n=function(t){return nt(t)&&t>0};return n(a)&&n(i)?i*e>a?i=a/e:a=i*e:n(a)?i=a/e:n(i)&&(a=i*e),{width:a,height:i}}function N(t){var e=t.width,i=t.height,a=t.degree;if((a=Math.abs(a))%180==90)return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n);return{width:e*r+i*o,height:e*o+i*r}}function H(t,e,i,a){var n=e.naturalWidth,o=e.naturalHeight,r=e.rotate,h=e.scaleX,s=e.scaleY,c=i.aspectRatio,l=i.naturalWidth,d=i.naturalHeight,p=a.fillColor,m=void 0===p?"transparent":p,u=a.imageSmoothingEnabled,g=void 0===u||u,f=a.imageSmoothingQuality,v=void 0===f?"low":f,w=a.maxWidth,b=void 0===w?1/0:w,x=a.maxHeight,y=void 0===x?1/0:x,M=a.minWidth,C=void 0===M?0:M,D=a.minHeight,B=void 0===D?0:D,k=document.createElement("canvas"),E=k.getContext("2d"),T=W({aspectRatio:c,width:b,height:y}),N=W({aspectRatio:c,width:C,height:B}),H=Math.min(T.width,Math.max(N.width,l)),L=Math.min(T.height,Math.max(N.height,d));return k.width=H,k.height=L,E.fillStyle=m,E.fillRect(0,0,H,L),E.save(),E.translate(H/2,L/2),E.rotate(r*Math.PI/180),E.scale(h,s),E.imageSmoothingEnabled=g,E.imageSmoothingQuality=v,E.drawImage(t,Math.floor(-n/2),Math.floor(-o/2),Math.floor(n),Math.floor(o)),E.restore(),k}function L(t,e,i){var a="",n=void 0;for(i+=e,n=e;n<i;n+=1)a+=ot(t.getUint8(n));return a}function Y(t){var e=t.replace(rt,""),i=atob(e),a=new ArrayBuffer(i.length),n=new Uint8Array(a);return o(n,function(t,e){n[e]=i.charCodeAt(e)}),a}function X(t,e){var i="";return o(new Uint8Array(t),function(t){i+=ot(t)}),"data:"+e+";base64,"+btoa(i)}function O(t){var e=new DataView(t),i=void 0,a=void 0,n=void 0,o=void 0;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var r=e.byteLength,h=2;h<r;){if(255===e.getUint8(h)&&225===e.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===L(e,n+4,4)){var c=e.getUint16(s);if(((a=18761===c)||19789===c)&&42===e.getUint16(s+2,a)){var l=e.getUint32(s+4,a);l>=8&&(o=s+l)}}}if(o){var d=e.getUint16(o,a),p=void 0,m=void 0;for(m=0;m<d;m+=1)if(p=o+12*m+2,274===e.getUint16(p,a)){p+=8,i=e.getUint16(p,a),e.setUint16(p,1,a);break}}return i}function S(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var R="undefined"!=typeof window?window:{},A="cropper-hidden",I=R.PointerEvent?"pointerdown":"touchstart mousedown",U=R.PointerEvent?"pointermove":"touchmove mousemove",j=R.PointerEvent?" pointerup pointercancel":"touchend touchcancel mouseup",P=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,q=/^data:/,$=/^data:image\/jpeg;base64,/,Q=/^(img|canvas)$/i,Z={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K=Number.isNaN||R.isNaN,V=Object.prototype.hasOwnProperty,G=/^(width|height|left|top|marginLeft|marginTop)$/,J=/([a-z\d])([A-Z])/g,_=/\s+/,tt=R.location,et=/^(https?:)\/\/([^:/?#]+):?(\d*)/i,it=R.navigator,at=it&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(it.userAgent),nt=Number.isFinite||R.isFinite,ot=String.fromCharCode,rt=/^data:.*,/,ht={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;l(a,A),d(t,A);var n={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};this.containerData=n,s(a,{width:n.width,height:n.height}),l(t,A),d(a,A)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,h=n/o,s=t.width,c=t.height;t.height*h>t.width?3===i?s=t.height*h:c=t.width/h:3===i?c=t.width/h:s=t.height*h;var l={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:s,height:c};l.left=(t.width-s)/2,l.top=(t.height-c)/2,l.oldLeft=l.left,l.oldTop=l.top,this.canvasData=l,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=r({},e),this.initialCanvasData=r({},l)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;r>1?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(l*h>c?c=l*h:l=c/h)):r>0&&(c?c=Math.max(c,s?o.width:0):l?l=Math.max(l,s?o.height:0):s&&(c=o.width,(l=o.height)*h>c?c=l*h:l=c/h));var d=W({aspectRatio:h,width:c,height:l});c=d.width,l=d.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(r){var p=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=N({width:a.naturalWidth*Math.abs(a.scaleX),height:a.naturalHeight*Math.abs(a.scaleY),degree:a.rotate}),o=n.width,h=n.height,c=i.width*(o/i.naturalWidth),l=i.height*(h/i.naturalHeight);i.left-=(c-i.width)/2,i.top-=(l-i.height)/2,i.width=c,i.height=l,i.aspectRatio=o/h,i.naturalWidth=o,i.naturalHeight=h,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,s(this.canvas,r({width:i.width,height:i.height},D({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);r(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),s(this.image,r({width:i.width,height:i.height},D(r({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=r({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=Math.min(a.width,r?n.width:a.width),d=Math.min(a.height,r?n.height:a.height);s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?c*h>s?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),d*h>l?d=l/h:l=d*h),o.minWidth=Math.min(s,l),o.minHeight=Math.min(c,d),o.maxWidth=l,o.maxHeight=d}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&g(this.face,"action",i.width>=e.width&&i.height>=e.height?"move":"all"),s(this.cropBox,r({width:i.width,height:i.height},D({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),this.complete&&b(this.element,"crop",this.getData())}},st={initPreview:function(){var t=this.crossOrigin,e=this.options.preview,i=t?this.crossOriginUrl:this.url,a=document.createElement("img");if(t&&(a.crossOrigin=t),a.src=i,this.viewBox.appendChild(a),this.image2=a,e){var n=e.querySelector?[e]:document.querySelectorAll(e);this.previews=n,o(n,function(e){var a=document.createElement("img");g(e,"preview",{width:e.offsetWidth,height:e.offsetHeight,html:e.innerHTML}),t&&(a.crossOrigin=t),a.src=i,a.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',y(e),e.appendChild(a)})}},resetPreview:function(){o(this.previews,function(t){var e=u(t,"preview");s(t,{width:e.width,height:e.height}),t.innerHTML=e.html,f(t,"preview")})},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,a=i.width,n=i.height,h=t.width,c=t.height,l=i.left-e.left-t.left,d=i.top-e.top-t.top;this.cropped&&!this.disabled&&(s(this.image2,r({width:h,height:c},D(r({translateX:-l,translateY:-d},t)))),o(this.previews,function(e){var i=u(e,"preview"),o=i.width,p=i.height,m=o,g=p,f=1;a&&(g=n*(f=o/a)),n&&g>p&&(m=a*(f=p/n),g=p),s(e,{width:m,height:g}),s(e.getElementsByTagName("img")[0],r({width:h*f,height:c*f},D(r({translateX:-l*f,translateY:-d*f},t))))}))}},ct={bind:function(){var t=this.element,e=this.options,i=this.cropper;n(e.cropstart)&&w(t,"cropstart",e.cropstart),n(e.cropmove)&&w(t,"cropmove",e.cropmove),n(e.cropend)&&w(t,"cropend",e.cropend),n(e.crop)&&w(t,"crop",e.crop),n(e.zoom)&&w(t,"zoom",e.zoom),w(i,I,this.onCropStart=h(this.cropStart,this)),e.zoomable&&e.zoomOnWheel&&w(i,"wheel mousewheel DOMMouseScroll",this.onWheel=h(this.wheel,this)),e.toggleDragModeOnDblclick&&w(i,"dblclick",this.onDblclick=h(this.dblclick,this)),w(document,U,this.onCropMove=h(this.cropMove,this)),w(document,j,this.onCropEnd=h(this.cropEnd,this)),e.responsive&&w(R,"resize",this.onResize=h(this.resize,this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;n(e.cropstart)&&v(t,"cropstart",e.cropstart),n(e.cropmove)&&v(t,"cropmove",e.cropmove),n(e.cropend)&&v(t,"cropend",e.cropend),n(e.crop)&&v(t,"crop",e.crop),n(e.zoom)&&v(t,"zoom",e.zoom),v(i,I,this.onCropStart),e.zoomable&&e.zoomOnWheel&&v(i,"wheel mousewheel DOMMouseScroll",this.onWheel),e.toggleDragModeOnDblclick&&v(i,"dblclick",this.onDblclick),v(document,U,this.onCropMove),v(document,j,this.onCropEnd),e.responsive&&v(R,"resize",this.onResize)}},lt={resize:function(){var t=this.options,e=this.container,i=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||i.width<=a||i.height<=n)){var r=e.offsetWidth/i.width;if(1!==r||e.offsetHeight!==i.height){var h=void 0,s=void 0;t.restore&&(h=this.getCanvasData(),s=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(o(h,function(t,e){h[e]=t*r})),this.setCropBoxData(o(s,function(t,e){s[e]=t*r})))}}},dblclick:function(){this.disabled||"none"===this.options.dragMode||this.setDragMode(c(this.dragBox,"cropper-crop")?"move":"crop")},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){if(!this.disabled){var e=this.options,i=this.pointers,a=void 0;t.changedTouches?o(t.changedTouches,function(t){i[t.identifier]=E(t)}):i[t.pointerId||0]=E(t),a=Object.keys(i).length>1&&e.zoomable&&e.zoomOnTouch?"zoom":u(t.target,"action"),P.test(a)&&!1!==b(this.element,"cropstart",{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,"crop"===a&&(this.cropping=!0,l(this.dragBox,"cropper-modal")))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==b(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?o(t.changedTouches,function(t){r(i[t.identifier],E(t,!0))}):r(i[t.pointerId||0],E(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?o(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,p(this.dragBox,"cropper-modal",this.cropped&&this.options.modal)),b(this.element,"cropend",{originalEvent:t,action:e}))}}},dt={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,r=this.pointers,h=this.action,s=e.aspectRatio,c=n.left,l=n.top,p=n.width,m=n.height,u=c+p,g=l+m,f=0,v=0,w=a.width,b=a.height,y=!0,M=void 0;!s&&t.shiftKey&&(s=p&&m?p/m:1),this.limited&&(f=n.minLeft,v=n.minTop,w=f+Math.min(a.width,i.width,i.left+i.width),b=v+Math.min(a.height,i.height,i.top+i.height));var C=r[Object.keys(r)[0]],D={x:C.endX-C.startX,y:C.endY-C.startY},B=function(t){switch(t){case"e":u+D.x>w&&(D.x=w-u);break;case"w":c+D.x<f&&(D.x=f-c);break;case"n":l+D.y<v&&(D.y=v-l);break;case"s":g+D.y>b&&(D.y=b-g)}};switch(h){case"all":c+=D.x,l+=D.y;break;case"e":if(D.x>=0&&(u>=w||s&&(l<=v||g>=b))){y=!1;break}B("e"),p+=D.x,s&&(m=p/s,l-=D.x/s/2),p<0&&(h="w",p=0);break;case"n":if(D.y<=0&&(l<=v||s&&(c<=f||u>=w))){y=!1;break}B("n"),m-=D.y,l+=D.y,s&&(p=m*s,c+=D.y*s/2),m<0&&(h="s",m=0);break;case"w":if(D.x<=0&&(c<=f||s&&(l<=v||g>=b))){y=!1;break}B("w"),p-=D.x,c+=D.x,s&&(m=p/s,l+=D.x/s/2),p<0&&(h="e",p=0);break;case"s":if(D.y>=0&&(g>=b||s&&(c<=f||u>=w))){y=!1;break}B("s"),m+=D.y,s&&(p=m*s,c-=D.y*s/2),m<0&&(h="n",m=0);break;case"ne":if(s){if(D.y<=0&&(l<=v||u>=w)){y=!1;break}B("n"),m-=D.y,l+=D.y,p=m*s}else B("n"),B("e"),D.x>=0?u<w?p+=D.x:D.y<=0&&l<=v&&(y=!1):p+=D.x,D.y<=0?l>v&&(m-=D.y,l+=D.y):(m-=D.y,l+=D.y);p<0&&m<0?(h="sw",m=0,p=0):p<0?(h="nw",p=0):m<0&&(h="se",m=0);break;case"nw":if(s){if(D.y<=0&&(l<=v||c<=f)){y=!1;break}B("n"),m-=D.y,l+=D.y,p=m*s,c+=D.y*s}else B("n"),B("w"),D.x<=0?c>f?(p-=D.x,c+=D.x):D.y<=0&&l<=v&&(y=!1):(p-=D.x,c+=D.x),D.y<=0?l>v&&(m-=D.y,l+=D.y):(m-=D.y,l+=D.y);p<0&&m<0?(h="se",m=0,p=0):p<0?(h="ne",p=0):m<0&&(h="sw",m=0);break;case"sw":if(s){if(D.x<=0&&(c<=f||g>=b)){y=!1;break}B("w"),p-=D.x,c+=D.x,m=p/s}else B("s"),B("w"),D.x<=0?c>f?(p-=D.x,c+=D.x):D.y>=0&&g>=b&&(y=!1):(p-=D.x,c+=D.x),D.y>=0?g<b&&(m+=D.y):m+=D.y;p<0&&m<0?(h="ne",m=0,p=0):p<0?(h="se",p=0):m<0&&(h="nw",m=0);break;case"se":if(s){if(D.x>=0&&(u>=w||g>=b)){y=!1;break}B("e"),m=(p+=D.x)/s}else B("s"),B("e"),D.x>=0?u<w?p+=D.x:D.y>=0&&g>=b&&(y=!1):p+=D.x,D.y>=0?g<b&&(m+=D.y):m+=D.y;p<0&&m<0?(h="nw",m=0,p=0):p<0?(h="sw",p=0):m<0&&(h="ne",m=0);break;case"move":this.move(D.x,D.y),y=!1;break;case"zoom":this.zoom(k(r),t),y=!1;break;case"crop":if(!D.x||!D.y){y=!1;break}M=x(this.cropper),c=C.startX-M.left,l=C.startY-M.top,p=n.minWidth,m=n.minHeight,D.x>0?h=D.y>0?"se":"ne":D.x<0&&(c-=p,h=D.y>0?"sw":"nw"),D.y<0&&(l-=m),this.cropped||(d(this.cropBox,A),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}y&&(n.width=p,n.height=m,n.left=c,n.top=l,this.action=h,this.renderCropBox()),o(r,function(t){t.startX=t.endX,t.startY=t.endY})}},pt={crop:function(){return this.ready&&!this.disabled&&(this.cropped||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&l(this.dragBox,"cropper-modal"),d(this.cropBox,A)),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=r({},this.initialImageData),this.canvasData=r({},this.initialCanvasData),this.cropBoxData=r({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(r(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),d(this.dragBox,"cropper-modal"),l(this.cropBox,A)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.image2.src=t,o(this.previews,function(e){e.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.load(t))),this},enable:function(){return this.ready&&(this.disabled=!1,d(this.cropper,"cropper-disabled")),this},disable:function(){return this.ready&&(this.disabled=!0,l(this.cropper,"cropper-disabled")),this},destroy:function(){var t=this.element,e=this.image;return this.loaded?(this.isImg&&this.replaced&&(t.src=this.originalUrl),this.unbuild(),d(t,A)):this.isImg?v(t,"load",this.onStart):e&&e.parentNode.removeChild(e),f(t,"cropper"),this},move:function(t,i){var a=this.canvasData,n=a.left,o=a.top;return this.moveTo(e(t)?t:n+Number(t),e(i)?i:o+Number(i))},moveTo:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,a=this.canvasData,n=!1;return e=Number(e),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(t(e)&&(a.left=e,n=!0),t(i)&&(a.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=Number(t),t=t<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,e)},zoomTo:function(t,e){var i=this.options,a=this.canvasData,n=a.width,o=a.height,r=a.naturalWidth,h=a.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&i.zoomable){var s=r*t,c=h*t;if(!1===b(this.element,"zoom",{originalEvent:e,oldRatio:n/r,ratio:s/r}))return this;if(e){var l=this.pointers,d=x(this.cropper),p=l&&Object.keys(l).length?T(l):{pageX:e.pageX,pageY:e.pageY};a.left-=(s-n)*((p.pageX-d.left-a.left)/n),a.top-=(c-o)*((p.pageY-d.top-a.top)/o)}else a.left-=(s-n)/2,a.top-=(c-o)/2;a.width=s,a.height=c,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(e){return e=Number(e),t(e)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=e%360,this.renderCanvas(!0,!0)),this},scaleX:function(e){var i=this.imageData.scaleY;return this.scale(e,t(i)?i:1)},scaleY:function(e){var i=this.imageData.scaleX;return this.scale(t(i)?i:1,e)},scale:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,a=this.imageData,n=!1;return e=Number(e),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(t(e)&&(a.scaleX=e,n=!0),t(i)&&(a.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.options,i=this.imageData,a=this.canvasData,n=this.cropBoxData,r=void 0;if(this.ready&&this.cropped){r={x:n.left-a.left,y:n.top-a.top,width:n.width,height:n.height};var h=i.width/i.naturalWidth;o(r,function(e,i){e/=h,r[i]=t?Math.round(e):e})}else r={x:0,y:0,width:0,height:0};return e.rotatable&&(r.rotate=i.rotate||0),e.scalable&&(r.scaleX=i.scaleX||1,r.scaleY=i.scaleY||1),r},setData:function(e){var i=this.options,o=this.imageData,r=this.canvasData,h={};if(n(e)&&(e=e.call(this.element)),this.ready&&!this.disabled&&a(e)){var s=!1;i.rotatable&&t(e.rotate)&&e.rotate!==o.rotate&&(o.rotate=e.rotate,s=!0),i.scalable&&(t(e.scaleX)&&e.scaleX!==o.scaleX&&(o.scaleX=e.scaleX,s=!0),t(e.scaleY)&&e.scaleY!==o.scaleY&&(o.scaleY=e.scaleY,s=!0)),s&&this.renderCanvas(!0,!0);var c=o.width/o.naturalWidth;t(e.x)&&(h.left=e.x*c+r.left),t(e.y)&&(h.top=e.y*c+r.top),t(e.width)&&(h.width=e.width*c),t(e.height)&&(h.height=e.height*c),this.setCropBoxData(h)}return this},getContainerData:function(){return this.ready?r({},this.containerData):{}},getImageData:function(){return this.loaded?r({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&o(["left","top","width","height","naturalWidth","naturalHeight"],function(i){e[i]=t[i]}),e},setCanvasData:function(e){var i=this.canvasData,o=i.aspectRatio;return n(e)&&(e=e.call(this.element)),this.ready&&!this.disabled&&a(e)&&(t(e.left)&&(i.left=e.left),t(e.top)&&(i.top=e.top),t(e.width)?(i.width=e.width,i.height=e.width/o):t(e.height)&&(i.height=e.height,i.width=e.height*o),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,e=void 0;return this.ready&&this.cropped&&(e={left:t.left,top:t.top,width:t.width,height:t.height}),e||{}},setCropBoxData:function(e){var i=this.cropBoxData,o=this.options.aspectRatio,r=void 0,h=void 0;return n(e)&&(e=e.call(this.element)),this.ready&&this.cropped&&!this.disabled&&a(e)&&(t(e.left)&&(i.left=e.left),t(e.top)&&(i.top=e.top),t(e.width)&&e.width!==i.width&&(r=!0,i.width=e.width),t(e.height)&&e.height!==i.height&&(h=!0,i.height=e.height),o&&(r?i.height=i.width/o:h&&(i.width=i.height*o)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!R.HTMLCanvasElement)return null;var e=this.canvasData,i=H(this.image,this.imageData,e,t);if(!this.cropped)return i;var a=this.getData(),n=a.x,o=a.y,r=a.width,h=a.height,s=r/h,c=W({aspectRatio:s,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),l=W({aspectRatio:s,width:t.minWidth||0,height:t.minHeight||0}),d=W({aspectRatio:s,width:t.width||r,height:t.height||h}),p=d.width,m=d.height;p=Math.min(c.width,Math.max(l.width,p)),m=Math.min(c.height,Math.max(l.height,m));var u=document.createElement("canvas"),g=u.getContext("2d");u.width=p,u.height=m,g.fillStyle=t.fillColor||"transparent",g.fillRect(0,0,p,m);var f=t.imageSmoothingEnabled,v=void 0===f||f,w=t.imageSmoothingQuality;g.imageSmoothingEnabled=v,w&&(g.imageSmoothingQuality=w);var b=i.width,x=i.height,y=n,M=o,C=void 0,D=void 0,B=void 0,k=void 0,E=void 0,T=void 0;y<=-r||y>b?(y=0,C=0,B=0,E=0):y<=0?(B=-y,y=0,E=C=Math.min(b,r+y)):y<=b&&(B=0,E=C=Math.min(r,b-y)),C<=0||M<=-h||M>x?(M=0,D=0,k=0,T=0):M<=0?(k=-M,M=0,T=D=Math.min(x,h+M)):M<=x&&(k=0,T=D=Math.min(h,x-M));var N=[Math.floor(y),Math.floor(M),Math.floor(C),Math.floor(D)];if(E>0&&T>0){var L=p/r;N.push(Math.floor(B*L),Math.floor(k*L),Math.floor(E*L),Math.floor(T*L))}return g.drawImage.apply(g,[i].concat(N)),u},setAspectRatio:function(t){var i=this.options;return this.disabled||e(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.loaded&&!this.disabled){var n="crop"===t,o=e.movable&&"move"===t;g(i,"action",t=n||o?t:"none"),p(i,"cropper-crop",n),p(i,"cropper-move",o),e.cropBoxMovable||(g(a,"action",t),p(a,"cropper-crop",n),p(a,"cropper-move",o))}return this}},mt=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),ut=R.Cropper,gt=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(z(this,t),!e||!Q.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=r({},Z,a(i)&&i),this.complete=!1,this.cropped=!1,this.disabled=!1,this.isImg=!1,this.limited=!1,this.loaded=!1,this.ready=!1,this.replaced=!1,this.wheeling=!1,this.originalUrl="",this.canvasData=null,this.cropBoxData=null,this.previews=null,this.pointers={},this.init()}return mt(t,[{key:"init",value:function(){var t=this.element,e=t.tagName.toLowerCase(),i=void 0;if(!u(t,"cropper")){if(g(t,"cropper",this),"img"===e){if(this.isImg=!0,i=t.getAttribute("src")||"",this.originalUrl=i,!i)return;i=t.src}else"canvas"===e&&R.HTMLCanvasElement&&(i=t.toDataURL());this.load(i)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.checkOrientation&&R.ArrayBuffer)if(q.test(t))$.test(t)?this.read(Y(t)):this.clone();else{var n=new XMLHttpRequest;n.onerror=function(){e.clone()},n.onload=function(){e.read(n.response)},a.checkCrossOrigin&&M(t)&&i.crossOrigin&&(t=C(t)),n.open("get",t),n.responseType="arraybuffer",n.withCredentials="use-credentials"===i.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=O(t),n=0,o=1,r=1;if(a>1){this.url=X(t,"image/jpeg");var h=S(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=void 0,a=void 0;this.options.checkCrossOrigin&&M(e)&&((i=t.crossOrigin)?a=e:(i="anonymous",a=C(e))),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e;var o=h(this.start,this),r=h(this.stop,this);this.image=n,this.onStart=o,this.onStop=r,this.isImg?t.complete?this.start():w(t,"load",o):(w(n,"load",o),w(n,"error",r),l(n,"cropper-hide"),t.parentNode.insertBefore(n,t.nextSibling))}},{key:"start",value:function(t){var e=this,i=this.isImg?this.element:this.image;t&&(v(i,"load",this.onStart),v(i,"error",this.onStop)),B(i,function(t,i){r(e.imageData,{naturalWidth:t,naturalHeight:i,aspectRatio:t/i}),e.loaded=!0,e.build()})}},{key:"stop",value:function(){var t=this.image;v(t,"load",this.onStart),v(t,"error",this.onStop),t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){var t=this;if(this.loaded){this.ready&&this.unbuild();var e=this.element,i=this.options,a=this.image,o=e.parentNode,r=document.createElement("div");r.innerHTML='<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>';var h=r.querySelector(".cropper-container"),s=h.querySelector(".cropper-canvas"),c=h.querySelector(".cropper-drag-box"),p=h.querySelector(".cropper-crop-box"),m=p.querySelector(".cropper-face");this.container=o,this.cropper=h,this.canvas=s,this.dragBox=c,this.cropBox=p,this.viewBox=h.querySelector(".cropper-view-box"),this.face=m,s.appendChild(a),l(e,A),o.insertBefore(h,e.nextSibling),this.isImg||d(a,"cropper-hide"),this.initPreview(),this.bind(),i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,this.cropped=i.autoCrop,i.autoCrop?i.modal&&l(c,"cropper-modal"):l(p,A),i.guides||l(p.getElementsByClassName("cropper-dashed"),A),i.center||l(p.getElementsByClassName("cropper-center"),A),i.background&&l(h,"cropper-bg"),i.highlight||l(m,"cropper-invisible"),i.cropBoxMovable&&(l(m,"cropper-move"),g(m,"action","all")),i.cropBoxResizable||(l(p.getElementsByClassName("cropper-line"),A),l(p.getElementsByClassName("cropper-point"),A)),this.setDragMode(i.dragMode),this.render(),this.ready=!0,this.setData(i.data),this.completing=setTimeout(function(){n(i.ready)&&w(e,"ready",i.ready,{once:!0}),b(e,"ready"),b(e,"crop",t.getData()),t.complete=!0},0)}}},{key:"unbuild",value:function(){this.ready&&(this.complete||clearTimeout(this.completing),this.ready=!1,this.complete=!1,this.initialImageData=null,this.initialCanvasData=null,this.initialCropBoxData=null,this.containerData=null,this.canvasData=null,this.cropBoxData=null,this.unbind(),this.resetPreview(),this.previews=null,this.viewBox=null,this.cropBox=null,this.dragBox=null,this.canvas=null,this.container=null,this.cropper.parentNode.removeChild(this.cropper),this.cropper=null)}}],[{key:"noConflict",value:function(){return R.Cropper=ut,t}},{key:"setDefaults",value:function(t){r(Z,a(t)&&t)}}]),t}();return r(gt.prototype,ht,st,ct,lt,dt,pt),gt});  
/* jscs:enable */
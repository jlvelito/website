!function(){"use strict";function t(t,n,e){t.style.setProperty("-webkit-animation",n+" "+e+"s"),t.style.setProperty("animation",n+" "+e+"s"),t.style.setProperty("-moz-animation",n+" "+e+"s"),t.style.setProperty("-o-animation",n+" "+e+"s")}function n(t){t.style.removeProperty("-webkit-animation"),t.style.removeProperty("animation"),t.style.removeProperty("-moz-animation"),t.style.removeProperty("-o-animation")}function e(t,n,e){t.classList.contains(n)&&t.classList.remove(n),t.classList.add(e)}function o(o,c,v){function w(){var t=u(),n=y/2;l=window.setTimeout(function(){var i=u()-t;i>=n&&e(o,c.from,c.to)},n)}function f(){window.clearTimeout(l),n(o),o.removeEventListener(a,f),o.removeEventListener(i,w),"function"==typeof v&&v()}var y,l,p;if(!o)throw new Error('Iconate > "element" is required');return d?(c=c||{},p=c.animation||s,y=c.duration||r,o.addEventListener(i,w,!1),o.addEventListener(a,f,!1),void t(o,p,y/m)):(e(o,c.from,c.to),void("function"==typeof v&&v()))}var i,a,r=600,m=1e3,s="zoomOut",d=function(){var t=document.documentElement.style;return void 0!==t.animation||void 0!==t.webkitAnimation}();a=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend?"webkitAnimationEnd":"animationend",i=void 0===window.onanimationstart&&void 0!==window.onwebkitanimationstart?"webkitAnimationStart":"animationstart";var u=Date.now||function(){return(new Date).getTime()};"object"==typeof exports?module.exports=o:"function"==typeof define&&define.amd?define(function(){return o}):window.iconate=o}();
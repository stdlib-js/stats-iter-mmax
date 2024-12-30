// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itermmax=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,v,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,E=Array.isArray;function _(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,u,f,l,s,p,g,d,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",f+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var I,O=Object.prototype,V=O.toString,N=O.__defineGetter__,P=O.__defineSetter__,C=O.__lookupGetter__,$=O.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};var R=I;function B(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function L(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&W.call(r,e)}var K="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof K?K.toStringTag:"";var z=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[Y],e=X(r,Y);try{r[Y]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return U.call(r)},q=Boolean,D=Boolean.prototype.toString;var H=Z();function J(r){return"object"==typeof r&&(r instanceof q||(H?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return L(r)||J(r)}B(Q,"isPrimitive",L),B(Q,"isObject",J);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!L(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=ir.document&&ir.document.childNodes,ar=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;B(cr,"REGEXP",ur);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return lr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var pr="function"==typeof G||"object"==typeof ar||"function"==typeof or?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function gr(r){return"function"===pr(r)}function dr(r){return"number"==typeof r}var yr=Number,br=yr.prototype.toString;var vr=Z();function hr(r){return"object"==typeof r&&(r instanceof yr||(vr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function wr(r){return dr(r)||hr(r)}B(wr,"isPrimitive",dr),B(wr,"isObject",hr);var mr=Number.POSITIVE_INFINITY,jr=yr.NEGATIVE_INFINITY,Er=Math.floor;function _r(r){return r<mr&&r>jr&&Er(e=r)===e;var e}function Sr(r){return dr(r)&&_r(r)}function xr(r){return hr(r)&&_r(r.valueOf())}function Tr(r){return Sr(r)||xr(r)}function Ar(r){return Sr(r)&&r>0}function kr(r){return xr(r)&&r.valueOf()>0}function Fr(r){return Ar(r)||kr(r)}B(Tr,"isPrimitive",Sr),B(Tr,"isObject",xr),B(Fr,"isPrimitive",Ar),B(Fr,"isObject",kr);var Ir="function"==typeof K&&"symbol"==typeof K("foo")&&X(K,"iterator")&&"symbol"==typeof K.iterator?Symbol.iterator:null;function Or(r){return r!=r}function Vr(r){return 0===r&&1/r===mr}var Nr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var Cr="function"==typeof Float64Array?Float64Array:void 0;var $r=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr([1,3.14,-3.14,NaN]),t=e,r=(Nr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};function Rr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return function r(e,t){var n,i,o,a,c;if(c=typeof(a=e),null===a||"object"!==c&&"function"!==c||!gr(a.next))throw new TypeError(Rr("1Kt3v",e));if(!Ar(t))throw new TypeError(Rr("1Kt45",t));return o=function(r){var e,t,n,i;if(!Ar(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new $r(r),t=jr,i=-1,n=0,function(o){var a,c;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,n<r)n+=1,(Or(o)||o>t||o===t&&Vr(o))&&(t=o);else if(Or(o)||o>t)t=o;else if(e[i]===t&&o<t||Or(e[i])){for(t=o,c=0;c<r;c++)if(c!==i){if(Or(a=e[c])){t=a;break}(a>t||a===t&&Vr(a))&&(t=a)}}else if(e[i]===t&&o===t&&0===o)if(Vr(o))t=o;else if(Vr(e[i]))for(t=o,c=0;c<r;c++)if(c!==i&&Vr(e[c])){t=e[c];break}return e[i]=o,t}}(t),B(n={},"next",(function(){var r;if(i)return{done:!0};if((r=e.next()).done)return i=!0,{done:!0};r="number"==typeof r.value?o(r.value):o(NaN);return{value:r,done:!1}})),B(n,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ir&&gr(e[Ir])&&B(n,Ir,(function(){return r(e[Ir](),t)})),n}}));
//# sourceMappingURL=index.js.map

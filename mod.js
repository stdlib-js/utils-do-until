// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":p(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var S=String.fromCharCode,k=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,i,o,c,p,u,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(n=e[u]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,k(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),c+=n.arg||"",p+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=A.exec(e);n;)(r=e.slice(i,A.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=A.lastIndex,n=A.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){return"string"==typeof e}function I(e){var r,t,n;if(!O(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var C,P=Object.prototype,R=P.toString,G=P.__defineGetter__,Z=P.__defineSetter__,L=P.__lookupGetter__,W=P.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var B=C;function U(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function z(){return M&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var K=z()?function(e){var r,t,n,i,a;if(null==e)return D.call(e);t=e[q],a=q,r=null!=(i=e)&&H.call(i,a);try{e[q]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[q]=t:delete e[q],n}:function(e){return D.call(e)},Q=Boolean,Y=Boolean.prototype.toString;var ee=z();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return N(e)||re(e)}function ne(){return new Function("return this;")()}U(te,"isPrimitive",N),U(te,"isObject",re);var ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ce="object"==typeof oe?oe:null,se="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!N(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(se)return se;if(ie)return ie;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),pe=le.document&&le.document.childNodes,ue=Int8Array;var fe=X();var ge=Object.prototype.toString;var de=Object.prototype.hasOwnProperty;var he="function"==typeof J?J.toStringTag:"";var we=fe&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n,i,a;if(null==e)return ge.call(e);t=e[he],a=he,r=null!=(i=e)&&de.call(i,a);try{e[he]=void 0}catch(r){return ge.call(e)}return n=ge.call(e),r?e[he]=t:delete e[he],n}:function(e){return ge.call(e)},be="function"==typeof Object.defineProperty?Object.defineProperty:null;var ye=Object.defineProperty;function ve(e){return"number"==typeof e}function me(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function _e(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+me(i):me(i)+e,n&&(e="-"+e)),e}var Ee=String.prototype.toLowerCase,je=String.prototype.toUpperCase;function Se(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!ve(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=_e(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=_e(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===je.call(e.specifier)?je.call(t):Ee.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ke(e){return"string"==typeof e}var xe=Math.abs,Te=String.prototype.toLowerCase,Ve=String.prototype.toUpperCase,Ae=String.prototype.replace,$e=/e\+(\d)$/,Fe=/e-(\d)$/,Oe=/^(\d+)$/,Ie=/^(\d+)e/,Ce=/\.0$/,Pe=/\.0*e/,Re=/(\..*[^0])0*e/;function Ge(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!ve(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":xe(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Ae.call(t,Re,"$1e"),t=Ae.call(t,Pe,"e"),t=Ae.call(t,Ce,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ae.call(t,$e,"e+0$1"),t=Ae.call(t,Fe,"e-0$1"),e.alternate&&(t=Ae.call(t,Oe,"$1."),t=Ae.call(t,Ie,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ve.call(e.specifier)?Ve.call(t):Te.call(t)}function Ze(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Le(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Ze(n):Ze(n)+e}var We=String.fromCharCode,Be=isNaN,Ue=Array.isArray;function Ne(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Xe(e){var r,t,n,i,a,o,c,s,l;if(!Ue(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ke(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Ne(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Be(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Be(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Se(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Be(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Be(a)?String(n.arg):We(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Ge(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_e(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Le(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function De(e){var r,t,n,i;for(t=[],i=0,n=Me.exec(e);n;)(r=e.slice(i,Me.lastIndex-n[0].length)).length&&t.push(r),t.push(ze(n)),i=Me.lastIndex,n=Me.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function He(e){return"string"==typeof e}function Je(e){var r,t,n;if(!He(e))throw new TypeError(Je("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=De(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Xe.apply(null,t)}var qe,Ke=Object.prototype,Qe=Ke.toString,Ye=Ke.__defineGetter__,er=Ke.__defineSetter__,rr=Ke.__lookupGetter__,tr=Ke.__lookupSetter__;qe=function(){try{return be({},"x",{}),!0}catch(e){return!1}}()?ye:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Qe.call(e))throw new TypeError(Je("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Qe.call(t))throw new TypeError(Je("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(rr.call(e,r)||tr.call(e,r)?(n=e.__proto__,e.__proto__=Ke,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ye&&Ye.call(e,r,t.get),o&&er&&er.call(e,r,t.set),e};var nr=qe;function ir(e,r,t){nr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ar(){return/^\s*function\s*([^(]*)/i}var or=/^\s*function\s*([^(]*)/i;ir(ar,"REGEXP",or);var cr=Array.isArray?Array.isArray:function(e){return"[object Array]"===we(e)};function sr(e){return null!==e&&"object"==typeof e}function lr(e){var r,t,n,i;if(("Object"===(t=we(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=or.exec(n.toString()))return r[1]}return sr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ir(sr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Je("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!cr(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(sr));var pr="function"==typeof e||"object"==typeof ue||"function"==typeof pe?function(e){return lr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?lr(e).toLowerCase():r};function ur(e){return"function"===pr(e)}function fr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function gr(e,r,t){var n;if(!ur(e))throw new TypeError(fr("1TD3c,J9",e));if(!ur(r))throw new TypeError(fr("1TD2H,G6",r));n=0;do{e.call(t,n),n+=1}while(!r(n))}export{gr as default};
//# sourceMappingURL=mod.js.map

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function hd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var es={exports:{}},fr={},ts={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),md=Symbol.for("react.portal"),yd=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Id=Symbol.for("react.memo"),bd=Symbol.for("react.lazy"),Vi=Symbol.iterator;function Cd(n){return n===null||typeof n!="object"?null:(n=Vi&&n[Vi]||n["@@iterator"],typeof n=="function"?n:null)}var as={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rs=Object.assign,os={};function yt(n,e,t){this.props=n,this.context=e,this.refs=os,this.updater=t||as}yt.prototype.isReactComponent={};yt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};yt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function is(){}is.prototype=yt.prototype;function Go(n,e,t){this.props=n,this.context=e,this.refs=os,this.updater=t||as}var Xo=Go.prototype=new is;Xo.constructor=Go;rs(Xo,yt.prototype);Xo.isPureReactComponent=!0;var Ui=Array.isArray,ls=Object.prototype.hasOwnProperty,Jo={current:null},ss={key:!0,ref:!0,__self:!0,__source:!0};function us(n,e,t){var a,r={},o=null,i=null;if(e!=null)for(a in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(o=""+e.key),e)ls.call(e,a)&&!ss.hasOwnProperty(a)&&(r[a]=e[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}if(n&&n.defaultProps)for(a in l=n.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:sa,type:n,key:o,ref:i,props:r,_owner:Jo.current}}function Pd(n,e){return{$$typeof:sa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Zo(n){return typeof n=="object"&&n!==null&&n.$$typeof===sa}function _d(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var $i=/\/+/g;function jr(n,e){return typeof n=="object"&&n!==null&&n.key!=null?_d(""+n.key):e.toString(36)}function Ta(n,e,t,a,r){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var i=!1;if(n===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(n.$$typeof){case sa:case md:i=!0}}if(i)return i=n,r=r(i),n=a===""?"."+jr(i,0):a,Ui(r)?(t="",n!=null&&(t=n.replace($i,"$&/")+"/"),Ta(r,e,t,"",function(c){return c})):r!=null&&(Zo(r)&&(r=Pd(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace($i,"$&/")+"/")+n)),e.push(r)),1;if(i=0,a=a===""?".":a+":",Ui(n))for(var l=0;l<n.length;l++){o=n[l];var s=a+jr(o,l);i+=Ta(o,e,t,s,r)}else if(s=Cd(n),typeof s=="function")for(n=s.call(n),l=0;!(o=n.next()).done;)o=o.value,s=a+jr(o,l++),i+=Ta(o,e,t,s,r);else if(o==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function pa(n,e,t){if(n==null)return n;var a=[],r=0;return Ta(n,a,"","",function(o){return e.call(t,o,r++)}),a}function jd(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},Oa={transition:null},Ed={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Jo};function ds(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:pa,forEach:function(n,e,t){pa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return pa(n,function(){e++}),e},toArray:function(n){return pa(n,function(e){return e})||[]},only:function(n){if(!Zo(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};T.Component=yt;T.Fragment=yd;T.Profiler=vd;T.PureComponent=Go;T.StrictMode=kd;T.Suspense=Nd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;T.act=ds;T.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var a=rs({},n.props),r=n.key,o=n.ref,i=n._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,i=Jo.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(s in e)ls.call(e,s)&&!ss.hasOwnProperty(s)&&(a[s]=e[s]===void 0&&l!==void 0?l[s]:e[s])}var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:sa,type:n.type,key:r,ref:o,props:a,_owner:i}};T.createContext=function(n){return n={$$typeof:xd,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:wd,_context:n},n.Consumer=n};T.createElement=us;T.createFactory=function(n){var e=us.bind(null,n);return e.type=n,e};T.createRef=function(){return{current:null}};T.forwardRef=function(n){return{$$typeof:Sd,render:n}};T.isValidElement=Zo;T.lazy=function(n){return{$$typeof:bd,_payload:{_status:-1,_result:n},_init:jd}};T.memo=function(n,e){return{$$typeof:Id,type:n,compare:e===void 0?null:e}};T.startTransition=function(n){var e=Oa.transition;Oa.transition={};try{n()}finally{Oa.transition=e}};T.unstable_act=ds;T.useCallback=function(n,e){return cn.current.useCallback(n,e)};T.useContext=function(n){return cn.current.useContext(n)};T.useDebugValue=function(){};T.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};T.useEffect=function(n,e){return cn.current.useEffect(n,e)};T.useId=function(){return cn.current.useId()};T.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};T.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};T.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};T.useMemo=function(n,e){return cn.current.useMemo(n,e)};T.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};T.useRef=function(n){return cn.current.useRef(n)};T.useState=function(n){return cn.current.useState(n)};T.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};T.useTransition=function(){return cn.current.useTransition()};T.version="18.3.1";ts.exports=T;var O=ts.exports;const Td=hd(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=O,Hd=Symbol.for("react.element"),zd=Symbol.for("react.fragment"),Ad=Object.prototype.hasOwnProperty,Md=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ld={key:!0,ref:!0,__self:!0,__source:!0};function cs(n,e,t){var a,r={},o=null,i=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(a in e)Ad.call(e,a)&&!Ld.hasOwnProperty(a)&&(r[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps,e)r[a]===void 0&&(r[a]=e[a]);return{$$typeof:Hd,type:n,key:o,ref:i,props:r,_owner:Md.current}}fr.Fragment=zd;fr.jsx=cs;fr.jsxs=cs;es.exports=fr;var d=es.exports,eo={},gs={exports:{}},In={},fs={exports:{}},ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,j){var E=N.length;N.push(j);n:for(;0<E;){var W=E-1>>>1,G=N[W];if(0<r(G,j))N[W]=j,N[E]=G,E=W;else break n}}function t(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var j=N[0],E=N.pop();if(E!==j){N[0]=E;n:for(var W=0,G=N.length,be=G>>>1;W<be;){var $n=2*(W+1)-1,Nt=N[$n],Yn=$n+1,Ce=N[Yn];if(0>r(Nt,E))Yn<G&&0>r(Ce,Nt)?(N[W]=Ce,N[Yn]=E,W=Yn):(N[W]=Nt,N[$n]=E,W=$n);else if(Yn<G&&0>r(Ce,E))N[W]=Ce,N[Yn]=E,W=Yn;else break n}}return j}function r(N,j){var E=N.sortIndex-j.sortIndex;return E!==0?E:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();n.unstable_now=function(){return i.now()-l}}var s=[],c=[],m=1,h=null,p=3,v=!1,w=!1,x=!1,z=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var j=t(c);j!==null;){if(j.callback===null)a(c);else if(j.startTime<=N)a(c),j.sortIndex=j.expirationTime,e(s,j);else break;j=t(c)}}function y(N){if(x=!1,f(N),!w)if(t(s)!==null)w=!0,xt(S);else{var j=t(c);j!==null&&St(y,j.startTime-N)}}function S(N,j){w=!1,x&&(x=!1,g(P),P=-1),v=!0;var E=p;try{for(f(j),h=t(s);h!==null&&(!(h.expirationTime>j)||N&&!kn());){var W=h.callback;if(typeof W=="function"){h.callback=null,p=h.priorityLevel;var G=W(h.expirationTime<=j);j=n.unstable_now(),typeof G=="function"?h.callback=G:h===t(s)&&a(s),f(j)}else a(s);h=t(s)}if(h!==null)var be=!0;else{var $n=t(c);$n!==null&&St(y,$n.startTime-j),be=!1}return be}finally{h=null,p=E,v=!1}}var C=!1,b=null,P=-1,B=5,_=-1;function kn(){return!(n.unstable_now()-_<B)}function Un(){if(b!==null){var N=n.unstable_now();_=N;var j=!0;try{j=b(!0,N)}finally{j?re():(C=!1,b=null)}}else C=!1}var re;if(typeof u=="function")re=function(){u(Un)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,On=wt.port2;wt.port1.onmessage=Un,re=function(){On.postMessage(null)}}else re=function(){z(Un,0)};function xt(N){b=N,C||(C=!0,re())}function St(N,j){P=z(function(){N(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){w||v||(w=!0,xt(S))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(s)},n.unstable_next=function(N){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var E=p;p=j;try{return N()}finally{p=E}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var E=p;p=N;try{return j()}finally{p=E}},n.unstable_scheduleCallback=function(N,j,E){var W=n.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?W+E:W):E=W,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=E+G,N={id:m++,callback:j,priorityLevel:N,startTime:E,expirationTime:G,sortIndex:-1},E>W?(N.sortIndex=E,e(c,N),t(s)===null&&N===t(c)&&(x?(g(P),P=-1):x=!0,St(y,E-W))):(N.sortIndex=G,e(s,N),w||v||(w=!0,xt(S))),N},n.unstable_shouldYield=kn,n.unstable_wrapCallback=function(N){var j=p;return function(){var E=p;p=j;try{return N.apply(this,arguments)}finally{p=E}}}})(ps);fs.exports=ps;var Dd=fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=O,Nn=Dd;function k(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hs=new Set,Ut={};function Be(n,e){ut(n,e),ut(n+"Capture",e)}function ut(n,e){for(Ut[n]=e,n=0;n<e.length;n++)hs.add(e[n])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=Object.prototype.hasOwnProperty,Bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yi={},Qi={};function Fd(n){return to.call(Qi,n)?!0:to.call(Yi,n)?!1:Bd.test(n)?Qi[n]=!0:(Yi[n]=!0,!1)}function Wd(n,e,t,a){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Kd(n,e,t,a){if(e===null||typeof e>"u"||Wd(n,e,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(n,e,t,a,r,o,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=i}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){an[n]=new gn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];an[e]=new gn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){an[n]=new gn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){an[n]=new gn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){an[n]=new gn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){an[n]=new gn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){an[n]=new gn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){an[n]=new gn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){an[n]=new gn(n,5,!1,n.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function ni(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(qo,ni);an[e]=new gn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(qo,ni);an[e]=new gn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(qo,ni);an[e]=new gn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){an[n]=new gn(n,1,!1,n.toLowerCase(),null,!1,!1)});an.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){an[n]=new gn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ei(n,e,t,a){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:a||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kd(e,t,r,a)&&(t=null),a||r===null?Fd(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,a=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?n.setAttributeNS(a,e,t):n.setAttribute(e,t))))}var ae=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),Ue=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),ti=Symbol.for("react.strict_mode"),ao=Symbol.for("react.profiler"),ms=Symbol.for("react.provider"),ys=Symbol.for("react.context"),ai=Symbol.for("react.forward_ref"),ro=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),ri=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ks=Symbol.for("react.offscreen"),Gi=Symbol.iterator;function It(n){return n===null||typeof n!="object"?null:(n=Gi&&n[Gi]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,Er;function Ot(n){if(Er===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Er=e&&e[1]||""}return`
`+Er+n}var Tr=!1;function Or(n,e){if(!n||Tr)return"";Tr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var a=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){a=c}n.call(e.prototype)}else{try{throw Error()}catch(c){a=c}n()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=a.stack.split(`
`),i=r.length-1,l=o.length-1;1<=i&&0<=l&&r[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(r[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||r[i]!==o[l]){var s=`
`+r[i].replace(" at new "," at ");return n.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",n.displayName)),s}while(1<=i&&0<=l);break}}}finally{Tr=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ot(n):""}function Vd(n){switch(n.tag){case 5:return Ot(n.type);case 16:return Ot("Lazy");case 13:return Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 2:case 15:return n=Or(n.type,!1),n;case 11:return n=Or(n.type.render,!1),n;case 1:return n=Or(n.type,!0),n;default:return""}}function io(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $e:return"Fragment";case Ue:return"Portal";case ao:return"Profiler";case ti:return"StrictMode";case ro:return"Suspense";case oo:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ys:return(n.displayName||"Context")+".Consumer";case ms:return(n._context.displayName||"Context")+".Provider";case ai:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ri:return e=n.displayName||null,e!==null?e:io(n.type)||"Memo";case ie:e=n._payload,n=n._init;try{return io(n(e))}catch{}}return null}function Ud(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return io(e);case 8:return e===ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vs(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $d(n){var e=vs(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),a=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(i){a=""+i,o.call(this,i)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ma(n){n._valueTracker||(n._valueTracker=$d(n))}function ws(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=vs(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function Ka(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function lo(n,e){var t=e.checked;return U({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Xi(n,e){var t=e.defaultValue==null?"":e.defaultValue,a=e.checked!=null?e.checked:e.defaultChecked;t=we(e.value!=null?e.value:t),n._wrapperState={initialChecked:a,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xs(n,e){e=e.checked,e!=null&&ei(n,"checked",e,!1)}function so(n,e){xs(n,e);var t=we(e.value),a=e.type;if(t!=null)a==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(a==="submit"||a==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?uo(n,e.type,t):e.hasOwnProperty("defaultValue")&&uo(n,e.type,we(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ji(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var a=e.type;if(!(a!=="submit"&&a!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function uo(n,e,t){(e!=="number"||Ka(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ht=Array.isArray;function at(n,e,t,a){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&a&&(n[t].defaultSelected=!0)}else{for(t=""+we(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,a&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function co(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return U({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Zi(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(k(92));if(Ht(t)){if(1<t.length)throw Error(k(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:we(t)}}function Ss(n,e){var t=we(e.value),a=we(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),a!=null&&(n.defaultValue=""+a)}function qi(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ns(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ns(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ya,Is=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,a,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,a,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function $t(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yd=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(n){Yd.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Mt[e]=Mt[n]})});function bs(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Mt.hasOwnProperty(n)&&Mt[n]?(""+e).trim():e+"px"}function Cs(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=bs(t,e[t],a);t==="float"&&(t="cssFloat"),a?n.setProperty(t,r):n[t]=r}}var Qd=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fo(n,e){if(e){if(Qd[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function po(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ho=null;function oi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var mo=null,rt=null,ot=null;function nl(n){if(n=ca(n)){if(typeof mo!="function")throw Error(k(280));var e=n.stateNode;e&&(e=kr(e),mo(n.stateNode,n.type,e))}}function Ps(n){rt?ot?ot.push(n):ot=[n]:rt=n}function _s(){if(rt){var n=rt,e=ot;if(ot=rt=null,nl(n),e)for(n=0;n<e.length;n++)nl(e[n])}}function js(n,e){return n(e)}function Es(){}var Hr=!1;function Ts(n,e,t){if(Hr)return n(e,t);Hr=!0;try{return js(n,e,t)}finally{Hr=!1,(rt!==null||ot!==null)&&(Es(),_s())}}function Yt(n,e){var t=n.stateNode;if(t===null)return null;var a=kr(t);if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(k(231,e,typeof t));return t}var yo=!1;if(qn)try{var bt={};Object.defineProperty(bt,"passive",{get:function(){yo=!0}}),window.addEventListener("test",bt,bt),window.removeEventListener("test",bt,bt)}catch{yo=!1}function Gd(n,e,t,a,r,o,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(m){this.onError(m)}}var Lt=!1,Va=null,Ua=!1,ko=null,Xd={onError:function(n){Lt=!0,Va=n}};function Jd(n,e,t,a,r,o,i,l,s){Lt=!1,Va=null,Gd.apply(Xd,arguments)}function Zd(n,e,t,a,r,o,i,l,s){if(Jd.apply(this,arguments),Lt){if(Lt){var c=Va;Lt=!1,Va=null}else throw Error(k(198));Ua||(Ua=!0,ko=c)}}function Fe(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Os(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function el(n){if(Fe(n)!==n)throw Error(k(188))}function qd(n){var e=n.alternate;if(!e){if(e=Fe(n),e===null)throw Error(k(188));return e!==n?null:n}for(var t=n,a=e;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return el(r),n;if(o===a)return el(r),e;o=o.sibling}throw Error(k(188))}if(t.return!==a.return)t=r,a=o;else{for(var i=!1,l=r.child;l;){if(l===t){i=!0,t=r,a=o;break}if(l===a){i=!0,a=r,t=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===t){i=!0,t=o,a=r;break}if(l===a){i=!0,a=o,t=r;break}l=l.sibling}if(!i)throw Error(k(189))}}if(t.alternate!==a)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?n:e}function Hs(n){return n=qd(n),n!==null?zs(n):null}function zs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=zs(n);if(e!==null)return e;n=n.sibling}return null}var As=Nn.unstable_scheduleCallback,tl=Nn.unstable_cancelCallback,nc=Nn.unstable_shouldYield,ec=Nn.unstable_requestPaint,Y=Nn.unstable_now,tc=Nn.unstable_getCurrentPriorityLevel,ii=Nn.unstable_ImmediatePriority,Ms=Nn.unstable_UserBlockingPriority,$a=Nn.unstable_NormalPriority,ac=Nn.unstable_LowPriority,Ls=Nn.unstable_IdlePriority,pr=null,Kn=null;function rc(n){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(pr,n,void 0,(n.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:lc,oc=Math.log,ic=Math.LN2;function lc(n){return n>>>=0,n===0?32:31-(oc(n)/ic|0)|0}var ka=64,va=4194304;function zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ya(n,e){var t=n.pendingLanes;if(t===0)return 0;var a=0,r=n.suspendedLanes,o=n.pingedLanes,i=t&268435455;if(i!==0){var l=i&~r;l!==0?a=zt(l):(o&=i,o!==0&&(a=zt(o)))}else i=t&~r,i!==0?a=zt(i):o!==0&&(a=zt(o));if(a===0)return 0;if(e!==0&&e!==a&&!(e&r)&&(r=a&-a,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(a&4&&(a|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=a;0<e;)t=31-Ln(e),r=1<<t,a|=n[t],e&=~r;return a}function sc(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uc(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,r=n.expirationTimes,o=n.pendingLanes;0<o;){var i=31-Ln(o),l=1<<i,s=r[i];s===-1?(!(l&t)||l&a)&&(r[i]=sc(l,e)):s<=e&&(n.expiredLanes|=l),o&=~l}}function vo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ds(){var n=ka;return ka<<=1,!(ka&4194240)&&(ka=64),n}function zr(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ua(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ln(e),n[e]=t}function dc(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var a=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ln(t),o=1<<r;e[r]=0,a[r]=-1,n[r]=-1,t&=~o}}function li(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-Ln(t),r=1<<a;r&e|n[a]&e&&(n[a]|=e),t&=~r}}var M=0;function Rs(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Bs,si,Fs,Ws,Ks,wo=!1,wa=[],ge=null,fe=null,pe=null,Qt=new Map,Gt=new Map,se=[],cc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function al(n,e){switch(n){case"focusin":case"focusout":ge=null;break;case"dragenter":case"dragleave":fe=null;break;case"mouseover":case"mouseout":pe=null;break;case"pointerover":case"pointerout":Qt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(e.pointerId)}}function Ct(n,e,t,a,r,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ca(e),e!==null&&si(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function gc(n,e,t,a,r){switch(e){case"focusin":return ge=Ct(ge,n,e,t,a,r),!0;case"dragenter":return fe=Ct(fe,n,e,t,a,r),!0;case"mouseover":return pe=Ct(pe,n,e,t,a,r),!0;case"pointerover":var o=r.pointerId;return Qt.set(o,Ct(Qt.get(o)||null,n,e,t,a,r)),!0;case"gotpointercapture":return o=r.pointerId,Gt.set(o,Ct(Gt.get(o)||null,n,e,t,a,r)),!0}return!1}function Vs(n){var e=Ee(n.target);if(e!==null){var t=Fe(e);if(t!==null){if(e=t.tag,e===13){if(e=Os(t),e!==null){n.blockedOn=e,Ks(n.priority,function(){Fs(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ha(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=xo(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);ho=a,t.target.dispatchEvent(a),ho=null}else return e=ca(t),e!==null&&si(e),n.blockedOn=t,!1;e.shift()}return!0}function rl(n,e,t){Ha(n)&&t.delete(e)}function fc(){wo=!1,ge!==null&&Ha(ge)&&(ge=null),fe!==null&&Ha(fe)&&(fe=null),pe!==null&&Ha(pe)&&(pe=null),Qt.forEach(rl),Gt.forEach(rl)}function Pt(n,e){n.blockedOn===e&&(n.blockedOn=null,wo||(wo=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,fc)))}function Xt(n){function e(r){return Pt(r,n)}if(0<wa.length){Pt(wa[0],n);for(var t=1;t<wa.length;t++){var a=wa[t];a.blockedOn===n&&(a.blockedOn=null)}}for(ge!==null&&Pt(ge,n),fe!==null&&Pt(fe,n),pe!==null&&Pt(pe,n),Qt.forEach(e),Gt.forEach(e),t=0;t<se.length;t++)a=se[t],a.blockedOn===n&&(a.blockedOn=null);for(;0<se.length&&(t=se[0],t.blockedOn===null);)Vs(t),t.blockedOn===null&&se.shift()}var it=ae.ReactCurrentBatchConfig,Qa=!0;function pc(n,e,t,a){var r=M,o=it.transition;it.transition=null;try{M=1,ui(n,e,t,a)}finally{M=r,it.transition=o}}function hc(n,e,t,a){var r=M,o=it.transition;it.transition=null;try{M=4,ui(n,e,t,a)}finally{M=r,it.transition=o}}function ui(n,e,t,a){if(Qa){var r=xo(n,e,t,a);if(r===null)Vr(n,e,a,Ga,t),al(n,a);else if(gc(r,n,e,t,a))a.stopPropagation();else if(al(n,a),e&4&&-1<cc.indexOf(n)){for(;r!==null;){var o=ca(r);if(o!==null&&Bs(o),o=xo(n,e,t,a),o===null&&Vr(n,e,a,Ga,t),o===r)break;r=o}r!==null&&a.stopPropagation()}else Vr(n,e,a,null,t)}}var Ga=null;function xo(n,e,t,a){if(Ga=null,n=oi(a),n=Ee(n),n!==null)if(e=Fe(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Os(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ga=n,null}function Us(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tc()){case ii:return 1;case Ms:return 4;case $a:case ac:return 16;case Ls:return 536870912;default:return 16}default:return 16}}var de=null,di=null,za=null;function $s(){if(za)return za;var n,e=di,t=e.length,a,r="value"in de?de.value:de.textContent,o=r.length;for(n=0;n<t&&e[n]===r[n];n++);var i=t-n;for(a=1;a<=i&&e[t-a]===r[o-a];a++);return za=r.slice(n,1<a?1-a:void 0)}function Aa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xa(){return!0}function ol(){return!1}function bn(n){function e(t,a,r,o,i){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(t=n[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xa:ol,this.isPropagationStopped=ol,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=bn(kt),da=U({},kt,{view:0,detail:0}),mc=bn(da),Ar,Mr,_t,hr=U({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_t&&(_t&&n.type==="mousemove"?(Ar=n.screenX-_t.screenX,Mr=n.screenY-_t.screenY):Mr=Ar=0,_t=n),Ar)},movementY:function(n){return"movementY"in n?n.movementY:Mr}}),il=bn(hr),yc=U({},hr,{dataTransfer:0}),kc=bn(yc),vc=U({},da,{relatedTarget:0}),Lr=bn(vc),wc=U({},kt,{animationName:0,elapsedTime:0,pseudoElement:0}),xc=bn(wc),Sc=U({},kt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nc=bn(Sc),Ic=U({},kt,{data:0}),ll=bn(Ic),bc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _c(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Pc[n])?!!e[n]:!1}function gi(){return _c}var jc=U({},da,{key:function(n){if(n.key){var e=bc[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Aa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Cc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gi,charCode:function(n){return n.type==="keypress"?Aa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Aa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ec=bn(jc),Tc=U({},hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sl=bn(Tc),Oc=U({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gi}),Hc=bn(Oc),zc=U({},kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ac=bn(zc),Mc=U({},hr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lc=bn(Mc),Dc=[9,13,27,32],fi=qn&&"CompositionEvent"in window,Dt=null;qn&&"documentMode"in document&&(Dt=document.documentMode);var Rc=qn&&"TextEvent"in window&&!Dt,Ys=qn&&(!fi||Dt&&8<Dt&&11>=Dt),ul=" ",dl=!1;function Qs(n,e){switch(n){case"keyup":return Dc.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ye=!1;function Bc(n,e){switch(n){case"compositionend":return Gs(e);case"keypress":return e.which!==32?null:(dl=!0,ul);case"textInput":return n=e.data,n===ul&&dl?null:n;default:return null}}function Fc(n,e){if(Ye)return n==="compositionend"||!fi&&Qs(n,e)?(n=$s(),za=di=de=null,Ye=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ys&&e.locale!=="ko"?null:e.data;default:return null}}var Wc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cl(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Wc[n.type]:e==="textarea"}function Xs(n,e,t,a){Ps(a),e=Xa(e,"onChange"),0<e.length&&(t=new ci("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var Rt=null,Jt=null;function Kc(n){lu(n,0)}function mr(n){var e=Xe(n);if(ws(e))return n}function Vc(n,e){if(n==="change")return e}var Js=!1;if(qn){var Dr;if(qn){var Rr="oninput"in document;if(!Rr){var gl=document.createElement("div");gl.setAttribute("oninput","return;"),Rr=typeof gl.oninput=="function"}Dr=Rr}else Dr=!1;Js=Dr&&(!document.documentMode||9<document.documentMode)}function fl(){Rt&&(Rt.detachEvent("onpropertychange",Zs),Jt=Rt=null)}function Zs(n){if(n.propertyName==="value"&&mr(Jt)){var e=[];Xs(e,Jt,n,oi(n)),Ts(Kc,e)}}function Uc(n,e,t){n==="focusin"?(fl(),Rt=e,Jt=t,Rt.attachEvent("onpropertychange",Zs)):n==="focusout"&&fl()}function $c(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mr(Jt)}function Yc(n,e){if(n==="click")return mr(e)}function Qc(n,e){if(n==="input"||n==="change")return mr(e)}function Gc(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Rn=typeof Object.is=="function"?Object.is:Gc;function Zt(n,e){if(Rn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!to.call(e,r)||!Rn(n[r],e[r]))return!1}return!0}function pl(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hl(n,e){var t=pl(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=pl(t)}}function qs(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?qs(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function nu(){for(var n=window,e=Ka();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ka(n.document)}return e}function pi(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Xc(n){var e=nu(),t=n.focusedElem,a=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&qs(t.ownerDocument.documentElement,t)){if(a!==null&&pi(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,o=Math.min(a.start,r);a=a.end===void 0?o:Math.min(a.end,r),!n.extend&&o>a&&(r=a,a=o,o=r),r=hl(t,o);var i=hl(t,a);r&&i&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==i.node||n.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),o>a?(n.addRange(e),n.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Jc=qn&&"documentMode"in document&&11>=document.documentMode,Qe=null,So=null,Bt=null,No=!1;function ml(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;No||Qe==null||Qe!==Ka(a)||(a=Qe,"selectionStart"in a&&pi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Bt&&Zt(Bt,a)||(Bt=a,a=Xa(So,"onSelect"),0<a.length&&(e=new ci("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=Qe)))}function Sa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ge={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Br={},eu={};qn&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete Ge.animationend.animation,delete Ge.animationiteration.animation,delete Ge.animationstart.animation),"TransitionEvent"in window||delete Ge.transitionend.transition);function yr(n){if(Br[n])return Br[n];if(!Ge[n])return n;var e=Ge[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in eu)return Br[n]=e[t];return n}var tu=yr("animationend"),au=yr("animationiteration"),ru=yr("animationstart"),ou=yr("transitionend"),iu=new Map,yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Se(n,e){iu.set(n,e),Be(e,[n])}for(var Fr=0;Fr<yl.length;Fr++){var Wr=yl[Fr],Zc=Wr.toLowerCase(),qc=Wr[0].toUpperCase()+Wr.slice(1);Se(Zc,"on"+qc)}Se(tu,"onAnimationEnd");Se(au,"onAnimationIteration");Se(ru,"onAnimationStart");Se("dblclick","onDoubleClick");Se("focusin","onFocus");Se("focusout","onBlur");Se(ou,"onTransitionEnd");ut("onMouseEnter",["mouseout","mouseover"]);ut("onMouseLeave",["mouseout","mouseover"]);ut("onPointerEnter",["pointerout","pointerover"]);ut("onPointerLeave",["pointerout","pointerover"]);Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Be("onBeforeInput",["compositionend","keypress","textInput","paste"]);Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function kl(n,e,t){var a=n.type||"unknown-event";n.currentTarget=t,Zd(a,e,void 0,n),n.currentTarget=null}function lu(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],r=a.event;a=a.listeners;n:{var o=void 0;if(e)for(var i=a.length-1;0<=i;i--){var l=a[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&r.isPropagationStopped())break n;kl(r,l,c),o=s}else for(i=0;i<a.length;i++){if(l=a[i],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&r.isPropagationStopped())break n;kl(r,l,c),o=s}}}if(Ua)throw n=ko,Ua=!1,ko=null,n}function D(n,e){var t=e[_o];t===void 0&&(t=e[_o]=new Set);var a=n+"__bubble";t.has(a)||(su(e,n,2,!1),t.add(a))}function Kr(n,e,t){var a=0;e&&(a|=4),su(t,n,a,e)}var Na="_reactListening"+Math.random().toString(36).slice(2);function qt(n){if(!n[Na]){n[Na]=!0,hs.forEach(function(t){t!=="selectionchange"&&(ng.has(t)||Kr(t,!1,n),Kr(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Na]||(e[Na]=!0,Kr("selectionchange",!1,e))}}function su(n,e,t,a){switch(Us(e)){case 1:var r=pc;break;case 4:r=hc;break;default:r=ui}t=r.bind(null,e,t,n),r=void 0,!yo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),a?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Vr(n,e,t,a,r){var o=a;if(!(e&1)&&!(e&2)&&a!==null)n:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(i===4)for(i=a.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;i=i.return}for(;l!==null;){if(i=Ee(l),i===null)return;if(s=i.tag,s===5||s===6){a=o=i;continue n}l=l.parentNode}}a=a.return}Ts(function(){var c=o,m=oi(t),h=[];n:{var p=iu.get(n);if(p!==void 0){var v=ci,w=n;switch(n){case"keypress":if(Aa(t)===0)break n;case"keydown":case"keyup":v=Ec;break;case"focusin":w="focus",v=Lr;break;case"focusout":w="blur",v=Lr;break;case"beforeblur":case"afterblur":v=Lr;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Hc;break;case tu:case au:case ru:v=xc;break;case ou:v=Ac;break;case"scroll":v=mc;break;case"wheel":v=Lc;break;case"copy":case"cut":case"paste":v=Nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sl}var x=(e&4)!==0,z=!x&&n==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var u=c,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,g!==null&&(y=Yt(u,g),y!=null&&x.push(na(u,y,f)))),z)break;u=u.return}0<x.length&&(p=new v(p,w,null,t,m),h.push({event:p,listeners:x}))}}if(!(e&7)){n:{if(p=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",p&&t!==ho&&(w=t.relatedTarget||t.fromElement)&&(Ee(w)||w[ne]))break n;if((v||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=t.relatedTarget||t.toElement,v=c,w=w?Ee(w):null,w!==null&&(z=Fe(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(x=il,y="onMouseLeave",g="onMouseEnter",u="mouse",(n==="pointerout"||n==="pointerover")&&(x=sl,y="onPointerLeave",g="onPointerEnter",u="pointer"),z=v==null?p:Xe(v),f=w==null?p:Xe(w),p=new x(y,u+"leave",v,t,m),p.target=z,p.relatedTarget=f,y=null,Ee(m)===c&&(x=new x(g,u+"enter",w,t,m),x.target=f,x.relatedTarget=z,y=x),z=y,v&&w)e:{for(x=v,g=w,u=0,f=x;f;f=Ve(f))u++;for(f=0,y=g;y;y=Ve(y))f++;for(;0<u-f;)x=Ve(x),u--;for(;0<f-u;)g=Ve(g),f--;for(;u--;){if(x===g||g!==null&&x===g.alternate)break e;x=Ve(x),g=Ve(g)}x=null}else x=null;v!==null&&vl(h,p,v,x,!1),w!==null&&z!==null&&vl(h,z,w,x,!0)}}n:{if(p=c?Xe(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=Vc;else if(cl(p))if(Js)S=Qc;else{S=$c;var C=Uc}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Yc);if(S&&(S=S(n,c))){Xs(h,S,t,m);break n}C&&C(n,p,c),n==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&uo(p,"number",p.value)}switch(C=c?Xe(c):window,n){case"focusin":(cl(C)||C.contentEditable==="true")&&(Qe=C,So=c,Bt=null);break;case"focusout":Bt=So=Qe=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,ml(h,t,m);break;case"selectionchange":if(Jc)break;case"keydown":case"keyup":ml(h,t,m)}var b;if(fi)n:{switch(n){case"compositionstart":var P="onCompositionStart";break n;case"compositionend":P="onCompositionEnd";break n;case"compositionupdate":P="onCompositionUpdate";break n}P=void 0}else Ye?Qs(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Ys&&t.locale!=="ko"&&(Ye||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ye&&(b=$s()):(de=m,di="value"in de?de.value:de.textContent,Ye=!0)),C=Xa(c,P),0<C.length&&(P=new ll(P,n,null,t,m),h.push({event:P,listeners:C}),b?P.data=b:(b=Gs(t),b!==null&&(P.data=b)))),(b=Rc?Bc(n,t):Fc(n,t))&&(c=Xa(c,"onBeforeInput"),0<c.length&&(m=new ll("onBeforeInput","beforeinput",null,t,m),h.push({event:m,listeners:c}),m.data=b))}lu(h,e)})}function na(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Xa(n,e){for(var t=e+"Capture",a=[];n!==null;){var r=n,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Yt(n,t),o!=null&&a.unshift(na(n,o,r)),o=Yt(n,e),o!=null&&a.push(na(n,o,r))),n=n.return}return a}function Ve(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vl(n,e,t,a,r){for(var o=e._reactName,i=[];t!==null&&t!==a;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===a)break;l.tag===5&&c!==null&&(l=c,r?(s=Yt(t,o),s!=null&&i.unshift(na(t,s,l))):r||(s=Yt(t,o),s!=null&&i.push(na(t,s,l)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var eg=/\r\n?/g,tg=/\u0000|\uFFFD/g;function wl(n){return(typeof n=="string"?n:""+n).replace(eg,`
`).replace(tg,"")}function Ia(n,e,t){if(e=wl(e),wl(n)!==e&&t)throw Error(k(425))}function Ja(){}var Io=null,bo=null;function Co(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Po=typeof setTimeout=="function"?setTimeout:void 0,ag=typeof clearTimeout=="function"?clearTimeout:void 0,xl=typeof Promise=="function"?Promise:void 0,rg=typeof queueMicrotask=="function"?queueMicrotask:typeof xl<"u"?function(n){return xl.resolve(null).then(n).catch(og)}:Po;function og(n){setTimeout(function(){throw n})}function Ur(n,e){var t=e,a=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){n.removeChild(r),Xt(e);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);Xt(e)}function he(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Sl(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var vt=Math.random().toString(36).slice(2),Wn="__reactFiber$"+vt,ea="__reactProps$"+vt,ne="__reactContainer$"+vt,_o="__reactEvents$"+vt,ig="__reactListeners$"+vt,lg="__reactHandles$"+vt;function Ee(n){var e=n[Wn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ne]||t[Wn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Sl(n);n!==null;){if(t=n[Wn])return t;n=Sl(n)}return e}n=t,t=n.parentNode}return null}function ca(n){return n=n[Wn]||n[ne],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xe(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(k(33))}function kr(n){return n[ea]||null}var jo=[],Je=-1;function Ne(n){return{current:n}}function R(n){0>Je||(n.current=jo[Je],jo[Je]=null,Je--)}function L(n,e){Je++,jo[Je]=n.current,n.current=e}var xe={},sn=Ne(xe),hn=Ne(!1),Ae=xe;function dt(n,e){var t=n.type.contextTypes;if(!t)return xe;var a=n.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===e)return a.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=e[o];return a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function Za(){R(hn),R(sn)}function Nl(n,e,t){if(sn.current!==xe)throw Error(k(168));L(sn,e),L(hn,t)}function uu(n,e,t){var a=n.stateNode;if(e=e.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in e))throw Error(k(108,Ud(n)||"Unknown",r));return U({},t,a)}function qa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xe,Ae=sn.current,L(sn,n),L(hn,hn.current),!0}function Il(n,e,t){var a=n.stateNode;if(!a)throw Error(k(169));t?(n=uu(n,e,Ae),a.__reactInternalMemoizedMergedChildContext=n,R(hn),R(sn),L(sn,n)):R(hn),L(hn,t)}var Gn=null,vr=!1,$r=!1;function du(n){Gn===null?Gn=[n]:Gn.push(n)}function sg(n){vr=!0,du(n)}function Ie(){if(!$r&&Gn!==null){$r=!0;var n=0,e=M;try{var t=Gn;for(M=1;n<t.length;n++){var a=t[n];do a=a(!0);while(a!==null)}Gn=null,vr=!1}catch(r){throw Gn!==null&&(Gn=Gn.slice(n+1)),As(ii,Ie),r}finally{M=e,$r=!1}}return null}var Ze=[],qe=0,nr=null,er=0,Cn=[],Pn=0,Me=null,Xn=1,Jn="";function _e(n,e){Ze[qe++]=er,Ze[qe++]=nr,nr=n,er=e}function cu(n,e,t){Cn[Pn++]=Xn,Cn[Pn++]=Jn,Cn[Pn++]=Me,Me=n;var a=Xn;n=Jn;var r=32-Ln(a)-1;a&=~(1<<r),t+=1;var o=32-Ln(e)+r;if(30<o){var i=r-r%5;o=(a&(1<<i)-1).toString(32),a>>=i,r-=i,Xn=1<<32-Ln(e)+r|t<<r|a,Jn=o+n}else Xn=1<<o|t<<r|a,Jn=n}function hi(n){n.return!==null&&(_e(n,1),cu(n,1,0))}function mi(n){for(;n===nr;)nr=Ze[--qe],Ze[qe]=null,er=Ze[--qe],Ze[qe]=null;for(;n===Me;)Me=Cn[--Pn],Cn[Pn]=null,Jn=Cn[--Pn],Cn[Pn]=null,Xn=Cn[--Pn],Cn[Pn]=null}var Sn=null,xn=null,F=!1,Mn=null;function gu(n,e){var t=_n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function bl(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Sn=n,xn=he(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Sn=n,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Me!==null?{id:Xn,overflow:Jn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=_n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Sn=n,xn=null,!0):!1;default:return!1}}function Eo(n){return(n.mode&1)!==0&&(n.flags&128)===0}function To(n){if(F){var e=xn;if(e){var t=e;if(!bl(n,e)){if(Eo(n))throw Error(k(418));e=he(t.nextSibling);var a=Sn;e&&bl(n,e)?gu(a,t):(n.flags=n.flags&-4097|2,F=!1,Sn=n)}}else{if(Eo(n))throw Error(k(418));n.flags=n.flags&-4097|2,F=!1,Sn=n}}}function Cl(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Sn=n}function ba(n){if(n!==Sn)return!1;if(!F)return Cl(n),F=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Co(n.type,n.memoizedProps)),e&&(e=xn)){if(Eo(n))throw fu(),Error(k(418));for(;e;)gu(n,e),e=he(e.nextSibling)}if(Cl(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(k(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){xn=he(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}xn=null}}else xn=Sn?he(n.stateNode.nextSibling):null;return!0}function fu(){for(var n=xn;n;)n=he(n.nextSibling)}function ct(){xn=Sn=null,F=!1}function yi(n){Mn===null?Mn=[n]:Mn.push(n)}var ug=ae.ReactCurrentBatchConfig;function jt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var a=t.stateNode}if(!a)throw Error(k(147,n));var r=a,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(i){var l=r.refs;i===null?delete l[o]:l[o]=i},e._stringRef=o,e)}if(typeof n!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,n))}return n}function Ca(n,e){throw n=Object.prototype.toString.call(e),Error(k(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Pl(n){var e=n._init;return e(n._payload)}function pu(n){function e(g,u){if(n){var f=g.deletions;f===null?(g.deletions=[u],g.flags|=16):f.push(u)}}function t(g,u){if(!n)return null;for(;u!==null;)e(g,u),u=u.sibling;return null}function a(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function r(g,u){return g=ve(g,u),g.index=0,g.sibling=null,g}function o(g,u,f){return g.index=f,n?(f=g.alternate,f!==null?(f=f.index,f<u?(g.flags|=2,u):f):(g.flags|=2,u)):(g.flags|=1048576,u)}function i(g){return n&&g.alternate===null&&(g.flags|=2),g}function l(g,u,f,y){return u===null||u.tag!==6?(u=qr(f,g.mode,y),u.return=g,u):(u=r(u,f),u.return=g,u)}function s(g,u,f,y){var S=f.type;return S===$e?m(g,u,f.props.children,y,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ie&&Pl(S)===u.type)?(y=r(u,f.props),y.ref=jt(g,u,f),y.return=g,y):(y=Wa(f.type,f.key,f.props,null,g.mode,y),y.ref=jt(g,u,f),y.return=g,y)}function c(g,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=no(f,g.mode,y),u.return=g,u):(u=r(u,f.children||[]),u.return=g,u)}function m(g,u,f,y,S){return u===null||u.tag!==7?(u=ze(f,g.mode,y,S),u.return=g,u):(u=r(u,f),u.return=g,u)}function h(g,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=qr(""+u,g.mode,f),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ha:return f=Wa(u.type,u.key,u.props,null,g.mode,f),f.ref=jt(g,null,u),f.return=g,f;case Ue:return u=no(u,g.mode,f),u.return=g,u;case ie:var y=u._init;return h(g,y(u._payload),f)}if(Ht(u)||It(u))return u=ze(u,g.mode,f,null),u.return=g,u;Ca(g,u)}return null}function p(g,u,f,y){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(g,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ha:return f.key===S?s(g,u,f,y):null;case Ue:return f.key===S?c(g,u,f,y):null;case ie:return S=f._init,p(g,u,S(f._payload),y)}if(Ht(f)||It(f))return S!==null?null:m(g,u,f,y,null);Ca(g,f)}return null}function v(g,u,f,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(f)||null,l(u,g,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:return g=g.get(y.key===null?f:y.key)||null,s(u,g,y,S);case Ue:return g=g.get(y.key===null?f:y.key)||null,c(u,g,y,S);case ie:var C=y._init;return v(g,u,f,C(y._payload),S)}if(Ht(y)||It(y))return g=g.get(f)||null,m(u,g,y,S,null);Ca(u,y)}return null}function w(g,u,f,y){for(var S=null,C=null,b=u,P=u=0,B=null;b!==null&&P<f.length;P++){b.index>P?(B=b,b=null):B=b.sibling;var _=p(g,b,f[P],y);if(_===null){b===null&&(b=B);break}n&&b&&_.alternate===null&&e(g,b),u=o(_,u,P),C===null?S=_:C.sibling=_,C=_,b=B}if(P===f.length)return t(g,b),F&&_e(g,P),S;if(b===null){for(;P<f.length;P++)b=h(g,f[P],y),b!==null&&(u=o(b,u,P),C===null?S=b:C.sibling=b,C=b);return F&&_e(g,P),S}for(b=a(g,b);P<f.length;P++)B=v(b,g,P,f[P],y),B!==null&&(n&&B.alternate!==null&&b.delete(B.key===null?P:B.key),u=o(B,u,P),C===null?S=B:C.sibling=B,C=B);return n&&b.forEach(function(kn){return e(g,kn)}),F&&_e(g,P),S}function x(g,u,f,y){var S=It(f);if(typeof S!="function")throw Error(k(150));if(f=S.call(f),f==null)throw Error(k(151));for(var C=S=null,b=u,P=u=0,B=null,_=f.next();b!==null&&!_.done;P++,_=f.next()){b.index>P?(B=b,b=null):B=b.sibling;var kn=p(g,b,_.value,y);if(kn===null){b===null&&(b=B);break}n&&b&&kn.alternate===null&&e(g,b),u=o(kn,u,P),C===null?S=kn:C.sibling=kn,C=kn,b=B}if(_.done)return t(g,b),F&&_e(g,P),S;if(b===null){for(;!_.done;P++,_=f.next())_=h(g,_.value,y),_!==null&&(u=o(_,u,P),C===null?S=_:C.sibling=_,C=_);return F&&_e(g,P),S}for(b=a(g,b);!_.done;P++,_=f.next())_=v(b,g,P,_.value,y),_!==null&&(n&&_.alternate!==null&&b.delete(_.key===null?P:_.key),u=o(_,u,P),C===null?S=_:C.sibling=_,C=_);return n&&b.forEach(function(Un){return e(g,Un)}),F&&_e(g,P),S}function z(g,u,f,y){if(typeof f=="object"&&f!==null&&f.type===$e&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ha:n:{for(var S=f.key,C=u;C!==null;){if(C.key===S){if(S=f.type,S===$e){if(C.tag===7){t(g,C.sibling),u=r(C,f.props.children),u.return=g,g=u;break n}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ie&&Pl(S)===C.type){t(g,C.sibling),u=r(C,f.props),u.ref=jt(g,C,f),u.return=g,g=u;break n}t(g,C);break}else e(g,C);C=C.sibling}f.type===$e?(u=ze(f.props.children,g.mode,y,f.key),u.return=g,g=u):(y=Wa(f.type,f.key,f.props,null,g.mode,y),y.ref=jt(g,u,f),y.return=g,g=y)}return i(g);case Ue:n:{for(C=f.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(g,u.sibling),u=r(u,f.children||[]),u.return=g,g=u;break n}else{t(g,u);break}else e(g,u);u=u.sibling}u=no(f,g.mode,y),u.return=g,g=u}return i(g);case ie:return C=f._init,z(g,u,C(f._payload),y)}if(Ht(f))return w(g,u,f,y);if(It(f))return x(g,u,f,y);Ca(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(g,u.sibling),u=r(u,f),u.return=g,g=u):(t(g,u),u=qr(f,g.mode,y),u.return=g,g=u),i(g)):t(g,u)}return z}var gt=pu(!0),hu=pu(!1),tr=Ne(null),ar=null,nt=null,ki=null;function vi(){ki=nt=ar=null}function wi(n){var e=tr.current;R(tr),n._currentValue=e}function Oo(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function lt(n,e){ar=n,ki=nt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(pn=!0),n.firstContext=null)}function En(n){var e=n._currentValue;if(ki!==n)if(n={context:n,memoizedValue:e,next:null},nt===null){if(ar===null)throw Error(k(308));nt=n,ar.dependencies={lanes:0,firstContext:n}}else nt=nt.next=n;return e}var Te=null;function xi(n){Te===null?Te=[n]:Te.push(n)}function mu(n,e,t,a){var r=e.interleaved;return r===null?(t.next=t,xi(e)):(t.next=r.next,r.next=t),e.interleaved=t,ee(n,a)}function ee(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var le=!1;function Si(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function me(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,H&2){var r=a.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),a.pending=e,ee(n,t)}return r=a.interleaved,r===null?(e.next=e,xi(a)):(e.next=r.next,r.next=e),a.interleaved=e,ee(n,t)}function Ma(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,li(n,t)}}function _l(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?r=o=e:o=o.next=e}else r=o=e;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,effects:a.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function rr(n,e,t,a){var r=n.updateQueue;le=!1;var o=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var s=l,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var m=n.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=s))}if(o!==null){var h=r.baseState;i=0,m=c=s=null,l=o;do{var p=l.lane,v=l.eventTime;if((a&p)===p){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var w=n,x=l;switch(p=e,v=t,x.tag){case 1:if(w=x.payload,typeof w=="function"){h=w.call(v,h,p);break n}h=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(v,h,p):w,p==null)break n;h=U({},h,p);break n;case 2:le=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,p=r.effects,p===null?r.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=v,s=h):m=m.next=v,i|=p;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;p=l,l=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(m===null&&(s=h),r.baseState=s,r.firstBaseUpdate=c,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do i|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);De|=i,n.lanes=i,n.memoizedState=h}}function jl(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var a=n[e],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(k(191,r));r.call(a)}}}var ga={},Vn=Ne(ga),ta=Ne(ga),aa=Ne(ga);function Oe(n){if(n===ga)throw Error(k(174));return n}function Ni(n,e){switch(L(aa,e),L(ta,n),L(Vn,ga),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:go(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=go(e,n)}R(Vn),L(Vn,e)}function ft(){R(Vn),R(ta),R(aa)}function ku(n){Oe(aa.current);var e=Oe(Vn.current),t=go(e,n.type);e!==t&&(L(ta,n),L(Vn,t))}function Ii(n){ta.current===n&&(R(Vn),R(ta))}var K=Ne(0);function or(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yr=[];function bi(){for(var n=0;n<Yr.length;n++)Yr[n]._workInProgressVersionPrimary=null;Yr.length=0}var La=ae.ReactCurrentDispatcher,Qr=ae.ReactCurrentBatchConfig,Le=0,V=null,J=null,q=null,ir=!1,Ft=!1,ra=0,dg=0;function rn(){throw Error(k(321))}function Ci(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Rn(n[t],e[t]))return!1;return!0}function Pi(n,e,t,a,r,o){if(Le=o,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=n===null||n.memoizedState===null?pg:hg,n=t(a,r),Ft){o=0;do{if(Ft=!1,ra=0,25<=o)throw Error(k(301));o+=1,q=J=null,e.updateQueue=null,La.current=mg,n=t(a,r)}while(Ft)}if(La.current=lr,e=J!==null&&J.next!==null,Le=0,q=J=V=null,ir=!1,e)throw Error(k(300));return n}function _i(){var n=ra!==0;return ra=0,n}function Fn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=n:q=q.next=n,q}function Tn(){if(J===null){var n=V.alternate;n=n!==null?n.memoizedState:null}else n=J.next;var e=q===null?V.memoizedState:q.next;if(e!==null)q=e,J=n;else{if(n===null)throw Error(k(310));J=n,n={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},q===null?V.memoizedState=q=n:q=q.next=n}return q}function oa(n,e){return typeof e=="function"?e(n):e}function Gr(n){var e=Tn(),t=e.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=n;var a=J,r=a.baseQueue,o=t.pending;if(o!==null){if(r!==null){var i=r.next;r.next=o.next,o.next=i}a.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,a=a.baseState;var l=i=null,s=null,c=o;do{var m=c.lane;if((Le&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:n(a,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=h,i=a):s=s.next=h,V.lanes|=m,De|=m}c=c.next}while(c!==null&&c!==o);s===null?i=a:s.next=l,Rn(a,e.memoizedState)||(pn=!0),e.memoizedState=a,e.baseState=i,e.baseQueue=s,t.lastRenderedState=a}if(n=t.interleaved,n!==null){r=n;do o=r.lane,V.lanes|=o,De|=o,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Xr(n){var e=Tn(),t=e.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=n;var a=t.dispatch,r=t.pending,o=e.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do o=n(o,i.action),i=i.next;while(i!==r);Rn(o,e.memoizedState)||(pn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,a]}function vu(){}function wu(n,e){var t=V,a=Tn(),r=e(),o=!Rn(a.memoizedState,r);if(o&&(a.memoizedState=r,pn=!0),a=a.queue,ji(Nu.bind(null,t,a,n),[n]),a.getSnapshot!==e||o||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,ia(9,Su.bind(null,t,a,r,e),void 0,null),nn===null)throw Error(k(349));Le&30||xu(t,e,r)}return r}function xu(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Su(n,e,t,a){e.value=t,e.getSnapshot=a,Iu(e)&&bu(n)}function Nu(n,e,t){return t(function(){Iu(e)&&bu(n)})}function Iu(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Rn(n,t)}catch{return!0}}function bu(n){var e=ee(n,1);e!==null&&Dn(e,n,1,-1)}function El(n){var e=Fn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:n},e.queue=n,n=n.dispatch=fg.bind(null,V,n),[e.memoizedState,n]}function ia(n,e,t,a){return n={tag:n,create:e,destroy:t,deps:a,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n)),n}function Cu(){return Tn().memoizedState}function Da(n,e,t,a){var r=Fn();V.flags|=n,r.memoizedState=ia(1|e,t,void 0,a===void 0?null:a)}function wr(n,e,t,a){var r=Tn();a=a===void 0?null:a;var o=void 0;if(J!==null){var i=J.memoizedState;if(o=i.destroy,a!==null&&Ci(a,i.deps)){r.memoizedState=ia(e,t,o,a);return}}V.flags|=n,r.memoizedState=ia(1|e,t,o,a)}function Tl(n,e){return Da(8390656,8,n,e)}function ji(n,e){return wr(2048,8,n,e)}function Pu(n,e){return wr(4,2,n,e)}function _u(n,e){return wr(4,4,n,e)}function ju(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Eu(n,e,t){return t=t!=null?t.concat([n]):null,wr(4,4,ju.bind(null,e,n),t)}function Ei(){}function Tu(n,e){var t=Tn();e=e===void 0?null:e;var a=t.memoizedState;return a!==null&&e!==null&&Ci(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function Ou(n,e){var t=Tn();e=e===void 0?null:e;var a=t.memoizedState;return a!==null&&e!==null&&Ci(e,a[1])?a[0]:(n=n(),t.memoizedState=[n,e],n)}function Hu(n,e,t){return Le&21?(Rn(t,e)||(t=Ds(),V.lanes|=t,De|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,pn=!0),n.memoizedState=t)}function cg(n,e){var t=M;M=t!==0&&4>t?t:4,n(!0);var a=Qr.transition;Qr.transition={};try{n(!1),e()}finally{M=t,Qr.transition=a}}function zu(){return Tn().memoizedState}function gg(n,e,t){var a=ke(n);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Au(n))Mu(e,t);else if(t=mu(n,e,t,a),t!==null){var r=dn();Dn(t,n,a,r),Lu(t,e,a)}}function fg(n,e,t){var a=ke(n),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Au(n))Mu(e,r);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var i=e.lastRenderedState,l=o(i,t);if(r.hasEagerState=!0,r.eagerState=l,Rn(l,i)){var s=e.interleaved;s===null?(r.next=r,xi(e)):(r.next=s.next,s.next=r),e.interleaved=r;return}}catch{}finally{}t=mu(n,e,r,a),t!==null&&(r=dn(),Dn(t,n,a,r),Lu(t,e,a))}}function Au(n){var e=n.alternate;return n===V||e!==null&&e===V}function Mu(n,e){Ft=ir=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Lu(n,e,t){if(t&4194240){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,li(n,t)}}var lr={readContext:En,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},pg={readContext:En,useCallback:function(n,e){return Fn().memoizedState=[n,e===void 0?null:e],n},useContext:En,useEffect:Tl,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Da(4194308,4,ju.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Da(4194308,4,n,e)},useInsertionEffect:function(n,e){return Da(4,2,n,e)},useMemo:function(n,e){var t=Fn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var a=Fn();return e=t!==void 0?t(e):e,a.memoizedState=a.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},a.queue=n,n=n.dispatch=gg.bind(null,V,n),[a.memoizedState,n]},useRef:function(n){var e=Fn();return n={current:n},e.memoizedState=n},useState:El,useDebugValue:Ei,useDeferredValue:function(n){return Fn().memoizedState=n},useTransition:function(){var n=El(!1),e=n[0];return n=cg.bind(null,n[1]),Fn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var a=V,r=Fn();if(F){if(t===void 0)throw Error(k(407));t=t()}else{if(t=e(),nn===null)throw Error(k(349));Le&30||xu(a,e,t)}r.memoizedState=t;var o={value:t,getSnapshot:e};return r.queue=o,Tl(Nu.bind(null,a,o,n),[n]),a.flags|=2048,ia(9,Su.bind(null,a,o,t,e),void 0,null),t},useId:function(){var n=Fn(),e=nn.identifierPrefix;if(F){var t=Jn,a=Xn;t=(a&~(1<<32-Ln(a)-1)).toString(32)+t,e=":"+e+"R"+t,t=ra++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=dg++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},hg={readContext:En,useCallback:Tu,useContext:En,useEffect:ji,useImperativeHandle:Eu,useInsertionEffect:Pu,useLayoutEffect:_u,useMemo:Ou,useReducer:Gr,useRef:Cu,useState:function(){return Gr(oa)},useDebugValue:Ei,useDeferredValue:function(n){var e=Tn();return Hu(e,J.memoizedState,n)},useTransition:function(){var n=Gr(oa)[0],e=Tn().memoizedState;return[n,e]},useMutableSource:vu,useSyncExternalStore:wu,useId:zu,unstable_isNewReconciler:!1},mg={readContext:En,useCallback:Tu,useContext:En,useEffect:ji,useImperativeHandle:Eu,useInsertionEffect:Pu,useLayoutEffect:_u,useMemo:Ou,useReducer:Xr,useRef:Cu,useState:function(){return Xr(oa)},useDebugValue:Ei,useDeferredValue:function(n){var e=Tn();return J===null?e.memoizedState=n:Hu(e,J.memoizedState,n)},useTransition:function(){var n=Xr(oa)[0],e=Tn().memoizedState;return[n,e]},useMutableSource:vu,useSyncExternalStore:wu,useId:zu,unstable_isNewReconciler:!1};function zn(n,e){if(n&&n.defaultProps){e=U({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ho(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:U({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var xr={isMounted:function(n){return(n=n._reactInternals)?Fe(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var a=dn(),r=ke(n),o=Zn(a,r);o.payload=e,t!=null&&(o.callback=t),e=me(n,o,r),e!==null&&(Dn(e,n,r,a),Ma(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=dn(),r=ke(n),o=Zn(a,r);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=me(n,o,r),e!==null&&(Dn(e,n,r,a),Ma(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=dn(),a=ke(n),r=Zn(t,a);r.tag=2,e!=null&&(r.callback=e),e=me(n,r,a),e!==null&&(Dn(e,n,a,t),Ma(e,n,a))}};function Ol(n,e,t,a,r,o,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,o,i):e.prototype&&e.prototype.isPureReactComponent?!Zt(t,a)||!Zt(r,o):!0}function Du(n,e,t){var a=!1,r=xe,o=e.contextType;return typeof o=="object"&&o!==null?o=En(o):(r=mn(e)?Ae:sn.current,a=e.contextTypes,o=(a=a!=null)?dt(n,r):xe),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xr,n.stateNode=e,e._reactInternals=n,a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=o),e}function Hl(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&xr.enqueueReplaceState(e,e.state,null)}function zo(n,e,t,a){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Si(n);var o=e.contextType;typeof o=="object"&&o!==null?r.context=En(o):(o=mn(e)?Ae:sn.current,r.context=dt(n,o)),r.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ho(n,e,o,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xr.enqueueReplaceState(r,r.state,null),rr(n,t,r,a),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function pt(n,e){try{var t="",a=e;do t+=Vd(a),a=a.return;while(a);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:r,digest:null}}function Jr(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ao(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var yg=typeof WeakMap=="function"?WeakMap:Map;function Ru(n,e,t){t=Zn(-1,t),t.tag=3,t.payload={element:null};var a=e.value;return t.callback=function(){ur||(ur=!0,Uo=a),Ao(n,e)},t}function Bu(n,e,t){t=Zn(-1,t),t.tag=3;var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=e.value;t.payload=function(){return a(r)},t.callback=function(){Ao(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ao(n,e),typeof a!="function"&&(ye===null?ye=new Set([this]):ye.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),t}function zl(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new yg;var r=new Set;a.set(e,r)}else r=a.get(e),r===void 0&&(r=new Set,a.set(e,r));r.has(t)||(r.add(t),n=Tg.bind(null,n,e,t),e.then(n,n))}function Al(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Ml(n,e,t,a,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Zn(-1,1),e.tag=2,me(t,e,1))),t.lanes|=1),n)}var kg=ae.ReactCurrentOwner,pn=!1;function un(n,e,t,a){e.child=n===null?hu(e,null,t,a):gt(e,n.child,t,a)}function Ll(n,e,t,a,r){t=t.render;var o=e.ref;return lt(e,r),a=Pi(n,e,t,a,o,r),t=_i(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,te(n,e,r)):(F&&t&&hi(e),e.flags|=1,un(n,e,a,r),e.child)}function Dl(n,e,t,a,r){if(n===null){var o=t.type;return typeof o=="function"&&!Di(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,Fu(n,e,o,a,r)):(n=Wa(t.type,null,a,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,!(n.lanes&r)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(i,a)&&n.ref===e.ref)return te(n,e,r)}return e.flags|=1,n=ve(o,a),n.ref=e.ref,n.return=e,e.child=n}function Fu(n,e,t,a,r){if(n!==null){var o=n.memoizedProps;if(Zt(o,a)&&n.ref===e.ref)if(pn=!1,e.pendingProps=a=o,(n.lanes&r)!==0)n.flags&131072&&(pn=!0);else return e.lanes=n.lanes,te(n,e,r)}return Mo(n,e,t,a,r)}function Wu(n,e,t){var a=e.pendingProps,r=a.children,o=n!==null?n.memoizedState:null;if(a.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(tt,wn),wn|=t;else{if(!(t&1073741824))return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,L(tt,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:t,L(tt,wn),wn|=a}else o!==null?(a=o.baseLanes|t,e.memoizedState=null):a=t,L(tt,wn),wn|=a;return un(n,e,r,t),e.child}function Ku(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Mo(n,e,t,a,r){var o=mn(t)?Ae:sn.current;return o=dt(e,o),lt(e,r),t=Pi(n,e,t,a,o,r),a=_i(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,te(n,e,r)):(F&&a&&hi(e),e.flags|=1,un(n,e,t,r),e.child)}function Rl(n,e,t,a,r){if(mn(t)){var o=!0;qa(e)}else o=!1;if(lt(e,r),e.stateNode===null)Ra(n,e),Du(e,t,a),zo(e,t,a,r),a=!0;else if(n===null){var i=e.stateNode,l=e.memoizedProps;i.props=l;var s=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=En(c):(c=mn(t)?Ae:sn.current,c=dt(e,c));var m=t.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==a||s!==c)&&Hl(e,i,a,c),le=!1;var p=e.memoizedState;i.state=p,rr(e,a,i,r),s=e.memoizedState,l!==a||p!==s||hn.current||le?(typeof m=="function"&&(Ho(e,t,m,a),s=e.memoizedState),(l=le||Ol(e,t,l,a,p,s,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=s),i.props=a,i.state=s,i.context=c,a=l):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,yu(n,e),l=e.memoizedProps,c=e.type===e.elementType?l:zn(e.type,l),i.props=c,h=e.pendingProps,p=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=En(s):(s=mn(t)?Ae:sn.current,s=dt(e,s));var v=t.getDerivedStateFromProps;(m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==h||p!==s)&&Hl(e,i,a,s),le=!1,p=e.memoizedState,i.state=p,rr(e,a,i,r);var w=e.memoizedState;l!==h||p!==w||hn.current||le?(typeof v=="function"&&(Ho(e,t,v,a),w=e.memoizedState),(c=le||Ol(e,t,c,a,p,w,s)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,w,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=w),i.props=a,i.state=w,i.context=s,a=c):(typeof i.componentDidUpdate!="function"||l===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),a=!1)}return Lo(n,e,t,a,o,r)}function Lo(n,e,t,a,r,o){Ku(n,e);var i=(e.flags&128)!==0;if(!a&&!i)return r&&Il(e,t,!1),te(n,e,o);a=e.stateNode,kg.current=e;var l=i&&typeof t.getDerivedStateFromError!="function"?null:a.render();return e.flags|=1,n!==null&&i?(e.child=gt(e,n.child,null,o),e.child=gt(e,null,l,o)):un(n,e,l,o),e.memoizedState=a.state,r&&Il(e,t,!0),e.child}function Vu(n){var e=n.stateNode;e.pendingContext?Nl(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Nl(n,e.context,!1),Ni(n,e.containerInfo)}function Bl(n,e,t,a,r){return ct(),yi(r),e.flags|=256,un(n,e,t,a),e.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Ro(n){return{baseLanes:n,cachePool:null,transitions:null}}function Uu(n,e,t){var a=e.pendingProps,r=K.current,o=!1,i=(e.flags&128)!==0,l;if((l=i)||(l=n!==null&&n.memoizedState===null?!1:(r&2)!==0),l?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),L(K,r&1),n===null)return To(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=a.children,n=a.fallback,o?(a=e.mode,o=e.child,i={mode:"hidden",children:i},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ir(i,a,0,null),n=ze(n,a,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=Ro(t),e.memoizedState=Do,n):Ti(e,i));if(r=n.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return vg(n,e,i,a,l,r,t);if(o){o=a.fallback,i=e.mode,r=n.child,l=r.sibling;var s={mode:"hidden",children:a.children};return!(i&1)&&e.child!==r?(a=e.child,a.childLanes=0,a.pendingProps=s,e.deletions=null):(a=ve(r,s),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?o=ve(l,o):(o=ze(o,i,t,null),o.flags|=2),o.return=e,a.return=e,a.sibling=o,e.child=a,a=o,o=e.child,i=n.child.memoizedState,i=i===null?Ro(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=n.childLanes&~t,e.memoizedState=Do,a}return o=n.child,n=o.sibling,a=ve(o,{mode:"visible",children:a.children}),!(e.mode&1)&&(a.lanes=t),a.return=e,a.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=a,e.memoizedState=null,a}function Ti(n,e){return e=Ir({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Pa(n,e,t,a){return a!==null&&yi(a),gt(e,n.child,null,t),n=Ti(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function vg(n,e,t,a,r,o,i){if(t)return e.flags&256?(e.flags&=-257,a=Jr(Error(k(422))),Pa(n,e,i,a)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=a.fallback,r=e.mode,a=Ir({mode:"visible",children:a.children},r,0,null),o=ze(o,r,i,null),o.flags|=2,a.return=e,o.return=e,a.sibling=o,e.child=a,e.mode&1&&gt(e,n.child,null,i),e.child.memoizedState=Ro(i),e.memoizedState=Do,o);if(!(e.mode&1))return Pa(n,e,i,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,o=Error(k(419)),a=Jr(o,a,void 0),Pa(n,e,i,a)}if(l=(i&n.childLanes)!==0,pn||l){if(a=nn,a!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|i)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ee(n,r),Dn(a,n,r,-1))}return Li(),a=Jr(Error(k(421))),Pa(n,e,i,a)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Og.bind(null,n),r._reactRetry=e,null):(n=o.treeContext,xn=he(r.nextSibling),Sn=e,F=!0,Mn=null,n!==null&&(Cn[Pn++]=Xn,Cn[Pn++]=Jn,Cn[Pn++]=Me,Xn=n.id,Jn=n.overflow,Me=e),e=Ti(e,a.children),e.flags|=4096,e)}function Fl(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Oo(n.return,e,t)}function Zr(n,e,t,a,r){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=r)}function $u(n,e,t){var a=e.pendingProps,r=a.revealOrder,o=a.tail;if(un(n,e,a.children,t),a=K.current,a&2)a=a&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fl(n,t,e);else if(n.tag===19)Fl(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}if(L(K,a),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&or(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Zr(e,!1,r,t,o);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&or(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Zr(e,!0,t,null,o);break;case"together":Zr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function te(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),De|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(k(153));if(e.child!==null){for(n=e.child,t=ve(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ve(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function wg(n,e,t){switch(e.tag){case 3:Vu(e),ct();break;case 5:ku(e);break;case 1:mn(e.type)&&qa(e);break;case 4:Ni(e,e.stateNode.containerInfo);break;case 10:var a=e.type._context,r=e.memoizedProps.value;L(tr,a._currentValue),a._currentValue=r;break;case 13:if(a=e.memoizedState,a!==null)return a.dehydrated!==null?(L(K,K.current&1),e.flags|=128,null):t&e.child.childLanes?Uu(n,e,t):(L(K,K.current&1),n=te(n,e,t),n!==null?n.sibling:null);L(K,K.current&1);break;case 19:if(a=(t&e.childLanes)!==0,n.flags&128){if(a)return $u(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),L(K,K.current),a)break;return null;case 22:case 23:return e.lanes=0,Wu(n,e,t)}return te(n,e,t)}var Yu,Bo,Qu,Gu;Yu=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bo=function(){};Qu=function(n,e,t,a){var r=n.memoizedProps;if(r!==a){n=e.stateNode,Oe(Vn.current);var o=null;switch(t){case"input":r=lo(n,r),a=lo(n,a),o=[];break;case"select":r=U({},r,{value:void 0}),a=U({},a,{value:void 0}),o=[];break;case"textarea":r=co(n,r),a=co(n,a),o=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(n.onclick=Ja)}fo(t,a);var i;t=null;for(c in r)if(!a.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ut.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in a){var s=a[c];if(l=r!=null?r[c]:void 0,a.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ut.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&D("scroll",n),o||l===s||(o=[])):(o=o||[]).push(c,s))}t&&(o=o||[]).push("style",t);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Gu=function(n,e,t,a){t!==a&&(e.flags|=4)};function Et(n,e){if(!F)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function on(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function xg(n,e,t){var a=e.pendingProps;switch(mi(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return mn(e.type)&&Za(),on(e),null;case 3:return a=e.stateNode,ft(),R(hn),R(sn),bi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(ba(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(Qo(Mn),Mn=null))),Bo(n,e),on(e),null;case 5:Ii(e);var r=Oe(aa.current);if(t=e.type,n!==null&&e.stateNode!=null)Qu(n,e,t,a,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!a){if(e.stateNode===null)throw Error(k(166));return on(e),null}if(n=Oe(Vn.current),ba(e)){a=e.stateNode,t=e.type;var o=e.memoizedProps;switch(a[Wn]=e,a[ea]=o,n=(e.mode&1)!==0,t){case"dialog":D("cancel",a),D("close",a);break;case"iframe":case"object":case"embed":D("load",a);break;case"video":case"audio":for(r=0;r<At.length;r++)D(At[r],a);break;case"source":D("error",a);break;case"img":case"image":case"link":D("error",a),D("load",a);break;case"details":D("toggle",a);break;case"input":Xi(a,o),D("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},D("invalid",a);break;case"textarea":Zi(a,o),D("invalid",a)}fo(t,o),r=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?a.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ia(a.textContent,l,n),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ia(a.textContent,l,n),r=["children",""+l]):Ut.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&D("scroll",a)}switch(t){case"input":ma(a),Ji(a,o,!0);break;case"textarea":ma(a),qi(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Ja)}a=r,e.updateQueue=a,a!==null&&(e.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ns(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof a.is=="string"?n=i.createElement(t,{is:a.is}):(n=i.createElement(t),t==="select"&&(i=n,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):n=i.createElementNS(n,t),n[Wn]=e,n[ea]=a,Yu(n,e,!1,!1),e.stateNode=n;n:{switch(i=po(t,a),t){case"dialog":D("cancel",n),D("close",n),r=a;break;case"iframe":case"object":case"embed":D("load",n),r=a;break;case"video":case"audio":for(r=0;r<At.length;r++)D(At[r],n);r=a;break;case"source":D("error",n),r=a;break;case"img":case"image":case"link":D("error",n),D("load",n),r=a;break;case"details":D("toggle",n),r=a;break;case"input":Xi(n,a),r=lo(n,a),D("invalid",n);break;case"option":r=a;break;case"select":n._wrapperState={wasMultiple:!!a.multiple},r=U({},a,{value:void 0}),D("invalid",n);break;case"textarea":Zi(n,a),r=co(n,a),D("invalid",n);break;default:r=a}fo(t,r),l=r;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Cs(n,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Is(n,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&$t(n,s):typeof s=="number"&&$t(n,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ut.hasOwnProperty(o)?s!=null&&o==="onScroll"&&D("scroll",n):s!=null&&ei(n,o,s,i))}switch(t){case"input":ma(n),Ji(n,a,!1);break;case"textarea":ma(n),qi(n);break;case"option":a.value!=null&&n.setAttribute("value",""+we(a.value));break;case"select":n.multiple=!!a.multiple,o=a.value,o!=null?at(n,!!a.multiple,o,!1):a.defaultValue!=null&&at(n,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ja)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}}a&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(n&&e.stateNode!=null)Gu(n,e,n.memoizedProps,a);else{if(typeof a!="string"&&e.stateNode===null)throw Error(k(166));if(t=Oe(aa.current),Oe(Vn.current),ba(e)){if(a=e.stateNode,t=e.memoizedProps,a[Wn]=e,(o=a.nodeValue!==t)&&(n=Sn,n!==null))switch(n.tag){case 3:Ia(a.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(a.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Wn]=e,e.stateNode=a}return on(e),null;case 13:if(R(K),a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(F&&xn!==null&&e.mode&1&&!(e.flags&128))fu(),ct(),e.flags|=98560,o=!1;else if(o=ba(e),a!==null&&a.dehydrated!==null){if(n===null){if(!o)throw Error(k(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Wn]=e}else ct(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),o=!1}else Mn!==null&&(Qo(Mn),Mn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(a=a!==null,a!==(n!==null&&n.memoizedState!==null)&&a&&(e.child.flags|=8192,e.mode&1&&(n===null||K.current&1?Z===0&&(Z=3):Li())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return ft(),Bo(n,e),n===null&&qt(e.stateNode.containerInfo),on(e),null;case 10:return wi(e.type._context),on(e),null;case 17:return mn(e.type)&&Za(),on(e),null;case 19:if(R(K),o=e.memoizedState,o===null)return on(e),null;if(a=(e.flags&128)!==0,i=o.rendering,i===null)if(a)Et(o,!1);else{if(Z!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(i=or(n),i!==null){for(e.flags|=128,Et(o,!1),a=i.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),e.subtreeFlags=0,a=t,t=e.child;t!==null;)o=t,n=a,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,n=i.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return L(K,K.current&1|2),e.child}n=n.sibling}o.tail!==null&&Y()>ht&&(e.flags|=128,a=!0,Et(o,!1),e.lanes=4194304)}else{if(!a)if(n=or(i),n!==null){if(e.flags|=128,a=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Et(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!F)return on(e),null}else 2*Y()-o.renderingStartTime>ht&&t!==1073741824&&(e.flags|=128,a=!0,Et(o,!1),e.lanes=4194304);o.isBackwards?(i.sibling=e.child,e.child=i):(t=o.last,t!==null?t.sibling=i:e.child=i,o.last=i)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Y(),e.sibling=null,t=K.current,L(K,a?t&1|2:t&1),e):(on(e),null);case 22:case 23:return Mi(),a=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==a&&(e.flags|=8192),a&&e.mode&1?wn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Sg(n,e){switch(mi(e),e.tag){case 1:return mn(e.type)&&Za(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ft(),R(hn),R(sn),bi(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ii(e),null;case 13:if(R(K),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ct()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return R(K),null;case 4:return ft(),null;case 10:return wi(e.type._context),null;case 22:case 23:return Mi(),null;case 24:return null;default:return null}}var _a=!1,ln=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,I=null;function et(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){$(n,e,a)}else t.current=null}function Fo(n,e,t){try{t()}catch(a){$(n,e,a)}}var Wl=!1;function Ig(n,e){if(Io=Qa,n=nu(),pi(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break n}var i=0,l=-1,s=-1,c=0,m=0,h=n,p=null;e:for(;;){for(var v;h!==t||r!==0&&h.nodeType!==3||(l=i+r),h!==o||a!==0&&h.nodeType!==3||(s=i+a),h.nodeType===3&&(i+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===n)break e;if(p===t&&++c===r&&(l=i),p===o&&++m===a&&(s=i),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(bo={focusedElem:n,selectionRange:t},Qa=!1,I=e;I!==null;)if(e=I,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,I=n;else for(;I!==null;){e=I;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,z=w.memoizedState,g=e.stateNode,u=g.getSnapshotBeforeUpdate(e.elementType===e.type?x:zn(e.type,x),z);g.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){$(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}return w=Wl,Wl=!1,w}function Wt(n,e,t){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&n)===n){var o=r.destroy;r.destroy=void 0,o!==void 0&&Fo(e,t,o)}r=r.next}while(r!==a)}}function Sr(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var a=t.create;t.destroy=a()}t=t.next}while(t!==e)}}function Wo(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Xu(n){var e=n.alternate;e!==null&&(n.alternate=null,Xu(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Wn],delete e[ea],delete e[_o],delete e[ig],delete e[lg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ju(n){return n.tag===5||n.tag===3||n.tag===4}function Kl(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Ju(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ko(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ja));else if(a!==4&&(n=n.child,n!==null))for(Ko(n,e,t),n=n.sibling;n!==null;)Ko(n,e,t),n=n.sibling}function Vo(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(n=n.child,n!==null))for(Vo(n,e,t),n=n.sibling;n!==null;)Vo(n,e,t),n=n.sibling}var en=null,An=!1;function oe(n,e,t){for(t=t.child;t!==null;)Zu(n,e,t),t=t.sibling}function Zu(n,e,t){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(pr,t)}catch{}switch(t.tag){case 5:ln||et(t,e);case 6:var a=en,r=An;en=null,oe(n,e,t),en=a,An=r,en!==null&&(An?(n=en,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):en.removeChild(t.stateNode));break;case 18:en!==null&&(An?(n=en,t=t.stateNode,n.nodeType===8?Ur(n.parentNode,t):n.nodeType===1&&Ur(n,t),Xt(n)):Ur(en,t.stateNode));break;case 4:a=en,r=An,en=t.stateNode.containerInfo,An=!0,oe(n,e,t),en=a,An=r;break;case 0:case 11:case 14:case 15:if(!ln&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var o=r,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Fo(t,e,i),r=r.next}while(r!==a)}oe(n,e,t);break;case 1:if(!ln&&(et(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){$(t,e,l)}oe(n,e,t);break;case 21:oe(n,e,t);break;case 22:t.mode&1?(ln=(a=ln)||t.memoizedState!==null,oe(n,e,t),ln=a):oe(n,e,t);break;default:oe(n,e,t)}}function Vl(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Ng),e.forEach(function(a){var r=Hg.bind(null,n,a);t.has(a)||(t.add(a),a.then(r,r))})}}function Hn(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var o=n,i=e,l=i;n:for(;l!==null;){switch(l.tag){case 5:en=l.stateNode,An=!1;break n;case 3:en=l.stateNode.containerInfo,An=!0;break n;case 4:en=l.stateNode.containerInfo,An=!0;break n}l=l.return}if(en===null)throw Error(k(160));Zu(o,i,r),en=null,An=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(c){$(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qu(e,n),e=e.sibling}function qu(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hn(e,n),Bn(n),a&4){try{Wt(3,n,n.return),Sr(3,n)}catch(x){$(n,n.return,x)}try{Wt(5,n,n.return)}catch(x){$(n,n.return,x)}}break;case 1:Hn(e,n),Bn(n),a&512&&t!==null&&et(t,t.return);break;case 5:if(Hn(e,n),Bn(n),a&512&&t!==null&&et(t,t.return),n.flags&32){var r=n.stateNode;try{$t(r,"")}catch(x){$(n,n.return,x)}}if(a&4&&(r=n.stateNode,r!=null)){var o=n.memoizedProps,i=t!==null?t.memoizedProps:o,l=n.type,s=n.updateQueue;if(n.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&xs(r,o),po(l,i);var c=po(l,o);for(i=0;i<s.length;i+=2){var m=s[i],h=s[i+1];m==="style"?Cs(r,h):m==="dangerouslySetInnerHTML"?Is(r,h):m==="children"?$t(r,h):ei(r,m,h,c)}switch(l){case"input":so(r,o);break;case"textarea":Ss(r,o);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?at(r,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?at(r,!!o.multiple,o.defaultValue,!0):at(r,!!o.multiple,o.multiple?[]:"",!1))}r[ea]=o}catch(x){$(n,n.return,x)}}break;case 6:if(Hn(e,n),Bn(n),a&4){if(n.stateNode===null)throw Error(k(162));r=n.stateNode,o=n.memoizedProps;try{r.nodeValue=o}catch(x){$(n,n.return,x)}}break;case 3:if(Hn(e,n),Bn(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Xt(e.containerInfo)}catch(x){$(n,n.return,x)}break;case 4:Hn(e,n),Bn(n);break;case 13:Hn(e,n),Bn(n),r=n.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(zi=Y())),a&4&&Vl(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(ln=(c=ln)||m,Hn(e,n),ln=c):Hn(e,n),Bn(n),a&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!m&&n.mode&1)for(I=n,m=n.child;m!==null;){for(h=I=m;I!==null;){switch(p=I,v=p.child,p.tag){case 0:case 11:case 14:case 15:Wt(4,p,p.return);break;case 1:et(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){a=p,t=p.return;try{e=a,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(x){$(a,t,x)}}break;case 5:et(p,p.return);break;case 22:if(p.memoizedState!==null){$l(h);continue}}v!==null?(v.return=p,I=v):$l(h)}m=m.sibling}n:for(m=null,h=n;;){if(h.tag===5){if(m===null){m=h;try{r=h.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=bs("display",i))}catch(x){$(n,n.return,x)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){$(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break n;for(;h.sibling===null;){if(h.return===null||h.return===n)break n;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,n),Bn(n),a&4&&Vl(n);break;case 21:break;default:Hn(e,n),Bn(n)}}function Bn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Ju(t)){var a=t;break n}t=t.return}throw Error(k(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&($t(r,""),a.flags&=-33);var o=Kl(n);Vo(n,o,r);break;case 3:case 4:var i=a.stateNode.containerInfo,l=Kl(n);Ko(n,l,i);break;default:throw Error(k(161))}}catch(s){$(n,n.return,s)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function bg(n,e,t){I=n,nd(n)}function nd(n,e,t){for(var a=(n.mode&1)!==0;I!==null;){var r=I,o=r.child;if(r.tag===22&&a){var i=r.memoizedState!==null||_a;if(!i){var l=r.alternate,s=l!==null&&l.memoizedState!==null||ln;l=_a;var c=ln;if(_a=i,(ln=s)&&!c)for(I=r;I!==null;)i=I,s=i.child,i.tag===22&&i.memoizedState!==null?Yl(r):s!==null?(s.return=i,I=s):Yl(r);for(;o!==null;)I=o,nd(o),o=o.sibling;I=r,_a=l,ln=c}Ul(n)}else r.subtreeFlags&8772&&o!==null?(o.return=r,I=o):Ul(n)}}function Ul(n){for(;I!==null;){var e=I;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||Sr(5,e);break;case 1:var a=e.stateNode;if(e.flags&4&&!ln)if(t===null)a.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:zn(e.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&jl(e,o,a);break;case 3:var i=e.updateQueue;if(i!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}jl(e,i,t)}break;case 5:var l=e.stateNode;if(t===null&&e.flags&4){t=l;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Xt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ln||e.flags&512&&Wo(e)}catch(p){$(e,e.return,p)}}if(e===n){I=null;break}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}}function $l(n){for(;I!==null;){var e=I;if(e===n){I=null;break}var t=e.sibling;if(t!==null){t.return=e.return,I=t;break}I=e.return}}function Yl(n){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Sr(4,e)}catch(s){$(e,t,s)}break;case 1:var a=e.stateNode;if(typeof a.componentDidMount=="function"){var r=e.return;try{a.componentDidMount()}catch(s){$(e,r,s)}}var o=e.return;try{Wo(e)}catch(s){$(e,o,s)}break;case 5:var i=e.return;try{Wo(e)}catch(s){$(e,i,s)}}}catch(s){$(e,e.return,s)}if(e===n){I=null;break}var l=e.sibling;if(l!==null){l.return=e.return,I=l;break}I=e.return}}var Cg=Math.ceil,sr=ae.ReactCurrentDispatcher,Oi=ae.ReactCurrentOwner,jn=ae.ReactCurrentBatchConfig,H=0,nn=null,X=null,tn=0,wn=0,tt=Ne(0),Z=0,la=null,De=0,Nr=0,Hi=0,Kt=null,fn=null,zi=0,ht=1/0,Qn=null,ur=!1,Uo=null,ye=null,ja=!1,ce=null,dr=0,Vt=0,$o=null,Ba=-1,Fa=0;function dn(){return H&6?Y():Ba!==-1?Ba:Ba=Y()}function ke(n){return n.mode&1?H&2&&tn!==0?tn&-tn:ug.transition!==null?(Fa===0&&(Fa=Ds()),Fa):(n=M,n!==0||(n=window.event,n=n===void 0?16:Us(n.type)),n):1}function Dn(n,e,t,a){if(50<Vt)throw Vt=0,$o=null,Error(k(185));ua(n,t,a),(!(H&2)||n!==nn)&&(n===nn&&(!(H&2)&&(Nr|=t),Z===4&&ue(n,tn)),yn(n,a),t===1&&H===0&&!(e.mode&1)&&(ht=Y()+500,vr&&Ie()))}function yn(n,e){var t=n.callbackNode;uc(n,e);var a=Ya(n,n===nn?tn:0);if(a===0)t!==null&&tl(t),n.callbackNode=null,n.callbackPriority=0;else if(e=a&-a,n.callbackPriority!==e){if(t!=null&&tl(t),e===1)n.tag===0?sg(Ql.bind(null,n)):du(Ql.bind(null,n)),rg(function(){!(H&6)&&Ie()}),t=null;else{switch(Rs(a)){case 1:t=ii;break;case 4:t=Ms;break;case 16:t=$a;break;case 536870912:t=Ls;break;default:t=$a}t=sd(t,ed.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ed(n,e){if(Ba=-1,Fa=0,H&6)throw Error(k(327));var t=n.callbackNode;if(st()&&n.callbackNode!==t)return null;var a=Ya(n,n===nn?tn:0);if(a===0)return null;if(a&30||a&n.expiredLanes||e)e=cr(n,a);else{e=a;var r=H;H|=2;var o=ad();(nn!==n||tn!==e)&&(Qn=null,ht=Y()+500,He(n,e));do try{jg();break}catch(l){td(n,l)}while(!0);vi(),sr.current=o,H=r,X!==null?e=0:(nn=null,tn=0,e=Z)}if(e!==0){if(e===2&&(r=vo(n),r!==0&&(a=r,e=Yo(n,r))),e===1)throw t=la,He(n,0),ue(n,a),yn(n,Y()),t;if(e===6)ue(n,a);else{if(r=n.current.alternate,!(a&30)&&!Pg(r)&&(e=cr(n,a),e===2&&(o=vo(n),o!==0&&(a=o,e=Yo(n,o))),e===1))throw t=la,He(n,0),ue(n,a),yn(n,Y()),t;switch(n.finishedWork=r,n.finishedLanes=a,e){case 0:case 1:throw Error(k(345));case 2:je(n,fn,Qn);break;case 3:if(ue(n,a),(a&130023424)===a&&(e=zi+500-Y(),10<e)){if(Ya(n,0)!==0)break;if(r=n.suspendedLanes,(r&a)!==a){dn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Po(je.bind(null,n,fn,Qn),e);break}je(n,fn,Qn);break;case 4:if(ue(n,a),(a&4194240)===a)break;for(e=n.eventTimes,r=-1;0<a;){var i=31-Ln(a);o=1<<i,i=e[i],i>r&&(r=i),a&=~o}if(a=r,a=Y()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Cg(a/1960))-a,10<a){n.timeoutHandle=Po(je.bind(null,n,fn,Qn),a);break}je(n,fn,Qn);break;case 5:je(n,fn,Qn);break;default:throw Error(k(329))}}}return yn(n,Y()),n.callbackNode===t?ed.bind(null,n):null}function Yo(n,e){var t=Kt;return n.current.memoizedState.isDehydrated&&(He(n,e).flags|=256),n=cr(n,e),n!==2&&(e=fn,fn=t,e!==null&&Qo(e)),n}function Qo(n){fn===null?fn=n:fn.push.apply(fn,n)}function Pg(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],o=r.getSnapshot;r=r.value;try{if(!Rn(o(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ue(n,e){for(e&=~Hi,e&=~Nr,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ln(e),a=1<<t;n[t]=-1,e&=~a}}function Ql(n){if(H&6)throw Error(k(327));st();var e=Ya(n,0);if(!(e&1))return yn(n,Y()),null;var t=cr(n,e);if(n.tag!==0&&t===2){var a=vo(n);a!==0&&(e=a,t=Yo(n,a))}if(t===1)throw t=la,He(n,0),ue(n,e),yn(n,Y()),t;if(t===6)throw Error(k(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,je(n,fn,Qn),yn(n,Y()),null}function Ai(n,e){var t=H;H|=1;try{return n(e)}finally{H=t,H===0&&(ht=Y()+500,vr&&Ie())}}function Re(n){ce!==null&&ce.tag===0&&!(H&6)&&st();var e=H;H|=1;var t=jn.transition,a=M;try{if(jn.transition=null,M=1,n)return n()}finally{M=a,jn.transition=t,H=e,!(H&6)&&Ie()}}function Mi(){wn=tt.current,R(tt)}function He(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ag(t)),X!==null)for(t=X.return;t!==null;){var a=t;switch(mi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Za();break;case 3:ft(),R(hn),R(sn),bi();break;case 5:Ii(a);break;case 4:ft();break;case 13:R(K);break;case 19:R(K);break;case 10:wi(a.type._context);break;case 22:case 23:Mi()}t=t.return}if(nn=n,X=n=ve(n.current,null),tn=wn=e,Z=0,la=null,Hi=Nr=De=0,fn=Kt=null,Te!==null){for(e=0;e<Te.length;e++)if(t=Te[e],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,o=t.pending;if(o!==null){var i=o.next;o.next=r,a.next=i}t.pending=a}Te=null}return n}function td(n,e){do{var t=X;try{if(vi(),La.current=lr,ir){for(var a=V.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}ir=!1}if(Le=0,q=J=V=null,Ft=!1,ra=0,Oi.current=null,t===null||t.return===null){Z=1,la=e,X=null;break}n:{var o=n,i=t.return,l=t,s=e;if(e=tn,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=l,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Al(i);if(v!==null){v.flags&=-257,Ml(v,i,l,o,e),v.mode&1&&zl(o,c,e),e=v,s=c;var w=e.updateQueue;if(w===null){var x=new Set;x.add(s),e.updateQueue=x}else w.add(s);break n}else{if(!(e&1)){zl(o,c,e),Li();break n}s=Error(k(426))}}else if(F&&l.mode&1){var z=Al(i);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ml(z,i,l,o,e),yi(pt(s,l));break n}}o=s=pt(s,l),Z!==4&&(Z=2),Kt===null?Kt=[o]:Kt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=Ru(o,s,e);_l(o,g);break n;case 1:l=s;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ye===null||!ye.has(f)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Bu(o,l,e);_l(o,y);break n}}o=o.return}while(o!==null)}od(t)}catch(S){e=S,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function ad(){var n=sr.current;return sr.current=lr,n===null?lr:n}function Li(){(Z===0||Z===3||Z===2)&&(Z=4),nn===null||!(De&268435455)&&!(Nr&268435455)||ue(nn,tn)}function cr(n,e){var t=H;H|=2;var a=ad();(nn!==n||tn!==e)&&(Qn=null,He(n,e));do try{_g();break}catch(r){td(n,r)}while(!0);if(vi(),H=t,sr.current=a,X!==null)throw Error(k(261));return nn=null,tn=0,Z}function _g(){for(;X!==null;)rd(X)}function jg(){for(;X!==null&&!nc();)rd(X)}function rd(n){var e=ld(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?od(n):X=e,Oi.current=null}function od(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Sg(t,e),t!==null){t.flags&=32767,X=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Z=6,X=null;return}}else if(t=xg(t,e,wn),t!==null){X=t;return}if(e=e.sibling,e!==null){X=e;return}X=e=n}while(e!==null);Z===0&&(Z=5)}function je(n,e,t){var a=M,r=jn.transition;try{jn.transition=null,M=1,Eg(n,e,t,a)}finally{jn.transition=r,M=a}return null}function Eg(n,e,t,a){do st();while(ce!==null);if(H&6)throw Error(k(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(k(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(dc(n,o),n===nn&&(X=nn=null,tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ja||(ja=!0,sd($a,function(){return st(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=jn.transition,jn.transition=null;var i=M;M=1;var l=H;H|=4,Oi.current=null,Ig(n,t),qu(t,n),Xc(bo),Qa=!!Io,bo=Io=null,n.current=t,bg(t),ec(),H=l,M=i,jn.transition=o}else n.current=t;if(ja&&(ja=!1,ce=n,dr=r),o=n.pendingLanes,o===0&&(ye=null),rc(t.stateNode),yn(n,Y()),e!==null)for(a=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(ur)throw ur=!1,n=Uo,Uo=null,n;return dr&1&&n.tag!==0&&st(),o=n.pendingLanes,o&1?n===$o?Vt++:(Vt=0,$o=n):Vt=0,Ie(),null}function st(){if(ce!==null){var n=Rs(dr),e=jn.transition,t=M;try{if(jn.transition=null,M=16>n?16:n,ce===null)var a=!1;else{if(n=ce,ce=null,dr=0,H&6)throw Error(k(331));var r=H;for(H|=4,I=n.current;I!==null;){var o=I,i=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(I=c;I!==null;){var m=I;switch(m.tag){case 0:case 11:case 15:Wt(8,m,o)}var h=m.child;if(h!==null)h.return=m,I=h;else for(;I!==null;){m=I;var p=m.sibling,v=m.return;if(Xu(m),m===c){I=null;break}if(p!==null){p.return=v,I=p;break}I=v}}}var w=o.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var z=x.sibling;x.sibling=null,x=z}while(x!==null)}}I=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,I=i;else n:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wt(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,I=g;break n}I=o.return}}var u=n.current;for(I=u;I!==null;){i=I;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,I=f;else n:for(i=u;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Sr(9,l)}}catch(S){$(l,l.return,S)}if(l===i){I=null;break n}var y=l.sibling;if(y!==null){y.return=l.return,I=y;break n}I=l.return}}if(H=r,Ie(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(pr,n)}catch{}a=!0}return a}finally{M=t,jn.transition=e}}return!1}function Gl(n,e,t){e=pt(t,e),e=Ru(n,e,1),n=me(n,e,1),e=dn(),n!==null&&(ua(n,1,e),yn(n,e))}function $(n,e,t){if(n.tag===3)Gl(n,n,t);else for(;e!==null;){if(e.tag===3){Gl(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ye===null||!ye.has(a))){n=pt(t,n),n=Bu(e,n,1),e=me(e,n,1),n=dn(),e!==null&&(ua(e,1,n),yn(e,n));break}}e=e.return}}function Tg(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),e=dn(),n.pingedLanes|=n.suspendedLanes&t,nn===n&&(tn&t)===t&&(Z===4||Z===3&&(tn&130023424)===tn&&500>Y()-zi?He(n,0):Hi|=t),yn(n,e)}function id(n,e){e===0&&(n.mode&1?(e=va,va<<=1,!(va&130023424)&&(va=4194304)):e=1);var t=dn();n=ee(n,e),n!==null&&(ua(n,e,t),yn(n,t))}function Og(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),id(n,t)}function Hg(n,e){var t=0;switch(n.tag){case 13:var a=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=n.stateNode;break;default:throw Error(k(314))}a!==null&&a.delete(e),id(n,t)}var ld;ld=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||hn.current)pn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return pn=!1,wg(n,e,t);pn=!!(n.flags&131072)}else pn=!1,F&&e.flags&1048576&&cu(e,er,e.index);switch(e.lanes=0,e.tag){case 2:var a=e.type;Ra(n,e),n=e.pendingProps;var r=dt(e,sn.current);lt(e,t),r=Pi(null,e,a,n,r,t);var o=_i();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(a)?(o=!0,qa(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Si(e),r.updater=xr,e.stateNode=r,r._reactInternals=e,zo(e,a,n,t),e=Lo(null,e,a,!0,o,t)):(e.tag=0,F&&o&&hi(e),un(null,e,r,t),e=e.child),e;case 16:a=e.elementType;n:{switch(Ra(n,e),n=e.pendingProps,r=a._init,a=r(a._payload),e.type=a,r=e.tag=Ag(a),n=zn(a,n),r){case 0:e=Mo(null,e,a,n,t);break n;case 1:e=Rl(null,e,a,n,t);break n;case 11:e=Ll(null,e,a,n,t);break n;case 14:e=Dl(null,e,a,zn(a.type,n),t);break n}throw Error(k(306,a,""))}return e;case 0:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:zn(a,r),Mo(n,e,a,r,t);case 1:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:zn(a,r),Rl(n,e,a,r,t);case 3:n:{if(Vu(e),n===null)throw Error(k(387));a=e.pendingProps,o=e.memoizedState,r=o.element,yu(n,e),rr(e,a,null,t);var i=e.memoizedState;if(a=i.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=pt(Error(k(423)),e),e=Bl(n,e,a,t,r);break n}else if(a!==r){r=pt(Error(k(424)),e),e=Bl(n,e,a,t,r);break n}else for(xn=he(e.stateNode.containerInfo.firstChild),Sn=e,F=!0,Mn=null,t=hu(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),a===r){e=te(n,e,t);break n}un(n,e,a,t)}e=e.child}return e;case 5:return ku(e),n===null&&To(e),a=e.type,r=e.pendingProps,o=n!==null?n.memoizedProps:null,i=r.children,Co(a,r)?i=null:o!==null&&Co(a,o)&&(e.flags|=32),Ku(n,e),un(n,e,i,t),e.child;case 6:return n===null&&To(e),null;case 13:return Uu(n,e,t);case 4:return Ni(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=gt(e,null,a,t):un(n,e,a,t),e.child;case 11:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:zn(a,r),Ll(n,e,a,r,t);case 7:return un(n,e,e.pendingProps,t),e.child;case 8:return un(n,e,e.pendingProps.children,t),e.child;case 12:return un(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(a=e.type._context,r=e.pendingProps,o=e.memoizedProps,i=r.value,L(tr,a._currentValue),a._currentValue=i,o!==null)if(Rn(o.value,i)){if(o.children===r.children&&!hn.current){e=te(n,e,t);break n}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var s=l.firstContext;s!==null;){if(s.context===a){if(o.tag===1){s=Zn(-1,t&-t),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Oo(o.return,t,e),l.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===e.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(k(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Oo(i,t,e),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}un(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,a=e.pendingProps.children,lt(e,t),r=En(r),a=a(r),e.flags|=1,un(n,e,a,t),e.child;case 14:return a=e.type,r=zn(a,e.pendingProps),r=zn(a.type,r),Dl(n,e,a,r,t);case 15:return Fu(n,e,e.type,e.pendingProps,t);case 17:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:zn(a,r),Ra(n,e),e.tag=1,mn(a)?(n=!0,qa(e)):n=!1,lt(e,t),Du(e,a,r),zo(e,a,r,t),Lo(null,e,a,!0,n,t);case 19:return $u(n,e,t);case 22:return Wu(n,e,t)}throw Error(k(156,e.tag))};function sd(n,e){return As(n,e)}function zg(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,e,t,a){return new zg(n,e,t,a)}function Di(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ag(n){if(typeof n=="function")return Di(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ai)return 11;if(n===ri)return 14}return 2}function ve(n,e){var t=n.alternate;return t===null?(t=_n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Wa(n,e,t,a,r,o){var i=2;if(a=n,typeof n=="function")Di(n)&&(i=1);else if(typeof n=="string")i=5;else n:switch(n){case $e:return ze(t.children,r,o,e);case ti:i=8,r|=8;break;case ao:return n=_n(12,t,e,r|2),n.elementType=ao,n.lanes=o,n;case ro:return n=_n(13,t,e,r),n.elementType=ro,n.lanes=o,n;case oo:return n=_n(19,t,e,r),n.elementType=oo,n.lanes=o,n;case ks:return Ir(t,r,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ms:i=10;break n;case ys:i=9;break n;case ai:i=11;break n;case ri:i=14;break n;case ie:i=16,a=null;break n}throw Error(k(130,n==null?n:typeof n,""))}return e=_n(i,t,e,r),e.elementType=n,e.type=a,e.lanes=o,e}function ze(n,e,t,a){return n=_n(7,n,a,e),n.lanes=t,n}function Ir(n,e,t,a){return n=_n(22,n,a,e),n.elementType=ks,n.lanes=t,n.stateNode={isHidden:!1},n}function qr(n,e,t){return n=_n(6,n,null,e),n.lanes=t,n}function no(n,e,t){return e=_n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Mg(n,e,t,a,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zr(0),this.expirationTimes=zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zr(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ri(n,e,t,a,r,o,i,l,s){return n=new Mg(n,e,t,l,s),e===1?(e=1,o===!0&&(e|=8)):e=0,o=_n(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Si(o),n}function Lg(n,e,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ue,key:a==null?null:""+a,children:n,containerInfo:e,implementation:t}}function ud(n){if(!n)return xe;n=n._reactInternals;n:{if(Fe(n)!==n||n.tag!==1)throw Error(k(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(k(171))}if(n.tag===1){var t=n.type;if(mn(t))return uu(n,t,e)}return e}function dd(n,e,t,a,r,o,i,l,s){return n=Ri(t,a,!0,n,r,o,i,l,s),n.context=ud(null),t=n.current,a=dn(),r=ke(t),o=Zn(a,r),o.callback=e??null,me(t,o,r),n.current.lanes=r,ua(n,r,a),yn(n,a),n}function br(n,e,t,a){var r=e.current,o=dn(),i=ke(r);return t=ud(t),e.context===null?e.context=t:e.pendingContext=t,e=Zn(o,i),e.payload={element:n},a=a===void 0?null:a,a!==null&&(e.callback=a),n=me(r,e,i),n!==null&&(Dn(n,r,i,o),Ma(n,r,i)),i}function gr(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xl(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Bi(n,e){Xl(n,e),(n=n.alternate)&&Xl(n,e)}function Dg(){return null}var cd=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fi(n){this._internalRoot=n}Cr.prototype.render=Fi.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(k(409));br(n,e,null,null)};Cr.prototype.unmount=Fi.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Re(function(){br(null,n,null,null)}),e[ne]=null}};function Cr(n){this._internalRoot=n}Cr.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ws();n={blockedOn:null,target:n,priority:e};for(var t=0;t<se.length&&e!==0&&e<se[t].priority;t++);se.splice(t,0,n),t===0&&Vs(n)}};function Wi(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pr(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jl(){}function Rg(n,e,t,a,r){if(r){if(typeof a=="function"){var o=a;a=function(){var c=gr(i);o.call(c)}}var i=dd(e,a,n,0,null,!1,!1,"",Jl);return n._reactRootContainer=i,n[ne]=i.current,qt(n.nodeType===8?n.parentNode:n),Re(),i}for(;r=n.lastChild;)n.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var c=gr(s);l.call(c)}}var s=Ri(n,0,!1,null,null,!1,!1,"",Jl);return n._reactRootContainer=s,n[ne]=s.current,qt(n.nodeType===8?n.parentNode:n),Re(function(){br(e,s,t,a)}),s}function _r(n,e,t,a,r){var o=t._reactRootContainer;if(o){var i=o;if(typeof r=="function"){var l=r;r=function(){var s=gr(i);l.call(s)}}br(e,i,n,r)}else i=Rg(t,e,n,r,a);return gr(i)}Bs=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=zt(e.pendingLanes);t!==0&&(li(e,t|1),yn(e,Y()),!(H&6)&&(ht=Y()+500,Ie()))}break;case 13:Re(function(){var a=ee(n,1);if(a!==null){var r=dn();Dn(a,n,1,r)}}),Bi(n,1)}};si=function(n){if(n.tag===13){var e=ee(n,134217728);if(e!==null){var t=dn();Dn(e,n,134217728,t)}Bi(n,134217728)}};Fs=function(n){if(n.tag===13){var e=ke(n),t=ee(n,e);if(t!==null){var a=dn();Dn(t,n,e,a)}Bi(n,e)}};Ws=function(){return M};Ks=function(n,e){var t=M;try{return M=n,e()}finally{M=t}};mo=function(n,e,t){switch(e){case"input":if(so(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var r=kr(a);if(!r)throw Error(k(90));ws(a),so(a,r)}}}break;case"textarea":Ss(n,t);break;case"select":e=t.value,e!=null&&at(n,!!t.multiple,e,!1)}};js=Ai;Es=Re;var Bg={usingClientEntryPoint:!1,Events:[ca,Xe,kr,Ps,_s,Ai]},Tt={findFiberByHostInstance:Ee,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fg={bundleType:Tt.bundleType,version:Tt.version,rendererPackageName:Tt.rendererPackageName,rendererConfig:Tt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Hs(n),n===null?null:n.stateNode},findFiberByHostInstance:Tt.findFiberByHostInstance||Dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{pr=Ea.inject(Fg),Kn=Ea}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bg;In.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wi(e))throw Error(k(200));return Lg(n,e,null,t)};In.createRoot=function(n,e){if(!Wi(n))throw Error(k(299));var t=!1,a="",r=cd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ri(n,1,!1,null,null,t,!1,a,r),n[ne]=e.current,qt(n.nodeType===8?n.parentNode:n),new Fi(e)};In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(k(188)):(n=Object.keys(n).join(","),Error(k(268,n)));return n=Hs(e),n=n===null?null:n.stateNode,n};In.flushSync=function(n){return Re(n)};In.hydrate=function(n,e,t){if(!Pr(e))throw Error(k(200));return _r(null,n,e,!0,t)};In.hydrateRoot=function(n,e,t){if(!Wi(n))throw Error(k(405));var a=t!=null&&t.hydratedSources||null,r=!1,o="",i=cd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),e=dd(e,null,n,1,t??null,r,!1,o,i),n[ne]=e.current,qt(n),a)for(n=0;n<a.length;n++)t=a[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Cr(e)};In.render=function(n,e,t){if(!Pr(e))throw Error(k(200));return _r(null,n,e,!1,t)};In.unmountComponentAtNode=function(n){if(!Pr(n))throw Error(k(40));return n._reactRootContainer?(Re(function(){_r(null,null,n,!1,function(){n._reactRootContainer=null,n[ne]=null})}),!0):!1};In.unstable_batchedUpdates=Ai;In.unstable_renderSubtreeIntoContainer=function(n,e,t,a){if(!Pr(t))throw Error(k(200));if(n==null||n._reactInternals===void 0)throw Error(k(38));return _r(n,e,t,!1,a)};In.version="18.3.1-next-f1338f8080-20240426";function gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gd)}catch(n){console.error(n)}}gd(),gs.exports=In;var Wg=gs.exports,Zl=Wg;eo.createRoot=Zl.createRoot,eo.hydrateRoot=Zl.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Q=(n,e)=>{const t=O.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:l="",children:s,...c},m)=>O.createElement("svg",{ref:m,...Kg,width:r,height:r,stroke:a,strokeWidth:i?Number(o)*24/Number(r):o,className:["lucide",`lucide-${Vg(n)}`,l].join(" "),...c},[...e.map(([h,p])=>O.createElement(h,p)),...Array.isArray(s)?s:[s]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=Q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=Q("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=Q("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=Q("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=Q("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=Q("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=Q("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=Q("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=Q("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=Q("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Q("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=Q("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=Q("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=Q("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=Q("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=Q("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=Q("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),df=[{id:"1",title:"Obvious",color:"from-pink-600 to-purple-700",cover:"/music/Obvious/COVER - Obvious.png",audio:"/music/Obvious/Obvious - 3rd Harmonik.mp3",story:`<div class="song-popup-section">
                    <h4 style="color: var(--neon-pink);">The Spark: A College Daydream</h4>
                    <p>It started as a fleeting hum during a mundane college afternoon—a lightning-in-a-bottle melody that demanded to be caught. Aljay found himself capturing that precise, heart-racing moment of a massive college crush. The opening verse, <em>"Can we talk for a little more while? Can't get enough of it, your voice, your smile,"</em> isn't just a request; it’s a desperate plea to freeze time.</p>
                </div>
                <div class="song-popup-section">
                    <h4 style="color: var(--neon-blue);">The Realization: Cupid's Sniper Rifle</h4>
                    <p>The chorus is the surrender. We aren't just talking about a nudge from Cupid here; this was a direct hit from a sniper. When the lyrics cry out, <em>"I'm sorry 'coz I love you now. Can't quite figure it out,"</em> it captures that terrifying, dizzying freefall of falling in love before you're ready.</p>
                </div>`,lyrics:`Obvious - 3rd Harmonik

[Verse 1]
Can we talk,
for a little more while?
Can't get enough of it, 
your voice, your smile,
Think I'm addicted, 
it's so complicated,
Getting disoriented,
It's at the tip,
of my tongue,
But I can't let it out..

How long do I have to,
Hide this feeling,
This obvious grinning,
I'm still believing..

[Chorus]
I'm sorry 'coz I love you now,
Can't quite figure it out,
How to show you,
How to say it, how to prove it,
I'm sorry I have to tell you,
This hopeless feeling,
That I am clinging,
To a dying hope,
I pray.. that you would say..

[Verse 2]
Can we walk, 
for a little more while?
Can't get enough of it, 
your scent, your style,
Think I'm addicted, 
it's so complicated,
Getting disoriented,
It's at the tip,
of my tongue,
But I can't let it out..

How long do I have to,
Hide this feeling,
This obvious grinning,
I'm still believing..

[Chorus]
I'm sorry 'coz I love you now,
Can't quite figure it out,
How to show you,
How to say it, how to prove it,
I'm sorry I have to tell you,
This hopeless feeling,
That I am clinging,
To a dying hope,
I pray.. that you would say..

[Bridge]
It's obvious, I know,
But I want to show,
I can't lie low,
This is embarrassing,
But I'm getting,
The feeling,
That you somehow smiled,
Is it obvious?
Obvious..
Obvious..
Obvious..
Obvious..

I'm sorry 'coz I love you now,
Can't quite figure it out,
How to show you,
How to say it, how to prove it,

[Chorus]
I'm sorry 'coz I love you now,
Can't quite figure it out,
How to show you,
How to say it, how to prove it,
I'm sorry I have to tell you,
This hopeless feeling,
That I am clinging,
To a dying hope,
I pray.. that you would say..

Is it obvious?
Obvious..

Is it obvious?
Obvious..

Is it obvious?
Obvious..

Is it obvious?
Obvious..`},{id:"2",title:"How Could You",color:"from-cyan-500 to-blue-700",cover:"/music/How Could You/COVER - How Could You.png",audio:"/music/How Could You/How Could You - 3rd Harmonik.mp3",story:`<div class="song-popup-section">
                    <h4 style="color: var(--neon-cyan);">The Storm: 10 Minutes of Raw Emotion</h4>
                    <p>Written in just 10 minutes to channel a storm of raw emotion, this song captures that specific, gut-wrenching moment when the person you placed on a pedestal kicks it out from under you. Sparked by Clyde's painful recounting of a past relationship, it captures the terrifying freefall of betrayal.</p>
                </div>
                <div class="song-popup-section">
                    <h4 style="color: var(--neon-blue);">The Shattered Peace</h4>
                    <p>The word 'peace' in the chorus also implies a shattered 'piece' of the soul. You look up to them, you give them your absolute all, you believe in them with every fiber of your being—and then, in one single swoop, it shatters. When the dust settles, only one desperate question remains echoing in the silence: <em>"How could you, my love?"</em></p>
                </div>`,lyrics:`How Could You - 3rd Harmonik

[Verse]
How could you?
Split my heart in two,
How could you,
Have made yourself weak,
Now I'm turnin' into,
Something I'm not,
So you mean that,
You made me believe,
That you were weak,
The entire time.. ohh..

Honestly, I cared for you,
Actually, you know it's true,
That deep down this darkness,
It's brighten up by you,

[Chorus]
You taught me how to understand,
Now, you shattered my peace,
I can't hate  you now,
Would you tell me how?
How could you, my love?
How could you.... ohh...

[Verse]
I don't believe you,
I know that's not it,
Why won't you say something?
How could you,
Have made yourself weak,
The entire time,
Made me believe,
That there could be something,
But what is this feeling? Ohh..

Honestly, I cared for you,
Actually, you know it's true,
That deep down this darkness,
It's brighten up by you,

[Chorus]
You taught me how to understand,
Now, you shattered my peace,
I can't hate you now,
Would you tell me how?
How could you, my love?
How could you.... ohh...

[Bridge]
How could you, my love?
How could you.... ohh...
How could you, my love?
How could you.... ohh...

[Chorus]
You taught me how to understand,
Now, you shattered my peace,
I can't hate you now,
Would you tell me how?
How could you, my love?
How could you.... ohh...

How could you, my love?

[Final]
How could you, my love?
How could you.... ohh...
How could you, my love?
How could you.... ohh...
How could you, my love?
How could you.... ohh...
How could you, my love?
How could you.... ohh...`},{id:"3",title:"Kometa",color:"from-orange-500 to-red-700",cover:"/music/Kometa/Cover.png",audio:"/music/Kometa/Kometa - 3rd Harmonik.mp3",story:"Like a comet streaking across the night sky, this song captures the ephemeral and brilliant nature of a love that feels like destiny, even if it's only for a moment.",lyrics:`Kometa - 3rd Harmonik

[Verse 1]
Hanap-hanap ko parin,
Bituin nagnining-ning,
Habang ako'y nakikinig,
Sa lamig ng iyong tinig,
Oh, tila ba isang minuto,
Lang ang nakalipas at,
Biglang umaga na pala,
Tapos isang minuto pa,
Ay abot takipsilim na..
 
[Pre-chorus]
Kay bigat ng paa,
Kay gaan ng pakiramdam,
Sa iyong tabi lang ang,
Puso ko gustong mawala..

[Chorus]
Parang isang kometa,
Parang isang iglap ka lang,
Isang kisap mata,
Ang yakap mo madarama,
Oh, kay liwanag mo mahal,
Sinusundan ng mga mata,
Kung saan-saan ako mapunta,
Sa'yo babagsak, aking kometa..
Aking kometa..

[Verse 2]
Mundo ko'y nag-iiba, kulay biglang sumisigla
Bawat ordinaryo, sa'yo'y nagiging mahika
Ang dating gabi kong madilim, ngayo'y may talang gabay
Sa 'yong liwanag, ang anino ko'y sumasabay

[Pre-chorus]
Kay bigat ng paa,
Kay gaan ng pakiramdam,
Sa iyong tabi lang ang,
Puso ko gustong mawala..

[Chorus]
Parang isang kometa,
Parang isang iglap ka lang,
Isang kisap mata,
Ang yakap mo madarama,
Oh, kay liwanag mo mahal,
Sinusundan ng mga mata,
Kung saan-saan ako mapunta,
Sa'yo babagsak, aking kometa..
Aking kometa..

[Bridge]
Dalhin man ng agos, sa kalawakan ng pag-ibig
Puso'y laan sa'yo, walang alinlangan, sinta
Ikaw ang uniberso, bituin kong nagniningning
Sa'yo ang aking mundo, tadhanang 'di magmamaliw.

[Final]
Parang isang kometa,
Parang isang iglap ka lang,
Isang kisap mata,
Ang yakap mo madarama,
Oh, kay liwanag mo mahal,
Sinusundan ng mga mata,
Kung saan-saan ako mapunta,
Sa'yo babagsak, aking kometa..
Aking kometa..
Aking kometa..
Aking kometa..
Aking kometa..`},{id:"4",title:"Nandito",color:"from-indigo-600 to-purple-900",audio:"/music/Nandito/Nandito - 3rd Harmonik.mp3",story:"A song about being there for someone even when they don't realize it. It's a promise of presence and support through the dark times.",lyrics:`Nandito - 3rd Harmonik

[Verse 1]
Kanina lamang ay nakausap pa kita,
Kay lalim ng isip, kay layo ng tingin,
Kanina lamang may hindi sinasagot,
Mga tanong, mga paano, mga bakit,
Subalit paano ko maaayos ang lahat,
Kung mismo ikaw ay hindi ko maabot,
Nababagot, damdamin kay hilaw,
Nakasimangot, naliligaw..

[Refrain]
Isang ngiti naman jan,
Maaayos din yan,

[Chorus]
'Di mo lang alam,
Gaano ka kahalaga,
'Di mo lang alam, sinta,
'Di mo din alam,
Na andaming nasa likod mo lang,
Hindi sa nag-aabang,
Kundi nandito lang sila talaga,
Nandito,
Nandito para sa'yo..

[Verse 2]
Kahapon lamang ay tumatawa ka,
Kay saya ng araw, kay sigla ng panahon,
Kahapon lamang may mga sinasagot,
Mga tanong, mga paano, mga bakit,

[Refrain]
Isang ngiti naman jan,
Maaayos din yan,

[Chorus]
'Di mo lang alam,
Gaano ka kahalaga,
'Di mo lang alam, sinta,
'Di mo din alam,
Na andaming nasa likod mo lang,
Hindi sa nag-aabang,
Kundi nandito lang sila talaga,
Nandito,
Nandito para sa'yo..

[Bridge]
Kung alam mo lang,
Kung maririnig mo,
Ang apoy ng puso,
Ang kulo ng dugo,
Kapag ika'y nasasaktan,
Hindi naiiwasang, masaktan din ako,
Sapagkat nandito,
Nandito lang ako..

[Chorus]
'Di mo lang alam,
Gaano ka kahalaga,
'Di mo lang alam, sinta,
'Di mo din alam,
Na andaming nasa likod mo lang,
Hindi sa nag-aabang,
Kundi nandito lang sila talaga,
Nandito,
Nandito para sa'yo..
Nandito,
Nandito para sa'yo..
Nandito,
Nandito para sa'yo..`},{id:"5",title:"Titulo",color:"from-yellow-500 to-pink-600",audio:"/music/Titulo/Titulo - 3rd Harmonik.mp3",story:"Exploring the concept of 'titles' in relationships and the feelings that go beyond words. It's about finding certainty in the uncertain.",lyrics:`Titulo - 3rd Harmonik

[Verse 1]
Hindi ko matandaan, pero nararamdaman,
Hindi lang ng puso't isipan,
Hindi ko masabi, pagkat hindi sigurado,
Sapat nga ba, na ikaw ang titulo?

Alam kong ang daming,
Mga tao sa mundo,
Pero hindi malayo, 
Ang kutob ko sa'yo,

[Refrain]
Parang hindi matatapos,
Hangga't hindi magtatagpo..

[Chorus]
Nakasulat ang lahat,
Sa aklat ng aking puso,
At ito'y nakabuklat,
Para iyong basahin, at unawa-in,
Sa bawat tuldok, 
Ay may ikaw at,
Bawat pikit ng mga mata,
Ikaw agad nakikita..
Ikaw ang titulo..

[Verse 2]
Hindi kinalimutan, ng pusong lumaban,
Kahit hindi mapatunayan,
Higit pa sa oras, na mga lumipas,
Sapat na siguro, na ikaw ang titulo.

[Refrain]
Parang hindi matatapos,
Hangga't hindi magtatagpo..

[Chorus]
Nakasulat ang lahat,
Sa aklat ng aking puso,
At ito'y nakabuklat,
Para iyong basahin, at unawa-in,
Sa bawat tuldok, 
Ay may ikaw at,
Bawat pikit ng mga mata,
Ikaw agad nakikita..
Ikaw ang titulo..

[Bridge]
Ipagtatagpo bang muli?
Kung sakaling huli,
Na ang lahat at,
Hindi na maibabalik?
Ito ba'y pagkakataon,
Na tayo'y muling hahamon,
Sa mapaglarong panahon?

[Chorus]
Nakasulat ang lahat,
Sa aklat ng aking puso,
At ito'y nakabuklat,
Para iyong basahin, at unawa-in,
Sa bawat tuldok, 
Ay may ikaw at,
Bawat pikit ng mga mata,
Ikaw agad nakikita..
Ikaw ang titulo..

[Chorus]
Nakasulat ang lahat,
Sa aklat ng aking puso,
At ito'y nakabuklat,
Para iyong basahin, at unawa-in,
Sa bawat tuldok, 
Ay may ikaw at,
Bawat pikit ng mga mata,
Ikaw agad nakikita..
Ikaw ang titulo..
Bawat pikit ng mga mata,
Ikaw agad nakikita..
Ikaw ang titulo..
Ikaw ang titulo..`},{id:"6",title:"Love",color:"from-teal-500 to-emerald-700",audio:"/music/Love/Love - 3rd Harmonik.mp3",story:"What is love? This track attempts to define the indefinable, acknowledging that love chooses us, defying logic and often leading to beautiful, regret-free chaos.",lyrics:`[Verse 1]
What is love?
Yeah, I'll tell you,
Might sound clichè, mind you,
Here's the thing, listen..
You don't get to choose,
Because love chooses,
Defies logic. One loses,
Their minds over it, to get over it.

[Refrain]
It's like you're losing a winning game,
But that's no shame..

[Chorus]
In other words, in other worlds,
I'd still choose you, over and over,
Twice on Sundays, ten out of ten,
Ohh.. don't need to pretend,
That in other words, I love you,
And in other worlds, I'll tell you,
It won't be easy to forget,
'Coz I'll be having no regrets,
Ohh.. love.

[Verse 2]
How to love?
Yeah, I'll tell you,
Might sound corny, mind you,
I know I sound overdramatic,
But there's no perfect,
You just gotta do,
What you have to do. Nothing cryptic,
Don't overcomplicate the already complicated.

[Refrain]
Ohh.. It's like you're losing a winning game,
But that's no shame, 'coz..


[Chorus]
In other words, in other worlds,
I'd still choose you, over and over,
Twice on Sundays, ten out of ten,
Ohh.. don't need to pretend,
That in other words, I love you,
And in other worlds, I'll tell you,
It won't be easy to forget,
'Coz I'll be having no regrets,
Ohh.. love..
Ohh.. love..

[Bridge]
If you find yourself in a pinch,
Don't you ever regret,
You'll learn the most from the toughest lessons,
And if you ever find yourself back to square one,
Well.. don't stop. "You know what to do now, right??"

[Chorus]
In other words, in other worlds,
I'd still choose you, over and over,
Twice on Sundays, ten out of ten,
Ohh.. don't need to pretend...

[Chorus]
In other words, in other worlds,
I'd still choose you, over and over,
Twice on Sundays, ten out of ten,
Ohh.. don't need to pretend,
That in other words, I love you,
And in other worlds, I'll tell you,
It won't be easy to forget,
'Coz I'll be having no regrets,
Ohh.. love,
Ohh.. love,
Ohh.. love,
Ohh.. is this what love is?
Ohh.. love..`},{id:"7",title:"Nobody Knows",color:"from-fuchsia-600 to-rose-700",audio:"/music/Nobody Knows/Nobody Knows - 3rd Harmonik.mp3",story:"A soulful track about a secret connection between two people. When time slows down and the world fades away, only those involved truly know the depth of the moment.",lyrics:`Nobody Knows - 3rd Harmonik

[Verse 1]
Do you believe,
In destiny?
One melody,
Is all you need,
All too familiar,
This rainy night,
Hold on tight,
You're safe with me..

[Chorus]
And time just slows down, 
and nobody knows,
Just, you and me,
The way that our eyes,
Meet, like they know,
Each other from,
A long time ago,
And nobody knows,
Just how this goes,
Ohh.. nobody knows, yeah..
Nobody knows..

[Verse 2]
Do you believe,
In miracles?
Just one day,
Is all we need,
Nothing similar,
This cloudy day,
Cold night ahead,
You'll be safe with me..

[Chorus]
And time just slows down, 
and nobody knows,
Just, you and me,
The way that our eyes,
Meet, like they know,
Each other from,
A long time ago,
And nobody knows,
Just how this goes,
Ohh.. nobody knows, yeah..
Nobody knows..

[Bridge]
Nah, nah, nah, nah..
Nobody knows..
Nah, nah, nah, nah..
Only you..

And time just slows,
Down, and nobody knows...

[Chorus]
And time just slows down, 
and nobody knows,
Just, you and me,
The way that our eyes,
Meet, like they know,
Each other from,
A long time ago,
And nobody knows,
Just how this goes,
Ohh.. nobody knows, yeah..
Nobody knows..

[Final]
And time just slows,
Down, and nobody knows,
Just, you and me,
The way it flows,
Just like no other,
There is no other,
It's you and me,
And nobody knows,
Just how this goes,
Ohh.. nobody knows, yeah..
Nobody knows..

Nah, nah, nah, nah.. 
Nobody knows..
Nah, nah, nah, nah..
Only you..`},{id:"8",title:"Guni-Guni",color:"from-blue-600 to-indigo-700",audio:"/music/Guni-Guni/Guni-Guni - 3rd Harmonik.mp3",story:"Is it real or just an illusion? 'Guni-Guni' explores the haunting uncertainty of a one-sided attraction, where every smile and every glance feels like a dream you're afraid to wake up from.",lyrics:`Guni-guni - 3rd Harmonik

[Verse 1]
Gusto kong malaman,
Laman ng isip mo,
Ano ba kaya, 'di mabibigla,
Biglang nabahala,
Ako ba kaya'y napansin? Oh eto'y halik nalang sa hangin?
Pwede bang 'wag mong sabihin?
Sabihin ang 'di ko gustong marinig,
Subalit teka lang, sige nalang,
Ibato mo na sa akin

Gustong magkunwari,
Na wala kong paki,
Gusto ko lang naman masabi mo, na ako'y madaling kausap,
Pero sige na, tatanggapin ko na

[Refrain]
Ang akin lang naman,
Ay iyong mapagbigyan

[Chorus]
Oh, bini-bini kong,
Kay tamis ng ngiti,
Para bang kailan lang, kailan lang kitang nasilayan,
Kay bilis ng panahon,
Para bang akoy dinadala, dinadala ng mga,
Sobra kong pag-iisip, 'di sa pagpapantasya,
Kundi sobra kong hanga sa'yo, pwede bang,
Masilayan ka ulit? Nang mahimbing ang tulog ko, ohh..
Isa na namang guni-guni,
Isa na namang guni-guni,

[Verse 2]
Gusto kong malaman,
Kung saan patungo,
Saan ba kaya, 'di mabibigla,
Biglang naliligaw,
Ako na ba'y babangon na? Oh eto'y puro lang salita?
Pwede bang 'wag iisipin?
Ang gulo gulo ng isipan,
Teka lang, sige nalang,
Ibato mo na sa akin

[Refrain]
Ang akin lang naman,
Ay iyong mapagbigyan

[Chorus]
Oh, bini-bini kong,
Kay tamis ng ngiti,
Para bang kailan lang, kailan lang kitang nasilayan,
Kay bilis ng panahon,
Para bang akoy dinadala, dinadala ng mga,
Sobra kong pag-iisip, 'di sa pagpapantasya,
Kundi sobra kong hanga sa'yo, pwede bang,
Masilayan ka ulit? Nang mahimbing ang tulog ko, ohh..
Isa na namang guni-guni,
Isa na namang guni-guni,

[Bridge]
Ah.. ayan na naman ako,
Pero sasabihin ko na sa'yo,
Para itong guni-guni ko'y mabu-buo,
Magkaka-totoo rin ito..

[Final]
Oh, bini-bini kong,
Kay tamis ng ngiti,
Para bang kailan lang, kailan lang kitang nasilayan,
Kay bilis ng panahon,
Para bang akoy dinadala, dinadala ng mga,
Sobra kong pag-iisip, 'di sa pagpapantasya,
Kundi sobra kong hanga sa'yo, pwede bang,
Masilayan ka ulit? Nang mahimbing ang tulog ko, ohh..
Isa na namang guni-guni,
Isa na namang guni-guni,
Isa na namang guni-guni,
Isa na namang guni-guni,`},{id:"9",title:"Hello, Heartache!",color:"from-green-500 to-cyan-600",audio:"/music/Hello, Heartache!/Hello, Heartache! - 3rd Harmonik.mp3",story:"An upbeat yet poignant track about the vulnerability of admiration from afar. It's that feeling when you're so enthralled by someone that even a glance feels like a beautiful blow to the heart.",lyrics:`Hello, Heartache! - 3rd Harmonik

[Verse 1]
Watching from afar, 
It's hard to believe, 
Your beauty's so vivid, 
It's like a dream, 
I'm drawn to your essence, 
So effortlessly, 
Pardon my gaze, 
But you're all that I see,

Your laughter’s like music, 
It plays in my mind, 
A tune so flawless, 
It's one of a kind, 
Your smile lights the room, 
In a way so fine, 
Enthralled by your presence, 
In every single line,

[Refrain]
You're always on my mind, ohh... 
I can't think clearly... 

[Chorus]
Hello, heartache!
It's me once more,
Wishing this time,
She’d notice me,
Oh, the irony!
I feel I might break,
If she looks my way,
I might just fade,
Hello, heartache!
It's you again,
Wishing this time,
It will never end,
Forgive me but, I must turn away,
Damn... damn... guess I have to turn away,

[Verse 2]
Every step you take, 
Is like a dance so sweet, 
Your grace and charm, 
Make my heart skip a beat, 
Your eyes like stars, 
In a sky so deep, 
I get lost in their shine, 
And I don't even mind,

The way you brush your hair, 
Behind your ear so neat, 
Makes my heart race, 
Every time we meet, 
Your voice is a whisper, 
In a gentle breeze, 
It soothes my restless soul, 
And puts my mind at ease,

[Refrain]
You're always on my mind, ohh... 
I can't think clearly... 

[Chorus]
Hello, heartache!
It's me once more,
Wishing this time,
She’d notice me,
Oh, the irony!
I feel I might break,
If she looks my way,
I might just fade,
Hello, heartache!
It's you again,
Wishing this time,
It will never end,
Forgive me but, I must turn away,
Damn... damn... guess I have to turn away,

[Bridge]
Will I find the courage, 
To let you know? 
Or am I bound, 
To let these feelings grow? 
In this world of light, 
Where hope feels strong, 
I keep believing, 
That with you I belong,

[Refrain]
You're always on my mind, ohh...
I can't think clearly...

[Chorus]
Hello, heartache!
It's me once more,
Wishing this time,
She’d notice me,
Oh, the irony!
I feel I might break,
If she looks my way,
I might just fade,

[Final]
Hello, heartache!
It's me once more,
Wishing this time,
She’d notice me,
Oh, the irony!
I feel I might break,
If she looks my way,
I might just fade,
Hello, heartache!
It's you again,
Wishing this time,
It will never end,
Forgive me but, I must turn away,
Damn... damn... guess I have to turn away,

[Outro]
Watching from afar,
It's hard to believe,
Your beauty's so vivid,
It's like a dream,
I'm drawn to your essence,
So effortlessly,
Pardon my gaze,
But you're all that I see..`},{id:"10",title:"I Guess We'll Never Know",color:"from-gray-800 to-black",audio:"/music/I Guess We'll Never Know/I Guess We'll Never Know - 3rd Harmonik.mp3",story:"A song of regret and 'what ifs'. It's an apology for disappearing when it mattered most and the painful acceptance that some questions will never have answers.",lyrics:`[Hook]
La, la, la..
La, la, la..
La, la, la..
La, la, la..

[Verse 1]
I'm sorry when,
I disappeared,
When we needed it the most,
I couldn't hurt you any longer,
There's no excuse, although I used,
The last of my strength,
Just to hold it together,
I'm sorry, if..

[Refrain]
It hurts more than it helps,
If only we can,

[Chorus]
I guess we'll never know,
How would our love grow,
I guess we'll never know,
How we could get by, no,
I can't get out of this misery,
It's so much for me,
And too much for you,
But both could never throw,
I guess we'll never know..
Ohh.. we'll never know..

[Verse 1]
I'm sorry when,
I got used to it,
You needed me to be strong,
I did, but I did so wrong,
Not knowing, I was coping,
And I was hoping,
To hold you longer,
I'm sorry, if..

[Refrain]
It hurts more than it helps,
If only we can,

[Chorus]
I guess we'll never know,
How would our love grow,
I guess we'll never know,
How we could get by, no,
I can't get out of this misery,
It's so much for me,
And too much for you,
But both could never throw,
I guess we'll never know..
Ohh.. we'll never know..

[Bridge]
Our hearts we're broken from the start,
All these lies, and the deceptions,
We're breaking us apart,
If we can be honest and forgive,
Give more so we could live,
Our lives not wanting more,
We always wanted more..

[Chorus]
I guess we'll never know,
How would our love grow...

[Chorus higher key]
I guess we'll never know,
How would our love grow,
I guess we'll never know,
How we could get by, no,
I can't get out of this misery,
It's so much for me,
And too much for you,
But both could never throw,

I guess we'll never know..
Ohh.. we'll never know..

[Hook]
La, la, la..
La, la, la..
La, la, la..
La, la, la..

I guess we'll never know..
Ohh.. we'll never know..
Ohh..`},{id:"11",title:"Jopay",color:"from-violet-600 to-purple-900",audio:"/music/Jopay/Jopay (Cover) - 3rd Harmonik.mp3",story:"A heartfelt cover of the classic 'Jopay'. It captures the sense of escapism and comfort found in the presence of someone who makes the 'real world' feel a bit more bearable.",lyrics:`[Verse 1]
Jopay, kamusta ka na?
Palagi kitang pinapanood, nakikita
Jopay, pasensya ka na
Wala rin kasi akong makausap at kasama

[Pre-Chorus]
'Wag ka nang mawala ('Wag ka nang mawala)
'Wag ka nang mawala ('Wag ka nang mawala)
Ngayon

[Chorus]
Dadalhin kita sa aming bahay
'Di tayo mag-aaway
Aalis tayo sa tunay na mundo
Dadalhin kita sa aming bahay
'Di tayo mag-aaway
Aalis tayo sa tunay na mundo

[Verse 2]
Jopay, kamusta na ba?
Buti ka pa, palagi kang masaya
Jopay, buti na lang
Nariyan ka, hindi na ako nag-iisa

[Pre-Chorus]
'Wag ka nang mawala ('Wag ka nang mawala)
'Wag ka nang mawala ('Wag ka nang mawala)
Ngayon

[Chorus]
Dadalhin kita sa aming bahay
'Di tayo mag-aaway
Aalis tayo sa tunay na mundo
Dadalhin kita sa aming bahay
'Di tayo mag-aaway
Aalis tayo sa tunay na mundo
Sa tunay na mundo

[Instrumental Break - Guitar Solo]

[Pre-Chorus]
'Wag ka nang mawala ('Wag ka nang mawala)
'Wag ka nang mawala ('Wag ka nang mawala)
Ngayon

[Chorus]
Dadalhin kita sa aming bahay
'Di tayo mag-aaway
Aalis tayo sa tunay na mundo
Dadalhin kita sa aming bahay
'Di tayo mag-aaway
Aalis tayo sa tunay na mundo
Sa tunay na mundo`},{id:"12",title:"Kailan, Sinta",color:"from-lime-500 to-green-700",audio:"/music/Kailan, Sinta/Kailan, Sinta - 3rd Harmonik.mp3",story:"A poignant ballad about being the one who's always there, waiting in the shadows while the person you love chases others who only bring them pain. It's a plea for recognition and a question that lingers: 'When will you notice me?'",lyrics:`Kailan, Sinta? - 3rd Harmonik

[Verse 1]
Mata mo'y laging sa iba nakatuon
'Di man lang mapansin, ako'y naririto ngayon
Bawat ngiti ko, bawat alay na pansin
Parang hangin lang, sa'yo'y dumadaan din

Nakikita ko, ang sakit sa 'yong tingin
Kapag ika'y iniwan, luha'y 'di mapigilan
Paulit-ulit na lang, eksenang kay pait
Bakit ba sa kanila, puso mo'y kumakapit?

[Pre-Chorus]
Isang bulong na lang, sana'y iyong marinig
Ang pusong ito, sa'yo lang umiibig
Ngunit 'di mo alam, o sadyang nagbubulag-bulagan?
 
[Chorus]
Hindi mo ba nakikita, ang pag-ibig kong laan?
Laging narito, sa'yong tabi, nag-aabang
Habang ika'y lumuluha, sa piling ng iba
Sila'y panandalian, ako'y nandito, sinta
Oh, kailan mo ba mapapansin, itong aking damdamin?

[Verse 2]
Sinubukan ko nang lumayo, iwasan ka
Pero paano, kung ikaw ang laging hanap-hanap pa?
Kahit 'di mo masabi, na ako'y kaibigan man lang
Sa anino mo'y kuntento, kahit nasasaktan

[Pre-Chorus]
Isang sulyap mo lang, sana'y mapunta sa akin
Ang pusong ito, pagod nang manalangin
Ngunit 'di mo alam, o sadyang nagbubulag-bulagan?

[Chorus]
Hindi mo ba nakikita, ang pag-ibig kong laan?
Laging narito, sa'yong tabi, nag-aabang
Habang ika'y lumuluha, sa piling ng iba
Sila'y panandalian, ako'y nandito, sinta
Oh, kailan mo ba mapapansin, itong aking damdamin?

[Bridge]
Bakit ba sila pa rin ang iyong pinipili?
Mga pusong bato, walang tunay na silbi
Kung bubuksan mo lang, ang 'yong mga mata
Makikita mong ako, ang tunay na nagmamahal sa'yo, sinta

[Final]
Hindi mo ba nakikita, ang pag-ibig kong laan?
Laging narito, sa'yong tabi, nag-aabang
Habang ika'y lumuluha, sa piling ng iba
Sila'y panandalian, ako'y nandito, sinta
Oh, kailan mo ba mapapansin, itong aking damdamin?

[Outro]
Kailan, sinta?...
Hindi mo ba nakikita?...
Narito lang ako...`},{id:"13",title:"Makulimlim",color:"from-slate-500 to-zinc-700",audio:"/music/Makulimlim/Makulimlim - 3rd Harmonik.mp3",story:"A song about the weight of emotions and the grey, cloudy days of the soul. It captures the feeling of being stuck in a past that hurts, while hoping for a new dawn.",lyrics:`Makulimlim - 3rd Harmonik

[Verse 1]
Naglalakad sa dilim,
Nagbabakasakali ding,
May makapansin,
Aking mundo'y makulimlim,
Pumapatuloy ang agos ng oras,
Tinataboy ang nakaraan, ika'y luhaan,
Ikay nasaktan, at nauwing duguan,
Gustong itapon ang kapos na larawan,

[Refrain]
Hindi ka bilanggo,
Ito din ay maglalaho..

[Chorus]
Kay bigat ng damdamin,
Kasingbigat ng papatak na ulan,
Sa gitna ng kawalan,
Makulimlim ang aking mundo,
Kay hirap pala taposin,
Kahit tapos na, pero sige na,
Kahit mahirap, parang pangarap,
Makulimlim ang aking mundo..
Ohh..

[Verse 2]
Tinatanaw bagong umaga,
Nag-uumpisa sa wala,
Pero nakakapagtaka,
Naubusan na nga ba?
Malayo ang tanaw, pero nakatitig
Sa dating ako,
Sa bagong ako..

[Refrain]
Hindi ka bilanggo,
Ito din ay maglalaho..

[Chorus]
Kay bigat ng damdamin,
Kasingbigat ng papatak na ulan,
Sa gitna ng kawalan,
Makulimlim ang aking mundo,
Kay hirap pala taposin,
Kahit tapos na, pero sige na,
Kahit mahirap, parang pangarap,
Makulimlim ang aking mundo..
Ohh..

[Bridge]
Ibang-iba ang kalangitan,
Tila uulan,
Tila babagsak,
At tila ba uubosin..

[Chorus]
Kay bigat ng damdamin,
Kasingbigat ng papatak na ulan,
Sa gitna ng kawalan,
Makulimlim ang aking mundo,
Kay hirap pala taposin,
Kahit tapos na, pero sige na,
Kahit mahirap, parang pangarap,
Makulimlim ang aking mundo..`},{id:"14",title:"My Beautiful Disaster",color:"from-red-700 to-rose-950",audio:"/music/My Beautiful Disaster/My Beautiful Disaster - 3rd Harmonik.mp3",story:"Falling for someone who is 'extra special' and a 'beautiful disaster'. This song celebrates the chaotic, overwhelming attraction that feels like both a blast to the heart and a dream come true.",lyrics:`My Beautiful Disaster - 3rd Harmonik

[Verse 1]
I didn't think it would end this way,
My hopeful mind, it's beginning to sway,
I came across a,
Beautiful disaster, a pretty mess, oh, so gangster,
I didn't think that we would start it off,
A simple glance, and when you look my way,
I feel like it's,
A heavy-hitting blaster, it's not a miss, oh, please don't stare..

[Refrain]
Found myself in a swirl,
And, you know what?

[Chorus]
Never will I,
Ever will,
Forever, should,
I ever think,
Of disgracing myself, by saying that,
It's all too easy, just by loving you,
I never should, or ever would,
Be hoping that,
You will look easily,
Because you,
You're extra special, you..

[Verse 2]
I always hoped it would end this way,
Oh.. my colorful mind, it's beginning to dream,
I came across a,
Beautiful disaster, a neverending kiss, yeah, she's so gangster,
I always hoped that I could talk to you,
A simple conversation.. don't mind my admiration,
'Coz for sure, it's,
Truly something different, it's what I meant, oh, how it would go..

[Refrain]
Found myself in a swirl,
And, you know what?

[Chorus]
Never will I,
Ever will,
Forever, should,
I ever think,
Of disgracing myself, by saying that,
It's all too easy, just by loving you,
I never should, or ever would,
Be hoping that,
You will look easily,
Because you,
You're extra special, you..

[Bridge]
A beautiful disaster,
It's always more painful to fall,
If your dreams are this tall,
A hope for everafter,
It's more difficult in here,
You don't wanna disappear..

[Chorus]
Never will I,
Ever will,
Forever, should,
I ever think,
Of disgracing myself, by saying that,
It's all too easy, just by loving you,
I never should, or ever would,
Be hoping that,
You will look easily,
Because you,
You're extra special, you..

[Chorus]
Never will I,
Ever will,
Forever, should,
I ever think,
Of disgracing myself, by saying that,
It's all too easy, just by loving you,
I never should, or ever would,
Be hoping that,
You will look easily,
Because you,
You're extra special, you..
You're extra special, you..
My beautiful disaster, you..
My happy everafter, you..`},{id:"15",title:"Pagtatapos",color:"from-blue-900 to-indigo-950",audio:"/music/Pagtatapos/Pagtatapos - 3rd Harmonik.mp3",story:"The painful end of a story. 'Pagtatapos' is about the exhaustion of trying to hold on to something that is already slipping away, where silence and distance take over the space once filled with laughter.",lyrics:`Pagtatapos - 3rd Harmonik

[Verse 1]
Wala nang pumapatak na luha, 'di na tulad ng dati,
Tanging pagod na lang ang nararamdaman ng pusong sa'yo nagsilbi,
Walang ginagawa pero bakit ganito? Para bang ako'y nabibigatan,
'Di ko naman sinasadya, pero para bang 'di ko na kayang lumaban.

Noong simula, matamis ang lahat, parang walang katapusan,
Lahat ng nakikita natin, puno ng kulay at kasiyahan,
Pero ngayon, kay dilim na ng daan, parang ang bagal ng oras,
Para bang patungo sa wala, kung meron mang dulo, baka patungong labas.

[Refrain]
Ano, kaya pa ba?
Ano, kaya pa ba?

[Chorus]
Pipilitin pa ba ang puso,
Kapag ito na ay sumusuko?
Hindi ko na kaya pang magkunwari pa,
Na ako'y 'di nasasaktan,
Pipiliin pa bang mabigo muli?
Kapag alam mo na anong huli?
'Wag na tayong magbiroan,
Ayoko nang umasa, ayoko nang maniwala,
Kahit ayaw kong mawala ka..

[Verse 2]
Dati mong sandalan, ngayo’y pasan ko na parang pabigat,
Wala namang sugat pero bakit ang sakit, parang may pilat,
Naka-ukit sa alaala na dati'y puno ng pag-asa,
Ngunit ngayon, para bang iniwan na lang sa gitna ng wala.

Lahat ng pinaniwalaan natin, bigla na lang naparam,
Akala ko panghabambuhay, pero ba't parang pinaglalaruan ng tadhana lang?
Sino’ng mag-aakalang ganito lang kabilis mabura?
Sino’ng mag-aakalang tayo’y babagsak nang ganito kabilis mawala?

Dati ang dali mong kausap, kahit anong oras, kahit anong bagay,
Ngayon, ni kamustahin ka, hindi ko na magawa, hindi ko na mahanap ang dating ikaw,
Pinipilit kong ngumiti, pero para bang hindi ko na kaya,
Masakit isipin na tayo’y nagkasama, pero ngayon, parang wala nang halaga.

[Refrain]
Ano, kaya pa ba?
'Lam nating ang hirap na...

[Chorus]
Pipilitin pa ba ang puso,
Kapag ito na ay sumusuko?
Hindi ko na kaya pang magkunwari pa,
Na ako'y 'di nasasaktan,
Pipiliin pa bang mabigo muli?
Kapag alam mo na anong huli?
'Wag na tayong magbiroan,
Ayoko nang umasa, ayoko nang maniwala,
Kahit ayaw kong mawala ka..

[Bridge]
Pinakamahirap magsimula kung 'di mo alam kung saan patungo,
Para bang sinusubukan mong buuin ang kwento na wala nang dulo,
Pa’no kung ito na ‘yon? Pa’no kung wala na talagang kasunod?
Para bang iniwan tayong dalawa sa ere, 'di na natin mabuo ang buhol.

Saan na tayo dadalhin ng ganitong damdamin?
Tayo ba’y magpapatuloy o ito na ang ating hangin?
Alam kong mahirap, pero 'di ko na kaya,
Mas pipiliin ko nang lumaya kaysa manatili sa sakit na wala nang halaga.

[Chorus]
Pipilitin pa ba ang puso,
Kapag ito na ay sumusuko?
Hindi ko na kaya pang magkunwari pa,
Na ako'y 'di nasasaktan,
Pipiliin pa bang mabigo muli?
Kapag alam mo na anong huli?
'Wag na tayong magbiroan,
Ayoko nang umasa, ayoko nang maniwala,
Kahit ayaw kong mawala ka..

[Outro]
Kahit ayaw ko,
Kung ayaw mo,
Tama na,
Tama ka..
Kahit ayaw ko,
Kung ayaw mo,
Tama na,
Tama ka..`},{id:"16",title:"Pahina",color:"from-emerald-600 to-teal-800",audio:"/music/Pahina/Pahina - 3rd Harmonik.mp3",story:"You're the soul that changes everything. 'Pahina' is about being a page in someone's book that was almost overlooked, but ends up being the most significant one. It's about unspoken feelings and late realizations.",lyrics:`Pahina - 3rd Harmonik

[Intro]
Hmmm.. ohhh...
Hmmmm..

[Verse 1]
Dati ay naghihintay,
Nag-aabang sa wala,
Na para bang naa-abala,
Nakatitig kahit saan,
Kahit saan nalang napupunta,
Naguguluhan kong isipan..

Sa tuwing naa-alala ko mga lumipas na araw,
Mapaglaro nga talaga ang panahon, tinutulak kahit na ayaw,
Pero 'di ko naman maipagkakait,
Kung ang tadhana ay papalapit,

[Rap]
Kung ang kilos ko’y parang kuliglig sa dilim ng aliwan,
Tahimik pero gumugulo sa isip ng hindi alam.
Guhit ng palad, pilit kong binabasa nang pabaliktad,
Baka sakaling makuha ko kung bakit ako ang nadilat.

Kandado ang salitang ‘di mo maririnig sa bukambibig,
Kahit binigkas na—parang lihim pa rin sa panaginip.
Pagod ang tinig, pero hindi pa rin tinatalikuran,
Ang pag-ikot ng silab—mga salitang walang kaligtasan.

[Pre-chorus]
Dumating ang isang kaluluwa,
'Di hamak na kay ganda ng mga mata,
Kasing ganda ng kanyang ngiti,
Pati ako tuloy nabibighani,

[Chorus]
Ohh, patawad kung hindi ko nasabi,
Ang mga dapat kong sinabi,
Nung ako pa'y isang walang alam,
Walang kamuwang-muwang,
Hindi ko man lang,
Oh, 'di ko man lang,
Naamin sayo, biglang nalilito,
Hindi ito ang dulo,
Patawad.. minahal kita,
Noon - hanggang ngayon..

[Verse 2 – Rap]
Sa pagitan ng gabi at ng ala-ala,
Doon ako laging napapadpad, tila ba wala nang pabalik.
Hawak ang mga salitang ‘di mo kailanman narinig,
Pinipiga sa puso, pero ‘di mailabas sa bibig.

Tumatakbo sa oras na hindi ko mahabol,
Parang aninong humahagibis sa likod ng alon.
Pinili mong lumakad sa liwanag,
Ako’y naiwan sa dilim—bitbit ang bawat panaghoy at saglit.

'Di ako bayani sa kwento mong buo na,
Ako 'yung pahina'ng laging nababalewala.
Pero kahit wasak, sinusulat pa rin kita,
Sa tulang ‘di ko kayang tapusin, kahit alam kong wala ka na.

[Pre-chorus]
Dumating ang isang kaluluwa,
'Di hamak na kay ganda ng mga mata,
Kasing ganda ng kanyang ngiti,
Pati ako tuloy nabibighani,

[Chorus]
Ohh, patawad kung hindi ko nasabi,
Ang mga dapat kong sinabi,
Nung ako pa'y isang walang alam,
Walang kamuwang-muwang,
Hindi ko man lang,
Oh, 'di ko man lang,
Naamin sayo, biglang nalilito,
Hindi ito ang dulo,
Patawad.. minahal kita,
Noon - hanggang ngayon..

[Hook]
[Pre-chorus]
Dumating ang isang kaluluwa,
'Di hamak na kay ganda ng mga mata,
Kasing ganda ng kanyang ngiti,
Pati ako tuloy nabibighani,

[Chorus]
Ohh, patawad kung hindi ko nasabi,
Ang mga dapat kong sinabi,
Nung ako pa'y isang walang alam,
Walang kamuwang-muwang,
Hindi ko man lang,
Oh, 'di ko man lang,
Naamin sayo, biglang nalilito,
Hindi ito ang dulo,
Patawad.. minahal kita,
Noon - hanggang ngayon..

[Outro]
Pahina nang pahina ang paghinga, pero ngayo'y nag-iiba kasi iba ka nga,
Sa huling yugto ako ang magdudulot ng saya't ganda, pero hindi kontento sa kwento, ako ang elemento,
Na syang magpapahiwatig..
Na may kasunod pang pahina.`},{id:"17",title:"Perfect Time",color:"from-lime-600 to-emerald-700",audio:"/music/Perfect Time/Perfect Time - 3rd Harmonik.mp3",story:"Staring at the ceiling, remembering the lingering pain and the curious conversations. This song is about waiting for the 'Perfect Time' to say the things that matter most, trusting that tonight is all we need.",lyrics:`Perfect Time - 3rd Harmonik

[Verse 1]
Staring all day at the cieling,
Remembering all the lingering pain,
I still read the conversations,
Where we were so curious, and you were so mysterious,

The time is perfect,
It's Sunday, and I hear our songs on the radio,
Almost fell asleep,
Thinking about this way too deep.

[Refrain]
What I would give just to have it with you,
What I would give just to be with you..

[Chorus]
Oh.. one day we'll know,
Someday it will show,
No need to rush, let it ride,
Don't let it die, let it fly,
'Coz all we need is trust,
That's all we need tonight,
Ohh.. tonight,
All we need is,
Ohh.. tonight..

[Verse 2]
Waiting all day for your message,
Just thinking 'bout how things could have gone south,
But I read the conversations,
Where we were so dramatic, it's funny 'coz we always get by,
Yeah.. we always get by, ohh..

[Refrain]
What I would give just to have it with you,
What I would give just to be with you..

[Chorus]
Oh.. one day we'll know,
Someday it will show,
No need to rush, let it ride,
Don't let it die, let it fly,
'Coz all we need is trust,
That's all we need tonight,
Ohh.. tonight,
All we need is,
Ohh.. tonight..

[Bridge]
No one could ever, ever have,
The things that they really, really want,
But it's the perfect time to say,
I need to hear you say,
That I need you.. today, and tonight..
Ohhh.. all we need is, tonight..
Ohhh.. all we need is, tonight..

[Chorus]
Oh.. one day we'll know,
Someday it will show,
No need to rush, let it ride,
Don't let it die, let it fly,
'Coz all we need is trust,
That's all we need tonight,
Ohh.. tonight,
All we need is,
Ohh.. tonight..

That's all we need tonight,
Ohh.. tonight,
All we need is,
Ohh.. tonight..`},{id:"18",title:"Sa Ngalan Ng Pagibig",color:"from-red-600 to-rose-700",audio:"/music/Sa Ngalan Ng Pagibig/Sa Ngalan Ng Pagibig - 3rd Harmonik (Acoustic).mp3",story:"A powerful acoustic rendition of a song about eternal waiting. In the name of love, one is willing to wait until the end of forever, even when the heart has nothing left to feel.",lyrics:`[Verse 1]
Hanggang kailan ako maghihintay
Na para bang wala nang papalit sa'yo?
Nasa'n ka man, sigaw ng puso ko'y
Ikaw hanggang ngayon, ooh-woah-oh

[Pre-Chorus]
Kung sana lamang ay nakita mo
Ang lungkot sa'yong ngiti
Isang umagang 'di ka nagbalik
Gumising ka at nang makita mo
Ang tamis ng sandali
Ng kahapong 'di magbabalik

[Chorus]
Hanggang sa dulo ng ating walang hanggan
Hanggang ang puso'y wala nang nararamdaman
Kahit matapos ang magpakailanpaman
Ako'y maghihintay sa ngalan ng pag-ibig

[Verse 2]
Hanggang kailan ako maghihintay
Na para bang walang iba sa piling mo?
Nasa'n ka man, sigaw ng puso ko
Ay ang pangalan mo, ooh-woah-oh

[Pre-Chorus]
Kung sana lamang ay nakita mo
Ang lungkot sa'yong ngiti
Isang umagang 'di ka nagbalik
Gumising ka at nang makita mo
Ang tamis ng sandali
Ng kahapong 'di magbabalik

[Chorus]
Hanggang sa dulo ng ating walang hanggan
Hanggang ang puso'y wala nang nararamdaman
Kahit matapos ang magpakailan pa man
Ako'y maghihintay sa ngalan ng pag-ibig

[Bridge]
Hanggang kailan pa ba magtitiis?
Nalunod na sa kaiisip
Huling kapiling ka'y sa aking panaginip
Ikaw mula noon
Ikaw hanggang ngayon

[Interlude]
Hanggang sa dulo ng ating walang hanggan
Hanggang ang puso'y wala nang maramdaman

[Chorus]
Hanggang sa dulo ng ating walang hanggan
Hanggang ang puso'y wala nang naramdaman
Kahit matapos ang magpakailan pa man
Ako'y maghihintay sa ngalan ng pag-ibig
Hanggang sa dulo ng ating walang hanggan (Ako'y maghihintay, ako'y maghihintay)
Hanggang ang puso'y wala nang nararamdaman (Ako'y maghihintay sa ngalan ng pag-ibig)
Kahit matapos ang magpakailan pa man (Ako'y maghihintay, ako'y maghihintay)
Ako'y maghihintay sa ngalan ng pag-ibig mo`},{id:"19",title:"Totoo",color:"from-blue-500 to-cyan-600",audio:"/music/Totoo/Totoo (Acoustic) - 3rd Harmonik.mp3",story:"A song about the clarity of truth in a relationship. 'Totoo' captures the moments of realization when everything feels right, magkasabay sa basang kalsada, and the world is finally in focus.",lyrics:`Totoo

[Verse 1]
Walang kapantay, ito ang pinaka  
Pinakamagandang araw sa aking gunita  
Stereo'y tumutunog, ramdam ang musika  
Kasabay ng tibok ng pusong namimiss ka  

Mahinang ilaw, bumabagay sa gabi  
Bawat saglit, parang ayaw ko nang umuwi  
Amoy ng buhok mo, iniikot sa daliri  
Nakakahalina, parang panaginip muli  

[Pre-chorus]  
Oras sa orasan, ‘di natin napansin  
Nang ako'y ma-mulat, huli na pala ang dating  
Naglalakad magkasabay sa basang kalsada  
Hanggang sa harap ng gate na nakasarado na  

[Chorus]  
Kaya't nilampasan ko ang lahat, at pinapasok kita
Sa mundo kong ikaw ang sentro, mayayakap kita  
Walang katumbas bawat galaw, tila ‘di bibitaw  
At nang hinagkan mo ako, tunay ang nadama 

[Post-chorus]  
Alam kong iyun ay totoo  
Iyun ay totoo, oo  
Alam kong iyun ay totoo  
Iyun ay totoo, oo  

[Verse 2]  
Hatinggabi, malamig pero di ko ramdam  
Sa yakap mo pa lang, ako’y naliligayahan  
Tahimik ang paligid, pero tayong dal’wa  
Parang may sariling mundo na nilikha  

Mga mata mong nagsasabing ‘di ka aalis  
Parang eksena sa pelikulang matamis  
Lahat ng sandali, parang bumabagal  
Ayokong matapos, ayokong magpaalam  

[Pre-chorus]  
Oras sa orasan, ‘di natin napansin  
Nang ako'y ma-mulat, huli na pala ang dating  
Naglalakad magkasabay sa basang kalsada  
Hanggang sa harap ng gate na nakasarado na  

[Chorus]  
Kaya't nilampasan ko ang lahat, at pinapasok kita
Sa mundo kong ikaw ang sentro, mayayakap kita  
Walang katumbas bawat galaw, tila ‘di bibitaw  
At nang hinagkan mo ako, tunay ang nadama  

[Bridge]  
Kung ako'y babalik sa panahon  
Paulit-ulit ka paring pipiliin  
Dahil sa puso ko, walang alinlangan  
Lahat ng nangyari,
Lahat ng pagmamay-ari,
I-aalay ko sa'yo (Ohhh..)

[Final]  
Kaya't nilampasan ko ang lahat, at pinapasok kita (pinapasok kita)
Sa mundo kong ikaw ang sentro, ikaw ang totoo  (ikaw ang totoo)
Walang katumbas bawat segundo, tila ‘di matatapos  ('di matatapos)
At nang hinagkan mo ako, iyun ay totoo

[Outro]  
Alam kong iyun ay totoo  
Iyun ay totoo, oo  
Alam kong iyun ay totoo  
Iyun ay totoo, oo`},{id:"20",title:"Undo",color:"from-fuchsia-600 to-red-700",audio:"/music/Undo/Undo - 3rd Harmonik (2025).mp3",story:"The desperate wish to undo mistakes and turn back time. 'Undo' is a raw, emotional track about the regret of words said and the distance that grows after a sudden exit.",lyrics:`Undo - 3rd Harmonik

Ohh..

[Verse 1]
I don't have much to say,
You're leaving anyway,
What can I do to make you stay?
Don't know when's the right time and this broken heart of mine,
Is bleeding so much that I can't undo what's done,

[Pre-chorus]
I do apologize,
You know I realize,

[Chorus]
You walked out of my life,
If I can just make it right,
But what is it to fight when it's all in broken pieces?
And the pain, it hurts just like a knife,
If I can just hold you tight,
I will hold you till forever,
..why am I too late? Ohh..
Why was I too late?
Why was I too late?

[Verse 2]
What's done is done,
You're leaving anyway,
What can I do to change the way, that I said the things that make you think that I don't care?
I have learned so much,
And I can't undo what's done..

[Chorus]
You walked out of my life,
If I can just make it right,
But what is it to fight when it's all in broken pieces?
And the pain, it hurts just like a knife,
If I can just hold you tight,
I will hold you till forever,
..why am I too late? Ohh..
Why was I too late?
Why was I too late?

[Chorus 2]
You walked out of my life,
If I can just make it right,
But what is it to fight when it's all in broken pieces?
And the pain, it hurts just like a knife,
If I can just hold you tight,
I will hold you till forever,
..why am I too late? Ohh..
Why was I too late?
Why was I too late?

[Final]
You walked out of my life,
If I can just make it right,
But what is it to fight when it's all in broken pieces?
And the pain, it hurts just like a knife,
If I can just hold you tight,
I will hold you till forever,
..why am I too late? Ohh..
Why was I too late?
Why was I too late?`},{id:"21",title:"Aking Prinsesa",color:"from-pink-500 to-rose-600",audio:"/music/Aking Prinsesa/Aking Prinsesa - 3rd Harmonik.mp3",story:"A fairytale admiration of someone who feels like a princess from another world. It's about the feeling of being a simple soldier in awe of someone's unattainable beauty.",lyrics:`Aking Prinsesa - 3rd Harmonik

[Verse 1]
Isang hindi mapaliwanag,
Na nararamdaman,
Gusto kong lumapit,
Pero suntok sa buwan,
Hindi kapani-paniwala,
Ang iyong kagandahan,
Oh, aking prinsesa,
Na hindi ko mahawakan,

[Refrain]
Biglang bumagal,
Ang oras at musika,
Nung ika'y makita,
Parang nasa pelikula..

[Chorus]
Oh, aking prinsesa,
Tayo'y magkabilang mundo,
Isang hamak na sundalo mo,
Sa isang ubod ng ganda,
Oh, kay sigla,
Ng gabi at kay tahimik,
Siguro nga, wala akong marinig,
At ako'y nana-naginip nalang,
Oh, aking prinsesa,
Sa panaginip nalang..

[Verse 2]
Ako'y hindi mapakali,
Na tila ba nagmamadali,
Gusto kong maka-usap ka,
Pero sadyang imposible,
Hindi ako makalapit,
Lumalayo ang daan,
Oh, aking prinsesa,
Gusto kitang mahawakan,

[Refrain]
Biglang bumagal,
Ang oras at musika,
Nung ika'y lumingon,
Parang ako'y babangon..

[Chorus]
Oh, aking prinsesa,
Tayo'y magkabilang mundo,
Isang hamak na sundalo mo,
Sa isang ubod ng ganda,
Oh, kay sigla,
Ng gabi at kay tahimik,
Siguro nga, wala akong marinig,
At ako'y nana-naginip nalang,
Oh, aking prinsesa,
Sa panaginip nalang..

Mmmm.. aking prinsesa..
Ohhh.. prinsesa..
Aking prinsesa,
Ikaw nag-i-isa..

[Chorus]
Oh, aking prinsesa,
Tayo'y magkabilang mundo,
Isang hamak na sundalo mo,
Sa isang ubod ng ganda,
Oh, kay sigla,
Ng gabi at kay tahimik,
Siguro nga, wala akong marinig,
At ako'y nana-naginip nalang,
Oh, aking prinsesa,
Sa panaginip nalang..

[Chorus]
Oh, aking prinsesa,
Tayo'y magkabilang mundo,
Isang hamak na sundalo mo,
Sa isang ubod ng ganda,
Oh, kay sigla,
Ng gabi at kay tahimik,
Siguro nga, wala akong marinig,
At ako'y nana-naginip nalang,
Oh, aking prinsesa,
Sa panaginip nalang..

Mmmm.. aking prinsesa..
Ohhh.. prinsesa..
Ohhh.. prinsesa.. ohhhh
Aking prinsesa.. ohhh`},{id:"22",title:"Babalik",color:"from-cyan-400 to-blue-600",audio:"/music/Babalik/Babalik- 3rd Harmonik.mp3",story:"A promise of return. 'Babalik' is a guiding light through the stories of life, ensuring that regardless of distance or obstacles, the cycle always leads back to the favorite person.",lyrics:`[Verse 1]
Sa himpapawid, tinititigan kita,
Tila isang alitaptap, aking gabay,
Sa dulo ng mundo ay, ako maghihintay,
Sa bawat pag-ulit ng kalangitan, hindi ka bibitawan.

Kung naalala mo ang mga istorya ko,
Isa lang ang direksyon, yun ang punto,
Hindi kakalimutan, mga leksyon,
Nasa iyo parati ang aking atensyon.

[Refrain]
Kahit anong agwat, kahit anong hadlang,
Hinding hindi mapipigilan,

[Chorus]
Hindi ko man masabi sa'yo,
Maghahanap din ng paraan ang mundo,
Kaya't babalik at babalik din ako,
Upang siguraduhin ang ating kwento,
Sa'yo, sa'yo, makokontento,
Isang estoryang nakasulat sa aklat kong nakatago, tapos,
Sa'yo ang simula. Sa'yo din magtatapos.

Sa buong buhay ko,
Halos libong kwento maririnig,
Ikaw ang paborito.

[Verse 2]
Minsan kapag nakatulala,
Hindi mapalagay ang aking isipan,
Alam ng puso kong nasa likoran, ka ng pinto na, namamagitan sa, ikaw at ako,
Umaasa lang naman, na masilayan ka lang, at makausap ka,
Umaasa lang naman. Sa ngayon, sa panaginip nalang..

[Refrain]
Kahit anong agwat, kahit anong hadlang,
Hinding hindi mapipigilan,

[Chorus]
Hindi ko man masabi sa'yo,
Maghahanap din ng paraan ang mundo,
Kaya't babalik at babalik din ako,
Upang siguraduhin ang ating kwento,
Sa'yo, sa'yo, makokontento,
Isang estoryang nakasulat sa aklat kong nakatago, tapos,
Sa'yo ang simula. Sa'yo din magtatapos.

Sa buong buhay ko,
Halos libong kwento maririnig,
Ikaw ang paborito.

[Bridge]
Sa ibang mundo man tayo magising,
Sa bagong daigdig na hindi atin,
Magtatagpo, at magtatagpo rin,
Nakaukit na sa bato, nakatatak na sa ating kwento

[Chorus]
Hindi ko man masabi sa'yo,
Maghahanap din ng paraan ang mundo,
Kaya't babalik at babalik din ako,
Upang siguraduhin ang ating kwento,
Sa'yo, sa'yo, makokontento,
Isang estoryang nakasulat sa aklat kong nakatago, tapos,
Sa'yo ang simula. Sa'yo din magtatapos.

Sa buong buhay mo,
Halos libong kwento maririnig,
Ikaw ang paborito.

Hindi ko man masabi sa'yo..
Babalik at babalik din ako,
Hindi ko man masabi sa'yo..
Babalik at babalik din ako`},{id:"23",title:"Bulong",color:"from-purple-500 to-indigo-600",audio:"/music/Bulong/Bulong - 3rd Harmonik.mp3",story:"The silent whispers of attraction. 'Bulong' describes the struggle of being close enough to whisper but unable to express the depth of feelings for someone who truly lights up the stars.",lyrics:`Hindi masabi ang nararamdaman
Di makalapit sadyang nanginginig na lang
Mga kamay na sabik sa piling mo
Ang iyong matang walang mintis sa pagtigil ng aking mundo

Ako'y alipin ng pagibig mo
Handang ibigin ang isang tulad mo
Hanggat ang puso mo'y sa akin lang hindi ka na malilinlang
Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin

Hindi mapakali
Hanggang tingin nalang
Bumubulong sa'yong tabi
Sadyang walang makapantay
Sa kagandahang inuukit mo sa isip ko

Ako'y alipin ng pagibig mo
Handang ibigin ang isang tulad mo
Hanggat ang puso mo'y sa akin lang hindi ka na malilinlang
Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin

Oh woah
Oh woah

Ako'y alipin ng pagibig mo (alipin ng pagibig mo)
Handang ibigin ang isang tulad mo (ibigin ang isang tulad mo)
Hanggat ang puso mo'y sa akin lang hindi ka na malilinlang
Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin

Ng mga bituin
Ng mga bituin
Ng mga bituin`},{id:"24",title:"Cold",color:"from-blue-700 to-cyan-900",audio:"/music/Cold/Cold - 3rd Harmonik.mp3",story:"Enduring the cold of the world and sacrifices for a dream. 'Cold' is about the grit and perseverance needed to stay 'hot' and focused on the main stage of life.",lyrics:`Cold - 3rd Harmonik

[Verse]
The cold came earlier,
We didn't expect that,
I was very close, that I could never forget,
The sacrifices that we have made,
The sleepless nights and the endless days,
You make it worthwhile,
Ohhh..

[Chorus]
The world is unfair,
There's more to bare..
Please, don't let it go,
You don't let it show,
That's the hard part,
Ohh, that's the hard part,
I swear everything will change,
Because this is our main stage,
Oh, this is our, this is our main stage..

[Verse 2]
Now the show starts,
Didn't forget that,
We were so close,
Wish you'd remember,
The sacrifices,
That we have made,
The rainy nights and,
The endless sun,
You make it worthwhile,
Ohhh..

[Chorus]
The world is unfair,
There's more to bare..
Please, don't let it go,
You don't let it show,
That's the hard part,
Ohh, that's the hard part,
I swear everything will change,
Because this is our main stage,
Oh, this is our, this is our main stage..

[Verse 3]
Now that we're in the lights,
Don't stop the show,
Don't let the cold come,
'Coz we were just,
Just getting hot,
Wish you'd never stop,
'Coz You make it worthwhile,
Ohhh..

[Chorus]
The world is unfair,
There's more to bare..
Please, don't let it go,
You don't let it show,
That's the hard part,
Ohh, that's the hard part,
I swear everything will change,
Because this is our main stage,
Oh, this is our, this is our main stage..

This is our main stage,
Oh, this is our, this is our main stage..
Yeah.. ohhh...

[Final]
The world's so unfair,
No more left to bare..
Please, don't let me go,
You don't let it show,
That's the hard part,
Ohh, that's the hard part,
I swear everything can change,
Because this is our main stage,
Oh, this is our, this is our main stage..
Ohhh.. our main stage..
Ohh.. This is our, this is our main stage..`},{id:"25",title:"Gamba",color:"from-orange-600 to-red-800",audio:"/music/Gamba/Gamba - 3rd Harmonik.mp3",story:"A song about the anxiety and pain of seeing someone you love move on with someone else. 'Gamba' (Nangangamba) captures the feeling of being replaced, like an expired promo or a jeep that's too full to squeeze into.",lyrics:`[Verse 1]
Oh.. ako’y nangangamba,
Tila ba walang oras nang natitira,
At patuloy kang nahuhulog sa piling ng iba.
Hindi ko hangad na maging kontrabida,
Pero ‘yang ngiti mo sa kanya parang bala sa dibdib ko, sumasabog sa ribla,
Parang “kontrabando” ‘yang pag-ibig mo,
Pinusuan mo ‘ko noon, pero pinipilit na ngayon.

Parang sinasadya mo ‘yung mga post na sweet sa timeline,
Para masaksihan ko pa kung paano ka sumaya sa ibang lalaki.
Sabi mo “friends lang,” pero ‘yang mga heart eyes mo hindi na friendly,
Parang double-tap na nagiging dagger sa lalamunan ko, hindi na healthy.
Ako ‘yung tipong tahimik lang, pero sa loob nagwawala,

[Hook]  
Sabi mo “forever” pero parang promo lang ng telco,  
May expiry date, may limit, may “sorry naubusan na ng lod mo.”  
Ako pa rin ‘to, ‘di nagbago,  
Pero ikaw na yata ‘yung nag-upgrade—sa iba.

[Verse 2]  
Seen mo lang ang text, walang reply ah,  
Parang jeep sa EDSA, puno na, ‘di na makasingit pa  
Sabi nila “move on” daw, ‘di worth it ‘yung luha,  
Pero ‘pag gabi, ikaw pa rin ang autoplay sa utak ko parang Spotify na walang skip ad pa.  
Multo mo sa DMs, hindi nag-ghost,  
Pero sa totoong buhay, parang spam account—blocked, ayaw nang mag-post.  
Alam ko mali ‘yung pag-asa, parang overtime sa trabaho na walang bayad pa,  
Pero kahit lugmok, ayaw ko pang mag-sign out sa kwento nating dal’wa.

[Hook]  
Sabi mo “forever” pero parang promo lang ng telco,  
May expiry date, may limit, may “sorry naubusan na ng load mo.”  
Ako pa rin ‘to, ‘di nagbago,  
Pero ikaw na yata ‘yung nag-upgrade—sa iba, sa iba.

[Bridge]  
Siguro kaya ganito kasi ‘di ako sanay mag-let go,  
Parang laging “one more episode” sa series na alam kong masakit na ang ending pero pinipilit ko pa rin panoorin hanggang credits roll.  
Kung sakali mang magkabalikan,
‘Wag mo nang ulitin ‘yung pag-alis—  
Kasi ‘pag umalis ka ulit, baka ‘di na ‘ko ‘yung dating ako na handa pang maghabol kahit umuulan ng bato.

[Hook]  
Sabi mo “forever” pero parang promo lang ng telco,  
May expiry date, may limit, may “sorry naubusan na ng load mo.”  
Ako pa rin ‘to, ‘di nagbago,  
Pero ikaw na yata ‘yung nag-upgrade—sa iba, sa iba.

[Hook]  
Sabi mo “forever” pero parang promo lang ng telco,  
May expiry date, may limit, may “sorry naubusan na ng load mo.”  
Ako pa rin ‘to, ‘di nagbago,  
Pero ikaw na yata ‘yung nag-upgrade—sa iba, sa iba.`},{id:"26",title:"Huling Sandali",color:"from-indigo-700 to-purple-900",audio:"/music/Huling Sandali/Huling Sandali (Cover) - 3rd Harmonik.mp3",story:"Choosing to love in the final moments. 'Huling Sandali' is about the struggle between the desire to hold on and the reality of a love that might not be meant for this time.",lyrics:`[Verse 1]
Hindi mapigil ang bugso ng aking puso
Sa t'wing ako’y papalapit sa'yo
Maaari bang hingin ang iyong kamay?
Hawakan mo't ’wag mong bitawan

[Verse 2]
Hindi mapigil ang tibok ng aking puso
Sa t'wing ako'y nakatingin sa'yo
Maaari bang 'wag kang humiwalay?
Dahil sandali na lang

[Pre-Chorus]
Darating din ang gabing walang pipigil sa'tin
Kung hindi ngayon, aasa bang maibabalik ang kahapon?

[Chorus]
Kahit sandali
Palayain ang pusong 'di mapigil
Sana'y tayong dalawa sa huling pagkakataon
Na ika’y magiging akin

[Verse 3]
Hindi matigil ang gulo sa aking isip
At para bang walang kasing sakit
Alaala mong hindi ko malimutan
Oras lang ang may alam

[Pre-Chorus]
Kung darating din ang gabing walang pipigil sa’tin
Kung hindi ngayon, aasa bang maibabalik ang kahapon?

[Chorus]
Kahit sandali
Palayain ang pusong 'di mapigil
Sana’y tayong dalawa sa huling pagkakataon
Na hindi na para sa'tin

[Bridge]
At sa bawat minuto, ako'y 'di natuto
Ipilit mang iba, ako’y maghihintay sa'yo
Ikaw ang aking kapiling sa huling sandali
Kasalanan ba kung puso natin ang magwawagi?

[Chorus]
Kahit sandali
Palayain ang pusong 'di mapigil
Sana'y tayong dalawa sa huling pagkakataon
Na hindi na para sa'tin

[Outro]
Kahit sandali
Patawarin ang pusong 'di tumigil
Para sa'ting dalawa ang maling pagkakataon
Na ika'y magiging akin`}],cf=({isPlaying:n,currentSong:e,canvasRef:t})=>(O.useEffect(()=>{const a=t.current;if(!a)return;const r=a.getContext("2d");let o;const i=()=>{a.width=a.offsetWidth,a.height=a.offsetHeight;const l=a.width,s=a.height;r.clearRect(0,0,l,s);const c=8,m=6,h=Math.floor(l/(c+m));for(let p=0;p<h;p++){let v;if(n){const x=Date.now()/150;v=Math.abs(Math.sin(p*.3+x)*Math.cos(p*.7-x*1.5))*s*.9}else v=4;const w=r.createLinearGradient(0,s-v,0,s);w.addColorStop(0,"#f472b6"),w.addColorStop(.5,"#c084fc"),w.addColorStop(1,"#22d3ee"),r.fillStyle=w,r.fillRect(p*(c+m),s-v,c,v),r.globalAlpha=.2,r.fillRect(p*(c+m),s,c,v*.3),r.globalAlpha=1}o=requestAnimationFrame(i)};return i(),()=>cancelAnimationFrame(o)},[n,e,t]),d.jsx("canvas",{ref:t,className:"w-full h-full rounded-full blur-xl"})),gf=({songs:n,currentIndex:e,setCurrentIndex:t,setIsPlaylistOpen:a,isPlaylistOpen:r,draggedItem:o,handleDragStart:i,handleDragOver:l,setDraggedItem:s})=>d.jsx("div",{className:`fixed top-0 left-0 h-full w-full md:w-96 bg-black/95 border-r-2 border-pink-500 z-40 transform transition-transform duration-500 ease-out shadow-[0_0_50px_rgba(236,72,153,0.3)] ${r?"translate-x-0":"-translate-x-full"}`,children:d.jsxs("div",{className:"p-6 h-full flex flex-col pt-24",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6 border-b border-pink-500/30 pb-4",children:[d.jsx("h2",{className:"text-2xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-[0_2px_10px_rgba(236,72,153,0.5)]",children:"TRACK LIST"}),d.jsxs("div",{className:"text-xs font-mono text-pink-500 animate-pulse",children:[n.length," SONGS LOADED"]})]}),d.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-2",children:n.map((c,m)=>d.jsxs("div",{draggable:!0,onDragStart:h=>i(h,m),onDragOver:h=>l(h,m),onDragEnd:()=>s(null),onClick:()=>{t(m),a(!1)},className:`group relative flex items-center gap-4 p-3 rounded-sm border border-transparent cursor-pointer transition-all duration-200
                      ${e===m?"bg-pink-900/20 border-pink-500/50 shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]":"hover:bg-white/5 hover:border-cyan-500/30"}
                      ${o===c?"opacity-30 border-dashed border-white":""}
                  `,children:[d.jsx("div",{className:`w-8 h-8 flex items-center justify-center font-mono text-sm border border-white/10 ${e===m?"text-pink-400 border-pink-500":"text-slate-500"}`,children:e===m?d.jsx("div",{className:"w-2 h-2 bg-pink-500 animate-ping"}):m+1}),d.jsx("div",{className:"flex-1 min-w-0",children:d.jsx("div",{className:`font-bold truncate text-sm uppercase tracking-wider ${e===m?"text-pink-300":"text-slate-300 group-hover:text-cyan-300"}`,children:c.title})}),d.jsx(Zg,{className:"w-4 h-4 text-slate-700 group-hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"})]},c.id))}),d.jsx("div",{className:"mt-4 pt-4 border-t border-white/10 text-center font-mono text-[10px] text-slate-500",children:"DRAG TO REORDER // CLICK TO PLAY"})]})}),ns=n=>{if(!n||isNaN(n))return"0:00";const e=Math.floor(n/60),t=Math.floor(n%60);return`${e}:${t<10?"0":""}${t}`},mt=n=>{if(!n)return"";if(n.startsWith("http"))return n;const e="/3rdharmonik.player/".replace(/\/$/,""),t=n.startsWith("/")?n:`/${n}`;return`${e}${t}`},ff=({isPlaying:n,togglePlay:e,handleNext:t,handlePrev:a,progress:r,duration:o,handlePointerDown:i,progressBarRef:l,repeatMode:s,setRepeatMode:c,isShuffle:m,setIsShuffle:h,volume:p,setVolume:v,isMuted:w,setIsMuted:x,scrollToLyrics:z})=>d.jsxs("div",{className:"w-full max-w-3xl bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group",children:[d.jsx("div",{className:"absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent"}),d.jsx("div",{className:"absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-cyan-500 to-transparent"}),d.jsx("div",{className:"absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-to-l from-pink-500 to-transparent"}),d.jsx("div",{className:"absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-pink-500 to-transparent"}),d.jsxs("div",{className:"mb-10 select-none",children:[d.jsxs("div",{className:"flex justify-between text-[11px] font-mono mb-3 tracking-[0.2em]",children:[d.jsx("span",{className:"text-cyan-400 drop-shadow-[0_0_5px_#22d3ee] animate-pulse",children:ns(r)}),d.jsx("span",{className:"text-slate-500",children:ns(o)})]}),d.jsxs("div",{ref:l,className:"relative h-3 md:h-4 flex items-center cursor-pointer touch-none",onPointerDown:i,children:[d.jsx("div",{className:"absolute inset-0 bg-slate-900/80 rounded-full border border-white/5 overflow-hidden",children:d.jsx("div",{className:"absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_11px)]"})}),d.jsxs("div",{className:"absolute h-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 ease-out flex items-center justify-end",style:{width:`${r/(o||1)*100}%`},children:[d.jsx("div",{className:"h-full w-1 md:w-2 bg-white shadow-[0_0_20px_#fff,0_0_10px_#22d3ee] rounded-full z-10"}),d.jsx("div",{className:"absolute -right-2 w-4 h-4 bg-cyan-400/20 blur-xl rounded-full"})]})]})]}),d.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0",children:[d.jsxs("div",{className:"flex items-center gap-6 md:order-1",children:[d.jsx("button",{onClick:()=>c(g=>(g+1)%3),className:`p-2 transition-all duration-300 hover:scale-125 ${s>0?"text-pink-500 drop-shadow-[0_0_10px_#ec4899]":"text-slate-600"}`,title:"Repeat Mode",children:s===2?d.jsxs("div",{className:"relative",children:[d.jsx(ql,{className:"w-6 h-6"}),d.jsx("span",{className:"absolute -top-2 -right-2 text-[10px] font-black bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center border border-black",children:"1"})]}):d.jsx(ql,{className:"w-6 h-6"})}),d.jsx("button",{onClick:()=>h(!m),className:`p-2 transition-all duration-300 hover:scale-125 ${m?"text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]":"text-slate-600"}`,title:"Shuffle",children:d.jsx(tf,{className:"w-6 h-6"})})]}),d.jsxs("div",{className:"flex items-center gap-8 md:order-2",children:[d.jsx("button",{onClick:a,className:"p-3 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all",children:d.jsx(af,{className:"w-8 h-8 md:w-10 md:h-10 fill-current"})}),d.jsxs("button",{onClick:e,className:`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 transition-all duration-500 active:scale-90 group/play relative flex items-center justify-center ${n?"border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.4)]":"border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]"}`,children:[d.jsx("div",{className:`absolute inset-0 rounded-full bg-gradient-to-br transition-all duration-500 ${n?"from-slate-900 to-cyan-900 opacity-100":"from-slate-900 to-pink-900 opacity-100"}`}),d.jsx("div",{className:"relative z-10",children:n?d.jsx(qg,{className:"w-10 h-10 md:w-12 md:h-12 text-cyan-400 fill-current animate-pulse"}):d.jsx(nf,{className:"w-10 h-10 md:w-12 md:h-12 text-pink-500 fill-current ml-2"})})]}),d.jsx("button",{onClick:t,className:"p-3 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all",children:d.jsx(rf,{className:"w-8 h-8 md:w-10 md:h-10 fill-current"})})]}),d.jsxs("div",{className:"flex items-center gap-4 w-full md:w-40 md:order-3 group/vol",children:[d.jsx("button",{onClick:()=>x(!w),className:"p-2 text-slate-500 hover:text-cyan-400 transition-colors",children:w?d.jsx(sf,{className:"w-6 h-6"}):d.jsx(lf,{className:"w-6 h-6"})}),d.jsx("div",{className:"flex-1 relative flex items-center h-8",children:d.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:w?0:p,onChange:g=>v(parseFloat(g.target.value)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_#22d3ee] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/50"})})]})]}),d.jsx("div",{className:"mt-10 flex justify-center border-t border-white/5 pt-6",children:d.jsxs("button",{onClick:z,className:"flex flex-col items-center gap-1 group/scroll",children:[d.jsx("span",{className:"text-[10px] font-black tracking-[0.4em] uppercase text-slate-600 group-hover/scroll:text-pink-500 transition-colors",children:"Song Details"}),d.jsx($g,{className:"w-4 h-4 text-slate-700 group-hover/scroll:text-cyan-400 group-hover/scroll:translate-y-1 transition-all duration-300"})]})})]}),pf=({currentSong:n,lyricsRef:e})=>{const[t,a]=O.useState("lyrics");return d.jsxs("div",{ref:e,className:"w-full bg-[#050510] p-4 md:p-20 z-20 flex flex-col items-center mt-10",children:[d.jsx("div",{className:"max-w-4xl w-full border border-pink-500/30 p-1 bg-black shadow-[0_0_50px_rgba(236,72,153,0.1)] rounded-lg",children:d.jsxs("div",{className:"bg-slate-900/40 p-6 md:p-12 relative overflow-hidden rounded-md backdrop-blur-md",children:[d.jsx(Jg,{className:"absolute top-4 right-4 w-12 h-12 text-white/5"}),d.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 uppercase italic tracking-tighter",children:n.title}),d.jsx("p",{className:"text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mt-2",children:"3rd Harmonik"})]}),d.jsxs("div",{className:"flex bg-black/40 p-1 rounded-full border border-white/5",children:[d.jsxs("button",{onClick:()=>a("lyrics"),className:`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${t==="lyrics"?"bg-pink-600 text-white shadow-[0_0_15px_#ec4899]":"text-slate-400 hover:text-white"}`,children:[d.jsx(fd,{className:"w-4 h-4"})," Lyrics"]}),d.jsxs("button",{onClick:()=>a("details"),className:`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${t==="details"?"bg-cyan-600 text-white shadow-[0_0_15px_#0891b2]":"text-slate-400 hover:text-white"}`,children:[d.jsx(Ug,{className:"w-4 h-4"})," Details"]})]})]}),d.jsx("div",{className:"min-h-[400px] transition-all duration-500",children:t==="lyrics"?d.jsx("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500 font-serif italic text-pink-100/90 leading-relaxed md:leading-loose text-lg md:text-xl text-center max-w-2xl mx-auto py-4",children:n.lyrics.split(`
`).map((r,o)=>d.jsx("p",{className:`mb-2 min-h-[1.5em] ${r.startsWith("[")?"text-pink-500 not-italic font-sans text-xs font-bold tracking-[0.2em] mt-6 mb-4 uppercase":""}`,children:r.trim()},o))}):d.jsxs("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500 font-mono text-cyan-100/80 leading-relaxed text-sm md:text-base border-l-2 border-cyan-500/30 pl-6 md:pl-10 py-4 max-w-3xl mx-auto",children:[d.jsx("h3",{className:"text-cyan-400 font-black mb-6 uppercase tracking-widest text-xs",children:"Song Information"}),d.jsx("div",{className:"prose prose-invert prose-cyan max-w-none space-y-4 [&>h4]:text-pink-400 [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-2 [&>p]:mb-4",dangerouslySetInnerHTML:{__html:n.story}})]})})]})}),d.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"mt-16 group flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-all duration-300 uppercase tracking-[0.3em] text-[10px]",children:[d.jsx(Yg,{className:"w-5 h-5 group-hover:-translate-y-1 transition-transform"}),"Back to Top"]})]})},hf=[{id:"aljay",name:"Aljay Leodones",role:"Founder, Lead Vocals, Lead Guitar, Keyboard",photo:"/members/aljay/aljay_profile_pic.jpg",extraPhotos:["/members/aljay/aljay_pic1.jpg","/members/aljay/aljay_pic2.JPG"],bio:"The mastermind who built 3rd Harmonik from the ground up. Aljay channels the stories of friends and loved ones into melodies—sometimes in 10 minutes, sometimes less than 5. With 30+ songs in his arsenal and more brewing, just tell him an inspiring story and watch a new track appear.",height:`5'8"`,favoriteSong:"Kometa"},{id:"louie",name:"Louie",role:"Drums",photo:"/members/louie/louie_profile_pic.jpg",extraPhotos:["/members/louie/louie_pic1.jpg","/members/louie/louie_pic2.jpg"],bio:"Aljay's ride-or-die for over 12 years. What started as desk neighbors in class evolved into an unbreakable musical brotherhood. Louie's drumming is the heartbeat that gives every 3rd Harmonik track its unique pulse and flavor.",height:`5'5"`,favoriteSong:"Titulo"},{id:"anthony",name:"Anthony",role:"Lead Vocals, Bass Guitar",photo:"/members/anthony/anthony_profile_pic.JPG",extraPhotos:["/members/anthony/anthony_pic1.JPG","/members/anthony/anthony_pic2.JPG"],bio:"The low-end powerhouse with vocals that hit different. Anthony doesn't just play bass—he co-writes fire tracks with Aljay. Their first collab 'Lihim' sealed the deal and brought a whole new dimension to the band's sound.",height:`5'7"`,favoriteSong:"How Could You"},{id:"clyde",name:"Clyde",role:"Lead Vocals, Rhythm Guitar",photo:"/members/clyde/clyde_profile_pic.gif",extraPhotos:["/members/clyde/clyde_pic1.JPG","/members/clyde/clyde_pic2.JPG"],bio:"The voice that completes 3rd Harmonik's identity. With Clyde's powerful vocals in the mix, Aljay finally had the freedom to write melodies without limits. That's why the songs keep coming faster than ever.",height:`5'7"`,favoriteSong:"Secrets"}],mf=({member:n,onDetails:e})=>{const[t,a]=O.useState(0),[r,o]=O.useState(!0),i=O.useRef(null),l=O.useRef(0);O.useEffect(()=>{let h;return r&&(h=setInterval(()=>{a(p=>(p+.5)%360)},30)),()=>clearInterval(h)},[r]);const s=h=>{var p;o(!1),i.current=h.clientX||((p=h.touches)==null?void 0:p[0].clientX),l.current=t},c=h=>{var w;if(i.current===null)return;const v=(h.clientX||((w=h.touches)==null?void 0:w[0].clientX))-i.current;a(l.current+v*.5)},m=()=>{i.current=null,setTimeout(()=>o(!0),2e3)};return d.jsxs("div",{className:"flex flex-col items-center group",children:[d.jsxs("div",{className:"relative w-48 h-48 md:w-64 md:h-64 cursor-pointer perspective-1000 select-none",onPointerDown:s,onPointerMove:c,onPointerUp:m,onPointerLeave:m,onClick:()=>e(n),children:[d.jsx("div",{className:"absolute inset-4 bg-black/80 rounded-full blur-2xl transform translate-y-8"}),d.jsxs("div",{className:"relative w-full h-full transition-transform duration-100 ease-linear transform-style-3d pointer-events-none",style:{transform:`rotateY(${t}deg)`},children:[d.jsx("div",{className:"absolute inset-0 backface-hidden z-10",children:d.jsxs("div",{className:"w-full h-full rounded-full border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500",children:[d.jsx("div",{className:"absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"}),d.jsx("div",{className:"absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_2px,rgba(255,255,255,0.03)_3px)]"}),d.jsx("img",{src:mt(n.photo),alt:n.name,className:"w-full h-full object-cover transition-all duration-700 group-hover:scale-110"})]})}),d.jsx("div",{className:"absolute inset-0 backface-hidden",style:{transform:"rotateY(180deg)"},children:d.jsxs("div",{className:"w-full h-full rounded-full border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500",children:[d.jsx("div",{className:"absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"}),d.jsx("div",{className:"absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_2px,rgba(255,255,255,0.03)_3px)]"}),d.jsx("img",{src:mt(n.photo),alt:n.name,className:"w-full h-full object-cover transition-all duration-700 group-hover:scale-110"})]})})]}),d.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none",children:d.jsx("span",{className:"text-[8px] font-black uppercase tracking-[0.4em] text-cyan-400 bg-black/80 px-3 py-1 rounded-full border border-cyan-500/50",children:"Drag to Spin / Click for Bio"})})]}),d.jsxs("div",{className:"mt-8 text-center bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm group-hover:border-pink-500/50 transition-colors w-full",children:[d.jsx("h3",{className:"text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-pink-400 transition-colors",children:n.name}),d.jsx("p",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest mt-1",children:n.role})]})]})},yf=({member:n,onClose:e})=>(O.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[n]),n?d.jsxs("div",{className:"fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-auto",children:[d.jsx("div",{className:"absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-500",onClick:e}),d.jsxs("div",{className:"relative w-full max-w-6xl max-h-[95vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_200px_rgba(236,72,153,0.4)] animate-in zoom-in-95 slide-in-from-bottom-12 duration-700 flex flex-col z-[1001]",children:[d.jsx("div",{className:"absolute top-8 right-8 z-50",children:d.jsx("button",{onClick:e,className:"p-4 bg-black/40 hover:bg-pink-600 rounded-full transition-all duration-300 text-white border border-white/10 hover:border-pink-400 group shadow-2xl",children:d.jsx(uf,{className:"w-6 h-6 group-hover:rotate-90 transition-transform"})})}),d.jsxs("div",{className:"flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden",children:[d.jsx("div",{className:"w-full lg:w-[55%] bg-black/40 relative flex flex-col p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 overflow-y-auto custom-scrollbar",children:d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"relative aspect-square md:aspect-video rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl group",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"}),d.jsx("img",{src:mt(n.photo),alt:n.name,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"}),d.jsx("div",{className:"absolute bottom-6 left-6 z-20",children:d.jsx("span",{className:"px-3 py-1 bg-pink-600 text-[8px] font-black uppercase tracking-[0.3em] rounded-md",children:"Primary Identification"})})]}),d.jsx("div",{className:"grid grid-cols-2 gap-6 pb-4",children:n.extraPhotos.map((t,a)=>d.jsxs("div",{className:"relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-xl",children:[d.jsx("div",{className:"absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-10"}),d.jsx("img",{src:mt(t),alt:`${n.name} extra ${a}`,className:"w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"}),d.jsx("div",{className:"absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity",children:d.jsx(of,{className:"w-4 h-4 text-cyan-400 fill-cyan-400"})})]},a))})]})}),d.jsxs("div",{className:"w-full lg:w-[45%] p-10 md:p-16 bg-gradient-to-br from-slate-900 to-black flex flex-col justify-center",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"w-8 h-px bg-cyan-500"}),d.jsx("span",{className:"text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em]",children:"Personnel Dossier // 3HMP"})]}),d.jsx("h2",{className:"text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]",children:n.name}),d.jsxs("div",{className:"flex flex-wrap gap-4 mb-12",children:[d.jsx("span",{className:"px-4 py-2 bg-pink-500/20 border border-pink-500/40 text-pink-400 text-[10px] font-black uppercase tracking-widest rounded-lg",children:n.role}),d.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-[10px] uppercase tracking-widest font-bold",children:[d.jsx(ef,{className:"w-3.5 h-3.5"})," ",n.height]}),d.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-[10px] uppercase tracking-widest font-bold",children:[d.jsx(Qg,{className:"w-3.5 h-3.5 text-pink-500"})," ",n.favoriteSong]})]}),d.jsx("div",{className:"prose prose-invert prose-pink max-w-none",children:d.jsxs("p",{className:"text-slate-200 leading-relaxed md:leading-loose text-lg md:text-xl font-light italic border-l-4 border-pink-500/30 pl-8",children:['"',n.bio,'"']})}),d.jsxs("div",{className:"mt-16 pt-8 border-t border-white/5 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-4 group",children:[d.jsx("div",{className:"w-12 h-1 bg-pink-500 group-hover:w-20 transition-all duration-500"}),d.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors",children:"Verified Status: Active"})]}),d.jsx(Ki,{className:"w-8 h-8 text-white/5"})]})]})]})]})]}):null),kf=({onMemberClick:n,bandRef:e})=>d.jsxs("section",{ref:e,className:"w-full max-w-7xl mx-auto px-6 py-32",children:[d.jsxs("div",{className:"flex flex-col items-center mb-20",children:[d.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[d.jsx("div",{className:"h-px w-10 bg-pink-500"}),d.jsx(Ki,{className:"w-5 h-5 text-pink-500"}),d.jsx("div",{className:"h-px w-10 bg-pink-500"})]}),d.jsx("h2",{className:"text-4xl md:text-6xl font-black italic uppercase italic tracking-tighter text-white text-center",children:"Meet the Band"}),d.jsx("p",{className:"text-slate-500 text-sm font-mono mt-4 uppercase tracking-[0.3em]",children:"The Soul of 3rd Harmonik"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8",children:hf.map(t=>d.jsx(mf,{member:t,onDetails:n},t.id))})]});function vf(){const[n,e]=O.useState(df),[t,a]=O.useState(0),[r,o]=O.useState(!1),[i,l]=O.useState(0),[s,c]=O.useState(0),[m,h]=O.useState(.7),[p,v]=O.useState(!1),[w,x]=O.useState(!1),[z,g]=O.useState(0),[u,f]=O.useState(null),[y,S]=O.useState(!1),[C,b]=O.useState(!1),[P,B]=O.useState(null),_=O.useRef(null),kn=O.useRef(null),Un=O.useRef(null),re=O.useRef(null),wt=O.useRef(null),On=n[t];O.useEffect(()=>{_.current&&(_.current.volume=p?0:m)},[m,p]),O.useEffect(()=>{const A=_.current;if(A)if(r){const vn=A.play();vn!==void 0&&vn.catch(Pe=>{console.error("Playback failed:",Pe),o(!1)})}else A.pause()},[r,t]);const xt=()=>{_.current&&(l(_.current.currentTime),c(_.current.duration||0))},St=()=>b(!0),N=()=>b(!1),j=()=>{if(z===2)_.current.currentTime=0,_.current.play();else if(w){let A=Math.floor(Math.random()*n.length);for(;A===t&&n.length>1;)A=Math.floor(Math.random()*n.length);a(A)}else z===1||t<n.length-1?E():o(!1)},E=()=>{if(w){let A=Math.floor(Math.random()*n.length);for(;A===t&&n.length>1;)A=Math.floor(Math.random()*n.length);a(A)}else a(A=>(A+1)%n.length)},W=()=>{i>3?(_.current.currentTime=0,l(0)):a(A=>(A-1+n.length)%n.length)},G=()=>o(!r),be=A=>{if(!Un.current)return 0;const vn=Un.current.getBoundingClientRect();return Math.min(Math.max((A-vn.left)/vn.width,0),1)*(s||1)},$n=A=>{A.preventDefault();const vn=fa=>{const Ke=be(fa.clientX);_.current&&(_.current.currentTime=Ke),l(Ke)},Pe=()=>{document.removeEventListener("pointermove",vn),document.removeEventListener("pointerup",Pe)};document.addEventListener("pointermove",vn),document.addEventListener("pointerup",Pe);const We=be(A.clientX);_.current&&(_.current.currentTime=We),l(We)},Nt=(A,vn)=>{f(n[vn])},Yn=(A,vn)=>{A.preventDefault();const Pe=n[vn];if(u===Pe)return;let We=n.filter(Ke=>Ke!==u);We.splice(vn,0,u),e(We);const fa=We.findIndex(Ke=>Ke.id===On.id);fa!==-1&&a(fa)},Ce=()=>{var A;(A=re.current)==null||A.scrollIntoView({behavior:"smooth",block:"start"})},pd=()=>{var A;(A=wt.current)==null||A.scrollIntoView({behavior:"smooth",block:"start"})};return d.jsxs("div",{className:"min-h-screen bg-[#02020a] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black",children:[d.jsx("div",{className:"fixed top-0 left-0 w-full h-1 z-[100] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-50"}),d.jsx("div",{className:"fixed inset-0 pointer-events-none z-[60] opacity-[0.03]",children:d.jsx("div",{className:"w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#fff_2px)] bg-[length:100%_3px]"})}),d.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0",children:[d.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_70%)]"}),d.jsx("div",{className:"absolute top-0 right-0 w-[60%] h-[60%] bg-cyan-950/20 blur-[150px] rounded-full"}),d.jsx("div",{className:"absolute bottom-0 left-0 w-[60%] h-[60%] bg-purple-950/20 blur-[150px] rounded-full"})]}),d.jsxs("nav",{className:"fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[70] backdrop-blur-md bg-black/20",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>S(!y),className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg",title:"Playlist",children:d.jsx(Gg,{className:"w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform"})}),d.jsx("button",{onClick:Ce,className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group shadow-lg",title:"Lyrics",children:d.jsx(Xg,{className:"w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform"})}),d.jsx("button",{onClick:pd,className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group shadow-lg",title:"Band",children:d.jsx(Ki,{className:"w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform"})})]}),d.jsx("div",{className:"text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500",children:"3rd Harmonik"})]}),d.jsx(gf,{songs:n,currentIndex:t,setCurrentIndex:a,setIsPlaylistOpen:S,isPlaylistOpen:y,draggedItem:u,handleDragStart:Nt,handleDragOver:Yn,setDraggedItem:f}),d.jsxs("main",{className:`relative z-10 w-full min-h-screen flex flex-col items-center justify-start transition-all duration-700 ease-in-out ${y?"scale-90 opacity-40 blur-xl pointer-events-none":"scale-100 opacity-100 blur-0"}`,children:[d.jsxs("section",{className:"w-full max-w-7xl px-4 pt-32 pb-20 flex flex-col items-center lg:flex-row lg:justify-center gap-16 lg:gap-24",children:[d.jsxs("div",{className:"relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex-shrink-0",children:[d.jsx("div",{className:`absolute -inset-10 rounded-full transition-all duration-1000 blur-[100px] opacity-40 ${r?"bg-cyan-500 scale-110":"bg-pink-500 scale-100"}`}),d.jsx("div",{className:"absolute -inset-4 md:-inset-8",children:d.jsx(cf,{isPlaying:r,currentSong:On,canvasRef:kn})}),d.jsxs("div",{className:`relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-700 ${r?"scale-105 rotate-1":"scale-100 rotate-0"}`,children:[d.jsx("div",{className:`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${On.color} opacity-40`}),On.cover?d.jsx("img",{src:mt(On.cover),alt:On.title,className:`w-full h-full object-cover transition-all duration-700 ${r?"scale-110 opacity-70":"scale-100 opacity-50"}`}):d.jsx("div",{className:"w-full h-full flex flex-col items-center justify-center bg-slate-900/80",children:d.jsx(fd,{className:`w-32 h-32 md:w-48 md:h-48 text-white/10 transition-all duration-700 ${r?"scale-125 opacity-20 rotate-12":"scale-100 opacity-10"}`})}),d.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center text-center",children:[d.jsx("h1",{className:"text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none mb-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]",children:On.title}),d.jsxs("p",{className:"text-sm md:text-lg font-mono tracking-[0.4em] uppercase text-cyan-400 opacity-80 flex items-center gap-2",children:[d.jsx("span",{className:"w-4 h-px bg-cyan-500/50"}),"3rd Harmonik",d.jsx("span",{className:"w-4 h-px bg-cyan-500/50"})]})]})]})]}),d.jsx("div",{className:"w-full max-w-xl flex flex-col gap-10",children:d.jsx(ff,{isPlaying:r,togglePlay:G,handleNext:E,handlePrev:W,progress:i,duration:s,handlePointerDown:$n,progressBarRef:Un,repeatMode:z,setRepeatMode:g,isShuffle:w,setIsShuffle:x,volume:m,setVolume:h,isMuted:p,setIsMuted:v,scrollToLyrics:Ce})})]}),d.jsx(pf,{currentSong:On,lyricsRef:re}),d.jsx(kf,{onMemberClick:B,bandRef:wt})]}),d.jsx(yf,{member:P,onClose:()=>B(null)}),d.jsx("audio",{ref:_,src:mt(On.audio),onTimeUpdate:xt,onEnded:j,onCanPlay:St,onLoadStart:N,preload:"auto"})]})}eo.createRoot(document.getElementById("root")).render(d.jsx(Td.StrictMode,{children:d.jsx(vf,{})}));

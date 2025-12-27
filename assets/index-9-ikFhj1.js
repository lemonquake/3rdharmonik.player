(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Pd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rs={exports:{}},pr={},is={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),Ed=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),zd=Symbol.for("react.provider"),Ad=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),Ld=Symbol.for("react.suspense"),Rd=Symbol.for("react.memo"),Dd=Symbol.for("react.lazy"),Go=Symbol.iterator;function Bd(n){return n===null||typeof n!="object"?null:(n=Go&&n[Go]||n["@@iterator"],typeof n=="function"?n:null)}var os={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ls=Object.assign,ss={};function kt(n,e,t){this.props=n,this.context=e,this.refs=ss,this.updater=t||os}kt.prototype.isReactComponent={};kt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};kt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function us(){}us.prototype=kt.prototype;function Xi(n,e,t){this.props=n,this.context=e,this.refs=ss,this.updater=t||os}var Ji=Xi.prototype=new us;Ji.constructor=Xi;ls(Ji,kt.prototype);Ji.isPureReactComponent=!0;var Xo=Array.isArray,ds=Object.prototype.hasOwnProperty,Zi={current:null},cs={key:!0,ref:!0,__self:!0,__source:!0};function gs(n,e,t){var a,r={},i=null,o=null;if(e!=null)for(a in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)ds.call(e,a)&&!cs.hasOwnProperty(a)&&(r[a]=e[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}if(n&&n.defaultProps)for(a in l=n.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:sa,type:n,key:i,ref:o,props:r,_owner:Zi.current}}function Fd(n,e){return{$$typeof:sa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function qi(n){return typeof n=="object"&&n!==null&&n.$$typeof===sa}function Wd(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Jo=/\/+/g;function Tr(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Wd(""+n.key):e.toString(36)}function Ta(n,e,t,a,r){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case sa:case Ed:o=!0}}if(o)return o=n,r=r(o),n=a===""?"."+Tr(o,0):a,Xo(r)?(t="",n!=null&&(t=n.replace(Jo,"$&/")+"/"),Ta(r,e,t,"",function(c){return c})):r!=null&&(qi(r)&&(r=Fd(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jo,"$&/")+"/")+n)),e.push(r)),1;if(o=0,a=a===""?".":a+":",Xo(n))for(var l=0;l<n.length;l++){i=n[l];var s=a+Tr(i,l);o+=Ta(i,e,t,s,r)}else if(s=Bd(n),typeof s=="function")for(n=s.call(n),l=0;!(i=n.next()).done;)i=i.value,s=a+Tr(i,l++),o+=Ta(i,e,t,s,r);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(n,e,t){if(n==null)return n;var a=[],r=0;return Ta(n,a,"","",function(i){return e.call(t,i,r++)}),a}function Kd(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},Oa={transition:null},Vd={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Zi};function fs(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ha,forEach:function(n,e,t){ha(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ha(n,function(){e++}),e},toArray:function(n){return ha(n,function(e){return e})||[]},only:function(n){if(!qi(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};O.Component=kt;O.Fragment=Td;O.Profiler=Hd;O.PureComponent=Xi;O.StrictMode=Od;O.Suspense=Ld;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vd;O.act=fs;O.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var a=ls({},n.props),r=n.key,i=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Zi.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(s in e)ds.call(e,s)&&!cs.hasOwnProperty(s)&&(a[s]=e[s]===void 0&&l!==void 0?l[s]:e[s])}var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:sa,type:n.type,key:r,ref:i,props:a,_owner:o}};O.createContext=function(n){return n={$$typeof:Ad,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:zd,_context:n},n.Consumer=n};O.createElement=gs;O.createFactory=function(n){var e=gs.bind(null,n);return e.type=n,e};O.createRef=function(){return{current:null}};O.forwardRef=function(n){return{$$typeof:Md,render:n}};O.isValidElement=qi;O.lazy=function(n){return{$$typeof:Dd,_payload:{_status:-1,_result:n},_init:Kd}};O.memo=function(n,e){return{$$typeof:Rd,type:n,compare:e===void 0?null:e}};O.startTransition=function(n){var e=Oa.transition;Oa.transition={};try{n()}finally{Oa.transition=e}};O.unstable_act=fs;O.useCallback=function(n,e){return fn.current.useCallback(n,e)};O.useContext=function(n){return fn.current.useContext(n)};O.useDebugValue=function(){};O.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};O.useEffect=function(n,e){return fn.current.useEffect(n,e)};O.useId=function(){return fn.current.useId()};O.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};O.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};O.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};O.useMemo=function(n,e){return fn.current.useMemo(n,e)};O.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};O.useRef=function(n){return fn.current.useRef(n)};O.useState=function(n){return fn.current.useState(n)};O.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};O.useTransition=function(){return fn.current.useTransition()};O.version="18.3.1";is.exports=O;var E=is.exports;const Ud=Pd(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=E,Yd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Gd=Object.prototype.hasOwnProperty,Xd=$d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jd={key:!0,ref:!0,__self:!0,__source:!0};function hs(n,e,t){var a,r={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(a in e)Gd.call(e,a)&&!Jd.hasOwnProperty(a)&&(r[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps,e)r[a]===void 0&&(r[a]=e[a]);return{$$typeof:Yd,type:n,key:i,ref:o,props:r,_owner:Xd.current}}pr.Fragment=Qd;pr.jsx=hs;pr.jsxs=hs;rs.exports=pr;var u=rs.exports,ai={},ps={exports:{}},In={},ms={exports:{}},ys={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(S,_){var P=S.length;S.push(_);n:for(;0<P;){var W=P-1>>>1,X=S[W];if(0<r(X,_))S[W]=_,S[P]=X,P=W;else break n}}function t(S){return S.length===0?null:S[0]}function a(S){if(S.length===0)return null;var _=S[0],P=S.pop();if(P!==_){S[0]=P;n:for(var W=0,X=S.length,re=X>>>1;W<re;){var Bn=2*(W+1)-1,Ve=S[Bn],Fn=Bn+1,je=S[Fn];if(0>r(Ve,P))Fn<X&&0>r(je,Ve)?(S[W]=je,S[Fn]=P,W=Fn):(S[W]=Ve,S[Bn]=P,W=Bn);else if(Fn<X&&0>r(je,P))S[W]=je,S[Fn]=P,W=Fn;else break n}}return _}function r(S,_){var P=S.sortIndex-_.sortIndex;return P!==0?P:S.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();n.unstable_now=function(){return o.now()-l}}var s=[],c=[],m=1,p=null,h=3,w=!1,k=!1,x=!1,H=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(S){for(var _=t(c);_!==null;){if(_.callback===null)a(c);else if(_.startTime<=S)a(c),_.sortIndex=_.expirationTime,e(s,_);else break;_=t(c)}}function y(S){if(x=!1,f(S),!k)if(t(s)!==null)k=!0,Ke(N);else{var _=t(c);_!==null&&Yn(y,_.startTime-S)}}function N(S,_){k=!1,x&&(x=!1,g(j),j=-1),w=!0;var P=h;try{for(f(_),p=t(s);p!==null&&(!(p.expirationTime>_)||S&&!wn());){var W=p.callback;if(typeof W=="function"){p.callback=null,h=p.priorityLevel;var X=W(p.expirationTime<=_);_=n.unstable_now(),typeof X=="function"?p.callback=X:p===t(s)&&a(s),f(_)}else a(s);p=t(s)}if(p!==null)var re=!0;else{var Bn=t(c);Bn!==null&&Yn(y,Bn.startTime-_),re=!1}return re}finally{p=null,h=P,w=!1}}var C=!1,I=null,j=-1,B=5,T=-1;function wn(){return!(n.unstable_now()-T<B)}function G(){if(I!==null){var S=n.unstable_now();T=S;var _=!0;try{_=I(!0,S)}finally{_?Ce():(C=!1,I=null)}}else C=!1}var Ce;if(typeof d=="function")Ce=function(){d(G)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,fa=xt.port2;xt.port1.onmessage=G,Ce=function(){fa.postMessage(null)}}else Ce=function(){H(G,0)};function Ke(S){I=S,C||(C=!0,Ce())}function Yn(S,_){j=H(function(){S(n.unstable_now())},_)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(S){S.callback=null},n.unstable_continueExecution=function(){k||w||(k=!0,Ke(N))},n.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(s)},n.unstable_next=function(S){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var P=h;h=_;try{return S()}finally{h=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var P=h;h=S;try{return _()}finally{h=P}},n.unstable_scheduleCallback=function(S,_,P){var W=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,S={id:m++,callback:_,priorityLevel:S,startTime:P,expirationTime:X,sortIndex:-1},P>W?(S.sortIndex=P,e(c,S),t(s)===null&&S===t(c)&&(x?(g(j),j=-1):x=!0,Yn(y,P-W))):(S.sortIndex=X,e(s,S),k||w||(k=!0,Ke(N))),S},n.unstable_shouldYield=wn,n.unstable_wrapCallback=function(S){var _=h;return function(){var P=h;h=_;try{return S.apply(this,arguments)}finally{h=P}}}})(ys);ms.exports=ys;var Zd=ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=E,bn=Zd;function v(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ks=new Set,Ut={};function Fe(n,e){ct(n,e),ct(n+"Capture",e)}function ct(n,e){for(Ut[n]=e,n=0;n<e.length;n++)ks.add(e[n])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ri=Object.prototype.hasOwnProperty,nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zo={},qo={};function ec(n){return ri.call(qo,n)?!0:ri.call(Zo,n)?!1:nc.test(n)?qo[n]=!0:(Zo[n]=!0,!1)}function tc(n,e,t,a){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ac(n,e,t,a){if(e===null||typeof e>"u"||tc(n,e,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,a,r,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){rn[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];rn[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){rn[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){rn[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){rn[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){rn[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){rn[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){rn[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){rn[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var no=/[\-:]([a-z])/g;function eo(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(no,eo);rn[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(no,eo);rn[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(no,eo);rn[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){rn[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});rn.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){rn[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function to(n,e,t,a){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:a||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ac(e,t,r,a)&&(t=null),a||r===null?ec(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,a=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?n.setAttributeNS(a,e,t):n.setAttribute(e,t))))}var ae=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),Ye=Symbol.for("react.portal"),Qe=Symbol.for("react.fragment"),ao=Symbol.for("react.strict_mode"),ii=Symbol.for("react.profiler"),vs=Symbol.for("react.provider"),ws=Symbol.for("react.context"),ro=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),io=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),xs=Symbol.for("react.offscreen"),nl=Symbol.iterator;function bt(n){return n===null||typeof n!="object"?null:(n=nl&&n[nl]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,Or;function Ot(n){if(Or===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Or=e&&e[1]||""}return`
`+Or+n}var Hr=!1;function zr(n,e){if(!n||Hr)return"";Hr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var a=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){a=c}n.call(e.prototype)}else{try{throw Error()}catch(c){a=c}n()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=a.stack.split(`
`),o=r.length-1,l=i.length-1;1<=o&&0<=l&&r[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==i[l]){var s=`
`+r[o].replace(" at new "," at ");return n.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",n.displayName)),s}while(1<=o&&0<=l);break}}}finally{Hr=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ot(n):""}function rc(n){switch(n.tag){case 5:return Ot(n.type);case 16:return Ot("Lazy");case 13:return Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 2:case 15:return n=zr(n.type,!1),n;case 11:return n=zr(n.type.render,!1),n;case 1:return n=zr(n.type,!0),n;default:return""}}function si(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Qe:return"Fragment";case Ye:return"Portal";case ii:return"Profiler";case ao:return"StrictMode";case oi:return"Suspense";case li:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ws:return(n.displayName||"Context")+".Consumer";case vs:return(n._context.displayName||"Context")+".Provider";case ro:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case io:return e=n.displayName||null,e!==null?e:si(n.type)||"Memo";case le:e=n._payload,n=n._init;try{return si(n(e))}catch{}}return null}function ic(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return si(e);case 8:return e===ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ss(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oc(n){var e=Ss(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),a=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ma(n){n._valueTracker||(n._valueTracker=oc(n))}function Ns(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=Ss(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function Ka(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ui(n,e){var t=e.checked;return U({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function el(n,e){var t=e.defaultValue==null?"":e.defaultValue,a=e.checked!=null?e.checked:e.defaultChecked;t=xe(e.value!=null?e.value:t),n._wrapperState={initialChecked:a,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bs(n,e){e=e.checked,e!=null&&to(n,"checked",e,!1)}function di(n,e){bs(n,e);var t=xe(e.value),a=e.type;if(t!=null)a==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(a==="submit"||a==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ci(n,e.type,t):e.hasOwnProperty("defaultValue")&&ci(n,e.type,xe(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function tl(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var a=e.type;if(!(a!=="submit"&&a!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ci(n,e,t){(e!=="number"||Ka(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ht=Array.isArray;function it(n,e,t,a){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&a&&(n[t].defaultSelected=!0)}else{for(t=""+xe(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,a&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function gi(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return U({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function al(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(v(92));if(Ht(t)){if(1<t.length)throw Error(v(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:xe(t)}}function Is(n,e){var t=xe(e.value),a=xe(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),a!=null&&(n.defaultValue=""+a)}function rl(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Cs(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fi(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Cs(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ya,js=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,a,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,a,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function $t(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lc=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(n){lc.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Mt[e]=Mt[n]})});function _s(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Mt.hasOwnProperty(n)&&Mt[n]?(""+e).trim():e+"px"}function Ps(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=_s(t,e[t],a);t==="float"&&(t="cssFloat"),a?n.setProperty(t,r):n[t]=r}}var sc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hi(n,e){if(e){if(sc[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function pi(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function oo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yi=null,ot=null,lt=null;function il(n){if(n=ca(n)){if(typeof yi!="function")throw Error(v(280));var e=n.stateNode;e&&(e=wr(e),yi(n.stateNode,n.type,e))}}function Es(n){ot?lt?lt.push(n):lt=[n]:ot=n}function Ts(){if(ot){var n=ot,e=lt;if(lt=ot=null,il(n),e)for(n=0;n<e.length;n++)il(e[n])}}function Os(n,e){return n(e)}function Hs(){}var Ar=!1;function zs(n,e,t){if(Ar)return n(e,t);Ar=!0;try{return Os(n,e,t)}finally{Ar=!1,(ot!==null||lt!==null)&&(Hs(),Ts())}}function Yt(n,e){var t=n.stateNode;if(t===null)return null;var a=wr(t);if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(v(231,e,typeof t));return t}var ki=!1;if(qn)try{var It={};Object.defineProperty(It,"passive",{get:function(){ki=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{ki=!1}function uc(n,e,t,a,r,i,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(m){this.onError(m)}}var Lt=!1,Va=null,Ua=!1,vi=null,dc={onError:function(n){Lt=!0,Va=n}};function cc(n,e,t,a,r,i,o,l,s){Lt=!1,Va=null,uc.apply(dc,arguments)}function gc(n,e,t,a,r,i,o,l,s){if(cc.apply(this,arguments),Lt){if(Lt){var c=Va;Lt=!1,Va=null}else throw Error(v(198));Ua||(Ua=!0,vi=c)}}function We(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function As(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ol(n){if(We(n)!==n)throw Error(v(188))}function fc(n){var e=n.alternate;if(!e){if(e=We(n),e===null)throw Error(v(188));return e!==n?null:n}for(var t=n,a=e;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return ol(r),n;if(i===a)return ol(r),e;i=i.sibling}throw Error(v(188))}if(t.return!==a.return)t=r,a=i;else{for(var o=!1,l=r.child;l;){if(l===t){o=!0,t=r,a=i;break}if(l===a){o=!0,a=r,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,a=r;break}if(l===a){o=!0,a=i,t=r;break}l=l.sibling}if(!o)throw Error(v(189))}}if(t.alternate!==a)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?n:e}function Ms(n){return n=fc(n),n!==null?Ls(n):null}function Ls(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ls(n);if(e!==null)return e;n=n.sibling}return null}var Rs=bn.unstable_scheduleCallback,ll=bn.unstable_cancelCallback,hc=bn.unstable_shouldYield,pc=bn.unstable_requestPaint,Y=bn.unstable_now,mc=bn.unstable_getCurrentPriorityLevel,lo=bn.unstable_ImmediatePriority,Ds=bn.unstable_UserBlockingPriority,$a=bn.unstable_NormalPriority,yc=bn.unstable_LowPriority,Bs=bn.unstable_IdlePriority,mr=null,Un=null;function kc(n){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(mr,n,void 0,(n.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:xc,vc=Math.log,wc=Math.LN2;function xc(n){return n>>>=0,n===0?32:31-(vc(n)/wc|0)|0}var ka=64,va=4194304;function zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ya(n,e){var t=n.pendingLanes;if(t===0)return 0;var a=0,r=n.suspendedLanes,i=n.pingedLanes,o=t&268435455;if(o!==0){var l=o&~r;l!==0?a=zt(l):(i&=o,i!==0&&(a=zt(i)))}else o=t&~r,o!==0?a=zt(o):i!==0&&(a=zt(i));if(a===0)return 0;if(e!==0&&e!==a&&!(e&r)&&(r=a&-a,i=e&-e,r>=i||r===16&&(i&4194240)!==0))return e;if(a&4&&(a|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=a;0<e;)t=31-Ln(e),r=1<<t,a|=n[t],e&=~r;return a}function Sc(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nc(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,r=n.expirationTimes,i=n.pendingLanes;0<i;){var o=31-Ln(i),l=1<<o,s=r[o];s===-1?(!(l&t)||l&a)&&(r[o]=Sc(l,e)):s<=e&&(n.expiredLanes|=l),i&=~l}}function wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fs(){var n=ka;return ka<<=1,!(ka&4194240)&&(ka=64),n}function Mr(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ua(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ln(e),n[e]=t}function bc(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var a=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ln(t),i=1<<r;e[r]=0,a[r]=-1,n[r]=-1,t&=~i}}function so(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-Ln(t),r=1<<a;r&e|n[a]&e&&(n[a]|=e),t&=~r}}var M=0;function Ws(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ks,uo,Vs,Us,$s,xi=!1,wa=[],fe=null,he=null,pe=null,Qt=new Map,Gt=new Map,ue=[],Ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sl(n,e){switch(n){case"focusin":case"focusout":fe=null;break;case"dragenter":case"dragleave":he=null;break;case"mouseover":case"mouseout":pe=null;break;case"pointerover":case"pointerout":Qt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(e.pointerId)}}function Ct(n,e,t,a,r,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},e!==null&&(e=ca(e),e!==null&&uo(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Cc(n,e,t,a,r){switch(e){case"focusin":return fe=Ct(fe,n,e,t,a,r),!0;case"dragenter":return he=Ct(he,n,e,t,a,r),!0;case"mouseover":return pe=Ct(pe,n,e,t,a,r),!0;case"pointerover":var i=r.pointerId;return Qt.set(i,Ct(Qt.get(i)||null,n,e,t,a,r)),!0;case"gotpointercapture":return i=r.pointerId,Gt.set(i,Ct(Gt.get(i)||null,n,e,t,a,r)),!0}return!1}function Ys(n){var e=Ee(n.target);if(e!==null){var t=We(e);if(t!==null){if(e=t.tag,e===13){if(e=As(t),e!==null){n.blockedOn=e,$s(n.priority,function(){Vs(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ha(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Si(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);mi=a,t.target.dispatchEvent(a),mi=null}else return e=ca(t),e!==null&&uo(e),n.blockedOn=t,!1;e.shift()}return!0}function ul(n,e,t){Ha(n)&&t.delete(e)}function jc(){xi=!1,fe!==null&&Ha(fe)&&(fe=null),he!==null&&Ha(he)&&(he=null),pe!==null&&Ha(pe)&&(pe=null),Qt.forEach(ul),Gt.forEach(ul)}function jt(n,e){n.blockedOn===e&&(n.blockedOn=null,xi||(xi=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,jc)))}function Xt(n){function e(r){return jt(r,n)}if(0<wa.length){jt(wa[0],n);for(var t=1;t<wa.length;t++){var a=wa[t];a.blockedOn===n&&(a.blockedOn=null)}}for(fe!==null&&jt(fe,n),he!==null&&jt(he,n),pe!==null&&jt(pe,n),Qt.forEach(e),Gt.forEach(e),t=0;t<ue.length;t++)a=ue[t],a.blockedOn===n&&(a.blockedOn=null);for(;0<ue.length&&(t=ue[0],t.blockedOn===null);)Ys(t),t.blockedOn===null&&ue.shift()}var st=ae.ReactCurrentBatchConfig,Qa=!0;function _c(n,e,t,a){var r=M,i=st.transition;st.transition=null;try{M=1,co(n,e,t,a)}finally{M=r,st.transition=i}}function Pc(n,e,t,a){var r=M,i=st.transition;st.transition=null;try{M=4,co(n,e,t,a)}finally{M=r,st.transition=i}}function co(n,e,t,a){if(Qa){var r=Si(n,e,t,a);if(r===null)$r(n,e,a,Ga,t),sl(n,a);else if(Cc(r,n,e,t,a))a.stopPropagation();else if(sl(n,a),e&4&&-1<Ic.indexOf(n)){for(;r!==null;){var i=ca(r);if(i!==null&&Ks(i),i=Si(n,e,t,a),i===null&&$r(n,e,a,Ga,t),i===r)break;r=i}r!==null&&a.stopPropagation()}else $r(n,e,a,null,t)}}var Ga=null;function Si(n,e,t,a){if(Ga=null,n=oo(a),n=Ee(n),n!==null)if(e=We(n),e===null)n=null;else if(t=e.tag,t===13){if(n=As(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ga=n,null}function Qs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mc()){case lo:return 1;case Ds:return 4;case $a:case yc:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var ce=null,go=null,za=null;function Gs(){if(za)return za;var n,e=go,t=e.length,a,r="value"in ce?ce.value:ce.textContent,i=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(a=1;a<=o&&e[t-a]===r[i-a];a++);return za=r.slice(n,1<a?1-a:void 0)}function Aa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xa(){return!0}function dl(){return!1}function Cn(n){function e(t,a,r,i,o){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(t=n[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xa:dl,this.isPropagationStopped=dl,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Cn(vt),da=U({},vt,{view:0,detail:0}),Ec=Cn(da),Lr,Rr,_t,yr=U({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_t&&(_t&&n.type==="mousemove"?(Lr=n.screenX-_t.screenX,Rr=n.screenY-_t.screenY):Rr=Lr=0,_t=n),Lr)},movementY:function(n){return"movementY"in n?n.movementY:Rr}}),cl=Cn(yr),Tc=U({},yr,{dataTransfer:0}),Oc=Cn(Tc),Hc=U({},da,{relatedTarget:0}),Dr=Cn(Hc),zc=U({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ac=Cn(zc),Mc=U({},vt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Lc=Cn(Mc),Rc=U({},vt,{data:0}),gl=Cn(Rc),Dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wc(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Fc[n])?!!e[n]:!1}function ho(){return Wc}var Kc=U({},da,{key:function(n){if(n.key){var e=Dc[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Aa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(n){return n.type==="keypress"?Aa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Aa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vc=Cn(Kc),Uc=U({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fl=Cn(Uc),$c=U({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),Yc=Cn($c),Qc=U({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gc=Cn(Qc),Xc=U({},yr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Jc=Cn(Xc),Zc=[9,13,27,32],po=qn&&"CompositionEvent"in window,Rt=null;qn&&"documentMode"in document&&(Rt=document.documentMode);var qc=qn&&"TextEvent"in window&&!Rt,Xs=qn&&(!po||Rt&&8<Rt&&11>=Rt),hl=" ",pl=!1;function Js(n,e){switch(n){case"keyup":return Zc.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ge=!1;function ng(n,e){switch(n){case"compositionend":return Zs(e);case"keypress":return e.which!==32?null:(pl=!0,hl);case"textInput":return n=e.data,n===hl&&pl?null:n;default:return null}}function eg(n,e){if(Ge)return n==="compositionend"||!po&&Js(n,e)?(n=Gs(),za=go=ce=null,Ge=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xs&&e.locale!=="ko"?null:e.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ml(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!tg[n.type]:e==="textarea"}function qs(n,e,t,a){Es(a),e=Xa(e,"onChange"),0<e.length&&(t=new fo("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var Dt=null,Jt=null;function ag(n){du(n,0)}function kr(n){var e=Ze(n);if(Ns(e))return n}function rg(n,e){if(n==="change")return e}var nu=!1;if(qn){var Br;if(qn){var Fr="oninput"in document;if(!Fr){var yl=document.createElement("div");yl.setAttribute("oninput","return;"),Fr=typeof yl.oninput=="function"}Br=Fr}else Br=!1;nu=Br&&(!document.documentMode||9<document.documentMode)}function kl(){Dt&&(Dt.detachEvent("onpropertychange",eu),Jt=Dt=null)}function eu(n){if(n.propertyName==="value"&&kr(Jt)){var e=[];qs(e,Jt,n,oo(n)),zs(ag,e)}}function ig(n,e,t){n==="focusin"?(kl(),Dt=e,Jt=t,Dt.attachEvent("onpropertychange",eu)):n==="focusout"&&kl()}function og(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kr(Jt)}function lg(n,e){if(n==="click")return kr(e)}function sg(n,e){if(n==="input"||n==="change")return kr(e)}function ug(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Dn=typeof Object.is=="function"?Object.is:ug;function Zt(n,e){if(Dn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!ri.call(e,r)||!Dn(n[r],e[r]))return!1}return!0}function vl(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wl(n,e){var t=vl(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=vl(t)}}function tu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?tu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function au(){for(var n=window,e=Ka();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ka(n.document)}return e}function mo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function dg(n){var e=au(),t=n.focusedElem,a=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&tu(t.ownerDocument.documentElement,t)){if(a!==null&&mo(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!n.extend&&i>a&&(r=a,a=i,i=r),r=wl(t,i);var o=wl(t,a);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),i>a?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cg=qn&&"documentMode"in document&&11>=document.documentMode,Xe=null,Ni=null,Bt=null,bi=!1;function xl(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bi||Xe==null||Xe!==Ka(a)||(a=Xe,"selectionStart"in a&&mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Bt&&Zt(Bt,a)||(Bt=a,a=Xa(Ni,"onSelect"),0<a.length&&(e=new fo("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=Xe)))}function Sa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Je={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Wr={},ru={};qn&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete Je.animationend.animation,delete Je.animationiteration.animation,delete Je.animationstart.animation),"TransitionEvent"in window||delete Je.transitionend.transition);function vr(n){if(Wr[n])return Wr[n];if(!Je[n])return n;var e=Je[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ru)return Wr[n]=e[t];return n}var iu=vr("animationend"),ou=vr("animationiteration"),lu=vr("animationstart"),su=vr("transitionend"),uu=new Map,Sl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ne(n,e){uu.set(n,e),Fe(e,[n])}for(var Kr=0;Kr<Sl.length;Kr++){var Vr=Sl[Kr],gg=Vr.toLowerCase(),fg=Vr[0].toUpperCase()+Vr.slice(1);Ne(gg,"on"+fg)}Ne(iu,"onAnimationEnd");Ne(ou,"onAnimationIteration");Ne(lu,"onAnimationStart");Ne("dblclick","onDoubleClick");Ne("focusin","onFocus");Ne("focusout","onBlur");Ne(su,"onTransitionEnd");ct("onMouseEnter",["mouseout","mouseover"]);ct("onMouseLeave",["mouseout","mouseover"]);ct("onPointerEnter",["pointerout","pointerover"]);ct("onPointerLeave",["pointerout","pointerover"]);Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function Nl(n,e,t){var a=n.type||"unknown-event";n.currentTarget=t,gc(a,e,void 0,n),n.currentTarget=null}function du(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],r=a.event;a=a.listeners;n:{var i=void 0;if(e)for(var o=a.length-1;0<=o;o--){var l=a[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&r.isPropagationStopped())break n;Nl(r,l,c),i=s}else for(o=0;o<a.length;o++){if(l=a[o],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&r.isPropagationStopped())break n;Nl(r,l,c),i=s}}}if(Ua)throw n=vi,Ua=!1,vi=null,n}function R(n,e){var t=e[Pi];t===void 0&&(t=e[Pi]=new Set);var a=n+"__bubble";t.has(a)||(cu(e,n,2,!1),t.add(a))}function Ur(n,e,t){var a=0;e&&(a|=4),cu(t,n,a,e)}var Na="_reactListening"+Math.random().toString(36).slice(2);function qt(n){if(!n[Na]){n[Na]=!0,ks.forEach(function(t){t!=="selectionchange"&&(hg.has(t)||Ur(t,!1,n),Ur(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Na]||(e[Na]=!0,Ur("selectionchange",!1,e))}}function cu(n,e,t,a){switch(Qs(e)){case 1:var r=_c;break;case 4:r=Pc;break;default:r=co}t=r.bind(null,e,t,n),r=void 0,!ki||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),a?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function $r(n,e,t,a,r){var i=a;if(!(e&1)&&!(e&2)&&a!==null)n:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;o=o.return}for(;l!==null;){if(o=Ee(l),o===null)return;if(s=o.tag,s===5||s===6){a=i=o;continue n}l=l.parentNode}}a=a.return}zs(function(){var c=i,m=oo(t),p=[];n:{var h=uu.get(n);if(h!==void 0){var w=fo,k=n;switch(n){case"keypress":if(Aa(t)===0)break n;case"keydown":case"keyup":w=Vc;break;case"focusin":k="focus",w=Dr;break;case"focusout":k="blur",w=Dr;break;case"beforeblur":case"afterblur":w=Dr;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=cl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Oc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Yc;break;case iu:case ou:case lu:w=Ac;break;case su:w=Gc;break;case"scroll":w=Ec;break;case"wheel":w=Jc;break;case"copy":case"cut":case"paste":w=Lc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=fl}var x=(e&4)!==0,H=!x&&n==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var d=c,f;d!==null;){f=d;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,g!==null&&(y=Yt(d,g),y!=null&&x.push(na(d,y,f)))),H)break;d=d.return}0<x.length&&(h=new w(h,k,null,t,m),p.push({event:h,listeners:x}))}}if(!(e&7)){n:{if(h=n==="mouseover"||n==="pointerover",w=n==="mouseout"||n==="pointerout",h&&t!==mi&&(k=t.relatedTarget||t.fromElement)&&(Ee(k)||k[ne]))break n;if((w||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,w?(k=t.relatedTarget||t.toElement,w=c,k=k?Ee(k):null,k!==null&&(H=We(k),k!==H||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(x=cl,y="onMouseLeave",g="onMouseEnter",d="mouse",(n==="pointerout"||n==="pointerover")&&(x=fl,y="onPointerLeave",g="onPointerEnter",d="pointer"),H=w==null?h:Ze(w),f=k==null?h:Ze(k),h=new x(y,d+"leave",w,t,m),h.target=H,h.relatedTarget=f,y=null,Ee(m)===c&&(x=new x(g,d+"enter",k,t,m),x.target=f,x.relatedTarget=H,y=x),H=y,w&&k)e:{for(x=w,g=k,d=0,f=x;f;f=$e(f))d++;for(f=0,y=g;y;y=$e(y))f++;for(;0<d-f;)x=$e(x),d--;for(;0<f-d;)g=$e(g),f--;for(;d--;){if(x===g||g!==null&&x===g.alternate)break e;x=$e(x),g=$e(g)}x=null}else x=null;w!==null&&bl(p,h,w,x,!1),k!==null&&H!==null&&bl(p,H,k,x,!0)}}n:{if(h=c?Ze(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var N=rg;else if(ml(h))if(nu)N=sg;else{N=og;var C=ig}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=lg);if(N&&(N=N(n,c))){qs(p,N,t,m);break n}C&&C(n,h,c),n==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ci(h,"number",h.value)}switch(C=c?Ze(c):window,n){case"focusin":(ml(C)||C.contentEditable==="true")&&(Xe=C,Ni=c,Bt=null);break;case"focusout":Bt=Ni=Xe=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,xl(p,t,m);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":xl(p,t,m)}var I;if(po)n:{switch(n){case"compositionstart":var j="onCompositionStart";break n;case"compositionend":j="onCompositionEnd";break n;case"compositionupdate":j="onCompositionUpdate";break n}j=void 0}else Ge?Js(n,t)&&(j="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(Xs&&t.locale!=="ko"&&(Ge||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ge&&(I=Gs()):(ce=m,go="value"in ce?ce.value:ce.textContent,Ge=!0)),C=Xa(c,j),0<C.length&&(j=new gl(j,n,null,t,m),p.push({event:j,listeners:C}),I?j.data=I:(I=Zs(t),I!==null&&(j.data=I)))),(I=qc?ng(n,t):eg(n,t))&&(c=Xa(c,"onBeforeInput"),0<c.length&&(m=new gl("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:c}),m.data=I))}du(p,e)})}function na(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Xa(n,e){for(var t=e+"Capture",a=[];n!==null;){var r=n,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Yt(n,t),i!=null&&a.unshift(na(n,i,r)),i=Yt(n,e),i!=null&&a.push(na(n,i,r))),n=n.return}return a}function $e(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bl(n,e,t,a,r){for(var i=e._reactName,o=[];t!==null&&t!==a;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===a)break;l.tag===5&&c!==null&&(l=c,r?(s=Yt(t,i),s!=null&&o.unshift(na(t,s,l))):r||(s=Yt(t,i),s!=null&&o.push(na(t,s,l)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var pg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function Il(n){return(typeof n=="string"?n:""+n).replace(pg,`
`).replace(mg,"")}function ba(n,e,t){if(e=Il(e),Il(n)!==e&&t)throw Error(v(425))}function Ja(){}var Ii=null,Ci=null;function ji(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,yg=typeof clearTimeout=="function"?clearTimeout:void 0,Cl=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Cl<"u"?function(n){return Cl.resolve(null).then(n).catch(vg)}:_i;function vg(n){setTimeout(function(){throw n})}function Yr(n,e){var t=e,a=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){n.removeChild(r),Xt(e);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);Xt(e)}function me(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function jl(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var wt=Math.random().toString(36).slice(2),Vn="__reactFiber$"+wt,ea="__reactProps$"+wt,ne="__reactContainer$"+wt,Pi="__reactEvents$"+wt,wg="__reactListeners$"+wt,xg="__reactHandles$"+wt;function Ee(n){var e=n[Vn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ne]||t[Vn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=jl(n);n!==null;){if(t=n[Vn])return t;n=jl(n)}return e}n=t,t=n.parentNode}return null}function ca(n){return n=n[Vn]||n[ne],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ze(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(v(33))}function wr(n){return n[ea]||null}var Ei=[],qe=-1;function be(n){return{current:n}}function D(n){0>qe||(n.current=Ei[qe],Ei[qe]=null,qe--)}function L(n,e){qe++,Ei[qe]=n.current,n.current=e}var Se={},un=be(Se),yn=be(!1),Ae=Se;function gt(n,e){var t=n.type.contextTypes;if(!t)return Se;var a=n.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===e)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=e[i];return a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function kn(n){return n=n.childContextTypes,n!=null}function Za(){D(yn),D(un)}function _l(n,e,t){if(un.current!==Se)throw Error(v(168));L(un,e),L(yn,t)}function gu(n,e,t){var a=n.stateNode;if(e=e.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in e))throw Error(v(108,ic(n)||"Unknown",r));return U({},t,a)}function qa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Se,Ae=un.current,L(un,n),L(yn,yn.current),!0}function Pl(n,e,t){var a=n.stateNode;if(!a)throw Error(v(169));t?(n=gu(n,e,Ae),a.__reactInternalMemoizedMergedChildContext=n,D(yn),D(un),L(un,n)):D(yn),L(yn,t)}var Gn=null,xr=!1,Qr=!1;function fu(n){Gn===null?Gn=[n]:Gn.push(n)}function Sg(n){xr=!0,fu(n)}function Ie(){if(!Qr&&Gn!==null){Qr=!0;var n=0,e=M;try{var t=Gn;for(M=1;n<t.length;n++){var a=t[n];do a=a(!0);while(a!==null)}Gn=null,xr=!1}catch(r){throw Gn!==null&&(Gn=Gn.slice(n+1)),Rs(lo,Ie),r}finally{M=e,Qr=!1}}return null}var nt=[],et=0,nr=null,er=0,jn=[],_n=0,Me=null,Xn=1,Jn="";function _e(n,e){nt[et++]=er,nt[et++]=nr,nr=n,er=e}function hu(n,e,t){jn[_n++]=Xn,jn[_n++]=Jn,jn[_n++]=Me,Me=n;var a=Xn;n=Jn;var r=32-Ln(a)-1;a&=~(1<<r),t+=1;var i=32-Ln(e)+r;if(30<i){var o=r-r%5;i=(a&(1<<o)-1).toString(32),a>>=o,r-=o,Xn=1<<32-Ln(e)+r|t<<r|a,Jn=i+n}else Xn=1<<i|t<<r|a,Jn=n}function yo(n){n.return!==null&&(_e(n,1),hu(n,1,0))}function ko(n){for(;n===nr;)nr=nt[--et],nt[et]=null,er=nt[--et],nt[et]=null;for(;n===Me;)Me=jn[--_n],jn[_n]=null,Jn=jn[--_n],jn[_n]=null,Xn=jn[--_n],jn[_n]=null}var Nn=null,Sn=null,F=!1,Mn=null;function pu(n,e){var t=Pn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function El(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,Sn=me(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Me!==null?{id:Xn,overflow:Jn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Pn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,Sn=null,!0):!1;default:return!1}}function Ti(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Oi(n){if(F){var e=Sn;if(e){var t=e;if(!El(n,e)){if(Ti(n))throw Error(v(418));e=me(t.nextSibling);var a=Nn;e&&El(n,e)?pu(a,t):(n.flags=n.flags&-4097|2,F=!1,Nn=n)}}else{if(Ti(n))throw Error(v(418));n.flags=n.flags&-4097|2,F=!1,Nn=n}}}function Tl(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function Ia(n){if(n!==Nn)return!1;if(!F)return Tl(n),F=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ji(n.type,n.memoizedProps)),e&&(e=Sn)){if(Ti(n))throw mu(),Error(v(418));for(;e;)pu(n,e),e=me(e.nextSibling)}if(Tl(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Sn=me(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Sn=null}}else Sn=Nn?me(n.stateNode.nextSibling):null;return!0}function mu(){for(var n=Sn;n;)n=me(n.nextSibling)}function ft(){Sn=Nn=null,F=!1}function vo(n){Mn===null?Mn=[n]:Mn.push(n)}var Ng=ae.ReactCurrentBatchConfig;function Pt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var a=t.stateNode}if(!a)throw Error(v(147,n));var r=a,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=r.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof n!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,n))}return n}function Ca(n,e){throw n=Object.prototype.toString.call(e),Error(v(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ol(n){var e=n._init;return e(n._payload)}function yu(n){function e(g,d){if(n){var f=g.deletions;f===null?(g.deletions=[d],g.flags|=16):f.push(d)}}function t(g,d){if(!n)return null;for(;d!==null;)e(g,d),d=d.sibling;return null}function a(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function r(g,d){return g=we(g,d),g.index=0,g.sibling=null,g}function i(g,d,f){return g.index=f,n?(f=g.alternate,f!==null?(f=f.index,f<d?(g.flags|=2,d):f):(g.flags|=2,d)):(g.flags|=1048576,d)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function l(g,d,f,y){return d===null||d.tag!==6?(d=ei(f,g.mode,y),d.return=g,d):(d=r(d,f),d.return=g,d)}function s(g,d,f,y){var N=f.type;return N===Qe?m(g,d,f.props.children,y,f.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===le&&Ol(N)===d.type)?(y=r(d,f.props),y.ref=Pt(g,d,f),y.return=g,y):(y=Wa(f.type,f.key,f.props,null,g.mode,y),y.ref=Pt(g,d,f),y.return=g,y)}function c(g,d,f,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=ti(f,g.mode,y),d.return=g,d):(d=r(d,f.children||[]),d.return=g,d)}function m(g,d,f,y,N){return d===null||d.tag!==7?(d=ze(f,g.mode,y,N),d.return=g,d):(d=r(d,f),d.return=g,d)}function p(g,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ei(""+d,g.mode,f),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pa:return f=Wa(d.type,d.key,d.props,null,g.mode,f),f.ref=Pt(g,null,d),f.return=g,f;case Ye:return d=ti(d,g.mode,f),d.return=g,d;case le:var y=d._init;return p(g,y(d._payload),f)}if(Ht(d)||bt(d))return d=ze(d,g.mode,f,null),d.return=g,d;Ca(g,d)}return null}function h(g,d,f,y){var N=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:l(g,d,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pa:return f.key===N?s(g,d,f,y):null;case Ye:return f.key===N?c(g,d,f,y):null;case le:return N=f._init,h(g,d,N(f._payload),y)}if(Ht(f)||bt(f))return N!==null?null:m(g,d,f,y,null);Ca(g,f)}return null}function w(g,d,f,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(f)||null,l(d,g,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pa:return g=g.get(y.key===null?f:y.key)||null,s(d,g,y,N);case Ye:return g=g.get(y.key===null?f:y.key)||null,c(d,g,y,N);case le:var C=y._init;return w(g,d,f,C(y._payload),N)}if(Ht(y)||bt(y))return g=g.get(f)||null,m(d,g,y,N,null);Ca(d,y)}return null}function k(g,d,f,y){for(var N=null,C=null,I=d,j=d=0,B=null;I!==null&&j<f.length;j++){I.index>j?(B=I,I=null):B=I.sibling;var T=h(g,I,f[j],y);if(T===null){I===null&&(I=B);break}n&&I&&T.alternate===null&&e(g,I),d=i(T,d,j),C===null?N=T:C.sibling=T,C=T,I=B}if(j===f.length)return t(g,I),F&&_e(g,j),N;if(I===null){for(;j<f.length;j++)I=p(g,f[j],y),I!==null&&(d=i(I,d,j),C===null?N=I:C.sibling=I,C=I);return F&&_e(g,j),N}for(I=a(g,I);j<f.length;j++)B=w(I,g,j,f[j],y),B!==null&&(n&&B.alternate!==null&&I.delete(B.key===null?j:B.key),d=i(B,d,j),C===null?N=B:C.sibling=B,C=B);return n&&I.forEach(function(wn){return e(g,wn)}),F&&_e(g,j),N}function x(g,d,f,y){var N=bt(f);if(typeof N!="function")throw Error(v(150));if(f=N.call(f),f==null)throw Error(v(151));for(var C=N=null,I=d,j=d=0,B=null,T=f.next();I!==null&&!T.done;j++,T=f.next()){I.index>j?(B=I,I=null):B=I.sibling;var wn=h(g,I,T.value,y);if(wn===null){I===null&&(I=B);break}n&&I&&wn.alternate===null&&e(g,I),d=i(wn,d,j),C===null?N=wn:C.sibling=wn,C=wn,I=B}if(T.done)return t(g,I),F&&_e(g,j),N;if(I===null){for(;!T.done;j++,T=f.next())T=p(g,T.value,y),T!==null&&(d=i(T,d,j),C===null?N=T:C.sibling=T,C=T);return F&&_e(g,j),N}for(I=a(g,I);!T.done;j++,T=f.next())T=w(I,g,j,T.value,y),T!==null&&(n&&T.alternate!==null&&I.delete(T.key===null?j:T.key),d=i(T,d,j),C===null?N=T:C.sibling=T,C=T);return n&&I.forEach(function(G){return e(g,G)}),F&&_e(g,j),N}function H(g,d,f,y){if(typeof f=="object"&&f!==null&&f.type===Qe&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case pa:n:{for(var N=f.key,C=d;C!==null;){if(C.key===N){if(N=f.type,N===Qe){if(C.tag===7){t(g,C.sibling),d=r(C,f.props.children),d.return=g,g=d;break n}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===le&&Ol(N)===C.type){t(g,C.sibling),d=r(C,f.props),d.ref=Pt(g,C,f),d.return=g,g=d;break n}t(g,C);break}else e(g,C);C=C.sibling}f.type===Qe?(d=ze(f.props.children,g.mode,y,f.key),d.return=g,g=d):(y=Wa(f.type,f.key,f.props,null,g.mode,y),y.ref=Pt(g,d,f),y.return=g,g=y)}return o(g);case Ye:n:{for(C=f.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){t(g,d.sibling),d=r(d,f.children||[]),d.return=g,g=d;break n}else{t(g,d);break}else e(g,d);d=d.sibling}d=ti(f,g.mode,y),d.return=g,g=d}return o(g);case le:return C=f._init,H(g,d,C(f._payload),y)}if(Ht(f))return k(g,d,f,y);if(bt(f))return x(g,d,f,y);Ca(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(t(g,d.sibling),d=r(d,f),d.return=g,g=d):(t(g,d),d=ei(f,g.mode,y),d.return=g,g=d),o(g)):t(g,d)}return H}var ht=yu(!0),ku=yu(!1),tr=be(null),ar=null,tt=null,wo=null;function xo(){wo=tt=ar=null}function So(n){var e=tr.current;D(tr),n._currentValue=e}function Hi(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function ut(n,e){ar=n,wo=tt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Tn(n){var e=n._currentValue;if(wo!==n)if(n={context:n,memoizedValue:e,next:null},tt===null){if(ar===null)throw Error(v(308));tt=n,ar.dependencies={lanes:0,firstContext:n}}else tt=tt.next=n;return e}var Te=null;function No(n){Te===null?Te=[n]:Te.push(n)}function vu(n,e,t,a){var r=e.interleaved;return r===null?(t.next=t,No(e)):(t.next=r.next,r.next=t),e.interleaved=t,ee(n,a)}function ee(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var se=!1;function bo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wu(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ye(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,z&2){var r=a.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),a.pending=e,ee(n,t)}return r=a.interleaved,r===null?(e.next=e,No(a)):(e.next=r.next,r.next=e),a.interleaved=e,ee(n,t)}function Ma(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,so(n,t)}}function Hl(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?r=i=e:i=i.next=e}else r=i=e;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function rr(n,e,t,a){var r=n.updateQueue;se=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var s=l,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var m=n.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=s))}if(i!==null){var p=r.baseState;o=0,m=c=s=null,l=i;do{var h=l.lane,w=l.eventTime;if((a&h)===h){m!==null&&(m=m.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var k=n,x=l;switch(h=e,w=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(w,p,h);break n}p=k;break n;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(w,p,h):k,h==null)break n;p=U({},p,h);break n;case 2:se=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=w,s=p):m=m.next=w,o|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(m===null&&(s=p),r.baseState=s,r.firstBaseUpdate=c,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else i===null&&(r.shared.lanes=0);Re|=o,n.lanes=o,n.memoizedState=p}}function zl(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var a=n[e],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(v(191,r));r.call(a)}}}var ga={},$n=be(ga),ta=be(ga),aa=be(ga);function Oe(n){if(n===ga)throw Error(v(174));return n}function Io(n,e){switch(L(aa,e),L(ta,n),L($n,ga),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fi(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=fi(e,n)}D($n),L($n,e)}function pt(){D($n),D(ta),D(aa)}function xu(n){Oe(aa.current);var e=Oe($n.current),t=fi(e,n.type);e!==t&&(L(ta,n),L($n,t))}function Co(n){ta.current===n&&(D($n),D(ta))}var K=be(0);function ir(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gr=[];function jo(){for(var n=0;n<Gr.length;n++)Gr[n]._workInProgressVersionPrimary=null;Gr.length=0}var La=ae.ReactCurrentDispatcher,Xr=ae.ReactCurrentBatchConfig,Le=0,V=null,Z=null,nn=null,or=!1,Ft=!1,ra=0,bg=0;function on(){throw Error(v(321))}function _o(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Dn(n[t],e[t]))return!1;return!0}function Po(n,e,t,a,r,i){if(Le=i,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=n===null||n.memoizedState===null?_g:Pg,n=t(a,r),Ft){i=0;do{if(Ft=!1,ra=0,25<=i)throw Error(v(301));i+=1,nn=Z=null,e.updateQueue=null,La.current=Eg,n=t(a,r)}while(Ft)}if(La.current=lr,e=Z!==null&&Z.next!==null,Le=0,nn=Z=V=null,or=!1,e)throw Error(v(300));return n}function Eo(){var n=ra!==0;return ra=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?V.memoizedState=nn=n:nn=nn.next=n,nn}function On(){if(Z===null){var n=V.alternate;n=n!==null?n.memoizedState:null}else n=Z.next;var e=nn===null?V.memoizedState:nn.next;if(e!==null)nn=e,Z=n;else{if(n===null)throw Error(v(310));Z=n,n={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},nn===null?V.memoizedState=nn=n:nn=nn.next=n}return nn}function ia(n,e){return typeof e=="function"?e(n):e}function Jr(n){var e=On(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var a=Z,r=a.baseQueue,i=t.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}a.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,a=a.baseState;var l=o=null,s=null,c=i;do{var m=c.lane;if((Le&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:n(a,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=p,o=a):s=s.next=p,V.lanes|=m,Re|=m}c=c.next}while(c!==null&&c!==i);s===null?o=a:s.next=l,Dn(a,e.memoizedState)||(mn=!0),e.memoizedState=a,e.baseState=o,e.baseQueue=s,t.lastRenderedState=a}if(n=t.interleaved,n!==null){r=n;do i=r.lane,V.lanes|=i,Re|=i,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Zr(n){var e=On(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var a=t.dispatch,r=t.pending,i=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do i=n(i,o.action),o=o.next;while(o!==r);Dn(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,a]}function Su(){}function Nu(n,e){var t=V,a=On(),r=e(),i=!Dn(a.memoizedState,r);if(i&&(a.memoizedState=r,mn=!0),a=a.queue,To(Cu.bind(null,t,a,n),[n]),a.getSnapshot!==e||i||nn!==null&&nn.memoizedState.tag&1){if(t.flags|=2048,oa(9,Iu.bind(null,t,a,r,e),void 0,null),en===null)throw Error(v(349));Le&30||bu(t,e,r)}return r}function bu(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Iu(n,e,t,a){e.value=t,e.getSnapshot=a,ju(e)&&_u(n)}function Cu(n,e,t){return t(function(){ju(e)&&_u(n)})}function ju(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Dn(n,t)}catch{return!0}}function _u(n){var e=ee(n,1);e!==null&&Rn(e,n,1,-1)}function Al(n){var e=Kn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},e.queue=n,n=n.dispatch=jg.bind(null,V,n),[e.memoizedState,n]}function oa(n,e,t,a){return n={tag:n,create:e,destroy:t,deps:a,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n)),n}function Pu(){return On().memoizedState}function Ra(n,e,t,a){var r=Kn();V.flags|=n,r.memoizedState=oa(1|e,t,void 0,a===void 0?null:a)}function Sr(n,e,t,a){var r=On();a=a===void 0?null:a;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,a!==null&&_o(a,o.deps)){r.memoizedState=oa(e,t,i,a);return}}V.flags|=n,r.memoizedState=oa(1|e,t,i,a)}function Ml(n,e){return Ra(8390656,8,n,e)}function To(n,e){return Sr(2048,8,n,e)}function Eu(n,e){return Sr(4,2,n,e)}function Tu(n,e){return Sr(4,4,n,e)}function Ou(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Hu(n,e,t){return t=t!=null?t.concat([n]):null,Sr(4,4,Ou.bind(null,e,n),t)}function Oo(){}function zu(n,e){var t=On();e=e===void 0?null:e;var a=t.memoizedState;return a!==null&&e!==null&&_o(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function Au(n,e){var t=On();e=e===void 0?null:e;var a=t.memoizedState;return a!==null&&e!==null&&_o(e,a[1])?a[0]:(n=n(),t.memoizedState=[n,e],n)}function Mu(n,e,t){return Le&21?(Dn(t,e)||(t=Fs(),V.lanes|=t,Re|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function Ig(n,e){var t=M;M=t!==0&&4>t?t:4,n(!0);var a=Xr.transition;Xr.transition={};try{n(!1),e()}finally{M=t,Xr.transition=a}}function Lu(){return On().memoizedState}function Cg(n,e,t){var a=ve(n);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Ru(n))Du(e,t);else if(t=vu(n,e,t,a),t!==null){var r=gn();Rn(t,n,a,r),Bu(t,e,a)}}function jg(n,e,t){var a=ve(n),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ru(n))Du(e,r);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,t);if(r.hasEagerState=!0,r.eagerState=l,Dn(l,o)){var s=e.interleaved;s===null?(r.next=r,No(e)):(r.next=s.next,s.next=r),e.interleaved=r;return}}catch{}finally{}t=vu(n,e,r,a),t!==null&&(r=gn(),Rn(t,n,a,r),Bu(t,e,a))}}function Ru(n){var e=n.alternate;return n===V||e!==null&&e===V}function Du(n,e){Ft=or=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Bu(n,e,t){if(t&4194240){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,so(n,t)}}var lr={readContext:Tn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},_g={readContext:Tn,useCallback:function(n,e){return Kn().memoizedState=[n,e===void 0?null:e],n},useContext:Tn,useEffect:Ml,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ra(4194308,4,Ou.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ra(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ra(4,2,n,e)},useMemo:function(n,e){var t=Kn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var a=Kn();return e=t!==void 0?t(e):e,a.memoizedState=a.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},a.queue=n,n=n.dispatch=Cg.bind(null,V,n),[a.memoizedState,n]},useRef:function(n){var e=Kn();return n={current:n},e.memoizedState=n},useState:Al,useDebugValue:Oo,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=Al(!1),e=n[0];return n=Ig.bind(null,n[1]),Kn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var a=V,r=Kn();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=e(),en===null)throw Error(v(349));Le&30||bu(a,e,t)}r.memoizedState=t;var i={value:t,getSnapshot:e};return r.queue=i,Ml(Cu.bind(null,a,i,n),[n]),a.flags|=2048,oa(9,Iu.bind(null,a,i,t,e),void 0,null),t},useId:function(){var n=Kn(),e=en.identifierPrefix;if(F){var t=Jn,a=Xn;t=(a&~(1<<32-Ln(a)-1)).toString(32)+t,e=":"+e+"R"+t,t=ra++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=bg++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Pg={readContext:Tn,useCallback:zu,useContext:Tn,useEffect:To,useImperativeHandle:Hu,useInsertionEffect:Eu,useLayoutEffect:Tu,useMemo:Au,useReducer:Jr,useRef:Pu,useState:function(){return Jr(ia)},useDebugValue:Oo,useDeferredValue:function(n){var e=On();return Mu(e,Z.memoizedState,n)},useTransition:function(){var n=Jr(ia)[0],e=On().memoizedState;return[n,e]},useMutableSource:Su,useSyncExternalStore:Nu,useId:Lu,unstable_isNewReconciler:!1},Eg={readContext:Tn,useCallback:zu,useContext:Tn,useEffect:To,useImperativeHandle:Hu,useInsertionEffect:Eu,useLayoutEffect:Tu,useMemo:Au,useReducer:Zr,useRef:Pu,useState:function(){return Zr(ia)},useDebugValue:Oo,useDeferredValue:function(n){var e=On();return Z===null?e.memoizedState=n:Mu(e,Z.memoizedState,n)},useTransition:function(){var n=Zr(ia)[0],e=On().memoizedState;return[n,e]},useMutableSource:Su,useSyncExternalStore:Nu,useId:Lu,unstable_isNewReconciler:!1};function zn(n,e){if(n&&n.defaultProps){e=U({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function zi(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:U({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Nr={isMounted:function(n){return(n=n._reactInternals)?We(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var a=gn(),r=ve(n),i=Zn(a,r);i.payload=e,t!=null&&(i.callback=t),e=ye(n,i,r),e!==null&&(Rn(e,n,r,a),Ma(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=gn(),r=ve(n),i=Zn(a,r);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=ye(n,i,r),e!==null&&(Rn(e,n,r,a),Ma(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=gn(),a=ve(n),r=Zn(t,a);r.tag=2,e!=null&&(r.callback=e),e=ye(n,r,a),e!==null&&(Rn(e,n,a,t),Ma(e,n,a))}};function Ll(n,e,t,a,r,i,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,i,o):e.prototype&&e.prototype.isPureReactComponent?!Zt(t,a)||!Zt(r,i):!0}function Fu(n,e,t){var a=!1,r=Se,i=e.contextType;return typeof i=="object"&&i!==null?i=Tn(i):(r=kn(e)?Ae:un.current,a=e.contextTypes,i=(a=a!=null)?gt(n,r):Se),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nr,n.stateNode=e,e._reactInternals=n,a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=i),e}function Rl(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&Nr.enqueueReplaceState(e,e.state,null)}function Ai(n,e,t,a){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},bo(n);var i=e.contextType;typeof i=="object"&&i!==null?r.context=Tn(i):(i=kn(e)?Ae:un.current,r.context=gt(n,i)),r.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(zi(n,e,i,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nr.enqueueReplaceState(r,r.state,null),rr(n,t,r,a),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function mt(n,e){try{var t="",a=e;do t+=rc(a),a=a.return;while(a);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:r,digest:null}}function qr(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Mi(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Tg=typeof WeakMap=="function"?WeakMap:Map;function Wu(n,e,t){t=Zn(-1,t),t.tag=3,t.payload={element:null};var a=e.value;return t.callback=function(){ur||(ur=!0,$i=a),Mi(n,e)},t}function Ku(n,e,t){t=Zn(-1,t),t.tag=3;var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=e.value;t.payload=function(){return a(r)},t.callback=function(){Mi(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Mi(n,e),typeof a!="function"&&(ke===null?ke=new Set([this]):ke.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Dl(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new Tg;var r=new Set;a.set(e,r)}else r=a.get(e),r===void 0&&(r=new Set,a.set(e,r));r.has(t)||(r.add(t),n=Ug.bind(null,n,e,t),e.then(n,n))}function Bl(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Fl(n,e,t,a,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Zn(-1,1),e.tag=2,ye(t,e,1))),t.lanes|=1),n)}var Og=ae.ReactCurrentOwner,mn=!1;function cn(n,e,t,a){e.child=n===null?ku(e,null,t,a):ht(e,n.child,t,a)}function Wl(n,e,t,a,r){t=t.render;var i=e.ref;return ut(e,r),a=Po(n,e,t,a,i,r),t=Eo(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,te(n,e,r)):(F&&t&&yo(e),e.flags|=1,cn(n,e,a,r),e.child)}function Kl(n,e,t,a,r){if(n===null){var i=t.type;return typeof i=="function"&&!Bo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Vu(n,e,i,a,r)):(n=Wa(t.type,null,a,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&r)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(o,a)&&n.ref===e.ref)return te(n,e,r)}return e.flags|=1,n=we(i,a),n.ref=e.ref,n.return=e,e.child=n}function Vu(n,e,t,a,r){if(n!==null){var i=n.memoizedProps;if(Zt(i,a)&&n.ref===e.ref)if(mn=!1,e.pendingProps=a=i,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,te(n,e,r)}return Li(n,e,t,a,r)}function Uu(n,e,t){var a=e.pendingProps,r=a.children,i=n!==null?n.memoizedState:null;if(a.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(rt,xn),xn|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,L(rt,xn),xn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,L(rt,xn),xn|=a}else i!==null?(a=i.baseLanes|t,e.memoizedState=null):a=t,L(rt,xn),xn|=a;return cn(n,e,r,t),e.child}function $u(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Li(n,e,t,a,r){var i=kn(t)?Ae:un.current;return i=gt(e,i),ut(e,r),t=Po(n,e,t,a,i,r),a=Eo(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,te(n,e,r)):(F&&a&&yo(e),e.flags|=1,cn(n,e,t,r),e.child)}function Vl(n,e,t,a,r){if(kn(t)){var i=!0;qa(e)}else i=!1;if(ut(e,r),e.stateNode===null)Da(n,e),Fu(e,t,a),Ai(e,t,a,r),a=!0;else if(n===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=kn(t)?Ae:un.current,c=gt(e,c));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||s!==c)&&Rl(e,o,a,c),se=!1;var h=e.memoizedState;o.state=h,rr(e,a,o,r),s=e.memoizedState,l!==a||h!==s||yn.current||se?(typeof m=="function"&&(zi(e,t,m,a),s=e.memoizedState),(l=se||Ll(e,t,l,a,h,s,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=s),o.props=a,o.state=s,o.context=c,a=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{o=e.stateNode,wu(n,e),l=e.memoizedProps,c=e.type===e.elementType?l:zn(e.type,l),o.props=c,p=e.pendingProps,h=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Tn(s):(s=kn(t)?Ae:un.current,s=gt(e,s));var w=t.getDerivedStateFromProps;(m=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==s)&&Rl(e,o,a,s),se=!1,h=e.memoizedState,o.state=h,rr(e,a,o,r);var k=e.memoizedState;l!==p||h!==k||yn.current||se?(typeof w=="function"&&(zi(e,t,w,a),k=e.memoizedState),(c=se||Ll(e,t,c,a,h,k,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,k,s)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=k),o.props=a,o.state=k,o.context=s,a=c):(typeof o.componentDidUpdate!="function"||l===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),a=!1)}return Ri(n,e,t,a,i,r)}function Ri(n,e,t,a,r,i){$u(n,e);var o=(e.flags&128)!==0;if(!a&&!o)return r&&Pl(e,t,!1),te(n,e,i);a=e.stateNode,Og.current=e;var l=o&&typeof t.getDerivedStateFromError!="function"?null:a.render();return e.flags|=1,n!==null&&o?(e.child=ht(e,n.child,null,i),e.child=ht(e,null,l,i)):cn(n,e,l,i),e.memoizedState=a.state,r&&Pl(e,t,!0),e.child}function Yu(n){var e=n.stateNode;e.pendingContext?_l(n,e.pendingContext,e.pendingContext!==e.context):e.context&&_l(n,e.context,!1),Io(n,e.containerInfo)}function Ul(n,e,t,a,r){return ft(),vo(r),e.flags|=256,cn(n,e,t,a),e.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Bi(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qu(n,e,t){var a=e.pendingProps,r=K.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=n!==null&&n.memoizedState===null?!1:(r&2)!==0),l?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),L(K,r&1),n===null)return Oi(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=a.children,n=a.fallback,i?(a=e.mode,i=e.child,o={mode:"hidden",children:o},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Cr(o,a,0,null),n=ze(n,a,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=Bi(t),e.memoizedState=Di,n):Ho(e,o));if(r=n.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Hg(n,e,o,a,l,r,t);if(i){i=a.fallback,o=e.mode,r=n.child,l=r.sibling;var s={mode:"hidden",children:a.children};return!(o&1)&&e.child!==r?(a=e.child,a.childLanes=0,a.pendingProps=s,e.deletions=null):(a=we(r,s),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=we(l,i):(i=ze(i,o,t,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,o=n.child.memoizedState,o=o===null?Bi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=n.childLanes&~t,e.memoizedState=Di,a}return i=n.child,n=i.sibling,a=we(i,{mode:"visible",children:a.children}),!(e.mode&1)&&(a.lanes=t),a.return=e,a.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=a,e.memoizedState=null,a}function Ho(n,e){return e=Cr({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ja(n,e,t,a){return a!==null&&vo(a),ht(e,n.child,null,t),n=Ho(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Hg(n,e,t,a,r,i,o){if(t)return e.flags&256?(e.flags&=-257,a=qr(Error(v(422))),ja(n,e,o,a)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=a.fallback,r=e.mode,a=Cr({mode:"visible",children:a.children},r,0,null),i=ze(i,r,o,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,e.mode&1&&ht(e,n.child,null,o),e.child.memoizedState=Bi(o),e.memoizedState=Di,i);if(!(e.mode&1))return ja(n,e,o,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,i=Error(v(419)),a=qr(i,a,void 0),ja(n,e,o,a)}if(l=(o&n.childLanes)!==0,mn||l){if(a=en,a!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|o)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,ee(n,r),Rn(a,n,r,-1))}return Do(),a=qr(Error(v(421))),ja(n,e,o,a)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=$g.bind(null,n),r._reactRetry=e,null):(n=i.treeContext,Sn=me(r.nextSibling),Nn=e,F=!0,Mn=null,n!==null&&(jn[_n++]=Xn,jn[_n++]=Jn,jn[_n++]=Me,Xn=n.id,Jn=n.overflow,Me=e),e=Ho(e,a.children),e.flags|=4096,e)}function $l(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Hi(n.return,e,t)}function ni(n,e,t,a,r){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r)}function Gu(n,e,t){var a=e.pendingProps,r=a.revealOrder,i=a.tail;if(cn(n,e,a.children,t),a=K.current,a&2)a=a&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$l(n,t,e);else if(n.tag===19)$l(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}if(L(K,a),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ir(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ni(e,!1,r,t,i);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ir(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ni(e,!0,t,null,i);break;case"together":ni(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function te(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Re|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(v(153));if(e.child!==null){for(n=e.child,t=we(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=we(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zg(n,e,t){switch(e.tag){case 3:Yu(e),ft();break;case 5:xu(e);break;case 1:kn(e.type)&&qa(e);break;case 4:Io(e,e.stateNode.containerInfo);break;case 10:var a=e.type._context,r=e.memoizedProps.value;L(tr,a._currentValue),a._currentValue=r;break;case 13:if(a=e.memoizedState,a!==null)return a.dehydrated!==null?(L(K,K.current&1),e.flags|=128,null):t&e.child.childLanes?Qu(n,e,t):(L(K,K.current&1),n=te(n,e,t),n!==null?n.sibling:null);L(K,K.current&1);break;case 19:if(a=(t&e.childLanes)!==0,n.flags&128){if(a)return Gu(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),L(K,K.current),a)break;return null;case 22:case 23:return e.lanes=0,Uu(n,e,t)}return te(n,e,t)}var Xu,Fi,Ju,Zu;Xu=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fi=function(){};Ju=function(n,e,t,a){var r=n.memoizedProps;if(r!==a){n=e.stateNode,Oe($n.current);var i=null;switch(t){case"input":r=ui(n,r),a=ui(n,a),i=[];break;case"select":r=U({},r,{value:void 0}),a=U({},a,{value:void 0}),i=[];break;case"textarea":r=gi(n,r),a=gi(n,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(n.onclick=Ja)}hi(t,a);var o;t=null;for(c in r)if(!a.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ut.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in a){var s=a[c];if(l=r!=null?r[c]:void 0,a.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ut.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&R("scroll",n),i||l===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Zu=function(n,e,t,a){t!==a&&(e.flags|=4)};function Et(n,e){if(!F)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function ln(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function Ag(n,e,t){var a=e.pendingProps;switch(ko(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return kn(e.type)&&Za(),ln(e),null;case 3:return a=e.stateNode,pt(),D(yn),D(un),jo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Ia(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(Gi(Mn),Mn=null))),Fi(n,e),ln(e),null;case 5:Co(e);var r=Oe(aa.current);if(t=e.type,n!==null&&e.stateNode!=null)Ju(n,e,t,a,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!a){if(e.stateNode===null)throw Error(v(166));return ln(e),null}if(n=Oe($n.current),Ia(e)){a=e.stateNode,t=e.type;var i=e.memoizedProps;switch(a[Vn]=e,a[ea]=i,n=(e.mode&1)!==0,t){case"dialog":R("cancel",a),R("close",a);break;case"iframe":case"object":case"embed":R("load",a);break;case"video":case"audio":for(r=0;r<At.length;r++)R(At[r],a);break;case"source":R("error",a);break;case"img":case"image":case"link":R("error",a),R("load",a);break;case"details":R("toggle",a);break;case"input":el(a,i),R("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},R("invalid",a);break;case"textarea":al(a,i),R("invalid",a)}hi(t,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?a.textContent!==l&&(i.suppressHydrationWarning!==!0&&ba(a.textContent,l,n),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ba(a.textContent,l,n),r=["children",""+l]):Ut.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&R("scroll",a)}switch(t){case"input":ma(a),tl(a,i,!0);break;case"textarea":ma(a),rl(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Ja)}a=r,e.updateQueue=a,a!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Cs(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof a.is=="string"?n=o.createElement(t,{is:a.is}):(n=o.createElement(t),t==="select"&&(o=n,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):n=o.createElementNS(n,t),n[Vn]=e,n[ea]=a,Xu(n,e,!1,!1),e.stateNode=n;n:{switch(o=pi(t,a),t){case"dialog":R("cancel",n),R("close",n),r=a;break;case"iframe":case"object":case"embed":R("load",n),r=a;break;case"video":case"audio":for(r=0;r<At.length;r++)R(At[r],n);r=a;break;case"source":R("error",n),r=a;break;case"img":case"image":case"link":R("error",n),R("load",n),r=a;break;case"details":R("toggle",n),r=a;break;case"input":el(n,a),r=ui(n,a),R("invalid",n);break;case"option":r=a;break;case"select":n._wrapperState={wasMultiple:!!a.multiple},r=U({},a,{value:void 0}),R("invalid",n);break;case"textarea":al(n,a),r=gi(n,a),R("invalid",n);break;default:r=a}hi(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Ps(n,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&js(n,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&$t(n,s):typeof s=="number"&&$t(n,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ut.hasOwnProperty(i)?s!=null&&i==="onScroll"&&R("scroll",n):s!=null&&to(n,i,s,o))}switch(t){case"input":ma(n),tl(n,a,!1);break;case"textarea":ma(n),rl(n);break;case"option":a.value!=null&&n.setAttribute("value",""+xe(a.value));break;case"select":n.multiple=!!a.multiple,i=a.value,i!=null?it(n,!!a.multiple,i,!1):a.defaultValue!=null&&it(n,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ja)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}}a&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(n&&e.stateNode!=null)Zu(n,e,n.memoizedProps,a);else{if(typeof a!="string"&&e.stateNode===null)throw Error(v(166));if(t=Oe(aa.current),Oe($n.current),Ia(e)){if(a=e.stateNode,t=e.memoizedProps,a[Vn]=e,(i=a.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:ba(a.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ba(a.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Vn]=e,e.stateNode=a}return ln(e),null;case 13:if(D(K),a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(F&&Sn!==null&&e.mode&1&&!(e.flags&128))mu(),ft(),e.flags|=98560,i=!1;else if(i=Ia(e),a!==null&&a.dehydrated!==null){if(n===null){if(!i)throw Error(v(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Vn]=e}else ft(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),i=!1}else Mn!==null&&(Gi(Mn),Mn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(a=a!==null,a!==(n!==null&&n.memoizedState!==null)&&a&&(e.child.flags|=8192,e.mode&1&&(n===null||K.current&1?q===0&&(q=3):Do())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return pt(),Fi(n,e),n===null&&qt(e.stateNode.containerInfo),ln(e),null;case 10:return So(e.type._context),ln(e),null;case 17:return kn(e.type)&&Za(),ln(e),null;case 19:if(D(K),i=e.memoizedState,i===null)return ln(e),null;if(a=(e.flags&128)!==0,o=i.rendering,o===null)if(a)Et(i,!1);else{if(q!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ir(n),o!==null){for(e.flags|=128,Et(i,!1),a=o.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),e.subtreeFlags=0,a=t,t=e.child;t!==null;)i=t,n=a,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,n=o.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return L(K,K.current&1|2),e.child}n=n.sibling}i.tail!==null&&Y()>yt&&(e.flags|=128,a=!0,Et(i,!1),e.lanes=4194304)}else{if(!a)if(n=ir(o),n!==null){if(e.flags|=128,a=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Et(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!F)return ln(e),null}else 2*Y()-i.renderingStartTime>yt&&t!==1073741824&&(e.flags|=128,a=!0,Et(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Y(),e.sibling=null,t=K.current,L(K,a?t&1|2:t&1),e):(ln(e),null);case 22:case 23:return Ro(),a=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==a&&(e.flags|=8192),a&&e.mode&1?xn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function Mg(n,e){switch(ko(e),e.tag){case 1:return kn(e.type)&&Za(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return pt(),D(yn),D(un),jo(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Co(e),null;case 13:if(D(K),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(v(340));ft()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return D(K),null;case 4:return pt(),null;case 10:return So(e.type._context),null;case 22:case 23:return Ro(),null;case 24:return null;default:return null}}var _a=!1,sn=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,b=null;function at(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){$(n,e,a)}else t.current=null}function Wi(n,e,t){try{t()}catch(a){$(n,e,a)}}var Yl=!1;function Rg(n,e){if(Ii=Qa,n=au(),mo(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var o=0,l=-1,s=-1,c=0,m=0,p=n,h=null;e:for(;;){for(var w;p!==t||r!==0&&p.nodeType!==3||(l=o+r),p!==i||a!==0&&p.nodeType!==3||(s=o+a),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===n)break e;if(h===t&&++c===r&&(l=o),h===i&&++m===a&&(s=o),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ci={focusedElem:n,selectionRange:t},Qa=!1,b=e;b!==null;)if(e=b,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,b=n;else for(;b!==null;){e=b;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,H=k.memoizedState,g=e.stateNode,d=g.getSnapshotBeforeUpdate(e.elementType===e.type?x:zn(e.type,x),H);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){$(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}return k=Yl,Yl=!1,k}function Wt(n,e,t){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&n)===n){var i=r.destroy;r.destroy=void 0,i!==void 0&&Wi(e,t,i)}r=r.next}while(r!==a)}}function br(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var a=t.create;t.destroy=a()}t=t.next}while(t!==e)}}function Ki(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function qu(n){var e=n.alternate;e!==null&&(n.alternate=null,qu(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Vn],delete e[ea],delete e[Pi],delete e[wg],delete e[xg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nd(n){return n.tag===5||n.tag===3||n.tag===4}function Ql(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||nd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vi(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ja));else if(a!==4&&(n=n.child,n!==null))for(Vi(n,e,t),n=n.sibling;n!==null;)Vi(n,e,t),n=n.sibling}function Ui(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(n=n.child,n!==null))for(Ui(n,e,t),n=n.sibling;n!==null;)Ui(n,e,t),n=n.sibling}var tn=null,An=!1;function oe(n,e,t){for(t=t.child;t!==null;)ed(n,e,t),t=t.sibling}function ed(n,e,t){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(mr,t)}catch{}switch(t.tag){case 5:sn||at(t,e);case 6:var a=tn,r=An;tn=null,oe(n,e,t),tn=a,An=r,tn!==null&&(An?(n=tn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):tn.removeChild(t.stateNode));break;case 18:tn!==null&&(An?(n=tn,t=t.stateNode,n.nodeType===8?Yr(n.parentNode,t):n.nodeType===1&&Yr(n,t),Xt(n)):Yr(tn,t.stateNode));break;case 4:a=tn,r=An,tn=t.stateNode.containerInfo,An=!0,oe(n,e,t),tn=a,An=r;break;case 0:case 11:case 14:case 15:if(!sn&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Wi(t,e,o),r=r.next}while(r!==a)}oe(n,e,t);break;case 1:if(!sn&&(at(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){$(t,e,l)}oe(n,e,t);break;case 21:oe(n,e,t);break;case 22:t.mode&1?(sn=(a=sn)||t.memoizedState!==null,oe(n,e,t),sn=a):oe(n,e,t);break;default:oe(n,e,t)}}function Gl(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Lg),e.forEach(function(a){var r=Yg.bind(null,n,a);t.has(a)||(t.add(a),a.then(r,r))})}}function Hn(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var i=n,o=e,l=o;n:for(;l!==null;){switch(l.tag){case 5:tn=l.stateNode,An=!1;break n;case 3:tn=l.stateNode.containerInfo,An=!0;break n;case 4:tn=l.stateNode.containerInfo,An=!0;break n}l=l.return}if(tn===null)throw Error(v(160));ed(i,o,r),tn=null,An=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(c){$(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)td(e,n),e=e.sibling}function td(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hn(e,n),Wn(n),a&4){try{Wt(3,n,n.return),br(3,n)}catch(x){$(n,n.return,x)}try{Wt(5,n,n.return)}catch(x){$(n,n.return,x)}}break;case 1:Hn(e,n),Wn(n),a&512&&t!==null&&at(t,t.return);break;case 5:if(Hn(e,n),Wn(n),a&512&&t!==null&&at(t,t.return),n.flags&32){var r=n.stateNode;try{$t(r,"")}catch(x){$(n,n.return,x)}}if(a&4&&(r=n.stateNode,r!=null)){var i=n.memoizedProps,o=t!==null?t.memoizedProps:i,l=n.type,s=n.updateQueue;if(n.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&bs(r,i),pi(l,o);var c=pi(l,i);for(o=0;o<s.length;o+=2){var m=s[o],p=s[o+1];m==="style"?Ps(r,p):m==="dangerouslySetInnerHTML"?js(r,p):m==="children"?$t(r,p):to(r,m,p,c)}switch(l){case"input":di(r,i);break;case"textarea":Is(r,i);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?it(r,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?it(r,!!i.multiple,i.defaultValue,!0):it(r,!!i.multiple,i.multiple?[]:"",!1))}r[ea]=i}catch(x){$(n,n.return,x)}}break;case 6:if(Hn(e,n),Wn(n),a&4){if(n.stateNode===null)throw Error(v(162));r=n.stateNode,i=n.memoizedProps;try{r.nodeValue=i}catch(x){$(n,n.return,x)}}break;case 3:if(Hn(e,n),Wn(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Xt(e.containerInfo)}catch(x){$(n,n.return,x)}break;case 4:Hn(e,n),Wn(n);break;case 13:Hn(e,n),Wn(n),r=n.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Mo=Y())),a&4&&Gl(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(sn=(c=sn)||m,Hn(e,n),sn=c):Hn(e,n),Wn(n),a&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!m&&n.mode&1)for(b=n,m=n.child;m!==null;){for(p=b=m;b!==null;){switch(h=b,w=h.child,h.tag){case 0:case 11:case 14:case 15:Wt(4,h,h.return);break;case 1:at(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){a=h,t=h.return;try{e=a,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(x){$(a,t,x)}}break;case 5:at(h,h.return);break;case 22:if(h.memoizedState!==null){Jl(p);continue}}w!==null?(w.return=h,b=w):Jl(p)}m=m.sibling}n:for(m=null,p=n;;){if(p.tag===5){if(m===null){m=p;try{r=p.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=_s("display",o))}catch(x){$(n,n.return,x)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){$(n,n.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break n;for(;p.sibling===null;){if(p.return===null||p.return===n)break n;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Hn(e,n),Wn(n),a&4&&Gl(n);break;case 21:break;default:Hn(e,n),Wn(n)}}function Wn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(nd(t)){var a=t;break n}t=t.return}throw Error(v(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&($t(r,""),a.flags&=-33);var i=Ql(n);Ui(n,i,r);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Ql(n);Vi(n,l,o);break;default:throw Error(v(161))}}catch(s){$(n,n.return,s)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Dg(n,e,t){b=n,ad(n)}function ad(n,e,t){for(var a=(n.mode&1)!==0;b!==null;){var r=b,i=r.child;if(r.tag===22&&a){var o=r.memoizedState!==null||_a;if(!o){var l=r.alternate,s=l!==null&&l.memoizedState!==null||sn;l=_a;var c=sn;if(_a=o,(sn=s)&&!c)for(b=r;b!==null;)o=b,s=o.child,o.tag===22&&o.memoizedState!==null?Zl(r):s!==null?(s.return=o,b=s):Zl(r);for(;i!==null;)b=i,ad(i),i=i.sibling;b=r,_a=l,sn=c}Xl(n)}else r.subtreeFlags&8772&&i!==null?(i.return=r,b=i):Xl(n)}}function Xl(n){for(;b!==null;){var e=b;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||br(5,e);break;case 1:var a=e.stateNode;if(e.flags&4&&!sn)if(t===null)a.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:zn(e.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&zl(e,i,a);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}zl(e,o,t)}break;case 5:var l=e.stateNode;if(t===null&&e.flags&4){t=l;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Xt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}sn||e.flags&512&&Ki(e)}catch(h){$(e,e.return,h)}}if(e===n){b=null;break}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}}function Jl(n){for(;b!==null;){var e=b;if(e===n){b=null;break}var t=e.sibling;if(t!==null){t.return=e.return,b=t;break}b=e.return}}function Zl(n){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{br(4,e)}catch(s){$(e,t,s)}break;case 1:var a=e.stateNode;if(typeof a.componentDidMount=="function"){var r=e.return;try{a.componentDidMount()}catch(s){$(e,r,s)}}var i=e.return;try{Ki(e)}catch(s){$(e,i,s)}break;case 5:var o=e.return;try{Ki(e)}catch(s){$(e,o,s)}}}catch(s){$(e,e.return,s)}if(e===n){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var Bg=Math.ceil,sr=ae.ReactCurrentDispatcher,zo=ae.ReactCurrentOwner,En=ae.ReactCurrentBatchConfig,z=0,en=null,J=null,an=0,xn=0,rt=be(0),q=0,la=null,Re=0,Ir=0,Ao=0,Kt=null,pn=null,Mo=0,yt=1/0,Qn=null,ur=!1,$i=null,ke=null,Pa=!1,ge=null,dr=0,Vt=0,Yi=null,Ba=-1,Fa=0;function gn(){return z&6?Y():Ba!==-1?Ba:Ba=Y()}function ve(n){return n.mode&1?z&2&&an!==0?an&-an:Ng.transition!==null?(Fa===0&&(Fa=Fs()),Fa):(n=M,n!==0||(n=window.event,n=n===void 0?16:Qs(n.type)),n):1}function Rn(n,e,t,a){if(50<Vt)throw Vt=0,Yi=null,Error(v(185));ua(n,t,a),(!(z&2)||n!==en)&&(n===en&&(!(z&2)&&(Ir|=t),q===4&&de(n,an)),vn(n,a),t===1&&z===0&&!(e.mode&1)&&(yt=Y()+500,xr&&Ie()))}function vn(n,e){var t=n.callbackNode;Nc(n,e);var a=Ya(n,n===en?an:0);if(a===0)t!==null&&ll(t),n.callbackNode=null,n.callbackPriority=0;else if(e=a&-a,n.callbackPriority!==e){if(t!=null&&ll(t),e===1)n.tag===0?Sg(ql.bind(null,n)):fu(ql.bind(null,n)),kg(function(){!(z&6)&&Ie()}),t=null;else{switch(Ws(a)){case 1:t=lo;break;case 4:t=Ds;break;case 16:t=$a;break;case 536870912:t=Bs;break;default:t=$a}t=cd(t,rd.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function rd(n,e){if(Ba=-1,Fa=0,z&6)throw Error(v(327));var t=n.callbackNode;if(dt()&&n.callbackNode!==t)return null;var a=Ya(n,n===en?an:0);if(a===0)return null;if(a&30||a&n.expiredLanes||e)e=cr(n,a);else{e=a;var r=z;z|=2;var i=od();(en!==n||an!==e)&&(Qn=null,yt=Y()+500,He(n,e));do try{Kg();break}catch(l){id(n,l)}while(!0);xo(),sr.current=i,z=r,J!==null?e=0:(en=null,an=0,e=q)}if(e!==0){if(e===2&&(r=wi(n),r!==0&&(a=r,e=Qi(n,r))),e===1)throw t=la,He(n,0),de(n,a),vn(n,Y()),t;if(e===6)de(n,a);else{if(r=n.current.alternate,!(a&30)&&!Fg(r)&&(e=cr(n,a),e===2&&(i=wi(n),i!==0&&(a=i,e=Qi(n,i))),e===1))throw t=la,He(n,0),de(n,a),vn(n,Y()),t;switch(n.finishedWork=r,n.finishedLanes=a,e){case 0:case 1:throw Error(v(345));case 2:Pe(n,pn,Qn);break;case 3:if(de(n,a),(a&130023424)===a&&(e=Mo+500-Y(),10<e)){if(Ya(n,0)!==0)break;if(r=n.suspendedLanes,(r&a)!==a){gn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=_i(Pe.bind(null,n,pn,Qn),e);break}Pe(n,pn,Qn);break;case 4:if(de(n,a),(a&4194240)===a)break;for(e=n.eventTimes,r=-1;0<a;){var o=31-Ln(a);i=1<<o,o=e[o],o>r&&(r=o),a&=~i}if(a=r,a=Y()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Bg(a/1960))-a,10<a){n.timeoutHandle=_i(Pe.bind(null,n,pn,Qn),a);break}Pe(n,pn,Qn);break;case 5:Pe(n,pn,Qn);break;default:throw Error(v(329))}}}return vn(n,Y()),n.callbackNode===t?rd.bind(null,n):null}function Qi(n,e){var t=Kt;return n.current.memoizedState.isDehydrated&&(He(n,e).flags|=256),n=cr(n,e),n!==2&&(e=pn,pn=t,e!==null&&Gi(e)),n}function Gi(n){pn===null?pn=n:pn.push.apply(pn,n)}function Fg(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],i=r.getSnapshot;r=r.value;try{if(!Dn(i(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function de(n,e){for(e&=~Ao,e&=~Ir,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ln(e),a=1<<t;n[t]=-1,e&=~a}}function ql(n){if(z&6)throw Error(v(327));dt();var e=Ya(n,0);if(!(e&1))return vn(n,Y()),null;var t=cr(n,e);if(n.tag!==0&&t===2){var a=wi(n);a!==0&&(e=a,t=Qi(n,a))}if(t===1)throw t=la,He(n,0),de(n,e),vn(n,Y()),t;if(t===6)throw Error(v(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Pe(n,pn,Qn),vn(n,Y()),null}function Lo(n,e){var t=z;z|=1;try{return n(e)}finally{z=t,z===0&&(yt=Y()+500,xr&&Ie())}}function De(n){ge!==null&&ge.tag===0&&!(z&6)&&dt();var e=z;z|=1;var t=En.transition,a=M;try{if(En.transition=null,M=1,n)return n()}finally{M=a,En.transition=t,z=e,!(z&6)&&Ie()}}function Ro(){xn=rt.current,D(rt)}function He(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,yg(t)),J!==null)for(t=J.return;t!==null;){var a=t;switch(ko(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Za();break;case 3:pt(),D(yn),D(un),jo();break;case 5:Co(a);break;case 4:pt();break;case 13:D(K);break;case 19:D(K);break;case 10:So(a.type._context);break;case 22:case 23:Ro()}t=t.return}if(en=n,J=n=we(n.current,null),an=xn=e,q=0,la=null,Ao=Ir=Re=0,pn=Kt=null,Te!==null){for(e=0;e<Te.length;e++)if(t=Te[e],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,i=t.pending;if(i!==null){var o=i.next;i.next=r,a.next=o}t.pending=a}Te=null}return n}function id(n,e){do{var t=J;try{if(xo(),La.current=lr,or){for(var a=V.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}or=!1}if(Le=0,nn=Z=V=null,Ft=!1,ra=0,zo.current=null,t===null||t.return===null){q=1,la=e,J=null;break}n:{var i=n,o=t.return,l=t,s=e;if(e=an,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Bl(o);if(w!==null){w.flags&=-257,Fl(w,o,l,i,e),w.mode&1&&Dl(i,c,e),e=w,s=c;var k=e.updateQueue;if(k===null){var x=new Set;x.add(s),e.updateQueue=x}else k.add(s);break n}else{if(!(e&1)){Dl(i,c,e),Do();break n}s=Error(v(426))}}else if(F&&l.mode&1){var H=Bl(o);if(H!==null){!(H.flags&65536)&&(H.flags|=256),Fl(H,o,l,i,e),vo(mt(s,l));break n}}i=s=mt(s,l),q!==4&&(q=2),Kt===null?Kt=[i]:Kt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=Wu(i,s,e);Hl(i,g);break n;case 1:l=s;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ke===null||!ke.has(f)))){i.flags|=65536,e&=-e,i.lanes|=e;var y=Ku(i,l,e);Hl(i,y);break n}}i=i.return}while(i!==null)}sd(t)}catch(N){e=N,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function od(){var n=sr.current;return sr.current=lr,n===null?lr:n}function Do(){(q===0||q===3||q===2)&&(q=4),en===null||!(Re&268435455)&&!(Ir&268435455)||de(en,an)}function cr(n,e){var t=z;z|=2;var a=od();(en!==n||an!==e)&&(Qn=null,He(n,e));do try{Wg();break}catch(r){id(n,r)}while(!0);if(xo(),z=t,sr.current=a,J!==null)throw Error(v(261));return en=null,an=0,q}function Wg(){for(;J!==null;)ld(J)}function Kg(){for(;J!==null&&!hc();)ld(J)}function ld(n){var e=dd(n.alternate,n,xn);n.memoizedProps=n.pendingProps,e===null?sd(n):J=e,zo.current=null}function sd(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Mg(t,e),t!==null){t.flags&=32767,J=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{q=6,J=null;return}}else if(t=Ag(t,e,xn),t!==null){J=t;return}if(e=e.sibling,e!==null){J=e;return}J=e=n}while(e!==null);q===0&&(q=5)}function Pe(n,e,t){var a=M,r=En.transition;try{En.transition=null,M=1,Vg(n,e,t,a)}finally{En.transition=r,M=a}return null}function Vg(n,e,t,a){do dt();while(ge!==null);if(z&6)throw Error(v(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(v(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(bc(n,i),n===en&&(J=en=null,an=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Pa||(Pa=!0,cd($a,function(){return dt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=En.transition,En.transition=null;var o=M;M=1;var l=z;z|=4,zo.current=null,Rg(n,t),td(t,n),dg(Ci),Qa=!!Ii,Ci=Ii=null,n.current=t,Dg(t),pc(),z=l,M=o,En.transition=i}else n.current=t;if(Pa&&(Pa=!1,ge=n,dr=r),i=n.pendingLanes,i===0&&(ke=null),kc(t.stateNode),vn(n,Y()),e!==null)for(a=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(ur)throw ur=!1,n=$i,$i=null,n;return dr&1&&n.tag!==0&&dt(),i=n.pendingLanes,i&1?n===Yi?Vt++:(Vt=0,Yi=n):Vt=0,Ie(),null}function dt(){if(ge!==null){var n=Ws(dr),e=En.transition,t=M;try{if(En.transition=null,M=16>n?16:n,ge===null)var a=!1;else{if(n=ge,ge=null,dr=0,z&6)throw Error(v(331));var r=z;for(z|=4,b=n.current;b!==null;){var i=b,o=i.child;if(b.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(b=c;b!==null;){var m=b;switch(m.tag){case 0:case 11:case 15:Wt(8,m,i)}var p=m.child;if(p!==null)p.return=m,b=p;else for(;b!==null;){m=b;var h=m.sibling,w=m.return;if(qu(m),m===c){b=null;break}if(h!==null){h.return=w,b=h;break}b=w}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var H=x.sibling;x.sibling=null,x=H}while(x!==null)}}b=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,b=o;else n:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wt(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,b=g;break n}b=i.return}}var d=n.current;for(b=d;b!==null;){o=b;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,b=f;else n:for(o=d;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:br(9,l)}}catch(N){$(l,l.return,N)}if(l===o){b=null;break n}var y=l.sibling;if(y!==null){y.return=l.return,b=y;break n}b=l.return}}if(z=r,Ie(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(mr,n)}catch{}a=!0}return a}finally{M=t,En.transition=e}}return!1}function ns(n,e,t){e=mt(t,e),e=Wu(n,e,1),n=ye(n,e,1),e=gn(),n!==null&&(ua(n,1,e),vn(n,e))}function $(n,e,t){if(n.tag===3)ns(n,n,t);else for(;e!==null;){if(e.tag===3){ns(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ke===null||!ke.has(a))){n=mt(t,n),n=Ku(e,n,1),e=ye(e,n,1),n=gn(),e!==null&&(ua(e,1,n),vn(e,n));break}}e=e.return}}function Ug(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),e=gn(),n.pingedLanes|=n.suspendedLanes&t,en===n&&(an&t)===t&&(q===4||q===3&&(an&130023424)===an&&500>Y()-Mo?He(n,0):Ao|=t),vn(n,e)}function ud(n,e){e===0&&(n.mode&1?(e=va,va<<=1,!(va&130023424)&&(va=4194304)):e=1);var t=gn();n=ee(n,e),n!==null&&(ua(n,e,t),vn(n,t))}function $g(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ud(n,t)}function Yg(n,e){var t=0;switch(n.tag){case 13:var a=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=n.stateNode;break;default:throw Error(v(314))}a!==null&&a.delete(e),ud(n,t)}var dd;dd=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||yn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,zg(n,e,t);mn=!!(n.flags&131072)}else mn=!1,F&&e.flags&1048576&&hu(e,er,e.index);switch(e.lanes=0,e.tag){case 2:var a=e.type;Da(n,e),n=e.pendingProps;var r=gt(e,un.current);ut(e,t),r=Po(null,e,a,n,r,t);var i=Eo();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kn(a)?(i=!0,qa(e)):i=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bo(e),r.updater=Nr,e.stateNode=r,r._reactInternals=e,Ai(e,a,n,t),e=Ri(null,e,a,!0,i,t)):(e.tag=0,F&&i&&yo(e),cn(null,e,r,t),e=e.child),e;case 16:a=e.elementType;n:{switch(Da(n,e),n=e.pendingProps,r=a._init,a=r(a._payload),e.type=a,r=e.tag=Gg(a),n=zn(a,n),r){case 0:e=Li(null,e,a,n,t);break n;case 1:e=Vl(null,e,a,n,t);break n;case 11:e=Wl(null,e,a,n,t);break n;case 14:e=Kl(null,e,a,zn(a.type,n),t);break n}throw Error(v(306,a,""))}return e;case 0:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:zn(a,r),Li(n,e,a,r,t);case 1:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:zn(a,r),Vl(n,e,a,r,t);case 3:n:{if(Yu(e),n===null)throw Error(v(387));a=e.pendingProps,i=e.memoizedState,r=i.element,wu(n,e),rr(e,a,null,t);var o=e.memoizedState;if(a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){r=mt(Error(v(423)),e),e=Ul(n,e,a,t,r);break n}else if(a!==r){r=mt(Error(v(424)),e),e=Ul(n,e,a,t,r);break n}else for(Sn=me(e.stateNode.containerInfo.firstChild),Nn=e,F=!0,Mn=null,t=ku(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),a===r){e=te(n,e,t);break n}cn(n,e,a,t)}e=e.child}return e;case 5:return xu(e),n===null&&Oi(e),a=e.type,r=e.pendingProps,i=n!==null?n.memoizedProps:null,o=r.children,ji(a,r)?o=null:i!==null&&ji(a,i)&&(e.flags|=32),$u(n,e),cn(n,e,o,t),e.child;case 6:return n===null&&Oi(e),null;case 13:return Qu(n,e,t);case 4:return Io(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=ht(e,null,a,t):cn(n,e,a,t),e.child;case 11:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:zn(a,r),Wl(n,e,a,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(a=e.type._context,r=e.pendingProps,i=e.memoizedProps,o=r.value,L(tr,a._currentValue),a._currentValue=o,i!==null)if(Dn(i.value,o)){if(i.children===r.children&&!yn.current){e=te(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===a){if(i.tag===1){s=Zn(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Hi(i.return,t,e),l.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Hi(o,t,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,a=e.pendingProps.children,ut(e,t),r=Tn(r),a=a(r),e.flags|=1,cn(n,e,a,t),e.child;case 14:return a=e.type,r=zn(a,e.pendingProps),r=zn(a.type,r),Kl(n,e,a,r,t);case 15:return Vu(n,e,e.type,e.pendingProps,t);case 17:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:zn(a,r),Da(n,e),e.tag=1,kn(a)?(n=!0,qa(e)):n=!1,ut(e,t),Fu(e,a,r),Ai(e,a,r,t),Ri(null,e,a,!0,n,t);case 19:return Gu(n,e,t);case 22:return Uu(n,e,t)}throw Error(v(156,e.tag))};function cd(n,e){return Rs(n,e)}function Qg(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,e,t,a){return new Qg(n,e,t,a)}function Bo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gg(n){if(typeof n=="function")return Bo(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ro)return 11;if(n===io)return 14}return 2}function we(n,e){var t=n.alternate;return t===null?(t=Pn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Wa(n,e,t,a,r,i){var o=2;if(a=n,typeof n=="function")Bo(n)&&(o=1);else if(typeof n=="string")o=5;else n:switch(n){case Qe:return ze(t.children,r,i,e);case ao:o=8,r|=8;break;case ii:return n=Pn(12,t,e,r|2),n.elementType=ii,n.lanes=i,n;case oi:return n=Pn(13,t,e,r),n.elementType=oi,n.lanes=i,n;case li:return n=Pn(19,t,e,r),n.elementType=li,n.lanes=i,n;case xs:return Cr(t,r,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case vs:o=10;break n;case ws:o=9;break n;case ro:o=11;break n;case io:o=14;break n;case le:o=16,a=null;break n}throw Error(v(130,n==null?n:typeof n,""))}return e=Pn(o,t,e,r),e.elementType=n,e.type=a,e.lanes=i,e}function ze(n,e,t,a){return n=Pn(7,n,a,e),n.lanes=t,n}function Cr(n,e,t,a){return n=Pn(22,n,a,e),n.elementType=xs,n.lanes=t,n.stateNode={isHidden:!1},n}function ei(n,e,t){return n=Pn(6,n,null,e),n.lanes=t,n}function ti(n,e,t){return e=Pn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Xg(n,e,t,a,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mr(0),this.expirationTimes=Mr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fo(n,e,t,a,r,i,o,l,s){return n=new Xg(n,e,t,l,s),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Pn(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},bo(i),n}function Jg(n,e,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ye,key:a==null?null:""+a,children:n,containerInfo:e,implementation:t}}function gd(n){if(!n)return Se;n=n._reactInternals;n:{if(We(n)!==n||n.tag!==1)throw Error(v(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(kn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(v(171))}if(n.tag===1){var t=n.type;if(kn(t))return gu(n,t,e)}return e}function fd(n,e,t,a,r,i,o,l,s){return n=Fo(t,a,!0,n,r,i,o,l,s),n.context=gd(null),t=n.current,a=gn(),r=ve(t),i=Zn(a,r),i.callback=e??null,ye(t,i,r),n.current.lanes=r,ua(n,r,a),vn(n,a),n}function jr(n,e,t,a){var r=e.current,i=gn(),o=ve(r);return t=gd(t),e.context===null?e.context=t:e.pendingContext=t,e=Zn(i,o),e.payload={element:n},a=a===void 0?null:a,a!==null&&(e.callback=a),n=ye(r,e,o),n!==null&&(Rn(n,r,o,i),Ma(n,r,o)),o}function gr(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function es(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Wo(n,e){es(n,e),(n=n.alternate)&&es(n,e)}function Zg(){return null}var hd=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ko(n){this._internalRoot=n}_r.prototype.render=Ko.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(v(409));jr(n,e,null,null)};_r.prototype.unmount=Ko.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;De(function(){jr(null,n,null,null)}),e[ne]=null}};function _r(n){this._internalRoot=n}_r.prototype.unstable_scheduleHydration=function(n){if(n){var e=Us();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ue.length&&e!==0&&e<ue[t].priority;t++);ue.splice(t,0,n),t===0&&Ys(n)}};function Vo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pr(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ts(){}function qg(n,e,t,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var c=gr(o);i.call(c)}}var o=fd(e,a,n,0,null,!1,!1,"",ts);return n._reactRootContainer=o,n[ne]=o.current,qt(n.nodeType===8?n.parentNode:n),De(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var c=gr(s);l.call(c)}}var s=Fo(n,0,!1,null,null,!1,!1,"",ts);return n._reactRootContainer=s,n[ne]=s.current,qt(n.nodeType===8?n.parentNode:n),De(function(){jr(e,s,t,a)}),s}function Er(n,e,t,a,r){var i=t._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var l=r;r=function(){var s=gr(o);l.call(s)}}jr(e,o,n,r)}else o=qg(t,e,n,r,a);return gr(o)}Ks=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=zt(e.pendingLanes);t!==0&&(so(e,t|1),vn(e,Y()),!(z&6)&&(yt=Y()+500,Ie()))}break;case 13:De(function(){var a=ee(n,1);if(a!==null){var r=gn();Rn(a,n,1,r)}}),Wo(n,1)}};uo=function(n){if(n.tag===13){var e=ee(n,134217728);if(e!==null){var t=gn();Rn(e,n,134217728,t)}Wo(n,134217728)}};Vs=function(n){if(n.tag===13){var e=ve(n),t=ee(n,e);if(t!==null){var a=gn();Rn(t,n,e,a)}Wo(n,e)}};Us=function(){return M};$s=function(n,e){var t=M;try{return M=n,e()}finally{M=t}};yi=function(n,e,t){switch(e){case"input":if(di(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var r=wr(a);if(!r)throw Error(v(90));Ns(a),di(a,r)}}}break;case"textarea":Is(n,t);break;case"select":e=t.value,e!=null&&it(n,!!t.multiple,e,!1)}};Os=Lo;Hs=De;var nf={usingClientEntryPoint:!1,Events:[ca,Ze,wr,Es,Ts,Lo]},Tt={findFiberByHostInstance:Ee,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:Tt.bundleType,version:Tt.version,rendererPackageName:Tt.rendererPackageName,rendererConfig:Tt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ms(n),n===null?null:n.stateNode},findFiberByHostInstance:Tt.findFiberByHostInstance||Zg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{mr=Ea.inject(ef),Un=Ea}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nf;In.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vo(e))throw Error(v(200));return Jg(n,e,null,t)};In.createRoot=function(n,e){if(!Vo(n))throw Error(v(299));var t=!1,a="",r=hd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fo(n,1,!1,null,null,t,!1,a,r),n[ne]=e.current,qt(n.nodeType===8?n.parentNode:n),new Ko(e)};In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(v(188)):(n=Object.keys(n).join(","),Error(v(268,n)));return n=Ms(e),n=n===null?null:n.stateNode,n};In.flushSync=function(n){return De(n)};In.hydrate=function(n,e,t){if(!Pr(e))throw Error(v(200));return Er(null,n,e,!0,t)};In.hydrateRoot=function(n,e,t){if(!Vo(n))throw Error(v(405));var a=t!=null&&t.hydratedSources||null,r=!1,i="",o=hd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=fd(e,null,n,1,t??null,r,!1,i,o),n[ne]=e.current,qt(n),a)for(n=0;n<a.length;n++)t=a[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new _r(e)};In.render=function(n,e,t){if(!Pr(e))throw Error(v(200));return Er(null,n,e,!1,t)};In.unmountComponentAtNode=function(n){if(!Pr(n))throw Error(v(40));return n._reactRootContainer?(De(function(){Er(null,null,n,!1,function(){n._reactRootContainer=null,n[ne]=null})}),!0):!1};In.unstable_batchedUpdates=Lo;In.unstable_renderSubtreeIntoContainer=function(n,e,t,a){if(!Pr(t))throw Error(v(200));if(n==null||n._reactInternals===void 0)throw Error(v(38));return Er(n,e,t,!1,a)};In.version="18.3.1-next-f1338f8080-20240426";function pd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd)}catch(n){console.error(n)}}pd(),ps.exports=In;var tf=ps.exports,as=tf;ai.createRoot=as.createRoot,ai.hydrateRoot=as.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var af={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Q=(n,e)=>{const t=E.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:s,...c},m)=>E.createElement("svg",{ref:m,...af,width:r,height:r,stroke:a,strokeWidth:o?Number(i)*24/Number(r):i,className:["lucide",`lucide-${rf(n)}`,l].join(" "),...c},[...e.map(([p,h])=>E.createElement(p,h)),...Array.isArray(s)?s:[s]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=Q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=Q("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=Q("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=Q("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=Q("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=Q("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=Q("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=Q("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=Q("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=Q("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=Q("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=Q("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=Q("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=Q("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=Q("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=Q("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Q("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),yf=[{id:"1",title:"Obvious",color:"from-pink-600 to-purple-700",cover:"/music/Obvious/COVER - Obvious.png",audio:"/music/Obvious/Obvious - 3rd Harmonik.mp3",story:`<div class="song-popup-section">
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
Na ika'y magiging akin`}],kf=({isPlaying:n,currentSong:e,canvasRef:t})=>(E.useEffect(()=>{const a=t.current;if(!a)return;const r=a.getContext("2d");let i;const o=()=>{a.width=a.offsetWidth,a.height=a.offsetHeight;const l=a.width,s=a.height;r.clearRect(0,0,l,s);const c=8,m=6,p=Math.floor(l/(c+m));for(let h=0;h<p;h++){let w;if(n){const x=Date.now()/150;w=Math.abs(Math.sin(h*.3+x)*Math.cos(h*.7-x*1.5))*s*.9}else w=4;const k=r.createLinearGradient(0,s-w,0,s);k.addColorStop(0,"#f472b6"),k.addColorStop(.5,"#c084fc"),k.addColorStop(1,"#22d3ee"),r.fillStyle=k,r.fillRect(h*(c+m),s-w,c,w),r.globalAlpha=.2,r.fillRect(h*(c+m),s,c,w*.3),r.globalAlpha=1}i=requestAnimationFrame(o)};return o(),()=>cancelAnimationFrame(i)},[n,e,t]),u.jsx("canvas",{ref:t,className:"w-full h-full rounded-full blur-xl"})),vf=({songs:n,currentIndex:e,setCurrentIndex:t,setIsPlaylistOpen:a,isPlaylistOpen:r,draggedItem:i,handleDragStart:o,handleDragOver:l,setDraggedItem:s})=>u.jsx("div",{className:`fixed top-0 left-0 h-full w-full md:w-96 bg-black/95 border-r-2 border-pink-500 z-40 transform transition-transform duration-500 ease-out shadow-[0_0_50px_rgba(236,72,153,0.3)] ${r?"translate-x-0":"-translate-x-full"}`,children:u.jsxs("div",{className:"p-6 h-full flex flex-col pt-24",children:[u.jsxs("div",{className:"flex justify-between items-center mb-6 border-b border-pink-500/30 pb-4",children:[u.jsx("h2",{className:"text-2xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-[0_2px_10px_rgba(236,72,153,0.5)]",children:"TRACK LIST"}),u.jsxs("div",{className:"text-xs font-mono text-pink-500 animate-pulse",children:[n.length," SONGS LOADED"]})]}),u.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-2",children:n.map((c,m)=>u.jsxs("div",{draggable:!0,onDragStart:p=>o(p,m),onDragOver:p=>l(p,m),onDragEnd:()=>s(null),onClick:()=>{t(m),a(!1)},className:`group relative flex items-center gap-4 p-3 rounded-sm border border-transparent cursor-pointer transition-all duration-200
                      ${e===m?"bg-pink-900/20 border-pink-500/50 shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]":"hover:bg-white/5 hover:border-cyan-500/30"}
                      ${i===c?"opacity-30 border-dashed border-white":""}
                  `,children:[u.jsx("div",{className:`w-8 h-8 flex items-center justify-center font-mono text-sm border border-white/10 ${e===m?"text-pink-400 border-pink-500":"text-slate-500"}`,children:e===m?u.jsx("div",{className:"w-2 h-2 bg-pink-500 animate-ping"}):m+1}),u.jsx("div",{className:"flex-1 min-w-0",children:u.jsx("div",{className:`font-bold truncate text-sm uppercase tracking-wider ${e===m?"text-pink-300":"text-slate-300 group-hover:text-cyan-300"}`,children:c.title})}),u.jsx(ff,{className:"w-4 h-4 text-slate-700 group-hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"})]},c.id))}),u.jsx("div",{className:"mt-4 pt-4 border-t border-white/10 text-center font-mono text-[10px] text-slate-500",children:"DRAG TO REORDER // CLICK TO PLAY"})]})}),hr=n=>{if(!n||isNaN(n))return"0:00";const e=Math.floor(n/60),t=Math.floor(n%60);return`${e}:${t<10?"0":""}${t}`},Be=n=>{if(!n)return"";if(n.startsWith("http"))return n;const e="/3rdharmonik.player/".replace(/\/$/,""),t=n.startsWith("/")?n:`/${n}`;return`${e}${t}`},wf=({isPlaying:n,togglePlay:e,handleNext:t,handlePrev:a,progress:r,duration:i,handlePointerDown:o,progressBarRef:l,repeatMode:s,setRepeatMode:c,isShuffle:m,setIsShuffle:p,volume:h,setVolume:w,isMuted:k,setIsMuted:x,scrollToLyrics:H})=>u.jsxs("div",{className:"w-full max-w-3xl bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group",children:[u.jsx("div",{className:"absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent"}),u.jsx("div",{className:"absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-cyan-500 to-transparent"}),u.jsx("div",{className:"absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-to-l from-pink-500 to-transparent"}),u.jsx("div",{className:"absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-pink-500 to-transparent"}),u.jsxs("div",{className:"mb-10 select-none",children:[u.jsxs("div",{className:"flex justify-between text-[11px] font-mono mb-3 tracking-[0.2em]",children:[u.jsx("span",{className:"text-cyan-400 drop-shadow-[0_0_5px_#22d3ee] animate-pulse",children:hr(r)}),u.jsx("span",{className:"text-slate-500",children:hr(i)})]}),u.jsxs("div",{ref:l,className:"relative h-3 md:h-4 flex items-center cursor-pointer touch-none",onPointerDown:o,children:[u.jsx("div",{className:"absolute inset-0 bg-slate-900/80 rounded-full border border-white/5 overflow-hidden",children:u.jsx("div",{className:"absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_11px)]"})}),u.jsxs("div",{className:"absolute h-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 ease-out flex items-center justify-end",style:{width:`${r/(i||1)*100}%`},children:[u.jsx("div",{className:"h-full w-1 md:w-2 bg-white shadow-[0_0_20px_#fff,0_0_10px_#22d3ee] rounded-full z-10"}),u.jsx("div",{className:"absolute -right-2 w-4 h-4 bg-cyan-400/20 blur-xl rounded-full"})]})]})]}),u.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0",children:[u.jsxs("div",{className:"flex items-center gap-6 md:order-1",children:[u.jsx("button",{onClick:()=>c(g=>(g+1)%3),className:`p-2 transition-all duration-300 hover:scale-125 ${s>0?"text-pink-500 drop-shadow-[0_0_10px_#ec4899]":"text-slate-600"}`,title:"Repeat Mode",children:s===2?u.jsxs("div",{className:"relative",children:[u.jsx(fr,{className:"w-6 h-6"}),u.jsx("span",{className:"absolute -top-2 -right-2 text-[10px] font-black bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center border border-black",children:"1"})]}):u.jsx(fr,{className:"w-6 h-6"})}),u.jsx("button",{onClick:()=>p(!m),className:`p-2 transition-all duration-300 hover:scale-125 ${m?"text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]":"text-slate-600"}`,title:"Shuffle",children:u.jsx(vd,{className:"w-6 h-6"})})]}),u.jsxs("div",{className:"flex items-center gap-8 md:order-2",children:[u.jsx("button",{onClick:a,className:"p-3 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all",children:u.jsx(wd,{className:"w-8 h-8 md:w-10 md:h-10 fill-current"})}),u.jsxs("button",{onClick:e,className:`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 transition-all duration-500 active:scale-90 group/play relative flex items-center justify-center ${n?"border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.4)]":"border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]"}`,children:[u.jsx("div",{className:`absolute inset-0 rounded-full bg-gradient-to-br transition-all duration-500 ${n?"from-slate-900 to-cyan-900 opacity-100":"from-slate-900 to-pink-900 opacity-100"}`}),u.jsx("div",{className:"relative z-10",children:n?u.jsx(yd,{className:"w-10 h-10 md:w-12 md:h-12 text-cyan-400 fill-current animate-pulse"}):u.jsx(kd,{className:"w-10 h-10 md:w-12 md:h-12 text-pink-500 fill-current ml-2"})})]}),u.jsx("button",{onClick:t,className:"p-3 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all",children:u.jsx(xd,{className:"w-8 h-8 md:w-10 md:h-10 fill-current"})})]}),u.jsxs("div",{className:"flex items-center gap-4 w-full md:w-40 md:order-3 group/vol",children:[u.jsx("button",{onClick:()=>x(!k),className:"p-2 text-slate-500 hover:text-cyan-400 transition-colors",children:k?u.jsx(Nd,{className:"w-6 h-6"}):u.jsx(Sd,{className:"w-6 h-6"})}),u.jsx("div",{className:"flex-1 relative flex items-center h-8",children:u.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:k?0:h,onChange:g=>w(parseFloat(g.target.value)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_#22d3ee] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/50"})})]})]}),u.jsx("div",{className:"mt-10 flex justify-center border-t border-white/5 pt-6",children:u.jsxs("button",{onClick:H,className:"flex flex-col items-center gap-1 group/scroll",children:[u.jsx("span",{className:"text-[10px] font-black tracking-[0.4em] uppercase text-slate-600 group-hover/scroll:text-pink-500 transition-colors",children:"Song Details"}),u.jsx(lf,{className:"w-4 h-4 text-slate-700 group-hover/scroll:text-cyan-400 group-hover/scroll:translate-y-1 transition-all duration-300"})]})})]}),xf=({currentSong:n,lyricsRef:e})=>{const[t,a]=E.useState("lyrics");return u.jsxs("div",{ref:e,className:"w-full bg-[#050510] p-4 md:p-20 z-20 flex flex-col items-center mt-10",children:[u.jsx("div",{className:"max-w-4xl w-full border border-pink-500/30 p-1 bg-black shadow-[0_0_50px_rgba(236,72,153,0.1)] rounded-lg",children:u.jsxs("div",{className:"bg-slate-900/40 p-6 md:p-12 relative overflow-hidden rounded-md backdrop-blur-md",children:[u.jsx(gf,{className:"absolute top-4 right-4 w-12 h-12 text-white/5"}),u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 uppercase italic tracking-tighter",children:n.title}),u.jsx("p",{className:"text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mt-2",children:"3rd Harmonik"})]}),u.jsxs("div",{className:"flex bg-black/40 p-1 rounded-full border border-white/5",children:[u.jsxs("button",{onClick:()=>a("lyrics"),className:`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${t==="lyrics"?"bg-pink-600 text-white shadow-[0_0_15px_#ec4899]":"text-slate-400 hover:text-white"}`,children:[u.jsx(md,{className:"w-4 h-4"})," Lyrics"]}),u.jsxs("button",{onClick:()=>a("details"),className:`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${t==="details"?"bg-cyan-600 text-white shadow-[0_0_15px_#0891b2]":"text-slate-400 hover:text-white"}`,children:[u.jsx(of,{className:"w-4 h-4"})," Details"]})]})]}),u.jsx("div",{className:"min-h-[400px] transition-all duration-500",children:t==="lyrics"?u.jsx("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500 font-serif italic text-pink-100/90 leading-relaxed md:leading-loose text-lg md:text-xl text-center max-w-2xl mx-auto py-4",children:n.lyrics.split(`
`).map((r,i)=>u.jsx("p",{className:`mb-2 min-h-[1.5em] ${r.startsWith("[")?"text-pink-500 not-italic font-sans text-xs font-bold tracking-[0.2em] mt-6 mb-4 uppercase":""}`,children:r.trim()},i))}):u.jsxs("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500 font-mono text-cyan-100/80 leading-relaxed text-sm md:text-base border-l-2 border-cyan-500/30 pl-6 md:pl-10 py-4 max-w-3xl mx-auto",children:[u.jsx("h3",{className:"text-cyan-400 font-black mb-6 uppercase tracking-widest text-xs",children:"Song Information"}),u.jsx("div",{className:"prose prose-invert prose-cyan max-w-none space-y-4 [&>h4]:text-pink-400 [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-2 [&>p]:mb-4",dangerouslySetInnerHTML:{__html:n.story}})]})})]})}),u.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"mt-16 group flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-all duration-300 uppercase tracking-[0.3em] text-[10px]",children:[u.jsx(sf,{className:"w-5 h-5 group-hover:-translate-y-1 transition-transform"}),"Back to Top"]})]})},Sf=[{id:"aljay",name:"Aljay Leodones",role:"Founder, Lead Vocals, Lead Guitar, Keyboard",photo:"/members/aljay/aljay_profile_pic.jpg",extraPhotos:["/members/aljay/aljay_pic1.jpg","/members/aljay/aljay_pic2.JPG"],bio:"The mastermind who built 3rd Harmonik from the ground up. Aljay channels the stories of friends and loved ones into melodies—sometimes in 10 minutes, sometimes less than 5. With 30+ songs in his arsenal and more brewing, just tell him an inspiring story and watch a new track appear.",height:`5'8"`,favoriteSong:"Kometa"},{id:"louie",name:"Louie",role:"Drums",photo:"/members/louie/louie_profile_pic.jpg",extraPhotos:["/members/louie/louie_pic1.jpg","/members/louie/louie_pic2.jpg"],bio:"Aljay's ride-or-die for over 12 years. What started as desk neighbors in class evolved into an unbreakable musical brotherhood. Louie's drumming is the heartbeat that gives every 3rd Harmonik track its unique pulse and flavor.",height:`5'5"`,favoriteSong:"Titulo"},{id:"anthony",name:"Anthony",role:"Lead Vocals, Bass Guitar",photo:"/members/anthony/anthony_profile_pic.JPG",extraPhotos:["/members/anthony/anthony_pic1.JPG","/members/anthony/anthony_pic2.JPG"],bio:"The low-end powerhouse with vocals that hit different. Anthony doesn't just play bass—he co-writes fire tracks with Aljay. Their first collab 'Lihim' sealed the deal and brought a whole new dimension to the band's sound.",height:`5'7"`,favoriteSong:"How Could You"},{id:"clyde",name:"Clyde",role:"Lead Vocals, Rhythm Guitar",photo:"/members/clyde/clyde_profile_pic.gif",extraPhotos:["/members/clyde/clyde_pic1.JPG","/members/clyde/clyde_pic2.JPG"],bio:"The voice that completes 3rd Harmonik's identity. With Clyde's powerful vocals in the mix, Aljay finally had the freedom to write melodies without limits. That's why the songs keep coming faster than ever.",height:`5'7"`,favoriteSong:"Secrets"}],Nf=({member:n,onDetails:e})=>{const[t,a]=E.useState(0),[r,i]=E.useState(!0),o=E.useRef(null),l=E.useRef(0);E.useEffect(()=>{let p;return r&&(p=setInterval(()=>{a(h=>(h+.5)%360)},30)),()=>clearInterval(p)},[r]);const s=p=>{var h;i(!1),o.current=p.clientX||((h=p.touches)==null?void 0:h[0].clientX),l.current=t},c=p=>{var k;if(o.current===null)return;const w=(p.clientX||((k=p.touches)==null?void 0:k[0].clientX))-o.current;a(l.current+w*.5)},m=()=>{o.current=null,setTimeout(()=>i(!0),2e3)};return u.jsxs("div",{className:"flex flex-col items-center group",children:[u.jsxs("div",{className:"relative w-48 h-48 md:w-64 md:h-64 cursor-pointer perspective-1000 select-none",onPointerDown:s,onPointerMove:c,onPointerUp:m,onPointerLeave:m,onClick:()=>e(n),children:[u.jsx("div",{className:"absolute inset-4 bg-black/80 rounded-full blur-2xl transform translate-y-8"}),u.jsxs("div",{className:"relative w-full h-full transition-transform duration-100 ease-linear transform-style-3d pointer-events-none",style:{transform:`rotateY(${t}deg)`},children:[u.jsx("div",{className:"absolute inset-0 backface-hidden z-10",children:u.jsxs("div",{className:"w-full h-full rounded-full border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500",children:[u.jsx("div",{className:"absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"}),u.jsx("div",{className:"absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_2px,rgba(255,255,255,0.03)_3px)]"}),u.jsx("img",{src:Be(n.photo),alt:n.name,className:"w-full h-full object-cover transition-all duration-700 group-hover:scale-110"})]})}),u.jsx("div",{className:"absolute inset-0 backface-hidden",style:{transform:"rotateY(180deg)"},children:u.jsxs("div",{className:"w-full h-full rounded-full border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500",children:[u.jsx("div",{className:"absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"}),u.jsx("div",{className:"absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_2px,rgba(255,255,255,0.03)_3px)]"}),u.jsx("img",{src:Be(n.photo),alt:n.name,className:"w-full h-full object-cover transition-all duration-700 group-hover:scale-110"})]})})]}),u.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none",children:u.jsx("span",{className:"text-[8px] font-black uppercase tracking-[0.4em] text-cyan-400 bg-black/80 px-3 py-1 rounded-full border border-cyan-500/50",children:"Drag to Spin / Click for Bio"})})]}),u.jsxs("div",{className:"mt-8 text-center bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm group-hover:border-pink-500/50 transition-colors w-full",children:[u.jsx("h3",{className:"text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-pink-400 transition-colors",children:n.name}),u.jsx("p",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest mt-1",children:n.role})]})]})},bf=({member:n,onClose:e})=>(E.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[n]),n?u.jsxs("div",{className:"fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-auto",children:[u.jsx("div",{className:"absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-500",onClick:e}),u.jsxs("div",{className:"relative w-full max-w-6xl max-h-[95vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_200px_rgba(236,72,153,0.4)] animate-in zoom-in-95 slide-in-from-bottom-12 duration-700 flex flex-col z-[1001]",children:[u.jsx("div",{className:"absolute top-8 right-8 z-50",children:u.jsx("button",{onClick:e,className:"p-4 bg-black/40 hover:bg-pink-600 rounded-full transition-all duration-300 text-white border border-white/10 hover:border-pink-400 group shadow-2xl",children:u.jsx(mf,{className:"w-6 h-6 group-hover:rotate-90 transition-transform"})})}),u.jsxs("div",{className:"flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden",children:[u.jsx("div",{className:"w-full lg:w-[55%] bg-black/40 relative flex flex-col p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 overflow-y-auto custom-scrollbar",children:u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"relative aspect-square md:aspect-video rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl group",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"}),u.jsx("img",{src:Be(n.photo),alt:n.name,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"}),u.jsx("div",{className:"absolute bottom-6 left-6 z-20",children:u.jsx("span",{className:"px-3 py-1 bg-pink-600 text-[8px] font-black uppercase tracking-[0.3em] rounded-md",children:"Primary Identification"})})]}),u.jsx("div",{className:"grid grid-cols-2 gap-6 pb-4",children:n.extraPhotos.map((t,a)=>u.jsxs("div",{className:"relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-xl",children:[u.jsx("div",{className:"absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-10"}),u.jsx("img",{src:Be(t),alt:`${n.name} extra ${a}`,className:"w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"}),u.jsx("div",{className:"absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity",children:u.jsx(pf,{className:"w-4 h-4 text-cyan-400 fill-cyan-400"})})]},a))})]})}),u.jsxs("div",{className:"w-full lg:w-[45%] p-10 md:p-16 bg-gradient-to-br from-slate-900 to-black flex flex-col justify-center",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[u.jsx("div",{className:"w-8 h-px bg-cyan-500"}),u.jsx("span",{className:"text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em]",children:"Personnel Dossier // 3HMP"})]}),u.jsx("h2",{className:"text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]",children:n.name}),u.jsxs("div",{className:"flex flex-wrap gap-4 mb-12",children:[u.jsx("span",{className:"px-4 py-2 bg-pink-500/20 border border-pink-500/40 text-pink-400 text-[10px] font-black uppercase tracking-widest rounded-lg",children:n.role}),u.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-[10px] uppercase tracking-widest font-bold",children:[u.jsx(hf,{className:"w-3.5 h-3.5"})," ",n.height]}),u.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-[10px] uppercase tracking-widest font-bold",children:[u.jsx(uf,{className:"w-3.5 h-3.5 text-pink-500"})," ",n.favoriteSong]})]}),u.jsx("div",{className:"prose prose-invert prose-pink max-w-none",children:u.jsxs("p",{className:"text-slate-200 leading-relaxed md:leading-loose text-lg md:text-xl font-light italic border-l-4 border-pink-500/30 pl-8",children:['"',n.bio,'"']})}),u.jsxs("div",{className:"mt-16 pt-8 border-t border-white/5 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-4 group",children:[u.jsx("div",{className:"w-12 h-1 bg-pink-500 group-hover:w-20 transition-all duration-500"}),u.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors",children:"Verified Status: Active"})]}),u.jsx(Uo,{className:"w-8 h-8 text-white/5"})]})]})]})]})]}):null),If=({onMemberClick:n,bandRef:e})=>u.jsxs("section",{ref:e,className:"w-full max-w-7xl mx-auto px-6 py-32",children:[u.jsxs("div",{className:"flex flex-col items-center mb-20",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[u.jsx("div",{className:"h-px w-10 bg-pink-500"}),u.jsx(Uo,{className:"w-5 h-5 text-pink-500"}),u.jsx("div",{className:"h-px w-10 bg-pink-500"})]}),u.jsx("h2",{className:"text-4xl md:text-6xl font-black italic uppercase italic tracking-tighter text-white text-center",children:"Meet the Band"}),u.jsx("p",{className:"text-slate-500 text-sm font-mono mt-4 uppercase tracking-[0.3em]",children:"The Soul of 3rd Harmonik"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8",children:Sf.map(t=>u.jsx(Nf,{member:t,onDetails:n},t.id))})]}),Cf=({currentSong:n,isPlaying:e,togglePlay:t,handleNext:a,handlePrev:r,progress:i,duration:o,handlePointerDown:l,repeatMode:s,setRepeatMode:c,isShuffle:m,setIsShuffle:p,volume:h,setVolume:w,isMuted:k,setIsMuted:x,isVisible:H})=>{const g=E.useRef(null),d=f=>{l&&l(f,g)};return H?u.jsx("div",{className:"fixed bottom-0 left-0 w-full z-[80] animate-in slide-in-from-bottom-full duration-500 ease-out",children:u.jsx("div",{className:"mx-auto max-w-7xl px-4 pb-4",children:u.jsxs("div",{className:"bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 md:p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col gap-2",children:[u.jsx("div",{className:"px-2",children:u.jsxs("div",{ref:g,className:"relative h-1.5 flex items-center cursor-pointer touch-none group/mini-progress",onPointerDown:d,children:[u.jsx("div",{className:"absolute inset-0 bg-slate-900/80 rounded-full overflow-hidden",children:u.jsx("div",{className:"absolute inset-0 opacity-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_11px)]"})}),u.jsx("div",{className:"absolute h-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 ease-out flex items-center justify-end",style:{width:`${i/(o||1)*100}%`},children:u.jsx("div",{className:"h-full w-1 bg-white shadow-[0_0_10px_#fff] scale-y-150 rounded-full opacity-0 group-hover/mini-progress:opacity-100 transition-opacity"})})]})}),u.jsxs("div",{className:"flex items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0 w-1/4",children:[u.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/10",children:u.jsx("img",{src:Be(n.cover),alt:n.title,className:`w-full h-full object-cover transition-transform duration-500 ${e?"scale-110":"scale-100"}`})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h4",{className:"text-sm font-bold truncate text-white",children:n.title}),u.jsx("p",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest truncate",children:"3rd Harmonik"})]})]}),u.jsxs("div",{className:"flex items-center gap-2 md:gap-6",children:[u.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[u.jsx("button",{onClick:()=>c(f=>(f+1)%3),className:`p-1.5 transition-all ${s>0?"text-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.3)]":"text-slate-500"}`,children:s===2?u.jsxs("div",{className:"relative",children:[u.jsx(fr,{className:"w-5 h-5"}),u.jsx("span",{className:"absolute -top-1 -right-1 text-[8px] font-black bg-pink-500 text-white rounded-full w-3 h-3 flex items-center justify-center",children:"1"})]}):u.jsx(fr,{className:"w-5 h-5"})}),u.jsx("button",{onClick:()=>p(!m),className:`p-1.5 transition-all ${m?"text-cyan-400":"text-slate-500"}`,children:u.jsx(vd,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"flex items-center gap-3 md:gap-5",children:[u.jsx("button",{onClick:r,className:"p-1.5 text-slate-400 hover:text-white transition-colors",children:u.jsx(wd,{className:"w-5 h-5 md:w-6 md:h-6 fill-current"})}),u.jsx("button",{onClick:t,className:`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${e?"bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]":"bg-pink-500/10 border border-pink-500/50 text-pink-500"}`,children:e?u.jsx(yd,{className:"w-5 h-5 md:w-6 md:h-6 fill-current"}):u.jsx(kd,{className:"w-5 h-5 md:w-6 md:h-6 fill-current ml-0.5"})}),u.jsx("button",{onClick:a,className:"p-1.5 text-slate-400 hover:text-white transition-colors",children:u.jsx(xd,{className:"w-5 h-5 md:w-6 md:h-6 fill-current"})})]})]}),u.jsxs("div",{className:"flex items-center justify-end gap-4 w-1/4",children:[u.jsxs("div",{className:"hidden lg:flex items-center gap-2 w-32",children:[u.jsx("button",{onClick:()=>x(!k),className:"text-slate-500 hover:text-cyan-400",children:k?u.jsx(Nd,{className:"w-4 h-4"}):u.jsx(Sd,{className:"w-4 h-4"})}),u.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:k?0:h,onChange:f=>w(parseFloat(f.target.value)),className:"w-full h-0.5 bg-slate-800 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full"})]}),u.jsxs("div",{className:"text-[10px] font-mono text-slate-500 whitespace-nowrap hidden sm:block",children:[u.jsx("span",{className:"text-cyan-400",children:hr(i)})," / ",hr(o)]})]})]})]})})}):null};function jf(){const[n,e]=E.useState(yf),[t,a]=E.useState(0),[r,i]=E.useState(!1),[o,l]=E.useState(0),[s,c]=E.useState(0),[m,p]=E.useState(.7),[h,w]=E.useState(!1),[k,x]=E.useState(!1),[H,g]=E.useState(0),[d,f]=E.useState(null),[y,N]=E.useState(!1),[C,I]=E.useState(!1),[j,B]=E.useState(null),[T,wn]=E.useState(!1),G=E.useRef(null),Ce=E.useRef(null),xt=E.useRef(null),fa=E.useRef(null),Ke=E.useRef(null),Yn=E.useRef(null),S=n[t];E.useEffect(()=>{G.current&&(G.current.volume=h?0:m)},[m,h]),E.useEffect(()=>{const A=G.current;if(A)if(r){const dn=A.play();dn!==void 0&&dn.catch(ie=>{console.error("Playback failed:",ie),i(!1)})}else A.pause()},[r,t]);const _=()=>{G.current&&(l(G.current.currentTime),c(G.current.duration||0))},P=()=>I(!0),W=()=>I(!1),X=()=>{if(H===2)G.current.currentTime=0,G.current.play();else if(k){let A=Math.floor(Math.random()*n.length);for(;A===t&&n.length>1;)A=Math.floor(Math.random()*n.length);a(A)}else H===1||t<n.length-1?re():i(!1)},re=()=>{if(k){let A=Math.floor(Math.random()*n.length);for(;A===t&&n.length>1;)A=Math.floor(Math.random()*n.length);a(A)}else a(A=>(A+1)%n.length)},Bn=()=>{o>3?(G.current.currentTime=0,l(0)):a(A=>(A-1+n.length)%n.length)},Ve=()=>i(!r),Fn=(A,dn)=>dn?Math.min(Math.max((A-dn.left)/dn.width,0),1)*(s||1):0,je=(A,dn)=>{A.preventDefault();const ie=dn||xt;if(!ie.current)return;const Ue=jd=>{const _d=ie.current.getBoundingClientRect(),Qo=Fn(jd.clientX,_d);G.current&&(G.current.currentTime=Qo),l(Qo)},St=()=>{document.removeEventListener("pointermove",Ue),document.removeEventListener("pointerup",St)};document.addEventListener("pointermove",Ue),document.addEventListener("pointerup",St);const Nt=ie.current.getBoundingClientRect(),Yo=Fn(A.clientX,Nt);G.current&&(G.current.currentTime=Yo),l(Yo)},bd=(A,dn)=>{f(n[dn])},Id=(A,dn)=>{A.preventDefault();const ie=n[dn];if(d===ie)return;let Ue=n.filter(Nt=>Nt!==d);Ue.splice(dn,0,d),e(Ue);const St=Ue.findIndex(Nt=>Nt.id===S.id);St!==-1&&a(St)},$o=()=>{var A;(A=fa.current)==null||A.scrollIntoView({behavior:"smooth",block:"start"})},Cd=()=>{var A;(A=Ke.current)==null||A.scrollIntoView({behavior:"smooth",block:"start"})};return E.useEffect(()=>{const A=new IntersectionObserver(([dn])=>{wn(!dn.isIntersecting)},{threshold:.1});return Yn.current&&A.observe(Yn.current),()=>{Yn.current&&A.unobserve(Yn.current)}},[]),u.jsxs("div",{className:"min-h-screen bg-[#02020a] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black",children:[u.jsx("div",{className:"fixed top-0 left-0 w-full h-1 z-[100] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-50"}),u.jsx("div",{className:"fixed inset-0 pointer-events-none z-[60] opacity-[0.03]",children:u.jsx("div",{className:"w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#fff_2px)] bg-[length:100%_3px]"})}),u.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0",children:[u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_70%)]"}),u.jsx("div",{className:"absolute top-0 right-0 w-[60%] h-[60%] bg-cyan-950/20 blur-[150px] rounded-full"}),u.jsx("div",{className:"absolute bottom-0 left-0 w-[60%] h-[60%] bg-purple-950/20 blur-[150px] rounded-full"})]}),u.jsxs("nav",{className:"fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[70] backdrop-blur-md bg-black/20",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>N(!y),className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg",title:"Playlist",children:u.jsx(df,{className:"w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform"})}),u.jsx("button",{onClick:$o,className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group shadow-lg",title:"Lyrics",children:u.jsx(cf,{className:"w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform"})}),u.jsx("button",{onClick:Cd,className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group shadow-lg",title:"Band",children:u.jsx(Uo,{className:"w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform"})})]}),u.jsx("div",{className:"hidden md:block text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500",children:"3rd Harmonik"})]}),u.jsx(vf,{songs:n,currentIndex:t,setCurrentIndex:a,setIsPlaylistOpen:N,isPlaylistOpen:y,draggedItem:d,handleDragStart:bd,handleDragOver:Id,setDraggedItem:f}),u.jsxs("main",{className:`relative z-10 w-full min-h-screen flex flex-col items-center justify-start transition-all duration-700 ease-in-out ${y?"scale-90 opacity-40 blur-xl pointer-events-none":"scale-100 opacity-100 blur-0"}`,children:[u.jsxs("section",{ref:Yn,className:"w-full max-w-7xl px-4 pt-32 pb-20 flex flex-col items-center lg:flex-row lg:justify-center gap-16 lg:gap-24",children:[u.jsxs("div",{className:"relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex-shrink-0",children:[u.jsx("div",{className:`absolute -inset-10 rounded-full transition-all duration-1000 blur-[100px] opacity-40 ${r?"bg-cyan-500 scale-110":"bg-pink-500 scale-100"}`}),u.jsx("div",{className:"absolute -inset-4 md:-inset-8",children:u.jsx(kf,{isPlaying:r,currentSong:S,canvasRef:Ce})}),u.jsxs("div",{className:`relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-700 ${r?"scale-105 rotate-1":"scale-100 rotate-0"}`,children:[u.jsx("div",{className:`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${S.color} opacity-40`}),S.cover?u.jsx("img",{src:Be(S.cover),alt:S.title,className:`w-full h-full object-cover transition-all duration-700 ${r?"scale-110 opacity-70":"scale-100 opacity-50"}`}):u.jsx("div",{className:"w-full h-full flex flex-col items-center justify-center bg-slate-900/80",children:u.jsx(md,{className:`w-32 h-32 md:w-48 md:h-48 text-white/10 transition-all duration-700 ${r?"scale-125 opacity-20 rotate-12":"scale-100 opacity-10"}`})}),u.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center text-center",children:[u.jsx("h1",{className:"text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none mb-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]",children:S.title}),u.jsxs("p",{className:"text-sm md:text-lg font-mono tracking-[0.4em] uppercase text-cyan-400 opacity-80 flex items-center gap-2",children:[u.jsx("span",{className:"w-4 h-px bg-cyan-500/50"}),"3rd Harmonik",u.jsx("span",{className:"w-4 h-px bg-cyan-500/50"})]})]})]})]}),u.jsx("div",{className:"w-full max-w-xl flex flex-col gap-10",children:u.jsx(wf,{isPlaying:r,togglePlay:Ve,handleNext:re,handlePrev:Bn,progress:o,duration:s,handlePointerDown:je,progressBarRef:xt,repeatMode:H,setRepeatMode:g,isShuffle:k,setIsShuffle:x,volume:m,setVolume:p,isMuted:h,setIsMuted:w,scrollToLyrics:$o})})]}),u.jsx(xf,{currentSong:S,lyricsRef:fa}),u.jsx(If,{onMemberClick:B,bandRef:Ke})]}),u.jsx(bf,{member:j,onClose:()=>B(null)}),u.jsx(Cf,{currentSong:S,isPlaying:r,togglePlay:Ve,handleNext:re,handlePrev:Bn,progress:o,duration:s,handlePointerDown:je,repeatMode:H,setRepeatMode:g,isShuffle:k,setIsShuffle:x,volume:m,setVolume:p,isMuted:h,setIsMuted:w,isVisible:T&&!y}),u.jsx("audio",{ref:G,src:Be(S.audio),onTimeUpdate:_,onEnded:X,onCanPlay:P,onLoadStart:W,preload:"auto"})]})}ai.createRoot(document.getElementById("root")).render(u.jsx(Ud.StrictMode,{children:u.jsx(jf,{})}));

(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var os={exports:{}},pr={},ls={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),Ad=Symbol.for("react.portal"),Ld=Symbol.for("react.fragment"),Rd=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Bd=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),Kd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),Jo=Symbol.iterator;function $d(e){return e===null||typeof e!="object"?null:(e=Jo&&e[Jo]||e["@@iterator"],typeof e=="function"?e:null)}var ss={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},us=Object.assign,ds={};function kt(e,n,t){this.props=e,this.context=n,this.refs=ds,this.updater=t||ss}kt.prototype.isReactComponent={};kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cs(){}cs.prototype=kt.prototype;function Xi(e,n,t){this.props=e,this.context=n,this.refs=ds,this.updater=t||ss}var Ji=Xi.prototype=new cs;Ji.constructor=Xi;us(Ji,kt.prototype);Ji.isPureReactComponent=!0;var Zo=Array.isArray,gs=Object.prototype.hasOwnProperty,Zi={current:null},fs={key:!0,ref:!0,__self:!0,__source:!0};function hs(e,n,t){var a,r={},i=null,o=null;if(n!=null)for(a in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)gs.call(n,a)&&!fs.hasOwnProperty(a)&&(r[a]=n[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];r.children=u}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:sa,type:e,key:i,ref:o,props:r,_owner:Zi.current}}function Yd(e,n){return{$$typeof:sa,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===sa}function Qd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var qo=/\/+/g;function Tr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Qd(""+e.key):n.toString(36)}function Ta(e,n,t,a,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sa:case Ad:o=!0}}if(o)return o=e,r=r(o),e=a===""?"."+Tr(o,0):a,Zo(r)?(t="",e!=null&&(t=e.replace(qo,"$&/")+"/"),Ta(r,n,t,"",function(c){return c})):r!=null&&(qi(r)&&(r=Yd(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(qo,"$&/")+"/")+e)),n.push(r)),1;if(o=0,a=a===""?".":a+":",Zo(e))for(var l=0;l<e.length;l++){i=e[l];var u=a+Tr(i,l);o+=Ta(i,n,t,u,r)}else if(u=$d(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=a+Tr(i,l++),o+=Ta(i,n,t,u,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(e,n,t){if(e==null)return e;var a=[],r=0;return Ta(e,a,"","",function(i){return n.call(t,i,r++)}),a}function Gd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Oa={transition:null},Xd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Zi};function ps(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:ha,forEach:function(e,n,t){ha(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ha(e,function(){n++}),n},toArray:function(e){return ha(e,function(n){return n})||[]},only:function(e){if(!qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=kt;H.Fragment=Ld;H.Profiler=Dd;H.PureComponent=Xi;H.StrictMode=Rd;H.Suspense=Wd;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xd;H.act=ps;H.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=us({},e.props),r=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Zi.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)gs.call(n,u)&&!fs.hasOwnProperty(u)&&(a[u]=n[u]===void 0&&l!==void 0?l[u]:n[u])}var u=arguments.length-2;if(u===1)a.children=t;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:sa,type:e.type,key:r,ref:i,props:a,_owner:o}};H.createContext=function(e){return e={$$typeof:Fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bd,_context:e},e.Consumer=e};H.createElement=hs;H.createFactory=function(e){var n=hs.bind(null,e);return n.type=e,n};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Vd,render:e}};H.isValidElement=qi;H.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Gd}};H.memo=function(e,n){return{$$typeof:Kd,type:e,compare:n===void 0?null:n}};H.startTransition=function(e){var n=Oa.transition;Oa.transition={};try{e()}finally{Oa.transition=n}};H.unstable_act=ps;H.useCallback=function(e,n){return ge.current.useCallback(e,n)};H.useContext=function(e){return ge.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};H.useEffect=function(e,n){return ge.current.useEffect(e,n)};H.useId=function(){return ge.current.useId()};H.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};H.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};H.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};H.useMemo=function(e,n){return ge.current.useMemo(e,n)};H.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};H.useRef=function(e){return ge.current.useRef(e)};H.useState=function(e){return ge.current.useState(e)};H.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};H.useTransition=function(){return ge.current.useTransition()};H.version="18.3.1";ls.exports=H;var E=ls.exports;const Jd=Md(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=E,qd=Symbol.for("react.element"),ec=Symbol.for("react.fragment"),nc=Object.prototype.hasOwnProperty,tc=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ac={key:!0,ref:!0,__self:!0,__source:!0};function ms(e,n,t){var a,r={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(a in n)nc.call(n,a)&&!ac.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)r[a]===void 0&&(r[a]=n[a]);return{$$typeof:qd,type:e,key:i,ref:o,props:r,_owner:tc.current}}pr.Fragment=ec;pr.jsx=ms;pr.jsxs=ms;os.exports=pr;var s=os.exports,ai={},ys={exports:{}},be={},ks={exports:{}},vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,P){var _=N.length;N.push(P);e:for(;0<_;){var V=_-1>>>1,X=N[V];if(0<r(X,P))N[V]=P,N[_]=X,_=V;else break e}}function t(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var P=N[0],_=N.pop();if(_!==P){N[0]=_;e:for(var V=0,X=N.length,Kn=X>>>1;V<Kn;){var Ue=2*(V+1)-1,In=N[Ue],De=Ue+1,jn=N[De];if(0>r(In,_))De<X&&0>r(jn,In)?(N[V]=jn,N[De]=_,V=De):(N[V]=In,N[Ue]=_,V=Ue);else if(De<X&&0>r(jn,_))N[V]=jn,N[De]=_,V=De;else break e}}return P}function r(N,P){var _=N.sortIndex-P.sortIndex;return _!==0?_:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],c=[],m=1,p=null,h=3,w=!1,k=!1,x=!1,z=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var P=t(c);P!==null;){if(P.callback===null)a(c);else if(P.startTime<=N)a(c),P.sortIndex=P.expirationTime,n(u,P);else break;P=t(c)}}function y(N){if(x=!1,f(N),!k)if(t(u)!==null)k=!0,Vn(S);else{var P=t(c);P!==null&&Wn(y,P.startTime-N)}}function S(N,P){k=!1,x&&(x=!1,g(C),C=-1),w=!0;var _=h;try{for(f(P),p=t(u);p!==null&&(!(p.expirationTime>P)||N&&!ve());){var V=p.callback;if(typeof V=="function"){p.callback=null,h=p.priorityLevel;var X=V(p.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?p.callback=X:p===t(u)&&a(u),f(P)}else a(u);p=t(u)}if(p!==null)var Kn=!0;else{var Ue=t(c);Ue!==null&&Wn(y,Ue.startTime-P),Kn=!1}return Kn}finally{p=null,h=_,w=!1}}var j=!1,I=null,C=-1,B=5,O=-1;function ve(){return!(e.unstable_now()-O<B)}function G(){if(I!==null){var N=e.unstable_now();O=N;var P=!0;try{P=I(!0,N)}finally{P?bn():(j=!1,I=null)}}else j=!1}var bn;if(typeof d=="function")bn=function(){d(G)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,fa=xt.port2;xt.port1.onmessage=G,bn=function(){fa.postMessage(null)}}else bn=function(){z(G,0)};function Vn(N){I=N,j||(j=!0,bn())}function Wn(N,P){C=z(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Vn(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var _=h;h=P;try{return N()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var _=h;h=N;try{return P()}finally{h=_}},e.unstable_scheduleCallback=function(N,P,_){var V=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?V+_:V):_=V,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=_+X,N={id:m++,callback:P,priorityLevel:N,startTime:_,expirationTime:X,sortIndex:-1},_>V?(N.sortIndex=_,n(c,N),t(u)===null&&N===t(c)&&(x?(g(C),C=-1):x=!0,Wn(y,_-V))):(N.sortIndex=X,n(u,N),k||w||(k=!0,Vn(S))),N},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(N){var P=h;return function(){var _=h;h=P;try{return N.apply(this,arguments)}finally{h=_}}}})(vs);ks.exports=vs;var rc=ks.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ic=E,Ne=rc;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ws=new Set,Ut={};function Bn(e,n){ct(e,n),ct(e+"Capture",n)}function ct(e,n){for(Ut[e]=n,e=0;e<n.length;e++)ws.add(n[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ri=Object.prototype.hasOwnProperty,oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,el={},nl={};function lc(e){return ri.call(nl,e)?!0:ri.call(el,e)?!1:oc.test(e)?nl[e]=!0:(el[e]=!0,!1)}function sc(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uc(e,n,t,a){if(n===null||typeof n>"u"||sc(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,a,r,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var eo=/[\-:]([a-z])/g;function no(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(eo,no);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(eo,no);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(eo,no);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function to(e,n,t,a){var r=re.hasOwnProperty(n)?re[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(uc(n,t,r,a)&&(t=null),a||r===null?lc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var nn=ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),ao=Symbol.for("react.strict_mode"),ii=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),Ss=Symbol.for("react.context"),ro=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),io=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Ns=Symbol.for("react.offscreen"),tl=Symbol.iterator;function bt(e){return e===null||typeof e!="object"?null:(e=tl&&e[tl]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Or;function Ot(e){if(Or===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Or=n&&n[1]||""}return`
`+Or+e}var Hr=!1;function zr(e,n){if(!e||Hr)return"";Hr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var a=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){a=c}e.call(n.prototype)}else{try{throw Error()}catch(c){a=c}e()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=a.stack.split(`
`),o=r.length-1,l=i.length-1;1<=o&&0<=l&&r[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==i[l]){var u=`
`+r[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ot(e):""}function dc(e){switch(e.tag){case 5:return Ot(e.type);case 16:return Ot("Lazy");case 13:return Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 2:case 15:return e=zr(e.type,!1),e;case 11:return e=zr(e.type.render,!1),e;case 1:return e=zr(e.type,!0),e;default:return""}}function si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Yn:return"Portal";case ii:return"Profiler";case ao:return"StrictMode";case oi:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ss:return(e.displayName||"Context")+".Consumer";case xs:return(e._context.displayName||"Context")+".Provider";case ro:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case io:return n=e.displayName||null,n!==null?n:si(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return si(e(n))}catch{}}return null}function cc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return si(n);case 8:return n===ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gc(e){var n=bs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ma(e){e._valueTracker||(e._valueTracker=gc(e))}function Is(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=bs(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ui(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function al(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function js(e,n){n=n.checked,n!=null&&to(e,"checked",n,!1)}function di(e,n){js(e,n);var t=vn(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ci(e,n.type,t):n.hasOwnProperty("defaultValue")&&ci(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function rl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ci(e,n,t){(n!=="number"||Wa(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ht=Array.isArray;function it(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function gi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function il(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(Ht(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function Cs(e,n){var t=vn(n.value),a=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function ol(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function _s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?_s(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ya,Ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var At={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fc=["Webkit","ms","Moz","O"];Object.keys(At).forEach(function(e){fc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),At[n]=At[e]})});function Es(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||At.hasOwnProperty(e)&&At[e]?(""+n).trim():n+"px"}function Ts(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=Es(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var hc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hi(e,n){if(n){if(hc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function pi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yi=null,ot=null,lt=null;function ll(e){if(e=ca(e)){if(typeof yi!="function")throw Error(v(280));var n=e.stateNode;n&&(n=wr(n),yi(e.stateNode,e.type,n))}}function Os(e){ot?lt?lt.push(e):lt=[e]:ot=e}function Hs(){if(ot){var e=ot,n=lt;if(lt=ot=null,ll(e),n)for(e=0;e<n.length;e++)ll(n[e])}}function zs(e,n){return e(n)}function Ms(){}var Mr=!1;function As(e,n,t){if(Mr)return e(n,t);Mr=!0;try{return zs(e,n,t)}finally{Mr=!1,(ot!==null||lt!==null)&&(Ms(),Hs())}}function Yt(e,n){var t=e.stateNode;if(t===null)return null;var a=wr(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ki=!1;if(Je)try{var It={};Object.defineProperty(It,"passive",{get:function(){ki=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{ki=!1}function pc(e,n,t,a,r,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var Lt=!1,Ka=null,Ua=!1,vi=null,mc={onError:function(e){Lt=!0,Ka=e}};function yc(e,n,t,a,r,i,o,l,u){Lt=!1,Ka=null,pc.apply(mc,arguments)}function kc(e,n,t,a,r,i,o,l,u){if(yc.apply(this,arguments),Lt){if(Lt){var c=Ka;Lt=!1,Ka=null}else throw Error(v(198));Ua||(Ua=!0,vi=c)}}function Fn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ls(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function sl(e){if(Fn(e)!==e)throw Error(v(188))}function vc(e){var n=e.alternate;if(!n){if(n=Fn(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return sl(r),e;if(i===a)return sl(r),n;i=i.sibling}throw Error(v(188))}if(t.return!==a.return)t=r,a=i;else{for(var o=!1,l=r.child;l;){if(l===t){o=!0,t=r,a=i;break}if(l===a){o=!0,a=r,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,a=r;break}if(l===a){o=!0,a=i,t=r;break}l=l.sibling}if(!o)throw Error(v(189))}}if(t.alternate!==a)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function Rs(e){return e=vc(e),e!==null?Ds(e):null}function Ds(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ds(e);if(n!==null)return n;e=e.sibling}return null}var Bs=Ne.unstable_scheduleCallback,ul=Ne.unstable_cancelCallback,wc=Ne.unstable_shouldYield,xc=Ne.unstable_requestPaint,Q=Ne.unstable_now,Sc=Ne.unstable_getCurrentPriorityLevel,lo=Ne.unstable_ImmediatePriority,Fs=Ne.unstable_UserBlockingPriority,$a=Ne.unstable_NormalPriority,Nc=Ne.unstable_LowPriority,Vs=Ne.unstable_IdlePriority,mr=null,We=null;function bc(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(mr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Cc,Ic=Math.log,jc=Math.LN2;function Cc(e){return e>>>=0,e===0?32:31-(Ic(e)/jc|0)|0}var ka=64,va=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ya(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~r;l!==0?a=zt(l):(i&=o,i!==0&&(a=zt(i)))}else o=t&~r,o!==0?a=zt(o):i!==0&&(a=zt(i));if(a===0)return 0;if(n!==0&&n!==a&&!(n&r)&&(r=a&-a,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-Ae(n),r=1<<t,a|=e[t],n&=~r;return a}function _c(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pc(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ae(i),l=1<<o,u=r[o];u===-1?(!(l&t)||l&a)&&(r[o]=_c(l,n)):u<=n&&(e.expiredLanes|=l),i&=~l}}function wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ws(){var e=ka;return ka<<=1,!(ka&4194240)&&(ka=64),e}function Ar(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ua(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function Ec(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ae(t),i=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~i}}function so(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-Ae(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var A=0;function Ks(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Us,uo,$s,Ys,Qs,xi=!1,wa=[],cn=null,gn=null,fn=null,Qt=new Map,Gt=new Map,ln=[],Tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(e,n){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(n.pointerId)}}function jt(e,n,t,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},n!==null&&(n=ca(n),n!==null&&uo(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Oc(e,n,t,a,r){switch(n){case"focusin":return cn=jt(cn,e,n,t,a,r),!0;case"dragenter":return gn=jt(gn,e,n,t,a,r),!0;case"mouseover":return fn=jt(fn,e,n,t,a,r),!0;case"pointerover":var i=r.pointerId;return Qt.set(i,jt(Qt.get(i)||null,e,n,t,a,r)),!0;case"gotpointercapture":return i=r.pointerId,Gt.set(i,jt(Gt.get(i)||null,e,n,t,a,r)),!0}return!1}function Gs(e){var n=Pn(e.target);if(n!==null){var t=Fn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ls(t),n!==null){e.blockedOn=n,Qs(e.priority,function(){$s(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ha(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Si(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);mi=a,t.target.dispatchEvent(a),mi=null}else return n=ca(t),n!==null&&uo(n),e.blockedOn=t,!1;n.shift()}return!0}function cl(e,n,t){Ha(e)&&t.delete(n)}function Hc(){xi=!1,cn!==null&&Ha(cn)&&(cn=null),gn!==null&&Ha(gn)&&(gn=null),fn!==null&&Ha(fn)&&(fn=null),Qt.forEach(cl),Gt.forEach(cl)}function Ct(e,n){e.blockedOn===n&&(e.blockedOn=null,xi||(xi=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Hc)))}function Xt(e){function n(r){return Ct(r,e)}if(0<wa.length){Ct(wa[0],e);for(var t=1;t<wa.length;t++){var a=wa[t];a.blockedOn===e&&(a.blockedOn=null)}}for(cn!==null&&Ct(cn,e),gn!==null&&Ct(gn,e),fn!==null&&Ct(fn,e),Qt.forEach(n),Gt.forEach(n),t=0;t<ln.length;t++)a=ln[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)Gs(t),t.blockedOn===null&&ln.shift()}var st=nn.ReactCurrentBatchConfig,Qa=!0;function zc(e,n,t,a){var r=A,i=st.transition;st.transition=null;try{A=1,co(e,n,t,a)}finally{A=r,st.transition=i}}function Mc(e,n,t,a){var r=A,i=st.transition;st.transition=null;try{A=4,co(e,n,t,a)}finally{A=r,st.transition=i}}function co(e,n,t,a){if(Qa){var r=Si(e,n,t,a);if(r===null)$r(e,n,a,Ga,t),dl(e,a);else if(Oc(r,e,n,t,a))a.stopPropagation();else if(dl(e,a),n&4&&-1<Tc.indexOf(e)){for(;r!==null;){var i=ca(r);if(i!==null&&Us(i),i=Si(e,n,t,a),i===null&&$r(e,n,a,Ga,t),i===r)break;r=i}r!==null&&a.stopPropagation()}else $r(e,n,a,null,t)}}var Ga=null;function Si(e,n,t,a){if(Ga=null,e=oo(a),e=Pn(e),e!==null)if(n=Fn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ls(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ga=e,null}function Xs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case lo:return 1;case Fs:return 4;case $a:case Nc:return 16;case Vs:return 536870912;default:return 16}default:return 16}}var un=null,go=null,za=null;function Js(){if(za)return za;var e,n=go,t=n.length,a,r="value"in un?un.value:un.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===r[i-a];a++);return za=r.slice(e,1<a?1-a:void 0)}function Ma(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xa(){return!0}function gl(){return!1}function Ie(e){function n(t,a,r,i,o){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xa:gl,this.isPropagationStopped=gl,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Ie(vt),da=U({},vt,{view:0,detail:0}),Ac=Ie(da),Lr,Rr,_t,yr=U({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_t&&(_t&&e.type==="mousemove"?(Lr=e.screenX-_t.screenX,Rr=e.screenY-_t.screenY):Rr=Lr=0,_t=e),Lr)},movementY:function(e){return"movementY"in e?e.movementY:Rr}}),fl=Ie(yr),Lc=U({},yr,{dataTransfer:0}),Rc=Ie(Lc),Dc=U({},da,{relatedTarget:0}),Dr=Ie(Dc),Bc=U({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),Fc=Ie(Bc),Vc=U({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wc=Ie(Vc),Kc=U({},vt,{data:0}),hl=Ie(Kc),Uc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$c={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yc[e])?!!n[e]:!1}function ho(){return Qc}var Gc=U({},da,{key:function(e){if(e.key){var n=Uc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$c[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?Ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xc=Ie(Gc),Jc=U({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pl=Ie(Jc),Zc=U({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),qc=Ie(Zc),eg=U({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ng=Ie(eg),tg=U({},yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=Ie(tg),rg=[9,13,27,32],po=Je&&"CompositionEvent"in window,Rt=null;Je&&"documentMode"in document&&(Rt=document.documentMode);var ig=Je&&"TextEvent"in window&&!Rt,Zs=Je&&(!po||Rt&&8<Rt&&11>=Rt),ml=" ",yl=!1;function qs(e,n){switch(e){case"keyup":return rg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function og(e,n){switch(e){case"compositionend":return eu(n);case"keypress":return n.which!==32?null:(yl=!0,ml);case"textInput":return e=n.data,e===ml&&yl?null:e;default:return null}}function lg(e,n){if(Gn)return e==="compositionend"||!po&&qs(e,n)?(e=Js(),za=go=un=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zs&&n.locale!=="ko"?null:n.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sg[e.type]:n==="textarea"}function nu(e,n,t,a){Os(a),n=Xa(n,"onChange"),0<n.length&&(t=new fo("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Dt=null,Jt=null;function ug(e){gu(e,0)}function kr(e){var n=Zn(e);if(Is(n))return e}function dg(e,n){if(e==="change")return n}var tu=!1;if(Je){var Br;if(Je){var Fr="oninput"in document;if(!Fr){var vl=document.createElement("div");vl.setAttribute("oninput","return;"),Fr=typeof vl.oninput=="function"}Br=Fr}else Br=!1;tu=Br&&(!document.documentMode||9<document.documentMode)}function wl(){Dt&&(Dt.detachEvent("onpropertychange",au),Jt=Dt=null)}function au(e){if(e.propertyName==="value"&&kr(Jt)){var n=[];nu(n,Jt,e,oo(e)),As(ug,n)}}function cg(e,n,t){e==="focusin"?(wl(),Dt=n,Jt=t,Dt.attachEvent("onpropertychange",au)):e==="focusout"&&wl()}function gg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kr(Jt)}function fg(e,n){if(e==="click")return kr(n)}function hg(e,n){if(e==="input"||e==="change")return kr(n)}function pg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Re=typeof Object.is=="function"?Object.is:pg;function Zt(e,n){if(Re(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!ri.call(n,r)||!Re(e[r],n[r]))return!1}return!0}function xl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sl(e,n){var t=xl(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xl(t)}}function ru(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ru(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function iu(){for(var e=window,n=Wa();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Wa(e.document)}return n}function mo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function mg(e){var n=iu(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ru(t.ownerDocument.documentElement,t)){if(a!==null&&mo(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!e.extend&&i>a&&(r=a,a=i,i=r),r=Sl(t,i);var o=Sl(t,a);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>a?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yg=Je&&"documentMode"in document&&11>=document.documentMode,Xn=null,Ni=null,Bt=null,bi=!1;function Nl(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bi||Xn==null||Xn!==Wa(a)||(a=Xn,"selectionStart"in a&&mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Bt&&Zt(Bt,a)||(Bt=a,a=Xa(Ni,"onSelect"),0<a.length&&(n=new fo("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Xn)))}function Sa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jn={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Vr={},ou={};Je&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function vr(e){if(Vr[e])return Vr[e];if(!Jn[e])return e;var n=Jn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ou)return Vr[e]=n[t];return e}var lu=vr("animationend"),su=vr("animationiteration"),uu=vr("animationstart"),du=vr("transitionend"),cu=new Map,bl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){cu.set(e,n),Bn(n,[e])}for(var Wr=0;Wr<bl.length;Wr++){var Kr=bl[Wr],kg=Kr.toLowerCase(),vg=Kr[0].toUpperCase()+Kr.slice(1);xn(kg,"on"+vg)}xn(lu,"onAnimationEnd");xn(su,"onAnimationIteration");xn(uu,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(du,"onTransitionEnd");ct("onMouseEnter",["mouseout","mouseover"]);ct("onMouseLeave",["mouseout","mouseover"]);ct("onPointerEnter",["pointerout","pointerover"]);ct("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mt));function Il(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,kc(a,n,void 0,e),e.currentTarget=null}function gu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var o=a.length-1;0<=o;o--){var l=a[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&r.isPropagationStopped())break e;Il(r,l,c),i=u}else for(o=0;o<a.length;o++){if(l=a[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&r.isPropagationStopped())break e;Il(r,l,c),i=u}}}if(Ua)throw e=vi,Ua=!1,vi=null,e}function R(e,n){var t=n[Pi];t===void 0&&(t=n[Pi]=new Set);var a=e+"__bubble";t.has(a)||(fu(n,e,2,!1),t.add(a))}function Ur(e,n,t){var a=0;n&&(a|=4),fu(t,e,a,n)}var Na="_reactListening"+Math.random().toString(36).slice(2);function qt(e){if(!e[Na]){e[Na]=!0,ws.forEach(function(t){t!=="selectionchange"&&(wg.has(t)||Ur(t,!1,e),Ur(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Na]||(n[Na]=!0,Ur("selectionchange",!1,n))}}function fu(e,n,t,a){switch(Xs(n)){case 1:var r=zc;break;case 4:r=Mc;break;default:r=co}t=r.bind(null,n,t,e),r=void 0,!ki||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function $r(e,n,t,a,r){var i=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=a.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;o=o.return}for(;l!==null;){if(o=Pn(l),o===null)return;if(u=o.tag,u===5||u===6){a=i=o;continue e}l=l.parentNode}}a=a.return}As(function(){var c=i,m=oo(t),p=[];e:{var h=cu.get(e);if(h!==void 0){var w=fo,k=e;switch(e){case"keypress":if(Ma(t)===0)break e;case"keydown":case"keyup":w=Xc;break;case"focusin":k="focus",w=Dr;break;case"focusout":k="blur",w=Dr;break;case"beforeblur":case"afterblur":w=Dr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=fl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=qc;break;case lu:case su:case uu:w=Fc;break;case du:w=ng;break;case"scroll":w=Ac;break;case"wheel":w=ag;break;case"copy":case"cut":case"paste":w=Wc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=pl}var x=(n&4)!==0,z=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var d=c,f;d!==null;){f=d;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,g!==null&&(y=Yt(d,g),y!=null&&x.push(ea(d,y,f)))),z)break;d=d.return}0<x.length&&(h=new w(h,k,null,t,m),p.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&t!==mi&&(k=t.relatedTarget||t.fromElement)&&(Pn(k)||k[Ze]))break e;if((w||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,w?(k=t.relatedTarget||t.toElement,w=c,k=k?Pn(k):null,k!==null&&(z=Fn(k),k!==z||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(x=fl,y="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=pl,y="onPointerLeave",g="onPointerEnter",d="pointer"),z=w==null?h:Zn(w),f=k==null?h:Zn(k),h=new x(y,d+"leave",w,t,m),h.target=z,h.relatedTarget=f,y=null,Pn(m)===c&&(x=new x(g,d+"enter",k,t,m),x.target=f,x.relatedTarget=z,y=x),z=y,w&&k)n:{for(x=w,g=k,d=0,f=x;f;f=$n(f))d++;for(f=0,y=g;y;y=$n(y))f++;for(;0<d-f;)x=$n(x),d--;for(;0<f-d;)g=$n(g),f--;for(;d--;){if(x===g||g!==null&&x===g.alternate)break n;x=$n(x),g=$n(g)}x=null}else x=null;w!==null&&jl(p,h,w,x,!1),k!==null&&z!==null&&jl(p,z,k,x,!0)}}e:{if(h=c?Zn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var S=dg;else if(kl(h))if(tu)S=hg;else{S=gg;var j=cg}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=fg);if(S&&(S=S(e,c))){nu(p,S,t,m);break e}j&&j(e,h,c),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ci(h,"number",h.value)}switch(j=c?Zn(c):window,e){case"focusin":(kl(j)||j.contentEditable==="true")&&(Xn=j,Ni=c,Bt=null);break;case"focusout":Bt=Ni=Xn=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,Nl(p,t,m);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":Nl(p,t,m)}var I;if(po)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Gn?qs(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Zs&&t.locale!=="ko"&&(Gn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Gn&&(I=Js()):(un=m,go="value"in un?un.value:un.textContent,Gn=!0)),j=Xa(c,C),0<j.length&&(C=new hl(C,e,null,t,m),p.push({event:C,listeners:j}),I?C.data=I:(I=eu(t),I!==null&&(C.data=I)))),(I=ig?og(e,t):lg(e,t))&&(c=Xa(c,"onBeforeInput"),0<c.length&&(m=new hl("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:c}),m.data=I))}gu(p,n)})}function ea(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xa(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Yt(e,t),i!=null&&a.unshift(ea(e,i,r)),i=Yt(e,n),i!=null&&a.push(ea(e,i,r))),e=e.return}return a}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jl(e,n,t,a,r){for(var i=n._reactName,o=[];t!==null&&t!==a;){var l=t,u=l.alternate,c=l.stateNode;if(u!==null&&u===a)break;l.tag===5&&c!==null&&(l=c,r?(u=Yt(t,i),u!=null&&o.unshift(ea(t,u,l))):r||(u=Yt(t,i),u!=null&&o.push(ea(t,u,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var xg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function Cl(e){return(typeof e=="string"?e:""+e).replace(xg,`
`).replace(Sg,"")}function ba(e,n,t){if(n=Cl(n),Cl(e)!==n&&t)throw Error(v(425))}function Ja(){}var Ii=null,ji=null;function Ci(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,_l=typeof Promise=="function"?Promise:void 0,bg=typeof queueMicrotask=="function"?queueMicrotask:typeof _l<"u"?function(e){return _l.resolve(null).then(e).catch(Ig)}:_i;function Ig(e){setTimeout(function(){throw e})}function Yr(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),Xt(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);Xt(n)}function hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Pl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+wt,na="__reactProps$"+wt,Ze="__reactContainer$"+wt,Pi="__reactEvents$"+wt,jg="__reactListeners$"+wt,Cg="__reactHandles$"+wt;function Pn(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ze]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Pl(e);e!==null;){if(t=e[Ve])return t;e=Pl(e)}return n}e=t,t=e.parentNode}return null}function ca(e){return e=e[Ve]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function wr(e){return e[na]||null}var Ei=[],qn=-1;function Sn(e){return{current:e}}function D(e){0>qn||(e.current=Ei[qn],Ei[qn]=null,qn--)}function L(e,n){qn++,Ei[qn]=e.current,e.current=n}var wn={},se=Sn(wn),me=Sn(!1),zn=wn;function gt(e,n){var t=e.type.contextTypes;if(!t)return wn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function ye(e){return e=e.childContextTypes,e!=null}function Za(){D(me),D(se)}function El(e,n,t){if(se.current!==wn)throw Error(v(168));L(se,n),L(me,t)}function hu(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(v(108,cc(e)||"Unknown",r));return U({},t,a)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,zn=se.current,L(se,e),L(me,me.current),!0}function Tl(e,n,t){var a=e.stateNode;if(!a)throw Error(v(169));t?(e=hu(e,n,zn),a.__reactInternalMemoizedMergedChildContext=e,D(me),D(se),L(se,e)):D(me),L(me,t)}var Ye=null,xr=!1,Qr=!1;function pu(e){Ye===null?Ye=[e]:Ye.push(e)}function _g(e){xr=!0,pu(e)}function Nn(){if(!Qr&&Ye!==null){Qr=!0;var e=0,n=A;try{var t=Ye;for(A=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Ye=null,xr=!1}catch(r){throw Ye!==null&&(Ye=Ye.slice(e+1)),Bs(lo,Nn),r}finally{A=n,Qr=!1}}return null}var et=[],nt=0,er=null,nr=0,je=[],Ce=0,Mn=null,Qe=1,Ge="";function Cn(e,n){et[nt++]=nr,et[nt++]=er,er=e,nr=n}function mu(e,n,t){je[Ce++]=Qe,je[Ce++]=Ge,je[Ce++]=Mn,Mn=e;var a=Qe;e=Ge;var r=32-Ae(a)-1;a&=~(1<<r),t+=1;var i=32-Ae(n)+r;if(30<i){var o=r-r%5;i=(a&(1<<o)-1).toString(32),a>>=o,r-=o,Qe=1<<32-Ae(n)+r|t<<r|a,Ge=i+e}else Qe=1<<i|t<<r|a,Ge=e}function yo(e){e.return!==null&&(Cn(e,1),mu(e,1,0))}function ko(e){for(;e===er;)er=et[--nt],et[nt]=null,nr=et[--nt],et[nt]=null;for(;e===Mn;)Mn=je[--Ce],je[Ce]=null,Ge=je[--Ce],je[Ce]=null,Qe=je[--Ce],je[Ce]=null}var Se=null,xe=null,F=!1,Me=null;function yu(e,n){var t=_e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ol(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,xe=hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,xe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Mn!==null?{id:Qe,overflow:Ge}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=_e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,xe=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oi(e){if(F){var n=xe;if(n){var t=n;if(!Ol(e,n)){if(Ti(e))throw Error(v(418));n=hn(t.nextSibling);var a=Se;n&&Ol(e,n)?yu(a,t):(e.flags=e.flags&-4097|2,F=!1,Se=e)}}else{if(Ti(e))throw Error(v(418));e.flags=e.flags&-4097|2,F=!1,Se=e}}}function Hl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Ia(e){if(e!==Se)return!1;if(!F)return Hl(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ci(e.type,e.memoizedProps)),n&&(n=xe)){if(Ti(e))throw ku(),Error(v(418));for(;n;)yu(e,n),n=hn(n.nextSibling)}if(Hl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){xe=hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}xe=null}}else xe=Se?hn(e.stateNode.nextSibling):null;return!0}function ku(){for(var e=xe;e;)e=hn(e.nextSibling)}function ft(){xe=Se=null,F=!1}function vo(e){Me===null?Me=[e]:Me.push(e)}var Pg=nn.ReactCurrentBatchConfig;function Pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var a=t.stateNode}if(!a)throw Error(v(147,e));var r=a,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var l=r.refs;o===null?delete l[i]:l[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function ja(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function zl(e){var n=e._init;return n(e._payload)}function vu(e){function n(g,d){if(e){var f=g.deletions;f===null?(g.deletions=[d],g.flags|=16):f.push(d)}}function t(g,d){if(!e)return null;for(;d!==null;)n(g,d),d=d.sibling;return null}function a(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function r(g,d){return g=kn(g,d),g.index=0,g.sibling=null,g}function i(g,d,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<d?(g.flags|=2,d):f):(g.flags|=2,d)):(g.flags|=1048576,d)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,d,f,y){return d===null||d.tag!==6?(d=ni(f,g.mode,y),d.return=g,d):(d=r(d,f),d.return=g,d)}function u(g,d,f,y){var S=f.type;return S===Qn?m(g,d,f.props.children,y,f.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rn&&zl(S)===d.type)?(y=r(d,f.props),y.ref=Pt(g,d,f),y.return=g,y):(y=Va(f.type,f.key,f.props,null,g.mode,y),y.ref=Pt(g,d,f),y.return=g,y)}function c(g,d,f,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=ti(f,g.mode,y),d.return=g,d):(d=r(d,f.children||[]),d.return=g,d)}function m(g,d,f,y,S){return d===null||d.tag!==7?(d=Hn(f,g.mode,y,S),d.return=g,d):(d=r(d,f),d.return=g,d)}function p(g,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ni(""+d,g.mode,f),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pa:return f=Va(d.type,d.key,d.props,null,g.mode,f),f.ref=Pt(g,null,d),f.return=g,f;case Yn:return d=ti(d,g.mode,f),d.return=g,d;case rn:var y=d._init;return p(g,y(d._payload),f)}if(Ht(d)||bt(d))return d=Hn(d,g.mode,f,null),d.return=g,d;ja(g,d)}return null}function h(g,d,f,y){var S=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(g,d,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pa:return f.key===S?u(g,d,f,y):null;case Yn:return f.key===S?c(g,d,f,y):null;case rn:return S=f._init,h(g,d,S(f._payload),y)}if(Ht(f)||bt(f))return S!==null?null:m(g,d,f,y,null);ja(g,f)}return null}function w(g,d,f,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(f)||null,l(d,g,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pa:return g=g.get(y.key===null?f:y.key)||null,u(d,g,y,S);case Yn:return g=g.get(y.key===null?f:y.key)||null,c(d,g,y,S);case rn:var j=y._init;return w(g,d,f,j(y._payload),S)}if(Ht(y)||bt(y))return g=g.get(f)||null,m(d,g,y,S,null);ja(d,y)}return null}function k(g,d,f,y){for(var S=null,j=null,I=d,C=d=0,B=null;I!==null&&C<f.length;C++){I.index>C?(B=I,I=null):B=I.sibling;var O=h(g,I,f[C],y);if(O===null){I===null&&(I=B);break}e&&I&&O.alternate===null&&n(g,I),d=i(O,d,C),j===null?S=O:j.sibling=O,j=O,I=B}if(C===f.length)return t(g,I),F&&Cn(g,C),S;if(I===null){for(;C<f.length;C++)I=p(g,f[C],y),I!==null&&(d=i(I,d,C),j===null?S=I:j.sibling=I,j=I);return F&&Cn(g,C),S}for(I=a(g,I);C<f.length;C++)B=w(I,g,C,f[C],y),B!==null&&(e&&B.alternate!==null&&I.delete(B.key===null?C:B.key),d=i(B,d,C),j===null?S=B:j.sibling=B,j=B);return e&&I.forEach(function(ve){return n(g,ve)}),F&&Cn(g,C),S}function x(g,d,f,y){var S=bt(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var j=S=null,I=d,C=d=0,B=null,O=f.next();I!==null&&!O.done;C++,O=f.next()){I.index>C?(B=I,I=null):B=I.sibling;var ve=h(g,I,O.value,y);if(ve===null){I===null&&(I=B);break}e&&I&&ve.alternate===null&&n(g,I),d=i(ve,d,C),j===null?S=ve:j.sibling=ve,j=ve,I=B}if(O.done)return t(g,I),F&&Cn(g,C),S;if(I===null){for(;!O.done;C++,O=f.next())O=p(g,O.value,y),O!==null&&(d=i(O,d,C),j===null?S=O:j.sibling=O,j=O);return F&&Cn(g,C),S}for(I=a(g,I);!O.done;C++,O=f.next())O=w(I,g,C,O.value,y),O!==null&&(e&&O.alternate!==null&&I.delete(O.key===null?C:O.key),d=i(O,d,C),j===null?S=O:j.sibling=O,j=O);return e&&I.forEach(function(G){return n(g,G)}),F&&Cn(g,C),S}function z(g,d,f,y){if(typeof f=="object"&&f!==null&&f.type===Qn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case pa:e:{for(var S=f.key,j=d;j!==null;){if(j.key===S){if(S=f.type,S===Qn){if(j.tag===7){t(g,j.sibling),d=r(j,f.props.children),d.return=g,g=d;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rn&&zl(S)===j.type){t(g,j.sibling),d=r(j,f.props),d.ref=Pt(g,j,f),d.return=g,g=d;break e}t(g,j);break}else n(g,j);j=j.sibling}f.type===Qn?(d=Hn(f.props.children,g.mode,y,f.key),d.return=g,g=d):(y=Va(f.type,f.key,f.props,null,g.mode,y),y.ref=Pt(g,d,f),y.return=g,g=y)}return o(g);case Yn:e:{for(j=f.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){t(g,d.sibling),d=r(d,f.children||[]),d.return=g,g=d;break e}else{t(g,d);break}else n(g,d);d=d.sibling}d=ti(f,g.mode,y),d.return=g,g=d}return o(g);case rn:return j=f._init,z(g,d,j(f._payload),y)}if(Ht(f))return k(g,d,f,y);if(bt(f))return x(g,d,f,y);ja(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(t(g,d.sibling),d=r(d,f),d.return=g,g=d):(t(g,d),d=ni(f,g.mode,y),d.return=g,g=d),o(g)):t(g,d)}return z}var ht=vu(!0),wu=vu(!1),tr=Sn(null),ar=null,tt=null,wo=null;function xo(){wo=tt=ar=null}function So(e){var n=tr.current;D(tr),e._currentValue=n}function Hi(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ut(e,n){ar=e,wo=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(wo!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(ar===null)throw Error(v(308));tt=e,ar.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var En=null;function No(e){En===null?En=[e]:En.push(e)}function xu(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,No(n)):(t.next=r.next,r.next=t),n.interleaved=t,qe(e,a)}function qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var on=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pn(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,M&2){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,qe(e,t)}return r=a.interleaved,r===null?(n.next=n,No(a)):(n.next=r.next,r.next=n),a.interleaved=n,qe(e,t)}function Aa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,so(e,t)}}function Ml(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function rr(e,n,t,a){var r=e.updateQueue;on=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=u))}if(i!==null){var p=r.baseState;o=0,m=c=u=null,l=i;do{var h=l.lane,w=l.eventTime;if((a&h)===h){m!==null&&(m=m.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,x=l;switch(h=n,w=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(w,p,h);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(w,p,h):k,h==null)break e;p=U({},p,h);break e;case 2:on=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=w,u=p):m=m.next=w,o|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(m===null&&(u=p),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=m,n=r.shared.interleaved,n!==null){r=n;do o|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=p}}function Al(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(v(191,r));r.call(a)}}}var ga={},Ke=Sn(ga),ta=Sn(ga),aa=Sn(ga);function Tn(e){if(e===ga)throw Error(v(174));return e}function Io(e,n){switch(L(aa,n),L(ta,e),L(Ke,ga),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:fi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=fi(n,e)}D(Ke),L(Ke,n)}function pt(){D(Ke),D(ta),D(aa)}function Nu(e){Tn(aa.current);var n=Tn(Ke.current),t=fi(n,e.type);n!==t&&(L(ta,e),L(Ke,t))}function jo(e){ta.current===e&&(D(Ke),D(ta))}var W=Sn(0);function ir(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gr=[];function Co(){for(var e=0;e<Gr.length;e++)Gr[e]._workInProgressVersionPrimary=null;Gr.length=0}var La=nn.ReactCurrentDispatcher,Xr=nn.ReactCurrentBatchConfig,An=0,K=null,Z=null,ee=null,or=!1,Ft=!1,ra=0,Eg=0;function ie(){throw Error(v(321))}function _o(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Re(e[t],n[t]))return!1;return!0}function Po(e,n,t,a,r,i){if(An=i,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,La.current=e===null||e.memoizedState===null?zg:Mg,e=t(a,r),Ft){i=0;do{if(Ft=!1,ra=0,25<=i)throw Error(v(301));i+=1,ee=Z=null,n.updateQueue=null,La.current=Ag,e=t(a,r)}while(Ft)}if(La.current=lr,n=Z!==null&&Z.next!==null,An=0,ee=Z=K=null,or=!1,n)throw Error(v(300));return e}function Eo(){var e=ra!==0;return ra=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?K.memoizedState=ee=e:ee=ee.next=e,ee}function Te(){if(Z===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var n=ee===null?K.memoizedState:ee.next;if(n!==null)ee=n,Z=e;else{if(e===null)throw Error(v(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?K.memoizedState=ee=e:ee=ee.next=e}return ee}function ia(e,n){return typeof n=="function"?n(e):n}function Jr(e){var n=Te(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var a=Z,r=a.baseQueue,i=t.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}a.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,a=a.baseState;var l=o=null,u=null,c=i;do{var m=c.lane;if((An&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:e(a,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=a):u=u.next=p,K.lanes|=m,Ln|=m}c=c.next}while(c!==null&&c!==i);u===null?o=a:u.next=l,Re(a,n.memoizedState)||(pe=!0),n.memoizedState=a,n.baseState=o,n.baseQueue=u,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do i=r.lane,K.lanes|=i,Ln|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Zr(e){var n=Te(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do i=e(i,o.action),o=o.next;while(o!==r);Re(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function bu(){}function Iu(e,n){var t=K,a=Te(),r=n(),i=!Re(a.memoizedState,r);if(i&&(a.memoizedState=r,pe=!0),a=a.queue,To(_u.bind(null,t,a,e),[e]),a.getSnapshot!==n||i||ee!==null&&ee.memoizedState.tag&1){if(t.flags|=2048,oa(9,Cu.bind(null,t,a,r,n),void 0,null),ne===null)throw Error(v(349));An&30||ju(t,n,r)}return r}function ju(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Cu(e,n,t,a){n.value=t,n.getSnapshot=a,Pu(n)&&Eu(e)}function _u(e,n,t){return t(function(){Pu(n)&&Eu(e)})}function Pu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Re(e,t)}catch{return!0}}function Eu(e){var n=qe(e,1);n!==null&&Le(n,e,1,-1)}function Ll(e){var n=Fe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},n.queue=e,e=e.dispatch=Hg.bind(null,K,e),[n.memoizedState,e]}function oa(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Tu(){return Te().memoizedState}function Ra(e,n,t,a){var r=Fe();K.flags|=e,r.memoizedState=oa(1|n,t,void 0,a===void 0?null:a)}function Sr(e,n,t,a){var r=Te();a=a===void 0?null:a;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,a!==null&&_o(a,o.deps)){r.memoizedState=oa(n,t,i,a);return}}K.flags|=e,r.memoizedState=oa(1|n,t,i,a)}function Rl(e,n){return Ra(8390656,8,e,n)}function To(e,n){return Sr(2048,8,e,n)}function Ou(e,n){return Sr(4,2,e,n)}function Hu(e,n){return Sr(4,4,e,n)}function zu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mu(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4,4,zu.bind(null,n,e),t)}function Oo(){}function Au(e,n){var t=Te();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&_o(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Lu(e,n){var t=Te();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&_o(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Ru(e,n,t){return An&21?(Re(t,n)||(t=Ws(),K.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function Tg(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var a=Xr.transition;Xr.transition={};try{e(!1),n()}finally{A=t,Xr.transition=a}}function Du(){return Te().memoizedState}function Og(e,n,t){var a=yn(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Bu(e))Fu(n,t);else if(t=xu(e,n,t,a),t!==null){var r=ce();Le(t,e,a,r),Vu(t,n,a)}}function Hg(e,n,t){var a=yn(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Fu(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,l=i(o,t);if(r.hasEagerState=!0,r.eagerState=l,Re(l,o)){var u=n.interleaved;u===null?(r.next=r,No(n)):(r.next=u.next,u.next=r),n.interleaved=r;return}}catch{}finally{}t=xu(e,n,r,a),t!==null&&(r=ce(),Le(t,e,a,r),Vu(t,n,a))}}function Bu(e){var n=e.alternate;return e===K||n!==null&&n===K}function Fu(e,n){Ft=or=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Vu(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,so(e,t)}}var lr={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},zg={readContext:Ee,useCallback:function(e,n){return Fe().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:Rl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ra(4194308,4,zu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ra(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ra(4,2,e,n)},useMemo:function(e,n){var t=Fe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Fe();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Og.bind(null,K,e),[a.memoizedState,e]},useRef:function(e){var n=Fe();return e={current:e},n.memoizedState=e},useState:Ll,useDebugValue:Oo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ll(!1),n=e[0];return e=Tg.bind(null,e[1]),Fe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=K,r=Fe();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),ne===null)throw Error(v(349));An&30||ju(a,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,Rl(_u.bind(null,a,i,e),[e]),a.flags|=2048,oa(9,Cu.bind(null,a,i,t,n),void 0,null),t},useId:function(){var e=Fe(),n=ne.identifierPrefix;if(F){var t=Ge,a=Qe;t=(a&~(1<<32-Ae(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=ra++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Eg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Mg={readContext:Ee,useCallback:Au,useContext:Ee,useEffect:To,useImperativeHandle:Mu,useInsertionEffect:Ou,useLayoutEffect:Hu,useMemo:Lu,useReducer:Jr,useRef:Tu,useState:function(){return Jr(ia)},useDebugValue:Oo,useDeferredValue:function(e){var n=Te();return Ru(n,Z.memoizedState,e)},useTransition:function(){var e=Jr(ia)[0],n=Te().memoizedState;return[e,n]},useMutableSource:bu,useSyncExternalStore:Iu,useId:Du,unstable_isNewReconciler:!1},Ag={readContext:Ee,useCallback:Au,useContext:Ee,useEffect:To,useImperativeHandle:Mu,useInsertionEffect:Ou,useLayoutEffect:Hu,useMemo:Lu,useReducer:Zr,useRef:Tu,useState:function(){return Zr(ia)},useDebugValue:Oo,useDeferredValue:function(e){var n=Te();return Z===null?n.memoizedState=e:Ru(n,Z.memoizedState,e)},useTransition:function(){var e=Zr(ia)[0],n=Te().memoizedState;return[e,n]},useMutableSource:bu,useSyncExternalStore:Iu,useId:Du,unstable_isNewReconciler:!1};function He(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function zi(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Nr={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=ce(),r=yn(e),i=Xe(a,r);i.payload=n,t!=null&&(i.callback=t),n=pn(e,i,r),n!==null&&(Le(n,e,r,a),Aa(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=ce(),r=yn(e),i=Xe(a,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=pn(e,i,r),n!==null&&(Le(n,e,r,a),Aa(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),a=yn(e),r=Xe(t,a);r.tag=2,n!=null&&(r.callback=n),n=pn(e,r,a),n!==null&&(Le(n,e,a,t),Aa(n,e,a))}};function Dl(e,n,t,a,r,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,a)||!Zt(r,i):!0}function Wu(e,n,t){var a=!1,r=wn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(r=ye(n)?zn:se.current,a=n.contextTypes,i=(a=a!=null)?gt(e,r):wn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Nr,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function Bl(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Nr.enqueueReplaceState(n,n.state,null)}function Mi(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},bo(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Ee(i):(i=ye(n)?zn:se.current,r.context=gt(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(zi(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Nr.enqueueReplaceState(r,r.state,null),rr(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function mt(e,n){try{var t="",a=n;do t+=dc(a),a=a.return;while(a);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function qr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ai(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,n,t){t=Xe(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){ur||(ur=!0,$i=a),Ai(e,n)},t}function Uu(e,n,t){t=Xe(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Ai(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ai(e,n),typeof a!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Fl(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Lg;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=Jg.bind(null,e,n,t),n.then(e,e))}function Vl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Wl(e,n,t,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Xe(-1,1),n.tag=2,pn(t,n,1))),t.lanes|=1),e)}var Rg=nn.ReactCurrentOwner,pe=!1;function de(e,n,t,a){n.child=e===null?wu(n,null,t,a):ht(n,e.child,t,a)}function Kl(e,n,t,a,r){t=t.render;var i=n.ref;return ut(n,r),a=Po(e,n,t,a,i,r),t=Eo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,en(e,n,r)):(F&&t&&yo(n),n.flags|=1,de(e,n,a,r),n.child)}function Ul(e,n,t,a,r){if(e===null){var i=t.type;return typeof i=="function"&&!Bo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,$u(e,n,i,a,r)):(e=Va(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(o,a)&&e.ref===n.ref)return en(e,n,r)}return n.flags|=1,e=kn(i,a),e.ref=n.ref,e.return=n,n.child=e}function $u(e,n,t,a,r){if(e!==null){var i=e.memoizedProps;if(Zt(i,a)&&e.ref===n.ref)if(pe=!1,n.pendingProps=a=i,(e.lanes&r)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,en(e,n,r)}return Li(e,n,t,a,r)}function Yu(e,n,t){var a=n.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(rt,we),we|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,L(rt,we),we|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,L(rt,we),we|=a}else i!==null?(a=i.baseLanes|t,n.memoizedState=null):a=t,L(rt,we),we|=a;return de(e,n,r,t),n.child}function Qu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Li(e,n,t,a,r){var i=ye(t)?zn:se.current;return i=gt(n,i),ut(n,r),t=Po(e,n,t,a,i,r),a=Eo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,en(e,n,r)):(F&&a&&yo(n),n.flags|=1,de(e,n,t,r),n.child)}function $l(e,n,t,a,r){if(ye(t)){var i=!0;qa(n)}else i=!1;if(ut(n,r),n.stateNode===null)Da(e,n),Wu(n,t,a),Mi(n,t,a,r),a=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=ye(t)?zn:se.current,c=gt(n,c));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||u!==c)&&Bl(n,o,a,c),on=!1;var h=n.memoizedState;o.state=h,rr(n,a,o,r),u=n.memoizedState,l!==a||h!==u||me.current||on?(typeof m=="function"&&(zi(n,t,m,a),u=n.memoizedState),(l=on||Dl(n,t,l,a,h,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=u),o.props=a,o.state=u,o.context=c,a=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,Su(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:He(n.type,l),o.props=c,p=n.pendingProps,h=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=ye(t)?zn:se.current,u=gt(n,u));var w=t.getDerivedStateFromProps;(m=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==u)&&Bl(n,o,a,u),on=!1,h=n.memoizedState,o.state=h,rr(n,a,o,r);var k=n.memoizedState;l!==p||h!==k||me.current||on?(typeof w=="function"&&(zi(n,t,w,a),k=n.memoizedState),(c=on||Dl(n,t,c,a,h,k,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,k,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=k),o.props=a,o.state=k,o.context=u,a=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),a=!1)}return Ri(e,n,t,a,i,r)}function Ri(e,n,t,a,r,i){Qu(e,n);var o=(n.flags&128)!==0;if(!a&&!o)return r&&Tl(n,t,!1),en(e,n,i);a=n.stateNode,Rg.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&o?(n.child=ht(n,e.child,null,i),n.child=ht(n,null,l,i)):de(e,n,l,i),n.memoizedState=a.state,r&&Tl(n,t,!0),n.child}function Gu(e){var n=e.stateNode;n.pendingContext?El(e,n.pendingContext,n.pendingContext!==n.context):n.context&&El(e,n.context,!1),Io(e,n.containerInfo)}function Yl(e,n,t,a,r){return ft(),vo(r),n.flags|=256,de(e,n,t,a),n.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xu(e,n,t){var a=n.pendingProps,r=W.current,i=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),L(W,r&1),e===null)return Oi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=a.children,e=a.fallback,i?(a=n.mode,i=n.child,o={mode:"hidden",children:o},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=jr(o,a,0,null),e=Hn(e,a,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Bi(t),n.memoizedState=Di,e):Ho(n,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Dg(e,n,o,a,l,r,t);if(i){i=a.fallback,o=n.mode,r=e.child,l=r.sibling;var u={mode:"hidden",children:a.children};return!(o&1)&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=u,n.deletions=null):(a=kn(r,u),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=kn(l,i):(i=Hn(i,o,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,o=e.child.memoizedState,o=o===null?Bi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Di,a}return i=e.child,e=i.sibling,a=kn(i,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Ho(e,n){return n=jr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ca(e,n,t,a){return a!==null&&vo(a),ht(n,e.child,null,t),e=Ho(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dg(e,n,t,a,r,i,o){if(t)return n.flags&256?(n.flags&=-257,a=qr(Error(v(422))),Ca(e,n,o,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=a.fallback,r=n.mode,a=jr({mode:"visible",children:a.children},r,0,null),i=Hn(i,r,o,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,n.mode&1&&ht(n,e.child,null,o),n.child.memoizedState=Bi(o),n.memoizedState=Di,i);if(!(n.mode&1))return Ca(e,n,o,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,i=Error(v(419)),a=qr(i,a,void 0),Ca(e,n,o,a)}if(l=(o&e.childLanes)!==0,pe||l){if(a=ne,a!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|o)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,qe(e,r),Le(a,e,r,-1))}return Do(),a=qr(Error(v(421))),Ca(e,n,o,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Zg.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,xe=hn(r.nextSibling),Se=n,F=!0,Me=null,e!==null&&(je[Ce++]=Qe,je[Ce++]=Ge,je[Ce++]=Mn,Qe=e.id,Ge=e.overflow,Mn=n),n=Ho(n,a.children),n.flags|=4096,n)}function Ql(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Hi(e.return,n,t)}function ei(e,n,t,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r)}function Ju(e,n,t){var a=n.pendingProps,r=a.revealOrder,i=a.tail;if(de(e,n,a.children,t),a=W.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ql(e,t,n);else if(e.tag===19)Ql(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(L(W,a),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&ir(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ei(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&ir(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ei(n,!0,t,null,i);break;case"together":ei(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Da(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function en(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bg(e,n,t){switch(n.tag){case 3:Gu(n),ft();break;case 5:Nu(n);break;case 1:ye(n.type)&&qa(n);break;case 4:Io(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;L(tr,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(L(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?Xu(e,n,t):(L(W,W.current&1),e=en(e,n,t),e!==null?e.sibling:null);L(W,W.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return Ju(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),L(W,W.current),a)break;return null;case 22:case 23:return n.lanes=0,Yu(e,n,t)}return en(e,n,t)}var Zu,Fi,qu,ed;Zu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fi=function(){};qu=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,Tn(Ke.current);var i=null;switch(t){case"input":r=ui(e,r),a=ui(e,a),i=[];break;case"select":r=U({},r,{value:void 0}),a=U({},a,{value:void 0}),i=[];break;case"textarea":r=gi(e,r),a=gi(e,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ja)}hi(t,a);var o;t=null;for(c in r)if(!a.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ut.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in a){var u=a[c];if(l=r!=null?r[c]:void 0,a.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ut.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&R("scroll",e),i||l===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};ed=function(e,n,t,a){t!==a&&(n.flags|=4)};function Et(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Fg(e,n,t){var a=n.pendingProps;switch(ko(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return ye(n.type)&&Za(),oe(n),null;case 3:return a=n.stateNode,pt(),D(me),D(se),Co(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ia(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(Gi(Me),Me=null))),Fi(e,n),oe(n),null;case 5:jo(n);var r=Tn(aa.current);if(t=n.type,e!==null&&n.stateNode!=null)qu(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(v(166));return oe(n),null}if(e=Tn(Ke.current),Ia(n)){a=n.stateNode,t=n.type;var i=n.memoizedProps;switch(a[Ve]=n,a[na]=i,e=(n.mode&1)!==0,t){case"dialog":R("cancel",a),R("close",a);break;case"iframe":case"object":case"embed":R("load",a);break;case"video":case"audio":for(r=0;r<Mt.length;r++)R(Mt[r],a);break;case"source":R("error",a);break;case"img":case"image":case"link":R("error",a),R("load",a);break;case"details":R("toggle",a);break;case"input":al(a,i),R("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},R("invalid",a);break;case"textarea":il(a,i),R("invalid",a)}hi(t,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?a.textContent!==l&&(i.suppressHydrationWarning!==!0&&ba(a.textContent,l,e),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ba(a.textContent,l,e),r=["children",""+l]):Ut.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&R("scroll",a)}switch(t){case"input":ma(a),rl(a,i,!0);break;case"textarea":ma(a),ol(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Ja)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_s(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(t,{is:a.is}):(e=o.createElement(t),t==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,t),e[Ve]=n,e[na]=a,Zu(e,n,!1,!1),n.stateNode=e;e:{switch(o=pi(t,a),t){case"dialog":R("cancel",e),R("close",e),r=a;break;case"iframe":case"object":case"embed":R("load",e),r=a;break;case"video":case"audio":for(r=0;r<Mt.length;r++)R(Mt[r],e);r=a;break;case"source":R("error",e),r=a;break;case"img":case"image":case"link":R("error",e),R("load",e),r=a;break;case"details":R("toggle",e),r=a;break;case"input":al(e,a),r=ui(e,a),R("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=U({},a,{value:void 0}),R("invalid",e);break;case"textarea":il(e,a),r=gi(e,a),R("invalid",e);break;default:r=a}hi(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Ts(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ps(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&$t(e,u):typeof u=="number"&&$t(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ut.hasOwnProperty(i)?u!=null&&i==="onScroll"&&R("scroll",e):u!=null&&to(e,i,u,o))}switch(t){case"input":ma(e),rl(e,a,!1);break;case"textarea":ma(e),ol(e);break;case"option":a.value!=null&&e.setAttribute("value",""+vn(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?it(e,!!a.multiple,i,!1):a.defaultValue!=null&&it(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ja)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)ed(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(v(166));if(t=Tn(aa.current),Tn(Ke.current),Ia(n)){if(a=n.stateNode,t=n.memoizedProps,a[Ve]=n,(i=a.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:ba(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ba(a.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Ve]=n,n.stateNode=a}return oe(n),null;case 13:if(D(W),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&xe!==null&&n.mode&1&&!(n.flags&128))ku(),ft(),n.flags|=98560,i=!1;else if(i=Ia(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Ve]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),i=!1}else Me!==null&&(Gi(Me),Me=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?q===0&&(q=3):Do())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return pt(),Fi(e,n),e===null&&qt(n.stateNode.containerInfo),oe(n),null;case 10:return So(n.type._context),oe(n),null;case 17:return ye(n.type)&&Za(),oe(n),null;case 19:if(D(W),i=n.memoizedState,i===null)return oe(n),null;if(a=(n.flags&128)!==0,o=i.rendering,o===null)if(a)Et(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ir(e),o!==null){for(n.flags|=128,Et(i,!1),a=o.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)i=t,e=a,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return L(W,W.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>yt&&(n.flags|=128,a=!0,Et(i,!1),n.lanes=4194304)}else{if(!a)if(e=ir(o),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Et(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!F)return oe(n),null}else 2*Q()-i.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,a=!0,Et(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=W.current,L(W,a?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return Ro(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?we&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function Vg(e,n){switch(ko(n),n.tag){case 1:return ye(n.type)&&Za(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return pt(),D(me),D(se),Co(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return jo(n),null;case 13:if(D(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(W),null;case 4:return pt(),null;case 10:return So(n.type._context),null;case 22:case 23:return Ro(),null;case 24:return null;default:return null}}var _a=!1,le=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,b=null;function at(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){Y(e,n,a)}else t.current=null}function Vi(e,n,t){try{t()}catch(a){Y(e,n,a)}}var Gl=!1;function Kg(e,n){if(Ii=Qa,e=iu(),mo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,l=-1,u=-1,c=0,m=0,p=e,h=null;n:for(;;){for(var w;p!==t||r!==0&&p.nodeType!==3||(l=o+r),p!==i||a!==0&&p.nodeType!==3||(u=o+a),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===e)break n;if(h===t&&++c===r&&(l=o),h===i&&++m===a&&(u=o),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}t=l===-1||u===-1?null:{start:l,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(ji={focusedElem:e,selectionRange:t},Qa=!1,b=n;b!==null;)if(n=b,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,b=e;else for(;b!==null;){n=b;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,z=k.memoizedState,g=n.stateNode,d=g.getSnapshotBeforeUpdate(n.elementType===n.type?x:He(n.type,x),z);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){Y(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,b=e;break}b=n.return}return k=Gl,Gl=!1,k}function Vt(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Vi(n,t,i)}r=r.next}while(r!==a)}}function br(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Wi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function nd(e){var n=e.alternate;n!==null&&(e.alternate=null,nd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ve],delete n[na],delete n[Pi],delete n[jg],delete n[Cg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function td(e){return e.tag===5||e.tag===3||e.tag===4}function Xl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ja));else if(a!==4&&(e=e.child,e!==null))for(Ki(e,n,t),e=e.sibling;e!==null;)Ki(e,n,t),e=e.sibling}function Ui(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ui(e,n,t),e=e.sibling;e!==null;)Ui(e,n,t),e=e.sibling}var te=null,ze=!1;function an(e,n,t){for(t=t.child;t!==null;)ad(e,n,t),t=t.sibling}function ad(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(mr,t)}catch{}switch(t.tag){case 5:le||at(t,n);case 6:var a=te,r=ze;te=null,an(e,n,t),te=a,ze=r,te!==null&&(ze?(e=te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):te.removeChild(t.stateNode));break;case 18:te!==null&&(ze?(e=te,t=t.stateNode,e.nodeType===8?Yr(e.parentNode,t):e.nodeType===1&&Yr(e,t),Xt(e)):Yr(te,t.stateNode));break;case 4:a=te,r=ze,te=t.stateNode.containerInfo,ze=!0,an(e,n,t),te=a,ze=r;break;case 0:case 11:case 14:case 15:if(!le&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Vi(t,n,o),r=r.next}while(r!==a)}an(e,n,t);break;case 1:if(!le&&(at(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){Y(t,n,l)}an(e,n,t);break;case 21:an(e,n,t);break;case 22:t.mode&1?(le=(a=le)||t.memoizedState!==null,an(e,n,t),le=a):an(e,n,t);break;default:an(e,n,t)}}function Jl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Wg),n.forEach(function(a){var r=qg.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var i=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,ze=!1;break e;case 3:te=l.stateNode.containerInfo,ze=!0;break e;case 4:te=l.stateNode.containerInfo,ze=!0;break e}l=l.return}if(te===null)throw Error(v(160));ad(i,o,r),te=null,ze=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){Y(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)rd(n,e),n=n.sibling}function rd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),Be(e),a&4){try{Vt(3,e,e.return),br(3,e)}catch(x){Y(e,e.return,x)}try{Vt(5,e,e.return)}catch(x){Y(e,e.return,x)}}break;case 1:Oe(n,e),Be(e),a&512&&t!==null&&at(t,t.return);break;case 5:if(Oe(n,e),Be(e),a&512&&t!==null&&at(t,t.return),e.flags&32){var r=e.stateNode;try{$t(r,"")}catch(x){Y(e,e.return,x)}}if(a&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&js(r,i),pi(l,o);var c=pi(l,i);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?Ts(r,p):m==="dangerouslySetInnerHTML"?Ps(r,p):m==="children"?$t(r,p):to(r,m,p,c)}switch(l){case"input":di(r,i);break;case"textarea":Cs(r,i);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?it(r,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?it(r,!!i.multiple,i.defaultValue,!0):it(r,!!i.multiple,i.multiple?[]:"",!1))}r[na]=i}catch(x){Y(e,e.return,x)}}break;case 6:if(Oe(n,e),Be(e),a&4){if(e.stateNode===null)throw Error(v(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(x){Y(e,e.return,x)}}break;case 3:if(Oe(n,e),Be(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Xt(n.containerInfo)}catch(x){Y(e,e.return,x)}break;case 4:Oe(n,e),Be(e);break;case 13:Oe(n,e),Be(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Ao=Q())),a&4&&Jl(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(le=(c=le)||m,Oe(n,e),le=c):Oe(n,e),Be(e),a&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(b=e,m=e.child;m!==null;){for(p=b=m;b!==null;){switch(h=b,w=h.child,h.tag){case 0:case 11:case 14:case 15:Vt(4,h,h.return);break;case 1:at(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){a=h,t=h.return;try{n=a,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){Y(a,t,x)}}break;case 5:at(h,h.return);break;case 22:if(h.memoizedState!==null){ql(p);continue}}w!==null?(w.return=h,b=w):ql(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{r=p.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Es("display",o))}catch(x){Y(e,e.return,x)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Y(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oe(n,e),Be(e),a&4&&Jl(e);break;case 21:break;default:Oe(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(td(t)){var a=t;break e}t=t.return}throw Error(v(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&($t(r,""),a.flags&=-33);var i=Xl(e);Ui(e,i,r);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Xl(e);Ki(e,l,o);break;default:throw Error(v(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ug(e,n,t){b=e,id(e)}function id(e,n,t){for(var a=(e.mode&1)!==0;b!==null;){var r=b,i=r.child;if(r.tag===22&&a){var o=r.memoizedState!==null||_a;if(!o){var l=r.alternate,u=l!==null&&l.memoizedState!==null||le;l=_a;var c=le;if(_a=o,(le=u)&&!c)for(b=r;b!==null;)o=b,u=o.child,o.tag===22&&o.memoizedState!==null?es(r):u!==null?(u.return=o,b=u):es(r);for(;i!==null;)b=i,id(i),i=i.sibling;b=r,_a=l,le=c}Zl(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,b=i):Zl(e)}}function Zl(e){for(;b!==null;){var n=b;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||br(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!le)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Al(n,i,a);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Al(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Xt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}le||n.flags&512&&Wi(n)}catch(h){Y(n,n.return,h)}}if(n===e){b=null;break}if(t=n.sibling,t!==null){t.return=n.return,b=t;break}b=n.return}}function ql(e){for(;b!==null;){var n=b;if(n===e){b=null;break}var t=n.sibling;if(t!==null){t.return=n.return,b=t;break}b=n.return}}function es(e){for(;b!==null;){var n=b;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{br(4,n)}catch(u){Y(n,t,u)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(u){Y(n,r,u)}}var i=n.return;try{Wi(n)}catch(u){Y(n,i,u)}break;case 5:var o=n.return;try{Wi(n)}catch(u){Y(n,o,u)}}}catch(u){Y(n,n.return,u)}if(n===e){b=null;break}var l=n.sibling;if(l!==null){l.return=n.return,b=l;break}b=n.return}}var $g=Math.ceil,sr=nn.ReactCurrentDispatcher,zo=nn.ReactCurrentOwner,Pe=nn.ReactCurrentBatchConfig,M=0,ne=null,J=null,ae=0,we=0,rt=Sn(0),q=0,la=null,Ln=0,Ir=0,Mo=0,Wt=null,he=null,Ao=0,yt=1/0,$e=null,ur=!1,$i=null,mn=null,Pa=!1,dn=null,dr=0,Kt=0,Yi=null,Ba=-1,Fa=0;function ce(){return M&6?Q():Ba!==-1?Ba:Ba=Q()}function yn(e){return e.mode&1?M&2&&ae!==0?ae&-ae:Pg.transition!==null?(Fa===0&&(Fa=Ws()),Fa):(e=A,e!==0||(e=window.event,e=e===void 0?16:Xs(e.type)),e):1}function Le(e,n,t,a){if(50<Kt)throw Kt=0,Yi=null,Error(v(185));ua(e,t,a),(!(M&2)||e!==ne)&&(e===ne&&(!(M&2)&&(Ir|=t),q===4&&sn(e,ae)),ke(e,a),t===1&&M===0&&!(n.mode&1)&&(yt=Q()+500,xr&&Nn()))}function ke(e,n){var t=e.callbackNode;Pc(e,n);var a=Ya(e,e===ne?ae:0);if(a===0)t!==null&&ul(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&ul(t),n===1)e.tag===0?_g(ns.bind(null,e)):pu(ns.bind(null,e)),bg(function(){!(M&6)&&Nn()}),t=null;else{switch(Ks(a)){case 1:t=lo;break;case 4:t=Fs;break;case 16:t=$a;break;case 536870912:t=Vs;break;default:t=$a}t=fd(t,od.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function od(e,n){if(Ba=-1,Fa=0,M&6)throw Error(v(327));var t=e.callbackNode;if(dt()&&e.callbackNode!==t)return null;var a=Ya(e,e===ne?ae:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=cr(e,a);else{n=a;var r=M;M|=2;var i=sd();(ne!==e||ae!==n)&&($e=null,yt=Q()+500,On(e,n));do try{Gg();break}catch(l){ld(e,l)}while(!0);xo(),sr.current=i,M=r,J!==null?n=0:(ne=null,ae=0,n=q)}if(n!==0){if(n===2&&(r=wi(e),r!==0&&(a=r,n=Qi(e,r))),n===1)throw t=la,On(e,0),sn(e,a),ke(e,Q()),t;if(n===6)sn(e,a);else{if(r=e.current.alternate,!(a&30)&&!Yg(r)&&(n=cr(e,a),n===2&&(i=wi(e),i!==0&&(a=i,n=Qi(e,i))),n===1))throw t=la,On(e,0),sn(e,a),ke(e,Q()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(v(345));case 2:_n(e,he,$e);break;case 3:if(sn(e,a),(a&130023424)===a&&(n=Ao+500-Q(),10<n)){if(Ya(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){ce(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=_i(_n.bind(null,e,he,$e),n);break}_n(e,he,$e);break;case 4:if(sn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var o=31-Ae(a);i=1<<o,o=n[o],o>r&&(r=o),a&=~i}if(a=r,a=Q()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*$g(a/1960))-a,10<a){e.timeoutHandle=_i(_n.bind(null,e,he,$e),a);break}_n(e,he,$e);break;case 5:_n(e,he,$e);break;default:throw Error(v(329))}}}return ke(e,Q()),e.callbackNode===t?od.bind(null,e):null}function Qi(e,n){var t=Wt;return e.current.memoizedState.isDehydrated&&(On(e,n).flags|=256),e=cr(e,n),e!==2&&(n=he,he=t,n!==null&&Gi(n)),e}function Gi(e){he===null?he=e:he.push.apply(he,e)}function Yg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],i=r.getSnapshot;r=r.value;try{if(!Re(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function sn(e,n){for(n&=~Mo,n&=~Ir,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),a=1<<t;e[t]=-1,n&=~a}}function ns(e){if(M&6)throw Error(v(327));dt();var n=Ya(e,0);if(!(n&1))return ke(e,Q()),null;var t=cr(e,n);if(e.tag!==0&&t===2){var a=wi(e);a!==0&&(n=a,t=Qi(e,a))}if(t===1)throw t=la,On(e,0),sn(e,n),ke(e,Q()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_n(e,he,$e),ke(e,Q()),null}function Lo(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(yt=Q()+500,xr&&Nn())}}function Rn(e){dn!==null&&dn.tag===0&&!(M&6)&&dt();var n=M;M|=1;var t=Pe.transition,a=A;try{if(Pe.transition=null,A=1,e)return e()}finally{A=a,Pe.transition=t,M=n,!(M&6)&&Nn()}}function Ro(){we=rt.current,D(rt)}function On(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ng(t)),J!==null)for(t=J.return;t!==null;){var a=t;switch(ko(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Za();break;case 3:pt(),D(me),D(se),Co();break;case 5:jo(a);break;case 4:pt();break;case 13:D(W);break;case 19:D(W);break;case 10:So(a.type._context);break;case 22:case 23:Ro()}t=t.return}if(ne=e,J=e=kn(e.current,null),ae=we=n,q=0,la=null,Mo=Ir=Ln=0,he=Wt=null,En!==null){for(n=0;n<En.length;n++)if(t=En[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,i=t.pending;if(i!==null){var o=i.next;i.next=r,a.next=o}t.pending=a}En=null}return e}function ld(e,n){do{var t=J;try{if(xo(),La.current=lr,or){for(var a=K.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}or=!1}if(An=0,ee=Z=K=null,Ft=!1,ra=0,zo.current=null,t===null||t.return===null){q=1,la=n,J=null;break}e:{var i=e,o=t.return,l=t,u=n;if(n=ae,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Vl(o);if(w!==null){w.flags&=-257,Wl(w,o,l,i,n),w.mode&1&&Fl(i,c,n),n=w,u=c;var k=n.updateQueue;if(k===null){var x=new Set;x.add(u),n.updateQueue=x}else k.add(u);break e}else{if(!(n&1)){Fl(i,c,n),Do();break e}u=Error(v(426))}}else if(F&&l.mode&1){var z=Vl(o);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Wl(z,o,l,i,n),vo(mt(u,l));break e}}i=u=mt(u,l),q!==4&&(q=2),Wt===null?Wt=[i]:Wt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=Ku(i,u,n);Ml(i,g);break e;case 1:l=u;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mn===null||!mn.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var y=Uu(i,l,n);Ml(i,y);break e}}i=i.return}while(i!==null)}dd(t)}catch(S){n=S,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function sd(){var e=sr.current;return sr.current=lr,e===null?lr:e}function Do(){(q===0||q===3||q===2)&&(q=4),ne===null||!(Ln&268435455)&&!(Ir&268435455)||sn(ne,ae)}function cr(e,n){var t=M;M|=2;var a=sd();(ne!==e||ae!==n)&&($e=null,On(e,n));do try{Qg();break}catch(r){ld(e,r)}while(!0);if(xo(),M=t,sr.current=a,J!==null)throw Error(v(261));return ne=null,ae=0,q}function Qg(){for(;J!==null;)ud(J)}function Gg(){for(;J!==null&&!wc();)ud(J)}function ud(e){var n=gd(e.alternate,e,we);e.memoizedProps=e.pendingProps,n===null?dd(e):J=n,zo.current=null}function dd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Vg(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,J=null;return}}else if(t=Fg(t,n,we),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);q===0&&(q=5)}function _n(e,n,t){var a=A,r=Pe.transition;try{Pe.transition=null,A=1,Xg(e,n,t,a)}finally{Pe.transition=r,A=a}return null}function Xg(e,n,t,a){do dt();while(dn!==null);if(M&6)throw Error(v(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Ec(e,i),e===ne&&(J=ne=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Pa||(Pa=!0,fd($a,function(){return dt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=A;A=1;var l=M;M|=4,zo.current=null,Kg(e,t),rd(t,e),mg(ji),Qa=!!Ii,ji=Ii=null,e.current=t,Ug(t),xc(),M=l,A=o,Pe.transition=i}else e.current=t;if(Pa&&(Pa=!1,dn=e,dr=r),i=e.pendingLanes,i===0&&(mn=null),bc(t.stateNode),ke(e,Q()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(ur)throw ur=!1,e=$i,$i=null,e;return dr&1&&e.tag!==0&&dt(),i=e.pendingLanes,i&1?e===Yi?Kt++:(Kt=0,Yi=e):Kt=0,Nn(),null}function dt(){if(dn!==null){var e=Ks(dr),n=Pe.transition,t=A;try{if(Pe.transition=null,A=16>e?16:e,dn===null)var a=!1;else{if(e=dn,dn=null,dr=0,M&6)throw Error(v(331));var r=M;for(M|=4,b=e.current;b!==null;){var i=b,o=i.child;if(b.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(b=c;b!==null;){var m=b;switch(m.tag){case 0:case 11:case 15:Vt(8,m,i)}var p=m.child;if(p!==null)p.return=m,b=p;else for(;b!==null;){m=b;var h=m.sibling,w=m.return;if(nd(m),m===c){b=null;break}if(h!==null){h.return=w,b=h;break}b=w}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var z=x.sibling;x.sibling=null,x=z}while(x!==null)}}b=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,b=o;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vt(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,b=g;break e}b=i.return}}var d=e.current;for(b=d;b!==null;){o=b;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,b=f;else e:for(o=d;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:br(9,l)}}catch(S){Y(l,l.return,S)}if(l===o){b=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,b=y;break e}b=l.return}}if(M=r,Nn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(mr,e)}catch{}a=!0}return a}finally{A=t,Pe.transition=n}}return!1}function ts(e,n,t){n=mt(t,n),n=Ku(e,n,1),e=pn(e,n,1),n=ce(),e!==null&&(ua(e,1,n),ke(e,n))}function Y(e,n,t){if(e.tag===3)ts(e,e,t);else for(;n!==null;){if(n.tag===3){ts(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(mn===null||!mn.has(a))){e=mt(t,e),e=Uu(n,e,1),n=pn(n,e,1),e=ce(),n!==null&&(ua(n,1,e),ke(n,e));break}}n=n.return}}function Jg(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,ne===e&&(ae&t)===t&&(q===4||q===3&&(ae&130023424)===ae&&500>Q()-Ao?On(e,0):Mo|=t),ke(e,n)}function cd(e,n){n===0&&(e.mode&1?(n=va,va<<=1,!(va&130023424)&&(va=4194304)):n=1);var t=ce();e=qe(e,n),e!==null&&(ua(e,n,t),ke(e,t))}function Zg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),cd(e,t)}function qg(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(v(314))}a!==null&&a.delete(n),cd(e,t)}var gd;gd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,Bg(e,n,t);pe=!!(e.flags&131072)}else pe=!1,F&&n.flags&1048576&&mu(n,nr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Da(e,n),e=n.pendingProps;var r=gt(n,se.current);ut(n,t),r=Po(null,n,a,e,r,t);var i=Eo();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(a)?(i=!0,qa(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bo(n),r.updater=Nr,n.stateNode=r,r._reactInternals=n,Mi(n,a,e,t),n=Ri(null,n,a,!0,i,t)):(n.tag=0,F&&i&&yo(n),de(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(Da(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=nf(a),e=He(a,e),r){case 0:n=Li(null,n,a,e,t);break e;case 1:n=$l(null,n,a,e,t);break e;case 11:n=Kl(null,n,a,e,t);break e;case 14:n=Ul(null,n,a,He(a.type,e),t);break e}throw Error(v(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:He(a,r),Li(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:He(a,r),$l(e,n,a,r,t);case 3:e:{if(Gu(n),e===null)throw Error(v(387));a=n.pendingProps,i=n.memoizedState,r=i.element,Su(e,n),rr(n,a,null,t);var o=n.memoizedState;if(a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=mt(Error(v(423)),n),n=Yl(e,n,a,t,r);break e}else if(a!==r){r=mt(Error(v(424)),n),n=Yl(e,n,a,t,r);break e}else for(xe=hn(n.stateNode.containerInfo.firstChild),Se=n,F=!0,Me=null,t=wu(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),a===r){n=en(e,n,t);break e}de(e,n,a,t)}n=n.child}return n;case 5:return Nu(n),e===null&&Oi(n),a=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,Ci(a,r)?o=null:i!==null&&Ci(a,i)&&(n.flags|=32),Qu(e,n),de(e,n,o,t),n.child;case 6:return e===null&&Oi(n),null;case 13:return Xu(e,n,t);case 4:return Io(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ht(n,null,a,t):de(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:He(a,r),Kl(e,n,a,r,t);case 7:return de(e,n,n.pendingProps,t),n.child;case 8:return de(e,n,n.pendingProps.children,t),n.child;case 12:return de(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,i=n.memoizedProps,o=r.value,L(tr,a._currentValue),a._currentValue=o,i!==null)if(Re(i.value,o)){if(i.children===r.children&&!me.current){n=en(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===a){if(i.tag===1){u=Xe(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Hi(i.return,t,n),l.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Hi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}de(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,ut(n,t),r=Ee(r),a=a(r),n.flags|=1,de(e,n,a,t),n.child;case 14:return a=n.type,r=He(a,n.pendingProps),r=He(a.type,r),Ul(e,n,a,r,t);case 15:return $u(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:He(a,r),Da(e,n),n.tag=1,ye(a)?(e=!0,qa(n)):e=!1,ut(n,t),Wu(n,a,r),Mi(n,a,r,t),Ri(null,n,a,!0,e,t);case 19:return Ju(e,n,t);case 22:return Yu(e,n,t)}throw Error(v(156,n.tag))};function fd(e,n){return Bs(e,n)}function ef(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,n,t,a){return new ef(e,n,t,a)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nf(e){if(typeof e=="function")return Bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ro)return 11;if(e===io)return 14}return 2}function kn(e,n){var t=e.alternate;return t===null?(t=_e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Va(e,n,t,a,r,i){var o=2;if(a=e,typeof e=="function")Bo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qn:return Hn(t.children,r,i,n);case ao:o=8,r|=8;break;case ii:return e=_e(12,t,n,r|2),e.elementType=ii,e.lanes=i,e;case oi:return e=_e(13,t,n,r),e.elementType=oi,e.lanes=i,e;case li:return e=_e(19,t,n,r),e.elementType=li,e.lanes=i,e;case Ns:return jr(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:o=10;break e;case Ss:o=9;break e;case ro:o=11;break e;case io:o=14;break e;case rn:o=16,a=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=_e(o,t,n,r),n.elementType=e,n.type=a,n.lanes=i,n}function Hn(e,n,t,a){return e=_e(7,e,a,n),e.lanes=t,e}function jr(e,n,t,a){return e=_e(22,e,a,n),e.elementType=Ns,e.lanes=t,e.stateNode={isHidden:!1},e}function ni(e,n,t){return e=_e(6,e,null,n),e.lanes=t,e}function ti(e,n,t){return n=_e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function tf(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ar(0),this.expirationTimes=Ar(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ar(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fo(e,n,t,a,r,i,o,l,u){return e=new tf(e,n,t,l,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=_e(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},bo(i),e}function af(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function hd(e){if(!e)return wn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(ye(t))return hu(e,t,n)}return n}function pd(e,n,t,a,r,i,o,l,u){return e=Fo(t,a,!0,e,r,i,o,l,u),e.context=hd(null),t=e.current,a=ce(),r=yn(t),i=Xe(a,r),i.callback=n??null,pn(t,i,r),e.current.lanes=r,ua(e,r,a),ke(e,a),e}function Cr(e,n,t,a){var r=n.current,i=ce(),o=yn(r);return t=hd(t),n.context===null?n.context=t:n.pendingContext=t,n=Xe(i,o),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=pn(r,n,o),e!==null&&(Le(e,r,o,i),Aa(e,r,o)),o}function gr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Vo(e,n){as(e,n),(e=e.alternate)&&as(e,n)}function rf(){return null}var md=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wo(e){this._internalRoot=e}_r.prototype.render=Wo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));Cr(e,n,null,null)};_r.prototype.unmount=Wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rn(function(){Cr(null,e,null,null)}),n[Ze]=null}};function _r(e){this._internalRoot=e}_r.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ys();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&Gs(e)}};function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rs(){}function of(e,n,t,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var c=gr(o);i.call(c)}}var o=pd(n,a,e,0,null,!1,!1,"",rs);return e._reactRootContainer=o,e[Ze]=o.current,qt(e.nodeType===8?e.parentNode:e),Rn(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var c=gr(u);l.call(c)}}var u=Fo(e,0,!1,null,null,!1,!1,"",rs);return e._reactRootContainer=u,e[Ze]=u.current,qt(e.nodeType===8?e.parentNode:e),Rn(function(){Cr(n,u,t,a)}),u}function Er(e,n,t,a,r){var i=t._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var l=r;r=function(){var u=gr(o);l.call(u)}}Cr(n,o,e,r)}else o=of(t,n,e,r,a);return gr(o)}Us=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=zt(n.pendingLanes);t!==0&&(so(n,t|1),ke(n,Q()),!(M&6)&&(yt=Q()+500,Nn()))}break;case 13:Rn(function(){var a=qe(e,1);if(a!==null){var r=ce();Le(a,e,1,r)}}),Vo(e,1)}};uo=function(e){if(e.tag===13){var n=qe(e,134217728);if(n!==null){var t=ce();Le(n,e,134217728,t)}Vo(e,134217728)}};$s=function(e){if(e.tag===13){var n=yn(e),t=qe(e,n);if(t!==null){var a=ce();Le(t,e,n,a)}Vo(e,n)}};Ys=function(){return A};Qs=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};yi=function(e,n,t){switch(n){case"input":if(di(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=wr(a);if(!r)throw Error(v(90));Is(a),di(a,r)}}}break;case"textarea":Cs(e,t);break;case"select":n=t.value,n!=null&&it(e,!!t.multiple,n,!1)}};zs=Lo;Ms=Rn;var lf={usingClientEntryPoint:!1,Events:[ca,Zn,wr,Os,Hs,Lo]},Tt={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sf={bundleType:Tt.bundleType,version:Tt.version,rendererPackageName:Tt.rendererPackageName,rendererConfig:Tt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rs(e),e===null?null:e.stateNode},findFiberByHostInstance:Tt.findFiberByHostInstance||rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{mr=Ea.inject(sf),We=Ea}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf;be.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ko(n))throw Error(v(200));return af(e,n,null,t)};be.createRoot=function(e,n){if(!Ko(e))throw Error(v(299));var t=!1,a="",r=md;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Fo(e,1,!1,null,null,t,!1,a,r),e[Ze]=n.current,qt(e.nodeType===8?e.parentNode:e),new Wo(n)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Rs(n),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Rn(e)};be.hydrate=function(e,n,t){if(!Pr(n))throw Error(v(200));return Er(null,e,n,!0,t)};be.hydrateRoot=function(e,n,t){if(!Ko(e))throw Error(v(405));var a=t!=null&&t.hydratedSources||null,r=!1,i="",o=md;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=pd(n,null,e,1,t??null,r,!1,i,o),e[Ze]=n.current,qt(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new _r(n)};be.render=function(e,n,t){if(!Pr(n))throw Error(v(200));return Er(null,e,n,!1,t)};be.unmountComponentAtNode=function(e){if(!Pr(e))throw Error(v(40));return e._reactRootContainer?(Rn(function(){Er(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};be.unstable_batchedUpdates=Lo;be.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!Pr(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return Er(e,n,t,!1,a)};be.version="18.3.1-next-f1338f8080-20240426";function yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd)}catch(e){console.error(e)}}yd(),ys.exports=be;var uf=ys.exports,is=uf;ai.createRoot=is.createRoot,ai.hydrateRoot=is.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var df={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$=(e,n)=>{const t=E.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},m)=>E.createElement("svg",{ref:m,...df,width:r,height:r,stroke:a,strokeWidth:o?Number(i)*24/Number(r):i,className:["lucide",`lucide-${cf(e)}`,l].join(" "),...c},[...n.map(([p,h])=>E.createElement(p,h)),...Array.isArray(u)?u:[u]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=$("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=$("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=$("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=$("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=$("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=$("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=$("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=$("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=$("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=$("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=$("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=$("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=$("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=$("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=$("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=$("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=$("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=$("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=$("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=$("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Nf=[{id:"1",title:"Obvious",color:"from-pink-600 to-purple-700",cover:"/music/Obvious/COVER - Obvious.png",audio:"/music/Obvious/Obvious - 3rd Harmonik.mp3",story:`<div class="song-popup-section">
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
Na ika'y magiging akin`}],bf=({isPlaying:e,currentSong:n,canvasRef:t})=>(E.useEffect(()=>{const a=t.current;if(!a)return;const r=a.getContext("2d");let i;const o=()=>{a.width=a.offsetWidth,a.height=a.offsetHeight;const l=a.width,u=a.height;r.clearRect(0,0,l,u);const c=8,m=6,p=Math.floor(l/(c+m));for(let h=0;h<p;h++){let w;if(e){const x=Date.now()/150;w=Math.abs(Math.sin(h*.3+x)*Math.cos(h*.7-x*1.5))*u*.9}else w=4;const k=r.createLinearGradient(0,u-w,0,u);k.addColorStop(0,"#f472b6"),k.addColorStop(.5,"#c084fc"),k.addColorStop(1,"#22d3ee"),r.fillStyle=k,r.fillRect(h*(c+m),u-w,c,w),r.globalAlpha=.2,r.fillRect(h*(c+m),u,c,w*.3),r.globalAlpha=1}i=requestAnimationFrame(o)};return o(),()=>cancelAnimationFrame(i)},[e,n,t]),s.jsx("canvas",{ref:t,className:"w-full h-full rounded-full blur-xl"})),If=({songs:e,currentIndex:n,setCurrentIndex:t,setIsPlaylistOpen:a,isPlaylistOpen:r,draggedItem:i,handleDragStart:o,handleDragOver:l,setDraggedItem:u})=>s.jsx("div",{className:`fixed top-0 left-0 h-full w-full md:w-96 bg-black/95 border-r-2 border-pink-500 z-40 transform transition-transform duration-500 ease-out shadow-[0_0_50px_rgba(236,72,153,0.3)] ${r?"translate-x-0":"-translate-x-full"}`,children:s.jsxs("div",{className:"p-6 h-full flex flex-col pt-24",children:[s.jsxs("div",{className:"flex justify-between items-center mb-6 border-b border-pink-500/30 pb-4",children:[s.jsx("h2",{className:"text-2xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-[0_2px_10px_rgba(236,72,153,0.5)]",children:"TRACK LIST"}),s.jsxs("div",{className:"text-xs font-mono text-pink-500 animate-pulse",children:[e.length," SONGS LOADED"]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-2",children:e.map((c,m)=>s.jsxs("div",{draggable:!0,onDragStart:p=>o(p,m),onDragOver:p=>l(p,m),onDragEnd:()=>u(null),onClick:()=>{t(m),a(!1)},className:`group relative flex items-center gap-4 p-3 rounded-sm border border-transparent cursor-pointer transition-all duration-200
                      ${n===m?"bg-pink-900/20 border-pink-500/50 shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]":"hover:bg-white/5 hover:border-cyan-500/30"}
                      ${i===c?"opacity-30 border-dashed border-white":""}
                  `,children:[s.jsx("div",{className:`w-8 h-8 flex items-center justify-center font-mono text-sm border border-white/10 ${n===m?"text-pink-400 border-pink-500":"text-slate-500"}`,children:n===m?s.jsx("div",{className:"w-2 h-2 bg-pink-500 animate-ping"}):m+1}),s.jsx("div",{className:"flex-1 min-w-0",children:s.jsx("div",{className:`font-bold truncate text-sm uppercase tracking-wider ${n===m?"text-pink-300":"text-slate-300 group-hover:text-cyan-300"}`,children:c.title})}),s.jsx(vf,{className:"w-4 h-4 text-slate-700 group-hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"})]},c.id))}),s.jsx("div",{className:"mt-4 pt-4 border-t border-white/10 text-center font-mono text-[10px] text-slate-500",children:"DRAG TO REORDER // CLICK TO PLAY"})]})}),hr=e=>{if(!e||isNaN(e))return"0:00";const n=Math.floor(e/60),t=Math.floor(e%60);return`${n}:${t<10?"0":""}${t}`},Dn=e=>{if(!e)return"";if(e.startsWith("http"))return e;const n="/3rdharmonik.player/".replace(/\/$/,""),t=e.startsWith("/")?e:`/${e}`;return`${n}${t}`},jf=({isPlaying:e,togglePlay:n,handleNext:t,handlePrev:a,progress:r,duration:i,handlePointerDown:o,progressBarRef:l,repeatMode:u,setRepeatMode:c,isShuffle:m,setIsShuffle:p,volume:h,setVolume:w,isMuted:k,setIsMuted:x,scrollToLyrics:z})=>s.jsxs("div",{className:"w-full max-w-3xl bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group",children:[s.jsx("div",{className:"absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent"}),s.jsx("div",{className:"absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-cyan-500 to-transparent"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-to-l from-pink-500 to-transparent"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-pink-500 to-transparent"}),s.jsxs("div",{className:"mb-10 select-none",children:[s.jsxs("div",{className:"flex justify-between text-[11px] font-mono mb-3 tracking-[0.2em]",children:[s.jsx("span",{className:"text-cyan-400 drop-shadow-[0_0_5px_#22d3ee] animate-pulse",children:hr(r)}),s.jsx("span",{className:"text-slate-500",children:hr(i)})]}),s.jsxs("div",{ref:l,className:"relative h-3 md:h-4 flex items-center cursor-pointer touch-none",onPointerDown:o,children:[s.jsx("div",{className:"absolute inset-0 bg-slate-900/80 rounded-full border border-white/5 overflow-hidden",children:s.jsx("div",{className:"absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_11px)]"})}),s.jsxs("div",{className:"absolute h-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 ease-out flex items-center justify-end",style:{width:`${r/(i||1)*100}%`},children:[s.jsx("div",{className:"h-full w-1 md:w-2 bg-white shadow-[0_0_20px_#fff,0_0_10px_#22d3ee] rounded-full z-10"}),s.jsx("div",{className:"absolute -right-2 w-4 h-4 bg-cyan-400/20 blur-xl rounded-full"})]})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0",children:[s.jsxs("div",{className:"flex items-center gap-6 md:order-1",children:[s.jsx("button",{onClick:()=>c(g=>(g+1)%3),className:`p-2 transition-all duration-300 hover:scale-125 ${u>0?"text-pink-500 drop-shadow-[0_0_10px_#ec4899]":"text-slate-600"}`,title:"Repeat Mode",children:u===2?s.jsxs("div",{className:"relative",children:[s.jsx(fr,{className:"w-6 h-6"}),s.jsx("span",{className:"absolute -top-2 -right-2 text-[10px] font-black bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center border border-black",children:"1"})]}):s.jsx(fr,{className:"w-6 h-6"})}),s.jsx("button",{onClick:()=>p(!m),className:`p-2 transition-all duration-300 hover:scale-125 ${m?"text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]":"text-slate-600"}`,title:"Shuffle",children:s.jsx(Nd,{className:"w-6 h-6"})})]}),s.jsxs("div",{className:"flex items-center gap-8 md:order-2",children:[s.jsx("button",{onClick:a,className:"p-3 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all",children:s.jsx(bd,{className:"w-8 h-8 md:w-10 md:h-10 fill-current"})}),s.jsxs("button",{onClick:n,className:`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 transition-all duration-500 active:scale-90 group/play relative flex items-center justify-center ${e?"border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.4)]":"border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]"}`,children:[s.jsx("div",{className:`absolute inset-0 rounded-full bg-gradient-to-br transition-all duration-500 ${e?"from-slate-900 to-cyan-900 opacity-100":"from-slate-900 to-pink-900 opacity-100"}`}),s.jsx("div",{className:"relative z-10",children:e?s.jsx(wd,{className:"w-10 h-10 md:w-12 md:h-12 text-cyan-400 fill-current animate-pulse"}):s.jsx(xd,{className:"w-10 h-10 md:w-12 md:h-12 text-pink-500 fill-current ml-2"})})]}),s.jsx("button",{onClick:t,className:"p-3 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all",children:s.jsx(Id,{className:"w-8 h-8 md:w-10 md:h-10 fill-current"})})]}),s.jsxs("div",{className:"flex items-center gap-4 w-full md:w-40 md:order-3 group/vol",children:[s.jsx("button",{onClick:()=>x(!k),className:"p-2 text-slate-500 hover:text-cyan-400 transition-colors",children:k?s.jsx(Cd,{className:"w-6 h-6"}):s.jsx(jd,{className:"w-6 h-6"})}),s.jsx("div",{className:"flex-1 relative flex items-center h-8",children:s.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:k?0:h,onChange:g=>w(parseFloat(g.target.value)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_#22d3ee] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/50"})})]})]}),s.jsx("div",{className:"mt-10 flex justify-center border-t border-white/5 pt-6",children:s.jsxs("button",{onClick:z,className:"flex flex-col items-center gap-1 group/scroll",children:[s.jsx("span",{className:"text-[10px] font-black tracking-[0.4em] uppercase text-slate-600 group-hover/scroll:text-pink-500 transition-colors",children:"Song Details"}),s.jsx(ff,{className:"w-4 h-4 text-slate-700 group-hover/scroll:text-cyan-400 group-hover/scroll:translate-y-1 transition-all duration-300"})]})})]}),Cf=({currentSong:e,lyricsRef:n})=>{const[t,a]=E.useState("lyrics");return s.jsxs("div",{ref:n,className:"w-full bg-[#050510] p-4 md:p-20 z-20 flex flex-col items-center mt-10",children:[s.jsx("div",{className:"max-w-4xl w-full border border-pink-500/30 p-1 bg-black shadow-[0_0_50px_rgba(236,72,153,0.1)] rounded-lg",children:s.jsxs("div",{className:"bg-slate-900/40 p-6 md:p-12 relative overflow-hidden rounded-md backdrop-blur-md",children:[s.jsx(kf,{className:"absolute top-4 right-4 w-12 h-12 text-white/5"}),s.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 uppercase italic tracking-tighter",children:e.title}),s.jsx("p",{className:"text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mt-2",children:"3rd Harmonik"})]}),s.jsxs("div",{className:"flex bg-black/40 p-1 rounded-full border border-white/5",children:[s.jsxs("button",{onClick:()=>a("lyrics"),className:`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${t==="lyrics"?"bg-pink-600 text-white shadow-[0_0_15px_#ec4899]":"text-slate-400 hover:text-white"}`,children:[s.jsx(vd,{className:"w-4 h-4"})," Lyrics"]}),s.jsxs("button",{onClick:()=>a("details"),className:`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${t==="details"?"bg-cyan-600 text-white shadow-[0_0_15px_#0891b2]":"text-slate-400 hover:text-white"}`,children:[s.jsx(gf,{className:"w-4 h-4"})," Details"]})]})]}),s.jsx("div",{className:"min-h-[400px] transition-all duration-500",children:t==="lyrics"?s.jsx("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500 font-serif italic text-pink-100/90 leading-relaxed md:leading-loose text-lg md:text-xl text-center max-w-2xl mx-auto py-4",children:e.lyrics.split(`
`).map((r,i)=>s.jsx("p",{className:`mb-2 min-h-[1.5em] ${r.startsWith("[")?"text-pink-500 not-italic font-sans text-xs font-bold tracking-[0.2em] mt-6 mb-4 uppercase":""}`,children:r.trim()},i))}):s.jsxs("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500 font-mono text-cyan-100/80 leading-relaxed text-sm md:text-base border-l-2 border-cyan-500/30 pl-6 md:pl-10 py-4 max-w-3xl mx-auto",children:[s.jsx("h3",{className:"text-cyan-400 font-black mb-6 uppercase tracking-widest text-xs",children:"Song Information"}),s.jsx("div",{className:"prose prose-invert prose-cyan max-w-none space-y-4 [&>h4]:text-pink-400 [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-2 [&>p]:mb-4",dangerouslySetInnerHTML:{__html:e.story}})]})})]})}),s.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"mt-16 group flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-all duration-300 uppercase tracking-[0.3em] text-[10px]",children:[s.jsx(hf,{className:"w-5 h-5 group-hover:-translate-y-1 transition-transform"}),"Back to Top"]})]})},_f=[{id:"aljay",name:"Aljay Leodones",role:"Founder, Lead Vocals, Lead Guitar, Keyboard",photo:"/members/aljay/aljay_profile_pic.jpg",extraPhotos:["/members/aljay/aljay_pic1.jpg","/members/aljay/aljay_pic2.JPG"],bio:"The mastermind who built 3rd Harmonik from the ground up. Aljay channels the stories of friends and loved ones into melodies—sometimes in 10 minutes, sometimes less than 5. With 30+ songs in his arsenal and more brewing, just tell him an inspiring story and watch a new track appear.",height:`5'8"`,favoriteSong:"Kometa"},{id:"louie",name:"Louie",role:"Drums",photo:"/members/louie/louie_profile_pic.jpg",extraPhotos:["/members/louie/louie_pic1.jpg","/members/louie/louie_pic2.jpg"],bio:"Aljay's ride-or-die for over 12 years. What started as desk neighbors in class evolved into an unbreakable musical brotherhood. Louie's drumming is the heartbeat that gives every 3rd Harmonik track its unique pulse and flavor.",height:`5'5"`,favoriteSong:"Titulo"},{id:"anthony",name:"Anthony",role:"Lead Vocals, Bass Guitar",photo:"/members/anthony/anthony_profile_pic.JPG",extraPhotos:["/members/anthony/anthony_pic1.JPG","/members/anthony/anthony_pic2.JPG"],bio:"The low-end powerhouse with vocals that hit different. Anthony doesn't just play bass—he co-writes fire tracks with Aljay. Their first collab 'Lihim' sealed the deal and brought a whole new dimension to the band's sound.",height:`5'7"`,favoriteSong:"How Could You"},{id:"clyde",name:"Clyde",role:"Lead Vocals, Rhythm Guitar",photo:"/members/clyde/clyde_profile_pic.gif",extraPhotos:["/members/clyde/clyde_pic1.JPG","/members/clyde/clyde_pic2.JPG"],bio:"The voice that completes 3rd Harmonik's identity. With Clyde's powerful vocals in the mix, Aljay finally had the freedom to write melodies without limits. That's why the songs keep coming faster than ever.",height:`5'7"`,favoriteSong:"Secrets"}],Pf=({member:e,onDetails:n})=>{const[t,a]=E.useState(0),[r,i]=E.useState(!0),o=E.useRef(null),l=E.useRef(0);E.useEffect(()=>{let p;return r&&(p=setInterval(()=>{a(h=>(h+.5)%360)},30)),()=>clearInterval(p)},[r]);const u=p=>{var h;i(!1),o.current=p.clientX||((h=p.touches)==null?void 0:h[0].clientX),l.current=t},c=p=>{var k;if(o.current===null)return;const w=(p.clientX||((k=p.touches)==null?void 0:k[0].clientX))-o.current;a(l.current+w*.5)},m=()=>{o.current=null,setTimeout(()=>i(!0),2e3)};return s.jsxs("div",{className:"flex flex-col items-center group",children:[s.jsxs("div",{className:"relative w-48 h-48 md:w-64 md:h-64 cursor-pointer perspective-1000 select-none",onPointerDown:u,onPointerMove:c,onPointerUp:m,onPointerLeave:m,onClick:()=>n(e),children:[s.jsx("div",{className:"absolute inset-4 bg-black/80 rounded-full blur-2xl transform translate-y-8"}),s.jsxs("div",{className:"relative w-full h-full transition-transform duration-100 ease-linear transform-style-3d pointer-events-none",style:{transform:`rotateY(${t}deg)`},children:[s.jsx("div",{className:"absolute inset-0 backface-hidden z-10",children:s.jsxs("div",{className:"w-full h-full rounded-full border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500",children:[s.jsx("div",{className:"absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"}),s.jsx("div",{className:"absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_2px,rgba(255,255,255,0.03)_3px)]"}),s.jsx("img",{src:Dn(e.photo),alt:e.name,className:"w-full h-full object-cover transition-all duration-700 group-hover:scale-110"})]})}),s.jsx("div",{className:"absolute inset-0 backface-hidden",style:{transform:"rotateY(180deg)"},children:s.jsxs("div",{className:"w-full h-full rounded-full border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500",children:[s.jsx("div",{className:"absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"}),s.jsx("div",{className:"absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_2px,rgba(255,255,255,0.03)_3px)]"}),s.jsx("img",{src:Dn(e.photo),alt:e.name,className:"w-full h-full object-cover transition-all duration-700 group-hover:scale-110"})]})})]}),s.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none",children:s.jsx("span",{className:"text-[8px] font-black uppercase tracking-[0.4em] text-cyan-400 bg-black/80 px-3 py-1 rounded-full border border-cyan-500/50",children:"Drag to Spin / Click for Bio"})})]}),s.jsxs("div",{className:"mt-8 text-center bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm group-hover:border-pink-500/50 transition-colors w-full",children:[s.jsx("h3",{className:"text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-pink-400 transition-colors",children:e.name}),s.jsx("p",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest mt-1",children:e.role})]})]})},Ef=({member:e,onClose:n})=>(E.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),e?s.jsxs("div",{className:"fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-auto",children:[s.jsx("div",{className:"absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-500",onClick:n}),s.jsxs("div",{className:"relative w-full max-w-6xl max-h-[95vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_200px_rgba(236,72,153,0.4)] animate-in zoom-in-95 slide-in-from-bottom-12 duration-700 flex flex-col z-[1001]",children:[s.jsx("div",{className:"absolute top-8 right-8 z-50",children:s.jsx("button",{onClick:n,className:"p-4 bg-black/40 hover:bg-pink-600 rounded-full transition-all duration-300 text-white border border-white/10 hover:border-pink-400 group shadow-2xl",children:s.jsx(Sf,{className:"w-6 h-6 group-hover:rotate-90 transition-transform"})})}),s.jsxs("div",{className:"flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden",children:[s.jsx("div",{className:"w-full lg:w-[55%] bg-black/40 relative flex flex-col p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 overflow-y-auto custom-scrollbar",children:s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"relative aspect-square md:aspect-video rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl group",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"}),s.jsx("img",{src:Dn(e.photo),alt:e.name,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"}),s.jsx("div",{className:"absolute bottom-6 left-6 z-20",children:s.jsx("span",{className:"px-3 py-1 bg-pink-600 text-[8px] font-black uppercase tracking-[0.3em] rounded-md",children:"Primary Identification"})})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6 pb-4",children:e.extraPhotos.map((t,a)=>s.jsxs("div",{className:"relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-xl",children:[s.jsx("div",{className:"absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-10"}),s.jsx("img",{src:Dn(t),alt:`${e.name} extra ${a}`,className:"w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"}),s.jsx("div",{className:"absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity",children:s.jsx(xf,{className:"w-4 h-4 text-cyan-400 fill-cyan-400"})})]},a))})]})}),s.jsxs("div",{className:"w-full lg:w-[45%] p-10 md:p-16 bg-gradient-to-br from-slate-900 to-black flex flex-col justify-center",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-8 h-px bg-cyan-500"}),s.jsx("span",{className:"text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em]",children:"Personnel Dossier // 3HMP"})]}),s.jsx("h2",{className:"text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]",children:e.name}),s.jsxs("div",{className:"flex flex-wrap gap-4 mb-12",children:[s.jsx("span",{className:"px-4 py-2 bg-pink-500/20 border border-pink-500/40 text-pink-400 text-[10px] font-black uppercase tracking-widest rounded-lg",children:e.role}),s.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-[10px] uppercase tracking-widest font-bold",children:[s.jsx(wf,{className:"w-3.5 h-3.5"})," ",e.height]}),s.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-[10px] uppercase tracking-widest font-bold",children:[s.jsx(pf,{className:"w-3.5 h-3.5 text-pink-500"})," ",e.favoriteSong]})]}),s.jsx("div",{className:"prose prose-invert prose-pink max-w-none",children:s.jsxs("p",{className:"text-slate-200 leading-relaxed md:leading-loose text-lg md:text-xl font-light italic border-l-4 border-pink-500/30 pl-8",children:['"',e.bio,'"']})}),s.jsxs("div",{className:"mt-16 pt-8 border-t border-white/5 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4 group",children:[s.jsx("div",{className:"w-12 h-1 bg-pink-500 group-hover:w-20 transition-all duration-500"}),s.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors",children:"Verified Status: Active"})]}),s.jsx(Uo,{className:"w-8 h-8 text-white/5"})]})]})]})]})]}):null),Tf=({onMemberClick:e,bandRef:n})=>s.jsxs("section",{ref:n,className:"w-full max-w-7xl mx-auto px-6 py-32",children:[s.jsxs("div",{className:"flex flex-col items-center mb-20",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"h-px w-10 bg-pink-500"}),s.jsx(Uo,{className:"w-5 h-5 text-pink-500"}),s.jsx("div",{className:"h-px w-10 bg-pink-500"})]}),s.jsx("h2",{className:"text-4xl md:text-6xl font-black italic uppercase italic tracking-tighter text-white text-center",children:"Meet the Band"}),s.jsx("p",{className:"text-slate-500 text-sm font-mono mt-4 uppercase tracking-[0.3em]",children:"The Soul of 3rd Harmonik"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8",children:_f.map(t=>s.jsx(Pf,{member:t,onDetails:e},t.id))})]}),Of=({currentSong:e,isPlaying:n,togglePlay:t,handleNext:a,handlePrev:r,progress:i,duration:o,handlePointerDown:l,repeatMode:u,setRepeatMode:c,isShuffle:m,setIsShuffle:p,volume:h,setVolume:w,isMuted:k,setIsMuted:x,isVisible:z})=>{const g=E.useRef(null),d=f=>{l&&l(f,g)};return z?s.jsx("div",{className:"fixed bottom-0 left-0 w-full z-[80] animate-in slide-in-from-bottom-full duration-500 ease-out",children:s.jsx("div",{className:"mx-auto max-w-7xl px-4 pb-4",children:s.jsxs("div",{className:"bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 md:p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col gap-2",children:[s.jsx("div",{className:"px-2",children:s.jsxs("div",{ref:g,className:"relative h-1.5 flex items-center cursor-pointer touch-none group/mini-progress",onPointerDown:d,children:[s.jsx("div",{className:"absolute inset-0 bg-slate-900/80 rounded-full overflow-hidden",children:s.jsx("div",{className:"absolute inset-0 opacity-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_11px)]"})}),s.jsx("div",{className:"absolute h-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 ease-out flex items-center justify-end",style:{width:`${i/(o||1)*100}%`},children:s.jsx("div",{className:"h-full w-1 bg-white shadow-[0_0_10px_#fff] scale-y-150 rounded-full opacity-0 group-hover/mini-progress:opacity-100 transition-opacity"})})]})}),s.jsxs("div",{className:"flex items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex items-center gap-3 min-w-0 w-1/4",children:[s.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/10",children:s.jsx("img",{src:Dn(e.cover),alt:e.title,className:`w-full h-full object-cover transition-transform duration-500 ${n?"scale-110":"scale-100"}`})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h4",{className:"text-sm font-bold truncate text-white",children:e.title}),s.jsx("p",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest truncate",children:"3rd Harmonik"})]})]}),s.jsxs("div",{className:"flex items-center gap-2 md:gap-6",children:[s.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[s.jsx("button",{onClick:()=>c(f=>(f+1)%3),className:`p-1.5 transition-all ${u>0?"text-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.3)]":"text-slate-500"}`,children:u===2?s.jsxs("div",{className:"relative",children:[s.jsx(fr,{className:"w-5 h-5"}),s.jsx("span",{className:"absolute -top-1 -right-1 text-[8px] font-black bg-pink-500 text-white rounded-full w-3 h-3 flex items-center justify-center",children:"1"})]}):s.jsx(fr,{className:"w-5 h-5"})}),s.jsx("button",{onClick:()=>p(!m),className:`p-1.5 transition-all ${m?"text-cyan-400":"text-slate-500"}`,children:s.jsx(Nd,{className:"w-5 h-5"})})]}),s.jsxs("div",{className:"flex items-center gap-3 md:gap-5",children:[s.jsx("button",{onClick:r,className:"p-1.5 text-slate-400 hover:text-white transition-colors",children:s.jsx(bd,{className:"w-5 h-5 md:w-6 md:h-6 fill-current"})}),s.jsx("button",{onClick:t,className:`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${n?"bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]":"bg-pink-500/10 border border-pink-500/50 text-pink-500"}`,children:n?s.jsx(wd,{className:"w-5 h-5 md:w-6 md:h-6 fill-current"}):s.jsx(xd,{className:"w-5 h-5 md:w-6 md:h-6 fill-current ml-0.5"})}),s.jsx("button",{onClick:a,className:"p-1.5 text-slate-400 hover:text-white transition-colors",children:s.jsx(Id,{className:"w-5 h-5 md:w-6 md:h-6 fill-current"})})]})]}),s.jsxs("div",{className:"flex items-center justify-end gap-4 w-1/4",children:[s.jsxs("div",{className:"hidden lg:flex items-center gap-2 w-32",children:[s.jsx("button",{onClick:()=>x(!k),className:"text-slate-500 hover:text-cyan-400",children:k?s.jsx(Cd,{className:"w-4 h-4"}):s.jsx(jd,{className:"w-4 h-4"})}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:k?0:h,onChange:f=>w(parseFloat(f.target.value)),className:"w-full h-0.5 bg-slate-800 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full"})]}),s.jsxs("div",{className:"text-[10px] font-mono text-slate-500 whitespace-nowrap hidden sm:block",children:[s.jsx("span",{className:"text-cyan-400",children:hr(i)})," / ",hr(o)]})]})]})]})})}):null},Hf=[{id:"g3JGYNDUYco",title:"Obvious",tag:"Official Music Video"},{id:"XGycHBSxka4",title:"How Could You",tag:"Official Music Video"},{id:"i_QXTB3tIcE",title:"Kometa",tag:"Official Music Video"}],zf=({videoRef:e})=>s.jsxs("section",{ref:e,className:"w-full max-w-7xl mx-auto px-6 py-32 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"}),s.jsxs("div",{className:"flex flex-col items-center mb-20 relative z-10",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"h-px w-10 bg-cyan-500"}),s.jsx(kd,{className:"w-5 h-5 text-cyan-500"}),s.jsx("div",{className:"h-px w-10 bg-cyan-500"})]}),s.jsx("h2",{className:"text-4xl md:text-6xl font-black italic uppercase italic tracking-tighter text-white text-center",children:"Visual Experience"}),s.jsx("p",{className:"text-slate-500 text-sm font-mono mt-4 uppercase tracking-[0.3em]",children:"Watch Our Stories Unfold"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10",children:Hf.map(n=>s.jsxs("div",{className:"group relative",children:[s.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"}),s.jsx("div",{className:"relative bg-black rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]",children:s.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${n.id}`,title:n.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"w-full h-full"})}),s.jsxs("div",{className:"mt-4 flex flex-col items-center",children:[s.jsx("h3",{className:"text-white font-bold uppercase tracking-widest text-lg group-hover:text-cyan-400 transition-colors",children:n.title}),s.jsx("span",{className:"text-xs font-mono text-slate-500 tracking-widest mt-1 opacity-60 group-hover:opacity-100 transition-opacity",children:n.tag})]})]},n.id))})]}),Mf=({socialRef:e})=>s.jsxs("section",{ref:e,className:"w-full bg-black/40 backdrop-blur-3xl border-t border-white/5 py-24 px-6 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[150px] rounded-full rotate-12"}),s.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col items-center relative z-10",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"h-px w-10 bg-indigo-500"}),s.jsx(Sd,{className:"w-5 h-5 text-indigo-500"}),s.jsx("div",{className:"h-px w-10 bg-indigo-500"})]}),s.jsx("h2",{className:"text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white text-center mb-16",children:"Connect With Us"}),s.jsxs("div",{className:"flex flex-wrap justify-center gap-10 md:gap-24",children:[s.jsxs("a",{href:"https://www.youtube.com/@3rdHarmonik",target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col items-center gap-4",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 bg-red-600 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"}),s.jsx("div",{className:"relative w-20 h-20 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center transform transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-red-600/10 group-hover:border-red-600/50",children:s.jsx("svg",{viewBox:"0 0 24 24",className:"w-10 h-10 md:w-14 md:h-14 fill-white group-hover:fill-red-600 transition-colors duration-500",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"block text-white font-bold tracking-[0.2em] uppercase text-sm",children:"YouTube"}),s.jsx("span",{className:"block text-slate-500 font-mono text-[10px] uppercase tracking-widest mt-1",children:"@3rdHarmonik"})]})]}),s.jsxs("a",{href:"https://www.facebook.com/3HDavao/",target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col items-center gap-4",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 bg-blue-600 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"}),s.jsx("div",{className:"relative w-20 h-20 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center transform transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-blue-600/10 group-hover:border-blue-600/50",children:s.jsx("svg",{viewBox:"0 0 24 24",className:"w-10 h-10 md:w-14 md:h-14 fill-white group-hover:fill-blue-600 transition-colors duration-500",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"block text-white font-bold tracking-[0.2em] uppercase text-sm",children:"Facebook"}),s.jsx("span",{className:"block text-slate-500 font-mono text-[10px] uppercase tracking-widest mt-1",children:"3HDavao"})]})]})]}),s.jsx("div",{className:"mt-24 pt-12 border-t border-white/5 w-full flex flex-col items-center",children:s.jsx("p",{className:"text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600",children:"© 2025 3rd Harmonik. All Visuals Reserved."})})]})]});function Af(){const[e,n]=E.useState(Nf),[t,a]=E.useState(0),[r,i]=E.useState(!1),[o,l]=E.useState(0),[u,c]=E.useState(0),[m,p]=E.useState(.7),[h,w]=E.useState(!1),[k,x]=E.useState(!1),[z,g]=E.useState(0),[d,f]=E.useState(null),[y,S]=E.useState(!1),[j,I]=E.useState(!1),[C,B]=E.useState(null),[O,ve]=E.useState(!1),G=E.useRef(null),bn=E.useRef(null),xt=E.useRef(null),fa=E.useRef(null),Vn=E.useRef(null),Wn=E.useRef(null),N=E.useRef(null),P=E.useRef(null),_=e[t];E.useEffect(()=>{G.current&&(G.current.volume=h?0:m)},[m,h]),E.useEffect(()=>{const T=G.current;if(T)if(r){const ue=T.play();ue!==void 0&&ue.catch(tn=>{console.error("Playback failed:",tn),i(!1)})}else T.pause()},[r,t]);const V=()=>{G.current&&(l(G.current.currentTime),c(G.current.duration||0))},X=()=>I(!0),Kn=()=>I(!1),Ue=()=>{if(z===2)G.current.currentTime=0,G.current.play();else if(k){let T=Math.floor(Math.random()*e.length);for(;T===t&&e.length>1;)T=Math.floor(Math.random()*e.length);a(T)}else z===1||t<e.length-1?In():i(!1)},In=()=>{if(k){let T=Math.floor(Math.random()*e.length);for(;T===t&&e.length>1;)T=Math.floor(Math.random()*e.length);a(T)}else a(T=>(T+1)%e.length)},De=()=>{o>3?(G.current.currentTime=0,l(0)):a(T=>(T-1+e.length)%e.length)},jn=()=>i(!r),$o=(T,ue)=>ue?Math.min(Math.max((T-ue.left)/ue.width,0),1)*(u||1):0,Yo=(T,ue)=>{T.preventDefault();const tn=ue||xt;if(!tn.current)return;const Un=Hd=>{const zd=tn.current.getBoundingClientRect(),Xo=$o(Hd.clientX,zd);G.current&&(G.current.currentTime=Xo),l(Xo)},St=()=>{document.removeEventListener("pointermove",Un),document.removeEventListener("pointerup",St)};document.addEventListener("pointermove",Un),document.addEventListener("pointerup",St);const Nt=tn.current.getBoundingClientRect(),Go=$o(T.clientX,Nt);G.current&&(G.current.currentTime=Go),l(Go)},_d=(T,ue)=>{f(e[ue])},Pd=(T,ue)=>{T.preventDefault();const tn=e[ue];if(d===tn)return;let Un=e.filter(Nt=>Nt!==d);Un.splice(ue,0,d),n(Un);const St=Un.findIndex(Nt=>Nt.id===_.id);St!==-1&&a(St)},Qo=()=>{var T;(T=fa.current)==null||T.scrollIntoView({behavior:"smooth",block:"start"})},Ed=()=>{var T;(T=Vn.current)==null||T.scrollIntoView({behavior:"smooth",block:"start"})},Td=()=>{var T;(T=Wn.current)==null||T.scrollIntoView({behavior:"smooth",block:"start"})},Od=()=>{var T;(T=N.current)==null||T.scrollIntoView({behavior:"smooth",block:"start"})};return E.useEffect(()=>{const T=new IntersectionObserver(([ue])=>{ve(!ue.isIntersecting)},{threshold:.1});return P.current&&T.observe(P.current),()=>{P.current&&T.unobserve(P.current)}},[]),s.jsxs("div",{className:"min-h-screen bg-[#02020a] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black",children:[s.jsx("div",{className:"fixed top-0 left-0 w-full h-1 z-[100] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-50"}),s.jsx("div",{className:"fixed inset-0 pointer-events-none z-[60] opacity-[0.03]",children:s.jsx("div",{className:"w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#fff_2px)] bg-[length:100%_3px]"})}),s.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0",children:[s.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_70%)]"}),s.jsx("div",{className:"absolute top-0 right-0 w-[60%] h-[60%] bg-cyan-950/20 blur-[150px] rounded-full"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-[60%] h-[60%] bg-purple-950/20 blur-[150px] rounded-full"})]}),s.jsxs("nav",{className:"fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[70] backdrop-blur-md bg-black/20",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>S(!y),className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg",title:"Playlist",children:s.jsx(mf,{className:"w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform"})}),s.jsx("button",{onClick:Qo,className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group shadow-lg",title:"Lyrics",children:s.jsx(yf,{className:"w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform"})}),s.jsx("button",{onClick:Ed,className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group shadow-lg",title:"Band",children:s.jsx(Uo,{className:"w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform"})}),s.jsx("button",{onClick:Td,className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg",title:"Videos",children:s.jsx(kd,{className:"w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform"})}),s.jsx("button",{onClick:Od,className:"p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 group shadow-lg",title:"Socials",children:s.jsx(Sd,{className:"w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform"})})]}),s.jsx("div",{className:"hidden md:block text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500",children:"3rd Harmonik"})]}),s.jsx(If,{songs:e,currentIndex:t,setCurrentIndex:a,setIsPlaylistOpen:S,isPlaylistOpen:y,draggedItem:d,handleDragStart:_d,handleDragOver:Pd,setDraggedItem:f}),s.jsxs("main",{className:`relative z-10 w-full min-h-screen flex flex-col items-center justify-start transition-all duration-700 ease-in-out ${y?"scale-90 opacity-40 blur-xl pointer-events-none":"scale-100 opacity-100 blur-0"}`,children:[s.jsxs("section",{ref:P,className:"w-full max-w-7xl px-4 pt-32 pb-20 flex flex-col items-center lg:flex-row lg:justify-center gap-16 lg:gap-24",children:[s.jsxs("div",{className:"relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex-shrink-0",children:[s.jsx("div",{className:`absolute -inset-10 rounded-full transition-all duration-1000 blur-[100px] opacity-40 ${r?"bg-cyan-500 scale-110":"bg-pink-500 scale-100"}`}),s.jsx("div",{className:"absolute -inset-4 md:-inset-8",children:s.jsx(bf,{isPlaying:r,currentSong:_,canvasRef:bn})}),s.jsxs("div",{className:`relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-700 ${r?"scale-105 rotate-1":"scale-100 rotate-0"}`,children:[s.jsx("div",{className:`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${_.color} opacity-40`}),_.cover?s.jsx("img",{src:Dn(_.cover),alt:_.title,className:`w-full h-full object-cover transition-all duration-700 ${r?"scale-110 opacity-70":"scale-100 opacity-50"}`}):s.jsx("div",{className:"w-full h-full flex flex-col items-center justify-center bg-slate-900/80",children:s.jsx(vd,{className:`w-32 h-32 md:w-48 md:h-48 text-white/10 transition-all duration-700 ${r?"scale-125 opacity-20 rotate-12":"scale-100 opacity-10"}`})}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center text-center",children:[s.jsx("h1",{className:"text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none mb-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]",children:_.title}),s.jsxs("p",{className:"text-sm md:text-lg font-mono tracking-[0.4em] uppercase text-cyan-400 opacity-80 flex items-center gap-2",children:[s.jsx("span",{className:"w-4 h-px bg-cyan-500/50"}),"3rd Harmonik",s.jsx("span",{className:"w-4 h-px bg-cyan-500/50"})]})]})]})]}),s.jsx("div",{className:"w-full max-w-xl flex flex-col gap-10",children:s.jsx(jf,{isPlaying:r,togglePlay:jn,handleNext:In,handlePrev:De,progress:o,duration:u,handlePointerDown:Yo,progressBarRef:xt,repeatMode:z,setRepeatMode:g,isShuffle:k,setIsShuffle:x,volume:m,setVolume:p,isMuted:h,setIsMuted:w,scrollToLyrics:Qo})})]}),s.jsx(Cf,{currentSong:_,lyricsRef:fa}),s.jsx(Tf,{onMemberClick:B,bandRef:Vn}),s.jsx(zf,{videoRef:Wn}),s.jsx(Mf,{socialRef:N})]}),s.jsx(Ef,{member:C,onClose:()=>B(null)}),s.jsx(Of,{currentSong:_,isPlaying:r,togglePlay:jn,handleNext:In,handlePrev:De,progress:o,duration:u,handlePointerDown:Yo,repeatMode:z,setRepeatMode:g,isShuffle:k,setIsShuffle:x,volume:m,setVolume:p,isMuted:h,setIsMuted:w,isVisible:O&&!y}),s.jsx("audio",{ref:G,src:Dn(_.audio),onTimeUpdate:V,onEnded:Ue,onCanPlay:X,onLoadStart:Kn,preload:"auto"})]})}ai.createRoot(document.getElementById("root")).render(s.jsx(Jd.StrictMode,{children:s.jsx(Af,{})}));

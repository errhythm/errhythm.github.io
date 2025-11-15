import { b as createAstro, c as createComponent, a as renderTemplate, h as renderScript, i as renderSlot, j as renderHead, d as addAttribute } from './astro/server_KmD42DKJ.mjs';
import 'clsx';
/* empty css                         */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import o, { useDebugValue, createElement, useRef, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { __spreadArray, __assign } from 'tslib';
import n from '@emotion/is-prop-valid';
import 'shallowequal';
import * as d from 'stylis';
import h from '@emotion/unitless';
import anime from 'animejs';
import { AnimatePresence, motion } from 'framer-motion';
import lodash from 'lodash';
import DOMPurify from 'isomorphic-dompurify';

const siteMetadata = {
  title: 'Ehsanur Rahman Rhythm',
  description:
    'Ehsanur Rahman Rhythm is a front-end developer skilled in React.js, Node.js, and TailwindCSS, passionate about building projects and learning new tech.',
  siteUrl: 'https://errhythm.me',
  image: 'https://cdn.errhythm.me/og.png',
  twitterUsername: '@errhythm',
};

var f="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",m="active",y="data-styled-version",v="6.1.18",g="/*!sc*/\n",S="undefined"!=typeof window&&"undefined"!=typeof document,w=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),E=/invalid hook call/i,N=new Set,P=function(t,n){if("production"!==process.env.NODE_ENV){var o=n?' with the id of "'.concat(n,'"'):"",s="The component ".concat(t).concat(o," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];E.test(t)?(a=!1,N.delete(s)):i.apply(void 0,__spreadArray([t],n,!1));},useRef(),a&&!N.has(s)&&(console.warn(s),N.add(s));}catch(e){E.test(e.message)&&N.delete(s);}finally{console.error=i;}}},_=Object.freeze([]),C=Object.freeze({});function I(e,t,n){return void 0===n&&(n=C),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D=/(^-|-$)/g;function R(e){return e.replace(O,"-").replace(D,"")}var T=/(a)(d)/gi,k=52,j=function(e){return String.fromCharCode(e+(e>25?39:97))};function x(e){var t,n="";for(t=Math.abs(e);t>k;t=t/k|0)n=j(t%k)+n;return (j(t%k)+n).replace(T,"$1-$2")}var V,F=5381,z=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},M=function(e){return z(F,e)};function $(e){return x(M(e)>>>0)}function B(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function G(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var L="function"==typeof Symbol&&Symbol.for,Y=L?Symbol.for("react.memo"):60115,q=L?Symbol.for("react.forward_ref"):60112,W={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true},H={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true},U={$$typeof:true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true},J=((V={})[q]={$$typeof:true,render:true,defaultProps:true,displayName:true,propTypes:true},V[Y]=U,V);function X(e){return ("type"in(t=e)&&t.type.$$typeof)===Y?U:"$$typeof"in e?J[e.$$typeof]:W;var t;}var Z=Object.defineProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;function oe(e,t,n){if("string"!=typeof t){if(ne){var o=te(t);o&&o!==ne&&oe(e,o,n);}var r=K(t);Q&&(r=r.concat(Q(t)));for(var s=X(e),i=X(t),a=0;a<r.length;++a){var c=r[a];if(!(c in H||n&&n[c]||i&&c in i||s&&c in s)){var l=ee(t,c);try{Z(e,c,l);}catch(e){}}}}return e}function re(e){return "function"==typeof e}function se(e){return "object"==typeof e&&"styledComponentId"in e}function ie(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ae(e,t){if(0===e.length)return "";for(var n=e[0],o=1;o<e.length;o++)n+=e[o];return n}function ce(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function le(e,t,n){if(void 0===n&&(n=false),!n&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=le(e[o],t[o]);else if(ce(t))for(var o in t)e[o]=le(e[o],t[o]);return e}function ue(e,t){Object.defineProperty(e,"toString",{value:t});}var pe="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function de(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],o=[],r=1,s=e.length;r<s;r+=1)o.push(e[r]);return o.forEach(function(e){n=n.replace(/%[a-z]/,e);}),n}function he(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return "production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):"")):new Error(de.apply(void 0,__spreadArray([pe[t]],n,false)).trim())}var fe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)if((r<<=1)<0)throw he(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var s=o;s<r;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++);},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n);}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,s=o;s<r;s++)t+="".concat(this.tag.getRule(s)).concat(g);return t},e}(),me=1<<30,ye=new Map,ve=new Map,ge=1,Se=function(e){if(ye.has(e))return ye.get(e);for(;ve.has(ge);)ge++;var t=ge++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>me))throw he(16,"".concat(t));return ye.set(e,t),ve.set(t,e),t},we=function(e,t){ge=t+1,ye.set(e,t),ve.set(t,e);},be="style[".concat(f,"][").concat(y,'="').concat(v,'"]'),Ee=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ne=function(e,t,n){for(var o,r=n.split(","),s=0,i=r.length;s<i;s++)(o=r[s])&&e.registerName(t,o);},Pe=function(e,t){for(var n,o=(null!==(n=t.textContent)&&void 0!==n?n:"").split(g),r=[],s=0,i=o.length;s<i;s++){var a=o[s].trim();if(a){var c=a.match(Ee);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(we(u,l),Ne(e,u,c[3]),e.getTag().insertRules(l,r)),r.length=0;}else r.push(a);}}},_e=function(e){for(var t=document.querySelectorAll(be),n=0,o=t.length;n<o;n++){var r=t[n];r&&r.getAttribute(f)!==m&&(Pe(e,r),r.parentNode&&r.parentNode.removeChild(r));}};function Ce(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var Ie=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(f,"]")));return t[t.length-1]}(n),s=void 0!==r?r.nextSibling:null;o.setAttribute(f,m),o.setAttribute(y,v);var i=Ce();return i&&o.setAttribute("nonce",i),n.insertBefore(o,s),o},Ae=function(){function e(e){this.element=Ie(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}throw he(17)}(this.element),this.length=0;}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return  false}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Oe=function(){function e(e){this.element=Ie(e),this.nodes=this.element.childNodes,this.length=0;}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,true}return  false},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),De=function(){function e(e){this.rules=[],this.length=0;}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,true)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Re=S,Te={isServer:!S,useCSSOMInjection:!w},ke=function(){function e(e,n,o){ void 0===e&&(e=C),void 0===n&&(n={});var r=this;this.options=__assign(__assign({},Te),e),this.gs=n,this.names=new Map(o),this.server=!!e.isServer,!this.server&&S&&Re&&(Re=false,_e(this)),ue(this,function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=function(n){var r=function(e){return ve.get(e)}(n);if(void 0===r)return "continue";var s=e.names.get(r),i=t.getGroup(n);if(void 0===s||!s.size||0===i.length)return "continue";var a="".concat(f,".g").concat(n,'[id="').concat(r,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","));}),o+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(g);},s=0;s<n;s++)r(s);return o}(r)});}return e.registerId=function(e){return Se(e)},e.prototype.rehydrate=function(){!this.server&&S&&_e(this);},e.prototype.reconstructWithOptions=function(n,o){return void 0===o&&(o=true),new e(__assign(__assign({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new De(n):t?new Ae(n):new Oe(n)}(this.options),new fe(e)));var e;},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Se(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Se(e),n);},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},e.prototype.clearRules=function(e){this.getTag().clearGroup(Se(e)),this.clearNames(e);},e.prototype.clearTag=function(){this.tag=void 0;},e}(),je=/&/g,xe=/^\s*\/\/.*$/gm;function Ve(e,t){return e.map(function(e){return "rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return "".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ve(e.children,t)),e})}function Fe(e){var t,n,o,r=C,s=r.options,i=void 0===s?C:s,a=r.plugins,c=void 0===a?_:a,l=function(e,o,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===d.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(je,n).replace(o,l));}),i.prefix&&u.push(d.prefixer),u.push(d.stringify);var p=function(e,r,s,a){ void 0===r&&(r=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=r,o=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(xe,""),l=d.compile(s||r?"".concat(s," ").concat(r," { ").concat(c," }"):c);i.namespace&&(l=Ve(l,i.namespace));var p=[];return d.serialize(l,d.middleware(u.concat(d.rulesheet(function(e){return p.push(e)})))),p};return p.hash=c.length?c.reduce(function(e,t){return t.name||he(15),z(e,t.name)},F).toString():"",p}var ze=new ke,Me=Fe(),$e=o.createContext({shouldForwardProp:void 0,styleSheet:ze,stylis:Me});$e.Consumer;o.createContext(void 0);function Le(){return useContext($e)}var qe=function(){function e(e,t){var n=this;this.inject=function(e,t){ void 0===t&&(t=Me);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"));},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ue(this,function(){throw he(12,String(n.name))});}return e.prototype.getName=function(e){return void 0===e&&(e=Me),this.name+e.hash},e}(),We=function(e){return e>="A"&&e<="Z"};function He(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;We(o)?t+="-"+o.toLowerCase():t+=o;}return t.startsWith("ms-")?"-"+t:t}var Ue=function(e){return null==e||false===e||""===e},Je=function(t){var n,o,r=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!Ue(i)&&(Array.isArray(i)&&i.isCss||re(i)?r.push("".concat(He(s),":"),i,";"):ce(i)?r.push.apply(r,__spreadArray(__spreadArray(["".concat(s," {")],Je(i),false),["}"],false)):r.push("".concat(He(s),": ").concat((n=s,null==(o=i)||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in h||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")));}return r};function Xe(e,t,n,o){if(Ue(e))return [];if(se(e))return [".".concat(e.styledComponentId)];if(re(e)){if(!re(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return [e];var r=e(t);return "production"===process.env.NODE_ENV||"object"!=typeof r||Array.isArray(r)||r instanceof qe||ce(r)||null===r||console.error("".concat(B(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Xe(r,t,n,o)}var s;return e instanceof qe?n?(e.inject(n,o),[e.getName(o)]):[e]:ce(e)?Je(e):Array.isArray(e)?Array.prototype.concat.apply(_,e.map(function(e){return Xe(e,t,n,o)})):[e.toString()]}function Ze(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!se(n))return  false}return  true}var Ke=M(v),Qe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&Ze(e),this.componentId=t,this.baseHash=z(Ke,t),this.baseStyle=n,ke.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ie(o,this.staticRulesId);else {var r=ae(Xe(this.rules,e,t,n)),s=x(z(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(r,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i);}o=ie(o,s),this.staticRulesId=s;}else {for(var a=z(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u,"production"!==process.env.NODE_ENV&&(a=z(a,u));else if(u){var p=ae(Xe(u,e,t,n));a=z(a,p+l),c+=p;}}if(c){var d=x(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),o=ie(o,d);}}return o},e}(),et=o.createContext(void 0);et.Consumer;var rt={},st=new Set;function it(e,r,s){var i=se(e),a=e,c=!G(e),p=r.attrs,d=void 0===p?_:p,h=r.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":R(e);rt[n]=(rt[n]||0)+1;var o="".concat(n,"-").concat($(v+n+rt[n]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):h,m=r.displayName,y=void 0===m?function(e){return G(e)?"styled.".concat(e):"Styled(".concat(B(e),")")}(e):m,g=r.displayName&&r.componentId?"".concat(R(r.displayName),"-").concat(r.componentId):r.componentId||f,S=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,w=r.shouldForwardProp;if(i&&a.shouldForwardProp){var b=a.shouldForwardProp;if(r.shouldForwardProp){var E=r.shouldForwardProp;w=function(e,t){return b(e,t)&&E(e,t)};}else w=b;}var N=new Qe(s,g,i?a.componentStyle:void 0);function O(e,r){return function(e,r,s){var i=e.attrs,a=e.componentStyle,c=e.defaultProps,p=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=o.useContext(et),m=Le(),y=e.shouldForwardProp||m.shouldForwardProp;"production"!==process.env.NODE_ENV&&useDebugValue(d);var v=I(r,f,c)||C,g=function(e,n,o){for(var r,s=__assign(__assign({},n),{className:void 0,theme:o}),i=0;i<e.length;i+=1){var a=re(r=e[i])?r(s):r;for(var c in a)s[c]="className"===c?ie(s[c],a[c]):"style"===c?__assign(__assign({},s[c]),a[c]):a[c];}return n.className&&(s.className=ie(s.className,n.className)),s}(i,r,v),S=g.as||h,w={};for(var b in g) void 0===g[b]||"$"===b[0]||"as"===b||"theme"===b&&g.theme===v||("forwardedAs"===b?w.as=g.forwardedAs:y&&!y(b,S)||(w[b]=g[b],y||"development"!==process.env.NODE_ENV||n(b)||st.has(b)||!A.has(S)||(st.add(b),console.warn('styled-components: it looks like an unknown prop "'.concat(b,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var E=function(e,t){var n=Le(),o=e.generateAndInjectStyles(t,n.styleSheet,n.stylis);return "production"!==process.env.NODE_ENV&&useDebugValue(o),o}(a,g);"production"!==process.env.NODE_ENV&&e.warnTooManyClasses&&e.warnTooManyClasses(E);var N=ie(p,d);return E&&(N+=" "+E),g.className&&(N+=" "+g.className),w[G(S)&&!A.has(S)?"class":"className"]=N,s&&(w.ref=s),createElement(S,w)}(D,e,r)}O.displayName=y;var D=o.forwardRef(O);return D.attrs=S,D.componentStyle=N,D.displayName=y,D.shouldForwardProp=w,D.foldedComponentIds=i?ie(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=g,D.target=i?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=0,r=t;o<r.length;o++)le(e,r[o],true);return e}({},a.defaultProps,e):e;}}),"production"!==process.env.NODE_ENV&&(P(y,g),D.warnTooManyClasses=function(e,t){var n={},o=false;return function(r){if(!o&&(n[r]=true,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),o=true,n={};}}}(y,g)),ue(D,function(){return ".".concat(D.styledComponentId)}),c&&oe(D,e,{attrs:true,componentStyle:true,displayName:true,foldedComponentIds:true,shouldForwardProp:true,styledComponentId:true,target:true}),D}function at(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var ct=function(e){return Object.assign(e,{isCss:true})};function lt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(re(t)||ce(t))return ct(Xe(at(_,__spreadArray([t],n,true))));var r=t;return 0===n.length&&1===r.length&&"string"==typeof r[0]?Xe(r):ct(Xe(at(r,n)))}function ut(n,o,r){if(void 0===r&&(r=C),!o)throw he(1,o);var s=function(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return n(o,r,lt.apply(void 0,__spreadArray([t],s,false)))};return s.attrs=function(e){return ut(n,o,__assign(__assign({},r),{attrs:Array.prototype.concat(r.attrs,e).filter(Boolean)}))},s.withConfig=function(e){return ut(n,o,__assign(__assign({},r),e))},s}var pt=function(e){return ut(it,e)},dt=pt;A.forEach(function(e){dt[e]=pt(e);});"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var wt="__sc-".concat(f,"__");"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window[wt]||(window[wt]=0),1===window[wt]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[wt]+=1);

const CalibreRegularWoff = "/_astro/Calibre-Regular.-1hlrhWf.woff";

const CalibreRegularWoff2 = "/_astro/Calibre-Regular.BF8rtuU2.woff2";

const CalibreMediumWoff = "/_astro/Calibre-Medium.CLLEtnc8.woff";

const CalibreMediumWoff2 = "/_astro/Calibre-Medium.Dr3uPw4d.woff2";

const CalibreSemiboldWoff = "/_astro/Calibre-Semibold.4458Tx-4.woff";

const CalibreSemiboldWoff2 = "/_astro/Calibre-Semibold.ctWswtER.woff2";

const CalibreRegularItalicWoff = "/_astro/Calibre-RegularItalic.CjzLnpHV.woff";

const CalibreRegularItalicWoff2 = "/_astro/Calibre-RegularItalic.iX0Te0iB.woff2";

const CalibreMediumItalicWoff = "/_astro/Calibre-MediumItalic.BO9nraGd.woff";

const CalibreMediumItalicWoff2 = "/_astro/Calibre-MediumItalic.bP60ilMe.woff2";

const CalibreSemiboldItalicWoff = "/_astro/Calibre-SemiboldItalic.27xyafhv.woff";

const CalibreSemiboldItalicWoff2 = "/_astro/Calibre-SemiboldItalic.bSpOXIzM.woff2";

const SFMonoRegularWoff = "/_astro/SFMono-Regular.pHQ7OiT5.woff";

const SFMonoRegularWoff2 = "/_astro/SFMono-Regular.CefSygqP.woff2";

const SFMonoSemiboldWoff = "/_astro/SFMono-Semibold.GntYHmax.woff";

const SFMonoSemiboldWoff2 = "/_astro/SFMono-Semibold.Cbwo1XB1.woff2";

const SFMonoRegularItalicWoff = "/_astro/SFMono-RegularItalic.D-2lWrQW.woff";

const SFMonoRegularItalicWoff2 = "/_astro/SFMono-RegularItalic.Bqi1mbuH.woff2";

const SFMonoSemiboldItalicWoff = "/_astro/SFMono-SemiboldItalic.DwkXiFFS.woff";

const SFMonoSemiboldItalicWoff2 = "/_astro/SFMono-SemiboldItalic.dYysnNTL.woff2";

const calibreNormalWeights = {
  400: [CalibreRegularWoff, CalibreRegularWoff2],
  500: [CalibreMediumWoff, CalibreMediumWoff2],
  600: [CalibreSemiboldWoff, CalibreSemiboldWoff2],
};

const calibreItalicWeights = {
  400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
  500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
  600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
};

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: swap;
      }
    `;
  }

  return styles;
};

const calibreNormal = createFontFaces(calibre);
const calibreItalic = createFontFaces(calibre, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');

lt`
  ${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic}
`;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://errhythm.me");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image, isHome = false } = Astro2.props;
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: image || siteMetadata.image,
    url: `${siteMetadata.siteUrl}${Astro2.url.pathname}`
  };
  const pageTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/src/images/logo.png"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="image"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="canonical"', `><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-Y1XJH4ERHH"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y1XJH4ERHH');
    <\/script><!-- Microsoft Clarity --><script>
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "pcoam3db5l");
    <\/script>`, '</head> <body> <div id="root"> <div id="cursor-spotlight" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div> <a class="skip-to-content" href="#content">Skip to Content</a> <div id="content"> ', " </div> </div> ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), pageTitle, addAttribute(seo.description, "content"), addAttribute(seo.image, "content"), addAttribute(seo.title, "content"), addAttribute(seo.description, "content"), addAttribute(seo.image, "content"), addAttribute(seo.url, "content"), addAttribute(siteMetadata.twitterUsername, "content"), addAttribute(seo.title, "content"), addAttribute(seo.description, "content"), addAttribute(seo.image, "content"), addAttribute(seo.url, "href"), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "/home/user/errhythm.github.io/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/home/user/errhythm.github.io/src/layouts/BaseLayout.astro", void 0);

const email = 'errhythm.me@gmail.com';

const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/errhythm',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/errhythm',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/errhythm',
  },
  {
    name: 'Orcid',
    url: 'https://orcid.org/0000-0002-4641-508X',
  },
];

const navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Experience',
    url: '/#jobs',
  },
  {
    name: 'Education',
    url: '/#education',
  },
  {
    name: 'Work',
    url: '/#projects',
  },
  {
    name: 'Publications',
    url: '/#publications',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
];

const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

const navDelay = 1000;
const loaderDelay = 2000;

const KEY_CODES = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ESCAPE: 'Escape',
  ESCAPE_IE11: 'Esc',
  TAB: 'Tab'};

// https://usehooks.com/useOnClickOutside/

const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  );
};

/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */

const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () =>
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but it doesn't matter. This value
  // will be overwritten on the client, before any animations
  // occur.
  isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = event => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addListener(listener);
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);
  return prefersReducedMotion;
}

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

const useScrollDirection = ({ initialDirection, thresholdPixels, off } = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection);

    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDir;
};

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const IconAppStore = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    children: [
      /* @__PURE__ */ jsx("title", { children: "Apple App Store" }),
      /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105\n      C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302\n      c41.355,0,75,33.645,75,75V407z"
        }
      ) }) }),
      /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166\n      l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664\n      L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498\n      C306.487,136.719,307.375,129.981,305.646,123.531z"
        }
      ) }) }),
      /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65\n      c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341\n      H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"
        }
      ) }) }),
      /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344\n      c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"
        }
      ) }) })
    ]
  }
);

const IconBookmark = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-bookmark",
    children: [
      /* @__PURE__ */ jsx("title", { children: "Bookmark" }),
      /* @__PURE__ */ jsx("path", { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" })
    ]
  }
);

const IconCodepen = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-codepen",
    children: [
      /* @__PURE__ */ jsx("title", { children: "CodePen" }),
      /* @__PURE__ */ jsx("polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "22", x2: "12", y2: "15.5" }),
      /* @__PURE__ */ jsx("polyline", { points: "22 8.5 12 15.5 2 8.5" }),
      /* @__PURE__ */ jsx("polyline", { points: "2 15.5 12 8.5 22 15.5" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "2", x2: "12", y2: "8.5" })
    ]
  }
);

const IconExternal = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-external-link",
    children: [
      /* @__PURE__ */ jsx("title", { children: "External Link" }),
      /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
      /* @__PURE__ */ jsx("polyline", { points: "15 3 21 3 21 9" }),
      /* @__PURE__ */ jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
    ]
  }
);

const IconFolder = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-folder",
    children: [
      /* @__PURE__ */ jsx("title", { children: "Folder" }),
      /* @__PURE__ */ jsx("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" })
    ]
  }
);

const IconFork = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-git-branch",
    children: [
      /* @__PURE__ */ jsx("title", { children: "Git Fork" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "3", x2: "6", y2: "15" }),
      /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "6", cy: "18", r: "3" }),
      /* @__PURE__ */ jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
    ]
  }
);

const Icon = ({ name }) => {
  switch (name) {
    case "AppStore":
      return /* @__PURE__ */ jsx(IconAppStore, {});
    case "Bookmark":
      return /* @__PURE__ */ jsx(IconBookmark, {});
    case "Codepen":
      return /* @__PURE__ */ jsx(IconCodepen, {});
    case "External":
      return /* @__PURE__ */ jsx(IconExternal, {});
    case "Folder":
      return /* @__PURE__ */ jsx(IconFolder, {});
    case "Fork":
      return /* @__PURE__ */ jsx(IconFork, {});
    case "GitHub":
      return /* @__PURE__ */ jsx(IconGitHub, {});
    case "Instagram":
      return /* @__PURE__ */ jsx(IconInstagram, {});
    case "Linkedin":
      return /* @__PURE__ */ jsx(IconLinkedin, {});
    case "Loader":
      return /* @__PURE__ */ jsx(IconLoader, {});
    case "Logo":
      return /* @__PURE__ */ jsx(IconLogo, {});
    case "PlayStore":
      return /* @__PURE__ */ jsx(IconPlayStore, {});
    case "Star":
      return /* @__PURE__ */ jsx(IconStar, {});
    case "FilledStar":
      return /* @__PURE__ */ jsx(FilledIconStar, {});
    case "Twitter":
      return /* @__PURE__ */ jsx(IconTwitter, {});
    default:
      return /* @__PURE__ */ jsx(IconExternal, {});
  }
};
Icon.propTypes = {
  name: PropTypes.string.isRequired
};

const IconGitHub = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-github",
    children: [
      /* @__PURE__ */ jsx("title", { children: "GitHub" }),
      /* @__PURE__ */ jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })
    ]
  }
);

const IconHex = () => /* @__PURE__ */ jsxs("svg", { id: "hex", xmlns: "http://www.w3.org/2000/svg", role: "img", viewBox: "0 0 84 96", children: [
  /* @__PURE__ */ jsx("title", { children: "Hexagon" }),
  /* @__PURE__ */ jsx("g", { transform: "translate(-8.000000, -2.000000)", children: /* @__PURE__ */ jsx("g", { transform: "translate(11.000000, 5.000000)", children: /* @__PURE__ */ jsx(
    "polygon",
    {
      stroke: "currentColor",
      strokeWidth: "5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "39 0 0 22 0 67 39 90 78 68 78 23",
      fill: "currentColor"
    }
  ) }) })
] });

const IconInstagram = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-instagram",
    children: [
      /* @__PURE__ */ jsx("title", { children: "Instagram" }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
      /* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
      /* @__PURE__ */ jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
    ]
  }
);

const IconLinkedin = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-linkedin",
    children: [
      /* @__PURE__ */ jsx("title", { children: "LinkedIn" }),
      /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
      /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
    ]
  }
);

const IconLoader = () => /* @__PURE__ */ jsxs("svg", { id: "logo", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", children: [
  /* @__PURE__ */ jsx("title", { children: "Loader Logo" }),
  /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("g", { id: "B", transform: "translate(11.000000, 10.000000)", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M29.5227 54V24.9091H39.3523C41.625 24.9091 43.4905 25.2973 44.9489 26.0739C46.4072 26.8409 47.4867 27.8968 48.1875 29.2415C48.8883 30.5862 49.2386 32.1155 49.2386 33.8295C49.2386 35.5436 48.8883 37.0634 48.1875 38.3892C47.4867 39.715 46.4119 40.7566 44.9631 41.5142C43.5142 42.2623 41.6629 42.6364 39.4091 42.6364H31.4545V39.4545H39.2955C40.8485 39.4545 42.0985 39.2273 43.0455 38.7727C44.0019 38.3182 44.6932 37.6742 45.1193 36.8409C45.5549 35.9981 45.7727 34.9943 45.7727 33.8295C45.7727 32.6648 45.5549 31.6468 45.1193 30.7756C44.6837 29.9044 43.9877 29.232 43.0312 28.7585C42.0748 28.2756 40.8106 28.0341 39.2386 28.0341H33.0455V54H29.5227ZM43.2159 40.9318L50.375 54H46.2841L39.2386 40.9318H43.2159Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeWidth: "5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M 50, 5\n                  L 11, 27\n                  L 11, 72\n                  L 50, 95\n                  L 89, 73\n                  L 89, 28 z"
      }
    )
  ] })
] });

const IconLogo = () => /* @__PURE__ */ jsxs("svg", { id: "logo", xmlns: "http://www.w3.org/2000/svg", role: "img", viewBox: "0 0 84 96", children: [
  /* @__PURE__ */ jsx("title", { children: "Logo" }),
  /* @__PURE__ */ jsx("g", { transform: "translate(-8.000000, -2.000000)", children: /* @__PURE__ */ jsxs("g", { transform: "translate(11.000000, 5.000000)", children: [
    /* @__PURE__ */ jsx(
      "polygon",
      {
        id: "Shape",
        stroke: "currentColor",
        strokeWidth: "5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: "39 0 0 22 0 67 39 90 78 68 78 23"
      }
    ),
    /* @__PURE__ */ jsx("g", { id: "R", transform: "translate(0.000000, 05.000000)", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M29.5227 54V24.9091H39.3523C41.625 24.9091 43.4905 25.2973 44.9489 26.0739C46.4072 26.8409 47.4867 27.8968 48.1875 29.2415C48.8883 30.5862 49.2386 32.1155 49.2386 33.8295C49.2386 35.5436 48.8883 37.0634 48.1875 38.3892C47.4867 39.715 46.4119 40.7566 44.9631 41.5142C43.5142 42.2623 41.6629 42.6364 39.4091 42.6364H31.4545V39.4545H39.2955C40.8485 39.4545 42.0985 39.2273 43.0455 38.7727C44.0019 38.3182 44.6932 37.6742 45.1193 36.8409C45.5549 35.9981 45.7727 34.9943 45.7727 33.8295C45.7727 32.6648 45.5549 31.6468 45.1193 30.7756C44.6837 29.9044 43.9877 29.232 43.0312 28.7585C42.0748 28.2756 40.8106 28.0341 39.2386 28.0341H33.0455V54H29.5227ZM43.2159 40.9318L50.375 54H46.2841L39.2386 40.9318H43.2159Z",
        fill: "currentColor"
      }
    ) })
  ] }) })
] });

const IconPlayStore = () => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", role: "img", x: "0px", y: "0px", viewBox: "0 0 512.001 512.001", children: [
  /* @__PURE__ */ jsx("title", { children: "Google Play Store" }),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M464.252,212.09L99.624,8.07C84.247-1.873,64.754-2.691,48.574,5.967C32.183,14.74,22,31.737,22,50.329v411.342\n      c0,18.592,10.183,35.59,26.573,44.361c16.097,8.617,35.593,7.891,51.052-2.101l364.628-204.022\n      c16.121-9.02,25.747-25.435,25.747-43.908C490,237.527,480.374,221.111,464.252,212.09z M341.677,181.943l-50.339,50.339\n      L113.108,54.051L341.677,181.943z M55.544,467.323V44.676L267.621,256L55.544,467.323z M113.108,457.949l178.232-178.231\n      l50.339,50.339L113.108,457.949z M447.874,270.637l-75.779,42.401l-57.038-57.037l57.037-57.037l75.778,42.4\n      c7.746,4.335,8.583,11.68,8.583,14.637C456.455,258.958,455.62,266.302,447.874,270.637z"
    }
  )
] });

const IconStar = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-star",
    children: [
      /* @__PURE__ */ jsx("title", { children: "Star" }),
      /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
    ]
  }
);

const IconTwitter = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-twitter",
    children: [
      /* @__PURE__ */ jsx("title", { children: "Twitter" }),
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M4 4l11.733 16h4.267l-11.733 -16z" }),
      /* @__PURE__ */ jsx("path", { d: "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" })
    ]
  }
);

const FilledIconStar = ({ width, height }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width,
    height,
    fill: "currentColor",
    children: /* @__PURE__ */ jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })
  }
);

const StyledLoader = dt.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${(props) => props.isMounted ? 1 : 0};
    margin-bottom: 50px;
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }

  .welcome-text {
    font-size: 32px;
    color: var(--green);
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
`;
const welcomeMessages = [
  "Hello",
  "স্বাগতম",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "مرحبا",
  "Guten tag",
  "Hallo",
  "नमस्ते"
];
const textVariants = {
  initial: {
    opacity: 1
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};
const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        setIsAnimationComplete(true);
      }
    });
    const activeAnimationTime = 2500;
    const transitionTime = Math.floor(activeAnimationTime / welcomeMessages.length);
    const startTextTransitions = () => {
      const changeText = () => {
        if (currentIndex < welcomeMessages.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setTimeout(changeText, transitionTime);
        }
      };
      changeText();
    };
    setTimeout(startTextTransitions, 300);
    loader.add({
      targets: "#logo path",
      delay: 300,
      duration: 1500,
      easing: "easeInOutQuart",
      strokeDashoffset: [anime.setDashoffset, 0]
    }).add({
      targets: "#logo #B",
      duration: 700,
      easing: "easeInOutQuart",
      opacity: 1
    }).add({
      targets: "#logo",
      delay: 500,
      duration: 300,
      easing: "easeInOutQuart",
      opacity: 0,
      scale: 0.1
    }).add({
      targets: ".loader",
      duration: 200,
      easing: "easeInOutQuart",
      opacity: 0,
      zIndex: -1
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (isAnimationComplete) {
      const timeout = setTimeout(() => finishLoading(), 10);
      return () => clearTimeout(timeout);
    }
  }, [isAnimationComplete]);
  return /* @__PURE__ */ jsx(StyledLoader, { className: "loader", isMounted, children: /* @__PURE__ */ jsxs("div", { className: "content-wrapper", children: [
    /* @__PURE__ */ jsx("div", { className: "logo-wrapper", children: /* @__PURE__ */ jsx(IconLoader, {}) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "welcome-text",
        variants: textVariants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
        children: welcomeMessages[currentIndex]
      },
      currentIndex
    ) })
  ] }) });
};
Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired
};

const StyledMenu = dt.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
const StyledHamburgerButton = dt.button`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => props.menuOpen ? `0.12s` : `0s`};
    transform: rotate(${(props) => props.menuOpen ? `225deg` : `0deg`});
    transition-timing-function: cubic-bezier(
      ${(props) => props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${(props) => props.menuOpen ? `100%` : `120%`};
      top: ${(props) => props.menuOpen ? `0` : `-10px`};
      opacity: ${(props) => props.menuOpen ? 0 : 1};
      transition: ${({ menuOpen }) => menuOpen ? "var(--ham-before-active)" : "var(--ham-before)"};
    }
    &:after {
      width: ${(props) => props.menuOpen ? `100%` : `80%`};
      bottom: ${(props) => props.menuOpen ? `0` : `-10px`};
      transform: rotate(${(props) => props.menuOpen ? `-90deg` : `0`});
      transition: ${({ menuOpen }) => menuOpen ? "var(--ham-after-active)" : "var(--ham-after)"};
    }
  }
`;
const StyledSidebar = dt.aside`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${(props) => props.menuOpen ? 0 : 100}vw);
    visibility: ${(props) => props.menuOpen ? "visible" : "hidden"};
    transition: var(--transition);
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${({ theme }) => theme.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;
  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll("a"))];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };
  const handleBackwardTab = (e) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };
  const handleForwardTab = (e) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }
      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }
    }
  };
  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    setFocusables();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));
  return /* @__PURE__ */ jsxs(StyledMenu, { children: [
    /* @__PURE__ */ jsx("body", { className: menuOpen ? "blur" : "" }),
    /* @__PURE__ */ jsxs("div", { ref: wrapperRef, children: [
      /* @__PURE__ */ jsx(
        StyledHamburgerButton,
        {
          onClick: toggleMenu,
          menuOpen,
          ref: buttonRef,
          "aria-label": "Menu",
          children: /* @__PURE__ */ jsx("div", { className: "ham-box", children: /* @__PURE__ */ jsx("div", { className: "ham-box-inner" }) })
        }
      ),
      /* @__PURE__ */ jsx(StyledSidebar, { menuOpen, "aria-hidden": !menuOpen, tabIndex: menuOpen ? 1 : -1, children: /* @__PURE__ */ jsxs("nav", { ref: navRef, children: [
        navLinks && /* @__PURE__ */ jsx("ol", { children: navLinks.map(({ url, name }, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: url, onClick: () => setMenuOpen(false), children: name }) }, i)) }),
        /* @__PURE__ */ jsx("a", { href: "https://cdn.errhythm.me/resume.pdf", className: "resume-link", children: "Resume" })
      ] }) })
    ] })
  ] });
};

const StyledSideElement = dt.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => props.orientation === "left" ? "40px" : "auto"};
  right: ${(props) => props.orientation === "left" ? "auto" : "40px"};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${(props) => props.orientation === "left" ? "20px" : "auto"};
    right: ${(props) => props.orientation === "left" ? "auto" : "20px"};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);
  return /* @__PURE__ */ jsx(StyledSideElement, { orientation, children: prefersReducedMotion ? /* @__PURE__ */ jsx(Fragment, { children }) : /* @__PURE__ */ jsx(TransitionGroup, { component: null, children: isMounted && /* @__PURE__ */ jsx(CSSTransition, { classNames: isHome ? "fade" : "", timeout: isHome ? loaderDelay : 0, children }) }) });
};
Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string
};

const StyledSocialList = dt.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
const Social = ({ isHome }) => /* @__PURE__ */ jsx(Side, { isHome, orientation: "left", children: /* @__PURE__ */ jsx(StyledSocialList, { children: socialMedia && socialMedia.map(({ url, name }, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: url, "aria-label": name, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Icon, { name }) }) }, i)) }) });
Social.propTypes = {
  isHome: PropTypes.bool
};

const StyledLinkWrapper = dt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;
const Email = ({ isHome }) => /* @__PURE__ */ jsx(Side, { isHome, orientation: "right", children: /* @__PURE__ */ jsx(StyledLinkWrapper, { children: /* @__PURE__ */ jsx("a", { href: `mailto:${email}`, children: email }) }) });
Email.propTypes = {
  isHome: PropTypes.bool
};

const StyledFooter = dt.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;
const StyledSocialLinks = dt.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
const StyledCredit = dt.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px 0px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;
const TimeCapsuleLink = dt.a`
  text-decoration: none;
  position: relative;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: '⏳';
    display: none;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 9999;
    font-size: 24px;
    width: 24px;
    height: 24px;
    animation: clockRotate 2s linear infinite;
  }

  @keyframes clockRotate {
    0% {
      transform: translateX(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) rotate(360deg);
    }
  }

  &:hover::before {
    display: block;
  }
`;
const Footer = () => {
  const data = /* @__PURE__ */ new Date();
  const year = data.getFullYear();
  return /* @__PURE__ */ jsxs(StyledFooter, { children: [
    /* @__PURE__ */ jsx(StyledSocialLinks, { children: /* @__PURE__ */ jsx("ul", { children: socialMedia && socialMedia.map(({ name, url }, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: url, "aria-label": name, children: /* @__PURE__ */ jsx(Icon, { name }) }) }, i)) }) }),
    /* @__PURE__ */ jsx(StyledCredit, { tabindex: "-1", children: /* @__PURE__ */ jsxs("div", { children: [
      "© ",
      year,
      " Ehsanur Rahman Rhythm. All rights reserved. Designed by ",
      "",
      /* @__PURE__ */ jsx("a", { href: "https://github.com/bchiang7", children: "Brittany Chiang" }),
      ", enhanced by ",
      "",
      /* @__PURE__ */ jsx("a", { href: "https://github.com/errhythm", children: "me" }),
      ". ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        TimeCapsuleLink,
        {
          href: "https://timecapsule.errhythm.me/",
          target: "_blank",
          rel: "noopener noreferrer",
          style: { fontSize: "0.8em" },
          children: "Visit my old website!"
        }
      )
    ] }) })
  ] });
};

const StyledHeroSection = dt.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
    font-size: clamp(30px, 6vw, 60px);
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;
const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);
  const one = /* @__PURE__ */ jsx("h1", { children: "Hi, my name is" });
  const two = /* @__PURE__ */ jsx("h2", { className: "big-heading", children: "Ehsanur Rahman Rhythm." });
  const three = /* @__PURE__ */ jsx("h3", { className: "big-heading", children: "I build things for the web." });
  const four = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("p", { children: [
    "I'm a software engineer specializing in startup development and creating dynamic, user-friendly web applications. Currently, I'm enhancing the returns management experience at",
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://ifreturns.com/",
        target: "_blank",
        rel: "noreferrer",
        style: { color: "#54b58f" },
        children: "iF returns"
      }
    ),
    " ",
    "while revolutionizing emergency delivery systems at",
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://deliveryhobe.com/",
        target: "_blank",
        rel: "noreferrer",
        style: { color: "#ffe23d" },
        children: "DeliveryHobe"
      }
    ),
    "."
  ] }) });
  const five = /* @__PURE__ */ jsx("a", { className: "email-link", href: "/#projects", children: "Check out my projects!" });
  const items = [one, two, three, four, five];
  return /* @__PURE__ */ jsx(StyledHeroSection, { children: prefersReducedMotion ? /* @__PURE__ */ jsx(Fragment, { children: items.map((item, i) => /* @__PURE__ */ jsx("div", { children: item }, i)) }) : /* @__PURE__ */ jsx(TransitionGroup, { component: null, children: isMounted && items.map((item, i) => /* @__PURE__ */ jsx(CSSTransition, { classNames: "fadeup", timeout: loaderDelay, children: /* @__PURE__ */ jsx("div", { style: { transitionDelay: `${i + 1}00ms` }, children: item }) }, i)) }) });
};

// Lazy load ScrollReveal only on client side to avoid SSR issues
let ScrollReveal;
let sr;

const isSSR = typeof window === 'undefined';

if (!isSSR) {
  import('scrollreveal').then(module => {
    ScrollReveal = module.default;
    sr = ScrollReveal();
  });
}

const sr$1 = {
  reveal: (...args) => {
    if (!isSSR && sr) {
      return sr.reveal(...args);
    }
    return null;
  }
};

const StyledAboutSection = dt.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = dt.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = dt.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;
const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr$1.reveal(revealContainer.current, srConfig());
  }, []);
  const skills = [
    "React.js",
    "Express.js",
    "Astro.js",
    "Vanilla JavaScript",
    "PHP",
    "Laravel",
    "WordPress"
  ];
  return /* @__PURE__ */ jsxs(StyledAboutSection, { id: "about", ref: revealContainer, children: [
    /* @__PURE__ */ jsx("h2", { className: "numbered-heading", children: "About Me" }),
    /* @__PURE__ */ jsxs("div", { className: "inner", children: [
      /* @__PURE__ */ jsxs(StyledText, { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Hello! My name is Ehsanur Rahman Rhythm, and I enjoy creating things that live on the internet. My journey in web development started during my time at Brac University, where I developed a passion for building user-friendly and dynamic web applications." }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Fast-forward to today, I have over four years of experience working with various technologies, including PHP, Laravel, and WordPress. I’ve had the privilege of working on a range of projects, from developing a digital database management system for the",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://mfacademy.gov.bd/", target: "_blank", rel: "noreferrer", children: "Marine Fisheries Academy" }),
            " ",
            "to creating high-traffic educational websites and news portals."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Currently, I'm working at",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://ifreturns.com/",
                target: "_blank",
                rel: "noreferrer",
                style: { color: "#54b58f" },
                children: "iF returns"
              }
            ),
            " ",
            "🇪🇸 and",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://deliveryhobe.com/",
                target: "_blank",
                rel: "noreferrer",
                style: { color: "#ffe23d" },
                children: "DeliveryHobe"
              }
            ),
            " ",
            "🇧🇩 . My main goal is to build accessible, human-centered products that meet and exceed user expectations."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "In addition to my work in web development, I have also published research in the fields of natural language processing (NLP) and data science. I worked as a Research Assistant at",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://bracu.ac.bd/",
                target: "_blank",
                rel: "noreferrer",
                style: { color: "#253494" },
                children: "Brac University"
              }
            ),
            ", researching machine learning-based accessibility systems for visually impaired individuals on campus. These ",
            /* @__PURE__ */ jsx("a", { href: "#publications", children: "publications" }),
            " reflect my commitment to advancing technology and contributing to the academic community."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Here are a few technologies I've been working with recently:" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "skills-list", children: skills && skills.map((skill, i) => /* @__PURE__ */ jsx("li", { children: skill }, i)) })
      ] }),
      /* @__PURE__ */ jsx(StyledPic, { children: /* @__PURE__ */ jsx("div", { className: "wrapper", children: /* @__PURE__ */ jsx(
        StaticImage,
        {
          className: "img",
          src: "https://cdn.errhythm.me/errhythm_ghibli.png",
          width: 500,
          quality: 95,
          formats: ["AUTO", "WEBP", "AVIF"],
          alt: "Headshot"
        }
      ) }) })
    ] })
  ] });
};

const StyledJobsSection = dt.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;
const StyledTabList$1 = dt.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;
const StyledTabButton$1 = dt.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => isActive ? "var(--green)" : "var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;
const StyledHighlight$1 = dt.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;
const StyledTabPanels$1 = dt.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
const StyledTabPanel$1 = dt.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;
const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);
  const jobsData = data.jobs.edges;
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr$1.reveal(revealContainer.current, srConfig());
  }, []);
  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };
  useEffect(() => focusTab(), [tabFocus]);
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }
      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }
    }
  };
  return /* @__PURE__ */ jsxs(StyledJobsSection, { id: "jobs", ref: revealContainer, children: [
    /* @__PURE__ */ jsx("h2", { className: "numbered-heading", children: "Where I’ve Worked" }),
    /* @__PURE__ */ jsxs("div", { className: "inner", children: [
      /* @__PURE__ */ jsxs(StyledTabList$1, { role: "tablist", "aria-label": "Job tabs", onKeyDown: (e) => onKeyDown(e), children: [
        jobsData && jobsData.map(({ node }, i) => {
          const { company } = node.frontmatter;
          return /* @__PURE__ */ jsx(
            StyledTabButton$1,
            {
              isActive: activeTabId === i,
              onClick: () => setActiveTabId(i),
              ref: (el) => tabs.current[i] = el,
              id: `tab-${i}`,
              role: "tab",
              tabIndex: activeTabId === i ? "0" : "-1",
              "aria-selected": activeTabId === i ? true : false,
              "aria-controls": `panel-${i}`,
              children: /* @__PURE__ */ jsx("span", { children: company })
            },
            i
          );
        }),
        /* @__PURE__ */ jsx(StyledHighlight$1, { activeTabId })
      ] }),
      /* @__PURE__ */ jsx(StyledTabPanels$1, { children: jobsData && jobsData.map(({ node }, i) => {
        const { frontmatter, html } = node;
        const { title, url, company, range } = frontmatter;
        return /* @__PURE__ */ jsx(CSSTransition, { in: activeTabId === i, timeout: 250, classNames: "fade", children: /* @__PURE__ */ jsxs(
          StyledTabPanel$1,
          {
            id: `panel-${i}`,
            role: "tabpanel",
            tabIndex: activeTabId === i ? "0" : "-1",
            "aria-labelledby": `tab-${i}`,
            "aria-hidden": activeTabId !== i,
            hidden: activeTabId !== i,
            children: [
              /* @__PURE__ */ jsxs("h3", { children: [
                /* @__PURE__ */ jsx("span", { children: title }),
                /* @__PURE__ */ jsxs("span", { className: "company", children: [
                  " @ ",
                  /* @__PURE__ */ jsx("a", { href: url, className: "inline-link", children: company })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "range", children: range }),
              /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html } })
            ]
          }
        ) }, i);
      }) })
    ] })
  ] });
};

const StyledEducationSection = dt.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;
const StyledTabList = dt.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;
const StyledTabButton = dt.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => isActive ? "var(--green)" : "var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;
const StyledHighlight = dt.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;
const StyledTabPanels = dt.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
const StyledTabPanel = dt.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;
const Education = () => {
  const data = useStaticQuery(graphql`
    query {
      education: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/education/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              degree
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);
  const educationData = data.education.edges;
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr$1.reveal(revealContainer.current, srConfig());
  }, []);
  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };
  useEffect(() => focusTab(), [tabFocus]);
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }
      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }
    }
  };
  return /* @__PURE__ */ jsxs(StyledEducationSection, { id: "education", ref: revealContainer, children: [
    /* @__PURE__ */ jsx("h2", { className: "numbered-heading", children: "Where I’ve Studied" }),
    /* @__PURE__ */ jsxs("div", { className: "inner", children: [
      /* @__PURE__ */ jsxs(StyledTabList, { role: "tablist", "aria-label": "Job tabs", onKeyDown: (e) => onKeyDown(e), children: [
        educationData && educationData.map(({ node }, i) => {
          const { degree } = node.frontmatter;
          return /* @__PURE__ */ jsx(
            StyledTabButton,
            {
              isActive: activeTabId === i,
              onClick: () => setActiveTabId(i),
              ref: (el) => tabs.current[i] = el,
              id: `tab-${i}`,
              role: "tab",
              tabIndex: activeTabId === i ? "0" : "-1",
              "aria-selected": activeTabId === i ? true : false,
              "aria-controls": `panel-${i}`,
              children: /* @__PURE__ */ jsx("span", { children: degree })
            },
            i
          );
        }),
        /* @__PURE__ */ jsx(StyledHighlight, { activeTabId })
      ] }),
      /* @__PURE__ */ jsx(StyledTabPanels, { children: educationData && educationData.map(({ node }, i) => {
        const { frontmatter, html } = node;
        const { title, url, company, range } = frontmatter;
        return /* @__PURE__ */ jsx(CSSTransition, { in: activeTabId === i, timeout: 250, classNames: "fade", children: /* @__PURE__ */ jsxs(
          StyledTabPanel,
          {
            id: `panel-${i}`,
            role: "tabpanel",
            tabIndex: activeTabId === i ? "0" : "-1",
            "aria-labelledby": `tab-${i}`,
            "aria-hidden": activeTabId !== i,
            hidden: activeTabId !== i,
            children: [
              /* @__PURE__ */ jsxs("h3", { children: [
                /* @__PURE__ */ jsx("span", { children: title }),
                /* @__PURE__ */ jsx("p", { className: "company", children: /* @__PURE__ */ jsx("a", { href: url, className: "inline-link", children: company }) })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "range", children: range }),
              /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html } })
            ]
          }
        ) }, i);
      }) })
    ] })
  ] });
};

const { kebabCase: kebabCase$1 } = lodash;
const StyledProjectsGrid = dt.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;
const StyledProject$1 = dt.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    max-width: 90%;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(20px, min(5vw, 28px), 28px);
    line-height: 1.2;
    word-wrap: break-word;
    position: relative;
    z-index: 10;
    max-width: 100%;

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);
      font-size: clamp(18px, min(4vw, 24px), 24px);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    align-items: center;
    gap: 20px;

    li {
      margin: 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;
      gap: 10px;

      li {
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;
const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { featured: { eq: true }, title: { ne: "Dummy" } }
        }
        sort: [{ frontmatter: { featuredSort: ASC } }, { frontmatter: { date: ASC } }]
      ) {
        edges {
          node {
            frontmatter {
              title
              image
              tech
              github
              external
              cta
              featuredMessage
              featuredCover
            }
            html
          }
        }
      }
    }
  `);
  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr$1.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr$1.reveal(ref, srConfig(i * 100)));
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "projects", children: [
    /* @__PURE__ */ jsx("h2", { className: "numbered-heading", ref: revealTitle, children: "Some Things I've Built" }),
    /* @__PURE__ */ jsx(StyledProjectsGrid, { children: featuredProjects && featuredProjects.map(({ node }, i) => {
      const { frontmatter, html } = node;
      const { external, title, tech, github, cta, featuredMessage, featuredCover } = frontmatter;
      const isExternalImage = featuredCover?.startsWith("http");
      return /* @__PURE__ */ jsxs(StyledProject$1, { ref: (el) => revealProjects.current[i] = el, children: [
        /* @__PURE__ */ jsx("div", { className: "project-content", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "project-overline", children: "Featured Project" }),
          /* @__PURE__ */ jsx("h3", { className: "project-title", children: /* @__PURE__ */ jsx("a", { href: `/projects/${kebabCase$1(title)}`, children: title }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "project-description",
              dangerouslySetInnerHTML: {
                __html: featuredMessage || html && `${html.split("</p>")[0]}</p>`
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "project-tech-list", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  color: "var(--light-slate)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fz-xs)"
                },
                children: "Tech Stack:"
              }
            ),
            tech.length && tech.map((tech2, i2) => /* @__PURE__ */ jsx("li", { children: tech2 }, i2))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "project-links", children: [
            cta && /* @__PURE__ */ jsx("a", { href: cta, "aria-label": "Course Link", className: "cta", children: "Learn More" }),
            github && /* @__PURE__ */ jsx("a", { href: github, "aria-label": "GitHub Link", children: /* @__PURE__ */ jsx(Icon, { name: "GitHub" }) }),
            external && !cta && /* @__PURE__ */ jsx("a", { href: external, "aria-label": "External Link", className: "external", children: /* @__PURE__ */ jsx(Icon, { name: "External" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "project-image", children: /* @__PURE__ */ jsx("a", { href: external ? external : github ? github : "#", children: isExternalImage ? /* @__PURE__ */ jsx("img", { src: featuredCover, alt: title, className: "img" }) : featuredCover && /* @__PURE__ */ jsx(GatsbyImage, { image: getImage(featuredCover), alt: title, className: "img" }) }) })
      ] }, i);
    }) })
  ] });
};

const { kebabCase } = lodash;
const StyledProjectsSection = dt.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;
const StyledProject = dt.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;
const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false }, title: { ne: "Dummy" } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr$1.reveal(revealTitle.current, srConfig());
    sr$1.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr$1.reveal(ref, srConfig(i * 100)));
  }, []);
  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;
  const projectInner = (node) => {
    const { frontmatter, html } = node;
    const { github, external, title, tech } = frontmatter;
    const slug = `/projects/${kebabCase(title)}`;
    return /* @__PURE__ */ jsxs("div", { className: "project-inner", children: [
      /* @__PURE__ */ jsxs("header", { children: [
        /* @__PURE__ */ jsxs("div", { className: "project-top", children: [
          /* @__PURE__ */ jsx("div", { className: "folder", children: /* @__PURE__ */ jsx(Icon, { name: "Folder" }) }),
          /* @__PURE__ */ jsxs("div", { className: "project-links", children: [
            github && /* @__PURE__ */ jsx("a", { href: github, "aria-label": "GitHub Link", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Icon, { name: "GitHub" }) }),
            external && /* @__PURE__ */ jsx(
              "a",
              {
                href: external,
                "aria-label": "External Link",
                className: "external",
                target: "_blank",
                rel: "noreferrer",
                children: /* @__PURE__ */ jsx(Icon, { name: "External" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "project-title", children: /* @__PURE__ */ jsx("a", { href: slug, children: title.length > 100 ? `${title.substring(0, 100)}...` : title }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "project-description",
            dangerouslySetInnerHTML: { __html: `${html.substring(0, 160)}...` }
          }
        )
      ] }),
      /* @__PURE__ */ jsx("footer", { children: tech && /* @__PURE__ */ jsx("ul", { className: "project-tech-list", children: tech.map((tech2, i) => /* @__PURE__ */ jsx("li", { children: tech2 }, i)) }) })
    ] });
  };
  return /* @__PURE__ */ jsxs(StyledProjectsSection, { children: [
    /* @__PURE__ */ jsx("h2", { ref: revealTitle, children: "Other Noteworthy Projects" }),
    /* @__PURE__ */ jsx("a", { className: "inline-link archive-link", to: "/projects", ref: revealArchiveLink, children: "view the archive" }),
    /* @__PURE__ */ jsx("ul", { className: "projects-grid", children: prefersReducedMotion ? /* @__PURE__ */ jsx(Fragment, { children: projectsToShow && projectsToShow.map(({ node }, i) => /* @__PURE__ */ jsx(StyledProject, { children: projectInner(node) }, i)) }) : /* @__PURE__ */ jsx(TransitionGroup, { component: null, children: projectsToShow && projectsToShow.map(({ node }, i) => /* @__PURE__ */ jsx(
      CSSTransition,
      {
        classNames: "fadeup",
        timeout: i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300,
        exit: false,
        children: /* @__PURE__ */ jsx(
          StyledProject,
          {
            ref: (el) => revealProjects.current[i] = el,
            style: {
              transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`
            },
            children: projectInner(node)
          },
          i
        )
      },
      i
    )) }) }),
    /* @__PURE__ */ jsxs("button", { className: "more-button", onClick: () => setShowMore(!showMore), children: [
      "Show ",
      showMore ? "Less" : "More"
    ] })
  ] });
};

const StyledPublicationsSection = dt.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;

    h2 {
      margin-bottom: 20px;
    }
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 20px;
    &:after {
      bottom: 0.1em;
    }
  }

  .publications-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;
const StyledTableContainer = dt.div`
  margin-top: -10px;

  @media (max-width: 768px) {
    margin: 50px -10px;
    display: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.conference,
      &.doi,
      &.url,
      &.abstract {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }
    }
    .title {
      padding-top: 15px;
      padding-right: 20px;
      color: var(--lightest-slate);
      font-size: var(--fz-lg);
      font-weight: 600;
      line-height: 1.25;
    }

    .authors {
      font-size: var(--fz-sm);
    }
    .link-icons {
      width: 50px;
    }

    .publication-title {
      cursor: pointer;
    }

    .publication-abstract {
      max-height: 0;
      overflow: hidden;
      transition:
        max-height 0.3s ease-out,
        opacity 0.3s ease-out;
      opacity: 0;
      margin-top: 10px;
      font-size: var(--fz-sm);
      line-height: 1.5;
      font-weight: 300;
    }

    .publication-abstract.expanded {
      max-height: 1000px; // Adjust this value based on your content
      opacity: 1;
      transition:
        max-height 0.5s ease-in,
        opacity 0.5s ease-in;
    }
  }
`;
const StyledCardContainer = dt.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  .publication-card {
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    padding: 20px;
    margin-bottom: 20px;
  }

  .card-title {
    font-size: var(--fz-lg);
    font-weight: 600;
    color: var(--lightest-slate);
    margin-bottom: 10px;
    cursor: pointer;
  }

  .card-authors {
    font-size: var(--fz-sm);
    margin-bottom: 10px;
  }

  .card-details {
    font-size: var(--fz-sm);
    color: var(--slate);
  }

  .card-links {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .card-links a {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .card-links a:last-child {
    margin-right: 0;
  }

  .card-links svg {
    width: 20px;
    height: 20px;
  }

  .card-abstract {
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 0.3s ease-out,
      opacity 0.3s ease-out;
    opacity: 0;
    margin-top: 10px;
    font-size: var(--fz-sm);
    line-height: 1.5;
    font-weight: 300;
  }

  .card-abstract.expanded {
    max-height: 1000px;
    padding-bottom: 10px;
    opacity: 1;
    transition:
      max-height 0.5s ease-in,
      opacity 0.5s ease-in;
  }
`;
const Publications = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/publications/" }
          frontmatter: { featured: { eq: true }, visible: { ne: false }, title: { ne: "Dummy" } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              conference
              doi
              url
              github
              authors {
                name
                url
                affiliation
                email
              }
            }
            html
          }
        }
      }
    }
  `);
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealPublications = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [expandedAbstracts, setExpandedAbstracts] = useState([]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const GRID_LIMIT = 4;
  const publications = data.allMarkdownRemark.edges;
  const firstThree = publications.slice(0, GRID_LIMIT);
  const publicationsToShow = showMore ? publications : firstThree;
  const toggleAbstract = (index) => {
    setExpandedAbstracts((prevState) => {
      const newState = Array(publications.length).fill(false);
      newState[index] = !prevState[index];
      return newState;
    });
  };
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr$1.reveal(revealTitle.current, srConfig());
    sr$1.reveal(revealTable.current, srConfig(200, 0));
    revealPublications.current.forEach((ref, i) => sr$1.reveal(ref, srConfig(i * 10)));
  }, []);
  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleAbstract(index);
    }
  };
  return /* @__PURE__ */ jsxs(StyledPublicationsSection, { id: "publications", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-header", ref: revealTitle, children: [
      /* @__PURE__ */ jsx("h2", { className: "numbered-heading", children: "Publications" }),
      /* @__PURE__ */ jsx("a", { className: "inline-link archive-link", to: "/publications", children: "view all publications" })
    ] }),
    !isMobile && /* @__PURE__ */ jsx(StyledTableContainer, { ref: revealTable, children: /* @__PURE__ */ jsxs("table", { children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { style: { width: "550px" }, children: "Title" }),
        /* @__PURE__ */ jsx("th", { style: { width: "350px" }, className: "hide-on-mobile", children: "Authors" }),
        /* @__PURE__ */ jsx("th", { children: "Venue" }),
        /* @__PURE__ */ jsx("th", { children: "Year" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: publicationsToShow.map(({ node }, i) => {
        const sanitizedHtml = DOMPurify.sanitize(node.html, {
          ALLOWED_TAGS: [],
          ALLOWED_ATTR: []
        });
        const { date, title, conference, doi, url, github, authors } = node.frontmatter;
        return /* @__PURE__ */ jsxs("tr", { ref: (el) => revealPublications.current[i] = el, children: [
          /* @__PURE__ */ jsxs("td", { className: "title", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "publication-title",
                onClick: () => toggleAbstract(i),
                onKeyDown: (event) => handleKeyDown(event, i),
                role: "button",
                tabIndex: 0,
                children: title
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `publication-abstract ${expandedAbstracts[i] ? "expanded" : ""}`,
                children: /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: sanitizedHtml } })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("td", { className: "authors hide-on-mobile", children: authors.map((author, index) => /* @__PURE__ */ jsxs("span", { children: [
            author.url ? /* @__PURE__ */ jsx("a", { href: author.url, target: "_blank", rel: "noopener noreferrer", children: author.name === "Ehsanur Rahman Rhythm" ? /* @__PURE__ */ jsx("strong", { children: author.name }) : author.name }) : author.email ? /* @__PURE__ */ jsx("a", { href: `mailto:${author.email}`, children: author.name === "Ehsanur Rahman Rhythm" ? /* @__PURE__ */ jsx("strong", { children: author.name }) : author.name }) : author.name === "Ehsanur Rahman Rhythm" ? /* @__PURE__ */ jsx("strong", { children: author.name }) : author.name,
            index < authors.length - 1 && /* @__PURE__ */ jsx("span", { children: ", " })
          ] }, index)) }),
          /* @__PURE__ */ jsx("td", { className: "conference", children: conference }),
          /* @__PURE__ */ jsx("td", { className: "year", children: new Date(date).getFullYear() }),
          /* @__PURE__ */ jsx("td", { className: "links", children: /* @__PURE__ */ jsxs("div", { className: "link-icons", children: [
            url || doi ? /* @__PURE__ */ jsx(
              "a",
              {
                href: url || `https://doi.org/${doi}`,
                "aria-label": "External Link",
                style: { marginRight: "10px" },
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(Icon, { name: "External", className: "icon-large" })
              }
            ) : null,
            github && /* @__PURE__ */ jsx(
              "a",
              {
                href: github,
                "aria-label": "GitHub Link",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(Icon, { name: "GitHub", className: "icon-large" })
              }
            )
          ] }) })
        ] }, i);
      }) })
    ] }) }),
    isMobile && /* @__PURE__ */ jsx(StyledCardContainer, { ref: revealTable, children: publicationsToShow.map(({ node }, i) => {
      const sanitizedHtml = DOMPurify.sanitize(node.html, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
      });
      const { date, title, conference, doi, url, github, authors } = node.frontmatter;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "publication-card",
          ref: (el) => revealPublications.current[i] = el,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "card-title",
                onClick: () => toggleAbstract(i),
                onKeyDown: (event) => handleKeyDown(event, i),
                role: "button",
                tabIndex: 0,
                children: title
              }
            ),
            /* @__PURE__ */ jsx("div", { className: `card-abstract ${expandedAbstracts[i] ? "expanded" : ""}`, children: /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: sanitizedHtml } }) }),
            /* @__PURE__ */ jsx("div", { className: "card-authors", children: authors.map((author, index) => /* @__PURE__ */ jsxs("span", { children: [
              author.url ? /* @__PURE__ */ jsx("a", { href: author.url, target: "_blank", rel: "noopener noreferrer", children: author.name === "Ehsanur Rahman Rhythm" ? /* @__PURE__ */ jsx("strong", { children: author.name }) : author.name }) : author.email ? /* @__PURE__ */ jsx("a", { href: `mailto:${author.email}`, children: author.name === "Ehsanur Rahman Rhythm" ? /* @__PURE__ */ jsx("strong", { children: author.name }) : author.name }) : author.name === "Ehsanur Rahman Rhythm" ? /* @__PURE__ */ jsx("strong", { children: author.name }) : author.name,
              index < authors.length - 1 && /* @__PURE__ */ jsx("span", { children: ", " })
            ] }, index)) }),
            /* @__PURE__ */ jsxs("div", { className: "card-details", children: [
              /* @__PURE__ */ jsx("div", { children: conference }),
              /* @__PURE__ */ jsx("div", { children: new Date(date).getFullYear() })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card-links", children: [
              url || doi ? /* @__PURE__ */ jsx(
                "a",
                {
                  href: url || `https://doi.org/${doi}`,
                  "aria-label": "External Link",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /* @__PURE__ */ jsx(Icon, { name: "External" })
                }
              ) : null,
              github && /* @__PURE__ */ jsx(
                "a",
                {
                  href: github,
                  "aria-label": "GitHub Link",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /* @__PURE__ */ jsx(Icon, { name: "GitHub" })
                }
              )
            ] })
          ]
        },
        i
      );
    }) }),
    /* @__PURE__ */ jsxs("button", { className: "more-button", onClick: () => setShowMore(!showMore), children: [
      "Show ",
      showMore ? "Less" : "More"
    ] })
  ] });
};
Publications.propTypes = {
  data: PropTypes.object.isRequired
};

const StyledContactSection = dt.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;
const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr$1.reveal(revealContainer.current, srConfig());
  }, []);
  return /* @__PURE__ */ jsxs(StyledContactSection, { id: "contact", ref: revealContainer, children: [
    /* @__PURE__ */ jsx("h2", { className: "numbered-heading overline", children: "What’s Next?" }),
    /* @__PURE__ */ jsx("h2", { className: "title", children: "Get In Touch" }),
    /* @__PURE__ */ jsx("p", { children: "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!" }),
    /* @__PURE__ */ jsx("a", { className: "email-link", href: `mailto:${email}`, children: "Say Hello" })
  ] });
};

dt.div`
  background-color: var(--light-navy);
  border-radius: 10px;
  padding: 25px;
  margin-top: 20px;
  margin-bottom: 50px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: 'Testimonial';
    background: var(--green);
    color: var(--navy);
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 0 0 3px 3px;
    position: absolute;
    opacity: 0.5;
    top: 0;
    right: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
`;
dt.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
dt.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;
dt.div`
  flex-grow: 1;
`;
dt.h4`
  margin: 0;
  color: var(--lightest-slate);
`;
dt.p`
  margin: 0;
  color: var(--slate);
  font-size: var(--fz-sm);
`;
dt.div`
  display: flex;
  align-items: center;
  height: 20px;
`;
dt.span`
  color: ${(props) => props.filled ? "var(--green)" : "var(--slate)"};
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;
dt.p`
  color: var(--light-slate);
  font-style: italic;
`;

const StyledHeader = dt.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) => props.scrollDirection === "up" && !props.scrolledToTop && lt`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${(props) => props.scrollDirection === "down" && !props.scrolledToTop && lt`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;
const StyledNav = dt.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      .hex-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
          polygon {
            fill: var(--navy);
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
        .hex-container {
          transform: translate(4px, 3px);
        }
      }
    }
  }
`;
const StyledLinks = dt.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;
const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const timeout2 = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout2);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";
  const Logo = /* @__PURE__ */ jsx("div", { className: "logo", tabIndex: "-1", children: isHome ? /* @__PURE__ */ jsxs("a", { href: "/", "aria-label": "home", children: [
    /* @__PURE__ */ jsx("div", { className: "hex-container", children: /* @__PURE__ */ jsx(IconHex, {}) }),
    /* @__PURE__ */ jsx("div", { className: "logo-container", children: /* @__PURE__ */ jsx(IconLogo, {}) })
  ] }) : /* @__PURE__ */ jsxs("a", { href: "/", "aria-label": "home", children: [
    /* @__PURE__ */ jsx("div", { className: "hex-container", children: /* @__PURE__ */ jsx(IconHex, {}) }),
    /* @__PURE__ */ jsx("div", { className: "logo-container", children: /* @__PURE__ */ jsx(IconLogo, {}) })
  ] }) });
  const ResumeLink = /* @__PURE__ */ jsx(
    "a",
    {
      className: "resume-button",
      href: "https://cdn.errhythm.me/resume.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Resume"
    }
  );
  return /* @__PURE__ */ jsx(StyledHeader, { scrollDirection, scrolledToTop, children: /* @__PURE__ */ jsx(StyledNav, { children: prefersReducedMotion ? /* @__PURE__ */ jsxs(Fragment, { children: [
    Logo,
    /* @__PURE__ */ jsxs(StyledLinks, { children: [
      /* @__PURE__ */ jsx("ol", { children: navLinks && navLinks.map(({ url, name }, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: url, children: name }) }, i)) }),
      /* @__PURE__ */ jsx("div", { children: ResumeLink })
    ] }),
    /* @__PURE__ */ jsx(Menu, {})
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TransitionGroup, { component: null, children: isMounted && /* @__PURE__ */ jsx(CSSTransition, { classNames: fadeClass, timeout, children: /* @__PURE__ */ jsx(Fragment, { children: Logo }) }) }),
    /* @__PURE__ */ jsxs(StyledLinks, { children: [
      /* @__PURE__ */ jsx("ol", { children: /* @__PURE__ */ jsx(TransitionGroup, { component: null, children: isMounted && navLinks && navLinks.map(({ url, name }, i) => /* @__PURE__ */ jsx(CSSTransition, { classNames: fadeDownClass, timeout, children: /* @__PURE__ */ jsx("li", { style: { transitionDelay: `${isHome ? i * 100 : 0}ms` }, children: /* @__PURE__ */ jsx("a", { href: url, children: name }) }, i) }, i)) }) }),
      /* @__PURE__ */ jsx(TransitionGroup, { component: null, children: isMounted && /* @__PURE__ */ jsx(CSSTransition, { classNames: fadeDownClass, timeout, children: /* @__PURE__ */ jsx("div", { style: { transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }, children: ResumeLink }) }) })
    ] }),
    /* @__PURE__ */ jsx(TransitionGroup, { component: null, children: isMounted && /* @__PURE__ */ jsx(CSSTransition, { classNames: fadeClass, timeout, children: /* @__PURE__ */ jsx(Menu, {}) }) })
  ] }) }) });
};
Nav.propTypes = {
  isHome: PropTypes.bool
};

export { $$BaseLayout as $, About as A, Contact as C, Email as E, Footer as F, Hero as H, Jobs as J, Loader as L, Nav as N, Projects as P, Social as S, Education as a, Featured as b, Publications as c };

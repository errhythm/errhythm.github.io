import{r as P_,R as We,a as k,g as $a,b as L_,c as fa}from"./index.DClyAtOV.js";var _u={exports:{}},Ds={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function M_(){if(Ld)return Ds;Ld=1;var e=P_(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,c,d){var m,v={},y=null,_=null;d!==void 0&&(y=""+d),c.key!==void 0&&(y=""+c.key),c.ref!==void 0&&(_=c.ref);for(m in c)s.call(c,m)&&!l.hasOwnProperty(m)&&(v[m]=c[m]);if(h&&h.defaultProps)for(m in c=h.defaultProps,c)v[m]===void 0&&(v[m]=c[m]);return{$$typeof:n,type:h,key:y,ref:_,props:v,_owner:o.current}}return Ds.Fragment=r,Ds.jsx=u,Ds.jsxs=u,Ds}var Md;function I_(){return Md||(Md=1,_u.exports=M_()),_u.exports}var g=I_(),at=function(){return at=Object.assign||function(n){for(var r,s=1,o=arguments.length;s<o;s++){r=arguments[s];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(n[l]=r[l])}return n},at.apply(this,arguments)};function Ks(e,n,r){if(r||arguments.length===2)for(var s=0,o=n.length,l;s<o;s++)(l||!(s in n))&&(l||(l=Array.prototype.slice.call(n,0,s)),l[s]=n[s]);return e.concat(l||Array.prototype.slice.call(n))}var Le="-ms-",zs="-moz-",Te="-webkit-",Rm="comm",Ua="rule",Ac="decl",D_="@import",Pm="@keyframes",k_="@layer",Lm=Math.abs,Cc=String.fromCharCode,Yu=Object.assign;function O_(e,n){return ot(e,0)^45?(((n<<2^ot(e,0))<<2^ot(e,1))<<2^ot(e,2))<<2^ot(e,3):0}function Mm(e){return e.trim()}function Zn(e,n){return(e=n.exec(e))?e[0]:e}function he(e,n,r){return e.replace(n,r)}function ya(e,n,r){return e.indexOf(n,r)}function ot(e,n){return e.charCodeAt(n)|0}function Fi(e,n,r){return e.slice(n,r)}function Rn(e){return e.length}function Im(e){return e.length}function Os(e,n){return n.push(e),e}function j_(e,n){return e.map(n).join("")}function Id(e,n){return e.filter(function(r){return!Zn(r,n)})}var Ha=1,Bi=1,Dm=0,cn=0,Xe=0,Hi="";function Ga(e,n,r,s,o,l,u,h){return{value:e,root:n,parent:r,type:s,props:o,children:l,line:Ha,column:Bi,length:u,return:"",siblings:h}}function Er(e,n){return Yu(Ga("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Pi(e){for(;e.root;)e=Er(e.root,{children:[e]});Os(e,e.siblings)}function N_(){return Xe}function F_(){return Xe=cn>0?ot(Hi,--cn):0,Bi--,Xe===10&&(Bi=1,Ha--),Xe}function _n(){return Xe=cn<Dm?ot(Hi,cn++):0,Bi++,Xe===10&&(Bi=1,Ha++),Xe}function ii(){return ot(Hi,cn)}function ba(){return cn}function Ka(e,n){return Fi(Hi,e,n)}function qu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B_(e){return Ha=Bi=1,Dm=Rn(Hi=e),cn=0,[]}function V_(e){return Hi="",e}function Tu(e){return Mm(Ka(cn-1,Xu(e===91?e+2:e===40?e+1:e)))}function z_(e){for(;(Xe=ii())&&Xe<33;)_n();return qu(e)>2||qu(Xe)>3?"":" "}function W_(e,n){for(;--n&&_n()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return Ka(e,ba()+(n<6&&ii()==32&&_n()==32))}function Xu(e){for(;_n();)switch(Xe){case e:return cn;case 34:case 39:e!==34&&e!==39&&Xu(Xe);break;case 40:e===41&&Xu(e);break;case 92:_n();break}return cn}function $_(e,n){for(;_n()&&e+Xe!==57;)if(e+Xe===84&&ii()===47)break;return"/*"+Ka(n,cn-1)+"*"+Cc(e===47?e:_n())}function U_(e){for(;!qu(ii());)_n();return Ka(e,cn)}function H_(e){return V_(wa("",null,null,null,[""],e=B_(e),0,[0],e))}function wa(e,n,r,s,o,l,u,h,c){for(var d=0,m=0,v=u,y=0,_=0,S=0,C=1,I=1,L=1,P=0,M="",z=o,j=l,B=s,$=M;I;)switch(S=P,P=_n()){case 40:if(S!=108&&ot($,v-1)==58){ya($+=he(Tu(P),"&","&\f"),"&\f",Lm(d?h[d-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:$+=Tu(P);break;case 9:case 10:case 13:case 32:$+=z_(S);break;case 92:$+=W_(ba()-1,7);continue;case 47:switch(ii()){case 42:case 47:Os(G_($_(_n(),ba()),n,r,c),c);break;default:$+="/"}break;case 123*C:h[d++]=Rn($)*L;case 125*C:case 59:case 0:switch(P){case 0:case 125:I=0;case 59+m:L==-1&&($=he($,/\f/g,"")),_>0&&Rn($)-v&&Os(_>32?kd($+";",s,r,v-1,c):kd(he($," ","")+";",s,r,v-2,c),c);break;case 59:$+=";";default:if(Os(B=Dd($,n,r,d,m,o,h,M,z=[],j=[],v,l),l),P===123)if(m===0)wa($,n,B,B,z,l,v,h,j);else switch(y===99&&ot($,3)===110?100:y){case 100:case 108:case 109:case 115:wa(e,B,B,s&&Os(Dd(e,B,B,0,0,o,h,M,o,z=[],v,j),j),o,j,v,h,s?z:j);break;default:wa($,B,B,B,[""],j,0,h,j)}}d=m=_=0,C=L=1,M=$="",v=u;break;case 58:v=1+Rn($),_=S;default:if(C<1){if(P==123)--C;else if(P==125&&C++==0&&F_()==125)continue}switch($+=Cc(P),P*C){case 38:L=m>0?1:($+="\f",-1);break;case 44:h[d++]=(Rn($)-1)*L,L=1;break;case 64:ii()===45&&($+=Tu(_n())),y=ii(),m=v=Rn(M=$+=U_(ba())),P++;break;case 45:S===45&&Rn($)==2&&(C=0)}}return l}function Dd(e,n,r,s,o,l,u,h,c,d,m,v){for(var y=o-1,_=o===0?l:[""],S=Im(_),C=0,I=0,L=0;C<s;++C)for(var P=0,M=Fi(e,y+1,y=Lm(I=u[C])),z=e;P<S;++P)(z=Mm(I>0?_[P]+" "+M:he(M,/&\f/g,_[P])))&&(c[L++]=z);return Ga(e,n,r,o===0?Ua:h,c,d,m,v)}function G_(e,n,r,s){return Ga(e,n,r,Rm,Cc(N_()),Fi(e,2,-2),0,s)}function kd(e,n,r,s,o){return Ga(e,n,r,Ac,Fi(e,0,s),Fi(e,s+1,-1),s,o)}function km(e,n,r){switch(O_(e,n)){case 5103:return Te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+e+e;case 4789:return zs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+e+zs+e+Le+e+e;case 5936:switch(ot(e,n+11)){case 114:return Te+e+Le+he(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Te+e+Le+he(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Te+e+Le+he(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Te+e+Le+e+e;case 6165:return Te+e+Le+"flex-"+e+e;case 5187:return Te+e+he(e,/(\w+).+(:[^]+)/,Te+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return Te+e+Le+"flex-item-"+he(e,/flex-|-self/g,"")+(Zn(e,/flex-|baseline/)?"":Le+"grid-row-"+he(e,/flex-|-self/g,""))+e;case 4675:return Te+e+Le+"flex-line-pack"+he(e,/align-content|flex-|-self/g,"")+e;case 5548:return Te+e+Le+he(e,"shrink","negative")+e;case 5292:return Te+e+Le+he(e,"basis","preferred-size")+e;case 6060:return Te+"box-"+he(e,"-grow","")+Te+e+Le+he(e,"grow","positive")+e;case 4554:return Te+he(e,/([^-])(transform)/g,"$1"+Te+"$2")+e;case 6187:return he(he(he(e,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),e,"")+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+e+e;case 4200:if(!Zn(e,/flex-|baseline/))return Le+"grid-column-align"+Fi(e,n)+e;break;case 2592:case 3360:return Le+he(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(s,o){return n=o,Zn(s.props,/grid-\w+-end/)})?~ya(e+(r=r[n].value),"span",0)?e:Le+he(e,"-start","")+e+Le+"grid-row-span:"+(~ya(r,"span",0)?Zn(r,/\d+/):+Zn(r,/\d+/)-+Zn(e,/\d+/))+";":Le+he(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(s){return Zn(s.props,/grid-\w+-start/)})?e:Le+he(he(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,Te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rn(e)-1-n>6)switch(ot(e,n+1)){case 109:if(ot(e,n+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+zs+(ot(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~ya(e,"stretch",0)?km(he(e,"stretch","fill-available"),n,r)+e:e}break;case 5152:case 5920:return he(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,l,u,h,c,d){return Le+o+":"+l+d+(u?Le+o+"-span:"+(h?c:+c-+l)+d:"")+e});case 4949:if(ot(e,n+6)===121)return he(e,":",":"+Te)+e;break;case 6444:switch(ot(e,ot(e,14)===45?18:11)){case 120:return he(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(ot(e,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+Le+"$2box$3")+e;case 100:return he(e,":",":"+Le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(e,"scroll-","scroll-snap-")+e}return e}function Ca(e,n){for(var r="",s=0;s<e.length;s++)r+=n(e[s],s,e,n)||"";return r}function K_(e,n,r,s){switch(e.type){case k_:if(e.children.length)break;case D_:case Ac:return e.return=e.return||e.value;case Rm:return"";case Pm:return e.return=e.value+"{"+Ca(e.children,s)+"}";case Ua:if(!Rn(e.value=e.props.join(",")))return""}return Rn(r=Ca(e.children,s))?e.return=e.value+"{"+r+"}":""}function Y_(e){var n=Im(e);return function(r,s,o,l){for(var u="",h=0;h<n;h++)u+=e[h](r,s,o,l)||"";return u}}function q_(e){return function(n){n.root||(n=n.return)&&e(n)}}function X_(e,n,r,s){if(e.length>-1&&!e.return)switch(e.type){case Ac:e.return=km(e.value,e.length,r);return;case Pm:return Ca([Er(e,{value:he(e.value,"@","@"+Te)})],s);case Ua:if(e.length)return j_(r=e.props,function(o){switch(Zn(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pi(Er(e,{props:[he(o,/:(read-\w+)/,":"+zs+"$1")]})),Pi(Er(e,{props:[o]})),Yu(e,{props:Id(r,s)});break;case"::placeholder":Pi(Er(e,{props:[he(o,/:(plac\w+)/,":"+Te+"input-$1")]})),Pi(Er(e,{props:[he(o,/:(plac\w+)/,":"+zs+"$1")]})),Pi(Er(e,{props:[he(o,/:(plac\w+)/,Le+"input-$1")]})),Pi(Er(e,{props:[o]})),Yu(e,{props:Id(r,s)});break}return""})}}var Z_={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ht={},Vi=typeof process<"u"&&Ht!==void 0&&(Ht.REACT_APP_SC_ATTR||Ht.SC_ATTR)||"data-styled",Om="active",jm="data-styled-version",Ya="6.1.18",Rc=`/*!sc*/
`,Ra=typeof window<"u"&&typeof document<"u",J_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==""?Ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.SC_DISABLE_SPEEDY!==void 0&&Ht.SC_DISABLE_SPEEDY!==""&&Ht.SC_DISABLE_SPEEDY!=="false"&&Ht.SC_DISABLE_SPEEDY),Q_={},qa=Object.freeze([]),zi=Object.freeze({});function Nm(e,n,r){return r===void 0&&(r=zi),e.theme!==r.theme&&e.theme||n||r.theme}var Fm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tT=/(^-|-$)/g;function Od(e){return e.replace(eT,"-").replace(tT,"")}var nT=/(a)(d)/gi,ha=52,jd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zu(e){var n,r="";for(n=Math.abs(e);n>ha;n=n/ha|0)r=jd(n%ha)+r;return(jd(n%ha)+r).replace(nT,"$1-$2")}var Su,Bm=5381,Ii=function(e,n){for(var r=n.length;r;)e=33*e^n.charCodeAt(--r);return e},Vm=function(e){return Ii(Bm,e)};function zm(e){return Zu(Vm(e)>>>0)}function rT(e){return e.displayName||e.name||"Component"}function Eu(e){return typeof e=="string"&&!0}var Wm=typeof Symbol=="function"&&Symbol.for,$m=Wm?Symbol.for("react.memo"):60115,iT=Wm?Symbol.for("react.forward_ref"):60112,sT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Um={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aT=((Su={})[iT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Su[$m]=Um,Su);function Nd(e){return("type"in(n=e)&&n.type.$$typeof)===$m?Um:"$$typeof"in e?aT[e.$$typeof]:sT;var n}var lT=Object.defineProperty,uT=Object.getOwnPropertyNames,Fd=Object.getOwnPropertySymbols,cT=Object.getOwnPropertyDescriptor,fT=Object.getPrototypeOf,Bd=Object.prototype;function Hm(e,n,r){if(typeof n!="string"){if(Bd){var s=fT(n);s&&s!==Bd&&Hm(e,s,r)}var o=uT(n);Fd&&(o=o.concat(Fd(n)));for(var l=Nd(e),u=Nd(n),h=0;h<o.length;++h){var c=o[h];if(!(c in oT||r&&r[c]||u&&c in u||l&&c in l)){var d=cT(n,c);try{lT(e,c,d)}catch{}}}}return e}function ai(e){return typeof e=="function"}function Pc(e){return typeof e=="object"&&"styledComponentId"in e}function ti(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Ju(e,n){if(e.length===0)return"";for(var r=e[0],s=1;s<e.length;s++)r+=e[s];return r}function Ys(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qu(e,n,r){if(r===void 0&&(r=!1),!r&&!Ys(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var s=0;s<n.length;s++)e[s]=Qu(e[s],n[s]);else if(Ys(n))for(var s in n)e[s]=Qu(e[s],n[s]);return e}function Lc(e,n){Object.defineProperty(e,"toString",{value:n})}function li(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var hT=(function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var r=0,s=0;s<n;s++)r+=this.groupSizes[s];return r},e.prototype.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,l=o;n>=l;)if((l<<=1)<0)throw li(16,"".concat(n));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var h=this.indexOfGroup(n+1),c=(u=0,r.length);u<c;u++)this.tag.insertRule(h,r[u])&&(this.groupSizes[n]++,h++)},e.prototype.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],s=this.indexOfGroup(n),o=s+r;this.groupSizes[n]=0;for(var l=s;l<o;l++)this.tag.deleteRule(s)}},e.prototype.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var s=this.groupSizes[n],o=this.indexOfGroup(n),l=o+s,u=o;u<l;u++)r+="".concat(this.tag.getRule(u)).concat(Rc);return r},e})(),_a=new Map,Pa=new Map,Ta=1,da=function(e){if(_a.has(e))return _a.get(e);for(;Pa.has(Ta);)Ta++;var n=Ta++;return _a.set(e,n),Pa.set(n,e),n},dT=function(e,n){Ta=n+1,_a.set(e,n),Pa.set(n,e)},pT="style[".concat(Vi,"][").concat(jm,'="').concat(Ya,'"]'),mT=new RegExp("^".concat(Vi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gT=function(e,n,r){for(var s,o=r.split(","),l=0,u=o.length;l<u;l++)(s=o[l])&&e.registerName(n,s)},vT=function(e,n){for(var r,s=((r=n.textContent)!==null&&r!==void 0?r:"").split(Rc),o=[],l=0,u=s.length;l<u;l++){var h=s[l].trim();if(h){var c=h.match(mT);if(c){var d=0|parseInt(c[1],10),m=c[2];d!==0&&(dT(m,d),gT(e,m,c[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(h)}}},Vd=function(e){for(var n=document.querySelectorAll(pT),r=0,s=n.length;r<s;r++){var o=n[r];o&&o.getAttribute(Vi)!==Om&&(vT(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function xT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Gm=function(e){var n=document.head,r=e||n,s=document.createElement("style"),o=(function(h){var c=Array.from(h.querySelectorAll("style[".concat(Vi,"]")));return c[c.length-1]})(r),l=o!==void 0?o.nextSibling:null;s.setAttribute(Vi,Om),s.setAttribute(jm,Ya);var u=xT();return u&&s.setAttribute("nonce",u),r.insertBefore(s,l),s},yT=(function(){function e(n){this.element=Gm(n),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var u=s[o];if(u.ownerNode===r)return u}throw li(17)})(this.element),this.length=0}return e.prototype.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var r=this.sheet.cssRules[n];return r&&r.cssText?r.cssText:""},e})(),bT=(function(){function e(n){this.element=Gm(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,r){if(n<=this.length&&n>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e})(),wT=(function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e})(),zd=Ra,_T={isServer:!Ra,useCSSOMInjection:!J_},La=(function(){function e(n,r,s){n===void 0&&(n=zi),r===void 0&&(r={});var o=this;this.options=at(at({},_T),n),this.gs=r,this.names=new Map(s),this.server=!!n.isServer,!this.server&&Ra&&zd&&(zd=!1,Vd(this)),Lc(this,function(){return(function(l){for(var u=l.getTag(),h=u.length,c="",d=function(v){var y=(function(L){return Pa.get(L)})(v);if(y===void 0)return"continue";var _=l.names.get(y),S=u.getGroup(v);if(_===void 0||!_.size||S.length===0)return"continue";var C="".concat(Vi,".g").concat(v,'[id="').concat(y,'"]'),I="";_!==void 0&&_.forEach(function(L){L.length>0&&(I+="".concat(L,","))}),c+="".concat(S).concat(C,'{content:"').concat(I,'"}').concat(Rc)},m=0;m<h;m++)d(m);return c})(o)})}return e.registerId=function(n){return da(n)},e.prototype.rehydrate=function(){!this.server&&Ra&&Vd(this)},e.prototype.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(at(at({},this.options),n),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=(function(r){var s=r.useCSSOMInjection,o=r.target;return r.isServer?new wT(o):s?new yT(o):new bT(o)})(this.options),new hT(n)));var n},e.prototype.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.prototype.registerName=function(n,r){if(da(n),this.names.has(n))this.names.get(n).add(r);else{var s=new Set;s.add(r),this.names.set(n,s)}},e.prototype.insertRules=function(n,r,s){this.registerName(n,r),this.getTag().insertRules(da(n),s)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(da(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e})(),TT=/&/g,ST=/^\s*\/\/.*$/gm;function Km(e,n){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(n," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(n," ")),r.props=r.props.map(function(s){return"".concat(n," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Km(r.children,n)),r})}function ET(e){var n,r,s,o=zi,l=o.options,u=l===void 0?zi:l,h=o.plugins,c=h===void 0?qa:h,d=function(y,_,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(n):y},m=c.slice();m.push(function(y){y.type===Ua&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(TT,r).replace(s,d))}),u.prefix&&m.push(X_),m.push(K_);var v=function(y,_,S,C){_===void 0&&(_=""),S===void 0&&(S=""),C===void 0&&(C="&"),n=C,r=_,s=new RegExp("\\".concat(r,"\\b"),"g");var I=y.replace(ST,""),L=H_(S||_?"".concat(S," ").concat(_," { ").concat(I," }"):I);u.namespace&&(L=Km(L,u.namespace));var P=[];return Ca(L,Y_(m.concat(q_(function(M){return P.push(M)})))),P};return v.hash=c.length?c.reduce(function(y,_){return _.name||li(15),Ii(y,_.name)},Bm).toString():"",v}var AT=new La,ec=ET(),Ym=We.createContext({shouldForwardProp:void 0,styleSheet:AT,stylis:ec});Ym.Consumer;We.createContext(void 0);function tc(){return k.useContext(Ym)}var CT=(function(){function e(n,r){var s=this;this.inject=function(o,l){l===void 0&&(l=ec);var u=s.name+l.hash;o.hasNameForId(s.id,u)||o.insertRules(s.id,u,l(s.rules,u,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=r,Lc(this,function(){throw li(12,String(s.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=ec),this.name+n.hash},e})(),RT=function(e){return e>="A"&&e<="Z"};function Wd(e){for(var n="",r=0;r<e.length;r++){var s=e[r];if(r===1&&s==="-"&&e[0]==="-")return e;RT(s)?n+="-"+s.toLowerCase():n+=s}return n.startsWith("ms-")?"-"+n:n}var qm=function(e){return e==null||e===!1||e===""},Xm=function(e){var n,r,s=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!qm(l)&&(Array.isArray(l)&&l.isCss||ai(l)?s.push("".concat(Wd(o),":"),l,";"):Ys(l)?s.push.apply(s,Ks(Ks(["".concat(o," {")],Xm(l),!1),["}"],!1)):s.push("".concat(Wd(o),": ").concat((n=o,(r=l)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||n in Z_||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function Cr(e,n,r,s){if(qm(e))return[];if(Pc(e))return[".".concat(e.styledComponentId)];if(ai(e)){if(!ai(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return[e];var o=e(n);return Cr(o,n,r,s)}var l;return e instanceof CT?r?(e.inject(r,s),[e.getName(s)]):[e]:Ys(e)?Xm(e):Array.isArray(e)?Array.prototype.concat.apply(qa,e.map(function(u){return Cr(u,n,r,s)})):[e.toString()]}function Zm(e){for(var n=0;n<e.length;n+=1){var r=e[n];if(ai(r)&&!Pc(r))return!1}return!0}var PT=Vm(Ya),LT=(function(){function e(n,r,s){this.rules=n,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Zm(n),this.componentId=r,this.baseHash=Ii(PT,r),this.baseStyle=s,La.registerId(r)}return e.prototype.generateAndInjectStyles=function(n,r,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=ti(o,this.staticRulesId);else{var l=Ju(Cr(this.rules,n,r,s)),u=Zu(Ii(this.baseHash,l)>>>0);if(!r.hasNameForId(this.componentId,u)){var h=s(l,".".concat(u),void 0,this.componentId);r.insertRules(this.componentId,u,h)}o=ti(o,u),this.staticRulesId=u}else{for(var c=Ii(this.baseHash,s.hash),d="",m=0;m<this.rules.length;m++){var v=this.rules[m];if(typeof v=="string")d+=v;else if(v){var y=Ju(Cr(v,n,r,s));c=Ii(c,y+m),d+=y}}if(d){var _=Zu(c>>>0);r.hasNameForId(this.componentId,_)||r.insertRules(this.componentId,_,s(d,".".concat(_),void 0,this.componentId)),o=ti(o,_)}}return o},e})(),qs=We.createContext(void 0);qs.Consumer;function qP(e){var n=We.useContext(qs),r=k.useMemo(function(){return(function(s,o){if(!s)throw li(14);if(ai(s)){var l=s(o);return l}if(Array.isArray(s)||typeof s!="object")throw li(8);return o?at(at({},o),s):s})(e.theme,n)},[e.theme,n]);return e.children?We.createElement(qs.Provider,{value:r},e.children):null}var Au={};function MT(e,n,r){var s=Pc(e),o=e,l=!Eu(e),u=n.attrs,h=u===void 0?qa:u,c=n.componentId,d=c===void 0?(function(z,j){var B=typeof z!="string"?"sc":Od(z);Au[B]=(Au[B]||0)+1;var $="".concat(B,"-").concat(zm(Ya+B+Au[B]));return j?"".concat(j,"-").concat($):$})(n.displayName,n.parentComponentId):c,m=n.displayName,v=m===void 0?(function(z){return Eu(z)?"styled.".concat(z):"Styled(".concat(rT(z),")")})(e):m,y=n.displayName&&n.componentId?"".concat(Od(n.displayName),"-").concat(n.componentId):n.componentId||d,_=s&&o.attrs?o.attrs.concat(h).filter(Boolean):h,S=n.shouldForwardProp;if(s&&o.shouldForwardProp){var C=o.shouldForwardProp;if(n.shouldForwardProp){var I=n.shouldForwardProp;S=function(z,j){return C(z,j)&&I(z,j)}}else S=C}var L=new LT(r,y,s?o.componentStyle:void 0);function P(z,j){return(function(B,$,U){var ce=B.attrs,H=B.componentStyle,J=B.defaultProps,Ce=B.foldedComponentIds,De=B.styledComponentId,St=B.target,Yt=We.useContext(qs),Tn=tc(),me=B.shouldForwardProp||Tn.shouldForwardProp,be=Nm($,Yt,J)||zi,ke=(function(ut,Et,sr){for(var Dt,vt=at(at({},Et),{className:void 0,theme:sr}),or=0;or<ut.length;or+=1){var fn=ai(Dt=ut[or])?Dt(vt):Dt;for(var xt in fn)vt[xt]=xt==="className"?ti(vt[xt],fn[xt]):xt==="style"?at(at({},vt[xt]),fn[xt]):fn[xt]}return Et.className&&(vt.className=ti(vt.className,Et.className)),vt})(ce,$,be),Ze=ke.as||St,Be={};for(var lt in ke)ke[lt]===void 0||lt[0]==="$"||lt==="as"||lt==="theme"&&ke.theme===be||(lt==="forwardedAs"?Be.as=ke.forwardedAs:me&&!me(lt,Ze)||(Be[lt]=ke[lt]));var Mt=(function(ut,Et){var sr=tc(),Dt=ut.generateAndInjectStyles(Et,sr.styleSheet,sr.stylis);return Dt})(H,ke),It=ti(Ce,De);return Mt&&(It+=" "+Mt),ke.className&&(It+=" "+ke.className),Be[Eu(Ze)&&!Fm.has(Ze)?"class":"className"]=It,U&&(Be.ref=U),k.createElement(Ze,Be)})(M,z,j)}P.displayName=v;var M=We.forwardRef(P);return M.attrs=_,M.componentStyle=L,M.displayName=v,M.shouldForwardProp=S,M.foldedComponentIds=s?ti(o.foldedComponentIds,o.styledComponentId):"",M.styledComponentId=y,M.target=s?o.target:e,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=s?(function(j){for(var B=[],$=1;$<arguments.length;$++)B[$-1]=arguments[$];for(var U=0,ce=B;U<ce.length;U++)Qu(j,ce[U],!0);return j})({},o.defaultProps,z):z}}),Lc(M,function(){return".".concat(M.styledComponentId)}),l&&Hm(M,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function $d(e,n){for(var r=[e[0]],s=0,o=n.length;s<o;s+=1)r.push(n[s],e[s+1]);return r}var Ud=function(e){return Object.assign(e,{isCss:!0})};function st(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(ai(e)||Ys(e))return Ud(Cr($d(qa,Ks([e],n,!0))));var s=e;return n.length===0&&s.length===1&&typeof s[0]=="string"?Cr(s):Ud(Cr($d(s,n)))}function nc(e,n,r){if(r===void 0&&(r=zi),!n)throw li(1,n);var s=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(n,r,st.apply(void 0,Ks([o],l,!1)))};return s.attrs=function(o){return nc(e,n,at(at({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return nc(e,n,at(at({},r),o))},s}var Jm=function(e){return nc(MT,e)},ie=Jm;Fm.forEach(function(e){ie[e]=Jm(e)});var IT=(function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Zm(n),La.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,r,s,o){var l=o(Ju(Cr(this.rules,r,s,o)),""),u=this.componentId+n;s.insertRules(u,u,l)},e.prototype.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,r,s,o){n>2&&La.registerId(this.componentId+n),this.removeStyles(n,s),this.createStyles(n,r,s,o)},e})();function DT(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var s=st.apply(void 0,Ks([e],n,!1)),o="sc-global-".concat(zm(JSON.stringify(s))),l=new IT(s,o),u=function(c){var d=tc(),m=We.useContext(qs),v=We.useRef(d.styleSheet.allocateGSInstance(o)).current;return d.styleSheet.server&&h(v,c,d.styleSheet,m,d.stylis),We.useLayoutEffect(function(){if(!d.styleSheet.server)return h(v,c,d.styleSheet,m,d.stylis),function(){return l.removeStyles(v,d.styleSheet)}},[v,c,d.styleSheet,m,d.stylis]),null};function h(c,d,m,v,y){if(l.isStatic)l.renderStyles(c,Q_,m,y);else{var _=at(at({},d),{theme:Nm(d,v,u.defaultProps)});l.renderStyles(c,_,m,y)}}return We.memo(u)}const kT=st`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--green);
    transform: translate(-5px, -5px);
  }
  &:after {
    display: none !important;
  }
`,OT={flexCenter:st`
    display: flex;
    justify-content: center;
    align-items: center;
  `,flexBetween:st`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,link:st`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
      outline: 0;
    }
  `,inlineLink:st`
    display: inline-block;
    position: relative;
    color: var(--green);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--green);
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,button:kT,smallButton:st`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 3px 3px 0 0 var(--green);
      transform: translate(-4px, -4px);
    }
    &:after {
      display: none !important;
    }
  `,bigButton:st`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--green);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `,boxShadow:st`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  `,fancyList:st`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  `,resetList:st`
    list-style: none;
    padding: 0;
    margin: 0;
  `},XP={bp:{mobileS:"max-width: 330px",mobileM:"max-width: 400px",mobileL:"max-width: 480px",tabletS:"max-width: 600px",tabletL:"max-width: 768px",desktopXS:"max-width: 900px",desktopS:"max-width: 1080px",desktopM:"max-width: 1200px",desktopL:"max-width: 1400px"},mixins:OT},jT="/_astro/Calibre-Regular.-1hlrhWf.woff",NT="/_astro/Calibre-Regular.BF8rtuU2.woff2",FT="/_astro/Calibre-Medium.CLLEtnc8.woff",BT="/_astro/Calibre-Medium.Dr3uPw4d.woff2",VT="/_astro/Calibre-Semibold.4458Tx-4.woff",zT="/_astro/Calibre-Semibold.ctWswtER.woff2",WT="/_astro/Calibre-RegularItalic.CjzLnpHV.woff",$T="/_astro/Calibre-RegularItalic.iX0Te0iB.woff2",UT="/_astro/Calibre-MediumItalic.BO9nraGd.woff",HT="/_astro/Calibre-MediumItalic.bP60ilMe.woff2",GT="/_astro/Calibre-SemiboldItalic.27xyafhv.woff",KT="/_astro/Calibre-SemiboldItalic.bSpOXIzM.woff2",YT="/_astro/SFMono-Regular.pHQ7OiT5.woff",qT="/_astro/SFMono-Regular.CefSygqP.woff2",XT="/_astro/SFMono-Semibold.GntYHmax.woff",ZT="/_astro/SFMono-Semibold.Cbwo1XB1.woff2",JT="/_astro/SFMono-RegularItalic.D-2lWrQW.woff",QT="/_astro/SFMono-RegularItalic.Bqi1mbuH.woff2",eS="/_astro/SFMono-SemiboldItalic.DwkXiFFS.woff",tS="/_astro/SFMono-SemiboldItalic.dYysnNTL.woff2",nS={400:[jT,NT],500:[FT,BT],600:[VT,zT]},rS={400:[WT,$T],500:[UT,HT],600:[GT,KT]},iS={400:[YT,qT],600:[XT,ZT]},sS={400:[JT,QT],600:[eS,tS]},Qm={name:"Calibre",normal:nS,italic:rS},eg={name:"SF Mono",normal:iS,italic:sS},Xa=(e,n="normal")=>{let r="";for(const[s,o]of Object.entries(e[n])){const l=o[0],u=o[1];r+=`
      @font-face {
        font-family: '${e.name}';
        src: url(${u}) format('woff2'),
            url(${l}) format('woff');
        font-weight: ${s};
        font-style: ${n};
        font-display: swap;
      }
    `}return r},oS=Xa(Qm),aS=Xa(Qm,"italic"),lS=Xa(eg),uS=Xa(eg,"italic"),cS=st`
  ${oS+aS+lS+uS}
`,fS=st`
  :root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`,hS=st`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }
`,Lt={bg:"#112340",lineHighlight:"#1d2d50",blue:"#5ccfe6",purple:"#c3a6ff",green:"#bae67e",yellow:"#ffd580",orange:"#ffae57",red:"#ef6b73",grey:"#a2aabc",comment:"#8695b799"},dS=st`
  /**
  * Add back the container background-color, border-radius, padding, margin
  * and overflow that we removed from <pre>.
  */
  .gatsby-highlight {
    background-color: ${Lt.bg};
    color: ${Lt.grey};
    border-radius: var(--border-radius);
    margin: 2em 0;
    padding: 1.25em;
    overflow: auto;
    position: relative;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .gatsby-highlight code[class*='language-'],
  .gatsby-highlight pre[class*='language-'] {
    height: auto !important;
    font-size: var(--fz-sm);
    line-height: 1.5;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 2;
    hyphens: none;
  }

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
    padding-top: 2em;
  }

  /* File names */
  .gatsby-code-title {
    padding: 1em 1.5em;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    background-color: ${Lt.bg};
    color: ${Lt.grey};
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom: 1px solid ${Lt.lineHighlight};

    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  /* Line highlighting */
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${Lt.lineHighlight};
    border-left: 2px solid var(--green);
    padding-left: calc(1em + 2px);
    padding-right: 1em;
    margin-right: -1.35em;
    margin-left: -1.35em;
  }

  /* Language badges */
  .gatsby-highlight pre[class*='language-']::before {
    background: var(--lightest-navy);
    color: var(--white);
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 0 0 3px 3px;
    position: absolute;
    top: 0;
    left: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
  .gatsby-highlight pre[class='language-javascript']::before {
    content: 'js';
  }
  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
  }
  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
  }
  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'GraphQL';
  }
  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
  }
  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
  }
  .gatsby-highlight pre[class='language-mdx']::before {
    content: 'mdx';
  }
  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
  }
  .gatsby-highlight pre[class='language-sh']::before {
    content: 'sh';
  }
  .gatsby-highlight pre[class='language-bash']::before {
    content: 'bash';
  }
  .gatsby-highlight pre[class='language-yaml']::before {
    content: 'yaml';
  }
  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'md';
  }
  .gatsby-highlight pre[class='language-json']::before,
  .gatsby-highlight pre[class='language-json5']::before {
    content: 'json';
  }
  .gatsby-highlight pre[class='language-diff']::before {
    content: 'diff';
  }
  .gatsby-highlight pre[class='language-text']::before {
    content: 'text';
  }
  .gatsby-highlight pre[class='language-flow']::before {
    content: 'flow';
  }

  /* Prism Styles */
  .token {
    display: inline;
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${Lt.comment};
  }
  .token.punctuation {
    color: ${Lt.grey};
  }
  .token.namespace,
  .token.deleted {
    color: ${Lt.red};
  }
  .token.function-name,
  .token.function,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${Lt.yellow};
  }
  .token.attr-name,
  .token.operator,
  .token.rule {
    color: ${Lt.orange};
  }
  .token.keyword,
  .token.boolean,
  .token.number,
  .token.property {
    color: ${Lt.purple};
  }
  .token.tag,
  .token.selector,
  .token.important,
  .token.atrule,
  .token.builtin,
  .token.entity,
  .token.url {
    color: ${Lt.blue};
  }
  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable,
  .token.inserted {
    color: ${Lt.green};
  }
  .token.important,
  .token.bold {
    font-weight: 600;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .namespace {
    opacity: 0.7;
  }
`,ZP=DT`
  ${cS};
  ${fS};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--navy);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--green);
    }

    &.inline-link {
      ${({theme:e})=>e.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({theme:e})=>e.mixins.inlineLink};
    }

    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--green);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    ${({theme:e})=>e.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:hover,
    &:focus {
      background-color: var(--green);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
      box-shadow: none;
      transform: none;
    }
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({theme:e})=>e.mixins.inlineLink};
      line-height: 1.5;
    }

    .tag {
      display: inline-block;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--green);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({theme:e})=>e.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  #cursor-spotlight {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    transition: background 0.3s ease;
  }

  ${hS};

  ${dS};
`;var Cu={exports:{}},Ru,Hd;function pS(){if(Hd)return Ru;Hd=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ru=e,Ru}var Pu,Gd;function mS(){if(Gd)return Pu;Gd=1;var e=pS();function n(){}function r(){}return r.resetWarningCache=n,Pu=function(){function s(u,h,c,d,m,v){if(v!==e){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:n};return l.PropTypes=l,l},Pu}var Kd;function gS(){return Kd||(Kd=1,Cu.exports=mS()()),Cu.exports}var vS=gS();const Qn=$a(vS);function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Ma.apply(null,arguments)}function Mc(e,n){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function rc(e,n){return rc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},rc(e,n)}function Ic(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,rc(e,n)}function xS(e,n){return e.classList?!!n&&e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function yS(e,n){e.classList?e.classList.add(n):xS(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function Yd(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function bS(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=Yd(e.className,n):e.setAttribute("class",Yd(e.className&&e.className.baseVal||"",n))}var wS=L_();const pa=$a(wS),qd={disabled:!1},Ia=We.createContext(null);var tg=function(n){return n.scrollTop},js="unmounted",Xr="exited",Zr="entering",Mi="entered",ic="exiting",ir=(function(e){Ic(n,e);function n(s,o){var l;l=e.call(this,s,o)||this;var u=o,h=u&&!u.isMounting?s.enter:s.appear,c;return l.appearStatus=null,s.in?h?(c=Xr,l.appearStatus=Zr):c=Mi:s.unmountOnExit||s.mountOnEnter?c=js:c=Xr,l.state={status:c},l.nextCallback=null,l}n.getDerivedStateFromProps=function(o,l){var u=o.in;return u&&l.status===js?{status:Xr}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(o){var l=null;if(o!==this.props){var u=this.state.status;this.props.in?u!==Zr&&u!==Mi&&(l=Zr):(u===Zr||u===Mi)&&(l=ic)}this.updateStatus(!1,l)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var o=this.props.timeout,l,u,h;return l=u=h=o,o!=null&&typeof o!="number"&&(l=o.exit,u=o.enter,h=o.appear!==void 0?o.appear:u),{exit:l,enter:u,appear:h}},r.updateStatus=function(o,l){if(o===void 0&&(o=!1),l!==null)if(this.cancelNextCallback(),l===Zr){if(this.props.unmountOnExit||this.props.mountOnEnter){var u=this.props.nodeRef?this.props.nodeRef.current:pa.findDOMNode(this);u&&tg(u)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Xr&&this.setState({status:js})},r.performEnter=function(o){var l=this,u=this.props.enter,h=this.context?this.context.isMounting:o,c=this.props.nodeRef?[h]:[pa.findDOMNode(this),h],d=c[0],m=c[1],v=this.getTimeouts(),y=h?v.appear:v.enter;if(!o&&!u||qd.disabled){this.safeSetState({status:Mi},function(){l.props.onEntered(d)});return}this.props.onEnter(d,m),this.safeSetState({status:Zr},function(){l.props.onEntering(d,m),l.onTransitionEnd(y,function(){l.safeSetState({status:Mi},function(){l.props.onEntered(d,m)})})})},r.performExit=function(){var o=this,l=this.props.exit,u=this.getTimeouts(),h=this.props.nodeRef?void 0:pa.findDOMNode(this);if(!l||qd.disabled){this.safeSetState({status:Xr},function(){o.props.onExited(h)});return}this.props.onExit(h),this.safeSetState({status:ic},function(){o.props.onExiting(h),o.onTransitionEnd(u.exit,function(){o.safeSetState({status:Xr},function(){o.props.onExited(h)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(o,l){l=this.setNextCallback(l),this.setState(o,l)},r.setNextCallback=function(o){var l=this,u=!0;return this.nextCallback=function(h){u&&(u=!1,l.nextCallback=null,o(h))},this.nextCallback.cancel=function(){u=!1},this.nextCallback},r.onTransitionEnd=function(o,l){this.setNextCallback(l);var u=this.props.nodeRef?this.props.nodeRef.current:pa.findDOMNode(this),h=o==null&&!this.props.addEndListener;if(!u||h){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[u,this.nextCallback],d=c[0],m=c[1];this.props.addEndListener(d,m)}o!=null&&setTimeout(this.nextCallback,o)},r.render=function(){var o=this.state.status;if(o===js)return null;var l=this.props,u=l.children;l.in,l.mountOnEnter,l.unmountOnExit,l.appear,l.enter,l.exit,l.timeout,l.addEndListener,l.onEnter,l.onEntering,l.onEntered,l.onExit,l.onExiting,l.onExited,l.nodeRef;var h=Mc(l,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return We.createElement(Ia.Provider,{value:null},typeof u=="function"?u(o,h):We.cloneElement(We.Children.only(u),h))},n})(We.Component);ir.contextType=Ia;ir.propTypes={};function Li(){}ir.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Li,onEntering:Li,onEntered:Li,onExit:Li,onExiting:Li,onExited:Li};ir.UNMOUNTED=js;ir.EXITED=Xr;ir.ENTERING=Zr;ir.ENTERED=Mi;ir.EXITING=ic;var _S=function(n,r){return n&&r&&r.split(" ").forEach(function(s){return yS(n,s)})},Lu=function(n,r){return n&&r&&r.split(" ").forEach(function(s){return bS(n,s)})},wn=(function(e){Ic(n,e);function n(){for(var s,o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return s=e.call.apply(e,[this].concat(l))||this,s.appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(h,c){var d=s.resolveArguments(h,c),m=d[0],v=d[1];s.removeClasses(m,"exit"),s.addClass(m,v?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(h,c)},s.onEntering=function(h,c){var d=s.resolveArguments(h,c),m=d[0],v=d[1],y=v?"appear":"enter";s.addClass(m,y,"active"),s.props.onEntering&&s.props.onEntering(h,c)},s.onEntered=function(h,c){var d=s.resolveArguments(h,c),m=d[0],v=d[1],y=v?"appear":"enter";s.removeClasses(m,y),s.addClass(m,y,"done"),s.props.onEntered&&s.props.onEntered(h,c)},s.onExit=function(h){var c=s.resolveArguments(h),d=c[0];s.removeClasses(d,"appear"),s.removeClasses(d,"enter"),s.addClass(d,"exit","base"),s.props.onExit&&s.props.onExit(h)},s.onExiting=function(h){var c=s.resolveArguments(h),d=c[0];s.addClass(d,"exit","active"),s.props.onExiting&&s.props.onExiting(h)},s.onExited=function(h){var c=s.resolveArguments(h),d=c[0];s.removeClasses(d,"exit"),s.addClass(d,"exit","done"),s.props.onExited&&s.props.onExited(h)},s.resolveArguments=function(h,c){return s.props.nodeRef?[s.props.nodeRef.current,h]:[h,c]},s.getClassNames=function(h){var c=s.props.classNames,d=typeof c=="string",m=d&&c?c+"-":"",v=d?""+m+h:c[h],y=d?v+"-active":c[h+"Active"],_=d?v+"-done":c[h+"Done"];return{baseClassName:v,activeClassName:y,doneClassName:_}},s}var r=n.prototype;return r.addClass=function(o,l,u){var h=this.getClassNames(l)[u+"ClassName"],c=this.getClassNames("enter"),d=c.doneClassName;l==="appear"&&u==="done"&&d&&(h+=" "+d),u==="active"&&o&&tg(o),h&&(this.appliedClasses[l][u]=h,_S(o,h))},r.removeClasses=function(o,l){var u=this.appliedClasses[l],h=u.base,c=u.active,d=u.done;this.appliedClasses[l]={},h&&Lu(o,h),c&&Lu(o,c),d&&Lu(o,d)},r.render=function(){var o=this.props;o.classNames;var l=Mc(o,["classNames"]);return We.createElement(ir,Ma({},l,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n})(We.Component);wn.defaultProps={classNames:""};wn.propTypes={};function TS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Dc(e,n){var r=function(l){return n&&k.isValidElement(l)?n(l):l},s=Object.create(null);return e&&k.Children.map(e,function(o){return o}).forEach(function(o){s[o.key]=r(o)}),s}function SS(e,n){e=e||{},n=n||{};function r(m){return m in n?n[m]:e[m]}var s=Object.create(null),o=[];for(var l in e)l in n?o.length&&(s[l]=o,o=[]):o.push(l);var u,h={};for(var c in n){if(s[c])for(u=0;u<s[c].length;u++){var d=s[c][u];h[s[c][u]]=r(d)}h[c]=r(c)}for(u=0;u<o.length;u++)h[o[u]]=r(o[u]);return h}function ni(e,n,r){return r[n]!=null?r[n]:e.props[n]}function ES(e,n){return Dc(e.children,function(r){return k.cloneElement(r,{onExited:n.bind(null,r),in:!0,appear:ni(r,"appear",e),enter:ni(r,"enter",e),exit:ni(r,"exit",e)})})}function AS(e,n,r){var s=Dc(e.children),o=SS(n,s);return Object.keys(o).forEach(function(l){var u=o[l];if(k.isValidElement(u)){var h=l in n,c=l in s,d=n[l],m=k.isValidElement(d)&&!d.props.in;c&&(!h||m)?o[l]=k.cloneElement(u,{onExited:r.bind(null,u),in:!0,exit:ni(u,"exit",e),enter:ni(u,"enter",e)}):!c&&h&&!m?o[l]=k.cloneElement(u,{in:!1}):c&&h&&k.isValidElement(d)&&(o[l]=k.cloneElement(u,{onExited:r.bind(null,u),in:d.props.in,exit:ni(u,"exit",e),enter:ni(u,"enter",e)}))}}),o}var CS=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},RS={component:"div",childFactory:function(n){return n}},Jn=(function(e){Ic(n,e);function n(s,o){var l;l=e.call(this,s,o)||this;var u=l.handleExited.bind(TS(l));return l.state={contextValue:{isMounting:!0},handleExited:u,firstRender:!0},l}var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(o,l){var u=l.children,h=l.handleExited,c=l.firstRender;return{children:c?ES(o,h):AS(o,u,h),firstRender:!1}},r.handleExited=function(o,l){var u=Dc(this.props.children);o.key in u||(o.props.onExited&&o.props.onExited(l),this.mounted&&this.setState(function(h){var c=Ma({},h.children);return delete c[o.key],{children:c}}))},r.render=function(){var o=this.props,l=o.component,u=o.childFactory,h=Mc(o,["component","childFactory"]),c=this.state.contextValue,d=CS(this.state.children).map(u);return delete h.appear,delete h.enter,delete h.exit,l===null?We.createElement(Ia.Provider,{value:c},d):We.createElement(Ia.Provider,{value:c},We.createElement(l,h,d))},n})(We.Component);Jn.propTypes={};Jn.defaultProps=RS;const sc="errhythm.me@gmail.com",Da=[{name:"GitHub",url:"https://github.com/errhythm"},{name:"Twitter",url:"https://twitter.com/errhythm"},{name:"Linkedin",url:"https://www.linkedin.com/in/errhythm"},{name:"Orcid",url:"https://orcid.org/0000-0002-4641-508X"}],ei=[{name:"About",url:"/#about"},{name:"Experience",url:"/#jobs"},{name:"Education",url:"/#education"},{name:"Work",url:"/#projects"},{name:"Publications",url:"/#publications"},{name:"Contact",url:"/#contact"},{name:"Blog",url:"/blog"}],ln=(e=200,n=.25)=>({origin:"bottom",distance:"20px",duration:500,delay:e,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",mobile:!0,reset:!1,useDelay:"always",viewFactor:n,viewOffset:{top:0,right:0,bottom:0,left:0}}),PS=1e3,ka=2e3,si={ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ESCAPE:"Escape",ESCAPE_IE11:"Esc",TAB:"Tab"},LS=(e,n)=>{k.useEffect(()=>{const r=s=>{!e.current||e.current.contains(s.target)||n(s)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[e,n])},ng="(prefers-reduced-motion: no-preference)",MS=typeof window>"u",IS=()=>MS?!0:!window.matchMedia(ng).matches;function Dn(){const[e,n]=k.useState(IS);return k.useEffect(()=>{const r=window.matchMedia(ng),s=o=>{n(!o.matches)};return r.addListener(s),()=>{r.removeListener(s)}},[]),e}const DS="up",kS="down",OS=({initialDirection:e,thresholdPixels:n,off:r}={})=>{const[s,o]=k.useState(e);return k.useEffect(()=>{const l=n||0;let u=window.pageYOffset,h=!1;const c=()=>{const m=window.pageYOffset;if(Math.abs(m-u)<l){h=!1;return}o(m>u?kS:DS),u=m>0?m:0,h=!1},d=()=>{h||(window.requestAnimationFrame(c),h=!0)};return r?o(e):window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[e,n,r]),s},jS=e=>{const[n,r]=k.useState(!1);return k.useEffect(()=>{const s=window.matchMedia(e);s.matches!==n&&r(s.matches);const o=()=>r(s.matches);return s.addListener(o),()=>s.removeListener(o)},[n,e]),n};var rg={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},kc={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},NS=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Oa={CSS:{},springs:{}};function Pn(e,n,r){return Math.min(Math.max(e,n),r)}function Ws(e,n){return e.indexOf(n)>-1}function Mu(e,n){return e.apply(null,n)}var Q={arr:function(e){return Array.isArray(e)},obj:function(e){return Ws(Object.prototype.toString.call(e),"Object")},pth:function(e){return Q.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||Q.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return Q.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return Q.hex(e)||Q.rgb(e)||Q.hsl(e)},key:function(e){return!rg.hasOwnProperty(e)&&!kc.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function ig(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map(function(r){return parseFloat(r)}):[]}function sg(e,n){var r=ig(e),s=Pn(Q.und(r[0])?1:r[0],.1,100),o=Pn(Q.und(r[1])?100:r[1],.1,100),l=Pn(Q.und(r[2])?10:r[2],.1,100),u=Pn(Q.und(r[3])?0:r[3],.1,100),h=Math.sqrt(o/s),c=l/(2*Math.sqrt(o*s)),d=c<1?h*Math.sqrt(1-c*c):0,m=1,v=c<1?(c*h+-u)/d:-u+h;function y(S){var C=n?n*S/1e3:S;return c<1?C=Math.exp(-C*c*h)*(m*Math.cos(d*C)+v*Math.sin(d*C)):C=(m+v*C)*Math.exp(-C*h),S===0||S===1?S:1-C}function _(){var S=Oa.springs[e];if(S)return S;for(var C=1/6,I=0,L=0;;)if(I+=C,y(I)===1){if(L++,L>=16)break}else L=0;var P=I*C*1e3;return Oa.springs[e]=P,P}return n?y:_}function FS(e){return e===void 0&&(e=10),function(n){return Math.ceil(Pn(n,1e-6,1)*e)*(1/e)}}var BS=(function(){var e=11,n=1/(e-1);function r(m,v){return 1-3*v+3*m}function s(m,v){return 3*v-6*m}function o(m){return 3*m}function l(m,v,y){return((r(v,y)*m+s(v,y))*m+o(v))*m}function u(m,v,y){return 3*r(v,y)*m*m+2*s(v,y)*m+o(v)}function h(m,v,y,_,S){var C,I,L=0;do I=v+(y-v)/2,C=l(I,_,S)-m,C>0?y=I:v=I;while(Math.abs(C)>1e-7&&++L<10);return I}function c(m,v,y,_){for(var S=0;S<4;++S){var C=u(v,y,_);if(C===0)return v;var I=l(v,y,_)-m;v-=I/C}return v}function d(m,v,y,_){if(!(0<=m&&m<=1&&0<=y&&y<=1))return;var S=new Float32Array(e);if(m!==v||y!==_)for(var C=0;C<e;++C)S[C]=l(C*n,m,y);function I(L){for(var P=0,M=1,z=e-1;M!==z&&S[M]<=L;++M)P+=n;--M;var j=(L-S[M])/(S[M+1]-S[M]),B=P+j*n,$=u(B,m,y);return $>=.001?c(L,B,m,y):$===0?B:h(L,P,P+n,m,y)}return function(L){return m===v&&y===_||L===0||L===1?L:l(I(L),v,_)}}return d})(),og=(function(){var e={linear:function(){return function(s){return s}}},n={Sine:function(){return function(s){return 1-Math.cos(s*Math.PI/2)}},Expo:function(){return function(s){return s?Math.pow(2,10*s-10):0}},Circ:function(){return function(s){return 1-Math.sqrt(1-s*s)}},Back:function(){return function(s){return s*s*(3*s-2)}},Bounce:function(){return function(s){for(var o,l=4;s<((o=Math.pow(2,--l))-1)/11;);return 1/Math.pow(4,3-l)-7.5625*Math.pow((o*3-2)/22-s,2)}},Elastic:function(s,o){s===void 0&&(s=1),o===void 0&&(o=.5);var l=Pn(s,1,10),u=Pn(o,.1,2);return function(h){return h===0||h===1?h:-l*Math.pow(2,10*(h-1))*Math.sin((h-1-u/(Math.PI*2)*Math.asin(1/l))*(Math.PI*2)/u)}}},r=["Quad","Cubic","Quart","Quint"];return r.forEach(function(s,o){n[s]=function(){return function(l){return Math.pow(l,o+2)}}}),Object.keys(n).forEach(function(s){var o=n[s];e["easeIn"+s]=o,e["easeOut"+s]=function(l,u){return function(h){return 1-o(l,u)(1-h)}},e["easeInOut"+s]=function(l,u){return function(h){return h<.5?o(l,u)(h*2)/2:1-o(l,u)(h*-2+2)/2}},e["easeOutIn"+s]=function(l,u){return function(h){return h<.5?(1-o(l,u)(1-h*2))/2:(o(l,u)(h*2-1)+1)/2}}}),e})();function Oc(e,n){if(Q.fnc(e))return e;var r=e.split("(")[0],s=og[r],o=ig(e);switch(r){case"spring":return sg(e,n);case"cubicBezier":return Mu(BS,o);case"steps":return Mu(FS,o);default:return Mu(s,o)}}function ag(e){try{var n=document.querySelectorAll(e);return n}catch{return}}function Za(e,n){for(var r=e.length,s=arguments.length>=2?arguments[1]:void 0,o=[],l=0;l<r;l++)if(l in e){var u=e[l];n.call(s,u,l,e)&&o.push(u)}return o}function Ja(e){return e.reduce(function(n,r){return n.concat(Q.arr(r)?Ja(r):r)},[])}function Xd(e){return Q.arr(e)?e:(Q.str(e)&&(e=ag(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function jc(e,n){return e.some(function(r){return r===n})}function Nc(e){var n={};for(var r in e)n[r]=e[r];return n}function oc(e,n){var r=Nc(e);for(var s in e)r[s]=n.hasOwnProperty(s)?n[s]:e[s];return r}function Qa(e,n){var r=Nc(e);for(var s in n)r[s]=Q.und(e[s])?n[s]:e[s];return r}function VS(e){var n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return n?"rgba("+n[1]+",1)":e}function zS(e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=e.replace(n,function(h,c,d,m){return c+c+d+d+m+m}),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),o=parseInt(s[1],16),l=parseInt(s[2],16),u=parseInt(s[3],16);return"rgba("+o+","+l+","+u+",1)"}function WS(e){var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),r=parseInt(n[1],10)/360,s=parseInt(n[2],10)/100,o=parseInt(n[3],10)/100,l=n[4]||1;function u(y,_,S){return S<0&&(S+=1),S>1&&(S-=1),S<1/6?y+(_-y)*6*S:S<1/2?_:S<2/3?y+(_-y)*(2/3-S)*6:y}var h,c,d;if(s==0)h=c=d=o;else{var m=o<.5?o*(1+s):o+s-o*s,v=2*o-m;h=u(v,m,r+1/3),c=u(v,m,r),d=u(v,m,r-1/3)}return"rgba("+h*255+","+c*255+","+d*255+","+l+")"}function $S(e){if(Q.rgb(e))return VS(e);if(Q.hex(e))return zS(e);if(Q.hsl(e))return WS(e)}function er(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function US(e){if(Ws(e,"translate")||e==="perspective")return"px";if(Ws(e,"rotate")||Ws(e,"skew"))return"deg"}function ac(e,n){return Q.fnc(e)?e(n.target,n.id,n.total):e}function Ln(e,n){return e.getAttribute(n)}function Fc(e,n,r){var s=er(n);if(jc([r,"deg","rad","turn"],s))return n;var o=Oa.CSS[n+r];if(!Q.und(o))return o;var l=100,u=document.createElement(e.tagName),h=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;h.appendChild(u),u.style.position="absolute",u.style.width=l+r;var c=l/u.offsetWidth;h.removeChild(u);var d=c*parseFloat(n);return Oa.CSS[n+r]=d,d}function lg(e,n,r){if(n in e.style){var s=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=e.style[n]||getComputedStyle(e).getPropertyValue(s)||"0";return r?Fc(e,o,r):o}}function Bc(e,n){if(Q.dom(e)&&!Q.inp(e)&&(!Q.nil(Ln(e,n))||Q.svg(e)&&e[n]))return"attribute";if(Q.dom(e)&&jc(NS,n))return"transform";if(Q.dom(e)&&n!=="transform"&&lg(e,n))return"css";if(e[n]!=null)return"object"}function ug(e){if(Q.dom(e)){for(var n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,s=new Map,o;o=r.exec(n);)s.set(o[1],o[2]);return s}}function HS(e,n,r,s){var o=Ws(n,"scale")?1:0+US(n),l=ug(e).get(n)||o;return r&&(r.transforms.list.set(n,l),r.transforms.last=n),s?Fc(e,l,s):l}function Vc(e,n,r,s){switch(Bc(e,n)){case"transform":return HS(e,n,s,r);case"css":return lg(e,n,r);case"attribute":return Ln(e,n);default:return e[n]||0}}function zc(e,n){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var s=er(e)||0,o=parseFloat(n),l=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return o+l+s;case"-":return o-l+s;case"*":return o*l+s}}function cg(e,n){if(Q.col(e))return $S(e);if(/\s/g.test(e))return e;var r=er(e),s=r?e.substr(0,e.length-r.length):e;return n?s+n:s}function Wc(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function GS(e){return Math.PI*2*Ln(e,"r")}function KS(e){return Ln(e,"width")*2+Ln(e,"height")*2}function YS(e){return Wc({x:Ln(e,"x1"),y:Ln(e,"y1")},{x:Ln(e,"x2"),y:Ln(e,"y2")})}function fg(e){for(var n=e.points,r=0,s,o=0;o<n.numberOfItems;o++){var l=n.getItem(o);o>0&&(r+=Wc(s,l)),s=l}return r}function qS(e){var n=e.points;return fg(e)+Wc(n.getItem(n.numberOfItems-1),n.getItem(0))}function hg(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return GS(e);case"rect":return KS(e);case"line":return YS(e);case"polyline":return fg(e);case"polygon":return qS(e)}}function XS(e){var n=hg(e);return e.setAttribute("stroke-dasharray",n),n}function ZS(e){for(var n=e.parentNode;Q.svg(n)&&Q.svg(n.parentNode);)n=n.parentNode;return n}function dg(e,n){var r=n||{},s=r.el||ZS(e),o=s.getBoundingClientRect(),l=Ln(s,"viewBox"),u=o.width,h=o.height,c=r.viewBox||(l?l.split(" "):[0,0,u,h]);return{el:s,viewBox:c,x:c[0]/1,y:c[1]/1,w:u,h,vW:c[2],vH:c[3]}}function JS(e,n){var r=Q.str(e)?ag(e)[0]:e,s=n||100;return function(o){return{property:o,el:r,svg:dg(r),totalLength:hg(r)*(s/100)}}}function QS(e,n,r){function s(m){m===void 0&&(m=0);var v=n+m>=1?n+m:0;return e.el.getPointAtLength(v)}var o=dg(e.el,e.svg),l=s(),u=s(-1),h=s(1),c=r?1:o.w/o.vW,d=r?1:o.h/o.vH;switch(e.property){case"x":return(l.x-o.x)*c;case"y":return(l.y-o.y)*d;case"angle":return Math.atan2(h.y-u.y,h.x-u.x)*180/Math.PI}}function Zd(e,n){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,s=cg(Q.pth(e)?e.totalLength:e,n)+"";return{original:s,numbers:s.match(r)?s.match(r).map(Number):[0],strings:Q.str(e)||n?s.split(r):[]}}function $c(e){var n=e?Ja(Q.arr(e)?e.map(Xd):Xd(e)):[];return Za(n,function(r,s,o){return o.indexOf(r)===s})}function pg(e){var n=$c(e);return n.map(function(r,s){return{target:r,id:s,total:n.length,transforms:{list:ug(r)}}})}function eE(e,n){var r=Nc(n);if(/^spring/.test(r.easing)&&(r.duration=sg(r.easing)),Q.arr(e)){var s=e.length,o=s===2&&!Q.obj(e[0]);o?e={value:e}:Q.fnc(n.duration)||(r.duration=n.duration/s)}var l=Q.arr(e)?e:[e];return l.map(function(u,h){var c=Q.obj(u)&&!Q.pth(u)?u:{value:u};return Q.und(c.delay)&&(c.delay=h?0:n.delay),Q.und(c.endDelay)&&(c.endDelay=h===l.length-1?n.endDelay:0),c}).map(function(u){return Qa(u,r)})}function tE(e){for(var n=Za(Ja(e.map(function(l){return Object.keys(l)})),function(l){return Q.key(l)}).reduce(function(l,u){return l.indexOf(u)<0&&l.push(u),l},[]),r={},s=function(l){var u=n[l];r[u]=e.map(function(h){var c={};for(var d in h)Q.key(d)?d==u&&(c.value=h[d]):c[d]=h[d];return c})},o=0;o<n.length;o++)s(o);return r}function nE(e,n){var r=[],s=n.keyframes;s&&(n=Qa(tE(s),n));for(var o in n)Q.key(o)&&r.push({name:o,tweens:eE(n[o],e)});return r}function rE(e,n){var r={};for(var s in e){var o=ac(e[s],n);Q.arr(o)&&(o=o.map(function(l){return ac(l,n)}),o.length===1&&(o=o[0])),r[s]=o}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function iE(e,n){var r;return e.tweens.map(function(s){var o=rE(s,n),l=o.value,u=Q.arr(l)?l[1]:l,h=er(u),c=Vc(n.target,e.name,h,n),d=r?r.to.original:c,m=Q.arr(l)?l[0]:d,v=er(m)||er(c),y=h||v;return Q.und(u)&&(u=d),o.from=Zd(m,y),o.to=Zd(zc(u,m),y),o.start=r?r.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=Oc(o.easing,o.duration),o.isPath=Q.pth(l),o.isPathTargetInsideSVG=o.isPath&&Q.svg(n.target),o.isColor=Q.col(o.from.original),o.isColor&&(o.round=1),r=o,o})}var mg={css:function(e,n,r){return e.style[n]=r},attribute:function(e,n,r){return e.setAttribute(n,r)},object:function(e,n,r){return e[n]=r},transform:function(e,n,r,s,o){if(s.list.set(n,r),n===s.last||o){var l="";s.list.forEach(function(u,h){l+=h+"("+u+") "}),e.style.transform=l}}};function gg(e,n){var r=pg(e);r.forEach(function(s){for(var o in n){var l=ac(n[o],s),u=s.target,h=er(l),c=Vc(u,o,h,s),d=h||er(c),m=zc(cg(l,d),c),v=Bc(u,o);mg[v](u,o,m,s.transforms,!0)}})}function sE(e,n){var r=Bc(e.target,n.name);if(r){var s=iE(n,e),o=s[s.length-1];return{type:r,property:n.name,animatable:e,tweens:s,duration:o.end,delay:s[0].delay,endDelay:o.endDelay}}}function oE(e,n){return Za(Ja(e.map(function(r){return n.map(function(s){return sE(r,s)})})),function(r){return!Q.und(r)})}function vg(e,n){var r=e.length,s=function(l){return l.timelineOffset?l.timelineOffset:0},o={};return o.duration=r?Math.max.apply(Math,e.map(function(l){return s(l)+l.duration})):n.duration,o.delay=r?Math.min.apply(Math,e.map(function(l){return s(l)+l.delay})):n.delay,o.endDelay=r?o.duration-Math.max.apply(Math,e.map(function(l){return s(l)+l.duration-l.endDelay})):n.endDelay,o}var Jd=0;function aE(e){var n=oc(rg,e),r=oc(kc,e),s=nE(r,e),o=pg(e.targets),l=oE(o,s),u=vg(l,r),h=Jd;return Jd++,Qa(n,{id:h,children:[],animatables:o,animations:l,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var bn=[],xg=(function(){var e;function n(){!e&&(!Qd()||!Fe.suspendWhenDocumentHidden)&&bn.length>0&&(e=requestAnimationFrame(r))}function r(o){for(var l=bn.length,u=0;u<l;){var h=bn[u];h.paused?(bn.splice(u,1),l--):(h.tick(o),u++)}e=u>0?requestAnimationFrame(r):void 0}function s(){Fe.suspendWhenDocumentHidden&&(Qd()?e=cancelAnimationFrame(e):(bn.forEach(function(o){return o._onDocumentVisibility()}),xg()))}return typeof document<"u"&&document.addEventListener("visibilitychange",s),n})();function Qd(){return!!document&&document.hidden}function Fe(e){e===void 0&&(e={});var n=0,r=0,s=0,o,l=0,u=null;function h(P){var M=window.Promise&&new Promise(function(z){return u=z});return P.finished=M,M}var c=aE(e);h(c);function d(){var P=c.direction;P!=="alternate"&&(c.direction=P!=="normal"?"normal":"reverse"),c.reversed=!c.reversed,o.forEach(function(M){return M.reversed=c.reversed})}function m(P){return c.reversed?c.duration-P:P}function v(){n=0,r=m(c.currentTime)*(1/Fe.speed)}function y(P,M){M&&M.seek(P-M.timelineOffset)}function _(P){if(c.reversePlayback)for(var z=l;z--;)y(P,o[z]);else for(var M=0;M<l;M++)y(P,o[M])}function S(P){for(var M=0,z=c.animations,j=z.length;M<j;){var B=z[M],$=B.animatable,U=B.tweens,ce=U.length-1,H=U[ce];ce&&(H=Za(U,function(Et){return P<Et.end})[0]||H);for(var J=Pn(P-H.start-H.delay,0,H.duration)/H.duration,Ce=isNaN(J)?1:H.easing(J),De=H.to.strings,St=H.round,Yt=[],Tn=H.to.numbers.length,me=void 0,be=0;be<Tn;be++){var ke=void 0,Ze=H.to.numbers[be],Be=H.from.numbers[be]||0;H.isPath?ke=QS(H.value,Ce*Ze,H.isPathTargetInsideSVG):ke=Be+Ce*(Ze-Be),St&&(H.isColor&&be>2||(ke=Math.round(ke*St)/St)),Yt.push(ke)}var lt=De.length;if(!lt)me=Yt[0];else{me=De[0];for(var Mt=0;Mt<lt;Mt++){De[Mt];var It=De[Mt+1],ut=Yt[Mt];isNaN(ut)||(It?me+=ut+It:me+=ut+" ")}}mg[B.type]($.target,B.property,me,$.transforms),B.currentValue=me,M++}}function C(P){c[P]&&!c.passThrough&&c[P](c)}function I(){c.remaining&&c.remaining!==!0&&c.remaining--}function L(P){var M=c.duration,z=c.delay,j=M-c.endDelay,B=m(P);c.progress=Pn(B/M*100,0,100),c.reversePlayback=B<c.currentTime,o&&_(B),!c.began&&c.currentTime>0&&(c.began=!0,C("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,C("loopBegin")),B<=z&&c.currentTime!==0&&S(0),(B>=j&&c.currentTime!==M||!M)&&S(M),B>z&&B<j?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,C("changeBegin")),C("change"),S(B)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,C("changeComplete")),c.currentTime=Pn(B,0,M),c.began&&C("update"),P>=M&&(r=0,I(),c.remaining?(n=s,C("loopComplete"),c.loopBegan=!1,c.direction==="alternate"&&d()):(c.paused=!0,c.completed||(c.completed=!0,C("loopComplete"),C("complete"),!c.passThrough&&"Promise"in window&&(u(),h(c)))))}return c.reset=function(){var P=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed=P==="reverse",c.remaining=c.loop,o=c.children,l=o.length;for(var M=l;M--;)c.children[M].reset();(c.reversed&&c.loop!==!0||P==="alternate"&&c.loop===1)&&c.remaining++,S(c.reversed?c.duration:0)},c._onDocumentVisibility=v,c.set=function(P,M){return gg(P,M),c},c.tick=function(P){s=P,n||(n=s),L((s+(r-n))*Fe.speed)},c.seek=function(P){L(m(P))},c.pause=function(){c.paused=!0,v()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,bn.push(c),v(),xg())},c.reverse=function(){d(),c.completed=!c.reversed,v()},c.restart=function(){c.reset(),c.play()},c.remove=function(P){var M=$c(P);yg(M,c)},c.reset(),c.autoplay&&c.play(),c}function ep(e,n){for(var r=n.length;r--;)jc(e,n[r].animatable.target)&&n.splice(r,1)}function yg(e,n){var r=n.animations,s=n.children;ep(e,r);for(var o=s.length;o--;){var l=s[o],u=l.animations;ep(e,u),!u.length&&!l.children.length&&s.splice(o,1)}!r.length&&!s.length&&n.pause()}function lE(e){for(var n=$c(e),r=bn.length;r--;){var s=bn[r];yg(n,s)}}function uE(e,n){n===void 0&&(n={});var r=n.direction||"normal",s=n.easing?Oc(n.easing):null,o=n.grid,l=n.axis,u=n.from||0,h=u==="first",c=u==="center",d=u==="last",m=Q.arr(e),v=parseFloat(m?e[0]:e),y=m?parseFloat(e[1]):0,_=er(m?e[1]:e)||0,S=n.start||0+(m?v:0),C=[],I=0;return function(L,P,M){if(h&&(u=0),c&&(u=(M-1)/2),d&&(u=M-1),!C.length){for(var z=0;z<M;z++){if(!o)C.push(Math.abs(u-z));else{var j=c?(o[0]-1)/2:u%o[0],B=c?(o[1]-1)/2:Math.floor(u/o[0]),$=z%o[0],U=Math.floor(z/o[0]),ce=j-$,H=B-U,J=Math.sqrt(ce*ce+H*H);l==="x"&&(J=-ce),l==="y"&&(J=-H),C.push(J)}I=Math.max.apply(Math,C)}s&&(C=C.map(function(De){return s(De/I)*I})),r==="reverse"&&(C=C.map(function(De){return l?De<0?De*-1:-De:Math.abs(I-De)}))}var Ce=m?(y-v)/I:v;return S+Ce*(Math.round(C[P]*100)/100)+_}}function cE(e){e===void 0&&(e={});var n=Fe(e);return n.duration=0,n.add=function(r,s){var o=bn.indexOf(n),l=n.children;o>-1&&bn.splice(o,1);function u(y){y.passThrough=!0}for(var h=0;h<l.length;h++)u(l[h]);var c=Qa(r,oc(kc,e));c.targets=c.targets||e.targets;var d=n.duration;c.autoplay=!1,c.direction=n.direction,c.timelineOffset=Q.und(s)?d:zc(s,d),u(n),n.seek(c.timelineOffset);var m=Fe(c);u(m),l.push(m);var v=vg(l,e);return n.delay=v.delay,n.endDelay=v.endDelay,n.duration=v.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n}Fe.version="3.2.1";Fe.speed=1;Fe.suspendWhenDocumentHidden=!0;Fe.running=bn;Fe.remove=lE;Fe.get=Vc;Fe.set=gg;Fe.convertPx=Fc;Fe.path=JS;Fe.setDashoffset=XS;Fe.stagger=uE;Fe.timeline=cE;Fe.easing=Oc;Fe.penner=og;Fe.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};const fE=()=>g.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve",children:[g.jsx("title",{children:"Apple App Store"}),g.jsx("g",{children:g.jsx("g",{children:g.jsx("path",{d:`M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105
      C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302
      c41.355,0,75,33.645,75,75V407z`})})}),g.jsx("g",{children:g.jsx("g",{children:g.jsx("path",{d:`M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166
      l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664
      L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498
      C306.487,136.719,307.375,129.981,305.646,123.531z`})})}),g.jsx("g",{children:g.jsx("g",{children:g.jsx("path",{d:`M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65
      c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341
      H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z`})})}),g.jsx("g",{children:g.jsx("g",{children:g.jsx("path",{d:`M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344
      c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z`})})})]}),hE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bookmark",children:[g.jsx("title",{children:"Bookmark"}),g.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})]}),dE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-codepen",children:[g.jsx("title",{children:"CodePen"}),g.jsx("polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),g.jsx("line",{x1:"12",y1:"22",x2:"12",y2:"15.5"}),g.jsx("polyline",{points:"22 8.5 12 15.5 2 8.5"}),g.jsx("polyline",{points:"2 15.5 12 8.5 22 15.5"}),g.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"8.5"})]}),tp=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-external-link",children:[g.jsx("title",{children:"External Link"}),g.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),g.jsx("polyline",{points:"15 3 21 3 21 9"}),g.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),pE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-folder",children:[g.jsx("title",{children:"Folder"}),g.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),mE=()=>g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-git-branch",children:[g.jsx("title",{children:"Git Fork"}),g.jsx("line",{x1:"6",y1:"3",x2:"6",y2:"15"}),g.jsx("circle",{cx:"18",cy:"6",r:"3"}),g.jsx("circle",{cx:"6",cy:"18",r:"3"}),g.jsx("path",{d:"M18 9a9 9 0 0 1-9 9"})]}),an=({name:e})=>{switch(e){case"AppStore":return g.jsx(fE,{});case"Bookmark":return g.jsx(hE,{});case"Codepen":return g.jsx(dE,{});case"External":return g.jsx(tp,{});case"Folder":return g.jsx(pE,{});case"Fork":return g.jsx(mE,{});case"GitHub":return g.jsx(gE,{});case"Instagram":return g.jsx(vE,{});case"Linkedin":return g.jsx(xE,{});case"Loader":return g.jsx(bg,{});case"Logo":return g.jsx(lc,{});case"PlayStore":return g.jsx(yE,{});case"Star":return g.jsx(bE,{});case"FilledStar":return g.jsx(_E,{});case"Twitter":return g.jsx(wE,{});default:return g.jsx(tp,{})}};an.propTypes={name:Qn.string.isRequired};const gE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-github",children:[g.jsx("title",{children:"GitHub"}),g.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]}),np=()=>g.jsxs("svg",{id:"hex",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 84 96",children:[g.jsx("title",{children:"Hexagon"}),g.jsx("g",{transform:"translate(-8.000000, -2.000000)",children:g.jsx("g",{transform:"translate(11.000000, 5.000000)",children:g.jsx("polygon",{stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",points:"39 0 0 22 0 67 39 90 78 68 78 23",fill:"currentColor"})})})]}),vE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-instagram",children:[g.jsx("title",{children:"Instagram"}),g.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),g.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),g.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),xE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-linkedin",children:[g.jsx("title",{children:"LinkedIn"}),g.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),g.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),g.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),bg=()=>g.jsxs("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:[g.jsx("title",{children:"Loader Logo"}),g.jsxs("g",{children:[g.jsx("g",{id:"B",transform:"translate(11.000000, 10.000000)",children:g.jsx("path",{d:"M29.5227 54V24.9091H39.3523C41.625 24.9091 43.4905 25.2973 44.9489 26.0739C46.4072 26.8409 47.4867 27.8968 48.1875 29.2415C48.8883 30.5862 49.2386 32.1155 49.2386 33.8295C49.2386 35.5436 48.8883 37.0634 48.1875 38.3892C47.4867 39.715 46.4119 40.7566 44.9631 41.5142C43.5142 42.2623 41.6629 42.6364 39.4091 42.6364H31.4545V39.4545H39.2955C40.8485 39.4545 42.0985 39.2273 43.0455 38.7727C44.0019 38.3182 44.6932 37.6742 45.1193 36.8409C45.5549 35.9981 45.7727 34.9943 45.7727 33.8295C45.7727 32.6648 45.5549 31.6468 45.1193 30.7756C44.6837 29.9044 43.9877 29.232 43.0312 28.7585C42.0748 28.2756 40.8106 28.0341 39.2386 28.0341H33.0455V54H29.5227ZM43.2159 40.9318L50.375 54H46.2841L39.2386 40.9318H43.2159Z",fill:"currentColor"})}),g.jsx("path",{stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",d:`M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z`})]})]}),lc=()=>g.jsxs("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 84 96",children:[g.jsx("title",{children:"Logo"}),g.jsx("g",{transform:"translate(-8.000000, -2.000000)",children:g.jsxs("g",{transform:"translate(11.000000, 5.000000)",children:[g.jsx("polygon",{id:"Shape",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",points:"39 0 0 22 0 67 39 90 78 68 78 23"}),g.jsx("g",{id:"R",transform:"translate(0.000000, 05.000000)",children:g.jsx("path",{d:"M29.5227 54V24.9091H39.3523C41.625 24.9091 43.4905 25.2973 44.9489 26.0739C46.4072 26.8409 47.4867 27.8968 48.1875 29.2415C48.8883 30.5862 49.2386 32.1155 49.2386 33.8295C49.2386 35.5436 48.8883 37.0634 48.1875 38.3892C47.4867 39.715 46.4119 40.7566 44.9631 41.5142C43.5142 42.2623 41.6629 42.6364 39.4091 42.6364H31.4545V39.4545H39.2955C40.8485 39.4545 42.0985 39.2273 43.0455 38.7727C44.0019 38.3182 44.6932 37.6742 45.1193 36.8409C45.5549 35.9981 45.7727 34.9943 45.7727 33.8295C45.7727 32.6648 45.5549 31.6468 45.1193 30.7756C44.6837 29.9044 43.9877 29.232 43.0312 28.7585C42.0748 28.2756 40.8106 28.0341 39.2386 28.0341H33.0455V54H29.5227ZM43.2159 40.9318L50.375 54H46.2841L39.2386 40.9318H43.2159Z",fill:"currentColor"})})]})})]}),yE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",children:[g.jsx("title",{children:"Google Play Store"}),g.jsx("path",{d:`M464.252,212.09L99.624,8.07C84.247-1.873,64.754-2.691,48.574,5.967C32.183,14.74,22,31.737,22,50.329v411.342
      c0,18.592,10.183,35.59,26.573,44.361c16.097,8.617,35.593,7.891,51.052-2.101l364.628-204.022
      c16.121-9.02,25.747-25.435,25.747-43.908C490,237.527,480.374,221.111,464.252,212.09z M341.677,181.943l-50.339,50.339
      L113.108,54.051L341.677,181.943z M55.544,467.323V44.676L267.621,256L55.544,467.323z M113.108,457.949l178.232-178.231
      l50.339,50.339L113.108,457.949z M447.874,270.637l-75.779,42.401l-57.038-57.037l57.037-57.037l75.778,42.4
      c7.746,4.335,8.583,11.68,8.583,14.637C456.455,258.958,455.62,266.302,447.874,270.637z`})]}),bE=()=>g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-star",children:[g.jsx("title",{children:"Star"}),g.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})]}),wE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-twitter",children:[g.jsx("title",{children:"Twitter"}),g.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),g.jsx("path",{d:"M4 4l11.733 16h4.267l-11.733 -16z"}),g.jsx("path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"})]}),_E=({width:e,height:n})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e,height:n,fill:"currentColor",children:g.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}),Uc=k.createContext({});function Hc(e){const n=k.useRef(null);return n.current===null&&(n.current=e()),n.current}const el=k.createContext(null),Gc=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class TE extends k.Component{getSnapshotBeforeUpdate(n){const r=this.props.childRef.current;if(r&&n.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function SE({children:e,isPresent:n}){const r=k.useId(),s=k.useRef(null),o=k.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=k.useContext(Gc);return k.useInsertionEffect(()=>{const{width:u,height:h,top:c,left:d}=o.current;if(n||!s.current||!u||!h)return;s.current.dataset.motionPopId=r;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${h}px !important;
            top: ${c}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[n]),g.jsx(TE,{isPresent:n,childRef:s,sizeRef:o,children:k.cloneElement(e,{ref:s})})}const EE=({children:e,initial:n,isPresent:r,onExitComplete:s,custom:o,presenceAffectsLayout:l,mode:u})=>{const h=Hc(AE),c=k.useId(),d=k.useCallback(v=>{h.set(v,!0);for(const y of h.values())if(!y)return;s&&s()},[h,s]),m=k.useMemo(()=>({id:c,initial:n,isPresent:r,custom:o,onExitComplete:d,register:v=>(h.set(v,!1),()=>h.delete(v))}),l?[Math.random(),d]:[r,d]);return k.useMemo(()=>{h.forEach((v,y)=>h.set(y,!1))},[r]),k.useEffect(()=>{!r&&!h.size&&s&&s()},[r]),u==="popLayout"&&(e=g.jsx(SE,{isPresent:r,children:e})),g.jsx(el.Provider,{value:m,children:e})};function AE(){return new Map}function wg(e=!0){const n=k.useContext(el);if(n===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:o}=n,l=k.useId();k.useEffect(()=>{e&&o(l)},[e]);const u=k.useCallback(()=>e&&s&&s(l),[l,s,e]);return!r&&s?[!1,u]:[!0]}const ma=e=>e.key||"";function rp(e){const n=[];return k.Children.forEach(e,r=>{k.isValidElement(r)&&n.push(r)}),n}const Kc=typeof window<"u",_g=Kc?k.useLayoutEffect:k.useEffect,CE=({children:e,custom:n,initial:r=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1})=>{const[h,c]=wg(u),d=k.useMemo(()=>rp(e),[e]),m=u&&!h?[]:d.map(ma),v=k.useRef(!0),y=k.useRef(d),_=Hc(()=>new Map),[S,C]=k.useState(d),[I,L]=k.useState(d);_g(()=>{v.current=!1,y.current=d;for(let z=0;z<I.length;z++){const j=ma(I[z]);m.includes(j)?_.delete(j):_.get(j)!==!0&&_.set(j,!1)}},[I,m.length,m.join("-")]);const P=[];if(d!==S){let z=[...d];for(let j=0;j<I.length;j++){const B=I[j],$=ma(B);m.includes($)||(z.splice(j,0,B),P.push(B))}l==="wait"&&P.length&&(z=P),L(rp(z)),C(d);return}const{forceRender:M}=k.useContext(Uc);return g.jsx(g.Fragment,{children:I.map(z=>{const j=ma(z),B=u&&!h?!1:d===I||m.includes(j),$=()=>{if(_.has(j))_.set(j,!0);else return;let U=!0;_.forEach(ce=>{ce||(U=!1)}),U&&(M?.(),L(y.current),u&&c?.(),s&&s())};return g.jsx(EE,{isPresent:B,initial:!v.current||r?void 0:!1,custom:B?void 0:n,presenceAffectsLayout:o,mode:l,onExitComplete:B?void 0:$,children:z},j)})})},Gt=e=>e;let Tg=Gt;function Yc(e){let n;return()=>(n===void 0&&(n=e()),n)}const Wi=(e,n,r)=>{const s=n-e;return s===0?1:(r-e)/s},tr=e=>e*1e3,nr=e=>e/1e3,RE={useManualTiming:!1};function PE(e){let n=new Set,r=new Set,s=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function h(d){l.has(d)&&(c.schedule(d),e()),d(u)}const c={schedule:(d,m=!1,v=!1)=>{const _=v&&s?n:r;return m&&l.add(d),_.has(d)||_.add(d),d},cancel:d=>{r.delete(d),l.delete(d)},process:d=>{if(u=d,s){o=!0;return}s=!0,[n,r]=[r,n],n.forEach(h),n.clear(),s=!1,o&&(o=!1,c.process(d))}};return c}const ga=["read","resolveKeyframes","update","preRender","render","postRender"],LE=40;function Sg(e,n){let r=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>r=!0,u=ga.reduce((L,P)=>(L[P]=PE(l),L),{}),{read:h,resolveKeyframes:c,update:d,preRender:m,render:v,postRender:y}=u,_=()=>{const L=performance.now();r=!1,o.delta=s?1e3/60:Math.max(Math.min(L-o.timestamp,LE),1),o.timestamp=L,o.isProcessing=!0,h.process(o),c.process(o),d.process(o),m.process(o),v.process(o),y.process(o),o.isProcessing=!1,r&&n&&(s=!1,e(_))},S=()=>{r=!0,s=!0,o.isProcessing||e(_)};return{schedule:ga.reduce((L,P)=>{const M=u[P];return L[P]=(z,j=!1,B=!1)=>(r||S(),M.schedule(z,j,B)),L},{}),cancel:L=>{for(let P=0;P<ga.length;P++)u[ga[P]].cancel(L)},state:o,steps:u}}const{schedule:Me,cancel:Rr,state:ht,steps:Iu}=Sg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gt,!0),Eg=k.createContext({strict:!1}),ip={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},$i={};for(const e in ip)$i[e]={isEnabled:n=>ip[e].some(r=>!!n[r])};function ME(e){for(const n in e)$i[n]={...$i[n],...e[n]}}const IE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ja(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||IE.has(e)}let Ag=e=>!ja(e);function DE(e){e&&(Ag=n=>n.startsWith("on")?!ja(n):e(n))}try{DE(require("@emotion/is-prop-valid").default)}catch{}function kE(e,n,r){const s={};for(const o in e)o==="values"&&typeof e.values=="object"||(Ag(o)||r===!0&&ja(o)||!n&&!ja(o)||e.draggable&&o.startsWith("onDrag"))&&(s[o]=e[o]);return s}function OE(e){if(typeof Proxy>"u")return e;const n=new Map,r=(...s)=>e(...s);return new Proxy(r,{get:(s,o)=>o==="create"?e:(n.has(o)||n.set(o,e(o)),n.get(o))})}const tl=k.createContext({});function Xs(e){return typeof e=="string"||Array.isArray(e)}function nl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const qc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xc=["initial",...qc];function rl(e){return nl(e.animate)||Xc.some(n=>Xs(e[n]))}function Cg(e){return!!(rl(e)||e.variants)}function jE(e,n){if(rl(e)){const{initial:r,animate:s}=e;return{initial:r===!1||Xs(r)?r:void 0,animate:Xs(s)?s:void 0}}return e.inherit!==!1?n:{}}function NE(e){const{initial:n,animate:r}=jE(e,k.useContext(tl));return k.useMemo(()=>({initial:n,animate:r}),[sp(n),sp(r)])}function sp(e){return Array.isArray(e)?e.join(" "):e}const FE=Symbol.for("motionComponentSymbol");function Di(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function BE(e,n,r){return k.useCallback(s=>{s&&e.onMount&&e.onMount(s),n&&(s?n.mount(s):n.unmount()),r&&(typeof r=="function"?r(s):Di(r)&&(r.current=s))},[n])}const Zc=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),VE="framerAppearId",Rg="data-"+Zc(VE),{schedule:Jc}=Sg(queueMicrotask,!1),Pg=k.createContext({});function zE(e,n,r,s,o){var l,u;const{visualElement:h}=k.useContext(tl),c=k.useContext(Eg),d=k.useContext(el),m=k.useContext(Gc).reducedMotion,v=k.useRef(null);s=s||c.renderer,!v.current&&s&&(v.current=s(e,{visualState:n,parent:h,props:r,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:m}));const y=v.current,_=k.useContext(Pg);y&&!y.projection&&o&&(y.type==="html"||y.type==="svg")&&WE(v.current,r,o,_);const S=k.useRef(!1);k.useInsertionEffect(()=>{y&&S.current&&y.update(r,d)});const C=r[Rg],I=k.useRef(!!C&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,C))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,C)));return _g(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),Jc.render(y.render),I.current&&y.animationState&&y.animationState.animateChanges())}),k.useEffect(()=>{y&&(!I.current&&y.animationState&&y.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var L;(L=window.MotionHandoffMarkAsComplete)===null||L===void 0||L.call(window,C)}),I.current=!1))}),y}function WE(e,n,r,s){const{layoutId:o,layout:l,drag:u,dragConstraints:h,layoutScroll:c,layoutRoot:d}=n;e.projection=new r(e.latestValues,n["data-framer-portal-id"]?void 0:Lg(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||h&&Di(h),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:s,layoutScroll:c,layoutRoot:d})}function Lg(e){if(e)return e.options.allowProjection!==!1?e.projection:Lg(e.parent)}function $E({preloadedFeatures:e,createVisualElement:n,useRender:r,useVisualState:s,Component:o}){var l,u;e&&ME(e);function h(d,m){let v;const y={...k.useContext(Gc),...d,layoutId:UE(d)},{isStatic:_}=y,S=NE(d),C=s(d,_);if(!_&&Kc){HE();const I=GE(y);v=I.MeasureLayout,S.visualElement=zE(o,C,y,n,I.ProjectionNode)}return g.jsxs(tl.Provider,{value:S,children:[v&&S.visualElement?g.jsx(v,{visualElement:S.visualElement,...y}):null,r(o,d,BE(C,S.visualElement,m),C,_,S.visualElement)]})}h.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const c=k.forwardRef(h);return c[FE]=o,c}function UE({layoutId:e}){const n=k.useContext(Uc).id;return n&&e!==void 0?n+"-"+e:e}function HE(e,n){k.useContext(Eg).strict}function GE(e){const{drag:n,layout:r}=$i;if(!n&&!r)return{};const s={...n,...r};return{MeasureLayout:n?.isEnabled(e)||r?.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const KE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qc(e){return typeof e!="string"||e.includes("-")?!1:!!(KE.indexOf(e)>-1||/[A-Z]/u.test(e))}function op(e){const n=[{},{}];return e?.values.forEach((r,s)=>{n[0][s]=r.get(),n[1][s]=r.getVelocity()}),n}function ef(e,n,r,s){if(typeof n=="function"){const[o,l]=op(s);n=n(r!==void 0?r:e.custom,o,l)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[o,l]=op(s);n=n(r!==void 0?r:e.custom,o,l)}return n}const uc=e=>Array.isArray(e),YE=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),qE=e=>uc(e)?e[e.length-1]||0:e,gt=e=>!!(e&&e.getVelocity);function Sa(e){const n=gt(e)?e.get():e;return YE(n)?n.toValue():n}function XE({scrapeMotionValuesFromProps:e,createRenderState:n,onUpdate:r},s,o,l){const u={latestValues:ZE(s,o,l,e),renderState:n()};return r&&(u.onMount=h=>r({props:s,current:h,...u}),u.onUpdate=h=>r(h)),u}const Mg=e=>(n,r)=>{const s=k.useContext(tl),o=k.useContext(el),l=()=>XE(e,n,s,o);return r?l():Hc(l)};function ZE(e,n,r,s){const o={},l=s(e,{});for(const y in l)o[y]=Sa(l[y]);let{initial:u,animate:h}=e;const c=rl(e),d=Cg(e);n&&d&&!c&&e.inherit!==!1&&(u===void 0&&(u=n.initial),h===void 0&&(h=n.animate));let m=r?r.initial===!1:!1;m=m||u===!1;const v=m?h:u;if(v&&typeof v!="boolean"&&!nl(v)){const y=Array.isArray(v)?v:[v];for(let _=0;_<y.length;_++){const S=ef(e,y[_]);if(S){const{transitionEnd:C,transition:I,...L}=S;for(const P in L){let M=L[P];if(Array.isArray(M)){const z=m?M.length-1:0;M=M[z]}M!==null&&(o[P]=M)}for(const P in C)o[P]=C[P]}}}return o}const Gi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ui=new Set(Gi),Ig=e=>n=>typeof n=="string"&&n.startsWith(e),Dg=Ig("--"),JE=Ig("var(--"),tf=e=>JE(e)?QE.test(e.split("/*")[0].trim()):!1,QE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,kg=(e,n)=>n&&typeof e=="number"?n.transform(e):e,rr=(e,n,r)=>r>n?n:r<e?e:r,Ki={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Zs={...Ki,transform:e=>rr(0,1,e)},va={...Ki,default:1},to=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Ar=to("deg"),Mn=to("%"),re=to("px"),eA=to("vh"),tA=to("vw"),ap={...Mn,parse:e=>Mn.parse(e)/100,transform:e=>Mn.transform(e*100)},nA={borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,backgroundPositionX:re,backgroundPositionY:re},rA={rotate:Ar,rotateX:Ar,rotateY:Ar,rotateZ:Ar,scale:va,scaleX:va,scaleY:va,scaleZ:va,skew:Ar,skewX:Ar,skewY:Ar,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:Zs,originX:ap,originY:ap,originZ:re},lp={...Ki,transform:Math.round},nf={...nA,...rA,zIndex:lp,size:re,fillOpacity:Zs,strokeOpacity:Zs,numOctaves:lp},iA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},sA=Gi.length;function oA(e,n,r){let s="",o=!0;for(let l=0;l<sA;l++){const u=Gi[l],h=e[u];if(h===void 0)continue;let c=!0;if(typeof h=="number"?c=h===(u.startsWith("scale")?1:0):c=parseFloat(h)===0,!c||r){const d=kg(h,nf[u]);if(!c){o=!1;const m=iA[u]||u;s+=`${m}(${d}) `}r&&(n[u]=d)}}return s=s.trim(),r?s=r(n,o?"":s):o&&(s="none"),s}function rf(e,n,r){const{style:s,vars:o,transformOrigin:l}=e;let u=!1,h=!1;for(const c in n){const d=n[c];if(ui.has(c)){u=!0;continue}else if(Dg(c)){o[c]=d;continue}else{const m=kg(d,nf[c]);c.startsWith("origin")?(h=!0,l[c]=m):s[c]=m}}if(n.transform||(u||r?s.transform=oA(n,e.transform,r):s.transform&&(s.transform="none")),h){const{originX:c="50%",originY:d="50%",originZ:m=0}=l;s.transformOrigin=`${c} ${d} ${m}`}}const aA={offset:"stroke-dashoffset",array:"stroke-dasharray"},lA={offset:"strokeDashoffset",array:"strokeDasharray"};function uA(e,n,r=1,s=0,o=!0){e.pathLength=1;const l=o?aA:lA;e[l.offset]=re.transform(-s);const u=re.transform(n),h=re.transform(r);e[l.array]=`${u} ${h}`}function up(e,n,r){return typeof e=="string"?e:re.transform(n+r*e)}function cA(e,n,r){const s=up(n,e.x,e.width),o=up(r,e.y,e.height);return`${s} ${o}`}function sf(e,{attrX:n,attrY:r,attrScale:s,originX:o,originY:l,pathLength:u,pathSpacing:h=1,pathOffset:c=0,...d},m,v){if(rf(e,d,v),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:_,dimensions:S}=e;y.transform&&(S&&(_.transform=y.transform),delete y.transform),S&&(o!==void 0||l!==void 0||_.transform)&&(_.transformOrigin=cA(S,o!==void 0?o:.5,l!==void 0?l:.5)),n!==void 0&&(y.x=n),r!==void 0&&(y.y=r),s!==void 0&&(y.scale=s),u!==void 0&&uA(y,u,h,c,!1)}const of=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Og=()=>({...of(),attrs:{}}),af=e=>typeof e=="string"&&e.toLowerCase()==="svg";function jg(e,{style:n,vars:r},s,o){Object.assign(e.style,n,o&&o.getProjectionStyles(s));for(const l in r)e.style.setProperty(l,r[l])}const Ng=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Fg(e,n,r,s){jg(e,n,void 0,s);for(const o in n.attrs)e.setAttribute(Ng.has(o)?o:Zc(o),n.attrs[o])}const Na={};function fA(e){Object.assign(Na,e)}function Bg(e,{layout:n,layoutId:r}){return ui.has(e)||e.startsWith("origin")||(n||r!==void 0)&&(!!Na[e]||e==="opacity")}function lf(e,n,r){var s;const{style:o}=e,l={};for(const u in o)(gt(o[u])||n.style&&gt(n.style[u])||Bg(u,e)||((s=r?.getValue(u))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function Vg(e,n,r){const s=lf(e,n,r);for(const o in e)if(gt(e[o])||gt(n[o])){const l=Gi.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[l]=e[o]}return s}function hA(e,n){try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}const cp=["x","y","width","height","cx","cy","r"],dA={useVisualState:Mg({scrapeMotionValuesFromProps:Vg,createRenderState:Og,onUpdate:({props:e,prevProps:n,current:r,renderState:s,latestValues:o})=>{if(!r)return;let l=!!e.drag;if(!l){for(const h in o)if(ui.has(h)){l=!0;break}}if(!l)return;let u=!n;if(n)for(let h=0;h<cp.length;h++){const c=cp[h];e[c]!==n[c]&&(u=!0)}u&&Me.read(()=>{hA(r,s),Me.render(()=>{sf(s,o,af(r.tagName),e.transformTemplate),Fg(r,s)})})}})},pA={useVisualState:Mg({scrapeMotionValuesFromProps:lf,createRenderState:of})};function zg(e,n,r){for(const s in n)!gt(n[s])&&!Bg(s,r)&&(e[s]=n[s])}function mA({transformTemplate:e},n){return k.useMemo(()=>{const r=of();return rf(r,n,e),Object.assign({},r.vars,r.style)},[n])}function gA(e,n){const r=e.style||{},s={};return zg(s,r,e),Object.assign(s,mA(e,n)),s}function vA(e,n){const r={},s=gA(e,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=s,r}function xA(e,n,r,s){const o=k.useMemo(()=>{const l=Og();return sf(l,n,af(s),e.transformTemplate),{...l.attrs,style:{...l.style}}},[n]);if(e.style){const l={};zg(l,e.style,e),o.style={...l,...o.style}}return o}function yA(e=!1){return(r,s,o,{latestValues:l},u)=>{const c=(Qc(r)?xA:vA)(s,l,u,r),d=kE(s,typeof r=="string",e),m=r!==k.Fragment?{...d,...c,ref:o}:{},{children:v}=s,y=k.useMemo(()=>gt(v)?v.get():v,[v]);return k.createElement(r,{...m,children:y})}}function bA(e,n){return function(s,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Qc(s)?dA:pA,preloadedFeatures:e,useRender:yA(o),createVisualElement:n,Component:s};return $E(u)}}function Wg(e,n){if(!Array.isArray(n))return!1;const r=n.length;if(r!==e.length)return!1;for(let s=0;s<r;s++)if(n[s]!==e[s])return!1;return!0}function il(e,n,r){const s=e.getProps();return ef(s,n,r!==void 0?r:s.custom,e)}const wA=Yc(()=>window.ScrollTimeline!==void 0);class _A{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>"finished"in n?n.finished:n))}getAll(n){return this.animations[0][n]}setAll(n,r){for(let s=0;s<this.animations.length;s++)this.animations[s][n]=r}attachTimeline(n,r){const s=this.animations.map(o=>{if(wA()&&o.attachTimeline)return o.attachTimeline(n);if(typeof r=="function")return r(o)});return()=>{s.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get startTime(){return this.getAll("startTime")}get duration(){let n=0;for(let r=0;r<this.animations.length;r++)n=Math.max(n,this.animations[r].duration);return n}runAll(n){this.animations.forEach(r=>r[n]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class TA extends _A{then(n,r){return Promise.all(this.animations).then(n).catch(r)}}function uf(e,n){return e?e[n]||e.default||e:void 0}const cc=2e4;function $g(e){let n=0;const r=50;let s=e.next(n);for(;!s.done&&n<cc;)n+=r,s=e.next(n);return n>=cc?1/0:n}function cf(e){return typeof e=="function"}function fp(e,n){e.timeline=n,e.onfinish=null}const ff=e=>Array.isArray(e)&&typeof e[0]=="number",SA={linearEasing:void 0};function EA(e,n){const r=Yc(e);return()=>{var s;return(s=SA[n])!==null&&s!==void 0?s:r()}}const Fa=EA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ug=(e,n,r=10)=>{let s="";const o=Math.max(Math.round(n/r),2);for(let l=0;l<o;l++)s+=e(Wi(0,o-1,l))+", ";return`linear(${s.substring(0,s.length-2)})`};function Hg(e){return!!(typeof e=="function"&&Fa()||!e||typeof e=="string"&&(e in fc||Fa())||ff(e)||Array.isArray(e)&&e.every(Hg))}const Ns=([e,n,r,s])=>`cubic-bezier(${e}, ${n}, ${r}, ${s})`,fc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ns([0,.65,.55,1]),circOut:Ns([.55,0,1,.45]),backIn:Ns([.31,.01,.66,-.59]),backOut:Ns([.33,1.53,.69,.99])};function Gg(e,n){if(e)return typeof e=="function"&&Fa()?Ug(e,n):ff(e)?Ns(e):Array.isArray(e)?e.map(r=>Gg(r,n)||fc.easeOut):fc[e]}const yn={x:!1,y:!1};function Kg(){return yn.x||yn.y}function AA(e,n,r){var s;if(e instanceof Element)return[e];if(typeof e=="string"){let o=document;const l=(s=void 0)!==null&&s!==void 0?s:o.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}function Yg(e,n){const r=AA(e),s=new AbortController,o={passive:!0,...n,signal:s.signal};return[r,o,()=>s.abort()]}function hp(e){return n=>{n.pointerType==="touch"||Kg()||e(n)}}function CA(e,n,r={}){const[s,o,l]=Yg(e,r),u=hp(h=>{const{target:c}=h,d=n(h);if(typeof d!="function"||!c)return;const m=hp(v=>{d(v),c.removeEventListener("pointerleave",m)});c.addEventListener("pointerleave",m,o)});return s.forEach(h=>{h.addEventListener("pointerenter",u,o)}),l}const qg=(e,n)=>n?e===n?!0:qg(e,n.parentElement):!1,hf=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,RA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function PA(e){return RA.has(e.tagName)||e.tabIndex!==-1}const Fs=new WeakSet;function dp(e){return n=>{n.key==="Enter"&&e(n)}}function Du(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const LA=(e,n)=>{const r=e.currentTarget;if(!r)return;const s=dp(()=>{if(Fs.has(r))return;Du(r,"down");const o=dp(()=>{Du(r,"up")}),l=()=>Du(r,"cancel");r.addEventListener("keyup",o,n),r.addEventListener("blur",l,n)});r.addEventListener("keydown",s,n),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),n)};function pp(e){return hf(e)&&!Kg()}function MA(e,n,r={}){const[s,o,l]=Yg(e,r),u=h=>{const c=h.currentTarget;if(!pp(h)||Fs.has(c))return;Fs.add(c);const d=n(h),m=(_,S)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",y),!(!pp(_)||!Fs.has(c))&&(Fs.delete(c),typeof d=="function"&&d(_,{success:S}))},v=_=>{m(_,r.useGlobalTarget||qg(c,_.target))},y=_=>{m(_,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",y,o)};return s.forEach(h=>{!PA(h)&&h.getAttribute("tabindex")===null&&(h.tabIndex=0),(r.useGlobalTarget?window:h).addEventListener("pointerdown",u,o),h.addEventListener("focus",d=>LA(d,o),o)}),l}function IA(e){return e==="x"||e==="y"?yn[e]?null:(yn[e]=!0,()=>{yn[e]=!1}):yn.x||yn.y?null:(yn.x=yn.y=!0,()=>{yn.x=yn.y=!1})}const Xg=new Set(["width","height","top","left","right","bottom",...Gi]);let Ea;function DA(){Ea=void 0}const In={now:()=>(Ea===void 0&&In.set(ht.isProcessing||RE.useManualTiming?ht.timestamp:performance.now()),Ea),set:e=>{Ea=e,queueMicrotask(DA)}};function df(e,n){e.indexOf(n)===-1&&e.push(n)}function pf(e,n){const r=e.indexOf(n);r>-1&&e.splice(r,1)}class mf{constructor(){this.subscriptions=[]}add(n){return df(this.subscriptions,n),()=>pf(this.subscriptions,n)}notify(n,r,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](n,r,s);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(n,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Zg(e,n){return n?e*(1e3/n):0}const mp=30,kA=e=>!isNaN(parseFloat(e));class OA{constructor(n,r={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,o=!0)=>{const l=In.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(n),this.owner=r.owner}setCurrent(n){this.current=n,this.updatedAt=In.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=kA(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,r){this.events[n]||(this.events[n]=new mf);const s=this.events[n].add(r);return n==="change"?()=>{s(),Me.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,r){this.passiveEffect=n,this.stopPassiveEffect=r}set(n,r=!0){!r||!this.passiveEffect?this.updateAndNotify(n,r):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-s}jump(n,r=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=In.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>mp)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,mp);return Zg(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(n){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=n(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Js(e,n){return new OA(e,n)}function jA(e,n,r){e.hasValue(n)?e.getValue(n).set(r):e.addValue(n,Js(r))}function NA(e,n){const r=il(e,n);let{transitionEnd:s={},transition:o={},...l}=r||{};l={...l,...s};for(const u in l){const h=qE(l[u]);jA(e,u,h)}}function FA(e){return!!(gt(e)&&e.add)}function hc(e,n){const r=e.getValue("willChange");if(FA(r))return r.add(n)}function Jg(e){return e.props[Rg]}const Qg=(e,n,r)=>(((1-3*r+3*n)*e+(3*r-6*n))*e+3*n)*e,BA=1e-7,VA=12;function zA(e,n,r,s,o){let l,u,h=0;do u=n+(r-n)/2,l=Qg(u,s,o)-e,l>0?r=u:n=u;while(Math.abs(l)>BA&&++h<VA);return u}function no(e,n,r,s){if(e===n&&r===s)return Gt;const o=l=>zA(l,0,1,e,r);return l=>l===0||l===1?l:Qg(o(l),n,s)}const e0=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,t0=e=>n=>1-e(1-n),n0=no(.33,1.53,.69,.99),gf=t0(n0),r0=e0(gf),i0=e=>(e*=2)<1?.5*gf(e):.5*(2-Math.pow(2,-10*(e-1))),vf=e=>1-Math.sin(Math.acos(e)),s0=t0(vf),o0=e0(vf),a0=e=>/^0[^.\s]+$/u.test(e);function WA(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||a0(e):!0}const $s=e=>Math.round(e*1e5)/1e5,xf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $A(e){return e==null}const UA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yf=(e,n)=>r=>!!(typeof r=="string"&&UA.test(r)&&r.startsWith(e)||n&&!$A(r)&&Object.prototype.hasOwnProperty.call(r,n)),l0=(e,n,r)=>s=>{if(typeof s!="string")return s;const[o,l,u,h]=s.match(xf);return{[e]:parseFloat(o),[n]:parseFloat(l),[r]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},HA=e=>rr(0,255,e),ku={...Ki,transform:e=>Math.round(HA(e))},ri={test:yf("rgb","red"),parse:l0("red","green","blue"),transform:({red:e,green:n,blue:r,alpha:s=1})=>"rgba("+ku.transform(e)+", "+ku.transform(n)+", "+ku.transform(r)+", "+$s(Zs.transform(s))+")"};function GA(e){let n="",r="",s="",o="";return e.length>5?(n=e.substring(1,3),r=e.substring(3,5),s=e.substring(5,7),o=e.substring(7,9)):(n=e.substring(1,2),r=e.substring(2,3),s=e.substring(3,4),o=e.substring(4,5),n+=n,r+=r,s+=s,o+=o),{red:parseInt(n,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const dc={test:yf("#"),parse:GA,transform:ri.transform},ki={test:yf("hsl","hue"),parse:l0("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:r,alpha:s=1})=>"hsla("+Math.round(e)+", "+Mn.transform($s(n))+", "+Mn.transform($s(r))+", "+$s(Zs.transform(s))+")"},mt={test:e=>ri.test(e)||dc.test(e)||ki.test(e),parse:e=>ri.test(e)?ri.parse(e):ki.test(e)?ki.parse(e):dc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ri.transform(e):ki.transform(e)},KA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function YA(e){var n,r;return isNaN(e)&&typeof e=="string"&&(((n=e.match(xf))===null||n===void 0?void 0:n.length)||0)+(((r=e.match(KA))===null||r===void 0?void 0:r.length)||0)>0}const u0="number",c0="color",qA="var",XA="var(",gp="${}",ZA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qs(e){const n=e.toString(),r=[],s={color:[],number:[],var:[]},o=[];let l=0;const h=n.replace(ZA,c=>(mt.test(c)?(s.color.push(l),o.push(c0),r.push(mt.parse(c))):c.startsWith(XA)?(s.var.push(l),o.push(qA),r.push(c)):(s.number.push(l),o.push(u0),r.push(parseFloat(c))),++l,gp)).split(gp);return{values:r,split:h,indexes:s,types:o}}function f0(e){return Qs(e).values}function h0(e){const{split:n,types:r}=Qs(e),s=n.length;return o=>{let l="";for(let u=0;u<s;u++)if(l+=n[u],o[u]!==void 0){const h=r[u];h===u0?l+=$s(o[u]):h===c0?l+=mt.transform(o[u]):l+=o[u]}return l}}const JA=e=>typeof e=="number"?0:e;function QA(e){const n=f0(e);return h0(e)(n.map(JA))}const Pr={test:YA,parse:f0,createTransformer:h0,getAnimatableNone:QA},eC=new Set(["brightness","contrast","saturate","opacity"]);function tC(e){const[n,r]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[s]=r.match(xf)||[];if(!s)return e;const o=r.replace(s,"");let l=eC.has(n)?1:0;return s!==r&&(l*=100),n+"("+l+o+")"}const nC=/\b([a-z-]*)\(.*?\)/gu,pc={...Pr,getAnimatableNone:e=>{const n=e.match(nC);return n?n.map(tC).join(" "):e}},rC={...nf,color:mt,backgroundColor:mt,outlineColor:mt,fill:mt,stroke:mt,borderColor:mt,borderTopColor:mt,borderRightColor:mt,borderBottomColor:mt,borderLeftColor:mt,filter:pc,WebkitFilter:pc},bf=e=>rC[e];function d0(e,n){let r=bf(e);return r!==pc&&(r=Pr),r.getAnimatableNone?r.getAnimatableNone(n):void 0}const iC=new Set(["auto","none","0"]);function sC(e,n,r){let s=0,o;for(;s<e.length&&!o;){const l=e[s];typeof l=="string"&&!iC.has(l)&&Qs(l).values.length&&(o=e[s]),s++}if(o&&r)for(const l of n)e[l]=d0(r,o)}const vp=e=>e===Ki||e===re,xp=(e,n)=>parseFloat(e.split(", ")[n]),yp=(e,n)=>(r,{transform:s})=>{if(s==="none"||!s)return 0;const o=s.match(/^matrix3d\((.+)\)$/u);if(o)return xp(o[1],n);{const l=s.match(/^matrix\((.+)\)$/u);return l?xp(l[1],e):0}},oC=new Set(["x","y","z"]),aC=Gi.filter(e=>!oC.has(e));function lC(e){const n=[];return aC.forEach(r=>{const s=e.getValue(r);s!==void 0&&(n.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),n}const Ui={width:({x:e},{paddingLeft:n="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(n)-parseFloat(r),height:({y:e},{paddingTop:n="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(n)-parseFloat(r),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:yp(4,13),y:yp(5,14)};Ui.translateX=Ui.x;Ui.translateY=Ui.y;const oi=new Set;let mc=!1,gc=!1;function p0(){if(gc){const e=Array.from(oi).filter(s=>s.needsMeasurement),n=new Set(e.map(s=>s.element)),r=new Map;n.forEach(s=>{const o=lC(s);o.length&&(r.set(s,o),s.render())}),e.forEach(s=>s.measureInitialState()),n.forEach(s=>{s.render();const o=r.get(s);o&&o.forEach(([l,u])=>{var h;(h=s.getValue(l))===null||h===void 0||h.set(u)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}gc=!1,mc=!1,oi.forEach(e=>e.complete()),oi.clear()}function m0(){oi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(gc=!0)})}function uC(){m0(),p0()}class wf{constructor(n,r,s,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=r,this.name=s,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(oi.add(this),mc||(mc=!0,Me.read(m0),Me.resolveKeyframes(p0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:r,element:s,motionValue:o}=this;for(let l=0;l<n.length;l++)if(n[l]===null)if(l===0){const u=o?.get(),h=n[n.length-1];if(u!==void 0)n[0]=u;else if(s&&r){const c=s.readValue(r,h);c!=null&&(n[0]=c)}n[0]===void 0&&(n[0]=h),o&&u===void 0&&o.set(n[0])}else n[l]=n[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),oi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,oi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const g0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),cC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fC(e){const n=cC.exec(e);if(!n)return[,];const[,r,s,o]=n;return[`--${r??s}`,o]}function v0(e,n,r=1){const[s,o]=fC(e);if(!s)return;const l=window.getComputedStyle(n).getPropertyValue(s);if(l){const u=l.trim();return g0(u)?parseFloat(u):u}return tf(o)?v0(o,n,r+1):o}const x0=e=>n=>n.test(e),hC={test:e=>e==="auto",parse:e=>e},y0=[Ki,re,Mn,Ar,tA,eA,hC],bp=e=>y0.find(x0(e));class b0 extends wf{constructor(n,r,s,o,l){super(n,r,s,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let c=0;c<n.length;c++){let d=n[c];if(typeof d=="string"&&(d=d.trim(),tf(d))){const m=v0(d,r.current);m!==void 0&&(n[c]=m),c===n.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!Xg.has(s)||n.length!==2)return;const[o,l]=n,u=bp(o),h=bp(l);if(u!==h)if(vp(u)&&vp(h))for(let c=0;c<n.length;c++){const d=n[c];typeof d=="string"&&(n[c]=parseFloat(d))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:r}=this,s=[];for(let o=0;o<n.length;o++)WA(n[o])&&s.push(o);s.length&&sC(n,s,r)}measureInitialState(){const{element:n,unresolvedKeyframes:r,name:s}=this;if(!n||!n.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ui[s](n.measureViewportBox(),window.getComputedStyle(n.current)),r[0]=this.measuredOrigin;const o=r[r.length-1];o!==void 0&&n.getValue(s,o).jump(o,!1)}measureEndState(){var n;const{element:r,name:s,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const l=r.getValue(s);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,h=o[u];o[u]=Ui[s](r.measureViewportBox(),window.getComputedStyle(r.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((n=this.removedTransforms)===null||n===void 0)&&n.length&&this.removedTransforms.forEach(([c,d])=>{r.getValue(c).set(d)}),this.resolveNoneKeyframes()}}const wp=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Pr.test(e)||e==="0")&&!e.startsWith("url("));function dC(e){const n=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}function pC(e,n,r,s){const o=e[0];if(o===null)return!1;if(n==="display"||n==="visibility")return!0;const l=e[e.length-1],u=wp(o,n),h=wp(l,n);return!u||!h?!1:dC(e)||(r==="spring"||cf(r))&&s}const mC=e=>e!==null;function sl(e,{repeat:n,repeatType:r="loop"},s){const o=e.filter(mC),l=n&&r!=="loop"&&n%2===1?0:o.length-1;return!l||s===void 0?o[l]:s}const gC=40;class w0{constructor({autoplay:n=!0,delay:r=0,type:s="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=In.now(),this.options={autoplay:n,delay:r,type:s,repeat:o,repeatDelay:l,repeatType:u,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>gC?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&uC(),this._resolved}onKeyframesResolved(n,r){this.resolvedAt=In.now(),this.hasAttemptedResolve=!0;const{name:s,type:o,velocity:l,delay:u,onComplete:h,onUpdate:c,isGenerator:d}=this.options;if(!d&&!pC(n,s,o,l))if(u)this.options.duration=0;else{c&&c(sl(n,this.options,r)),h&&h(),this.resolveFinishedPromise();return}const m=this.initPlayback(n,r);m!==!1&&(this._resolved={keyframes:n,finalKeyframe:r,...m},this.onPostResolved())}onPostResolved(){}then(n,r){return this.currentFinishedPromise.then(n,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(n=>{this.resolveFinishedPromise=n})}}const Ne=(e,n,r)=>e+(n-e)*r;function Ou(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(n-e)*6*r:r<1/2?n:r<2/3?e+(n-e)*(2/3-r)*6:e}function vC({hue:e,saturation:n,lightness:r,alpha:s}){e/=360,n/=100,r/=100;let o=0,l=0,u=0;if(!n)o=l=u=r;else{const h=r<.5?r*(1+n):r+n-r*n,c=2*r-h;o=Ou(c,h,e+1/3),l=Ou(c,h,e),u=Ou(c,h,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:s}}function Ba(e,n){return r=>r>0?n:e}const ju=(e,n,r)=>{const s=e*e,o=r*(n*n-s)+s;return o<0?0:Math.sqrt(o)},xC=[dc,ri,ki],yC=e=>xC.find(n=>n.test(e));function _p(e){const n=yC(e);if(!n)return!1;let r=n.parse(e);return n===ki&&(r=vC(r)),r}const Tp=(e,n)=>{const r=_p(e),s=_p(n);if(!r||!s)return Ba(e,n);const o={...r};return l=>(o.red=ju(r.red,s.red,l),o.green=ju(r.green,s.green,l),o.blue=ju(r.blue,s.blue,l),o.alpha=Ne(r.alpha,s.alpha,l),ri.transform(o))},bC=(e,n)=>r=>n(e(r)),ro=(...e)=>e.reduce(bC),vc=new Set(["none","hidden"]);function wC(e,n){return vc.has(e)?r=>r<=0?e:n:r=>r>=1?n:e}function _C(e,n){return r=>Ne(e,n,r)}function _f(e){return typeof e=="number"?_C:typeof e=="string"?tf(e)?Ba:mt.test(e)?Tp:EC:Array.isArray(e)?_0:typeof e=="object"?mt.test(e)?Tp:TC:Ba}function _0(e,n){const r=[...e],s=r.length,o=e.map((l,u)=>_f(l)(l,n[u]));return l=>{for(let u=0;u<s;u++)r[u]=o[u](l);return r}}function TC(e,n){const r={...e,...n},s={};for(const o in r)e[o]!==void 0&&n[o]!==void 0&&(s[o]=_f(e[o])(e[o],n[o]));return o=>{for(const l in s)r[l]=s[l](o);return r}}function SC(e,n){var r;const s=[],o={color:0,var:0,number:0};for(let l=0;l<n.values.length;l++){const u=n.types[l],h=e.indexes[u][o[u]],c=(r=e.values[h])!==null&&r!==void 0?r:0;s[l]=c,o[u]++}return s}const EC=(e,n)=>{const r=Pr.createTransformer(n),s=Qs(e),o=Qs(n);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?vc.has(e)&&!o.values.length||vc.has(n)&&!s.values.length?wC(e,n):ro(_0(SC(s,o),o.values),r):Ba(e,n)};function T0(e,n,r){return typeof e=="number"&&typeof n=="number"&&typeof r=="number"?Ne(e,n,r):_f(e)(e,n)}const AC=5;function S0(e,n,r){const s=Math.max(n-AC,0);return Zg(r-e(s),n-s)}const ze={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Nu=.001;function CC({duration:e=ze.duration,bounce:n=ze.bounce,velocity:r=ze.velocity,mass:s=ze.mass}){let o,l,u=1-n;u=rr(ze.minDamping,ze.maxDamping,u),e=rr(ze.minDuration,ze.maxDuration,nr(e)),u<1?(o=d=>{const m=d*u,v=m*e,y=m-r,_=xc(d,u),S=Math.exp(-v);return Nu-y/_*S},l=d=>{const v=d*u*e,y=v*r+r,_=Math.pow(u,2)*Math.pow(d,2)*e,S=Math.exp(-v),C=xc(Math.pow(d,2),u);return(-o(d)+Nu>0?-1:1)*((y-_)*S)/C}):(o=d=>{const m=Math.exp(-d*e),v=(d-r)*e+1;return-Nu+m*v},l=d=>{const m=Math.exp(-d*e),v=(r-d)*(e*e);return m*v});const h=5/e,c=PC(o,l,h);if(e=tr(e),isNaN(c))return{stiffness:ze.stiffness,damping:ze.damping,duration:e};{const d=Math.pow(c,2)*s;return{stiffness:d,damping:u*2*Math.sqrt(s*d),duration:e}}}const RC=12;function PC(e,n,r){let s=r;for(let o=1;o<RC;o++)s=s-e(s)/n(s);return s}function xc(e,n){return e*Math.sqrt(1-n*n)}const LC=["duration","bounce"],MC=["stiffness","damping","mass"];function Sp(e,n){return n.some(r=>e[r]!==void 0)}function IC(e){let n={velocity:ze.velocity,stiffness:ze.stiffness,damping:ze.damping,mass:ze.mass,isResolvedFromDuration:!1,...e};if(!Sp(e,MC)&&Sp(e,LC))if(e.visualDuration){const r=e.visualDuration,s=2*Math.PI/(r*1.2),o=s*s,l=2*rr(.05,1,1-(e.bounce||0))*Math.sqrt(o);n={...n,mass:ze.mass,stiffness:o,damping:l}}else{const r=CC(e);n={...n,...r,mass:ze.mass},n.isResolvedFromDuration=!0}return n}function E0(e=ze.visualDuration,n=ze.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:s,restDelta:o}=r;const l=r.keyframes[0],u=r.keyframes[r.keyframes.length-1],h={done:!1,value:l},{stiffness:c,damping:d,mass:m,duration:v,velocity:y,isResolvedFromDuration:_}=IC({...r,velocity:-nr(r.velocity||0)}),S=y||0,C=d/(2*Math.sqrt(c*m)),I=u-l,L=nr(Math.sqrt(c/m)),P=Math.abs(I)<5;s||(s=P?ze.restSpeed.granular:ze.restSpeed.default),o||(o=P?ze.restDelta.granular:ze.restDelta.default);let M;if(C<1){const j=xc(L,C);M=B=>{const $=Math.exp(-C*L*B);return u-$*((S+C*L*I)/j*Math.sin(j*B)+I*Math.cos(j*B))}}else if(C===1)M=j=>u-Math.exp(-L*j)*(I+(S+L*I)*j);else{const j=L*Math.sqrt(C*C-1);M=B=>{const $=Math.exp(-C*L*B),U=Math.min(j*B,300);return u-$*((S+C*L*I)*Math.sinh(U)+j*I*Math.cosh(U))/j}}const z={calculatedDuration:_&&v||null,next:j=>{const B=M(j);if(_)h.done=j>=v;else{let $=0;C<1&&($=j===0?tr(S):S0(M,j,B));const U=Math.abs($)<=s,ce=Math.abs(u-B)<=o;h.done=U&&ce}return h.value=h.done?u:B,h},toString:()=>{const j=Math.min($g(z),cc),B=Ug($=>z.next(j*$).value,j,30);return j+"ms "+B}};return z}function Ep({keyframes:e,velocity:n=0,power:r=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:h,max:c,restDelta:d=.5,restSpeed:m}){const v=e[0],y={done:!1,value:v},_=U=>h!==void 0&&U<h||c!==void 0&&U>c,S=U=>h===void 0?c:c===void 0||Math.abs(h-U)<Math.abs(c-U)?h:c;let C=r*n;const I=v+C,L=u===void 0?I:u(I);L!==I&&(C=L-v);const P=U=>-C*Math.exp(-U/s),M=U=>L+P(U),z=U=>{const ce=P(U),H=M(U);y.done=Math.abs(ce)<=d,y.value=y.done?L:H};let j,B;const $=U=>{_(y.value)&&(j=U,B=E0({keyframes:[y.value,S(y.value)],velocity:S0(M,U,y.value),damping:o,stiffness:l,restDelta:d,restSpeed:m}))};return $(0),{calculatedDuration:null,next:U=>{let ce=!1;return!B&&j===void 0&&(ce=!0,z(U),$(U)),j!==void 0&&U>=j?B.next(U-j):(!ce&&z(U),y)}}}const DC=no(.42,0,1,1),kC=no(0,0,.58,1),A0=no(.42,0,.58,1),OC=e=>Array.isArray(e)&&typeof e[0]!="number",jC={linear:Gt,easeIn:DC,easeInOut:A0,easeOut:kC,circIn:vf,circInOut:o0,circOut:s0,backIn:gf,backInOut:r0,backOut:n0,anticipate:i0},Ap=e=>{if(ff(e)){Tg(e.length===4);const[n,r,s,o]=e;return no(n,r,s,o)}else if(typeof e=="string")return jC[e];return e};function NC(e,n,r){const s=[],o=r||T0,l=e.length-1;for(let u=0;u<l;u++){let h=o(e[u],e[u+1]);if(n){const c=Array.isArray(n)?n[u]||Gt:n;h=ro(c,h)}s.push(h)}return s}function FC(e,n,{clamp:r=!0,ease:s,mixer:o}={}){const l=e.length;if(Tg(l===n.length),l===1)return()=>n[0];if(l===2&&n[0]===n[1])return()=>n[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),n=[...n].reverse());const h=NC(n,s,o),c=h.length,d=m=>{if(u&&m<e[0])return n[0];let v=0;if(c>1)for(;v<e.length-2&&!(m<e[v+1]);v++);const y=Wi(e[v],e[v+1],m);return h[v](y)};return r?m=>d(rr(e[0],e[l-1],m)):d}function BC(e,n){const r=e[e.length-1];for(let s=1;s<=n;s++){const o=Wi(0,n,s);e.push(Ne(r,1,o))}}function VC(e){const n=[0];return BC(n,e.length-1),n}function zC(e,n){return e.map(r=>r*n)}function WC(e,n){return e.map(()=>n||A0).splice(0,e.length-1)}function Va({duration:e=300,keyframes:n,times:r,ease:s="easeInOut"}){const o=OC(s)?s.map(Ap):Ap(s),l={done:!1,value:n[0]},u=zC(r&&r.length===n.length?r:VC(n),e),h=FC(u,n,{ease:Array.isArray(o)?o:WC(n,o)});return{calculatedDuration:e,next:c=>(l.value=h(c),l.done=c>=e,l)}}const $C=e=>{const n=({timestamp:r})=>e(r);return{start:()=>Me.update(n,!0),stop:()=>Rr(n),now:()=>ht.isProcessing?ht.timestamp:In.now()}},UC={decay:Ep,inertia:Ep,tween:Va,keyframes:Va,spring:E0},HC=e=>e/100;class Tf extends w0{constructor(n){super(n),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:r,motionValue:s,element:o,keyframes:l}=this.options,u=o?.KeyframeResolver||wf,h=(c,d)=>this.onKeyframesResolved(c,d);this.resolver=new u(l,h,r,s,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(n){const{type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,h=cf(r)?r:UC[r]||Va;let c,d;h!==Va&&typeof n[0]!="number"&&(c=ro(HC,T0(n[0],n[1])),n=[0,100]);const m=h({...this.options,keyframes:n});l==="mirror"&&(d=h({...this.options,keyframes:[...n].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=$g(m));const{calculatedDuration:v}=m,y=v+o,_=y*(s+1)-o;return{generator:m,mirroredGenerator:d,mapPercentToKeyframes:c,calculatedDuration:v,resolvedDuration:y,totalDuration:_}}onPostResolved(){const{autoplay:n=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!n?this.pause():this.state=this.pendingPlayState}tick(n,r=!1){const{resolved:s}=this;if(!s){const{keyframes:U}=this.options;return{done:!0,value:U[U.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:h,keyframes:c,calculatedDuration:d,totalDuration:m,resolvedDuration:v}=s;if(this.startTime===null)return l.next(0);const{delay:y,repeat:_,repeatType:S,repeatDelay:C,onUpdate:I}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-m/this.speed,this.startTime)),r?this.currentTime=n:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(n-this.startTime)*this.speed;const L=this.currentTime-y*(this.speed>=0?1:-1),P=this.speed>=0?L<0:L>m;this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let M=this.currentTime,z=l;if(_){const U=Math.min(this.currentTime,m)/v;let ce=Math.floor(U),H=U%1;!H&&U>=1&&(H=1),H===1&&ce--,ce=Math.min(ce,_+1),!!(ce%2)&&(S==="reverse"?(H=1-H,C&&(H-=C/v)):S==="mirror"&&(z=u)),M=rr(0,1,H)*v}const j=P?{done:!1,value:c[0]}:z.next(M);h&&(j.value=h(j.value));let{done:B}=j;!P&&d!==null&&(B=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&B);return $&&o!==void 0&&(j.value=sl(c,this.options,o)),I&&I(j.value),$&&this.finish(),j}get duration(){const{resolved:n}=this;return n?nr(n.calculatedDuration):0}get time(){return nr(this.currentTime)}set time(n){n=tr(n),this.currentTime=n,this.holdTime!==null||this.speed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.speed)}get speed(){return this.playbackSpeed}set speed(n){const r=this.playbackSpeed!==n;this.playbackSpeed=n,r&&(this.time=nr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:n=$C,onPlay:r,startTime:s}=this.options;this.driver||(this.driver=n(l=>this.tick(l))),r&&r();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var n;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(n=this.currentTime)!==null&&n!==void 0?n:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}}const GC=new Set(["opacity","clipPath","filter","transform"]);function KC(e,n,r,{delay:s=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:h="easeInOut",times:c}={}){const d={[n]:r};c&&(d.offset=c);const m=Gg(h,o);return Array.isArray(m)&&(d.easing=m),e.animate(d,{delay:s,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const YC=Yc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),za=10,qC=2e4;function XC(e){return cf(e.type)||e.type==="spring"||!Hg(e.ease)}function ZC(e,n){const r=new Tf({...n,keyframes:e,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:e[0]};const o=[];let l=0;for(;!s.done&&l<qC;)s=r.sample(l),o.push(s.value),l+=za;return{times:void 0,keyframes:o,duration:l-za,ease:"linear"}}const C0={anticipate:i0,backInOut:r0,circInOut:o0};function JC(e){return e in C0}class Cp extends w0{constructor(n){super(n);const{name:r,motionValue:s,element:o,keyframes:l}=this.options;this.resolver=new b0(l,(u,h)=>this.onKeyframesResolved(u,h),r,s,o),this.resolver.scheduleResolve()}initPlayback(n,r){let{duration:s=300,times:o,ease:l,type:u,motionValue:h,name:c,startTime:d}=this.options;if(!h.owner||!h.owner.current)return!1;if(typeof l=="string"&&Fa()&&JC(l)&&(l=C0[l]),XC(this.options)){const{onComplete:v,onUpdate:y,motionValue:_,element:S,...C}=this.options,I=ZC(n,C);n=I.keyframes,n.length===1&&(n[1]=n[0]),s=I.duration,o=I.times,l=I.ease,u="keyframes"}const m=KC(h.owner.current,c,n,{...this.options,duration:s,times:o,ease:l});return m.startTime=d??this.calcStartTime(),this.pendingTimeline?(fp(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:v}=this.options;h.set(sl(n,this.options,r)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:s,times:o,type:u,ease:l,keyframes:n}}get duration(){const{resolved:n}=this;if(!n)return 0;const{duration:r}=n;return nr(r)}get time(){const{resolved:n}=this;if(!n)return 0;const{animation:r}=n;return nr(r.currentTime||0)}set time(n){const{resolved:r}=this;if(!r)return;const{animation:s}=r;s.currentTime=tr(n)}get speed(){const{resolved:n}=this;if(!n)return 1;const{animation:r}=n;return r.playbackRate}set speed(n){const{resolved:r}=this;if(!r)return;const{animation:s}=r;s.playbackRate=n}get state(){const{resolved:n}=this;if(!n)return"idle";const{animation:r}=n;return r.playState}get startTime(){const{resolved:n}=this;if(!n)return null;const{animation:r}=n;return r.startTime}attachTimeline(n){if(!this._resolved)this.pendingTimeline=n;else{const{resolved:r}=this;if(!r)return Gt;const{animation:s}=r;fp(s,n)}return Gt}play(){if(this.isStopped)return;const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:n}=this;if(!n)return;const{animation:r,keyframes:s,duration:o,type:l,ease:u,times:h}=n;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:d,onUpdate:m,onComplete:v,element:y,..._}=this.options,S=new Tf({..._,keyframes:s,duration:o,type:l,ease:u,times:h,isGenerator:!0}),C=tr(this.time);d.setWithVelocity(S.sample(C-za).value,S.sample(C).value,za)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:n}=this;n&&n.animation.finish()}cancel(){const{resolved:n}=this;n&&n.animation.cancel()}static supports(n){const{motionValue:r,name:s,repeatDelay:o,repeatType:l,damping:u,type:h}=n;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=r.owner.getProps();return YC()&&s&&GC.has(s)&&!c&&!d&&!o&&l!=="mirror"&&u!==0&&h!=="inertia"}}const QC={type:"spring",stiffness:500,damping:25,restSpeed:10},e2=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),t2={type:"keyframes",duration:.8},n2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},r2=(e,{keyframes:n})=>n.length>2?t2:ui.has(e)?e.startsWith("scale")?e2(n[1]):QC:n2;function i2({when:e,delay:n,delayChildren:r,staggerChildren:s,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:h,from:c,elapsed:d,...m}){return!!Object.keys(m).length}const Sf=(e,n,r,s={},o,l)=>u=>{const h=uf(s,e)||{},c=h.delay||s.delay||0;let{elapsed:d=0}=s;d=d-tr(c);let m={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-d,onUpdate:y=>{n.set(y),h.onUpdate&&h.onUpdate(y)},onComplete:()=>{u(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:l?void 0:o};i2(h)||(m={...m,...r2(e,m)}),m.duration&&(m.duration=tr(m.duration)),m.repeatDelay&&(m.repeatDelay=tr(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(v=!0)),v&&!l&&n.get()!==void 0){const y=sl(m.keyframes,h);if(y!==void 0)return Me.update(()=>{m.onUpdate(y),m.onComplete()}),new TA([])}return!l&&Cp.supports(m)?new Cp(m):new Tf(m)};function s2({protectedKeys:e,needsAnimating:n},r){const s=e.hasOwnProperty(r)&&n[r]!==!0;return n[r]=!1,s}function R0(e,n,{delay:r=0,transitionOverride:s,type:o}={}){var l;let{transition:u=e.getDefaultTransition(),transitionEnd:h,...c}=n;s&&(u=s);const d=[],m=o&&e.animationState&&e.animationState.getState()[o];for(const v in c){const y=e.getValue(v,(l=e.latestValues[v])!==null&&l!==void 0?l:null),_=c[v];if(_===void 0||m&&s2(m,v))continue;const S={delay:r,...uf(u||{},v)};let C=!1;if(window.MotionHandoffAnimation){const L=Jg(e);if(L){const P=window.MotionHandoffAnimation(L,v,Me);P!==null&&(S.startTime=P,C=!0)}}hc(e,v),y.start(Sf(v,y,_,e.shouldReduceMotion&&Xg.has(v)?{type:!1}:S,e,C));const I=y.animation;I&&d.push(I)}return h&&Promise.all(d).then(()=>{Me.update(()=>{h&&NA(e,h)})}),d}function yc(e,n,r={}){var s;const o=il(e,n,r.type==="exit"?(s=e.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(l=r.transitionOverride);const u=o?()=>Promise.all(R0(e,o,r)):()=>Promise.resolve(),h=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:y}=l;return o2(e,n,m+d,v,y,r)}:()=>Promise.resolve(),{when:c}=l;if(c){const[d,m]=c==="beforeChildren"?[u,h]:[h,u];return d().then(()=>m())}else return Promise.all([u(),h(r.delay)])}function o2(e,n,r=0,s=0,o=1,l){const u=[],h=(e.variantChildren.size-1)*s,c=o===1?(d=0)=>d*s:(d=0)=>h-d*s;return Array.from(e.variantChildren).sort(a2).forEach((d,m)=>{d.notify("AnimationStart",n),u.push(yc(d,n,{...l,delay:r+c(m)}).then(()=>d.notify("AnimationComplete",n)))}),Promise.all(u)}function a2(e,n){return e.sortNodePosition(n)}function l2(e,n,r={}){e.notify("AnimationStart",n);let s;if(Array.isArray(n)){const o=n.map(l=>yc(e,l,r));s=Promise.all(o)}else if(typeof n=="string")s=yc(e,n,r);else{const o=typeof n=="function"?il(e,n,r.custom):n;s=Promise.all(R0(e,o,r))}return s.then(()=>{e.notify("AnimationComplete",n)})}const u2=Xc.length;function P0(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?P0(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const n={};for(let r=0;r<u2;r++){const s=Xc[r],o=e.props[s];(Xs(o)||o===!1)&&(n[s]=o)}return n}const c2=[...qc].reverse(),f2=qc.length;function h2(e){return n=>Promise.all(n.map(({animation:r,options:s})=>l2(e,r,s)))}function d2(e){let n=h2(e),r=Rp(),s=!0;const o=c=>(d,m)=>{var v;const y=il(e,m,c==="exit"?(v=e.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(y){const{transition:_,transitionEnd:S,...C}=y;d={...d,...C,...S}}return d};function l(c){n=c(e)}function u(c){const{props:d}=e,m=P0(e.parent)||{},v=[],y=new Set;let _={},S=1/0;for(let I=0;I<f2;I++){const L=c2[I],P=r[L],M=d[L]!==void 0?d[L]:m[L],z=Xs(M),j=L===c?P.isActive:null;j===!1&&(S=I);let B=M===m[L]&&M!==d[L]&&z;if(B&&s&&e.manuallyAnimateOnMount&&(B=!1),P.protectedKeys={..._},!P.isActive&&j===null||!M&&!P.prevProp||nl(M)||typeof M=="boolean")continue;const $=p2(P.prevProp,M);let U=$||L===c&&P.isActive&&!B&&z||I>S&&z,ce=!1;const H=Array.isArray(M)?M:[M];let J=H.reduce(o(L),{});j===!1&&(J={});const{prevResolvedValues:Ce={}}=P,De={...Ce,...J},St=me=>{U=!0,y.has(me)&&(ce=!0,y.delete(me)),P.needsAnimating[me]=!0;const be=e.getValue(me);be&&(be.liveStyle=!1)};for(const me in De){const be=J[me],ke=Ce[me];if(_.hasOwnProperty(me))continue;let Ze=!1;uc(be)&&uc(ke)?Ze=!Wg(be,ke):Ze=be!==ke,Ze?be!=null?St(me):y.add(me):be!==void 0&&y.has(me)?St(me):P.protectedKeys[me]=!0}P.prevProp=M,P.prevResolvedValues=J,P.isActive&&(_={..._,...J}),s&&e.blockInitialAnimation&&(U=!1),U&&(!(B&&$)||ce)&&v.push(...H.map(me=>({animation:me,options:{type:L}})))}if(y.size){const I={};y.forEach(L=>{const P=e.getBaseTarget(L),M=e.getValue(L);M&&(M.liveStyle=!0),I[L]=P??null}),v.push({animation:I})}let C=!!v.length;return s&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(C=!1),s=!1,C?n(v):Promise.resolve()}function h(c,d){var m;if(r[c].isActive===d)return Promise.resolve();(m=e.variantChildren)===null||m===void 0||m.forEach(y=>{var _;return(_=y.animationState)===null||_===void 0?void 0:_.setActive(c,d)}),r[c].isActive=d;const v=u(c);for(const y in r)r[y].protectedKeys={};return v}return{animateChanges:u,setActive:h,setAnimateFunction:l,getState:()=>r,reset:()=>{r=Rp(),s=!0}}}function p2(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!Wg(n,e):!1}function qr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Rp(){return{animate:qr(!0),whileInView:qr(),whileHover:qr(),whileTap:qr(),whileDrag:qr(),whileFocus:qr(),exit:qr()}}class Lr{constructor(n){this.isMounted=!1,this.node=n}update(){}}class m2 extends Lr{constructor(n){super(n),n.animationState||(n.animationState=d2(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();nl(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:r}=this.node.prevProps||{};n!==r&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)===null||n===void 0||n.call(this)}}let g2=0;class v2 extends Lr{constructor(){super(...arguments),this.id=g2++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===s)return;const o=this.node.animationState.setActive("exit",!n);r&&!n&&o.then(()=>r(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const x2={animation:{Feature:m2},exit:{Feature:v2}};function eo(e,n,r,s={passive:!0}){return e.addEventListener(n,r,s),()=>e.removeEventListener(n,r)}function io(e){return{point:{x:e.pageX,y:e.pageY}}}const y2=e=>n=>hf(n)&&e(n,io(n));function Us(e,n,r,s){return eo(e,n,y2(r),s)}const Pp=(e,n)=>Math.abs(e-n);function b2(e,n){const r=Pp(e.x,n.x),s=Pp(e.y,n.y);return Math.sqrt(r**2+s**2)}class L0{constructor(n,r,{transformPagePoint:s,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Bu(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,_=b2(v.offset,{x:0,y:0})>=3;if(!y&&!_)return;const{point:S}=v,{timestamp:C}=ht;this.history.push({...S,timestamp:C});const{onStart:I,onMove:L}=this.handlers;y||(I&&I(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,v)},this.handlePointerMove=(v,y)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Fu(y,this.transformPagePoint),Me.update(this.updatePoint,!0)},this.handlePointerUp=(v,y)=>{this.end();const{onEnd:_,onSessionEnd:S,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=Bu(v.type==="pointercancel"?this.lastMoveEventInfo:Fu(y,this.transformPagePoint),this.history);this.startEvent&&_&&_(v,I),S&&S(v,I)},!hf(n))return;this.dragSnapToOrigin=l,this.handlers=r,this.transformPagePoint=s,this.contextWindow=o||window;const u=io(n),h=Fu(u,this.transformPagePoint),{point:c}=h,{timestamp:d}=ht;this.history=[{...c,timestamp:d}];const{onSessionStart:m}=r;m&&m(n,Bu(h,this.history)),this.removeListeners=ro(Us(this.contextWindow,"pointermove",this.handlePointerMove),Us(this.contextWindow,"pointerup",this.handlePointerUp),Us(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),Rr(this.updatePoint)}}function Fu(e,n){return n?{point:n(e.point)}:e}function Lp(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Bu({point:e},n){return{point:e,delta:Lp(e,M0(n)),offset:Lp(e,w2(n)),velocity:_2(n,.1)}}function w2(e){return e[0]}function M0(e){return e[e.length-1]}function _2(e,n){if(e.length<2)return{x:0,y:0};let r=e.length-1,s=null;const o=M0(e);for(;r>=0&&(s=e[r],!(o.timestamp-s.timestamp>tr(n)));)r--;if(!s)return{x:0,y:0};const l=nr(o.timestamp-s.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-s.x)/l,y:(o.y-s.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const I0=1e-4,T2=1-I0,S2=1+I0,D0=.01,E2=0-D0,A2=0+D0;function Kt(e){return e.max-e.min}function C2(e,n,r){return Math.abs(e-n)<=r}function Mp(e,n,r,s=.5){e.origin=s,e.originPoint=Ne(n.min,n.max,e.origin),e.scale=Kt(r)/Kt(n),e.translate=Ne(r.min,r.max,e.origin)-e.originPoint,(e.scale>=T2&&e.scale<=S2||isNaN(e.scale))&&(e.scale=1),(e.translate>=E2&&e.translate<=A2||isNaN(e.translate))&&(e.translate=0)}function Hs(e,n,r,s){Mp(e.x,n.x,r.x,s?s.originX:void 0),Mp(e.y,n.y,r.y,s?s.originY:void 0)}function Ip(e,n,r){e.min=r.min+n.min,e.max=e.min+Kt(n)}function R2(e,n,r){Ip(e.x,n.x,r.x),Ip(e.y,n.y,r.y)}function Dp(e,n,r){e.min=n.min-r.min,e.max=e.min+Kt(n)}function Gs(e,n,r){Dp(e.x,n.x,r.x),Dp(e.y,n.y,r.y)}function P2(e,{min:n,max:r},s){return n!==void 0&&e<n?e=s?Ne(n,e,s.min):Math.max(e,n):r!==void 0&&e>r&&(e=s?Ne(r,e,s.max):Math.min(e,r)),e}function kp(e,n,r){return{min:n!==void 0?e.min+n:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function L2(e,{top:n,left:r,bottom:s,right:o}){return{x:kp(e.x,r,o),y:kp(e.y,n,s)}}function Op(e,n){let r=n.min-e.min,s=n.max-e.max;return n.max-n.min<e.max-e.min&&([r,s]=[s,r]),{min:r,max:s}}function M2(e,n){return{x:Op(e.x,n.x),y:Op(e.y,n.y)}}function I2(e,n){let r=.5;const s=Kt(e),o=Kt(n);return o>s?r=Wi(n.min,n.max-s,e.min):s>o&&(r=Wi(e.min,e.max-o,n.min)),rr(0,1,r)}function D2(e,n){const r={};return n.min!==void 0&&(r.min=n.min-e.min),n.max!==void 0&&(r.max=n.max-e.min),r}const bc=.35;function k2(e=bc){return e===!1?e=0:e===!0&&(e=bc),{x:jp(e,"left","right"),y:jp(e,"top","bottom")}}function jp(e,n,r){return{min:Np(e,n),max:Np(e,r)}}function Np(e,n){return typeof e=="number"?e:e[n]||0}const Fp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oi=()=>({x:Fp(),y:Fp()}),Bp=()=>({min:0,max:0}),Ke=()=>({x:Bp(),y:Bp()});function on(e){return[e("x"),e("y")]}function k0({top:e,left:n,right:r,bottom:s}){return{x:{min:n,max:r},y:{min:e,max:s}}}function O2({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function j2(e,n){if(!n)return e;const r=n({x:e.left,y:e.top}),s=n({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function Vu(e){return e===void 0||e===1}function wc({scale:e,scaleX:n,scaleY:r}){return!Vu(e)||!Vu(n)||!Vu(r)}function Jr(e){return wc(e)||O0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function O0(e){return Vp(e.x)||Vp(e.y)}function Vp(e){return e&&e!=="0%"}function Wa(e,n,r){const s=e-r,o=n*s;return r+o}function zp(e,n,r,s,o){return o!==void 0&&(e=Wa(e,o,s)),Wa(e,r,s)+n}function _c(e,n=0,r=1,s,o){e.min=zp(e.min,n,r,s,o),e.max=zp(e.max,n,r,s,o)}function j0(e,{x:n,y:r}){_c(e.x,n.translate,n.scale,n.originPoint),_c(e.y,r.translate,r.scale,r.originPoint)}const Wp=.999999999999,$p=1.0000000000001;function N2(e,n,r,s=!1){const o=r.length;if(!o)return;n.x=n.y=1;let l,u;for(let h=0;h<o;h++){l=r[h],u=l.projectionDelta;const{visualElement:c}=l.options;c&&c.props.style&&c.props.style.display==="contents"||(s&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Ni(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(n.x*=u.x.scale,n.y*=u.y.scale,j0(e,u)),s&&Jr(l.latestValues)&&Ni(e,l.latestValues))}n.x<$p&&n.x>Wp&&(n.x=1),n.y<$p&&n.y>Wp&&(n.y=1)}function ji(e,n){e.min=e.min+n,e.max=e.max+n}function Up(e,n,r,s,o=.5){const l=Ne(e.min,e.max,o);_c(e,n,r,l,s)}function Ni(e,n){Up(e.x,n.x,n.scaleX,n.scale,n.originX),Up(e.y,n.y,n.scaleY,n.scale,n.originY)}function N0(e,n){return k0(j2(e.getBoundingClientRect(),n))}function F2(e,n,r){const s=N0(e,r),{scroll:o}=n;return o&&(ji(s.x,o.offset.x),ji(s.y,o.offset.y)),s}const F0=({current:e})=>e?e.ownerDocument.defaultView:null,B2=new WeakMap;class V2{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ke(),this.visualElement=n}start(n,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(io(m).point)},l=(m,v)=>{const{drag:y,dragPropagation:_,onDragStart:S}=this.getProps();if(y&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=IA(y),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),on(I=>{let L=this.getAxisMotionValue(I).get()||0;if(Mn.test(L)){const{projection:P}=this.visualElement;if(P&&P.layout){const M=P.layout.layoutBox[I];M&&(L=Kt(M)*(parseFloat(L)/100))}}this.originPoint[I]=L}),S&&Me.postRender(()=>S(m,v)),hc(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},u=(m,v)=>{const{dragPropagation:y,dragDirectionLock:_,onDirectionLock:S,onDrag:C}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:I}=v;if(_&&this.currentDirection===null){this.currentDirection=z2(I),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",v.point,I),this.updateAxis("y",v.point,I),this.visualElement.render(),C&&C(m,v)},h=(m,v)=>this.stop(m,v),c=()=>on(m=>{var v;return this.getAnimationState(m)==="paused"&&((v=this.getAxisMotionValue(m).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new L0(n,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:h,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:F0(this.visualElement)})}stop(n,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Me.postRender(()=>l(n,r))}cancel(){this.isDragging=!1;const{projection:n,animationState:r}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(n,r,s){const{drag:o}=this.getProps();if(!s||!xa(n,o,this.currentDirection))return;const l=this.getAxisMotionValue(n);let u=this.originPoint[n]+s[n];this.constraints&&this.constraints[n]&&(u=P2(u,this.constraints[n],this.elastic[n])),l.set(u)}resolveConstraints(){var n;const{dragConstraints:r,dragElastic:s}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,l=this.constraints;r&&Di(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=L2(o.layoutBox,r):this.constraints=!1,this.elastic=k2(s),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&on(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=D2(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:r}=this.getProps();if(!n||!Di(n))return!1;const s=n.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=F2(s,o.root,this.visualElement.getTransformPagePoint());let u=M2(o.layout.layoutBox,l);if(r){const h=r(O2(u));this.hasMutatedConstraints=!!h,h&&(u=k0(h))}return u}startAnimation(n){const{drag:r,dragMomentum:s,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:h}=this.getProps(),c=this.constraints||{},d=on(m=>{if(!xa(m,r,this.currentDirection))return;let v=c&&c[m]||{};u&&(v={min:0,max:0});const y=o?200:1e6,_=o?40:1e7,S={type:"inertia",velocity:s?n[m]:0,bounceStiffness:y,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(m,S)});return Promise.all(d).then(h)}startAxisValueAnimation(n,r){const s=this.getAxisMotionValue(n);return hc(this.visualElement,n),s.start(Sf(n,s,0,r,this.visualElement,!1))}stopAnimation(){on(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){on(n=>{var r;return(r=this.getAxisMotionValue(n).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(n){var r;return(r=this.getAxisMotionValue(n).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(n){const r=`_drag${n.toUpperCase()}`,s=this.visualElement.getProps(),o=s[r];return o||this.visualElement.getValue(n,(s.initial?s.initial[n]:void 0)||0)}snapToCursor(n){on(r=>{const{drag:s}=this.getProps();if(!xa(r,s,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(r);if(o&&o.layout){const{min:u,max:h}=o.layout.layoutBox[r];l.set(n[r]-Ne(u,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!Di(r)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};on(u=>{const h=this.getAxisMotionValue(u);if(h&&this.constraints!==!1){const c=h.get();o[u]=I2({min:c,max:c},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),on(u=>{if(!xa(u,n,null))return;const h=this.getAxisMotionValue(u),{min:c,max:d}=this.constraints[u];h.set(Ne(c,d,o[u]))})}addListeners(){if(!this.visualElement.current)return;B2.set(this.visualElement,this);const n=this.visualElement.current,r=Us(n,"pointerdown",c=>{const{drag:d,dragListener:m=!0}=this.getProps();d&&m&&this.start(c)}),s=()=>{const{dragConstraints:c}=this.getProps();Di(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Me.read(s);const u=eo(window,"resize",()=>this.scalePositionWithinConstraints()),h=o.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(on(m=>{const v=this.getAxisMotionValue(m);v&&(this.originPoint[m]+=c[m].translate,v.set(v.get()+c[m].translate))}),this.visualElement.render())}));return()=>{u(),r(),l(),h&&h()}}getProps(){const n=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=bc,dragMomentum:h=!0}=n;return{...n,drag:r,dragDirectionLock:s,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:h}}}function xa(e,n,r){return(n===!0||n===e)&&(r===null||r===e)}function z2(e,n=10){let r=null;return Math.abs(e.y)>n?r="y":Math.abs(e.x)>n&&(r="x"),r}class W2 extends Lr{constructor(n){super(n),this.removeGroupControls=Gt,this.removeListeners=Gt,this.controls=new V2(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Hp=e=>(n,r)=>{e&&Me.postRender(()=>e(n,r))};class $2 extends Lr{constructor(){super(...arguments),this.removePointerDownListener=Gt}onPointerDown(n){this.session=new L0(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:F0(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:r,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:Hp(n),onStart:Hp(r),onMove:s,onEnd:(l,u)=>{delete this.session,o&&Me.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Us(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Aa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Gp(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const ks={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(re.test(e))e=parseFloat(e);else return e;const r=Gp(e,n.target.x),s=Gp(e,n.target.y);return`${r}% ${s}%`}},U2={correct:(e,{treeScale:n,projectionDelta:r})=>{const s=e,o=Pr.parse(e);if(o.length>5)return s;const l=Pr.createTransformer(e),u=typeof o[0]!="number"?1:0,h=r.x.scale*n.x,c=r.y.scale*n.y;o[0+u]/=h,o[1+u]/=c;const d=Ne(h,c,.5);return typeof o[2+u]=="number"&&(o[2+u]/=d),typeof o[3+u]=="number"&&(o[3+u]/=d),l(o)}};class H2 extends k.Component{componentDidMount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:s,layoutId:o}=this.props,{projection:l}=n;fA(G2),l&&(r.group&&r.group.add(l),s&&s.register&&o&&s.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Aa.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:r,visualElement:s,drag:o,isPresent:l}=this.props,u=s.projection;return u&&(u.isPresent=l,o||n.layoutDependency!==r||r===void 0?u.willUpdate():this.safeToRemove(),n.isPresent!==l&&(l?u.promote():u.relegate()||Me.postRender(()=>{const h=u.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),Jc.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:o}=n;o&&(o.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function B0(e){const[n,r]=wg(),s=k.useContext(Uc);return g.jsx(H2,{...e,layoutGroup:s,switchLayoutGroup:k.useContext(Pg),isPresent:n,safeToRemove:r})}const G2={borderRadius:{...ks,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ks,borderTopRightRadius:ks,borderBottomLeftRadius:ks,borderBottomRightRadius:ks,boxShadow:U2};function K2(e,n,r){const s=gt(e)?e:Js(e);return s.start(Sf("",s,n,r)),s.animation}function Y2(e){return e instanceof SVGElement&&e.tagName!=="svg"}const q2=(e,n)=>e.depth-n.depth;class X2{constructor(){this.children=[],this.isDirty=!1}add(n){df(this.children,n),this.isDirty=!0}remove(n){pf(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(q2),this.isDirty=!1,this.children.forEach(n)}}function Z2(e,n){const r=In.now(),s=({timestamp:o})=>{const l=o-r;l>=n&&(Rr(s),e(l-n))};return Me.read(s,!0),()=>Rr(s)}const V0=["TopLeft","TopRight","BottomLeft","BottomRight"],J2=V0.length,Kp=e=>typeof e=="string"?parseFloat(e):e,Yp=e=>typeof e=="number"||re.test(e);function Q2(e,n,r,s,o,l){o?(e.opacity=Ne(0,r.opacity!==void 0?r.opacity:1,eR(s)),e.opacityExit=Ne(n.opacity!==void 0?n.opacity:1,0,tR(s))):l&&(e.opacity=Ne(n.opacity!==void 0?n.opacity:1,r.opacity!==void 0?r.opacity:1,s));for(let u=0;u<J2;u++){const h=`border${V0[u]}Radius`;let c=qp(n,h),d=qp(r,h);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||Yp(c)===Yp(d)?(e[h]=Math.max(Ne(Kp(c),Kp(d),s),0),(Mn.test(d)||Mn.test(c))&&(e[h]+="%")):e[h]=d}(n.rotate||r.rotate)&&(e.rotate=Ne(n.rotate||0,r.rotate||0,s))}function qp(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const eR=z0(0,.5,s0),tR=z0(.5,.95,Gt);function z0(e,n,r){return s=>s<e?0:s>n?1:r(Wi(e,n,s))}function Xp(e,n){e.min=n.min,e.max=n.max}function sn(e,n){Xp(e.x,n.x),Xp(e.y,n.y)}function Zp(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function Jp(e,n,r,s,o){return e-=n,e=Wa(e,1/r,s),o!==void 0&&(e=Wa(e,1/o,s)),e}function nR(e,n=0,r=1,s=.5,o,l=e,u=e){if(Mn.test(n)&&(n=parseFloat(n),n=Ne(u.min,u.max,n/100)-u.min),typeof n!="number")return;let h=Ne(l.min,l.max,s);e===l&&(h-=n),e.min=Jp(e.min,n,r,h,o),e.max=Jp(e.max,n,r,h,o)}function Qp(e,n,[r,s,o],l,u){nR(e,n[r],n[s],n[o],n.scale,l,u)}const rR=["x","scaleX","originX"],iR=["y","scaleY","originY"];function em(e,n,r,s){Qp(e.x,n,rR,r?r.x:void 0,s?s.x:void 0),Qp(e.y,n,iR,r?r.y:void 0,s?s.y:void 0)}function tm(e){return e.translate===0&&e.scale===1}function W0(e){return tm(e.x)&&tm(e.y)}function nm(e,n){return e.min===n.min&&e.max===n.max}function sR(e,n){return nm(e.x,n.x)&&nm(e.y,n.y)}function rm(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function $0(e,n){return rm(e.x,n.x)&&rm(e.y,n.y)}function im(e){return Kt(e.x)/Kt(e.y)}function sm(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class oR{constructor(){this.members=[]}add(n){df(this.members,n),n.scheduleRender()}remove(n){if(pf(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(n){const r=this.members.findIndex(o=>n===o);if(r===0)return!1;let s;for(let o=r;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){s=l;break}}return s?(this.promote(s),!0):!1}promote(n,r){const s=this.lead;if(n!==s&&(this.prevLead=s,this.lead=n,n.show(),s)){s.instance&&s.scheduleRender(),n.scheduleRender(),n.resumeFrom=s,r&&(n.resumeFrom.preserveOpacity=!0),s.snapshot&&(n.snapshot=s.snapshot,n.snapshot.latestValues=s.animationValues||s.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:o}=n.options;o===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:r,resumingFrom:s}=n;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function aR(e,n,r){let s="";const o=e.x.translate/n.x,l=e.y.translate/n.y,u=r?.z||0;if((o||l||u)&&(s=`translate3d(${o}px, ${l}px, ${u}px) `),(n.x!==1||n.y!==1)&&(s+=`scale(${1/n.x}, ${1/n.y}) `),r){const{transformPerspective:d,rotate:m,rotateX:v,rotateY:y,skewX:_,skewY:S}=r;d&&(s=`perspective(${d}px) ${s}`),m&&(s+=`rotate(${m}deg) `),v&&(s+=`rotateX(${v}deg) `),y&&(s+=`rotateY(${y}deg) `),_&&(s+=`skewX(${_}deg) `),S&&(s+=`skewY(${S}deg) `)}const h=e.x.scale*n.x,c=e.y.scale*n.y;return(h!==1||c!==1)&&(s+=`scale(${h}, ${c})`),s||"none"}const Qr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Bs=typeof window<"u"&&window.MotionDebug!==void 0,zu=["","X","Y","Z"],lR={visibility:"hidden"},om=1e3;let uR=0;function Wu(e,n,r,s){const{latestValues:o}=n;o[e]&&(r[e]=o[e],n.setStaticValue(e,0),s&&(s[e]=0))}function U0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const r=Jg(n);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",Me,!(o||l))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&U0(s)}function H0({attachResizeListener:e,defaultParent:n,measureScroll:r,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},h=n?.()){this.id=uR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Bs&&(Qr.totalNodes=Qr.resolvedTargetDeltas=Qr.recalculatedProjection=0),this.nodes.forEach(hR),this.nodes.forEach(vR),this.nodes.forEach(xR),this.nodes.forEach(dR),Bs&&window.MotionDebug.record(Qr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new X2)}addEventListener(u,h){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new mf),this.eventHandlers.get(u).add(h)}notifyListeners(u,...h){const c=this.eventHandlers.get(u);c&&c.notify(...h)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Y2(u),this.instance=u;const{layoutId:c,layout:d,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(d||c)&&(this.isLayoutDirty=!0),e){let v;const y=()=>this.root.updateBlockedByResize=!1;e(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=Z2(y,250),Aa.hasAnimatedSinceResize&&(Aa.hasAnimatedSinceResize=!1,this.nodes.forEach(lm))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&m&&(c||d)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:y,hasRelativeTargetChanged:_,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||m.getDefaultTransition()||TR,{onLayoutAnimationStart:I,onLayoutAnimationComplete:L}=m.getProps(),P=!this.targetLayout||!$0(this.targetLayout,S)||_,M=!y&&_;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||M||y&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,M);const z={...uf(C,"layout"),onPlay:I,onComplete:L};(m.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z)}else y||lm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Rr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(yR),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&U0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:c}=this.options;if(h===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(am);return}this.isUpdating||this.nodes.forEach(mR),this.isUpdating=!1,this.nodes.forEach(gR),this.nodes.forEach(cR),this.nodes.forEach(fR),this.clearAllSnapshots();const h=In.now();ht.delta=rr(0,1e3/60,h-ht.timestamp),ht.timestamp=h,ht.isProcessing=!0,Iu.update.process(ht),Iu.preRender.process(ht),Iu.render.process(ht),ht.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(pR),this.sharedNodes.forEach(bR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Me.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(h=!1),h){const c=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:c,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!W0(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,m=d!==this.prevTransformTemplateValue;u&&(h||Jr(this.latestValues)||m)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const h=this.measurePageBox();let c=this.removeElementScroll(h);return u&&(c=this.removeTransform(c)),SR(c),{animationId:this.root.animationId,measuredBox:h,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:h}=this.options;if(!h)return Ke();const c=h.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(ER))){const{scroll:m}=this.root;m&&(ji(c.x,m.offset.x),ji(c.y,m.offset.y))}return c}removeElementScroll(u){var h;const c=Ke();if(sn(c,u),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return c;for(let d=0;d<this.path.length;d++){const m=this.path[d],{scroll:v,options:y}=m;m!==this.root&&v&&y.layoutScroll&&(v.wasRoot&&sn(c,u),ji(c.x,v.offset.x),ji(c.y,v.offset.y))}return c}applyTransform(u,h=!1){const c=Ke();sn(c,u);for(let d=0;d<this.path.length;d++){const m=this.path[d];!h&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Ni(c,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),Jr(m.latestValues)&&Ni(c,m.latestValues)}return Jr(this.latestValues)&&Ni(c,this.latestValues),c}removeTransform(u){const h=Ke();sn(h,u);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!Jr(d.latestValues))continue;wc(d.latestValues)&&d.updateSnapshot();const m=Ke(),v=d.measurePageBox();sn(m,v),em(h,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,m)}return Jr(this.latestValues)&&em(h,this.latestValues),h}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ht.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var h;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:y}=this.options;if(!(!this.layout||!(v||y))){if(this.resolvedRelativeTargetAt=ht.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),Gs(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ke(),this.targetWithTransforms=Ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),R2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):sn(this.target,this.layout.layoutBox),j0(this.target,this.targetDelta)):sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),Gs(this.relativeTargetOrigin,this.target,_.target),sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Bs&&Qr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||wc(this.parent.latestValues)||O0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const h=this.getLead(),c=!!this.resumingFrom||this!==h;let d=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===ht.timestamp&&(d=!1),d)return;const{layout:m,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||v))return;sn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,_=this.treeScale.y;N2(this.layoutCorrected,this.treeScale,this.path,c),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Ke());const{target:S}=h;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Zp(this.prevProjectionDelta.x,this.projectionDelta.x),Zp(this.prevProjectionDelta.y,this.projectionDelta.y)),Hs(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==_||!sm(this.projectionDelta.x,this.prevProjectionDelta.x)||!sm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S)),Bs&&Qr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),u){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oi(),this.projectionDelta=Oi(),this.projectionDeltaWithTransform=Oi()}setAnimationOrigin(u,h=!1){const c=this.snapshot,d=c?c.latestValues:{},m={...this.latestValues},v=Oi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const y=Ke(),_=c?c.source:void 0,S=this.layout?this.layout.source:void 0,C=_!==S,I=this.getStack(),L=!I||I.members.length<=1,P=!!(C&&!L&&this.options.crossfade===!0&&!this.path.some(_R));this.animationProgress=0;let M;this.mixTargetDelta=z=>{const j=z/1e3;um(v.x,u.x,j),um(v.y,u.y,j),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Gs(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),wR(this.relativeTarget,this.relativeTargetOrigin,y,j),M&&sR(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=Ke()),sn(M,this.relativeTarget)),C&&(this.animationValues=m,Q2(m,d,this.latestValues,j,P,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Rr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Me.update(()=>{Aa.hasAnimatedSinceResize=!0,this.currentAnimation=K2(0,om,{...u,onUpdate:h=>{this.mixTargetDelta(h),u.onUpdate&&u.onUpdate(h)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(om),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:h,target:c,layout:d,latestValues:m}=u;if(!(!h||!c||!d)){if(this!==u&&this.layout&&d&&G0(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||Ke();const v=Kt(this.layout.layoutBox.x);c.x.min=u.target.x.min,c.x.max=c.x.min+v;const y=Kt(this.layout.layoutBox.y);c.y.min=u.target.y.min,c.y.max=c.y.min+y}sn(h,c),Ni(h,m),Hs(this.projectionDeltaWithTransform,this.layoutCorrected,h,m)}}registerSharedNode(u,h){this.sharedNodes.has(u)||this.sharedNodes.set(u,new oR),this.sharedNodes.get(u).add(h);const d=h.options.initialPromotionConfig;h.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(h):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:h}=this.options;return h?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:h}=this.options;return h?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:h,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),u&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let h=!1;const{latestValues:c}=u;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(h=!0),!h)return;const d={};c.z&&Wu("z",u,d,this.animationValues);for(let m=0;m<zu.length;m++)Wu(`rotate${zu[m]}`,u,d,this.animationValues),Wu(`skew${zu[m]}`,u,d,this.animationValues);u.render();for(const m in d)u.setStaticValue(m,d[m]),this.animationValues&&(this.animationValues[m]=d[m]);u.scheduleRender()}getProjectionStyles(u){var h,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return lR;const d={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=Sa(u?.pointerEvents)||"",d.transform=m?m(this.latestValues,""):"none",d;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const C={};return this.options.layoutId&&(C.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,C.pointerEvents=Sa(u?.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(C.transform=m?m({},""):"none",this.hasProjected=!1),C}const y=v.animationValues||v.latestValues;this.applyTransformsToTarget(),d.transform=aR(this.projectionDeltaWithTransform,this.treeScale,y),m&&(d.transform=m(y,d.transform));const{x:_,y:S}=this.projectionDelta;d.transformOrigin=`${_.origin*100}% ${S.origin*100}% 0`,v.animationValues?d.opacity=v===this?(c=(h=y.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=v===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const C in Na){if(y[C]===void 0)continue;const{correct:I,applyTo:L}=Na[C],P=d.transform==="none"?y[C]:I(y[C],v);if(L){const M=L.length;for(let z=0;z<M;z++)d[L[z]]=P}else d[C]=P}return this.options.layoutId&&(d.pointerEvents=v===this?Sa(u?.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var h;return(h=u.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(am),this.root.sharedNodes.clear()}}}function cR(e){e.updateLayout()}function fR(e){var n;const r=((n=e.resumeFrom)===null||n===void 0?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=e.layout,{animationType:l}=e.options,u=r.source!==e.layout.source;l==="size"?on(v=>{const y=u?r.measuredBox[v]:r.layoutBox[v],_=Kt(y);y.min=s[v].min,y.max=y.min+_}):G0(l,r.layoutBox,s)&&on(v=>{const y=u?r.measuredBox[v]:r.layoutBox[v],_=Kt(s[v]);y.max=y.min+_,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+_)});const h=Oi();Hs(h,s,r.layoutBox);const c=Oi();u?Hs(c,e.applyTransform(o,!0),r.measuredBox):Hs(c,s,r.layoutBox);const d=!W0(h);let m=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:y,layout:_}=v;if(y&&_){const S=Ke();Gs(S,r.layoutBox,y.layoutBox);const C=Ke();Gs(C,s,_.layoutBox),$0(S,C)||(m=!0),v.options.layoutRoot&&(e.relativeTarget=C,e.relativeTargetOrigin=S,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:c,layoutDelta:h,hasLayoutChanged:d,hasRelativeTargetChanged:m})}else if(e.isLead()){const{onExitComplete:s}=e.options;s&&s()}e.options.transition=void 0}function hR(e){Bs&&Qr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function dR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function pR(e){e.clearSnapshot()}function am(e){e.clearMeasurements()}function mR(e){e.isLayoutDirty=!1}function gR(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function lm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function vR(e){e.resolveTargetDelta()}function xR(e){e.calcProjection()}function yR(e){e.resetSkewAndRotation()}function bR(e){e.removeLeadSnapshot()}function um(e,n,r){e.translate=Ne(n.translate,0,r),e.scale=Ne(n.scale,1,r),e.origin=n.origin,e.originPoint=n.originPoint}function cm(e,n,r,s){e.min=Ne(n.min,r.min,s),e.max=Ne(n.max,r.max,s)}function wR(e,n,r,s){cm(e.x,n.x,r.x,s),cm(e.y,n.y,r.y,s)}function _R(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const TR={duration:.45,ease:[.4,0,.1,1]},fm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),hm=fm("applewebkit/")&&!fm("chrome/")?Math.round:Gt;function dm(e){e.min=hm(e.min),e.max=hm(e.max)}function SR(e){dm(e.x),dm(e.y)}function G0(e,n,r){return e==="position"||e==="preserve-aspect"&&!C2(im(n),im(r),.2)}function ER(e){var n;return e!==e.root&&((n=e.scroll)===null||n===void 0?void 0:n.wasRoot)}const AR=H0({attachResizeListener:(e,n)=>eo(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$u={current:void 0},K0=H0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$u.current){const e=new AR({});e.mount(window),e.setOptions({layoutScroll:!0}),$u.current=e}return $u.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),CR={pan:{Feature:$2},drag:{Feature:W2,ProjectionNode:K0,MeasureLayout:B0}};function pm(e,n,r){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",r==="Start");const o="onHover"+r,l=s[o];l&&Me.postRender(()=>l(n,io(n)))}class RR extends Lr{mount(){const{current:n}=this.node;n&&(this.unmount=CA(n,r=>(pm(this.node,r,"Start"),s=>pm(this.node,s,"End"))))}unmount(){}}class PR extends Lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ro(eo(this.node.current,"focus",()=>this.onFocus()),eo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mm(e,n,r){const{props:s}=e;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",r==="Start");const o="onTap"+(r==="End"?"":r),l=s[o];l&&Me.postRender(()=>l(n,io(n)))}class LR extends Lr{mount(){const{current:n}=this.node;n&&(this.unmount=MA(n,r=>(mm(this.node,r,"Start"),(s,{success:o})=>mm(this.node,s,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Tc=new WeakMap,Uu=new WeakMap,MR=e=>{const n=Tc.get(e.target);n&&n(e)},IR=e=>{e.forEach(MR)};function DR({root:e,...n}){const r=e||document;Uu.has(r)||Uu.set(r,{});const s=Uu.get(r),o=JSON.stringify(n);return s[o]||(s[o]=new IntersectionObserver(IR,{root:e,...n})),s[o]}function kR(e,n,r){const s=DR(n);return Tc.set(e,r),s.observe(e),()=>{Tc.delete(e),s.unobserve(e)}}const OR={some:0,all:1};class jR extends Lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:r,margin:s,amount:o="some",once:l}=n,u={root:r?r.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:OR[o]},h=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,l&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:m,onViewportLeave:v}=this.node.getProps(),y=d?m:v;y&&y(c)};return kR(this.node.current,u,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:r}=this.node;["amount","margin","root"].some(NR(n,r))&&this.startObserver()}unmount(){}}function NR({viewport:e={}},{viewport:n={}}={}){return r=>e[r]!==n[r]}const FR={inView:{Feature:jR},tap:{Feature:LR},focus:{Feature:PR},hover:{Feature:RR}},BR={layout:{ProjectionNode:K0,MeasureLayout:B0}},Sc={current:null},Y0={current:!1};function VR(){if(Y0.current=!0,!!Kc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>Sc.current=e.matches;e.addListener(n),n()}else Sc.current=!1}const zR=[...y0,mt,Pr],WR=e=>zR.find(x0(e)),gm=new WeakMap;function $R(e,n,r){for(const s in n){const o=n[s],l=r[s];if(gt(o))e.addValue(s,o);else if(gt(l))e.addValue(s,Js(o,{owner:e}));else if(l!==o)if(e.hasValue(s)){const u=e.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(s);e.addValue(s,Js(u!==void 0?u:o,{owner:e}))}}for(const s in r)n[s]===void 0&&e.removeValue(s);return n}const vm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class UR{scrapeMotionValuesFromProps(n,r,s){return{}}constructor({parent:n,props:r,presenceContext:s,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=In.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Me.render(this.render,!1,!0))};const{latestValues:c,renderState:d,onUpdate:m}=u;this.onUpdate=m,this.latestValues=c,this.baseTarget={...c},this.initialValues=r.initial?{...c}:{},this.renderState=d,this.parent=n,this.props=r,this.presenceContext=s,this.depth=n?n.depth+1:0,this.reducedMotionConfig=o,this.options=h,this.blockInitialAnimation=!!l,this.isControllingVariants=rl(r),this.isVariantNode=Cg(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:v,...y}=this.scrapeMotionValuesFromProps(r,{},this);for(const _ in y){const S=y[_];c[_]!==void 0&&gt(S)&&S.set(c[_],!1)}}mount(n){this.current=n,gm.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),Y0.current||VR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Sc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){gm.delete(this.current),this.projection&&this.projection.unmount(),Rr(this.notifyUpdate),Rr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(n,r){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const s=ui.has(n),o=r.on("change",h=>{this.latestValues[n]=h,this.props.onUpdate&&Me.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),l=r.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,r)),this.valueSubscriptions.set(n,()=>{o(),l(),u&&u(),r.owner&&r.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in $i){const r=$i[n];if(!r)continue;const{isEnabled:s,Feature:o}=r;if(!this.features[n]&&o&&s(this.props)&&(this.features[n]=new o(this)),this.features[n]){const l=this.features[n];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ke()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,r){this.latestValues[n]=r}update(n,r){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<vm.length;s++){const o=vm[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=n[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=$R(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(n),()=>r.variantChildren.delete(n)}addValue(n,r){const s=this.values.get(n);r!==s&&(s&&this.removeValue(n),this.bindToMotionValue(n,r),this.values.set(n,r),this.latestValues[n]=r.get())}removeValue(n){this.values.delete(n);const r=this.valueSubscriptions.get(n);r&&(r(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,r){if(this.props.values&&this.props.values[n])return this.props.values[n];let s=this.values.get(n);return s===void 0&&r!==void 0&&(s=Js(r===null?void 0:r,{owner:this}),this.addValue(n,s)),s}readValue(n,r){var s;let o=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(s=this.getBaseTargetFromProps(this.props,n))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,n,this.options);return o!=null&&(typeof o=="string"&&(g0(o)||a0(o))?o=parseFloat(o):!WR(o)&&Pr.test(r)&&(o=d0(n,r)),this.setBaseTarget(n,gt(o)?o.get():o)),gt(o)?o.get():o}setBaseTarget(n,r){this.baseTarget[n]=r}getBaseTarget(n){var r;const{initial:s}=this.props;let o;if(typeof s=="string"||typeof s=="object"){const u=ef(this.props,s,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);u&&(o=u[n])}if(s&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,n);return l!==void 0&&!gt(l)?l:this.initialValues[n]!==void 0&&o===void 0?void 0:this.baseTarget[n]}on(n,r){return this.events[n]||(this.events[n]=new mf),this.events[n].add(r)}notify(n,...r){this.events[n]&&this.events[n].notify(...r)}}class q0 extends UR{constructor(){super(...arguments),this.KeyframeResolver=b0}sortInstanceNodePosition(n,r){return n.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(n,r){return n.style?n.style[r]:void 0}removeValueFromRenderState(n,{vars:r,style:s}){delete r[n],delete s[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;gt(n)&&(this.childSubscription=n.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function HR(e){return window.getComputedStyle(e)}class GR extends q0{constructor(){super(...arguments),this.type="html",this.renderInstance=jg}readValueFromInstance(n,r){if(ui.has(r)){const s=bf(r);return s&&s.default||0}else{const s=HR(n),o=(Dg(r)?s.getPropertyValue(r):s[r])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(n,{transformPagePoint:r}){return N0(n,r)}build(n,r,s){rf(n,r,s.transformTemplate)}scrapeMotionValuesFromProps(n,r,s){return lf(n,r,s)}}class KR extends q0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ke}getBaseTargetFromProps(n,r){return n[r]}readValueFromInstance(n,r){if(ui.has(r)){const s=bf(r);return s&&s.default||0}return r=Ng.has(r)?r:Zc(r),n.getAttribute(r)}scrapeMotionValuesFromProps(n,r,s){return Vg(n,r,s)}build(n,r,s){sf(n,r,this.isSVGTag,s.transformTemplate)}renderInstance(n,r,s,o){Fg(n,r,s,o)}mount(n){this.isSVGTag=af(n.tagName),super.mount(n)}}const YR=(e,n)=>Qc(e)?new KR(n):new GR(n,{allowProjection:e!==k.Fragment}),qR=bA({...x2,...FR,...CR,...BR},YR),XR=OE(qR),ZR=ie.div`
  ${({theme:e})=>e.mixins.flexCenter};
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
    opacity: ${e=>e.isMounted?1:0};
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
`,Hu=["Hello","স্বাগতম","Bonjour","Ciao","Olà","やあ","Hallå","مرحبا","Guten tag","Hallo","नमस्ते"],JR={initial:{opacity:1},enter:{opacity:1,transition:{duration:.1,ease:[.76,0,.24,1]}},exit:{opacity:0,transition:{duration:.1,ease:[.76,0,.24,1]}}},QR=({finishLoading:e})=>{const[n,r]=k.useState(!1),[s,o]=k.useState(!1),[l,u]=k.useState(0),h=()=>{const c=Fe.timeline({complete:()=>{o(!0)}}),m=Math.floor(2500/Hu.length);setTimeout(()=>{const y=()=>{l<Hu.length-1&&(u(_=>_+1),setTimeout(y,m))};y()},300),c.add({targets:"#logo path",delay:300,duration:1500,easing:"easeInOutQuart",strokeDashoffset:[Fe.setDashoffset,0]}).add({targets:"#logo #B",duration:700,easing:"easeInOutQuart",opacity:1}).add({targets:"#logo",delay:500,duration:300,easing:"easeInOutQuart",opacity:0,scale:.1}).add({targets:".loader",duration:200,easing:"easeInOutQuart",opacity:0,zIndex:-1})};return k.useEffect(()=>{const c=setTimeout(()=>r(!0),10);return h(),()=>clearTimeout(c)},[]),k.useEffect(()=>{if(s){const c=setTimeout(()=>e(),10);return()=>clearTimeout(c)}},[s]),g.jsx(ZR,{className:"loader",isMounted:n,children:g.jsxs("div",{className:"content-wrapper",children:[g.jsx("div",{className:"logo-wrapper",children:g.jsx(bg,{})}),g.jsx(CE,{mode:"wait",children:g.jsx(XR.div,{className:"welcome-text",variants:JR,initial:"initial",animate:"enter",exit:"exit",children:Hu[l]},l)})]})})};QR.propTypes={finishLoading:Qn.func.isRequired};const eP=ie.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,tP=ie.button`
  display: none;

  @media (max-width: 768px) {
    ${({theme:e})=>e.mixins.flexCenter};
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
    transition-delay: ${e=>e.menuOpen?"0.12s":"0s"};
    transform: rotate(${e=>e.menuOpen?"225deg":"0deg"});
    transition-timing-function: cubic-bezier(
      ${e=>e.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}
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
      width: ${e=>e.menuOpen?"100%":"120%"};
      top: ${e=>e.menuOpen?"0":"-10px"};
      opacity: ${e=>e.menuOpen?0:1};
      transition: ${({menuOpen:e})=>e?"var(--ham-before-active)":"var(--ham-before)"};
    }
    &:after {
      width: ${e=>e.menuOpen?"100%":"80%"};
      bottom: ${e=>e.menuOpen?"0":"-10px"};
      transform: rotate(${e=>e.menuOpen?"-90deg":"0"});
      transition: ${({menuOpen:e})=>e?"var(--ham-after-active)":"var(--ham-after)"};
    }
  }
`,nP=ie.aside`
  display: none;

  @media (max-width: 768px) {
    ${({theme:e})=>e.mixins.flexCenter};
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
    transform: translateX(${e=>e.menuOpen?0:100}vw);
    visibility: ${e=>e.menuOpen?"visible":"hidden"};
    transition: var(--transition);
  }

  nav {
    ${({theme:e})=>e.mixins.flexBetween};
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
      ${({theme:e})=>e.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({theme:e})=>e.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`,xm=()=>{const[e,n]=k.useState(!1),r=()=>n(!e),s=k.useRef(null),o=k.useRef(null);let l,u,h;const c=()=>{l=[s.current,...Array.from(o.current.querySelectorAll("a"))],u=l[0],h=l[l.length-1]},d=S=>{document.activeElement===u&&(S.preventDefault(),h.focus())},m=S=>{document.activeElement===h&&(S.preventDefault(),u.focus())},v=S=>{switch(S.key){case si.ESCAPE:case si.ESCAPE_IE11:{n(!1);break}case si.TAB:{if(l&&l.length===1){S.preventDefault();break}S.shiftKey?d(S):m(S);break}}},y=S=>{S.currentTarget.innerWidth>768&&n(!1)};k.useEffect(()=>(document.addEventListener("keydown",v),window.addEventListener("resize",y),c(),()=>{document.removeEventListener("keydown",v),window.removeEventListener("resize",y)}),[]);const _=k.useRef();return LS(_,()=>n(!1)),g.jsxs(eP,{children:[g.jsx("body",{className:e?"blur":""}),g.jsxs("div",{ref:_,children:[g.jsx(tP,{onClick:r,menuOpen:e,ref:s,"aria-label":"Menu",children:g.jsx("div",{className:"ham-box",children:g.jsx("div",{className:"ham-box-inner"})})}),g.jsx(nP,{menuOpen:e,"aria-hidden":!e,tabIndex:e?1:-1,children:g.jsxs("nav",{ref:o,children:[ei&&g.jsx("ol",{children:ei.map(({url:S,name:C},I)=>g.jsx("li",{children:g.jsx("a",{href:S,onClick:()=>n(!1),children:C})},I))}),g.jsx("a",{href:"https://cdn.errhythm.me/resume.pdf",className:"resume-link",children:"Resume"})]})})]})]})},rP=ie.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${e=>e.orientation==="left"?"40px":"auto"};
  right: ${e=>e.orientation==="left"?"auto":"40px"};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${e=>e.orientation==="left"?"20px":"auto"};
    right: ${e=>e.orientation==="left"?"auto":"20px"};
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Ef=({children:e,isHome:n,orientation:r})=>{const[s,o]=k.useState(!n),l=Dn();return k.useEffect(()=>{if(!n||l)return;const u=setTimeout(()=>o(!0),ka);return()=>clearTimeout(u)},[]),g.jsx(rP,{orientation:r,children:l?g.jsx(g.Fragment,{children:e}):g.jsx(Jn,{component:null,children:s&&g.jsx(wn,{classNames:n?"fade":"",timeout:n?ka:0,children:e})})})};Ef.propTypes={children:Qn.node.isRequired,isHome:Qn.bool,orientation:Qn.string};const iP=ie.ul`
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
`,sP=({isHome:e})=>g.jsx(Ef,{isHome:e,orientation:"left",children:g.jsx(iP,{children:Da&&Da.map(({url:n,name:r},s)=>g.jsx("li",{children:g.jsx("a",{href:n,"aria-label":r,target:"_blank",rel:"noreferrer",children:g.jsx(an,{name:r})})},s))})});sP.propTypes={isHome:Qn.bool};const oP=ie.div`
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
`,aP=({isHome:e})=>g.jsx(Ef,{isHome:e,orientation:"right",children:g.jsx(oP,{children:g.jsx("a",{href:`mailto:${sc}`,children:sc})})});aP.propTypes={isHome:Qn.bool};const lP=ie.footer`
  ${({theme:e})=>e.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`,uP=ie.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({theme:e})=>e.mixins.flexBetween};
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
`,cP=ie.div`
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
`,fP=ie.a`
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
`,QP=()=>{const n=new Date().getFullYear();return g.jsxs(lP,{children:[g.jsx(uP,{children:g.jsx("ul",{children:Da&&Da.map(({name:r,url:s},o)=>g.jsx("li",{children:g.jsx("a",{href:s,"aria-label":r,children:g.jsx(an,{name:r})})},o))})}),g.jsx(cP,{tabindex:"-1",children:g.jsxs("div",{children:["© ",n," Ehsanur Rahman Rhythm. All rights reserved. Designed by ","",g.jsx("a",{href:"https://github.com/bchiang7",children:"Brittany Chiang"}),", enhanced by ","",g.jsx("a",{href:"https://github.com/errhythm",children:"me"}),". ",g.jsx("br",{}),g.jsx(fP,{href:"https://timecapsule.errhythm.me/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8em"},children:"Visit my old website!"})]})})]})},hP=ie.section`
  ${({theme:e})=>e.mixins.flexCenter};
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
    ${({theme:e})=>e.mixins.bigButton};
    margin-top: 50px;
  }
`,e5=()=>{const[e,n]=k.useState(!1),r=Dn();k.useEffect(()=>{if(r)return;const d=setTimeout(()=>n(!0),PS);return()=>clearTimeout(d)},[]);const s=g.jsx("h1",{children:"Hi, my name is"}),o=g.jsx("h2",{className:"big-heading",children:"Ehsanur Rahman Rhythm."}),l=g.jsx("h3",{className:"big-heading",children:"I build things for the web."}),u=g.jsx(g.Fragment,{children:g.jsxs("p",{children:["I'm a software engineer specializing in startup development and creating dynamic, user-friendly web applications. Currently, I'm enhancing the returns management experience at"," ",g.jsx("a",{href:"https://ifreturns.com/",target:"_blank",rel:"noreferrer",style:{color:"#54b58f"},children:"iF returns"})," ","while revolutionizing emergency delivery systems at"," ",g.jsx("a",{href:"https://deliveryhobe.com/",target:"_blank",rel:"noreferrer",style:{color:"#ffe23d"},children:"DeliveryHobe"}),"."]})}),c=[s,o,l,u,g.jsx("a",{className:"email-link",href:"/#projects",children:"Check out my projects!"})];return g.jsx(hP,{children:r?g.jsx(g.Fragment,{children:c.map((d,m)=>g.jsx("div",{children:d},m))}):g.jsx(Jn,{component:null,children:e&&c.map((d,m)=>g.jsx(wn,{classNames:"fadeup",timeout:ka,children:g.jsx("div",{style:{transitionDelay:`${m+1}00ms`},children:d})},m))})})},dP="modulepreload",pP=function(e){return"/"+e},ym={},Yi=function(n,r,s){let o=Promise.resolve();if(r&&r.length>0){let u=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),c=h?.nonce||h?.getAttribute("nonce");o=u(r.map(d=>{if(d=pP(d),d in ym)return;ym[d]=!0;const m=d.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${v}`))return;const y=document.createElement("link");if(y.rel=m?"stylesheet":dP,m||(y.as="script"),y.crossOrigin="",y.href=d,c&&y.setAttribute("nonce",c),document.head.appendChild(y),m)return new Promise((_,S)=>{y.addEventListener("load",_),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&l(h.reason);return n().catch(l)})};let bm,Ec;const X0=typeof window>"u";X0||Yi(()=>import("./scrollreveal.es.B1uBQqQp.js"),[]).then(e=>{bm=e.default,Ec=bm()});const un={reveal:(...e)=>!X0&&Ec?Ec.reveal(...e):null},mP=ie.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`,gP=ie.div`
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
`,vP=ie.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({theme:e})=>e.mixins.boxShadow};
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
`,t5=()=>{const e=k.useRef(null),n=Dn();k.useEffect(()=>{n||un.reveal(e.current,ln())},[]);const r=["React.js","Express.js","Astro.js","Vanilla JavaScript","PHP","Laravel","WordPress"];return g.jsxs(mP,{id:"about",ref:e,children:[g.jsx("h2",{className:"numbered-heading",children:"About Me"}),g.jsxs("div",{className:"inner",children:[g.jsxs(gP,{children:[g.jsxs("div",{children:[g.jsx("p",{children:"Hello! My name is Ehsanur Rahman Rhythm, and I enjoy creating things that live on the internet. My journey in web development started during my time at Brac University, where I developed a passion for building user-friendly and dynamic web applications."}),g.jsxs("p",{children:["Fast-forward to today, I have over four years of experience working with various technologies, including PHP, Laravel, and WordPress. I’ve had the privilege of working on a range of projects, from developing a digital database management system for the"," ",g.jsx("a",{href:"https://mfacademy.gov.bd/",target:"_blank",rel:"noreferrer",children:"Marine Fisheries Academy"})," ","to creating high-traffic educational websites and news portals."]}),g.jsxs("p",{children:["Currently, I'm working at"," ",g.jsx("a",{href:"https://ifreturns.com/",target:"_blank",rel:"noreferrer",style:{color:"#54b58f"},children:"iF returns"})," ","🇪🇸 and"," ",g.jsx("a",{href:"https://deliveryhobe.com/",target:"_blank",rel:"noreferrer",style:{color:"#ffe23d"},children:"DeliveryHobe"})," ","🇧🇩 . My main goal is to build accessible, human-centered products that meet and exceed user expectations."]}),g.jsxs("p",{children:["In addition to my work in web development, I have also published research in the fields of natural language processing (NLP) and data science. I worked as a Research Assistant at"," ",g.jsx("a",{href:"https://bracu.ac.bd/",target:"_blank",rel:"noreferrer",style:{color:"#253494"},children:"Brac University"}),", researching machine learning-based accessibility systems for visually impaired individuals on campus. These ",g.jsx("a",{href:"#publications",children:"publications"})," reflect my commitment to advancing technology and contributing to the academic community."]}),g.jsx("p",{children:"Here are a few technologies I've been working with recently:"})]}),g.jsx("ul",{className:"skills-list",children:r&&r.map((s,o)=>g.jsx("li",{children:s},o))})]}),g.jsx(vP,{children:g.jsx("div",{className:"wrapper",children:g.jsx(StaticImage,{className:"img",src:"https://cdn.errhythm.me/errhythm_ghibli.png",width:500,quality:95,formats:["AUTO","WEBP","AVIF"],alt:"Headshot"})})})]})]})},xP=ie.section`
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
`,yP=ie.div`
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
`,bP=ie.button`
  ${({theme:e})=>e.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({isActive:e})=>e?"var(--green)":"var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({theme:e})=>e.mixins.flexCenter};
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
`,wP=ie.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({activeTabId:e})=>e} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({activeTabId:e})=>e} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`,_P=ie.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`,TP=ie.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({theme:e})=>e.mixins.fancyList};
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
`,n5=()=>{const[e,n]=k.useState([]),[r,s]=k.useState(0),[o,l]=k.useState(null),u=k.useRef([]),h=k.useRef(null),c=Dn();k.useEffect(()=>{Yi(()=>import("./content.Bz3xzC59.js"),[]).then(v=>{n(v.default.jobs||[])})},[]),k.useEffect(()=>{c||un.reveal(h.current,ln())},[]);const d=()=>{if(u.current[o]){u.current[o].focus();return}o>=u.current.length&&l(0),o<0&&l(u.current.length-1)};k.useEffect(()=>d(),[o]);const m=v=>{switch(v.key){case si.ARROW_UP:{v.preventDefault(),l(o-1);break}case si.ARROW_DOWN:{v.preventDefault(),l(o+1);break}}};return g.jsxs(xP,{id:"jobs",ref:h,children:[g.jsx("h2",{className:"numbered-heading",children:"Where I’ve Worked"}),g.jsxs("div",{className:"inner",children:[g.jsxs(yP,{role:"tablist","aria-label":"Job tabs",onKeyDown:v=>m(v),children:[e&&e.map(({node:v},y)=>{const{company:_}=v.frontmatter;return g.jsx(bP,{isActive:r===y,onClick:()=>s(y),ref:S=>u.current[y]=S,id:`tab-${y}`,role:"tab",tabIndex:r===y?"0":"-1","aria-selected":r===y,"aria-controls":`panel-${y}`,children:g.jsx("span",{children:_})},y)}),g.jsx(wP,{activeTabId:r})]}),g.jsx(_P,{children:e&&e.map(({node:v},y)=>{const{frontmatter:_,html:S}=v,{title:C,url:I,company:L,range:P}=_;return g.jsx(wn,{in:r===y,timeout:250,classNames:"fade",children:g.jsxs(TP,{id:`panel-${y}`,role:"tabpanel",tabIndex:r===y?"0":"-1","aria-labelledby":`tab-${y}`,"aria-hidden":r!==y,hidden:r!==y,children:[g.jsxs("h3",{children:[g.jsx("span",{children:C}),g.jsxs("span",{className:"company",children:[" @ ",g.jsx("a",{href:I,className:"inline-link",children:L})]})]}),g.jsx("p",{className:"range",children:P}),g.jsx("div",{dangerouslySetInnerHTML:{__html:S}})]})},y)})})]})]})},SP=ie.section`
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
`,EP=ie.div`
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
`,AP=ie.button`
  ${({theme:e})=>e.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({isActive:e})=>e?"var(--green)":"var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({theme:e})=>e.mixins.flexCenter};
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
`,CP=ie.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({activeTabId:e})=>e} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({activeTabId:e})=>e} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`,RP=ie.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`,PP=ie.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({theme:e})=>e.mixins.fancyList};
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
`,r5=()=>{const[e,n]=k.useState([]),[r,s]=k.useState(0),[o,l]=k.useState(null),u=k.useRef([]),h=k.useRef(null),c=Dn();k.useEffect(()=>{Yi(()=>import("./content.Bz3xzC59.js"),[]).then(v=>{n(v.default.education||[])})},[]),k.useEffect(()=>{c||un.reveal(h.current,ln())},[]);const d=()=>{if(u.current[o]){u.current[o].focus();return}o>=u.current.length&&l(0),o<0&&l(u.current.length-1)};k.useEffect(()=>d(),[o]);const m=v=>{switch(v.key){case si.ARROW_UP:{v.preventDefault(),l(o-1);break}case si.ARROW_DOWN:{v.preventDefault(),l(o+1);break}}};return g.jsxs(SP,{id:"education",ref:h,children:[g.jsx("h2",{className:"numbered-heading",children:"Where I’ve Studied"}),g.jsxs("div",{className:"inner",children:[g.jsxs(EP,{role:"tablist","aria-label":"Job tabs",onKeyDown:v=>m(v),children:[e&&e.map(({node:v},y)=>{const{degree:_}=v.frontmatter;return g.jsx(AP,{isActive:r===y,onClick:()=>s(y),ref:S=>u.current[y]=S,id:`tab-${y}`,role:"tab",tabIndex:r===y?"0":"-1","aria-selected":r===y,"aria-controls":`panel-${y}`,children:g.jsx("span",{children:_})},y)}),g.jsx(CP,{activeTabId:r})]}),g.jsx(RP,{children:e&&e.map(({node:v},y)=>{const{frontmatter:_,html:S}=v,{title:C,url:I,company:L,range:P}=_;return g.jsx(wn,{in:r===y,timeout:250,classNames:"fade",children:g.jsxs(PP,{id:`panel-${y}`,role:"tabpanel",tabIndex:r===y?"0":"-1","aria-labelledby":`tab-${y}`,"aria-hidden":r!==y,hidden:r!==y,children:[g.jsxs("h3",{children:[g.jsx("span",{children:C}),g.jsx("p",{className:"company",children:g.jsx("a",{href:I,className:"inline-link",children:L})})]}),g.jsx("p",{className:"range",children:P}),g.jsx("div",{dangerouslySetInnerHTML:{__html:S}})]})},y)})})]})]})};var Vs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var LP=Vs.exports,wm;function MP(){return wm||(wm=1,(function(e,n){(function(){var r,s="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",h="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",d=500,m="__lodash_placeholder__",v=1,y=2,_=4,S=1,C=2,I=1,L=2,P=4,M=8,z=16,j=32,B=64,$=128,U=256,ce=512,H=30,J="...",Ce=800,De=16,St=1,Yt=2,Tn=3,me=1/0,be=9007199254740991,ke=17976931348623157e292,Ze=NaN,Be=4294967295,lt=Be-1,Mt=Be>>>1,It=[["ary",$],["bind",I],["bindKey",L],["curry",M],["curryRight",z],["flip",ce],["partial",j],["partialRight",B],["rearg",U]],ut="[object Arguments]",Et="[object Array]",sr="[object AsyncFunction]",Dt="[object Boolean]",vt="[object Date]",or="[object DOMException]",fn="[object Error]",xt="[object Function]",qi="[object GeneratorFunction]",kt="[object Map]",ar="[object Number]",Mr="[object Null]",hn="[object Object]",so="[object Promise]",oo="[object Proxy]",lr="[object RegExp]",Ot="[object Set]",ae="[object String]",Y="[object Symbol]",xe="[object Undefined]",le="[object WeakMap]",nt="[object WeakSet]",yt="[object ArrayBuffer]",jt="[object DataView]",Ir="[object Float32Array]",ci="[object Float64Array]",kn="[object Int8Array]",Xi="[object Int16Array]",Zi="[object Int32Array]",Ji="[object Uint8Array]",ur="[object Uint8ClampedArray]",On="[object Uint16Array]",Qi="[object Uint32Array]",ol=/\b__p \+= '';/g,al=/\b(__p \+=) '' \+/g,ll=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Dr=/&(?:amp|lt|gt|quot|#39);/g,rt=/[&<>"']/g,kr=RegExp(Dr.source),es=RegExp(rt.source),ul=/<%-([\s\S]+?)%>/g,cl=/<%([\s\S]+?)%>/g,ao=/<%=([\s\S]+?)%>/g,fl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ct=/^\w*$/,ts=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Or=/[\\^$.*+?()[\]{}|]/g,ns=RegExp(Or.source),rs=/^\s+/,hl=/\s/,dl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,lo=/\{\n\/\* \[wrapped with (.+)\] \*/,pl=/,? & /,uo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ye=/[()=,{}\[\]\/\s]/,co=/\\(\\)?/g,Je=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,is=/\w*$/,Oe=/^[-+]0x[0-9a-f]+$/i,jr=/^0b[01]+$/i,ss=/^\[object .+?Constructor\]$/,fo=/^0o[0-7]+$/i,os=/^(?:0|[1-9]\d*)$/,ho=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Nr=/($^)/,cr=/['\n\r\u2028\u2029\\]/g,jn="\\ud800-\\udfff",Nn="\\u0300-\\u036f",as="\\ufe20-\\ufe2f",ls="\\u20d0-\\u20ff",Fn=Nn+as+ls,Fr="\\u2700-\\u27bf",Br="a-z\\xdf-\\xf6\\xf8-\\xff",po="\\xac\\xb1\\xd7\\xf7",mo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ml="\\u2000-\\u206f",us=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fr="A-Z\\xc0-\\xd6\\xd8-\\xde",Bn="\\ufe0e\\ufe0f",Vn=po+mo+ml+us,fi="['’]",go="["+jn+"]",cs="["+Vn+"]",hr="["+Fn+"]",fs="\\d+",hi="["+Fr+"]",Vr="["+Br+"]",qt="[^"+jn+Vn+fs+Fr+Br+fr+"]",Sn="\\ud83c[\\udffb-\\udfff]",hs="(?:"+hr+"|"+Sn+")",di="[^"+jn+"]",ds="(?:\\ud83c[\\udde6-\\uddff]){2}",dr="[\\ud800-\\udbff][\\udc00-\\udfff]",dn="["+fr+"]",vo="\\u200d",pr="(?:"+Vr+"|"+qt+")",gl="(?:"+dn+"|"+qt+")",xo="(?:"+fi+"(?:d|ll|m|re|s|t|ve))?",$e="(?:"+fi+"(?:D|LL|M|RE|S|T|VE))?",zn=hs+"?",yo="["+Bn+"]?",bo="(?:"+vo+"(?:"+[di,ds,dr].join("|")+")"+yo+zn+")*",ps="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",wo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ms=yo+zn+bo,vl="(?:"+[hi,ds,dr].join("|")+")"+ms,Xt="(?:"+[di+hr+"?",hr,ds,dr,go].join("|")+")",mr=RegExp(fi,"g"),_o=RegExp(hr,"g"),pi=RegExp(Sn+"(?="+Sn+")|"+Xt+ms,"g"),gs=RegExp([dn+"?"+Vr+"+"+xo+"(?="+[cs,dn,"$"].join("|")+")",gl+"+"+$e+"(?="+[cs,dn+pr,"$"].join("|")+")",dn+"?"+pr+"+"+xo,dn+"+"+$e,wo,ps,fs,vl].join("|"),"g"),To=RegExp("["+vo+jn+Fn+Bn+"]"),pn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,So=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Eo=-1,Ae={};Ae[Ir]=Ae[ci]=Ae[kn]=Ae[Xi]=Ae[Zi]=Ae[Ji]=Ae[ur]=Ae[On]=Ae[Qi]=!0,Ae[ut]=Ae[Et]=Ae[yt]=Ae[Dt]=Ae[jt]=Ae[vt]=Ae[fn]=Ae[xt]=Ae[kt]=Ae[ar]=Ae[hn]=Ae[lr]=Ae[Ot]=Ae[ae]=Ae[le]=!1;var Se={};Se[ut]=Se[Et]=Se[yt]=Se[jt]=Se[Dt]=Se[vt]=Se[Ir]=Se[ci]=Se[kn]=Se[Xi]=Se[Zi]=Se[kt]=Se[ar]=Se[hn]=Se[lr]=Se[Ot]=Se[ae]=Se[Y]=Se[Ji]=Se[ur]=Se[On]=Se[Qi]=!0,Se[fn]=Se[xt]=Se[le]=!1;var xl={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},E={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},W={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},q=parseFloat,Pe=parseInt,Qe=typeof fa=="object"&&fa&&fa.Object===Object&&fa,Ue=typeof self=="object"&&self&&self.Object===Object&&self,ye=Qe||Ue||Function("return this")(),Nt=n&&!n.nodeType&&n,Ft=Nt&&!0&&e&&!e.nodeType&&e,mi=Ft&&Ft.exports===Nt,qe=mi&&Qe.process,bt=(function(){try{var A=Ft&&Ft.require&&Ft.require("util").types;return A||qe&&qe.binding&&qe.binding("util")}catch{}})(),vs=bt&&bt.isArrayBuffer,Af=bt&&bt.isDate,Cf=bt&&bt.isMap,Rf=bt&&bt.isRegExp,Pf=bt&&bt.isSet,Lf=bt&&bt.isTypedArray;function Bt(A,O,D){switch(D.length){case 0:return A.call(O);case 1:return A.call(O,D[0]);case 2:return A.call(O,D[0],D[1]);case 3:return A.call(O,D[0],D[1],D[2])}return A.apply(O,D)}function J0(A,O,D,K){for(var se=-1,we=A==null?0:A.length;++se<we;){var et=A[se];O(K,et,D(et),A)}return K}function Zt(A,O){for(var D=-1,K=A==null?0:A.length;++D<K&&O(A[D],D,A)!==!1;);return A}function Q0(A,O){for(var D=A==null?0:A.length;D--&&O(A[D],D,A)!==!1;);return A}function Mf(A,O){for(var D=-1,K=A==null?0:A.length;++D<K;)if(!O(A[D],D,A))return!1;return!0}function gr(A,O){for(var D=-1,K=A==null?0:A.length,se=0,we=[];++D<K;){var et=A[D];O(et,D,A)&&(we[se++]=et)}return we}function Ao(A,O){var D=A==null?0:A.length;return!!D&&gi(A,O,0)>-1}function yl(A,O,D){for(var K=-1,se=A==null?0:A.length;++K<se;)if(D(O,A[K]))return!0;return!1}function Ie(A,O){for(var D=-1,K=A==null?0:A.length,se=Array(K);++D<K;)se[D]=O(A[D],D,A);return se}function vr(A,O){for(var D=-1,K=O.length,se=A.length;++D<K;)A[se+D]=O[D];return A}function bl(A,O,D,K){var se=-1,we=A==null?0:A.length;for(K&&we&&(D=A[++se]);++se<we;)D=O(D,A[se],se,A);return D}function ev(A,O,D,K){var se=A==null?0:A.length;for(K&&se&&(D=A[--se]);se--;)D=O(D,A[se],se,A);return D}function wl(A,O){for(var D=-1,K=A==null?0:A.length;++D<K;)if(O(A[D],D,A))return!0;return!1}var tv=_l("length");function nv(A){return A.split("")}function rv(A){return A.match(uo)||[]}function If(A,O,D){var K;return D(A,function(se,we,et){if(O(se,we,et))return K=we,!1}),K}function Co(A,O,D,K){for(var se=A.length,we=D+(K?1:-1);K?we--:++we<se;)if(O(A[we],we,A))return we;return-1}function gi(A,O,D){return O===O?mv(A,O,D):Co(A,Df,D)}function iv(A,O,D,K){for(var se=D-1,we=A.length;++se<we;)if(K(A[se],O))return se;return-1}function Df(A){return A!==A}function kf(A,O){var D=A==null?0:A.length;return D?Sl(A,O)/D:Ze}function _l(A){return function(O){return O==null?r:O[A]}}function Tl(A){return function(O){return A==null?r:A[O]}}function Of(A,O,D,K,se){return se(A,function(we,et,Re){D=K?(K=!1,we):O(D,we,et,Re)}),D}function sv(A,O){var D=A.length;for(A.sort(O);D--;)A[D]=A[D].value;return A}function Sl(A,O){for(var D,K=-1,se=A.length;++K<se;){var we=O(A[K]);we!==r&&(D=D===r?we:D+we)}return D}function El(A,O){for(var D=-1,K=Array(A);++D<A;)K[D]=O(D);return K}function ov(A,O){return Ie(O,function(D){return[D,A[D]]})}function jf(A){return A&&A.slice(0,Vf(A)+1).replace(rs,"")}function Vt(A){return function(O){return A(O)}}function Al(A,O){return Ie(O,function(D){return A[D]})}function xs(A,O){return A.has(O)}function Nf(A,O){for(var D=-1,K=A.length;++D<K&&gi(O,A[D],0)>-1;);return D}function Ff(A,O){for(var D=A.length;D--&&gi(O,A[D],0)>-1;);return D}function av(A,O){for(var D=A.length,K=0;D--;)A[D]===O&&++K;return K}var lv=Tl(xl),uv=Tl(Z);function cv(A){return"\\"+W[A]}function fv(A,O){return A==null?r:A[O]}function vi(A){return To.test(A)}function hv(A){return pn.test(A)}function dv(A){for(var O,D=[];!(O=A.next()).done;)D.push(O.value);return D}function Cl(A){var O=-1,D=Array(A.size);return A.forEach(function(K,se){D[++O]=[se,K]}),D}function Bf(A,O){return function(D){return A(O(D))}}function xr(A,O){for(var D=-1,K=A.length,se=0,we=[];++D<K;){var et=A[D];(et===O||et===m)&&(A[D]=m,we[se++]=D)}return we}function Ro(A){var O=-1,D=Array(A.size);return A.forEach(function(K){D[++O]=K}),D}function pv(A){var O=-1,D=Array(A.size);return A.forEach(function(K){D[++O]=[K,K]}),D}function mv(A,O,D){for(var K=D-1,se=A.length;++K<se;)if(A[K]===O)return K;return-1}function gv(A,O,D){for(var K=D+1;K--;)if(A[K]===O)return K;return K}function xi(A){return vi(A)?xv(A):tv(A)}function mn(A){return vi(A)?yv(A):nv(A)}function Vf(A){for(var O=A.length;O--&&hl.test(A.charAt(O)););return O}var vv=Tl(E);function xv(A){for(var O=pi.lastIndex=0;pi.test(A);)++O;return O}function yv(A){return A.match(pi)||[]}function bv(A){return A.match(gs)||[]}var wv=(function A(O){O=O==null?ye:yi.defaults(ye.Object(),O,yi.pick(ye,So));var D=O.Array,K=O.Date,se=O.Error,we=O.Function,et=O.Math,Re=O.Object,Rl=O.RegExp,_v=O.String,Jt=O.TypeError,Po=D.prototype,Tv=we.prototype,bi=Re.prototype,Lo=O["__core-js_shared__"],Mo=Tv.toString,Ee=bi.hasOwnProperty,Sv=0,zf=(function(){var t=/[^.]+$/.exec(Lo&&Lo.keys&&Lo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""})(),Io=bi.toString,Ev=Mo.call(Re),Av=ye._,Cv=Rl("^"+Mo.call(Ee).replace(Or,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Do=mi?O.Buffer:r,yr=O.Symbol,ko=O.Uint8Array,Wf=Do?Do.allocUnsafe:r,Oo=Bf(Re.getPrototypeOf,Re),$f=Re.create,Uf=bi.propertyIsEnumerable,jo=Po.splice,Hf=yr?yr.isConcatSpreadable:r,ys=yr?yr.iterator:r,zr=yr?yr.toStringTag:r,No=(function(){try{var t=Gr(Re,"defineProperty");return t({},"",{}),t}catch{}})(),Rv=O.clearTimeout!==ye.clearTimeout&&O.clearTimeout,Pv=K&&K.now!==ye.Date.now&&K.now,Lv=O.setTimeout!==ye.setTimeout&&O.setTimeout,Fo=et.ceil,Bo=et.floor,Pl=Re.getOwnPropertySymbols,Mv=Do?Do.isBuffer:r,Gf=O.isFinite,Iv=Po.join,Dv=Bf(Re.keys,Re),tt=et.max,dt=et.min,kv=K.now,Ov=O.parseInt,Kf=et.random,jv=Po.reverse,Ll=Gr(O,"DataView"),bs=Gr(O,"Map"),Ml=Gr(O,"Promise"),wi=Gr(O,"Set"),ws=Gr(O,"WeakMap"),_s=Gr(Re,"create"),Vo=ws&&new ws,_i={},Nv=Kr(Ll),Fv=Kr(bs),Bv=Kr(Ml),Vv=Kr(wi),zv=Kr(ws),zo=yr?yr.prototype:r,Ts=zo?zo.valueOf:r,Yf=zo?zo.toString:r;function x(t){if(Ve(t)&&!oe(t)&&!(t instanceof ge)){if(t instanceof Qt)return t;if(Ee.call(t,"__wrapped__"))return qh(t)}return new Qt(t)}var Ti=(function(){function t(){}return function(i){if(!je(i))return{};if($f)return $f(i);t.prototype=i;var a=new t;return t.prototype=r,a}})();function Wo(){}function Qt(t,i){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}x.templateSettings={escape:ul,evaluate:cl,interpolate:ao,variable:"",imports:{_:x}},x.prototype=Wo.prototype,x.prototype.constructor=x,Qt.prototype=Ti(Wo.prototype),Qt.prototype.constructor=Qt;function ge(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Be,this.__views__=[]}function Wv(){var t=new ge(this.__wrapped__);return t.__actions__=At(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=At(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=At(this.__views__),t}function $v(){if(this.__filtered__){var t=new ge(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Uv(){var t=this.__wrapped__.value(),i=this.__dir__,a=oe(t),f=i<0,p=a?t.length:0,b=ny(0,p,this.__views__),w=b.start,T=b.end,R=T-w,N=f?T:w-1,F=this.__iteratees__,V=F.length,G=0,X=dt(R,this.__takeCount__);if(!a||!f&&p==R&&X==R)return xh(t,this.__actions__);var te=[];e:for(;R--&&G<X;){N+=i;for(var fe=-1,ne=t[N];++fe<V;){var pe=F[fe],ve=pe.iteratee,$t=pe.type,Tt=ve(ne);if($t==Yt)ne=Tt;else if(!Tt){if($t==St)continue e;break e}}te[G++]=ne}return te}ge.prototype=Ti(Wo.prototype),ge.prototype.constructor=ge;function Wr(t){var i=-1,a=t==null?0:t.length;for(this.clear();++i<a;){var f=t[i];this.set(f[0],f[1])}}function Hv(){this.__data__=_s?_s(null):{},this.size=0}function Gv(t){var i=this.has(t)&&delete this.__data__[t];return this.size-=i?1:0,i}function Kv(t){var i=this.__data__;if(_s){var a=i[t];return a===c?r:a}return Ee.call(i,t)?i[t]:r}function Yv(t){var i=this.__data__;return _s?i[t]!==r:Ee.call(i,t)}function qv(t,i){var a=this.__data__;return this.size+=this.has(t)?0:1,a[t]=_s&&i===r?c:i,this}Wr.prototype.clear=Hv,Wr.prototype.delete=Gv,Wr.prototype.get=Kv,Wr.prototype.has=Yv,Wr.prototype.set=qv;function Wn(t){var i=-1,a=t==null?0:t.length;for(this.clear();++i<a;){var f=t[i];this.set(f[0],f[1])}}function Xv(){this.__data__=[],this.size=0}function Zv(t){var i=this.__data__,a=$o(i,t);if(a<0)return!1;var f=i.length-1;return a==f?i.pop():jo.call(i,a,1),--this.size,!0}function Jv(t){var i=this.__data__,a=$o(i,t);return a<0?r:i[a][1]}function Qv(t){return $o(this.__data__,t)>-1}function ex(t,i){var a=this.__data__,f=$o(a,t);return f<0?(++this.size,a.push([t,i])):a[f][1]=i,this}Wn.prototype.clear=Xv,Wn.prototype.delete=Zv,Wn.prototype.get=Jv,Wn.prototype.has=Qv,Wn.prototype.set=ex;function $n(t){var i=-1,a=t==null?0:t.length;for(this.clear();++i<a;){var f=t[i];this.set(f[0],f[1])}}function tx(){this.size=0,this.__data__={hash:new Wr,map:new(bs||Wn),string:new Wr}}function nx(t){var i=ta(this,t).delete(t);return this.size-=i?1:0,i}function rx(t){return ta(this,t).get(t)}function ix(t){return ta(this,t).has(t)}function sx(t,i){var a=ta(this,t),f=a.size;return a.set(t,i),this.size+=a.size==f?0:1,this}$n.prototype.clear=tx,$n.prototype.delete=nx,$n.prototype.get=rx,$n.prototype.has=ix,$n.prototype.set=sx;function $r(t){var i=-1,a=t==null?0:t.length;for(this.__data__=new $n;++i<a;)this.add(t[i])}function ox(t){return this.__data__.set(t,c),this}function ax(t){return this.__data__.has(t)}$r.prototype.add=$r.prototype.push=ox,$r.prototype.has=ax;function gn(t){var i=this.__data__=new Wn(t);this.size=i.size}function lx(){this.__data__=new Wn,this.size=0}function ux(t){var i=this.__data__,a=i.delete(t);return this.size=i.size,a}function cx(t){return this.__data__.get(t)}function fx(t){return this.__data__.has(t)}function hx(t,i){var a=this.__data__;if(a instanceof Wn){var f=a.__data__;if(!bs||f.length<o-1)return f.push([t,i]),this.size=++a.size,this;a=this.__data__=new $n(f)}return a.set(t,i),this.size=a.size,this}gn.prototype.clear=lx,gn.prototype.delete=ux,gn.prototype.get=cx,gn.prototype.has=fx,gn.prototype.set=hx;function qf(t,i){var a=oe(t),f=!a&&Yr(t),p=!a&&!f&&Sr(t),b=!a&&!f&&!p&&Ci(t),w=a||f||p||b,T=w?El(t.length,_v):[],R=T.length;for(var N in t)(i||Ee.call(t,N))&&!(w&&(N=="length"||p&&(N=="offset"||N=="parent")||b&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||Kn(N,R)))&&T.push(N);return T}function Xf(t){var i=t.length;return i?t[Wl(0,i-1)]:r}function dx(t,i){return na(At(t),Ur(i,0,t.length))}function px(t){return na(At(t))}function Il(t,i,a){(a!==r&&!vn(t[i],a)||a===r&&!(i in t))&&Un(t,i,a)}function Ss(t,i,a){var f=t[i];(!(Ee.call(t,i)&&vn(f,a))||a===r&&!(i in t))&&Un(t,i,a)}function $o(t,i){for(var a=t.length;a--;)if(vn(t[a][0],i))return a;return-1}function mx(t,i,a,f){return br(t,function(p,b,w){i(f,p,a(p),w)}),f}function Zf(t,i){return t&&An(i,it(i),t)}function gx(t,i){return t&&An(i,Rt(i),t)}function Un(t,i,a){i=="__proto__"&&No?No(t,i,{configurable:!0,enumerable:!0,value:a,writable:!0}):t[i]=a}function Dl(t,i){for(var a=-1,f=i.length,p=D(f),b=t==null;++a<f;)p[a]=b?r:du(t,i[a]);return p}function Ur(t,i,a){return t===t&&(a!==r&&(t=t<=a?t:a),i!==r&&(t=t>=i?t:i)),t}function en(t,i,a,f,p,b){var w,T=i&v,R=i&y,N=i&_;if(a&&(w=p?a(t,f,p,b):a(t)),w!==r)return w;if(!je(t))return t;var F=oe(t);if(F){if(w=iy(t),!T)return At(t,w)}else{var V=pt(t),G=V==xt||V==qi;if(Sr(t))return wh(t,T);if(V==hn||V==ut||G&&!p){if(w=R||G?{}:Vh(t),!T)return R?Kx(t,gx(w,t)):Gx(t,Zf(w,t))}else{if(!Se[V])return p?t:{};w=sy(t,V,T)}}b||(b=new gn);var X=b.get(t);if(X)return X;b.set(t,w),md(t)?t.forEach(function(ne){w.add(en(ne,i,a,ne,t,b))}):dd(t)&&t.forEach(function(ne,pe){w.set(pe,en(ne,i,a,pe,t,b))});var te=N?R?Ql:Jl:R?Rt:it,fe=F?r:te(t);return Zt(fe||t,function(ne,pe){fe&&(pe=ne,ne=t[pe]),Ss(w,pe,en(ne,i,a,pe,t,b))}),w}function vx(t){var i=it(t);return function(a){return Jf(a,t,i)}}function Jf(t,i,a){var f=a.length;if(t==null)return!f;for(t=Re(t);f--;){var p=a[f],b=i[p],w=t[p];if(w===r&&!(p in t)||!b(w))return!1}return!0}function Qf(t,i,a){if(typeof t!="function")throw new Jt(u);return Ms(function(){t.apply(r,a)},i)}function Es(t,i,a,f){var p=-1,b=Ao,w=!0,T=t.length,R=[],N=i.length;if(!T)return R;a&&(i=Ie(i,Vt(a))),f?(b=yl,w=!1):i.length>=o&&(b=xs,w=!1,i=new $r(i));e:for(;++p<T;){var F=t[p],V=a==null?F:a(F);if(F=f||F!==0?F:0,w&&V===V){for(var G=N;G--;)if(i[G]===V)continue e;R.push(F)}else b(i,V,f)||R.push(F)}return R}var br=Ah(En),eh=Ah(Ol,!0);function xx(t,i){var a=!0;return br(t,function(f,p,b){return a=!!i(f,p,b),a}),a}function Uo(t,i,a){for(var f=-1,p=t.length;++f<p;){var b=t[f],w=i(b);if(w!=null&&(T===r?w===w&&!Wt(w):a(w,T)))var T=w,R=b}return R}function yx(t,i,a,f){var p=t.length;for(a=ue(a),a<0&&(a=-a>p?0:p+a),f=f===r||f>p?p:ue(f),f<0&&(f+=p),f=a>f?0:vd(f);a<f;)t[a++]=i;return t}function th(t,i){var a=[];return br(t,function(f,p,b){i(f,p,b)&&a.push(f)}),a}function ft(t,i,a,f,p){var b=-1,w=t.length;for(a||(a=ay),p||(p=[]);++b<w;){var T=t[b];i>0&&a(T)?i>1?ft(T,i-1,a,f,p):vr(p,T):f||(p[p.length]=T)}return p}var kl=Ch(),nh=Ch(!0);function En(t,i){return t&&kl(t,i,it)}function Ol(t,i){return t&&nh(t,i,it)}function Ho(t,i){return gr(i,function(a){return Yn(t[a])})}function Hr(t,i){i=_r(i,t);for(var a=0,f=i.length;t!=null&&a<f;)t=t[Cn(i[a++])];return a&&a==f?t:r}function rh(t,i,a){var f=i(t);return oe(t)?f:vr(f,a(t))}function wt(t){return t==null?t===r?xe:Mr:zr&&zr in Re(t)?ty(t):py(t)}function jl(t,i){return t>i}function bx(t,i){return t!=null&&Ee.call(t,i)}function wx(t,i){return t!=null&&i in Re(t)}function _x(t,i,a){return t>=dt(i,a)&&t<tt(i,a)}function Nl(t,i,a){for(var f=a?yl:Ao,p=t[0].length,b=t.length,w=b,T=D(b),R=1/0,N=[];w--;){var F=t[w];w&&i&&(F=Ie(F,Vt(i))),R=dt(F.length,R),T[w]=!a&&(i||p>=120&&F.length>=120)?new $r(w&&F):r}F=t[0];var V=-1,G=T[0];e:for(;++V<p&&N.length<R;){var X=F[V],te=i?i(X):X;if(X=a||X!==0?X:0,!(G?xs(G,te):f(N,te,a))){for(w=b;--w;){var fe=T[w];if(!(fe?xs(fe,te):f(t[w],te,a)))continue e}G&&G.push(te),N.push(X)}}return N}function Tx(t,i,a,f){return En(t,function(p,b,w){i(f,a(p),b,w)}),f}function As(t,i,a){i=_r(i,t),t=Uh(t,i);var f=t==null?t:t[Cn(nn(i))];return f==null?r:Bt(f,t,a)}function ih(t){return Ve(t)&&wt(t)==ut}function Sx(t){return Ve(t)&&wt(t)==yt}function Ex(t){return Ve(t)&&wt(t)==vt}function Cs(t,i,a,f,p){return t===i?!0:t==null||i==null||!Ve(t)&&!Ve(i)?t!==t&&i!==i:Ax(t,i,a,f,Cs,p)}function Ax(t,i,a,f,p,b){var w=oe(t),T=oe(i),R=w?Et:pt(t),N=T?Et:pt(i);R=R==ut?hn:R,N=N==ut?hn:N;var F=R==hn,V=N==hn,G=R==N;if(G&&Sr(t)){if(!Sr(i))return!1;w=!0,F=!1}if(G&&!F)return b||(b=new gn),w||Ci(t)?Nh(t,i,a,f,p,b):Qx(t,i,R,a,f,p,b);if(!(a&S)){var X=F&&Ee.call(t,"__wrapped__"),te=V&&Ee.call(i,"__wrapped__");if(X||te){var fe=X?t.value():t,ne=te?i.value():i;return b||(b=new gn),p(fe,ne,a,f,b)}}return G?(b||(b=new gn),ey(t,i,a,f,p,b)):!1}function Cx(t){return Ve(t)&&pt(t)==kt}function Fl(t,i,a,f){var p=a.length,b=p,w=!f;if(t==null)return!b;for(t=Re(t);p--;){var T=a[p];if(w&&T[2]?T[1]!==t[T[0]]:!(T[0]in t))return!1}for(;++p<b;){T=a[p];var R=T[0],N=t[R],F=T[1];if(w&&T[2]){if(N===r&&!(R in t))return!1}else{var V=new gn;if(f)var G=f(N,F,R,t,i,V);if(!(G===r?Cs(F,N,S|C,f,V):G))return!1}}return!0}function sh(t){if(!je(t)||uy(t))return!1;var i=Yn(t)?Cv:ss;return i.test(Kr(t))}function Rx(t){return Ve(t)&&wt(t)==lr}function Px(t){return Ve(t)&&pt(t)==Ot}function Lx(t){return Ve(t)&&la(t.length)&&!!Ae[wt(t)]}function oh(t){return typeof t=="function"?t:t==null?Pt:typeof t=="object"?oe(t)?uh(t[0],t[1]):lh(t):Rd(t)}function Bl(t){if(!Ls(t))return Dv(t);var i=[];for(var a in Re(t))Ee.call(t,a)&&a!="constructor"&&i.push(a);return i}function Mx(t){if(!je(t))return dy(t);var i=Ls(t),a=[];for(var f in t)f=="constructor"&&(i||!Ee.call(t,f))||a.push(f);return a}function Vl(t,i){return t<i}function ah(t,i){var a=-1,f=Ct(t)?D(t.length):[];return br(t,function(p,b,w){f[++a]=i(p,b,w)}),f}function lh(t){var i=tu(t);return i.length==1&&i[0][2]?Wh(i[0][0],i[0][1]):function(a){return a===t||Fl(a,t,i)}}function uh(t,i){return ru(t)&&zh(i)?Wh(Cn(t),i):function(a){var f=du(a,t);return f===r&&f===i?pu(a,t):Cs(i,f,S|C)}}function Go(t,i,a,f,p){t!==i&&kl(i,function(b,w){if(p||(p=new gn),je(b))Ix(t,i,w,a,Go,f,p);else{var T=f?f(su(t,w),b,w+"",t,i,p):r;T===r&&(T=b),Il(t,w,T)}},Rt)}function Ix(t,i,a,f,p,b,w){var T=su(t,a),R=su(i,a),N=w.get(R);if(N){Il(t,a,N);return}var F=b?b(T,R,a+"",t,i,w):r,V=F===r;if(V){var G=oe(R),X=!G&&Sr(R),te=!G&&!X&&Ci(R);F=R,G||X||te?oe(T)?F=T:He(T)?F=At(T):X?(V=!1,F=wh(R,!0)):te?(V=!1,F=_h(R,!0)):F=[]:Is(R)||Yr(R)?(F=T,Yr(T)?F=xd(T):(!je(T)||Yn(T))&&(F=Vh(R))):V=!1}V&&(w.set(R,F),p(F,R,f,b,w),w.delete(R)),Il(t,a,F)}function ch(t,i){var a=t.length;if(a)return i+=i<0?a:0,Kn(i,a)?t[i]:r}function fh(t,i,a){i.length?i=Ie(i,function(b){return oe(b)?function(w){return Hr(w,b.length===1?b[0]:b)}:b}):i=[Pt];var f=-1;i=Ie(i,Vt(ee()));var p=ah(t,function(b,w,T){var R=Ie(i,function(N){return N(b)});return{criteria:R,index:++f,value:b}});return sv(p,function(b,w){return Hx(b,w,a)})}function Dx(t,i){return hh(t,i,function(a,f){return pu(t,f)})}function hh(t,i,a){for(var f=-1,p=i.length,b={};++f<p;){var w=i[f],T=Hr(t,w);a(T,w)&&Rs(b,_r(w,t),T)}return b}function kx(t){return function(i){return Hr(i,t)}}function zl(t,i,a,f){var p=f?iv:gi,b=-1,w=i.length,T=t;for(t===i&&(i=At(i)),a&&(T=Ie(t,Vt(a)));++b<w;)for(var R=0,N=i[b],F=a?a(N):N;(R=p(T,F,R,f))>-1;)T!==t&&jo.call(T,R,1),jo.call(t,R,1);return t}function dh(t,i){for(var a=t?i.length:0,f=a-1;a--;){var p=i[a];if(a==f||p!==b){var b=p;Kn(p)?jo.call(t,p,1):Hl(t,p)}}return t}function Wl(t,i){return t+Bo(Kf()*(i-t+1))}function Ox(t,i,a,f){for(var p=-1,b=tt(Fo((i-t)/(a||1)),0),w=D(b);b--;)w[f?b:++p]=t,t+=a;return w}function $l(t,i){var a="";if(!t||i<1||i>be)return a;do i%2&&(a+=t),i=Bo(i/2),i&&(t+=t);while(i);return a}function de(t,i){return ou($h(t,i,Pt),t+"")}function jx(t){return Xf(Ri(t))}function Nx(t,i){var a=Ri(t);return na(a,Ur(i,0,a.length))}function Rs(t,i,a,f){if(!je(t))return t;i=_r(i,t);for(var p=-1,b=i.length,w=b-1,T=t;T!=null&&++p<b;){var R=Cn(i[p]),N=a;if(R==="__proto__"||R==="constructor"||R==="prototype")return t;if(p!=w){var F=T[R];N=f?f(F,R,T):r,N===r&&(N=je(F)?F:Kn(i[p+1])?[]:{})}Ss(T,R,N),T=T[R]}return t}var ph=Vo?function(t,i){return Vo.set(t,i),t}:Pt,Fx=No?function(t,i){return No(t,"toString",{configurable:!0,enumerable:!1,value:gu(i),writable:!0})}:Pt;function Bx(t){return na(Ri(t))}function tn(t,i,a){var f=-1,p=t.length;i<0&&(i=-i>p?0:p+i),a=a>p?p:a,a<0&&(a+=p),p=i>a?0:a-i>>>0,i>>>=0;for(var b=D(p);++f<p;)b[f]=t[f+i];return b}function Vx(t,i){var a;return br(t,function(f,p,b){return a=i(f,p,b),!a}),!!a}function Ko(t,i,a){var f=0,p=t==null?f:t.length;if(typeof i=="number"&&i===i&&p<=Mt){for(;f<p;){var b=f+p>>>1,w=t[b];w!==null&&!Wt(w)&&(a?w<=i:w<i)?f=b+1:p=b}return p}return Ul(t,i,Pt,a)}function Ul(t,i,a,f){var p=0,b=t==null?0:t.length;if(b===0)return 0;i=a(i);for(var w=i!==i,T=i===null,R=Wt(i),N=i===r;p<b;){var F=Bo((p+b)/2),V=a(t[F]),G=V!==r,X=V===null,te=V===V,fe=Wt(V);if(w)var ne=f||te;else N?ne=te&&(f||G):T?ne=te&&G&&(f||!X):R?ne=te&&G&&!X&&(f||!fe):X||fe?ne=!1:ne=f?V<=i:V<i;ne?p=F+1:b=F}return dt(b,lt)}function mh(t,i){for(var a=-1,f=t.length,p=0,b=[];++a<f;){var w=t[a],T=i?i(w):w;if(!a||!vn(T,R)){var R=T;b[p++]=w===0?0:w}}return b}function gh(t){return typeof t=="number"?t:Wt(t)?Ze:+t}function zt(t){if(typeof t=="string")return t;if(oe(t))return Ie(t,zt)+"";if(Wt(t))return Yf?Yf.call(t):"";var i=t+"";return i=="0"&&1/t==-me?"-0":i}function wr(t,i,a){var f=-1,p=Ao,b=t.length,w=!0,T=[],R=T;if(a)w=!1,p=yl;else if(b>=o){var N=i?null:Zx(t);if(N)return Ro(N);w=!1,p=xs,R=new $r}else R=i?[]:T;e:for(;++f<b;){var F=t[f],V=i?i(F):F;if(F=a||F!==0?F:0,w&&V===V){for(var G=R.length;G--;)if(R[G]===V)continue e;i&&R.push(V),T.push(F)}else p(R,V,a)||(R!==T&&R.push(V),T.push(F))}return T}function Hl(t,i){return i=_r(i,t),t=Uh(t,i),t==null||delete t[Cn(nn(i))]}function vh(t,i,a,f){return Rs(t,i,a(Hr(t,i)),f)}function Yo(t,i,a,f){for(var p=t.length,b=f?p:-1;(f?b--:++b<p)&&i(t[b],b,t););return a?tn(t,f?0:b,f?b+1:p):tn(t,f?b+1:0,f?p:b)}function xh(t,i){var a=t;return a instanceof ge&&(a=a.value()),bl(i,function(f,p){return p.func.apply(p.thisArg,vr([f],p.args))},a)}function Gl(t,i,a){var f=t.length;if(f<2)return f?wr(t[0]):[];for(var p=-1,b=D(f);++p<f;)for(var w=t[p],T=-1;++T<f;)T!=p&&(b[p]=Es(b[p]||w,t[T],i,a));return wr(ft(b,1),i,a)}function yh(t,i,a){for(var f=-1,p=t.length,b=i.length,w={};++f<p;){var T=f<b?i[f]:r;a(w,t[f],T)}return w}function Kl(t){return He(t)?t:[]}function Yl(t){return typeof t=="function"?t:Pt}function _r(t,i){return oe(t)?t:ru(t,i)?[t]:Yh(_e(t))}var zx=de;function Tr(t,i,a){var f=t.length;return a=a===r?f:a,!i&&a>=f?t:tn(t,i,a)}var bh=Rv||function(t){return ye.clearTimeout(t)};function wh(t,i){if(i)return t.slice();var a=t.length,f=Wf?Wf(a):new t.constructor(a);return t.copy(f),f}function ql(t){var i=new t.constructor(t.byteLength);return new ko(i).set(new ko(t)),i}function Wx(t,i){var a=i?ql(t.buffer):t.buffer;return new t.constructor(a,t.byteOffset,t.byteLength)}function $x(t){var i=new t.constructor(t.source,is.exec(t));return i.lastIndex=t.lastIndex,i}function Ux(t){return Ts?Re(Ts.call(t)):{}}function _h(t,i){var a=i?ql(t.buffer):t.buffer;return new t.constructor(a,t.byteOffset,t.length)}function Th(t,i){if(t!==i){var a=t!==r,f=t===null,p=t===t,b=Wt(t),w=i!==r,T=i===null,R=i===i,N=Wt(i);if(!T&&!N&&!b&&t>i||b&&w&&R&&!T&&!N||f&&w&&R||!a&&R||!p)return 1;if(!f&&!b&&!N&&t<i||N&&a&&p&&!f&&!b||T&&a&&p||!w&&p||!R)return-1}return 0}function Hx(t,i,a){for(var f=-1,p=t.criteria,b=i.criteria,w=p.length,T=a.length;++f<w;){var R=Th(p[f],b[f]);if(R){if(f>=T)return R;var N=a[f];return R*(N=="desc"?-1:1)}}return t.index-i.index}function Sh(t,i,a,f){for(var p=-1,b=t.length,w=a.length,T=-1,R=i.length,N=tt(b-w,0),F=D(R+N),V=!f;++T<R;)F[T]=i[T];for(;++p<w;)(V||p<b)&&(F[a[p]]=t[p]);for(;N--;)F[T++]=t[p++];return F}function Eh(t,i,a,f){for(var p=-1,b=t.length,w=-1,T=a.length,R=-1,N=i.length,F=tt(b-T,0),V=D(F+N),G=!f;++p<F;)V[p]=t[p];for(var X=p;++R<N;)V[X+R]=i[R];for(;++w<T;)(G||p<b)&&(V[X+a[w]]=t[p++]);return V}function At(t,i){var a=-1,f=t.length;for(i||(i=D(f));++a<f;)i[a]=t[a];return i}function An(t,i,a,f){var p=!a;a||(a={});for(var b=-1,w=i.length;++b<w;){var T=i[b],R=f?f(a[T],t[T],T,a,t):r;R===r&&(R=t[T]),p?Un(a,T,R):Ss(a,T,R)}return a}function Gx(t,i){return An(t,nu(t),i)}function Kx(t,i){return An(t,Fh(t),i)}function qo(t,i){return function(a,f){var p=oe(a)?J0:mx,b=i?i():{};return p(a,t,ee(f,2),b)}}function Si(t){return de(function(i,a){var f=-1,p=a.length,b=p>1?a[p-1]:r,w=p>2?a[2]:r;for(b=t.length>3&&typeof b=="function"?(p--,b):r,w&&_t(a[0],a[1],w)&&(b=p<3?r:b,p=1),i=Re(i);++f<p;){var T=a[f];T&&t(i,T,f,b)}return i})}function Ah(t,i){return function(a,f){if(a==null)return a;if(!Ct(a))return t(a,f);for(var p=a.length,b=i?p:-1,w=Re(a);(i?b--:++b<p)&&f(w[b],b,w)!==!1;);return a}}function Ch(t){return function(i,a,f){for(var p=-1,b=Re(i),w=f(i),T=w.length;T--;){var R=w[t?T:++p];if(a(b[R],R,b)===!1)break}return i}}function Yx(t,i,a){var f=i&I,p=Ps(t);function b(){var w=this&&this!==ye&&this instanceof b?p:t;return w.apply(f?a:this,arguments)}return b}function Rh(t){return function(i){i=_e(i);var a=vi(i)?mn(i):r,f=a?a[0]:i.charAt(0),p=a?Tr(a,1).join(""):i.slice(1);return f[t]()+p}}function Ei(t){return function(i){return bl(Ad(Ed(i).replace(mr,"")),t,"")}}function Ps(t){return function(){var i=arguments;switch(i.length){case 0:return new t;case 1:return new t(i[0]);case 2:return new t(i[0],i[1]);case 3:return new t(i[0],i[1],i[2]);case 4:return new t(i[0],i[1],i[2],i[3]);case 5:return new t(i[0],i[1],i[2],i[3],i[4]);case 6:return new t(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new t(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var a=Ti(t.prototype),f=t.apply(a,i);return je(f)?f:a}}function qx(t,i,a){var f=Ps(t);function p(){for(var b=arguments.length,w=D(b),T=b,R=Ai(p);T--;)w[T]=arguments[T];var N=b<3&&w[0]!==R&&w[b-1]!==R?[]:xr(w,R);if(b-=N.length,b<a)return Dh(t,i,Xo,p.placeholder,r,w,N,r,r,a-b);var F=this&&this!==ye&&this instanceof p?f:t;return Bt(F,this,w)}return p}function Ph(t){return function(i,a,f){var p=Re(i);if(!Ct(i)){var b=ee(a,3);i=it(i),a=function(T){return b(p[T],T,p)}}var w=t(i,a,f);return w>-1?p[b?i[w]:w]:r}}function Lh(t){return Gn(function(i){var a=i.length,f=a,p=Qt.prototype.thru;for(t&&i.reverse();f--;){var b=i[f];if(typeof b!="function")throw new Jt(u);if(p&&!w&&ea(b)=="wrapper")var w=new Qt([],!0)}for(f=w?f:a;++f<a;){b=i[f];var T=ea(b),R=T=="wrapper"?eu(b):r;R&&iu(R[0])&&R[1]==($|M|j|U)&&!R[4].length&&R[9]==1?w=w[ea(R[0])].apply(w,R[3]):w=b.length==1&&iu(b)?w[T]():w.thru(b)}return function(){var N=arguments,F=N[0];if(w&&N.length==1&&oe(F))return w.plant(F).value();for(var V=0,G=a?i[V].apply(this,N):F;++V<a;)G=i[V].call(this,G);return G}})}function Xo(t,i,a,f,p,b,w,T,R,N){var F=i&$,V=i&I,G=i&L,X=i&(M|z),te=i&ce,fe=G?r:Ps(t);function ne(){for(var pe=arguments.length,ve=D(pe),$t=pe;$t--;)ve[$t]=arguments[$t];if(X)var Tt=Ai(ne),Ut=av(ve,Tt);if(f&&(ve=Sh(ve,f,p,X)),b&&(ve=Eh(ve,b,w,X)),pe-=Ut,X&&pe<N){var Ge=xr(ve,Tt);return Dh(t,i,Xo,ne.placeholder,a,ve,Ge,T,R,N-pe)}var xn=V?a:this,Xn=G?xn[t]:t;return pe=ve.length,T?ve=my(ve,T):te&&pe>1&&ve.reverse(),F&&R<pe&&(ve.length=R),this&&this!==ye&&this instanceof ne&&(Xn=fe||Ps(Xn)),Xn.apply(xn,ve)}return ne}function Mh(t,i){return function(a,f){return Tx(a,t,i(f),{})}}function Zo(t,i){return function(a,f){var p;if(a===r&&f===r)return i;if(a!==r&&(p=a),f!==r){if(p===r)return f;typeof a=="string"||typeof f=="string"?(a=zt(a),f=zt(f)):(a=gh(a),f=gh(f)),p=t(a,f)}return p}}function Xl(t){return Gn(function(i){return i=Ie(i,Vt(ee())),de(function(a){var f=this;return t(i,function(p){return Bt(p,f,a)})})})}function Jo(t,i){i=i===r?" ":zt(i);var a=i.length;if(a<2)return a?$l(i,t):i;var f=$l(i,Fo(t/xi(i)));return vi(i)?Tr(mn(f),0,t).join(""):f.slice(0,t)}function Xx(t,i,a,f){var p=i&I,b=Ps(t);function w(){for(var T=-1,R=arguments.length,N=-1,F=f.length,V=D(F+R),G=this&&this!==ye&&this instanceof w?b:t;++N<F;)V[N]=f[N];for(;R--;)V[N++]=arguments[++T];return Bt(G,p?a:this,V)}return w}function Ih(t){return function(i,a,f){return f&&typeof f!="number"&&_t(i,a,f)&&(a=f=r),i=qn(i),a===r?(a=i,i=0):a=qn(a),f=f===r?i<a?1:-1:qn(f),Ox(i,a,f,t)}}function Qo(t){return function(i,a){return typeof i=="string"&&typeof a=="string"||(i=rn(i),a=rn(a)),t(i,a)}}function Dh(t,i,a,f,p,b,w,T,R,N){var F=i&M,V=F?w:r,G=F?r:w,X=F?b:r,te=F?r:b;i|=F?j:B,i&=~(F?B:j),i&P||(i&=-4);var fe=[t,i,p,X,V,te,G,T,R,N],ne=a.apply(r,fe);return iu(t)&&Hh(ne,fe),ne.placeholder=f,Gh(ne,t,i)}function Zl(t){var i=et[t];return function(a,f){if(a=rn(a),f=f==null?0:dt(ue(f),292),f&&Gf(a)){var p=(_e(a)+"e").split("e"),b=i(p[0]+"e"+(+p[1]+f));return p=(_e(b)+"e").split("e"),+(p[0]+"e"+(+p[1]-f))}return i(a)}}var Zx=wi&&1/Ro(new wi([,-0]))[1]==me?function(t){return new wi(t)}:yu;function kh(t){return function(i){var a=pt(i);return a==kt?Cl(i):a==Ot?pv(i):ov(i,t(i))}}function Hn(t,i,a,f,p,b,w,T){var R=i&L;if(!R&&typeof t!="function")throw new Jt(u);var N=f?f.length:0;if(N||(i&=-97,f=p=r),w=w===r?w:tt(ue(w),0),T=T===r?T:ue(T),N-=p?p.length:0,i&B){var F=f,V=p;f=p=r}var G=R?r:eu(t),X=[t,i,a,f,p,F,V,b,w,T];if(G&&hy(X,G),t=X[0],i=X[1],a=X[2],f=X[3],p=X[4],T=X[9]=X[9]===r?R?0:t.length:tt(X[9]-N,0),!T&&i&(M|z)&&(i&=-25),!i||i==I)var te=Yx(t,i,a);else i==M||i==z?te=qx(t,i,T):(i==j||i==(I|j))&&!p.length?te=Xx(t,i,a,f):te=Xo.apply(r,X);var fe=G?ph:Hh;return Gh(fe(te,X),t,i)}function Oh(t,i,a,f){return t===r||vn(t,bi[a])&&!Ee.call(f,a)?i:t}function jh(t,i,a,f,p,b){return je(t)&&je(i)&&(b.set(i,t),Go(t,i,r,jh,b),b.delete(i)),t}function Jx(t){return Is(t)?r:t}function Nh(t,i,a,f,p,b){var w=a&S,T=t.length,R=i.length;if(T!=R&&!(w&&R>T))return!1;var N=b.get(t),F=b.get(i);if(N&&F)return N==i&&F==t;var V=-1,G=!0,X=a&C?new $r:r;for(b.set(t,i),b.set(i,t);++V<T;){var te=t[V],fe=i[V];if(f)var ne=w?f(fe,te,V,i,t,b):f(te,fe,V,t,i,b);if(ne!==r){if(ne)continue;G=!1;break}if(X){if(!wl(i,function(pe,ve){if(!xs(X,ve)&&(te===pe||p(te,pe,a,f,b)))return X.push(ve)})){G=!1;break}}else if(!(te===fe||p(te,fe,a,f,b))){G=!1;break}}return b.delete(t),b.delete(i),G}function Qx(t,i,a,f,p,b,w){switch(a){case jt:if(t.byteLength!=i.byteLength||t.byteOffset!=i.byteOffset)return!1;t=t.buffer,i=i.buffer;case yt:return!(t.byteLength!=i.byteLength||!b(new ko(t),new ko(i)));case Dt:case vt:case ar:return vn(+t,+i);case fn:return t.name==i.name&&t.message==i.message;case lr:case ae:return t==i+"";case kt:var T=Cl;case Ot:var R=f&S;if(T||(T=Ro),t.size!=i.size&&!R)return!1;var N=w.get(t);if(N)return N==i;f|=C,w.set(t,i);var F=Nh(T(t),T(i),f,p,b,w);return w.delete(t),F;case Y:if(Ts)return Ts.call(t)==Ts.call(i)}return!1}function ey(t,i,a,f,p,b){var w=a&S,T=Jl(t),R=T.length,N=Jl(i),F=N.length;if(R!=F&&!w)return!1;for(var V=R;V--;){var G=T[V];if(!(w?G in i:Ee.call(i,G)))return!1}var X=b.get(t),te=b.get(i);if(X&&te)return X==i&&te==t;var fe=!0;b.set(t,i),b.set(i,t);for(var ne=w;++V<R;){G=T[V];var pe=t[G],ve=i[G];if(f)var $t=w?f(ve,pe,G,i,t,b):f(pe,ve,G,t,i,b);if(!($t===r?pe===ve||p(pe,ve,a,f,b):$t)){fe=!1;break}ne||(ne=G=="constructor")}if(fe&&!ne){var Tt=t.constructor,Ut=i.constructor;Tt!=Ut&&"constructor"in t&&"constructor"in i&&!(typeof Tt=="function"&&Tt instanceof Tt&&typeof Ut=="function"&&Ut instanceof Ut)&&(fe=!1)}return b.delete(t),b.delete(i),fe}function Gn(t){return ou($h(t,r,Jh),t+"")}function Jl(t){return rh(t,it,nu)}function Ql(t){return rh(t,Rt,Fh)}var eu=Vo?function(t){return Vo.get(t)}:yu;function ea(t){for(var i=t.name+"",a=_i[i],f=Ee.call(_i,i)?a.length:0;f--;){var p=a[f],b=p.func;if(b==null||b==t)return p.name}return i}function Ai(t){var i=Ee.call(x,"placeholder")?x:t;return i.placeholder}function ee(){var t=x.iteratee||vu;return t=t===vu?oh:t,arguments.length?t(arguments[0],arguments[1]):t}function ta(t,i){var a=t.__data__;return ly(i)?a[typeof i=="string"?"string":"hash"]:a.map}function tu(t){for(var i=it(t),a=i.length;a--;){var f=i[a],p=t[f];i[a]=[f,p,zh(p)]}return i}function Gr(t,i){var a=fv(t,i);return sh(a)?a:r}function ty(t){var i=Ee.call(t,zr),a=t[zr];try{t[zr]=r;var f=!0}catch{}var p=Io.call(t);return f&&(i?t[zr]=a:delete t[zr]),p}var nu=Pl?function(t){return t==null?[]:(t=Re(t),gr(Pl(t),function(i){return Uf.call(t,i)}))}:bu,Fh=Pl?function(t){for(var i=[];t;)vr(i,nu(t)),t=Oo(t);return i}:bu,pt=wt;(Ll&&pt(new Ll(new ArrayBuffer(1)))!=jt||bs&&pt(new bs)!=kt||Ml&&pt(Ml.resolve())!=so||wi&&pt(new wi)!=Ot||ws&&pt(new ws)!=le)&&(pt=function(t){var i=wt(t),a=i==hn?t.constructor:r,f=a?Kr(a):"";if(f)switch(f){case Nv:return jt;case Fv:return kt;case Bv:return so;case Vv:return Ot;case zv:return le}return i});function ny(t,i,a){for(var f=-1,p=a.length;++f<p;){var b=a[f],w=b.size;switch(b.type){case"drop":t+=w;break;case"dropRight":i-=w;break;case"take":i=dt(i,t+w);break;case"takeRight":t=tt(t,i-w);break}}return{start:t,end:i}}function ry(t){var i=t.match(lo);return i?i[1].split(pl):[]}function Bh(t,i,a){i=_r(i,t);for(var f=-1,p=i.length,b=!1;++f<p;){var w=Cn(i[f]);if(!(b=t!=null&&a(t,w)))break;t=t[w]}return b||++f!=p?b:(p=t==null?0:t.length,!!p&&la(p)&&Kn(w,p)&&(oe(t)||Yr(t)))}function iy(t){var i=t.length,a=new t.constructor(i);return i&&typeof t[0]=="string"&&Ee.call(t,"index")&&(a.index=t.index,a.input=t.input),a}function Vh(t){return typeof t.constructor=="function"&&!Ls(t)?Ti(Oo(t)):{}}function sy(t,i,a){var f=t.constructor;switch(i){case yt:return ql(t);case Dt:case vt:return new f(+t);case jt:return Wx(t,a);case Ir:case ci:case kn:case Xi:case Zi:case Ji:case ur:case On:case Qi:return _h(t,a);case kt:return new f;case ar:case ae:return new f(t);case lr:return $x(t);case Ot:return new f;case Y:return Ux(t)}}function oy(t,i){var a=i.length;if(!a)return t;var f=a-1;return i[f]=(a>1?"& ":"")+i[f],i=i.join(a>2?", ":" "),t.replace(dl,`{
/* [wrapped with `+i+`] */
`)}function ay(t){return oe(t)||Yr(t)||!!(Hf&&t&&t[Hf])}function Kn(t,i){var a=typeof t;return i=i??be,!!i&&(a=="number"||a!="symbol"&&os.test(t))&&t>-1&&t%1==0&&t<i}function _t(t,i,a){if(!je(a))return!1;var f=typeof i;return(f=="number"?Ct(a)&&Kn(i,a.length):f=="string"&&i in a)?vn(a[i],t):!1}function ru(t,i){if(oe(t))return!1;var a=typeof t;return a=="number"||a=="symbol"||a=="boolean"||t==null||Wt(t)?!0:ct.test(t)||!fl.test(t)||i!=null&&t in Re(i)}function ly(t){var i=typeof t;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?t!=="__proto__":t===null}function iu(t){var i=ea(t),a=x[i];if(typeof a!="function"||!(i in ge.prototype))return!1;if(t===a)return!0;var f=eu(a);return!!f&&t===f[0]}function uy(t){return!!zf&&zf in t}var cy=Lo?Yn:wu;function Ls(t){var i=t&&t.constructor,a=typeof i=="function"&&i.prototype||bi;return t===a}function zh(t){return t===t&&!je(t)}function Wh(t,i){return function(a){return a==null?!1:a[t]===i&&(i!==r||t in Re(a))}}function fy(t){var i=oa(t,function(f){return a.size===d&&a.clear(),f}),a=i.cache;return i}function hy(t,i){var a=t[1],f=i[1],p=a|f,b=p<(I|L|$),w=f==$&&a==M||f==$&&a==U&&t[7].length<=i[8]||f==($|U)&&i[7].length<=i[8]&&a==M;if(!(b||w))return t;f&I&&(t[2]=i[2],p|=a&I?0:P);var T=i[3];if(T){var R=t[3];t[3]=R?Sh(R,T,i[4]):T,t[4]=R?xr(t[3],m):i[4]}return T=i[5],T&&(R=t[5],t[5]=R?Eh(R,T,i[6]):T,t[6]=R?xr(t[5],m):i[6]),T=i[7],T&&(t[7]=T),f&$&&(t[8]=t[8]==null?i[8]:dt(t[8],i[8])),t[9]==null&&(t[9]=i[9]),t[0]=i[0],t[1]=p,t}function dy(t){var i=[];if(t!=null)for(var a in Re(t))i.push(a);return i}function py(t){return Io.call(t)}function $h(t,i,a){return i=tt(i===r?t.length-1:i,0),function(){for(var f=arguments,p=-1,b=tt(f.length-i,0),w=D(b);++p<b;)w[p]=f[i+p];p=-1;for(var T=D(i+1);++p<i;)T[p]=f[p];return T[i]=a(w),Bt(t,this,T)}}function Uh(t,i){return i.length<2?t:Hr(t,tn(i,0,-1))}function my(t,i){for(var a=t.length,f=dt(i.length,a),p=At(t);f--;){var b=i[f];t[f]=Kn(b,a)?p[b]:r}return t}function su(t,i){if(!(i==="constructor"&&typeof t[i]=="function")&&i!="__proto__")return t[i]}var Hh=Kh(ph),Ms=Lv||function(t,i){return ye.setTimeout(t,i)},ou=Kh(Fx);function Gh(t,i,a){var f=i+"";return ou(t,oy(f,gy(ry(f),a)))}function Kh(t){var i=0,a=0;return function(){var f=kv(),p=De-(f-a);if(a=f,p>0){if(++i>=Ce)return arguments[0]}else i=0;return t.apply(r,arguments)}}function na(t,i){var a=-1,f=t.length,p=f-1;for(i=i===r?f:i;++a<i;){var b=Wl(a,p),w=t[b];t[b]=t[a],t[a]=w}return t.length=i,t}var Yh=fy(function(t){var i=[];return t.charCodeAt(0)===46&&i.push(""),t.replace(ts,function(a,f,p,b){i.push(p?b.replace(co,"$1"):f||a)}),i});function Cn(t){if(typeof t=="string"||Wt(t))return t;var i=t+"";return i=="0"&&1/t==-me?"-0":i}function Kr(t){if(t!=null){try{return Mo.call(t)}catch{}try{return t+""}catch{}}return""}function gy(t,i){return Zt(It,function(a){var f="_."+a[0];i&a[1]&&!Ao(t,f)&&t.push(f)}),t.sort()}function qh(t){if(t instanceof ge)return t.clone();var i=new Qt(t.__wrapped__,t.__chain__);return i.__actions__=At(t.__actions__),i.__index__=t.__index__,i.__values__=t.__values__,i}function vy(t,i,a){(a?_t(t,i,a):i===r)?i=1:i=tt(ue(i),0);var f=t==null?0:t.length;if(!f||i<1)return[];for(var p=0,b=0,w=D(Fo(f/i));p<f;)w[b++]=tn(t,p,p+=i);return w}function xy(t){for(var i=-1,a=t==null?0:t.length,f=0,p=[];++i<a;){var b=t[i];b&&(p[f++]=b)}return p}function yy(){var t=arguments.length;if(!t)return[];for(var i=D(t-1),a=arguments[0],f=t;f--;)i[f-1]=arguments[f];return vr(oe(a)?At(a):[a],ft(i,1))}var by=de(function(t,i){return He(t)?Es(t,ft(i,1,He,!0)):[]}),wy=de(function(t,i){var a=nn(i);return He(a)&&(a=r),He(t)?Es(t,ft(i,1,He,!0),ee(a,2)):[]}),_y=de(function(t,i){var a=nn(i);return He(a)&&(a=r),He(t)?Es(t,ft(i,1,He,!0),r,a):[]});function Ty(t,i,a){var f=t==null?0:t.length;return f?(i=a||i===r?1:ue(i),tn(t,i<0?0:i,f)):[]}function Sy(t,i,a){var f=t==null?0:t.length;return f?(i=a||i===r?1:ue(i),i=f-i,tn(t,0,i<0?0:i)):[]}function Ey(t,i){return t&&t.length?Yo(t,ee(i,3),!0,!0):[]}function Ay(t,i){return t&&t.length?Yo(t,ee(i,3),!0):[]}function Cy(t,i,a,f){var p=t==null?0:t.length;return p?(a&&typeof a!="number"&&_t(t,i,a)&&(a=0,f=p),yx(t,i,a,f)):[]}function Xh(t,i,a){var f=t==null?0:t.length;if(!f)return-1;var p=a==null?0:ue(a);return p<0&&(p=tt(f+p,0)),Co(t,ee(i,3),p)}function Zh(t,i,a){var f=t==null?0:t.length;if(!f)return-1;var p=f-1;return a!==r&&(p=ue(a),p=a<0?tt(f+p,0):dt(p,f-1)),Co(t,ee(i,3),p,!0)}function Jh(t){var i=t==null?0:t.length;return i?ft(t,1):[]}function Ry(t){var i=t==null?0:t.length;return i?ft(t,me):[]}function Py(t,i){var a=t==null?0:t.length;return a?(i=i===r?1:ue(i),ft(t,i)):[]}function Ly(t){for(var i=-1,a=t==null?0:t.length,f={};++i<a;){var p=t[i];f[p[0]]=p[1]}return f}function Qh(t){return t&&t.length?t[0]:r}function My(t,i,a){var f=t==null?0:t.length;if(!f)return-1;var p=a==null?0:ue(a);return p<0&&(p=tt(f+p,0)),gi(t,i,p)}function Iy(t){var i=t==null?0:t.length;return i?tn(t,0,-1):[]}var Dy=de(function(t){var i=Ie(t,Kl);return i.length&&i[0]===t[0]?Nl(i):[]}),ky=de(function(t){var i=nn(t),a=Ie(t,Kl);return i===nn(a)?i=r:a.pop(),a.length&&a[0]===t[0]?Nl(a,ee(i,2)):[]}),Oy=de(function(t){var i=nn(t),a=Ie(t,Kl);return i=typeof i=="function"?i:r,i&&a.pop(),a.length&&a[0]===t[0]?Nl(a,r,i):[]});function jy(t,i){return t==null?"":Iv.call(t,i)}function nn(t){var i=t==null?0:t.length;return i?t[i-1]:r}function Ny(t,i,a){var f=t==null?0:t.length;if(!f)return-1;var p=f;return a!==r&&(p=ue(a),p=p<0?tt(f+p,0):dt(p,f-1)),i===i?gv(t,i,p):Co(t,Df,p,!0)}function Fy(t,i){return t&&t.length?ch(t,ue(i)):r}var By=de(ed);function ed(t,i){return t&&t.length&&i&&i.length?zl(t,i):t}function Vy(t,i,a){return t&&t.length&&i&&i.length?zl(t,i,ee(a,2)):t}function zy(t,i,a){return t&&t.length&&i&&i.length?zl(t,i,r,a):t}var Wy=Gn(function(t,i){var a=t==null?0:t.length,f=Dl(t,i);return dh(t,Ie(i,function(p){return Kn(p,a)?+p:p}).sort(Th)),f});function $y(t,i){var a=[];if(!(t&&t.length))return a;var f=-1,p=[],b=t.length;for(i=ee(i,3);++f<b;){var w=t[f];i(w,f,t)&&(a.push(w),p.push(f))}return dh(t,p),a}function au(t){return t==null?t:jv.call(t)}function Uy(t,i,a){var f=t==null?0:t.length;return f?(a&&typeof a!="number"&&_t(t,i,a)?(i=0,a=f):(i=i==null?0:ue(i),a=a===r?f:ue(a)),tn(t,i,a)):[]}function Hy(t,i){return Ko(t,i)}function Gy(t,i,a){return Ul(t,i,ee(a,2))}function Ky(t,i){var a=t==null?0:t.length;if(a){var f=Ko(t,i);if(f<a&&vn(t[f],i))return f}return-1}function Yy(t,i){return Ko(t,i,!0)}function qy(t,i,a){return Ul(t,i,ee(a,2),!0)}function Xy(t,i){var a=t==null?0:t.length;if(a){var f=Ko(t,i,!0)-1;if(vn(t[f],i))return f}return-1}function Zy(t){return t&&t.length?mh(t):[]}function Jy(t,i){return t&&t.length?mh(t,ee(i,2)):[]}function Qy(t){var i=t==null?0:t.length;return i?tn(t,1,i):[]}function e1(t,i,a){return t&&t.length?(i=a||i===r?1:ue(i),tn(t,0,i<0?0:i)):[]}function t1(t,i,a){var f=t==null?0:t.length;return f?(i=a||i===r?1:ue(i),i=f-i,tn(t,i<0?0:i,f)):[]}function n1(t,i){return t&&t.length?Yo(t,ee(i,3),!1,!0):[]}function r1(t,i){return t&&t.length?Yo(t,ee(i,3)):[]}var i1=de(function(t){return wr(ft(t,1,He,!0))}),s1=de(function(t){var i=nn(t);return He(i)&&(i=r),wr(ft(t,1,He,!0),ee(i,2))}),o1=de(function(t){var i=nn(t);return i=typeof i=="function"?i:r,wr(ft(t,1,He,!0),r,i)});function a1(t){return t&&t.length?wr(t):[]}function l1(t,i){return t&&t.length?wr(t,ee(i,2)):[]}function u1(t,i){return i=typeof i=="function"?i:r,t&&t.length?wr(t,r,i):[]}function lu(t){if(!(t&&t.length))return[];var i=0;return t=gr(t,function(a){if(He(a))return i=tt(a.length,i),!0}),El(i,function(a){return Ie(t,_l(a))})}function td(t,i){if(!(t&&t.length))return[];var a=lu(t);return i==null?a:Ie(a,function(f){return Bt(i,r,f)})}var c1=de(function(t,i){return He(t)?Es(t,i):[]}),f1=de(function(t){return Gl(gr(t,He))}),h1=de(function(t){var i=nn(t);return He(i)&&(i=r),Gl(gr(t,He),ee(i,2))}),d1=de(function(t){var i=nn(t);return i=typeof i=="function"?i:r,Gl(gr(t,He),r,i)}),p1=de(lu);function m1(t,i){return yh(t||[],i||[],Ss)}function g1(t,i){return yh(t||[],i||[],Rs)}var v1=de(function(t){var i=t.length,a=i>1?t[i-1]:r;return a=typeof a=="function"?(t.pop(),a):r,td(t,a)});function nd(t){var i=x(t);return i.__chain__=!0,i}function x1(t,i){return i(t),t}function ra(t,i){return i(t)}var y1=Gn(function(t){var i=t.length,a=i?t[0]:0,f=this.__wrapped__,p=function(b){return Dl(b,t)};return i>1||this.__actions__.length||!(f instanceof ge)||!Kn(a)?this.thru(p):(f=f.slice(a,+a+(i?1:0)),f.__actions__.push({func:ra,args:[p],thisArg:r}),new Qt(f,this.__chain__).thru(function(b){return i&&!b.length&&b.push(r),b}))});function b1(){return nd(this)}function w1(){return new Qt(this.value(),this.__chain__)}function _1(){this.__values__===r&&(this.__values__=gd(this.value()));var t=this.__index__>=this.__values__.length,i=t?r:this.__values__[this.__index__++];return{done:t,value:i}}function T1(){return this}function S1(t){for(var i,a=this;a instanceof Wo;){var f=qh(a);f.__index__=0,f.__values__=r,i?p.__wrapped__=f:i=f;var p=f;a=a.__wrapped__}return p.__wrapped__=t,i}function E1(){var t=this.__wrapped__;if(t instanceof ge){var i=t;return this.__actions__.length&&(i=new ge(this)),i=i.reverse(),i.__actions__.push({func:ra,args:[au],thisArg:r}),new Qt(i,this.__chain__)}return this.thru(au)}function A1(){return xh(this.__wrapped__,this.__actions__)}var C1=qo(function(t,i,a){Ee.call(t,a)?++t[a]:Un(t,a,1)});function R1(t,i,a){var f=oe(t)?Mf:xx;return a&&_t(t,i,a)&&(i=r),f(t,ee(i,3))}function P1(t,i){var a=oe(t)?gr:th;return a(t,ee(i,3))}var L1=Ph(Xh),M1=Ph(Zh);function I1(t,i){return ft(ia(t,i),1)}function D1(t,i){return ft(ia(t,i),me)}function k1(t,i,a){return a=a===r?1:ue(a),ft(ia(t,i),a)}function rd(t,i){var a=oe(t)?Zt:br;return a(t,ee(i,3))}function id(t,i){var a=oe(t)?Q0:eh;return a(t,ee(i,3))}var O1=qo(function(t,i,a){Ee.call(t,a)?t[a].push(i):Un(t,a,[i])});function j1(t,i,a,f){t=Ct(t)?t:Ri(t),a=a&&!f?ue(a):0;var p=t.length;return a<0&&(a=tt(p+a,0)),ua(t)?a<=p&&t.indexOf(i,a)>-1:!!p&&gi(t,i,a)>-1}var N1=de(function(t,i,a){var f=-1,p=typeof i=="function",b=Ct(t)?D(t.length):[];return br(t,function(w){b[++f]=p?Bt(i,w,a):As(w,i,a)}),b}),F1=qo(function(t,i,a){Un(t,a,i)});function ia(t,i){var a=oe(t)?Ie:ah;return a(t,ee(i,3))}function B1(t,i,a,f){return t==null?[]:(oe(i)||(i=i==null?[]:[i]),a=f?r:a,oe(a)||(a=a==null?[]:[a]),fh(t,i,a))}var V1=qo(function(t,i,a){t[a?0:1].push(i)},function(){return[[],[]]});function z1(t,i,a){var f=oe(t)?bl:Of,p=arguments.length<3;return f(t,ee(i,4),a,p,br)}function W1(t,i,a){var f=oe(t)?ev:Of,p=arguments.length<3;return f(t,ee(i,4),a,p,eh)}function $1(t,i){var a=oe(t)?gr:th;return a(t,aa(ee(i,3)))}function U1(t){var i=oe(t)?Xf:jx;return i(t)}function H1(t,i,a){(a?_t(t,i,a):i===r)?i=1:i=ue(i);var f=oe(t)?dx:Nx;return f(t,i)}function G1(t){var i=oe(t)?px:Bx;return i(t)}function K1(t){if(t==null)return 0;if(Ct(t))return ua(t)?xi(t):t.length;var i=pt(t);return i==kt||i==Ot?t.size:Bl(t).length}function Y1(t,i,a){var f=oe(t)?wl:Vx;return a&&_t(t,i,a)&&(i=r),f(t,ee(i,3))}var q1=de(function(t,i){if(t==null)return[];var a=i.length;return a>1&&_t(t,i[0],i[1])?i=[]:a>2&&_t(i[0],i[1],i[2])&&(i=[i[0]]),fh(t,ft(i,1),[])}),sa=Pv||function(){return ye.Date.now()};function X1(t,i){if(typeof i!="function")throw new Jt(u);return t=ue(t),function(){if(--t<1)return i.apply(this,arguments)}}function sd(t,i,a){return i=a?r:i,i=t&&i==null?t.length:i,Hn(t,$,r,r,r,r,i)}function od(t,i){var a;if(typeof i!="function")throw new Jt(u);return t=ue(t),function(){return--t>0&&(a=i.apply(this,arguments)),t<=1&&(i=r),a}}var uu=de(function(t,i,a){var f=I;if(a.length){var p=xr(a,Ai(uu));f|=j}return Hn(t,f,i,a,p)}),ad=de(function(t,i,a){var f=I|L;if(a.length){var p=xr(a,Ai(ad));f|=j}return Hn(i,f,t,a,p)});function ld(t,i,a){i=a?r:i;var f=Hn(t,M,r,r,r,r,r,i);return f.placeholder=ld.placeholder,f}function ud(t,i,a){i=a?r:i;var f=Hn(t,z,r,r,r,r,r,i);return f.placeholder=ud.placeholder,f}function cd(t,i,a){var f,p,b,w,T,R,N=0,F=!1,V=!1,G=!0;if(typeof t!="function")throw new Jt(u);i=rn(i)||0,je(a)&&(F=!!a.leading,V="maxWait"in a,b=V?tt(rn(a.maxWait)||0,i):b,G="trailing"in a?!!a.trailing:G);function X(Ge){var xn=f,Xn=p;return f=p=r,N=Ge,w=t.apply(Xn,xn),w}function te(Ge){return N=Ge,T=Ms(pe,i),F?X(Ge):w}function fe(Ge){var xn=Ge-R,Xn=Ge-N,Pd=i-xn;return V?dt(Pd,b-Xn):Pd}function ne(Ge){var xn=Ge-R,Xn=Ge-N;return R===r||xn>=i||xn<0||V&&Xn>=b}function pe(){var Ge=sa();if(ne(Ge))return ve(Ge);T=Ms(pe,fe(Ge))}function ve(Ge){return T=r,G&&f?X(Ge):(f=p=r,w)}function $t(){T!==r&&bh(T),N=0,f=R=p=T=r}function Tt(){return T===r?w:ve(sa())}function Ut(){var Ge=sa(),xn=ne(Ge);if(f=arguments,p=this,R=Ge,xn){if(T===r)return te(R);if(V)return bh(T),T=Ms(pe,i),X(R)}return T===r&&(T=Ms(pe,i)),w}return Ut.cancel=$t,Ut.flush=Tt,Ut}var Z1=de(function(t,i){return Qf(t,1,i)}),J1=de(function(t,i,a){return Qf(t,rn(i)||0,a)});function Q1(t){return Hn(t,ce)}function oa(t,i){if(typeof t!="function"||i!=null&&typeof i!="function")throw new Jt(u);var a=function(){var f=arguments,p=i?i.apply(this,f):f[0],b=a.cache;if(b.has(p))return b.get(p);var w=t.apply(this,f);return a.cache=b.set(p,w)||b,w};return a.cache=new(oa.Cache||$n),a}oa.Cache=$n;function aa(t){if(typeof t!="function")throw new Jt(u);return function(){var i=arguments;switch(i.length){case 0:return!t.call(this);case 1:return!t.call(this,i[0]);case 2:return!t.call(this,i[0],i[1]);case 3:return!t.call(this,i[0],i[1],i[2])}return!t.apply(this,i)}}function eb(t){return od(2,t)}var tb=zx(function(t,i){i=i.length==1&&oe(i[0])?Ie(i[0],Vt(ee())):Ie(ft(i,1),Vt(ee()));var a=i.length;return de(function(f){for(var p=-1,b=dt(f.length,a);++p<b;)f[p]=i[p].call(this,f[p]);return Bt(t,this,f)})}),cu=de(function(t,i){var a=xr(i,Ai(cu));return Hn(t,j,r,i,a)}),fd=de(function(t,i){var a=xr(i,Ai(fd));return Hn(t,B,r,i,a)}),nb=Gn(function(t,i){return Hn(t,U,r,r,r,i)});function rb(t,i){if(typeof t!="function")throw new Jt(u);return i=i===r?i:ue(i),de(t,i)}function ib(t,i){if(typeof t!="function")throw new Jt(u);return i=i==null?0:tt(ue(i),0),de(function(a){var f=a[i],p=Tr(a,0,i);return f&&vr(p,f),Bt(t,this,p)})}function sb(t,i,a){var f=!0,p=!0;if(typeof t!="function")throw new Jt(u);return je(a)&&(f="leading"in a?!!a.leading:f,p="trailing"in a?!!a.trailing:p),cd(t,i,{leading:f,maxWait:i,trailing:p})}function ob(t){return sd(t,1)}function ab(t,i){return cu(Yl(i),t)}function lb(){if(!arguments.length)return[];var t=arguments[0];return oe(t)?t:[t]}function ub(t){return en(t,_)}function cb(t,i){return i=typeof i=="function"?i:r,en(t,_,i)}function fb(t){return en(t,v|_)}function hb(t,i){return i=typeof i=="function"?i:r,en(t,v|_,i)}function db(t,i){return i==null||Jf(t,i,it(i))}function vn(t,i){return t===i||t!==t&&i!==i}var pb=Qo(jl),mb=Qo(function(t,i){return t>=i}),Yr=ih((function(){return arguments})())?ih:function(t){return Ve(t)&&Ee.call(t,"callee")&&!Uf.call(t,"callee")},oe=D.isArray,gb=vs?Vt(vs):Sx;function Ct(t){return t!=null&&la(t.length)&&!Yn(t)}function He(t){return Ve(t)&&Ct(t)}function vb(t){return t===!0||t===!1||Ve(t)&&wt(t)==Dt}var Sr=Mv||wu,xb=Af?Vt(Af):Ex;function yb(t){return Ve(t)&&t.nodeType===1&&!Is(t)}function bb(t){if(t==null)return!0;if(Ct(t)&&(oe(t)||typeof t=="string"||typeof t.splice=="function"||Sr(t)||Ci(t)||Yr(t)))return!t.length;var i=pt(t);if(i==kt||i==Ot)return!t.size;if(Ls(t))return!Bl(t).length;for(var a in t)if(Ee.call(t,a))return!1;return!0}function wb(t,i){return Cs(t,i)}function _b(t,i,a){a=typeof a=="function"?a:r;var f=a?a(t,i):r;return f===r?Cs(t,i,r,a):!!f}function fu(t){if(!Ve(t))return!1;var i=wt(t);return i==fn||i==or||typeof t.message=="string"&&typeof t.name=="string"&&!Is(t)}function Tb(t){return typeof t=="number"&&Gf(t)}function Yn(t){if(!je(t))return!1;var i=wt(t);return i==xt||i==qi||i==sr||i==oo}function hd(t){return typeof t=="number"&&t==ue(t)}function la(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=be}function je(t){var i=typeof t;return t!=null&&(i=="object"||i=="function")}function Ve(t){return t!=null&&typeof t=="object"}var dd=Cf?Vt(Cf):Cx;function Sb(t,i){return t===i||Fl(t,i,tu(i))}function Eb(t,i,a){return a=typeof a=="function"?a:r,Fl(t,i,tu(i),a)}function Ab(t){return pd(t)&&t!=+t}function Cb(t){if(cy(t))throw new se(l);return sh(t)}function Rb(t){return t===null}function Pb(t){return t==null}function pd(t){return typeof t=="number"||Ve(t)&&wt(t)==ar}function Is(t){if(!Ve(t)||wt(t)!=hn)return!1;var i=Oo(t);if(i===null)return!0;var a=Ee.call(i,"constructor")&&i.constructor;return typeof a=="function"&&a instanceof a&&Mo.call(a)==Ev}var hu=Rf?Vt(Rf):Rx;function Lb(t){return hd(t)&&t>=-be&&t<=be}var md=Pf?Vt(Pf):Px;function ua(t){return typeof t=="string"||!oe(t)&&Ve(t)&&wt(t)==ae}function Wt(t){return typeof t=="symbol"||Ve(t)&&wt(t)==Y}var Ci=Lf?Vt(Lf):Lx;function Mb(t){return t===r}function Ib(t){return Ve(t)&&pt(t)==le}function Db(t){return Ve(t)&&wt(t)==nt}var kb=Qo(Vl),Ob=Qo(function(t,i){return t<=i});function gd(t){if(!t)return[];if(Ct(t))return ua(t)?mn(t):At(t);if(ys&&t[ys])return dv(t[ys]());var i=pt(t),a=i==kt?Cl:i==Ot?Ro:Ri;return a(t)}function qn(t){if(!t)return t===0?t:0;if(t=rn(t),t===me||t===-me){var i=t<0?-1:1;return i*ke}return t===t?t:0}function ue(t){var i=qn(t),a=i%1;return i===i?a?i-a:i:0}function vd(t){return t?Ur(ue(t),0,Be):0}function rn(t){if(typeof t=="number")return t;if(Wt(t))return Ze;if(je(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=je(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=jf(t);var a=jr.test(t);return a||fo.test(t)?Pe(t.slice(2),a?2:8):Oe.test(t)?Ze:+t}function xd(t){return An(t,Rt(t))}function jb(t){return t?Ur(ue(t),-be,be):t===0?t:0}function _e(t){return t==null?"":zt(t)}var Nb=Si(function(t,i){if(Ls(i)||Ct(i)){An(i,it(i),t);return}for(var a in i)Ee.call(i,a)&&Ss(t,a,i[a])}),yd=Si(function(t,i){An(i,Rt(i),t)}),ca=Si(function(t,i,a,f){An(i,Rt(i),t,f)}),Fb=Si(function(t,i,a,f){An(i,it(i),t,f)}),Bb=Gn(Dl);function Vb(t,i){var a=Ti(t);return i==null?a:Zf(a,i)}var zb=de(function(t,i){t=Re(t);var a=-1,f=i.length,p=f>2?i[2]:r;for(p&&_t(i[0],i[1],p)&&(f=1);++a<f;)for(var b=i[a],w=Rt(b),T=-1,R=w.length;++T<R;){var N=w[T],F=t[N];(F===r||vn(F,bi[N])&&!Ee.call(t,N))&&(t[N]=b[N])}return t}),Wb=de(function(t){return t.push(r,jh),Bt(bd,r,t)});function $b(t,i){return If(t,ee(i,3),En)}function Ub(t,i){return If(t,ee(i,3),Ol)}function Hb(t,i){return t==null?t:kl(t,ee(i,3),Rt)}function Gb(t,i){return t==null?t:nh(t,ee(i,3),Rt)}function Kb(t,i){return t&&En(t,ee(i,3))}function Yb(t,i){return t&&Ol(t,ee(i,3))}function qb(t){return t==null?[]:Ho(t,it(t))}function Xb(t){return t==null?[]:Ho(t,Rt(t))}function du(t,i,a){var f=t==null?r:Hr(t,i);return f===r?a:f}function Zb(t,i){return t!=null&&Bh(t,i,bx)}function pu(t,i){return t!=null&&Bh(t,i,wx)}var Jb=Mh(function(t,i,a){i!=null&&typeof i.toString!="function"&&(i=Io.call(i)),t[i]=a},gu(Pt)),Qb=Mh(function(t,i,a){i!=null&&typeof i.toString!="function"&&(i=Io.call(i)),Ee.call(t,i)?t[i].push(a):t[i]=[a]},ee),ew=de(As);function it(t){return Ct(t)?qf(t):Bl(t)}function Rt(t){return Ct(t)?qf(t,!0):Mx(t)}function tw(t,i){var a={};return i=ee(i,3),En(t,function(f,p,b){Un(a,i(f,p,b),f)}),a}function nw(t,i){var a={};return i=ee(i,3),En(t,function(f,p,b){Un(a,p,i(f,p,b))}),a}var rw=Si(function(t,i,a){Go(t,i,a)}),bd=Si(function(t,i,a,f){Go(t,i,a,f)}),iw=Gn(function(t,i){var a={};if(t==null)return a;var f=!1;i=Ie(i,function(b){return b=_r(b,t),f||(f=b.length>1),b}),An(t,Ql(t),a),f&&(a=en(a,v|y|_,Jx));for(var p=i.length;p--;)Hl(a,i[p]);return a});function sw(t,i){return wd(t,aa(ee(i)))}var ow=Gn(function(t,i){return t==null?{}:Dx(t,i)});function wd(t,i){if(t==null)return{};var a=Ie(Ql(t),function(f){return[f]});return i=ee(i),hh(t,a,function(f,p){return i(f,p[0])})}function aw(t,i,a){i=_r(i,t);var f=-1,p=i.length;for(p||(p=1,t=r);++f<p;){var b=t==null?r:t[Cn(i[f])];b===r&&(f=p,b=a),t=Yn(b)?b.call(t):b}return t}function lw(t,i,a){return t==null?t:Rs(t,i,a)}function uw(t,i,a,f){return f=typeof f=="function"?f:r,t==null?t:Rs(t,i,a,f)}var _d=kh(it),Td=kh(Rt);function cw(t,i,a){var f=oe(t),p=f||Sr(t)||Ci(t);if(i=ee(i,4),a==null){var b=t&&t.constructor;p?a=f?new b:[]:je(t)?a=Yn(b)?Ti(Oo(t)):{}:a={}}return(p?Zt:En)(t,function(w,T,R){return i(a,w,T,R)}),a}function fw(t,i){return t==null?!0:Hl(t,i)}function hw(t,i,a){return t==null?t:vh(t,i,Yl(a))}function dw(t,i,a,f){return f=typeof f=="function"?f:r,t==null?t:vh(t,i,Yl(a),f)}function Ri(t){return t==null?[]:Al(t,it(t))}function pw(t){return t==null?[]:Al(t,Rt(t))}function mw(t,i,a){return a===r&&(a=i,i=r),a!==r&&(a=rn(a),a=a===a?a:0),i!==r&&(i=rn(i),i=i===i?i:0),Ur(rn(t),i,a)}function gw(t,i,a){return i=qn(i),a===r?(a=i,i=0):a=qn(a),t=rn(t),_x(t,i,a)}function vw(t,i,a){if(a&&typeof a!="boolean"&&_t(t,i,a)&&(i=a=r),a===r&&(typeof i=="boolean"?(a=i,i=r):typeof t=="boolean"&&(a=t,t=r)),t===r&&i===r?(t=0,i=1):(t=qn(t),i===r?(i=t,t=0):i=qn(i)),t>i){var f=t;t=i,i=f}if(a||t%1||i%1){var p=Kf();return dt(t+p*(i-t+q("1e-"+((p+"").length-1))),i)}return Wl(t,i)}var xw=Ei(function(t,i,a){return i=i.toLowerCase(),t+(a?Sd(i):i)});function Sd(t){return mu(_e(t).toLowerCase())}function Ed(t){return t=_e(t),t&&t.replace(ho,lv).replace(_o,"")}function yw(t,i,a){t=_e(t),i=zt(i);var f=t.length;a=a===r?f:Ur(ue(a),0,f);var p=a;return a-=i.length,a>=0&&t.slice(a,p)==i}function bw(t){return t=_e(t),t&&es.test(t)?t.replace(rt,uv):t}function ww(t){return t=_e(t),t&&ns.test(t)?t.replace(Or,"\\$&"):t}var _w=Ei(function(t,i,a){return t+(a?"-":"")+i.toLowerCase()}),Tw=Ei(function(t,i,a){return t+(a?" ":"")+i.toLowerCase()}),Sw=Rh("toLowerCase");function Ew(t,i,a){t=_e(t),i=ue(i);var f=i?xi(t):0;if(!i||f>=i)return t;var p=(i-f)/2;return Jo(Bo(p),a)+t+Jo(Fo(p),a)}function Aw(t,i,a){t=_e(t),i=ue(i);var f=i?xi(t):0;return i&&f<i?t+Jo(i-f,a):t}function Cw(t,i,a){t=_e(t),i=ue(i);var f=i?xi(t):0;return i&&f<i?Jo(i-f,a)+t:t}function Rw(t,i,a){return a||i==null?i=0:i&&(i=+i),Ov(_e(t).replace(rs,""),i||0)}function Pw(t,i,a){return(a?_t(t,i,a):i===r)?i=1:i=ue(i),$l(_e(t),i)}function Lw(){var t=arguments,i=_e(t[0]);return t.length<3?i:i.replace(t[1],t[2])}var Mw=Ei(function(t,i,a){return t+(a?"_":"")+i.toLowerCase()});function Iw(t,i,a){return a&&typeof a!="number"&&_t(t,i,a)&&(i=a=r),a=a===r?Be:a>>>0,a?(t=_e(t),t&&(typeof i=="string"||i!=null&&!hu(i))&&(i=zt(i),!i&&vi(t))?Tr(mn(t),0,a):t.split(i,a)):[]}var Dw=Ei(function(t,i,a){return t+(a?" ":"")+mu(i)});function kw(t,i,a){return t=_e(t),a=a==null?0:Ur(ue(a),0,t.length),i=zt(i),t.slice(a,a+i.length)==i}function Ow(t,i,a){var f=x.templateSettings;a&&_t(t,i,a)&&(i=r),t=_e(t),i=ca({},i,f,Oh);var p=ca({},i.imports,f.imports,Oh),b=it(p),w=Al(p,b),T,R,N=0,F=i.interpolate||Nr,V="__p += '",G=Rl((i.escape||Nr).source+"|"+F.source+"|"+(F===ao?Je:Nr).source+"|"+(i.evaluate||Nr).source+"|$","g"),X="//# sourceURL="+(Ee.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Eo+"]")+`
`;t.replace(G,function(ne,pe,ve,$t,Tt,Ut){return ve||(ve=$t),V+=t.slice(N,Ut).replace(cr,cv),pe&&(T=!0,V+=`' +
__e(`+pe+`) +
'`),Tt&&(R=!0,V+=`';
`+Tt+`;
__p += '`),ve&&(V+=`' +
((__t = (`+ve+`)) == null ? '' : __t) +
'`),N=Ut+ne.length,ne}),V+=`';
`;var te=Ee.call(i,"variable")&&i.variable;if(!te)V=`with (obj) {
`+V+`
}
`;else if(Ye.test(te))throw new se(h);V=(R?V.replace(ol,""):V).replace(al,"$1").replace(ll,"$1;"),V="function("+(te||"obj")+`) {
`+(te?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(R?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var fe=Cd(function(){return we(b,X+"return "+V).apply(r,w)});if(fe.source=V,fu(fe))throw fe;return fe}function jw(t){return _e(t).toLowerCase()}function Nw(t){return _e(t).toUpperCase()}function Fw(t,i,a){if(t=_e(t),t&&(a||i===r))return jf(t);if(!t||!(i=zt(i)))return t;var f=mn(t),p=mn(i),b=Nf(f,p),w=Ff(f,p)+1;return Tr(f,b,w).join("")}function Bw(t,i,a){if(t=_e(t),t&&(a||i===r))return t.slice(0,Vf(t)+1);if(!t||!(i=zt(i)))return t;var f=mn(t),p=Ff(f,mn(i))+1;return Tr(f,0,p).join("")}function Vw(t,i,a){if(t=_e(t),t&&(a||i===r))return t.replace(rs,"");if(!t||!(i=zt(i)))return t;var f=mn(t),p=Nf(f,mn(i));return Tr(f,p).join("")}function zw(t,i){var a=H,f=J;if(je(i)){var p="separator"in i?i.separator:p;a="length"in i?ue(i.length):a,f="omission"in i?zt(i.omission):f}t=_e(t);var b=t.length;if(vi(t)){var w=mn(t);b=w.length}if(a>=b)return t;var T=a-xi(f);if(T<1)return f;var R=w?Tr(w,0,T).join(""):t.slice(0,T);if(p===r)return R+f;if(w&&(T+=R.length-T),hu(p)){if(t.slice(T).search(p)){var N,F=R;for(p.global||(p=Rl(p.source,_e(is.exec(p))+"g")),p.lastIndex=0;N=p.exec(F);)var V=N.index;R=R.slice(0,V===r?T:V)}}else if(t.indexOf(zt(p),T)!=T){var G=R.lastIndexOf(p);G>-1&&(R=R.slice(0,G))}return R+f}function Ww(t){return t=_e(t),t&&kr.test(t)?t.replace(Dr,vv):t}var $w=Ei(function(t,i,a){return t+(a?" ":"")+i.toUpperCase()}),mu=Rh("toUpperCase");function Ad(t,i,a){return t=_e(t),i=a?r:i,i===r?hv(t)?bv(t):rv(t):t.match(i)||[]}var Cd=de(function(t,i){try{return Bt(t,r,i)}catch(a){return fu(a)?a:new se(a)}}),Uw=Gn(function(t,i){return Zt(i,function(a){a=Cn(a),Un(t,a,uu(t[a],t))}),t});function Hw(t){var i=t==null?0:t.length,a=ee();return t=i?Ie(t,function(f){if(typeof f[1]!="function")throw new Jt(u);return[a(f[0]),f[1]]}):[],de(function(f){for(var p=-1;++p<i;){var b=t[p];if(Bt(b[0],this,f))return Bt(b[1],this,f)}})}function Gw(t){return vx(en(t,v))}function gu(t){return function(){return t}}function Kw(t,i){return t==null||t!==t?i:t}var Yw=Lh(),qw=Lh(!0);function Pt(t){return t}function vu(t){return oh(typeof t=="function"?t:en(t,v))}function Xw(t){return lh(en(t,v))}function Zw(t,i){return uh(t,en(i,v))}var Jw=de(function(t,i){return function(a){return As(a,t,i)}}),Qw=de(function(t,i){return function(a){return As(t,a,i)}});function xu(t,i,a){var f=it(i),p=Ho(i,f);a==null&&!(je(i)&&(p.length||!f.length))&&(a=i,i=t,t=this,p=Ho(i,it(i)));var b=!(je(a)&&"chain"in a)||!!a.chain,w=Yn(t);return Zt(p,function(T){var R=i[T];t[T]=R,w&&(t.prototype[T]=function(){var N=this.__chain__;if(b||N){var F=t(this.__wrapped__),V=F.__actions__=At(this.__actions__);return V.push({func:R,args:arguments,thisArg:t}),F.__chain__=N,F}return R.apply(t,vr([this.value()],arguments))})}),t}function e_(){return ye._===this&&(ye._=Av),this}function yu(){}function t_(t){return t=ue(t),de(function(i){return ch(i,t)})}var n_=Xl(Ie),r_=Xl(Mf),i_=Xl(wl);function Rd(t){return ru(t)?_l(Cn(t)):kx(t)}function s_(t){return function(i){return t==null?r:Hr(t,i)}}var o_=Ih(),a_=Ih(!0);function bu(){return[]}function wu(){return!1}function l_(){return{}}function u_(){return""}function c_(){return!0}function f_(t,i){if(t=ue(t),t<1||t>be)return[];var a=Be,f=dt(t,Be);i=ee(i),t-=Be;for(var p=El(f,i);++a<t;)i(a);return p}function h_(t){return oe(t)?Ie(t,Cn):Wt(t)?[t]:At(Yh(_e(t)))}function d_(t){var i=++Sv;return _e(t)+i}var p_=Zo(function(t,i){return t+i},0),m_=Zl("ceil"),g_=Zo(function(t,i){return t/i},1),v_=Zl("floor");function x_(t){return t&&t.length?Uo(t,Pt,jl):r}function y_(t,i){return t&&t.length?Uo(t,ee(i,2),jl):r}function b_(t){return kf(t,Pt)}function w_(t,i){return kf(t,ee(i,2))}function __(t){return t&&t.length?Uo(t,Pt,Vl):r}function T_(t,i){return t&&t.length?Uo(t,ee(i,2),Vl):r}var S_=Zo(function(t,i){return t*i},1),E_=Zl("round"),A_=Zo(function(t,i){return t-i},0);function C_(t){return t&&t.length?Sl(t,Pt):0}function R_(t,i){return t&&t.length?Sl(t,ee(i,2)):0}return x.after=X1,x.ary=sd,x.assign=Nb,x.assignIn=yd,x.assignInWith=ca,x.assignWith=Fb,x.at=Bb,x.before=od,x.bind=uu,x.bindAll=Uw,x.bindKey=ad,x.castArray=lb,x.chain=nd,x.chunk=vy,x.compact=xy,x.concat=yy,x.cond=Hw,x.conforms=Gw,x.constant=gu,x.countBy=C1,x.create=Vb,x.curry=ld,x.curryRight=ud,x.debounce=cd,x.defaults=zb,x.defaultsDeep=Wb,x.defer=Z1,x.delay=J1,x.difference=by,x.differenceBy=wy,x.differenceWith=_y,x.drop=Ty,x.dropRight=Sy,x.dropRightWhile=Ey,x.dropWhile=Ay,x.fill=Cy,x.filter=P1,x.flatMap=I1,x.flatMapDeep=D1,x.flatMapDepth=k1,x.flatten=Jh,x.flattenDeep=Ry,x.flattenDepth=Py,x.flip=Q1,x.flow=Yw,x.flowRight=qw,x.fromPairs=Ly,x.functions=qb,x.functionsIn=Xb,x.groupBy=O1,x.initial=Iy,x.intersection=Dy,x.intersectionBy=ky,x.intersectionWith=Oy,x.invert=Jb,x.invertBy=Qb,x.invokeMap=N1,x.iteratee=vu,x.keyBy=F1,x.keys=it,x.keysIn=Rt,x.map=ia,x.mapKeys=tw,x.mapValues=nw,x.matches=Xw,x.matchesProperty=Zw,x.memoize=oa,x.merge=rw,x.mergeWith=bd,x.method=Jw,x.methodOf=Qw,x.mixin=xu,x.negate=aa,x.nthArg=t_,x.omit=iw,x.omitBy=sw,x.once=eb,x.orderBy=B1,x.over=n_,x.overArgs=tb,x.overEvery=r_,x.overSome=i_,x.partial=cu,x.partialRight=fd,x.partition=V1,x.pick=ow,x.pickBy=wd,x.property=Rd,x.propertyOf=s_,x.pull=By,x.pullAll=ed,x.pullAllBy=Vy,x.pullAllWith=zy,x.pullAt=Wy,x.range=o_,x.rangeRight=a_,x.rearg=nb,x.reject=$1,x.remove=$y,x.rest=rb,x.reverse=au,x.sampleSize=H1,x.set=lw,x.setWith=uw,x.shuffle=G1,x.slice=Uy,x.sortBy=q1,x.sortedUniq=Zy,x.sortedUniqBy=Jy,x.split=Iw,x.spread=ib,x.tail=Qy,x.take=e1,x.takeRight=t1,x.takeRightWhile=n1,x.takeWhile=r1,x.tap=x1,x.throttle=sb,x.thru=ra,x.toArray=gd,x.toPairs=_d,x.toPairsIn=Td,x.toPath=h_,x.toPlainObject=xd,x.transform=cw,x.unary=ob,x.union=i1,x.unionBy=s1,x.unionWith=o1,x.uniq=a1,x.uniqBy=l1,x.uniqWith=u1,x.unset=fw,x.unzip=lu,x.unzipWith=td,x.update=hw,x.updateWith=dw,x.values=Ri,x.valuesIn=pw,x.without=c1,x.words=Ad,x.wrap=ab,x.xor=f1,x.xorBy=h1,x.xorWith=d1,x.zip=p1,x.zipObject=m1,x.zipObjectDeep=g1,x.zipWith=v1,x.entries=_d,x.entriesIn=Td,x.extend=yd,x.extendWith=ca,xu(x,x),x.add=p_,x.attempt=Cd,x.camelCase=xw,x.capitalize=Sd,x.ceil=m_,x.clamp=mw,x.clone=ub,x.cloneDeep=fb,x.cloneDeepWith=hb,x.cloneWith=cb,x.conformsTo=db,x.deburr=Ed,x.defaultTo=Kw,x.divide=g_,x.endsWith=yw,x.eq=vn,x.escape=bw,x.escapeRegExp=ww,x.every=R1,x.find=L1,x.findIndex=Xh,x.findKey=$b,x.findLast=M1,x.findLastIndex=Zh,x.findLastKey=Ub,x.floor=v_,x.forEach=rd,x.forEachRight=id,x.forIn=Hb,x.forInRight=Gb,x.forOwn=Kb,x.forOwnRight=Yb,x.get=du,x.gt=pb,x.gte=mb,x.has=Zb,x.hasIn=pu,x.head=Qh,x.identity=Pt,x.includes=j1,x.indexOf=My,x.inRange=gw,x.invoke=ew,x.isArguments=Yr,x.isArray=oe,x.isArrayBuffer=gb,x.isArrayLike=Ct,x.isArrayLikeObject=He,x.isBoolean=vb,x.isBuffer=Sr,x.isDate=xb,x.isElement=yb,x.isEmpty=bb,x.isEqual=wb,x.isEqualWith=_b,x.isError=fu,x.isFinite=Tb,x.isFunction=Yn,x.isInteger=hd,x.isLength=la,x.isMap=dd,x.isMatch=Sb,x.isMatchWith=Eb,x.isNaN=Ab,x.isNative=Cb,x.isNil=Pb,x.isNull=Rb,x.isNumber=pd,x.isObject=je,x.isObjectLike=Ve,x.isPlainObject=Is,x.isRegExp=hu,x.isSafeInteger=Lb,x.isSet=md,x.isString=ua,x.isSymbol=Wt,x.isTypedArray=Ci,x.isUndefined=Mb,x.isWeakMap=Ib,x.isWeakSet=Db,x.join=jy,x.kebabCase=_w,x.last=nn,x.lastIndexOf=Ny,x.lowerCase=Tw,x.lowerFirst=Sw,x.lt=kb,x.lte=Ob,x.max=x_,x.maxBy=y_,x.mean=b_,x.meanBy=w_,x.min=__,x.minBy=T_,x.stubArray=bu,x.stubFalse=wu,x.stubObject=l_,x.stubString=u_,x.stubTrue=c_,x.multiply=S_,x.nth=Fy,x.noConflict=e_,x.noop=yu,x.now=sa,x.pad=Ew,x.padEnd=Aw,x.padStart=Cw,x.parseInt=Rw,x.random=vw,x.reduce=z1,x.reduceRight=W1,x.repeat=Pw,x.replace=Lw,x.result=aw,x.round=E_,x.runInContext=A,x.sample=U1,x.size=K1,x.snakeCase=Mw,x.some=Y1,x.sortedIndex=Hy,x.sortedIndexBy=Gy,x.sortedIndexOf=Ky,x.sortedLastIndex=Yy,x.sortedLastIndexBy=qy,x.sortedLastIndexOf=Xy,x.startCase=Dw,x.startsWith=kw,x.subtract=A_,x.sum=C_,x.sumBy=R_,x.template=Ow,x.times=f_,x.toFinite=qn,x.toInteger=ue,x.toLength=vd,x.toLower=jw,x.toNumber=rn,x.toSafeInteger=jb,x.toString=_e,x.toUpper=Nw,x.trim=Fw,x.trimEnd=Bw,x.trimStart=Vw,x.truncate=zw,x.unescape=Ww,x.uniqueId=d_,x.upperCase=$w,x.upperFirst=mu,x.each=rd,x.eachRight=id,x.first=Qh,xu(x,(function(){var t={};return En(x,function(i,a){Ee.call(x.prototype,a)||(t[a]=i)}),t})(),{chain:!1}),x.VERSION=s,Zt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){x[t].placeholder=x}),Zt(["drop","take"],function(t,i){ge.prototype[t]=function(a){a=a===r?1:tt(ue(a),0);var f=this.__filtered__&&!i?new ge(this):this.clone();return f.__filtered__?f.__takeCount__=dt(a,f.__takeCount__):f.__views__.push({size:dt(a,Be),type:t+(f.__dir__<0?"Right":"")}),f},ge.prototype[t+"Right"]=function(a){return this.reverse()[t](a).reverse()}}),Zt(["filter","map","takeWhile"],function(t,i){var a=i+1,f=a==St||a==Tn;ge.prototype[t]=function(p){var b=this.clone();return b.__iteratees__.push({iteratee:ee(p,3),type:a}),b.__filtered__=b.__filtered__||f,b}}),Zt(["head","last"],function(t,i){var a="take"+(i?"Right":"");ge.prototype[t]=function(){return this[a](1).value()[0]}}),Zt(["initial","tail"],function(t,i){var a="drop"+(i?"":"Right");ge.prototype[t]=function(){return this.__filtered__?new ge(this):this[a](1)}}),ge.prototype.compact=function(){return this.filter(Pt)},ge.prototype.find=function(t){return this.filter(t).head()},ge.prototype.findLast=function(t){return this.reverse().find(t)},ge.prototype.invokeMap=de(function(t,i){return typeof t=="function"?new ge(this):this.map(function(a){return As(a,t,i)})}),ge.prototype.reject=function(t){return this.filter(aa(ee(t)))},ge.prototype.slice=function(t,i){t=ue(t);var a=this;return a.__filtered__&&(t>0||i<0)?new ge(a):(t<0?a=a.takeRight(-t):t&&(a=a.drop(t)),i!==r&&(i=ue(i),a=i<0?a.dropRight(-i):a.take(i-t)),a)},ge.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},ge.prototype.toArray=function(){return this.take(Be)},En(ge.prototype,function(t,i){var a=/^(?:filter|find|map|reject)|While$/.test(i),f=/^(?:head|last)$/.test(i),p=x[f?"take"+(i=="last"?"Right":""):i],b=f||/^find/.test(i);p&&(x.prototype[i]=function(){var w=this.__wrapped__,T=f?[1]:arguments,R=w instanceof ge,N=T[0],F=R||oe(w),V=function(pe){var ve=p.apply(x,vr([pe],T));return f&&G?ve[0]:ve};F&&a&&typeof N=="function"&&N.length!=1&&(R=F=!1);var G=this.__chain__,X=!!this.__actions__.length,te=b&&!G,fe=R&&!X;if(!b&&F){w=fe?w:new ge(this);var ne=t.apply(w,T);return ne.__actions__.push({func:ra,args:[V],thisArg:r}),new Qt(ne,G)}return te&&fe?t.apply(this,T):(ne=this.thru(V),te?f?ne.value()[0]:ne.value():ne)})}),Zt(["pop","push","shift","sort","splice","unshift"],function(t){var i=Po[t],a=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",f=/^(?:pop|shift)$/.test(t);x.prototype[t]=function(){var p=arguments;if(f&&!this.__chain__){var b=this.value();return i.apply(oe(b)?b:[],p)}return this[a](function(w){return i.apply(oe(w)?w:[],p)})}}),En(ge.prototype,function(t,i){var a=x[i];if(a){var f=a.name+"";Ee.call(_i,f)||(_i[f]=[]),_i[f].push({name:i,func:a})}}),_i[Xo(r,L).name]=[{name:"wrapper",func:r}],ge.prototype.clone=Wv,ge.prototype.reverse=$v,ge.prototype.value=Uv,x.prototype.at=y1,x.prototype.chain=b1,x.prototype.commit=w1,x.prototype.next=_1,x.prototype.plant=S1,x.prototype.reverse=E1,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=A1,x.prototype.first=x.prototype.head,ys&&(x.prototype[ys]=T1),x}),yi=wv();Ft?((Ft.exports=yi)._=yi,Nt._=yi):ye._=yi}).call(LP)})(Vs,Vs.exports)),Vs.exports}var IP=MP();const Z0=$a(IP),{kebabCase:DP}=Z0,kP=ie.ul`
  ${({theme:e})=>e.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`,OP=ie.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({theme:e})=>e.mixins.boxShadow};
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
    ${({theme:e})=>e.mixins.boxShadow};
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
      ${({theme:e})=>e.mixins.inlineLink};
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
      ${({theme:e})=>e.mixins.flexCenter};
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
      ${({theme:e})=>e.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({theme:e})=>e.mixins.boxShadow};
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
`,i5=()=>{const[e,n]=useState([]),r=k.useRef(null),s=k.useRef([]),o=Dn();return k.useEffect(()=>{Yi(()=>import("./content.Bz3xzC59.js"),[]).then(l=>{const u=l.default.featuredProjects||[];n(u.filter(({node:h})=>h&&h.frontmatter.title!=="Dummy"))})},[]),k.useEffect(()=>{o||(un.reveal(r.current,ln()),s.current.forEach((l,u)=>un.reveal(l,ln(u*100))))},[]),g.jsxs("section",{id:"projects",children:[g.jsx("h2",{className:"numbered-heading",ref:r,children:"Some Things I've Built"}),g.jsx(kP,{children:e&&e.map(({node:l},u)=>{const{frontmatter:h,html:c}=l,{external:d,title:m,tech:v,github:y,cta:_,featuredMessage:S,featuredCover:C}=h,I=C?.startsWith("http");return g.jsxs(OP,{ref:L=>s.current[u]=L,children:[g.jsx("div",{className:"project-content",children:g.jsxs("div",{children:[g.jsx("p",{className:"project-overline",children:"Featured Project"}),g.jsx("h3",{className:"project-title",children:g.jsx("a",{href:`/projects/${DP(m)}`,children:m})}),g.jsx("div",{className:"project-description",dangerouslySetInnerHTML:{__html:S||c&&`${c.split("</p>")[0]}</p>`}}),g.jsxs("div",{className:"project-tech-list",children:[g.jsx("span",{style:{color:"var(--light-slate)",fontFamily:"var(--font-mono)",fontSize:"var(--fz-xs)"},children:"Tech Stack:"}),v.length&&v.map((L,P)=>g.jsx("li",{children:L},P))]}),g.jsxs("div",{className:"project-links",children:[_&&g.jsx("a",{href:_,"aria-label":"Course Link",className:"cta",children:"Learn More"}),y&&g.jsx("a",{href:y,"aria-label":"GitHub Link",children:g.jsx(an,{name:"GitHub"})}),d&&!_&&g.jsx("a",{href:d,"aria-label":"External Link",className:"external",children:g.jsx(an,{name:"External"})})]})]})}),g.jsx("div",{className:"project-image",children:g.jsx("a",{href:d||y||"#",children:I?g.jsx("img",{src:C,alt:m,className:"img"}):C&&g.jsx(GatsbyImage,{image:getImage(C),alt:m,className:"img"})})})]},u)})})]})},{kebabCase:jP}=Z0,NP=ie.section`
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
    ${({theme:e})=>e.mixins.resetList};
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
    ${({theme:e})=>e.mixins.button};
    margin: 80px auto 0;
  }
`,_m=ie.li`
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
    ${({theme:e})=>e.mixins.boxShadow};
    ${({theme:e})=>e.mixins.flexBetween};
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
    ${({theme:e})=>e.mixins.flexBetween};
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
        ${({theme:e})=>e.mixins.flexCenter};
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
      ${({theme:e})=>e.mixins.inlineLink};
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
`,s5=()=>{const[e,n]=k.useState([]),[r,s]=k.useState(!1),o=k.useRef(null),l=k.useRef(null),u=k.useRef([]),h=Dn();k.useEffect(()=>{Yi(()=>import("./content.Bz3xzC59.js"),[]).then(_=>{const C=(_.default.projects||[]).filter(({node:I})=>I&&I.frontmatter.showInProjects!==!1&&I.frontmatter.title!=="Dummy");n(C)})},[]),k.useEffect(()=>{h||(un.reveal(o.current,ln()),un.reveal(l.current,ln()),u.current.forEach((_,S)=>un.reveal(_,ln(S*100))))},[]);const c=6,d=e,m=d.slice(0,c),v=r?d:m,y=_=>{const{frontmatter:S,html:C}=_,{github:I,external:L,title:P,tech:M}=S,z=`/projects/${jP(P)}`;return g.jsxs("div",{className:"project-inner",children:[g.jsxs("header",{children:[g.jsxs("div",{className:"project-top",children:[g.jsx("div",{className:"folder",children:g.jsx(an,{name:"Folder"})}),g.jsxs("div",{className:"project-links",children:[I&&g.jsx("a",{href:I,"aria-label":"GitHub Link",target:"_blank",rel:"noreferrer",children:g.jsx(an,{name:"GitHub"})}),L&&g.jsx("a",{href:L,"aria-label":"External Link",className:"external",target:"_blank",rel:"noreferrer",children:g.jsx(an,{name:"External"})})]})]}),g.jsx("h3",{className:"project-title",children:g.jsx("a",{href:z,children:P.length>100?`${P.substring(0,100)}...`:P})}),g.jsx("div",{className:"project-description",dangerouslySetInnerHTML:{__html:`${C.substring(0,160)}...`}})]}),g.jsx("footer",{children:M&&g.jsx("ul",{className:"project-tech-list",children:M.map((j,B)=>g.jsx("li",{children:j},B))})})]})};return g.jsxs(NP,{children:[g.jsx("h2",{ref:o,children:"Other Noteworthy Projects"}),g.jsx("a",{className:"inline-link archive-link",to:"/projects",ref:l,children:"view the archive"}),g.jsx("ul",{className:"projects-grid",children:h?g.jsx(g.Fragment,{children:v&&v.map(({node:_},S)=>g.jsx(_m,{children:y(_)},S))}):g.jsx(Jn,{component:null,children:v&&v.map(({node:_},S)=>g.jsx(wn,{classNames:"fadeup",timeout:S>=c?(S-c)*300:300,exit:!1,children:g.jsx(_m,{ref:C=>u.current[S]=C,style:{transitionDelay:`${S>=c?(S-c)*100:0}ms`},children:y(_)},S)},S))})}),g.jsxs("button",{className:"more-button",onClick:()=>s(!r),children:["Show ",r?"Less":"More"]})]})};/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */var Gu,Tm;function Sm(){if(Tm)return Gu;Tm=1;const{entries:e,setPrototypeOf:n,isFrozen:r,getPrototypeOf:s,getOwnPropertyDescriptor:o}=Object;let{freeze:l,seal:u,create:h}=Object,{apply:c,construct:d}=typeof Reflect<"u"&&Reflect;l||(l=function(Y){return Y}),u||(u=function(Y){return Y}),c||(c=function(Y,xe,le){return Y.apply(xe,le)}),d||(d=function(Y,xe){return new Y(...xe)});const m=U(Array.prototype.forEach),v=U(Array.prototype.lastIndexOf),y=U(Array.prototype.pop),_=U(Array.prototype.push),S=U(Array.prototype.splice),C=U(String.prototype.toLowerCase),I=U(String.prototype.toString),L=U(String.prototype.match),P=U(String.prototype.replace),M=U(String.prototype.indexOf),z=U(String.prototype.trim),j=U(Object.prototype.hasOwnProperty),B=U(RegExp.prototype.test),$=ce(TypeError);function U(ae){return function(Y){Y instanceof RegExp&&(Y.lastIndex=0);for(var xe=arguments.length,le=new Array(xe>1?xe-1:0),nt=1;nt<xe;nt++)le[nt-1]=arguments[nt];return c(ae,Y,le)}}function ce(ae){return function(){for(var Y=arguments.length,xe=new Array(Y),le=0;le<Y;le++)xe[le]=arguments[le];return d(ae,xe)}}function H(ae,Y){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:C;n&&n(ae,null);let le=Y.length;for(;le--;){let nt=Y[le];if(typeof nt=="string"){const yt=xe(nt);yt!==nt&&(r(Y)||(Y[le]=yt),nt=yt)}ae[nt]=!0}return ae}function J(ae){for(let Y=0;Y<ae.length;Y++)j(ae,Y)||(ae[Y]=null);return ae}function Ce(ae){const Y=h(null);for(const[xe,le]of e(ae))j(ae,xe)&&(Array.isArray(le)?Y[xe]=J(le):le&&typeof le=="object"&&le.constructor===Object?Y[xe]=Ce(le):Y[xe]=le);return Y}function De(ae,Y){for(;ae!==null;){const le=o(ae,Y);if(le){if(le.get)return U(le.get);if(typeof le.value=="function")return U(le.value)}ae=s(ae)}function xe(){return null}return xe}const St=l(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Yt=l(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Tn=l(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),me=l(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),be=l(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ke=l(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ze=l(["#text"]),Be=l(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),lt=l(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Mt=l(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),It=l(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ut=u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Et=u(/<%[\w\W]*|[\w\W]*%>/gm),sr=u(/\$\{[\w\W]*/gm),Dt=u(/^data-[\-\w.\u00B7-\uFFFF]+$/),vt=u(/^aria-[\-\w]+$/),or=u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),fn=u(/^(?:\w+script|data):/i),xt=u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),qi=u(/^html$/i),kt=u(/^[a-z][.\w]*(-[.\w]+)+$/i);var ar=Object.freeze({__proto__:null,ARIA_ATTR:vt,ATTR_WHITESPACE:xt,CUSTOM_ELEMENT:kt,DATA_ATTR:Dt,DOCTYPE_NAME:qi,ERB_EXPR:Et,IS_ALLOWED_URI:or,IS_SCRIPT_OR_DATA:fn,MUSTACHE_EXPR:ut,TMPLIT_EXPR:sr});const Mr={element:1,text:3,progressingInstruction:7,comment:8,document:9},hn=function(){return typeof window>"u"?null:window},so=function(Y,xe){if(typeof Y!="object"||typeof Y.createPolicy!="function")return null;let le=null;const nt="data-tt-policy-suffix";xe&&xe.hasAttribute(nt)&&(le=xe.getAttribute(nt));const yt="dompurify"+(le?"#"+le:"");try{return Y.createPolicy(yt,{createHTML(jt){return jt},createScriptURL(jt){return jt}})}catch{return console.warn("TrustedTypes policy "+yt+" could not be created."),null}},oo=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function lr(){let ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hn();const Y=Z=>lr(Z);if(Y.version="3.2.6",Y.removed=[],!ae||!ae.document||ae.document.nodeType!==Mr.document||!ae.Element)return Y.isSupported=!1,Y;let{document:xe}=ae;const le=xe,nt=le.currentScript,{DocumentFragment:yt,HTMLTemplateElement:jt,Node:Ir,Element:ci,NodeFilter:kn,NamedNodeMap:Xi=ae.NamedNodeMap||ae.MozNamedAttrMap,HTMLFormElement:Zi,DOMParser:Ji,trustedTypes:ur}=ae,On=ci.prototype,Qi=De(On,"cloneNode"),ol=De(On,"remove"),al=De(On,"nextSibling"),ll=De(On,"childNodes"),Dr=De(On,"parentNode");if(typeof jt=="function"){const Z=xe.createElement("template");Z.content&&Z.content.ownerDocument&&(xe=Z.content.ownerDocument)}let rt,kr="";const{implementation:es,createNodeIterator:ul,createDocumentFragment:cl,getElementsByTagName:ao}=xe,{importNode:fl}=le;let ct=oo();Y.isSupported=typeof e=="function"&&typeof Dr=="function"&&es&&es.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ts,ERB_EXPR:Or,TMPLIT_EXPR:ns,DATA_ATTR:rs,ARIA_ATTR:hl,IS_SCRIPT_OR_DATA:dl,ATTR_WHITESPACE:lo,CUSTOM_ELEMENT:pl}=ar;let{IS_ALLOWED_URI:uo}=ar,Ye=null;const co=H({},[...St,...Yt,...Tn,...be,...Ze]);let Je=null;const is=H({},[...Be,...lt,...Mt,...It]);let Oe=Object.seal(h(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),jr=null,ss=null,fo=!0,os=!0,ho=!1,Nr=!0,cr=!1,jn=!0,Nn=!1,as=!1,ls=!1,Fn=!1,Fr=!1,Br=!1,po=!0,mo=!1;const ml="user-content-";let us=!0,fr=!1,Bn={},Vn=null;const fi=H({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let go=null;const cs=H({},["audio","video","img","source","image","track"]);let hr=null;const fs=H({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),hi="http://www.w3.org/1998/Math/MathML",Vr="http://www.w3.org/2000/svg",qt="http://www.w3.org/1999/xhtml";let Sn=qt,hs=!1,di=null;const ds=H({},[hi,Vr,qt],I);let dr=H({},["mi","mo","mn","ms","mtext"]),dn=H({},["annotation-xml"]);const vo=H({},["title","style","font","a","script"]);let pr=null;const gl=["application/xhtml+xml","text/html"],xo="text/html";let $e=null,zn=null;const yo=xe.createElement("form"),bo=function(E){return E instanceof RegExp||E instanceof Function},ps=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(zn&&zn===E)){if((!E||typeof E!="object")&&(E={}),E=Ce(E),pr=gl.indexOf(E.PARSER_MEDIA_TYPE)===-1?xo:E.PARSER_MEDIA_TYPE,$e=pr==="application/xhtml+xml"?I:C,Ye=j(E,"ALLOWED_TAGS")?H({},E.ALLOWED_TAGS,$e):co,Je=j(E,"ALLOWED_ATTR")?H({},E.ALLOWED_ATTR,$e):is,di=j(E,"ALLOWED_NAMESPACES")?H({},E.ALLOWED_NAMESPACES,I):ds,hr=j(E,"ADD_URI_SAFE_ATTR")?H(Ce(fs),E.ADD_URI_SAFE_ATTR,$e):fs,go=j(E,"ADD_DATA_URI_TAGS")?H(Ce(cs),E.ADD_DATA_URI_TAGS,$e):cs,Vn=j(E,"FORBID_CONTENTS")?H({},E.FORBID_CONTENTS,$e):fi,jr=j(E,"FORBID_TAGS")?H({},E.FORBID_TAGS,$e):Ce({}),ss=j(E,"FORBID_ATTR")?H({},E.FORBID_ATTR,$e):Ce({}),Bn=j(E,"USE_PROFILES")?E.USE_PROFILES:!1,fo=E.ALLOW_ARIA_ATTR!==!1,os=E.ALLOW_DATA_ATTR!==!1,ho=E.ALLOW_UNKNOWN_PROTOCOLS||!1,Nr=E.ALLOW_SELF_CLOSE_IN_ATTR!==!1,cr=E.SAFE_FOR_TEMPLATES||!1,jn=E.SAFE_FOR_XML!==!1,Nn=E.WHOLE_DOCUMENT||!1,Fn=E.RETURN_DOM||!1,Fr=E.RETURN_DOM_FRAGMENT||!1,Br=E.RETURN_TRUSTED_TYPE||!1,ls=E.FORCE_BODY||!1,po=E.SANITIZE_DOM!==!1,mo=E.SANITIZE_NAMED_PROPS||!1,us=E.KEEP_CONTENT!==!1,fr=E.IN_PLACE||!1,uo=E.ALLOWED_URI_REGEXP||or,Sn=E.NAMESPACE||qt,dr=E.MATHML_TEXT_INTEGRATION_POINTS||dr,dn=E.HTML_INTEGRATION_POINTS||dn,Oe=E.CUSTOM_ELEMENT_HANDLING||{},E.CUSTOM_ELEMENT_HANDLING&&bo(E.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=E.CUSTOM_ELEMENT_HANDLING.tagNameCheck),E.CUSTOM_ELEMENT_HANDLING&&bo(E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),E.CUSTOM_ELEMENT_HANDLING&&typeof E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Oe.allowCustomizedBuiltInElements=E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),cr&&(os=!1),Fr&&(Fn=!0),Bn&&(Ye=H({},Ze),Je=[],Bn.html===!0&&(H(Ye,St),H(Je,Be)),Bn.svg===!0&&(H(Ye,Yt),H(Je,lt),H(Je,It)),Bn.svgFilters===!0&&(H(Ye,Tn),H(Je,lt),H(Je,It)),Bn.mathMl===!0&&(H(Ye,be),H(Je,Mt),H(Je,It))),E.ADD_TAGS&&(Ye===co&&(Ye=Ce(Ye)),H(Ye,E.ADD_TAGS,$e)),E.ADD_ATTR&&(Je===is&&(Je=Ce(Je)),H(Je,E.ADD_ATTR,$e)),E.ADD_URI_SAFE_ATTR&&H(hr,E.ADD_URI_SAFE_ATTR,$e),E.FORBID_CONTENTS&&(Vn===fi&&(Vn=Ce(Vn)),H(Vn,E.FORBID_CONTENTS,$e)),us&&(Ye["#text"]=!0),Nn&&H(Ye,["html","head","body"]),Ye.table&&(H(Ye,["tbody"]),delete jr.tbody),E.TRUSTED_TYPES_POLICY){if(typeof E.TRUSTED_TYPES_POLICY.createHTML!="function")throw $('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof E.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw $('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');rt=E.TRUSTED_TYPES_POLICY,kr=rt.createHTML("")}else rt===void 0&&(rt=so(ur,nt)),rt!==null&&typeof kr=="string"&&(kr=rt.createHTML(""));l&&l(E),zn=E}},wo=H({},[...Yt,...Tn,...me]),ms=H({},[...be,...ke]),vl=function(E){let W=Dr(E);(!W||!W.tagName)&&(W={namespaceURI:Sn,tagName:"template"});const q=C(E.tagName),Pe=C(W.tagName);return di[E.namespaceURI]?E.namespaceURI===Vr?W.namespaceURI===qt?q==="svg":W.namespaceURI===hi?q==="svg"&&(Pe==="annotation-xml"||dr[Pe]):!!wo[q]:E.namespaceURI===hi?W.namespaceURI===qt?q==="math":W.namespaceURI===Vr?q==="math"&&dn[Pe]:!!ms[q]:E.namespaceURI===qt?W.namespaceURI===Vr&&!dn[Pe]||W.namespaceURI===hi&&!dr[Pe]?!1:!ms[q]&&(vo[q]||!wo[q]):!!(pr==="application/xhtml+xml"&&di[E.namespaceURI]):!1},Xt=function(E){_(Y.removed,{element:E});try{Dr(E).removeChild(E)}catch{ol(E)}},mr=function(E,W){try{_(Y.removed,{attribute:W.getAttributeNode(E),from:W})}catch{_(Y.removed,{attribute:null,from:W})}if(W.removeAttribute(E),E==="is")if(Fn||Fr)try{Xt(W)}catch{}else try{W.setAttribute(E,"")}catch{}},_o=function(E){let W=null,q=null;if(ls)E="<remove></remove>"+E;else{const Ue=L(E,/^[\r\n\t ]+/);q=Ue&&Ue[0]}pr==="application/xhtml+xml"&&Sn===qt&&(E='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+E+"</body></html>");const Pe=rt?rt.createHTML(E):E;if(Sn===qt)try{W=new Ji().parseFromString(Pe,pr)}catch{}if(!W||!W.documentElement){W=es.createDocument(Sn,"template",null);try{W.documentElement.innerHTML=hs?kr:Pe}catch{}}const Qe=W.body||W.documentElement;return E&&q&&Qe.insertBefore(xe.createTextNode(q),Qe.childNodes[0]||null),Sn===qt?ao.call(W,Nn?"html":"body")[0]:Nn?W.documentElement:Qe},pi=function(E){return ul.call(E.ownerDocument||E,E,kn.SHOW_ELEMENT|kn.SHOW_COMMENT|kn.SHOW_TEXT|kn.SHOW_PROCESSING_INSTRUCTION|kn.SHOW_CDATA_SECTION,null)},gs=function(E){return E instanceof Zi&&(typeof E.nodeName!="string"||typeof E.textContent!="string"||typeof E.removeChild!="function"||!(E.attributes instanceof Xi)||typeof E.removeAttribute!="function"||typeof E.setAttribute!="function"||typeof E.namespaceURI!="string"||typeof E.insertBefore!="function"||typeof E.hasChildNodes!="function")},To=function(E){return typeof Ir=="function"&&E instanceof Ir};function pn(Z,E,W){m(Z,q=>{q.call(Y,E,W,zn)})}const So=function(E){let W=null;if(pn(ct.beforeSanitizeElements,E,null),gs(E))return Xt(E),!0;const q=$e(E.nodeName);if(pn(ct.uponSanitizeElement,E,{tagName:q,allowedTags:Ye}),jn&&E.hasChildNodes()&&!To(E.firstElementChild)&&B(/<[/\w!]/g,E.innerHTML)&&B(/<[/\w!]/g,E.textContent)||E.nodeType===Mr.progressingInstruction||jn&&E.nodeType===Mr.comment&&B(/<[/\w]/g,E.data))return Xt(E),!0;if(!Ye[q]||jr[q]){if(!jr[q]&&Ae(q)&&(Oe.tagNameCheck instanceof RegExp&&B(Oe.tagNameCheck,q)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(q)))return!1;if(us&&!Vn[q]){const Pe=Dr(E)||E.parentNode,Qe=ll(E)||E.childNodes;if(Qe&&Pe){const Ue=Qe.length;for(let ye=Ue-1;ye>=0;--ye){const Nt=Qi(Qe[ye],!0);Nt.__removalCount=(E.__removalCount||0)+1,Pe.insertBefore(Nt,al(E))}}}return Xt(E),!0}return E instanceof ci&&!vl(E)||(q==="noscript"||q==="noembed"||q==="noframes")&&B(/<\/no(script|embed|frames)/i,E.innerHTML)?(Xt(E),!0):(cr&&E.nodeType===Mr.text&&(W=E.textContent,m([ts,Or,ns],Pe=>{W=P(W,Pe," ")}),E.textContent!==W&&(_(Y.removed,{element:E.cloneNode()}),E.textContent=W)),pn(ct.afterSanitizeElements,E,null),!1)},Eo=function(E,W,q){if(po&&(W==="id"||W==="name")&&(q in xe||q in yo))return!1;if(!(os&&!ss[W]&&B(rs,W))){if(!(fo&&B(hl,W))){if(!Je[W]||ss[W]){if(!(Ae(E)&&(Oe.tagNameCheck instanceof RegExp&&B(Oe.tagNameCheck,E)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(E))&&(Oe.attributeNameCheck instanceof RegExp&&B(Oe.attributeNameCheck,W)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(W))||W==="is"&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&B(Oe.tagNameCheck,q)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(q))))return!1}else if(!hr[W]){if(!B(uo,P(q,lo,""))){if(!((W==="src"||W==="xlink:href"||W==="href")&&E!=="script"&&M(q,"data:")===0&&go[E])){if(!(ho&&!B(dl,P(q,lo,"")))){if(q)return!1}}}}}}return!0},Ae=function(E){return E!=="annotation-xml"&&L(E,pl)},Se=function(E){pn(ct.beforeSanitizeAttributes,E,null);const{attributes:W}=E;if(!W||gs(E))return;const q={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Je,forceKeepAttr:void 0};let Pe=W.length;for(;Pe--;){const Qe=W[Pe],{name:Ue,namespaceURI:ye,value:Nt}=Qe,Ft=$e(Ue),mi=Nt;let qe=Ue==="value"?mi:z(mi);if(q.attrName=Ft,q.attrValue=qe,q.keepAttr=!0,q.forceKeepAttr=void 0,pn(ct.uponSanitizeAttribute,E,q),qe=q.attrValue,mo&&(Ft==="id"||Ft==="name")&&(mr(Ue,E),qe=ml+qe),jn&&B(/((--!?|])>)|<\/(style|title)/i,qe)){mr(Ue,E);continue}if(q.forceKeepAttr)continue;if(!q.keepAttr){mr(Ue,E);continue}if(!Nr&&B(/\/>/i,qe)){mr(Ue,E);continue}cr&&m([ts,Or,ns],vs=>{qe=P(qe,vs," ")});const bt=$e(E.nodeName);if(!Eo(bt,Ft,qe)){mr(Ue,E);continue}if(rt&&typeof ur=="object"&&typeof ur.getAttributeType=="function"&&!ye)switch(ur.getAttributeType(bt,Ft)){case"TrustedHTML":{qe=rt.createHTML(qe);break}case"TrustedScriptURL":{qe=rt.createScriptURL(qe);break}}if(qe!==mi)try{ye?E.setAttributeNS(ye,Ue,qe):E.setAttribute(Ue,qe),gs(E)?Xt(E):y(Y.removed)}catch{mr(Ue,E)}}pn(ct.afterSanitizeAttributes,E,null)},xl=function Z(E){let W=null;const q=pi(E);for(pn(ct.beforeSanitizeShadowDOM,E,null);W=q.nextNode();)pn(ct.uponSanitizeShadowNode,W,null),So(W),Se(W),W.content instanceof yt&&Z(W.content);pn(ct.afterSanitizeShadowDOM,E,null)};return Y.sanitize=function(Z){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},W=null,q=null,Pe=null,Qe=null;if(hs=!Z,hs&&(Z="<!-->"),typeof Z!="string"&&!To(Z))if(typeof Z.toString=="function"){if(Z=Z.toString(),typeof Z!="string")throw $("dirty is not a string, aborting")}else throw $("toString is not a function");if(!Y.isSupported)return Z;if(as||ps(E),Y.removed=[],typeof Z=="string"&&(fr=!1),fr){if(Z.nodeName){const Nt=$e(Z.nodeName);if(!Ye[Nt]||jr[Nt])throw $("root node is forbidden and cannot be sanitized in-place")}}else if(Z instanceof Ir)W=_o("<!---->"),q=W.ownerDocument.importNode(Z,!0),q.nodeType===Mr.element&&q.nodeName==="BODY"||q.nodeName==="HTML"?W=q:W.appendChild(q);else{if(!Fn&&!cr&&!Nn&&Z.indexOf("<")===-1)return rt&&Br?rt.createHTML(Z):Z;if(W=_o(Z),!W)return Fn?null:Br?kr:""}W&&ls&&Xt(W.firstChild);const Ue=pi(fr?Z:W);for(;Pe=Ue.nextNode();)So(Pe),Se(Pe),Pe.content instanceof yt&&xl(Pe.content);if(fr)return Z;if(Fn){if(Fr)for(Qe=cl.call(W.ownerDocument);W.firstChild;)Qe.appendChild(W.firstChild);else Qe=W;return(Je.shadowroot||Je.shadowrootmode)&&(Qe=fl.call(le,Qe,!0)),Qe}let ye=Nn?W.outerHTML:W.innerHTML;return Nn&&Ye["!doctype"]&&W.ownerDocument&&W.ownerDocument.doctype&&W.ownerDocument.doctype.name&&B(qi,W.ownerDocument.doctype.name)&&(ye="<!DOCTYPE "+W.ownerDocument.doctype.name+`>
`+ye),cr&&m([ts,Or,ns],Nt=>{ye=P(ye,Nt," ")}),rt&&Br?rt.createHTML(ye):ye},Y.setConfig=function(){let Z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ps(Z),as=!0},Y.clearConfig=function(){zn=null,as=!1},Y.isValidAttribute=function(Z,E,W){zn||ps({});const q=$e(Z),Pe=$e(E);return Eo(q,Pe,W)},Y.addHook=function(Z,E){typeof E=="function"&&_(ct[Z],E)},Y.removeHook=function(Z,E){if(E!==void 0){const W=v(ct[Z],E);return W===-1?void 0:S(ct[Z],W,1)[0]}return y(ct[Z])},Y.removeHooks=function(Z){ct[Z]=[]},Y.removeAllHooks=function(){ct=oo()},Y}var Ot=lr();return Gu=Ot,Gu}var Ku,Em;function FP(){return Em||(Em=1,Ku=window.DOMPurify||(window.DOMPurify=Sm().default||Sm())),Ku}var BP=FP();const Am=$a(BP),VP=ie.section`
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
    ${({theme:e})=>e.mixins.resetList};
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
    ${({theme:e})=>e.mixins.button};
    margin: 80px auto 0;
  }
`,zP=ie.div`
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
`,WP=ie.div`
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
`,$P=()=>{const[e,n]=k.useState([]),[r,s]=k.useState(!1),o=k.useRef(null),l=k.useRef(null),u=k.useRef([]),h=Dn(),[c,d]=k.useState([]),m=jS("(max-width: 768px)");k.useEffect(()=>{Yi(()=>import("./content.Bz3xzC59.js"),[]).then(L=>{const M=(L.default.publications||[]).filter(({node:z})=>z&&z.frontmatter.featured===!0&&z.frontmatter.visible!==!1&&z.frontmatter.title!=="Dummy");n(M)})},[]);const v=4,y=e,_=y.slice(0,v),S=r?y:_,C=L=>{d(P=>{const M=Array(y.length).fill(!1);return M[L]=!P[L],M})};k.useEffect(()=>{h||(un.reveal(o.current,ln()),un.reveal(l.current,ln(200,0)),u.current.forEach((L,P)=>un.reveal(L,ln(P*10))))},[]);const I=(L,P)=>{(L.key==="Enter"||L.key===" ")&&C(P)};return g.jsxs(VP,{id:"publications",children:[g.jsxs("div",{className:"section-header",ref:o,children:[g.jsx("h2",{className:"numbered-heading",children:"Publications"}),g.jsx("a",{className:"inline-link archive-link",to:"/publications",children:"view all publications"})]}),!m&&g.jsx(zP,{ref:l,children:g.jsxs("table",{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{style:{width:"550px"},children:"Title"}),g.jsx("th",{style:{width:"350px"},className:"hide-on-mobile",children:"Authors"}),g.jsx("th",{children:"Venue"}),g.jsx("th",{children:"Year"})]})}),g.jsx("tbody",{children:S.map(({node:L},P)=>{const M=Am.sanitize(L.html,{ALLOWED_TAGS:[],ALLOWED_ATTR:[]}),{date:z,title:j,conference:B,doi:$,url:U,github:ce,authors:H}=L.frontmatter;return g.jsxs("tr",{ref:J=>u.current[P]=J,children:[g.jsxs("td",{className:"title",children:[g.jsx("div",{className:"publication-title",onClick:()=>C(P),onKeyDown:J=>I(J,P),role:"button",tabIndex:0,children:j}),g.jsx("div",{className:`publication-abstract ${c[P]?"expanded":""}`,children:g.jsx("p",{dangerouslySetInnerHTML:{__html:M}})})]}),g.jsx("td",{className:"authors hide-on-mobile",children:H.map((J,Ce)=>g.jsxs("span",{children:[J.url?g.jsx("a",{href:J.url,target:"_blank",rel:"noopener noreferrer",children:J.name==="Ehsanur Rahman Rhythm"?g.jsx("strong",{children:J.name}):J.name}):J.email?g.jsx("a",{href:`mailto:${J.email}`,children:J.name==="Ehsanur Rahman Rhythm"?g.jsx("strong",{children:J.name}):J.name}):J.name==="Ehsanur Rahman Rhythm"?g.jsx("strong",{children:J.name}):J.name,Ce<H.length-1&&g.jsx("span",{children:", "})]},Ce))}),g.jsx("td",{className:"conference",children:B}),g.jsx("td",{className:"year",children:new Date(z).getFullYear()}),g.jsx("td",{className:"links",children:g.jsxs("div",{className:"link-icons",children:[U||$?g.jsx("a",{href:U||`https://doi.org/${$}`,"aria-label":"External Link",style:{marginRight:"10px"},target:"_blank",rel:"noopener noreferrer",children:g.jsx(an,{name:"External",className:"icon-large"})}):null,ce&&g.jsx("a",{href:ce,"aria-label":"GitHub Link",target:"_blank",rel:"noopener noreferrer",children:g.jsx(an,{name:"GitHub",className:"icon-large"})})]})})]},P)})})]})}),m&&g.jsx(WP,{ref:l,children:S.map(({node:L},P)=>{const M=Am.sanitize(L.html,{ALLOWED_TAGS:[],ALLOWED_ATTR:[]}),{date:z,title:j,conference:B,doi:$,url:U,github:ce,authors:H}=L.frontmatter;return g.jsxs("div",{className:"publication-card",ref:J=>u.current[P]=J,children:[g.jsx("div",{className:"card-title",onClick:()=>C(P),onKeyDown:J=>I(J,P),role:"button",tabIndex:0,children:j}),g.jsx("div",{className:`card-abstract ${c[P]?"expanded":""}`,children:g.jsx("p",{dangerouslySetInnerHTML:{__html:M}})}),g.jsx("div",{className:"card-authors",children:H.map((J,Ce)=>g.jsxs("span",{children:[J.url?g.jsx("a",{href:J.url,target:"_blank",rel:"noopener noreferrer",children:J.name==="Ehsanur Rahman Rhythm"?g.jsx("strong",{children:J.name}):J.name}):J.email?g.jsx("a",{href:`mailto:${J.email}`,children:J.name==="Ehsanur Rahman Rhythm"?g.jsx("strong",{children:J.name}):J.name}):J.name==="Ehsanur Rahman Rhythm"?g.jsx("strong",{children:J.name}):J.name,Ce<H.length-1&&g.jsx("span",{children:", "})]},Ce))}),g.jsxs("div",{className:"card-details",children:[g.jsx("div",{children:B}),g.jsx("div",{children:new Date(z).getFullYear()})]}),g.jsxs("div",{className:"card-links",children:[U||$?g.jsx("a",{href:U||`https://doi.org/${$}`,"aria-label":"External Link",target:"_blank",rel:"noopener noreferrer",children:g.jsx(an,{name:"External"})}):null,ce&&g.jsx("a",{href:ce,"aria-label":"GitHub Link",target:"_blank",rel:"noopener noreferrer",children:g.jsx(an,{name:"GitHub"})})]})]},P)})}),g.jsxs("button",{className:"more-button",onClick:()=>s(!r),children:["Show ",r?"Less":"More"]})]})};$P.propTypes={data:Qn.object.isRequired};const UP=ie.section`
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
    ${({theme:e})=>e.mixins.bigButton};
    margin-top: 50px;
  }
`,o5=()=>{const e=k.useRef(null),n=Dn();return k.useEffect(()=>{n||un.reveal(e.current,ln())},[]),g.jsxs(UP,{id:"contact",ref:e,children:[g.jsx("h2",{className:"numbered-heading overline",children:"What’s Next?"}),g.jsx("h2",{className:"title",children:"Get In Touch"}),g.jsx("p",{children:"Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"}),g.jsx("a",{className:"email-link",href:`mailto:${sc}`,children:"Say Hello"})]})};ie.div`
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
`;ie.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;ie.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;ie.div`
  flex-grow: 1;
`;ie.h4`
  margin: 0;
  color: var(--lightest-slate);
`;ie.p`
  margin: 0;
  color: var(--slate);
  font-size: var(--fz-sm);
`;ie.div`
  display: flex;
  align-items: center;
  height: 20px;
`;ie.span`
  color: ${e=>e.filled?"var(--green)":"var(--slate)"};
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;ie.p`
  color: var(--light-slate);
  font-style: italic;
`;const HP=ie.header`
  ${({theme:e})=>e.mixins.flexBetween};
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
    ${e=>e.scrollDirection==="up"&&!e.scrolledToTop&&st`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${e=>e.scrollDirection==="down"&&!e.scrolledToTop&&st`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`,GP=ie.nav`
  ${({theme:e})=>e.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({theme:e})=>e.mixins.flexCenter};

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
`,Cm=ie.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({theme:e})=>e.mixins.flexBetween};
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
    ${({theme:e})=>e.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`,KP=({isHome:e})=>{const[n,r]=k.useState(!e),s=OS("down"),[o,l]=k.useState(!0),u=Dn(),h=()=>{l(window.pageYOffset<50)};k.useEffect(()=>{if(u)return;const _=setTimeout(()=>{r(!0)},100);return window.addEventListener("scroll",h),()=>{clearTimeout(_),window.removeEventListener("scroll",h)}},[]);const c=e?ka:0,d=e?"fade":"",m=e?"fadedown":"",v=g.jsx("div",{className:"logo",tabIndex:"-1",children:e?g.jsxs("a",{href:"/","aria-label":"home",children:[g.jsx("div",{className:"hex-container",children:g.jsx(np,{})}),g.jsx("div",{className:"logo-container",children:g.jsx(lc,{})})]}):g.jsxs("a",{href:"/","aria-label":"home",children:[g.jsx("div",{className:"hex-container",children:g.jsx(np,{})}),g.jsx("div",{className:"logo-container",children:g.jsx(lc,{})})]})}),y=g.jsx("a",{className:"resume-button",href:"https://cdn.errhythm.me/resume.pdf",target:"_blank",rel:"noopener noreferrer",children:"Resume"});return g.jsx(HP,{scrollDirection:s,scrolledToTop:o,children:g.jsx(GP,{children:u?g.jsxs(g.Fragment,{children:[v,g.jsxs(Cm,{children:[g.jsx("ol",{children:ei&&ei.map(({url:_,name:S},C)=>g.jsx("li",{children:g.jsx("a",{href:_,children:S})},C))}),g.jsx("div",{children:y})]}),g.jsx(xm,{})]}):g.jsxs(g.Fragment,{children:[g.jsx(Jn,{component:null,children:n&&g.jsx(wn,{classNames:d,timeout:c,children:g.jsx(g.Fragment,{children:v})})}),g.jsxs(Cm,{children:[g.jsx("ol",{children:g.jsx(Jn,{component:null,children:n&&ei&&ei.map(({url:_,name:S},C)=>g.jsx(wn,{classNames:m,timeout:c,children:g.jsx("li",{style:{transitionDelay:`${e?C*100:0}ms`},children:g.jsx("a",{href:_,children:S})},C)},C))})}),g.jsx(Jn,{component:null,children:n&&g.jsx(wn,{classNames:m,timeout:c,children:g.jsx("div",{style:{transitionDelay:`${e?ei.length*100:0}ms`},children:y})})})]}),g.jsx(Jn,{component:null,children:n&&g.jsx(wn,{classNames:d,timeout:c,children:g.jsx(xm,{})})})]})})})};KP.propTypes={isHome:Qn.bool};export{t5 as A,o5 as C,aP as E,QP as F,ZP as G,e5 as H,n5 as J,QR as L,KP as N,s5 as P,sP as S,r5 as a,i5 as b,$P as c,g as j,qP as o,XP as t};

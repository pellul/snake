!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=65)}([function(t,n,e){var r=e(29)("wks"),o=e(14),i=e(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(4),o=e(36),i=e(25),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(9)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(1),o=e(8),i=e(10),u=e(14)("src"),c=Function.toString,a=(""+c).split("toString");e(12).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(f&&(i(e,u)||o(e,u,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n,e){var r=e(1),o=e(12),i=e(8),u=e(6),c=e(15),a=function(t,n,e){var f,s,l,p,h=t&a.F,v=t&a.G,y=t&a.S,d=t&a.P,g=t&a.B,b=v?r:y?r[n]||(r[n]={}):(r[n]||{}).prototype,m=v?o:o[n]||(o[n]={}),w=m.prototype||(m.prototype={});for(f in v&&(e=n),e)l=((s=!h&&b&&void 0!==b[f])?b:e)[f],p=g&&s?c(l,r):d&&"function"==typeof l?c(Function.call,l):l,b&&u(b,f,l,t&a.U),m[f]!=l&&i(m,f,p),d&&w[f]!=l&&(w[f]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(2),o=e(13);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(71),o=e(17);t.exports=function(t){return r(o(t))}},function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(68);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=!1},function(t,n,e){var r=e(38),o=e(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(2).f,o=e(10),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(67)(!0);e(24)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";var r=e(18),o=e(7),i=e(6),u=e(8),c=e(16),a=e(69),f=e(21),s=e(74),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,y,d,g){a(e,n,v);var b,m,w,_=function(t){if(!p&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",O="values"==y,x=!1,k=t.prototype,j=k[l]||k["@@iterator"]||y&&k[y],P=j||_(y),E=y?O?_("entries"):P:void 0,T="Array"==n&&k.entries||j;if(T&&(w=s(T.call(new t)))!==Object.prototype&&w.next&&(f(w,S,!0),r||"function"==typeof w[l]||u(w,l,h)),O&&j&&"values"!==j.name&&(x=!0,P=function(){return j.call(this)}),r&&!g||!p&&!x&&k[l]||u(k,l,P),c[n]=P,c[S]=h,y)if(b={values:O?P:_("values"),keys:d?P:_("keys"),entries:E},g)for(m in b)m in k||i(k,m,b[m]);else o(o.P+o.F*(p||x),n,b);return b}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(4),o=e(70),i=e(30),u=e(28)("IE_PROTO"),c=function(){},a=function(){var t,n=e(37)("iframe"),r=i.length;for(n.style.display="none",e(73).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(29)("keys"),o=e(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(12),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(17);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(44),o={};o[e(0)("toStringTag")]="z",o+""!="[object z]"&&e(6)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,n,e){var r=e(14)("meta"),o=e(5),i=e(10),u=e(2).f,c=0,a=Object.isExtensible||function(){return!0},f=!e(9)((function(){return a(Object.preventExtensions({}))})),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!i(t,r)&&s(t),t}}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){for(var r=e(56),o=e(19),i=e(6),u=e(1),c=e(8),a=e(16),f=e(0),s=f("iterator"),l=f("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(h),y=0;y<v.length;y++){var d,g=v[y],b=h[g],m=u[g],w=m&&m.prototype;if(w&&(w[s]||c(w,s,p),w[l]||c(w,l,g),a[g]=p,b))for(d in r)w[d]||i(w,d,r[d],!0)}},function(t,n,e){t.exports=!e(3)&&!e(9)((function(){return 7!=Object.defineProperty(e(37)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(5),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(10),o=e(11),i=e(72)(!1),u=e(28)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){"use strict";var r=e(15),o=e(7),i=e(31),u=e(41),c=e(42),a=e(20),f=e(75),s=e(43);o(o.S+o.F*!e(45)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,d=void 0!==y,g=0,b=s(p);if(d&&(y=r(y,v>2?arguments[2]:void 0,2)),null==b||h==Array&&c(b))for(e=new h(n=a(p.length));n>g;g++)f(e,g,d?y(p[g],g):p[g]);else for(l=b.call(p),e=new h;!(o=l.next()).done;g++)f(e,g,d?u(l,y,[o.value,g],!0):o.value);return e.length=g,e}})},function(t,n,e){var r=e(4);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(16),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(44),o=e(0)("iterator"),i=e(16);t.exports=e(12).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(27),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";e(76);var r=e(4),o=e(47),i=e(3),u=/./.toString,c=function(t){e(6)(RegExp.prototype,"toString",t,!0)};e(9)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=u.name&&c((function(){return u.call(this)}))},function(t,n,e){"use strict";var r=e(4);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&e(6)(r,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},function(t,n,e){e(50)("asyncIterator")},function(t,n,e){var r=e(1),o=e(12),i=e(18),u=e(51),c=e(2).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(0)},function(t,n,e){"use strict";var r=e(1),o=e(10),i=e(3),u=e(7),c=e(6),a=e(33).KEY,f=e(9),s=e(29),l=e(21),p=e(14),h=e(0),v=e(51),y=e(50),d=e(77),g=e(78),b=e(4),m=e(5),w=e(11),_=e(25),S=e(13),O=e(26),x=e(79),k=e(55),j=e(2),P=e(19),E=k.f,T=j.f,M=x.f,I=r.Symbol,A=r.JSON,C=A&&A.stringify,L=h("_hidden"),N=h("toPrimitive"),R={}.propertyIsEnumerable,B=s("symbol-registry"),F=s("symbols"),Y=s("op-symbols"),X=Object.prototype,D="function"==typeof I,G=r.QObject,V=!G||!G.prototype||!G.prototype.findChild,U=i&&f((function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=E(X,n);r&&delete X[n],T(t,n,e),r&&t!==X&&T(X,n,r)}:T,K=function(t){var n=F[t]=O(I.prototype);return n._k=t,n},z=D&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},Z=function(t,n,e){return t===X&&Z(Y,n,e),b(t),n=_(n,!0),b(e),o(F,n)?(e.enumerable?(o(t,L)&&t[L][n]&&(t[L][n]=!1),e=O(e,{enumerable:S(0,!1)})):(o(t,L)||T(t,L,S(1,{})),t[L][n]=!0),U(t,n,e)):T(t,n,e)},W=function(t,n){b(t);for(var e,r=d(n=w(n)),o=0,i=r.length;i>o;)Z(t,e=r[o++],n[e]);return t},H=function(t){var n=R.call(this,t=_(t,!0));return!(this===X&&o(F,t)&&!o(Y,t))&&(!(n||!o(this,t)||!o(F,t)||o(this,L)&&this[L][t])||n)},J=function(t,n){if(t=w(t),n=_(n,!0),t!==X||!o(F,n)||o(Y,n)){var e=E(t,n);return!e||!o(F,n)||o(t,L)&&t[L][n]||(e.enumerable=!0),e}},q=function(t){for(var n,e=M(w(t)),r=[],i=0;e.length>i;)o(F,n=e[i++])||n==L||n==a||r.push(n);return r},Q=function(t){for(var n,e=t===X,r=M(e?Y:w(t)),i=[],u=0;r.length>u;)!o(F,n=r[u++])||e&&!o(X,n)||i.push(F[n]);return i};D||(c((I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===X&&n.call(Y,e),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),U(this,t,S(1,e))};return i&&V&&U(X,t,{configurable:!0,set:n}),K(t)}).prototype,"toString",(function(){return this._k})),k.f=J,j.f=Z,e(54).f=x.f=q,e(34).f=H,e(53).f=Q,i&&!e(18)&&c(X,"propertyIsEnumerable",H,!0),v.f=function(t){return K(h(t))}),u(u.G+u.W+u.F*!D,{Symbol:I});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)h($[tt++]);for(var nt=P(h.store),et=0;nt.length>et;)y(nt[et++]);u(u.S+u.F*!D,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=I(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var n in B)if(B[n]===t)return n},useSetter:function(){V=!0},useSimple:function(){V=!1}}),u(u.S+u.F*!D,"Object",{create:function(t,n){return void 0===n?O(t):W(O(t),n)},defineProperty:Z,defineProperties:W,getOwnPropertyDescriptor:J,getOwnPropertyNames:q,getOwnPropertySymbols:Q}),A&&u(u.S+u.F*(!D||f((function(){var t=I();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(m(n)||void 0!==t)&&!z(t))return g(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!z(n))return n}),r[1]=n,C.apply(A,r)}}),I.prototype[N]||e(8)(I.prototype,N,I.prototype.valueOf),l(I,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(38),o=e(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(34),o=e(13),i=e(11),u=e(25),c=e(10),a=e(36),f=Object.getOwnPropertyDescriptor;n.f=e(3)?f:function(t,n){if(t=i(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r=e(57),o=e(58),i=e(16),u=e(11);t.exports=e(24)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(0)("unscopables"),o=Array.prototype;null==o[r]&&e(8)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(5),o=e(4),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(15)(Function.call,e(55).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n,e){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0});var e=function(){function n(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,r,o;return e=n,o=[{key:"add",value:function(t,n){return{X:t.X+n.X,Y:t.Y+n.Y}}},{key:"sub",value:function(t,n){return{X:t.X-n.X,Y:t.Y-n.Y}}}],(r=null)&&t(e.prototype,r),o&&t(e,o),n}();n.Vector=e,e.bottom={X:0,Y:-1},e.left={X:-1,Y:0},e.right={X:1,Y:0},e.top={X:0,Y:1}})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){var r=e(6);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(15),o=e(41),i=e(42),u=e(4),c=e(20),a=e(43),f={},s={};(n=t.exports=function(t,n,e,l,p){var h,v,y,d,g=p?function(){return t}:a(t),b=r(e,l,n?2:1),m=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(h=c(t.length);h>m;m++)if((d=n?b(u(v=t[m])[0],v[1]):b(t[m]))===f||d===s)return d}else for(y=g.call(t);!(v=y.next()).done;)if((d=o(y,b,v.value,n))===f||d===s)return d}).BREAK=f,n.RETURN=s},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,e){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(66);window.Game=t.Game})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){var r,o,i;o=[e(22),e(40),e(46),e(48),e(32),e(49),e(52),e(35)],void 0===(i="function"==typeof(r=function(t,r,o,i,u,c,a,f){"use strict";function s(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0});var p=e(80),h=e(83),v=e(89),y=e(95),d=function(){function t(n,e,r){var o=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameIsOver=!1,this.difficulty=0,this.init=function(){o.gameIsOver?alert("Score: ".concat(5*o.difficulty)):(setTimeout(o.init,Math.max(20,200-5*o.difficulty)),o.handleInput(),o.update(),o.render())},this.drawer=new p.Drawer(n,e,r),this.snake=new h.Snake(this.drawer.getRandomPosition()),this.bait=new y.Bait(this.drawer.getRandomPosition()),this.controller=new v.Controller(this.snake).bind(this.snake.moveBottom,38).bind(this.snake.moveLeft,37).bind(this.snake.moveRight,39).bind(this.snake.moveTop,40),window.addEventListener("keydown",(function(t){return o.controller.handleInput(t)})),this.init()}var n,e,r;return n=t,(e=[{key:"handleInput",value:function(){this.controller.applyLastInput()}},{key:"update",value:function(){this.handleBoundaries(this.snake),this.handleBaits(),this.handleSuicide()}},{key:"gameFinished",value:function(){if(this.snake.getPositions().length>=this.drawer.width*this.drawer.height)return console.log("H4rD K0r3"),this.gameIsOver=!0}},{key:"handleBoundaries",value:function(t){var n=t.position;n.X<0?t.position.X=this.drawer.width-1:n.X>=this.drawer.width&&(t.position.X=0),n.Y<0?t.position.Y=this.drawer.height-1:n.Y>=this.drawer.height&&(t.position.Y=0),t.child&&this.handleBoundaries(t.child)}},{key:"handleBaits",value:function(){var t=this.snake.position,n=this.bait.position;t.X===n.X&&t.Y===n.Y&&(this.snake.eat(this.bait),this.difficulty++,this.gameFinished()||(this.bait=this.generateBait()))}},{key:"generateBait",value:function(){var t;return new y.Bait((t=this.drawer).getRandomPosition.apply(t,s(this.snake.getPositions())))}},{key:"handleSuicide",value:function(){var t=this;this.gameIsOver=function(){for(var n=t.snake.position,e=t.snake.child;e;){if(e.position.X===n.X&&e.position.Y===n.Y)return!0;e=e.child}return!1}()}},{key:"render",value:function(){this.drawer.draw(this.snake,this.bait)}}])&&l(n.prototype,e),r&&l(n,r),t}();n.Game=d})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){var r=e(23),o=e(17);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";var r=e(26),o=e(13),i=e(21),u={};e(8)(u,e(0)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(2),o=e(4),i=e(19);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var r=e(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(11),o=e(20),i=e(39);t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(10),o=e(31),i=e(28)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(2),o=e(13);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){e(3)&&"g"!=/./g.flags&&e(2).f(RegExp.prototype,"flags",{configurable:!0,get:e(47)})},function(t,n,e){var r=e(19),o=e(53),i=e(34);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},function(t,n,e){var r=e(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(11),o=e(54).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,n,e){var r,o,i;o=[e(81)],void 0===(i="function"==typeof(r=function(t){"use strict";function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(n,e,r){var o=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=n,this.height=e,this.canvas=r,this.UNIT_SIZE=8,this.BACKGROUND_COLOR="#8bac0f",this.drawElement=function(t){var n=o.getContext();n.fillStyle=t.color,n.fillRect(t.position.X*o.UNIT_SIZE,t.position.Y*o.UNIT_SIZE,o.UNIT_SIZE,o.UNIT_SIZE),t.child&&o.drawElement(t.child)},this.canvas.width=this.width*this.UNIT_SIZE,this.canvas.height=this.height*this.UNIT_SIZE}var n,r,o;return n=t,(r=[{key:"getRandomPosition",value:function(){for(var t=this,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];for(var o=function(){return{X:Math.floor(Math.random()*t.width),Y:Math.floor(Math.random()*t.height)}},i=function(t){return e.some((function(n){return n.X===t.X&&n.Y===t.Y}))},u=o();i(u);)u=o();return u}},{key:"draw",value:function(){this.clear(),this.drawBackground();for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];n.forEach(this.drawElement)}},{key:"clear",value:function(){this.getContext().clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"drawBackground",value:function(){var t=this.getContext();t.fillStyle=this.BACKGROUND_COLOR,t.fillRect(0,0,this.canvas.width,this.canvas.height),t.fill()}},{key:"getContext",value:function(){return this.canvas.getContext("2d")}}])&&e(n.prototype,r),o&&e(n,o),t}();n.Drawer=r})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){var r=e(7);r(r.P,"Array",{fill:e(82)}),e(57)("fill")},function(t,n,e){"use strict";var r=e(31),o=e(39),i=e(20);t.exports=function(t){for(var n=r(this),e=i(n.length),u=arguments.length,c=o(u>1?arguments[1]:void 0,e),a=u>2?arguments[2]:void 0,f=void 0===a?e:o(a,e);f>c;)n[c++]=t;return n}},function(t,n,e){var r,o,i;o=[e(22),e(40),e(46),e(48),e(32),e(49),e(52),e(35),e(84),e(85)],void 0===(i="function"==typeof(r=function(t,r,o,i,u,c,a,f,s,l){"use strict";function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,n){return(g=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}Object.defineProperty(n,"__esModule",{value:!0});var b=e(87),m=e(60),w=function(t){function n(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#0f380f",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=y(this,d(n).call(this,t,r))).color=r,e.parent=o,e.newBorn=!1,e.onMove=function(){e.child&&e.child.moveBy(e.inertia)},e}var e,r,o;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&g(t,n)}(n,t),e=n,(r=[{key:"eat",value:function(t){!function(e){var r=m.Vector.sub(e.position,e.inertia);e.child=new n(r,t.color,e)}(function t(n){return n.child?t(n.child):n}(this))}},{key:"getPositions",value:function(){return this.child?[].concat(h(this.child.getPositions()),[this.position]):[this.position]}}])&&v(e.prototype,r),o&&v(e,o),n}(b.Movable);n.Snake=w})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){var r=e(7);r(r.S,"Object",{setPrototypeOf:e(59).set})},function(t,n,e){"use strict";e(86)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,n,e){var r=e(7),o=e(9),i=e(17),u=/"/g,c=function(t,n,e,r){var o=String(i(t)),c="<"+n;return""!==e&&(c+=" "+e+'="'+String(r).replace(u,"&quot;")+'"'),c+">"+o+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(c),r(r.P+r.F*o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},function(t,n,e){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(88);n.Movable=t.Movable})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(60),o=function(){function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{X:0,Y:0};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.position=t,this.color=e,this.inertia=r}var e,o,i;return e=n,(o=[{key:"moveBottom",value:function(){this.moveBy(r.Vector.bottom)}},{key:"moveLeft",value:function(){this.moveBy(r.Vector.left)}},{key:"moveRight",value:function(){this.moveBy(r.Vector.right)}},{key:"moveTop",value:function(){this.moveBy(r.Vector.top)}},{key:"moveBy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{X:0,Y:0};this.onMove(),this.position=r.Vector.add(this.position,t),this.inertia=t}}])&&t(e.prototype,o),i&&t(e,i),n}();n.Movable=o})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){var r,o,i;o=[e(35),e(56),e(32),e(22),e(90)],void 0===(i="function"==typeof(r=function(t,e,r,o,i){"use strict";function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.player=n,this.lastInput=function(){},this.keyMap=new Map}var n,e,r;return n=t,(e=[{key:"bind",value:function(t,n){return this.keyMap.set(n,t),this}},{key:"handleInput",value:function(t){this.lastInput=this.keyMap.get(t.keyCode),this.lastInput&&(this.lastInput=this.lastInput.bind(this.player))}},{key:"applyLastInput",value:function(){return this.lastInput()}}])&&u(n.prototype,e),r&&u(n,r),t}();n.Controller=c})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){"use strict";var r=e(91),o=e(64);t.exports=e(93)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},function(t,n,e){"use strict";var r=e(2).f,o=e(26),i=e(61),u=e(15),c=e(62),a=e(63),f=e(24),s=e(58),l=e(92),p=e(3),h=e(33).fastKey,v=e(64),y=p?"_s":"size",d=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,f){var s=t((function(t,r){c(t,s,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[y]=0,null!=r&&a(r,e,t[f],t)}));return i(s.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var e=v(this,n),r=d(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[y]--}return!!r},forEach:function(t){v(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!d(v(this,n),t)}}),p&&r(s.prototype,"size",{get:function(){return v(this,n)[y]}}),s},def:function(t,n,e){var r,o,i=d(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[y]++,"F"!==o&&(t._i[o]=i)),t},getEntry:d,setStrong:function(t,n,e){f(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))}),e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){"use strict";var r=e(1),o=e(2),i=e(3),u=e(0)("species");t.exports=function(t){var n=r[t];i&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){"use strict";var r=e(1),o=e(7),i=e(6),u=e(61),c=e(33),a=e(63),f=e(62),s=e(5),l=e(9),p=e(45),h=e(21),v=e(94);t.exports=function(t,n,e,y,d,g){var b=r[t],m=b,w=d?"set":"add",_=m&&m.prototype,S={},O=function(t){var n=_[t];i(_,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof m&&(g||_.forEach&&!l((function(){(new m).entries().next()})))){var x=new m,k=x[w](g?{}:-0,1)!=x,j=l((function(){x.has(1)})),P=p((function(t){new m(t)})),E=!g&&l((function(){for(var t=new m,n=5;n--;)t[w](n,n);return!t.has(-0)}));P||((m=n((function(n,e){f(n,m,t);var r=v(new b,n,m);return null!=e&&a(e,d,r[w],r),r}))).prototype=_,_.constructor=m),(j||E)&&(O("delete"),O("has"),d&&O("get")),(E||k)&&O(w),g&&_.clear&&delete _.clear}else m=y.getConstructor(n,t,d,w),u(m.prototype,e),c.NEED=!0;return h(m,t),S[t]=m,o(o.G+o.W+o.F*(m!=b),S),g||y.setStrong(m,t,d),m}},function(t,n,e){var r=e(5),o=e(59).set;t.exports=function(t,n,e){var i,u=n.constructor;return u!==e&&"function"==typeof u&&(i=u.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},function(t,n,e){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Bait=function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.position=n,this.color="#306230"}})?r.apply(n,o):r)||(t.exports=i)}]);
(function(e){function t(t){for(var n,u,c=t[0],l=t[1],i=t[2],f=0,s=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(s.length)s.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._v(" "+e._s(e.hello)+" ")])},a=[],u=(r("96cf"),r("1da1")),c=r("bc3a"),l=r.n(c),i={name:"App",data:function(){return{hello:"- no data -"}},methods:{helloWorld:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("/hello");case 3:r=t.sent,console.debug(r),e.hello=r.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},created:function(){this.helloWorld()}},p=i,f=r("2877"),s=Object(f["a"])(p,o,a,!1,null,null,null),d=s.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.8f69ac21.js.map
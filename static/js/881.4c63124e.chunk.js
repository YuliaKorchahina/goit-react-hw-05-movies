"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{3881:function(e,r,t){t.r(r);var n=t(5861),a=t(9439),c=t(7757),u=t.n(c),s=t(7689),i=t(2791),o=t(2007),p=t.n(o),f=t(1840),l=t(184),v=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],o=(0,i.useState)(!1),p=(0,a.Z)(o,2),v=p[0],h=p[1],d=(0,i.useState)(null),m=(0,a.Z)(d,2),x=m[0],g=m[1],w=(0,s.UO)().movieId;return(0,i.useEffect)((function(){if(w){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.f6)(w);case 3:r=e.sent,c(r.results),h(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[w]),(0,l.jsxs)(l.Fragment,{children:[0===t.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:" Unfortunately, we have no information"}),(0,l.jsx)("img",{src:"http://surl.li/fqulq",alt:"Not found hage",width:400})]}),t&&(0,l.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:[" Autor: ",t]}),(0,l.jsxs)("p",{children:["Review: ",n]})]})},r)})}))}),v&&(0,l.jsx)("p",{children:"...Loading"}),x&&(0,l.jsx)("p",{children:"Review load fail"})]})};r.default=v,v.protoTypes={id:p().string.isRequired,name:p().string.isRequired,character:p().number.isRequired}},1840:function(e,r,t){t.d(r,{$w:function(){return p},JN:function(){return s},Pg:function(){return o},f6:function(){return f},gH:function(){return i}});var n=t(5861),a=t(7757),c=t.n(a),u=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"af7806c242ad95763370aa39444155c5"}}),s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("trending/all/day");case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie",{params:{query:"".concat(r)}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(r));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(r,"/credits"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(r,"/reviews"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=881.4c63124e.chunk.js.map
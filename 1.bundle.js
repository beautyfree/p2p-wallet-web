(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{402:function(e,a,t){"use strict";t.r(a)},403:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(0),c=t.n(n),l=t(400),s=t(13);const o=Object(l.a)("div")({name:"Wrapper",class:"wrdya2m"}),r=Object(l.a)("div")({name:"Header",class:"h1vh307k"}),i=Object(l.a)("div")({name:"Title",class:"t1qfjroh"}),m=Object(l.a)("div")({name:"Description",class:"d8b2mdb"}),d=Object(l.a)("div")({name:"CloseWrapper",class:"c135gzia"}),u=Object(l.a)(s.c)({name:"CloseIcon",class:"c1whuod3"}),b=Object(l.a)("div")({name:"Content",class:"c12kmdhp"}),p=({title:e,description:a,close:t,children:n,className:l})=>c.a.createElement(o,{className:l},c.a.createElement(r,null,e?c.a.createElement(i,null,e):void 0,a?c.a.createElement(m,null,a):void 0,t?c.a.createElement(d,{onClick:t},c.a.createElement(u,{name:"close"})):void 0),n?c.a.createElement(b,null,n):void 0);t(402)},404:function(e,a,t){"use strict";t.r(a)},405:function(e,a,t){"use strict";t.r(a)},406:function(e,a,t){"use strict";t.r(a)},409:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return z}));var n=t(0),c=t.n(n),l=t(11),s=t(400),o=t(8),r=t(45),i=t(16),m=t(403),d=t(13),u=t(40),b=t(51),p=t.n(b),v=t(69);const j=Object(s.a)("div")({name:"Wrapper",class:"w2hsup5"}),E=Object(s.a)("div")({name:"ChevronWrapper",class:"cjk37vx"}),O=Object(s.a)(d.c)({name:"ChevronIcon",class:"c1aewuyh"}),k=Object(s.a)("div")({name:"Main",class:"m1x0i73s"}),f=Object(s.a)("div")({name:"Content",class:"c1lrr91s"}),w=Object(s.a)("div")({name:"InfoWrapper",class:"ifuaxgh"}),h=Object(s.a)("div")({name:"Info",class:"isx2g64"}),y=Object(s.a)("div")({name:"Top",class:"t10180ct"}),C=Object(s.a)("div")({name:"Bottom",class:"b1idmxl7"}),g=Object(s.a)("div")({name:"Additional",class:"a5vkidx"}),M=Object(s.a)("div")({name:"CopyWrapper",class:"cjtzobz"}),x=Object(s.a)(d.c)({name:"CopyIcon",class:"cr7kpio"}),W=({token:e,closeModal:a})=>{const t=Object(l.c)(),s=Object(n.useRef)(null),[o,r]=Object(n.useState)(!1),i=()=>{r(!o)};return c.a.createElement(j,null,c.a.createElement(E,{onClick:i,className:p()({opened:o})},c.a.createElement(O,{name:"chevron"})),c.a.createElement(k,null,c.a.createElement(f,null,c.a.createElement(w,{onClick:i},c.a.createElement(v.a,{symbol:e.symbol,size:44}),c.a.createElement(h,null,c.a.createElement(y,null,c.a.createElement("div",null,e.symbol)," ",c.a.createElement("div",null)),c.a.createElement(C,null,c.a.createElement("div",null,e.name)," ",c.a.createElement("div",null)))),c.a.createElement(d.b,{primary:!0,small:!0,onClick:async()=>{await t(Object(u.c)({token:e})),a()}},"Add")),c.a.createElement(g,{className:p()({opened:o})},c.a.createElement(d.d,{ref:s,title:e.symbol+" Mint Address",value:e.address.toBase58(),readOnly:!0,postfix:c.a.createElement(M,{onClick:()=>{const e=s.current;e&&(e.focus(),e.setSelectionRange(0,e.value.length),document.execCommand("copy"))}},c.a.createElement(x,{name:"copy"}))}))))};t(404);const A=Object(s.a)("div")({name:"Wrapper",class:"w1wf7dhi"}),B=({items:e,closeModal:a})=>e?c.a.createElement(A,null,e.map(e=>c.a.createElement(W,{key:e.address.toBase58(),token:e,closeModal:a}))):null;t(405);const I=Object(s.a)(m.a)({name:"WrapperModal",class:"wiqml5"}),S=Object(s.a)("div")({name:"ScrollableContainer",class:"s17ynaak"}),z=({close:e})=>{const a=Object(l.c)(),t=Object(l.d)(e=>e.wallet.cluster),s=Object(l.d)(e=>e.wallet.tokenAccounts.map(e=>i.a.from(e))),m=Object(l.d)(e=>e.global.availableTokens.map(e=>r.a.from(e))),b="mainnet-beta"===t,p=Object(n.useMemo)(()=>{if(!m)return;const e=new Set(s.map(e=>e.mint.address.toBase58()));return m.filter(a=>!e.has(a.address.toBase58()))},[m]);return c.a.createElement(I,{title:"Add coins",description:c.a.createElement(c.a.Fragment,null,"Add a token to your wallet. This will cost some SOL",b?null:c.a.createElement(c.a.Fragment,null," ",c.a.createElement(d.b,{link:!0,onClick:()=>{a(Object(u.d)({amount:1e3,decimals:2,initialAccount:new o.a}))}},"Mint test token"))),close:e},(null==p?void 0:p.length)?c.a.createElement(S,null,c.a.createElement(B,{items:p,closeModal:()=>{e()}})):void 0)};t(406)}}]);
//# sourceMappingURL=1.bundle.js.map
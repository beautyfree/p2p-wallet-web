(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{672:function(e,t,a){"use strict";a.r(t)},676:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var n=a(0),l=a.n(n),c=a(9),r=a(666),s=a(21),o=a(118),m=a.n(o),u=a(115),i=a(75),d=a(30),b=a(64),E=a(10),j=a(116),v=a(236),O=a(58);const p=Object(r.a)("div")({name:"Wrapper",class:"w1tifgs8"}),f=Object(r.a)("div")({name:"Header",class:"hyjm7t0"}),h=Object(r.a)("div")({name:"Title",class:"t1ge91kj"}),y=Object(r.a)("div")({name:"Date",class:"d19v5yq5"}),k=Object(r.a)("div")({name:"CloseWrapper",class:"c4q92ii"}),T=Object(r.a)(E.c)({name:"CloseIcon",class:"cn2thh8"}),w=Object(r.a)("div")({name:"BlockWrapper",class:"b1d2ax1y"}),A=Object(r.a)(E.c)({name:"BlockIcon",class:"b14kd5e9"}),C=Object(r.a)("div")({name:"Content",class:"c1qeiy73"}),x=Object(r.a)("div")({name:"StatusWrapper",class:"swa4296"}),W=Object(r.a)("div")({name:"ValueCurrency",class:"v11bohjs"}),F=Object(r.a)("div")({name:"ValueOriginal",class:"viwc0bt"}),g=Object(r.a)("div")({name:"Status",class:"s1n4mogn"}),q=Object(r.a)("div")({name:"FieldsWrapper",class:"f9aqzce"}),B=Object(r.a)("div")({name:"FieldWrapper",class:"fuy8m85"}),V=Object(r.a)(B)({name:"FieldRowWrapper",class:"fnug4ak"}),z=Object(r.a)("div")({name:"ColumnWrapper",class:"cz23y8"}),I=Object(r.a)("div")({name:"FieldInfo",class:"f1qhcojt"}),L=Object(r.a)("div")({name:"FieldTitle",class:"fehvxtz"}),N=Object(r.a)("div")({name:"FieldValue",class:"f1ylh4b7"}),S=Object(r.a)("div")({name:"AddressWrapper",class:"a1m0q1fj"}),D=Object(r.a)("div")({name:"AddressTitle",class:"a12n6awn"}),J=Object(r.a)("div")({name:"AddressValue",class:"a1qbnu0a"}),H=Object(r.a)(E.c)({name:"CopyIcon",class:"c1a00mox"}),M=Object(r.a)("div")({name:"CopyWrapper",class:"c1y4yubb"}),R=Object(r.a)("div")({name:"Footer",class:"f1yy0d74"}),_=Object(r.a)(E.b)({name:"ButtonExplorer",class:"b69tfnv"}),G=({signature:e,close:t})=>{var a,r;const o=Object(c.c)(),E=Object(c.d)(t=>t.transaction.items[e]&&u.a.from(t.transaction.items[e])),G=Object(c.d)(e=>e.wallet.cluster),K=Object(c.d)(e=>e.wallet.tokenAccounts);Object(n.useEffect)(()=>{const t=async()=>{Object(s.e)(await o(Object(j.b)(e)))||setTimeout(t,3e3)};E||t()},[e]);const P=Object(n.useMemo)(()=>K.find(e=>{var t;return e.address===(null===(t=E.short.destination)||void 0===t?void 0:t.toBase58())}),[E.short.destination,K]);if(!E)return null;const Q=E.timestamp?m.a.unix(E.timestamp).format("LLL"):E.slot+" SLOT";return l.a.createElement(p,null,l.a.createElement(f,null,l.a.createElement(h,null,E.short.type),l.a.createElement(y,{title:E.slot+" SLOT"},Q),l.a.createElement(k,{onClick:t},l.a.createElement(T,{name:"close"})),l.a.createElement(w,null,l.a.createElement(A,{name:P?"bottom":"top"}))),l.a.createElement(C,null,l.a.createElement(x,null,l.a.createElement(W,null,l.a.createElement(i.a,{prefix:P?"+":"-",symbol:null===(a=E.short.sourceTokenAccount)||void 0===a?void 0:a.mint.symbol,value:E.short.amount})),l.a.createElement(F,null,P?"+":"-"," ",E.short.amount.toNumber()," ",null===(r=E.short.sourceTokenAccount)||void 0===r?void 0:r.mint.symbol),l.a.createElement(g,null,"Completed")),l.a.createElement(q,null,l.a.createElement(V,null,E.short.sourceTokenAccount?l.a.createElement(z,null,l.a.createElement(L,null,"From"),l.a.createElement(I,null,l.a.createElement(b.a,{symbol:E.short.sourceTokenAccount.mint.symbol,size:48}),l.a.createElement(S,null,l.a.createElement(D,null,E.short.sourceTokenAccount.mint.symbol),l.a.createElement(J,null,Object(O.a)(E.short.sourceTokenAccount.address.toBase58()))))):void 0,E.short.destinationTokenAccount?l.a.createElement(z,null,l.a.createElement(L,null,"To"),l.a.createElement(I,null,l.a.createElement(b.a,{symbol:E.short.destinationTokenAccount.mint.symbol,size:48}),l.a.createElement(S,null,l.a.createElement(D,null,E.short.destinationTokenAccount.mint.symbol),l.a.createElement(J,null,Object(O.a)(E.short.destinationTokenAccount.address.toBase58()))))):void 0),l.a.createElement(B,null,l.a.createElement(L,null,"Date"),l.a.createElement(N,null,Q)),l.a.createElement(B,null,l.a.createElement(L,null,"Amount"),l.a.createElement(N,null,E.short.amount.toNumber())),l.a.createElement(B,null,l.a.createElement(L,null,"Value"),l.a.createElement(N,null,E.short.amount.toNumber())),E.meta?l.a.createElement(B,null,l.a.createElement(L,null,"Fee"),l.a.createElement(N,null,E.meta.fee," lamports")):null,l.a.createElement(B,null,l.a.createElement(L,null,"Block number"),l.a.createElement(N,null,"#",E.slot)),l.a.createElement(B,null,l.a.createElement(L,null,"Transaction ID"),l.a.createElement(N,null,e," ",l.a.createElement(M,{onClick:(U=e,()=>{try{navigator.clipboard.writeText(U),d.b.info("Copied to buffer!")}catch(e){console.error(e)}})},l.a.createElement(H,{name:"copy"})))))),l.a.createElement(R,null,l.a.createElement("a",{href:Object(v.a)("tx",e,G),target:"_blank",rel:"noopener noreferrer noindex",className:"button"},l.a.createElement(_,{secondary:!0},"View in blockchain explorer"))));var U};a(672)}}]);
//# sourceMappingURL=3.bundle.js.map
import{C as lt,D as _e,S as oe,i as ie,s as ne,E as z,k as F,a as O,l as A,m as B,c as M,h as b,n,b as T,F as P,g as y,v as j,d as L,f as q,G,H as U,I as W,J as Ke,K as x,L as $,M as X,N as be,q as Y,r as J,e as me,O as je,P as rt,Q as at,R as st,T as ke,U as ce,V as ot,w as ve,W as te,X as it,y as le,z as re,A as ae,B as se,Y as de,Z as he,_ as nt}from"../chunks/index.29c29c83.js";import{w as ft}from"../chunks/index.e11b10cb.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.871a42a0.js";import{e as ut}from"../chunks/singletons.a6dfdd76.js";import{p as ct}from"../chunks/stores.aef0d681.js";const dt=!0,ht=!1,cl=Object.freeze(Object.defineProperty({__proto__:null,prerender:dt,ssr:ht},Symbol.toStringTag,{value:"Module"}));function bt(){const{subscribe:a,set:e,update:t}=ft({});return{subscribe:a,set:e,update:t,open:s=>t(()=>({open:!0,...s})),close:()=>t(s=>(s.open=!1,s))}}const Z=bt();function gt(a,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let s,i;function l(c){c.shiftKey&&c.code==="Tab"&&(c.preventDefault(),i.focus())}function r(c){!c.shiftKey&&c.code==="Tab"&&(c.preventDefault(),s.focus())}const o=c=>{if(e===!1)return;const v=Array.from(a.querySelectorAll(t));v.length&&(s=v[0],i=v[v.length-1],c||s.focus(),s.addEventListener("keydown",l),i.addEventListener("keydown",r))};o(!1);function f(){s&&s.removeEventListener("keydown",l),i&&i.removeEventListener("keydown",r)}const h=(c,v)=>(c.length&&(f(),o(!0)),v),m=new MutationObserver(h);return m.observe(a,{childList:!0,subtree:!0}),{update(c){e=c,c?o(!1):f()},destroy(){f(),m.disconnect()}}}function _t(a){const e=a-1;return e*e*e+1}function Ee(a,{delay:e=0,duration:t=400,easing:s=lt}={}){const i=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:s,css:l=>`opacity: ${l*i}`}}function ye(a,{delay:e=0,duration:t=400,easing:s=_t,x:i=0,y:l=0,opacity:r=0}={}){const o=getComputedStyle(a),f=+o.opacity,h=o.transform==="none"?"":o.transform,m=f*(1-r),[c,v]=_e(i),[_,w]=_e(l);return{delay:e,duration:t,easing:s,css:(D,d)=>`
			transform: ${h} translate(${(1-D)*c}${v}, ${(1-D)*_}${w});
			opacity: ${f-m*d}`}}const mt=a=>({}),we=a=>({}),kt=a=>({}),De=a=>({}),vt=a=>({}),Se=a=>({});function pe(a){let e,t,s;const i=a[22].lead,l=z(i,a,a[21],Se);return{c(){e=F("div"),l&&l.c(),this.h()},l(r){e=A(r,"DIV",{class:!0});var o=B(e);l&&l.l(o),o.forEach(b),this.h()},h(){n(e,"class",t="app-bar-slot-lead "+a[4])},m(r,o){T(r,e,o),l&&l.m(e,null),s=!0},p(r,o){l&&l.p&&(!s||o&2097152)&&G(l,i,r,r[21],s?W(i,r[21],o,vt):U(r[21]),Se),(!s||o&16&&t!==(t="app-bar-slot-lead "+r[4]))&&n(e,"class",t)},i(r){s||(y(l,r),s=!0)},o(r){L(l,r),s=!1},d(r){r&&b(e),l&&l.d(r)}}}function He(a){let e,t,s;const i=a[22].trail,l=z(i,a,a[21],De);return{c(){e=F("div"),l&&l.c(),this.h()},l(r){e=A(r,"DIV",{class:!0});var o=B(e);l&&l.l(o),o.forEach(b),this.h()},h(){n(e,"class",t="app-bar-slot-trail "+a[2])},m(r,o){T(r,e,o),l&&l.m(e,null),s=!0},p(r,o){l&&l.p&&(!s||o&2097152)&&G(l,i,r,r[21],s?W(i,r[21],o,kt):U(r[21]),De),(!s||o&4&&t!==(t="app-bar-slot-trail "+r[2]))&&n(e,"class",t)},i(r){s||(y(l,r),s=!0)},o(r){L(l,r),s=!1},d(r){r&&b(e),l&&l.d(r)}}}function Le(a){let e,t,s;const i=a[22].headline,l=z(i,a,a[21],we);return{c(){e=F("div"),l&&l.c(),this.h()},l(r){e=A(r,"DIV",{class:!0});var o=B(e);l&&l.l(o),o.forEach(b),this.h()},h(){n(e,"class",t="app-bar-row-headline "+a[5])},m(r,o){T(r,e,o),l&&l.m(e,null),s=!0},p(r,o){l&&l.p&&(!s||o&2097152)&&G(l,i,r,r[21],s?W(i,r[21],o,mt):U(r[21]),we),(!s||o&32&&t!==(t="app-bar-row-headline "+r[5]))&&n(e,"class",t)},i(r){s||(y(l,r),s=!0)},o(r){L(l,r),s=!1},d(r){r&&b(e),l&&l.d(r)}}}function Et(a){let e,t,s,i,l,r,o,f,h,m,c=a[8].lead&&pe(a);const v=a[22].default,_=z(v,a,a[21],null);let w=a[8].trail&&He(a),D=a[8].headline&&Le(a);return{c(){e=F("div"),t=F("div"),c&&c.c(),s=O(),i=F("div"),_&&_.c(),r=O(),w&&w.c(),f=O(),D&&D.c(),this.h()},l(d){e=A(d,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var g=B(e);t=A(g,"DIV",{class:!0});var E=B(t);c&&c.l(E),s=M(E),i=A(E,"DIV",{class:!0});var V=B(i);_&&_.l(V),V.forEach(b),r=M(E),w&&w.l(E),E.forEach(b),f=M(g),D&&D.l(g),g.forEach(b),this.h()},h(){n(i,"class",l="app-bar-slot-default "+a[3]),n(t,"class",o="app-bar-row-main "+a[6]),n(e,"class",h="app-bar "+a[7]),n(e,"data-testid","app-bar"),n(e,"role","toolbar"),n(e,"aria-label",a[0]),n(e,"aria-labelledby",a[1])},m(d,g){T(d,e,g),P(e,t),c&&c.m(t,null),P(t,s),P(t,i),_&&_.m(i,null),P(t,r),w&&w.m(t,null),P(e,f),D&&D.m(e,null),m=!0},p(d,[g]){d[8].lead?c?(c.p(d,g),g&256&&y(c,1)):(c=pe(d),c.c(),y(c,1),c.m(t,s)):c&&(j(),L(c,1,1,()=>{c=null}),q()),_&&_.p&&(!m||g&2097152)&&G(_,v,d,d[21],m?W(v,d[21],g,null):U(d[21]),null),(!m||g&8&&l!==(l="app-bar-slot-default "+d[3]))&&n(i,"class",l),d[8].trail?w?(w.p(d,g),g&256&&y(w,1)):(w=He(d),w.c(),y(w,1),w.m(t,null)):w&&(j(),L(w,1,1,()=>{w=null}),q()),(!m||g&64&&o!==(o="app-bar-row-main "+d[6]))&&n(t,"class",o),d[8].headline?D?(D.p(d,g),g&256&&y(D,1)):(D=Le(d),D.c(),y(D,1),D.m(e,null)):D&&(j(),L(D,1,1,()=>{D=null}),q()),(!m||g&128&&h!==(h="app-bar "+d[7]))&&n(e,"class",h),(!m||g&1)&&n(e,"aria-label",d[0]),(!m||g&2)&&n(e,"aria-labelledby",d[1])},i(d){m||(y(c),y(_,d),y(w),y(D),m=!0)},o(d){L(c),L(_,d),L(w),L(D),m=!1},d(d){d&&b(e),c&&c.d(),_&&_.d(d),w&&w.d(),D&&D.d()}}}const yt="flex flex-col",wt="grid items-center",Dt="",St="flex-none flex justify-between items-center",pt="flex-auto",Ht="flex-none flex items-center space-x-4";function Lt(a,e,t){let s,i,l,r,o,f,{$$slots:h={},$$scope:m}=e;const c=Ke(h);let{background:v="bg-surface-100-800-token"}=e,{border:_=""}=e,{padding:w="p-4"}=e,{shadow:D=""}=e,{spacing:d="space-y-4"}=e,{gridColumns:g="grid-cols-[auto_1fr_auto]"}=e,{gap:E="gap-4"}=e,{regionRowMain:V=""}=e,{regionRowHeadline:C=""}=e,{slotLead:H=""}=e,{slotDefault:R=""}=e,{slotTrail:k=""}=e,{label:p=""}=e,{labelledby:I=""}=e;return a.$$set=S=>{t(23,e=x(x({},e),$(S))),"background"in S&&t(9,v=S.background),"border"in S&&t(10,_=S.border),"padding"in S&&t(11,w=S.padding),"shadow"in S&&t(12,D=S.shadow),"spacing"in S&&t(13,d=S.spacing),"gridColumns"in S&&t(14,g=S.gridColumns),"gap"in S&&t(15,E=S.gap),"regionRowMain"in S&&t(16,V=S.regionRowMain),"regionRowHeadline"in S&&t(17,C=S.regionRowHeadline),"slotLead"in S&&t(18,H=S.slotLead),"slotDefault"in S&&t(19,R=S.slotDefault),"slotTrail"in S&&t(20,k=S.slotTrail),"label"in S&&t(0,p=S.label),"labelledby"in S&&t(1,I=S.labelledby),"$$scope"in S&&t(21,m=S.$$scope)},a.$$.update=()=>{t(7,s=`${yt} ${v} ${_} ${d} ${w} ${D} ${e.class??""}`),a.$$.dirty&114688&&t(6,i=`${wt} ${g} ${E} ${V}`),a.$$.dirty&131072&&t(5,l=`${Dt} ${C}`),a.$$.dirty&262144&&t(4,r=`${St} ${H}`),a.$$.dirty&524288&&t(3,o=`${pt} ${R}`),a.$$.dirty&1048576&&t(2,f=`${Ht} ${k}`)},e=$(e),[p,I,f,o,r,l,i,s,c,v,_,w,D,d,g,E,V,C,H,R,k,m,h]}class Rt extends oe{constructor(e){super(),ie(this,e,Lt,Et,ne,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const It=a=>({}),Re=a=>({}),Pt=a=>({}),Ie=a=>({}),Bt=a=>({}),Pe=a=>({}),Ft=a=>({}),Be=a=>({}),At=a=>({}),Fe=a=>({}),Ct=a=>({}),Ae=a=>({});function Ce(a){let e,t,s;const i=a[18].header,l=z(i,a,a[17],Ae);return{c(){e=F("header"),l&&l.c(),this.h()},l(r){e=A(r,"HEADER",{id:!0,class:!0});var o=B(e);l&&l.l(o),o.forEach(b),this.h()},h(){n(e,"id","shell-header"),n(e,"class",t="flex-none "+a[7])},m(r,o){T(r,e,o),l&&l.m(e,null),s=!0},p(r,o){l&&l.p&&(!s||o&131072)&&G(l,i,r,r[17],s?W(i,r[17],o,Ct):U(r[17]),Ae),(!s||o&128&&t!==(t="flex-none "+r[7]))&&n(e,"class",t)},i(r){s||(y(l,r),s=!0)},o(r){L(l,r),s=!1},d(r){r&&b(e),l&&l.d(r)}}}function Te(a){let e,t;const s=a[18].sidebarLeft,i=z(s,a,a[17],Fe);return{c(){e=F("aside"),i&&i.c(),this.h()},l(l){e=A(l,"ASIDE",{id:!0,class:!0});var r=B(e);i&&i.l(r),r.forEach(b),this.h()},h(){n(e,"id","sidebar-left"),n(e,"class",a[6])},m(l,r){T(l,e,r),i&&i.m(e,null),t=!0},p(l,r){i&&i.p&&(!t||r&131072)&&G(i,s,l,l[17],t?W(s,l[17],r,At):U(l[17]),Fe),(!t||r&64)&&n(e,"class",l[6])},i(l){t||(y(i,l),t=!0)},o(l){L(i,l),t=!1},d(l){l&&b(e),i&&i.d(l)}}}function Ve(a){let e,t,s;const i=a[18].pageHeader,l=z(i,a,a[17],Be),r=l||Tt();return{c(){e=F("header"),r&&r.c(),this.h()},l(o){e=A(o,"HEADER",{id:!0,class:!0});var f=B(e);r&&r.l(f),f.forEach(b),this.h()},h(){n(e,"id","page-header"),n(e,"class",t="flex-none "+a[4])},m(o,f){T(o,e,f),r&&r.m(e,null),s=!0},p(o,f){l&&l.p&&(!s||f&131072)&&G(l,i,o,o[17],s?W(i,o[17],f,Ft):U(o[17]),Be),(!s||f&16&&t!==(t="flex-none "+o[4]))&&n(e,"class",t)},i(o){s||(y(r,o),s=!0)},o(o){L(r,o),s=!1},d(o){o&&b(e),r&&r.d(o)}}}function Tt(a){let e;return{c(){e=Y("(slot:header)")},l(t){e=J(t,"(slot:header)")},m(t,s){T(t,e,s)},d(t){t&&b(e)}}}function Oe(a){let e,t,s;const i=a[18].pageFooter,l=z(i,a,a[17],Pe),r=l||Vt();return{c(){e=F("footer"),r&&r.c(),this.h()},l(o){e=A(o,"FOOTER",{id:!0,class:!0});var f=B(e);r&&r.l(f),f.forEach(b),this.h()},h(){n(e,"id","page-footer"),n(e,"class",t="flex-none "+a[2])},m(o,f){T(o,e,f),r&&r.m(e,null),s=!0},p(o,f){l&&l.p&&(!s||f&131072)&&G(l,i,o,o[17],s?W(i,o[17],f,Bt):U(o[17]),Pe),(!s||f&4&&t!==(t="flex-none "+o[2]))&&n(e,"class",t)},i(o){s||(y(r,o),s=!0)},o(o){L(r,o),s=!1},d(o){o&&b(e),r&&r.d(o)}}}function Vt(a){let e;return{c(){e=Y("(slot:footer)")},l(t){e=J(t,"(slot:footer)")},m(t,s){T(t,e,s)},d(t){t&&b(e)}}}function Me(a){let e,t;const s=a[18].sidebarRight,i=z(s,a,a[17],Ie);return{c(){e=F("aside"),i&&i.c(),this.h()},l(l){e=A(l,"ASIDE",{id:!0,class:!0});var r=B(e);i&&i.l(r),r.forEach(b),this.h()},h(){n(e,"id","sidebar-right"),n(e,"class",a[5])},m(l,r){T(l,e,r),i&&i.m(e,null),t=!0},p(l,r){i&&i.p&&(!t||r&131072)&&G(i,s,l,l[17],t?W(s,l[17],r,Pt):U(l[17]),Ie),(!t||r&32)&&n(e,"class",l[5])},i(l){t||(y(i,l),t=!0)},o(l){L(i,l),t=!1},d(l){l&&b(e),i&&i.d(l)}}}function Ne(a){let e,t,s;const i=a[18].footer,l=z(i,a,a[17],Re);return{c(){e=F("footer"),l&&l.c(),this.h()},l(r){e=A(r,"FOOTER",{id:!0,class:!0});var o=B(e);l&&l.l(o),o.forEach(b),this.h()},h(){n(e,"id","shell-footer"),n(e,"class",t="flex-none "+a[1])},m(r,o){T(r,e,o),l&&l.m(e,null),s=!0},p(r,o){l&&l.p&&(!s||o&131072)&&G(l,i,r,r[17],s?W(i,r[17],o,It):U(r[17]),Re),(!s||o&2&&t!==(t="flex-none "+r[1]))&&n(e,"class",t)},i(r){s||(y(l,r),s=!0)},o(r){L(l,r),s=!1},d(r){r&&b(e),l&&l.d(r)}}}function Ot(a){let e,t,s,i,l,r,o,f,h,m,c,v,_,w,D,d=a[9].header&&Ce(a),g=a[9].sidebarLeft&&Te(a),E=a[9].pageHeader&&Ve(a);const V=a[18].default,C=z(V,a,a[17],null);let H=a[9].pageFooter&&Oe(a),R=a[9].sidebarRight&&Me(a),k=a[9].footer&&Ne(a);return{c(){e=F("div"),d&&d.c(),t=O(),s=F("div"),g&&g.c(),i=O(),l=F("div"),E&&E.c(),r=O(),o=F("main"),C&&C.c(),h=O(),H&&H.c(),c=O(),R&&R.c(),v=O(),k&&k.c(),this.h()},l(p){e=A(p,"DIV",{id:!0,class:!0,"data-testid":!0});var I=B(e);d&&d.l(I),t=M(I),s=A(I,"DIV",{class:!0});var S=B(s);g&&g.l(S),i=M(S),l=A(S,"DIV",{id:!0,class:!0});var K=B(l);E&&E.l(K),r=M(K),o=A(K,"MAIN",{id:!0,class:!0});var Q=B(o);C&&C.l(Q),Q.forEach(b),h=M(K),H&&H.l(K),K.forEach(b),c=M(S),R&&R.l(S),S.forEach(b),v=M(I),k&&k.l(I),I.forEach(b),this.h()},h(){n(o,"id","page-content"),n(o,"class",f="flex-auto "+a[3]),n(l,"id","page"),n(l,"class",m=a[0]+" "+ze),n(s,"class","flex-auto "+Nt),n(e,"id","appShell"),n(e,"class",a[8]),n(e,"data-testid","app-shell")},m(p,I){T(p,e,I),d&&d.m(e,null),P(e,t),P(e,s),g&&g.m(s,null),P(s,i),P(s,l),E&&E.m(l,null),P(l,r),P(l,o),C&&C.m(o,null),P(l,h),H&&H.m(l,null),P(s,c),R&&R.m(s,null),P(e,v),k&&k.m(e,null),_=!0,w||(D=X(l,"scroll",a[19]),w=!0)},p(p,[I]){p[9].header?d?(d.p(p,I),I&512&&y(d,1)):(d=Ce(p),d.c(),y(d,1),d.m(e,t)):d&&(j(),L(d,1,1,()=>{d=null}),q()),p[9].sidebarLeft?g?(g.p(p,I),I&512&&y(g,1)):(g=Te(p),g.c(),y(g,1),g.m(s,i)):g&&(j(),L(g,1,1,()=>{g=null}),q()),p[9].pageHeader?E?(E.p(p,I),I&512&&y(E,1)):(E=Ve(p),E.c(),y(E,1),E.m(l,r)):E&&(j(),L(E,1,1,()=>{E=null}),q()),C&&C.p&&(!_||I&131072)&&G(C,V,p,p[17],_?W(V,p[17],I,null):U(p[17]),null),(!_||I&8&&f!==(f="flex-auto "+p[3]))&&n(o,"class",f),p[9].pageFooter?H?(H.p(p,I),I&512&&y(H,1)):(H=Oe(p),H.c(),y(H,1),H.m(l,null)):H&&(j(),L(H,1,1,()=>{H=null}),q()),(!_||I&1&&m!==(m=p[0]+" "+ze))&&n(l,"class",m),p[9].sidebarRight?R?(R.p(p,I),I&512&&y(R,1)):(R=Me(p),R.c(),y(R,1),R.m(s,null)):R&&(j(),L(R,1,1,()=>{R=null}),q()),p[9].footer?k?(k.p(p,I),I&512&&y(k,1)):(k=Ne(p),k.c(),y(k,1),k.m(e,null)):k&&(j(),L(k,1,1,()=>{k=null}),q()),(!_||I&256)&&n(e,"class",p[8])},i(p){_||(y(d),y(g),y(E),y(C,p),y(H),y(R),y(k),_=!0)},o(p){L(d),L(g),L(E),L(C,p),L(H),L(R),L(k),_=!1},d(p){p&&b(e),d&&d.d(),g&&g.d(),E&&E.d(),C&&C.d(p),H&&H.d(),R&&R.d(),k&&k.d(),w=!1,D()}}}const Mt="w-full h-full flex flex-col overflow-hidden",Nt="w-full h-full flex overflow-hidden",ze="flex-1 overflow-x-hidden flex flex-col",zt="flex-none overflow-x-hidden overflow-y-auto",Gt="flex-none overflow-x-hidden overflow-y-auto";function Ut(a,e,t){let s,i,l,r,o,f,h,m,{$$slots:c={},$$scope:v}=e;const _=Ke(c);let{regionPage:w=""}=e,{slotHeader:D="z-10"}=e,{slotSidebarLeft:d="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:E=""}=e,{slotPageContent:V=""}=e,{slotPageFooter:C=""}=e,{slotFooter:H=""}=e;function R(k){be.call(this,a,k)}return a.$$set=k=>{t(20,e=x(x({},e),$(k))),"regionPage"in k&&t(0,w=k.regionPage),"slotHeader"in k&&t(10,D=k.slotHeader),"slotSidebarLeft"in k&&t(11,d=k.slotSidebarLeft),"slotSidebarRight"in k&&t(12,g=k.slotSidebarRight),"slotPageHeader"in k&&t(13,E=k.slotPageHeader),"slotPageContent"in k&&t(14,V=k.slotPageContent),"slotPageFooter"in k&&t(15,C=k.slotPageFooter),"slotFooter"in k&&t(16,H=k.slotFooter),"$$scope"in k&&t(17,v=k.$$scope)},a.$$.update=()=>{t(8,s=`${Mt} ${e.class??""}`),a.$$.dirty&1024&&t(7,i=`${D}`),a.$$.dirty&2048&&t(6,l=`${zt} ${d}`),a.$$.dirty&4096&&t(5,r=`${Gt} ${g}`),a.$$.dirty&8192&&t(4,o=`${E}`),a.$$.dirty&16384&&t(3,f=`${V}`),a.$$.dirty&32768&&t(2,h=`${C}`),a.$$.dirty&65536&&t(1,m=`${H}`)},e=$(e),[w,m,h,f,o,r,l,i,s,_,D,d,g,E,V,C,H,v,c,R]}class Wt extends oe{constructor(e){super(),ie(this,e,Ut,Ot,ne,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}const{window:Kt}=at;function Ge(a){let e,t,s,i,l,r,o,f,h;const m=a[29].default,c=z(m,a,a[28],null);return{c(){e=F("div"),t=F("div"),c&&c.c(),this.h()},l(v){e=A(v,"DIV",{class:!0,"data-testid":!0});var _=B(e);t=A(_,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-labelledby":!0,"aria-describedby":!0});var w=B(t);c&&c.l(w),w.forEach(b),_.forEach(b),this.h()},h(){n(t,"class",s="drawer "+a[6]),n(t,"data-testid","drawer"),n(t,"role","dialog"),n(t,"aria-modal","true"),n(t,"aria-labelledby",a[1]),n(t,"aria-describedby",a[2]),n(e,"class",l="drawer-backdrop "+a[7]),n(e,"data-testid","drawer-backdrop")},m(v,_){T(v,e,_),P(e,t),c&&c.m(t,null),a[33](t),a[34](e),o=!0,f||(h=[X(e,"mousedown",a[9]),X(e,"touchstart",a[30]),X(e,"touchend",a[31]),X(e,"keypress",a[32]),st(gt.call(null,e,!0))],f=!0)},p(v,_){a=v,c&&c.p&&(!o||_[0]&268435456)&&G(c,m,a,a[28],o?W(m,a[28],_,null):U(a[28]),null),(!o||_[0]&64&&s!==(s="drawer "+a[6]))&&n(t,"class",s),(!o||_[0]&2)&&n(t,"aria-labelledby",a[1]),(!o||_[0]&4)&&n(t,"aria-describedby",a[2]),(!o||_[0]&128&&l!==(l="drawer-backdrop "+a[7]))&&n(e,"class",l)},i(v){o||(y(c,v),v&&ke(()=>{o&&(i||(i=ce(t,ye,{x:a[5].x,y:a[5].y,duration:a[0]},!0)),i.run(1))}),v&&ke(()=>{o&&(r||(r=ce(e,Ee,{duration:a[0]},!0)),r.run(1))}),o=!0)},o(v){L(c,v),v&&(i||(i=ce(t,ye,{x:a[5].x,y:a[5].y,duration:a[0]},!1)),i.run(0)),v&&(r||(r=ce(e,Ee,{duration:a[0]},!1)),r.run(0)),o=!1},d(v){v&&b(e),c&&c.d(v),a[33](null),v&&i&&i.end(),a[34](null),v&&r&&r.end(),f=!1,ot(h)}}}function jt(a){let e,t,s,i,l=a[8].open===!0&&Ge(a);return{c(){l&&l.c(),e=me()},l(r){l&&l.l(r),e=me()},m(r,o){l&&l.m(r,o),T(r,e,o),t=!0,s||(i=X(Kt,"keydown",a[10]),s=!0)},p(r,o){r[8].open===!0?l?(l.p(r,o),o[0]&256&&y(l,1)):(l=Ge(r),l.c(),y(l,1),l.m(e.parentNode,e)):l&&(j(),L(l,1,1,()=>{l=null}),q())},i(r){t||(y(l),t=!0)},o(r){L(l),t=!1},d(r){l&&l.d(r),r&&b(e),s=!1,i()}}}const qt="fixed top-0 left-0 right-0 bottom-0 flex",Xt="overflow-y-auto transition-transform";function Yt(a,e,t){let s,i,l,r,o,f,h;je(a,Z,u=>t(8,h=u));let{$$slots:m={},$$scope:c}=e;const v=rt();let{position:_="left"}=e,{duration:w=150}=e,{bgBackdrop:D="bg-surface-backdrop-token"}=e,{blur:d="backdrop-blur-xs"}=e,{padding:g=""}=e,{bgDrawer:E="bg-surface-100-800-token"}=e,{border:V=""}=e,{rounded:C=""}=e,{shadow:H="shadow-xl"}=e,{width:R=""}=e,{height:k=""}=e,{zIndex:p="z-40"}=e,{regionBackdrop:I=""}=e,{regionDrawer:S=""}=e,{labelledby:K=""}=e,{describedby:Q=""}=e;const fe={top:{alignment:"items-start",width:"w-full",height:"h-[50%]",rounded:"rounded-bl-container-token rounded-br-container-token"},bottom:{alignment:"items-end",width:"w-full",height:" h-[50%]",rounded:"rounded-tl-container-token rounded-tr-container-token"},left:{alignment:"justify-start",width:"w-[90%]",height:"h-full",rounded:"rounded-tr-container-token rounded-br-container-token"},right:{alignment:"justify-end",width:"w-[90%]",height:"h-full",rounded:"rounded-tl-container-token rounded-bl-container-token"}};let ue,ge,ee={x:0,y:0};const N={position:_,duration:w,bgBackdrop:D,blur:d,padding:g,bgDrawer:E,border:V,rounded:C,shadow:H,width:R,height:k,labelledby:K,describedby:Q,regionBackdrop:I,regionDrawer:S};function Xe(u){t(11,_=u.position||N.position),t(0,w=u.duration||N.duration),t(12,D=u.bgBackdrop||N.bgBackdrop),t(13,d=u.blur||N.blur),t(14,g=u.padding||N.padding),t(15,E=u.bgDrawer||N.bgDrawer),t(16,V=u.border||N.border),t(17,C=u.rounded||N.rounded),t(18,H=u.shadow||N.shadow),t(19,R=u.width||N.width),t(20,k=u.height||N.height),t(21,I=u.regionBackdrop||N.regionBackdrop),t(22,S=u.regionDrawer||N.regionDrawer),t(1,K=u.labelledby||N.labelledby),t(2,Q=u.describedby||N.describedby)}function Ye(){switch(_){case"top":t(5,ee={x:0,y:-window.innerWidth});break;case"bottom":t(5,ee={x:0,y:window.innerWidth});break;case"left":t(5,ee={x:-window.innerHeight,y:0});break;case"right":t(5,ee={x:window.innerHeight,y:0});break;default:console.error("Error: unknown position property value.");break}}function Je(u){u.target===ue?(Z.close(),v("backdrop",u)):v("drawer",u)}function Qe(u){h&&u.code==="Escape"&&Z.close()}Z.subscribe(u=>{u.open===!0&&(Xe(u),Ye())});function Ze(u){be.call(this,a,u)}function xe(u){be.call(this,a,u)}function $e(u){be.call(this,a,u)}function et(u){ve[u?"unshift":"push"](()=>{ge=u,t(4,ge)})}function tt(u){ve[u?"unshift":"push"](()=>{ue=u,t(3,ue)})}return a.$$set=u=>{t(40,e=x(x({},e),$(u))),"position"in u&&t(11,_=u.position),"duration"in u&&t(0,w=u.duration),"bgBackdrop"in u&&t(12,D=u.bgBackdrop),"blur"in u&&t(13,d=u.blur),"padding"in u&&t(14,g=u.padding),"bgDrawer"in u&&t(15,E=u.bgDrawer),"border"in u&&t(16,V=u.border),"rounded"in u&&t(17,C=u.rounded),"shadow"in u&&t(18,H=u.shadow),"width"in u&&t(19,R=u.width),"height"in u&&t(20,k=u.height),"zIndex"in u&&t(23,p=u.zIndex),"regionBackdrop"in u&&t(21,I=u.regionBackdrop),"regionDrawer"in u&&t(22,S=u.regionDrawer),"labelledby"in u&&t(1,K=u.labelledby),"describedby"in u&&t(2,Q=u.describedby),"$$scope"in u&&t(28,c=u.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&2048&&t(27,s=fe[_].alignment),a.$$.dirty[0]&526336&&t(26,i=R||fe[_].width),a.$$.dirty[0]&1050624&&t(25,l=k||fe[_].height),a.$$.dirty[0]&133120&&t(24,r=C||fe[_].rounded),t(7,o=`${qt} ${D} ${g} ${d} ${s} ${I} ${p} ${e.class??""}`),a.$$.dirty[0]&122126336&&t(6,f=`${Xt} ${E} ${V} ${C} ${H} ${i} ${l} ${r} ${S}`)},e=$(e),[w,K,Q,ue,ge,ee,f,o,h,Je,Qe,_,D,d,g,E,V,C,H,R,k,I,S,p,r,l,i,s,c,m,Ze,xe,$e,et,tt]}class Jt extends oe{constructor(e){super(),ie(this,e,Yt,jt,ne,{position:11,duration:0,bgBackdrop:12,blur:13,padding:14,bgDrawer:15,border:16,rounded:17,shadow:18,width:19,height:20,zIndex:23,regionBackdrop:21,regionDrawer:22,labelledby:1,describedby:2},null,[-1,-1])}}function Ue(a,e,t){const s=a.slice();return s[4]=e[t],s}function We(a){let e,t,s=a[4].label+"",i,l,r,o,f;return{c(){e=F("li"),t=F("a"),i=Y(s),l=O(),this.h()},l(h){e=A(h,"LI",{});var m=B(e);t=A(m,"A",{class:!0,href:!0});var c=B(t);i=J(c,s),l=M(c),c.forEach(b),m.forEach(b),this.h()},h(){n(t,"class",r=a[0](a[4].href)),n(t,"href",""+(ut+a[4].href))},m(h,m){T(h,e,m),P(e,t),P(t,i),P(t,l),o||(f=X(t,"click",a[2]),o=!0)},p(h,m){m&1&&r!==(r=h[0](h[4].href))&&n(t,"class",r)},d(h){h&&b(e),o=!1,f()}}}function Qt(a){let e,t,s=a[1],i=[];for(let l=0;l<s.length;l+=1)i[l]=We(Ue(a,s,l));return{c(){e=F("nav"),t=F("ul");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){e=A(l,"NAV",{class:!0});var r=B(e);t=A(r,"UL",{});var o=B(t);for(let f=0;f<i.length;f+=1)i[f].l(o);o.forEach(b),r.forEach(b),this.h()},h(){n(e,"class","list-nav p-4")},m(l,r){T(l,e,r),P(e,t);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(t,null)},p(l,[r]){if(r&7){s=l[1];let o;for(o=0;o<s.length;o+=1){const f=Ue(l,s,o);i[o]?i[o].p(f,r):(i[o]=We(f),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=s.length}},i:te,o:te,d(l){l&&b(e),it(i,l)}}}function Zt(a,e,t){let s,i;je(a,ct,o=>t(3,i=o));const l=[{label:"Home",href:"/"},{label:"Import GEXF",href:"/gexf"},{label:"Graph Explorer",href:"/explorer"},{label:"Echo Chambers",href:"/echochambers"},{label:"About",href:"/about"}];function r(){Z.close()}return a.$$.update=()=>{a.$$.dirty&8&&t(0,s=o=>o===i.url.pathname?"!bg-primary-500":"")},[s,l,r,i]}class qe extends oe{constructor(e){super(),ie(this,e,Zt,Qt,ne,{})}}function xt(a){let e,t,s,i,l,r,o;return r=new qe({}),{c(){e=F("h2"),t=Y("Navigation"),s=O(),i=F("hr"),l=O(),le(r.$$.fragment),this.h()},l(f){e=A(f,"H2",{class:!0});var h=B(e);t=J(h,"Navigation"),h.forEach(b),s=M(f),i=A(f,"HR",{}),l=M(f),re(r.$$.fragment,f),this.h()},h(){n(e,"class","p-4")},m(f,h){T(f,e,h),P(e,t),T(f,s,h),T(f,i,h),T(f,l,h),ae(r,f,h),o=!0},p:te,i(f){o||(y(r.$$.fragment,f),o=!0)},o(f){L(r.$$.fragment,f),o=!1},d(f){f&&b(e),f&&b(s),f&&b(i),f&&b(l),se(r,f)}}}function $t(a){let e;const t=a[1].default,s=z(t,a,a[2],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,l){s&&s.m(i,l),e=!0},p(i,l){s&&s.p&&(!e||l&4)&&G(s,t,i,i[2],e?W(t,i[2],l,null):U(i[2]),null)},i(i){e||(y(s,i),e=!0)},o(i){L(s,i),e=!1},d(i){s&&s.d(i)}}}function el(a){let e,t,s,i,l,r,o,f,h,m,c,v,_,w,D,d;return{c(){e=F("div"),t=F("button"),s=F("span"),i=de("svg"),l=de("rect"),r=de("rect"),o=de("rect"),f=O(),h=F("a"),m=F("img"),v=O(),_=F("strong"),w=Y("netscan"),this.h()},l(g){e=A(g,"DIV",{class:!0});var E=B(e);t=A(E,"BUTTON",{class:!0});var V=B(t);s=A(V,"SPAN",{});var C=B(s);i=he(C,"svg",{viewBox:!0,class:!0});var H=B(i);l=he(H,"rect",{width:!0,height:!0}),B(l).forEach(b),r=he(H,"rect",{y:!0,width:!0,height:!0}),B(r).forEach(b),o=he(H,"rect",{y:!0,width:!0,height:!0}),B(o).forEach(b),H.forEach(b),C.forEach(b),V.forEach(b),f=M(E),h=A(E,"A",{href:!0});var R=B(h);m=A(R,"IMG",{alt:!0,src:!0}),R.forEach(b),v=M(E),_=A(E,"STRONG",{class:!0});var k=B(_);w=J(k,"netscan"),k.forEach(b),E.forEach(b),this.h()},h(){n(l,"width","100"),n(l,"height","20"),n(r,"y","30"),n(r,"width","100"),n(r,"height","20"),n(o,"y","60"),n(o,"width","100"),n(o,"height","20"),n(i,"viewBox","0 0 100 80"),n(i,"class","fill-token w-4 h-4"),n(t,"class","lg:hidden btn btn-sm mr-4"),n(m,"alt","logo"),nt(m.src,c="https://uploads-ssl.webflow.com/5d7fa6d94cc8594259880539/62fbe3abfd2be5aa8cdc8cc1_tipo.png")||n(m,"src",c),n(h,"href","/"),n(_,"class","text-xl uppercase mt-2 ml-1"),n(e,"class","flex items-center")},m(g,E){T(g,e,E),P(e,t),P(t,s),P(s,i),P(i,l),P(i,r),P(i,o),P(e,f),P(e,h),P(h,m),P(e,v),P(e,_),P(_,w),D||(d=X(t,"click",a[0]),D=!0)},p:te,d(g){g&&b(e),D=!1,d()}}}function tl(a){let e,t,s,i,l,r,o,f;return{c(){e=F("a"),t=Y("Discord"),s=O(),i=F("a"),l=Y("Twitter"),r=O(),o=F("a"),f=Y("GitHub"),this.h()},l(h){e=A(h,"A",{class:!0,href:!0,target:!0,rel:!0});var m=B(e);t=J(m,"Discord"),m.forEach(b),s=M(h),i=A(h,"A",{class:!0,href:!0,target:!0,rel:!0});var c=B(i);l=J(c,"Twitter"),c.forEach(b),r=M(h),o=A(h,"A",{class:!0,href:!0,target:!0,rel:!0});var v=B(o);f=J(v,"GitHub"),v.forEach(b),this.h()},h(){n(e,"class","btn btn-sm variant-ghost-surface"),n(e,"href","https://discord.gg/EXqV7W8MtY"),n(e,"target","_blank"),n(e,"rel","noreferrer"),n(i,"class","btn btn-sm variant-ghost-surface"),n(i,"href","https://twitter.com/SkeletonUI"),n(i,"target","_blank"),n(i,"rel","noreferrer"),n(o,"class","btn btn-sm variant-ghost-surface"),n(o,"href","https://github.com/skeletonlabs/skeleton"),n(o,"target","_blank"),n(o,"rel","noreferrer")},m(h,m){T(h,e,m),P(e,t),T(h,s,m),T(h,i,m),P(i,l),T(h,r,m),T(h,o,m),P(o,f)},p:te,d(h){h&&b(e),h&&b(s),h&&b(i),h&&b(r),h&&b(o)}}}function ll(a){let e,t;return e=new Rt({props:{$$slots:{trail:[tl],lead:[el]},$$scope:{ctx:a}}}),{c(){le(e.$$.fragment)},l(s){re(e.$$.fragment,s)},m(s,i){ae(e,s,i),t=!0},p(s,i){const l={};i&4&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){se(e,s)}}}function rl(a){let e,t;return e=new qe({}),{c(){le(e.$$.fragment)},l(s){re(e.$$.fragment,s)},m(s,i){ae(e,s,i),t=!0},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){se(e,s)}}}function al(a){let e,t,s,i;return e=new Jt({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),s=new Wt({props:{slotSidebarLeft:"bg-surface-500/5 w-0 lg:w-64",$$slots:{sidebarLeft:[rl],header:[ll],default:[$t]},$$scope:{ctx:a}}}),{c(){le(e.$$.fragment),t=O(),le(s.$$.fragment)},l(l){re(e.$$.fragment,l),t=M(l),re(s.$$.fragment,l)},m(l,r){ae(e,l,r),T(l,t,r),ae(s,l,r),i=!0},p(l,[r]){const o={};r&4&&(o.$$scope={dirty:r,ctx:l}),e.$set(o);const f={};r&4&&(f.$$scope={dirty:r,ctx:l}),s.$set(f)},i(l){i||(y(e.$$.fragment,l),y(s.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),L(s.$$.fragment,l),i=!1},d(l){se(e,l),l&&b(t),se(s,l)}}}function sl(a,e,t){let{$$slots:s={},$$scope:i}=e;function l(){Z.open({})}return a.$$set=r=>{"$$scope"in r&&t(2,i=r.$$scope)},[l,s,i]}class dl extends oe{constructor(e){super(),ie(this,e,sl,al,ne,{})}}export{dl as component,cl as universal};

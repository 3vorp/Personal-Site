import{S as X,i as V,s as D,e as Z,b as y,B as F,h as g,C as O,D as M,m as d,n as m,E as S,F as b,G as u1,k as w,w as L,a as N,l as z,x as A,c as H,y as Y,H as x,f as p,t as C,z as T,I as m1,J as s1,q as f1,r as o1,g as h1,d as _1,K as g1,L as v1,M as d1,N as y1,O as b1}from"../../chunks/index-a35f1f66.js";/* empty css                        */const B=parseFloat;function G(a,e=";"){let t;if(Array.isArray(a))t=a.filter(l=>l);else{t=[];for(const l in a)a[l]&&t.push(`${l}:${a[l]}`)}return t.join(e)}function p1(a,e,t,l){let n,i;const s="1em";let o,f,r,c="-.125em";const u="visible";return l&&(r="center",i="1.25em"),t&&(n=t),e&&(e=="lg"?(f="1.33333em",o=".75em",c="-.225em"):e=="xs"?f=".75em":e=="sm"?f=".875em":f=e.replace("x","em")),G([G({float:n,width:i,height:s,"line-height":o,"font-size":f,"text-align":r,"vertical-align":c,"transform-origin":"center",overflow:u}),a])}function w1(a,e,t,l,n,i=1,s="",o=""){let f=1,r=1;return n&&(n=="horizontal"?f=-1:n=="vertical"?r=-1:f=r=-1),G([`translate(${B(e)*i}${s},${B(t)*i}${s})`,`scale(${f*B(a)},${r*B(a)})`,l&&`rotate(${l}${o})`]," ")}function $(a){let e,t,l,n,i,s,o,f;function r(h,v){return typeof h[10][4]=="string"?C1:z1}let c=r(a),u=c(a);return{c(){e=O("svg"),t=O("g"),l=O("g"),u.c(),this.h()},l(h){e=M(h,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var v=d(e);t=M(v,"g",{transform:!0,"transform-origin":!0});var k=d(t);l=M(k,"g",{transform:!0});var E=d(l);u.l(E),E.forEach(g),k.forEach(g),v.forEach(g),this.h()},h(){m(l,"transform",a[12]),m(t,"transform",n="translate("+a[10][0]/2+" "+a[10][1]/2+")"),m(t,"transform-origin",i=a[10][0]/4+" 0"),m(e,"id",s=a[1]||void 0),m(e,"class",o="svelte-fa "+a[0]+" svelte-1cj2gr0"),m(e,"style",a[11]),m(e,"viewBox",f="0 0 "+a[10][0]+" "+a[10][1]),m(e,"aria-hidden","true"),m(e,"role","img"),m(e,"xmlns","http://www.w3.org/2000/svg"),S(e,"pulse",a[4]),S(e,"spin",a[3])},m(h,v){y(h,e,v),b(e,t),b(t,l),u.m(l,null)},p(h,v){c===(c=r(h))&&u?u.p(h,v):(u.d(1),u=c(h),u&&(u.c(),u.m(l,null))),v&4096&&m(l,"transform",h[12]),v&1024&&n!==(n="translate("+h[10][0]/2+" "+h[10][1]/2+")")&&m(t,"transform",n),v&1024&&i!==(i=h[10][0]/4+" 0")&&m(t,"transform-origin",i),v&2&&s!==(s=h[1]||void 0)&&m(e,"id",s),v&1&&o!==(o="svelte-fa "+h[0]+" svelte-1cj2gr0")&&m(e,"class",o),v&2048&&m(e,"style",h[11]),v&1024&&f!==(f="0 0 "+h[10][0]+" "+h[10][1])&&m(e,"viewBox",f),v&17&&S(e,"pulse",h[4]),v&9&&S(e,"spin",h[3])},d(h){h&&g(e),u.d()}}}function z1(a){let e,t,l,n,i,s,o,f,r,c;return{c(){e=O("path"),s=O("path"),this.h()},l(u){e=M(u,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),d(e).forEach(g),s=M(u,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),d(s).forEach(g),this.h()},h(){m(e,"d",t=a[10][4][0]),m(e,"fill",l=a[6]||a[2]||"currentColor"),m(e,"fill-opacity",n=a[9]!=!1?a[7]:a[8]),m(e,"transform",i="translate("+a[10][0]/-2+" "+a[10][1]/-2+")"),m(s,"d",o=a[10][4][1]),m(s,"fill",f=a[5]||a[2]||"currentColor"),m(s,"fill-opacity",r=a[9]!=!1?a[8]:a[7]),m(s,"transform",c="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")},m(u,h){y(u,e,h),y(u,s,h)},p(u,h){h&1024&&t!==(t=u[10][4][0])&&m(e,"d",t),h&68&&l!==(l=u[6]||u[2]||"currentColor")&&m(e,"fill",l),h&896&&n!==(n=u[9]!=!1?u[7]:u[8])&&m(e,"fill-opacity",n),h&1024&&i!==(i="translate("+u[10][0]/-2+" "+u[10][1]/-2+")")&&m(e,"transform",i),h&1024&&o!==(o=u[10][4][1])&&m(s,"d",o),h&36&&f!==(f=u[5]||u[2]||"currentColor")&&m(s,"fill",f),h&896&&r!==(r=u[9]!=!1?u[8]:u[7])&&m(s,"fill-opacity",r),h&1024&&c!==(c="translate("+u[10][0]/-2+" "+u[10][1]/-2+")")&&m(s,"transform",c)},d(u){u&&g(e),u&&g(s)}}}function C1(a){let e,t,l,n;return{c(){e=O("path"),this.h()},l(i){e=M(i,"path",{d:!0,fill:!0,transform:!0}),d(e).forEach(g),this.h()},h(){m(e,"d",t=a[10][4]),m(e,"fill",l=a[2]||a[5]||"currentColor"),m(e,"transform",n="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")},m(i,s){y(i,e,s)},p(i,s){s&1024&&t!==(t=i[10][4])&&m(e,"d",t),s&36&&l!==(l=i[2]||i[5]||"currentColor")&&m(e,"fill",l),s&1024&&n!==(n="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")&&m(e,"transform",n)},d(i){i&&g(e)}}}function k1(a){let e,t=a[10][4]&&$(a);return{c(){t&&t.c(),e=Z()},l(l){t&&t.l(l),e=Z()},m(l,n){t&&t.m(l,n),y(l,e,n)},p(l,[n]){l[10][4]?t?t.p(l,n):(t=$(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:F,o:F,d(l){t&&t.d(l),l&&g(e)}}}function E1(a,e,t){let{class:l=""}=e,{id:n=""}=e,{style:i=""}=e,{icon:s}=e,{size:o=""}=e,{color:f=""}=e,{fw:r=!1}=e,{pull:c=""}=e,{scale:u=1}=e,{translateX:h=0}=e,{translateY:v=0}=e,{rotate:k=""}=e,{flip:E=!1}=e,{spin:I=!1}=e,{pulse:R=!1}=e,{primaryColor:W=""}=e,{secondaryColor:q=""}=e,{primaryOpacity:J=1}=e,{secondaryOpacity:K=.4}=e,{swapOpacity:j=!1}=e,P,Q,U;return a.$$set=_=>{"class"in _&&t(0,l=_.class),"id"in _&&t(1,n=_.id),"style"in _&&t(13,i=_.style),"icon"in _&&t(14,s=_.icon),"size"in _&&t(15,o=_.size),"color"in _&&t(2,f=_.color),"fw"in _&&t(16,r=_.fw),"pull"in _&&t(17,c=_.pull),"scale"in _&&t(18,u=_.scale),"translateX"in _&&t(19,h=_.translateX),"translateY"in _&&t(20,v=_.translateY),"rotate"in _&&t(21,k=_.rotate),"flip"in _&&t(22,E=_.flip),"spin"in _&&t(3,I=_.spin),"pulse"in _&&t(4,R=_.pulse),"primaryColor"in _&&t(5,W=_.primaryColor),"secondaryColor"in _&&t(6,q=_.secondaryColor),"primaryOpacity"in _&&t(7,J=_.primaryOpacity),"secondaryOpacity"in _&&t(8,K=_.secondaryOpacity),"swapOpacity"in _&&t(9,j=_.swapOpacity)},a.$$.update=()=>{a.$$.dirty&16384&&t(10,P=s&&s.icon||[0,0,"",[],""]),a.$$.dirty&237568&&t(11,Q=p1(i,o,c,r)),a.$$.dirty&8126464&&t(12,U=w1(u,h,v,k,E,512))},[l,n,f,I,R,W,q,J,K,j,P,Q,U,i,s,o,r,c,u,h,v,k,E]}class O1 extends X{constructor(e){super(),V(this,e,E1,k1,D,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}const c1=O1;var e1={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},t1={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};function l1(a,e,t){const l=a.slice();return l[6]=e[t],l}function a1(a){let e,t=a[3],l=[];for(let n=0;n<t.length;n+=1)l[n]=i1(l1(a,t,n));return{c(){e=w("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=z(n,"DIV",{class:!0});var i=d(e);for(let s=0;s<l.length;s+=1)l[s].l(i);i.forEach(g),this.h()},h(){m(e,"class","navbar svelte-1g56b22")},m(n,i){y(n,e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null)},p(n,i){if(i&8){t=n[3];let s;for(s=0;s<t.length;s+=1){const o=l1(n,t,s);l[s]?l[s].p(o,i):(l[s]=i1(o),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}},d(n){n&&g(e),s1(l,n)}}}function i1(a){let e,t=a[6].title+"",l;return{c(){e=w("a"),l=f1(t),this.h()},l(n){e=z(n,"A",{href:!0,class:!0});var i=d(e);l=o1(i,t),i.forEach(g),this.h()},h(){m(e,"href",a[6].url),m(e,"class","svelte-1g56b22")},m(n,i){y(n,e,i),b(e,l)},p:F,d(n){n&&g(e)}}}function M1(a){let e,t,l,n,i,s,o;u1(a[5]),l=new c1({props:{icon:a[2]}});let f=(a[1]||a[0]>900)&&a1(a);return{c(){e=w("nav"),t=w("button"),L(l.$$.fragment),n=N(),f&&f.c(),this.h()},l(r){e=z(r,"NAV",{class:!0});var c=d(e);t=z(c,"BUTTON",{class:!0});var u=d(t);A(l.$$.fragment,u),u.forEach(g),n=H(c),f&&f.l(c),c.forEach(g),this.h()},h(){m(t,"class","toggle svelte-1g56b22"),m(e,"class","svelte-1g56b22")},m(r,c){y(r,e,c),b(e,t),Y(l,t,null),b(e,n),f&&f.m(e,null),i=!0,s||(o=[x(window,"resize",a[5]),x(t,"click",a[4])],s=!0)},p(r,[c]){const u={};c&4&&(u.icon=r[2]),l.$set(u),r[1]||r[0]>900?f?f.p(r,c):(f=a1(r),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i(r){i||(p(l.$$.fragment,r),i=!0)},o(r){C(l.$$.fragment,r),i=!1},d(r){r&&g(e),T(l),f&&f.d(),s=!1,m1(o)}}}function N1(a,e,t){let l=0,n=!1,i=e1;const s=[{title:"Home",url:"/"},{title:"Faithful",url:"/faithful"},{title:"spunch bot",url:"/spunch-bot"},{title:"Commissions",url:"/commissions"},{title:"Gamble",url:"/gamble"}];function o(){t(1,n=!n),t(2,i=i==t1?e1:t1)}function f(){t(0,l=window.innerWidth)}return[l,n,i,s,o,f]}class H1 extends X{constructor(e){super(),V(this,e,N1,M1,D,{})}}var S1={prefix:"fab",iconName:"steam",icon:[496,512,[],"f1b6","M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"]},B1={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},F1={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},L1={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},A1={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function n1(a,e,t){const l=a.slice();return l[1]=e[t],l}function r1(a){let e,t,l,n=a[1].title+"",i,s,o;return t=new c1({props:{icon:a[1].icon}}),{c(){e=w("a"),L(t.$$.fragment),l=N(),i=f1(n),s=N(),this.h()},l(f){e=z(f,"A",{href:!0,class:!0});var r=d(e);A(t.$$.fragment,r),l=H(r),i=o1(r,n),s=H(r),r.forEach(g),this.h()},h(){m(e,"href",a[1].url),m(e,"class","svelte-yw02cs")},m(f,r){y(f,e,r),Y(t,e,null),b(e,l),b(e,i),b(e,s),o=!0},p:F,i(f){o||(p(t.$$.fragment,f),o=!0)},o(f){C(t.$$.fragment,f),o=!1},d(f){f&&g(e),T(t)}}}function Y1(a){let e,t,l,n=a[0],i=[];for(let o=0;o<n.length;o+=1)i[o]=r1(n1(a,n,o));const s=o=>C(i[o],1,1,()=>{i[o]=null});return{c(){e=w("footer"),t=w("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=z(o,"FOOTER",{class:!0});var f=d(e);t=z(f,"DIV",{class:!0});var r=d(t);for(let c=0;c<i.length;c+=1)i[c].l(r);r.forEach(g),f.forEach(g),this.h()},h(){m(t,"class","footer-bar svelte-yw02cs"),m(e,"class","svelte-yw02cs")},m(o,f){y(o,e,f),b(e,t);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(t,null);l=!0},p(o,[f]){if(f&1){n=o[0];let r;for(r=0;r<n.length;r+=1){const c=n1(o,n,r);i[r]?(i[r].p(c,f),p(i[r],1)):(i[r]=r1(c),i[r].c(),p(i[r],1),i[r].m(t,null))}for(h1(),r=n.length;r<i.length;r+=1)s(r);_1()}},i(o){if(!l){for(let f=0;f<n.length;f+=1)p(i[f]);l=!0}},o(o){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)C(i[f]);l=!1},d(o){o&&g(e),s1(i,o)}}}function T1(a){return[[{title:"GitHub",url:"https://github.com/3vorp",icon:F1},{title:"Twitter",url:"https://twitter.com/3vorp",icon:A1},{title:"Reddit",url:"https://reddit.com/u/3vorp",icon:B1},{title:"YouTube",url:"https://www.youtube.com/@evorp",icon:L1},{title:"Steam",url:"https://steamcommunity.com/id/3vorp/",icon:S1}]]}class X1 extends X{constructor(e){super(),V(this,e,T1,Y1,D,{})}}function V1(a){let e,t,l,n,i,s,o;l=new H1({});const f=a[1].default,r=g1(f,a,a[0],null);return s=new X1({}),{c(){e=N(),t=w("div"),L(l.$$.fragment),n=N(),r&&r.c(),i=N(),L(s.$$.fragment),this.h()},l(c){v1("svelte-1hi0yys",document.head).forEach(g),e=H(c),t=z(c,"DIV",{class:!0});var h=d(t);A(l.$$.fragment,h),n=H(h),r&&r.l(h),i=H(h),A(s.$$.fragment,h),h.forEach(g),this.h()},h(){document.title="Evorp's Website",m(t,"class","fix-footer svelte-1x0b8me")},m(c,u){y(c,e,u),y(c,t,u),Y(l,t,null),b(t,n),r&&r.m(t,null),b(t,i),Y(s,t,null),o=!0},p(c,[u]){r&&r.p&&(!o||u&1)&&d1(r,f,c,c[0],o?b1(f,c[0],u,null):y1(c[0]),null)},i(c){o||(p(l.$$.fragment,c),p(r,c),p(s.$$.fragment,c),o=!0)},o(c){C(l.$$.fragment,c),C(r,c),C(s.$$.fragment,c),o=!1},d(c){c&&g(e),c&&g(t),T(l),r&&r.d(c),T(s)}}}function D1(a,e,t){let{$$slots:l={},$$scope:n}=e;return a.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,l]}class R1 extends X{constructor(e){super(),V(this,e,D1,V1,D,{})}}export{R1 as default};

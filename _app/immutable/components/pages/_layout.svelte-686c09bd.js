import{S as G,i as R,s as J,e as $,b as y,B as W,h as g,C as F,D as L,m as k,n as c,E as Y,F as b,G as _e,k as w,a as N,l as z,c as T,H as fe,f as C,g as ce,t as q,d as ue,q as P,w as X,r as Q,x as D,y as I,z as j,I as me,J as ve,K as ge,L as de,M as pe,N as ye}from"../../chunks/index-ccb60fdc.js";const V=parseFloat;function K(i,e=";"){let t;if(Array.isArray(i))t=i.filter(l=>l);else{t=[];for(const l in i)i[l]&&t.push(`${l}:${i[l]}`)}return t.join(e)}function be(i,e,t,l){let n,a;const r="1em";let s,o,f,_="-.125em";const u="visible";return l&&(f="center",a="1.25em"),t&&(n=t),e&&(e=="lg"?(o="1.33333em",s=".75em",_="-.225em"):e=="xs"?o=".75em":e=="sm"?o=".875em":o=e.replace("x","em")),K([K({float:n,width:a,height:r,"line-height":s,"font-size":o,"text-align":f,"vertical-align":_,"transform-origin":"center",overflow:u}),i])}function we(i,e,t,l,n,a=1,r="",s=""){let o=1,f=1;return n&&(n=="horizontal"?o=-1:n=="vertical"?f=-1:o=f=-1),K([`translate(${V(e)*a}${r},${V(t)*a}${r})`,`scale(${o*V(i)},${f*V(i)})`,l&&`rotate(${l}${s})`]," ")}function ee(i){let e,t,l,n,a,r,s,o;function f(m,d){return typeof m[10][4]=="string"?Ee:ze}let _=f(i),u=_(i);return{c(){e=F("svg"),t=F("g"),l=F("g"),u.c(),this.h()},l(m){e=L(m,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var d=k(e);t=L(d,"g",{transform:!0,"transform-origin":!0});var M=k(t);l=L(M,"g",{transform:!0});var O=k(l);u.l(O),O.forEach(g),M.forEach(g),d.forEach(g),this.h()},h(){c(l,"transform",i[12]),c(t,"transform",n="translate("+i[10][0]/2+" "+i[10][1]/2+")"),c(t,"transform-origin",a=i[10][0]/4+" 0"),c(e,"id",r=i[1]||void 0),c(e,"class",s="svelte-fa "+i[0]+" svelte-1cj2gr0"),c(e,"style",i[11]),c(e,"viewBox",o="0 0 "+i[10][0]+" "+i[10][1]),c(e,"aria-hidden","true"),c(e,"role","img"),c(e,"xmlns","http://www.w3.org/2000/svg"),Y(e,"pulse",i[4]),Y(e,"spin",i[3])},m(m,d){y(m,e,d),b(e,t),b(t,l),u.m(l,null)},p(m,d){_===(_=f(m))&&u?u.p(m,d):(u.d(1),u=_(m),u&&(u.c(),u.m(l,null))),d&4096&&c(l,"transform",m[12]),d&1024&&n!==(n="translate("+m[10][0]/2+" "+m[10][1]/2+")")&&c(t,"transform",n),d&1024&&a!==(a=m[10][0]/4+" 0")&&c(t,"transform-origin",a),d&2&&r!==(r=m[1]||void 0)&&c(e,"id",r),d&1&&s!==(s="svelte-fa "+m[0]+" svelte-1cj2gr0")&&c(e,"class",s),d&2048&&c(e,"style",m[11]),d&1024&&o!==(o="0 0 "+m[10][0]+" "+m[10][1])&&c(e,"viewBox",o),d&17&&Y(e,"pulse",m[4]),d&9&&Y(e,"spin",m[3])},d(m){m&&g(e),u.d()}}}function ze(i){let e,t,l,n,a,r,s,o,f,_;return{c(){e=F("path"),r=F("path"),this.h()},l(u){e=L(u,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),k(e).forEach(g),r=L(u,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),k(r).forEach(g),this.h()},h(){c(e,"d",t=i[10][4][0]),c(e,"fill",l=i[6]||i[2]||"currentColor"),c(e,"fill-opacity",n=i[9]!=!1?i[7]:i[8]),c(e,"transform",a="translate("+i[10][0]/-2+" "+i[10][1]/-2+")"),c(r,"d",s=i[10][4][1]),c(r,"fill",o=i[5]||i[2]||"currentColor"),c(r,"fill-opacity",f=i[9]!=!1?i[8]:i[7]),c(r,"transform",_="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")},m(u,m){y(u,e,m),y(u,r,m)},p(u,m){m&1024&&t!==(t=u[10][4][0])&&c(e,"d",t),m&68&&l!==(l=u[6]||u[2]||"currentColor")&&c(e,"fill",l),m&896&&n!==(n=u[9]!=!1?u[7]:u[8])&&c(e,"fill-opacity",n),m&1024&&a!==(a="translate("+u[10][0]/-2+" "+u[10][1]/-2+")")&&c(e,"transform",a),m&1024&&s!==(s=u[10][4][1])&&c(r,"d",s),m&36&&o!==(o=u[5]||u[2]||"currentColor")&&c(r,"fill",o),m&896&&f!==(f=u[9]!=!1?u[8]:u[7])&&c(r,"fill-opacity",f),m&1024&&_!==(_="translate("+u[10][0]/-2+" "+u[10][1]/-2+")")&&c(r,"transform",_)},d(u){u&&g(e),u&&g(r)}}}function Ee(i){let e,t,l,n;return{c(){e=F("path"),this.h()},l(a){e=L(a,"path",{d:!0,fill:!0,transform:!0}),k(e).forEach(g),this.h()},h(){c(e,"d",t=i[10][4]),c(e,"fill",l=i[2]||i[5]||"currentColor"),c(e,"transform",n="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")},m(a,r){y(a,e,r)},p(a,r){r&1024&&t!==(t=a[10][4])&&c(e,"d",t),r&36&&l!==(l=a[2]||a[5]||"currentColor")&&c(e,"fill",l),r&1024&&n!==(n="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")&&c(e,"transform",n)},d(a){a&&g(e)}}}function ke(i){let e,t=i[10][4]&&ee(i);return{c(){t&&t.c(),e=$()},l(l){t&&t.l(l),e=$()},m(l,n){t&&t.m(l,n),y(l,e,n)},p(l,[n]){l[10][4]?t?t.p(l,n):(t=ee(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:W,o:W,d(l){t&&t.d(l),l&&g(e)}}}function Ce(i,e,t){let{class:l=""}=e,{id:n=""}=e,{style:a=""}=e,{icon:r}=e,{size:s=""}=e,{color:o=""}=e,{fw:f=!1}=e,{pull:_=""}=e,{scale:u=1}=e,{translateX:m=0}=e,{translateY:d=0}=e,{rotate:M=""}=e,{flip:O=!1}=e,{spin:A=!1}=e,{pulse:H=!1}=e,{primaryColor:B=""}=e,{secondaryColor:E=""}=e,{primaryOpacity:h=1}=e,{secondaryOpacity:p=.4}=e,{swapOpacity:S=!1}=e,U,Z,x;return i.$$set=v=>{"class"in v&&t(0,l=v.class),"id"in v&&t(1,n=v.id),"style"in v&&t(13,a=v.style),"icon"in v&&t(14,r=v.icon),"size"in v&&t(15,s=v.size),"color"in v&&t(2,o=v.color),"fw"in v&&t(16,f=v.fw),"pull"in v&&t(17,_=v.pull),"scale"in v&&t(18,u=v.scale),"translateX"in v&&t(19,m=v.translateX),"translateY"in v&&t(20,d=v.translateY),"rotate"in v&&t(21,M=v.rotate),"flip"in v&&t(22,O=v.flip),"spin"in v&&t(3,A=v.spin),"pulse"in v&&t(4,H=v.pulse),"primaryColor"in v&&t(5,B=v.primaryColor),"secondaryColor"in v&&t(6,E=v.secondaryColor),"primaryOpacity"in v&&t(7,h=v.primaryOpacity),"secondaryOpacity"in v&&t(8,p=v.secondaryOpacity),"swapOpacity"in v&&t(9,S=v.swapOpacity)},i.$$.update=()=>{i.$$.dirty&16384&&t(10,U=r&&r.icon||[0,0,"",[],""]),i.$$.dirty&237568&&t(11,Z=be(a,s,_,f)),i.$$.dirty&8126464&&t(12,x=we(u,m,d,M,O,512))},[l,n,o,A,H,B,E,h,p,S,U,Z,x,a,r,s,f,_,u,m,d,M,O]}class Me extends G{constructor(e){super(),R(this,e,Ce,ke,J,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}const he=Me;var te={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},le={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};function re(i,e,t){const l=i.slice();return l[6]=e[t],l}function ie(i){let e,t,l,n,a,r,s,o,f;return r=new he({props:{icon:i[2]}}),{c(){e=w("div"),t=w("a"),l=P("Evorp's Website"),n=N(),a=w("button"),X(r.$$.fragment),this.h()},l(_){e=z(_,"DIV",{class:!0});var u=k(e);t=z(u,"A",{class:!0,href:!0});var m=k(t);l=Q(m,"Evorp's Website"),m.forEach(g),n=T(u),a=z(u,"BUTTON",{class:!0});var d=k(a);D(r.$$.fragment,d),d.forEach(g),u.forEach(g),this.h()},h(){c(t,"class","info-text svelte-7qkdtr"),c(t,"href","/"),c(a,"class","toggle info-text svelte-7qkdtr"),c(e,"class","mobile-navbar svelte-7qkdtr")},m(_,u){y(_,e,u),b(e,t),b(t,l),b(e,n),b(e,a),I(r,a,null),s=!0,o||(f=fe(a,"click",i[4]),o=!0)},p(_,u){const m={};u&4&&(m.icon=_[2]),r.$set(m)},i(_){s||(C(r.$$.fragment,_),s=!0)},o(_){q(r.$$.fragment,_),s=!1},d(_){_&&g(e),j(r),o=!1,f()}}}function ae(i){let e,t=i[3],l=[];for(let n=0;n<t.length;n+=1)l[n]=ne(re(i,t,n));return{c(){e=w("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=z(n,"DIV",{class:!0});var a=k(e);for(let r=0;r<l.length;r+=1)l[r].l(a);a.forEach(g),this.h()},h(){c(e,"class","navbar svelte-7qkdtr")},m(n,a){y(n,e,a);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(n,a){if(a&8){t=n[3];let r;for(r=0;r<t.length;r+=1){const s=re(n,t,r);l[r]?l[r].p(s,a):(l[r]=ne(s),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(n){n&&g(e),me(l,n)}}}function ne(i){let e,t=i[6].title+"",l;return{c(){e=w("a"),l=P(t),this.h()},l(n){e=z(n,"A",{class:!0,href:!0});var a=k(e);l=Q(a,t),a.forEach(g),this.h()},h(){c(e,"class","info-text svelte-7qkdtr"),c(e,"href",i[6].url)},m(n,a){y(n,e,a),b(e,l)},p:W,d(n){n&&g(e)}}}function Oe(i){let e,t,l,n,a;_e(i[5]);let r=i[0]<=900&&ie(i),s=(i[1]||i[0]>900)&&ae(i);return{c(){e=w("nav"),r&&r.c(),t=N(),s&&s.c(),this.h()},l(o){e=z(o,"NAV",{class:!0});var f=k(e);r&&r.l(f),t=T(f),s&&s.l(f),f.forEach(g),this.h()},h(){c(e,"class","edges svelte-7qkdtr")},m(o,f){y(o,e,f),r&&r.m(e,null),b(e,t),s&&s.m(e,null),l=!0,n||(a=fe(window,"resize",i[5]),n=!0)},p(o,[f]){o[0]<=900?r?(r.p(o,f),f&1&&C(r,1)):(r=ie(o),r.c(),C(r,1),r.m(e,t)):r&&(ce(),q(r,1,1,()=>{r=null}),ue()),o[1]||o[0]>900?s?s.p(o,f):(s=ae(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i(o){l||(C(r),l=!0)},o(o){q(r),l=!1},d(o){o&&g(e),r&&r.d(),s&&s.d(),n=!1,a()}}}function Ae(i,e,t){let l,n=!1,a=te;const r=[{title:"Home",url:"/"},{title:"Faithful",url:"/faithful"},{title:"spunch bot",url:"/spunch-bot"},{title:"Commissions",url:"/commissions"},{title:"About",url:"/about"}];function s(){t(1,n=!n),t(2,a=a==le?te:le)}function o(){t(0,l=window.innerWidth)}return[l,n,a,r,s,o]}class Ne extends G{constructor(e){super(),R(this,e,Ae,Oe,J,{})}}var Te={prefix:"fab",iconName:"steam",icon:[496,512,[],"f1b6","M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"]},He={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},Se={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},qe={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},Be={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function se(i,e,t){const l=i.slice();return l[1]=e[t],l}function oe(i){let e,t,l,n=i[1].title+"",a,r,s;return t=new he({props:{icon:i[1].icon}}),{c(){e=w("a"),X(t.$$.fragment),l=N(),a=P(n),r=N(),this.h()},l(o){e=z(o,"A",{class:!0,href:!0});var f=k(e);D(t.$$.fragment,f),l=T(f),a=Q(f,n),r=T(f),f.forEach(g),this.h()},h(){c(e,"class","info-text svelte-hmouaa"),c(e,"href",i[1].url)},m(o,f){y(o,e,f),I(t,e,null),b(e,l),b(e,a),b(e,r),s=!0},p:W,i(o){s||(C(t.$$.fragment,o),s=!0)},o(o){q(t.$$.fragment,o),s=!1},d(o){o&&g(e),j(t)}}}function Fe(i){let e,t,l,n=i[0],a=[];for(let s=0;s<n.length;s+=1)a[s]=oe(se(i,n,s));const r=s=>q(a[s],1,1,()=>{a[s]=null});return{c(){e=w("footer"),t=w("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=z(s,"FOOTER",{class:!0});var o=k(e);t=z(o,"DIV",{class:!0});var f=k(t);for(let _=0;_<a.length;_+=1)a[_].l(f);f.forEach(g),o.forEach(g),this.h()},h(){c(t,"class","footer-bar svelte-hmouaa"),c(e,"class","svelte-hmouaa")},m(s,o){y(s,e,o),b(e,t);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(t,null);l=!0},p(s,[o]){if(o&1){n=s[0];let f;for(f=0;f<n.length;f+=1){const _=se(s,n,f);a[f]?(a[f].p(_,o),C(a[f],1)):(a[f]=oe(_),a[f].c(),C(a[f],1),a[f].m(t,null))}for(ce(),f=n.length;f<a.length;f+=1)r(f);ue()}},i(s){if(!l){for(let o=0;o<n.length;o+=1)C(a[o]);l=!0}},o(s){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)q(a[o]);l=!1},d(s){s&&g(e),me(a,s)}}}function Le(i){return[[{title:"GitHub",url:"https://github.com/3vorp",icon:Se},{title:"Twitter",url:"https://twitter.com/3vorp",icon:Be},{title:"Reddit",url:"https://reddit.com/u/3vorp",icon:He},{title:"YouTube",url:"https://www.youtube.com/@evorp",icon:qe},{title:"Steam",url:"https://steamcommunity.com/id/3vorp/",icon:Te}]]}class Ye extends G{constructor(e){super(),R(this,e,Le,Fe,J,{})}}function Ve(i){let e,t,l,n,a,r,s,o,f,_,u,m,d,M,O,A,H;d=new Ne({});const B=i[1].default,E=ve(B,i,i[0],null);return A=new Ye({}),{c(){e=w("meta"),t=w("meta"),l=w("meta"),n=w("meta"),a=N(),r=w("meta"),s=N(),o=w("meta"),f=N(),_=w("meta"),u=N(),m=w("div"),X(d.$$.fragment),M=N(),E&&E.c(),O=N(),X(A.$$.fragment),this.h()},l(h){const p=ge("svelte-1j6rlje",document.head);e=z(p,"META",{property:!0,content:!0}),t=z(p,"META",{property:!0,content:!0}),l=z(p,"META",{property:!0,content:!0}),n=z(p,"META",{property:!0,content:!0}),p.forEach(g),a=T(h),r=z(h,"META",{name:!0,content:!0}),s=T(h),o=z(h,"META",{property:!0,content:!0}),f=T(h),_=z(h,"META",{property:!0,content:!0}),u=T(h),m=z(h,"DIV",{class:!0});var S=k(m);D(d.$$.fragment,S),M=T(S),E&&E.l(S),O=T(S),D(A.$$.fragment,S),S.forEach(g),this.h()},h(){document.title="Evorp's Website",c(e,"property","og:type"),c(e,"content","website"),c(t,"property","og:title"),c(t,"content","Evorp's Website"),c(l,"property","og:description"),c(l,"content","idk at this point either"),c(n,"property","og:image"),c(n,"content","https://raw.githubusercontent.com/3vorp/3vorp.github.io/main/static/embed_banner.jpg"),c(r,"name","twitter:card"),c(r,"content","summary_large_image"),c(o,"property","twitter:description"),c(o,"content","idk at this point either"),c(_,"property","twitter:image"),c(_,"content","https://raw.githubusercontent.com/3vorp/3vorp.github.io/main/static/embed_banner.jpg"),c(m,"class","fix-footer svelte-1x0b8me")},m(h,p){b(document.head,e),b(document.head,t),b(document.head,l),b(document.head,n),y(h,a,p),y(h,r,p),y(h,s,p),y(h,o,p),y(h,f,p),y(h,_,p),y(h,u,p),y(h,m,p),I(d,m,null),b(m,M),E&&E.m(m,null),b(m,O),I(A,m,null),H=!0},p(h,[p]){E&&E.p&&(!H||p&1)&&de(E,B,h,h[0],H?ye(B,h[0],p,null):pe(h[0]),null)},i(h){H||(C(d.$$.fragment,h),C(E,h),C(A.$$.fragment,h),H=!0)},o(h){q(d.$$.fragment,h),q(E,h),q(A.$$.fragment,h),H=!1},d(h){g(e),g(t),g(l),g(n),h&&g(a),h&&g(r),h&&g(s),h&&g(o),h&&g(f),h&&g(_),h&&g(u),h&&g(m),j(d),E&&E.d(h),j(A)}}}function We(i,e,t){let{$$slots:l={},$$scope:n}=e;return i.$$set=a=>{"$$scope"in a&&t(0,n=a.$$scope)},[n,l]}class De extends G{constructor(e){super(),R(this,e,We,Ve,J,{})}}export{De as default};

import{s as X,n as Q,d as ve,h as _e,u as de,v as ge,w as pe,x as be}from"../chunks/scheduler.Dw93JyHj.js";import{S as G,i as P,n as U,d as b,f as _,A as j,B,h as E,b as u,C as k,k as y,e as w,s as q,c as z,a as T,m as ne,q as O,u as re,o as H,p as se,w as I,g as ae,x as D,y as W,z as Y,D as fe,t as oe,j as ce,l as ue,E as ye}from"../chunks/index.C4TWkI1A.js";function R(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const we=!0,Pe=Object.freeze(Object.defineProperty({__proto__:null,prerender:we},Symbol.toStringTag,{value:"Module"}));function ze(l,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?l.style.fontSize=e.replace("x","em"):l.style.fontSize=""}function Ce(l,e,t,n,s,c=1,i="",m=""){let o=1,h=1;s&&(s=="horizontal"?o=-1:s=="vertical"?h=-1:o=h=-1),typeof l=="string"&&(l=parseFloat(l)),typeof e=="string"&&(e=parseFloat(e)),typeof t=="string"&&(t=parseFloat(t));const f=`${e*c}${i}`,r=`${t*c}${i}`;let a=`translate(${f},${r}) scale(${o*l},${h*l})`;return n&&(a+=` rotate(${n}${m})`),a}function Z(l){let e,t,n,s,c,i,m;function o(r,a){return typeof r[16][4]=="string"?Ee:ke}let h=o(l),f=h(l);return{c(){e=j("svg"),t=j("g"),n=j("g"),f.c(),this.h()},l(r){e=B(r,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var a=E(e);t=B(a,"g",{transform:!0,"transform-origin":!0});var g=E(t);n=B(g,"g",{transform:!0});var A=E(n);f.l(A),A.forEach(_),g.forEach(_),a.forEach(_),this.h()},h(){u(n,"transform",l[15]),u(t,"transform",s="translate("+l[16][0]/2+" "+l[16][1]/2+")"),u(t,"transform-origin",c=l[16][0]/4+" 0"),u(e,"id",l[1]),u(e,"class",i="svelte-fa svelte-fa-base "+l[0]+" svelte-bvo74f"),u(e,"style",l[2]),u(e,"viewBox",m="0 0 "+l[16][0]+" "+l[16][1]),u(e,"aria-hidden","true"),u(e,"role","img"),u(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"pulse",l[8]),k(e,"svelte-fa-size-lg",l[3]==="lg"),k(e,"svelte-fa-size-sm",l[3]==="sm"),k(e,"svelte-fa-size-xs",l[3]==="xs"),k(e,"svelte-fa-fw",l[5]),k(e,"svelte-fa-pull-left",l[6]==="left"),k(e,"svelte-fa-pull-right",l[6]==="right"),k(e,"spin",l[7])},m(r,a){b(r,e,a),y(e,t),y(t,n),f.m(n,null),l[23](e)},p(r,a){h===(h=o(r))&&f?f.p(r,a):(f.d(1),f=h(r),f&&(f.c(),f.m(n,null))),a&32768&&u(n,"transform",r[15]),a&65536&&s!==(s="translate("+r[16][0]/2+" "+r[16][1]/2+")")&&u(t,"transform",s),a&65536&&c!==(c=r[16][0]/4+" 0")&&u(t,"transform-origin",c),a&2&&u(e,"id",r[1]),a&1&&i!==(i="svelte-fa svelte-fa-base "+r[0]+" svelte-bvo74f")&&u(e,"class",i),a&4&&u(e,"style",r[2]),a&65536&&m!==(m="0 0 "+r[16][0]+" "+r[16][1])&&u(e,"viewBox",m),a&257&&k(e,"pulse",r[8]),a&9&&k(e,"svelte-fa-size-lg",r[3]==="lg"),a&9&&k(e,"svelte-fa-size-sm",r[3]==="sm"),a&9&&k(e,"svelte-fa-size-xs",r[3]==="xs"),a&33&&k(e,"svelte-fa-fw",r[5]),a&65&&k(e,"svelte-fa-pull-left",r[6]==="left"),a&65&&k(e,"svelte-fa-pull-right",r[6]==="right"),a&129&&k(e,"spin",r[7])},d(r){r&&_(e),f.d(),l[23](null)}}}function ke(l){let e,t,n,s,c,i,m,o,h,f;return{c(){e=j("path"),i=j("path"),this.h()},l(r){e=B(r,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),E(e).forEach(_),i=B(r,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),E(i).forEach(_),this.h()},h(){u(e,"d",t=l[16][4][0]),u(e,"fill",n=l[10]||l[4]||"currentColor"),u(e,"fill-opacity",s=l[13]!=!1?l[11]:l[12]),u(e,"transform",c="translate("+l[16][0]/-2+" "+l[16][1]/-2+")"),u(i,"d",m=l[16][4][1]),u(i,"fill",o=l[9]||l[4]||"currentColor"),u(i,"fill-opacity",h=l[13]!=!1?l[12]:l[11]),u(i,"transform",f="translate("+l[16][0]/-2+" "+l[16][1]/-2+")")},m(r,a){b(r,e,a),b(r,i,a)},p(r,a){a&65536&&t!==(t=r[16][4][0])&&u(e,"d",t),a&1040&&n!==(n=r[10]||r[4]||"currentColor")&&u(e,"fill",n),a&14336&&s!==(s=r[13]!=!1?r[11]:r[12])&&u(e,"fill-opacity",s),a&65536&&c!==(c="translate("+r[16][0]/-2+" "+r[16][1]/-2+")")&&u(e,"transform",c),a&65536&&m!==(m=r[16][4][1])&&u(i,"d",m),a&528&&o!==(o=r[9]||r[4]||"currentColor")&&u(i,"fill",o),a&14336&&h!==(h=r[13]!=!1?r[12]:r[11])&&u(i,"fill-opacity",h),a&65536&&f!==(f="translate("+r[16][0]/-2+" "+r[16][1]/-2+")")&&u(i,"transform",f)},d(r){r&&(_(e),_(i))}}}function Ee(l){let e,t,n,s;return{c(){e=j("path"),this.h()},l(c){e=B(c,"path",{d:!0,fill:!0,transform:!0}),E(e).forEach(_),this.h()},h(){u(e,"d",t=l[16][4]),u(e,"fill",n=l[4]||l[9]||"currentColor"),u(e,"transform",s="translate("+l[16][0]/-2+" "+l[16][1]/-2+")")},m(c,i){b(c,e,i)},p(c,i){i&65536&&t!==(t=c[16][4])&&u(e,"d",t),i&528&&n!==(n=c[4]||c[9]||"currentColor")&&u(e,"fill",n),i&65536&&s!==(s="translate("+c[16][0]/-2+" "+c[16][1]/-2+")")&&u(e,"transform",s)},d(c){c&&_(e)}}}function Me(l){let e,t=l[16][4]&&Z(l);return{c(){t&&t.c(),e=U()},l(n){t&&t.l(n),e=U()},m(n,s){t&&t.m(n,s),b(n,e,s)},p(n,[s]){n[16][4]?t?t.p(n,s):(t=Z(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Q,o:Q,d(n){n&&_(e),t&&t.d(n)}}}function qe(l,e,t){let n,s,{class:c=void 0}=e,{id:i=void 0}=e,{style:m=void 0}=e,{icon:o}=e,{size:h=void 0}=e,{color:f=void 0}=e,{fw:r=!1}=e,{pull:a=void 0}=e,{scale:g=1}=e,{translateX:A=0}=e,{translateY:L=0}=e,{rotate:M=void 0}=e,{flip:S=void 0}=e,{spin:V=!1}=e,{pulse:C=!1}=e,{primaryColor:d=""}=e,{secondaryColor:p=""}=e,{primaryOpacity:N=1}=e,{secondaryOpacity:K=.4}=e,{swapOpacity:J=!1}=e,F;function he(v){ve[v?"unshift":"push"](()=>{F=v,t(14,F)})}return l.$$set=v=>{"class"in v&&t(0,c=v.class),"id"in v&&t(1,i=v.id),"style"in v&&t(2,m=v.style),"icon"in v&&t(17,o=v.icon),"size"in v&&t(3,h=v.size),"color"in v&&t(4,f=v.color),"fw"in v&&t(5,r=v.fw),"pull"in v&&t(6,a=v.pull),"scale"in v&&t(18,g=v.scale),"translateX"in v&&t(19,A=v.translateX),"translateY"in v&&t(20,L=v.translateY),"rotate"in v&&t(21,M=v.rotate),"flip"in v&&t(22,S=v.flip),"spin"in v&&t(7,V=v.spin),"pulse"in v&&t(8,C=v.pulse),"primaryColor"in v&&t(9,d=v.primaryColor),"secondaryColor"in v&&t(10,p=v.secondaryColor),"primaryOpacity"in v&&t(11,N=v.primaryOpacity),"secondaryOpacity"in v&&t(12,K=v.secondaryOpacity),"swapOpacity"in v&&t(13,J=v.swapOpacity)},l.$$.update=()=>{l.$$.dirty&16392&&F&&h&&ze(F,h),l.$$.dirty&131072&&t(16,n=o&&o.icon||[0,0,"",[],""]),l.$$.dirty&8126464&&t(15,s=Ce(g,A,L,M,S,512))},[c,i,m,h,f,r,a,V,C,d,p,N,K,J,F,s,n,o,g,A,L,M,S,he]}class me extends G{constructor(e){super(),P(this,e,qe,Me,X,{class:0,id:1,style:2,icon:17,size:3,color:4,fw:5,pull:6,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:7,pulse:8,primaryColor:9,secondaryColor:10,primaryOpacity:11,secondaryOpacity:12,swapOpacity:13})}}var Te={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Oe={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};function x(l,e,t){const n=l.slice();return n[7]=e[t].href,n[8]=e[t].title,n}function $(l){let e,t,n="Evorp's Website",s,c,i,m,o,h;return i=new me({props:{icon:l[4]}}),{c(){e=w("div"),t=w("a"),t.textContent=n,s=q(),c=w("button"),I(i.$$.fragment),this.h()},l(f){e=z(f,"DIV",{class:!0});var r=E(e);t=z(r,"A",{class:!0,href:!0,"data-svelte-h":!0}),ae(t)!=="svelte-6tejl2"&&(t.textContent=n),s=T(r),c=z(r,"BUTTON",{class:!0});var a=E(c);D(i.$$.fragment,a),a.forEach(_),r.forEach(_),this.h()},h(){u(t,"class","info-text link-hover svelte-1iivlqt"),u(t,"href","/"),u(c,"class","toggle info-text link-hover svelte-1iivlqt"),u(e,"class","mobile-navbar svelte-1iivlqt")},m(f,r){b(f,e,r),y(e,t),y(e,s),y(e,c),W(i,c,null),m=!0,o||(h=ne(c,"click",l[6]),o=!0)},p(f,r){const a={};r&16&&(a.icon=f[4]),i.$set(a)},i(f){m||(O(i.$$.fragment,f),m=!0)},o(f){H(i.$$.fragment,f),m=!1},d(f){f&&_(e),Y(i),o=!1,h()}}}function ee(l){let e,t=R(l[0]),n=[];for(let s=0;s<t.length;s+=1)n[s]=te(x(l,t,s));return{c(){e=w("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=z(s,"DIV",{class:!0});var c=E(e);for(let i=0;i<n.length;i+=1)n[i].l(c);c.forEach(_),this.h()},h(){u(e,"class","navbar svelte-1iivlqt")},m(s,c){b(s,e,c);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(s,c){if(c&1){t=R(s[0]);let i;for(i=0;i<t.length;i+=1){const m=x(s,t,i);n[i]?n[i].p(m,c):(n[i]=te(m),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=t.length}},d(s){s&&_(e),fe(n,s)}}}function te(l){let e,t=l[8]+"",n,s;return{c(){e=w("a"),n=oe(t),this.h()},l(c){e=z(c,"A",{class:!0,href:!0});var i=E(e);n=ce(i,t),i.forEach(_),this.h()},h(){u(e,"class","info-text link-hover svelte-1iivlqt"),u(e,"href",s=l[7])},m(c,i){b(c,e,i),y(e,n)},p(c,i){i&1&&t!==(t=c[8]+"")&&ue(n,t),i&1&&s!==(s=c[7])&&u(e,"href",s)},d(c){c&&_(e)}}}function Ae(l){let e,t,n,s,c;_e(l[5]);let i=l[3]&&$(l),m=(l[2]||!l[3])&&ee(l);return{c(){e=w("nav"),i&&i.c(),t=q(),m&&m.c(),this.h()},l(o){e=z(o,"NAV",{class:!0});var h=E(e);i&&i.l(h),t=T(h),m&&m.l(h),h.forEach(_),this.h()},h(){u(e,"class","edges svelte-1iivlqt")},m(o,h){b(o,e,h),i&&i.m(e,null),y(e,t),m&&m.m(e,null),n=!0,s||(c=ne(window,"resize",l[5]),s=!0)},p(o,[h]){o[3]?i?(i.p(o,h),h&8&&O(i,1)):(i=$(o),i.c(),O(i,1),i.m(e,t)):i&&(re(),H(i,1,1,()=>{i=null}),se()),o[2]||!o[3]?m?m.p(o,h):(m=ee(o),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i(o){n||(O(i),n=!0)},o(o){H(i),n=!1},d(o){o&&_(e),i&&i.d(),m&&m.d(),s=!1,c()}}}function Se(l,e,t){let n,s,{items:c=[]}=e,i,m=!1;function o(){t(1,i=window.innerWidth)}const h=()=>t(2,m=!m);return l.$$set=f=>{"items"in f&&t(0,c=f.items)},l.$$.update=()=>{l.$$.dirty&4&&t(4,n=m?Oe:Te),l.$$.dirty&2&&t(3,s=i<=900)},[c,i,m,s,n,o,h]}class Ne extends G{constructor(e){super(),P(this,e,Se,Ae,X,{items:0})}}function le(l,e,t){const n=l.slice();return n[1]=e[t].href,n[2]=e[t].icon,n[3]=e[t].title,n}function ie(l){let e,t,n,s=l[3]+"",c,i,m,o;return t=new me({props:{icon:l[2]}}),{c(){e=w("a"),I(t.$$.fragment),n=q(),c=oe(s),i=q(),this.h()},l(h){e=z(h,"A",{class:!0,target:!0,rel:!0,href:!0});var f=E(e);D(t.$$.fragment,f),n=T(f),c=ce(f,s),i=T(f),f.forEach(_),this.h()},h(){u(e,"class","info-text link-hover svelte-1qdpqac"),u(e,"target","_blank"),u(e,"rel","noopener noreferrer"),u(e,"href",m=l[1])},m(h,f){b(h,e,f),W(t,e,null),y(e,n),y(e,c),y(e,i),o=!0},p(h,f){const r={};f&1&&(r.icon=h[2]),t.$set(r),(!o||f&1)&&s!==(s=h[3]+"")&&ue(c,s),(!o||f&1&&m!==(m=h[1]))&&u(e,"href",m)},i(h){o||(O(t.$$.fragment,h),o=!0)},o(h){H(t.$$.fragment,h),o=!1},d(h){h&&_(e),Y(t)}}}function He(l){let e,t,n,s,c=`<p class="info-text svelte-1qdpqac">This website was made using the <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" class="svelte-1qdpqac">SvelteKit</a>
			framework. View the source
			<a href="https://github.com/3vorp/3vorp.github.io" target="_blank" rel="noopener noreferrer" class="svelte-1qdpqac">here
			</a>!</p>`,i,m=R(l[0]),o=[];for(let f=0;f<m.length;f+=1)o[f]=ie(le(l,m,f));const h=f=>H(o[f],1,1,()=>{o[f]=null});return{c(){e=w("footer"),t=w("div");for(let f=0;f<o.length;f+=1)o[f].c();n=q(),s=w("div"),s.innerHTML=c,this.h()},l(f){e=z(f,"FOOTER",{class:!0});var r=E(e);t=z(r,"DIV",{class:!0});var a=E(t);for(let g=0;g<o.length;g+=1)o[g].l(a);a.forEach(_),n=T(r),s=z(r,"DIV",{class:!0,"data-svelte-h":!0}),ae(s)!=="svelte-kuyd2i"&&(s.innerHTML=c),r.forEach(_),this.h()},h(){u(t,"class","footer-bar svelte-1qdpqac"),u(s,"class","bottom svelte-1qdpqac"),u(e,"class","svelte-1qdpqac")},m(f,r){b(f,e,r),y(e,t);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(t,null);y(e,n),y(e,s),i=!0},p(f,[r]){if(r&1){m=R(f[0]);let a;for(a=0;a<m.length;a+=1){const g=le(f,m,a);o[a]?(o[a].p(g,r),O(o[a],1)):(o[a]=ie(g),o[a].c(),O(o[a],1),o[a].m(t,null))}for(re(),a=m.length;a<o.length;a+=1)h(a);se()}},i(f){if(!i){for(let r=0;r<m.length;r+=1)O(o[r]);i=!0}},o(f){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)H(o[r]);i=!1},d(f){f&&_(e),fe(o,f)}}}function Le(l,e,t){let{items:n=[]}=e;return l.$$set=s=>{"items"in s&&t(0,n=s.items)},[n]}class Ve extends G{constructor(e){super(),P(this,e,Le,He,X,{items:0})}}var je={prefix:"fab",iconName:"steam",icon:[496,512,[],"f1b6","M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"]},Be={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9l0 0c4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5s15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"]},Fe={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ie={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},De={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},We={prefix:"fab",iconName:"tumblr",icon:[320,512,[],"f173","M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"]};function Ye(l){let e,t,n,s,c,i,m,o,h,f,r,a,g,A,L,M,S;g=new Ne({props:{items:l[0]}});const V=l[3].default,C=de(V,l,l[2],null);return M=new Ve({props:{items:l[1]}}),{c(){e=w("meta"),t=w("meta"),n=w("meta"),s=w("meta"),c=q(),i=w("meta"),m=q(),o=w("meta"),h=q(),f=w("meta"),r=q(),a=w("div"),I(g.$$.fragment),A=q(),C&&C.c(),L=q(),I(M.$$.fragment),this.h()},l(d){const p=ye("svelte-lkwqao",document.head);e=z(p,"META",{property:!0,content:!0}),t=z(p,"META",{property:!0,content:!0}),n=z(p,"META",{property:!0,content:!0}),s=z(p,"META",{property:!0,content:!0}),p.forEach(_),c=T(d),i=z(d,"META",{name:!0,content:!0}),m=T(d),o=z(d,"META",{property:!0,content:!0}),h=T(d),f=z(d,"META",{property:!0,content:!0}),r=T(d),a=z(d,"DIV",{class:!0});var N=E(a);D(g.$$.fragment,N),A=T(N),C&&C.l(N),L=T(N),D(M.$$.fragment,N),N.forEach(_),this.h()},h(){document.title="Evorp's Website",u(e,"property","og:type"),u(e,"content","website"),u(t,"property","og:title"),u(t,"content","Evorp's Website"),u(n,"property","og:description"),u(n,"content","idk at this point either"),u(s,"property","og:image"),u(s,"content","https://raw.githubusercontent.com/3vorp/3vorp.github.io/main/static/embed_banner.jpg"),u(i,"name","twitter:card"),u(i,"content","summary_large_image"),u(o,"property","twitter:description"),u(o,"content","idk at this point either"),u(f,"property","twitter:image"),u(f,"content","https://raw.githubusercontent.com/3vorp/3vorp.github.io/main/static/embed_banner.jpg"),u(a,"class","site-container svelte-1qwwp7i")},m(d,p){y(document.head,e),y(document.head,t),y(document.head,n),y(document.head,s),b(d,c,p),b(d,i,p),b(d,m,p),b(d,o,p),b(d,h,p),b(d,f,p),b(d,r,p),b(d,a,p),W(g,a,null),y(a,A),C&&C.m(a,null),y(a,L),W(M,a,null),S=!0},p(d,[p]){C&&C.p&&(!S||p&4)&&ge(C,V,d,d[2],S?be(V,d[2],p,null):pe(d[2]),null)},i(d){S||(O(g.$$.fragment,d),O(C,d),O(M.$$.fragment,d),S=!0)},o(d){H(g.$$.fragment,d),H(C,d),H(M.$$.fragment,d),S=!1},d(d){d&&(_(c),_(i),_(m),_(o),_(h),_(f),_(r),_(a)),_(e),_(t),_(n),_(s),Y(g),C&&C.d(d),Y(M)}}}function Re(l,e,t){let{$$slots:n={},$$scope:s}=e;const c=[{title:"Home",href:"/"},{title:"Commissions",href:"/commissions"},{title:"Projects",href:"/projects"},{title:"About",href:"/about"}],i=[{title:"GitHub",href:"https://github.com/3vorp",icon:Fe},{title:"Twitter",href:"https://twitter.com/3vorp",icon:De},{title:"Reddit",href:"https://reddit.com/u/3vorp",icon:Be},{title:"Tumblr",href:"https://tumblr.com/evorp",icon:We},{title:"YouTube",href:"https://www.youtube.com/@evorp",icon:Ie},{title:"Steam",href:"https://steamcommunity.com/id/3vorp/",icon:je}];return l.$$set=m=>{"$$scope"in m&&t(2,s=m.$$scope)},[c,i,s,n]}class Ke extends G{constructor(e){super(),P(this,e,Re,Ye,X,{})}}export{Ke as component,Pe as universal};

import{R as F,S as N,b as h,x as U,T as m,U as o,V as x,W as y,X as M,Y as $,g as S,Z as V,_ as Z,$ as z,a0 as g,a1 as G,a2 as H,a3 as W,f as p,a4 as X,D as j,a5 as J,a6 as K,y as q,a7 as Q}from"./runtime.BFZKECkw.js";import{p as k}from"./if.L3nNCnrA.js";import{c as rr}from"./store.Da2J2Vcf.js";function B(r,a){return r===a||(r==null?void 0:r[m])===a}function fr(r={},a,f,v){return F(()=>{var s,i;return N(()=>{s=i,i=[],h(()=>{r!==f(...i)&&(a(r,...i),s&&B(f(...s),r)&&a(null,...s))})}),()=>{U(()=>{i&&B(f(...i),r)&&a(null,...i)})}}),r}function Y(r){for(var a=q,f=q;a!==null&&!(a.f&(Z|z));)a=a.parent;try{return g(a),r()}finally{g(f)}}function sr(r,a,f,v){var L;var s=(f&G)!==0,i=(f&H)!==0,O=(f&W)!==0,w=(f&Q)!==0,T=!1,n;O?[n,T]=rr(()=>r[a]):n=r[a];var l=(L=o(r,a))==null?void 0:L.set,t=v,E=!0,P=!1,A=()=>(P=!0,E&&(E=!1,w?t=h(v):t=v),t);n===void 0&&v!==void 0&&(l&&i&&x(),n=A(),l&&l(n));var u;if(i)u=()=>{var e=r[a];return e===void 0?A():(E=!0,P=!1,e)};else{var D=Y(()=>(s?p:X)(()=>r[a]));D.f|=y,u=()=>{var e=S(D);return e!==void 0&&(t=void 0),e===void 0?t:e}}if(!(f&M))return u;if(l){var C=r.$$legacy;return function(e,_){return arguments.length>0?((!i||!_||C||T)&&l(_?u():e),e):u()}}var R=!1,b=!1,I=j(n),c=Y(()=>p(()=>{var e=u(),_=S(I),d=J;return R||e===void 0&&d.f&K?(R=!1,b=!0,_):(b=!1,I.v=e)}));return s||(c.equals=$),function(e,_){if(arguments.length>0){const d=_?S(c):i&&O?k(e):e;return c.equals(d)||(R=!0,V(I,d),P&&t!==void 0&&(t=d),h(()=>S(c))),e}return S(c)}}export{fr as b,sr as p};

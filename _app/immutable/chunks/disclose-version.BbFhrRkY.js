import{y as i,c as v,aB as m,aC as T,h as u,f as d,s as w,k as p,a as y}from"./runtime.C5VmsT4o.js";function h(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=p;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function M(r,t){var e=(t&m)!==0,l=(t&T)!==0,s,_=!r.startsWith("<!>");return()=>{if(u)return n(d,null),d;s===void 0&&(s=h(_?r:"<!>"+r),e||(s=i(s)));var a=l?document.importNode(s,!0):s.cloneNode(!0);if(e){var c=i(a),o=a.lastChild;n(c,o)}else n(a,a);return a}}function x(r,t,e="svg"){var l=!r.startsWith("<!>"),s=(t&m)!==0,_=`<${e}>${l?r:"<!>"+r}</${e}>`,a;return()=>{if(u)return n(d,null),d;if(!a){var c=h(_),o=i(c);if(s)for(a=document.createDocumentFragment();i(o);)a.appendChild(i(o));else a=i(o)}var f=a.cloneNode(!0);if(s){var g=i(f),E=f.lastChild;n(g,E)}else n(f,f);return f}}function L(r=""){if(!u){var t=v(r+"");return n(t,t),t}var e=d;return e.nodeType!==3&&(e.before(e=v()),w(e)),n(e,e),e}function P(){if(u)return n(d,null),d;var r=document.createDocumentFragment(),t=document.createComment(""),e=v();return r.append(t,e),n(t,e),r}function b(r,t){if(u){p.nodes_end=d,y();return}r!==null&&r.before(t)}const C="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(C);export{b as a,n as b,P as c,L as d,x as n,M as t};

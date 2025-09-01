
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as y}from"./index-DvkLrEO_.js";import{d as w,a9 as R,r as n,h as B,c as H,o as f,w as F,aW as L,as as T,a as v,k as b,l as C,u,F as M,t as k}from"./index-g8ljh8w2.js";const N={class:"m-4 flex flex-col gap-4"},S={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},E=w({__name:"loadmore",setup(j){const s=R("layoutRef"),i=n(0),p=n(10),t=n(0),e=n([]);function l(){L.get("page/loadmore",{baseURL:"/mock",params:{from:i.value*p.value,limit:p.value}}).then(r=>{e.value.push(...r.data.list),i.value+=1,t.value=r.data.total,T(()=>{var a,o,g,d,_,h;const m=(g=(o=(a=s.value)==null?void 0:a.ref)==null?void 0:o.clientHeight)!=null?g:0,c=(h=(_=(d=s.value)==null?void 0:d.ref)==null?void 0:_.scrollHeight)!=null?h:0;m===c&&e.value.length<t.value&&l()})})}function x(){e.value.length<t.value&&l()}return B(()=>{l()}),(r,m)=>{const c=y;return f(),H(c,{ref_key:"layoutRef",ref:s,navbar:"","navbar-start-side":"back",onReachBottom:x},{default:F(()=>[v("div",N,[(f(!0),b(M,null,C(u(e),(a,o)=>(f(),b("div",{key:o,class:"bg-[var(--g-container-bg)] p-4"},k(a),1))),128)),v("div",S,k(u(e).length<u(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{E as default};

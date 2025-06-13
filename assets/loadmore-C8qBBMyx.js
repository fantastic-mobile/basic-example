
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as k}from"./index-BPvONAVQ.js";import{d as x,a8 as y,r as n,h as w,c as R,o as f,w as B,aV as H,av as F,a as _,k as v,l as L,u,F as T,t as h}from"./index-DEEBePD3.js";const C={class:"m-4 flex flex-col gap-4"},M={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},j=x({__name:"loadmore",setup(N){const s=y("layoutRef"),i=n(0),p=n(10),t=n(0),e=n([]);function l(){H.get("page/loadmore",{baseURL:"/mock",params:{from:i.value*p.value,limit:p.value}}).then(r=>{e.value.push(...r.data.list),i.value+=1,t.value=r.data.total,F(()=>{var a,o,g,d;const m=((o=(a=s.value)==null?void 0:a.ref)==null?void 0:o.clientHeight)??0,c=((d=(g=s.value)==null?void 0:g.ref)==null?void 0:d.scrollHeight)??0;m===c&&e.value.length<t.value&&l()})})}function b(){e.value.length<t.value&&l()}return w(()=>{l()}),(r,m)=>{const c=k;return f(),R(c,{ref_key:"layoutRef",ref:s,navbar:"","navbar-start-side":"back",onReachBottom:b},{default:B(()=>[_("div",C,[(f(!0),v(T,null,L(u(e),(a,o)=>(f(),v("div",{key:o,class:"bg-[var(--g-container-bg)] p-4"},h(a),1))),128)),_("div",M,h(u(e).length<u(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{j as default};

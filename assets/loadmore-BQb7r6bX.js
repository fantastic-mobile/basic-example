
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as x}from"./index-CP5yKhBn.js";import{d as k,$ as y,r as n,x as w,b as R,w as B,a0 as H,a1 as L,o as f,i as _,j as b,A as T,f as i,F as j,t as v}from"./index-RSG2gzZ9.js";const C={class:"m-4 flex flex-col gap-4"},F={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},z=k({__name:"loadmore",setup(M){const s=y("layoutRef"),u=n(0),p=n(10),t=n(0),e=n([]);function l(){H.get("page/loadmore",{baseURL:"/mock",params:{from:u.value*p.value,limit:p.value}}).then(r=>{e.value.push(...r.data.list),u.value+=1,t.value=r.data.total,L(()=>{var a,o,m,d;const g=((o=(a=s.value)==null?void 0:a.ref)==null?void 0:o.clientHeight)??0,c=((d=(m=s.value)==null?void 0:m.ref)==null?void 0:d.scrollHeight)??0;g===c&&e.value.length<t.value&&l()})})}function h(){e.value.length<t.value&&l()}return w(()=>{l()}),(r,g)=>{const c=x;return f(),R(c,{ref_key:"layoutRef",ref:s,navbar:"","navbar-start-side":"back",onReachBottom:h},{default:B(()=>[_("div",C,[(f(!0),b(j,null,T(i(e),(a,o)=>(f(),b("div",{key:o,class:"bg-[var(--g-container-bg)] p-4"},v(a),1))),128)),_("div",F,v(i(e).length<i(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{z as default};


/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as x}from"./index-TjNgPt2n.js";import{d as k,L as y,r as n,y as w,b as R,o as f,w as B,g as _,j as b,F as H,A as L,e as i,t as v,M,N}from"./index-DQKLngh4.js";const T={class:"m-4 flex flex-col gap-4"},j={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},z=k({__name:"loadmore",setup(C){const s=y("layoutRef"),u=n(0),p=n(10),t=n(0),e=n([]);function l(){M.get("page/loadmore",{baseURL:"/mock",params:{from:u.value*p.value,limit:p.value}}).then(r=>{e.value.push(...r.data.list),u.value+=1,t.value=r.data.total,N(()=>{var a,o,m,d;const g=((o=(a=s.value)==null?void 0:a.ref)==null?void 0:o.clientHeight)??0,c=((d=(m=s.value)==null?void 0:m.ref)==null?void 0:d.scrollHeight)??0;g===c&&e.value.length<t.value&&l()})})}function h(){e.value.length<t.value&&l()}return w(()=>{l()}),(r,g)=>{const c=x;return f(),R(c,{ref_key:"layoutRef",ref:s,navbar:"","navbar-start-side":"back",onReachBottom:h},{default:B(()=>[_("div",T,[(f(!0),b(H,null,L(i(e),(a,o)=>(f(),b("div",{key:o,class:"bg-[var(--g-container-bg)] p-4"},v(a),1))),128)),_("div",j,v(i(e).length<i(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{z as default};


/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as v}from"./index-B7IbbreD.js";import{d as b,a9 as k,r as a,h as x,c as y,o as r,w,aW as R,as as B,a as p,k as m,l as H,u as c,F,t as g}from"./index-Cbr0Enkr.js";const L={class:"m-4 flex flex-col gap-4"},T={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},S=b({__name:"loadmore",setup(C){const o=k("layoutRef"),f=a(0),u=a(10),t=a(0),e=a([]);function n(){R.get("page/loadmore",{baseURL:"/mock",params:{from:f.value*u.value,limit:u.value}}).then(s=>{e.value.push(...s.data.list),f.value+=1,t.value=s.data.total,B(()=>{const i=o.value?.ref?.clientHeight??0,l=o.value?.ref?.scrollHeight??0;i===l&&e.value.length<t.value&&n()})})}function d(){e.value.length<t.value&&n()}return x(()=>{n()}),(s,i)=>{const l=v;return r(),y(l,{ref_key:"layoutRef",ref:o,navbar:"","navbar-start-side":"back",onReachBottom:d},{default:w(()=>[p("div",L,[(r(!0),m(F,null,H(c(e),(_,h)=>(r(),m("div",{key:h,class:"bg-[var(--g-container-bg)] p-4"},g(_),1))),128)),p("div",T,g(c(e).length<c(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{S as default};

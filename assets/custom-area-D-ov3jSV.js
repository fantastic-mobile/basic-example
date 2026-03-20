
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{At as e,E as t,J as n,T as r,W as i,at as a,b as o,dt as s,gt as c,i as l,w as u,wt as d,x as f}from"./vue-router-CRv8OWyd.js";import{a as p,v as m}from"./components-DtufhiyR.js";import"./settings-IUgw0dBy.js";import{n as h}from"./index-BH0TWGn5.js";import{t as g}from"./AppPageLayout-Bi2qQiQ2.js";var _={class:`p-4 flex flex-col gap-4`},v=t({__name:`custom-area`,setup(t){let v=l(),y=c(!1),b=c(!1),x=[{name:`选项一`},{name:`选项二`},{name:`选项三`}];function S(e){b.value=!1,h(e.name)}return(t,c)=>{let l=p,h=m,C=n(`van-action-sheet`),w=g;return i(),f(w,{navbar:``},{"navbar-start":a(()=>[r(l,{modelValue:d(y),"onUpdate:modelValue":c[0]||(c[0]=e=>s(y)?y.value=e:null),size:`16px`},null,8,[`modelValue`])]),"navbar-end":a(()=>[r(h,{size:`sm`,onClick:c[1]||(c[1]=e=>b.value=!0)},{default:a(()=>[...c[4]||(c[4]=[u(` 操作按钮 `,-1)])]),_:1}),r(C,{show:d(b),"onUpdate:show":c[2]||(c[2]=e=>s(b)?b.value=e:null),actions:x,onSelect:S},null,8,[`show`])]),default:a(()=>[o(`div`,_,[o(`div`,null,` Switch: `+e(d(y)),1),r(h,{onClick:c[3]||(c[3]=e=>d(v).back())},{default:a(()=>[...c[5]||(c[5]=[u(` 返回 `,-1)])]),_:1})])]),_:1})}}});export{v as default};
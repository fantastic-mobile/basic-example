
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{B as e,Et as t,S as n,W as r,_ as i,b as a,ft as o,g as s,st as c,tt as l,x as u,xt as d}from"./vue.runtime.esm-bundler-pXVAXY_H.js";import{o as f,x as p}from"./src-BMfsPoh9.js";import{n as m,o as h}from"./index-BYd4Ox5h.js";import{t as g}from"./AppPageLayout-3q-r4Vqb.js";var _={class:`p-4 flex flex-col gap-4`},v=n({__name:`custom-area`,setup(n){let v=h(),y=o(!1),b=o(!1),x=[{name:`选项一`},{name:`选项二`},{name:`选项三`}];function S(e){b.value=!1,m(e.name)}return(n,o)=>{let m=f,h=p,C=r(`van-action-sheet`),w=g;return e(),i(w,{navbar:``},{"navbar-start":l(()=>[u(m,{modelValue:d(y),"onUpdate:modelValue":o[0]||(o[0]=e=>c(y)?y.value=e:null),size:`16px`},null,8,[`modelValue`])]),"navbar-end":l(()=>[u(h,{size:`sm`,onClick:o[1]||(o[1]=e=>b.value=!0)},{default:l(()=>[...o[4]||(o[4]=[a(` 操作按钮 `,-1)])]),_:1}),u(C,{show:d(b),"onUpdate:show":o[2]||(o[2]=e=>c(b)?b.value=e:null),actions:x,onSelect:S},null,8,[`show`])]),default:l(()=>[s(`div`,_,[s(`div`,null,` Switch: `+t(d(y)),1),u(h,{onClick:o[3]||(o[3]=e=>d(v).back())},{default:l(()=>[...o[5]||(o[5]=[a(` 返回 `,-1)])]),_:1})])]),_:1})}}});export{v as default};
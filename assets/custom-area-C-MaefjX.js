
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as k}from"./index-TjNgPt2n.js";import{d as V,v as g,r as m,z as u,b as C,o as z,w as t,g as p,f as s,t as B,e as l,l as d,s as v,K as N}from"./index-DQKLngh4.js";const S={class:"flex flex-col gap-4 p-4"},T=V({__name:"custom-area",setup(h){const f=g(),a=m(!1),n=m(!1),_=[{name:"选项一"},{name:"选项二"},{name:"选项三"}];function c(r){n.value=!1,N(r.name)}return(r,e)=>{const w=u("van-switch"),i=u("van-button"),b=u("van-action-sheet"),x=k;return z(),C(x,{navbar:""},{"navbar-start":t(()=>[s(w,{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=o=>v(a)?a.value=o:null),size:"16px"},null,8,["modelValue"])]),"navbar-end":t(()=>[s(i,{size:"small",onClick:e[1]||(e[1]=o=>n.value=!0)},{default:t(()=>e[4]||(e[4]=[d(" 操作按钮 ")])),_:1}),s(b,{show:l(n),"onUpdate:show":e[2]||(e[2]=o=>v(n)?n.value=o:null),actions:_,onSelect:c},null,8,["show"])]),default:t(()=>[p("div",S,[p("div",null," Switch: "+B(l(a)),1),s(i,{onClick:e[3]||(e[3]=o=>l(f).back())},{default:t(()=>e[5]||(e[5]=[d(" 返回 ")])),_:1})])]),_:1})}}});export{T as default};


/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as x}from"./index-CP5yKhBn.js";import{d as V,r as m,b as C,w as t,y as g,z as u,o as y,e as s,f as l,q as p,k as d,i as f,t as z,Z as B}from"./index-RSG2gzZ9.js";const N={class:"flex flex-col gap-4 p-4"},T=V({__name:"custom-area",setup(S){const v=g(),a=m(!1),n=m(!1),_=[{name:"选项一"},{name:"选项二"},{name:"选项三"}];function c(r){n.value=!1,B(r.name)}return(r,e)=>{const w=u("van-switch"),i=u("van-button"),b=u("van-action-sheet"),k=x;return y(),C(k,{navbar:""},{"navbar-start":t(()=>[s(w,{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=o=>p(a)?a.value=o:null),size:"16px"},null,8,["modelValue"])]),"navbar-end":t(()=>[s(i,{size:"small",onClick:e[1]||(e[1]=o=>n.value=!0)},{default:t(()=>e[4]||(e[4]=[d(" 操作按钮 ")])),_:1}),s(b,{show:l(n),"onUpdate:show":e[2]||(e[2]=o=>p(n)?n.value=o:null),actions:_,onSelect:c},null,8,["show"])]),default:t(()=>[f("div",N,[f("div",null," Switch: "+z(l(a)),1),s(i,{onClick:e[3]||(e[3]=o=>l(v).back())},{default:t(()=>e[5]||(e[5]=[d(" 返回 ")])),_:1})])]),_:1})}}});export{T as default};

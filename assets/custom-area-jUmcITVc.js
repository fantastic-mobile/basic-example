
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as V}from"./index-BJssZ5f-.js";import{d as k,r,c as b,o as C,w as t,a as i,b as s,t as g,u as l,e as _,j as B,_ as S,i as p,m as $,al as F,aV as N}from"./index-C5B1XNGG.js";const y={class:"flex flex-col gap-4 p-4"},U=k({__name:"custom-area",setup(z){const c=B(),a=r(!1),n=r(!1),d=[{name:"选项一"},{name:"选项二"},{name:"选项三"}];function f(u){n.value=!1,N(u.name)}return(u,e)=>{const v=F,m=S,w=$("van-action-sheet"),x=V;return C(),b(x,{navbar:""},{"navbar-start":t(()=>[s(v,{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=o=>p(a)?a.value=o:null),size:"16px"},null,8,["modelValue"])]),"navbar-end":t(()=>[s(m,{size:"sm",onClick:e[1]||(e[1]=o=>n.value=!0)},{default:t(()=>e[4]||(e[4]=[_(" 操作按钮 ",-1)])),_:1,__:[4]}),s(w,{show:l(n),"onUpdate:show":e[2]||(e[2]=o=>p(n)?n.value=o:null),actions:d,onSelect:f},null,8,["show"])]),default:t(()=>[i("div",y,[i("div",null," Switch: "+g(l(a)),1),s(m,{onClick:e[3]||(e[3]=o=>l(c).back())},{default:t(()=>e[5]||(e[5]=[_(" 返回 ",-1)])),_:1,__:[5]})])]),_:1})}}});export{U as default};

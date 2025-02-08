
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as c,v as i,r as u,x as d,y as m,j as f,o as x,f as s,g as n,_,w as v,l as p,t as w,e as N,q as g}from"./index-DQKLngh4.js";const B={class:"min-h-screen flex flex-col items-center justify-center"},k={class:"flex flex-col items-center gap-4"},C=c({__name:"[...all]",setup(I){const a=i(),e=u({inter:Number.NaN,countdown:5});d(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),m(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){a.push("/")}return(h,t)=>{const l=_,r=g;return x(),f("div",B,[s(l,{name:"404",class:"text-[300px] -mt-9xl"}),n("div",k,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),s(r,{onClick:o},{default:v(()=>[p(w(N(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])}}});export{C as default};

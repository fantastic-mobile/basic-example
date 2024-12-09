
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as c,r as i,v as u,x as d,j as m,e as s,i as n,w as f,y as x,s as _,o as v,k as p,t as w,f as N,_ as k}from"./index-RSG2gzZ9.js";const B={class:"min-h-screen flex flex-col items-center justify-center"},g={class:"flex flex-col items-center gap-4"},C=c({__name:"[...all]",setup(I){const a=x(),e=i({inter:Number.NaN,countdown:5});u(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),d(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){a.push("/")}return(h,t)=>{const l=k,r=_;return v(),m("div",B,[s(l,{name:"404",class:"text-[300px] -mt-9xl"}),n("div",g,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),s(r,{onClick:o},{default:f(()=>[p(w(N(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])}}});export{C as default};

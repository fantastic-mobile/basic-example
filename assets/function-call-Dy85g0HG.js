
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a7 as a,a8 as s,a9 as i,aa as r,ab as c,e as l,g as u,ac as d}from"./index-BeSJOEf1.js";let o,t;const f=e=>i(e)?e:{message:e};function p(){({instance:t}=r({setup(){const{state:e,toggle:n}=c();return()=>l(d,u(e,{"onUpdate:show":n}),null)}}))}const g=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let m=g();const v=()=>{t&&t.toggle(!1)};function N(e){if(a)return t||p(),e=s({},m,f(e)),t.open(e),clearTimeout(o),e.duration>0&&(o=setTimeout(v,e.duration)),t}export{N as s};


/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{U as s,W as i,X as a,Z as r,$ as u,f as d,i as f,a0 as l}from"./index-DQKLngh4.js";let t,n;const c=e=>r(e)?e:{message:e};function p(){({instance:n}=a({setup(){const{state:e,toggle:o}=u();return()=>d(l,f(e,{"onUpdate:show":o}),null)}}))}const m=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let g=m();const O=()=>{n&&n.toggle(!1)};function k(e){if(s)return n||p(),e=i({},g,c(e)),n.open(e),clearTimeout(t),e.duration>0&&(t=setTimeout(O,e.duration)),n}export{k as s};

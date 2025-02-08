
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as G,a8 as K,ac as Q,L as k,y as F,ad as U,r as b,ae as L,a2 as X,c as Y,z as Z,j as r,o as n,R as j,g as s,f as g,a7 as z,e as t,ab as M,p as v,t as p,n as f,w,k as c,_ as ee,F as N,a9 as P,aa as I,T as V,A as te,b as W,H as ae}from"./index-DQKLngh4.js";const se={class:"h-full flex-center whitespace-nowrap px-2"},ne={class:"min-w-0 flex-1 text-center text-sm"},oe={class:"truncate"},re={class:"h-full flex-center whitespace-nowrap px-2"},le={key:0,class:"copyright relative flex flex-wrap items-center justify-center p-4 text-sm text-stone-5 mix-blend-difference"},ie={key:0,class:"px-1"},ce=["href"],de={key:1,class:"px-1"},pe={key:2,href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener",class:"px-1 text-center text-stone-5 no-underline"},fe={class:"h-full flex-center px-4"},ue={key:1,class:"text-xs"},he=G({name:"PageLayout",__name:"index",props:{navbar:{type:Boolean,default:void 0},tabbar:{type:Boolean,default:void 0},copyright:{type:Boolean,default:void 0},backTop:{type:Boolean,default:void 0}},emits:["scroll","reachTop","reachBottom"],setup(be,{expose:D,emit:E}){const y=E,T=K(),a=Q(),l=k("layoutRef");D({ref:l});function J(e){x(),m(),_(),y("scroll",e),e.target.scrollTop===0&&y("reachTop"),Math.ceil(e.target.scrollTop+e.target.clientHeight)>=e.target.scrollHeight&&y("reachBottom")}F(()=>{x(),m(),_()}),U(()=>{x(),m(),_()});const S=k("startSideRef"),C=k("endSideRef"),u=b(0);F(()=>{const{width:e}=L(S,void 0,{box:"border-box"}),{width:d}=L(C,void 0,{box:"border-box"});X([e,d],i=>{u.value=Math.max(...i)},{immediate:!0})});const R=b(0);function x(){var e;R.value=((e=l.value)==null?void 0:e.scrollTop)??0}const B=b(!1);function m(){var h,o,A;const e=((h=l.value)==null?void 0:h.scrollTop)??0,d=((o=l.value)==null?void 0:o.clientHeight)??0,i=((A=l.value)==null?void 0:A.scrollHeight)??0;B.value=Math.ceil(e+d)<i}const O=Y(()=>a.settings.tabbar.list.length>0?a.settings.tabbar.list:[]);function H(e){return T.fullPath===e.path?e.activeIcon??e.icon??void 0:e.icon??void 0}const $=b(0);function _(){var e;$.value=((e=l.value)==null?void 0:e.scrollTop)??0}function q(){var e;(e=l.value)==null||e.scrollTo({top:0,behavior:"smooth"})}return(e,d)=>{const i=ee,h=Z("RouterLink");return n(),r("div",{ref_key:"layoutRef",ref:l,class:"relative h-vh flex flex-col overflow-auto overscroll-none supports-[(height:100dvh)]:h-dvh",onScroll:J},[j(s("header",{class:f(["navbar w-full flex-center bg-[var(--g-navbar-bg)] text-[var(--g-navbar-color)] transition-all pt-safe h+safe-t-[var(--g-navbar-height)]",{"shadow-top":t(R)}])},[s("div",{class:"h-full flex items-center justify-start",style:M({...t(u)&&{width:`${t(u)}px`}})},[s("div",{ref_key:"startSideRef",ref:S,class:"h-full flex-center whitespace-nowrap"},[s("div",se,[v(e.$slots,"navbar-start",{},void 0,!0)])],512)],4),s("div",ne,[s("div",oe,p(t(a).title),1)]),s("div",{class:"h-full flex items-center justify-end",style:M({...t(u)&&{width:`${t(u)}px`}})},[s("div",{ref_key:"endSideRef",ref:C,class:"h-full flex-center whitespace-nowrap"},[s("div",re,[v(e.$slots,"navbar-end",{},void 0,!0)])],512)],4)],2),[[z,e.navbar??t(a).settings.navbar.enable]]),s("div",{class:f(["relative flex flex-1 flex-col transition-margin",{"mt+safe-[var(--g-navbar-height)]":e.navbar??t(a).settings.navbar.enable,"mb+safe-[var(--g-tabbar-height)]":e.tabbar??t(a).settings.tabbar.enable}])},[v(e.$slots,"default",{},void 0,!0),g(V,P(I({enterActiveClass:"ease-out",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"})),{default:w(()=>[e.copyright??t(a).settings.copyright.enable?(n(),r("div",le,[d[0]||(d[0]=s("span",{class:"px-1"},"Copyright",-1)),g(i,{name:"i-ri:copyright-line",class:"text-lg"}),t(a).settings.copyright.dates?(n(),r("span",ie,p(t(a).settings.copyright.dates),1)):c("",!0),t(a).settings.copyright.company?(n(),r(N,{key:1},[t(a).settings.copyright.website?(n(),r("a",{key:0,href:t(a).settings.copyright.website,target:"_blank",rel:"noopener",class:"px-1 text-center text-stone-5 no-underline"},p(t(a).settings.copyright.company),9,ce)):(n(),r("span",de,p(t(a).settings.copyright.company),1))],64)):c("",!0),t(a).settings.copyright.beian?(n(),r("a",pe,p(t(a).settings.copyright.beian),1)):c("",!0)])):c("",!0)]),_:1},16)],2),j(s("footer",{class:f(["tabbar w-full bg-[var(--g-tabbar-bg)] transition-all pb-safe h+safe-b-[calc(var(--g-tabbar-height))]",{"shadow-bottom":t(B)}])},[s("div",fe,[v(e.$slots,"tabbar",{},()=>[(n(!0),r(N,null,te(t(O),o=>(n(),W(h,{key:JSON.stringify(o),class:f(["flex flex-1 flex-col items-center gap-[2px] text-[var(--g-tabbar-color)] no-underline transition-all",{"text-[var(--g-tabbar-active-color)]!":t(T).fullPath===o.path}]),to:o.path,replace:""},{default:w(()=>[H(o)?(n(),W(i,{key:0,name:H(o)??"",class:f(o.text?"text-6":"text-8")},null,8,["name","class"])):c("",!0),o.text?(n(),r("div",ue,p(o.text),1)):c("",!0)]),_:2},1032,["class","to"]))),128))],!0)])],2),[[z,e.tabbar??t(a).settings.tabbar.enable]]),g(V,P(I({enterActiveClass:"ease-out duration-300",enterFromClass:"opacity-0 translate-y-4",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"ease-in duration-200",leaveFromClass:"opacity-100 scale-100",leaveToClass:"opacity-0 scale-50"})),{default:w(()=>[(e.backTop??t(a).settings.app.enableBackTop)&&t($)>=200?(n(),r("div",{key:0,class:f(["backtop h-12 w-12 flex cursor-pointer items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-stone-3 ring-inset active:bg-stone-1 dark-bg-dark dark-ring-stone-7 dark-active:bg-stone-9",{"bottom+safe-[calc(var(--g-tabbar-height)+16px)]!":e.tabbar??t(a).settings.tabbar.enable}]),onClick:q},[g(i,{name:"i-icon-park-outline:to-top-one",class:"text-6"})],2)):c("",!0)]),_:1},16)],544)}}}),ve=ae(he,[["__scopeId","data-v-ad7e4bcc"]]);export{ve as _};

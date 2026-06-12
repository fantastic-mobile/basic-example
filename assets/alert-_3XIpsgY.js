
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{B as e,S as t,_ as n,b as r,g as i,tt as a,x as o,y as s}from"./vue.runtime.esm-bundler-pXVAXY_H.js";import{D as c,d as l,k as u,x as d}from"./src-BMfsPoh9.js";import{t as f}from"./AppPageLayout-3q-r4Vqb.js";var p={};function m(t,r){let i=c;return e(),n(i,{icon:`i-lucide:info`,title:`提示信息`,description:`这是一条普通提示，用于展示页面说明或操作反馈。`})}var h=u(p,[[`render`,m]]),g={},_={class:`space-y-4`};function v(t,n){let r=c;return e(),s(`div`,_,[o(r,{icon:`i-lucide:info`,title:`普通提示`,description:`数据已同步完成，可以继续后续操作。`}),o(r,{icon:`i-lucide:circle-alert`,title:`危险提示`,description:`删除后数据将无法恢复，请谨慎操作。`,variant:`destructive`})])}var y=u(g,[[`render`,v]]),b={};function x(t,s){let l=d,u=c;return e(),n(u,{icon:`i-lucide:terminal`,title:`命令执行完成`},{description:a(()=>[i(`div`,null,[s[1]||(s[1]=r(` 已成功生成文件，可继续进行下一步操作。 `,-1)),o(l,{variant:`link`,class:`px-0 h-auto`},{default:a(()=>[...s[0]||(s[0]=[r(` 查看详情 `,-1)])]),_:1})])]),_:1})}var S=u(b,[[`render`,x]]),C=t({__name:`index`,setup(t){return(t,r)=>{let s=l,c=f;return e(),n(c,{navbar:``},{default:a(()=>[i(`div`,null,[o(s,null,{default:a(()=>[o(h)]),_:1}),o(s,{title:`不同样式`},{default:a(()=>[o(y)]),_:1}),o(s,{title:`自定义描述`},{default:a(()=>[o(S)]),_:1})])]),_:1})}}});export{C as default};
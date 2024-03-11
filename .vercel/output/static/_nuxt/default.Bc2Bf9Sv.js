import{d as p,aK as d,bI as v,Q as b,b as h,c as y,g as n,w as s,aO as C,bJ as g,bK as w,bL as x,bM as $,ai as A,E as _,bw as E,bN as L,_ as z}from"./entry.BA3wuCO8.js";const D=L(()=>z(()=>import("./ContentSearch.C245FJTR.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(t=>t.default||t)),O=p({__name:"default",async setup(t){let a,e;const{data:o}=([a,e]=d(()=>C("navigation",()=>E(),{default:()=>[]})),a=await a,e(),a),{data:i}=v("/api/search.json",{default:()=>[],server:!1},"$i9bCpVDU6M");return b("navigation",o),(c,M)=>{const l=g,r=w,u=x,f=D,m=$;return h(),y("div",null,[n(l),n(r,null,{default:s(()=>[A(c.$slots,"default")]),_:3}),n(u),n(m,null,{default:s(()=>[n(f,{files:_(i),navigation:_(o)},null,8,["files","navigation"])]),_:1})])}}});export{O as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ContentSearch.C245FJTR.js","./entry.BA3wuCO8.js","./entry.DzTxnYKz.css","./form.C5s4vLHx.js","./useShortcuts.CB9L41Z1.js","./ContentSearch.Df7FdNLH.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

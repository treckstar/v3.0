import{_ as w,a as S}from"./PageBody.vue.NHciShxt.js";import x from"./ContentRenderer.-4Gl4mgB.js";import{_ as P,a as U}from"./ContentToc.vue.DJFFHZ95.js";import{d as b,v as B,aK as d,aL as E,aM as V,D as A,E as t,b as r,ah as p,av as D,w as c,f as l,aO as m,b6 as M,aS as N,g as i,c as T,s as f,aQ as H}from"./entry.BA3wuCO8.js";import"./ContentRendererMarkdown.vue.DxIvc7Eh.js";const O={key:1},F=b({__name:"[...slug]",async setup(R){let a,o;const s=B(),{data:e}=([a,o]=d(()=>m(s.path,()=>f(s.path).findOne(),"$tVA6J66VEN")),a=await a,o(),a);if(!e.value)throw E({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:u}=([a,o]=d(()=>m(`${s.path}-surround`,()=>f("/docs").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(H(s.path)),{default:()=>[]})),a=await a,o(),a);V({title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description});const h=A(()=>M(e.value));return(q,J)=>{const g=w,k=x,v=P,y=S,C=U,$=N;return t(e)?(r(),p($,{key:0},D({default:c(()=>[i(g,{title:t(e).title,description:t(e).description,links:t(e).links,headline:t(h)},null,8,["title","description","links","headline"]),i(y,{prose:""},{default:c(()=>{var n;return[t(e).body?(r(),p(k,{key:0,value:t(e)},null,8,["value"])):l("",!0),(n=t(u))!=null&&n.length?(r(),T("hr",O)):l("",!0),i(v,{surround:t(u)},null,8,["surround"])]}),_:1})]),_:2},[t(e).toc!==!1?{name:"right",fn:c(()=>{var n,_;return[i(C,{links:(_=(n=t(e).body)==null?void 0:n.toc)==null?void 0:_.links},null,8,["links"])]}),key:"0"}:void 0]),1024)):l("",!0)}}});export{F as default};

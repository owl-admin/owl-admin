import{d as c,bw as p,a1 as _,D as u,Y as d,V as l}from"./index-a7c84691.js";import{i as f,a as g}from"./base-e6b44cf5.js";import{s as h}from"./settings-2b101594.js";import{s as x}from"./index-2693c449.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const P={id:"amis-region"},R=c({__name:"index",setup(S){const o=p(),n=_(),a=amisRequire("amis/embed"),i=amisRequire("amis");x(i);const r={fetcher:({url:e,method:s,data:t})=>g(e,s,t),jumpTo:(e,s)=>{s!=null&&s.blank?window.open(e):n.routerPush(e)},updateLocation:()=>{}},m=e=>{let s=h.setStore(l()).getSettingItem("locale")||"zh-CN";const t={locale:s=="en"?"en-US":s};a.embed("#amis-region",e,t,r)};return(()=>{f(o.path).then(e=>m(e.data))})(),(e,s)=>(u(),d("div",P))}});const B=b(R,[["__scopeId","data-v-2345c795"]]);export{B as default};

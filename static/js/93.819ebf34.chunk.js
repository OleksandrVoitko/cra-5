"use strict";(self.webpackChunkcra_5=self.webpackChunkcra_5||[]).push([[93],{267:(e,t,a)=>{a.d(t,{M1:()=>o,TP:()=>s,gy:()=>i,rj:()=>c});var r=a(294);const n="9d3b2d59c7632f197e52385ff97229b9";r.Z.defaults.baseURL="https://api.themoviedb.org/3";const c=async()=>{try{return(await r.Z.get("trending/movie/day?api_key=".concat(n))).data.results}catch(e){console.error(e)}},i=async e=>{try{return(await r.Z.get("search/movie?query=".concat(e,"&api_key=").concat(n))).data.results}catch(t){return Promise.reject(new Error(t.message))}},s=async e=>{try{return(await r.Z.get("movie/".concat(e,"?api_key=").concat(n))).data}catch(t){console.error(t)}},o=async e=>{try{return(await r.Z.get("/movie/".concat(e,"/credits?api_key=").concat(n))).data.cast}catch(t){console.error(t)}}},93:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r,n,c,i,s=a(791),o=a(689),d=a(267),p=a(107),l=a(168),h=a(867);const g=h.ZP.ul(r||(r=(0,l.Z)(["\n  list-style: none;\n  display: grid;\n  place-items: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  grid-template-rows: repeat(1, 1fr);\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 30px;\n"]))),u=h.ZP.li(n||(n=(0,l.Z)(["\n  width: 160px;\n  height: 100%;\n  text-align: center;\n  border-radius: 8px;\n  box-shadow: 0 5px 10px rgb(0 0 0 / 50%);\n  overflow: hidden;\n"]))),m=h.ZP.img(c||(c=(0,l.Z)(["\n  width: 100%;\n  height: 250px;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),f=h.ZP.p(i||(i=(0,l.Z)(["\n  font-weight: 700;\n"])));var x=a(184);function y(){const{movieId:e}=(0,o.UO)(),[t,a]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(0,d.M1)(e).then(a)}),[e]),(0,x.jsx)(x.Fragment,{children:t&&(0,x.jsx)(g,{children:t.map((e=>(0,x.jsxs)(u,{children:[(0,x.jsx)(m,{src:e.profile_path?"".concat("https://image.tmdb.org/t/p/w300").concat(e.profile_path):p,alt:e.name,width:"100"}),(0,x.jsx)(f,{children:e.name}),(0,x.jsxs)("p",{children:["Character: ",e.character]})]},e.id)))})})}},107:(e,t,a)=>{e.exports=a.p+"static/media/noposter.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=93.819ebf34.chunk.js.map
(self.webpackChunk_klaviyo_onsite_modules=self.webpackChunk_klaviyo_onsite_modules||[]).push([[7327],{12311:function(e,t,n){"use strict";var a=n(45933);n(56816);const r="kl-post-identification-sync",s=JSON.stringify([]),i=(e,t)=>{(async e=>{const t=localStorage.getItem(r),n=null===t?[]:JSON.parse(t);n.push(e),n.length>1e4&&n.shift(),localStorage.setItem(r,JSON.stringify(n))})(e).finally((()=>{t&&t()}))},o=async(e=1e3)=>(async e=>{const t=JSON.parse(localStorage.getItem(r)||s),n=t.slice(0,e),a=t.slice(e);return{events:n||[],deleteCallback:async()=>{localStorage.setItem(r,JSON.stringify(a))}}})(e),l=()=>(async()=>{localStorage.removeItem(r)})(),c=(e,t)=>{var n;const a=(new Date).toISOString(),r={name:e.event,time:(null==(n=e.properties)?void 0:n.time)||a,properties:e.properties||{}};i(r,t)};var u=n(87789),p=n.n(u),d=(n(92461),n(44159),n(60873),n(13529)),m=n(7739),h=n(5762),y=n(59824),f=n(32138);n(70917),n(93677),n(84304),n(75723),n(20696),n(38528),n(72418);const v=new Set(["$exchange_id","email","id","$email","$id","$anonymous","$phone_number"]),b=["name","properties"],g=`${d.bl.url}${d.bl.eventBulkCreate}`;let _=!1;const O=(e,t,n,a)=>{const r=((e,t,n)=>({data:{type:"event-bulk-create",attributes:{profile:{data:{type:"profile",attributes:Object.assign({},t),meta:{identifiers:t}}},events:{data:e.map((e=>{const{name:t,properties:a}=e,r=p()(e,b),s=Object.assign({},a,n||{});return{type:"event",attributes:Object.assign({metric:{data:{type:"metric",attributes:{name:t}}}},r,{properties:s})}}))}}}}))(e,n,a);return(0,h.W)((()=>((e,t)=>fetch(`${g}/?company_id=${e}`,{method:"POST",headers:Object.assign({"Access-Control-Allow-Headers":"*","Content-Type":"application/json"},(0,m.h)(),{revision:"2024-10-15"}),body:JSON.stringify(t)}))(t,r)),5,1e3+1e3*Math.random(),[429])},k={$exchange_id:"_kx",email:"email",id:"id",$email:"email",$id:"id",$anonymous:"anonymous_id",$phone_number:"phone_number"},S=e=>{let t={};return Object.keys(k).forEach((n=>{if(a=n,Set.prototype.has.call(v,a)){const a=e[n];if(a){const e=("$email"===n||"email"===n)&&!(0,y.v)(a),r="$phone_number"===n&&!(0,f.y)(a);e||r||(t=Object.assign({},t,{[k[n]]:a}))}}var a})),t},$=(e,t,n,a)=>{if(0!==e.events.length)return O(e.events,t,n,a).then((async r=>{if(429===r.status)throw Error("Saving event cache due to rate limit.");return e.deleteCallback&&await e.deleteCallback(),o().then((e=>$(e,t,n,a)))}))},w=async(e,t,n,a)=>{const r=e||window.__klKey;if(!r||_)return;const s=S(t);s&&0!==Object.keys(s).length&&(_=!0,o().then((e=>$(e,r,s,n))).catch((e=>{throw console.error("Failed to send bulk events",e),e})).then((()=>{l(),a&&a()})).catch((e=>{console.error("Failed to clear storage",e)})).finally((()=>{_=!1})))};(()=>{(0,a.e)("cacheEvent",c),(0,a.e)("sendCachedEvents",w)})()},87789:function(e){e.exports=function(e,t){if(null==e)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.includes(a))continue;n[a]=e[a]}return n},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[2462],(function(){return t=12311,e(e.s=t);var t}));e.O()}]);
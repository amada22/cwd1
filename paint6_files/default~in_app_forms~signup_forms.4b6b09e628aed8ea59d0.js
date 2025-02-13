"use strict";(self.webpackChunk_klaviyo_onsite_modules=self.webpackChunk_klaviyo_onsite_modules||[]).push([[630],{82146:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(13529),o=n(87100);const i=`${r.bl.cachedUrl}/custom-fonts/api/v1/company-fonts/onsite`;var s=e=>(0,o.Z)(`${i}?company_id=${e}`).then((e=>e.json())).catch((e=>(console.error(e),Promise.resolve({}))));const a="kl-custom-fonts";var c=()=>!!document.getElementById(a);n(19986),n(26650);const u={100:"0,100","100italic":"1,100",200:"0,200","200italic":"1,200",300:"0,300","300italic":"1,300",regular:"0,400",italic:"1,400",500:"0,500","500italic":"1,500",600:"0,600","600italic":"1,600",700:"0,700","700italic":"1,700",800:"0,800","800italic":"1,800",900:"0,900","900italic":"1,900"},l=e=>`@import '${e}';`,g=e=>{const t=e.family.replace(/ /g,"+"),n=(e=>{const t=[];for(const n in e)if(e.hasOwnProperty(n)){const r=e[n];t.push(u[r.variant_value])}return t.sort(),t.join(";")})(e.variants);return 0===n.length?"":`family=${t}:ital,wght@${n}&`},m=e=>`${e}00`;var f=e=>{if(!(e.google&&0!==e.google.length||e.typekit&&0!==e.typekit.length||e.custom&&0!==e.custom.length))return;const{googleImport:t=""}=e.google.length>0?(e=>{let t="https://fonts.googleapis.com/css2?";for(const n in e)if(e.hasOwnProperty(n)){const r=e[n];t+=g(r)}return t+="display=swap",{googleImport:l(t)}})(e.google):{},{typekitImport:n=""}=e.typekit.length>0?(e=>{const t={};for(const n in e)if(e.hasOwnProperty(n)){const r=e[n].typekit_url,o=r.slice(r.length-4);t[l(".css"===o?r:`${r}.css`)]=!0}let n="";for(const e in t)t.hasOwnProperty(e)&&(n+=`${e}\n`);return{typekitImport:n}})(e.typekit):{},{customImport:r=""}=e.custom.length>0?(e=>{let t="";for(const n in e)if(e.hasOwnProperty(n)){const r=e[n],{family:o}=r;for(const e in r.variants)if(r.variants.hasOwnProperty(e)){const n=r.variants[e],i="i"===n.variant_value[0]?"italic":"normal",s=m(n.variant_value[1]);t+=`@font-face {\n        font-family: '${o}'; \n        src: url(${n.url});\n        font-weight: ${s};\n        font-style: ${i};\n        font-display: swap;\n      }\n`}}return{customImport:t}})(e.custom):{},o=`\n${t}\n${n}\n${r}`,i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=a,s.appendChild(document.createTextNode(o)),i.appendChild(s)};var d=e=>c()?Promise.resolve():s(e).then((e=>f(e))).catch((e=>console.error(e)))},84876:function(e,t,n){n.d(t,{ZP:function(){return ee}});var r=n(87789),o=n.n(r),i=(n(92461),n(70818),n(39265),n(44159),n(60873),n(83362),n(6451),n(81903)),s=n(91974),a=n(14555),c=n(70599),u=n(28391);var l=(e,t,n)=>{if(e.includes(t))return t;const r=Math.random();let o=0;return e.find((e=>{var t;const i=(null==(t=n[e])?void 0:t.allocation)||0;return o+=i,o>r}))},g=n(13529),m=n(37625),f=n(6199);const d=["action"],p=new f.fK.Entity("actions",{},{idAttribute:"actionId"}),T=new f.fK.Entity("components",{actionId:p},{idAttribute:"componentId",processStrategy:e=>{const t=o()(e,d);return Object.assign({},t,{actionId:e.action})}}),y=new f.fK.Entity("triggers",{},{idAttribute:"triggerId"}),I=new f.fK.Entity("rows",{components:[T]},{idAttribute:"rowId"}),w=new f.fK.Entity("columns",{rows:[I]},{idAttribute:"columnId"}),h=new f.fK.Entity("views",{columns:[w]},{idAttribute:"viewId"}),v=new f.fK.Entity("teasers",{},{idAttribute:"teaserId"}),O=new f.fK.Entity("triggerGroups",{triggers:[y]},{idAttribute:"triggerGroupId"}),F=new f.fK.Entity("formEntityFormViewDependencies",{component:T,view:h},{idAttribute:"id"}),E=new f.fK.Entity("formVersions",{views:[h],teasers:[v],triggerGroups:[O],formEntityFormViewDependencies:[F]},{idAttribute:"formVersionId"}),_=new f.fK.Entity("formExperiments",{formVersions:[E]},{idAttribute:"id"}),S=new f.fK.Entity("forms",{liveFormVersions:[E],editFormVersion:E,editExperiment:_,liveExperiment:_},{idAttribute:"formId"});var b=e=>(0,f.Fv)(e,[S]);let k;k=async({klaviyoCompanyId:e})=>{const t=`${g.cY.formsAPIRoot}/forms/api/v7/${e}/full-forms`,n=await(0,m.Z)({url:t});if(!n)return null;const{data:r,headers:o}=n,i={continentCode:o.get("client-geo-continent"),countryCode:o.get("client-geo-country")};return{data:Object.assign({},r,{fullForms:b(r.fullForms).entities}),geoIp:i}};var P=k,C=(n(60624),n(75479),n(35628)),R=n(70640);const D=`${g.bl.cachedUrl}/client/form-values-reports`,V=async(e,t)=>{if(!t.engagementCounters||0===t.engagementCounters.length)return null;const n=((e,t)=>{const n=new URLSearchParams({company_id:e});if(t.engagementCounters&&t.engagementCounters.length){const e=[];t.engagementCounters.reduce(((t,n)=>{const r=`"${n.formId}"`;return e.includes(r)||e.push(r),t.append(`timeframe[${n.formId}][${n.componentId}]`,n.lookback),t}),n),n.append("filter",`any(form_id,[${e}])`)}return n.toString()})(e,t),r=`${D}?${n}`;try{const e=await(0,C.k)(r,2e3,{headers:{revision:"2024-07-15"}});if(!e||e.status>=300)throw Error(`Error sending request: ${r}`);return(0,R._)(await e.json())}catch(e){return null}},N=[c.mX,c.Gh,c.vv,c.s4],$=[...N],A=[c.IF,c.w1,c.gW],U=[c.Uq],j=[...N,...A,c.TU],K=e=>`div.klaviyo-form-${e}`,L=(e,t,n,r)=>{const o=n||{},i=Object.keys(o);return i.push(c.NY),{triggers:i.filter((e=>!j.includes(e))).map((e=>({triggerType:e,expectedToPass:!0}))),callback:()=>{r({formVersionId:e,formId:t})}}};var W=n(78698);const M=(e,t,n,r,o=!0)=>{const i=[{triggers:[{triggerType:c.TU,expectedToPass:!0,continuousTrigger:!0}],callback:()=>{r({formVersionId:e,formId:t,allowReTriggering:!0,skipFormOpenQueueing:!0})}}];return n.length>0&&(n[0].displayOrder===W.$3||n[0].displayOrder===W.PC)&&o&&i.push({triggers:[],callback:()=>{r({formVersionId:e,formId:t,isTeaser:!0})}}),i},x=(e,t,n,r)=>({triggers:n.map((e=>({triggerType:e,expectedToPass:!0,continuousTrigger:U.includes(e)}))),callback:()=>{r({formVersionId:e,formId:t})}}),G=(e,t,n,r,o)=>r.length>0?r.map((r=>x(e,t,[...n,r],o))):[x(e,t,n,o)];n(61099);const Q=["data"],q=["liveFormVersions"],B=["triggerGroupId","triggers","formVersionId","used","triggerListenerValues"],Y=["formSettings","dynamicInfoConfig"];let X="string"==typeof window.__klKey?window.__klKey:null;const Z=async()=>{if(X="string"==typeof window.__klKey?window.__klKey:null,!X)return console.error("Company ID is not defined"),null;try{const e=await P({klaviyoCompanyId:X});if(!e)return null;const{data:t}=e,n=o()(e,Q),{fullForms:r,formSettings:i,dynamicInfoConfig:a}=t,c=(0,s.ZP)().modal.viewedForms;if(!r.forms)return null;const u=Object.values(r.forms).reduce(((e,t)=>{const n=o()(t,q);return e[t.formId]=Object.assign({},n,{liveFormVersion:l(t.liveFormVersions||[],c[t.formId],r.formVersions)}),e}),{});return Object.assign({data:Object.assign({},r,{forms:u}),formSettings:i,dynamicInfoConfig:a},n)}catch(e){return console.error(e),(e=>{(0,i.T)(e,{tags:{onInitialization:"True"},extra:{__klKey:window.__klKey}})})(e),null}};let H,z;const J=(e,t,r,o)=>{const i=async({formVersionIdToQualify:e})=>{var r;const i=null==(r=Object.values(t.data.forms).find((t=>t.liveFormVersion===e)))?void 0:r.formId;if(!i)return;const{logQualifyMetricAsync:s,setFormsFromData:a,updateStorageOnFormOpenOrQualify:c,useFormsStore:u,setFormSettingsFromData:l}=await Promise.all([n.e(2462),n.e(7595),n.e(7672),n.e(1680)]).then(n.bind(n,2896));void 0===H&&(H=a(t.data)),await H,c({formId:i,formVersionId:e},u.getState()),s({formId:i,companyId:X,action_type:"Qualify Form"}),void 0===z&&(z=l(o)),await z},s=async({formId:e,formVersionId:i,isTeaser:s=!1,allowReTriggering:a=!1,skipFormOpenQueueing:c=!1})=>{const{setFormsFromData:u,showTeaserIfNecessary:l,showFormWithTriggers:g,setFormSettingsFromData:m,useFormsStore:f,setFormDynamicInfoStateFromData:d}=await Promise.all([n.e(2462),n.e(7595),n.e(7672),n.e(1680)]).then(n.bind(n,2896));if(void 0===H&&(H=u(t.data)),await H,void 0===z&&(z=m(o)),await z,s){var p;l({formId:e,formVersionId:i,cookieTimeout:null==(p=r[i])||null==(p=p.triggers)||null==(p=p.COOKIE_TIMEOUT)?void 0:p.value,allowReTriggering:a,skipFormOpenQueueing:c})}else{var T,y,I;const e=null==(T=f.getState().onsiteState.dynamicInfoState)?void 0:T.isFetching,t=null!=(y=null==(I=f.getState().onsiteState.dynamicInfoState)?void 0:I.waitingForDynamicInfoToTrigger)?y:new Map;e?d({isFetching:!0,waitingForDynamicInfoToTrigger:null==t?void 0:t.set(i,{allowReTriggering:a,skipFormOpenQueueing:c})}):g({formVersionId:i,allowReTriggering:a,skipFormOpenQueueing:c})}},a=async({formId:e,formVersionId:t,isTeaser:r=!1,allowReTriggering:o=!1})=>{const{logQualifyMetricAsync:i}=await Promise.all([n.e(2462),n.e(7595),n.e(7672),n.e(1680)]).then(n.bind(n,2896));i({formId:e,companyId:null!=X?X:"",action_type:"Qualify Form"}),s({formId:e,formVersionId:t,isTeaser:r,allowReTriggering:o})},l={};return e.forEach((e=>{var n,o,g;const m=t.data.formVersions[e].formType;if(null==(n=r[e])||!n.triggers)return;const{triggers:f}=r[e],d=null!=(o=null==(g=t.data.formVersions[e].data)?void 0:g.independentTriggers)&&o,p=Object.values(t.data.teasers||[]).filter((t=>t.formVersionId===e)),T=t.data.formVersions[e].formId;if(m===u.LP)l[e]=[L(e,T,f,s)];else if(f[c.TU])t.data.formVersions[e].allocation<1?l[e]=M(e,T,p,a):l[e]=M(e,T,p,s);else{const n=Object.keys(f||{}),{independentTriggers:r,mandatoryTriggers:o}=n.reduce(((e,t)=>(d&&$.includes(t)?e.independentTriggers.push(t):e.mandatoryTriggers.push(t),e)),{independentTriggers:[],mandatoryTriggers:[]});l[e]=[...G(e,T,o,r,s),...M(e,T,p,s,!1)],p.length>0&&l[e].push(...((e,t,n,r,o)=>{const i=n||{},s=Object.keys(i),a=r.displayOrder===W.$3||r.displayOrder===W.PC,u=()=>o({formId:t,formVersionId:e,isTeaser:!0}),l=[];if(a&&N.some((e=>i[e]))){const e={triggers:s.filter((e=>!N.includes(e))).map((e=>({triggerType:e,expectedToPass:!0}))),callback:()=>{u()}};l.push(e)}if(i[c.IF]){const e={triggers:s.filter((e=>!N.includes(e))).map((e=>({triggerType:e,expectedToPass:e!==c.IF}))),callback:()=>{u()}};l.push(e)}return l})(e,T,f,p[0],s)),t.data.formVersions[e].allocation<1&&l[e].push(((e,t,n)=>{const r=t||{};return{triggers:Object.keys(r).filter((e=>!N.includes(e))).map((e=>({triggerType:e,expectedToPass:!0}))),callback:()=>{n({formVersionIdToQualify:e})}}})(e,f,i))}})),l};var ee=async()=>{const e=await Z();if(!e)return;const{formSettings:t,dynamicInfoConfig:r}=e,i=o()(e,Y);(0,a.sO)(t),null!=r&&r.engagementCounters&&r.engagementCounters.length>0&&(async e=>{if(!X)return;const{setFormDynamicInfoStateFromData:t,showFormWithTriggers:r,useFormsStore:o}=await Promise.all([n.e(2462),n.e(7595),n.e(7672),n.e(1680)]).then(n.bind(n,2896));t({isFetching:!0});try{const n=await V(X,e);if(null!=n&&n.data.attributes.results){var i;const e=n.data.attributes.results.reduce(((e,t)=>(e[t.groupings.blockId]=t.statistics,e)),{}),s=null==(i=o.getState().onsiteState.dynamicInfoState)?void 0:i.waitingForDynamicInfoToTrigger;t({isFetching:!1,results:e,waitingForDynamicInfoToTrigger:s}),null==s||s.forEach((({allowReTriggering:e,skipFormOpenQueueing:t},n)=>{r({formVersionId:n,allowReTriggering:e,skipFormOpenQueueing:t})}))}else t({isFetching:!1})}catch(e){console.error(e),t({isFetching:!1})}})(r);const s=Object.values(i.data.forms).map((e=>e.liveFormVersion)).filter((e=>void 0!==e)),l=((e,t)=>{const n={};return e.forEach((e=>{var r,i;const s=t.data.formVersions[e],a=s.formId,l=null==(r=s.triggerGroups)?void 0:r[0],g={formId:a,geoIp:t.geoIp,klaviyoCompanyId:X};if(l){const r=t.data.triggerGroups[l],i=o()(r,B);n[e]={triggers:Object.assign({},i),triggeringData:g}}const m=n[e];null!=m&&m.triggers||(n[e]={triggers:{},triggeringData:g}),void 0===(null==(i=n[e].triggers.COOKIE_TIMEOUT)?void 0:i.value)&&(n[e]={triggers:Object.assign({},n[e].triggers,{[c.IF]:{value:c.ve}}),triggeringData:g}),s.formType===u.LP&&a&&(n[e]={triggers:Object.assign({},n[e].triggers,{[c.NY]:{value:K(a)}}),triggeringData:g})})),n})(s,i),g=J(s,i,l,t);Promise.resolve().then((function(){if(!n.m[6451]){var e=new Error("Module '6451' is not available (weak dependency)");throw e.code="MODULE_NOT_FOUND",e}return n(6451)})).then((e=>{s.forEach((t=>{e.evaluateTriggerDefinition({triggers:l[t]||[],compoundTriggers:g[t]||[]})}))}))}},14555:function(e,t,n){n.d(t,{iy:function(){return d},sO:function(){return p},zd:function(){return f}});var r=n(7628),o=n(92550);const i=[];let s;const a=()=>(0,o.iv)(o._W),c=e=>{const t=a(),n=s.timeDelayMilliseconds,i=new Date(e.getTime()+n);return(0,r.hW)("Updating next form's timestamp",{showNextFormTimestamp:i.getTime()}),(0,o.$T)(o._W,Object.assign({},t,{showNextFormTimestamp:i.getTime().toString()})),i};let u;const l=()=>{(0,r.hW)("Form settings enabled, getting first queued form");const e=i.shift();if(!e)return void(0,r.hW)("No queued forms");const{callback:t,formId:n}=e;(0,r.hW)("Showing queued form",{formId:n,timestamp:(new Date).getTime()}),t&&t()},g=()=>{const e=new Date,t=a();if(null!=t&&t.showNextFormTimestamp){const n=new Date(parseInt(t.showNextFormTimestamp,10));return e.getTime()>=n.getTime()}return!1},m=(e=!1)=>{const t=new Date,n=a(),r=null==n?void 0:n.showNextFormTimestamp;0!==i.length?(null!=n&&n.firstFormOpened||((0,o.$T)(o._W,Object.assign({},n,{firstFormOpened:!0})),l()),r&&e&&g()&&(c(t),l(),u=null)):g()&&(0,o.fX)(o._W)},f=()=>{if((0,r.hW)("Form closed, trying to read next form from queue"),s&&s.enabled&&!s.perSession){const e=a();if(!(null!=e&&e.showNextFormTimestamp)||e.firstFormOpened){const e=new Date;((e,t)=>{u&&clearTimeout(u),u=setTimeout((()=>{m(!0)}),t.getTime()-e.getTime())})(e,c(e))}s.perSession||m(!0)}},d=e=>t=>((e,t)=>{if(!s||!s.enabled)return void e();const n=a();if(s.perSession&&null!=n&&n.dontShowForms)(0,r.hW)("Form settings one form per session is enabled, not showing form",{formId:t});else{if(s.perSession&&(null==n||!n.dontShowForms))return(0,o.$T)(o._W,Object.assign({},n,{dontShowForms:!0})),void e();(0,r.hW)("Form settings delay is enabled, queueing form",{formId:t}),i.push({callback:e,formId:t}),m()}})(t,e),p=e=>{if(!e||!e.enabled)return;const t=(0,o.iv)(o._W);(!e.enabled&&t||null!=t&&t.showNextFormTimestamp&&g())&&(0,o.fX)(o._W),(0,o.$T)(o._W,Object.assign({},t,{firstFormOpened:!1})),s=e}},92550:function(e,t,n){n.d(t,{$T:function(){return s},_W:function(){return r},fX:function(){return a},iv:function(){return i},yn:function(){return o}});const r="klaviyoFormSetting",o="klaviyoFormSubmit",i=e=>{const t=window.sessionStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){return}},s=(e,t)=>{window.sessionStorage.setItem(e,JSON.stringify(t))},a=e=>{window.sessionStorage.removeItem(e)}},28391:function(e,t,n){n.d(t,{DA:function(){return u},DV:function(){return r},Gi:function(){return y},LP:function(){return o},MG:function(){return c},Mk:function(){return a},UW:function(){return s},j$:function(){return m},kB:function(){return f},kW:function(){return I},ko:function(){return w},nq:function(){return i},pq:function(){return g},pz:function(){return l},qK:function(){return T},qS:function(){return d},tC:function(){return p}});const r="POPUP",o="EMBED",i="FLYOUT",s="FULLSCREEN",a="BANNER",c="TOP_LEFT",u="TOP_CENTER",l="TOP_RIGHT",g="CENTER_LEFT",m="CENTER_RIGHT",f="BOTTOM_LEFT",d="BOTTOM_CENTER",p="BOTTOM_RIGHT",T="DOCK_TO_BOTTOM",y="DOCK_TO_TOP",I="USE_FLYOUT_POSITION",w="TOP_BANNER_POSITION"},78698:function(e,t,n){n.d(t,{$3:function(){return r},GE:function(){return s},PC:function(){return i},Rb:function(){return o},aR:function(){return a},ds:function(){return u},uv:function(){return c}});const r="DISPLAY_BEFORE",o="DISPLAY_AFTER",i="DISPLAY_BEFORE_AND_AFTER",s="RECTANGLE",a="CORNER",c="CIRCLE",u={[s]:200,[c]:100,[a]:140}},70599:function(e,t,n){n.d(t,{Gh:function(){return o},IF:function(){return c},NY:function(){return l},TU:function(){return m},Uq:function(){return s},gW:function(){return g},mX:function(){return r},s4:function(){return a},ve:function(){return f},vv:function(){return i},w1:function(){return u}});const r="DELAY",o="SCROLL_PERCENTAGE",i="PAGE_VISITS",s="URL_PATH_PATTERNS",a="EXIT_INTENT",c="COOKIE_TIMEOUT",u="TEASER_TIMEOUT",l="ELEMENT_EXISTS",g="SUPPRESS_SUCCESS_FORM",m="JS_CUSTOM_TRIGGER",f=90}}]);
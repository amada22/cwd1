!function(){'use strict';const t='4-latest_2cfeeb61e',e='4-latest';function n(t,e,n){const o=document.createElement('script');return o.setAttribute('async','true'),o.type='text/javascript',e&&(o.onload=e),n&&(o.onerror=n),o.src=t,((document.getElementsByTagName('head')||[null])[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(o),o}function o(n){return`https://cdn.attn.tv/tag/${e}/${n}?v=${t}`}function a(){const e=`https://events.attentivemobile.com/e?t=e&message=${encodeURI('failed to load')}&v=${t}`,n=new Image(1,1);return n.src=e,n}function i(t=(()=>{})){const e=o(window.navigator.userAgent.indexOf('MSIE ')>0||navigator.userAgent.match(/Trident.*rv:11\./)?'tag-ie.js':'tag.js');window.attn_d0x0b_cfg='eyJhcCI6IHsiZW5yIjogeyJkbCI6IHsibXAiOiB7ImVtYWlsIjogW3sicHQiOiAid3NwIiwgIndzIjogImRhdGFMYXllcltlY29tbWVyY2VdLmVjb21tZXJjZS5wdXJjaGFzZS5hY3Rpb25GaWVsZC5lbWFpbCJ9LCB7InB0IjogIndzcCIsICJ3cyI6ICJ0cmFuc2FjdGlvbkRhdGEuZW1haWwifSwgeyJwdCI6ICJ3c3AiLCAid3MiOiAib3JkZXIuZW1haWwifV0sICJvcmRlcklkIjogW3sicHQiOiAid3NwIiwgIndzIjogImRhdGFMYXllcltlY29tbWVyY2VdLmVjb21tZXJjZS5wdXJjaGFzZS5hY3Rpb25GaWVsZC5pZCJ9LCB7InB0IjogIndzcCIsICJ3cyI6ICJkYXRhTGF5ZXJbdHJhbnNhY3Rpb25JZF0udHJhbnNhY3Rpb25JZCJ9LCB7InB0IjogIndzcCIsICJ3cyI6ICJvcmRlcklkIn0sIHsicHQiOiAid3NwIiwgIndzIjogInRyYW5zYWN0aW9uRGF0YS5vcmRlcklkIn1dLCAiY2FydFRvdGFsIjogW3sicHQiOiAid3NwIiwgIndzIjogImRhdGFMYXllcltlY29tbWVyY2VdLmVjb21tZXJjZS5wdXJjaGFzZS5hY3Rpb25GaWVsZC5yZXZlbnVlIn0sIHsicHQiOiAid3NwIiwgIndzIjogImRhdGFMYXllclt0cmFuc2FjdGlvbklkXS50cmFuc2FjdGlvblRvdGFsIn1dfSwgInB0IjogImNtcHMifSwgImpsZCI6IHsibXAiOiB7InNrdSI6ICJza3UiLCAibmFtZSI6ICJuYW1lIiwgImltYWdlIjogImltYWdlIiwgImNhdGVnb3J5IjogImNhdGVnb3J5IiwgInByb2R1Y3RJZCI6ICJwcm9kdWN0SUQifSwgInB0IjogImpsZCJ9LCAibWV0IjogeyJtcCI6IHsibmFtZSI6ICJvZzp0aXRsZSIsICJpbWFnZSI6ICJvZzppbWFnZSIsICJwcmljZSI6ICJvZzpwcmljZTphbW91bnQiLCAiY3VycmVuY3kiOiAib2c6cHJpY2U6Y3VycmVuY3kifSwgInB0IjogIm1ldCJ9LCAiY29va2llIjogeyJwdCI6ICJsdGMifX0sICJ0cmciOiBbeyJlcCI6IFsicGEiLCAiZWEiXSwgImVzIjogImdhIiwgImV2IjogeyJhIjoge30sICJjIjoge30sICJkIjoge30sICJwIjoge319LCAiaWQiOiAidDkiLCAibXAiOiB7fSwgIm11IjogIi9jb2xsZWN0PyIsICJwdCI6ICJnYSIsICJlMnAiOiB7ImMiOiBbImFkZCIsICJBZGRlZCBQcm9kdWN0IiwgIkFkZGluZyBUbyBBIFNob3BwaW5nIENhcnQiLCAiQWRkIFRvIEJhZyIsICJhZGQgdG8gd2lzaGxpc3QiLCAiYWRkIHRvIGNhcnQgcXVpY2t2aWV3IiwgImFkZCB0byBjYXJ0IHN0YW5kYXJkIiwgIkFkZCBUbyBDYXJ0IiwgIkFkZGVkIFByb2R1Y3QiLCAiQ2FydCBJdGVtIEFkZGVkIiwgIlByb2R1Y3QgQWRkIFRvIENhcnQiLCAiRWNvbW1lcmNlOkl0ZW1zIEFkZGVkIHRvIENhcnQiLCAiYWRkVG9DYXJ0IiwgImFkZF90b19jYXJ0Il0sICJkIjogWyJWaWV3ZWQgUHJvZHVjdCIsICJQcm9kdWN0IERldGFpbHMiLCAiUHJvZHVjdCBWaWV3ZWQiLCAicHJvZHVjdCBkZXRhaWwgdmlldyIsICJQcm9kdWN0IERldGFpbHMgVmlld2VkIiwgIlByb2R1Y3QgRGV0YWlsIFZpZXdzIiwgIlByb2R1Y3QgRGV0YWlscyBWaWV3IiwgInByb2R1Y3QgZGV0YWlsIiwgInBkcCB2aWV3IiwgIlByb2R1Y3QgUGFnZSIsICJ2aWV3X2l0ZW0iLCAiZGV0YWlsIl0sICJwIjogWyJwdXJjaGFzZSIsICJDb21wbGV0ZWQgT3JkZXIiLCAic2FsZSIsICJ0cmFuc2FjdGlvbiIsICJjaGVja291dCBvcmRlciBjb21wbGV0ZWQiLCAib3JkZXJjb21wbGV0ZSIsICJvbmVwYWdlY2hlY2tvdXQiLCAiZWNvbW1lcmNlOiBwdXJjaGFzZSIsICJlY29tbWVyY2U6cHVyY2hhc2UiLCAiT3JkZXIgQ29tcGxldGVkIl19fV0sICJ0cm4iOiB7ImRvd25zYW1wbGVyIjogeyJtcCI6IHsic2t1IjogWyIqIl0sICJuYW1lIjogWyJtZXQiLCAiamxkIiwgIioiXSwgImVtYWlsIjogWyJkbCIsICJjb29raWUiLCAibWV0IiwgIioiXSwgImltYWdlIjogWyJtZXQiLCAiamxkIiwgIioiXSwgInBob25lIjogWyJjb29raWUiLCAiKiJdLCAib3JkZXJJZCI6IFsiZGwiLCAibWV0IiwgIioiXSwgInF1YW50aXR5IjogWyIqIl0sICJjYXJ0VG90YWwiOiBbImRsIiwgIm1ldCIsICIqIl19LCAicHQiOiAiZHMifX19LCAiY2VpZCI6ICJ3NDYiLCAiY29tcGFueSI6ICIxc3QtYXJ0LWdhbGxlcnkifQ==',n(e,t,a)}!function(d,c){function r(t){return function(){d.attn_d0x0b_evt.push({func:t,args:arguments})}}function s(){d.__attentive_cfg=JSON.parse('{\"ceid\":\"w46\"}'),n('https://cdn.attn.tv/attn.js?v='+t),function(){if(window.__poll_for_path_change)return;let t=window.location.pathname;const e=()=>{window.__attentive&&window.__attentive.show&&window.__attentive.show()};window.__poll_for_path_change=!0,setInterval((function(){if(t!==window.location.pathname){const n=document.querySelector('#attentive_overlay');null!=n&&n.parentNode&&n.parentNode.removeChild(n),t=window.location.pathname,e()}}),500),e()}(),function(){try{if(window.location.hash.indexOf('attn')>-1){const t=window.location.hash.slice(5);sessionStorage.setItem('_d0x0b_',t)}const t=sessionStorage.getItem('_d0x0b_');return!!t&&(window.attn_d0x0b_cfg=t,!0)}catch(t){return!1}}()?function(t=(()=>{})){n(o('tag-debug.js'),t,a)}():i()}d.__attnLoaded||(d.__attnLoaded=!0,d.attn_d0x0b_evt=[],d.attentive={version:e,analytics:{enable:r('enable'),disable:r('disable'),track:r('track'),pageView:r('pageView'),addToCart:r('addToCart'),productView:r('productView'),purchase:r('purchase')}},window.__attentive_domain='1st-art-gallery.attn.tv',window.__attentive||(window.__attentive={invoked:!1,show:function(){window.__attentive.invoked=!0}}),'loading'===c.readyState?c.addEventListener('DOMContentLoaded',s):s())}(window,document)}();
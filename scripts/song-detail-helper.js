(()=>{"use strict";var e={271:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const r=[0,.85,.9,.93,.95,.97,.99,1];function n(e){for(let t=r.length-1;t>0;t--)if(e>=r[t])return t;return 0}t.determineDxStar=n,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const r=t.querySelector(".w_80");if(!r)return;r.remove();const[o,c]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),a=o/c,l=n(a),i=`✦${l} (${(100*a).toFixed(1)}%)`,u=document.createElement("div");return u.className="white p_r_5 f_15 f_l",u.append(i),t.prepend(u),l}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}(()=>{const e=r(271);var t;(t=document).querySelectorAll(".music_score_block.w_310").forEach((function(r){const n=r.querySelector("img.f_l");if(!n)return;n.remove();const[o,c]=r.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),a=o/c,l=(0,e.getDxStarText)((0,e.determineDxStar)(a),!0)+` (${(100*a).toFixed(1)}%)`,i=t.createElement("div");i.className="f_l",i.append(l),r.prepend(i)}))})()})();
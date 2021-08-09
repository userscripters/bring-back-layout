// ==UserScript==
// @author          Oleg Valter <oleg.a.valter@gmail.com>
// @description     Fix SE layout issues without waiting 6 to 8 weeks
// @grant           none
// @homepage        https://github.com/userscripters/bring-back-layout#readme
// @match           https://*.askubuntu.com/*
// @match           https://*.mathoverflow.net/*
// @match           https://*.serverfault.com/*
// @match           https://*.stackapps.com/*
// @match           https://*.stackexchange.com/*
// @match           https://*.stackoverflow.com/*
// @name            bring-back-layout
// @namespace       userscripters
// @source          git@github.com:userscripters/bring-back-layout.git
// @supportURL      https://github.com/userscripters/bring-back-layout/issues
// @version         0.8.0
// ==/UserScript==

"use strict";((e,m)=>{e.addEventListener("load",()=>{var e;(e=>{var t=e.createElement("style");e.head.append(t);const n=t["sheet"];n&&(n.insertRule(`.container,
            .site-header--container,
            .site-footer--container,
            .site-footer--extra,
            #content {
                max-width: unset !important;
                width: unset !important;
            }`),n.insertRule(`.left-sidebar,
            .site-header--link,
            #content {
                margin: 0 1vw !important;
            }`),n.insertRule(`.site-footer--container {
                width: unset !important;
                padding-right: 0;
            }`),n.insertRule(".site-header--container { margin: 0 !important; }"),n.insertRule(`.profile-cards {
            justify-content: space-between;
        }`))})(m);const t=m.querySelector(".top-bar [role=menubar]");if(!t)return console.debug("missing top menu");t.classList.remove("wmx12");var n=m.getElementById("main-content");if(!n)return console.debug("missing main");const s=null===(e=m.querySelector(".profile-avatar"))||void 0===e?void 0:e.parentElement;if(!s)return console.debug("missing profile avatar");const o=m.querySelector(".s-prose"),i=null===o||void 0===o?void 0:o.closest("#user-card > .flex--item");if(!o||!i)return console.debug("missing about me element");const r=m.querySelector(".profile-communities");if(!r)return console.debug("missing communities list");const l=null===r||void 0===r?void 0:r.closest(".flex--item:is(.row > .flex--item)");if(!l)return console.debug("missing left sidebar element");l.classList.add("mt48");const a=null===(e=m.querySelector("#badges"))||void 0===e?void 0:e.closest(".d-flex");if(!a)return console.debug("missing stats element");a.classList.add("mt16"),a.classList.add("fd-column");const d=a.querySelectorAll("#badges, #top-tags, #top-posts");d.forEach(e=>e.classList.add("flex--item")),a.append(...d),s.append(l),i.append(a);const c=(e,t)=>{var n=".flex--item .ow-break-word",t=t.querySelectorAll(n),n=m.querySelectorAll(`.s-prose ${n}`);if(t.length||n.length){const s=e.querySelector("ul");t.length&&null!==s&&void 0!==s&&s.append(...t),n.length&&null!==s&&void 0!==s&&s.append(...n)}};c(i,r);const u=new MutationObserver(()=>{c(i,r)});u.observe(n,{childList:!0,subtree:!0})})})(window,document);
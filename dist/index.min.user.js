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
// @version         0.7.0
// ==/UserScript==

"use strict";((e,m)=>{e.addEventListener("load",()=>{var e;(e=>{var t=e.createElement("style");e.head.append(t);const s=t["sheet"];s&&(s.insertRule(`.container, .site-header--container, #content {
                max-width: unset !important;
            }`),s.insertRule(`.left-sidebar,
            .site-header--container,
            .site-footer--container,
            .top-bar [role=menubar] {
                margin: 0 1vw !important;
            }`),s.insertRule(`.profile-cards {
            justify-content: space-between;
        }`))})(m);const t=m.querySelector(".top-bar [role=menubar]");if(!t)return console.debug("missing top menu");t.classList.remove("wmx12");var s=m.getElementById("main-content");if(!s)return console.debug("missing main");const n=null===(e=m.querySelector(".profile-avatar"))||void 0===e?void 0:e.parentElement;if(!n)return console.debug("missing profile avatar");const o=m.querySelector(".s-prose"),r=null===o||void 0===o?void 0:o.closest("#user-card > .flex--item");if(!o||!r)return console.debug("missing about me element");const i=m.querySelector(".profile-communities");if(!i)return console.debug("missing communities list");const l=null===i||void 0===i?void 0:i.closest(".flex--item:is(.row > .flex--item)");if(!l)return console.debug("missing left sidebar element");l.classList.add("mt48");const a=null===(e=m.querySelector("#badges"))||void 0===e?void 0:e.closest(".d-flex");if(!a)return console.debug("missing stats element");a.classList.add("mt16"),a.classList.add("fd-column");const c=a.querySelectorAll("#badges, #top-tags, #top-posts");c.forEach(e=>e.classList.add("flex--item")),a.append(...c),n.append(l),r.append(a);const d=(e,t)=>{t=t.querySelectorAll(".flex--item .ow-break-word");if(t.length){const s=e.querySelector("ul");null!==s&&void 0!==s&&s.append(...t)}};d(r,i);const u=new MutationObserver(()=>{d(r,i)});u.observe(s,{childList:!0,subtree:!0})})})(window,document);
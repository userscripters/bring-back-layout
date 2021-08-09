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
// @version         0.6.0
// ==/UserScript==

"use strict";((e,a)=>{e.addEventListener("load",()=>{var e;(e=>{var t=e.createElement("style");e.head.append(t);const s=t["sheet"];s&&(s.insertRule(`.container, .site-header--container, #content {
                max-width: unset !important;
            }`),s.insertRule(`.left-sidebar,
            .site-header--container,
            .site-footer--container,
            .top-bar [role=menubar] {
                margin: 0 1vw !important;
            }`),s.insertRule(`.profile-cards {
            justify-content: space-between;
        }`))})(a);const t=a.querySelector(".top-bar [role=menubar]");if(!t)return console.debug("missing top menu");if(t.classList.remove("wmx12"),!a.getElementById("main-content"))return console.debug("missing main");const s=null===(e=a.querySelector(".profile-avatar"))||void 0===e?void 0:e.parentElement;if(!s)return console.debug("missing profile avatar");const n=a.querySelector(".s-prose"),o=null===n||void 0===n?void 0:n.closest("#user-card > .flex--item");if(!n||!o)return console.debug("missing about me element");const i=null===(e=a.querySelector(".communities"))||void 0===e?void 0:e.closest(".flex--item:is(.row > .flex--item)");if(!i)return console.debug("missing left sidebar element");i.classList.add("mt48");const r=null===(e=a.querySelector("#badges"))||void 0===e?void 0:e.closest(".d-flex");if(!r)return console.debug("missing stats element");r.classList.add("mt16"),r.classList.add("fd-column");const l=r.querySelectorAll("#badges, #top-tags, #top-posts");l.forEach(e=>e.classList.add("flex--item")),r.append(...l),s.append(i),o.append(r)})})(window,document);
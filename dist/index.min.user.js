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
// @version         0.5.1
// ==/UserScript==

"use strict";((e,l)=>{e.addEventListener("load",()=>{var e;if((e=>{var t=e.createElement("style");e.head.append(t);const s=t["sheet"];s&&(s.insertRule(`.container, .site-header--container, #content {
                max-width: unset !important;
            }`),s.insertRule(`.left-sidebar,
            .site-header--container,
            .site-footer--container {
                margin: 0 1vw !important;
            }`),s.insertRule(`.profile-cards {
            justify-content: space-between;
        }`))})(l),!l.getElementById("main-content"))return console.debug("missing main");const t=null===(e=l.querySelector(".profile-avatar"))||void 0===e?void 0:e.parentElement;if(!t)return console.debug("missing profile avatar");const s=l.querySelector(".s-prose"),n=null===s||void 0===s?void 0:s.closest("#user-card > .flex--item");if(!s||!n)return console.debug("missing about me element");const i=null===(e=l.querySelector(".communities"))||void 0===e?void 0:e.closest(".flex--item:is(.row > .flex--item)");if(!i)return console.debug("missing left sidebar element");i.classList.add("mt48");const o=null===(e=l.querySelector("#badges"))||void 0===e?void 0:e.closest(".d-flex");if(!o)return console.debug("missing stats element");o.classList.add("mt16"),o.classList.add("fd-column");const r=o.querySelectorAll("#badges, #top-tags, #top-posts");r.forEach(e=>e.classList.add("flex--item")),o.append(...r),t.append(i),n.append(o)})})(window,document);
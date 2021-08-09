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
// @version         0.10.0
// ==/UserScript==

"use strict";((e,u)=>{e.addEventListener("load",()=>{var e;(e=>{var t=e.createElement("style");e.head.append(t);const n=t["sheet"];n&&(n.insertRule(`
            .container,
            .site-header--container,
            .site-footer--container,
            .site-footer--extra,
            #content {
                max-width: unset !important;
            }`),n.insertRule(`
            .container {
                margin: 0 !important;
                justify-content: unset !important;
            }`),n.insertRule(`
            #content {
                width: 100% !important;
            }
        `),n.insertRule(`
            .left-sidebar,
            .site-header--link,
            .site-footer--container {
                margin: 0 1vw !important;
            }`),n.insertRule(`
            .site-footer--container {
                width: unset !important;
                padding-right: 0;
            }`),n.insertRule(`.profile-cards {
                justify-content: space-between;
            }`))})(u),null!==(e=u.querySelector("#mainbar .s-page-title--text"))&&void 0!==e&&e.classList.add("as-start");const t=u.querySelector(".top-bar [role=menubar]");if(!t)return console.debug("missing top menu");t.classList.remove("wmx12");var n=u.getElementById("main-content");if(!n)return console.debug("missing main");const i=null===(e=u.querySelector(".profile-avatar"))||void 0===e?void 0:e.parentElement;if(!i)return console.debug("missing profile avatar");const s=u.querySelector(".s-prose"),o=null===s||void 0===s?void 0:s.closest("#user-card > .flex--item");if(!s||!o)return console.debug("missing about me element");const r=u.querySelector(".profile-communities");if(!r)return console.debug("missing communities list");const l=null===r||void 0===r?void 0:r.closest(".flex--item:is(.row > .flex--item)");if(!l)return console.debug("missing left sidebar element");l.classList.add("mt48");const a=null===(e=u.querySelector("#badges"))||void 0===e?void 0:e.closest(".d-flex");if(!a)return console.debug("missing stats element");a.classList.add("mt16"),a.classList.add("fd-column");const d=a.querySelectorAll("#badges, #top-tags, #top-posts");d.forEach(e=>e.classList.add("flex--item")),a.append(...d),i.append(l),o.append(a);const c=new MutationObserver(()=>{((e,t)=>{var n=".flex--item .ow-break-word",t=t.querySelectorAll(n),n=u.querySelectorAll(`.s-prose ${n}`);const i=null===(e=null===(e=e.closest(".flex--item"))||void 0===e?void 0:e.nextElementSibling)||void 0===e?void 0:e.querySelector("ul");t.length&&null!==i&&void 0!==i&&i.append(...t),n.length&&null!==i&&void 0!==i&&i.append(...n)})(s,r)});c.observe(n,{childList:!0,subtree:!0})})})(window,document);
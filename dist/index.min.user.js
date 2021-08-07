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
// @version         0.2.0
// ==/UserScript==

"use strict";((e,d)=>{e.addEventListener("load",()=>{var e;if(!d.getElementById("main-content"))return console.debug("missing main");const s=null===(e=d.querySelector(".profile-avatar"))||void 0===e?void 0:e.parentElement;if(!s)return console.debug("missing profile avatar");const t=d.querySelector(".s-prose"),o=null===t||void 0===t?void 0:t.closest("#user-card > .flex--item");if(!t||!o)return console.debug("missing about me element");const n=null===(e=d.querySelector(".communities"))||void 0===e?void 0:e.closest(".flex--item:is(.row > .flex--item)");if(!n)return console.debug("missing left sidebar element");n.classList.add("mt48");const i=null===(e=d.querySelector("#badges"))||void 0===e?void 0:e.closest(".d-flex");if(!i)return console.debug("missing stats element");i.classList.add("mt16"),i.classList.add("fd-column");const l=i.querySelectorAll("#badges, #top-tags, #top-posts");l.forEach(e=>e.classList.add("flex--item")),i.append(...l),s.append(n),o.append(i)})})(window,document);
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
// @version         0.1.0
// ==/UserScript==

"use strict";((e,o)=>{e.addEventListener("load",()=>{var e;if(!o.getElementById("main-content"))return console.debug("missing main");const s=null===(e=o.querySelector(".profile-avatar"))||void 0===e?void 0:e.parentElement;if(!s)return console.debug("missing profile avatar");const t=o.querySelector(".s-prose"),i=null===t||void 0===t?void 0:t.closest("#user-card > .flex--item");if(!t||!i)return console.debug("missing about me element");const n=null===(e=o.querySelector(".communities"))||void 0===e?void 0:e.closest(".flex--item:is(.row > .flex--item)");if(!n)return console.debug("missing left sidebar element");n.classList.add("mt48");const l=null===(e=o.querySelector("#badges"))||void 0===e?void 0:e.closest(".d-flex");if(!l)return console.debug("missing stats element");l.classList.add("mt48"),l.classList.add("d-flex","fd-column"),[...l.children].forEach(e=>e.classList.add("flex--item")),s.append(n),i.append(l)})})(window,document);
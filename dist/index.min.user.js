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

"use strict";((e,i)=>{e.addEventListener("load",()=>{if(!i.getElementById("main-content"))return console.debug("missing main");const e=null===(s=i.querySelector(".profile-avatar"))||void 0===s?void 0:s.parentElement;if(!e)return console.debug("missing profile avatar");const t=i.querySelector(".s-prose"),n=null===t||void 0===t?void 0:t.closest(".flex--item");if(!t||!n)return console.debug("missing about me element");null!==(s=t.parentElement)&&void 0!==s&&s.classList.add("mb48");const o=null===(s=i.querySelector(".communities"))||void 0===s?void 0:s.closest(".flex--item:is(.row > .flex--item)");if(!o)return console.debug("missing left sidebar element");o.classList.add("mt48");var s=["badges","top-tags","top-posts"].map(e=>i.getElementById(e)).filter(Boolean);e.append(o),n.append(...s)})})(window,document);
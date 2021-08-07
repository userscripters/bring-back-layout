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

"use strict";
((w, d) => {
    w.addEventListener("load", () => {
        var _a, _b, _c;
        const main = d.getElementById("main-content");
        if (!main)
            return console.debug("missing main");
        const profileElem = (_a = d.querySelector(".profile-avatar")) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (!profileElem)
            return console.debug("missing profile avatar");
        const aboutMeContent = d.querySelector(".s-prose");
        const aboutMeElem = aboutMeContent === null || aboutMeContent === void 0 ? void 0 : aboutMeContent.closest(".flex--item");
        if (!aboutMeContent || !aboutMeElem)
            return console.debug("missing about me element");
        (_b = aboutMeContent.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("mb48");
        const leftSidebar = (_c = d
            .querySelector(".communities")) === null || _c === void 0 ? void 0 : _c.closest(".flex--item:is(.row > .flex--item)");
        if (!leftSidebar)
            return console.debug("missing left sidebar element");
        leftSidebar.classList.add("mt48");
        const bottomIds = ["badges", "top-tags", "top-posts"];
        const bottomElems = bottomIds
            .map((id) => d.getElementById(id))
            .filter(Boolean);
        profileElem.append(leftSidebar);
        aboutMeElem.append(...bottomElems);
    });
})(window, document);

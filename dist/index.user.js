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

"use strict";
((w, d) => {
    const addStyles = (d) => {
        const style = d.createElement("style");
        d.head.append(style);
        const { sheet } = style;
        if (!sheet)
            return;
        sheet.insertRule(`.container, .site-header--container, #content {
                max-width: unset !important;
            }`);
        sheet.insertRule(`.left-sidebar, .site-header--container {
                margin: 0 1vw !important;
            }`);
    };
    w.addEventListener("load", () => {
        var _a, _b, _c;
        addStyles(d);
        const main = d.getElementById("main-content");
        if (!main)
            return console.debug("missing main");
        const profileElem = (_a = d.querySelector(".profile-avatar")) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (!profileElem)
            return console.debug("missing profile avatar");
        const aboutMeContent = d.querySelector(".s-prose");
        const aboutMeElem = aboutMeContent === null || aboutMeContent === void 0 ? void 0 : aboutMeContent.closest("#user-card > .flex--item");
        if (!aboutMeContent || !aboutMeElem)
            return console.debug("missing about me element");
        const leftSidebar = (_b = d
            .querySelector(".communities")) === null || _b === void 0 ? void 0 : _b.closest(".flex--item:is(.row > .flex--item)");
        if (!leftSidebar)
            return console.debug("missing left sidebar element");
        leftSidebar.classList.add("mt48");
        const statsWrap = (_c = d.querySelector("#badges")) === null || _c === void 0 ? void 0 : _c.closest(".d-flex");
        if (!statsWrap)
            return console.debug("missing stats element");
        statsWrap.classList.add("mt16");
        statsWrap.classList.add("fd-column");
        const statItems = statsWrap.querySelectorAll("#badges, #top-tags, #top-posts");
        statItems.forEach((stat) => stat.classList.add("flex--item"));
        statsWrap.append(...statItems);
        profileElem.append(leftSidebar);
        aboutMeElem.append(statsWrap);
    });
})(window, document);

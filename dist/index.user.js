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
// @version         0.11.0
// ==/UserScript==

"use strict";
((w, d) => {
    const addStyles = (d) => {
        const style = d.createElement("style");
        d.head.append(style);
        const { sheet } = style;
        if (!sheet)
            return;
        sheet.insertRule(`
            .container,
            .site-header--container,
            .site-footer--container,
            .site-footer--extra,
            #content {
                max-width: unset !important;
            }`);
        sheet.insertRule(`
            .container {
                margin: 0 !important;
                justify-content: unset !important;
            }`);
        sheet.insertRule(`
            #content {
                width: 100% !important;
            }
        `);
        sheet.insertRule(`
            .left-sidebar,
            .site-header--link,
            .site-footer--container {
                margin: 0 1vw !important;
            }`);
        sheet.insertRule(`
            .site-footer--container {
                width: unset !important;
                padding-right: 0;
            }`);
        sheet.insertRule(`.profile-cards {
                justify-content: space-between;
            }`);
    };
    w.addEventListener("load", () => {
        var _a, _b, _c;
        addStyles(d);
        (_a = d.querySelector("#mainbar .s-page-title--text")) === null || _a === void 0 ? void 0 : _a.classList.add("as-start");
        const topMenu = d.querySelector(".top-bar [role=menubar]");
        if (!topMenu)
            return console.debug("missing top menu");
        topMenu.classList.remove("wmx12");
        const main = d.getElementById("main-content");
        if (!main)
            return console.debug("missing main");
        const profileElem = (_b = d.querySelector(".profile-avatar")) === null || _b === void 0 ? void 0 : _b.parentElement;
        if (!profileElem)
            return console.debug("missing profile avatar");
        const aboutMeContent = d.querySelector(".s-prose");
        const aboutMeElem = aboutMeContent === null || aboutMeContent === void 0 ? void 0 : aboutMeContent.closest("#user-card > .flex--item");
        if (!aboutMeContent || !aboutMeElem)
            return console.debug("missing about me element");
        const profileCommunities = d.querySelector(".profile-communities");
        if (!profileCommunities)
            return console.debug("missing communities list");
        const leftSidebar = profileCommunities === null || profileCommunities === void 0 ? void 0 : profileCommunities.closest(".flex--item:is(.row > .flex--item)");
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
        const fixCompatibility = (aboutMeContent, communities) => {
            const strayQuery = ".flex--item .ow-break-word";
            const inCommunities = communities.querySelectorAll(strayQuery);
            const inAboutMe = d.querySelectorAll(`.s-prose ${strayQuery}`);
            const wrapper = aboutMeContent.closest(".flex--item");
            if (!wrapper)
                return console.debug("no anchor point to fix");
            const { nextElementSibling: right } = wrapper;
            const correctList = (right || wrapper).querySelector("ul");
            if (inCommunities.length)
                correctList === null || correctList === void 0 ? void 0 : correctList.append(...inCommunities);
            if (inAboutMe.length)
                correctList === null || correctList === void 0 ? void 0 : correctList.append(...inAboutMe);
        };
        const compatiibilityObserver = new MutationObserver(() => {
            fixCompatibility(aboutMeContent, profileCommunities);
        });
        compatiibilityObserver.observe(main, {
            childList: true,
            subtree: true,
        });
    });
})(window, document);

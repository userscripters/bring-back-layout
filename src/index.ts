((w, d) => {
    const addStyles = (d: Document) => {
        const style = d.createElement("style");
        d.head.append(style);
        const { sheet } = style;
        if (!sheet) return;

        /* removes arbitrary restriction on used page width */
        sheet.insertRule(
            `.container,
            .site-header--container,
            .site-footer--container,
            .site-footer--extra,
            #content {
                max-width: unset !important;
                width: unset !important;
            }`
        );

        /* makes left and right margin universally smaller */
        sheet.insertRule(
            `.left-sidebar,
            .site-header--link,
            #content {
                margin: 0 1vw !important;
            }`
        );

        sheet.insertRule(
            `.site-footer--container {
                width: unset !important;
                padding-right: 0;
            }`
        );

        sheet.insertRule(`.site-header--container { margin: 0 !important; }`);

        /* make activity tab use fullwidth better */
        sheet.insertRule(`.profile-cards {
            justify-content: space-between;
        }`);
    };

    w.addEventListener("load", () => {
        addStyles(d);

        const topMenu = d.querySelector(".top-bar [role=menubar]");
        if (!topMenu) return console.debug("missing top menu");

        topMenu.classList.remove("wmx12");

        const main = d.getElementById("main-content");
        if (!main) return console.debug("missing main");

        const profileElem = d.querySelector(".profile-avatar")?.parentElement;
        if (!profileElem) return console.debug("missing profile avatar");

        const aboutMeContent = d.querySelector(".s-prose");
        const aboutMeElem = aboutMeContent?.closest("#user-card > .flex--item");
        if (!aboutMeContent || !aboutMeElem)
            return console.debug("missing about me element");

        const profileCommunities = d.querySelector(".profile-communities");
        if (!profileCommunities)
            return console.debug("missing communities list");

        const leftSidebar = profileCommunities?.closest(
            ".flex--item:is(.row > .flex--item)"
        );
        if (!leftSidebar) return console.debug("missing left sidebar element");

        leftSidebar.classList.add("mt48");

        const statsWrap = d.querySelector("#badges")?.closest(".d-flex");
        if (!statsWrap) return console.debug("missing stats element");

        statsWrap.classList.add("mt16");

        statsWrap.classList.add("fd-column");

        const statItems = statsWrap.querySelectorAll(
            "#badges, #top-tags, #top-posts"
        );
        statItems.forEach((stat) => stat.classList.add("flex--item"));
        statsWrap.append(...statItems);

        profileElem.append(leftSidebar);
        aboutMeElem.append(statsWrap);

        const fixCompatibility = (about: Element, communities: Element) => {
            // for compatibility with https://stackapps.com/q/9074/78873
            const incompatible = communities.querySelectorAll(
                ".flex--item .ow-break-word"
            );

            if (!incompatible.length) return;

            const correctList = about.querySelector("ul");
            correctList?.append(...incompatible);
        };

        fixCompatibility(aboutMeElem, profileCommunities);

        const compatiibilityObserver = new MutationObserver(() => {
            fixCompatibility(aboutMeElem, profileCommunities);
        });

        compatiibilityObserver.observe(main, {
            childList: true,
            subtree: true,
        });
    });
})(window, document);

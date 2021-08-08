((w, d) => {
    const addStyles = (d: Document) => {
        const style = d.createElement("style");
        d.head.append(style);
        const { sheet } = style;
        if (!sheet) return;

        /* removes arbitrary restriction on used page width */
        sheet.insertRule(
            `.container, .site-header--container, #content {
                max-width: unset !important;
            }`
        );

        /* separates left sidebar from viewport limits a little */
        sheet.insertRule(
            `.left-sidebar, .site-header--container {
                margin: 0 1vw;
            }`
        );
    };

    w.addEventListener("load", () => {
        addStyles(d);

        const main = d.getElementById("main-content");
        if (!main) return console.debug("missing main");

        const profileElem = d.querySelector(".profile-avatar")?.parentElement;
        if (!profileElem) return console.debug("missing profile avatar");

        const aboutMeContent = d.querySelector(".s-prose");
        const aboutMeElem = aboutMeContent?.closest("#user-card > .flex--item");
        if (!aboutMeContent || !aboutMeElem)
            return console.debug("missing about me element");

        const leftSidebar = d
            .querySelector(".communities")
            ?.closest(".flex--item:is(.row > .flex--item)");
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
    });
})(window, document);

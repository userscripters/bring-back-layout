((w, d) => {
    w.addEventListener("load", () => {
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

        statsWrap.classList.add("mt32");

        statsWrap.classList.add("d-flex", "fd-column");
        [...statsWrap.children].forEach((stat) =>
            stat.classList.add("flex--item")
        );

        profileElem.append(leftSidebar);
        aboutMeElem.append(statsWrap);
    });
})(window, document);

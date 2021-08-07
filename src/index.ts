((w, d) => {
    w.addEventListener("load", () => {
        const main = d.getElementById("main-content");
        if (!main) return console.debug("missing main");

        const profileElem = d.querySelector(".profile-avatar")?.parentElement;
        if (!profileElem) return console.debug("missing profile avatar");

        const aboutMeContent = d.querySelector(".s-prose");
        const aboutMeElem = aboutMeContent?.closest(".flex--item");
        if (!aboutMeContent || !aboutMeElem)
            return console.debug("missing about me element");

        aboutMeContent.parentElement?.classList.add("mb48");

        const leftSidebar = d
            .querySelector(".communities")
            ?.closest(".flex--item:is(.row > .flex--item)");
        if (!leftSidebar) return console.debug("missing left sidebar element");

        leftSidebar.classList.add("mt48");

        const bottomIds = ["badges", "top-tags", "top-posts"];
        const bottomElems = bottomIds
            .map((id) => d.getElementById(id)!)
            .filter(Boolean);

        profileElem.append(leftSidebar);
        aboutMeElem.append(...bottomElems);
    });
})(window, document);

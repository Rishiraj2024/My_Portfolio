function showProjects(projects) {
    const projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";

    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt">

                <img
                    src="./assets/images/projects/notystackandroid.png"
                    alt="${project.image}"
                    draggable="false"
                    class="project-img"
                />

                <div class="content">

                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>

                    <div class="desc">
                        <p>${project.desc}</p>

                        <div class="btns">

                            <a href="${project.links.view}" target="_blank" class="btn">
                                <i class="fas fa-eye"></i> Live
                            </a>

                            <a href="${project.links.code}" target="_blank" class="btn">
                                <i class="fas fa-code"></i> Code
                            </a>

                        </div>
                    </div>

                </div>

            </div>
        </div>
        `;
    });

    projectsContainer.innerHTML = projectsHTML;

    // Tilt Effect
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 12,
            speed: 400,
            glare: true,
            "max-glare": 0.15
        });
    }

    // Isotope Filter
    const $grid = $(".box-container").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows"
    });

    $(".button-group").on("click", "button", function () {
        $(".button-group button").removeClass("is-checked");
        $(this).addClass("is-checked");

        const filterValue = $(this).attr("data-filter");
        $grid.isotope({
            filter: filterValue
        });
    });
}
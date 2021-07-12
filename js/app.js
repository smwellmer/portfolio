// watched Alex's video on how to make hamburger clickable
const $hamburger = $(".hamburger")
const $ul =$ (".nav-ul")

let show = false;
// handler for click event
const showMenu = (event) => {
    if (show){
        $ul.each(function(index){
            $(this).css("display", "none")
        })
        show = false;
    } else {
        $ul.each(function(index){
            $(this).css("display", "block")
        })
        show = true;
    }
}

$hamburger.on("click", showMenu)

//grabbing files from JSON

const $projects = $("#projects")

$.ajax("./projects.json")
    .then((data) => {
        data.forEach((project) => {
        const $div = $("<div>")

        $div.html (`<h2 class="project-name">${project.title}</h2> 
        <h3 class="project-description">${project.description}</h3>
        <img class="project-image" src="${project.image}/>`)

        $projects.append($div)
    })
})

let stars = document.querySelectorAll("svg");

console.log(stars);

for (let star of stars) {
    star.addEventListener("click", () => {
        
        stars.forEach(star => star.removeAttribute("data-clicked"));

        star.setAttribute("data-clicked", "true");

        let rating = star.dataset.value;

        sessionStorage.setItem("rating", JSON.stringify(rating))

    })
}

if(sessionStorage.getItem("rating")) {
    let rating = JSON.parse(sessionStorage.getItem("rating"))

    for (let star of stars) {
        if (rating === star.dataset.value) {
            star.setAttribute("data-clicked", "true");
        }
    }
}
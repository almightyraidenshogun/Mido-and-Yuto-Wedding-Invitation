function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("show");

}

/* =========================================
   GALLERY LIGHTBOX
========================================= */

const lightboxLinks =
    document.querySelectorAll(".lightbox");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


lightboxLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const imageSource =
            link.getAttribute("href");

        lightboxImage.src = imageSource;

        lightbox.classList.add("show");

    });

});


/* CLOSE BUTTON */

lightboxClose.addEventListener("click", function() {

    lightbox.classList.remove("show");

});


/* CLICK OUTSIDE IMAGE */

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});


/* ESC KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("show");

    }

});
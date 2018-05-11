document.addEventListener("DOMContentLoaded", function() {

    const dropdownList1 = document.querySelector(".centerText");
    const dropdown = document.querySelector(".dropdown");
    const whiteBackgroundBlock1 = document.querySelector(".whiteChair .whiteBackground");
    const whiteBackgroundBlock2 = document.querySelector(".kido .whiteBackground");
    const whiteChair = document.querySelector(".whiteChair");
    const whiteKido = document.querySelector(".kido");
    const leftSlider = document.querySelector(".leftSlider");
    const rightSlider = document.querySelector(".rightSlider");
    const firstSectionImg = document.getElementById("firstSectionImg");
    const mysteryBox = document.querySelector(".mysteryBox");
    const list_arrow = document.querySelectorAll(".list_arrow");
    const list_panel = document.querySelectorAll(".list_panel");

    leftSlider.style.cursor = "pointer";
    rightSlider.style.cursor = "pointer";

    dropdown.hidden = true;

    dropdownList1.addEventListener("mouseover", function () {
        dropdown.hidden = false;
    });

    dropdownList1.addEventListener("mouseout", function () {
        dropdown.hidden = true;
    });

    whiteChair.addEventListener("mouseover", function () {
        whiteBackgroundBlock1.hidden = true;
    });

    whiteChair.addEventListener("mouseout", function () {
        whiteBackgroundBlock1.hidden = false;
    });

    whiteKido.addEventListener("mouseover", function () {
        whiteBackgroundBlock2.hidden = true;
    });

    whiteKido.addEventListener("mouseout", function () {
        whiteBackgroundBlock2.hidden = false;
    });

    leftSlider.addEventListener("click", function () {
        firstSectionImg.classList.toggle("firstSectionImg");
        firstSectionImg.classList.toggle("firstSectionImg2");
    });

    rightSlider.addEventListener("click", function () {
        firstSectionImg.classList.toggle("firstSectionImg");
        firstSectionImg.classList.toggle("firstSectionImg2");
    });

    mysteryBox.addEventListener("mouseover", function () {
        let text = ["U nas najlepiej",
            "Tylko najlepszej jakości produkty",
            "Tanio i szybko",
            "Posiadamy każdy odcień"];
        let randomText = Math.floor((Math.random() * 3));
        mysteryBox.innerText = text[randomText];
    });

    mysteryBox.addEventListener("mouseout", function () {
        mysteryBox.innerText = ""
    });

    for (let i = 0; i < list_arrow.length; i++) {
        list_arrow[i].addEventListener('mouseover', function () {
                list_panel[i].style.display = "block";
        });
        list_arrow[i].addEventListener('click', function () {
                list_panel[i].style.display = "none";
        });
    }

});
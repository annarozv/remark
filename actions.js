/** handling opening an collapsing sections */
let heroButtons = document.getElementsByClassName("hero-button");

for (let i = 0; i < heroButtons.length; i++) {
    heroButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/** hide all english texts in the beginning */
let engTexts = document.querySelectorAll('.eng');

engTexts.forEach(elem => {
    elem.style.display = "none";
});

/** function for toggling languages */
function switchLang() {
    let button = document.getElementById("languageSwitcher");
    let buttonValue = button.value;
    let lvTexts = document.querySelectorAll('.lv');
    let engTexts = document.querySelectorAll('.eng');

    if (buttonValue == 'ENG') {
        // hide latvian texts and unhide english   
        lvTexts.forEach(elem => {
            elem.style.display = "none";
        });

        engTexts.forEach(elem => {
            elem.style.display = "block";
        });

        // change button text to latvian
        button.value = "LV";
        button.innerHTML = "LV";         
    } else {
        // hide english texts and unhide latvian        
        engTexts.forEach(elem => {
            elem.style.display = "none";
        });
        
        lvTexts.forEach(elem => {
            elem.style.display = "block";
        });

        // change button text to english
        button.value = "ENG";
        button.innerHTML = "ENG";   
    }
}

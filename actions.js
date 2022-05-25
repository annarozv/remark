/** handling opening and collapsing sections */
let heroButtons = document.getElementsByClassName("hero-button");

for (let i = 0; i < heroButtons.length; i++) {
    heroButtons[i].addEventListener("click", function() {
        let content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/* function for obtaining the cookie value */
function getCookie(cookieName) {
    let cookie = {};

    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })

    return cookie[cookieName];
}

/* check what language was set */
let lang = getCookie("language");
let buttonInTheStart = document.getElementById("languageSwitcher");

if (lang === "eng") {
    let hideableTexts = document.querySelectorAll('.lv');

    hideableTexts.forEach(elem => {
        elem.style.display = "none";
    });

    buttonInTheStart.value = "LV";
    buttonInTheStart.innerHTML = "LV";   
} else {
    let hideableTexts = document.querySelectorAll('.eng');

    hideableTexts.forEach(elem => {
        elem.style.display = "none";
    });

    buttonInTheStart.value = "ENG";
    buttonInTheStart.innerHTML = "ENG"; 
}

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
        
        //set the cookie
        document.cookie = "language=eng;" + "SameSite=None; Secure";
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
        
        //set the cookie
        document.cookie = "language=lv;" + "SameSite=None; Secure";
    }
}

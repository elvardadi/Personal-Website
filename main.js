const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const mainSection = document.getElementById("main-section");

const home = document.getElementById("home");
const about = document.getElementById("about");
const funfacts = document.getElementById("funfacts");
const contact = document.getElementById("contact");

let currentPage = home;





let isMenuShowing = false;

function toggleMenu(){

    if (isMenuShowing)
        closeMenu();
    else
        openMenu();
}

function openMenu(){
    menuButton.classList = "fa fa-times fa-3x";

    menu.style.display = "flex";

    mainSection.style.opacity = "0.3";

    isMenuShowing = true;
}

function closeMenu(){
    menuButton.classList = "fa fa-navicon fa-3x"

    menu.style.display = "none";

    mainSection.style.opacity = "1";

    isMenuShowing = false;
}

function showHomePage(){
    changePage(home);
}

function showAbout(){
    changePage(about);
}

function showFunFacts(){
    changePage(funfacts);
}

function showContact(){
    changePage(contact);
}

function changePage(newPage){
    if(currentPage !== newPage){
        currentPage.style.display = "none";
        newPage.style.display = "block";
        currentPage = newPage;
    }
    closeMenu();
}
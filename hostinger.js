let extras = document.querySelector(".extras");
let seeMore = document.querySelector(".seeMore");
let seeLess = document.querySelector(".seeLess");
let languageMenu = document.querySelector("#languageMenu");
let main = document.querySelector(".main");
let cross = document.querySelector(".fa-times-circle");
let navbar = document.querySelector("#navbar");
let homeText = document.querySelector(".homeText");
let hostingerLogo = document.querySelector(".mainLogo");
let menuIcon = document.querySelector(".menuIcon");
let mainNavMenu = document.querySelector(".mainNavMenu");
let languageSelection = document.querySelector(".languageSelection");
let navMenu = document.querySelectorAll(".mainNavMenu .navMenu");
let dropdowns = document.querySelectorAll(".dropdown");
function handleSeeMore(){
    extras.style.display = "flex";
    seeMore.style.display = "none";
    seeLess.style.display = "block";
}
function handleSeeLess(){
    extras.style.display = "none";
    seeLess.style.display = "none";
    seeMore.style.display = "block";
}
function removeActiveMenu(menus){
    menus.forEach(menu=>{
        menu.classList.remove("active");
    })
}
function addBorderBottom(){
    navMenu.forEach((menu)=>{
        if(!menu.classList.contains("miniLogin")){
        menu.style.borderBottom = "2px solid rgb(185, 185, 185)";
        }
    })
}
function removeBorderBottom(){
    navMenu.forEach(menu=>{
    if(!menu.classList.contains("miniLogin")){
        menu.style.borderBottom = "none";
    }
})
}
languageMenu.addEventListener("click",()=>{
    if(languageSelection.classList.contains("active")){
        languageSelection.classList.remove("active");
        main.classList.remove("inactive");
        mainNavMenu.classList.remove("active"); 
    }
    else{
        menuIcon.classList.remove("rotateLines");
        languageSelection.classList.add("active");
        main.classList.add("inactive");
        mainNavMenu.classList.remove("active");
    }}
);
cross.addEventListener("click",()=>{
    let languageSelection = document.querySelector(".languageSelection");
        languageSelection.classList.remove("active");
        main.classList.remove("inactive");
        mainNavMenu.classList.remove("active");
});
let options = {
    rootMargin: "-70% 0px 0px 0px"
}
let observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            navbar.classList.add("whiteNav");
            hostingerLogo.setAttribute("src","../images/hostingerLogoBlack.png")
        }
        else{
            navbar.classList.remove("whiteNav")
            hostingerLogo.setAttribute("src","../images/hostingerLogoWhite.png")
        }
    })
}, options);
observer.observe(homeText);
menuIcon.addEventListener("click",()=>{
    if(mainNavMenu.classList.contains("active")){
        menuIcon.classList.remove("rotateLines");
        languageSelection.classList.remove("active");
        main.classList.remove("inactive");
        mainNavMenu.classList.remove("active"); 
    }
    else{
        languageSelection.classList.remove("active");
        main.classList.add("inactive");
        mainNavMenu.classList.add("active");
        menuIcon.classList.add("rotateLines");

    }}
)
navMenu.forEach((menu,ind)=>{
    if(!menu.classList.contains("miniLogin")){
        menu.addEventListener("click", ()=>{
            if(window.innerWidth<=1200){
            addBorderBottom();
            if(dropdowns[ind].classList.contains("active")){
                dropdowns[ind].classList.remove("active");
            }
            else{
                removeActiveMenu(dropdowns);
                dropdowns[ind].classList.add("active");
                dropdowns[ind].style.marginBottom = "1rem";
                menu.style.border = "none";
            }
        }
        })
    }
})
window.onresize = ()=>{
    if(window.innerWidth>1200){
        removeActiveMenu(dropdowns);
        removeBorderBottom();
        if(mainNavMenu.classList.contains("active")){
            menuIcon.classList.remove("rotateLines");
            main.classList.remove("inactive");
            mainNavMenu.classList.remove("active");
        }
        return; 
    }
}


       

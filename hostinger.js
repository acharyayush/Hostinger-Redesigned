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
function toggleLangAndMain(){
    languageSelection.classList.toggle("active");
    main.classList.toggle("inactive");
    mainNavMenu.classList.toggle("active");
}
languageMenu.addEventListener("click",()=>{
    let languageSelection = document.querySelector(".languageSelection");
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
    let languageSelection = document.querySelector(".languageSelection");
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
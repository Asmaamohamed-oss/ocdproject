
// Header 

const header = document.querySelector("header.header")

window.addEventListener("scroll",(e)=>{
    if(window.scrollY > 0){
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed")
    }
})

// Add Active link
const links = document.querySelectorAll("nav ul li a")
links.forEach(function(link){
    link.addEventListener("click",(e)=>{
        // Remove active link first
        links.forEach(link => link.classList.remove("active"))
        // Add active link
        link.classList.add("active")
    })
})

// Add Active While scroll
const nav = document.querySelector("nav")
window.addEventListener("scroll",(e)=>{
    const allSections = document.querySelectorAll("section");
    allSections.forEach(function(section){
        const secTop = section.getBoundingClientRect().top;
        const navHeight = nav.getBoundingClientRect().height < 62 ? 62 : nav.getBoundingClientRect().height;
        if(secTop - navHeight <= 0){
            // Active Link
            const activeLink = document.querySelector(`a[href="#${section.id}"]`)
            //Remove Active Link  
            links.forEach(link => link.classList.remove("active"));
            // Add Active Link
            activeLink.classList.add("active")
            // console.log(activeLink);
        }
    })
})

// Navigation with Smooth behavior
links.forEach(function(link){
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        //Get The section 
        const section = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
            top:section.offsetTop - nav.getBoundingClientRect().height,
            left:0,
            behavior:"smooth"
        })
    })
})


/// Aside Nav
const menu = document.querySelector("i.menu-icon");
const closeMenu = document.querySelector("button.close-menu");
const ulLinks = document.querySelector("nav.nav-bar ul");
menu.addEventListener("click",(e)=>{
    ulLinks.classList.add("aside-links");
})

// Close Aside Nav
closeMenu.addEventListener("click",(e)=>{
    ulLinks.classList.remove("aside-links")
})

// Close Aside Nav if it clicked outside
window.addEventListener("click",(e)=>{
    if(!e.target.classList.contains("menu-icon")){
        if(ulLinks.classList.contains("aside-links")){
            ulLinks.classList.remove("aside-links")
        }
    }
})

/* Explore Link*/
const explore = document.querySelector("a.explore");
const aboutSection= document.querySelector("#about")
explore.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top:aboutSection.offsetTop - nav.getBoundingClientRect().height,
        left:0,
        behavior:"smooth"
    })
})


/*to-top button*/

const toTopBtn = document.querySelector("button.to-top")

toTopBtn.addEventListener("click",(e)=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

window.addEventListener('scroll',(e)=>{
    if(window.scrollY >= 800){
        toTopBtn.classList.remove("hide-btn");
        toTopBtn.classList.add("show-btn");
    }else{
        toTopBtn.classList.add("hide-btn");
        toTopBtn.classList.remove("show-btn");
    }
})

/*Testing*/
const box = document.querySelector(".box")
console.log(box.clientHeight);
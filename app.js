
// Header 

const header = document.querySelector("header.header")

window.addEventListener("scroll",(e)=>{
    if(window.pageYOffset > 2){
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
        const headerHeight = header.getBoundingClientRect().height;
        if(secTop - headerHeight <= 0){
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
        section.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
});

/// Open&Close Menu
const btnContainer = document.querySelector(".btn-nav")
const ulLinks = document.querySelector("nav.nav-bar ul.links_list");
const linksContainer = document.querySelector("nav.nav-bar div.links_container");
btnContainer.addEventListener("click",(e)=>{
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const ullinksHeight = ulLinks.getBoundingClientRect().height;
    if(linksContainerHeight === 0){
        openMenu(ullinksHeight)
    }else{
        closeMenu()
    }
})

function closeMenu(){
    btnContainer.classList.remove("close-menu")
    btnContainer.classList.add("show-menu")
    linksContainer.removeAttribute("style");
    //Header 
    header.classList.remove("small-screen-header")
}

function openMenu(ullinksHeight){
    btnContainer.classList.remove("show-menu")
    btnContainer.classList.add("close-menu")
    linksContainer.setAttribute("style",`height:${ullinksHeight}px;`);
    //Header
    header.classList.add("small-screen-header")
}

// Close Links After click
window.addEventListener("click",(e)=>{
    if(!e.target.classList.contains("btn-nav")){
        closeMenu()
    }
})

/*Porfolio Cards-Imgs*/
const PorfolioImgs = document.querySelectorAll(".portfolio-card-img")
PorfolioImgs.forEach(function(card){
    const img = card.dataset.img;
    card.style.backgroundImage=`url(/imges/${img}) , linear-gradient(rgb(1 1 18 / 50%), rgb(250 246 41 / 38%), rgb(26 26 26 / 50%))`
    // card.style.backgroundColor="black"
})

/*Year */
const yearEle = document.querySelector(".year")
const yearDate = new Date().getFullYear()
yearEle.innerHTML = yearDate 
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
    if(window.scrollY >= 1000){
        toTopBtn.classList.remove("hide-btn");
        toTopBtn.classList.add("show-btn");
    }else{
        toTopBtn.classList.add("hide-btn");
        toTopBtn.classList.remove("show-btn");
    }
})


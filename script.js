var C = document.getElementById("Cppp");
var G = document.getElementById("members");
var font = parseFloat(window.getComputedStyle(C).fontSize);
var font2 = parseFloat(window.getComputedStyle(G).fontSize);
var listItems = G.getElementsByTagName("li");
const sliders = document.querySelectorAll(".slides");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // console.log(value);

    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.fontSize = font2 - (value * 0.25) + "px";
    }

    C.style.marginTop = value * 1.5 + "px";
    C.style.fontSize = font - (value * 0.25) + "px";
    G.style.top = value * 2 + "px";
});

const appearOptions = {
    threshold : 0,
    rootMargin : "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            entry.target.classList.remove('appear');
        } else{
            entry.target.classList.add('appear');
        }
    })
},
appearOptions)

sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
})

const About = document.querySelector("#about")
const PnC = document.querySelector("#pc")
const BT = document.querySelector("#backtop")

About.addEventListener("click",function(){
    window.scrollTo({
        top:955,
        behavior :"smooth",
    })
})

PnC.addEventListener("click",function(){
    window.scrollTo({
        top:1910,
        behavior :"smooth",
    })
})
BT.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior :"smooth",
    })
})
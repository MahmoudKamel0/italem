document.addEventListener('scroll', () => {
    const btnSite = document.querySelector(".btn-site")
    if(window.scrollY > 400){
        btnSite.classList.add("btn-site_active")
    }else{
        btnSite.classList.remove("btn-site_active")
    }
}) 

// window.addEventListener('load', function(){
//     window.scrollTo(0, 0)
// })


// button top
const btnTop = document.querySelector(".btn-top")
btnTop.addEventListener("click", function() {
    window.scrollTo(0, 0)
})

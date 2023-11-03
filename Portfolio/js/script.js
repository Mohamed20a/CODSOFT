// Add click event for scroll up button
scrollBtn = document.querySelector(".scrollBtn");

    window.addEventListener("scroll", ()=>{
    scrollup()
    })

    scrollBtn.addEventListener('click',()=>{
        window.scrollTo({
        top : 0 ,
        behavior : "smooth"
        })
    })

    scrollup()

    // Function for Add Class Active When it arrive to 150
    function scrollup(){
        
        window.scrollY > 150 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
    }
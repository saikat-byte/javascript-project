const anim = document.querySelectorAll("span");


anim.forEach((item)=>{
    item.addEventListener("click", function(){
        item.classList.toggle("active");
    })
})
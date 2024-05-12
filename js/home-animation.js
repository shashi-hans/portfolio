let slide0 = document.querySelectorAll("#portfolio-hero li")[0];
let slide1 = document.querySelectorAll("#portfolio-hero li")[1];
let i=1;

    let interval = setInterval(animation, 3000);

    function animation(){
        if((i%2) == 1){
            document.querySelectorAll("#portfolio-hero li")[0].style.opacity="0"
            document.querySelectorAll("#portfolio-hero li")[0].style.zIndex="1"
            document.querySelectorAll("#portfolio-hero li")[0].classList.remove("flex-active-slide")
            slide0.querySelector(".slider-text").classList.remove("animated" ,"fadeInUp")

            document.querySelectorAll("#portfolio-hero li")[1].style.opacity="1";
            document.querySelectorAll("#portfolio-hero li")[1].style.zIndex="2";
            document.querySelectorAll("#portfolio-hero li")[1].classList.add("flex-active-slide")
            slide1.querySelector(".slider-text").classList.add("animated" ,"fadeInUp")
        }else {
            document.querySelectorAll("#portfolio-hero li")[1].style.opacity="0";
            document.querySelectorAll("#portfolio-hero li")[1].style.zIndex="1";
            document.querySelectorAll("#portfolio-hero li")[1].classList.remove("flex-active-slide")
            slide1.querySelector(".slider-text").classList.remove("animated" ,"fadeInUp")

            document.querySelectorAll("#portfolio-hero li")[0].style.opacity="1"
            document.querySelectorAll("#portfolio-hero li")[0].style.zIndex="2"
            document.querySelectorAll("#portfolio-hero li")[0].classList.add("flex-active-slide")
            slide0.querySelector(".slider-text").classList.add("animated" ,"fadeInUp")
        }
        i++;
        if(i===6){
            clearInterval(interval);
        }
    }
  
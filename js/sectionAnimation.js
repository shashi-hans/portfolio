function sectionAnimation(){
    console.log("sectionAnimation WORKING")
    let aboutTop = document.querySelector(".portfolio-about").offsetTop-80
    let aboutBottom= aboutTop + document.querySelector(".portfolio-about").offsetHeight

    let skillTop= document.querySelector(".portfolio-skills").offsetTop - 80
    let skillBottom= skillTop + document.querySelector(".portfolio-skills").offsetHeight

    let educationTop = document.querySelector(".portfolio-education").offsetTop-80
    let educationBottom= educationTop + document.querySelector(".portfolio-education").offsetHeight

    let experienceTop= document.querySelector(".portfolio-experience").offsetTop - 80
    let experienceBottom= experienceTop + document.querySelector(".portfolio-experience").offsetHeight

    let workTop = document.querySelector(".portfolio-work").offsetTop-80
    let workBottom= workTop + document.querySelector(".portfolio-work").offsetHeight

    let contactTop = document.querySelector(".portfolio-contact").offsetTop-80
    let contactBottom= contactTop + document.querySelector(".portfolio-contact").offsetHeight
// about section
    if (scrollY > aboutTop && scrollY < aboutBottom ) {
      document.getElementById("aboutSection1").classList.add("animate-box", "fadeInLeft", "animated");
      document.getElementById("aboutSection2").classList.add("animate-box", "fadeInUp", "animated");
    }else{ 
      document.getElementById("aboutSection1").classList.remove("animate-box", "fadeInLeft", "animated") ;
      document.getElementById("aboutSection2").classList.remove("animate-box" ,"fadeInUp" ,"animated");
    }
// skill section
    if (scrollY > skillTop && scrollY < skillBottom ) {
      document.getElementById("skillSection1").classList.add("animate-box", "fadeInUp", "animated");
      document.getElementById("skillSection2").classList.add("animate-box","fadeInLeft", "animated");
      // progress bar 
      document.getElementById("bar1").classList.add("html-progress");
      document.getElementById("bar2").classList.add("css-progress");
      document.getElementById("bar3").classList.add("javascript-progress");
      document.getElementById("bar4").classList.add("react-progress");
      document.getElementById("bar5").classList.add("nodejs-progress");
    }else{ 
      document.getElementById("skillSection1").classList.remove("animate-box" ,"fadeInUp" ,"animated");
      document.getElementById("skillSection2").classList.remove("animate-box","fadeInLeft", "animated");
      // skill progress bar
      document.getElementById("bar1").classList.remove("html-progress");
      document.getElementById("bar2").classList.remove("css-progress");
      document.getElementById("bar3").classList.remove("javascript-progress");
      document.getElementById("bar4").classList.remove("react-progress");
      document.getElementById("bar5").classList.remove("nodejs-progress");
    }
// education section
    if (scrollY > educationTop && scrollY < educationBottom ) {
      document.getElementById("educationSection1").classList.add("animate-box", "fadeInLeft", "animated");
      document.getElementById("educationSection2").classList.add("animate-box","fadeInUp" ,"animated");
      document.getElementById("educationSection3").classList.add("animate-box","fadeInLeft", "animated");
    }else{
      document.getElementById("educationSection1").classList.remove("animate-box", "fadeInLeft", "animated");
      document.getElementById("educationSection2").classList.remove("animate-box", "fadeInUp", "animated");
      document.getElementById("educationSection3").classList.remove("animate-box", "fadeInLeft", "animated");
      }
// experience section
    if (scrollY > experienceTop && scrollY < experienceBottom ) {
      document.getElementById("experienceSection1").classList.add("animate-box", "fadeInLeft", "animated");
      document.getElementById("experienceSection2").classList.add("animate-box", "fadeInUp", "animated");
      document.getElementById("experienceSection3").classList.add("animate-box", "fadeInLeft", "animated");
      document.getElementById("experienceSection4").classList.add("animate-box", "fadeInUp", "animated");
    }else{ 
      document.getElementById("experienceSection1").classList.remove("animate-box", "fadeInLeft", "animated");
      document.getElementById("experienceSection2").classList.remove("animate-box", "fadeInUp", "animated");
      document.getElementById("experienceSection3").classList.remove("animate-box", "fadeInLeft", "animated");
      document.getElementById("experienceSection4").classList.remove("animate-box", "fadeInUp", "animated");
    }
// work section
    if (scrollY > workTop && scrollY < workBottom ) {
      document.getElementById("workSection1").classList.add("animate-box", "fadeInLeft", "animated");
      document.getElementById("workSection2").classList.add("animate-box" ,"fadeInUp", "animated"); 
      document.getElementById("workSection3").classList.add("animate-box", "fadeInLeft", "animated");
      document.getElementById("workSection4").classList.add("animate-box", "fadeInRight", "animated");
      document.getElementById("workSection5").classList.add("animate-box", "fadeInLeft", "animated");
      document.getElementById("workSection6").classList.add("animate-box", "fadeInRight", "animated");
    }else{ 
        document.getElementById("workSection1").classList.remove("animate-box", "fadeInLeft", "animated");
      document.getElementById("workSection2").classList.remove("animate-box", "fadeInUp", "animated");
      document.getElementById("workSection3").classList.remove("animate-box", "fadeInLeft", "animated");
      document.getElementById("workSection4").classList.remove("animate-box", "fadeInRight", "animated");
      document.getElementById("workSection5").classList.remove("animate-box", "fadeInLeft", "animated");
      document.getElementById("workSection6").classList.remove("animate-box", "fadeInRight", "animated");
    }
// contact section
    if (scrollY > contactTop && scrollY < contactBottom ) {
        document.getElementById("contactSection1").classList.add("animate-box", "fadeInLeft", "animated");
        document.getElementById("contactSection2").classList.add("animate-box", "fadeInUp", "animated");
        document.getElementById("contactSection3").classList.add("animate-box", "fadeInLeft", "animated");
        document.getElementById("contactSection4").classList.add("animate-box", "fadeInUp", "animated");

    }else{ 
        document.getElementById("contactSection1").classList.remove("animate-box", "fadeInLeft", "animated");
        document.getElementById("contactSection2").classList.remove("animate-box", "fadeInUp", "animated");
        document.getElementById("contactSection3").classList.remove("animate-box", "fadeInLeft", "animated");
        document.getElementById("contactSection4").classList.remove("animate-box", "fadeInUp", "animated");
    }
  }
 //onscroll = sectionAnimation;
// window.addEventListener("onscroll",sectionAnimation)
document.addEventListener("scroll",sectionAnimation)
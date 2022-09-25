//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");
    }

    window.addEventListener('load', Start);
})();

let viewportSize = document.documentElement.clientWidth;

let mainText = document.querySelector(".main-image-div h1");
let nameText = document.querySelector(".main-image2-div h1");
nameText.style.opacity = "0";

let p1 = document.querySelector(".main-image2-div .p1");
let p2 = document.querySelector(".main-image2-div .p2");
let p3 = document.querySelector(".main-image2-div .p3");
let p4 = document.querySelector(".main-image2-div .p4");

p1.style.opacity = "0";
p2.style.opacity = "0";
p3.style.opacity = "0";
p4.style.opacity = "0";


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);

    if(value > 60){
        mainText.style.animation = "disappear 1s ease-in-out forwards";
    }
    else{
        mainText.style.animation = "text_slide 1s ease-in-out"
    }




    if(value == 0){
        nameText.style.opacity = "0";
    }
    else if(value > 220 && value < 750){
        nameText.style.animation = "name_appear 1s ease-out forwards"
    }
    else if(value > 750){
        nameText.style.animation = "name_disappear 1s ease-out forwards"
    }
    else if(value < 220){
        nameText.style.animation = "name_disappear 1s ease-out forwards"
    }
    else{
        nameText.style.opacity = "0";
    }



    //mobile responsive
    if(viewportSize > 574 && viewportSize < 768 || viewportSize <= 574){
        

        if(value == 0){
            p1.style.opacity = "0";
            p2.style.opacity = "0";
            p3.style.opacity = "0";
            p4.style.opacity = "0";
        }
        else if(value > 240 && value < 378){
            p1.style.animation = "m_para_appear 1s ease-out forwards";
            p2.style.animation = "m_para_appear 1.2s ease-out forwards";
            p3.style.animation = "m_para_appear 1.4s ease-out forwards";
            p4.style.animation = "m_para_appear 1.6s ease-out forwards";
        }
        else if(value > 378){
            p1.style.animation = "m_para_disappear 1.6s ease-out forwards";
            p2.style.animation = "m_para_disappear 1.4s ease-out forwards";
            p3.style.animation = "m_para_disappear 1.2s ease-out forwards";
            p4.style.animation = "m_para_disappear 1s ease-out forwards";
        }
        else if(value < 240){
            p1.style.animation = "m_para_disappear 1s ease-out forwards";
            p2.style.animation = "m_para_disappear 1s ease-out forwards";
            p3.style.animation = "m_para_disappear 1s ease-out forwards";
            p4.style.animation = "m_para_disappear 1s ease-out forwards";
        }
        else{
            p1.style.opacity = "0";
            p2.style.opacity = "0";
            p3.style.opacity = "0";
            p4.style.opacity = "0";
        }
    }
    else{

        if(value == 0){
            p1.style.opacity = "0";
            p2.style.opacity = "0";
            p3.style.opacity = "0";
            p4.style.opacity = "0";
        }
        else if(value > 240 && value < 880){
            p1.style.animation = "para_appear 1s ease-out forwards";
            p2.style.animation = "para_appear 1.2s ease-out forwards";
            p3.style.animation = "para_appear 1.4s ease-out forwards";
            p4.style.animation = "para_appear 1.6s ease-out forwards";
        }
        else if(value > 880){
            p1.style.animation = "para_disappear 1.6s ease-out forwards";
            p2.style.animation = "para_disappear 1.4s ease-out forwards";
            p3.style.animation = "para_disappear 1.2s ease-out forwards";
            p4.style.animation = "para_disappear 1s ease-out forwards";
        }
        else if(value < 240){
            p1.style.animation = "para_disappear 1s ease-out forwards";
            p2.style.animation = "para_disappear 1s ease-out forwards";
            p3.style.animation = "para_disappear 1s ease-out forwards";
            p4.style.animation = "para_disappear 1s ease-out forwards";
        }
        else{
            p1.style.opacity = "0";
            p2.style.opacity = "0";
            p3.style.opacity = "0";
            p4.style.opacity = "0";
        }
    }
    

})

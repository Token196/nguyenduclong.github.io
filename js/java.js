//moblie navigation//
$('.mobile-nav-icon').click(
    function(){
        $('.menu').slideToggle(200);
    }
)
//product-content-bottom button//
$('.product-content-bottom button').click(
    function(){
        $('.product-content-bottom-text').slideToggle(200);
    }
)
//change img//
const bigImg = document.querySelector(".content-left-big-img img")
const smalImg = document.querySelectorAll(".content-left-small-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})
$(document).ready(function(){

$(".button-collapse").sideNav();
 $('.slider').slider({
     transtion: 2000,
     interval: 3500,
 });

    });
    $('.next').click(function() {
 $('.slider').slider('next');
});
$('.prev').click(function() {
 $('.slider').slider('prev');
});

window.addEventListener("scroll", bringmenu);

let bringmenu = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("menu").style.top = "-100%";
    } else {
        document.getElementById("menu").style.top = "0";
    }
}

console.log(bringmenu())
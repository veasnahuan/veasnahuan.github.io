var myBody = document.getElementsByTagName('body')[0];
var shrinkOn = (150);

window.addEventListener('scroll', function(){
   if (window.pageYOffset > shrinkOn) {
       myBody.classList.add("smaller");
   } else {
   if (myBody.classList.contains("smaller")) {
       myBody.classList.remove("smaller");
       }
   }
});
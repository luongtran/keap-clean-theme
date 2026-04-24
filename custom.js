window.addEventListener("load", function(){

setTimeout(function(){

   /* Rename products area */
   let title = document.querySelector(".productsTitle");
   if(title) title.innerText = "Order Summary";

   /* Product 1 */
   let names = document.querySelectorAll(".productName");
   if(names[0]) names[0].innerText = "GMTC Trial Offer";

   let desc = document.querySelectorAll(".productDescription");
   if(desc[0]) desc[0].innerHTML = "$1 registration fee today.";

   /* Product 2 */
   if(names[1]) names[1].innerText = "Full Gospel Music Training Center Access";

   if(desc[1]){
      desc[1].innerHTML = "1,000+ hours of gospel lessons, organ archives, bonus courses and more.";
   }

   let sub = document.querySelector(".productSubscriptionDetails");
   if(sub){
      sub.innerHTML = "30 days free, then only $37/month. Cancel anytime.";
   }

   /* Change Button Text */
   let btn = document.querySelector('input[type="submit"],button[type="submit"]');
   if(btn){
      if(btn.tagName==="INPUT"){
          btn.value = "Start My Trial Now";
      }else{
          btn.innerText = "Start My Trial Now";
      }
   }

   /* Auto click card button */
   let t = setInterval(function(){

      let cardBtn = document.querySelector('[data-funding-source="card"]');

      if(cardBtn){
         cardBtn.click();
         clearInterval(t);
      }

   },1000);

},2500);

});

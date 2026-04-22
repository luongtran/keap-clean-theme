<script>
window.addEventListener("load", function(){

 setTimeout(function(){

   let btns = [...document.querySelectorAll("button,div,a")];

   let cc = btns.find(el =>
      el.innerText &&
      el.innerText.toLowerCase().includes("credit card")
   );

   if(cc){
      cc.click();
   }

 },2000);

});
</script>

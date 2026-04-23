let t = setInterval(function(){

   let btn = document.querySelector('[data-funding-source="card"]');

   if(btn){
      btn.click();
      clearInterval(t);
   }

},700);

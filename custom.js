document.addEventListener("DOMContentLoaded", function(){

  /* chỉ đổi text button */
  const btn = document.querySelector('input[type="submit"],button');
  if(btn){
    if(btn.tagName === 'INPUT'){
      btn.value = "Complete Order";
    }else{
      btn.innerText = "Complete Order";
    }
  }

});

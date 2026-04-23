let t = setInterval(()=>{

 let btn = [...document.querySelectorAll("*")].find(el =>
   el.innerText &&
   el.innerText.includes("Pay with Credit Card")
 );

 if(btn){
   btn.click();
   clearInterval(t);
 }

},1000);

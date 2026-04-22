window.addEventListener("load", function(){

    // wait until everything fully rendered
    setTimeout(function(){

        const checkout = document.querySelector("form");

        if(!checkout) return;

        // add wrapper class
        checkout.classList.add("keap-fix");

        // change only submit button text
        const btn = checkout.querySelector('input[type="submit"],button[type="submit"]');

        if(btn){
            if(btn.tagName==="INPUT"){
                btn.value="Complete Order";
            }else{
                btn.innerText="Complete Order";
            }
        }

    }, 2500); // wait Keap scripts finish render

});

document.addEventListener("DOMContentLoaded", function(){

    // Find form
    const form = document.querySelector('form');
    if(!form) return;

    // Change placeholders
    const map = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        postalCode: "ZIP Code",
        zip: "ZIP Code",
        cardNumber: "Card Number"
    };

    Object.keys(map).forEach(key=>{
        let el = form.querySelector('[name*="'+key+'"], #'+key);
        if(el) el.placeholder = map[key];
    });

    // Auto focus next field on Enter
    const fields = form.querySelectorAll('input, select');
    fields.forEach((field,index)=>{
        field.addEventListener('keydown',function(e){
            if(e.key==="Enter"){
                e.preventDefault();
                if(fields[index+1]) fields[index+1].focus();
            }
        });
    });

    // Change button text
    const btn = form.querySelector('button, input[type="submit"]');
    if(btn){
        if(btn.tagName==="INPUT"){
            btn.value = "Complete Order";
        }else{
            btn.innerText = "Complete Order";
        }
    }

});

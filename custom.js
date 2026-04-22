window.addEventListener("load", function(){

    function autoOpenCard(){

        let all = [...document.querySelectorAll("button, div, span, a")];

        let btn = all.find(el =>
            el.innerText &&
            el.innerText.trim().toLowerCase().includes("pay with credit card")
        );

        if(btn){
            btn.click();
            console.log("Opened Credit Card");
        }
    }

    // thử nhiều lần vì keap render chậm
    let tries = 0;

    let timer = setInterval(function(){

        autoOpenCard();

        tries++;

        // nếu thấy card field rồi thì stop
        let card = document.body.innerText.toLowerCase().includes("card number");

        if(card || tries > 10){
            clearInterval(timer);
        }

    }, 1000);

});

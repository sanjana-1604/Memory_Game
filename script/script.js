var cardClickedCount = 0;
var firstSelectedCard = "";
var secondSelectedCard = "";


var cards = document.querySelectorAll(".card");
cards.forEach((card)=>{
    card.addEventListener("click", ()=>{
        card.classList.add("clicked");
     
       if(cardClickedCount == 0)
       {
        firstSelectedCard = card.getAttribute("class").split(" ")[1];
        cardClickedCount++
        
       }
       else {
        secondSelectedCard = card.getAttribute("class").split(" ")[1];
        cardClickedCount = 0;

        if(firstSelectedCard == secondSelectedCard)
        {
            const correctCard = document.querySelectorAll("."+firstSelectedCard);
            correctCard.forEach((card)=>{
                card.classList.add("matched");
                card.classList.remove("clicked");
            });
        }
        else{
            const inCorrectCard = document.querySelectorAll(".card.clicked");
            
            inCorrectCard.forEach((card)=>{
                card.classList.add("notMatched");
            });
            setTimeout(()=>{
                inCorrectCard.forEach((card)=>{
                    card.classList.remove("notMatched");
                card.classList.remove("clicked");
                });
                
            },800);
        }
        
       }
       
    });
});
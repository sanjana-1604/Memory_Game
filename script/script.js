var cardClickedCount = 0;
var firstSelectedCard = "";
var secondSelectedCard = "";
var flipCount = 0;
var timeRemaining = document.getElementById("time_remaining");


let flipCounter = document.getElementById("flip");
let display_time = 0;

var cards = document.querySelectorAll(".card");
cards.forEach((card) => {

    card.addEventListener("click", () => {
        card.classList.add("clicked");


        if (cardClickedCount == 0) {
            firstSelectedCard = card.getAttribute("class").split(" ")[1];
            cardClickedCount++;
            flipCount++;
            flipCounter.innerHTML = flipCount;
            display_time = timeRemaining.innerHTML;

            var set_timer = setInterval(() => {
                display_time -= 1;
                timeRemaining.innerHTML = display_time;

                if (display_time === 0) {                    
                    alert("Time's up");
                    clearTimeout(set_timer);
                    location.reload();
                }
            }, 1000);
        }
        else {
            secondSelectedCard = card.getAttribute("class").split(" ")[1];
            cardClickedCount = 0;
            flipCount++;
            flipCounter.innerHTML = flipCount;
            if (firstSelectedCard == secondSelectedCard) {
                const correctCard = document.querySelectorAll("." + firstSelectedCard);
                correctCard.forEach((card) => {
                    card.classList.add("matched");
                    card.classList.remove("clicked");
                });
            }
            else {
                const inCorrectCard = document.querySelectorAll(".card.clicked");
                inCorrectCard.forEach((card) => {
                    card.classList.add("notMatched");
                });
                setTimeout(() => {
                    inCorrectCard.forEach((card) => {
                        card.classList.remove("notMatched");
                        card.classList.remove("clicked");
                    });

                }, 800);
            }
        }
    });
});


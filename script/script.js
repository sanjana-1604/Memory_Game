var cardClickedCount = 0;
var firstSelectedCard = "";
var secondSelectedCard = "";
var flipCount = 0;

//var card_section = document.getElementById("card_container");

// var image = document.createElement("img");
// image.src = "https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png";
// card_section.appendChild(image); 

// for (var i =0 ; i<16; i++)
// {


// }
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
            display_time = document.getElementById("time_remaining").innerHTML;
            var set_timer = setInterval(() => {
              
                if (display_time == 0) {
                    clearInterval(set_timer);
                    reset();
                    alert("Time ends");
                    
                }
                else {
                    display_time -= 1;
                    document.getElementById("time_remaining").innerHTML = display_time;
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

function reset() {

    flipCounter.innerHTML = 0;
    cardClickedCount = 0;
    firstSelectedCard = "";
    secondSelectedCard = "";
    flipCounter.innerHTML = 0;
    cards.forEach((card) => {
        card.classList.add("start");
        card.classList.remove("clicked");
        card.classList.remove("matched");
        card.classList.remove("notMatched");
        document.getElementById("time_remaining").innerHTML =100;
       
    });
}
/*
 * Create a list that holds all of your cards
 */

// variable for cards:
const card = document.getElementsByClassName("card");
const cards = Array.from(card);
const deck = document.getElementsByClassName("deck")[0];
let matchedCards = [];

let moves = document.getElementsByClassName("moves")[0];
let moveCount = 0;
let starRating = document.getElementsByClassName("stars");


const restart = document.getElementsByClassName("restart")[0];

// single functions to display or hide cards
function showCard(card) {
    card.classList.add("show", "open");
}

function hideCards(cards) {
    cards.classList.remove("show", "open");
}

function matchCards(cards) {
    cards.classList.add("match");
    cards.classList.remove("show", "open");
}

// function to check if two cards match
function checkMatch(){
    // variable for card matching
    const open = document.getElementsByClassName("open");
    const openCards = Array.from(open);

    // add conditional statements to check if there is another card open:
    // if there are two cards open, check if they match:
    if (openCards.length < 2) {
        showCard(event.target);
    } else if (openCards.length = 2) {
        if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className) {
            for (let i = 0; i < openCards.length; i ++) {
                matchCards(openCards[i]);
                matchedCards.push(openCards[i]);
            }
        } else if (openCards[0].firstElementChild.className !== openCards[1].firstElementChild.className){
            for (let i = 0; i < openCards.length; i ++) {
                hideCards(openCards[i]);
            }
        }
    }
}

// increment the move counter and display it on the page:
function moveCounter() {
    moveCount ++;
    moves.textContent = moveCount;
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

    return cards;
}


deck.addEventListener("click", function(event) {
    checkMatch();
    moveCounter();
})


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

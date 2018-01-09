/*
 * Create a list that holds all of your cards
 */

const diamond1 = document.getElementsByClassName("fa-diamond")[0];
const diamond2 = document.getElementsByClassName("fa-diamond")[1];
const paperPlane1 = document.getElementsByClassName("fa-paper-plane-o")[0];
const paperPlane2 = document.getElementsByClassName("fa-paper-plane-o")[1];
const anchor1 = document.getElementsByClassName("fa-anchor")[0];
const anchor2 = document.getElementsByClassName("fa-anchor")[1];
const bolt1 = document.getElementsByClassName("fa-bolt")[0];
const bolt2 = document.getElementsByClassName("fa-bolt")[1];
const cube1 = document.getElementsByClassName("fa-cube")[0];
const cube2 = document.getElementsByClassName("fa-cube")[1];
const leaf1 = document.getElementsByClassName("fa-leaf")[0];
const leaf2 = document.getElementsByClassName("fa-leaf")[1];
const bicycle1 = document.getElementsByClassName("fa-bicycle")[0];
const bicycle2 = document.getElementsByClassName("fa-bicycle")[1];
const bomb1 = document.getElementsByClassName("fa-bomb")[0];
const bomb2 = document.getElementsByClassName("fa-bomb")[1];

const cards = [
    diamond1,
    diamond2,
    paperPlane1,
    paperPlane2,
    anchor1,
    anchor2,
    bolt1,
    bolt2,
    cube1,
    cube2,
    leaf1,
    leaf2,
    bicycle1,
    bicycle2,
    bomb1,
    bomb2,
];

const restart = document.getElementsByClassName("restart")[0];

// $("li").addClass( "match" );

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

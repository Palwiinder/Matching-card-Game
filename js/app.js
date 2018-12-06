//select all my elements

let deck = document.querySelector('.deck');
let card = document.getElementsByClassName('card');
// Make a new arry
let cards = shuffle(Array.from(card));
let openCards = [];
let matchedCards = [];
let stars = document.querySelector('.stars');


function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//shuffle the deck
for (let i = 0; i < card.length; i++) { 
    deck.removeChild(card[i])
};
for (let i = 0; i < cards.length; i++) {
    deck.appendChild(cards[i])
};




// add event listener
deck.addEventListener("click", function (e) {
    if (e.target.classList.contains('card')  && openCards.length < 2 &&  !(e.target.classList.contains('open', 'show'))) {
        e.target.classList.add('open', 'show');
        openCards.push(event.target);
        if (openCards.length == 2) {
            compareCards();
        }
    }
});

// compare the cards
function compareCards() {
    if (openCards[0].innerHTML == openCards[1].innerHTML) {
        matchedCards.push(cards[0]);
        matchedCards.push(cards[1]);

        openCards[0].classList.add('match');
        openCards[1].classList.add('match');

        openCards[0].classList.remove('open', 'show');
        openCards[1].classList.remove('open', 'show');

        openCards = [];
        moveCounter();
        endGame();
// set time out function
    } else {
        setTimeout(function () {
            openCards[0].classList.remove('open', 'show');
            openCards[1].classList.remove('open', 'show');
            openCards = [];
        }, 1000);
    }
    moveCounter();

}


// moves counter function

const movesCounter = document.querySelector('.moves');

function moveCounter() {
    let moves = movesCounter.textContent;
    moves++;
    movesCounter.textContent = moves;
    if (moves > 18 && moves < 20) {
        stars.remove();

    }
}
// end game

function endGame() {
    if (matchedCards.length === 16) {
        winningMessage();
    }
};

// swal alert
const winningMessage = function () {
    swal({
        title: "congratulations!you won but didn't get any",
       text: "play Again"
    });

}
// dont work properly.... restart.

const reset = document.querySelector('.restart');
     reset.addEventListener("click", function(event) {
        for (let i = 0; i < card.length; i++) { 
            cards[i].classList.remove('match');
            cards[i].classList.remove('open');
            cards[i].classList.remove('show');
        };
        moves = 0;
    movesCounter.textContent = moves;
});













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
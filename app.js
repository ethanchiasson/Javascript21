var playerHand = [];
var dealerHand = [];

function hitMe() {
  document.getElementById("stayButton").style.display = "block";
  var suits = ["♠", "♥", "♦", "♣"];
  let suitRand = suits[Math.floor(Math.random() * suits.length)];
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let valueRand = values[Math.floor(Math.random() * values.length)];

  var playerCards = document.getElementById("playerCards");
  let newCard = document.createElement("div");
  newCard.innerHTML = "<br />" + valueRand + "<br />" + suitRand;
  playerCards.appendChild(newCard);
  newCard.setAttribute("id", "playerCardsInner");

  var cardResult = parseInt(valueRand);

  if (isNaN(cardResult)) {
    switch (valueRand) {
      case "A":
        weight = 11;
        break;
      case "K":
        weight = 10;
        break;
      case "Q":
        weight = 10;
        break;
      case "J":
        weight = 10;
    }
  } else {
    weight = parseInt(cardResult);
  }
  playerHand.push(weight);
  updateScore();
}

function stay(suits, values) {
  var suits = ["♠", "♥", "♦", "♣"];
  let suitRand = suits[Math.floor(Math.random() * suits.length)];
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let valueRand = values[Math.floor(Math.random() * values.length)];

  var dealerCards = document.getElementById("dealerCards");
  let newDealerCard = document.createElement("div");
  newDealerCard.innerHTML = "<br />" + suitRand + "<br />" + valueRand;
  dealerCards.appendChild(newDealerCard);
  newDealerCard.setAttribute("id", "dealerCardsInner");

  var cardResult = parseInt(valueRand);

  if (isNaN(cardResult)) {
    switch (valueRand) {
      case "A":
        weight = 11;
        break;
      case "K":
        weight = 10;
        break;
      case "Q":
        weight = 10;
        break;
      case "J":
        weight = 10;
    }
  } else {
    weight = parseInt(cardResult);
    console.log(weight + " logged in switch else");
  }

  console.log(valueRand + " has a weight of " + weight);
  dealerHand.push(weight);
  updateScore();
}

function updateScore(weight) {
  var playerSum = playerHand.reduce(function(a, b) {
    return a + b;
  }, 0);
  document.getElementById("playerScore").innerHTML = playerSum;
  console.log(playerHand);

  var dealerSum = dealerHand.reduce(function(a, b) {
    return a + b;
  }, 0);
  document.getElementById("dealerScore").innerHTML = dealerSum;
  console.log(dealerHand);

  if (playerSum > 21) {
    // alert("Bust. Dealer Wins");
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "Yikes, you busted. You Lose.";
    document.getElementById("youWin").style.color = "red";
    document.getElementById("restartGame").style.display = "block";
    document.getElementById("hitBtn").style.display = "none";
    document.getElementById("stayButton").style.display = "none";
  }
  if (playerSum == 21) {
    // alert("You hit 21. You Win!");
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML = "You hit 21! You Win!";
    document.getElementById("restartGame").style.display = "block";
    document.getElementById("hitBtn").style.display = "none";
    document.getElementById("stayButton").style.display = "none";
  }
}

function stayWrapper(dealerSum, playerSum) {
  document.getElementById("dealerCards").firstChild.style.display = "none";
  stay();
  stay();
  var dealerSum = dealerHand.reduce(function(a, b) {
    return a + b;
  }, 0);
  var playerSum = playerHand.reduce(function(a, b) {
    return a + b;
  }, 0);
  if (dealerSum == 21) {
    // alert("The Dealer hit 21. You Lost.");
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "The Dealer hit 21" + "<br />" + "You Lost :(";
  } else if (dealerSum > 21) {
    // alert("The Dealer hit " + dealerSum + " and Bust. You Win.");
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "The Dealer hit " + dealerSum + " and Bust. You Win!";
  } else if (dealerSum > playerSum) {
    // alert("The Dealer reveals a hand of " + dealerSum + ". You Lost!");
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "The Dealer reveals a hand of " + dealerSum + ". You Lose :(";
  } else if (playerSum > dealerSum) {
    // alert(
    //   "The Dealer Draws to reveal " +
    //     dealerSum +
    //     ". You have the highest Score. You Win!"
    // );
    document.getElementById("youWin").style.display = "block";
  }
  updateUI();
}

function restartGame() {
  location.reload();
}

function updateUI() {
  document.getElementById("restartGame").style.display = "block";
  document.getElementById("hitBtn").style.display = "none";
  document.getElementById("stayButton").style.display = "none";
}

function deal() {
  hitMe();
  hitMe();
  document.getElementById("hitBtn").style.display = "block";
  document.getElementById("dealBtn").style.display = "none";
  var dealerCards = document.getElementById("dealerCards");
  let newDealerCard = document.createElement("div");
  newDealerCard.innerHTML = "";
  dealerCards.appendChild(newDealerCard);
  newDealerCard.setAttribute("id", "dealerCardsInner");

  stay();
}

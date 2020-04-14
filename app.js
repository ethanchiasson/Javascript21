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
  newCard.innerHTML = suitRand + "<br />" + valueRand;
  playerCards.appendChild(newCard);
  newCard.setAttribute("id", "playerCardsInner");

  var cardResult = parseInt(valueRand);

  var playerSum = playerHand.reduce(function(a, b) {
    return a + b;
  }, 0);

  if (isNaN(cardResult)) {
    switch (valueRand) {
      case "A":
        if (playerSum > 11) {
          weight = 1;
        } else {
          weight = 11;
        }
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
  newDealerCard.innerHTML = suitRand + "<br />" + valueRand;
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
  }
  console.log(valueRand + " has a weight of " + weight);
  dealerHand.push(weight);
  updateScore();
  var playerSum = playerHand.reduce(function(a, b) {
    return a + b;
  }, 0);
  var dealerSum = dealerHand.reduce(function(a, b) {
    return a + b;
  }, 0);
  if (playerSum > dealerSum) {
    stay();
  }
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
    document.getElementById("youLost").style.display = "block";
    document.getElementById("restartGame").style.display = "block";
    document.getElementById("hitBtn").style.display = "none";
    document.getElementById("stayButton").style.display = "none";
  }
  if (playerSum == 21) {
    document.getElementById("blackjack").style.display = "block";
    document.getElementById("restartGame").style.display = "block";
    document.getElementById("hitBtn").style.display = "none";
    document.getElementById("stayButton").style.display = "none";
  }
}

function stayWrapper(dealerSum, playerSum) {
  document.getElementById("dealerCardsInner").style.color = "white";
  document.getElementById("dealerCardsInner").style.backgroundColor = "#0d1e27";
  stay();
  var dealerSum = dealerHand.reduce(function(a, b) {
    return a + b;
  }, 0);
  var playerSum = playerHand.reduce(function(a, b) {
    return a + b;
  }, 0);

  if (dealerSum <= 16 && dealerSum < playerSum) {
    stay();
    var dealerSum = dealerHand.reduce(function(a, b) {
      return a + b;
    }, 0);
    var playerSum = playerHand.reduce(function(a, b) {
      return a + b;
    }, 0);
    if (dealerSum == 21) {
      document.getElementById("lowHand").style.display = "block";
    } else if (dealerSum > 21) {
      document.getElementById("dealerBust").style.display = "block";
    } else if (dealerSum - playerSum == 0) {
      document.getElementById("push").style.display = "block";
    } else if (dealerSum > playerSum) {
      document.getElementById("lowHand").style.display = "block";
    } else if (playerSum > dealerSum) {
      document.getElementById("highHand").style.display = "block";
    }
    updateUI();
  }

  if (dealerSum == 21) {
    document.getElementById("lowHand").style.display = "block";
  } else if (dealerSum > 21) {
    document.getElementById("dealerBust").style.display = "block";
  } else if (dealerSum - playerSum == 0) {
    document.getElementById("push").style.display = "block";
  } else if (dealerSum > playerSum) {
    document.getElementById("lowHand").style.display = "block";
  } else if (playerSum > dealerSum) {
    document.getElementById("highHand").style.display = "block";
  }
  updateUI();

  if (playerSum > dealerSum) {
    updateUI();
    document.getElementById("highHand").style.display = "block";
  }
}

function deal() {
  hitMe();
  hitMe();
  document.getElementById("hitBtn").style.display = "block";
  document.getElementById("dealBtn").style.display = "none";
  document.getElementById("dealerScoreContainer").style.display = "block";
  document.getElementById("playerScoreContainer").style.display = "block";

  var suits = ["♠", "♥", "♦", "♣"];
  let suitRand = suits[Math.floor(Math.random() * suits.length)];
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let valueRand = values[Math.floor(Math.random() * values.length)];

  var dealerCards = document.getElementById("dealerCards");
  let newDealerCard = document.createElement("div");
  newDealerCard.innerHTML = suitRand + "<br />" + valueRand;
  dealerCards.appendChild(newDealerCard);
  newDealerCard.setAttribute("id", "dealerCardsInner");

  var dealerSum = dealerHand.reduce(function(a, b) {
    return a + b;
  }, 0);

  var cardResult = parseInt(valueRand);
  if (isNaN(cardResult)) {
    switch (valueRand) {
      case "A":
        if (dealerSum > 11) {
          weight = 1;
        } else {
          weight = 11;
        }
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
  dealerHand.push(weight);
  document.getElementById("dealerCardsInner").style.color = "rgb(255, 38, 0)";
}

function restartGame() {
  playerHand = [];
  dealerHand = [];
  console.log(playerHand + dealerHand);

  document.getElementById("youWin").style.display = "none";
  document.getElementById("youLost").style.display = "none";
  document.getElementById("push").style.display = "none";
  document.getElementById("highHand").style.display = "none";
  document.getElementById("lowHand").style.display = "none";
  document.getElementById("dealerBust").style.display = "none";
  document.getElementById("blackjack").style.display = "none";

  document.getElementById("playerScore").innerHTML = "0";
  document.getElementById("dealerScore").innerHTML = "0";

  document.getElementById("playerCards").innerHTML = "";
  document.getElementById("dealerCards").innerHTML = "";

  document.getElementById("dealBtn").style.display = "block";
  document.getElementById("restartGame").style.display = "none";
}

function updateUI() {
  document.getElementById("restartGame").style.display = "block";
  document.getElementById("hitBtn").style.display = "none";
  document.getElementById("stayButton").style.display = "none";
}

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

  if (isNaN(cardResult)) {
    switch (valueRand) {
      case "A":
        var temp = prompt(
          "You pulled an Ace. Would you like to make it worth 1 or 11 points?"
        );
        if (temp == 1) {
          weight = 1;
        }
        if (temp == 11) {
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
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "Yikes, you busted. You Lose.";
    document.getElementById("youWin").style.color = "red";
    document.getElementById("restartGame").style.display = "block";
    document.getElementById("hitBtn").style.display = "none";
    document.getElementById("stayButton").style.display = "none";
  }
  if (playerSum == 21) {
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML = "You hit 21! You Win!";
    document.getElementById("youWin").style.color = "green";
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

  if (dealerSum <= 16 && dealerSum < playerSum) {
    stay();
    var dealerSum = dealerHand.reduce(function(a, b) {
      return a + b;
    }, 0);
    var playerSum = playerHand.reduce(function(a, b) {
      return a + b;
    }, 0);
    if (dealerSum == 21) {
      document.getElementById("youWin").style.display = "block";
      document.getElementById("youWin").innerHTML =
        "The Dealer hit 21" + "<br />" + "You Lost :(";
      document.getElementById("youWin").style.color = "red";
    } else if (dealerSum > 21) {
      document.getElementById("youWin").style.display = "block";
      document.getElementById("youWin").innerHTML =
        "The Dealer hit " + dealerSum + " and Bust. You Win!";
      document.getElementById("youWin").style.color = "green";
    } else if (dealerSum - playerSum == 0) {
      document.getElementById("youWin").style.display = "block";
      document.getElementById("youWin").innerHTML =
        "The Dealer hit " + dealerSum + " You Draw";
      document.getElementById("youWin").style.color = "gray";
    } else if (dealerSum > playerSum) {
      document.getElementById("youWin").style.display = "block";
      document.getElementById("youWin").innerHTML =
        "The Dealer reveals a hand of " + dealerSum + ". You Lose :(";
      document.getElementById("youWin").style.color = "red";
    } else if (playerSum > dealerSum) {
      document.getElementById("youWin").style.display = "block";
      document.getElementById("youWin").style.color = "green";
    }
    updateUI();
  }

  if (dealerSum == 21) {
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "The Dealer hit 21" + "<br />" + "You Lost :(";
    document.getElementById("youWin").style.color = "red";
  } else if (dealerSum > 21) {
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "The Dealer hit " + dealerSum + " and Bust. You Win!";
    document.getElementById("youWin").style.color = "green";
  } else if (dealerSum - playerSum == 0) {
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "The Dealer hit " + dealerSum + " You Draw";
    document.getElementById("youWin").style.color = "gray";
  } else if (dealerSum > playerSum) {
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "The Dealer reveals a hand of " + dealerSum + ". You Lose :(";
    document.getElementById("youWin").style.color = "red";
  } else if (playerSum > dealerSum) {
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").style.color = "green";
  }
  updateUI();

  if (playerSum > dealerSum) {
    updateUI();
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").innerHTML =
      "The Dealer reveals a lower hand, You Win !";
    document.getElementById("youWin").style.color = "green";
  }
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
  document.getElementById("dealerScoreContainer").style.display = "block";
  document.getElementById("playerScoreContainer").style.display = "block";

  var dealerCards = document.getElementById("dealerCards");
  let newDealerCard = document.createElement("div");
  newDealerCard.innerHTML = "";
  dealerCards.appendChild(newDealerCard);
  newDealerCard.setAttribute("id", "dealerCardsInner");
  stay();
}

function showModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

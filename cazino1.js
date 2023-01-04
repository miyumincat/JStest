//코딩챌린지 8일차 
//직접푼거 
const playbutton = document.querySelector("#playbutton");
const youwin = document.querySelector("#youwin");
const youlose = document.querySelector("#youlose");

function handlePlayButton(event) {
  event.preventDefault();

  const usernumber = document.querySelector("#guess").value;
  const usernumberInt = Number(usernumber);
  const range = document.querySelector("#max");
  const coffee = range.value;
  const rangeInt = Number(coffee);
  const randomNumber = Math.ceil(Math.random() * coffee);

  if (usernumberInt === randomNumber) {
    youwin.innerHTML = `You chose : ${usernumberInt}. the machine chose : ${randomNumber}.<br> You win!`;
    youlose.innerHTML = "";
  } else if (usernumberInt !== randomNumber) {
    youlose.innerHTML = `You chose : ${usernumberInt}. the machine chose : ${randomNumber}.<br> You lose!`;
    youwin.innerHTML = "";
  } else if (usernumberInt > rangeInt) {
    alert("Wrong number!");
  }
}

playbutton.addEventListener("submit", handlePlayButton);


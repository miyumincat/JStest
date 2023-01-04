//코딩챌린지 9일차
const remainTime = document.querySelector("#remain-time");

function Day() {
  const masTime = new Date("2027-05-09");
  const todayTime = new Date();

  const christmas = masTime - todayTime;

  const christmasDay = String(Math.floor(christmas / (1000 * 60 * 60 * 24)));
  const christmasHour = String(Math.floor((christmas / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const christmasMin = String(Math.floor((christmas / (1000 * 60)) % 60)).padStart(2, "0");
  const christmasSec = String(Math.floor((christmas / 1000) % 60)).padStart(2,"0");

  remainTime.innerText = `${christmasDay}일 ${christmasHour}사 ${christmasMin}분 ${christmasSec}초 남았습니다`;
}

Day();
setInterval(Day, 1000);

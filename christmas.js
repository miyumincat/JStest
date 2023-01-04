//코딩챌린지 9일차
const remainTime = document.querySelector("#remain-time");

function Day() {
  const masTime = new Date("2023-12-25"); //크리스마스 날짜 설정
  const todayTime = new Date(); // 오늘 날짜 

  const christmas = masTime - todayTime; //밀리세컨드 단위로 변환 및 크리스마스에서 오늘 날짜를 빼줌 


  const christmasDay = String(Math.floor(christmas / (1000 * 60 * 60 * 24))); //소수점 빼버리고싶어서 floor를 사용하고 수식을 이용해 day로 변환 
  const christmasHour = String(Math.floor((christmas / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const christmasMin = String(Math.floor((christmas / (1000 * 60)) % 60)).padStart(2, "0");
  const christmasSec = String(Math.floor((christmas / 1000) % 60)).padStart(2,"0" );

  remainTime.innerText = `${christmasDay}d ${christmasHour}h ${christmasMin}m ${christmasSec}s`;
}

Day();
setInterval(Day, 1000);
console.log(christmas);//30644130293
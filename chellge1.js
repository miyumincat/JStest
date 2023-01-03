//코딩챌린지 6일차 
import "./style.css";
const body = document.body; //몸을 불러옴 

const background1 = "background1"; //배경 
const background2 = "background2";
const background3 = "background3";

function mouse() {
  const intFrameWidth = window.innerWidth;
  if (intFrameWidth > 900) {
    body.classList.add(background1);
    body.classList.remove(background2);
  } else if (intFrameWidth <= 1200 && intFrameWidth >= 800) {
    body.classList.add(background2);
    body.classList.remove(background1, background3);
  } else {
    body.classList.add(background3);
    body.classList.remove(background2);
  }
}
window.addEventListener("resize", mouse);

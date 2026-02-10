const container = document.querySelectorAll("#container img");
const bt01 = document.querySelector(".bt01");
const bt02 = document.querySelector(".bt02");
const h3 = document.querySelector("h3");

let count = 0;

//click 버튼을 클릭했을시 - 이벤트 1개 추가
bt01.addEventListener("click", () => {
  //이미지 3개가 바뀌네? -> <img src="이미지파일">
  const img = ["img/spy1.jpg", "img/spy2.jpg", "img/spy3.jpg"];
  //setAttribute("src", "이미지파일경로") -> 랜덤
  const random = Math.floor(Math.random() * 3); // 0-2
  const random2 = Math.floor(Math.random() * 3);
  const random3 = Math.floor(Math.random() * 3);
  // 랜덤 3개 필요!
  console.log(img[2]);
  // 반복문 - for문 추천
  for (let i = 0; i < container.length; i++) {
    container[0].setAttribute("src", img[random]);
    container[1].setAttribute("src", img[random2]);
    container[2].setAttribute("src", img[random3]);
  }

  //click 버튼을 눌렀을 때 숫자가 증가하네?3
  //변수를 하나 지정하고 숫자 하나씩 증가 ++연산자 사용
  ++count;
  bt01.textContent = `Click${count}`;

  //문구가 추가되네? 축하합니다! 다시 시작하려면 재시작 버튼을 눌러주세요!
  //태그 내에 텍스트 추가! textContent
  // 조건 - if!
  if (random === random2 && random2 === random3) {
    h3.textContent = "축하합니다! 다시 시작하려면 재시작 버튼을 눌러주세요!";
  }
});

//Restart 버튼을 클릭했을시 - 이벤트 1개 추가
//다시 이미지 처음 상태로 돌아감
//새로고침하면 어차피 다 리셋되니까 location.reload()
bt02.addEventListener("click", () => {
  location.reload();
});
//or
//이미지 3개를 원상복귀
//cilck 버튼에 있는 숫자 초기화 하고 안보이기
//문구 다시 삭제

// 사용할 이미지 목록

// 승리 조건 확인

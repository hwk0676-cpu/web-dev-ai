//1번 : const rsp = Math.floor(Math.random() * 3) + 1;
//2번 : const rsp = Math.floor(Math.random() * 3);
//1번은 1이상 3이하 라는 뜻
//2번은 0이상 3미만 이라는 뜻
//이유는 뒤에 +1이 붙으니까 0에서+1이 되는거고 3+1이 되니까 1이상이고 4미만이 되는거라서 1이상 3이하인거다.
//뒤에 만약에 +2가 붙으면 2이상이고 4이하가 되는것
//때문에 밑에 숫자를 가위 바위 보로 바꾸려면 내가 쓴 랜덤은 * 3만 있으니까 0 1 2가 나오는거고 만약에 뒤에 +1을 쓰면 1 2 3으로 해야한다.
while (true) {
  const rsp = Math.floor(Math.random() * 3);
  const my = prompt("가위, 바위, 보 중에서 하나를 선택하시오.");

  let you; //숫자를 문자로 바꾸는 값을 담아두는 변수

  // = : 은 값을 넣는 것
  // ==/===은 값을 비교하는 것
  // 계속 패배만 나온 이유가 if (rsp === 0) you === "가위"; ===으로 썼으니까 비교만하고 you에 문자 값을 저장하지 못해서

  //한줄 일땐 {} 생략 가능
  //; 기준으로 줄이 나뉨
  if (rsp === 0) {
    you = "가위";
    console.log(rsp, you);
  }
  //rsp가 0일 때 you는 가위이다 라는 뜻

  if (rsp === 1) {
    you = "바위";
    console.log(rsp, you);
  }
  //rsp가 1일 때 you는 바위이다 라는 뜻

  if (rsp === 2) {
    you = "보";
    console.log(rsp, you);
  }
  //rsp가 2일 때 you는 보이다 라는 뜻

  if (my === you) {
    alert("무승부");
  } else if (my === "가위" && you === "보") {
    alert("승리");
  } else if (my === "바위" && you === "가위") {
    alert("승리");
  } else if (my === "보" && you === "바위") {
    alert("승리");
  } else {
    alert("패배");
  }

  if (my === null) {
    console.log(you);
    break;
  }

  if (my === you) {
    console.log("무승부");
  } else if (my === "가위" && you === "보") {
    console.log("승리");
  } else if (my === "바위" && you === "가위") {
    console.log("승리");
  } else if (my === "보" && you === "바위") {
    console.log("승리");
  } else {
    console.log("패배");
  }
}

// if (my === end) {
//     console.log(`결과 ${}`)
// }

//취소버튼을 누를시 게임 종료
//null, break

//왜 가위만 나올까?

const rps = ["가위", "바위", "보"];

const player = {
  choice: "",
  setChoice() {
    this.choice = prompt("가위, 바위, 보 중 하나를 입력하시오.");
  },
  getChoice() {
    return this.choice;
  },
};

const computer = {
  choice: 0,
  setChoice() {
    this.choice = Math.floor(Math.random() * 3);
  },

  getChoice() {
    return this.choice;
  },
};

const game = {
  win: 0,
  lose: 0,
  draw: 0,
  computer: 0,
  player: "",
  play() {
    while (true) {
      computer.setChoice(); //랜덤값 하나
      this.computer = computer.getChoice();

      player.setChoice();
      this.player = player.getChoice();

      if (this.player === null) {
        alert(`게임 종료 ${this.win}승 / ${this.lose}패 / ${this.draw}무}`);
        break;
      }

      if (
        !(
          this.player === "가위" ||
          this.player === "바위" ||
          this.player === "보"
        )
      ) {
        alert("가위, 바위, 보 중에서만 입력해주세요");
        continue;
      }

      this.player = rps.indexOf(this.player);
      console.log(this.player);

      //무승부
      if (this.computer === this.player) {
        alert("무승부");
        this.draw++;
      } else if (
        //이겼을 때 : 가위(0) > 보(2), 바위(1) > 가위(0), 보(2) > 바위(1)
        (this.player === 0 && this.computer === 2) ||
        (this.player === 1 && this.computer === 0) ||
        (this.player === 2 && this.computer === 1)
      ) {
        alert(
          `이겼다 내가 낸 건 ${rps[this.player]}, 컴퓨터가 낸건 ${rps[this.computer]}`,
        );
        this.win++;
      } else {
        //졌을 때
        alert("졌다");
        this.lose++;
      }
    }
  },
};
game.play();

let rotto = [];

while (true) {
  const rotto0 = Math.floor(Math.random() * 45) + 1;
  const rotto1 = Math.floor(Math.random() * 45) + 1;
  const rotto2 = Math.floor(Math.random() * 45) + 1;
  const rotto3 = Math.floor(Math.random() * 45) + 1;
  const rotto4 = Math.floor(Math.random() * 45) + 1;
  const rotto5 = Math.floor(Math.random() * 45) + 1;
  const bonus = Math.floor(Math.random() * 45) + 1;

  console.log(rotto0, rotto1, rotto2, rotto3, rotto4, rotto5, bonus);

  const num = prompt("1 ~ 45 숫자를 중복 없이 6개 입력하세요");

  if (num === rotto0 && rotto1 && rotto2 && rotto3 && rotto4 && rotto5) {
    console.log(
      `1등 당첨!! - 당첨 번호${(rotto0, rotto1, rotto2, rotto3, rotto4, rotto5, bonus)} 입력 번호${num} `,
    );
  } else if (num === rotto0 && rotto1 && rotto2 && rotto3 && rotto4 && bonus) {
    console.log(
      `2등 당첨!! - 당첨 번호${(rotto0, rotto1, rotto2, rotto3, rotto4, rotto5, bonus)} 입력 번호${num} `,
    );
  } else if (num === rotto0 && rotto1 && rotto2 && rotto3 && rotto4) {
    console.log(
      `3등 당첨!! - 당첨 번호${(rotto0, rotto1, rotto2, rotto3, rotto4, rotto5, bonus)} 입력 번호${num} `,
    );
  } else if (num === rotto0 && rotto1 && rotto2 && rotto3) {
    console.log(
      `4등 당첨!! - 당첨 번호${(rotto0, rotto1, rotto2, rotto3, rotto4, rotto5, bonus)} 입력 번호${num} `,
    );
  } else if (num === rotto0 && rotto1 && rotto2) {
    console.log(
      `5등 당첨!! - 당첨 번호${(rotto0, rotto1, rotto2, rotto3, rotto4, rotto5, bonus)} 입력 번호${num} `,
    );
  } else {
    console.log("꽝");
  }
}

// 7 숫자가 따로 나오는게 아니니까 배열을 쓰면 좋을거 같은데 문제점은 배열을 어떻게 쓸지 모르겠다;; 배열이면 예를 들면 rotto = [1, 2, 3, 4, 5, 6, 7] 이런식일텐데
// 여기 안에 있는 숫자를 랜덤으로 중복없이 어떻게 해야할까
// 중복이 어떻게 숫자 6개+1을 랜덤으로 나오게 할지 모르겠음 - 랜덤을 7개 써서 돌리는건 일단 아닌거 같음..
// 당첨도 if랑 else if를 써서 당첨인지 아닌지를 판단하는건 맞는거 같은데 내가 쓴 방식대로 쓰면 꽝만 나오고 + 내가 쓴 방식은 틀렸다는걸 알지만 어떻게 바꿔야 할지를 모르겠음...

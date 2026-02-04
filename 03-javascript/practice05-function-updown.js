const numbers = Math.floor(Math.random() * 100) + 1;

while (true) {
  let num = prompt("1부터 100 사이의  숫자를 입력하세요");

  if (isNaN(num)) {
    alert("제대로 입력해주세요");
    continue;
  }

  if (num === numbers) {
    alert("정답입니다");
  } else if (num > numbers) {
    alert("해당 숫자보다 작습니다");
  } else {
    alert("해당 숫자보다 큽니다");
  }
}

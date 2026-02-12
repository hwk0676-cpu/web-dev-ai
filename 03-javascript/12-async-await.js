document.querySelector("#callback").addEventListener("click")(() => {
  const result = document.querySelector("#callResult");
  result.textContent = " 콜백 시작";

  setTimeout(() => {
    result.textContent = "1초 후 실행";

    setTimeout(() => {
      result.textContent = "2초 후 실행";
    }, 1000);
  }, 1000);
});
document.querySelector("#promise").addEventListener("click")(() => {
  const result = document.querySelector("#promiseResult");
  //resolve : 성공, reject : 실패
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("1초 후 실행"), 1000);
  })
    .then((data) => {
      result.textContent = data;
      return new Promise((resolve) =>
        setTimeout(() => resolve("2초 후 실행"), 1000),
      );
    })
    .then((data) => {
      //resolve로 보낸 값 받는 곳
      result.textContent = data;
    });
});

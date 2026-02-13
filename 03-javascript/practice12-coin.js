const coin = document.querySelector("#coin");

const fetchApi = async () => {
  //await 같은 경우는 asyne이 없으면 사용할 수 없음 무조건에 함수로 감싸서 사용해야 함
  const response = await fetch(
    `https://api.upbit.com/v1/market/all?quote_currencies=KRW`,
  );
  //PromiseState :
  // pending(대기) = 앞자리 4 또는 5인 경우
  // fulfilled(성공) = 앞자리가 2인 경우
  // rejected(실패) = 앞자리 4 또는 5인 경우
  const data = await response.json();
  //map = 전체를 다
  const markets = data.map((value) => {
    return value.market;
  });
  //배열을 문자열로 바꾸는 함수 .join
  const response2 = await fetch(
    `https://api.upbit.com/v1/ticker?markets=${markets.join(",")}`,
  );
  const data2 = await response2.json();
  console.log(data);
  console.log(data2);

  //find 함수
  const resultData = data.map((value) => {
    const result = data2.find((item) => value.market === item.market);
    return { ...value, ...result };
  });
  console.log(resultData);

  //화면에 그려내는 코드

  /*for (let i = 0; i < data.length; i++){
        console.log(data[i].korean_name);
    }*/

  /*for (let i in data) {
        console.log(data[i].korean_name);  
    }*/

  /*for (let value of data) {
       console.log(value.korean_name);
    }*/

  resultData.forEach((value) => {
    //console.log(value.maket);
    //console.log(value.korean_name);
    // += : 반복문안에 있어도 만약 = 이면 마지막꺼 하나만 나오기 때문에 +=을 해서 계속 돌아갈 수 있도록 해야함. 반복문 안에 있다고 헷갈리지 말기
    coin.innerHTML += `
    <div class="card">
    <h2>${value.korean_name}</h2>
    <p>${value.trade_price.toFixed(8)}원</p>
    <p>전일대비 : 
    <span style="color: ${
      value.change === "EVEN"
        ? "gray"
        : value.change === "RISE"
          ? "green"
          : "red"
    }">${
      value.change === "EVEN"
        ? "보합"
        : value.change === "RISE"
          ? "상승"
          : "하락"
    } (${(value.change_rate * 100).toFixed(2)}%</span>)</p>
    </div>`;
  });
  //객체에 있는 정보들은 .객체명 으로 확인 할 수 있다.
};
//status(상태) : 보통 2로 시작하면 성공, 4로 시작하면 실패(ex)404 error)
fetchApi(); //함수 호출 : 함수명();

// coin.textContent = "<p>테스트<p>";

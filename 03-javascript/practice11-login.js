const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const bt01 = document.querySelector("#bt01");
const error = document.querySelector("#error");

let idValue = false;
let pwValue = false;

id.addEventListener("input", () => {
  //   const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  if (regExp.test(id.value)) {
    id.style.color = "green";
    idValue = true;
  } else {
    id.style.color = "red";
    idValue = false;
  }
});

pw.addEventListener("input", () => {
  //   const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])[!-~]{8,15}$/;
  if (regExp.test(pw.value)) {
    pw.style.color = "green";
    pwValue = true;
  } else {
    pw.style.color = "red";
    pwValue = false;
  }
});

bt01.addEventListener("click", () => {
  // localStorage 저장한 값을 가져오기
  //회원가입 했을 때 localStorage에 저장 -> localSrirage에서 가져오기(객체로)
  //   const userId = localStorage.getItem("id");
  //   const userpw = localStorage.getItem("pwd");
  //   const userName = localStorage.getItem("uName");
  //   const userEmail = localStorage.getItem("email");
  //   const userPhone = localStorage.getItem("phone");

  const user = JSON.parse(localStorage.getItem("user"));

  // 해당 값이랑 지금 사용자한테 입력한 값이 맞다면
  //   (id.value === userId && userpw === pw.value)
  if (user === null) {
    error.textContent = "회원 정보가 없습니다. 회원가입 해주세요";
  } else if (id.value === user.id && pw.value === user.pwd) {
    alert("로그인 완료");
    //로그인 성공 후 localStorage에 담기 (로그인 정보) -> 자동 로그인
    localStorage.setItem("login", JSON.stringify(user));
    const name = "";
    document.body.innerHTML = `<div class="box02">
        <h2>${user.uName}님 환영합니다!</h2>
        <div class="box03">
            <p class="p02"><span>이메일</span><span>${user.email}</span></p>
            <p class="p03"><span>전화번호</span><span>${user.phone}</span></p>
        </div>
        <div class="box04">
          <button id="bt03">로그아웃</button>
          <button id="bt04">회원탈퇴</button>
        </div>
      </div>`;
    const bt03 = document.querySelector("#bt03");
    const bt04 = document.querySelector("#bt04");

    bt03.addEventListener("click", () => {
      location.reload();
      localStorage.removeItem("login");
    });

    bt04.addEventListener("click", () => {
      location.reload();
      localStorage.removeItem("user");
      localStorage.removeItem("login");
      location.href = "practice10.html";
    });
  } else {
    error.textContent = " 아이디 또는 비밀번호가 일치하지 않습니다.";
  }
});

//로그인 정보가 계속 날아가요 -> 즉, js에서 처음부터 로그인 정보가 있는지 확인
const info = JSON.parse(localStorage.getItem("login"));
if (info !== null) {
  //로그인 정보O
  document.body.innerHTML = `<div class="box02">
        <h2>${info.uName}님 환영합니다!</h2>
        <div class="box03">
            <p class="p02"><span>이메일</span><span>${info.email}</span></p>
            <p class="p03"><span>전화번호</span><span>${info.phone}</span></p>
        </div>
        <div class="box04">
          <button id="bt03">로그아웃</button>
          <button id="bt04">회원탈퇴</button>
        </div>
      </div>`;
}

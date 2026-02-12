//input을 쿼리셀렉터로 가져와야함(6개인데 all로 가져와야 하나(?))
// const input = document.querySelectorAll("input");
// const bt = document.querySelectorAll("button");
const id = document.querySelector("#id");
const idCheck = document.querySelector("#idCheck");
const pwd = document.querySelector("#pwd");
const pwdCheck = document.querySelector("#pwdCheck");
const pwdDouble = document.querySelector("#pwdDouble");
const pwdDoubleCheck = document.querySelector("#pwdDoubleCheck");
const uName = document.querySelector("#uName");
const uNameCheck = document.querySelector("#uNameCheck");
const email = document.querySelector("#email");
const emailCheck = document.querySelector("#emailCheck");
const phone = document.querySelector("#phone");
const phoneCheck = document.querySelector("#phoneCheck");

const bt01 = document.querySelector("#bt01");
const bt02 = document.querySelector("#bt02");

//아이디, 비밀번호, 이메일 등의 값을 담아둘 선언문이 필요함
// let id = ;
// let pw = ;
// let pwCheck = ;
// let name = ;
// let mail = ;
// let number = ;

// const inputCheck = (input, regExp, inputCheck, message) => {};
// //input에 대한 이벤트가 필요함
// id.addEventListener("input", () => {
//   //영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내
//   const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
//   if (regExp.test(input.value)) {
//     //정규표현식대로 입력했을 경우 - true
//     inputCheck.textContent = "사용 가능한 아이디입니다.";
//     inputCheck.style.color = "green";
//   } else if (input.value === "") {
//     inputCheck.textContent =
//       "영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내";
//     inputCheck.style.color = "gray";
//   } else {
//     inputCheck.textContent = "아이디를 제대로 입력해주세요";
//     inputCheck.style.color = "red";
//   }
// });
let idValue = false;

//input에 대한 이벤트가 필요함
id.addEventListener("input", () => {
  //영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  if (regExp.test(id.value)) {
    //정규표현식대로 입력했을 경우 - true
    idCheck.textContent = "사용 가능한 아이디입니다.";
    idCheck.style.color = "green";
    idValue = true;
  } else if (id.value === "") {
    idCheck.textContent =
      "영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내";
    idValue = false;
    idCheck.style.color = "gray";
  } else {
    idCheck.textContent = "아이디를 제대로 입력해주세요";
    idCheck.style.color = "red";
    idValue = false;
  }
});

let pwdValue = false;

pwd.addEventListener("input", () => {
  //영문자, 숫자, 특수문자 조합으로 8~15자 이내
  //!-~ = 유니코드 33번 부터 126번까지 다 포함
  //const regExp = /^[!-~]{8,15}$/;
  const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])[!-~]{8,15}$/;
  if (regExp.test(pwd.value)) {
    //정규표현식대로 입력했을 경우 - true
    pwdCheck.textContent = "사용 가능한 비밀번호입니다.";
    pwdCheck.style.color = "green";
    pwdValue = true;
  } else if (pwd.value === "") {
    pwdCheck.textContent = "영문자, 숫자, 특수문자 조합으로 8~15자 이내";
    pwdCheck.style.color = "gray";
    pwdValue = false;
  } else {
    pwdCheck.textContent = "비밀번호를 제대로 입력해주세요";
    pwdCheck.style.color = "red";
    pwdValue = false;
  }
});

let pwdDoubleValue = false;

pwdDouble.addEventListener("input", () => {
  const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])[!-~]{8,15}$/;
  /*pwdDouble.value === pwd.value : pwdDouble와 pwd에 값을 .value로 비교해야함 만약 pwdDouble === pwd 이렇게 쓰면 이건 값을 비교할 수 없기 때문에 조건문이 성립되지 않음.(오류는 안나지만 상호작용이 안 일어남)*/
  if (pwdDouble.value === pwd.value) {
    //정규표현식대로 입력했을 경우 - true
    pwdDoubleCheck.textContent = "사용 가능한 비밀번호입니다.";
    pwdDoubleCheck.style.color = "green";
    pwdDoubleValue = true;
  } else if (pwdDouble.value === "") {
    pwdDoubleCheck.textContent = "위 비밀번호와 동일하게";
    pwdDoubleCheck.style.color = "gray";
    pwdDoubleValue = false;
  } else {
    pwdDoubleCheck.textContent = "비밀번호를 동일하게 입력해주세요";
    pwdDoubleCheck.style.color = "red";
    pwdDoubleValue = false;
  }
});

let uNameValue = false;

uName.addEventListener("input", () => {
  //한글 2자 이상
  //{2, } = 두 글자 이상이라는 뜻
  //{ ,10} = 열 글자 이하라는 뜻
  const regExp = /^[가-힣]{2,}$/;
  if (regExp.test(uName.value)) {
    //정규표현식대로 입력했을 경우 - true
    uNameCheck.textContent = "사용 가능한 이름입니다";
    uNameCheck.style.color = "green";
    uNameValue = true;
  } else if (uName.value === "") {
    uNameCheck.textContent = "한글 2자 이상";
    uNameCheck.style.color = "gray";
    uNameValue = false;
  } else {
    uNameCheck.textContent = "이름을 제대로 입력해주세요";
    uNameCheck.style.color = "red";
    uNameValue = false;
  }
});

let emailValue = false;

email.addEventListener("input", () => {
  //이메일 형식
  //.은 정규표현식에서 사용하는 문자 즉 메타문자이기 때문에 .을 인지시키려면 앞에 역슬래시(\)를 써줘야함
  const regExp = /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  if (regExp.test(email.value)) {
    //정규표현식대로 입력했을 경우 - true
    emailCheck.textContent = "사용 가능한 이메일입니다";
    emailCheck.style.color = "green";
    emailValue = true;
  } else if (email.value === "") {
    emailCheck.textContent = "이메일 형식";
    emailCheck.style.color = "gray";
    emailValue = false;
  } else {
    emailCheck.textContent = "이메일을 제대로 입력해주세요";
    emailCheck.style.color = "red";
    emailValue = false;
  }
});

let phoneValue = false;

phone.addEventListener("input", () => {
  //전화번호 형식 : 010-0000-0000
  const regExp = /^010-[0-9]{4}-[0-9]{4}$/;
  if (regExp.test(phone.value)) {
    //정규표현식대로 입력했을 경우 - true
    phoneCheck.textContent = "사용 가능한 전화번호입니다";
    phoneCheck.style.color = "green";
    phoneValue = true;
  } else if (phone.value === "") {
    phoneCheck.textContent = "010-0000-0000 형식";
    phoneCheck.style.color = "gray";
    phoneValue = false;
  } else {
    phoneCheck.textContent = "010-0000-0000형식으로 제대로 입력해주세요";
    phoneCheck.style.color = "red";
    phoneValue = false;
  }
});

// const pwdDoubleValue = regExp.test(pwdDouble.value);
// const uNameValue = regExp.test(uName.value);
// const emailValue = regExp.test(email.value);
// const phoneValue = regExp.test(phone.value);

bt01.addEventListener("click", () => {
  //확인 버튼 눌렀을 때 상호작용
  if (
    idValue &&
    pwdValue &&
    pwdDoubleValue &&
    uNameValue &&
    emailValue &&
    phoneValue
  ) {
    alert("회원가입 완료!");
    // localStorage 저장
    // localStorage.setItem("id", id.value);
    // localStorage.setItem("pwd", pwd.value);
    // localStorage.setItem("uName", uName.value);
    // localStorage.setItem("email", email.value);
    // localStorage.setItem("phone", phone.value);

    const user = {
      id: id.value,
      pwd: pwd.value,
      uName: uName.value,
      email: email.value,
      phone: phone.value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("회원가입 완료, 로그인 페이지로 이동하겠습니다");
    location.href = "practice11-login.html";
  } else {
    alert("다시 입력해주세요");
  }
});
bt02.addEventListener("click", () => {
  //취소 버튼 눌렀을 때 상호작용
  location.reload();
  localStorage.clear();
});

// /^[a-zA-Z0-9]{4,12}$/

// /^[!-~]{8,15}$/

//위 비밀번호와 동일하게
//if를 써야하나(?) 동일하면 true 다르면 false

// /[가-힣]{2,}/

// /^[a-zA-Z0-9]@.com$)/

// /^\d{3}-{4}-{4}$/

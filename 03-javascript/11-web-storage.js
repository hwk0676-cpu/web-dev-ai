const setSession = document.querySelector("#setSession");
setSession.addEventListener("click", () => {
  //세션에 저장
  sessionStorage.setItem("session", "세션");
  sessionStorage.setItem("session2", "세션2");
});
const getSession = document.querySelector("#getSession");
getSession.addEventListener("click", () => {
  //세션에서 가져오기
  const session = sessionStorage.getItem("session");
  alert(session);
});
const removeSession = document.querySelector("#removeSession");
removeSession.addEventListener("click", () => {
  //세션에서 삭제
  sessionStorage.removeItem("session");
});
const clearSession = document.querySelector("#clearSession");
clearSession.addEventListener("click", () => {
  //세션에서 모두 삭제
  sessionStorage.clear();
});

const setLocal = document.querySelector("#setLocal");
setLocal.addEventListener("click", () => {
  //로컬에 저장 & 수정 -> 값은 무조건 문자열 (보통 JSON 객체로 넣는 편)
  //객체 자체를 직접 넣으면 안들어가져요! -> 객체 -> 문자열로 변경해서 추가
  localStorage.setItem("local", "로컬");
  localStorage.setItem("user", JSON.stringify({ name: "사용자", age: 5 }));
});
const getLocal = document.querySelector("#getLocal");
getLocal.addEventListener("click", () => {
  //로컬에서 가져오기
  const user = localStorage.getItem("user");
  //문자열로 저장한 객체를 다시 객체로
  console.log(JSON.parse(user));
});
const removeLocal = document.querySelector("#removeLocal");
removeLocal.addEventListener("click", () => {
  //로컬에서 삭제
  localStorage.removeItem("user");
});
const clearLocal = document.querySelector("#clearLocal");
clearLocal.addEventListener("click", () => {
  //로컬에서 모두 삭제
  localStorage.clear();
});

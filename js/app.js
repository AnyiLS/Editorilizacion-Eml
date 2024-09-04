const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("isLogin");
  if(myParam  === 'true') {
    container.classList.remove("sign-up-mode");
  }
  
});

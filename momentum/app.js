// if i chose queryselector then (#login-form)
// const loginForm = document.getElementById("login-form");
const loginForm= document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// uppercase variable name only when saving string
const HIDDEN_CLASSNAME = "hidden";

function onLoginBtnClick(event){
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
const username = loginInput.value;
// greeting.innerText="Hello" + " " + username;
greeting.innerText="hello" + username;
greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginBtnClick);
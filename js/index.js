// ===== SELCTOR SING IN
var EmailSingIn = document.getElementById("EmailSingIn");
var passSingIn = document.getElementById("passSingIn");
var btnSingIN = document.getElementById("btnSingIn");
var goSingUp = document.getElementById("goSingUp");
var alertLog = document.querySelector("#alertLogin");
var alertEmpty = document.querySelector("#alertEmpty");
var allusers = [];

if (localStorage.getItem("user") != null) {
  allusers = JSON.parse(localStorage.getItem("user"));
}

console.log(allusers);


// === btn sing in
btnSingIN.addEventListener("click", function () {
  login();
});

function login() {

  if (inputEmptyOrNot() != true) {
    if (chickEmailfounOrNot() == true) {
      window.location.href = "home.html"
      console.log("found");
    }
    else {
      alertLog.classList.remove("d-none")
      alertEmpty.classList.add("d-none")

    }
  } else {
    alertEmpty.classList.remove("d-none")
  }
}

function inputEmptyOrNot() {
  if (EmailSingIn.value == "" || passSingIn.value == "") {
    return true
  } else {
    return false
  }
}
// chick Email found Or Not
function chickEmailfounOrNot() {
  for (var i = 0; i < allusers.length; i++) {
    if
      (passSingIn.value == allusers[i].userPass && EmailSingIn.value == allusers[i].userEmail) {
      localStorage.setItem("userlog", allusers[i].userName)

      return true
    }

    else {
      return false
    }
  }
}

// ==== swetch page
goSingUp.addEventListener("click", function () {
  window.location.href = "./signUp.html";
});

// === clear inputs
function ClearInpust() {
  EmailSingIn.value = null;
  passSingIn.value = null;
}

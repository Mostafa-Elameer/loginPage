// ===== SELCTOR SING UP
var gosignIn = document.querySelector("#goSignIn");
var nameSingUp = document.getElementById("nameSingUp");
var EmailSingUp = document.getElementById("emailSingUp");
var passSingUp = document.getElementById("passSingUp");
var bntSingUp = document.getElementById("btnSingUp");
var alertdataRequird = document.querySelector("#alertdataRequird");
var alertdatasuccsses = document.querySelector("#alertdatasuccsses");
var alertdatauserFound = document.querySelector("#alertdatauserFound")
var allusers = [];
var data;

if (localStorage.getItem("user") != null) {
  allusers = JSON.parse(localStorage.getItem("user"));
}

// == btn sing up
bntSingUp.addEventListener("click", function () {
  registr();
});

function registr() {
  if (chickInputsEmptyOrNot() != true) {
    user = {
      userName: nameSingUp.value,
      userEmail: EmailSingUp.value,
      userPass: passSingUp.value,
    };

    if (chickUserFoundOrNot() == true) {
      console.log("i found");
      alertdatauserFound.classList.remove("d-none")
      alertdatasuccsses.classList.add("d-none")

    } else {
      allusers.push(user);
      alertdatasuccsses.classList.remove("d-none")
      clearInputs()
      localStorage.setItem("user", JSON.stringify(allusers));
      alertdatauserFound.classList.add("d-none")
    }

  }
}

// clear inputs 

function clearInputs() {
  nameSingUp.value = null
  EmailSingUp.value = null
  passSingUp.value = null
}



// Chick I Empty Or Not
function chickInputsEmptyOrNot() {
  if (
    nameSingUp.value == "" ||
    EmailSingUp.value == "" ||
    passSingUp.value == ""
  ) {
    alertdataRequird.classList.remove("d-none");
    alertdatasuccsses.classList.add("d-none")
    return true;

  } else {
    alertdataRequird.classList.add("d-none");
    return false;
  }
}

// chick User Registered or not 
function chickUserFoundOrNot() {
  for (let i = 0; i < allusers.length; i++) {
    if (allusers[i].userEmail == EmailSingUp.value) {
      return true
    }
  }
}



// === VALIDTION
function validInputs(elimint) {
  data = elimint;
  var regex = {
    nameSingUp: /^([a-z]|[A-Z]| ){3,15}$/,
    emailSingUp: /^\w{5,15}@[a-z]{4,10}\.[a-z]{3,10}$/,
    passSingUp: /^\w{4,10}$/,
  };

  if (regex[elimint.id].test(elimint.value)) {
    console.log("match");
    elimint.classList.add("is-valid");
    elimint.classList.remove("is-invalid");
    return true;
  } else {
    console.log("no");
    elimint.classList.add("is-invalid");
    elimint.classList.remove("is-valid");
    return false;

  }
}

// === go sign in
gosignIn.addEventListener("click", function () {
  window.location = "/index.html";
});

// === selctor
var btnLogOut = document.querySelector("#btnLogOut");
var welcome = document.querySelector("#welcome");


if (localStorage.getItem("userlog") != null) {
  welcome.innerHTML = `welcome : ${localStorage.getItem("userlog")}`;
}

// // ===
btnLogOut.addEventListener("click", function () {
  window.location = "/index.html";
  localStorage.removeItem("userlog")
});

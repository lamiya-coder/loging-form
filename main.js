const demouserName = "lamiya";
const demopassword = "987456@#";

const logingSection = document.getElementById("loging-section");
const errormsg = document.getElementById("errormsg");
const dashbordSection = document.getElementById("dashboard-section");
const userNameinput = document.getElementById("user-name");
const userpasswordinput = document.getElementById("user-password");
const logingbtn = document.getElementById("logingBtn");

logingbtn.addEventListener("click", function () {
  const username = userNameinput.value.trim();
  const password = userpasswordinput.value.trim();

  if (username === demouserName && password === demopassword) {
    localStorage.setItem("loggedinuser", username);
    errormsg.classList.add("hidden");
  } else {
    errormsg.classList.remove("hidden");
  }
});

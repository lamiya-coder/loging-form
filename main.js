const demouserName = "lamiya";
const demopassword = "987456@#";

const logingSection = document.getElementById("loging-section");
const errormsg = document.getElementById("errormsg");
const dashbordSection = document.getElementById("dashboard-section");
const welcomeText = document.getElementById("welcome-text");
const userNameinput = document.getElementById("user-name");
const userpasswordinput = document.getElementById("user-password");
const logingbtn = document.getElementById("logingBtn");
const logoutbtn = document.getElementById("logoutBtn");

const savedUser = localStorage.getItem("loggedinuser");

logingbtn.addEventListener("click", function () {
  const username = userNameinput.value.trim();
  const password = userpasswordinput.value.trim();

  if (username === demouserName && password === demopassword) {
    localStorage.setItem("loggedinuser", username);
    errormsg.classList.add("hidden");
    showDashbord(username);
  } else {
    errormsg.classList.remove("hidden");
  }
});
function showDashbord(username) {
  logingSection.classList.add("hidden");
  dashbordSection.classList.remove("hidden");
  welcomeText.innerText = "Welcome Mr. " + username;
}

logoutbtn.addEventListener("click", () => {
  localStorage.removeItem("loggedinuser");
  dashbordSection.classList.add("hidden");
  logingSection.classList.remove("hidden");
  userNameinput.value = "";
  userpasswordinput.value = "";
});

if (savedUser) {
  showDashbord(savedUser);
}

const themeBtn = document.getElementById("theme-Btn");

themeBtn.addEventListener("click", () => {
  document.body.classlist.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setiten("theme", "dark");
  } else {
    localStorage.setItem("theme", "liunt");
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

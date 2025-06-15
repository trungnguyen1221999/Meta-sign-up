//Password
const passwordInput = document.querySelector(".password__input");
const passwordEyeIcon = document.querySelector(".password__eye");
//Birthday
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");
const yearSelect = document.getElementById("year");
const birthdayInput = document.querySelectorAll(".b__p");

//Password eye hide/show functionality
document.addEventListener("DOMContentLoaded", () => {
  if (passwordInput.value === "") {
    passwordEyeIcon.style.display = "none";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value === "") {
    passwordEyeIcon.style.display = "none";
  } else {
    passwordEyeIcon.style.display = "block";
  }
});

passwordEyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEyeIcon.src = "./eye-slash-solid.svg";
  } else {
    passwordInput.type = "password";
    passwordEyeIcon.src = "./eye-solid.svg";
  }
});

//Birthday select options
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);
for (let month of months) {
  const option = document.createElement("option");
  option.textContent = month;
  option.value = month;
  option.classList.add("month__option");
  monthSelect.appendChild(option);
}

for (let year of years) {
  const option = document.createElement("option");
  option.textContent = year;
  option.value = year;
  yearSelect.appendChild(option);
}

for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.textContent = i;
  option.value = i;
  option.classList.add("day__option");
  daySelect.appendChild(option);
}

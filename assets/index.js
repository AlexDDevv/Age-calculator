const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const arrow = document.getElementById("arrowAge");

/***** FONCTION VALIDATION *****/

const displayErrorDay = (valid) => {
  const labelDay = document.querySelector(".label-day");

  if (!valid) {
    inputDay.style.border = "1px solid hsl(0, 100%, 67%)";
    errorDay.style.opacity = 1;
    labelDay.style.color = "hsl(0, 100%, 67%)";
  } else {
    inputDay.style.border = "1px solid hsl(259, 100%, 65%)";
    errorDay.style.opacity = 0;
    labelDay.style.color = "hsl(0, 1%, 44%)";
  }
};
const displayErrorMonth = (valid) => {
  const labelMonth = document.querySelector(".label-month");

  if (!valid) {
    inputMonth.style.border = "1px solid hsl(0, 100%, 67%)";
    errorMonth.style.opacity = 1;
    labelMonth.style.color = "hsl(0, 100%, 67%)";
  } else {
    inputMonth.style.border = "1px solid hsl(259, 100%, 65%)";
    errorMonth.style.opacity = 0;
    labelMonth.style.color = "hsl(0, 1%, 44%)";
  }
};
const displayErrorYear = (valid) => {
  const labelYear = document.querySelector(".label-year");

  if (!valid) {
    inputYear.style.border = "1px solid hsl(0, 100%, 67%)";
    errorYear.style.opacity = 1;
    labelYear.style.color = "hsl(0, 100%, 67%)";
  } else {
    inputYear.style.border = "1px solid hsl(259, 100%, 65%)";
    errorYear.style.opacity = 0;
    labelYear.style.color = "hsl(0, 1%, 44%)";
  }
};

/***** FONCTION VALIDATION *****/

inputDay.addEventListener("input", () => {
  const dayValue = document.getElementById("forDay");

  if (inputDay.value.length == 0) {
    displayErrorDay();
    errorDay.textContent = "This field is required";
  } else if (!inputDay.value.match(/^[0-9]+$/) || inputDay.value > 31) {
    displayErrorDay();
    errorDay.textContent = "Must be a valid day";
  } else {
    displayErrorDay(true);
  }
});

inputMonth.addEventListener("input", () => {
  const monthValue = document.getElementById("forMonth");

  if (inputMonth.value.length == 0) {
    displayErrorMonth();
    errorMonth.textContent = "This field is required";
  } else if (
    inputMonth.value < 1 ||
    inputMonth.value > 12 ||
    !inputMonth.value.match(/^[0-9]+$/)
  ) {
    displayErrorMonth();
    errorMonth.textContent = "Must be a valid month";
  } else {
    displayErrorMonth(true);
  }
});

inputYear.addEventListener("input", () => {
  const yearValue = document.getElementById("forYear");

  if (inputYear.value.length == 0) {
    displayErrorYear();
    errorYear.textContent = "This field is required";
  } else if (!inputYear.value.match(/^[0-9]+$/)) {
    displayErrorYear();
    errorYear.textContent = "Must be a valid year";
  } else if (inputYear.value > 2023) {
    displayErrorYear();
    errorYear.textContent = "Must be in the past";
  } else {
    displayErrorYear(true);
  }
});

/****** FONCTION CALCULER AGE *****/

function calculateAge() {
  const now = new Date();
  const birthdate = new Date(
    inputYear.value,
    inputMonth.value - 1,
    inputDay.value
  );

  let ageYears = now.getFullYear() - birthdate.getFullYear();
  let ageMonths = now.getMonth() - birthdate.getMonth();
  let ageDays = now.getDate() - birthdate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    ageDays += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    ageMonths--;
  }

  ageYears = Math.max(ageYears, 0);
  ageMonths = Math.max(ageMonths, 0);
  ageDays = Math.max(ageDays, 0);

  forYear.textContent = ageYears;
  forMonth.textContent = ageMonths;
  forDay.textContent = ageDays;
}

/****** FONCTION CALCULER AGE *****/

arrow.addEventListener("click", () => {
  calculateAge();
});

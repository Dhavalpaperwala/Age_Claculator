const form = document.getElementById("age-form");
const birthdayInput = document.getElementById("birthday");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const birthdayValue = birthdayInput.value;
  const today = new Date();
  const birthDate = new Date(birthdayValue);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  result.innerHTML = `Your age is ${age} years.`;
});
// const apiUrl = 'phone-number-validation-api.p.rapidapi.com/checkNumber';
// const apiKey = 'c9728f9495msh27f9bfdf197d54bp1afce1jsned9501dbdc44';
const aboutNavBtn = document.getElementById('about');
const contactTopman = document.getElementById('contact_topman');
const subscribeNavBtn = document.getElementById('subscribe');
const comingSoon = document.getElementById('coming-soon');

aboutNavBtn.addEventListener('click', () => {
  alert('It\'s working');
});

contactTopman.addEventListener('click', () => {
  alert('It\'s working');
});

const form = document.querySelector("form"),
  submitForm = document.querySelector("#submit-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

// document.addEventListener('DOMContentLoaded', ...

document.getElementById('course').addEventListener('input', () => {
  document.getElementById('course').value === 'others' ? document.getElementById('specify-course').style.display = 'block' : document.getElementById('specify-course').style.display = 'none';
});

document.getElementById('schedule').addEventListener('input', () => {
  document.getElementById('schedule').value === 'custom' ? document.getElementById('customized-schedule').style.display = 'block' : document.getElementById('customized-schedule').style.display = 'none';
});
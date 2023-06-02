const form = document.querySelector("form"),
  submitForm = document.querySelector("#submit-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

/*
submitForm.addEventListener('click', (event) => {
  alert(
    "Your subscription will be completed when your payment is confirmed, expect an email with more information"
  )});
*/
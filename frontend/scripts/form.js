const comingSoon = document.getElementById('coming-soon');
const menu = document.getElementById('menu');
// const form = document.querySelector("form");
// const submitForm = document.querySelector("#submit-form");
let isMenuVisible = false;


const displayComingSoon = () => {
    setTimeout(() => {
      comingSoon.style.display = 'flex'
    },
      200);
    comingSoon.style.display = 'none';
};

const subscribeBtnResponse = () => {
  alert('You subcribe by filling and submitting the subscription form');
};

document.getElementById('course').addEventListener('input', () => {
  document.getElementById('course').value === 'others' ? document.getElementById('specify-course').style.display = 'flex' : document.getElementById('specify-course').style.display = 'none';
});

document.getElementById('schedule').addEventListener('input', () => {
  document.getElementById('schedule').value === 'custom' ? document.getElementById('customized-schedule').style.display = 'flex' : document.getElementById('customized-schedule').style.display = 'none';
});

const toggleMenu = () => {
  !isMenuVisible ? menu.style.display = 'flex' : menu.style.display = 'none';
  isMenuVisible = !isMenuVisible;
}

// Hide the displayed menu when one clicks out
document.body.addEventListener('click', (event) => {
  if (
      !menu.contains(event.target) &&
      event.target !== document.getElementById('menu-toggle') && event.target !== document.getElementById('accept')
      ) {
      if (isMenuVisible) {
          menu.style.display = 'none';
          isMenuVisible = false;
      }
  }
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());
//   console.log(data);
// });
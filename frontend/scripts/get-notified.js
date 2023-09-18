const getNotifiedBtn = document.getElementById('get-notified-btn');
const acceptBtn = document.getElementById('accept');
const declineBtn = document.getElementById('decline');
const askForWhatsappContact = document.getElementById('get-notified-container');
const getWhatsappNumber = document.getElementById('number-input');
const submitWhastappNumber = document.getElementById('submit-whatsapp-no');


getNotifiedBtn.addEventListener('click', () => {
    askForWhatsappContact.classList.toggle("hidden")
});

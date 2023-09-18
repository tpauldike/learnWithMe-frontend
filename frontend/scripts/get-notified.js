const getNotifiedBtn = document.getElementById('get-notified-btn');
const cancelBtn = document.getElementById('cancel-btn');
const acceptBtn = document.getElementById('accept');
const declineBtn = document.getElementById('decline');
const askForWhatsappContact = document.getElementById('get-notified-container');
const getWhatsappNumber = document.getElementById('number-input');
const submitWhastappNumber = document.getElementById('submit-whatsapp-no');
let isContainerVisible = false;

// document.addEventListener('DOMContentLoaded', )

getNotifiedBtn.addEventListener('click', () => {
    getWhatsappNumber.style.display = 'none';
    !isContainerVisible ? askForWhatsappContact.style.display = 'block' : askForWhatsappContact.style.display = 'none';
    isContainerVisible = !isContainerVisible;
});

declineBtn.addEventListener('click', () => {
    askForWhatsappContact.style.display = 'none';
    isContainerVisible = false;
});

cancelBtn.addEventListener('click', () => {
    askForWhatsappContact.style.display = 'none';
    isContainerVisible = false;
});

acceptBtn.addEventListener('click', () => {
    getWhatsappNumber.style.display = 'block';
});


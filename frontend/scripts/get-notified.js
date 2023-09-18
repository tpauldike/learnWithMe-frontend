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

document.body.addEventListener('click', (event) => {
    // Check if the click target is not within the container or its buttons
    if (
        !askForWhatsappContact.contains(event.target) &&
        event.target !== getNotifiedBtn
    ) {
        // Hide the container if it's currently visible
        if (isContainerVisible) {
            askForWhatsappContact.style.display = 'none';
            isContainerVisible = false;
        }
    }
});

document.body.addEventListener('click', (event) => {
    // Check if the click target is not within the container or its buttons
    if (
        !askForWhatsappContact.contains(event.target) &&
        event.target !== getNotifiedBtn
    ) {
        // Hide the container if it's currently visible
        if (isContainerVisible) {
            askForWhatsappContact.style.display = 'none';
            isContainerVisible = false;
        }
    }
});
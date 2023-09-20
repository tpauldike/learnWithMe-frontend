const acceptBtn = document.getElementById('accept');
const askForWhatsappContact = document.getElementById('get-notified-container');
const whatsappNumberForm = document.getElementById('number-input');
// const whastappSubmitBtn = document.getElementById('whatsapp-submit-btn');
let isContainerVisible = false;


const displayGetNotifiedContainer = () => {
    whatsappNumberForm.style.display = 'none';
    !isContainerVisible ? askForWhatsappContact.style.display = 'block' : askForWhatsappContact.style.display = 'none';
    isContainerVisible = !isContainerVisible;
};

const hideGetNotifiedContainer = () => {
    askForWhatsappContact.style.display = 'none';
    isContainerVisible = false;
};

acceptBtn.addEventListener('click', () => {
    whatsappNumberForm.style.display = 'block';
});

document.body.addEventListener('click', (event) => {
    const getNotifiedBtn = document.getElementById('get-notified-btn');
    const getNotifiedBtnForPhones = document.getElementById('get-notified-btn_mobile');

    // Check if the click target is not within the container or its buttons
    if (
        !askForWhatsappContact.contains(event.target) &&
        event.target !== getNotifiedBtn && event.target !== getNotifiedBtnForPhones
        ) {
            // Hide the container if it's currently visible
        if (isContainerVisible) {
            askForWhatsappContact.style.display = 'none';
            isContainerVisible = false;
        }
    }
});
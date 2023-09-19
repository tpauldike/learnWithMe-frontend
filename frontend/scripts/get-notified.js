const acceptBtn = document.getElementById('accept');
const askForWhatsappContact = document.getElementById('get-notified-container');
const getWhatsappNumber = document.getElementById('number-input');
const getNotifiedBtn = document.getElementById('get-notified-btn')
// const submitWhastappNumber = document.getElementById('submit-whatsapp-no');
let isContainerVisible = false;


const displayGetNotifiedContainer = () => {
    getWhatsappNumber.style.display = 'none';
    !isContainerVisible ? askForWhatsappContact.style.display = 'block' : askForWhatsappContact.style.display = 'none';
    isContainerVisible = !isContainerVisible;
};

const hideGetNotifiedContainer = () => {
    askForWhatsappContact.style.display = 'none';
    isContainerVisible = false;
};

acceptBtn.addEventListener('click', () => {
    getWhatsappNumber.style.display = 'block';
});

document.body.addEventListener('click', (event) => {
    // const displayMenu = document.getElementById('menu-nav-container');
    // Check if the click target is not within the container or its buttons
    if (
        !askForWhatsappContact.contains(event.target) &&
        event.target !== getNotifiedBtn
        ) {
            // Hide the container if it's currently visible
        if (isContainerVisible) {
            askForWhatsappContact.style.display = 'none';
            // displayMenu.style.display = 'none';
            isContainerVisible = false;
        }
    }
});

    // document.addEventListener('DOMContentLoaded', )
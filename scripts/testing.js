const whatsappSubmitButton = document.getElementById("whatsapp-submit-btn");

document.addEventListener("DOMContentLoaded", () => {
    Notification.requestPermission()
})

whatsappSubmitButton.addEventListener("click", () => {
        new Notification("Beware", {
            body: "You are about to get added to a WhatsApp broadcast list",
            data: { warn: "You will get all alerts, including the ones not meant for you" },
            icon: "logo.png",
            tag: "Warning"
        })
})
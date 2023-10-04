const whatsappSubmitButton = document.getElementById("whatsapp-submit-btn");

whatsappSubmitButton.addEventListener("click", () => {
    Notification.requestPermission().then(permitted => {
        if (permitted === "granted") {
            const notification = new Notification("Beware", {
                body: "You are about to get added to a whatsApp broadcast list",
                data: { warn: "You will get all alerts, including the ones not meant for you"},
                icon: "logo.png",
                tag: "Please be warned"
            })

            notification.addEventListener('submit', (e) => {
                alert(e)
            })
        }
    })
})
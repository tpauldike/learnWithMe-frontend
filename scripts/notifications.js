const webPush = (htmlElement, event, { title, body, icon = "/images/logo.jpeg", tag, data }) => {
    document.addEventListener("DOMContentLoaded", () => {
        Notification.requestPermission()
            .then(permission => {
                if (permission === 'granted') {

                    htmlElement.addEventListener(event, () => {
                        new Notification(title, {
                            body,
                            icon,
                            tag,
                            data,
                        });
                    });
                };
            })
            .catch(error => {
                console.error(error);
            }); 
    });
};

webPush(document.getElementById('subscribe'), 'click', { title: 'Subscribe here', body: 'Please fill and submit the Subscription Form, to subscribe' });
webPush(document.getElementById('subscribe-on-mobile'), 'click', { title: 'Subscribe here', body: 'Please fill and submit the Subscription Form, to subscribe' });


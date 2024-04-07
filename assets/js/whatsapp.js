
 // Function to send a WhatsApp message
 function sendWhatsAppMessage() {
    // Define the phone number in international format and the message you want to send
    const phoneNumber = '+905550846000'; // Replace with your phone number
    const message = encodeURIComponent('I would like to schedule an appointment.');
    const messagear = encodeURIComponent('I would like to schedule an appointment.');

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open a new window or tab in the browser with the WhatsApp URL
    window.open(whatsappUrl, '_blank');
}

// Add click event listener to the button
document.querySelector('.cta-button-appointment').addEventListener('click', sendWhatsAppMessage);
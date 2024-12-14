// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Select the "submit-button" element
const submitButton = document.querySelector('#submit-button');

// Add a click event listener to the button
submitButton.addEventListener('click', () => {
    // Select the "main" element of the contact-page
    const contactPageMain = document.querySelector('.contact-page main');

    // Clear the contents of the "main" element
    contactPageMain.innerHTML = '';

    // Create a new <p> element
    const thankYouMessage = document.createElement('p');

    // Set the text content and style of the new <p> element
    thankYouMessage.textContent = 'Thank you for your message';
    thankYouMessage.style.fontSize = '24px';

    // Append the new <p> element to the "main" element
    contactPageMain.appendChild(thankYouMessage);
});

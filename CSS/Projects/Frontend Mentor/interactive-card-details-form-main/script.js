// Update Card Number
const inputFieldCardNumber = document.getElementById('cardnumber');
const outputDivCardNumber = document.getElementById('card-number');

inputFieldCardNumber.addEventListener('input', function () {
    let value = this.value.replace(/\D/g, '');

    value = value.substring(0, 16);

    let formattedValue = value.replace(/(.{4})/g, '$1 ').trim();

    this.value = formattedValue;

    outputDivCardNumber.textContent = formattedValue || "0000 0000 0000 0000";
});

// Update CardHolder Name
const inputFieldCardHolderName = document.getElementById('cardholder');
const outputDivCardHolderName = document.getElementById('card-holder-name');

inputFieldCardHolderName.addEventListener('input', function () {
    let value = inputFieldCardHolderName.value;
    outputDivCardHolderName.textContent = value.toUpperCase() || "JANE APPLESEED"
});


// Update Card CVC
const inputFieldCardCvc = document.getElementById('cvc');
const outputDivCardCvc = document.getElementById('card-cvc');

inputFieldCardCvc.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '');
    let value = inputFieldCardCvc.value;
    outputDivCardCvc.textContent = value || "000";
});


// Update Card Months and Year 
const monthInput = document.getElementById('exp-month');
const yearInput = document.getElementById('exp-year');
const cardExpDiv = document.getElementById('card-exp');

function updateExpDate() {
    let month = monthInput.value.replace(/\D/g, ''); // only numbers
    let year = yearInput.value.replace(/\D/g, '');   // only numbers

    // Limit values
    if (month.length > 2) month = month.slice(0, 2);
    if (year.length > 2) year = year.slice(0, 2);

    // Update inputs with cleaned values
    monthInput.value = month;
    yearInput.value = year;

    // Format output
    let displayMonth = month.padEnd(2, '0') || '00';
    let displayYear = year.padEnd(2, '0') || '00';

    cardExpDiv.textContent = `${displayMonth}/${displayYear}`;
}

monthInput.addEventListener('input', updateExpDate);
yearInput.addEventListener('input', updateExpDate);



// Confirm Button Function
const confirmBtn = document.getElementById('confirmBtn');
const formSection = document.querySelector('.form-container');
const thankYouSection = document.querySelector('.thank-you');

confirmBtn.addEventListener('click', function (event) {
    event.preventDefault(); // stop form submission
    formSection.style.display = 'none'; // hide form
    thankYouSection.style.display = 'block'; // show thank you
});


// Continue button

const continueBtn = document.getElementById('continueBtn')
continueBtn.addEventListener('click', () => {
    // Reset form inputs
    inputFieldCardNumber.value = '';
    monthInput.value = '';
    yearInput.value = '';
    inputFieldCardHolderName.value = '';
    inputFieldCardCvc.value = '';

    // Reset preview
    outputDivCardNumber.textContent = "0000 0000 0000 0000";
    cardExpDiv.textContent = "00/00";
    outputDivCardHolderName.textContent = "JANE APPLESEED";
    outputDivCardCvc.textContent = "000";

    // Show form again
    thankYouSection.style.display = 'none';
    formSection.style.display = 'block';
});

// onclick="alert('Continuing...')"
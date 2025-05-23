const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    initialCountry: "ph",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
});
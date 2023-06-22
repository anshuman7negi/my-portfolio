function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidMsg) {
  const emailRegex = /[A-Z]/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return true;
  }
  return showError(input, invalidMsg);
}

const form = document.querySelector('#contact-page fieldset');
const submissionForm = document.querySelector('#contact-page form');
const EMAIL_INVALID = 'Please enter email in lower case !';

function storeInputData() {
  const inputData = {};
  for (let i = 0; i < form.elements.length; i += 1) {
    const element = form.elements[i];
    if (element.value !== '') inputData[element.name] = element.value;
  }
  localStorage.setItem('formData', JSON.stringify(inputData));
}

function retriveInputData() {
  const recieveData = localStorage.getItem('formData');
  if (recieveData) {
    const InputData = JSON.parse(recieveData);
    for (let i = 0; i < form.elements.length; i += 1) {
      const element = form.elements[i];
      element.value = InputData[element.name];
    }
  }
}
retriveInputData();

submissionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.useremail, EMAIL_INVALID);
  if (emailValid) {
    const nameInput = form.querySelector('input[name="username"]');
    const emailInput = form.querySelector('input[name="useremail"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    storeInputData();
    nameInput.value = ' ';
    emailInput.value = ' ';
    messageInput.value = ' ';
    submissionForm.submit();
  }
});
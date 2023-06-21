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
  const emailRegex = /[^A-Z]/g;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact-page fieldset');
const submissionForm = document.querySelector('#contact-page form');
const EMAIL_INVALID = 'Please enter email in lower case !';

submissionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.useremail, EMAIL_INVALID);
  if (emailValid) {
    submissionForm.submit();
  }
});

function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function validateEmail(input, invalidMsg) {
	const emailRegex =/^[^A-Z\s]+\.[^A-Z\s]+$/;
	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#contact-page fieldset");
const submissionForm = document.querySelector("#contact-page form");
const EMAIL_INVALID = "Please enter email in lower case !";

submissionForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailValid = validateEmail(form.elements["useremail"], EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});


// script.js
function validateCode() {
  const inputs = document.querySelectorAll('.code-inputs input');
  let code = '';
  inputs.forEach(input => {
    code += input.value.trim();
  });

  if (code.length !== 6 || isNaN(code)) {
    alert('Please enter a valid 6-digit code.');
    return false;
  }

  alert('Code confirmed: ' + code);
  return true;
}

// Optional: Automatically move to the next input
const codeInputs = document.querySelectorAll('.code-inputs input');
codeInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < codeInputs.length - 1) {
      codeInputs[index + 1].focus();
    }
  });
});

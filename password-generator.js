const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate();
  console.log(password);
}

generateRandomPassword();

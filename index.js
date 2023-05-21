function submit() {
  var password = document.getElementById('inp').value;
  var hasUpperCase = false;
  var hasLowerCase = false;
  var hasNumbers = false;
  var hasSpecialChars = false;

  for (let index = 0; index < password.length; index++) {
      const char = password.charAt(index);

      if (char >= "A" && char <= "Z") {
          hasUpperCase = true;
      } else if (char >= "a" && char <= "z") {
          hasLowerCase = true;
      } else if (char >= "0" && char <= "9") {
          hasNumbers = true;
      } else {
          hasSpecialChars = true;
      }
  }

  var resultElement = document.getElementById('result');
  if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
      resultElement.innerHTML = `<h1>Strong password</h1>`;
  } else if ((hasUpperCase || hasLowerCase) && hasNumbers) {
      resultElement.innerHTML =`<h1>Medium password</h1>`;
  } else {
      resultElement.innerHTML = `<h1>Weak password</h1>`;
  }
}









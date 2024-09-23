const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const age = document.getElementById("age");
const male = document.getElementById("male");
const female = document.getElementById("female");
const termsAndCondition = document.getElementById("t&c");
const errMessages = document.querySelectorAll(".validation");
const myErrMessages = [...errMessages];
const btn = document.querySelector(".btn");
const validEmail = /^[^@/s]+@[^@/s]+\.[^@/s]+$/;

// name validation
const namValidation = () => {
  if (fullName.value === "") {
    myErrMessages[0].textContent = "please type  in your full name";
  } else {
    return true;
  }
  setTimeout(() => {
    myErrMessages[0].textContent = "";
  }, 5000);
};
// email validation

const emailValidation = () => {
  if (validEmail.test(email.value)) {
    return true;
  } else {
    myErrMessages[1].textContent = "invalid email, e.g user@example.com";
  }
  setTimeout(() => {
    myErrMessages[1].textContent = "";
  }, 5000);
};
const ageValidation = () => {
  let ageValue = Number(age.value);
  if (ageValue >= 18 && ageValue < 100) {
    return true;
  } else {
    myErrMessages[4].textContent = "user must be between 18 - 100 years of age";
  }
  setTimeout(() => {
    myErrMessages[4].textContent = "";
  }, 5000);
};
const passwordValidation = () => {
  let passwordValue = password.value;
  if (passwordValue.length >= 8) {
    return true;
  } else {
    myErrMessages[2].textContent = "password should be 8 characters and above";
  }
  setTimeout(() => {
    myErrMessages[2].textContent = "";
  }, 5000);
};
const confirmValidation = () => {
  let passwordValue = password.value;
  let confirmValue = confirmPass.value;

  if (confirmValue !== passwordValue) {
    myErrMessages[3].textContent = "password does not match";
  } else {
    return true;
  }
  setTimeout(() => {
    myErrMessages[3].textContent = "";
  }, 5000);
  return true;
};
const checkValidation = () => {
  if (termsAndCondition.checked) {
    return true;
  } else {
    myErrMessages[6].textContent = "please check terms and conditions";
    console.log("not checked");
  }
  setTimeout(() => {
    myErrMessages[6].textContent = "";
  }, 3000);
};

btn.addEventListener("click", (e) => {
  if (
    namValidation() &&
    emailValidation() &&
    ageValidation() &&
    passwordValidation() &&
    confirmValidation() &&
    checkValidation()
  ) {
    myErrMessages[5].classList.remove("hidden");
  } else {
    namValidation();
    emailValidation();
    ageValidation();
    passwordValidation();
    confirmValidation();
    checkValidation();
  }
  setTimeout(() => {
    myErrMessages[5].classList.add("hidden");
  }, 5000);
});
console.log(myErrMessages);

function fnameValidate(params) {
  let first_name = document.getElementById("firstname").value;
  if (first_name == "") {
    displayMsg("firstname is required", "fnamemsg", "red");
    return false;
  } else if (!first_name.match(/^[a-zA-Z]+$/)) {
    displayMsg("firstname only accepts alphabet", "fnamemsg", "red");
  } else if (first_name.length < 3) {
    displayMsg("firstname must me more than 3 characters", "fnamemsg", "red");
    return false;
  } else {
    displayMsg("valid firstname", "fnamemsg", "green");
    return true;
  }
}

function lnameValidate(params) {
  let last_name = document.getElementById("lastname").value;
  if (last_name == "") {
    displayMsg("lastname is required", "lnamemsg", "red");
    return false;
  } else if (!last_name.match(/^[a-zA-Z]+$/)) {
    displayMsg("lastname only accepts alphabet", "lnamemsg", "red");
  } else if (last_name.length < 3) {
    displayMsg("firstname must me more than 3 characters", "lnamemsg", "red");
    return false;
  } else {
    displayMsg("valid lastname", "lnamemsg", "green");
    return true;
  }
}

function emailValidate(params) {
  let email = document.getElementById("email").value;
  if (email == "") {
    displayMsg("email is required", "emailmsg", "red");
    return false;
  } else if (
    !email.match(/^([a-z0-9])[a-z0-9\#\_\-\.]+\@+(([a-z])+\.)([a-z])+$/)
  ) {
    displayMsg("invalid email format", "emailmsg", "red");
    return false;
  } else {
    displayMsg("valid email", "emailmsg", "green");
    return true;
  }
}
function passwordValidate(params) {
  let password = document.getElementById("password").value;
  if (password == "") {
    displayMsg("password is required", "passwordmsg", "red");
    return false;
  } else if (
    !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,}$/)
  ) {
    displayMsg(
      "password must be 8 characters including one uppercase,one lowercase,one digit and special characters",
      "passwordmsg",
      "red"
    );
    return false;
  } else {
    displayMsg("valid password", "passwordmsg", "green");
    return true;
  }
}
function validForm() {
  if (
    fnameValidate() &&
    lnameValidate() &&
    emailValidate() &&
    passwordValidate()
  ) {
    return true;
  } else {
    return False;
  }
}

function displayMsg(msg, id, colorValue) {
  document.getElementById(id).innerHTML = msg;
  document.getElementById(id).style.color = colorValue;
}

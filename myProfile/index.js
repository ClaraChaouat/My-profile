let submit = document.getElementById("submit");
let firstName = document.getElementById("firstname").value;
let lastName = document.getElementById("lastname").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let comments = document.getElementById("comments").value;

function checkEmptyFields(firstName, lastName, phone, email, comments) {
  if (
    document.getElementById("firstname").value !== "" &&
    document.getElementById("phone").value !== "" &&
    document.getElementById("email").value !== "" &&
    document.getElementById("comments").value !== ""
  ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

checkEmptyFields(firstName, lastName, phone, email, comments);

submit.onclick = function () {
  let submit = document.getElementById("submit");
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let comments = document.getElementById("comments").value;
  console.log(
    "First Name:",
    firstName + "," + "Last Name:",
    lastName + "," + "Email:",
    email + "," + "Comments:",
    comments + "," + "Phone:",
    phone + "."
  );
};

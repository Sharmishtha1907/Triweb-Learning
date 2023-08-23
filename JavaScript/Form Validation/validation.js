function validate() {

  var fname = document.getElementById('fname');
  if (fname.length()< 5) {
    alert("Name should have atleast 5 characters");
  }

  let dob = document.getElementById('dob');
  let dateob = new Date(dob);
  let today = new Date();
  let age = document.querySelector('age');
  if (dateob.getFullYear() > 2005) {
    alert("You are underage");
  }
  if (dateob.getFullYear - today.getFullYear != age) {
    alert("Date of birth and age do not match");
  }
}

//1. Dealing with Errors
//2. Submitting the form

(function () {
  //   document.forms.register.noValidate = true; //disble form validation
  var form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    var elements = this.elements; //collection of form controls
    console.log(elements.email);
    var valid = {}; //valid object to test form is valid before submission
  });
})();

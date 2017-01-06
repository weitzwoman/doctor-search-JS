var Doctors = require('./../js/doctor.js').doctorsModule;

function displayDoctors(firstName, lastName, title) {
  $('#showDoctors').append("<li>" + firstName + "</li>");
}

$(document).ready(function(){
  $('#getDoctors').click(function(){
    var medicalIssue = $('#condition').val();
    var doctors = new Doctors();
    doctors.getDoctors(medicalIssue, displayDoctors);
  });
});

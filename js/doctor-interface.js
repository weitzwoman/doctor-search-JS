var Doctors = require('./../js/doctor.js').doctorsModule;

function displayDoctors(firstName, lastName, title) {
  $('#showDoctors').show();
  $('.doctor-list').show();
  $('#showDoctors tbody').append("<tr><td>" + firstName + " " + lastName + "</td><td>" + title + "</td></tr>");
}

function displayError(error) {
  $('#showError').show();
}

$(document).ready(function(){
  $('#getDoctors').click(function(){
    var medicalIssue = $('#condition').val();
    var doctors = new Doctors();
    doctors.getDoctors(medicalIssue, displayDoctors);
  });
  $('#reset').click(function(){
    location.reload();
  });
});

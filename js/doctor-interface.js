var Doctors = require('./../js/doctor.js').doctorsModule;

function displayDoctors(firstName, lastName, title) {
  $('#showDoctors').show();
  $('.doctor-list').show();
  $('#showDoctors tbody').append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + title + "</td></tr>");
}

function displayError(error) {
  $('#showError').text(error);
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

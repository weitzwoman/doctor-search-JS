var apiKey = require('./../.env').apiKey;

function Doctors() {
}

Doctors.prototype.getDoctors = function(medicalIssue, displayDoctors, displayError) {
  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query="+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      result.data.forEach(function(doctor){
        var firstName = doctor.profile.first_name;
        var lastName = doctor.profile.last_name;
        var title = doctor.profile.title;
        displayDoctors(firstName, lastName, title);
        console.log(result);
      });
    })
    .fail(function(error){
      displayError(error.responseJSON.message);
      console.log("fail");
    });
};

exports.doctorsModule = Doctors;

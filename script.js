// get reference to the form and dispaly area
var form = document.getElementById('Resumeform');
var resumeDispalyElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Phone = document.getElementById('phonenumber').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    var resumeHTML = "\n   <h2><b>Resume</b></h2>\n   <h3>Personal Infromation</h3>\n   <p><b>name:</b>".concat(name, "</p>\n   <p><b>email:</b>").concat(email, "</p>\n   <p><b>Phonenumber:</b>").concat(Phone, "</p>\n\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p>").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p>").concat(skills, "</p>\n\n\n   ");
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Dispaly Element is missing!');
    }
});

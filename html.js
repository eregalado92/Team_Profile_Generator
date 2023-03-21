const generateHTML = function (teamString) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Farsan&display=swap">
    
    </head>
    <body>
    <div class="header">
    <div class="jumbotron bg-warning">
       <h1 class="display-2 text-white text-center">Our Team</h1>
    </div>
    </div>
    <div class="container-body container-fluid">
       <div class="row">
        ${teamString} 
    </div>
</div> 
</body>
</html>`

}

// Generates cards for each employee class based
const generateCard = function (arr) {
    //Fontawesome Icons change based on role
    let positionIcon;
    //display info
    let roleInfo;

    if (arr.title === "Manager") {
        positionIcon = `<i class="fas fa-mug-hot"></i>`
        roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        positionIcon = `<i class="fas fa-glasses"></i>`
        roleInfo = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
    } else if (arr.title === "Intern") {
        positionIcon = `<i class="fas fa-user-graduate"></i>`
        roleInfo = `School: ${arr.school}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-primary">
            <h4 class="text-white text-center">${arr.name}</h4>
            <h4 class="text-white text-center">${positionIcon}</i> ${arr.title}</h4>
        </div>
        <div class="card-body">
            <ul class="list-unstyled">
                <li>Employee ID: ${arr.id}</li>
                <li>Email: <a href="emilio@gmail.com"${arr.email}">${arr.email}</a></li>
                <li>${roleInfo}</i>
            </u>
        </div>
    </div>
  </div>
`
}

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;
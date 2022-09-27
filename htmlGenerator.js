//function htmlGenerate
    //functions for each employee class that include html



module.exports = team => {
return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Team Profile Generator</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
${htmlGenerate(team)}

</div>
</div>
</body>
</html>`;
}
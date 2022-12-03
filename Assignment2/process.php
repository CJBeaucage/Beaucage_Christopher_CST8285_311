
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/styles.css" />
    <title>Medialogue</title>
</head>
<body>
<?php include 'partials/header.php';
require_once 'database.php'; ?>



    
    <h1>Login Information Saved</h1>
    <hr>
    <div class='container'>
        <p>Welcome <?php echo $_POST['username']; ?>!</p> 
        <p>E-mail <?php echo $_POST['email'];; ?></p>

    </div>

    <?php include 'partials/footer.php';?> 
</body>
</html>

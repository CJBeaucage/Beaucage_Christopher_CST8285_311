<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 6</title>
</head>
<body>
    <?php include 'headerM.php';?>
    
    <h1>Movie Information Saved</h1>
    <hr>
    <div>
        <dl>
          <dt>Title</dt>
          <dd><?php echo $_POST['title'];; ?></dd>
        
          <dt>Description</dt>
          <dd><?php echo $_POST['description'];; ?></dd>
        
          <dt>Genre</dt>
          <dd><?php echo $_POST['genre'];; ?></dd>

          <dt>Subject</dt>
          <dd><?php echo $_POST['subject'];; ?></dd>

          <dt>Star</dt>
          <dd><?php echo $_POST['Star'];; ?></dd>

          <dt>Year</dt>
          <dd><?php echo $_POST['year'];; ?></dd>

          <dt>Production</dt>
          <dd><?php echo $_POST['Production'];; ?></dd>
        </dl>
       

    </div>

    <?php include 'footerM.php';?> 
</body>
</html>



$_POST[''];
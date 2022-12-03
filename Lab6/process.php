
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles1.css" />
    <title>Lab 6</title>
</head>
<body>
    <?php include 'headerM.php';?>
    
    <h2>Movie Information Saved</h2>
    <hr>
    <div>
        <dl class="results">
          <dt class="results__label">Title</dt>
          <dd class="results__caption"><?php echo $_POST['title'];; ?></dd>
        
          <dt class="results__label">Description</dt>
          <dd class="results__caption"><?php echo $_POST['description'];; ?></dd>
        
          <dt class="results__label">Genre</dt>
          <dd class="results__caption"><?php echo $_POST['genre'];; ?></dd>

          <dt class="results__label">Subject</dt>
          <dd class="results__caption"><?php echo $_POST['subject'];; ?></dd>

          <dt class="results__label">Star</dt>
          <dd class="results__caption"><?php echo $_POST['Star'];; ?></dd>

          <dt class="results__label">Year</dt>
          <dd class="results__caption"><?php echo $_POST['year'];; ?></dd>

          <dt class="results__label">Production</dt>
          <dd class="results__caption"><?php echo $_POST['Production'];; ?></dd>
        </dl>
       

    </div>

    <?php include 'footerM.php';?> 
</body>
</html>

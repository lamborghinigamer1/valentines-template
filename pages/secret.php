<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" href="/images/favi-icon.png">
    <link rel="stylesheet" href="/style/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adorable :)</title>
</head>

<body>
    <?php require '../components/navbar.php'; ?>
    <div class="page-color">
        <h1>Aww :)</h1>
        <div class="top-heading">
            <?php
            for ($i = 0; $i < 101; $i++)
                echo ("<h2>I love you ") . $i . "%</h2>" . PHP_EOL;
            ?>
            <img id="bunny" src="/images/pat.gif">
            <p></p>
        </div>
    </div>
    <?php require '../components/footer.php'; ?>
    <script src="/script/script.js"></script>
</body>

</html>
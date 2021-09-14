<html>
<body>
    
    <?php
        $mysqli = new mysqli("localhost", "insertBot", "8z4N&gSI", "wedding");

        if ($mysqli->connect_errno) {
            echo "Failed to connect to database: " . $mysqli -> connect_error;
            exit();
        }

        $sql = "INSERT INTO rsvp (fname, lname, attending, numattend)
            VALUES
            ('$_POST[fname]', '$_POST[lname]', '$_POST[attending]', '$_POST[numattend]')";

        if ($mysqli->query($sql)) {
            header("Location: thankyou.html");
        }
        else {
            echo 'uh oh There was an error! Please contact Rachel or Sean directly with your RSVP!';
        }
        $mysqli->close();
    ?>

</body>
</html>
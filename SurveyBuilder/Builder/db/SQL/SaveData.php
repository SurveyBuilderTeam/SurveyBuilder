<?php
$title = $_POST['title-data'];

$text = $_POST['Editor'];

$newT = "$title.php";

$edit = fopen("$newT", "r+");


fwrite($edit, "$text");

echo "Data saved";
fclose($edit);
?>
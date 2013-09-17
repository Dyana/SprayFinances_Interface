<?php

require_once 'src/FileLoader.php';

$Loader = new FileLoader(__DIR__ . '/_resources');

echo $Loader->getFile('finances');

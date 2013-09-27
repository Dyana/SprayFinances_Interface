<?php

/**
 * A temporary file to allow easy development and design of future front end
 * components
 * 
 * @author  Charles Sprayberry
 * @license See LICENSE in source root
 */

class FileLoader {

    private $resources = '';

    public function __construct($resources) {
        $this->resources = $resources;
    }

    public function getFile($name, array $data = array()) {
        \extract($data, \EXTR_SKIP);
        \ob_start();
        include $this->resources . '/' . $name . '.php';
        return \ob_get_clean();
    }

}

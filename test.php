<?php
interface Square {
    public function calculate($a, $b): int;
}
$name = "Tima";

class Number implements Square
{
    public function calculate($a, $b): int
    {
        return $a * $b;
    }
}

function Test(Square $object)
{
    return $object->calculate(2, 3);
}

// preg_match_all('/[A-Za-z]+/', $result, $matches);
class Head
{
    public $eyes = 0;

    public function __construct() {
        $this->eyes = 2;
    }
}

function pregClearC($value){
    $value = preg_replace('#[^A-Za-z0-9\p{Cyrillic} +]#u', '', $value);
    return preg_replace('!\s+!', ' ', $value); //лишние проблеы
}

class Person extends Head
{
    public $name;

    public function __construct($name) {
        parent::__construct();
        $this->name = $name;
    }
}

$person = new Person("Dog");
// echo $person->name." has ".$person->eyes." eyes";
$temp = [
    [
        'key' => '',
        'value' => 'tima'
    ],
    [
        'key' => 'name',
        'value' => 'dana'
    ]
];

echo is_numeric("0");

?>
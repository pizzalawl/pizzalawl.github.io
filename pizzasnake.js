var snake = document.getElementById("snake");
var game = document.getElementById('game');
var classList = snake.classList;

function onStart() {
    up()
}

function up() {
    while (classList.length > 0) {
    classList.remove(classList.item(0));
    }
    classList.add("animateup");
}





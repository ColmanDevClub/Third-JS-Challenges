var score = 0;
var array = [6];
for (var i=0;i<6;i++){
    var str = '.hole' + String(i+1);
    array[i] = document.querySelector(str);
    array[i].addEventListener("click", function(){ score = score+1; });
}
var all_holes = document.querySelectorAll('.hole');
var score_position = document.querySelector('.score');
function new_game() {
    score = 0;
    document.querySelector('.score').textContent = score; 
    func();
}

function func() {
    var random_number = Math.floor(Math.random() * 6); 
    for (var i=0;i<6;i++){
        array[i].classList.remove('up');
    }
    array[random_number].classList.add('up');
    score_position.textContent = score; 
    if (score>10) {
        new_game();
    }
    else{
        setTimeout(func, 1000);
    }
}

func();

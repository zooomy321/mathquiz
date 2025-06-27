const input = document.getElementById("input");
const equation = document.getElementById("equation");
const solved = document.getElementById("solved");
const addition_button = document.getElementById("addition");
const subtraction_button = document.getElementById("subtraction");
const multiplication_button = document.getElementById("multiplication");
const division_button = document.getElementById("division");
const start_button = document.getElementById("Start");
const stop_button = document.getElementById("Stop");
const time = document.getElementById("time");
const cannot_change_qns_type_msg = document.getElementById("cannot_change_qns_type_msg");
const average = document.getElementById("average");
stop_button.style.display = 'none'
let buttons = [addition_button,subtraction_button,multiplication_button,division_button]
let ans
let x
let y
let stop_value = false
let question_type = [-1]
let start_pressed = false


function addition() {
    x = Math.ceil(Math.random() * 100);
    y = Math.ceil(Math.random() * 100);
    equation.innerText = x + " + " + y + " = "
    ans = x+y
    return ans
}
function multiplication() {
    x = Math.ceil(Math.random() * 12);
    y = Math.ceil(Math.random() * 12);
    equation.innerText = x + " × " + y + " = "
    ans = x*y
    return ans
}
function subtraction() {
    x = Math.ceil(Math.random() * 100);
    y = Math.ceil(Math.random() * 100);
    equation.innerText = x + " - " + y + " = "
    ans = x-y
    return ans
}
function division() {
    x = Math.ceil(Math.random() * 144);
    let factors = [];
    let z = 1;
    while (z != x) {
        if (x % z == 0) {
            factors.push(z);
            
        }
        z++
    }
    let index = Math.floor(Math.random()*factors.length);
    y = factors[index];
    equation.innerText = x + " ÷ " + y + " = ";
    ans = x / y;
    return ans;
}


function new_problem() {
    
}
buttons.forEach(element => {
    element.addEventListener("click", () => {
        if (question_type == [-1]) {
            equation.innerText = "Press Start!";
            return
        }
        if (stop_button.style.display == 'none') {
            question_type.push(buttons.indexOf(element))
            console.log(question_type)
            buttons.forEach(button => {
                if (buttons.indexOf(button) in question_type) {  
                    button.style.backgroundColor = "green"
                } else {
                    button.style.backgroundColor = "#271828"
                }
            })
        }
    })
});
function buttons_pressed_during_practice() {
    cannot_change_qns_type_msg.innerText = "Cannot change during practice!";
    setTimeout(() => {cannot_change_qns_type_msg.innerText = ""},3000);
}    
function time_run() {
  const interval = setInterval(() => {
    if (stop_value == true) {
        clearInterval(interval);
        return;
    } else {
        time.innerText = (Number(time.innerText) + 0.01).toFixed(2);
    }
  }, 10);
}
const average_time = () => (Number(time.innerText) / Number(solved.innerText)).toFixed(2);

start_button.addEventListener("click", () => {
    start_pressed = true;
    if (question_type == -1) {
        equation.innerText = "Choose Question Type First!";
        return;
    }
    time.innerText = 0.00;
    average.innerText = 0;
    solved.innerText = 0;
    stop_value = 0;
    start_button.style.display = 'none';
    stop_button.style.display = 'inline';
    setTimeout(() => {equation.innerText = "Starting in 3..."}, 0);
    setTimeout(() => {equation.innerText = "Starting in 2..."}, 1000);
    setTimeout(() => {equation.innerText = "Starting in 1..."}, 2000);
    setTimeout(() => {
        input.style.display = 'inline';
        new_problem();
        time_run();
        start_pressed = false;}, 3000);
})
    
stop_button.addEventListener("click", () => {
    if (start_pressed == true) {return}
    else {
        stop_value = true;
        start_button.style.display = 'inline';
        stop_button.style.display = 'none';
        input.style.display = 'none';
        equation.innerText = "Press Start!";
    }
})
input.addEventListener("input", () => {
    if (Number(input.value) === ans) {
        input.value = null
        solved.innerText = Number(solved.innerText) + 1
        new_problem()
        average.innerText = average_time()
    }
})

const input = document.getElementById("input");
const equation = document.getElementById("equation");
const solved = document.getElementById("solved");
const addition_button = document.getElementById("addition");
const multiplication_button = document.getElementById("multiplication");
const both_button = document.getElementById("both");
const start_button = document.getElementById("Start");
const stop_button = document.getElementById("Stop");
stop_button.style.display = 'none'
let buttons = [addition_button,multiplication_button,both_button]
let ans
let x
let y
let question_type = 0
function addition() {
    x = Math.ceil(Math.random() * 100);
    y = Math.ceil(Math.random() * 100);
    equation.innerText = x + " + " + y + " = "
    ans = x+y
    return ans
}
function multiplication() {
    x = Math.ceil(Math.random() * 10);
    y = Math.ceil(Math.random() * 10);
    equation.innerText = x + " × " + y + " = "
    ans = x*y
    return ans
}
function new_problem() {
    if (question_type === 0) {
        addition()
    } else if (question_type === 1) {
        multiplication()
    } else if (question_type === 2) {
        if (Math.random() > 0.5) {
            addition()
        } else {
            multiplication()
        }
    }
}
buttons.forEach(element => {
    element.addEventListener("click", () => {
        question_type = buttons.indexOf(element)
        buttons.forEach(button => {
            if (button === element) {
                button.style.backgroundColor = "green"
            } else {
                button.style.backgroundColor = "#271828"
            }
        })
    })
});
start_button.addEventListener("click", () => {
    start_button.style.display = 'none';
    stop_button.style.display = 'inline';
})
stop_button.addEventListener("click", () => {
    start_button.style.display = 'inline';
    stop_button.style.display = 'none';
})

new_problem()
input.addEventListener("input", () => {
    if (Number(input.value) === ans) {
        input.value = null
        solved.innerText = Number(solved.innerText) + 1
        new_problem()
    }
})

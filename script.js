const input = document.getElementById("input");
const equation = document.getElementById("equation");
const solved = document.getElementById("solved");
const addition_button = document.getElementById("addition");
const multiplication_button = document.getElementById("multiplication");
const both_button = document.getElementById("both");
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
addition_button.addEventListener("click", () => question_type = 0)
multiplication_button.addEventListener("click", () => question_type = 1)
both_button.addEventListener("click", () => question_type = 2)

new_problem()
input.addEventListener("input", () => {
    if (Number(input.value) === ans) {
        input.value = null
        solved.innerText = Number(solved.innerText) + 1
        new_problem()
    }
})
const input = document.querySelector("input")
const equation = document.getElementById("equation");
const solved = document.getElementById("solved");

function new_problem() {
    let x = Math.ceil(Math.random() * 10);
    let y = Math.ceil(Math.random() * 10);
    equation.innerText = x + " + " + y + " = "
    let ans = x+y
    return ans
}
new_problem();
input.addEventListener("input", () => {
    if (input.value == ans) {
        input.value = null;
        solved.innerText = Number(solved.innerText) + 1;
        new_problem();
    }
})
let input = document.getElementById("input");
let equation = document.getElementById("equation");
let solved = document.getElementById("solved");

let new_problem = function() {
    let x = Math.floor(Math.random() * 10) + 1;
    let y = Math.floor(Math.random() * 10) + 1;
    equation.innerText = x + " + " + y + " = "
    ans = x+y
    return ans
}
new_problem();
input.addEventListener("input", () => {
    if (Number(input.value) === ans) {
        input.value = null
        solved.innerText = Number(solved.innerText) + 1
        new_problem()
    }
})
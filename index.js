const inputArea = document.getElementById("firstClause");
const btn = document.getElementById("turnerButton");
const pElement = document.getElementById("reverseClause");


btn.addEventListener("click", () =>{
    pElement.innerHTML = inputArea.value.split(" ").reverse().join(" ");
    inputArea.value = "";
    inputArea.addEventListener("click", () =>{
        pElement.innerHTML = "";
    })
})
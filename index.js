const inputArea = document.getElementById("firstClause");
const btn = document.getElementById("turnerButton");
const pElement = document.getElementById("reverseClause");


btn.addEventListener("click", (e) =>{
    e.preventDefault();
     if(!inputArea.value){
        pElement.innerHTML = "Please Enter A Sentence";
        setInterval(()=>{pElement.innerHTML = ""},3000);
        
     }
     else{
        pElement.innerHTML = inputArea.value.split(" ").reverse().join(" ");
        
}
})

inputArea.addEventListener("click", (e) =>{
    e.preventDefault();
    pElement.innerHTML = "";
    inputArea.value = "";
    });
      

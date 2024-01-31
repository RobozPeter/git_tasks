
let numbers = [];
document.getElementById("button").addEventListener("click",()=>{
    console.log("hello")
    let num =document.getElementById("szamok").value;
    numbers.push(parseInt(num));
    console.log(numbers)
})
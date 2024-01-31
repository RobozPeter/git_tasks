
let numbers = [];

document.getElementById("button").addEventListener("click",()=>{
    console.log("hello")
    let num =document.getElementById("szamok").value;
    numbers.push(parseInt(num));
    console.log(numbers)
    document.getElementById("output").innerText = numbers
})

document.getElementById("min").addEventListener("click",()=>{
    let min = numbers[0];
    for(let i = 0; i<numbers.length;i++){
        if(numbers[i]<min){
            min = numbers[i]
        }
    }
     
    
    
    document.getElementById("output").innerText = min;
}) 

    document.getElementById("max").addEventListener("click",()=>{
        let max = numbers[0];
        for(let i = 0; i<numbers.length;i++){
            if(numbers[i]>max){
                max = numbers[i]
            }
        }
        document.getElementById("output").innerText = max;
})

let squr = document.getElementsByClassName("squr")
let finsh = false;
let crr = "X";
let data = [
    "0","1","2",
    "3","4","5",
    "6","7","8"
]
for(let itm of squr){
    itm.addEventListener("click",()=>{
       let value = itm.getAttribute("value") ;
       let sqcnt = document.querySelector(`.squr[value='${value}']`)  
       sqcnt.innerHTML = crr;
       let index = value - 1;
       data[index] = crr 
      console.log(data);
        winner();
       crr === "X"? crr = "O": crr = "X";
       
      
    })
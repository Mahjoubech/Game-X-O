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
    function winner(){

        if((data[0]==data[1]) && (data[1]==data[2])){
         let win = crr == "X"? "X" : "O";
         alert(`${win} is Won !!`)
         return;
        }
        if((data[0]==data[3]) && (data[3]==data[6])){
            let win = crr == "X"? "X" : "O";
            alert(`${win} is Won !!`)
            return;
           }
           if((data[3]==data[4]) && (data[4]==data[5])){
            let win = crr == "X"? "X" : "O";
            alert(`${win} is Won !!`)
            return;
           }
           if((data[1]==data[4]) && (data[4]==data[7])){
            let win = crr == "X"? "X" : "O";
            alert(`${win} is Won !!`)
            return;
           }
           if((data[2]==data[5]) && (data[5]==data[8])){
            let win = crr == "X"? "X" : "O";
            alert(`${win} is Won !!`)
            return;
           }
           if((data[6]==data[7]) && (data[7]==data[8])){
            let win = crr == "X"? "X" : "O";
            alert(`${win} is Won !!`)
            return;
           }
           if((data[0]==data[4]) && (data[4]==data[8])){
            let win = crr == "X"? "X" : "O";
            alert(`${win} is Won !!`)
            return;
           }
           if((data[2]==data[4]) && (data[4]==data[6])){
            let win = crr == "X"? "X" : "O";
            alert(`${win} is Won !!`)
            return;
           }
    }
    }
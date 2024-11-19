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
       let index = value - 1;
       if(data[index]=="X" || data[index]=="O"){
        return
       }
       let sqcnt = document.querySelector(`.squr[value='${value}']`)  
       sqcnt.innerHTML = crr;
       data[index] = crr 
      console.log(data);
        winner();
       crr === "X"? crr = "O": crr = "X";
       
      
    })
    function winner(){
        if(finsh){
            return
        }
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
           let draw = true
       for(sqr of data){
        if( (sqr != "X")&&(sqr != "O")){
         draw = false 
        }
       }
       if(draw){
        finsh = true
        alert('draw')
       }
    }
    }

     let rest = document.getElementById('reset')
    rest.addEventListener("click",()=>{
        reset();
    })

    function reset(){
        for(itm of squr){
               let value = itm.getAttribute("value") ;
               let sqcnt = document.querySelector(`.squr[value='${value}']`)  
              sqcnt.innerHTML = "";
    }
}


let globalCounter = 0; 
function increments(){
    globalCounter++
    console.log(globalCounter);
    increments();
}

try{
    increments();
}catch(error){
    console.log("Maximum call stack size exceeded at: ",globalCounter)
}





// let globalCounter = 0; 
// function increments(){
//     globalCounter++
//     console.log(globalCounter);
//     increments();
// }

// try{
//     increments();
// }catch(error){
//     console.log("Maximum call stack size exceeded at: ",globalCounter)
// }







// part two 


let testArray = [1,[2],[3,[7]]]
let newArr=[]
function trampoline(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            trampoline(arr[i])
        }
        else{newArr.push(arr[i])}
    }
    return newArr

}
console.log(trampoline(testArray))


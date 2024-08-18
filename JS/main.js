function calculator(num1,num2,funcToCall){
    return funcToCall(num1,num2);
}
function sum(num1,num2) {
    return num1+num2;
    
}
function sub(num1,num2) {
    return num1-num2;

}
console.log(calculator(10,15,sub));
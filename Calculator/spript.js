let display = document.getElementById('output');
let x='';
let s='';
let y='';
function caln(number){
    if(s==''){
        x+=number
        display.textContent=x;
      }
      else{
        y+=number;
        display.textContent=y;
      }
}
function cals(symbol){
    s=symbol;
    display.textContent=s;
}


function calculator(){
   let result;
   switch(s){
    case '+':
        result=parseFloat(x)+parseFloat(y);
        break;
    case '-':
        result=parseFloat(x)-parseFloat(y);
        break;
    case '*':
        result=parseFloat(x)*parseFloat(y);
        break;
    case '/':
        result=parseFloat(x)/parseFloat(y);
        break;
    
   }
   display.textContent=result;
   x='';
   y='';
   s='';
}
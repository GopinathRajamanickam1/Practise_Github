const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var nameStr = userInput[0].split('');
var len = (nameStr.length);
var count =0; var temp =1;
for(var i =0 ; i<nameStr.length ; i++){
    if(nameStr[i]===nameStr[len-temp]){
      // console.log(nameStr[i]);
      // console.log(i);
       temp++;
    }else{
     // console.log(count);
      count++;
    }
  
}
if(count>=1){
  console.log("0");
}
else{
  console.log("1");
}



});

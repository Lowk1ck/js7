let Icon = []


for(let i = 0; i < Infinity;i++) {
let img = prompt()


if(img == "") 
{
console.log(Icon);
}
else if(img == 'stop') {
break 
} 


let y = img.split(", ");
  if (y[0] == "add") {
    Icon.push(y[1]);
    console.log(Icon); 
  } 


let x = img.split(", ");
 if (x[0] == "del") {
  for(let key in Icon ) {
    Icon[key] == y[1] ? Icon.splice(key,1) : ""
    


  }


  console.log(Icon); 
} 
} 


 

  

     
  



 
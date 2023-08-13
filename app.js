
let max=document.querySelector("input");
let btn=document.querySelector("button");

btn.addEventListener("click", function(){
    let num=max.value;
    let num1=Math.floor(Math.random()*num+1);
    if(num==" "){
        alert("Please enter the maximum number");
    }else{
        
    
    if(num1==1){
        alert("Plz enter a valid range i.e >1");
    }else{
    max.value="";
    console.log(num1);
    
    let res=prompt("Guess the number. You have limited chances");
    if(num<50){
    for(let i=1;i<4;i++){
        
    if(res=="Quit"){
        alert("Quitting the game!!");
        break;
    }if(res==num1){
       
        alert("Congrats! You are right.The number is:" +num1);
        break;
    }else{
        
        
        if(res=="quit"){
            alert("Quitting the game");
            break;
        }else{
            if(i==3){
                alert("Better luck next time");
                break;
            }else{
                if(num1>res){
        res=prompt("You missed the number. PLease try again. you have "+(3-i)+" chance(s) left. Hint: Try inputting bigger number");
    }else{
        res=prompt("You missed the number. PLease try again. you have "+(3-i)+" chance(s) left. Hint: Try inputting smaller number");
    }
}

    
}
    }
}}else{
    if(num>50){
        for(let i=1;i<6;i++){
            
        if(res=="Quit"){
            alert("Quitting the game!!");
            break;
        }if(res==num1){
           
            alert("Congrats! You are right.The number is:" +num1);
            break;
        }else{
            
            
            if(res=="quit"){
                alert("Quitting the game");
                break;
            }else{
                if(i==5){
                    alert("Better luck next time");
                    break;
                }else{
                    if(num1>res){
            res=prompt("You missed the number. PLease try again. you have "+(5-i)+" chance(s) left. Hint: Try inputting bigger number");
        }else{
            res=prompt("You missed the number. PLease try again. you have "+(5-i)+" chance(s) left. Hint: Try inputting smaller number");
        }
    }
    
        
    }
        }
    
}
    }
 
}}}});


// btn2.addEventListener("click", function(){

//     if(res==num2){
//         alert("right");
//     }else{
        
//     alert("wrong");
    
//     }
// }
// );







// let max=prompt("enter the max number");
// let num=Math.floor(Math.random()*max+1);
// console.log(num);
// let res=prompt("Guess the number");
// while(true){
//     if(res=="Quit"){
//         alert("Quitting the game!!");
//         break;
//     }if(res==num){
//         alert("Congrats! You are right. The Number is:");
//         break;
//     }else{
//         if(res=="quit"){
//             alert("Quitting the game");
//             break;
//         }else{
//         res=prompt("You missed the number. PLease try again");
//     }
    
// }
// };

// // let btn=document.querySelector("button");
// btn.addEventListener("click", function(){
    
//     let num=Math.floor(Math.random()*inp.value+1);
//     console.log(num);
//     inp.value="";
    

// // let num=Math.floor(Math.random()*10+1);
// // console.log(num);
// // console.log(inp.value);
// prompt("now guess");
// console.log(prompt.valu);
// if(prompt.value==num){
//     alert("rit");
// }else{
//     alert("no");
// }
// });
// let max=prompt("enter the max number");

// Task-1------->Take four parameters. Multiply the four numbers and then return the result

// function multiply(a,b,c,d){
//   console.log("the number is:",a,b,c,d);
//   const mult=a*b*c*d;
//   return mult;

// }

// const result=multiply(78,98,90,23);
// console.log("the result is:",result);



// Task-2------->Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function task(num){
//   if(num%2===0){
//     num=num/2;
//   }
//   else{
//     num=num*2;
//   }
//   return num;
// }
// let result=task(10);
// console.log("result is:",result);


// Task-3------->Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers){
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
    
  }
  const size=numbers.length;
  let average=sum/size;
  console.log("The array size is",size);
  return average;

}

const num=[45,89,67,34,6,23];
const result=make_avg(num);
console.log("The average is:",result);



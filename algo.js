function a(){
    console.log('hello');
 }
 console.log('Dojo');

//output: Dojo

function a(){
  console.log('hello');
  return 15;
}
x = a();
console.log('x is', x);
//output: 15

function a(n){
    console.log('n is', n);
    return n+15;
}
x = a(3);
console.log('x is', x)
//output: n=3,x is 18

function a(n){
    console.log('n is', n);
    y = n*2;
    return y;
}
x = a(3) + a(5);
console.log('x is', x);
//output: 
// n is 3
// n is 5
// x is 16

function op(a,b){
   c = a+b;
   console.log('c is', c);
   return c;
}
x = op(2,3) + op(3,5);
console.log('x is', x);
//output: 
// c is 5
// c is 8
// x is 13

function op(a,b){
   c = a+b;
   console.log('c is', c);
   return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
console.log('x is', x)
//output: 
// c is 5
// c is 3
// c is 6
// c is 3
// c is 5
// c is 8
// x is 19

var x = 15;
function a(){
   var x = 10;
}
console.log(x);
a();
console.log(x);
// output: x=15, undefined?, x=15

// Assignment

function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
// output: 2,3 & undefined

function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
//output: 
// b = 6
// 6
// 10

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
// output: 3,4,5,6,7     ???????????

var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
// output: 15,15,10,15

for(var i=0; i<15; i+=2){
   console.log(i);
}
// output: 2,4,6,8,10,12,14

for(var i=0; i<3; i++){
   for(var j=0; j<2; j++){     
       console.log(i*j);
   }
}
// output: 0,0,0,1    ???????????

function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<x; j++){      
          console.log(i*j);
      } 
   }
}
z = looping(3,3);
console.log(z);
// output:

function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<y; j++){       
         console.log(i*j);
      } 
   }
   return x*y;
}
z = looping(3,5);
console.log(z);
// output: 

let sum = 0;
for(let i = 1;i<=5000; i++){
   if(i%2==0){
      sum = sum+i;
      i++;
   }
   return sum;
}
function odd(){
   let sum = 0;
   let i = 1;
   while(i<=5000){
      if(i%2===1){
         sum = sum+i;
      }
      i++;
   }
   return sum;
}

import { from, asyncScheduler } from 'rxjs';

 
console.log('start');
 
const array = [10, 20, 30,40,50,60,70];
const result = from(array, asyncScheduler);
 
setTimeout(()=>
    result.subscribe(x => console.log(x)),0
)
// result.subscribe(x => console.log(x));
 
console.log('end');
let arr = [1,2,3,4,56,7,8,9,10]
console.log(arr);
let a = 6;
console.log(!6);
console.log('yyyyyyyyyyyyy');
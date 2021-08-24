export function getFizzBuzzUntil(n) {
   var array=[];
   for(let i=1;i<=n;i++){// use let command because it use less memory ES6
       if((i%3)===0&&(i%5)===0){array.push('FizzBuzz')}// this command must be the first to output the FizzBuzz in conditon of 3 and 5 times
       else if((i%3)===0){array.push('Fizz')}// return Fizz if it is 3 times
       else if((i%5)===0){array.push('Buzz')}//return Buzz if it is 5 times
       else {array.push(i.toString())}//return i
   }
   return array//return array of FizzBuzz
}

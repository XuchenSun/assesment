export function getFibonacciUntil(n) {
    var current=0;
    var array=[0,1,1]
    for(var i=4;i<=n;i++){// start from n=3
        current=array[i-2]+array[i-3];
        array[i-1]=current;


    }
    if (n===0) return [0]// in case n=0
    if (n===1) return [0,1]// in case n=1
    if (n===2) return [0,1,1]// in case n=2
    return array// return the array
}
//console.log(getFibonacciUntil(7))      //test if it is correct when n=7

//Example 1 not using type script 
/*
const sum = (a,b)=>{
    return a+b;
    
}

console.log( sum(1,5));
console.log( sum('1','5'));





//Example 2  using type script 

function sum (a:number | string,b:number | string){
    if(typeof a == 'number' && typeof b == 'number'){
        return a+b;
    }else if(typeof a == 'string' && typeof b == 'string'){
        return a+" "+b;
    }else{
        return +a + +b;
    }
    
}

console.log(sum(1,8));
console.log(sum('1','8'));
*/

//Example -3   Array Type
 /*
const numArray: number[] =[];
const stringArray: string[] =[];

function sum (a:number | string,b:number | string){
    if(typeof a == 'number' && typeof b == 'number'){
        return a+b;
    }else if(typeof a == 'string' && typeof b == 'string'){
        return a+" "+b;
    }else{
        return +a + +b;
    }
    
}

const num = sum(1,8);
numArray.push(num as number);
const string = sum('1','8');
stringArray.push(string as string)
console.log(numArray, stringArray);
*/


//Example -4 
/*
const numArray: number[] =[];
const stringArray: string[] =[];

type numOrString = number | string;
type result ={value:number;timeStamp:Date}

function sum (a:numOrString,b:numOrString){
    if(typeof a == 'number' && typeof b == 'number'){
        return a+b;
    }else if(typeof a == 'string' && typeof b == 'string'){
        return a+" "+b;
    }else{
        return +a + +b;
    }
    
}

//Object
function resultObject(resultObj:result){
    console.log(resultObj.value);
    
    console.log(resultObj.timeStamp);
    
}




const num = sum(1,8);
numArray.push(num as number);
const string = sum('1','8');
stringArray.push(string as string)
console.log(numArray, stringArray);

resultObject({value:num as number,timeStamp:new Date()});

*/


//Example -4 (Generics)

const numArray:Array<number> =[];
const stringArray: Array<string> =[];

type numOrString = number | string;
type result ={value:number;timeStamp:Date}

function sum (a:numOrString,b:numOrString){
    if(typeof a == 'number' && typeof b == 'number'){
        return a+b;
    }else if(typeof a == 'string' && typeof b == 'string'){
        return a+" "+b;
    }else{
        return +a + +b;
    }
    
}

//Object
function resultObject(resultObj:result){
    console.log(resultObj.value);
    
    console.log(resultObj.timeStamp);
    
}

const num = sum(1,8);
numArray.push(num as number);
const string = sum('1','8');
stringArray.push(string as string)
console.log(numArray, stringArray);

resultObject({value:num as number,timeStamp:new Date()});

//Promise 
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('It worked');
    },1000)
})

myPromise.then((result)=>{
    console.log(result);
    
})
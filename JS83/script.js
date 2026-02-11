let arr=[1,2,3,4,5,6,2,3];
let num=prompt("Enter the number...");
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==num)
    {
        arr.splice(i,1);
    }
}
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

let num=prompt("Enter any number");
let count=0;
let n=parseInt(num);
while(n>0)
{
    count++;
    n=Math.floor(n/10);
}
console.log(`Total digit in a given number: ${count}`);

let num=prompt("Enter any number");
let n=parseInt(num);
let sum=0;
while(n>0)
{
    sum+=n%10;
    n=Math.floor(n/10);
}
console.log(`Total digit sum is : ${sum}`);

let num=prompt("Enter any number");
let n=parseInt(num);
let s=1;
while(n>0)
{
    s*=n;
    n--;
}
console.log(`Factorail of a given number is : ${s}`);

let arr=[1,2,3,4,5,6,2,3];
let maxNum=0;
for(num of arr)
{
    if(num>maxNum)
    {
        maxNum=num;
    }
}
console.log(`Max number is the given array:  ${maxNum}`);
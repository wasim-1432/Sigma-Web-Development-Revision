// let arr=[7,9,0,-2];
// let n=3;
// for(let i=0;i<n;i++)
// {
//     console.log(arr[i]);
// }

// let arr=[7,9,0,-2];
// let n=3;
// let i=arr.length-1;
// while(n)
// {
//     console.log(arr[i--]);
//     n--;
// }

// let s="";
// if(s.length!=0)
// {
//     console.log("String does not blank");
// }
// else
// {
//     console.log("String is blank");
// }

// let s="Mohd Wasim";
// let index=2;
// if(s[index]>='a' && s[index]<='z')
// {
//     console.log("Yes given index character is lowercase.");
// }
// else
// {
//     console.log("No given index character is not lowercase.");
// }

// let s="  Mohd Wasim  ";
// console.log(s);
// console.log(s.trim());

let arr=[1,2,4,,3,66,77,99];
let target=3;
let found=false;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==target)
    {
        found=true;
    }
}
if(found)
{
    console.log("Target element are present in the array");
}
else
{
    console.log("Target element does not present in the array.");
}
let s="Abscdqq";
if((s[0]==='a' || s[0]=='A') && s.length>5)
{
    console.log("Good string");
}
else
{
    console.log("Bad string");
}

let a=2,b=3,c=8;
if(a>b && a>c)
{
    console.log(`Greatest Number is : ${a}`);
}
else if(b>a && b>c)
{
    console.log(`Greatest Number si : ${b}`);
}
else
{
    console.log(`Greatest Number is : ${c}`);
}

let e=23;
let f=2312;
if(e%10===f%10)
{
    console.log("Same last digit.");
}
else
{
    console.log("Not same last digit.")
}
let arr=[];
while(true)
{
    let data=prompt("Enter enter your request");
    if(data==="list")
    {
        for(let i=0;i<arr.length;i++)
        {
            console.log(arr[i]);
        }
    }
    else if(data==="add")
    {
        let val=prompt("Enter any element");
        arr.push(val);
        console.log("Congratulation! your data has been successfully added.");
    }
    else if(data==="del")
    {
        arr.pop();
        console.log("Congratulation! your data has been successfully removed.")
    }
    else
    {
        console.log("You are sucessfully out");
        break;
    }
}
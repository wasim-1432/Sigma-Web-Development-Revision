let num=prompt("Enter any number");
let n=Math.floor(Math.random()*num)+1;
let guess=prompt("Please guess the number");
while(true)
{
    if(guess==n)
    {
        console.log("Congratulation! your guess is correct");
        break;
    }
    if(guess=="quiet")
    {
        console.log("You are out of the game");
        break;
    }
    guess=prompt("Please guess the number");
}
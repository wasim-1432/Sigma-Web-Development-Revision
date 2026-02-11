let favorite="Avatar";
let guess=prompt("Guess my favorite movie");
if(favorite===guess)
{
    console.log("Congratulation your guess is right");
}
while(favorite!=guess)
{
    guess=prompt("Guess again my favorite movie");
    if(guess==favorite)
    {
        console.log("Congratulation your guess is right");
        break;
    }
    if(guess==="queit")
    {
        console.log("You are out of the game...");
        break;
    }
}

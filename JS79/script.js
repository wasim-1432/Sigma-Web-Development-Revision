let heros=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
for(let i=0;i<heros.length;i++)
{
    console.log(`List #${i}`);
    for(let j=0;j<heros[i].length;j++)
    {
        console.log(`j=${j}, ${heros[i][j]}`);
    }
}
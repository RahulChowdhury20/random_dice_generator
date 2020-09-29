var randomNumber1;
var randomNumber2;
randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage1;
randomImage1="dice" + randomNumber1 + ".png";
var randomSourceimage1;
randomSourceimage1="images/"+randomImage1;
var randomImage2;
randomImage2="dice" + randomNumber2 + ".png";
var randomSourceimage2;
randomSourceimage2="images/"+randomImage2;
var image1=document.querySelector(".img1");
image1.setAttribute("src",randomSourceimage1);
var image2=document.querySelector(".img2");
image2.setAttribute("src",randomSourceimage2);

if(randomNumber2>randomNumber1)
{
	document.querySelector("h1").innerHTML="Player2 wins";
}
else if (randomNumber1>randomNumber2)
{
	document.querySelector("h1").innerHTML="Player1 wins";
}
else
{
	document.querySelector("h1").innerHTML="It's a draw";
}
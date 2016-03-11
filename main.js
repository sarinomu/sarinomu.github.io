var cookies = 0;
var clickers = 0;
var clickPower = 0;
var clickerPower = 0;
var base = 1;
var test = 0;

if(clickPower < 1)
{
	document.getElementById("click").onclick = function() {cookieClick(base, clickPower)};
}
else if(clickPower >=1)
{
	//test = (base * clickPower);
	document.getElementById("click").onclick = function() {cookieClick(base, clickPower)};
}

function cookieClick(number, powerUp)
{
	document.getElementById("checking2").innerHTML = powerUp;
	if(powerUp < 1)
	{
		test = number;
	}
	else if(powerUp > 1)
	{
		test = (number * powerUp);
	}
	
	document.getElementById("check2").innerHTML = number;
	cookies += test;
	document.getElementById("cookies").innerHTML = cookies;
}

function buyClicker()
{
	var currentCost = Math.floor(10 * Math.pow(1.1,clickers));
	if(cookies >= currentCost)
	{
		cookies -= currentCost;
		clickers += 1;
		document.getElementById("cookies").innerHTML = cookies;
		document.getElementById("clickers").innerHTML = clickers;
	}
	var nextCost = Math.floor(10 * Math.pow(1.1,clickers));
	document.getElementById("clickerCost").innerHTML = nextCost;
}

function sellClicker()
{
	if(clickers >= 1)
	{
		clickers -=1;
		document.getElementById("clickers").innerHTML = clickers;
		cookies += (Math.floor(10 * Math.pow(1.1,clickers))/2);
		document.getElementById("cookies").innerHTML = cookies;
		var nextCost = Math.floor(10 * Math.pow(1.1,clickers));
		document.getElementById("clickerCost").innerHTML = nextCost;
	}
}

function incPower()
{
	if(cookies >= 10)
	{
		cookies -= 10;
		document.getElementById("cookies").innerHTML = cookies;
		clickPower += 2;
		document.getElementById("clickPower").innerHTML = clickPower;
	}
}

function incClickerPower()
{
	if(cookies >= 0)
	{
		clickerPower += 2;
	}
}

//if(clickers > 0)
//{
	if(clickerPower < 1)
	{
		window.setInterval(function(){
			cookieClick(clickers, 0);
		},1000);
	}
	else if(clickerPower > 1)
	{
		window.setInterval(function(){
			cookieClick(clickers, clickerPower);
		},1000);	
	}	
//}

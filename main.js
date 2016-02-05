var cookies = 0;
var clickers = 0;
var clickPower = 0;
var clickerPower = 0;

function cookieClick(number)
{
	if(clickPower < 1)
	{
		cookies += number;
	}
	else if(clickPower)
	{
		cookies += (number * clickPower);
	}
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
	if(cookies >= 0)
	{
		clickPower += 2;
	}
}

function incClickerPower()
{
	if(cookies >= 0)
	{
		clickerPower += 2;
	}
}

if(clickerPower <= 0)
{
	window.setInterval(function(){cookieClick((clickers));},1000)	
}
else
{
	window.setInterval(function(){cookieClick((clickers * clickerPower));},1000)
}

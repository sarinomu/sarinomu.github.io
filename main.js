var number = 0;
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

function cookieClick(num, powerUp)
{
	document.getElementById("checking2").innerHTML = powerUp;
	if(powerUp < 1)
	{
		test = num;
	}
	else if(powerUp > 1)
	{
		test = (num * powerUp);
	}
	
	document.getElementById("check2").innerHTML = number;
	number += test;
	document.getElementById("number").innerHTML = number;
}

function buyClicker()
{
	var currentCost = Math.floor(10 * Math.pow(1.1,clickers));
	if(number >= currentCost)
	{
		number -= currentCost;
		clickers += 1;
		document.getElementById("number").innerHTML = number;
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
		number += (Math.floor(10 * Math.pow(1.1,clickers))/2);
		document.getElementById("number").innerHTML = number;
		var nextCost = Math.floor(10 * Math.pow(1.1,clickers));
		document.getElementById("clickerCost").innerHTML = nextCost;
	}
}

function incPower()
{
	if(number >= 10)
	{
		number -= 10;
		document.getElementById("number").innerHTML = number;
		clickPower += 2;
		document.getElementById("clickPower").innerHTML = clickPower;
	}
}

function incClickerPower()
{
	if(number >= 0)
	{
		clickerPower += 2;
	}
}

function save()
{
	var save = {
		number: number,
		clickers: clickers,
		clickerPower: clickerPower,
		clickPower: clickPower
	}

	localStorage.setItem("save",JSON.stringify(save));
	alert("Your game has been saved (probably)");
}

function load()
{
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.number !== "undefined") number = savegame.number;
	if (typeof savegame.clickers !== "undefined") clickers = savegame.clickers;
	if (typeof savegame.clickPower !== "undefined") clickPower = savegame.clickPower;
	document.getElementById("clickers").innerHTML = clickers;
	alert("Your game has been loaded (probably)");
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

/*
Name: Sher Grünenberg
Assignment: 
Date: 2023
CSCI 294, Spring 2023
*/
/* May be benefitial to make this a class where I can create functions to go up skill levels, deduct points, etc...
class Lineage {
	constructor(name){
		this.name = name;
	}
}
*/

function getOption() {
    selectElement = document.querySelector('#lineageOption');
    output = selectElement.value;
	if (output == 0){
		document.getElementById("showStats").innerHTML="pick valid entry";
	}
    else {
		fillOutStats(output);
		//document.querySelector('.output').textContent = output;
	}
}


function diceThrow(diceSize){
	return Math.floor(Math.random()*diceSize)+1
}

function statCreator(attribute){
	const values = new Array (attribute+1);
	diceSum = 0;
	for (let i = 0; i<values.length; i++){
		values[i] = diceThrow(6);
	}
	values.sort(function(a, b){return a - b});
	values.shift();
	for (let i = 0; i<values.length; i++){
		diceSum += values[i];
	}
	return diceSum
}

function fillOutStats(lineIndex){
	//var attributeDice = new array(7);
	//for (let i = 0; i<7; i++){
	//	attributeDice[i] = new Array (10);
	//}
	var lineage;
	if (lineIndex==1){
		lineage = "Dwarf";
	}
	else if (lineIndex==2){
		lineage = "Demi-Elf";
	}
	else if (lineIndex==3){
		lineage = "Elf";
	}
	else if (lineIndex==4){
		lineage = "Human";
	}
	else if (lineIndex==5){
		lineage = "Kitra";
	}
	else if (lineIndex==6){
		lineage = "Nivolk";
	}
	// Indexes: 1 = Dwarf, 2 = Demi-Elf, 3 = Elf, 4 = Human, 5 = Kitra, 6 = Nivolk
	
	var attributeDice = [
		["STR", "AGL", "END", "BEA", "PER", "INT", "WIL", "LCK", "CHR", "WIS"],
		[4, 2, 5, 2, 3, 3, 4, 2, 2, 3],
		[2, 4, 3, 3, 4, 3, 3, 3, 2, 3],
		[2, 4, 3, 4, 4, 4, 3, 2, 2, 3],
		[3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		[2, 4, 4, 3, 4, 3, 2, 4, 2, 2],
		[2, 3, 3, 3, 3, 3, 3, 4, 3, 4],
	];

	//const potentialDiceSize [] [];
	var potentialDiceSize = [
		["STR", "AGL", "END", "BEA", "PER", "INT", "WIL", "LCK", "CHR", "WIS"],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[6, 4, 4, 4, 4, 6, 6, 4, 4, 6],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
	];
	
	var tableStats = new Array(5);
	for (i=0;i<5;i++){
		tableStats[i] = new Array(10);
	}

	for (i=0; i < 10; i++){
		tableStats[0][i] = attributeDice[0][i];
		tableStats[1][i] = statCreator(attributeDice[lineIndex][i]);
		tableStats[2][i] = tableStats[1][i]+diceThrow(potentialDiceSize[lineIndex][i]);
		tableStats[3][i] = tableStats[1][i];
		if (tableStats[3][i]<=3){
			tableStats[4][i]="-3";
		}
		else if(tableStats[3][i]<=6){
			tableStats[4][i]="-1";
		}
		else if(tableStats[3][i]<=12){
			tableStats[4][i]="0";
		}
		else if(tableStats[3][i]<=15){
			tableStats[4][i]="+1";
		}
		else if(tableStats[3][i]<=18){
			tableStats[4][i]="+3";
		}
		else if(tableStats[3][i]<=21){
			tableStats[4][i]="+4";
		}
		else if(tableStats[3][i]<=24){
			tableStats[4][i]="+5";
		}
		else if(tableStats[3][i]<=27){
			tableStats[4][i]="+6";
		}
		else if(tableStats[3][i]<=30){
			tableStats[4][i]="+7";
		}
		else if(tableStats[3][i]<=33){
			tableStats[4][i]="+8";
		}
		else if(tableStats[3][i]<=36){
			tableStats[4][i]="+9";
		}
		else{
			tableStats[4][i]="+10";
		}
	}

	var t = "<table><caption>"+lineage+"</caption><tr><th>ATTRIBUTE</th><th>BASE LVL</th><th>MAX POT</th><th>--</th><th>CURR LVL</th><th>MOD</th></tr>";
	for (let i = 0; i < 10; i++){
		t += "<tr>";
    	t += "<th>"+tableStats[0][i]+"</td>";
		t += "<td>"+tableStats[1][i]+"</td>";
		t += "<td>"+tableStats[2][i]+"</td>";
		t += "<td>--</td>";
		t += "<td>"+tableStats[3][i]+"</td>";
		t += "<td>"+tableStats[4][i]+"</td>";
		t += "</tr>";
	}
	t+="</table>";
 // document.write(`${t}`); tried this, but it wipes out my css
 document.getElementById("showStats").innerHTML=t;
};

//different things i have tried to get the value from the submit button into the function.
//var lineage = document.querySelector('input[name="Lineage"]:checked').value;
//fillOutStats(lineage);
/*function lineageChoice(){
let lineage = null;
if ($("#dwarf".checked)) {
	lineage = $("#dwarf").value;
}
if ($("#demiElf".checked)) {
	lineage = $("#demiElf").value;
}
if ($("#elf".checked)) {
	lineage = $("#elf").value;
}
if ($("#human".checked)) {
	lineage = $("#human").value;
}
if ($("#kitra".checked)) {
	lineage = $("#kitra").value;
}
if ($("#nivolk".checked)) {
	lineage = $("#nivolk").value;
}
fillOutStats(lineage);
}*/
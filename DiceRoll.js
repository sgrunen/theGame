/*
Name: Sher Grünenberg
Assignment: Project - Midterm Draft
Date: 2023
CSCI 294, Spring 2023
*/
'use strict'

function getOption() {
    var selectElement = document.querySelector('#lineageOption');
    var output = selectElement.value;
	if (output == 0){
		document.getElementById("showStats").innerHTML="pick valid entry";
	}
    else {
		var forSaving = fillOutStats(output);
	}
	return forSaving;
}


function diceThrow(diceSize){
	return Math.floor(Math.random()*diceSize)+1
}

function statCreator(attribute){
	const values = new Array (attribute+1);
	var diceSum = 0;
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
	for (let i=0;i<5;i++){
		tableStats[i] = new Array(10);
	}

	for (let i=0; i < 10; i++){
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

	//calculate secondary characteristics and speed
	var tough = tableStats[3][0] + tableStats[3][2];
	var life = tableStats[3][2]+(0.5*tableStats[3][6]);
	var death = -tableStats[3][6];
	var cruise = 0.5*tableStats[3][2];
	var sprint = cruise+(0.5*tableStats[3][1]);
	if (lineage == "Dwarf" || lineage == "Nivolk"){
		cruise = cruise/2;
		sprint = sprint/2;
	}
	if (lineage == "Kitra"){
		cruise+=4;
		sprint+=4;
	}
	var cruiseMPH = cruise*2*0.225;
	var sprintMPH = sprint*2*.45;

// send info to print to page
	document.getElementById("showStats").innerHTML=t;
	let tp = document.querySelector('#tp');
 tp.innerHTML = `TP: ${tough}`;
	let lp = document.querySelector('#lp');
 lp.innerHTML = `LP: ${(life).toFixed(0)}`;
	let dp = document.querySelector('#dp');
 dp.innerHTML = `DP: ${death}`;
	let spCruise = document.querySelector('#spCruise');
 spCruise.innerHTML = `Cruise: ${(cruise).toFixed(0)} (${cruiseMPH.toFixed(1)} mph)`;
	let spSprint = document.querySelector('#spSprint');
 spSprint.innerHTML = `Sprint: ${(sprint).toFixed(0)} (${sprintMPH.toFixed(1)} mph)`;

 //return tableStats;
};




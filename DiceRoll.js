/*
Name: Sher Grünenberg
Assignment: 
Date: 2023
CSCI 294, Spring 2023
*/
class Lineage {
	constructor(name){
		this.name = name;
	}
}


function diceThrow(diceSize){
	return math.floor(math.random)*diceSize+1
}

function statCreator(attribute){
	const values = new Array (attribute+1);
	diceSum = 0;
	for (int i = 0; i>values.length, i++){
		values[i] = diceThrow(6);
	}
	values.sort(function(a, b){return a - b});
	values.shift();
	for (int i = 0; i>values.length, i++){
		diceSum += values[i];
	}
	
}

function fillOutStats(lineIndex){
	const attributeDice[][];
	// Indexes: 1 = Dwarf, 2 = Demi-Elf, 3 = Elf, 4 = Human, 5 = Kitra, 6 = Nivolk
	attributeDice = [
		{"STR", "AGL", "END", "BEA", "PER", "INT", "WIL", "LCK", "CHR", "WIS"},
		{4, 2, 5, 2, 3, 3, 4, 2, 2, 3},
		{2, 4, 3, 3, 4, 3, 3, 3, 2, 3},
		{2, 4, 3, 4, 4, 4, 3, 2, 2, 3},
		{3, 3, 3, 3, 3, 3, 3, 3, 3, 3},
		{2, 4, 4, 3, 4, 3, 2, 4, 2, 2},
		{2, 3, 3, 3, 3, 3, 3, 4, 3, 4},
	];

	const potentialDiceSize [] [];
	potentialDiceSize = [
		{"STR", "AGL", "END", "BEA", "PER", "INT", "WIL", "LCK", "CHR", "WIS"},
		{4, 4, 4, 4, 4, 4, 4, 4, 4, 4},
		{6, 4, 4, 4, 4, 6, 6, 4, 4, 6},
		{4, 4, 4, 4, 4, 4, 4, 4, 4, 4},
		{6, 6, 6, 6, 6, 6, 6, 6, 6, 6},
		{4, 4, 4, 4, 4, 4, 4, 4, 4, 4},
		{4, 4, 4, 4, 4, 4, 4, 4, 4, 4},
	];
	
	const tableStats [10] [3];
	for (int i=0, i < 10, i++){
		tableStats[i][0] = attributeDice[0][i];
		tableStats[i][1] = statCreator(attributeDice[lineIndex][i]);
		tableStats[i][2] = diceThrow(potentialDiceSize[lineIndex][i]);
	}

	var t = "";
	for (var i = 0; i < 10; i++){
      var tr = "<tr>";
      tr += "<td>"+tableStats[i][0]+"</td>";
      tr += "<td>"+tableStats[i][1]+"</td>";
      tr += "<td>"+tableStats[i][2]+"</td>";
      tr += "</tr>";
      t += tr;
	}
document.getElementById("stats").innerHTML += t;



};

let linage = null;
if ($("#dwarf".checked) {
	linage = $("#dwarf").value;
}
if ($("#demiElf".checked) {
	linage = $("#demiElf").value;
}
if ($("#elf".checked) {
	linage = $("#elf").value;
}
if ($("#human".checked) {
	linage = $("#human").value;
}
if ($("#kitra".checked) {
	linage = $("#kitra").value;
}
if ($("#nivolk".checked) {
	linage = $("#nivolk").value;
}
fillOutStats(linage);

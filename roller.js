/*
Name: Sher Grünenberg
Assignment: Project - Final
Date: 2023
CSCI 294, Spring 2023
*/

'use strict'

const $ = selector => document.querySelector(selector);

function skillCheck(){
  let skillLevel = 0;
  skillLevel = document.getElementById("skillLevel").value;
  if (skillLevel <= 0){
    document.getElementById("invalid").innerHTML="Enter a skill level of 1 or higher.";
  }
  else {
    document.getElementById("invalid").innerHTML=null;
  let modifier = document.getElementById("skillMod").value;
  let t="";

  let diceRoll = diceThrow(20);
  //var diceRoll = 20;
  let target = 20-skillLevel-modifier;
  let result = diceRoll - target;

  if (diceRoll==1){
    t= "Critical Fail!!";
    result*=2;
    document.getElementById('text').style.backgroundColor = 'maroon';
    document.getElementById('text').style.color = 'white'
    document.getElementById('text').style.fontWeight = 'bold';
    document.getElementById('text').style.textAlign = 'center';
  }
  if (diceRoll==20){
    t= "Critical Success!!";
    result*=2;
    document.getElementById('text').style.backgroundColor = 'darkgreen';
    document.getElementById('text').style.color = 'white'
    document.getElementById('text').style.fontWeight = 'bold';
    document.getElementById('text').style.textAlign = 'center';
  }
  if (result >= 0 && result<=5){
    t = "Success on level."
    document.getElementById('text').style.backgroundColor = 'blue';
    document.getElementById('text').style.color = 'white';
    document.getElementById('text').style.fontWeight = 'normal'
    document.getElementById('text').style.textAlign = 'center';
  }
  if (result > 0 && result>5 && diceRoll!=20){
    t = "Success at plus one rank."
    document.getElementById('text').style.backgroundColor = 'green';
    document.getElementById('text').style.color = 'white';
    document.getElementById('text').style.fontWeight = 'normal'
    document.getElementById('text').style.textAlign = 'center';
  }
  if (result < 0 && result >= -5){
    t="Marginal success at minus one rank."
    document.getElementById('text').style.backgroundColor = 'yellow';
    document.getElementById('text').style.color = 'black';
    document.getElementById('text').style.fontWeight = 'normal';
    document.getElementById('text').style.textAlign = 'center';
  }
  if (result < 0 && result < -5 && diceRoll!= 1){
    t="Fail. :("
    document.getElementById('text').style.backgroundColor = 'red';
    document.getElementById('text').style.color = 'white';
    document.getElementById('text').style.fontWeight = 'normal'
    document.getElementById('text').style.textAlign = 'center';
  }
  
  $('#need').innerHTML = `Your target: ${target}`;
  $('#roll').innerHTML = `You rolled: ${diceRoll}`;
  $('#result').innerHTML = `Your result: ${result}`;
  $('#text').innerHTML = `${t}`;
  }
}

function spellCheck(){
  let skillLevel = 0;
  let spellLevel = 0;
  skillLevel = document.getElementById("magicLvl").value;
  spellLevel = document.getElementById("spellLvl").value;
  if (skillLevel <= 0 || spellLevel<=0){
    document.getElementById("invalid2").innerHTML="Enter a sphere level and spell level of 1 or higher.";
  }
  else {
    document.getElementById("invalid2").innerHTML=null;

  let modifier = document.getElementById("spellMod").value;
  let failMod = null;

  if($('#NoCombat').checked){
    failMod = -5;
  }
  if($('#InCombat').checked){
    failMod = -3;
  }
  if($('#MeleeCombat').checked){
    failMod = 0;
  }

  let t="";

  let diceRoll = diceThrow(20);
  //var diceRoll = 20; //used this to check functionality
  let target = 20 - skillLevel - modifier;
  target= parseInt(target) + parseInt(spellLevel); //not sure why it was adding as if text. This fixed it.
  let result = diceRoll - target;
  

  if (diceRoll==1){
    t= "Critical Fail!!";
    result*=2;
    document.getElementById('text2').style.backgroundColor = 'maroon';
    document.getElementById('text2').style.color = 'white';
    document.getElementById('text2').style.fontWeight = 'bold';
    document.getElementById('text2').style.textAlign = 'center';
  }
  if (diceRoll==20){
    t= "Critical Success!!";
    result*=2;    
    document.getElementById('text2').style.backgroundColor = 'darkgreen';
    document.getElementById('text2').style.color = 'white';
    document.getElementById('text2').style.fontWeight = 'bold';
    document.getElementById('text2').style.textAlign = 'center';

  }
  if (result >= 0 && result<=5){
    t = "Success on level.";
    document.getElementById('text2').style.backgroundColor = 'blue';
    document.getElementById('text2').style.color = 'white';
    document.getElementById('text2').style.fontWeight = 'normal';
    document.getElementById('text2').style.textAlign = 'center';
;
  }
  if (result > 0 && result>5 && diceRoll!=20){
    t = "Success at plus one rank.";
    document.getElementById('text2').style.backgroundColor = 'green';
    document.getElementById('text2').style.color = 'white';
    document.getElementById('text2').style.fontWeight = 'normal';
    document.getElementById('text2').style.textAlign = 'center';
  }
  if (failMod != 0){
    if (result < 0 && result >= failMod ){
      t="Marginal success at minus one rank.";
      document.getElementById('text2').style.backgroundColor = 'yellow';
      document.getElementById('text2').style.color = 'black';
      document.getElementById('text2').style.fontWeight = 'normal';
      document.getElementById('text2').style.textAlign = 'center';
    }
    if (result < 0 && result < failMod && diceRoll!=1){
      t="Fail. :(";
      document.getElementById('text2').style.backgroundColor = 'red';
      document.getElementById('text2').style.color = 'white';
      document.getElementById('text2').style.fontWeight = 'normal';
      document.getElementById('text2').style.textAlign = 'center';
    }
  }
  if (failMod==0 && result<0 && diceRoll!=1){
    t="Fail. :(";
    document.getElementById('text2').style.backgroundColor = 'red';
    document.getElementById('text2').style.color = 'white';
    document.getElementById('text2').style.fontWeight = 'normal';
    document.getElementById('text2').style.textAlign = 'center';
  }
  
  document.querySelector('#need2').innerHTML = `Your target: ${target}`;
  document.querySelector('#roll2').innerHTML = `You rolled: ${diceRoll}`;
  document.querySelector('#result2').innerHTML = `Your result: ${result}`;
  document.querySelector('#text2').innerHTML = `${t}`;
  }
}

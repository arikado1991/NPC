﻿class Stats{
		var HP: int;
		var maxHP: int;
		var MP: int;
		var maxMP: int;
		var attack: int;
		var spAttack: int;
		var defense: int;
		var spDefense: int;
		var speed: int;
		var level: int;
		var EXP: int;
		var CappedEXP: int;
		var skillsPrefabs: GameObject[];
		
		function CreateMage(){
			HP = maxHP = 400;
			level = 0;
			attack = 20;
			spAttack = 80;
			defense = 20;
			spDefense = 50;
			CappedEXP = 100;
			EXP = 0;

		}
		
		function Stats(type: String){
			switch(type) {
			case "mage":
				CreateMage();
			default:
				 return;
			}
			
		}
		
		function LvUp(){
			level++;
			maxHP += 20;
			HP = maxHP;
			maxMP += 20;
			MP = maxMP;
			attack += 5;
			EXP = 0;
			CappedEXP *= 1.2;
			GameObject.FindGameObjectWithTag("Player").BroadcastMessage("Lit");
			
		}
		function AddEXP(dExp: int){
			EXP+=dExp;
			if (EXP>CappedEXP) LvUp();
		}
}


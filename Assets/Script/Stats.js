class Playable{
	var baseHP: int;
	var baseDmg: int;
	var hpPerLv: int;
	var dmgPerLv: int;
	var skill: String[];
};

class Warrior extends Playable{
	function Warrior(){
		baseHP = 1000;
		basedmg = 100;
		hpPerLevel = 50;
		dmgPerLevel = 25;
		skills = ['skill1', 'skill2'];
	}
	function skill1(){
		
	}
};
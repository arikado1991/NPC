class Stats{
		var HP: int;
		var maxHP: int;
		var MP: int;
		var maxMP: int;
		var damage: int;
		var speed: int;
		var level: int;
		var EXP: int;
		var CappedEXP: int;
		
		function Stats(){
			HP = 500;
			maxHP = 500;
			damage = 100;
			level = 1;
			CappedEXP = 100;
			EXP = 0;
			
		}
		
		function LvUp(){
			level++;
			maxHP += 20;
			HP = maxHP;
			maxMP += 20;
			MP = maxMP;
			damage += 5;
			EXP = 0;
			CappedEXP *= 1.2;
			GameObject.FindGameObjectWithTag("Player").BroadcastMessage("Lit");
			
		}
		function AddEXP(dExp: int){
			EXP+=dExp;
			if (EXP>CappedEXP) LvUp();
		}
}
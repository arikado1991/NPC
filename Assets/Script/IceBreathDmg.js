#pragma strict
var cooldown: float;
var baseDamage: int;
var damage: int;
function Awake(){cooldown = 0; baseDamage = 10;} 
function SetDamage(dmg: int){
	Debug.Log(dmg);
	damage = (baseDamage*(1+dmg*.1));
	Debug.Log(damage);
}

function OnTriggerStay(c: Collider){
	var target: String;
	if (gameObject.CompareTag("PlayerSkill")) target = "Enemy";
	else if (gameObject.CompareTag("EnemySkill")) target = "Player";
	
	Debug.Log(c.gameObject.tag);
	if (c.gameObject.CompareTag(target) && cooldown <= 0){

		c.gameObject.BroadcastMessage("getHit", damage);
		
	}
}

function Update(){
	if (cooldown <= 0)
		cooldown = .5;
	cooldown -= Time.deltaTime;
	
}
#pragma strict
var cooldown: float;

function Start(){cooldown = 0;} 

function OnTriggerStay(c: Collider){
	var target: String;
	if (gameObject.CompareTag("PlayerSkill")) target = "Enemy";
	else if (gameObject.CompareTag("EnemySkill")) target = "Player";
	
	Debug.Log(c.gameObject.tag);
	if (c.gameObject.CompareTag(target) && cooldown <= 0){
		Debug.Log("FREEZE");
		c.gameObject.BroadcastMessage("getHit", 40);
		
	}
}

function Update(){
	if (cooldown <= 0)
		cooldown = .5;
	cooldown -= Time.deltaTime;
	
}
#pragma strict
var duration: float;
var cooldown: float;
var damage: int;
function Start () {
	cooldown = 0;
	damage = 100;
}


function SetDuration(d: float){
	duration = d;
}

function SetPos(p: Vector3){
	transform.position = p;
}
function Update () {
	if(duration < 0)
		GameObject.Destroy(this.gameObject);
	if (cooldown <= 0) cooldown = 1;
	duration -= Time.deltaTime;
	cooldown -= Time.deltaTime;
	
	
}

function OnTriggerStay(c: Collider){

	{
	
		if (c.gameObject.CompareTag("Enemy") && cooldown <= 0){
			c.gameObject.BroadcastMessage("getHit",damage*1.5);
		}
		
	}
}
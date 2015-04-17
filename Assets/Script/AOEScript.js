#pragma strict
var duration: float;
var cooldown: float;
function Start () {
	cooldown = 0;
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
	duration -= Time.deltaTime;
	cooldown -= Time.deltaTime;	
	
}

function OnTriggerStay(c: Collider){

	{
	
		if (c.gameObject.CompareTag("Enemy")){
			c.gameObject.BroadcastMessage("getHit", 1);
		}
		
	}
}
#pragma strict

var target: GameObject;
var speed;
var respawn: GameObject;
var HP: int;
var dmg: int;
var cooldown: float;
var meleeRange: float;
function Awake () {
	HP = 200;
	target = null;
	speed = .5;
	respawn.transform.position = transform.position;
	dmg = 10;
	cooldown = 0;
	meleeRange = 1.205;

}

function Update () {
	var plr: GameObject = GameObject.FindGameObjectWithTag("Player");
	if (Vector3.Distance(plr.transform.position, transform.position) <= 7){
		Debug.Log("Saw you!");
		target = plr;
	}
	if (target!=null){
		
		transform.LookAt(target.transform);
		transform.rotation*Vector3.forward*Time.deltaTime;
		transform.position += PathFind(target);
	}
	if (cooldown > 0){
		cooldown -= Time.deltaTime;
	}
	else if (target!= null && Vector3.Distance(transform.position, target.transform.position) <= meleeRange) {
		
		
		target.GetComponent(Character).HP -=  dmg;
		cooldown = .3;
	}
}

function PathFind(target: GameObject){
	transform.LookAt(target.transform);
	return transform.rotation*Vector3.forward*Time.deltaTime;
}



function getHit(dmg:int){
	HP -= dmg;
	if (HP <= 0){
		for (var i: int = 0; i < 2; i++)
			GameObject.Instantiate(respawn).transform.position = Vector3(Random.RandomRange(0,5),this.transform.position.y,Random.RandomRange(0,5));
		GameObject.Destroy(this.gameObject);
		}
	else target = GameObject.FindGameObjectWithTag("Player");
}
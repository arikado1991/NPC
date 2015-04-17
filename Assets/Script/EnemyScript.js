#pragma strict

var target: GameObject;
var speed;
var respawn: GameObject;
var HP: int;
var dmg: int;
var cooldown: float;
var meleeRange: float;
var EXPPoint: int;

function Awake () {
	HP = 200;
	target = null;
	speed = .5;
	respawn.transform.position = transform.position;
	dmg = 10;
	cooldown = 0;
	meleeRange = 1.205;
	EXPPoint = 10;

}

function Update () {
	var plr: GameObject = GameObject.FindGameObjectWithTag("Player");
	if (Vector3.Distance(plr.transform.position, transform.position) <= 7){
		Debug.Log("Saw you!");
		target = plr;
	}
	if (NeedToMove()){
		
		transform.LookAt(target.transform);
		transform.rotation*Vector3.forward*Time.deltaTime;
		transform.position += PathFind(target);
	}
	if (cooldown > 0){
		cooldown -= Time.deltaTime;
	}
	else if (target!= null && Vector3.Distance(transform.position, target.transform.position) <= meleeRange) {
		
		
		target.GetComponent(Character).stats.HP -=  dmg;
		cooldown = 1.2;
	}
}

function NeedToMove(){
	if (target == null) return false;
	return (Vector3.Distance(target.transform.position, transform.position) > target.GetComponentInChildren(CapsuleCollider).radius + GetComponent(CapsuleCollider).radius);
}

function PathFind(target: GameObject){
	transform.LookAt(target.transform);
	return transform.rotation*Vector3.forward*Time.deltaTime;
}

	
	function OnMouseDrag(){
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit: RaycastHit;
		
		if (Physics.Raycast(ray,  hit, 100))
		{
				var player: GameObject = GameObject.FindGameObjectWithTag("Player");
				Debug.Log("Hayayaya");
				var dir: Vector3 = Vector3(hit.point.x,0,hit.point.z)-player.transform.position;
				dir = transform.position - dir*(1/dir.magnitude)*GetComponentInChildren(CapsuleCollider).radius;
	
				if (Vector3.Distance(player.transform.position, transform.position) > player.GetComponentInChildren(CapsuleCollider).radius + GetComponent(CapsuleCollider).radius)
					player.BroadcastMessage("SetDestination", dir);
				else player.BroadcastMessage("MeleeAttack", this.gameObject);
			
		}
	}

function getHit(dmg:int){
	HP -= dmg;
	if (HP <= 0){
		for (var i: int = 0; i < 2; i++)
			GameObject.Instantiate(respawn).transform.position = Vector3(Random.RandomRange(0,5),this.transform.position.y,Random.RandomRange(0,5));
		GameObject.FindObjectOfType(Character).stats.AddEXP(EXPPoint);
		GameObject.Destroy(this.gameObject);
		}
	else target = GameObject.FindGameObjectWithTag("Player");
}

function OnMouseOver(){
	if (Input.GetMouseButton(1)){
		cooldown = .5;
	//	anim.SetFloat("Cooldown", .4);

		var player: GameObject = GameObject.FindGameObjectWithTag("Player");
		var dir: Vector3 = transform.position - player.transform.position;
		dir = dir/dir.magnitude;
		player.BroadcastMessage("Shoot", dir);
	}
}
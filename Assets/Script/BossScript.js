#pragma strict
#pragma strict

var target: GameObject;
var speed;
var respawn: GameObject;
var HP: int;
var dmg: int;
var cooldown: float;
var meleeRange: float;
var EXPPoint: int;
var locked = false;
var throwRange = 5;

function Awake () {
	HP = 10000;
	target = null;
	speed = .5;
	respawn.transform.position = transform.position;
	dmg = 100;
	cooldown = 0;
	meleeRange = 1.8;
	EXPPoint = 800;

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
	else if (target!= null && !NeedToMove() && cooldown <= 0) {
		
		
		target.GetComponent(Character).BroadcastMessage("getHit", dmg);
		cooldown = 1.2;
	}
}

function NeedToMove(){
	if (target == null) return false;
	//Debug.Log("Distance");
	//Debug.Log(Vector3.Distance(target.transform.position//+Vector3(0,-target.transform.position.y,0)
	//, transform.position /*+ Vector3(0,-transform.position.y,0)*/)) ;
//	Debug.Log("Radius Sum");
	//Debug.Log(target.GetComponentInChildren(CapsuleCollider).radius + GetComponentInChildren(CapsuleCollider).radius);
	return (Vector3.Distance(target.transform.position//+Vector3(0,-target.transform.position.y,0)
	, transform.position /*+ Vector3(0,-transform.position.y,0)*/)  > target.GetComponentInChildren(CapsuleCollider).radius + GetComponentInChildren(CapsuleCollider).radius);
}

function PathFind(target: GameObject){
	transform.LookAt(target.transform);
	return transform.rotation*Vector3.forward*Time.deltaTime;
}

	
	function OnMouseClick(){
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit: RaycastHit;
		
		if (Physics.Raycast(ray,  hit, 100))
		{
				var player: GameObject = GameObject.FindGameObjectWithTag("Player");
				Debug.Log("Hayayaya");
				var dir: Vector3 = Vector3(hit.point.x,0,hit.point.z)-player.transform.position;
				dir = transform.position - dir*(1/dir.magnitude)*GetComponentInChildren(CapsuleCollider).radius;
	
				if (NeedToMove())
					player.BroadcastMessage("SetDestination", dir);
				else player.BroadcastMessage("MeleeAttack", this.gameObject);
			
		}
	}

function getHit(dmg:int){
	HP -= dmg;
	if (HP <= 0){
		
		
		GameObject.FindObjectOfType(Character).stats.AddEXP(EXPPoint);
		GameObject.FindObjectOfType(Portal).BroadcastMessage("Unlock");
		GameObject.Destroy(this.gameObject);
	}
	else target = GameObject.FindGameObjectWithTag("Player");
}



function OnCollisionTriggerEnter(col: Collider ){
	col.attachedRigidbody.BroadcastMessage("Lock");
}


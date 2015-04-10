#pragma strict

var anim: Animator;
var projectile: GameObject;
var hitpoints = 500;
@HideInInspector
var speed: float;
var turnSpeed: float;

function Start () {
	anim = this.GetComponent(Animator);
	turnSpeed = 2.0;
	speed	  = 0.08;
}
function getHit(dmg: int){
	hitpoints -= dmg;
}


function Update () {
	if (anim.GetFloat("Cooldown") <= 0){
		if (Input.GetKey('z')){
			// attack
			anim.SetBool("Attack", true);
			anim.SetFloat("Cooldown", .3);
		}
		if (Input.GetKey('x')){
			anim.SetFloat("Cooldown", .4);
			var bullet = GameObject.Instantiate(projectile);
			bullet.BroadcastMessage('setDir', Vector3(0,0,1));
			bullet.BroadcastMessage('setPos', this.transform.position);
		}
	}
	// movements stuffs
	Debug.Log(turnSpeed);
	var dir: Vector3;
	if (Input.GetKey("up"))
		dir = Vector3.back;
	if (Input.GetKey("down"))
		dir = Vector3.forward;
	if (Input.GetKey("right"))
		this.transform.RotateAround(Vector3.up, Time.deltaTime*turnSpeed);
	if (Input.GetKey("left"))
		this.transform.RotateAround(Vector3.up, Time.deltaTime*-turnSpeed);
	transform.position += this.transform.rotation* dir*speed;
		
	// make the model stop swinging his arm after the attack is over	
	anim.SetFloat("Cooldown", anim.GetFloat("Cooldown") - Time.deltaTime);
	if (anim.GetFloat("Cooldown") <= 0){
		anim.SetBool("Attack", false);	
		//dealing damage code could be put here
	}
	
	if (hitpoints <= 0) GameObject.Destroy(this.gameObject);
}


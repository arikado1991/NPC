#pragma strict
var cooldown = 0;
var dir: Vector3;
var skill: Skill;
function Start () {
	for (var child: Transform in transform)
		child.tag = "PlayerSkill";
}




function Update () {
	if(Input.GetKeyUp('3'))
	{	
		GameObject.Destroy(this.gameObject);
		return;
	}

	cooldown -= Time.deltaTime;
	transform.forward = GameObject.FindGameObjectWithTag("Player").transform.forward;
	transform.position = GameObject.FindGameObjectWithTag("Player").transform.position + Vector3.up + this.transform.forward * 0.5;
}
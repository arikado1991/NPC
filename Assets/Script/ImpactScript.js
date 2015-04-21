#pragma strict
var duration: float;
var position: Vector3;
function Start () {
	duration = .1;
}

function SetPos(pos: Vector3){
	position = pos;
}

function Update () {
	if (duration < 0) {
		GameObject.Destroy(this.gameObject);
		Debug.Log("happens");
	}
	transform.position = position + Vector3(Random.RandomRange(-0.05f,0.05f),Random.RandomRange(-0.05f,0.05f),Random.RandomRange(-0.05f,0.05f));
	duration -= Time.deltaTime;
	
}
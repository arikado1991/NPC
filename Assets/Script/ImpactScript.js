#pragma strict
var duration: float;
var position: Vector3;
function Start () {
	duration = .1;
}

function SetPos(pos: Vector3){
	this.position = pos;
}

function Update () {
	if (duration < 0) {
		GameObject.Destroy(this.gameObject);
		Debug.Log("happens");
	}
	duration -= Time.deltaTime;
	
}
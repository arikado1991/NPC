#pragma strict
var duration: float;
function Start () {

}

function SetDuration(d: float){
	duration = d;
}

function Update () {
	if (duration <= 0)
		return 0;
	duration = Time.deltaTime;
}
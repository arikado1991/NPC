#pragma strict
var duration: float = 3.0f;
var time: float = 0;
function Start () {
	light.intensity = 0;
}

function Update () {
	if (time > duration)
		GameObject.Destroy(this.gameObject);
	if (time < duration*.5){
		light.intensity += Time.deltaTime*10;
	}
	else light.intensity -= Time.deltaTime*10;
	time += Time.deltaTime;
}
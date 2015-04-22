#pragma strict
var duration: float = 3.0f;
var time: float = 0;
var player: GameObject;
function Start () {
	light.intensity = 0;
	player = GameObject.FindGameObjectWithTag("Player");
}

function Update () {
	if (time > duration){
		GameObject.Destroy(this.gameObject);
		return;
	}
	if (player!=null)
		transform.position = player.transform.position + Vector3(0,.1-player.transform.position.y,0);
	if (time < duration*.5){
		light.intensity += Time.deltaTime*10;
	}
	else light.intensity -= Time.deltaTime*10;
	time += Time.deltaTime;
}
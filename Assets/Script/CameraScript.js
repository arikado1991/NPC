#pragma strict

function Start () {
	
}

function Update () {
	transform.position = GameObject.FindGameObjectWithTag("Player").transform.position + Vector3(0,7.5,-6);
}
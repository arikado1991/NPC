﻿#pragma strict
var speed: float;
var dir: Vector3;
var dmg: int;
function Start () {
	speed  = .2;
}
function setPos(pos: Vector3){
	this.transform.position = pos;
}
function setDmg(dmg: int){
	this.dmg = dmg;
}
function setDir(newDir: Vector3){
	dir = newDir;
}
function Update () {
	transform.position += speed*dir/dir.magnitude;
}

function OnTriggerEnter(c:Collider){

	
	if (c.gameObject.CompareTag("Enemy")){
		GameObject.Instantiate(GameObject.FindObjectOfType(Setting).ImpactPrefab).
			BroadcastMessage("SetPos",transform.position);
		c.gameObject.BroadcastMessage("getHit",dmg);
		Destroy(this.gameObject);
	}
}
#pragma strict
var HP = 200;
function Start () {

}

function Update () {

}

function getHit(dmg:int){
	HP -= dmg;
	if (HP <= 0){GameObject.Destroy(this.gameObject);}
}
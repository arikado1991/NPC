#pragma strict

function Start () {
	gameObject.GetComponent(CapsuleCollider).isTrigger = true;
}

function Unlock(){
	gameObject.GetComponent(CapsuleCollider).isTrigger = true;
}

function OnTriggerEnter(){
	GameObject.FindObjectOfType(UIScript).SetGameState(1);
}

function Update () {

}
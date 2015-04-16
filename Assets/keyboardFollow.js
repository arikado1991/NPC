#pragma strict
var speed: float = 0.1;
var keyboardX : float;
var keyboardY : float;
var keyboardSpeed : float = 20.0;
function Start () {

}

function Update ()
{
	var dir: Vector3;
	if (Input.GetKey("up"))
		dir = Vector3.forward;
	else if (Input.GetKey("down"))
		dir = Vector3.back;
	else if (Input.GetKey("right"))
		dir = Vector3.right;
	else if (Input.GetKey("left"))
		dir = Vector3.left;
	transform.position += dir*speed;		
}
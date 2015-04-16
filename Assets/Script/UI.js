#pragma strict
var player: GameObject;
function Start () {
	player = GameObject.FindGameObjectWithTag("Player");

}

function OnGUI() {
	if 	(player.GetComponent(Character).HP  <= 0)
		GUI.Box(Rect(Screen.width/2-100,Screen.height/2-100, 200,200), "Game over" );
	else
	
		GUI.Box(Rect(0,0, 200,200), "HP: " +  player.GetComponent(Character).HP );
	
}

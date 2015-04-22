#pragma strict
var player: GameObject;
function Start () {
	player = GameObject.FindGameObjectWithTag("Player");

}

function OnGUI() {
	if(player == null) player = player = GameObject.FindGameObjectWithTag("Player");
	if 	(player.GetComponent(Character).HP  <= 0)
		GUI.Box(Rect(Screen.width/2-100,Screen.height/2-100, 200,200), "Game over" );
	else
	{
		var stats: Stats = player.GetComponent(Character).stats;
		GUI.Box(Rect(0,0, 200,200), "HP: " + stats.HP + 
		"/" + stats.maxHP +
		"\nEXP:"+ stats.EXP +"/" + stats.CappedEXP +
		"\nLv:" + stats.level);
	}
}

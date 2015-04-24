#pragma strict
var player: GameObject;
var gameState: int;
function Start () {
	player = GameObject.FindGameObjectWithTag("Player");
	gameState = 0;
}

function SetGameState(s: int){
	Debug.LogError("Should happen");
	Debug.Log(s);
	gameState = s;
	Debug.Log(gameState);
}

function OnGUI() {
	Debug.Log(gameState);
	if(player == null) player = player = GameObject.FindGameObjectWithTag("Player");
	if 	(gameState == -1)
		Application.LoadLevel("GameOver");
	else if (gameState == 1)
		Application.LoadLevel("EndSneakPeak");
	else
	{
		var stats: Stats = player.GetComponent(Character).stats;
		GUI.Box(Rect(0,0, 200,200), "HP: " + stats.HP + 
		"/" + stats.maxHP +
		"\nEXP:"+ stats.EXP +"/" + stats.CappedEXP +
		"\nLv:" + stats.level);
	}
}

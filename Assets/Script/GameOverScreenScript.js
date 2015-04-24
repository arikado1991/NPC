#pragma strict

function Start () {

}

function OnGUI () {
	GUI.Box(Rect(Screen.width/2 - 250, Screen.height/3, 500, Screen.height/3), "Game over");
	GUI.BeginGroup(Rect(Screen.width/2 - 250, Screen.height/3, 500, Screen.height/3));
		if (GUI.Button(Rect(50, Screen.height /6, 100, 20), "Retry"))
			Application.LoadLevel("Scene1");
	GUI.EndGroup();
}
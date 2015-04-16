#pragma strict
//var health : int;
var HPCounter: GUIText;
//health = 2;
//var healthTex:Texture;
//var emptyHealth: Texture;
//var health:float = 1;
var HPBar : GUITexture;
var enemyCurrentHP : float;
var enemyMaxHP : float;
var enemyHPLength : float;
var percentHP : float;
percentHP = 1;

function Start()
{
	enemyMaxHP = 100.0;
	enemyCurrentHP = 100.0;
}

function Update()
{

	//percentHP = enemyCurrentHP/enemyMaxHP;
	Debug.Log(percentHP);
	enemyHPLength = percentHP *100;
	HPBar.guiTexture.pixelInset.width = enemyHPLength;
	var translation : float = Time.deltaTime;
	transform.Translate(0,0, translation);
	Debug.Log(Time.deltaTime);	
}
function OnCollisionEnter(col: Collision)
{
	if(col.gameObject.CompareTag("Player"))
	{
		//Debug.Log("first" + health);
		enemyCurrentHP -= 50;
		Debug.Log("percent: " + percentHP + "total: " + enemyMaxHP + "now: " + enemyCurrentHP);
		//Debug.Log("here" + health);
		if (enemyCurrentHP < 1)
		{
			Destroy(gameObject);
		}
	}
}

	


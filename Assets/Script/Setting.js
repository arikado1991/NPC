#pragma strict
var ImpactPrefab: GameObject;
var SkillPrefabs: GameObject[];
var Sliders: UI.Slider[];
var dmgImage: Texture;

function Awake(){
	Sliders = new UI.Slider[2];
	Sliders[0] = GameObject.Find("HealthSlider").GetComponent(Slider);
	Sliders[1] = GameObject.Find("XPSlider").GetComponent(Slider);
	dmgImage = GameObject.Find('DamageImage') as Texture;
	Debug.Log(Sliders[0] != null);
}
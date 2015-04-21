#pragma strict
enum SkillType		{Melee, Movement, AOE, Projectile, Channelling};
enum AttributeType	{Fire, Ice, Lightning};
enum StatusEffect	{Slow, Burn, Stun, None};
class Skill{
	var skillType: SkillType;
	var attribute: AttributeType;
	var statusEffect: StatusEffect;
	var prefab: GameObject;
	var duration: float;
	var baseDamage: int;
	var range: float;
	var manaCost: int;
	function Skill(type: SkillType, aType: AttributeType, sType: StatusEffect){
		skillType = type;
		attribute = aType;
		statusEffect = sType;
	}
}
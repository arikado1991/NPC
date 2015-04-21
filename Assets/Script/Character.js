﻿#pragma strict

	var stats: Stats;
	var anim: Animator;
	var projectile: GameObject;
	var AOE: GameObject;
	var LvUpLight: GameObject;
	var HP = 500;
	var dmg = 100;
	@HideInInspector
	var speed: float;
	var turnSpeed: float;
	var cooldown: float;
	var attack: boolean;
	var dest: Vector3;
	var locked: boolean;
	var EvolvedForm: GameObject;

	function Start () {
		anim = this.GetComponentInChildren(Animator);
		turnSpeed = 2.0;
		speed	  = 5;
		attack = false;
		dest = transform.position;
		stats= new Stats("mage");
	
		PlayerPrefs.SetInt('locked', 0);
		
	}
	function getHit(dmg: int){
		HP -= dmg;
	}


	function Update () {
		
	
		
		var dir: Vector3;
		if (transform.position != dest){
	
			
			dir = dest - transform.position;
			var translate: Vector3 =  dir*(1.0/dir.magnitude)*speed*Time.deltaTime;
			if (dir.magnitude < translate.magnitude)
				translate = dir;
			transform.position +=  translate;
	
		}
	
		anim.SetFloat("Cooldown", anim.GetFloat("Cooldown") - Time.deltaTime);
		if (anim.GetFloat("Cooldown") <= 0){
			anim.SetBool("Attack", false);	
			//dealing damage code could be put here
		}
		if (cooldown > 0) cooldown -= Time.deltaTime;
		//if (HP <= 0) GameObject.Destroy(this.gameObject);
	}
	
	function SetDestination(dest:Vector3){
		if (Vector3.Distance(dest,this.transform.position) > 0.6f)
		{	
			//Debug.Log(Vector3.Distance(dest,this.transform.position));
			this.dest = dest;
		}
		transform.LookAt(dest);
	}
	function MeleeAttack(enemy: GameObject){
		//if (col.gameObject.CompareTag("Enemy") && attack){
			enemy.BroadcastMessage("getHit", dmg);
			//col.gameObject.transform.position -= col.gameObject.transform.rotation* Vector3.forward*1.2;
			//Debug.Log("kill");
			attack = false;
					
	}
	function CastSkill1(pos:Vector3){
		transform.LookAt(pos + Vector3(0,-pos.y,0));
		if(cooldown > 0) return;
		cooldown = .5;
		anim.SetFloat("Cooldown", .4); 
		var bullet = GameObject.Instantiate(projectile);
		bullet.BroadcastMessage('setDir', pos - transform.position);
		bullet.BroadcastMessage('setPos', transform.position);
		bullet.BroadcastMessage('setDmg', dmg);
	}
	function CastSkill4 (p: Vector3){
		transform.LookAt(p + Vector3(0,-p.y,0));
		var aoe: GameObject = GameObject.Instantiate(AOE);
		aoe.BroadcastMessage("SetDuration", 5.0);
		aoe.BroadcastMessage("SetPos", p );
	}
	
	function Lit(){
		GameObject.Instantiate(LvUpLight).transform.position = transform.position + Vector3.up*.1;
	}
	function Evolve(){
		if (EvolvedForm != null){
			GameObject.Instantiate(EvolvedForm).transform.position = transform.position;
			EvolvedForm = null;
			GameObject.Destroy(this.gameObject);
		}
	}




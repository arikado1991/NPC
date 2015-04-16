﻿#pragma strict

	var anim: Animator;
	var projectile: GameObject;
	var HP = 500;
	var dmg = 100;
	@HideInInspector
	var speed: float;
	var turnSpeed: float;
	var cooldown: float;
	var attack: boolean;

	function Start () {
		anim = this.GetComponent(Animator);
		turnSpeed = 2.0;
		speed	  = 0.08;
		attack = false;
	}
	function getHit(dmg: int){
		HP -= dmg;
	}


	function Update () {
		if (anim.GetFloat("Cooldown") <= 0){
			if (Input.GetKey('z')){
				attack = true;
				cooldown = .8;
				anim.SetBool("Attack", true);
				anim.SetFloat("Cooldown", .3);
				
			}
			if (Input.GetKey('x')){
				cooldown = .5;
				anim.SetFloat("Cooldown", .4);
				var bullet = GameObject.Instantiate(projectile);
				bullet.BroadcastMessage('setDir', this.transform.rotation*-Vector3.forward);
				bullet.BroadcastMessage('setPos', this.transform.position);
				bullet.BroadcastMessage('setDmg', dmg*.8);
			}
		}
		// movements stuffs
		Debug.Log(turnSpeed);
		var dir: Vector3;
		if (Input.GetKey("up"))
			dir = Vector3.back;
		if (Input.GetKey("down"))
			dir = Vector3.forward;
		if (Input.GetKey("right"))
			this.transform.RotateAround(Vector3.up, Time.deltaTime*turnSpeed);
		if (Input.GetKey("left"))
			this.transform.RotateAround(Vector3.up, Time.deltaTime*-turnSpeed);
		transform.position += this.transform.rotation* dir*speed;
			
		// make the model stop swinging his arm after the attack is over	
		anim.SetFloat("Cooldown", anim.GetFloat("Cooldown") - Time.deltaTime);
		if (anim.GetFloat("Cooldown") <= 0){
			anim.SetBool("Attack", false);	
			//dealing damage code could be put here
		}
		if (cooldown > 0) cooldown -= Time.deltaTime;
		//if (HP <= 0) GameObject.Destroy(this.gameObject);
	}
	function OnCollisionEnter(col: Collision){
		if (col.gameObject.CompareTag("Enemy") && attack){
			col.gameObject.BroadcastMessage("getHit", dmg);
			col.gameObject.transform.position -= col.gameObject.transform.rotation* Vector3.forward*1.2;
			Debug.Log("kill");
			attack = false;
		}
			
	}




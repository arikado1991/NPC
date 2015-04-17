#pragma strict

	var anim: Animator;
	var projectile: GameObject;
	var HP = 500;
	var dmg = 100;
	@HideInInspector
	var speed: float;
	var turnSpeed: float;
	var cooldown: float;
	var attack: boolean;
	var dest: Vector3;

	function Start () {
		anim = this.GetComponentInChildren(Animator);
		turnSpeed = 2.0;
		speed	  = 5;
		attack = false;
		dest = transform.position;
	}
	function getHit(dmg: int){
		HP -= dmg;
	}

	function Shoot(dir:Vector3){
		if(cooldown > 0) return;
		cooldown = .5;
		anim.SetFloat("Cooldown", .4);
		var bullet = GameObject.Instantiate(projectile);
		bullet.BroadcastMessage('setDir', dir);
		bullet.BroadcastMessage('setPos', this.transform.position);
		bullet.BroadcastMessage('setDmg', dmg*.8);
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
		
		var dir: Vector3;
		if (transform.position != dest){
	
			
			dir = dest - transform.position;
			var translate: Vector3 =  dir*(1.0/dir.magnitude)*speed*Time.deltaTime;
			if (dir.magnitude < translate.magnitude)
				translate = dir;
			transform.position +=  translate;
		//	
		}
		
		
		// movements stuffs
	
			
		// make the model stop swinging his arm after the attack is over	
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
		//transform.LookAt(dest);
	}
	function MeleeAttack(enemy: GameObject){
		//if (col.gameObject.CompareTag("Enemy") && attack){
			enemy.BroadcastMessage("getHit", dmg);
			//col.gameObject.transform.position -= col.gameObject.transform.rotation* Vector3.forward*1.2;
			//Debug.Log("kill");
			attack = false;
					
	}





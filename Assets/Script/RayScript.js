 /*#pragma strict

//Put this on any clickable objects

function OnMouseOver(): void{
	/*var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit: RaycastHit;
	
	if (Physics.Raycast(ray,  hit, 100))
	{
		var player = GameObject.FindGameObjectWithTag("Player");
		//Debug.LogError(this.CompareTag("Skill"));
		var pos: Vector3 = Vector3(hit.point.x, 0, hit.point.z);
		GameObject.FindGameObjectWithTag("Cursor").transform.position = pos + Vector3.up*.02;
		
		
		/*if (Input.GetMouseButton(0)){
			
			
			
			var dir: Vector3 = pos-player.transform.position;
			if(this.tag == "Enemy" && GetComponent(CapsuleCollider)!= null){ 
				dir = transform.position - dir*(1/dir.magnitude)*GetComponent(CapsuleCollider).radius;
				Debug.Log("happenning");
				if (Vector3.Distance(player.transform.position, transform.position) > player.GetComponentInChildren(CapsuleCollider).radius + GetComponent(CapsuleCollider).radius)
					player.BroadcastMessage("SetDestination", dir);
				else player.BroadcastMessage("MeleeAttack", this.gameObject);
			}	
			else {player.BroadcastMessage("SetDestination", pos); }
		}
		if (Input.GetKeyDown('4'))
			player.BroadcastMessage("CastSkill4", Vector3(hit.point.x, 0, hit.point.z));
		if (Input.GetKey('1'))
			player.BroadcastMessage("CastSkill1", hit.point);
		if (Input.GetKeyDown('3')&&!Input.GetMouseButton(0))
			player.BroadcastMessage("CastSkill3", hit.point);
	}
}*/
#pragma strict


function OnMouseOver(): void{
	var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit: RaycastHit;
	
	if (Physics.Raycast(ray,  hit, 100))
	{
		var player = GameObject.FindGameObjectWithTag("Player");
		if (Input.GetMouseButton(0)){
			var pos: Vector3 = Vector3(hit.point.x, 0, hit.point.z);
			var dir: Vector3 = pos-player.transform.position;
			if(this.CompareTag("Enemy") && GetComponent(CapsuleCollider)!= null){ 
				dir = transform.position - dir*(1/dir.magnitude)*GetComponent(CapsuleCollider).radius;
	
				if (Vector3.Distance(player.transform.position, transform.position) > player.GetComponentInChildren(CapsuleCollider).radius + GetComponent(CapsuleCollider).radius)
					player.BroadcastMessage("SetDestination", dir);
				else player.BroadcastMessage("MeleeAttack", this.gameObject);
			}	
			else player.BroadcastMessage("SetDestination", pos);
		}
		if (Input.GetKeyDown('4'))
			player.BroadcastMessage("CastSkill4", Vector3(hit.point.x, 0, hit.point.z));
		if (Input.GetKey('1'))
			player.BroadcastMessage("CastSkill1", hit.point);
		if (Input.GetKey('3'))
			player.BroadcastMessage("CastSkill1", hit.point);
	}
}
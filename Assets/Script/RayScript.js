#pragma strict


function OnMouseOver(): void{
	var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit: RaycastHit;
	
	if (Physics.Raycast(ray,  hit, 100))
	{
		if (Input.GetMouseButton(0))
			GameObject.FindGameObjectWithTag("Player").BroadcastMessage("SetDestination", Vector3(hit.point.x, 0, hit.point.z));
		if (Input.GetKeyDown('1'))
			GameObject.FindGameObjectWithTag("Player").BroadcastMessage("CastSkill4", Vector3(hit.point.x, 0, hit.point.z));
	}
}
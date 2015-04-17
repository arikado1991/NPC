#pragma strict


function OnMouseDrag(): void{
	var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit: RaycastHit;
	
	if (Physics.Raycast(ray,  hit, 100))
	{
		GameObject.FindGameObjectWithTag("Player").BroadcastMessage("SetDestination", Vector3(hit.point.x, 0, hit.point.z));
	}
}
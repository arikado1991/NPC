#pragma strict

var target : Transform;

var offset = Vector3.up;
var clampToScreen = false;
var clampBorderSize = .05;
var useMainCamera = true;
var cameraToUse : Camera;
var cam : Camera;
var thisTransform : Transform;
var camTransform : Transform;

function Start ()
{
	thisTransform = transform;
	if (useMainCamera)
		cam = Camera.main;
	else
		cam = cameraToUse;
	camTransform = cam.transform;
}

function Update ()
{
	if (clampToScreen)
	{
		var relativePosition = camTransform.InverseTransformPoint(target.position);
		relativePosition.z = Mathf.Max(relativePosition.z, 1.0);
		thisTransform.position = cam.WorldToViewportPoint(camTransform.TransformPoint(relativePosition + offset));
		thisTransform.position = Vector3(Mathf.Clamp(thisTransform.position.x, clampBorderSize, 1.0 - clampBorderSize),
										 Mathf.Clamp(thisTransform.position.y, clampBorderSize, 1.0 - clampBorderSize),
										 thisTransform.position.z);
	}
	else
	{
		thisTransform.position = cam.WorldToViewportPoint(target.position + offset);
	}
}

@script RequireComponent(GUITexture)

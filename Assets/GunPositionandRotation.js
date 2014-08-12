#pragma strict
var PlayerT : Transform;
var PVector : Vector3=Vector3.zero;
function Start () {

}

function Update () {
PVector=Vector3(PlayerT.transform.position.x,PlayerT.transform.position.y,PlayerT.transform.position.z);
transform.localPosition=PVector;
transform.rotation=Camera.main.transform.rotation;
}
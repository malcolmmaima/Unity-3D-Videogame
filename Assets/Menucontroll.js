var Target : Transform;
var Target1 : Transform;
var Target2 : Transform;
var gui : Transform;
private var PlayerXZ : Vector3=Vector3.zero;
private var EnemyXZ : Vector3=Vector3.zero;
private var Damp : float=5.0;
private var main : boolean=true;
function Start(){

}
function Update () {

PlayerXZ = Vector3(Target.transform.position.x,0,Target.transform.position.z);
EnemyXZ = Vector3(transform.position.x,0,transform.position.z);
Erotate();
if(main){
if(Input.GetKeyDown(KeyCode.A)){
main=false;
}
}
if(main){
Target=Target1;
gui.gameObject.SetActive(false);
}
else{
Target=Target2;
gui.gameObject.SetActive(true);
}
}
function Erotate(){

var rotation = Quaternion.LookRotation(PlayerXZ-EnemyXZ);
transform.localRotation = Quaternion.Slerp(transform.rotation, rotation,Time.deltaTime*Damp);
}
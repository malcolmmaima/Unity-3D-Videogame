#pragma strict
var TheDoorway : Transform;
var Doorstate : boolean=false;
var OnCollider : boolean=false;
var DrawRect : boolean=false;
function Update(){
if(OnCollider){
if(Input.GetKeyDown(KeyCode.O)){
OpenClose();
}
}

}
function OnTriggerEnter(){
OnCollider=true;
DrawRect=true;
}
function OnTriggerExit(){
OnCollider=false;
DrawRect=false;
}
function OpenClose(){
DrawRect=false;
TheDoorway.animation.CrossFade("Open");
yield WaitForSeconds(2);
TheDoorway.animation.CrossFade("Close");
}
function OnGUI(){
if(DrawRect){
GUI.Box(Rect(Screen.width*0.5-100,200,200,40),"Press O to Open");
}
}
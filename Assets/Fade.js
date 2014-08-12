#pragma strict
private var fade : float=0;
private var speed : float=1;
private var timer : float=4;
private var waitbool : boolean=false;
function Start () {
renderer.material.color.a=0;

}

function Update () {
transparency();
}
function transparency(){
if(waitbool){
timer-=Time.deltaTime;
renderer.material.color.a=fade;
fade+=speed*Time.deltaTime;
if(timer<=0){
Application.LoadLevel(1);
}
}
else{
yield WaitForSeconds(0.5
);
waitbool=true;
}
}
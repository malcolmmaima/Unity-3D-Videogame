#pragma strict
private var damage : float;
private var enableddzoom : boolean=false;
private var dzoom : boolean=false;
private var activezoom : int=0;
private var z1 : int=0;
private var z2 : int=0;
private var guiz1 : int=0;
private var guiz2 : int=0;
var crosshair : Transform;
var currentweapon : int;
var lightweapon : Transform;
var machinegun : Transform;
var sniper : Transform;
var heavy : Transform;
var TheRocket : Rigidbody;
var RocketLauncher : Transform;
var guicam : Camera;
var rocketbend : Transform;

var smallweaponvector1 : Vector3;
var smallweaponvector2 : Vector3;

var bazookavector1 : Vector3;
var bazookavector2 : Vector3;

var mchgunweaponvector1 : Vector3;
var mchgunweaponvector2 : Vector3;

var snipervector1 : Vector3;
var snipervector2 : Vector3;

var SniperZtexture : Texture2D;
var BazookaZtexture : Texture2D;

var crossh1 : Texture2D;
var crossh2 : Texture2D;
var none : Texture2D;

var guneffect : Transform;
var guneffect2 : Transform;
var guneffect3 : Transform;

var gunbfx : Transform;
var gunbfx2 : Transform;
var gunbfx3 : Transform;
private var cooldown : float;
private var cooldownr : float;
private var zoom : boolean=false;
function Start () {
Screen.lockCursor=true;
currentweapon=0;
lightweapon.localPosition=smallweaponvector1;
machinegun.localPosition=mchgunweaponvector1;
sniper.localPosition=snipervector1;
}
function Update () {
cooldownr-=Time.deltaTime;
if(Input.GetKeyDown(KeyCode.Alpha1)){
currentweapon=0;
}
if(Input.GetKeyDown(KeyCode.Alpha2)){
currentweapon=1;
}
if(Input.GetKeyDown(KeyCode.Alpha3)){
currentweapon=2;
}
if(Input.GetKeyDown(KeyCode.Alpha4)){
currentweapon=3;
}
switch(currentweapon){
case 0:
z1=60;
z2=40;
guiz1=60;
guiz2=40;
lightweapon.gameObject.SetActive(true);
machinegun.gameObject.SetActive(false);
sniper.gameObject.SetActive(false);
heavy.gameObject.SetActive(false);
cooldown=0.4;
damage=20;
enableddzoom=false;
break;
case 1:
z1=60;
z2=40;
guiz1=60;
guiz2=40;
lightweapon.gameObject.SetActive(false);
machinegun.gameObject.SetActive(true);
sniper.gameObject.SetActive(false);
heavy.gameObject.SetActive(false);
cooldown=0.1;
damage=10;
enableddzoom=false;
break;
case 2:
lightweapon.gameObject.SetActive(false);
machinegun.gameObject.SetActive(false);
sniper.gameObject.SetActive(true);
heavy.gameObject.SetActive(false);
cooldown=1.0;
enableddzoom=true;
damage=100;
break;
case 3:
lightweapon.gameObject.SetActive(false);
machinegun.gameObject.SetActive(false);
sniper.gameObject.SetActive(false);
heavy.gameObject.SetActive(true);
cooldown=4.0;
enableddzoom=true;
damage=0;
break;
}
//shootig variables
var hit : RaycastHit;
var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5, Screen.height*0.5, 0));
if(Input.GetButton("Fire1")){
if(Physics.Raycast(ray,hit,1000)&&cooldownr<=0){
gameObject.animation.Stop();
if(currentweapon==0){
var guneffectclone=Instantiate(guneffect,hit.point,Quaternion.LookRotation(hit.normal));
animation.Play("ShootingSMGun");
hit.transform.SendMessage("TheDamage",damage,SendMessageOptions.DontRequireReceiver);
Destroy(guneffectclone.gameObject,0.1);
smgunfx();
}
if(currentweapon==1){
var guneffectclone2=Instantiate(guneffect2,hit.point,Quaternion.LookRotation(hit.normal));
animation.Play("ShootingMachineGun");
hit.transform.SendMessage("TheDamage",damage,SendMessageOptions.DontRequireReceiver);
Destroy(guneffectclone2.gameObject,0.1);
smgunfx2();
}
if(currentweapon==2){
var guneffectclone3=Instantiate(guneffect3,hit.point,Quaternion.LookRotation(hit.normal));
animation.Play("ShootingSniper");
hit.transform.SendMessage("TheDamage",damage,SendMessageOptions.DontRequireReceiver);
Destroy(guneffectclone3.gameObject,0.15);
smgunfx3();
}
if(currentweapon==3){
var RClone=Instantiate(TheRocket,rocketbend.position,rocketbend.rotation)as Rigidbody;
RClone.velocity=transform.TransformDirection(Vector3(0,0,80));
animation.Play("ShootingSniper");
}
cooldownr=cooldown;
}
}
if(Input.GetKeyDown(KeyCode.Z)){
//not enabled
if(!enableddzoom){
if(zoom){
zoom=false;
}
else{
zoom=true;
animation.Stop();
}
}
//enabled
else{
if(dzoom){
dzoom=false;
zoom=false;
}
else{
if(!zoom){
dzoom=false;
zoom=true;
}
else{
dzoom=true;
zoom=true;
}
}
}
}
if(zoom){
activezoom=1;
}
else{
activezoom=0;
}
if(zoom){
switch(currentweapon){
case 0:
guicam.cullingMask=1<<10|1<<9|1<<8;

lightweapon.localPosition=smallweaponvector2;
animation.CrossFade("Animationaiming1");
crosshair.guiTexture.texture=none;
break;
case 1:
guicam.cullingMask=1<<10|1<<9|1<<8;
machinegun.localPosition=mchgunweaponvector2;
animation.CrossFade("Animationaiming1");
crosshair.guiTexture.texture=none;
break;
case 2:
sniper.localPosition=snipervector2;
animation.CrossFade("Animationaiming1");
crosshair.guiTexture.texture=SniperZtexture;
guicam.cullingMask=0<<10|1<<9|0<<8;
crosshair.guiTexture.pixelInset.width=1800;
crosshair.guiTexture.pixelInset.height=1100;
crosshair.guiTexture.pixelInset.center.x=0.0;
crosshair.guiTexture.pixelInset.center.y=0.0;
break;
case 3:
RocketLauncher.localPosition=bazookavector2;
crosshair.guiTexture.texture=BazookaZtexture;
guicam.cullingMask=0<<10|1<<9|0<<8;
crosshair.guiTexture.pixelInset.width=1800;
crosshair.guiTexture.pixelInset.height=1100;
crosshair.guiTexture.pixelInset.center.x=0.0;
crosshair.guiTexture.pixelInset.center.y=0.0;
break;
}
}
else{
switch(currentweapon){
case 0:

guicam.cullingMask=1<<10|1<<9|1<<8;
lightweapon.localPosition=smallweaponvector1;
crosshair.guiTexture.texture=crossh1;
crosshair.guiTexture.pixelInset.width=40;
crosshair.guiTexture.pixelInset.height=40;
crosshair.guiTexture.pixelInset.center.x=0.0;
crosshair.guiTexture.pixelInset.center.y=0.0;
break;
case 1:
guicam.cullingMask=1<<10|1<<9|1<<8;
machinegun.localPosition=mchgunweaponvector1;
crosshair.guiTexture.texture=crossh2;
crosshair.guiTexture.pixelInset.width=256;
crosshair.guiTexture.pixelInset.height=256;
crosshair.guiTexture.pixelInset.center.x=0.0;
crosshair.guiTexture.pixelInset.center.y=0.0;
break;
case 2:
sniper.localPosition=snipervector1;
crosshair.guiTexture.texture=none;
guicam.cullingMask=1<<10|1<<9|1<<8;
break;
case 3:
RocketLauncher.localPosition=bazookavector1;
crosshair.guiTexture.texture=none;
guicam.cullingMask=1<<10|1<<9|1<<8;
break;
}
}
//dzoomval
if(enableddzoom){
if(!dzoom){
z1=60;
z2=20;
guiz1=60;
guiz2=40;
}
else{
z1=60;
z2=10;
guiz1=60;
guiz2=40;
}
}
else{
dzoom=false;
}

guicam.fieldOfView=Mathf.Lerp(guiz1,guiz2,activezoom);
Camera.main.fieldOfView=Mathf.Lerp(z1,z2,activezoom);
}

function smgunfx(){
gunbfx.gameObject.SetActive(true);
yield WaitForSeconds(0.02);
gunbfx.gameObject.SetActive(false);
}
function smgunfx2(){
gunbfx2.gameObject.SetActive(true);
yield WaitForSeconds(0.02);
gunbfx2.gameObject.SetActive(false);
}
function smgunfx3(){
gunbfx3.gameObject.SetActive(true);
yield WaitForSeconds(0.02);
gunbfx3.gameObject.SetActive(false);
}
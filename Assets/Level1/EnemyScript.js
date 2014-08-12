var ShotSpawn : Transform;
var distance;
var Player : Transform;
var Distancecheck = 25.0;
var AttackRange = 5.0;
var EnemySpeed = 4.0;
var Damp = 10.0;  
var Health=100; 
var Enemycc : CharacterController;
var gunhold : Transform;
var playergo : GameObject;
var gamec : GameObject;
private var gravity : float;
private var PlayerXZ : Vector3=Vector3.zero;
private var EnemyXZ : Vector3=Vector3.zero;
private var movetodirection : Vector3=Vector3.zero;
private var Shootingrate : float=6.0;
function Start(){
gamec=GameObject.FindGameObjectWithTag("GameController");
playergo=GameObject.FindGameObjectWithTag("Player");
Player=playergo.transform;
}
function Update () {

Shootingrate-=Time.deltaTime;
gravity=Physics.gravity.y;
PlayerXZ = Vector3(Player.transform.position.x,0,Player.transform.position.z);
EnemyXZ = Vector3(transform.position.x,0,transform.position.z);
Distance = Vector3.Distance(Player.position, transform.position);
Erotate();
movetodirection.y += gravity*Time.deltaTime;
Enemycc.Move(movetodirection*Time.deltaTime);	
	if(Distance > Distancecheck){
		gotoplayer();
	}
	var hit : RaycastHit;

	if(Distance < Distancecheck){
	if(Shootingrate<=0){
	if(Physics.Raycast(ShotSpawn.transform.position,ShotSpawn.transform.TransformDirection(Vector3.forward),hit)){
	Debug.Log("Shot");
	Shootingrate=3.0;

	}
	}
	}
	if(Health<=0){
		EnemyDeath();
		
	}

Enemycc.Move(movetodirection*Time.deltaTime);
}
function TheDamage(damage : int){
Health-=damage;
}
function gotoplayer(){
movetodirection=transform.forward;
movetodirection.y += gravity*Time.deltaTime;
movetodirection*=EnemySpeed;
	
}
function EnemyDeath(){
gamec.transform.SendMessage("Destroyed",1,SendMessageOptions.DontRequireReceiver);
Destroy(gameObject);
}
function Erotate(){

var rotation = Quaternion.LookRotation(PlayerXZ-EnemyXZ);
transform.localRotation = Quaternion.Slerp(transform.rotation, rotation,Time.deltaTime*Damp);
var rotationgun = Quaternion.LookRotation(Player.position-gunhold.position);
gunhold.transform.rotation = Quaternion.Slerp(gunhold.transform.rotation, rotationgun,Time.deltaTime*Damp);
}
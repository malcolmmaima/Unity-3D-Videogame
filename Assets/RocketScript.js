#pragma strict
var explosion : Transform;
function Update(){

}
function OnCollisionEnter(collision : Collision){
var contactp : ContactPoint = collision.contacts[0];
var rotation : Quaternion = Quaternion.FromToRotation(Vector3.up,contactp.normal);
var position : Vector3=contactp.point;
var explosionclone=Instantiate(explosion, position, rotation);
Destroy(explosionclone.gameObject,0.8);
Destroy(gameObject);
}
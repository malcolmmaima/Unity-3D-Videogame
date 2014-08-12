using UnityEngine;
using System.Collections;
[RequireComponent(typeof(CharacterController))]
public class CharacterMovement : MonoBehaviour {
	public float movementspeed = 20.0f;
	public float mousesensitivity = 10.0f;

	public float mouseYmax = 60.0f;
	public float mouseYmin = -60.0f;

	public float jumpSpeed = 20.0f;

	float rotY=0;
	float rotX=0;

	float FSpeed = 0.0f;
	float Hspeed = 0.0f;

	float verticalVelocity = 0;
	// Use this for initialization
	void Update(){
		CharacterController pill = GetComponent<CharacterController> ();
		rotX = Input.GetAxis ("Mouse X")*mousesensitivity;

		//left and right rotation
		transform.Rotate (0,rotX,0);
		//up and down rotation
		rotY-=Input.GetAxis ("Mouse Y")*mousesensitivity;
		rotY=Mathf.Clamp(rotY,mouseYmin,mouseYmax);
		Camera.main.transform.localRotation = Quaternion.Euler(rotY,0,0);

	

		//Physics.gravity es 9.81 por default, se puede camibiar con el vector en como le afecta a nuestro personaje

						if (pill.isGrounded) {
						if(Input.GetKey(KeyCode.LeftShift)){
								movementspeed = 40.0f;
								movementspeed = 40.0f;

								}	
								else{
								movementspeed = 20.0f;
								movementspeed = 20.0f;
								}
								if (Input.GetButtonDown ("Jump")) {
										verticalVelocity = jumpSpeed;
								}

						} 
						else {
			if(Input.GetKey(KeyCode.LeftShift)){
				movementspeed = 20.0f;
				movementspeed = 20.0f;

			}	
			else{
				movementspeed = 10.0f;
				movementspeed = 10.0f;
			}
						}

		FSpeed = Input.GetAxis ("Vertical") * movementspeed;
		Hspeed = Input.GetAxis ("Horizontal") * movementspeed;


		verticalVelocity +=Physics.gravity.y*Time.deltaTime;
		Vector3 spd = new Vector3(Hspeed,verticalVelocity,FSpeed);
		spd = transform.rotation * spd;

		pill.Move(spd * Time.deltaTime);


	}
}

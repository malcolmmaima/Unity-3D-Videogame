#pragma strict

	var crouchRatio : float = 0.3f;
	var transitiontoCrouchSec : float = 0.2f;
	var crouchingVelocity : float;
	var currentCrouchRatio : float = 1.0;
	var oiginalCrouchLScaleY : float;
	var crouchLScaleY : float;

	function Awake() {
		currentCrouchRatio = 1.0f;
		oiginalCrouchLScaleY = transform.localScale.y;
		crouchLScaleY = transform.localScale.y*crouchRatio;
	}
	
	// Update is called once per frame
	function Update() {
		transform.localScale.y = Mathf.Lerp (crouchLScaleY,oiginalCrouchLScaleY,currentCrouchRatio);
		if(Input.GetKey(KeyCode.C)){
			currentCrouchRatio=Mathf.SmoothDamp(currentCrouchRatio,0,crouchingVelocity,transitiontoCrouchSec);
		}
		if(!Input.GetKey(KeyCode.C)){
			currentCrouchRatio=Mathf.SmoothDamp(currentCrouchRatio,1,crouchingVelocity,transitiontoCrouchSec);
		}
		}
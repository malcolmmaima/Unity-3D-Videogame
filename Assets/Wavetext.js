#pragma strict
var wave : int=0;
function Start () {
}

function Update () {
wave=(GameObject.FindGameObjectWithTag("GameController").GetComponent(WaveControl).currentwave);

guiText.text="Wave: "+wave.ToString();
}
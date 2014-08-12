#pragma strict
var Texture1 : Texture2D;
var Texture2 : Texture2D;
function OnMouseEnter(){
guiTexture.texture=Texture2;

}
function OnMouseExit(){
guiTexture.texture=Texture1;
}
function OnMouseDown(){
Application.Quit();
}
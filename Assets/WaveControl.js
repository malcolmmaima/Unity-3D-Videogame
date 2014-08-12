#pragma strict
var currentwave : int=0;
var newspawn : int=0;
var enemiesspawned : int=0;
var nextspawn : int=0;
var enemiesonnextwave : int=0;
var enemiesalive : int=0;
var spawntimer : float=10.0;
var setenemies : int=0;
var spawneneabledtos : boolean=false;
var attack : boolean=true;
var spawn1 : Transform;
var spawn2 : Transform;
var spawn3 : Transform;
var spawn4 : Transform;
var enemy1 : Transform;
var enemy2 : Transform;
var enemyselect : int=0;

function Update () {
spawntimer-=Time.deltaTime;
//segundoenemigo
game();
}
function game(){
if(currentwave<2){
spawneneabledtos=false;
}
if(currentwave>=2){
spawneneabledtos=true;
}


if(attack && enemiesalive==0 && enemiesspawned==newspawn){
currentwave++;
attack=false;
enemiesspawned=0;
enemiesonnextwave=newspawn+5;
yield WaitForSeconds(10);
newspawn=enemiesonnextwave;
attack=true;
}

if(enemiesspawned<newspawn && attack && spawntimer<=0){
nextspawn=Random.Range(1,5);
}
if(nextspawn!=0){
switch(nextspawn){
case 1:
nextspawn=0;
if(!spawneneabledtos){
Instantiate(enemy1,spawn1.position,spawn1.rotation);
enemiesspawned++;
enemiesalive++;
spawntimer=10.0;
}


else{

enemyselect=Random.Range(1,3);
if(enemyselect==1){
Instantiate(enemy1,spawn1.position,spawn1.rotation);
enemiesspawned++;
enemiesalive++;
spawntimer=10.0;
}

	else{
	Instantiate(enemy2,spawn1.position,spawn1.rotation);
	enemiesspawned++;
	enemiesalive++;
	spawntimer=10.0;
	}

}
break;
case 2:
nextspawn=0;
if(!spawneneabledtos){
Instantiate(enemy1,spawn2.position,spawn2.rotation);
enemiesspawned++;
enemiesalive++;
spawntimer=10.0;
}


else{

enemyselect=Random.Range(1,3);
if(enemyselect==1){
Instantiate(enemy1,spawn2.position,spawn2.rotation);
enemiesspawned++;
enemiesalive++;
spawntimer=10.0;
}

	else{
	Instantiate(enemy2,spawn2.position,spawn2.rotation);
	enemiesspawned++;
	enemiesalive++;
	spawntimer=10.0;
	}

}

break;
case 3:
nextspawn=0;
if(!spawneneabledtos){
Instantiate(enemy1,spawn3.position,spawn3.rotation);
enemiesspawned++;
enemiesalive++;
spawntimer=10.0;
}


else{

enemyselect=Random.Range(1,3);
if(enemyselect==1){
Instantiate(enemy1,spawn3.position,spawn3.rotation);
enemiesspawned++;
enemiesalive++;
spawntimer=10.0;
}

	else{
	Instantiate(enemy2,spawn3.position,spawn3.rotation);
	enemiesspawned++;
	enemiesalive++;
	spawntimer=10.0;
	}

}
break;
case 4:
nextspawn=0;
if(!spawneneabledtos){
Instantiate(enemy1,spawn4.position,spawn4.rotation);
enemiesspawned++;
enemiesalive++;
spawntimer=10.0;
}


else{

enemyselect=Random.Range(1,3);
if(enemyselect==1){
Instantiate(enemy1,spawn4.position,spawn4.rotation);
enemiesspawned++;
enemiesalive++;
spawntimer=10.0;
}

	else{
	Instantiate(enemy2,spawn4.position,spawn4.rotation);
	enemiesspawned++;
	enemiesalive++;
	spawntimer=10.0;
	}

}

break;
}
}
}
function sendwave(wave : int){
wave=currentwave;
}
function Destroyed(destroy : int){
enemiesalive-=destroy;
}
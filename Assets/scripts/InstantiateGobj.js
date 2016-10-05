#pragma strict

public var gObj: GameObject;

function Start () {
	InvokeRepeating ("CreateRandom", 0, 1);
}

function CreateRandom() { // create a random number bewteen 2 values

	var x: float;
	var y: float;

	x=Random.Range(-7.0, 7.0);

	y= 6;

	Instantiate( gObj, Vector3(x, y, 0), Quaternion.identity); //what object will we clone, where will it start, and do we want it to rotate

}
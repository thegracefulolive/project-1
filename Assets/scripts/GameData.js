﻿#pragma strict

static var numMissed: int = 0;
static var numGrabbed: int = 0;

static function DisplayScore (){

Debug.Log("Grabbed: " + numGrabbed + "Missed: " + numMissed);
}

function OnGUI ()
{
GUI.contentColor = Color.black;
GUI.Label(Rect(200,200,200,100), "Grabbed: " + numGrabbed + "   Missed: " + numMissed);
}

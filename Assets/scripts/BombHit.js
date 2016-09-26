#pragma strict

function OnCollisionEnter2D (other: Collision2D){
if(other.gameObject.CompareTag("Ground")){

		GameData.numGrabbed++;
		GameData.DisplayScore();
		Destroy(gameObject);

	}
}


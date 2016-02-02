var challenge = require('../robots.js');
var markerHit = false;


while(!challenge.checkCollision()){
  if(challenge.robotOne.onMarker()){
    markerHit = true;
  }else{
    if(markerHit){
      challenge.robotOne.moveTwo('left')
    }else{
      challenge.robotOne.moveOne('left')
    }
  }
}

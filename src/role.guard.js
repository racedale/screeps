
export default {

  /** @param {Creep} creep **/
  run(creep) {

    let movePos = new RoomPosition(45, 25, 'W32S39'); //East side of Graham's room
    let target = creep.pos.findClosestByRange(Game.HOSTILE_CREEPS);
    // console.log(target.owner.username);

  	if(target && creep.hits > creep.hitsMax - 200 /* no more attack */) {
      //   creep.moveTo(target);
      //   creep.attack(target);
  	} else {
  		creep.moveTo(movePos);
  	}
  }
}

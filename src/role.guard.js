
export default {

  /** @param {Creep} creep **/
  run(creep) {

    let movePos = new RoomPosition(45, 25, 'W33S39');
    let target = creep.pos.findClosestByRange(Game.HOSTILE_CREEPS);
  	if(target && creep.hits > creep.hitsMax - 500 /* no more attack */) {
  		creep.moveTo(target);
  		creep.attack(target);
  	} else {
  		creep.moveTo(movePos);
  	}
  }
}


export default {

  /** @param {Creep} creep **/
  run(creep) {

    var target = creep.pos.findNearest(Game.HOSTILE_CREEPS);
  	if(target && creep.hits > creep.hitsMax - 500 /* no more attack */) {
  		creep.moveTo(target);
  		creep.attack(target);
  	} else {
  		creep.moveTo(Game.spawns.Spawn1);
  	}
  }
}

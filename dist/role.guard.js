'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /** @param {Creep} creep **/

  run: function run(creep) {

    var movePos = new RoomPosition(45, 25, 'W33S39');
    var target = creep.pos.findClosestByRange(Game.HOSTILE_CREEPS);
    if (target && creep.hits > creep.hitsMax - 500 /* no more attack */) {
        creep.moveTo(target);
        creep.attack(target);
      } else {
      creep.moveTo(movePos);
    }
  }
};
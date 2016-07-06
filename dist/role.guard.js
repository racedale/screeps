"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /** @param {Creep} creep **/

  run: function run(creep) {

    var movePos = new RoomPosition(45, 25, 'W32S39'); //East side of Graham's room
    var target = creep.pos.findClosestByRange(Game.HOSTILE_CREEPS);

    if (target && creep.hits > creep.hitsMax - 200 /* no more attack */) {
        if (target.owner.username != "Graham") {
          creep.moveTo(target);
          creep.attack(target);
        }
      } else {
      creep.moveTo(movePos);
    }
  }
};
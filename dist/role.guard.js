"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /** @param {Creep} creep **/

  run: function run(creep) {

    var target = creep.pos.findClosestByRange(Game.HOSTILE_CREEPS);
    if (target && creep.hits > creep.hitsMax - 500 /* no more attack */) {
        creep.moveTo(target);
        creep.attack(target);
      } else {
      creep.moveTo(Game.spawns.spawn1);
    }
  }
};
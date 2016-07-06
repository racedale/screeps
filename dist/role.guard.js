"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /** @param {Creep} creep **/

  run: function run(creep) {

    if (creep.memory.attacking && creep.carry.energy == 0) {
      creep.memory.attacking = false;
    }
    if (!creep.memory.attacking && creep.carry.energy == creep.carryCapacity) {
      creep.memory.attacking = true;
    }

    if (creep.memory.attacking) {} else {}
  }
};
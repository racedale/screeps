"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /** @param {Creep} creep **/

  run: function run(creep) {
    // if (creep.memory.working == true && creep.carry.energy == 0) {
    //   creep.memory.working = false;
    // } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
    //   creep.memory.working = true;
    // }
    var container = creep.room.find(FIND_MY_STRUCTURES, { filter: function filter(structure) {
        return structure.structureType == STRUCTURE_CONTAINER && structure.energy > 0;
      } });

    if (creep.carry.energy < creep.carryCapacity) {

      var source = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function filter(structure) {
          return structure.structureType == STRUCTURE_CONTAINER && structure.store > 0;
        }
      });
      console.log(source);

      if (source == undefined) {
        var _source = creep.pos.findClosestByRange(FIND_SOURCES);
      }

      if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    } else {
      var targets = creep.room.find(FIND_MY_STRUCTURES, {
        filter: function filter(structure) {
          return (structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_CONTAINER) && structure.energy < structure.energyCapacity;
        }
      });
      if (targets.length > 0) {
        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
      }
    }
  }
};
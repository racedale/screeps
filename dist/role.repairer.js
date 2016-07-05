'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _role = require('role.builder');

var _role2 = _interopRequireDefault(_role);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  /** @param {Creep} creep **/

  run: function run(creep) {

    if (creep.memory.repairing && creep.carry.energy == 0) {
      creep.memory.repairing = false;
    }
    if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
      creep.memory.repairing = true;
    }

    if (creep.memory.repairing) {
      var repairSite = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function filter(structure) {
          return structure.hits < structure.hitsMax / 1.5 && structure.structureType != STRUCTURE_WALL;
        }
      });
      if (repairSite) {
        if (creep.repair(repairSite) == ERR_NOT_IN_RANGE) {
          creep.moveTo(repairSite);
        }
      } else {
        _role2.default.run(creep);
      }
    } else {
      var source = creep.pos.findClosestByRange(FIND_SOURCES);
      if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    }
  }
};
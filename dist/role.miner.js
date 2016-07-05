'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _role = require('role.harvester');

var _role2 = _interopRequireDefault(_role);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  /** @param {Creep} creep **/

  run: function run(creep) {
    // if (creep.memory.working == true && creep.carry.energy == 0) {
    //   creep.memory.working = false;
    // } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
    //   creep.memory.working = true;
    // }

    if (creep.carry.energy < creep.carryCapacity) {
      var source = creep.pos.findClosestByRange(FIND_SOURCES);
      if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    } else {
      var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function filter(structure) {
          return structure.structureType == STRUCTURE_CONTAINER; //TODO: check if full
        }
      });

      if (targets) {
        if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets);
        }
      } else {
        _role2.default.run(creep);
      }
    }
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _role = require('role.upgrader');

var _role2 = _interopRequireDefault(_role);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  /** @param {Creep} creep **/

  run: function run(creep) {

    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
    }

    if (creep.memory.building) {
      var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
      if (constructionSite) {
        if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
          creep.moveTo(constructionSite);
        }
      } else {
        _role2.default.run(creep);
      }
    } else {
      // let source = creep.pos.findClosestByRange(FIND_SOURCES);
      // if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
      //   creep.moveTo(source);
      // }
      var source = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function filter(structure) {
          return structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 0;
        }
      });
      if (source.transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    }
  }
};
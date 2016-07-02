'use strict';

var _role = require('role.harvester');

var _role2 = _interopRequireDefault(_role);

var _role3 = require('role.upgrader');

var _role4 = _interopRequireDefault(_role3);

var _role5 = require('role.builder');

var _role6 = _interopRequireDefault(_role5);

var _role7 = require('role.repairer');

var _role8 = _interopRequireDefault(_role7);

var _spawnManager = require('spawnManager');

var _spawnManager2 = _interopRequireDefault(_spawnManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// global.Cache = new Cache();
module.exports.loop = function () {

  if (Game.spawns.spawn1.spawning === null) {
    // Clean memory for expired creeps
    for (var name in Memory.creeps) {
      if (Game.creeps[name] == undefined) {
        delete Memory.creeps[name];
      }
    }

    // Only run spawnManager if there is enough energy
    if (Game.spawns.spawn1.energy >= 300) {
      (0, _spawnManager2.default)();
      // var structures = _.filter(Game.structures, (structure) => structure.structureType == 'STRUCTURE_EXTENSION' );
      // console.log(structures.energy);
    }
  }

  for (var _name in Game.creeps) {
    var creep = Game.creeps[_name];
    if (creep.memory.role == 'harvester') {
      _role2.default.run(creep);
    }
    if (creep.memory.role == 'upgrader') {
      _role4.default.run(creep);
    }
    if (creep.memory.role == 'builder') {
      _role6.default.run(creep);
    }
    if (creep.memory.role == 'repairer') {
      _role8.default.run(creep);
    }
    // console.log("For loop:", Game.getUsedCPU());
  }

  // Tower code from tutorial
  var towerStructure = Game.getObjectById('TOWER_ID');
  if (towerStructure) {
    var closestDamagedStructure = towerStructure.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: function filter(structure) {
        return structure.hits < structure.hitsMax;
      }
    });
    if (closestDamagedStructure) {
      towerStructure.repair(closestDamagedStructure);
    }

    var closestHostile = towerStructure.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (closestHostile) {
      towerStructure.attack(closestHostile);
    }
  }
};
// import tower from 'tower';
// import Cache from 'Cache';
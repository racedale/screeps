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
    var totalEnergy = 0;
    var extensions = _.filter(Game.structures, function (structure) {
      return structure.structureType == STRUCTURE_EXTENSION;
    });
    for (var i = 0; i < extensions.length; i++) {
      totalEnergy += extensions[i].energy;
    }
    totalEnergy += Game.spawns.spawn1.energy;
    if (Game.spawns.Spawn1.room.energyCapacityAvailable >= 350) {
      (0, _spawnManager2.default)();
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
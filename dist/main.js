'use strict';

var _run = require('run');

var _run2 = _interopRequireDefault(_run);

var _spawnManager = require('spawnManager');

var _spawnManager2 = _interopRequireDefault(_spawnManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// global.Cache = new Cache();
// import Cache from 'Cache';
module.exports.loop = function () {
  (0, _run2.default)();

  var maxCreeps = 22;
  if (Game.spawns.spawn1.room.find(FIND_MY_CREEPS).length < maxCreeps) {
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
      if (Game.spawns.spawn1.room.energyAvailable >= 350) {
        (0, _spawnManager2.default)();
      }
    }
  }

  // Tower code from tutorial
  var towerStructure = Game.getObjectById('5779768fd8653260453a6c1b');
  if (towerStructure) {
    var closestDamagedStructure = towerStructure.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: function filter(structure) {
        return structure.hits < structure.hitsMax;
      }
    });
    if (closestDamagedStructure && towerStructure.energy > towerStructure.energyCapacity / 2) {
      towerStructure.repair(closestDamagedStructure);
    }

    var closestHostile = towerStructure.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (closestHostile) {
      towerStructure.attack(closestHostile);
    }
  }
};
// import tower from 'tower';
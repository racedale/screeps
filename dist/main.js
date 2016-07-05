'use strict';

var _run = require('run');

var _run2 = _interopRequireDefault(_run);

var _tower = require('tower');

var _tower2 = _interopRequireDefault(_tower);

var _spawnManager = require('spawnManager');

var _spawnManager2 = _interopRequireDefault(_spawnManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// global.Cache = new Cache();
module.exports.loop = function () {
  var numberofHarvesters = 0;
  var numberofUpgraders = 0;
  var numberofBuilders = 0;
  var numberofRepairers = 0;

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
  (0, _tower2.default)();
}; // import Cache from 'Cache';
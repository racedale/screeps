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

var _tower = require('tower');

var _tower2 = _interopRequireDefault(_tower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// global.Cache = new Cache();
// import Cache from 'Cache';
module.exports.loop = function () {
  var numberofHarvesters = 0;
  var numberofMiners = 0;
  var numberofUpgraders = 0;
  var numberofBuilders = 0;
  var numberofRepairers = 0;

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == 'harvester') {
      _role2.default.run(creep);
      ++numberofHarvesters;
    }
    if (creep.memory.role == 'miner') {
      _role2.default.run(creep);
      ++numberofMiners;
    }
    if (creep.memory.role == 'upgrader') {
      _role4.default.run(creep);
      ++numberofUpgraders;
    }
    if (creep.memory.role == 'builder') {
      _role6.default.run(creep);
      ++numberofBuilders;
    }
    if (creep.memory.role == 'repairer') {
      _role8.default.run(creep);
      ++numberofRepairers;
    }
    // console.log("For loop:", Game.getUsedCPU());
  }

  var maxCreeps = 22;
  if (Game.spawns.spawn1.room.find(FIND_MY_CREEPS).length < maxCreeps) {
    if (Game.spawns.spawn1.spawning === null) {
      // Clean memory for expired creeps
      for (var _name in Memory.creeps) {
        if (Game.creeps[_name] == undefined) {
          delete Memory.creeps[_name];
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
        (0, _spawnManager2.default)(numberofHarvesters, numberofMiners, numberofUpgraders, numberofBuilders, numberofRepairers);
      }
    }
  }

  // Tower code from tutorial
  (0, _tower2.default)();
};
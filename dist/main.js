'use strict';

var _role = require('role.harvester');

var _role2 = _interopRequireDefault(_role);

var _role3 = require('role.upgrader');

var _role4 = _interopRequireDefault(_role3);

var _role5 = require('role.builder');

var _role6 = _interopRequireDefault(_role5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import tower from 'tower';

module.exports.loop = function () {
  var harvesters = _.filter(Game.creeps, function (creep) {
    return creep.memory.role == 'harvester';
  });
  var upgraders = _.filter(Game.creeps, function (creep) {
    return creep.memory.role == 'upgrader';
  });
  var builders = _.filter(Game.creeps, function (creep) {
    return creep.memory.role == 'builder';
  });
  var healers = [];
  var guards = [];

  // Clean memory for expired creeps
  for (var name in Memory.creeps) {
    if (Game.creeps[name] == undefined) {
      delete Memory.creeps[name];
    }
  }

  // Auto create creeps if there is enough energy and not enough creeps
  if (Game.spawns.spawn1.energy >= 300) {
    if (harvesters.length < 5) {
      // TODO: add auto naming system for creeps
      Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], null, { role: 'harvester' });
      console.log('Spawning new harvester');
    } else if (upgraders.length < 4) {
      Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE, MOVE], null, { role: 'upgrader' });
      console.log('Spawning new upgrader');
    } else if (builders.length < 4) {
      Game.spawns.spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], null, { role: 'builder' });
      console.log('Spawning new builder');
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
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builders');
  var healers = [];
  var guards = [];

  if (Game.spawns.spawn1.energy >= 300) {
    if(harvesters.length < 4) {
        Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE], null, {role: 'harvester'});
        console.log('Spawning new harvester');
    } else if (upgraders.length < 2) {
       Game.spawns.spawn1.createCreep([WORK, WORK, CARRY, MOVE], null, {role: 'upgrader'});
       console.log('Spawning new upgrader');
    } else if (builders.length < 2) {
       Game.spawns.spawn1.createCreep([WORK, WORK, CARRY, MOVE], null, {role: 'builder'});
       console.log('Spawning new builder');
    }
  }

  var tower = Game.getObjectById('TOWER_ID');
  if(tower) {
    var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax
    });
    if(closestDamagedStructure) {
        tower.repair(closestDamagedStructure);
    }

    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if(closestHostile) {
        tower.attack(closestHostile);
    }
  }

  for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    if(creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
    }
    if(creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
    }
    if(creep.memory.role == 'builder') {
        roleBuilder.run(creep);
    }
  }
}

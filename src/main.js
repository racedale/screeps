let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');

module.exports.loop = function () {
  let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  let healers = [];
  let guards = [];

// Clean memory for expired creeps
  for (let name in Memory.creeps) {
    if (Game.creeps[name] == undefined) {
      delete Memory.creeps[name];
    }
  }

// Auto create creeps if there is enough energy and not enough creeps
  if (Game.spawns.spawn1.energy >= 300) {
    if(harvesters.length < 4) {
      // TODO: add auto naming system for creeps
        Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], null, {role: 'harvester'});
        console.log('Spawning new harvester');
    } else if (upgraders.length < 3) {
       Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE, MOVE], null, {role: 'upgrader'});
       console.log('Spawning new upgrader');
    } else if (builders.length < 3) {
       Game.spawns.spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], null, {role: 'builder'});
       console.log('Spawning new builder');
    }
  }

  let tower = Game.getObjectById('TOWER_ID');
  if(tower) {
    let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax
    });
    if(closestDamagedStructure) {
        tower.repair(closestDamagedStructure);
    }

    let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if(closestHostile) {
        tower.attack(closestHostile);
    }
  }

  for(let name in Game.creeps) {
    let creep = Game.creeps[name];
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

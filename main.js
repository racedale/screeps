var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
  var harvesters = [];
  var guards = [];
  var builders = [];
  var healers = [];

  if(harvesters.length < 4) {
      Game.spawns.spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
  } else {

      if ((guards.length + healers.length) / harvesters.length < 0.8) {
          if (guards.length < 1) {
              Game.spawns.spawn1.createCreep([Game.TOUGH, Game.MOVE, Game.ATTACK, Game.MOVE, Game.ATTACK], null, {role: 'guard'});
          } else if (healers.length / guards.length < 0.5) {
              Game.spawns.spawn1.createCreep([Game.HEAL, Game.MOVE], null, {role: 'healer'});
          } else {
              Game.spawns.spawn1.createCreep([Game.TOUGH, Game.MOVE, Game.ATTACK, Game.MOVE, Game.ATTACK], null, {role: 'guard'});
          }
      } else {
          Game.spawns.spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
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

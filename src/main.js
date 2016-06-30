import roleHarvester from 'role.harvester';
import roleUpgrader from 'role.upgrader';
import roleBuilder from 'role.builder';
// import tower from 'tower';
import spawnManager from 'spawnManager';


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
spawnManager();

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

// Tower code from tutorial
const towerStructure = Game.getObjectById('TOWER_ID');
if(towerStructure) {
 let closestDamagedStructure = towerStructure.pos.findClosestByRange(FIND_STRUCTURES, {
   filter: (structure) => structure.hits < structure.hitsMax
 });
 if(closestDamagedStructure) {
   towerStructure.repair(closestDamagedStructure);
 }

 let closestHostile = towerStructure.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
 if(closestHostile) {
   towerStructure.attack(closestHostile);
 }
}
}

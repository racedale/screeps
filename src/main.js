// import Cache from 'Cache';
import run from 'run';
import roleHarvester from 'role.harvester';
import roleUpgrader from 'role.upgrader';
import roleBuilder from 'role.builder';
import roleRepairer from 'role.repairer';
// import tower from 'tower';
import spawnManager from 'spawnManager';



// global.Cache = new Cache();
module.exports.loop = function () {
  run();

  let maxCreeps = 22;
  if (Game.spawns.spawn1.room.find(FIND_MY_CREEPS).length < maxCreeps) {
    if (Game.spawns.spawn1.spawning === null) {
      // Clean memory for expired creeps
      for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
          delete Memory.creeps[name];
        }
      }

      // Only run spawnManager if there is enough energy
      var totalEnergy = 0;
      var extensions = _.filter(Game.structures, (structure) => structure.structureType == STRUCTURE_EXTENSION);
      for (var i = 0; i < extensions.length; i++) {
        totalEnergy += extensions[i].energy;
      }
      totalEnergy += Game.spawns.spawn1.energy;
      if (Game.spawns.spawn1.room.energyAvailable >= 350) {
        spawnManager();
      }
    }
  }

  // Tower code from tutorial
  const towerStructure = Game.getObjectById('5779768fd8653260453a6c1b');
  if(towerStructure) {
   let closestDamagedStructure = towerStructure.pos.findClosestByRange(FIND_STRUCTURES,
     {
     filter: (structure) => structure.hits < structure.hitsMax
     });
   if(closestDamagedStructure && (towerStructure.energy > towerStructure.energyCapacity/2)) {
     towerStructure.repair(closestDamagedStructure);
   }

   let closestHostile = towerStructure.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
   if(closestHostile) {
     towerStructure.attack(closestHostile);
   }
  }
}

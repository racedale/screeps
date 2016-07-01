// import Cache from 'Cache';
import roleHarvester from 'role.harvester';
import roleUpgrader from 'role.upgrader';
import roleBuilder from 'role.builder';
// import tower from 'tower';
import spawnManager from 'spawnManager';


// global.Cache = new Cache();
module.exports.loop = function () {

  if (Game.spawns.spawn1.spawning === null) {
    // Clean memory for expired creeps
    for (let name in Memory.creeps) {
      if (Game.creeps[name] == undefined) {
        delete Memory.creeps[name];
      }
    }

    // Only run spawnManager if there is enough energy
    if (Game.spawns.spawn1.energy >= 300) {
      spawnManager();
      // var structures = _.filter(Game.structures, (structure) => structure.structureType == 'STRUCTURE_EXTENSION' );
      // console.log(structures.energy);
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
    // console.log("For loop:", Game.getUsedCPU());
  }

  // Tower code from tutorial
  const towerStructure = Game.getObjectById('TOWER_ID');
  if(towerStructure) {
   let closestDamagedStructure = towerStructure.pos.findClosestByRange(FIND_STRUCTURES,
     {
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

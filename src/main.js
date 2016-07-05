// import Cache from 'Cache';
import roleHarvester from 'role.harvester';
import roleUpgrader from 'role.upgrader';
import roleBuilder from 'role.builder';
import roleRepairer from 'role.repairer';
import spawnManager from 'spawnManager';
import tower from 'tower';



// global.Cache = new Cache();
module.exports.loop = function () {
  var numberofHarvesters = 0;
  var numberofUpgraders = 0;
  var numberofBuilders = 0;
  var numberofRepairers = 0;

  for(let name in Game.creeps) {
    let creep = Game.creeps[name];
    if(creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
      ++numberofHarvesters;
    }
    if(creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
      ++numberofUpgraders;
    }
    if(creep.memory.role == 'builder') {
      roleBuilder.run(creep);
      ++numberofBuilders;
    }
    if (creep.memory.role == 'repairer') {
      roleRepairer.run(creep);
      ++numberofRepairers;
    }
    // console.log("For loop:", Game.getUsedCPU());
  }

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
        spawnManager(numberofHarvesters, numberofUpgraders, numberofBuilders, numberofRepairers);
      }
    }
  }

  // Tower code from tutorial
  tower();
}

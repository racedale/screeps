// import Cache from 'Cache';
import roleHarvester from 'role.harvester';
import roleMiner from 'role.miner';
import roleUpgrader from 'role.upgrader';
import roleBuilder from 'role.builder';
import roleRepairer from 'role.repairer';
import roleGuard from 'role.guard';
import spawnManager from 'spawnManager';
import tower from 'tower';



// global.Cache = new Cache();
module.exports.loop = function () {
  var numberofHarvesters = 0;
  var numberofMiners = 0;
  var numberofUpgraders = 0;
  var numberofBuilders = 0;
  var numberofRepairers = 0;
  var numberofGuards = 0;

  for(let name in Game.creeps) {
    let creep = Game.creeps[name];
    if(creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
      ++numberofHarvesters;
    }
    if(creep.memory.role == 'miner') {
      roleMiner.run(creep);
      ++numberofMiners;
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
    if (creep.memory.role == 'guard') {
      roleGuard.run(creep);
      ++numberofGuards;
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
        spawnManager(numberofHarvesters,
          numberofMiners,
          numberofUpgraders,
          numberofBuilders,
          numberofRepairers,
          numberofGuards);
      }
    }
  }

  // Tower code from tutorial
  tower();
}

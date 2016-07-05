// import Cache from 'Cache';
import run from 'run';
import tower from 'tower';
import spawnManager from 'spawnManager';



// global.Cache = new Cache();
module.exports.loop = function () {
  var numberofHarvesters = 0;
  var numberofUpgraders = 0;
  var numberofBuilders = 0;
  var numberofRepairers = 0;

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
  tower();
}

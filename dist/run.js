'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;
var numberofHarvesters = 0;
var numberofUpgraders = 0;
var numberofBuilders = 0;
var numberofRepairers = 0;

function run() {

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
      ++numberOfHarvesters;
    }
    if (creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
      ++numberofUpgraders;
    }
    if (creep.memory.role == 'builder') {
      roleBuilder.run(creep);
      ++numberofBuilders;
    }
    if (creep.memory.role == 'repairer') {
      roleRepairer.run(creep);
      ++numberofRepairers;
    }
    // console.log("For loop:", Game.getUsedCPU());
  }
}
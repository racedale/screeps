import roleHarvester from 'role.harvester';
import roleUpgrader from 'role.upgrader';
import roleBuilder from 'role.builder';
import roleRepairer from 'role.repairer';

var numberofHarvesters = 0;
var numberofUpgraders = 0;
var numberofBuilders = 0;
var numberofRepairers = 0;

export default function run() {

  for(let name in Game.creeps) {
    let creep = Game.creeps[name];
    if(creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
      ++numberOfHarvesters;
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
}

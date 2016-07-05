import roleHarvester from 'role.harvester';

export default {

 /** @param {Creep} creep **/
  run(creep) {
    // if (creep.memory.working == true && creep.carry.energy == 0) {
    //   creep.memory.working = false;
    // } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
    //   creep.memory.working = true;
    // }

   if(creep.carry.energy < creep.carryCapacity) {
     let source = creep.pos.findClosestByRange(FIND_SOURCES);
     if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
       creep.moveTo(source);
     }
   }
   else {
     let targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
       filter: (structure) => {
         return structure.structureType == STRUCTURE_CONTAINER;//TODO: check if full
       }
     });
     console.log(targets);
     if(targets) {
       if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
         creep.moveTo(targets);
       }
     }
     else {
       roleHarvester.run(creep);

     }
   }
  }
}

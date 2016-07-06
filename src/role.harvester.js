
export default {

 /** @param {Creep} creep **/
  run(creep) {
    // if (creep.memory.working == true && creep.carry.energy == 0) {
    //   creep.memory.working = false;
    // } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
    //   creep.memory.working = true;
    // }
    let container = creep.room.find(FIND_MY_STRUCTURES, { filter: (structure) => structure.structureType == STRUCTURE_CONTAINER && structure.energy > 0});

  if(creep.carry.energy < creep.carryCapacity) {
    //
    // let source = creep.pos.findClosestByRange(FIND_SOURCES);
    //
    // if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
    //    creep.moveTo(source);
    //  }
     let source = creep.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: (structure) => {
        return structure.structureType == STRUCTURE_CONTAINER && source.store[RESOURCE_ENERGY] > 0;
      }
     })

     if(source.transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
       creep.moveTo(source);
     }
   }
   else {
     let targets = creep.room.find(FIND_MY_STRUCTURES, {
       filter: (structure) => {
         return (
           structure.structureType == STRUCTURE_TOWER ||
           structure.structureType == STRUCTURE_EXTENSION ||
           structure.structureType == STRUCTURE_SPAWN
         ) && structure.energy < structure.energyCapacity;
       }
     });
     if(targets.length > 0) {
       if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
         creep.moveTo(targets[0]);
       }
     }
   }
  }
}

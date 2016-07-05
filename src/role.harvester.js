
export default {

 /** @param {Creep} creep **/
  run(creep) {

    let container = creep.room.find(FIND_MY_STRUCTURES, { filter: (structure) => structure.structureType == STRUCTURE_CONTAINER && structure.energy > 0});

  if(creep.carry.energy < creep.carryCapacity) {

    let source = creep.pos.findClosestByRange(FIND_STRUCTURES, {
     filter: (structure) => {
       return structure.structureType == STRUCTURE_CONTAINER; //TODO: check for energy
     }
    })

    if (source == undefined) {
      let source = creep.pos.findClosestByRange(FIND_SOURCES);
    }

    if(source[0].transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
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

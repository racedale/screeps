
export default {

 /** @param {Creep} creep **/
 run(creep) {

   if(creep.memory.upgrading && creep.carry.energy == 0) {
     creep.memory.upgrading = false;
   }
   if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
     creep.memory.upgrading = true;
   }

   if(creep.memory.upgrading) {
     if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
       creep.moveTo(creep.room.controller);
     }
   }
   else {
     let source = creep.pos.findClosestByRange(FIND_SOURCES);
     if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
       creep.moveTo(source);
     }
   }
 }
};

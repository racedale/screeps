import roleBuilder from 'role.builder';

export default {

  /** @param {Creep} creep **/
  run(creep) {

    if(creep.memory.repairing && creep.carry.energy == 0) {
      creep.memory.repairing = false;
    }
    if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
      creep.memory.repairing = true;
    }

    if(creep.memory.repairing) {
      let repairSite = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => (structure.hits < structure.hitsMax / 1.5) && structure.structureType != STRUCTURE_WALL
      });
      if(repairSite) {
        if(creep.repair(repairSite) == ERR_NOT_IN_RANGE) {
          creep.moveTo(repairSite);
        }
      } else {
        roleBuilder.run(creep);
      }
    }
    else {
      let source = creep.pos.findClosestByRange(FIND_SOURCES);
      if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    }
  }
}

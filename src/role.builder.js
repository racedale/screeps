import roleUpgrader from 'role.upgrader';

export default {

  /** @param {Creep} creep **/
  run(creep) {

    if(creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
    }
    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
    }

    if(creep.memory.building) {
      let constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
      if(constructionSite) {
        if(creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
          creep.moveTo(constructionSite);
        }
      } else {
        roleUpgrader.run(creep);
      }
    }
    else {
      // let source = creep.pos.findClosestByRange(FIND_SOURCES);
      // if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
      //   creep.moveTo(source);
      // }
      let source = creep.pos.findClosestByRange(FIND_STRUCTURES, {
       filter: (structure) => {
         return structure.structureType == STRUCTURE_CONTAINER; //TODO: check for energy
       }
      })
      if(source.transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    }
  }
}

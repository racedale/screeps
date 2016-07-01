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
      let targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
      if(targets.length) {
        if(creep.build(targets) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets);
        }
      } else {
        roleUpgrader.run(creep);
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

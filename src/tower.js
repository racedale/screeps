//
// const tower = {
//
//   let towerStructure = Game.getObjectById('TOWER_ID');
//   if(towerStructure) {
//    let closestDamagedStructure = towerStructure.pos.findClosestByRange(FIND_STRUCTURES, {
//      filter: (structure) => structure.hits < structure.hitsMax
//    });
//    if(closestDamagedStructure) {
//      towerStructure.repair(closestDamagedStructure);
//    }
//
//    let closestHostile = towerStructure.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
//    if(closestHostile) {
//      towerStructure.attack(closestHostile);
//    }
//   }
// };
//
// module.exports = tower;

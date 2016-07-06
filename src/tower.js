
export default function tower() {
  // Tower code from tutorial
  var towerStructure = Game.getObjectById('5779768fd8653260453a6c1b');
  if (towerStructure) {
    var closestDamagedStructure = towerStructure.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: function filter(structure) {
        return structure.hits < structure.hitsMax / 4;
      }
    });
    if (closestDamagedStructure && towerStructure.energy > towerStructure.energyCapacity / 2) {
      towerStructure.repair(closestDamagedStructure);
    }

    var closestHostile = towerStructure.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (closestHostile) {
      towerStructure.attack(closestHostile);
    }
  }
}

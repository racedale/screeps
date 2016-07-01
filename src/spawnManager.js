let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
let healers = [];
let guards = [];
let name = undefined;

let spawnManager = function() {

  // choose spawns
  // let maxCreeps = 20;
  // if (Game.creeps.length < maxCreeps) {
    let lowest = Math.min(harvesters.length, builders.length, upgraders.length);

      let creepRole = "harvester";
      name = creepRole + harvesters.length;
      Game.spawns.spawn1.createCreep(
        [WORK, WORK, CARRY, MOVE, MOVE],
        null,
        {role: creepRole}
      );
      console.log('Spawning new harvester');
    } else if (lowest === builders.length) {
      let creepRole = "builder";
      name = creepRole + builders.length;
      Game.spawns.spawn1.createCreep(
        [WORK, CARRY, CARRY, MOVE, MOVE],
        null,
        {role: creepRole}
      );
      console.log('Spawning new builder');
    } else if(lowest === upgraders.length) {
      let creepRole = "upgrader";
      name = creepRole + upgraders.length;
      Game.spawns.spawn1.createCreep(
        [WORK, CARRY, MOVE, MOVE, MOVE],
        null,
        {role: creepRole}
      );
      console.log('Spawning new upgrader');
    }
  // }

    //TODO: alternate spawning extra creeps
    //  Game.spawns.spawn1.createCreep(
    //    [WORK, CARRY, CARRY, MOVE, MOVE],
    //    null,
    //    {role: 'upgrader'}
    //  );
    //  Game.spawns.spawn1.createCreep(
    //    [ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE],
    //    null,
    //    {role: 'guards'}
    //  );
  // console.log("Spawn CPU: ", Game.cpu.getUsed());
}

module.exports = spawnManager;

let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
let healers = [];
let guards = [];
let name = undefined;

let spawnManager = function() {

  if(harvesters.length < 6) {
    // TODO: add auto naming system for creeps
    name = "harvester" + harvesters.length;
    Game.spawns.spawn1.createCreep(
      name,
      {role: 'harvester'}
    );
    console.log('Spawning new harvester');
  }
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, MOVE, MOVE],
      null,
      {role: 'builder'}
    );
    console.log('Spawning new builder');
  }
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, CARRY, MOVE, MOVE, MOVE],
      null,
      {role: 'upgrader'}
    );
    console.log('Spawning new upgrader');
  } else {
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
  }
  console.log("Harvesters: ", harvesters.length, "Upgraders: ", upgraders.length, "Builders: ", builders.length);
  // console.log("Spawn CPU: ", Game.cpu.getUsed());
}

module.exports = spawnManager;

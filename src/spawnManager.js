let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
let healers = [];
let guards = [];

let spawnManager = function() {
  // Auto create creeps if there is enough energy and not enough creeps

  if(harvesters.length < 8) {
    // TODO: add auto naming system for creeps
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, CARRY, MOVE, MOVE],
      null,
      {role: 'harvester'}
    );
    console.log('Spawning new harvester');
  } else if (upgraders.length < 4) {
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, CARRY, MOVE, MOVE, MOVE],
      null,
      {role: 'upgrader'}
    );
    console.log('Spawning new upgrader');
  } else if (builders.length < 4) {
    Game.spawns.spawn1.createCreep(
      [WORK, WORK, CARRY, MOVE, MOVE],
      null,
      {role: 'builder'}
    );
    console.log('Spawning new builder');
  }
  else {
     Game.spawns.spawn1.createCreep(
       [WORK, CARRY, CARRY, MOVE],
       null,
       {role: 'harvester'}
     );
    //  console.log('Spawning new harvester');
    //  Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, {role: 'upgrader'});
    //  console.log('Spawning new upgrader');
    //  Game.spawns.spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], null, {role: 'builder'});
    //  console.log('Spawning new builder');
  }


}

module.exports = spawnManager;

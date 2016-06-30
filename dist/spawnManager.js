'use strict';

var harvesters = _.filter(Game.creeps, function (creep) {
  return creep.memory.role == 'harvester';
});
var upgraders = _.filter(Game.creeps, function (creep) {
  return creep.memory.role == 'upgrader';
});
var builders = _.filter(Game.creeps, function (creep) {
  return creep.memory.role == 'builder';
});
var healers = [];
var guards = [];

var spawnManager = function spawnManager() {

  if (harvesters.length < 7) {
    // TODO: add auto naming system for creeps
    Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], null, { role: 'harvester' });
    console.log('Spawning new harvester');
  } else if (builders.length < 3) {
    Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, { role: 'builder' });
    console.log('Spawning new builder');
  } else if (upgraders.length < 6) {
    Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE, MOVE], null, { role: 'upgrader' });
    console.log('Spawning new upgrader');
  } else {
    Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], null, { role: 'upgrader' });
    //  Game.spawns.spawn1.createCreep(
    //    [ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE],
    //    null,
    //    {role: 'guards'}
    //  );
  }
  console.log("Harvesters: ", harvesters.length, "Upgraders: ", upgraders.length, "Builders: ", builders.length);
  // console.log("Spawn CPU: ", Game.cpu.getUsed());
};

module.exports = spawnManager;
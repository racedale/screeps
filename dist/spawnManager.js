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
var name = undefined;

var spawnManager = function spawnManager() {

  if (harvesters.length < 6) {
    // TODO: add auto naming system for creeps
    name = "harvester" + harvesters.length;
    Game.spawns.spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], name, { role: 'harvester' });
    console.log('Spawning new harvester');
  } else if (builders.length < 2) {
    name = "builder" + builders.length;

    Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], name, { role: 'builder' });
    console.log('Spawning new builder');
  } else if (upgraders.length < 5) {
    name = "upgrader" + upgraders.length;

    Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE, MOVE], name, { role: 'upgrader' });
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
};

module.exports = spawnManager;
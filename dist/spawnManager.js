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

  // choose spawns
  // let maxCreeps = 20;
  // if (Game.creeps.length < maxCreeps) {
  var lowest = Math.min(harvesters.length, builders.length, upgraders.length);

  if (lowest === harvesters.length && harvesters.length < 8) {
    var creepRole = "harvester";
    name = creepRole + harvesters.length;
    Game.spawns.spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], null, { role: creepRole });
    console.log('Spawning new harvester');
  } else if (lowest === builders.length) {
    var _creepRole = "builder";
    name = _creepRole + builders.length;
    Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], null, { role: _creepRole });
    console.log('Spawning new builder');
  } else if (lowest === upgraders.length) {
    var _creepRole2 = "upgrader";
    name = _creepRole2 + upgraders.length;
    Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE, MOVE], null, { role: _creepRole2 });
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
};

module.exports = spawnManager;
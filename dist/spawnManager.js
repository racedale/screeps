'use strict';

var harvesters = _.sum(Game.creeps, function (creep) {
  return creep.memory.role == 'harvester';
});
var upgraders = _.sum(Game.creeps, function (creep) {
  return creep.memory.role == 'upgrader';
});
var repairers = _.sum(Game.creeps, function (creep) {
  return creep.memory.role == 'repairer';
});
var builders = _.sum(Game.creeps, function (creep) {
  return creep.memory.role == 'builder';
});
var healers = [];
var guards = [];
var name = undefined;
var lowest = 0;

var spawnManager = function spawnManager() {

  // choose spawns
  // let maxCreeps = 20;
  // if (Game.creeps.length < maxCreeps) {
  if (harvesters == undefined) {
    harvesters = 0;
  }
  if (upgraders == undefined) {
    builders = 0;
  }
  if (repairers == undefined) {
    repairers = 0;
  }
  if (builders == undefined) {
    builders = 0;
  }

  var lowest = Math.min(harvesters, builders, upgraders, repairers);

  if (lowest === harvesters && harvesters < 8) {
    var creepRole = "harvester";
    name = creepRole + harvesters;
    Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, { role: creepRole });
    console.log('Spawning new harvester');
  } else if (lowest === builders && builders < 6) {
    var _creepRole = "builder";
    name = _creepRole + builders;
    Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, { role: _creepRole });
    console.log('Spawning new builder');
  } else if (lowest === repairers && repairers < 3) {
    var _creepRole2 = "repairer";
    name = _creepRole2 + repairers;
    Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, { role: _creepRole2 });
    console.log('Spawning new repairer');
  } else if (lowest === upgraders && upgraders < 6) {
    var _creepRole3 = "upgrader";
    name = _creepRole3 + upgraders;
    Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, { role: _creepRole3 });
    console.log('Spawning new upgrader');
  }
  // }
  console.log("Harvesters: ", harvesters, "Upgraders: ", upgraders, "Repairers: ", repairers, "Builders: ", builders);
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
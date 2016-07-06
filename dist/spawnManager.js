"use strict";

//
// let harvesters = _.sum(Game.creeps, (creep) => creep.memory.role == 'harvester');
// let upgraders = _.sum(Game.creeps, (creep) => creep.memory.role == 'upgrader');
// let repairers = _.sum(Game.creeps, (creep) => creep.memory.role == 'repairer');
// let builders = _.sum(Game.creeps, (creep) => creep.memory.role == 'builder');
var healers = [];
var guards = [];
var name = undefined;
var lowest = 0;

var spawnManager = function spawnManager(harvesters, miners, upgraders, builders, repairers) {

  if (harvesters == undefined) {
    harvesters = 0;
  }
  if (miners == undefined) {
    miners = 0;
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

  var lowest = Math.min(harvesters, miners, upgraders, builders, repairers);

  // choose spawns

  if (lowest == harvesters || harvesters < 4) {
    var priority = 1;
  } else if (lowest != harvesters && miners < 4) {
    var priority = 2;
  } else if (lowest != harvesters && (lowest == builders || builders < 3)) {
    var priority = 3;
  } else if (lowest != harvesters && lowest == repairers && repairers < 4) {
    var priority = 4;
  } else if (lowest != harvesters && lowest == upgraders) {
    var priority = 5;
  }

  var creepRole;

  switch (priority) {
    case 1:
      logCreeps();
      creepRole = "harvester";
      name = creepRole + harvesters; // For auto-naming, not used yet
      Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], null, { role: creepRole });
      console.log('Spawning new harvester');
      break;

    case 2:
      logCreeps();
      creepRole = "miner";
      name = creepRole + miners; // For auto-naming, not used yet
      Game.spawns.spawn1.createCreep([WORK, WORK, WORK, CARRY, MOVE], null, { role: creepRole });
      console.log('Spawning new miner');
      break;

    case 3:
      logCreeps();
      creepRole = "builder";
      name = creepRole + builders; // For auto-naming, not used yet
      Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, { role: creepRole });
      console.log('Spawning new builder');
      break;

    case 4:
      logCreeps();
      creepRole = "repairer";
      name = creepRole + repairers; // For auto-naming, not used yet
      Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, { role: creepRole });
      console.log('Spawning new repairer');
      break;

    case 5:
      logCreeps();
      creepRole = "upgrader";
      name = creepRole + upgraders; // For auto-naming, not used yet
      Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, { role: creepRole });
      console.log('Spawning new upgrader');
      break;

    default:
      logCreeps();
      creepRole = "builder";
      name = creepRole + builders; // For auto-naming, not used yet
      Game.spawns.spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], null, { role: creepRole });
      console.log('Spawning new builder');
  }

  function logCreeps() {
    console.log("Harvesters: ", harvesters, "Miners: ", miners, "Upgraders: ", upgraders, "Repairers: ", repairers, "Builders: ", builders);
  }

  //  Game.spawns.spawn1.createCreep(
  //    [ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE],
  //    null,
  //    {role: 'guards'}
  //  );
  // console.log("Spawn CPU: ", Game.cpu.getUsed());
};

module.exports = spawnManager;
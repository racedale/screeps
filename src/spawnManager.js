let harvesters = _.sum(Game.creeps, (creep) => creep.memory.role == 'harvester');
let upgraders = _.sum(Game.creeps, (creep) => creep.memory.role == 'upgrader');
let repairers = _.sum(Game.creeps, (creep) => creep.memory.role == 'repairer');
let builders = _.sum(Game.creeps, (creep) => creep.memory.role == 'builder');
let healers = [];
let guards = [];
let name = undefined;
let lowest = 0;

let spawnManager = function() {

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

  let lowest = Math.min(harvesters, builders, upgraders, repairers);
  console.log("Lowest: " + lowest);

  if (lowest === upgraders && upgraders < 4) {
   let creepRole = "upgrader";
   name = creepRole + upgraders;
   Game.spawns.spawn1.createCreep(
     [WORK, CARRY, MOVE, MOVE],
     null,
     {role: creepRole}
   );
   console.log('Spawning new upgrader');
   logCreeps();
  } else if (lowest === builders && builders < 6) {
    let creepRole = "builder";
    name = creepRole + builders;
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new builder');
    logCreeps();
  } else if (lowest === repairers && repairers < 3) {
    let creepRole = "repairer";
    name = creepRole + repairers;
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new repairer');
    logCreeps();
  } else if (harvesters < 8) {
    let creepRole = "harvester";
    name = creepRole + harvesters;
    Game.spawns.spawn1.createCreep(
      [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new harvester');
    logCreeps();
  }
// }
  function logCreeps() {
    console.log("Harvesters: ", harvesters,
    "Upgraders: ", upgraders,
    "Repairers: ", repairers,
    "Builders: ", builders
    );
  }
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

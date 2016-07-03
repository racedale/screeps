let harvesters = _.sum(Game.creeps, (creep) => creep.memory.role == 'harvester');
let upgraders = _.sum(Game.creeps, (creep) => creep.memory.role == 'upgrader');
let repairers = _.sum(Game.creeps, (creep) => creep.memory.role == 'repairer');
let builders = _.sum(Game.creeps, (creep) => creep.memory.role == 'builder');
let healers = [];
let guards = [];
let name = undefined;
let lowest = 0;

let spawnManager = function() {

  if (harvesters == undefined) { harvesters = 0; }
  if (upgraders == undefined) { builders = 0; }
  if (repairers == undefined) { repairers = 0; }
  if (builders == undefined) { builders = 0; }

  let lowest = Math.min(harvesters, builders, upgraders, repairers);

  // choose spawns
  // let maxCreeps = 20;
  // if (Game.creeps.length < maxCreeps) {
  if (lowest == harvesters || harvesters < 7) {
    var priority = 1;
  } else if (lowest != harvesters && lowest == builders) {
    var priority = 2
  } else if (lowest != harvesters && (lowest == repairers && repairers < 4)) {
    var priority = 3
  } else if (lowest != harvesters && lowest == upgraders) {
    var priority = 4
  }

  var creepRole;

  switch (priority) {
    case 1:
    logCreeps();
    creepRole = "harvester";
    name = creepRole + harvesters; // For auto-naming, not used yet
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new harvester');
    break;

    case 2:
    logCreeps();
    creepRole = "builder";
    name = creepRole + builders; // For auto-naming, not used yet
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new builder');
    break;

    case 3:
    logCreeps();
    creepRole = "repairer";
    name = creepRole + repairers; // For auto-naming, not used yet
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new repairer');
    break;

    case 4:
    logCreeps();
    creepRole = "upgrader";
    name = creepRole + upgraders; // For auto-naming, not used yet
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new upgrader');
    break;

    default:
    logCreeps();
    creepRole = "harvester";
    name = creepRole + harvesters; // For auto-naming, not used yet
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new harvester');
  }

  // if (lowest === upgraders && upgraders < 4) {
  //  let creepRole = "upgrader";
  //  name = creepRole + upgraders;
  //  Game.spawns.spawn1.createCreep(
  //    [WORK, CARRY, MOVE, MOVE],
  //    null,
  //    {role: creepRole}
  //  );
  //  console.log('Spawning new upgrader');
  //  logCreeps();
  // } else if (lowest === builders && builders < 6) {
  //   let creepRole = "builder";
  //   name = creepRole + builders;
  //   Game.spawns.spawn1.createCreep(
  //     [WORK, CARRY, MOVE, MOVE],
  //     null,
  //     {role: creepRole}
  //   );
  //   console.log('Spawning new builder');
  //   logCreeps();
  // } else if (lowest === repairers && repairers < 3) {
  //   let creepRole = "repairer";
  //   name = creepRole + repairers;
  //   Game.spawns.spawn1.createCreep(
  //     [WORK, CARRY, MOVE, MOVE],
  //     null,
  //     {role: creepRole}
  //   );
  //   console.log('Spawning new repairer');
  //   logCreeps();
  // } else if (harvesters < 8) {
  //   let creepRole = "harvester";
  //   name = creepRole + harvesters;
  //   Game.spawns.spawn1.createCreep(
  //     [WORK, CARRY, CARRY, MOVE, MOVE],
  //     null,
  //     {role: creepRole}
  //   );
  //   console.log('Spawning new harvester');
  //   logCreeps();
  // }
// }
  function logCreeps() {
    console.log("Harvesters: ", harvesters,
    "Upgraders: ", upgraders,
    "Repairers: ", repairers,
    "Builders: ", builders
    );
  }

    //  Game.spawns.spawn1.createCreep(
    //    [ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE],
    //    null,
    //    {role: 'guards'}
    //  );
  // console.log("Spawn CPU: ", Game.cpu.getUsed());
}

module.exports = spawnManager;

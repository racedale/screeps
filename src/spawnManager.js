let harvesters = _.sum(Game.creeps, (creep) => creep.memory.role == 'harvester');
let upgraders = _.sum(Game.creeps, (creep) => creep.memory.role == 'upgrader');
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
  if (builders == undefined) {
    builders = 0;
  }
  if (upgraders == undefined) {
    builders = 0;
  }

  let lowest = Math.min(harvesters, builders, upgraders);

  if (lowest === harvesters) {
    let creepRole = "harvester";
    name = creepRole + harvesters;
    Game.spawns.spawn1.createCreep(
      [WORK, WORK, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new harvester');
  } else if (lowest === builders) {
    let creepRole = "builder";
    name = creepRole + builders;
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, CARRY, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new builder');
  } else if (lowest === upgraders) {
    let creepRole = "upgrader";
    name = creepRole + upgraders;
    Game.spawns.spawn1.createCreep(
      [WORK, CARRY, MOVE, MOVE, MOVE],
      null,
      {role: creepRole}
    );
    console.log('Spawning new upgrader');
  }
// }
  console.log("Harvesters: ", harvesters,
  "Upgraders: ", upgraders,
  "Builders: ", builders
  );
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

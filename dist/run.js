'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

var _role = require('role.harvester');

var _role2 = _interopRequireDefault(_role);

var _role3 = require('role.upgrader');

var _role4 = _interopRequireDefault(_role3);

var _role5 = require('role.builder');

var _role6 = _interopRequireDefault(_role5);

var _role7 = require('role.repairer');

var _role8 = _interopRequireDefault(_role7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numberofHarvesters = 0;
var numberofUpgraders = 0;
var numberofBuilders = 0;
var numberofRepairers = 0;

function run() {

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == 'harvester') {
      _role2.default.run(creep);
      ++numberOfHarvesters;
    }
    if (creep.memory.role == 'upgrader') {
      _role4.default.run(creep);
      ++numberofUpgraders;
    }
    if (creep.memory.role == 'builder') {
      _role6.default.run(creep);
      ++numberofBuilders;
    }
    if (creep.memory.role == 'repairer') {
      _role8.default.run(creep);
      ++numberofRepairers;
    }
    // console.log("For loop:", Game.getUsedCPU());
  }
}
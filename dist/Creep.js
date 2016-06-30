'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Helper from 'Helper';

var Creep = function () {
    _createClass(Creep, [{
        key: 'creep',
        get: function get() {
            return this._creep;
        },
        set: function set(creep) {
            this._creep = creep;
        }
    }, {
        key: 'name',
        get: function get() {
            return this.creep.name;
        }
    }, {
        key: 'memory',
        get: function get() {
            return this.creep.memory;
        }
    }, {
        key: 'type',
        get: function get() {
            return this.remember('role', this.name.split('-')[0]);
        }
    }, {
        key: 'game',
        get: function get() {
            return this.room.game;
        }
    }]);

    function Creep(room, creep) {
        _classCallCheck(this, Creep);

        this.room = room;
        this.creep = creep;
    }

    _createClass(Creep, [{
        key: 'remember',
        value: function remember(key, value) {
            if (value === undefined) {
                return this.creep.memory[key];
            }

            this.creep.memory[key] = value;

            return value;
        }
    }, {
        key: 'forget',
        value: function forget(key) {
            delete this.creep.memory[key];
        }
    }]);

    return Creep;
}();

exports.default = Creep;
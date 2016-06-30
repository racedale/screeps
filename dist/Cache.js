'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
    function Cache() {
        _classCallCheck(this, Cache);

        this._cacheMap = {};
        this.randomId = parseInt(Math.random() * (10000 + Math.random() * 50));
    }

    _createClass(Cache, [{
        key: 'get',
        value: function get(key) {
            return this._cacheMap[key + '_' + this.randomId];
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            this._cacheMap[key + '_' + this.randomId] = value;

            return this.get(key);
        }
    }, {
        key: 'forget',
        value: function forget(key) {
            delete this._cacheMap[key + '_' + this.randomId];
        }
    }, {
        key: 'remember',
        value: function remember(key, callback) {
            var value = this.get(key);

            if (value === undefined) {
                for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    args[_key - 2] = arguments[_key];
                }

                return this.set(key, callback.apply(null, args));
            }

            return value;
        }
    }, {
        key: 'memoryGet',
        value: function memoryGet(key) {
            return Memory[key];
        }
    }, {
        key: 'memorySet',
        value: function memorySet(key, value) {
            Memory[key] = value;

            return this.get(key);
        }
    }, {
        key: 'memoryForget',
        value: function memoryForget(key) {
            delete Memory[key];
        }
    }, {
        key: 'memoryRemember',
        value: function memoryRemember(key, callback) {
            var value = this.get(key);

            if (value === undefined) {
                for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                    args[_key2 - 2] = arguments[_key2];
                }

                return this.set(key, callback.apply(null, args));
            }

            return value;
        }
    }]);

    return Cache;
}();

exports.default = Cache;
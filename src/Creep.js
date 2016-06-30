// import Helper from 'Helper';

export default class Creep {
    get creep() {
        return this._creep;
    }

    set creep(creep) {
        this._creep = creep;
    }

    get name() {
        return this.creep.name;
    }

    get memory() {
        return this.creep.memory;
    }

    get type() {
        return this.remember('role', this.name.split('-')[0]);
    }

    get game() {
        return this.room.game;
    }

    constructor(room, creep) {
        this.room  = room;
        this.creep = creep;
    }

    remember(key, value) {
        if (value === undefined) {
            return this.creep.memory[key];
        }

        this.creep.memory[key] = value;

        return value;
    }

    forget(key) {
        delete this.creep.memory[key];
    }
}

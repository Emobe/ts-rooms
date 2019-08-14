"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const Room_1 = require("../src/Room");
const ts_collections_1 = require("@emobe/ts-collections");
tape_1.default("Room() should create a room with a client collection", t => {
    class customRoom extends Room_1.Room {
    }
    const actual = new customRoom();
    const expected = { clients: new ts_collections_1.ObservableDictionary() };
    t.deepEqual(actual, expected);
    t.end();
});
//# sourceMappingURL=Room.test.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const RoomManager_1 = require("../src/RoomManager");
const Lobby_1 = require("../src/Lobby");
const Room_1 = require("../src/Room");
tape_1.default("RoomManager() should initialise with a Lobby", t => {
    const manager = new RoomManager_1.RoomManager();
    const actual = manager.Rooms;
    const expected = { lobby: new Lobby_1.Lobby() };
    t.deepEqual(actual, expected);
    t.end();
});
tape_1.default("RoomManager.createRoom(room) should create room with factory and add to collection with key 'test'", t => {
    class customRoom extends Room_1.Room {
    }
    const manager = new RoomManager_1.RoomManager();
    manager.createRoom("test", customRoom);
    const actual = manager.Rooms;
    const expected = { lobby: new Lobby_1.Lobby(), test: new customRoom() };
    t.deepEqual(actual, expected);
    t.end();
});
//# sourceMappingURL=RoomManager.test.js.map
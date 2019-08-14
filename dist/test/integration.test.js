"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const tape_1 = __importDefault(require("tape"));
const Server_1 = require("../src/Server");
tape_1.default("Integration test of Server", t => {
    const server = new Server_1.Server(8080);
    const client = new ws_1.default("ws://localhost:8080");
    client.onopen = () => {
        t.assert(true, "Server initialised + client connected");
        server.close();
        t.end();
    };
    client.onerror = () => {
        t.assert(false, "Problem with client connecting to server");
        server.close();
        t.end();
    };
});
//# sourceMappingURL=integration.test.js.map
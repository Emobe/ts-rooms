import WebSocket from "ws";
import test from "tape";
import { Server } from "../src/Server";

test("Integration test of Server", t => {
  const server = new Server(8080);
  const client = new WebSocket("ws://localhost:8080");
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

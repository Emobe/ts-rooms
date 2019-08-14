import WebSocket from "ws";
import { ObservableDictionary } from "@emobe/ts-collections";
import { Room } from "./Room";
import { RoomManager } from "./RoomManager";
import nanoid from "nanoid";
import { Client } from "./Client";
export class Server {
  private ws: WebSocket.Server;
  public roomManager = new RoomManager();
  constructor(port: number) {
    this.ws = new WebSocket.Server({ port });
    this.ws.on("connection", socket => this.connected(socket));
  }

  private connected(socket: WebSocket) {
    const id = nanoid();
    const client = new Client(socket);
    this.roomManager.Rooms.lobby.add(id, client);
  }

  public close() {
    this.ws.close();
  }
}

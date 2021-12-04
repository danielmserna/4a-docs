const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class roomAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.room_api_url;
    }
    async createRoom(Room) {
        Room = new Object(JSON.parse(JSON.stringify(Room)));
        return await this.post(`/room/create/`, Room);
    }
    async getRooms(unnecessaryString) {
        return await this.get(`/rooms`);
    }
    async updateRoom(Room) {
        Room = new Object(JSON.parse(JSON.stringify(Room)));
        return await this.put(`/room/update/`, Room);
    }
    async deleteRoom(RoomId) {
        return await this.delete(`/room/delete/${RoomId}`);
    }
}
module.exports = roomAPI;
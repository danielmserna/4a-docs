const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class reservationAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.reservation_api_url;
    }
    async createReservation(Reservation) {
        Reservation = new Object(JSON.parse(JSON.stringify(Reservation)));
        return await this.post(`/reservation/create`, Reservation);
    }
    async getReservation(getInput) {
        return await this.get(`/reservation/${getInput}`);
    }
    async updateReservation(Reservation) {
        Reservation = new Object(JSON.parse(JSON.stringify(Reservation)));
        return await this.put(`/reservation/update`, Reservation);
    }
    async deleteReservation(deleteInput) {
        console.log(`/reservation/delete/${Number(deleteInput)}`)
        return await this.delete(`/reservation/delete/${Number(deleteInput)}`);
    }
}
module.exports = reservationAPI;
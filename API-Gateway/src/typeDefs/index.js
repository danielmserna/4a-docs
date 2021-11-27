//Se llama al typedef (esquema) de cada submodulo
const reservationTypeDefs = require('./reservation_type_defs');
const roomTypeDefs = require('./room_type_defs');
const userTypeDefs = require('./user_type_defs');
//Se unen
//const schemasArrays = [userTypeDefs, reservationTypeDefs, roomTypeDefs];
const schemasArrays = [userTypeDefs];
//Se exportan
module.exports = schemasArrays;
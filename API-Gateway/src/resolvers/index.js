const reservationResolver = require('./reservation_resolver');
const roomResolver = require('./room_resolver');
const userResolver = require('./user_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(userResolver, roomResolver, reservationResolver);
module.exports = resolvers;
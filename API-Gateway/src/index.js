const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ReservationAPI = require('./dataSources/reservation_api');
const RoomAPI = require('./dataSources/room_api');
const UserAPI = require('./dataSources/user_api');
const authentication = require('./utils/authentication');
const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        reservationAPI: new ReservationAPI(),
        roomAPI: new RoomAPI(),
        userAPI: new UserAPI(),
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const reservationAPI = require('./dataSources/reservation_api');
const roomAPI = require('./dataSources/room_api');
const userAPI = require('./dataSources/user_api');
const authentication = require('./utils/authentication');
const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        reservationAPI: new reservationAPI(),
        roomAPI: new roomAPI(),
        userAPI: new userAPI(),
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
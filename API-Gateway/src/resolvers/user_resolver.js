const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.UserApi.getUser(userId)
            else
                return null

        },
    },
    Mutation: {
        signUpUser: async (_, { userInput }, { dataSources }) => {
            const uInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                email: userInput.email,
            }
            return await dataSources.roomAPI.createUser(uInput);
        },
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.UserAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.UserAPI.refreshToken(refresh),

    }
};
module.exports = usersResolver;
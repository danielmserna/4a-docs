const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.userApi.getUser(userId)
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
            return await dataSources.userAPI.createUser(uInput);
        },
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.userAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.userAPI.refreshToken(refresh),

    }
};
module.exports = usersResolver;
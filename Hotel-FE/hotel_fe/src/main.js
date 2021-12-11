import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { setContext } from 'apollo-link-context'

import {library} from "@fortawesome/fontawesome-svg-core"
import { faPhone,faUser,faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faPhone,faUser,faCodeBranch)

const httpLink = createHttpLink({
    uri: 'https://c4-apigateway.herokuapp.com/',
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("token_access") || ""
        }
    }
})

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

const apolloProvider = new createApolloProvider({
    defaultClient: apolloClient
})

createApp(App).component("fa",FontAwesomeIcon).use(router).use(apolloProvider).mount('#app')
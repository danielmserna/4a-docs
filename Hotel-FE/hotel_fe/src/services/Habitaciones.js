/*
import gql from "graphql-tag";

class ProductoService {

    getAll() {
        return this.$apollo
        .mutate({
          mutation: gql`
            mutation ($credentials: CredentialsInput!) {
              logIn(credentials: $credentials) {
                refresh
                access
              }
            }
          `,
          variables: {
            credentials: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.logIn.access,
            token_refresh: result.data.logIn.refresh,
          };

          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    }

    //get(id) {
    //    return http.get(`/productos/${id}/`);
    //}
    
    create(data) {
        return axios.post(API_URL + "/productos/", data);
    }

    update(id, data) {
        return axios.put(API_URL + `/updateproductos/${id}/`, data);
    }

    delete(id) {
        return axios.delete(API_URL + `/deleteproductos/${id}/`);
    }
    
}

export default new ProductoService();
*/
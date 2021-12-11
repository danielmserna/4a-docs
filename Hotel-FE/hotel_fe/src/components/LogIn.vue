<template>
  <div class="container">
    <div class="wrapper d-flex align-items-center justify-content-center h-100">
      <div class="card login-form">
        <div class="card-body">
          <h5 class="card-title text-center">Iniciar sesión</h5>
          <form v-on:submit.prevent="processLogInUser">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Usuario</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                v-model="user.username"                
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Contraseña</label
              >
              <input
                type="password"
                v-model="user.password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Ingresar
            </button>
            <div class="sign-up mt-4">
              ¿No tienes cuenta? <a href="#" v-on:click="loadSignUp">Crea una cuenta</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- 
  <div class="logIn_user">
    <div class="container_logIn_user">
      <h2>Iniciar sesión</h2>

      <form v-on:submit.prevent="processLogInUser">
        <input type="text" v-model="user.username" placeholder="Usuario" />
        <br />
        <input
          type="password"
          v-model="user.password"
          placeholder="Contraseña"
        />
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div>
  -->
</template>


<script>
import gql from "graphql-tag";

export default {
  name: "LogIn",

  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    processLogInUser: async function () {
      await this.$apollo
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
    },
    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },
  },
};
</script>


<style>
html, body, .container{
  height: 100%;
}

.login-form {
  width: 350px;
  padding: 2rem 1rem 1rem;
}

form {
  padding: 1rem;
}
</style>
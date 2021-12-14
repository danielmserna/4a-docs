<template>
  <!--
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>

            <form v-on:submit.prevent="processSignUp" >
                <input type="text" v-model="user.username" placeholder="Usuario">
                <br>
                
                <input type="password" v-model="user.password" placeholder="Contraseña">
                <br>
                
                <input type="text" v-model="user.name" placeholder="Nombre">
                <br>

                <input type="email" v-model="user.email" placeholder="Correo">
                <br>

                <button type="submit">Registrarse</button>
            </form>
        </div>

    </div>
    -->

  <div class="container">
    <div class="wrapper d-flex align-items-center justify-content-center h-100">
      <div class="card login-form">
        <div class="card-body">
          <h5 class="card-title text-center">Registrarse</h5>
          <form v-on:submit.prevent="processSignUp">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Usuario</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                v-model="user.username"
                aria-describedby="emailHelp"
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

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                v-model="user.name"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Correo</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                v-model="user.email"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" class="btn btn-primary w-100">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import gql from "graphql-tag";

export default {
  name: "SignUp",

  data: function () {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        email: "",
        balance: 0,
      },
    };
  },

  methods: {
    processSignUp: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($userInput: SignUpInput!) {
              signUpUser(userInput: $userInput) {
                refresh
                access
              }
            }
          `,
          variables: {
            userInput: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.signUpUser.access,
            token_refresh: result.data.signUpUser.refresh,
          };

          //this.$emit("completedSignUp", dataLogIn);

          
          this.$swal.fire("OK", "Registro exitoso", "success");
          console.log(dataLogIn);

          localStorage.setItem("username", dataLogIn.username);
          localStorage.setItem("token_access", dataLogIn.token_access);
          localStorage.setItem("token_refresh", dataLogIn.token_refresh);

          this.loadHome();
          
        })
        .catch((error) => {
          this.$swal.fire("ERROR", "ERROR: Fallo en el registro.", "error");
          //alert("ERROR: Fallo en el registro.");
        });
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    
  },
};
</script>


<style>

</style>
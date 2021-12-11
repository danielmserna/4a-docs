<template>
  <div id="app" class="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <!-- Icono de NAVBAR -->
        <nav class="navbar navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="./assets/hotel.png"
                alt=""
                width="30"
                height="24"
                class="d-inline-block align-top"
              />
            </a>
          </div>
        </nav>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                v-if="is_auth"
                v-on:click="loadReservas"
                >Reservas</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click="loadHabitaciones"
                >Habitaciones</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="is_auth" v-on:click="logOut"
                >Cerrar Sesión</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                v-if="!is_auth"
                v-on:click="loadLogIn"
                >Iniciar Sesión</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                v-if="!is_auth"
                v-on:click="loadSignUp"
                >Registrarse</a
              >
            </li>
          </ul>

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button class="btn btn-outline-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
    <!-- Navigation 
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Hotel MinTic</a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav navbar-nav">
            <a class="nav-link" href="#" v-if="is_auth" v-on:click="loadHome"
              >Home
              <span class="sr-only">(current)</span>
            </a>

            <a
              class="nav-link"
              href="#"
              v-if="is_auth"
              v-on:click="loadReservas"
              >Reservas</a
            >

            <a class="nav-link" href="#" v-on:click="loadHabitaciones"
              >Habitaciones</a
            >

            <a class="nav-link" href="#" v-if="is_auth" v-on:click="logOut"
              >Cerrar Sesión</a
            >

            <a class="nav-link" href="#" v-if="!is_auth" v-on:click="loadLogIn"
              >Iniciar Sesión</a
            >

            <a class="nav-link" href="#" v-if="!is_auth" v-on:click="loadSignUp"
              >Registrarse</a
            >
          </ul>
        </div>
      </div>
    </nav>
    -->
    <!--
    <div class="header">
      <h1>Hotel Misión TIC</h1>
      <nav>
        <button v-if="is_auth" v-on:click="loadHome">Inicio</button>
        <button v-if="is_auth" v-on:click="loadReservas">Reservas</button>
        <button v-if="!is_auth" v-on:click="loadHabitaciones">
          Habitaciones
        </button>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
      </nav>
    </div>
    -->

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>

    <!--
    <div class="footer">
      <h2>HOTEL</h2>
    </div>
    -->

    <footer class="py-4 bg-black">
      <div class="container">
        <p class="m-0 text-center text-white">G2 &copy; P9</p>
      </div>

      <div class="container">
        <p class="m-0 text-center text-white">
          Contactanos: +60 (1) 587 00 00
          <fa icon="phone" />
        </p>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: "App",

  computed: {
    is_auth: {
      get: function () {
        return this.$route.meta.requiresAuth;
      },
      set: function () {},
    },
  },

  methods: {
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },

    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },

    loadReservas: function () {
      this.$router.push({ name: "reservas" });
    },

    loadHabitaciones: function () {
      this.$router.push({ name: "habitaciones" });
    },

    completedLogIn: function (data) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.loadHome();
    },

    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },

    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    /*
    loadAccount: function () {
			this.$router.push({ name: "account" });
		},
  
    loadTransaction: function(){
      this.$router.push({ name: "transaction" });
    },
    */
    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.loadLogIn();
    },
  },
};
</script>


<style>
.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;

  background: #fdfefe;
}
</style>

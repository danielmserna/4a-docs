<template>
  <div id="app" class="app">
    <div class="header">
      <div class="titulo">
        <div class="navbar-header">
          <a type="button" class="image" v-on:click="loadHome">
            <img
              src="./assets/logo3.png"
              alt="Alternate Text"
              style="width: 50%"
            />
          </a>
          TURISMHOTEL
        </div>
      </div>

      <box-icon type="solid" name="plane"></box-icon>

      <nav>
        <button v-on:click="loadHome">Inicio</button>
        <!-- v-if="is_auth" -->
        <!-- <button v-on:click="this.getAllHabitaciones()">Reservas</button> -->
        <button v-on:click="loadHabitaciones">Buscar Habitaciones</button>
        <button v-on:click="loadReservas">Reservas</button>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
      </nav>
    </div>
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

    <div class="container-fluid">
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

    <footer class="footer">
      <h2>
        <img src="./assets/logo3.png" alt="Alternate Text" style="width: 4%" />
        TURISMHOTEL
      </h2>
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
      //this.$swal.fire("Autenticación Exitosa", "success");
      this.loadHome();      
    },

    completedSignUp: function (data) {
      this.$swal.fire("OK", "Registro Exitoso", "success");
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
      this.$swal.fire("OK", "Sesión Cerrada", "success");
      //alert("Sesión Cerrada");
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

body {
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
}

.titulo {
  font-family: cursive;
  font-size: 30px;
}

.imagen {
  justify-items: left;
}

.header {
  margin-top: auto;
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  background-color: orange;
  color: rgba(0, 0, 255, 0.705);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  text-align: center;
  justify-content: left;
  align-items: center;
}

.header nav {
  height: 100%;
  width: 40%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 20px;
}

.header nav button {
  color: white;
  background: rgba(0, 0, 255, 0.705);
  border: 1px solid black;

  border-radius: 5px;
  padding: 5px 5px;
}

.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}

footer {
  margin-top: auto;
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;

  margin: 0;
  padding: 0;

  height: 10vh;
  min-height: 100px;

  background-color: orange;
  color: blue;
}

.footer h2 {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

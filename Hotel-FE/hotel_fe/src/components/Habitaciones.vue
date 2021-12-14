<template>
  <div class="row center-xs middle-xs w-100">
    <div
      class="col-xs-12 col-xs-6 col-xs-4 col-md-3 p-2"
      v-for="(habitacion, index) in listaHabitaciones"
      :key="index"
    >
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          :src="habitacion.imagen"
          alt="Card image cap"
          style="width: 285.5px; height: 250px"
        />
        <div class="card-body">
          <h5 class="card-title">{{ habitacion.nombre }}</h5>
          <p class="card-text">{{ habitacion.descripcion }}</p>
          <p class="card-text">
            Capacidad:
            <span class="badge bg-success"
              >{{ habitacion.capacidad }} personas</span
            >
          </p>
          <p class="card-text">${{ habitacion.precio }}</p>
          <button
            class="btn btn-primary mr-3"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
            @click="setActiveIndex(index)"
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="modalForm"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Realizar reserva</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="createReservation">
            <div class="row">
              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Id</label>
                  <input
                    type="number"
                    class="form-control"
                    id="id"
                    name="id"
                    placeholder="id"
                    v-model="newReserva.id"
                  />
                </div>
              </div>

              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Id Habitacion</label>
                  <input
                    type="number"
                    class="form-control"
                    id="idHabitacion"
                    name="idHabitacion"
                    placeholder="Id Habitacion"
                    v-model="newReserva.idHabitacion"
                  />
                </div>
              </div>

              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    v-model="newReserva.nombrePersona"
                  />
                </div>
              </div>

              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Dias de reserva</label>
                  <input
                    type="number"
                    class="form-control"
                    id="diasReserva"
                    name="diasReserva"
                    placeholder="diasReserva"
                    v-model="newReserva.diasReserva"
                  />
                </div>
              </div>

              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Ciudad Origen</label>
                  <input
                    type="text"
                    class="form-control"
                    id="ciudadOrigen"
                    name="ciudadOrigen"
                    placeholder="CiudadOrigen"
                    v-model="newReserva.ciudadOrigen"
                  />
                </div>
              </div>

              <!-- Force next columns to break to new line at md breakpoint and up -->
              <div class="w-100 d-none d-md-block"></div>

              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Identificación</label>
                  <input
                    type="number"
                    class="form-control"
                    id="identificacion"
                    name="identificacion"
                    placeholder="identificacion"
                    v-model="newReserva.identificacion"
                  />
                </div>
              </div>

              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">direccion Residencia</label>
                  <input
                    type="text"
                    class="form-control"
                    id="direccionResidencia"
                    name="direccionResidencia"
                    placeholder="direccionResidencia"
                    v-model="newReserva.direccionResidencia"
                  />
                </div>
              </div>

              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Acompañantes</label>
                  <input
                    type="number"
                    class="form-control"
                    id="acompanantes"
                    name="acompanantes"
                    placeholder="Acompañantes"
                    v-model="newReserva.acompanantes"
                  />
                </div>
              </div>

              <div class="col-sm-5 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    v-model="newReserva.email"
                  />
                </div>
              </div>
            </div>

            <div class="modal-footer d-block">
              <button
                type="submit"
                class="btn btn-warning float-end"
                data-bs-dismiss="modal"
              >
                Realizar reserva
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!--<button v-on:click="this.getAllHabitaciones()">Reservas</button> -->
</template>


<script>
import gql from "graphql-tag";

export default {
  name: "Habitaciones",

  data: function () {
    return {
      listaHabitaciones: [],
      newReserva: {
        id: 1,
        idHabitacion: -1,
        nombrePersona: "",
        diasReserva: null,
        clientePreferencial: true,
        identificacion: null,
        direccionResidencia: "",
        acompanantes: null,
        ciudadOrigen: "",
        email: "",
      },
    };
  },

  methods: {
    getAllHabitaciones: async function () {
      await this.$apollo
        .query({
          query: gql`
            query GetRooms($getInput: String) {
              getRooms(getInput: $getInput) {
                id_room
                capacidad
                disponibilidad
                nombre
                precio
                descripcion
                hotel
                fecha_ocupacion
                calificacion
                direccion
                ciudad
                imagen
              }
            }
          `,
          variables: {},
        })
        .then((result) => {
          this.listaHabitaciones = result.data.getRooms;
          console.log(result.data);
        })
        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
    createReservation: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation CreateReservation($createInput: ReservationIn!) {
              createReservation(createInput: $createInput) {
                id
                nombrePersona
                idHabitacion
                diasReserva
                clientePreferencial
                identificacion
                direccionResidencia
                acompanantes
                ciudadOrigen
                email
              }
            }
          `,
          variables: {
            createInput: this.newReserva,
          },
        })
        .then((result) => {
          this.$swal.fire("OK", "Reserva realizada con éxito", "success");
          this.loadHabitaciones();
        })
        .catch((error) => {
          this.$swal.fire("ERROR", "Fallo en el registro", "error");
        });
    },
    setActiveIndex(index) {
      this.newReserva.idHabitacion = index;
    },
    loadHabitaciones: function () {
      this.$router.push({ name: "habitaciones" });
    },
  },

  created() {
    this.getAllHabitaciones();
  },

  beforeUpdate() {
    this.getAllHabitaciones();
  },
};
</script>


<style>
</style>
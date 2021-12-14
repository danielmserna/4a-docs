<template>
  <table class="table mt-2 table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <th scope="col">id</th>
        <th scope="col">idHabitacion</th>
        <th scope="col">Nombre de la persona</th>
        <th scope="col">Días de Reserva</th>
        <th scope="col">Cliente Preferencial</th>
        <th scope="col">Identificación</th>
        <th scope="col">Dirección de Residencia</th>
        <th scope="col">Acompañantes</th>
        <th scope="col">Email</th>        
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(reserva, index) in listaReservas"
        :key="index"
        @click="setActiveProducto(reserva, index)"
      >
        <td>{{ reserva.id }}</td>
        <td>{{ reserva.idHabitacion }}</td>
        <td>{{ reserva.nombrePersona }}</td>
        <td>{{ reserva.diasReserva }}</td>
        <td>{{ reserva.clientePreferencial ? "Preferencial" : "No Preferencial" }}</td>
        <td>{{ reserva.identificacion }}</td>
        <td>{{ reserva.direccionResidencia }}</td>
        <td>{{ reserva.acompanantes }}</td>
        <td>{{ reserva.email }}</td>
      </tr>
    </tbody>
  </table>
</template>


<script>
import gql from "graphql-tag";

export default {
  name: "Reservas",

  data: function () {
    return {
      listaReservas: [],
    };
  },

  methods: {
    getAllReservas: async function () {
      await this.$apollo
        .query({
          query: gql`
            query GetReservations($getInput: Int) {
              getReservations(getInput: $getInput) {
                id
                idHabitacion
                nombrePersona
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
          variables: {},
        })
        .then((result) => {
          this.listaReservas = result.data.getReservations;
          console.log(result.data);
        })
        .catch((error) => {
          alert("ERROR 404: Not found.");
        });
    },
  },
  created() {
    this.getAllReservas();
  },  
  beforeUpdate() {
    this.getAllReservas();
  },
};
</script>


<style>
</style>
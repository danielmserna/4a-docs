const { gql } = require('apollo-server');
const reservationTypeDefs = gql `
    type ReservationOut {
        id: Int!
        idHabitacion: Int!
        nombrePersona: String!
        diasReserva: Int!
        clientePreferencial: Boolean!
        identificacion: Int!
        direccionResidencia: String!
        acompanantes: Int!
        ciudadOrigen: String!
        email: String!
    }
    input ReservationIn {
        id: Int!
        idHabitacion: Int!
        nombrePersona: String!
        diasReserva: Int!
        clientePreferencial: Boolean!
        identificacion: Int!
        direccionResidencia: String!
        acompanantes: Int!
        ciudadOrigen: String!
        email: String!
    }
        extend type Query {
        getReservation(getInput: Int!): ReservationOut
        getReservations(getInput: Int): [ReservationOut]
    }
    extend type Mutation {
        createReservation(createInput: ReservationIn!): ReservationOut!
        updateReservation(updateInput: ReservationIn!): ReservationOut!
        deleteReservation(deleteInput: Int!): Int!
    }
`;
module.exports = reservationTypeDefs;
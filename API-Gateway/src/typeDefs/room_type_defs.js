const { gql } = require('apollo-server');
const roomTypeDefs = gql `
    type RoomIdOut {
        id_room: Int!
        capacidad: Int!
        disponibilidad: Boolean!
        nombre: String!
        precio: Int!
        descripcion: String!
        hotel: String!
        fecha_ocupacion: String!
        calificacion: Int!
        direccion: String!
        ciudad: String!
        imagen: String!
    }
    input RoomIdIn {
        id_room: Int!
        capacidad: Int!
        disponibilidad: Boolean!
        nombre: String!
        precio: Int!
        descripcion: String!
        hotel: String!
        fecha_ocupacion: String!
        calificacion: Int!
        direccion: String!
        ciudad: String!
        imagen: String!
    }
    input RoomInput {
        capacidad: Int!
        disponibilidad: Boolean!
        nombre: String!
        precio: Int!
        descripcion: String!
        hotel: String!
        fecha_ocupacion: String!
        calificacion: Int!
        direccion: String!
        ciudad: String!
        imagen: String!
    }
    input DeleteRoomInput {
        id_room: Int!
    }
        extend type Query {
        getRooms(getInput: String): [RoomIdOut]
    }
    extend type Mutation {
        createRoom(createInput: RoomInput!): String!
        updateRoom(updateInput: RoomIdIn!): RoomIdOut!
        deleteRoom(deleteInput: DeleteRoomInput!): Int!
    }
`;
module.exports = roomTypeDefs;
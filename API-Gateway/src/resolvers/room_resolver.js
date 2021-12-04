const roomResolver = {
    Query: {
        getRooms: (_, { unnecessaryString }, { dataSources }) => {
            return dataSources.roomAPI.getRooms()
        },
    },
    Mutation: {
        createRoom: async (_, { createInput }, { dataSources }) => {
            const createI = {
                capacidad: createInput.capacidad,
                disponibilidad: createInput.disponibilidad,
                nombre: createInput.nombre,
                precio: createInput.precio,
                descripcion: createInput.descripcion,
                hotel: createInput.hotel,
                fecha_ocupacion: createInput.fecha_ocupacion,
                calificacion: createInput.calificacion,
                direccion: createInput.direccion,
                ciudad: createInput.ciudad,
                imagen: createInput.imagen,
            }
            return await dataSources.roomAPI.createRoom(createI);
        },
        updateRoom: async (_, { updateInput }, { dataSources }) => {
            const updateI = {
                id_room: updateInput.id_room,
                capacidad: updateInput.capacidad,
                disponibilidad: updateInput.disponibilidad,
                nombre: updateInput.nombre,
                precio: updateInput.precio,
                descripcion: updateInput.descripcion,
                hotel: updateInput.hotel,
                fecha_ocupacion: updateInput.fecha_ocupacion,
                calificacion: updateInput.calificacion,
                direccion: updateInput.direccion,
                ciudad: updateInput.ciudad,
                imagen: updateInput.imagen,
            }
            return await dataSources.roomAPI.updateRoom(updateI);
        },
        deleteRoom: async (_, { deleteInput }, { dataSources }) => {
            const deleteI = {
                id_room: deleteInput.id_room,
            }
            return await dataSources.roomAPI.deleteRoom(deleteI);
        },

    }
};
module.exports = roomResolver;
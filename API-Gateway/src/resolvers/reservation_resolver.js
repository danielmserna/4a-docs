const reservationResolver = {
    Query: {
        getReservation: (_, { getInput }, { dataSources }) => {
            return dataSources.reservationAPI.getReservation(getInput)
        },
    },
    Mutation: {
        createReservation: async (_, { createInput }, { dataSources }) => {
            const createI = {
                id: createInput.id,
                idHabitacion: createInput.idHabitacion,
                nombrePersona: createInput.nombrePersona,
                diasReserva: createInput.diasReserva,
                clientePreferencial: createInput.clientePreferencial,
                identificacion: createInput.identificacion,
                direccionResidencia: createInput.direccionResidencia,
                acompanantes: createInput.acompanantes,
                ciudadOrigen: createInput.ciudadOrigen,
                email: createInput.email,
            }
            return await dataSources.reservationAPI.createReservation(createI);
        },
        updateReservation: async (_, { updateInput }, { dataSources }) => {
            const updateI = {
                id: updateInput.id,
                idHabitacion: updateInput.idHabitacion,
                nombrePersona: updateInput.nombrePersona,
                diasReserva: updateInput.diasReserva,
                clientePreferencial: updateInput.clientePreferencial,
                identificacion: updateInput.identificacion,
                direccionResidencia: updateInput.direccionResidencia,
                acompanantes: updateInput.acompanantes,
                ciudadOrigen: updateInput.ciudadOrigen,
                email: updateInput.email,
            }
            return await dataSources.reservationAPI.updateReservation(updateI);
        },
        deleteReservation: async (_, { deleteInput }, { dataSources }) => {
            return await dataSources.reservationAPI.deleteReservation(Number(deleteInput));
        },

    }
};
module.exports = reservationResolver;
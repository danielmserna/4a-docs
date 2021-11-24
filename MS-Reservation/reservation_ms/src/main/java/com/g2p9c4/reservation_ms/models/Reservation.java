package com.g2p9c4.reservation_ms.models;

import org.springframework.data.annotation.Id;


public class Reservation {
    @Id
    private Integer id;
    private Integer idHabitacion;
    private String nombrePersona;
    private Integer diasReserva;
    private Boolean clientePreferencial;
    private String identificacion;
    private String direccionResidencia;
    private Integer acompanantes;
    private String ciudadOrigen;
    private String email;

    public Reservation(int id, int idHabitacion, String nombrePersona, int diasReserva, boolean clientePreferencial, String identificacion, String direccionResidencia, int acompanantes, String ciudadOrigen, String email) {
        this.id = id;
        this.idHabitacion = idHabitacion;
        this.nombrePersona = nombrePersona;
        this.diasReserva = diasReserva;
        this.clientePreferencial = clientePreferencial;
        this.identificacion = identificacion;
        this.direccionResidencia = direccionResidencia;
        this.acompanantes = acompanantes;
        this.ciudadOrigen = ciudadOrigen;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdHabitacion() {
        return idHabitacion;
    }

    public void setIdHabitacion(int idHabitacion) {
        this.idHabitacion = idHabitacion;
    }

    public String getNombrePersona() {
        return nombrePersona;
    }

    public void setNombrePersona(String nombrePersona) {
        this.nombrePersona = nombrePersona;
    }

    public int getDiasReserva() {
        return diasReserva;
    }

    public void setDiasReserva(int diasReserva) {
        this.diasReserva = diasReserva;
    }

    public boolean isClientePreferencial() {
        return clientePreferencial;
    }

    public void setClientePreferencial(boolean clientePreferencial) {
        this.clientePreferencial = clientePreferencial;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public String getDireccionResidencia() {
        return direccionResidencia;
    }

    public void setDireccionResidencia(String direccionResidencia) {
        this.direccionResidencia = direccionResidencia;
    }

    public int getAcompanantes() {
        return acompanantes;
    }

    public void setAcompanantes(int acompanantes) {
        this.acompanantes = acompanantes;
    }

    public String getCiudadOrigen() {
        return ciudadOrigen;
    }

    public void setCiudadOrigen(String ciudadOrigen) {
        this.ciudadOrigen = ciudadOrigen;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
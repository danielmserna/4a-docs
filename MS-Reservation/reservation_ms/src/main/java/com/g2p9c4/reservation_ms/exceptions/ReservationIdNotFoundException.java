package com.g2p9c4.reservation_ms.exceptions;

public class ReservationIdNotFoundException extends RuntimeException {
    public ReservationIdNotFoundException(String message) {
        super(message);
    }
}
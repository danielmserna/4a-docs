package com.g2p9c4.reservation_ms.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
@ResponseBody
public class ReservationIdNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ReservationIdNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String EntityNotFoundAdvice(ReservationIdNotFoundException ex){
        return ex.getMessage();
    }
}
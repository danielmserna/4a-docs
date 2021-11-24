package com.g2p9c4.reservation_ms.controllers;

import com.g2p9c4.reservation_ms.models.Reservation;
import com.g2p9c4.reservation_ms.repositories.ReservationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ReservationController {
    private final ReservationRepository reservationRepository;
    public ReservationController(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    @GetMapping("/reservation/{id}")
    Optional<Reservation> getReservationById(@PathVariable Integer id){
        return reservationRepository.findById(id);
    }
    @GetMapping("/reservations/all")
    List<Reservation> getAllReservation(){
        return reservationRepository.findAll();
    }
    @PostMapping("/reservation/create")
    Reservation newReservation(@RequestBody Reservation reservation){
        return reservationRepository.save(reservation);
    }

    @PutMapping("/reservation/update")
    Reservation updateReservation(@RequestBody Reservation reservation){
        reservationRepository.delete(reservation);
        return reservationRepository.save(reservation);
    }

    @DeleteMapping("/reservation/delete/{id}")
    public void deleteReservation(@PathVariable Integer id){
        reservationRepository.deleteById(id);
    }
}
package com.g2p9c4.reservation_ms.repositories;

import com.g2p9c4.reservation_ms.models.Reservation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends MongoRepository <Reservation, Integer> {
    Optional<Reservation> findById (Integer id);
    List<Reservation> findAll ();
}

package com.g2p9c4.reservation_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

@SpringBootApplication
public class ReservationMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReservationMsApplication.class, args);
	}

}

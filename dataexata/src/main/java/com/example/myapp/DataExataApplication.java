package com.example.myapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
@RestController
public class DataExataApplication {

    @GetMapping("/api/datetime")
    public ResponseEntity<DateTimeInfo> getDateTime() {
        LocalDateTime dateTime = LocalDateTime.now(ZoneId.of("America/Sao_Paulo"));
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

        DateTimeInfo dateTimeInfo = new DateTimeInfo();
        dateTimeInfo.setDate(dateTime.format(dateFormatter));
        dateTimeInfo.setTime(dateTime.format(timeFormatter));

        return ResponseEntity.ok(dateTimeInfo);
    }

    public static void main(String[] args) {
        SpringApplication.run(DataExataApplication.class, args);
    }
}

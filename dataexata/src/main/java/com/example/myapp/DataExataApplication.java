package com.example.myapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
@RestController
public class DataExataApplication {

    @GetMapping("/api/datetime")
    public DateTimeInfo getDateTime() {
        // Obtém a data e hora atual em Brasília
        LocalDateTime dateTime = LocalDateTime.now(ZoneId.of("America/Sao_Paulo"));

        // Formata a data e hora
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String formattedDateTime = dateTime.format(formatter);

        // Criar objeto DateTimeInfo
        DateTimeInfo dateTimeInfo = new DateTimeInfo();
        dateTimeInfo.setDate(formattedDateTime);

        return dateTimeInfo;
    }

    public static void main(String[] args) {
        SpringApplication.run(DataExataApplication.class, args);
        // Exibir informações JSON no console
        System.out.println("API em execução. Acesse http://localhost:8080/api/datetime para obter a data e hora.");
    }
}

package com.example.microservice.order_service.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class OrderKafkaListener {

    @KafkaListener(topics = "order-topic")
    public void listen(String message) {
        System.out.println("📨 Received Kafka message: " + message);
    }
}

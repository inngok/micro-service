// src/test/java/com/example/microservice/order_service/OrderServiceApplicationTests.java
package com.example.microservice.order_service;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

@Disabled("Skip context load to avoid Kafka/Eureka/Redis when running unit tests")
class OrderServiceApplicationTests {

    @Test
    void contextLoads() {
    }
}

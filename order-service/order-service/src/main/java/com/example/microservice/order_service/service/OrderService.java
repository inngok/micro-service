package com.example.microservice.order_service.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.example.microservice.order_service.model.Order;
import com.example.microservice.order_service.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate; // Đổi thành String

    public Order createOrder(Order order) {
        Order savedOrder = orderRepository.save(order);

        redisTemplate.opsForValue().set("order:" + savedOrder.getId(), savedOrder);

        String orderJson = "{\"id\": " + savedOrder.getId()
                + ", \"product\": \"" + savedOrder.getProduct()
                + "\", \"userId\": " + savedOrder.getUserId() + "}";
        kafkaTemplate.send("order-topic", orderJson);

        return savedOrder;
    }

    public Order getOrder(Long id) {
        Order cachedOrder = (Order) redisTemplate.opsForValue().get("order:" + id);
        if (cachedOrder != null) {
            return cachedOrder;
        }

        Order order = orderRepository.findById(id).orElse(null);
        if (order != null) {
            redisTemplate.opsForValue().set("order:" + id, order);
        }
        return order;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}

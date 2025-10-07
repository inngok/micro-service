package com.example.microservice.order_service.controller;

import com.example.microservice.order_service.UserClient;
import com.example.microservice.order_service.UserDto;
import com.example.microservice.order_service.model.Order;
import com.example.microservice.order_service.model.OrderResponse;
import com.example.microservice.order_service.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final UserClient userClient;

    @GetMapping("/{id}")
    public OrderResponse getOrderById(@PathVariable Long id) {
        Order order = orderService.getOrder(id);
        UserDto user = userClient.getUserById(order.getUserId());
        return new OrderResponse(order.getId(), order.getProduct(), order.getPrice(), user);
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }
}

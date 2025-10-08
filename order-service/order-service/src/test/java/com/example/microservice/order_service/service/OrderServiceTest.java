package com.example.microservice.order_service.service;

import java.util.concurrent.CompletableFuture;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.ArgumentMatchers.startsWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;

import com.example.microservice.order_service.model.Order;
import com.example.microservice.order_service.repository.OrderRepository;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;
    @Mock
    private RedisTemplate<String, Object> redisTemplate;
    @Mock
    private ValueOperations<String, Object> valueOps;
    @Mock
    private KafkaTemplate<String, String> kafkaTemplate;

    @InjectMocks
    private OrderService orderService;

    @BeforeEach
    void setup() {
        when(redisTemplate.opsForValue()).thenReturn(valueOps);
    }

    @Test
    void createOrder_shouldSaveCacheAndPublishEvent() {
        // given
        Order input = new Order();
        input.setProduct("Laptop");
        input.setPrice(1200.0);
        input.setUserId(123L);

        Order saved = new Order();
        saved.setId(1L);
        saved.setProduct("Laptop");
        saved.setPrice(1200.0);
        saved.setUserId(123L);

        when(orderRepository.save(any(Order.class))).thenReturn(saved);
        when(kafkaTemplate.send(anyString(), anyString()))
                .thenReturn(CompletableFuture.completedFuture(mock(SendResult.class)));

        // when
        Order result = orderService.createOrder(input);

        // then
        assertThat(result.getId()).isEqualTo(1L);
        verify(orderRepository).save(any(Order.class));
        // dùng matcher cho CẢ 2 tham số
        verify(valueOps).set(startsWith("order:"), eq((Object) saved));
        verify(kafkaTemplate).send(anyString(), anyString());
    }

    @Test
    void createOrder_shouldReturnSavedEntityEvenWhenKafkaFails() {
        // given
        Order input = new Order();
        input.setProduct("Book");
        input.setPrice(99.0);
        input.setUserId(10L);

        Order saved = new Order();
        saved.setId(7L);
        saved.setProduct("Book");
        saved.setPrice(99.0);
        saved.setUserId(10L);

        when(orderRepository.save(any(Order.class))).thenReturn(saved);

        CompletableFuture<SendResult<String, String>> failed = new CompletableFuture<>();
        failed.completeExceptionally(new RuntimeException("Kafka down"));
        when(kafkaTemplate.send(anyString(), anyString())).thenReturn(failed);

        // when
        Order result = orderService.createOrder(input);

        // then
        assertThat(result.getId()).isEqualTo(7L);
        verify(orderRepository).save(any(Order.class));
        verify(valueOps).set(startsWith("order:"), eq((Object) saved));
        verify(kafkaTemplate).send(anyString(), anyString());
    }
}

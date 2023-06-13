package com.restful.demo.Action;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restful.demo.dto.HelloDto;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class DemoController {
    @GetMapping(value = "/hello")
    public HelloDto getHello() {
        return new HelloDto("Hello! This is from Spring Boot Restful API!");
    }
}

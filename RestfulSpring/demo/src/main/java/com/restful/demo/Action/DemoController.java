package com.restful.demo.Action;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restful.demo.dto.HelloDto;

// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

public class DemoController {
    @GetMapping(value = "/hello")
    public HelloDto getHello(String ownerName) {

        String anyString = "Hello! This is from Spring Boot Restful API! i want to send any varible ";
        return new HelloDto(anyString + ownerName);
    }

    @PostMapping("/login")
    public APIReturnObject login(@RequestBody User user) {
        System.out.println(user.getAccount());
        System.out.println(user.getPassword());

        APIReturnObject result = new APIReturnObject();
        Map<String, Object> data = new HashMap<String, Object>();
        result.setMessage("登入成功，取得token");
        result.setData(data);
        result.setUserName(user.getAccount());
        result.setUserPassword(user.getPassword());
        return result;
    }
}

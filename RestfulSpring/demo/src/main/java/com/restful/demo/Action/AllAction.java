package com.restful.demo.Action;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.restful.demo.Model.Produce;

// @RestController
@Controller
public class AllAction {
    @PostMapping("/product")
    public Produce creatProduct() {
        Produce produce = new Produce();
        produce.setId(1);
        produce.setProductName("car");
        produce.setProductPrice(10000);
        System.out.println(produce.getId());
        System.out.println(produce.getProductName());
        return produce;
    }

    // private RestTemplate restTemplate = new RestTemplate();

    // @GetMapping("/hello")
    // public String hello(String name) {
    // name = "steven";
    // String url = "http://localhost:4200/"; // 替换为您的Angular前端的URL
    // String response = restTemplate.getForObject(url + "?name=" + name,
    // String.class);
    // System.out.println(name);
    // System.out.println(response);
    // return "redirect:" + url + "?name=" + name;
    // }
}

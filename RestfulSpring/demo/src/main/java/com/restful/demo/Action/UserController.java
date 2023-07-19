package com.restful.demo.Action;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
    @RequestMapping("testBlock")
    public String testBlock() {
        return "testBlock";
    }

    @RequestMapping("testUnBlock")
    public String testUnBlock() {
        return "testUnBlock";
    }

    @RequestMapping("testaaa")
    public String testaa() {
        return "testaaa";
    }
}

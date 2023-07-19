package com.restful.demo.dto;

import org.springframework.stereotype.Component;

@Component
public class Produce {
    private int id;
    private String productName;
    private int productPrice;

    public Produce() {
        super();
    }

    public Produce(int id, String productName, int productPrice) {
        this.id = id;
        this.productName = productName;
        this.productPrice = productPrice;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(int productPrice) {
        this.productPrice = productPrice;
    }

}

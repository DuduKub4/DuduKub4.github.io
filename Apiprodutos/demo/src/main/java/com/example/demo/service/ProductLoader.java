package com.example.demo.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import com.example.demo.model.Product; // Adicionando a importação da classe Product
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class ProductLoader {

    private final ResourceLoader resourceLoader;
    private List<Product> products;

    public ProductLoader(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @PostConstruct
    public void loadProducts() throws IOException {
        InputStream inputStream = resourceLoader.getResource("classpath:products.json").getInputStream();
        ObjectMapper objectMapper = new ObjectMapper();
        products = objectMapper.readValue(inputStream, new TypeReference<List<Product>>(){});
    }

    public List<Product> getProducts() {
        return products;
    }
}

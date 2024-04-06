package com.example.demo.service;

import com.example.demo.model.Product;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
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
    System.out.println("Carregando produtos do arquivo JSON...");
    InputStream inputStream = resourceLoader.getResource("classpath:produtos.json").getInputStream();
    ObjectMapper objectMapper = new ObjectMapper();
    products = objectMapper.readValue(inputStream, new TypeReference<List<Product>>(){});
    System.out.println("Produtos carregados com sucesso!");
}

    public List<Product> getProducts() {
        return products;
    }
}

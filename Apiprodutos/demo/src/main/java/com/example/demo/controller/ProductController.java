package com.example.demo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Product; // Adicionando a importação da classe Product

@RestController
public class ProductController {

    private final List<Product> products; // Lista de produtos

    // Construtor para injetar a lista de produtos
    public ProductController(List<Product> products) {
        this.products = products;
    }

    // Método para retornar todos os produtos
    @GetMapping("/produtos")
    public List<Product> getProducts() {
        return products;
    }

    // Método para retornar um produto pelo ID
    @GetMapping("/produtos/{id}")
    public Product getProductById(@PathVariable String id) {
        // Implemente a lógica para buscar o produto pelo ID
        for (Product product : products) {
            if (product.getId().equals(id)) {
                return product;
            }
        }
        return null; // Retorna null se o produto não for encontrado
    }
}
package com.stackroute.productmanagement.service;

import com.stackroute.productmanagement.model.Product;
import com.stackroute.productmanagement.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Component
public class ProductService {
    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void addProduct(Product product) {
        product.setProductName(product.getProductName().toLowerCase());
        product.setCategory(product.getCategory().toLowerCase());
        productRepository.save(product);
    }

    public void addMultipleProducts(List<Product> productList) {
        productList.forEach(product -> {
            product.setCategory(product.getCategory().toLowerCase());
            product.setProductName(product.getProductName().toLowerCase());
        });
        productRepository.saveAll(productList);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getAllProductsByCategory(String category) {
        return productRepository.findAllByCategory(category.toLowerCase());
    }


    public Product getProductById(String productId) {
        Optional<Product> productById = productRepository.findById(productId);
        Product product = productById.get();
        return product;
    }

    public void rateTheProduct(String username, double rating, Product product) {
        double temp = product.getAverageRating();
        int num = product.getRatedUsernames().size();
        double avg = (temp*num+rating)/(num+1);
        avg =Double.parseDouble(new DecimalFormat("##.##").format(avg));
        product.setAverageRating(avg);
        product.getRatedUsernames().add(username);
        productRepository.save(product);
    }













          /*
    AS a product owner, I must be able to update the existing products
    starts
     */





    public Product uploadDetails(Product photo) {
        return productRepository.save(photo);
    }


    public List<Product> getAllPhotos() {
        return productRepository.findAll();
    }




    public void deleteProductByid(String productId) {
        productRepository.deleteById(productId.toString());

    }



    public Product uploadDetail(Product photo) {
        return productRepository.save(photo);
    }



          /*
    AS a product owner, I must be able to update the existing products
    ends
     */
}

package com.stackroute.productmanagement.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productmanagement.model.Product;
import com.stackroute.productmanagement.model.rating;
import com.stackroute.productmanagement.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@CrossOrigin("*")
@RestController
@RequestMapping("/product")
public class ProductController {
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestParam(value = "image") MultipartFile image, @RequestParam("item") String item) throws IOException {
        Product product = new ObjectMapper().readValue(item,Product.class);
        product.setImageByte(image.getBytes());
        product.setImageName(image.getOriginalFilename());
        product.setType(image.getContentType());
        productService.addProduct(product);
        return new ResponseEntity("Added", HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProducts() {
        return new ResponseEntity<>(this.productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/{category}")
    public ResponseEntity<?> getAllProducts(@PathVariable String category) {
        return new ResponseEntity<>(this.productService.getAllProductsByCategory(category), HttpStatus.OK);
    }

    /*
    @GetMapping("/getProduct/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable UUID productId){
        return new ResponseEntity<>(this.productService.getProductById(productId), HttpStatus.OK);
    }*/














    /*
    AS a product owner, I must be able to update the existing products
    starts
     */


    @PostMapping("/upload")
    public ResponseEntity<Product> createProductDetails(@RequestParam(value = "image") MultipartFile image,
                                                 @RequestParam("item") String item) throws IOException {

        Product productObj = new ObjectMapper().readValue(item, Product.class);

        productObj.setImageByte(image.getBytes());
        productObj.setImageName(image.getOriginalFilename());
        productObj.setType(image.getContentType());
        Product createdProduct = productService.uploadDetails(productObj);

        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }







    @GetMapping("/getAll")
    public ResponseEntity<List<Product>> getAllPhotos() {
        List<Product> photos = productService.getAllPhotos();
        return new ResponseEntity<>(photos, HttpStatus.OK);
    }



    //To perform Delete operation
    @DeleteMapping("/deleteExistingProduct/{productId}")
    public ResponseEntity<Void> deleteProductByid(@PathVariable String productId){
        System.out.println(productId);
        productService.deleteProductByid(productId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/getProduct/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable String productId){
        return new ResponseEntity<>(this.productService.getProductById(productId), HttpStatus.OK);
    }

    @PostMapping("/rate")
    public ResponseEntity<?> rateProduct(@RequestBody rating r) {
        Product product = (Product) productService.getProductById(r.getProductId());
        this.productService.rateTheProduct(r.getUsername(),r.getRating(),product);
//        return new ResponseEntity<>("Rated", HttpStatus.OK);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/modify/{productId}")
    public ResponseEntity<Product> uploadDetail(@RequestParam(value = "image") MultipartFile image,
                                                @RequestParam("item") String item) throws IOException {

        Product photoObj = new ObjectMapper().readValue(item, Product.class);
        System.out.println("updating on id: "+photoObj.getProductId());
        photoObj.setProductId(photoObj.getProductId());

        photoObj.setImageByte(image.getBytes());
        photoObj.setImageName(image.getOriginalFilename());
        photoObj.setType(image.getContentType());
        Product uploaded = productService.uploadDetails(photoObj);

        return new ResponseEntity<>(uploaded, HttpStatus.CREATED);
    }

       /*
    AS a product owner, I must be able to update the existing products
    ends
     */
}

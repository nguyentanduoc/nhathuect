package com.ntd.nhathue.controller;

import com.ntd.nhathue.dto.ProductResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${apiPrefix}/product")
public class ProductController {

    @GetMapping("all")
    public ResponseEntity<ProductResponseDto> getAll(){
        return ResponseEntity.ok(new ProductResponseDto("adad"));
    }
}

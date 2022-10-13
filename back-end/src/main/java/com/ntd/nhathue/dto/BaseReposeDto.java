package com.ntd.nhathue.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BaseReposeDto<T> {
    private T data;
    private String message;
}

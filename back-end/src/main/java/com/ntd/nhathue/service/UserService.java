package com.ntd.nhathue.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDetails findById(Long id);
}

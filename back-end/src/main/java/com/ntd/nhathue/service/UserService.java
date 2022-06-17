package com.ntd.nhathue.service;

import com.ntd.nhathue.model.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface UserService {
    UserDetails findById(Long id);

    Optional<User> findByUsername(String userName);
}

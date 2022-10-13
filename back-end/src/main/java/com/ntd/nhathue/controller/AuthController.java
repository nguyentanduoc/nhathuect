package com.ntd.nhathue.controller;

import com.ntd.nhathue.dto.*;
import com.ntd.nhathue.exception.BadRequest;
import com.ntd.nhathue.model.User;
import com.ntd.nhathue.provider.JwtTokenProvider;
import com.ntd.nhathue.service.UserService;
import io.jsonwebtoken.impl.DefaultClaims;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RestController()
@RequestMapping("${apiPrefix}/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider tokenProvider;

    @Autowired
    UserService userService;

    @PostMapping("login")
    ResponseEntity<JwtResponse> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());;
            return ResponseEntity.ok(new JwtResponse(jwt));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw e;
        }
    }

    @GetMapping("refreshToken")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) {
        DefaultClaims claims = (io.jsonwebtoken.impl.DefaultClaims) request.getAttribute("claims");
        Map<String, Object> expectedMap = getMapFromIoJsonWebTokenClaims(claims);
        String token = tokenProvider.doGenerateRefreshToken(expectedMap, expectedMap.get("sub").toString());
        return ResponseEntity.ok(new JwtResponse(token));
    }

    @GetMapping("user")
    public ResponseEntity<UserResponseDto> getUser(Principal principal) {
        String username = principal.getName();
        Optional<User> user = userService.findByUsername(username);
        if (user.isEmpty()) {
            throw new BadRequest("not found user by: " + username);
        }
        UserDto userResponseDto = new UserDto();
        BeanUtils.copyProperties(user.get(), userResponseDto);
        return ResponseEntity.ok(new UserResponseDto(userResponseDto));
    }

    public Map<String, Object> getMapFromIoJsonWebTokenClaims(DefaultClaims claims) {
        return new HashMap<>(claims);
    }
}

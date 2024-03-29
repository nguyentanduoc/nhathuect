package com.ntd.nhathue.provider;

import com.ntd.nhathue.dto.CustomUserDetails;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;

@Component
@Slf4j
public class JwtTokenProvider {

    @Value("${jwt_secret}")
    private String jwtSecret;

    @Value("${jwt_time_expire}")
    private Long jwtTimeExpire;

    @Value("${jwt_time_refresh}")
    private Long jwtTimeRefresh;


    public String generateToken(CustomUserDetails userDetails) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtTimeExpire);
        return Jwts.builder().setSubject(Long.toString(userDetails.getUser().getId())).setIssuedAt(now).setExpiration(expiryDate).signWith(SignatureAlgorithm.HS512, jwtSecret).compact();
    }

    public Long getUserIdFromJWT(String token) {
        Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
        return Long.parseLong(claims.getSubject());
    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
            throw ex;
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }


    public String doGenerateRefreshToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis())).setExpiration(new Date(System.currentTimeMillis() + jwtTimeRefresh)).signWith(SignatureAlgorithm.HS512, jwtSecret).compact();

    }
}

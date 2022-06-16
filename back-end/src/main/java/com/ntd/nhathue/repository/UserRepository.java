package com.ntd.nhathue.repository;

import com.ntd.nhathue.model.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @EntityGraph(value = User.WITH_ROLES_GRAPH, type = EntityGraph.EntityGraphType.LOAD)
    Optional<User> findByUsername(String username);

    @EntityGraph(value = User.WITH_ROLES_GRAPH, type = EntityGraph.EntityGraphType.LOAD)
    Optional<User> findById(Long id);
}

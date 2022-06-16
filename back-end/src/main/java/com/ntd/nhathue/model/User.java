package com.ntd.nhathue.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
@Data
@EqualsAndHashCode
@NamedEntityGraph(
        name = User.WITH_ROLES_GRAPH,
        attributeNodes = @NamedAttributeNode("roles"))
public class User {

    public static final String WITH_ROLES_GRAPH = "graph.user.roles";

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    private String password;

    private Boolean locked;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    @EqualsAndHashCode.Exclude
    private Set<Role> roles;
}

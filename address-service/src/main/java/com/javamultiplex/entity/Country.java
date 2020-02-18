package com.javamultiplex.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@EqualsAndHashCode(exclude = {"states"})
public class Country implements Serializable {

    private static final long serialVersionUID = 7401316773430587800L;

    @Id
    @GeneratedValue
    private Long id;

    @NotNull(message = "Country name is mandatory")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "Country name should be alphabetic")
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "country", orphanRemoval = true)
    @JsonIgnoreProperties("country")
    private Set<State> states = new HashSet<>();

    public void addState(State state) {
        states.add(state);
        state.setCountry(this);
    }

    public void removeState(State state) {
        states.remove(state);
        state.setCountry(null);
    }
}

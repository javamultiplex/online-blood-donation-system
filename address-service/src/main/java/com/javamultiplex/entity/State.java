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
@EqualsAndHashCode(exclude = {"country", "cities"})
public class State implements Serializable {

    private static final long serialVersionUID = -3082906537419673264L;

    @Id
    @GeneratedValue
    private Long id;

    @NotNull(message = "State name is mandatory")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "State name should be Alphabetic")
    private String name;

    @JsonIgnoreProperties("states")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COUNTRY_ID")

    private Country country;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "state")
    @JsonIgnoreProperties("state")
    private Set<City> cities = new HashSet<>();

    public void addCity(City city) {
        cities.add(city);
        city.setState(this);
    }

    public void removeCity(City city) {
        cities.remove(city);
        city.setState(null);
    }
}

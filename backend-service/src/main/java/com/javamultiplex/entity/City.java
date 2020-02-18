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
@EqualsAndHashCode(exclude = {"state", "areas"})
public class City implements Serializable {

    private static final long serialVersionUID = -1683783466245277111L;

    @Id
    @GeneratedValue
    private Long id;

    @NotNull(message = "City name is mandatory")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "City name should be alphabetic")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "STATE_ID")
    @JsonIgnoreProperties("cities")
    private State state;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "city", orphanRemoval = true)
    @JsonIgnoreProperties("city")
    private Set<Area> areas = new HashSet<>();

    public void addArea(Area area) {
        areas.add(area);
        area.setCity(this);
    }

    public void removeArea(Area area) {
        areas.remove(area);
        area.setCity(null);
    }
}

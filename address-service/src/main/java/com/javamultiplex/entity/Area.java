package com.javamultiplex.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.io.Serializable;

@Entity
@Table
@Getter
@Setter
@EqualsAndHashCode(exclude = {"city"})
public class Area implements Serializable {

    private static final long serialVersionUID = 2283002322060021856L;

    @Id
    @GeneratedValue
    private Long id;

    @NotNull(message = "Area name is mandatory")
    @Pattern(regexp = "^[a-zA-Z ]+$", message = "Area name should be alphabetic")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CITY_ID")
    @JsonIgnoreProperties({"areas"})
    private City city;

}

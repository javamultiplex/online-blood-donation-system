package com.javamultiplex.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;

import java.io.Serializable;

/**
 * @author Rohit Agarwal on 26/04/20 12:59 pm
 * @copyright www.javamultiplex.com
 */
@Getter
public class AreaDTO implements Serializable {
    private static final long serialVersionUID = 3994759829939362672L;
    private Long id;
    private String name;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private CityDTO city;

    public AreaDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public AreaDTO(Long id, String name, CityDTO city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}

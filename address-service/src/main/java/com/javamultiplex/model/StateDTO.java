package com.javamultiplex.model;

import lombok.Getter;

import java.io.Serializable;

/**
 * @author Rohit Agarwal on 18/04/20 4:55 pm
 * @copyright www.javamultiplex.com
 */
@Getter
public class StateDTO implements Serializable {
    private static final long serialVersionUID = -4124701226382899130L;
    private Long id;
    private String name;
    private CountryDTO country;

    public StateDTO(Long id, String name, CountryDTO country) {
        this.id = id;
        this.name = name;
        this.country = country;
    }

    public StateDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}

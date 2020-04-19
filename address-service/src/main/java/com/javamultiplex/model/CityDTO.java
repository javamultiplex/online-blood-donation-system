package com.javamultiplex.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.io.Serializable;

/**
 * @author Rohit Agarwal on 19/04/20 6:19 pm
 * @copyright www.javamultiplex.com
 */
@Getter
public class CityDTO implements Serializable {
    private static final long serialVersionUID = 8513335129322791640L;
    private Long id;
    private String name;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private StateDTO state;

    public CityDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public CityDTO(Long id, String name, StateDTO state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
}

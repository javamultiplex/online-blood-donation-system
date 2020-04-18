package com.javamultiplex.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

/**
 * @author Rohit Agarwal on 18/04/20 5:11 pm
 * @copyright www.javamultiplex.com
 */
@Getter
public class StateList implements Serializable {
    private static final long serialVersionUID = 6822641101870469924L;
    private List<StateDTO> states;
    private CountryDTO country;
    public StateList(List<StateDTO> states, CountryDTO country) {
        this.states = states;
        this.country = country;
    }
}

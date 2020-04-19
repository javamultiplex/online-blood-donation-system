package com.javamultiplex.model;

import lombok.Getter;

import java.io.Serializable;
import java.util.List;

/**
 * @author Rohit Agarwal on 19/04/20 6:21 pm
 * @copyright www.javamultiplex.com
 */
@Getter
public class CityList implements Serializable {
    private static final long serialVersionUID = -6245371548592598765L;
    private List<CityDTO> cities;
    private StateDTO state;

    public CityList(List<CityDTO> cities, StateDTO state) {
        this.cities = cities;
        this.state = state;
    }
}

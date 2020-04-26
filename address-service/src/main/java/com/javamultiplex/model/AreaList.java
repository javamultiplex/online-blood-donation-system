package com.javamultiplex.model;

import lombok.Getter;

import java.io.Serializable;
import java.util.List;

/**
 * @author Rohit Agarwal on 26/04/20 1:02 pm
 * @copyright www.javamultiplex.com
 */
@Getter
public class AreaList implements Serializable {
    private static final long serialVersionUID = 1141618446050916536L;
    private List<AreaDTO> areas;
    private CityDTO city;

    public AreaList(List<AreaDTO> areas, CityDTO city) {
        this.areas = areas;
        this.city = city;
    }
}

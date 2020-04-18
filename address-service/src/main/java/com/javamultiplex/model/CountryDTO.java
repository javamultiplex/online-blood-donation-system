package com.javamultiplex.model;

import lombok.Getter;

import java.io.Serializable;

/**
 * @author Rohit Agarwal on 18/04/20 7:13 pm
 * @copyright www.javamultiplex.com
 */
@Getter
public class CountryDTO implements Serializable {
    private static final long serialVersionUID = 7265127945257942197L;
    private Long id;
    private String name;

    public CountryDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}

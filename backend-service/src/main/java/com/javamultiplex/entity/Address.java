package com.javamultiplex.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author Rohit Agarwal on 26/04/20 9:17 pm
 * @copyright www.javamultiplex.com
 */
@Entity
@Table(name = "ADDRESS")
@Getter
@Setter
@ToString
public class Address implements Serializable {

    private static final long serialVersionUID = 4550072675127556996L;

    @GeneratedValue
    @Id
    private Long id;

    @Column(name = "COUNTRY_NAME")
    private String country;

    @Column(name = "STATE_NAME")
    private String state;

    @Column(name = "CITY_NAME")
    private String city;

    @Column(name="AREA_NAME")
    private String area;

    @Column(name = "COMPLETE_ADDRESS",length = 500)
    private String completeAddress;

    @Column(name = "PIN_CODE")
    private String zip;
}

package com.javamultiplex.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * @author Rohit Agarwal on 17/05/20 7:34 pm
 * @copyright www.javamultiplex.com
 */
@Getter
@Setter
public class BloodDonorDTO implements Serializable {
    private static final long serialVersionUID = 7100917559643055906L;
    private String firstName;
    private String middleName;
    private String lastName;
    private String gender;
    private String bloodGroup;
    private String bodyWeight;
    private String dob;
    private String emailId;
    private String phoneNumber;
    private String countryId;
    private String stateId;
    private String cityId;
    private String areaId;
    private String address;
    private String pincode;
}

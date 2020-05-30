package com.javamultiplex.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * @author Rohit Agarwal on 25/05/20 10:18 pm
 * @copyright www.javamultiplex.com
 */
@Getter
@Setter
public class BloodRecipientDTO implements Serializable {
    private static final long serialVersionUID = -2913601730722468870L;
    private String patientName;
    private String gender;
    private String requiredBloodGroup;
    private Long bloodUnit;
    private String date;
    private String hospitalName;
    private String city;
    private String pincode;
    private String contactName;
    private String emailId;
    private String phoneNumber;
    private String reason;
}

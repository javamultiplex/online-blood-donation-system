package com.javamultiplex.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "BLOOD_DONORS")
@Getter
@Setter
@ToString
public class BloodDonor implements Serializable {
    private static final long serialVersionUID = 6966174184731925614L;
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String fatherName;
    private String gender;
    private String dob;
    private String bloodGroup;
    private String bodyWeight;
    private String emailId;
    private String state;
    private String city;
    private String area;
    private String pincode;
    private String address;
    private String phoneNumber;
//    private String image;
}

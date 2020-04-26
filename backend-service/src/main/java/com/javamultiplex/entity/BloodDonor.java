package com.javamultiplex.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
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

    @Column(name = "NAME")
    private String name;

    @Column(name = "FATHER_NAME")
    private String fatherName;

    @Column(name = "GENDER")
    private String gender;

    @Column(name = "BIRTH_DATE")
    private String dob;

    @Column(name = "BLOOD_GROUP")
    private String bloodGroup;

    @Column(name = "BODY_WEIGHT")
    private String bodyWeight;

    @Column(name = "EMAIL")
    private String emailId;

    @Column(name = "MOBILE")
    private String phoneNumber;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ADDRESS_ID", referencedColumnName = "id")
    private Address address;

    @Column(name = "PROFILE_IMAGE")
    private byte[] image;
}

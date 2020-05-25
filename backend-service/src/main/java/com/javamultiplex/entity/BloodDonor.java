package com.javamultiplex.entity;

import com.javamultiplex.enums.DonorStatus;
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

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "MIDDLE_NAME")
    private String middleName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "GENDER")
    private String gender;

    @Column(name = "BLOOD_GROUP")
    private String bloodGroup;

    @Column(name = "BODY_WEIGHT")
    private String bodyWeight;

    @Column(name = "BIRTH_DATE")
    private String dob;

    @Column(name = "EMAIL")
    private String emailId;

    @Column(name = "MOBILE")
    private String phoneNumber;

    @Embedded
    private Address address;

    @Enumerated(EnumType.STRING)
    @Column(name="STATUS")
    private DonorStatus status;

    @Column(name = "PROFILE_IMAGE")
    private byte[] image;
}

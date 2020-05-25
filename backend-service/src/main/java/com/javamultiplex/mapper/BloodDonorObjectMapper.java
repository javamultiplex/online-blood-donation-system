package com.javamultiplex.mapper;

import com.javamultiplex.client.AddressApiClient;
import com.javamultiplex.entity.Address;
import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.enums.BloodDonorStatus;
import com.javamultiplex.model.BloodDonorDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author Rohit Agarwal on 17/05/20 8:18 pm
 * @copyright www.javamultiplex.com
 */
@Component
public class BloodDonorObjectMapper {

    private final AddressApiClient addressApiClient;

    @Autowired
    public BloodDonorObjectMapper(AddressApiClient addressApiClient) {
        this.addressApiClient = addressApiClient;
    }

    public BloodDonor map(BloodDonorDTO bloodDonorDTO) {
        BloodDonor bloodDonor = new BloodDonor();
        Address address = constructAddress(bloodDonorDTO);
        bloodDonor.setAddress(address);
        bloodDonor.setFirstName(bloodDonorDTO.getFirstName());
        bloodDonor.setMiddleName(bloodDonorDTO.getMiddleName());
        bloodDonor.setLastName(bloodDonorDTO.getLastName());
        bloodDonor.setGender(bloodDonorDTO.getGender());
        bloodDonor.setBloodGroup(bloodDonorDTO.getBloodGroup());
        bloodDonor.setBodyWeight(bloodDonorDTO.getBodyWeight());
        bloodDonor.setDob(bloodDonorDTO.getDob());
        bloodDonor.setEmailId(bloodDonorDTO.getEmailId());
        bloodDonor.setPhoneNumber(bloodDonorDTO.getPhoneNumber());
        bloodDonor.setStatus(BloodDonorStatus.ACTIVE);
        return bloodDonor;
    }

    private Address constructAddress(BloodDonorDTO bloodDonorDTO) {
        Long countryId = Long.parseLong(bloodDonorDTO.getCountryId());
        Long stateId = Long.parseLong(bloodDonorDTO.getStateId());
        Long cityId = Long.parseLong(bloodDonorDTO.getCityId());
        Long areaId = Long.parseLong(bloodDonorDTO.getAreaId());
        String countryName = addressApiClient.getCountryName(countryId);
        String stateName = addressApiClient.getStateName(countryId, stateId);
        String cityName = addressApiClient.getCityName(countryId, stateId, cityId);
        String areaName = addressApiClient.getAreaName(countryId, stateId, cityId, areaId);
        Address address = new Address();
        address.setCountry(countryName);
        address.setState(stateName);
        address.setCity(cityName);
        address.setArea(areaName);
        address.setCompleteAddress(bloodDonorDTO.getAddress());
        address.setZip(bloodDonorDTO.getPincode());
        return address;
    }
}

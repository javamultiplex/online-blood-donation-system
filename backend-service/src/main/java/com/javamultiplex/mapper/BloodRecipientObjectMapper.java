package com.javamultiplex.mapper;

import com.javamultiplex.entity.BloodRecipient;
import com.javamultiplex.enums.BloodRecipientStatus;
import com.javamultiplex.model.BloodRecipientDTO;
import org.springframework.stereotype.Component;

/**
 * @author Rohit Agarwal on 17/05/20 8:18 pm
 * @copyright www.javamultiplex.com
 */
@Component
public class BloodRecipientObjectMapper {

    /**
     *
     * @param bloodRecipientDTO
     * @return
     */
    public BloodRecipient map(BloodRecipientDTO bloodRecipientDTO) {
        BloodRecipient bloodRecipient=new BloodRecipient();
        bloodRecipient.setPatientName(bloodRecipientDTO.getPatientName());
        bloodRecipient.setGender(bloodRecipientDTO.getGender());
        bloodRecipient.setCity(bloodRecipientDTO.getCity());
        bloodRecipient.setBloodUnit(bloodRecipientDTO.getBloodUnit());
        bloodRecipient.setContactName(bloodRecipientDTO.getContactName());
        bloodRecipient.setDate(bloodRecipientDTO.getDate());
        bloodRecipient.setEmailId(bloodRecipientDTO.getEmailId());
        bloodRecipient.setHospitalName(bloodRecipientDTO.getHospitalName());
        bloodRecipient.setRequiredBloodGroup(bloodRecipientDTO.getRequiredBloodGroup());
        bloodRecipient.setPhoneNumber(bloodRecipientDTO.getPhoneNumber());
        bloodRecipient.setPincode(bloodRecipientDTO.getPincode());
        bloodRecipient.setReason(bloodRecipientDTO.getReason());
        bloodRecipient.setStatus(BloodRecipientStatus.PENDING);
        return bloodRecipient;
    }
}

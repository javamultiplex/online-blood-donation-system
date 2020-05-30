package com.javamultiplex.model;

import com.javamultiplex.enums.BloodRecipientStatus;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * @author Rohit Agarwal on 30/05/20 10:27 pm
 * @copyright www.javamultiplex.com
 */
@Getter
@Setter
public class BloodRecipientStatusDTO implements Serializable {
    private static final long serialVersionUID = 3133308032687324453L;
    private BloodRecipientStatus status;
    private String comment;
}

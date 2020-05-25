package com.javamultiplex.model;

import com.javamultiplex.enums.DonorStatus;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * @author Rohit Agarwal on 25/05/20 4:26 pm
 * @copyright www.javamultiplex.com
 */
@Getter
@Setter
public class DonorStatusDTO implements Serializable {
    private static final long serialVersionUID = 4025243218715349607L;
    private DonorStatus status;
}

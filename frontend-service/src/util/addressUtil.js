import React from 'react';

export function listCountries(data) {
    if (data) {
        return data.map((country, index) =>
            <option key={index} value={country.id}>{country.name}</option>)
    } else {
        return null;
    }
}
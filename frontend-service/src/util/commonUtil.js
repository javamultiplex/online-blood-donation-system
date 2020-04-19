import React from 'react';

export function listData(data) {
    if (data) {
        return data.map((object, index) =>
            <option key={index} value={object.id}>{object.name}</option>)
    } else {
        return null;
    }
}


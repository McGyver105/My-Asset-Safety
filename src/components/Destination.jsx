import React from 'react';
import * as api from '../utils/utils'

const Destination = ({origin}) => {
    return (
        <p>
            {api.getDestination(origin)}
        </p>
    );
};

export default Destination;
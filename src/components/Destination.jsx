import React from 'react';
import * as api from '../utils/utils'

const Destination = ({origin}) => {
    return (<>
        <p>
            Assets moved to:
        </p>
        <a
            href={`https://evemaps.dotlan.net/search/${api.getDestination(origin)}`}
            rel="noreferrer"
            target="_blank"
        >{api.getDestination(origin)}</a>
    </>
    );
};

export default Destination;
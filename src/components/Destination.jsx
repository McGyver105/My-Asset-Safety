import React from 'react';
import * as api from '../utils/utils';
import './components.css';

const Destination = ({ origin, invalidSys }) => {
    return (<section className="SearchBox__Destination">
    <p className="Destination__title">
            Destination system:
    </p>
        {origin ? 
    <a
        href={`https://evemaps.dotlan.net/search/${api.getDestination(origin)}`}
        rel="noreferrer"
        target="_blank"
        className="Destination__result"
            >{api.getDestination(origin)}</a>
            : invalidSys ? <p className="Destination__ErrorMessage">Origin is invalid</p> : ''
        }
</section>
);
};

export default Destination;
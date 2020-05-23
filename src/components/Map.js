import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const Map = (props) => {
    return(
        <GoogleMap 
            defaultZoom={13}
            defaultCenter={{ lat: 41.375031, lng: 2.190335 }}
        />
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
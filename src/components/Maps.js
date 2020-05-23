import React from 'react'
import { Map } from '.'
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY

export default () => {
    return (
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`}
          containerElement={<div style={{height: '80vh', marginTop: '3rem'}}/>}
          mapElement={<div style={{height: '100%'}}/>}
          loadingElement={<p>Loading...</p>}
        />
    )
}

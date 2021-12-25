
import React, { Component, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MyLocation = (props) => {


    useEffect(() => {



    }, [])


    return (
      
        <div style={{ height: '400px', width: '500px' }}>
            <h1>map</h1>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC42dZGLkeXWn1ofLJhRrWcVBxFY1-tf2Q' }}
                defaultCenter={{lat: 32.95, lng: 30.33}}
                defaultZoom={15}
            >
                <AnyReactComponent
                    lat={32.95}
                    lng={30.33}
                    text={'props.txt'}
                />
            </GoogleMapReact>
        </div>
    );

}

export default MyLocation;

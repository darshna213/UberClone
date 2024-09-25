import React, { useEffect } from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyc2huYSIsImEiOiJjbTEwbnU2aHkwODFyMmxyNWtzOXg5dTc5In0.bfIdM2RL0HTA-vRzzJEz7A';

const Map = (props) => {
    // console.log(props);
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-99.29011, 39.39172],
            zoom: 4,
        });

        if (props.pickupCoordinates) {
            console.log(props.pickupCoordinates);
            // console.log(map);
            addToMap(map, props.pickupCoordinates);
        }

        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates);
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
           map.fitBounds([
            props.pickupCoordinates,
            props.dropoffCoordinates
           ], {
            padding: 60
           })
        }
    }, [props.pickupCoordinates, props.dropoffCoordinates]);

    //   style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph'
    //   center: [78.9629, 20.5937],
    //   zoom: 4,

    const addToMap = (map, coordinates) => {
        console.log(coordinates);

        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);

    }


    return (
        <Wrapper id='map'></Wrapper>
    )
}

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`
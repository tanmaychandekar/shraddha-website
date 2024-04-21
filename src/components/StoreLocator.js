import React, { useRef, useEffect } from 'react'
import mapboxgl, { Marker } from 'mapbox-gl';
import data from '../data/mapData.json'


const StoreLocator = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  let el = '';

 mapboxgl.accessToken = "pk.eyJ1IjoidGFubWF5MjIiLCJhIjoiY2x2M2g4ank2MG9ueDJxcjdyMG1wd2t6eSJ9.r-D6BKRMqbh7NyHMpCodaQ"

 const mapView = (i) => {   

    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [78.460, 17.4575],
    zoom: 11
  });

        data.features.map((feature , idx) => {

            el = document.createElement('div');
            el.className = 'marker';

            new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) 
                .setHTML(
                  `<h3>${feature.properties.title}</h3>
                  <p>${feature.properties.description}</p>
                  <p>
                  ${feature.properties.pno} <br/>
                  <b><a href=${feature.properties.link} target="_"> Get Directions </a></b>
                  </p>
                  `
                )
            )
            .addTo(map.current);

            if(idx === i) {
              el.click();
            }

        }
    );
  }

 useEffect(() => {
   mapView();
  },[]);

  return (
    <div className='division container store-locator-container' id='locator'>
     <h1>Store Locator</h1>
     <div className="store-locator">
     <div className="stores">
      {data.features.map((feature, i) =>{
        return (
          <div className="store" onClick={() => {mapView(i)}} style={{cursor:'pointer'}} >
            <h3>{feature.properties.title}</h3>
            <p>{feature.properties.address} <br/>
               {feature.properties.pno}</p>
          </div>
        )
      } )}
      </div>
      <div ref={mapContainer} className="map-container" />
     </div>
    </div>
  )
}

export default StoreLocator
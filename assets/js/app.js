"use strict";

const btn = document.querySelector("button");

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRud2FjaHVrd3UiLCJhIjoiY200a3ZuZHN5MHRkbzJqbzlkbmFuZms2ZCJ9.MvyhkYEwfB2Sjft0jAofwQ';
const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [0, 0], 
    zoom: 5 
  });


  function getLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    
    map.flyTo({
      center: [longitude, latitude], 
      zoom: 14,  
      essential: true 
    });
  }
  locationIcon.style.opacity = "1";
  
  const accuracy = {
    enableHighAccuracy: true
  };

  btn.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLocation, (error) => {
        alert("Unable to retrieve your location.");
        console.error(error);
      }, accuracy);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });
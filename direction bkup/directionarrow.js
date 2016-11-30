var directionsService;
var directionsDisplay;
var map;
var curlatlng;
var flag=0;
var x = 0;
var intervalTime=5000;
var interval;
var coordsArr = [];
var flagNavigate = 0;
window.onload = initMap;
function initMap() {

   directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
   map = new google.maps.Map(document.getElementById('map'), {
    zoom:13,
    center: {lat: 17.385044, lng: 78.486671}
  });

 
   // console.log(document.getElementById('end'));

   //  console.log(document.getElementById('startionic'));

     //$("#startionic").attr("autocomplete", "on");


    

// alert(document.getElementById('startionic'));
// alert(document.getElementById('end'));
   // Create the autocomplete object, restricting the search to geographical location types.
  // autocompleteend = new google.maps.places.Autocomplete(
  //     * @type {!HTMLInputElement} (document.getElementById('end')),
  //     {types: ['geocode']});
  // autocompletestart = new google.maps.places.Autocomplete(
  //     * @type {!HTMLInputElement} (document.getElementById('startionic')),
  //     {types: ['geocode']});

 window.onload = initMap;
 showCurrentSourceInText();

}


function showCurrentSourceInText()
{
   //  heading = google.maps.geometry.spherical.computeHeading(
   // new google.maps.LatLng(17.442366, 78.677964),
   // new google.maps.LatLng(17.43927547, 78.66911856)
   //  );
   //  alert(heading);

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showCurrentPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
}


var currentLocationMarker;
function showCurrentPosition(position) {
 var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
       var ele = google.maps.SymbolPath.FORWARD_CLOSED_ARROW;
//        var ele = " M 0.00 0.00 L 81.00 0.00 L 81.00 34.76 C 80.17 33.86 79.27 33.03 78.35 32.22 C 77.52 32.68 76.70 33.13 75.86 33.56 C 74.42 34.16 72.95 34.72 71.48 35.27 C 71.09 34.95 70.29 34.33 69.89 34.02 C 71.07 33.76 72.26 33.51 73.46 33.27 C 76.47 24.97 71.44 16.84 72.45 8.43 C 72.18 8.22 71.64 7.79 71.38 7.58 C 69.50 6.08 67.47 4.75 65.23 3.87 C 59.50 1.43 53.10 1.64 47.00 1.01 C 37.92 1.10 28.53 0.05 19.77 3.04 C 14.38 3.70 9.58 7.67 8.68 13.15 C 7.87 19.66 6.50 26.47 8.71 32.87 C 6.64 32.88 4.55 31.50 2.53 32.08 C 1.53 32.60 0.69 33.32 0.01 34.24 C 1.52 34.76 3.01 35.34 4.55 35.73 C 4.20 41.28 3.82 46.84 3.66 52.40 C 5.59 52.93 7.52 53.45 9.45 53.97 C 8.98 57.94 8.80 61.94 8.48 65.92 C 8.17 69.40 6.39 72.53 5.95 75.98 C 5.38 80.60 5.21 85.52 7.42 89.77 C 9.14 92.93 8.10 96.54 7.88 99.92 C 7.45 103.70 7.63 107.53 8.32 111.27 C 8.61 117.64 8.05 123.98 7.51 130.32 C 17.04 132.48 26.94 129.90 36.43 131.96 C 29.74 135.14 22.31 132.10 15.32 132.40 C 15.35 133.41 15.41 135.44 15.43 136.45 C 21.58 135.95 27.85 137.08 33.89 135.51 C 37.20 136.33 40.51 135.99 43.82 135.50 C 49.61 137.15 55.65 135.80 61.54 136.63 C 61.95 135.28 62.35 133.93 62.74 132.58 C 59.11 131.59 55.62 133.46 51.99 133.31 C 49.01 133.28 46.01 133.38 43.04 133.04 C 42.72 132.61 42.09 131.74 41.77 131.30 C 50.68 131.08 59.60 131.59 68.51 131.32 C 68.79 121.91 68.35 112.47 69.26 103.10 C 69.36 98.88 69.53 94.66 69.42 90.44 C 70.13 89.85 70.84 89.27 71.56 88.68 C 71.22 82.83 72.85 76.53 70.68 70.97 C 70.12 65.49 70.81 59.98 70.79 54.48 C 72.33 54.40 73.86 54.32 75.40 54.24 C 76.33 48.74 75.64 43.18 75.69 37.64 C 77.46 37.45 79.23 37.25 81.00 37.05 L 81.00 138.00 L 0.00 138.00 L 0.00 0.00 Z"
// +" M 19.77 3.04 C 28.53 0.05 37.92 1.10 47.00 1.01 C 53.10 1.64 59.50 1.43 65.23 3.87 C 62.89 3.47 60.52 3.16 58.17 2.82 C 63.19 5.35 64.88 11.18 69.49 14.10 C 69.16 12.22 68.80 10.34 68.41 8.47 C 69.15 8.24 70.63 7.80 71.38 7.58 C 71.64 7.79 72.18 8.22 72.45 8.43 C 71.44 16.84 76.47 24.97 73.46 33.27 C 72.55 32.81 70.75 31.89 69.84 31.42 C 69.08 30.08 68.30 28.74 67.50 27.42 L 67.36 27.16 C 66.05 26.29 64.70 25.49 63.30 24.78 C 64.19 24.68 65.98 24.48 66.88 24.38 C 65.09 16.34 60.75 9.16 56.11 2.46 C 47.02 1.49 37.90 1.50 28.78 2.09 C 25.76 2.23 22.75 2.57 19.77 3.04 Z"
// +" M 19.77 3.04 C 22.75 2.57 25.76 2.23 28.78 2.09 C 25.94 4.53 22.63 6.38 19.94 8.98 C 18.05 10.82 17.65 13.53 16.93 15.93 C 16.16 19.04 14.43 22.03 14.99 25.32 C 15.31 26.93 15.80 28.50 16.41 30.03 C 20.03 26.07 25.57 27.68 30.23 26.51 C 35.72 25.22 41.41 25.62 46.97 26.20 C 52.46 26.86 58.14 25.61 63.49 27.39 C 63.59 27.61 63.80 28.05 63.91 28.27 C 58.45 29.21 53.06 27.36 47.60 27.94 C 40.73 27.04 33.81 27.62 26.91 27.68 C 24.38 27.86 20.76 27.78 19.73 30.68 C 18.85 35.65 19.42 40.74 19.36 45.76 C 19.93 45.79 21.06 45.85 21.63 45.88 C 21.72 40.79 21.55 35.57 23.25 30.69 C 23.83 36.27 23.45 41.88 23.67 47.47 C 35.24 47.68 46.81 47.33 58.39 47.47 C 59.08 47.48 59.77 47.51 60.47 47.55 C 61.24 47.63 62.78 47.80 63.56 47.88 C 64.83 48.50 66.07 49.19 67.31 49.88 C 67.49 51.21 67.67 52.53 67.86 53.86 C 67.00 54.29 66.14 54.92 65.12 54.78 C 60.96 54.69 56.81 54.37 52.65 54.61 C 52.19 52.93 51.80 51.24 51.45 49.55 C 40.42 49.99 29.38 49.13 18.35 49.59 C 17.88 51.74 16.84 53.66 15.35 55.27 C 14.02 54.06 12.68 52.86 11.34 51.66 C 11.34 49.62 11.34 47.58 11.35 45.55 C 11.91 45.25 13.03 44.66 13.59 44.37 C 13.57 42.29 13.81 40.04 12.36 38.34 C 12.39 37.21 12.44 36.08 12.49 34.96 C 13.42 34.12 14.35 33.27 15.28 32.42 C 14.05 31.54 12.79 30.70 11.51 29.89 C 12.01 26.35 12.50 22.81 12.55 19.23 C 9.22 17.15 10.58 12.85 11.45 9.77 C 12.47 5.88 16.56 4.61 19.77 3.04 Z"
// +" M 28.78 2.09 C 37.90 1.50 47.02 1.49 56.11 2.46 C 60.75 9.16 65.09 16.34 66.88 24.38 C 65.98 24.48 64.19 24.68 63.30 24.78 C 58.41 24.22 53.61 23.13 48.86 21.86 C 41.13 22.66 33.08 23.12 25.47 21.22 C 25.59 21.68 25.82 22.61 25.94 23.08 C 22.20 23.32 18.51 24.02 14.99 25.32 C 14.43 22.03 16.16 19.04 16.93 15.93 C 17.65 13.53 18.05 10.82 19.94 8.98 C 22.63 6.38 25.94 4.53 28.78 2.09 Z"
// +" M 8.68 13.15 C 9.58 7.67 14.38 3.70 19.77 3.04 C 16.56 4.61 12.47 5.88 11.45 9.77 C 10.58 12.85 9.22 17.15 12.55 19.23 C 12.50 22.81 12.01 26.35 11.51 29.89 C 12.79 30.70 14.05 31.54 15.28 32.42 C 14.35 33.27 13.42 34.12 12.49 34.96 C 12.44 36.08 12.39 37.21 12.36 38.34 C 13.81 40.04 13.57 42.29 13.59 44.37 C 13.03 44.66 11.91 45.25 11.35 45.55 C 11.34 47.58 11.34 49.62 11.34 51.66 C 12.68 52.86 14.02 54.06 15.35 55.27 C 16.84 53.66 17.88 51.74 18.35 49.59 C 29.38 49.13 40.42 49.99 51.45 49.55 C 51.80 51.24 52.19 52.93 52.65 54.61 C 56.81 54.37 60.96 54.69 65.12 54.78 C 66.14 54.92 67.00 54.29 67.86 53.86 C 68.46 53.40 69.65 52.48 70.25 52.02 C 70.28 50.52 70.32 49.01 70.35 47.51 C 69.92 47.06 69.07 46.16 68.64 45.71 C 69.57 41.19 67.64 36.63 68.74 32.17 L 69.84 31.42 C 70.75 31.89 72.55 32.81 73.46 33.27 C 72.26 33.51 71.07 33.76 69.89 34.02 C 70.29 34.33 71.09 34.95 71.48 35.27 C 72.95 34.72 74.42 34.16 75.86 33.56 C 77.90 32.22 78.95 35.03 80.18 36.06 C 78.43 36.40 76.67 36.63 74.91 36.85 C 75.96 42.63 75.00 48.46 74.48 54.23 C 72.90 54.27 71.32 54.32 69.74 54.37 C 69.82 59.51 69.41 64.65 69.61 69.79 C 69.88 70.09 70.42 70.68 70.68 70.97 C 72.85 76.53 71.22 82.83 71.56 88.68 C 70.84 89.27 70.13 89.85 69.42 90.44 C 69.53 94.66 69.36 98.88 69.26 103.10 C 68.35 112.47 68.79 121.91 68.51 131.32 C 59.60 131.59 50.68 131.08 41.77 131.30 C 42.09 131.74 42.72 132.61 43.04 133.04 C 46.01 133.38 49.01 133.28 51.99 133.31 C 55.62 133.46 59.11 131.59 62.74 132.58 C 62.35 133.93 61.95 135.28 61.54 136.63 C 55.65 135.80 49.61 137.15 43.82 135.50 C 40.51 135.99 37.20 136.33 33.89 135.51 C 27.85 137.08 21.58 135.95 15.43 136.45 C 15.41 135.44 15.35 133.41 15.32 132.40 C 22.31 132.10 29.74 135.14 36.43 131.96 C 26.94 129.90 17.04 132.48 7.51 130.32 C 8.05 123.98 8.61 117.64 8.32 111.27 C 8.65 105.18 8.73 99.08 8.65 92.98 C 8.72 89.50 6.42 86.48 6.51 82.98 C 6.46 79.31 6.51 75.52 7.87 72.05 C 10.51 66.05 9.54 59.32 9.46 52.96 C 7.83 52.77 6.21 52.58 4.58 52.38 C 4.97 46.55 5.43 40.73 5.48 34.88 C 4.08 34.72 2.11 34.37 2.28 32.52 L 2.53 32.08 C 4.55 31.50 6.64 32.88 8.71 32.87 C 6.50 26.47 7.87 19.66 8.68 13.15 Z"
// +" M 58.17 2.82 C 60.52 3.16 62.89 3.47 65.23 3.87 C 67.47 4.75 69.50 6.08 71.38 7.58 C 70.63 7.80 69.15 8.24 68.41 8.47 C 68.80 10.34 69.16 12.22 69.49 14.10 C 64.88 11.18 63.19 5.35 58.17 2.82 Z"
// +" M 25.47 21.22 C 33.08 23.12 41.13 22.66 48.86 21.86 C 53.61 23.13 58.41 24.22 63.30 24.78 C 64.70 25.49 66.05 26.29 67.36 27.16 L 67.50 27.42 C 66.81 28.81 65.16 28.87 63.91 28.27 C 63.80 28.05 63.59 27.61 63.49 27.39 C 58.14 25.61 52.46 26.86 46.97 26.20 C 41.41 25.62 35.72 25.22 30.23 26.51 C 25.57 27.68 20.03 26.07 16.41 30.03 C 15.80 28.50 15.31 26.93 14.99 25.32 C 18.51 24.02 22.20 23.32 25.94 23.08 C 25.82 22.61 25.59 21.68 25.47 21.22 Z" 
// +" M 26.91 27.68 C 33.81 27.62 40.73 27.04 47.60 27.94 C 52.70 28.45 57.88 29.09 62.53 31.41 C 63.92 36.81 62.95 42.39 63.56 47.88 C 62.78 47.80 61.24 47.63 60.47 47.55 C 59.97 42.19 61.58 36.54 59.73 31.38 C 59.38 36.75 59.00 42.12 58.39 47.47 C 46.81 47.33 35.24 47.68 23.67 47.47 C 23.45 41.88 23.83 36.27 23.25 30.69 C 21.55 35.57 21.72 40.79 21.63 45.88 C 21.06 45.85 19.93 45.79 19.36 45.76 C 19.42 40.74 18.85 35.65 19.73 30.68 C 20.76 27.78 24.38 27.86 26.91 27.68 Z" 
// +" M 67.50 27.42 C 68.30 28.74 69.08 30.08 69.84 31.42 L 68.74 32.17 C 67.64 36.63 69.57 41.19 68.64 45.71 C 67.96 40.84 67.51 35.94 67.81 31.02 C 66.44 30.21 64.64 29.83 63.91 28.27 C 65.16 28.87 66.81 28.81 67.50 27.42 Z" 
// +" M 47.60 27.94 C 53.06 27.36 58.45 29.21 63.91 28.27 C 64.64 29.83 66.44 30.21 67.81 31.02 C 67.51 35.94 67.96 40.84 68.64 45.71 C 69.07 46.16 69.92 47.06 70.35 47.51 C 70.32 49.01 70.28 50.52 70.25 52.02 C 69.65 52.48 68.46 53.40 67.86 53.86 C 67.67 52.53 67.49 51.21 67.31 49.88 C 66.07 49.19 64.83 48.50 63.56 47.88 C 62.95 42.39 63.92 36.81 62.53 31.41 C 57.88 29.09 52.70 28.45 47.60 27.94 Z" 
// +" M 0.01 34.24 C 0.69 33.32 1.53 32.60 2.53 32.08 L 2.28 32.52 C 2.11 34.37 4.08 34.72 5.48 34.88 C 5.43 40.73 4.97 46.55 4.58 52.38 C 6.21 52.58 7.83 52.77 9.46 52.96 C 9.54 59.32 10.51 66.05 7.87 72.05 C 6.51 75.52 6.46 79.31 6.51 82.98 C 6.42 86.48 8.72 89.50 8.65 92.98 C 8.73 99.08 8.65 105.18 8.32 111.27 C 7.63 107.53 7.45 103.70 7.88 99.92 C 8.10 96.54 9.14 92.93 7.42 89.77 C 5.21 85.52 5.38 80.60 5.95 75.98 C 6.39 72.53 8.17 69.40 8.48 65.92 C 8.80 61.94 8.98 57.94 9.45 53.97 C 7.52 53.45 5.59 52.93 3.66 52.40 C 3.82 46.84 4.20 41.28 4.55 35.73 C 3.01 35.34 1.52 34.76 0.01 34.24 Z" 
// +" M 59.73 31.38 C 61.58 36.54 59.97 42.19 60.47 47.55 C 59.77 47.51 59.08 47.48 58.39 47.47 C 59.00 42.12 59.38 36.75 59.73 31.38 Z" 
// +" M 75.86 33.56 C 76.70 33.13 77.52 32.68 78.35 32.22 C 79.27 33.03 80.17 33.86 81.00 34.76 L 81.00 37.05 C 79.23 37.25 77.46 37.45 75.69 37.64 C 75.64 43.18 76.33 48.74 75.40 54.24 C 73.86 54.32 72.33 54.40 70.79 54.48 C 70.81 59.98 70.12 65.49 70.68 70.97 C 70.42 70.68 69.88 70.09 69.61 69.79 C 69.41 64.65 69.82 59.51 69.74 54.37 C 71.32 54.32 72.90 54.27 74.48 54.23 C 75.00 48.46 75.96 42.63 74.91 36.85 C 76.67 36.63 78.43 36.40 80.18 36.06 C 78.95 35.03 77.90 32.22 75.86 33.56 Z";

        writeAddressName(userLatLng);
        var curlat = position.coords.latitude;
        var curlng = position.coords.longitude; 
        var uluru = {lat: curlat, lng: curlng};
        currentLocationMarker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: {
                fillColor:'#990000',  
                fillOpacity: 0.8,
                path: ele,
                scale: 5,
                
//                 url:'data:image/svg+xml;utf-8, \
//                 <svg width="81pt" height="138pt" viewBox="0 0 81 138" version="1.1" xmlns="http://www.w3.org/2000/svg">\
// <path fill="#ffffff" d=" M 0.00 0.00 L 81.00 0.00 L 81.00 34.76 C 80.17 33.86 79.27 33.03 78.35 32.22 C 77.52 32.68 76.70 33.13 75.86 33.56 C 74.42 34.16 72.95 34.72 71.48 35.27 C 71.09 34.95 70.29 34.33 69.89 34.02 C 71.07 33.76 72.26 33.51 73.46 33.27 C 76.47 24.97 71.44 16.84 72.45 8.43 C 72.18 8.22 71.64 7.79 71.38 7.58 C 69.50 6.08 67.47 4.75 65.23 3.87 C 59.50 1.43 53.10 1.64 47.00 1.01 C 37.92 1.10 28.53 0.05 19.77 3.04 C 14.38 3.70 9.58 7.67 8.68 13.15 C 7.87 19.66 6.50 26.47 8.71 32.87 C 6.64 32.88 4.55 31.50 2.53 32.08 C 1.53 32.60 0.69 33.32 0.01 34.24 C 1.52 34.76 3.01 35.34 4.55 35.73 C 4.20 41.28 3.82 46.84 3.66 52.40 C 5.59 52.93 7.52 53.45 9.45 53.97 C 8.98 57.94 8.80 61.94 8.48 65.92 C 8.17 69.40 6.39 72.53 5.95 75.98 C 5.38 80.60 5.21 85.52 7.42 89.77 C 9.14 92.93 8.10 96.54 7.88 99.92 C 7.45 103.70 7.63 107.53 8.32 111.27 C 8.61 117.64 8.05 123.98 7.51 130.32 C 17.04 132.48 26.94 129.90 36.43 131.96 C 29.74 135.14 22.31 132.10 15.32 132.40 C 15.35 133.41 15.41 135.44 15.43 136.45 C 21.58 135.95 27.85 137.08 33.89 135.51 C 37.20 136.33 40.51 135.99 43.82 135.50 C 49.61 137.15 55.65 135.80 61.54 136.63 C 61.95 135.28 62.35 133.93 62.74 132.58 C 59.11 131.59 55.62 133.46 51.99 133.31 C 49.01 133.28 46.01 133.38 43.04 133.04 C 42.72 132.61 42.09 131.74 41.77 131.30 C 50.68 131.08 59.60 131.59 68.51 131.32 C 68.79 121.91 68.35 112.47 69.26 103.10 C 69.36 98.88 69.53 94.66 69.42 90.44 C 70.13 89.85 70.84 89.27 71.56 88.68 C 71.22 82.83 72.85 76.53 70.68 70.97 C 70.12 65.49 70.81 59.98 70.79 54.48 C 72.33 54.40 73.86 54.32 75.40 54.24 C 76.33 48.74 75.64 43.18 75.69 37.64 C 77.46 37.45 79.23 37.25 81.00 37.05 L 81.00 138.00 L 0.00 138.00 L 0.00 0.00 Z" />\
// <path fill="#fd9b9b" d=" M 19.77 3.04 C 28.53 0.05 37.92 1.10 47.00 1.01 C 53.10 1.64 59.50 1.43 65.23 3.87 C 62.89 3.47 60.52 3.16 58.17 2.82 C 63.19 5.35 64.88 11.18 69.49 14.10 C 69.16 12.22 68.80 10.34 68.41 8.47 C 69.15 8.24 70.63 7.80 71.38 7.58 C 71.64 7.79 72.18 8.22 72.45 8.43 C 71.44 16.84 76.47 24.97 73.46 33.27 C 72.55 32.81 70.75 31.89 69.84 31.42 C 69.08 30.08 68.30 28.74 67.50 27.42 L 67.36 27.16 C 66.05 26.29 64.70 25.49 63.30 24.78 C 64.19 24.68 65.98 24.48 66.88 24.38 C 65.09 16.34 60.75 9.16 56.11 2.46 C 47.02 1.49 37.90 1.50 28.78 2.09 C 25.76 2.23 22.75 2.57 19.77 3.04 Z" />\
// <path fill="#990000" d=" M 19.77 3.04 C 22.75 2.57 25.76 2.23 28.78 2.09 C 25.94 4.53 22.63 6.38 19.94 8.98 C 18.05 10.82 17.65 13.53 16.93 15.93 C 16.16 19.04 14.43 22.03 14.99 25.32 C 15.31 26.93 15.80 28.50 16.41 30.03 C 20.03 26.07 25.57 27.68 30.23 26.51 C 35.72 25.22 41.41 25.62 46.97 26.20 C 52.46 26.86 58.14 25.61 63.49 27.39 C 63.59 27.61 63.80 28.05 63.91 28.27 C 58.45 29.21 53.06 27.36 47.60 27.94 C 40.73 27.04 33.81 27.62 26.91 27.68 C 24.38 27.86 20.76 27.78 19.73 30.68 C 18.85 35.65 19.42 40.74 19.36 45.76 C 19.93 45.79 21.06 45.85 21.63 45.88 C 21.72 40.79 21.55 35.57 23.25 30.69 C 23.83 36.27 23.45 41.88 23.67 47.47 C 35.24 47.68 46.81 47.33 58.39 47.47 C 59.08 47.48 59.77 47.51 60.47 47.55 C 61.24 47.63 62.78 47.80 63.56 47.88 C 64.83 48.50 66.07 49.19 67.31 49.88 C 67.49 51.21 67.67 52.53 67.86 53.86 C 67.00 54.29 66.14 54.92 65.12 54.78 C 60.96 54.69 56.81 54.37 52.65 54.61 C 52.19 52.93 51.80 51.24 51.45 49.55 C 40.42 49.99 29.38 49.13 18.35 49.59 C 17.88 51.74 16.84 53.66 15.35 55.27 C 14.02 54.06 12.68 52.86 11.34 51.66 C 11.34 49.62 11.34 47.58 11.35 45.55 C 11.91 45.25 13.03 44.66 13.59 44.37 C 13.57 42.29 13.81 40.04 12.36 38.34 C 12.39 37.21 12.44 36.08 12.49 34.96 C 13.42 34.12 14.35 33.27 15.28 32.42 C 14.05 31.54 12.79 30.70 11.51 29.89 C 12.01 26.35 12.50 22.81 12.55 19.23 C 9.22 17.15 10.58 12.85 11.45 9.77 C 12.47 5.88 16.56 4.61 19.77 3.04 Z" />\
// <path fill="#ff0000" d=" M 28.78 2.09 C 37.90 1.50 47.02 1.49 56.11 2.46 C 60.75 9.16 65.09 16.34 66.88 24.38 C 65.98 24.48 64.19 24.68 63.30 24.78 C 58.41 24.22 53.61 23.13 48.86 21.86 C 41.13 22.66 33.08 23.12 25.47 21.22 C 25.59 21.68 25.82 22.61 25.94 23.08 C 22.20 23.32 18.51 24.02 14.99 25.32 C 14.43 22.03 16.16 19.04 16.93 15.93 C 17.65 13.53 18.05 10.82 19.94 8.98 C 22.63 6.38 25.94 4.53 28.78 2.09 Z" />\
// <path fill="#080808" d=" M 8.68 13.15 C 9.58 7.67 14.38 3.70 19.77 3.04 C 16.56 4.61 12.47 5.88 11.45 9.77 C 10.58 12.85 9.22 17.15 12.55 19.23 C 12.50 22.81 12.01 26.35 11.51 29.89 C 12.79 30.70 14.05 31.54 15.28 32.42 C 14.35 33.27 13.42 34.12 12.49 34.96 C 12.44 36.08 12.39 37.21 12.36 38.34 C 13.81 40.04 13.57 42.29 13.59 44.37 C 13.03 44.66 11.91 45.25 11.35 45.55 C 11.34 47.58 11.34 49.62 11.34 51.66 C 12.68 52.86 14.02 54.06 15.35 55.27 C 16.84 53.66 17.88 51.74 18.35 49.59 C 29.38 49.13 40.42 49.99 51.45 49.55 C 51.80 51.24 52.19 52.93 52.65 54.61 C 56.81 54.37 60.96 54.69 65.12 54.78 C 66.14 54.92 67.00 54.29 67.86 53.86 C 68.46 53.40 69.65 52.48 70.25 52.02 C 70.28 50.52 70.32 49.01 70.35 47.51 C 69.92 47.06 69.07 46.16 68.64 45.71 C 69.57 41.19 67.64 36.63 68.74 32.17 L 69.84 31.42 C 70.75 31.89 72.55 32.81 73.46 33.27 C 72.26 33.51 71.07 33.76 69.89 34.02 C 70.29 34.33 71.09 34.95 71.48 35.27 C 72.95 34.72 74.42 34.16 75.86 33.56 C 77.90 32.22 78.95 35.03 80.18 36.06 C 78.43 36.40 76.67 36.63 74.91 36.85 C 75.96 42.63 75.00 48.46 74.48 54.23 C 72.90 54.27 71.32 54.32 69.74 54.37 C 69.82 59.51 69.41 64.65 69.61 69.79 C 69.88 70.09 70.42 70.68 70.68 70.97 C 72.85 76.53 71.22 82.83 71.56 88.68 C 70.84 89.27 70.13 89.85 69.42 90.44 C 69.53 94.66 69.36 98.88 69.26 103.10 C 68.35 112.47 68.79 121.91 68.51 131.32 C 59.60 131.59 50.68 131.08 41.77 131.30 C 42.09 131.74 42.72 132.61 43.04 133.04 C 46.01 133.38 49.01 133.28 51.99 133.31 C 55.62 133.46 59.11 131.59 62.74 132.58 C 62.35 133.93 61.95 135.28 61.54 136.63 C 55.65 135.80 49.61 137.15 43.82 135.50 C 40.51 135.99 37.20 136.33 33.89 135.51 C 27.85 137.08 21.58 135.95 15.43 136.45 C 15.41 135.44 15.35 133.41 15.32 132.40 C 22.31 132.10 29.74 135.14 36.43 131.96 C 26.94 129.90 17.04 132.48 7.51 130.32 C 8.05 123.98 8.61 117.64 8.32 111.27 C 8.65 105.18 8.73 99.08 8.65 92.98 C 8.72 89.50 6.42 86.48 6.51 82.98 C 6.46 79.31 6.51 75.52 7.87 72.05 C 10.51 66.05 9.54 59.32 9.46 52.96 C 7.83 52.77 6.21 52.58 4.58 52.38 C 4.97 46.55 5.43 40.73 5.48 34.88 C 4.08 34.72 2.11 34.37 2.28 32.52 L 2.53 32.08 C 4.55 31.50 6.64 32.88 8.71 32.87 C 6.50 26.47 7.87 19.66 8.68 13.15 Z" />\
// <path fill="#ff0000" d=" M 58.17 2.82 C 60.52 3.16 62.89 3.47 65.23 3.87 C 67.47 4.75 69.50 6.08 71.38 7.58 C 70.63 7.80 69.15 8.24 68.41 8.47 C 68.80 10.34 69.16 12.22 69.49 14.10 C 64.88 11.18 63.19 5.35 58.17 2.82 Z" />\
// <path fill="#080808" d=" M 25.47 21.22 C 33.08 23.12 41.13 22.66 48.86 21.86 C 53.61 23.13 58.41 24.22 63.30 24.78 C 64.70 25.49 66.05 26.29 67.36 27.16 L 67.50 27.42 C 66.81 28.81 65.16 28.87 63.91 28.27 C 63.80 28.05 63.59 27.61 63.49 27.39 C 58.14 25.61 52.46 26.86 46.97 26.20 C 41.41 25.62 35.72 25.22 30.23 26.51 C 25.57 27.68 20.03 26.07 16.41 30.03 C 15.80 28.50 15.31 26.93 14.99 25.32 C 18.51 24.02 22.20 23.32 25.94 23.08 C 25.82 22.61 25.59 21.68 25.47 21.22 Z" />\
// <path fill="#ff0000" d=" M 26.91 27.68 C 33.81 27.62 40.73 27.04 47.60 27.94 C 52.70 28.45 57.88 29.09 62.53 31.41 C 63.92 36.81 62.95 42.39 63.56 47.88 C 62.78 47.80 61.24 47.63 60.47 47.55 C 59.97 42.19 61.58 36.54 59.73 31.38 C 59.38 36.75 59.00 42.12 58.39 47.47 C 46.81 47.33 35.24 47.68 23.67 47.47 C 23.45 41.88 23.83 36.27 23.25 30.69 C 21.55 35.57 21.72 40.79 21.63 45.88 C 21.06 45.85 19.93 45.79 19.36 45.76 C 19.42 40.74 18.85 35.65 19.73 30.68 C 20.76 27.78 24.38 27.86 26.91 27.68 Z" />\
// <path fill="#990000" d=" M 67.50 27.42 C 68.30 28.74 69.08 30.08 69.84 31.42 L 68.74 32.17 C 67.64 36.63 69.57 41.19 68.64 45.71 C 67.96 40.84 67.51 35.94 67.81 31.02 C 66.44 30.21 64.64 29.83 63.91 28.27 C 65.16 28.87 66.81 28.81 67.50 27.42 Z" />\
// <path fill="#fd9b9b" d=" M 47.60 27.94 C 53.06 27.36 58.45 29.21 63.91 28.27 C 64.64 29.83 66.44 30.21 67.81 31.02 C 67.51 35.94 67.96 40.84 68.64 45.71 C 69.07 46.16 69.92 47.06 70.35 47.51 C 70.32 49.01 70.28 50.52 70.25 52.02 C 69.65 52.48 68.46 53.40 67.86 53.86 C 67.67 52.53 67.49 51.21 67.31 49.88 C 66.07 49.19 64.83 48.50 63.56 47.88 C 62.95 42.39 63.92 36.81 62.53 31.41 C 57.88 29.09 52.70 28.45 47.60 27.94 Z" />\
// <path fill="#fd9b9b" d=" M 0.01 34.24 C 0.69 33.32 1.53 32.60 2.53 32.08 L 2.28 32.52 C 2.11 34.37 4.08 34.72 5.48 34.88 C 5.43 40.73 4.97 46.55 4.58 52.38 C 6.21 52.58 7.83 52.77 9.46 52.96 C 9.54 59.32 10.51 66.05 7.87 72.05 C 6.51 75.52 6.46 79.31 6.51 82.98 C 6.42 86.48 8.72 89.50 8.65 92.98 C 8.73 99.08 8.65 105.18 8.32 111.27 C 7.63 107.53 7.45 103.70 7.88 99.92 C 8.10 96.54 9.14 92.93 7.42 89.77 C 5.21 85.52 5.38 80.60 5.95 75.98 C 6.39 72.53 8.17 69.40 8.48 65.92 C 8.80 61.94 8.98 57.94 9.45 53.97 C 7.52 53.45 5.59 52.93 3.66 52.40 C 3.82 46.84 4.20 41.28 4.55 35.73 C 3.01 35.34 1.52 34.76 0.01 34.24 Z" />\
// <path fill="#fd9b9b" d=" M 59.73 31.38 C 61.58 36.54 59.97 42.19 60.47 47.55 C 59.77 47.51 59.08 47.48 58.39 47.47 C 59.00 42.12 59.38 36.75 59.73 31.38 Z" />\
// <path fill="#fd9b9b" d=" M 75.86 33.56 C 76.70 33.13 77.52 32.68 78.35 32.22 C 79.27 33.03 80.17 33.86 81.00 34.76 L 81.00 37.05 C 79.23 37.25 77.46 37.45 75.69 37.64 C 75.64 43.18 76.33 48.74 75.40 54.24 C 73.86 54.32 72.33 54.40 70.79 54.48 C 70.81 59.98 70.12 65.49 70.68 70.97 C 70.42 70.68 69.88 70.09 69.61 69.79 C 69.41 64.65 69.82 59.51 69.74 54.37 C 71.32 54.32 72.90 54.27 74.48 54.23 C 75.00 48.46 75.96 42.63 74.91 36.85 C 76.67 36.63 78.43 36.40 80.18 36.06 C 78.95 35.03 77.90 32.22 75.86 33.56 Z" />\
// </svg>',
                rotation:0
                }
        });
       //currentLocationMarker.setMap(null); 
}

//writes current location address to source input field 
function writeAddressName(latLng) {

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          "location": latLng
        },
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK)
          {
          var addressInText = results[0].formatted_address; 
          
         // document.getElementById('start').value =String(addressInText); 
          }
          else
          {
            
            alert("Unable to retrieve your address");
          }
        });
      }



// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate(element) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // var circle = new google.maps.Circle({
      //   center: geolocation,
      //   radius: position.coords.accuracy
      // });
      // if(element == "end")
      // {
      //   autocompleteend.setBounds(circle.getBounds());  
      // }
      // else
      // {
      //   autocompletestart.setBounds(circle.getBounds());  
      // }
      
    });
  }
}

var demoInterval;
var currentDemoLocationMarker;

function getdir()
{ 
  //alert(currentDemoLocationMarker == null);
  if(demoInterval != null)
  {
    clearInterval(demoInterval);  
  }
  if(currentDemoLocationMarker != null)
  {
     currentDemoLocationMarker.setMap(null);
  }
  if(coordsArr.length !=0 )
  {
    coordsArr = [];
  }
  
  getLocation(); 
  
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var curlat = position.coords.latitude;
  var curlng = position.coords.longitude;
  curlatlng = curlat+","+curlng;
  curlatlng=String(curlatlng);
  calculateAndDisplayRouteFromCurrentLoc(directionsService, directionsDisplay);
  //getRoutesCoords(directionsService, directionsDisplay);
}

//generates path from source to destination via current location
 var calculateAndDisplayRouteFromCurrentLoc =  function(directionsService, directionsDisplay) {
  x =x +1;
  //To count number of intervals made
  console.log("cnt- ",x); 
  coordsArr = [];
  var waypts= [];
   waypts.push({
        location:curlatlng,
        stopover: false
      });
   
  directionsService.route({
    origin: document.getElementById('start').value,
    //waypoints: waypts,
    destination: document.getElementById('end').value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {  
      console.log(response);     
      directionsDisplay.setMap(map);
    //directionsDisplay.setOptions({ preserveViewport: true });
     directionsDisplay.setDirections(response);

       if (response.routes && response.routes.length > 0) {
                        var routes = response.routes;
                        for (var j = 0; j < routes.length; j++) {
                            var points = routes[j].overview_path;
                            //var ul = document.getElementById("vertex");
                            for (var i = 0; i < points.length; i++) {
                                
                                //console.log(getLiText(points[i]));
                                //console.log(points[i].lat()+","+points[i].lng());  
                                coordsArr.push(points[i].lat()+","+points[i].lng());
                                //console.log(coordsArr[i]);
                            }
                        }
                    }
        console.log(coordsArr[(coordsArr.length)-1]);            
    } else if(status=="OVER_QUERY_LIMIT") {      
     
      clearInterval(interval);
      intervalTime = intervalTime + 2000;
      interval = setInterval(function(){ calculateAndDisplayRouteFromCurrentLoc(directionsService, directionsDisplay); }, intervalTime);
    }
  });
  //To avoid calling  interval  from  when the calculateAndDisplayRouteFromCurrentLoc is called for second time
  if(flag==0)
  {
    flag=1;
   // interval = setInterval(function(){ calculateAndDisplayRouteFromCurrentLoc(directionsService, directionsDisplay); }, intervalTime);
      
  }
  //startNavigation();
  setTimeout(startNavigation, 500);
}

var demoFlagNavigate;
var coordsIndex=-1;
function startNavigation()
{
  demoFlagNavigate=0;
  currentLocationMarker.setMap(null);
  //console.log(map.getBounds().contains(currentLocationMarker.getPosition()));
  //alert(map.getBounds().contains(currentLocationMarker.getPosition()));
  coordsIndex = -1;
  // if(demoInterval != null)
  // {
  //   clearInterval(demoInterval);
  // }
  //  if(currentDemoLocationMarker != null)
  // {
  //    currentDemoLocationMarker.setMap(null);
  // }
 
  demoNavigation();
}

//var coordsArrLength = coordsArr.length();

function getLatLonByAddress(address)
{
  var DestinationAddress = address;
  var endLat;
  var endLng; 
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({
  'address': DestinationAddress
  }, function(results, status) {      
      console.log(results[0].geometry.location.lat());
      endLat=results[0].geometry.location.lat();    
      endLng=results[0].geometry.location.lng();        
  });

  console.log("rnt "+endLat+","+endLng);
  return (endLat+","+endLng);
}

 //  heading = google.maps.geometry.spherical.computeHeading(
   // new google.maps.LatLng(17.442366, 78.677964),
   // new google.maps.LatLng(17.43927547, 78.66911856)
   //  );
   //  alert(heading);
   var crctangle;
 function getAngle(curlat,curlng,endLat,endLng)
 {
 // alert(curlat+","+curlng+","+endLat+","+endLng);
   var heading = google.maps.geometry.spherical.computeHeading(
      new google.maps.LatLng(curlat, curlng),
     new google.maps.LatLng(endLat, endLng)
     );
   // alert("heading: "+heading);
   var angle = Math.round(heading);
   //alert("angle before",angle);
  
   if(angle<0)
   {
      angle =  360+angle;
   }
  // alert("angle after",angle);
   if(angle>0 && angle <=90)
   {
     // alert("return 90 called");
      if(angle > 45)
      { 
          if(angle-45 <=23)
          {
              return 45;
          }
          else
          {
              return 90;
          }
      }
      else
      {
          if(45-angle <=23)
          {
              return 45;
          }
          else{
              return 0;
          }
      }
   }
   else if(angle>90 && angle <=180)
   {
   // alert("return 180 called");
      if(angle > 135)
      { 
          if(angle-45 <=23)
          {
            return 135;
          }
          else
          {
            return 180;
          }
      }
      else
      {
        if(45-angle <= 23)
        {
            return 135;
        }
        else
        {
            return 90;
        }
      }
   }
   else if(angle>180 && angle <=270)
   {
    //alert("return 270 called");
    if(angle> 225)
    {
      if(angle-45 <=22)
      {
          return 225;
      }
      else
      {
        return 270;
      }
    }
    else
    {
        if(45-angle <= 22)
        {
          return 225;
        }
        else
        {
          return 180;
        }
    }
   }
   else if(angle>270 || angle==0)
   {
   // alert("return 0 called");
      if(angle > 275)
      {
          if(angle - 45 <=23)
          {
            return 275;
          }
          else
          {
            return 0;
          }
      }
      else
      {
          if(45-angle <=23)
          {
            return 275;
          }
          else
          {
            return 270;
          }
      }
   }
    return 0;
 }  


var startIconMarker;
function demoNavigation()
{  
  //alert("demo nav called");
    coordsIndex = coordsIndex +1;

     if(coordsIndex   == (coordsArr.length))
    {
        clearInterval(demoInterval);
        alert("Congratulations!!! Destination reached");

    }
    else
    {
      coords = coordsArr[coordsIndex].split(",");

      var curlat = Number(coords[0]);
      var curlng = Number(coords[1]); 
      var curLatLngPosition = {lat: curlat, lng: curlng};
      var currentOrigin = String(curlat) + ","+String(curlng);

      




      var  endLatLon = String(coordsArr[(coordsArr.length)-1]);
      var endLat = Number((endLatLon.split(","))[0]);
      var endLng = Number((endLatLon.split(","))[1]);
      var endLatLngPosition  = {lat: endLat, lng: endLng};
      
      var rotate;
      if(coordsIndex< (coordsArr.length)-1)
      {
          nextCoords = coordsArr[coordsIndex + 1].split(","); 

          var nxtlat = Number(nextCoords[0]);
          var nxtlng = Number(nextCoords[1]);
           rotate = getAngle(curlat,curlng,nxtlat,nxtlng);
      }
      else
      {
           rotate = getAngle(curlat,curlng,endLat,endLng);
   
      }


          // alert("rotate "+rotate);
     // rotate = 360  - rotate;
      //alert(rotate);      
      if(startIconMarker!= null)
      {
         startIconMarker.setMap(null);
      }


      ///////////////////////////////////
      // startIconMarker1  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker2 = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker3  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker4  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker5  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker6  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker7  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker8  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker9  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker10  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker11  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker12  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      // startIconMarker13  = new google.maps.Marker({
      // position: curLatLngPosition,
      // draggable: true, 
      // optimized:false ,
      //  map: map  });
      ///////////////////////////////////
      startIconMarker  = new google.maps.Marker({
      //position: curLatLngPosition,
      draggable: true, 
      optimized:false ,
      icon:{
        path:google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        rotation:rotate,

        scale:5
      },
      
       map: map  });
      
       startIconMarker.setPosition( new google.maps.LatLng( curlat,curlng ) );
       var imagepath = 'assets/icon/towtruck.png';

      
      
      var startIcon = new google.maps.MarkerImage(
          imagepath,
          null, /* size is determined at runtime */
          null, /* origin is 0,0 */
          new google.maps.Point(22,0), /* anchor is bottom center of the scaled image */
          new google.maps.Size(42, 68)
      );

      //startIconMarker.setIcon(startIcon);       

      endIconMarker = new google.maps.Marker({
      position: endLatLngPosition,
       icon: 'assets/icon/destination.png',
       map: map  });
      ////////////////////////////
      directionsService.route({
          origin: currentOrigin,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
          }, function(response, status) {
          if (status === 'OK') {  
            console.log("drawn ",response);     
            directionsDisplay.setMap(map);
            directionsDisplay.setOptions({ preserveViewport: true });
            directionsDisplay.setDirections(response);
    } else if(status=="OVER_QUERY_LIMIT") {      
      consle.log("OVER_QUERY_LIMIT");
      // clearInterval(interval);
      // intervalTime = intervalTime + 2000;
      // interval = setInterval(function(){ calculateAndDisplayRouteFromCurrentLoc(directionsService, directionsDisplay); }, intervalTime);
    }
  });
      
      //////////////////////////////




      if(demoFlagNavigate==0)
      {
        demoFlagNavigate=1;
        demoInterval = setInterval(function(){ demoNavigation(); }, 1500);
          
      }
      // console.log(coordsIndex+" "+coordsArr.length);
      // console.log(coordsArr[coordsIndex]);

      } 

      // alert(rotate);
}






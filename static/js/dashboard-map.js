mapboxgl.accessToken = 'PUBLIC_MAPBOX_TOKEN';
const map = new mapboxgl.Map({
  container: 'map',
  center: [-51.172270694612, -23.318105974197003],
  zoom: 12
});

map.on('load', () => {
  map.addSource('veiculos-offline', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.15111169941125, -23.310238264268865] } },
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.1510687840687, -23.310632387764215] } },
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.15065035947878, -23.310750624585026] } },
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.15006027351863, -23.3109082735159] } },
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.150339223245254, -23.31047473850625] } },
      ]
    }
  });
  map.addSource('veiculos-online', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.16387095229229, -23.312096335356028] } },
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.16270568837167, -23.30783554393055] } },
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.16552375790857, -23.31537818576646] } },
      ]
    }
  });
  map.addSource('veiculos-alerta', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-51.15477379098413, -23.307490805845436] } },
      ]
    }
  });
  map.addLayer({
    'id': 'veiculos-offline',
    'type': 'circle',
    'source': 'veiculos-offline',
    'paint': {
      'circle-radius': 8,
      'circle-color': colorOffline,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#FFFFFF'
    }
  });
  map.addLayer({
    'id': 'veiculos-online',
    'type': 'circle',
    'source': 'veiculos-online',
    'paint': {
      'circle-radius': 8,
      'circle-color': colorSuccess,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#FFFFFF'
    }
  });
  map.addLayer({
    'id': 'veiculos-alerta',
    'type': 'circle',
    'source': 'veiculos-alerta',
    'paint': {
      'circle-radius': 8,
      'circle-color': colorWarning,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#FFFFFF'
    }
  });
});

fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=58.37708557207579&lon=26.728078817490495').then(async (response) => {
    const result = await response.json()
    const currentTemp = result.properties.timeseries[0].data.instant.details.air_temperature
  
    document.getElementById('weather').innerHTML = currentTemp + '°C'
  })
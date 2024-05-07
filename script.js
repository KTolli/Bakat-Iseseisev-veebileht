
/*Allpool oleva koodi inspiratsiooniks on kasutatud järgnevat videot: 
https://youtu.be/AF6vGYIyV8M?si=Q5Q2y_yMvkMm3x0T */


function openPopup(nimi) {
  let popup = document.getElementById(`popup-${nimi}`);
  popup.classList.add("open-popup");

}
function closePopup(nimi) {
  let popup = document.getElementById(`popup-${nimi}`);
  popup.classList.remove("open-popup");
}

document.querySelector("#emailForm").addEventListener("submit", async function (e) {
  e.preventDefault()
  const email = document.querySelector("#email").value
  const name = document.querySelector("#nimi").value
  const content = document.querySelector("#sisu").value
  const payload = {
    email, name, content
  }

  const result = await fetch('http://localhost:5500/mail', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })

  console.log('result', result)
});


fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=58.37708557207579&lon=26.728078817490495').then(async (response) => {
  const result = await response.json()
  const currentTemp = result.properties.timeseries[0].data.instant.details.air_temperature

  document.getElementById('weather').innerHTML = currentTemp + '°C'
})
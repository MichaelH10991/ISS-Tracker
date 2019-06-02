let API_URL = "https://api.wheretheiss.at/v1/satellites/25544"

async function get_data() {
  let response = await fetch(API_URL)
  let data = await response.json()
  const { latitude, longitude } = data
  console.log(latitude)
  console.log(longitude)
  document.getElementById("lat").textContent = latitude
  document.getElementById("long").textContent = longitude

  let point = L.icon({
    iconUrl: "resources/images/point.png",
    iconSize: [150, 150]
  })

  L.marker([latitude, longitude], { icon: point }).addTo(iss_map)
}

setInterval(get_data, 2000)

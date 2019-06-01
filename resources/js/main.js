let API_URL = "https://api.wheretheiss.at/v1/satellites/25544"

async function get_data() {
  let response = await fetch(API_URL)
  let data = await response.json()
  const { latitude, longitude } = data
  console.log(latitude)
  console.log(longitude)
  document.getElementById("lat").textContent = latitude
  document.getElementById("long").textContent = longitude
}

function create_map() {
  const iss_map = L.map("map").setView([0, 0], 0)

  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

  const tile_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  const tiles = L.tileLayer(tile_url, { attribution })
  tiles.addTo(iss_map)
  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: "your.mapbox.access.token"
    }
  ).addTo(iss_map)
}

create_map()
get_data()
//setInterval(get_data, 2000)

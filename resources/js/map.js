const iss_map = L.map("map", {
  minZoom: 2,
  zoomSnap: 0.25
}).setView([0, 0], 0)

function create_map() {
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

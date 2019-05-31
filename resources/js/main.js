const axios = require("axios")

let API_URL = "https://api.wheretheiss.at/v1/satellites/25544"

async function get_data() {
  let response = await axios.get(API_URL)
  let data = await response.data
  const { latitude, longitude } = data
  console.log(latitude)
  console.log(longitude)
  document.getElementById("lat").value = latitude
  document.getElementById("long").value = longitude
}

get_data()

const axios = require("axios")

const API_URL = "https://api.wheretheiss.at/v1/satellites/25544"

async function dev_data() {
  let response = await axios.get(API_URL)
  let data = response.data
  console.log(data)
}

dev_data()

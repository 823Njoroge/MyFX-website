const express = require("express");
const axios = require("axios");

const app = express();
const API_KEY = "T9HC9Z7SW2VVXU27"; // Replace with your API key
const BASE_URL = "https://www.alphavantage.co/"; // Replace with the actual API endpoint

app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching news");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
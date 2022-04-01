require("dotenv").config();
const functions = require("firebase-functions");
const axios = require("axios");

exports.sitemapGenerator = functions.https.onRequest(async (req, res) => {
  const { data: xmlString } = await axios.get(process.env.API_SITEMAP_URL);
  res.set("Content-Type", "text/xml; charset=utf8").status(200).send(xmlString);
});

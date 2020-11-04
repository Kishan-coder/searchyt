const express = require("express");
const serverless = require("serverless-http");
const scraper = require('./scraper')

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    scraper.youtube(req.query.q, req.query.page)
        .then(x => res.json(x))
        .catch(e => res.send(e));
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);
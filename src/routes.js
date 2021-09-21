const express = require("express")
const routes = express.Router()

const basePath = __dirname + "/views/"

const profile = {
    name : "LuizzP",
    avatar : "https://xesque.rocketseat.dev/users/avatar/profile-66676016-1631556207095.jpg",
    "monthly-budget": 5000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

//req, res
routes.get('/', (req, res) => res.render(basePath + "index"))
routes.get('/job', (req, res) => res.render(basePath + "job"))
routes.get('/job/edit', (req, res) => res.render(basePath + "job-edit"))
routes.get('/profile', (req, res) => res.render(basePath + "profile", {profile}))

module.exports = routes;
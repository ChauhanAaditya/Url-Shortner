const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "Provided URL is empty" });
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitedHistory: [],
    });
    return res.json({ id: shortId });
}

async function handleAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({ totalClicks: result.visitedHistory.length, analytics: result.visitedHistory });
}

module.exports = {
    handleGenerateNewURL,
    handleAnalytics,
}
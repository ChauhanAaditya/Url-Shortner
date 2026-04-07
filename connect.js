const mongoose = require("mongoose");

async function connect_to_db(url) {
    return mongoose.connect(url);
}

module.exports = connect_to_db;
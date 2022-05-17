const { connectedKnex } = require("./knex")

function createUpdate(update) {
    return connectedKnex("updates").insert(update);
}

function getAllUpdates() {
    return connectedKnex("updates").select("*");
}

function deleteUpdate(timestamp) {
    return connectedKnex("updates").where("timestamp", timestamp).del();
}

module.exports = {
    createUpdate,
    getAllUpdates,
    deleteUpdate
}
const { connectedKnex } = require("./knex")

function createUpdate(update) {
    return connectedKnex("updates").insert(update);
}

function getAllUpdates() {
    return connectedKnex("updates").select("*");
}

function getSomeUpdates(num, offset) {
    return connectedKnex("updates")
        .select("*")
        .orderBy("timestamp", "desc")
        .limit(num)
        .offset(offset);
}

function getUpdateByTimestamp(timestamp) {
    return connectedKnex("updates")
        .select("*")
        .where("timestamp", timestamp)
        .limit(1);
}

function deleteUpdate(timestamp) {
    return connectedKnex("updates").where("timestamp", timestamp).del();
}

module.exports = {
    createUpdate,
    getAllUpdates,
    getSomeUpdates,
    getUpdateByTimestamp,
    deleteUpdate
}
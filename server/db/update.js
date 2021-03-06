const { connectedKnex } = require("./knex")

function createUpdate(update) {
    return connectedKnex("updates").insert(update);
}

function getSomeUpdatesSearch(num, offset, search) {
    const searchTerm = "%"+search+"%"
    return connectedKnex("updates")
        .select("*")
        .whereLike("title", searchTerm)
        .orWhereLike("updateText", searchTerm)
        .orderBy("timestamp", "desc")
        .limit(num)
        .offset(offset);
}

function getSomeUpdatesSearchCount(search) {
    const searchTerm = "%"+search+"%"
    return connectedKnex("updates")
        .count("*")
        .whereLike("title", searchTerm)
        .orWhereLike("updateText", searchTerm)
        .orderBy("timestamp", "desc");
}

function getUpdateByTimestamp(timestamp) {
    return connectedKnex("updates")
        .select("*")
        .where("timestamp", timestamp)
        .limit(1);
}

function deleteUpdate(timestamp) {
    return connectedKnex("updates")
        .where("timestamp", timestamp)
        .del();
}

module.exports = {
    createUpdate,
    getSomeUpdatesSearch,
    getSomeUpdatesSearchCount,
    getUpdateByTimestamp,
    deleteUpdate
}
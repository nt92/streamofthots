const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "db/stream.sqlite"
    },
    useNullAsDefault: true
})

module.exports = {
    connectedKnex
}
const db = require('./connection');

function seed({events, locations, vendors}) {
    return db.query("DROP TABLE IF EXISTS vendors_events_locations;")
    .then(() => {
        return db
        .query("DROP TABLE IF EXISTS vendors;")
        .then(() => {
            return db.query("DROP TABLE IF EXISTS events;")
        })
        .then(() => {
            return db.query("DROP TABLE IF EXISTS locations")
        })
        .then(() => {
            return createLocations();
        })
    })
}

function createLocations() {
    /* Create your locations table in the query below*/
    return db.query("")   
}

module.exports = seed;
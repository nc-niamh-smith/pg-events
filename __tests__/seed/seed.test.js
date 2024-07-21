const db = require("../../db/connection");
const seed = require("../../db/seed");
const data = require("../../db/data/index");

beforeAll(() => seed(data));
afterAll(() => db.end());

describe("seed", () => {
    describe("locations table", () => {
        test("locations table exists", () => {
        return db
            .query(
                `SELECT EXISTS (
                    SELECT FROM 
                        information_schema.tables 
                    WHERE 
                        table_name = 'locations'
                    );`
        )
        .then(({ rows: [{ exists }] }) => {
            expect(exists).toBe(true);
        });
    });
        test("locations table has location_id column as serial primary key", () => {
            return db
                .query(
                    `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'locations'
                    AND column_name = 'location_id';`
                )
                .then(({ rows: [column] }) => {
            expect(column.column_name).toBe("location_id");
            expect(column.data_type).toBe("integer");
            expect(column.column_default).toBe(
                "nextval('locations_location_id_seq'::regclass)"
                );
        });
    });
        test("locations table has location_name column", () => {
        return db
            .query(
                `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'locations'
                    AND column_name = 'location_name';`
            )
            .then(({ rows: [column] }) => {
                expect(column.column_name).toBe("location_name");
        });
    });
        test("locations table has population column", () => {
        return db
            .query(
                `SELECT column_name
                FROM information_schema.columns
                WHERE table_name = 'locations'
                AND column_name = 'population';`
            )
            .then(({ rows: [column] }) => {
                expect(column.column_name).toBe("population");
        });
    });
        test("locations table has city_status column", () => {
        return db
            .query(
            `SELECT column_name
            FROM information_schema.columns
            WHERE table_name = 'locations'
            AND column_name = 'city_status';`
            )
            .then(({ rows: [column] }) => {
                expect(column.column_name).toBe("city_status");
        });
    });
    });

    describe("events table", () => {
        test("events table exists", () => {
    return db
            .query(
                `SELECT EXISTS (
                    SELECT FROM 
                        information_schema.tables 
                    WHERE 
                        table_name = 'events'
                    );`
        )
        .then(({ rows: [{ exists }] }) => {
            expect(exists).toBe(true);
        });
        });
        test("events table has event_id column as serial primary key", () => {
        return db
            .query(
            `SELECT column_name, data_type, column_default
                        FROM information_schema.columns
                        WHERE table_name = 'events'
                        AND column_name = 'event_id';`
        )
        .then(({ rows: [column] }) => {
            expect(column.column_name).toBe("event_id");
            expect(column.data_type).toBe("integer");
            expect(column.column_default).toBe(
            "nextval('events_event_id_seq'::regclass)"
            );
        });
        });
        test("events table has location_id column as integer", () => {
        return db
            .query(
                `SELECT column_name, data_type
                        FROM information_schema.columns
                        WHERE table_name = 'events'
                        AND column_name = 'location_id';`
        )
        .then(({ rows: [column] }) => {
            expect(column.column_name).toBe("location_id");
            expect(column.data_type).toBe("integer");
        });
        });
        test("events table has event_name column", () => {
        return db
            .query(
                `SELECT column_name
                        FROM information_schema.columns
                        WHERE table_name = 'events'
                        AND column_name = 'event_name';`
        )
        .then(({ rows: [column] }) => {
            expect(column.column_name).toBe("event_name");
        });
        });
        test("events table has attendees column", () => {
        return db
            .query(
                `SELECT column_name
                    FROM information_schema.columns
                    WHERE table_name = 'events'
                    AND column_name = 'attendees';`
        )
        .then(({ rows: [column] }) => {
            expect(column.column_name).toBe("attendees");
        });
        });
    });

    describe("vendors table", () => {
        test("vendors table exists", () => {
        return db
            .query(
                `SELECT EXISTS (
                    SELECT FROM 
                        information_schema.tables 
                    WHERE 
                        table_name = 'vendors'
                    );`
        )
        .then(({ rows: [{ exists }] }) => {
            expect(exists).toBe(true);
        });
    });
        test("vendors table has vendor_id column as serial primary key", () => {
            return db
                .query(
                    `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'vendors'
                    AND column_name = 'vendor_id';`
                )
                .then(({ rows: [column] }) => {
            expect(column.column_name).toBe("vendor_id");
            expect(column.data_type).toBe("integer");
            expect(column.column_default).toBe(
                "nextval('vendors_vendor_id_seq'::regclass)"
                );
        });
    });
        test("vendors table has vendor_name column", () => {
        return db
            .query(
                `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'vendors'
                    AND column_name = 'vendor_name';`
            )
            .then(({ rows: [column] }) => {
                expect(column.column_name).toBe("vendor_name");
        });
    });
        test("vendors table has location_id column", () => {
        return db
            .query(
                `SELECT column_name
                FROM information_schema.columns
                WHERE table_name = 'vendors'
                AND column_name = 'location_id';`
            )
            .then(({ rows: [column] }) => {
                expect(column.column_name).toBe("location_id");
        });
    });
    });

    describe("vendors_events_locations table", () => {
        test("vendors_events_locations table exists", () => {
        return db
            .query(
                `SELECT EXISTS (
                    SELECT FROM 
                        information_schema.tables 
                    WHERE 
                        table_name = 'vendors_events_locations'
                    );`
        )
        .then(({ rows: [{ exists }] }) => {
            expect(exists).toBe(true);
        });
    });
        test("vendors_events_locations table has vendors_events_locations_id column as serial primary key", () => {
            return db
                .query(
                    `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'vendors_events_locations'
                    AND column_name = 'vendors_events_locations_id';`
                )
                .then(({ rows: [column] }) => {
            expect(column.column_name).toBe("vendors_events_locations_id");
            expect(column.data_type).toBe("integer");
            expect(column.column_default).toBe(
                "nextval('vendors_events_locations_vendors_events_locations_id_seq'::regclass)"
                );
        });
    });
        test("vendors_events_locations table has location_id column", () => {
        return db
            .query(
                `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'vendors_events_locations'
                    AND column_name = 'location_id';`
            )
            .then(({ rows: [column] }) => {
                expect(column.column_name).toBe("location_id");
        });
    });
        test("vendors_events_locations table has event_id column", () => {
        return db
            .query(
                `SELECT column_name
                FROM information_schema.columns
                WHERE table_name = 'vendors_events_locations'
                AND column_name = 'event_id';`
            )
            .then(({ rows: [column] }) => {
                expect(column.column_name).toBe("event_id");
        });
    });
        test("vendors_events_locations table has vendor_id column", () => {
        return db
            .query(
            `SELECT column_name
            FROM information_schema.columns
            WHERE table_name = 'vendors_events_locations'
            AND column_name = 'vendor_id';`
            )
            .then(({ rows: [column] }) => {
                expect(column.column_name).toBe("vendor_id");
        });
    });
    });

    describe("data insertion", () => {
    test("locations data has been inserted correctly", () => {
      return db.query(`SELECT * FROM locations;`).then(({ rows: locations }) => {
        expect(locations).toHaveLength(3);
        locations.forEach((location) => {
            expect(location).toHaveProperty("location_id");
            expect(location).toHaveProperty("location_name");
            expect(location).toHaveProperty("population");
            expect(location).toHaveProperty("city_status");
            });
        });
    });
    test("events data has been inserted correctly", () => {
      return db.query(`SELECT * FROM events;`).then(({ rows: events }) => {
        expect(events).toHaveLength(9);
        events.forEach((event) => {
            expect(event).toHaveProperty("event_id");
            expect(event).toHaveProperty("event_name");
            expect(event).toHaveProperty("location_name");
            expect(event).toHaveProperty("attendees");
            });
        });
    });

    test("vendors data has been inserted correctly", () => {
       return db.query(`SELECT * FROM vendors;`).then(({ rows: vendors }) => {
        expect(vendors).toHaveLength(9);
        vendors.forEach((vendor) => {
            expect(vendor).toHaveProperty("vendor_id");
            expect(vendor).toHaveProperty("vendor_name");
            expect(vendor).toHaveProperty("location_name");
            expect(vendor).toHaveProperty("events");
        });
        });
    });
    });
});
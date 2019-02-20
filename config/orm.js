// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    // Select all data within the database
    selectAll: function (tableInput, cb) {
        var queryString = 'Select * FROM ??';
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //Insert data
    insertOne: function (tableInput, columnInput, val, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [tableInput, columnInput, val], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //Update data
    updateOne: function (tableInput, columnInput, val, id, cb) {
        var queryString = 'UPDATE ?? SET ?? =? WHERE ID =?';
        connection.query(queryString, [tableInput, columnInput, val, id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Export the orm object.
module.exports = orm;

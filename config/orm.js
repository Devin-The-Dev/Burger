// Import MySQL connection.
var connection = require("../config/connection.js");
function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function translateSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '=' + value)
        }
    }
    return arr.toString();
}

var orm = {
    // Select all data within the database
    selectAll: function (tableInput, cb) {
        var queryString = 'Select * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (err) { throw err };
            cb(result);
        });
    },
    //Insert data
    insertOne: function (tableInput, columnInput, val, cb) {
        console.log(val);
        var queryString = 'INSERT INTO ' + tableInput + ' (' + columnInput.toString() + ') ' + 'VALUES (' + createQmarks(val.length) + ') ';
        console.log(queryString);
        connection.query(queryString, val, function (err, result) {
            if (err) { throw err };
            cb(result);
        });
    },
    //Update data
    updateOne: function (tableInput, objColVal, condition, cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET ' + translateSql(objColVal) + ' WHERE ' + condition;
        console.log(queryString);
        connection.query(queryString, objColVal, function (err, result) {
            if (err) { throw err };
            cb(result);
        });
    },
    //Delete data
    deleteOne: function (tableInput, condition, cb) {
        var queryString = 'DELETE FROM ' + tableInput + ' WHERE ' + condition;
        console.log(queryString);
        connection.query(queryString, val, function (err, result) {
            if (err) { throw err };
            cb(result);
        });
    }
};

// Export the orm object.
module.exports = orm;

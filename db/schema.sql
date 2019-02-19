DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    PRIMARY KEY (id),
    id INT NOT NULL,
    burger_name VARCHAR(20) NULL,
    devoured BOOLEAN DEFAULT false
);

DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    PRIMARY KEY (id),
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NULL,
    devoured BOOLEAN
);

INSERT INTO burgers (burger_name) VALUES ('Peas and Thank You Burger');
INSERT INTO burgers (burger_name) VALUES ('National Pass-Thyme Burger');
INSERT INTO burgers (burger_name) VALUES ('Gourdon-Hamsey Burger');
INSERT INTO burgers (burger_name) VALUES ('Cheeses Is Born Burger');
INSERT INTO burgers (burger_name) VALUES ('Open Sesame Burger');

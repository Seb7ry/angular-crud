Database created in postgresql engine, this is the table query used.

CREATE SEQUENCE id_card_sequence START 1;

CREATE TABLE cards ( id_card INT PRIMARY KEY DEFAULT nextval('id_card_sequence'), name VARCHAR(300), number VARCHAR(100), type VARCHAR(100), cvv INT, status INT );

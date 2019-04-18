DROP DATABASE IF EXISTS hakksaxx;
CREATE DATABASE hakksaxx;

\c hakksaxx;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password_digest VARCHAR,
  email VARCHAR
);
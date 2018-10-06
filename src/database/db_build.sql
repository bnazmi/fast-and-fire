BEGIN ;

DROP TABLE IF EXISTS "user",
                     dispute,
                     document,
                     role,
                     session
                     CASCADE;

CREATE TABLE role (
  id serial PRIMARY KEY,
  title varchar NOT NULL
);

CREATE TABLE "user" (
  id serial PRIMARY KEY,
  username varchar UNIQUE NOT NULL ,
  password varchar NOT NULL,
  email varchar NOT NULL UNIQUE,
  first_name varchar,
  middle_name varchar,
  last_name varchar,
  role_id integer NOT NULL REFERENCES role(id) ON UPDATE CASCADE
);

CREATE TABLE dispute (
  id serial PRIMARY KEY,
  title varchar NOT NULL UNIQUE,
  discripyion text,
  parties integer[],
  witnesses integer,
  arbitrators integer[],
  sessions integer[],
  category varchar NOT NULL,
  approved BOOLEAN NOT NULL
);

CREATE TABLE session (
  id serial PRIMARY KEY,
  title varchar  NOT NULL,
  time timestamp,
  url TEXT NOT NULL
);

CREATE TABLE document (
  id serial PRIMARY KEY,
  title varchar,
  url varchar NOT NULL,
  dipute_id integer NOT NULL REFERENCES dispute(id) ON UPDATE CASCADE,
  user_id integer NOT NULL REFERENCES "user"(id) ON UPDATE CASCADE
);

COMMIT ;

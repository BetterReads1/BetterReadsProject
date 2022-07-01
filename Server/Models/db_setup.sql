-- psql -d <url from elephantSQL> -f Server/Models/db_setup.sql
DROP TABLE user_table, genre_table, book_table, rating_table;

CREATE TABLE user_table (
    "user_id" serial PRIMARY KEY NOT NULL,
    "username" varchar NOT NULL,
    "password" varchar NOT NULL
) WITH (OIDS=FALSE);

CREATE TABLE genre_table (
    "genre_id" serial PRIMARY KEY NOT NULL,
    "genre" varchar
) WITH (OIDS=FALSE);

CREATE TABLE book_table (
    "book_id" serial PRIMARY KEY NOT NULL,
    "genre_id" integer NOT NULL,
    "title" varchar,
    "author" varchar,
    "pages" integer,
    "year" integer,
    "series" boolean,
    "series_name" varchar,
    "place_in_series" integer,
    CONSTRAINT "fk1_book" FOREIGN KEY ("genre_id") REFERENCES genre_table("genre_id")
) WITH (OIDS=FALSE);

CREATE TABLE rating_table (
    "rating_id" serial PRIMARY KEY NOT NULL,
    "book_id" integer NOT NULL,
    "user_id" integer NOT NULL,
    "genre_id" integer NOT NULL, 
    "comments" varchar,
    "overall_enjoyability" integer,
    "tags" varchar,
    CONSTRAINT "fk1_rating" FOREIGN KEY ("book_id") REFERENCES book_table("book_id"),
    CONSTRAINT "fk2_rating" FOREIGN KEY ("user_id") REFERENCES user_table("user_id"),
    CONSTRAINT "fk3_rating" FOREIGN KEY ("genre_id") REFERENCES genre_table("genre_id") 
) WITH (OIDS=FALSE);


-- SAMPLE DATA IN TABLES
INSERT INTO user_table VALUES (0, 'my', '1234');
INSERT INTO user_table VALUES (1, 'ig', '2345');
INSERT INTO user_table VALUES (2, 'ib', '3456');
INSERT INTO user_table VALUES (3, 'jw', '4567');

INSERT INTO genre_table VALUES ('1', 'Horror');
INSERT INTO genre_table VALUES ('2', 'Action');
INSERT INTO genre_table VALUES ('3', 'Sci-Fi');
INSERT INTO genre_table VALUES ('4', 'Romance');
INSERT INTO genre_table VALUES ('5', 'Non-Fiction');
INSERT INTO genre_table VALUES ('6', 'Comedy');

INSERT INTO user_table VALUES ('0', 'The Reviewer', 'password');

INSERT INTO rating_table VALUES (1, 1, 0, 'It was pretty good', 4, 'Sci-Fi,Action');
INSERT INTO rating_table VALUES (2, 4, 0, 'Terrible book I think', 2, true, 'Horror, Comedy');

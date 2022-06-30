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
    "year" DATE,
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
INSERT INTO genre_table VALUES ('1', 'Horror');
INSERT INTO genre_table VALUES ('2', 'Action');
INSERT INTO genre_table VALUES ('3', 'Sci-Fi');
INSERT INTO genre_table VALUES ('4', 'Romance');
INSERT INTO genre_table VALUES ('5', 'Non-Fiction');

INSERT INTO book_table VALUES (1, 1, 'Book Title1', 'IanMatt', 272, 2022, false, 'bestSeries', '2');
INSERT INTO book_table VALUES (2, 4, 'Book Title2', 'IanMatt', 301, 2021, true, 'bestSeries', '4');
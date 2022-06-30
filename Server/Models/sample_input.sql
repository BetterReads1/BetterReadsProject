-- psql -d <url from elephantSQL> -f Server/Models/db_setup.sql

-- SAMPLE DATA IN TABLES
INSERT INTO genre_table VALUES ('1', 'Horror');
INSERT INTO genre_table VALUES ('2', 'Action');
INSERT INTO genre_table VALUES ('3', 'Sci-Fi');
INSERT INTO genre_table VALUES ('4', 'Romance');
INSERT INTO genre_table VALUES ('5', 'Non-Fiction');

INSERT INTO book_table VALUES (1, 1, 'Book Title1', 'IanMatt', 272, 2022, false, 'bestSeries', '2');
INSERT INTO book_table VALUES (2, 4, 'Book Title2', 'IanMatt', 301, 2021, true, 'bestSeries', '4');


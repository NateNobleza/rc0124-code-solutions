SELECT
    "f"."releaseYear" AS "releaseYear",
    "g"."name" AS "name"
FROM
    "films" "f"
JOIN
    "filmGenre" "fg" USING ("filmId")
JOIN
    "genres" "g" USING ("genreId")
WHERE
    "f"."title" = 'Boogie Amelie';

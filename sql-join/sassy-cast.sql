SELECT
    "a"."firstName",
    "a"."lastName"
FROM
    "actors" "a"
JOIN
    "castMembers" "cm" ON "a"."actorId" = "cm"."actorId"
JOIN
    "films" "f" ON "cm"."filmId" = "f"."filmId"
WHERE
    "f"."title" = 'Jersey Sassy';

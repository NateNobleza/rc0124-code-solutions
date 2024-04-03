SELECT
    "c"."firstName",
    "c"."lastName"
FROM
    "customers" "c"
JOIN
    "rentals" "r" USING ("customerId")
JOIN
    "inventory" "i" USING ("inventoryId")
JOIN
    "films" "f" USING ("filmId")
WHERE
    "f"."title" = 'Magic Mallrats';

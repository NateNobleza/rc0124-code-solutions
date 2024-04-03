SELECT
    "c"."firstName",
    "c"."lastName",
    SUM(p."amount") AS "total_paid"
FROM
    "customers" "c"
JOIN
    "rentals" "r" USING ("customerId")
JOIN
    "payments" "p" USING ("rentalId")
GROUP BY
    "c"."customerId", "c"."firstName", "c"."lastName"
ORDER BY
    "total_paid" DESC;

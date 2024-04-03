SELECT
    "p"."amount" AS "payment_amount",
    "c"."firstName",
    "c"."lastName"
FROM
    "payments" "p"
JOIN
    "customers" "c" USING ("customerId")
ORDER BY
    "p"."amount" DESC
LIMIT
    10;

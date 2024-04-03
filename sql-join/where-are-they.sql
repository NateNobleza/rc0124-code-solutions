SELECT
    "a"."line1",
    "ci"."cityId" AS "name",
    "a"."district",
    "co"."countryId" AS "name"
FROM
    "addresses" "a"
JOIN
    "cities" "ci" USING ("cityId")
JOIN
   "countries" "co" USING ("countryId");

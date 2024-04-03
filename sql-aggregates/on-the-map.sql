SELECT co."name" AS "country", COUNT(ci."cityId") AS "num_cities"
FROM "countries" co
JOIN "cities" ci USING ("countryId")
GROUP BY co."name"
ORDER BY co."name";

SELECT DISTINCT
    a.`Geography (Province name)`,
    a.`Geography (CMA name)`,
    a.`Geography (CA name)`,
    a.`Income Bracket`,
    a.`Year`,
    a.`Percentage of families (Total Income)`,
    a.`Percentage of families (After-tax income)`,
    a.`Number of families (Total Income)`,
    a.`Number of families (After-tax income)`,
    b.`Type of House`,
    b.`Type of Bedroom`,
    INCOME_RANKING_CMA.`Ranking`,
    b.`RentValue`
FROM
    `chec_db`.`Canadian_Income_Survey` a
JOIN
    `chec_db`.`cmhc_rent` b 
    ON TRIM(a.`Geography (Province name)`) = TRIM(b.`Geography (Province name)`)
    AND TRIM(a.`Geography (CMA name)`) = TRIM(b.`Geography (CMA name)`)
    AND TRIM(a.`Year`) = TRIM(b.`Year`)
JOIN
    `chec_db`.`structure_type_of_building` c
    ON TRIM(a.`Geography (Province name)`) = TRIM(c.`Geography (Province name)`)
    AND TRIM(a.`Geography (CMA name)`) = TRIM(c.`Geography (CMA name)`)
    AND TRIM(a.`Year`) = TRIM(c.`Year`)
    AND TRIM(b.`Type of House`) = TRIM(c.`Type of House`)
JOIN
    `chec_db`.`Income_Ranking_CMA` INCOME_RANKING_CMA
    ON TRIM(a.`Geography (CMA name)`) = TRIM(INCOME_RANKING_CMA.`Major CMA`)
    AND TRIM(a.`Year`) = TRIM(c.`Year`)
WHERE
    TRIM(a.`Geography (Province name)`) = "Alberta" AND TRIM(a.`Geography (CMA name)`) = "Edmonton" AND TRIM(a.`Year`) = 2021 AND TRIM(c.`Type of House`) = "Apartment";

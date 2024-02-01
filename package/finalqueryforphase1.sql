WITH Data AS (
    SELECT 
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
        b.`RentValue`,
        multiplier.`Rent Multiplier`,
        multiplier.`Utilities Multiplier`,
        income_median.`Median Total income`,
        income_median.`Median After-tax income`,
        mbm.`Cost of Non shelter Necessities`,
        c.`Number of units` as `Current Stock`,
        housing_completion.`Intended Market`,
        housing_completion.`No of units` as `New Stock`
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
        AND TRIM(a.`Year`) = TRIM(INCOME_RANKING_CMA.`Year`)
    JOIN
        `chec_db`.`income_median` income_median
        ON TRIM(a.`Geography (Province name)`) = TRIM(income_median.`Geography (Province name)`)
        AND TRIM(a.`Geography (CMA name)`) = TRIM(income_median.`Geography (CMA name)`)
        AND TRIM(a.`Year`) = TRIM(income_median.`Year`)
	JOIN
        `chec_db`.`Market_basket_Measure` mbm
        ON TRIM(a.`Geography (Province name)`) = TRIM(mbm.`Geography (Province name)`)
        AND TRIM(a.`Geography (CMA name)`) = TRIM(mbm.`Geography (CMA name)`)
        AND TRIM(a.`Year`) = TRIM(mbm.`Year`)
    JOIN
        `chec_db`.`housing_completion` housing_completion
        ON TRIM(a.`Geography (Province name)`) = TRIM(housing_completion.`Geography (Province name)`)
        AND TRIM(a.`Geography (CMA name)`) = TRIM(housing_completion.`Geography (CMA name)`)
        AND TRIM(a.`Year`) = TRIM(housing_completion.`Year`)
        AND TRIM(b.`Type of House`) = TRIM(housing_completion.`Type of House`)
	JOIN
        `chec_db`.`multiplier` multiplier
        ON TRIM(a.`Geography (Province name)`) = TRIM(multiplier.`Geography (Province name)`)
        AND TRIM(a.`Geography (CMA name)`) = TRIM(multiplier.`Geography (CMA name)`)
        AND TRIM(a.`Year`) = TRIM(multiplier.`Year`)
    WHERE
        TRIM(a.`Geography (Province name)`) = "Alberta" 
        AND TRIM(a.`Geography (CMA name)`) = "Edmonton" 
        AND TRIM(a.`Year`) = 2021 
        AND TRIM(c.`Type of House`) = "Apartment"
)
, RentStatistics AS (
    SELECT
        AVG(`RentValue`) AS AverageRent,
        AVG(`RentValue`) / 0.3 AS OptimalIncome,
        AVG(`RentValue`) / 0.3 * 12 AS AverageOptimalIncomeYearly
    FROM
        Data
)
SELECT distinct
    Data.*,
    RentStats.AverageRent AS AverageRent,
    RentStats.OptimalIncome AS OptimalIncome,
    RentStats.AverageOptimalIncomeYearly AS AverageOptimalIncomeYearly,
    Data.`RentValue` * Data.`Rent Multiplier` AS RealisticRentValue,
    Data.`RentValue` + Data.`Utilities Multiplier` AS ShelterCost,
    Data.`Current Stock`+Data.`New Stock` AS Total_Stock,
    FLOOR(RentStats.AverageOptimalIncomeYearly / 10000) * 10000 AS DownRoundOptimalIncomeYearly,
    CASE
        WHEN Data.`Income Bracket` LIKE 'Percentage under $10,000%' THEN 0
        WHEN Data.`Income Bracket` LIKE '$10,000 to $19,999%' THEN 10000
        WHEN Data.`Income Bracket` LIKE '$20,000 to $29,999%' THEN 20000
        WHEN Data.`Income Bracket` LIKE '$30,000 to $39,999%' THEN 30000
        WHEN Data.`Income Bracket` LIKE '$40,000 to $49,999%' THEN 40000
        WHEN Data.`Income Bracket` LIKE '$50,000 to $59,999%' THEN 50000
        WHEN Data.`Income Bracket` LIKE '$60,000 to $79,999%' THEN 60000
        WHEN Data.`Income Bracket` LIKE '$80,000 to $99,999%' THEN 80000
        WHEN Data.`Income Bracket` LIKE '$100,000 and over%' THEN 100000
    END AS LowerIncomeBracket,
    CASE
        WHEN Data.`Income Bracket` LIKE 'Percentage under $10,000%' THEN 10000
        WHEN Data.`Income Bracket` LIKE '$10,000 to $19,999%' THEN 19999
        WHEN Data.`Income Bracket` LIKE '$20,000 to $29,999%' THEN 29999
        WHEN Data.`Income Bracket` LIKE '$30,000 to $39,999%' THEN 39999
        WHEN Data.`Income Bracket` LIKE '$40,000 to $49,999%' THEN 49999
        WHEN Data.`Income Bracket` LIKE '$50,000 to $59,999%' THEN 59999
        WHEN Data.`Income Bracket` LIKE '$60,000 to $79,999%' THEN 79999
        WHEN Data.`Income Bracket` LIKE '$80,000 to $99,999%' THEN 99999
        WHEN Data.`Income Bracket` LIKE '$100,000 and over%' THEN 100000
    END AS HigherIncomeBracket,
    (CASE
        WHEN Data.`Income Bracket` LIKE 'Percentage under $10,000%' THEN 0
        WHEN Data.`Income Bracket` LIKE '$10,000 to $19,999%' THEN 10000
        WHEN Data.`Income Bracket` LIKE '$20,000 to $29,999%' THEN 20000
        WHEN Data.`Income Bracket` LIKE '$30,000 to $39,999%' THEN 30000
        WHEN Data.`Income Bracket` LIKE '$40,000 to $49,999%' THEN 40000
        WHEN Data.`Income Bracket` LIKE '$50,000 to $59,999%' THEN 50000
        WHEN Data.`Income Bracket` LIKE '$60,000 to $79,999%' THEN 60000
        WHEN Data.`Income Bracket` LIKE '$80,000 to $99,999%' THEN 80000
        WHEN Data.`Income Bracket` LIKE '$100,000 and over%' THEN 100000
    END - DATA.`Cost of Non shelter Necessities`)/12  AS ResidualIncomeMonthly,
    (CASE
        WHEN Data.`Income Bracket` LIKE 'Percentage under $10,000%' THEN 0
        WHEN Data.`Income Bracket` LIKE '$10,000 to $19,999%' THEN 10000
        WHEN Data.`Income Bracket` LIKE '$20,000 to $29,999%' THEN 20000
        WHEN Data.`Income Bracket` LIKE '$30,000 to $39,999%' THEN 30000
        WHEN Data.`Income Bracket` LIKE '$40,000 to $49,999%' THEN 40000
        WHEN Data.`Income Bracket` LIKE '$50,000 to $59,999%' THEN 50000
        WHEN Data.`Income Bracket` LIKE '$60,000 to $79,999%' THEN 60000
        WHEN Data.`Income Bracket` LIKE '$80,000 to $99,999%' THEN 80000
        WHEN Data.`Income Bracket` LIKE '$100,000 and over%' THEN 100000
    END * 0.3)/12  AS `Affordable Monthly Rent`,
     CASE
        WHEN (Data.`Income Bracket` LIKE 'Percentage under $10,000%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE 'Percentage under $10,000%' THEN 0 ELSE 10000 END))
        OR (Data.`Income Bracket` LIKE '$10,000 to $19,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$10,000 to $19,999%' THEN 10000 ELSE 19999 END))
        OR (Data.`Income Bracket` LIKE '$20,000 to $29,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$20,000 to $29,999%' THEN 20000 ELSE 29999 END))
        OR (Data.`Income Bracket` LIKE '$30,000 to $39,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$30,000 to $39,999%' THEN 30000 ELSE 39999 END))
        OR (Data.`Income Bracket` LIKE '$40,000 to $49,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$40,000 to $49,999%' THEN 40000 ELSE 49999 END))
        OR (Data.`Income Bracket` LIKE '$50,000 to $59,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$50,000 to $59,999%' THEN 50000 ELSE 59999 END))
        OR (Data.`Income Bracket` LIKE '$60,000 to $79,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$60,000 to $79,999%' THEN 60000 ELSE 79999 END))
        OR (Data.`Income Bracket` LIKE '$80,000 to $99,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$80,000 to $99,999%' THEN 80000 ELSE 99999 END))
        OR (Data.`Income Bracket` LIKE '$100,000 and over%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$100,000 and over%' THEN 100000 ELSE 99999999 END))
        THEN 'Affordable'
        ELSE 'UnAffordable'
    END AS Affordability,
    CASE WHEN (Data.`Income Bracket` LIKE 'Percentage under $10,000%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE 'Percentage under $10,000%' THEN 0 ELSE 10000 END))
        OR (Data.`Income Bracket` LIKE '$10,000 to $19,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$10,000 to $19,999%' THEN 10000 ELSE 19999 END))
        OR (Data.`Income Bracket` LIKE '$20,000 to $29,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$20,000 to $29,999%' THEN 20000 ELSE 29999 END))
        OR (Data.`Income Bracket` LIKE '$30,000 to $39,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$30,000 to $39,999%' THEN 30000 ELSE 39999 END))
        OR (Data.`Income Bracket` LIKE '$40,000 to $49,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$40,000 to $49,999%' THEN 40000 ELSE 49999 END))
        OR (Data.`Income Bracket` LIKE '$50,000 to $59,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$50,000 to $59,999%' THEN 50000 ELSE 59999 END))
        OR (Data.`Income Bracket` LIKE '$60,000 to $79,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$60,000 to $79,999%' THEN 60000 ELSE 79999 END))
        OR (Data.`Income Bracket` LIKE '$80,000 to $99,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$80,000 to $99,999%' THEN 80000 ELSE 99999 END))
        OR (Data.`Income Bracket` LIKE '$100,000 and over%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$100,000 and over%' THEN 100000 ELSE 99999999 END))
        THEN 1 ELSE 0 END AS AffordableUnit,
    CASE WHEN NOT ((Data.`Income Bracket` LIKE 'Percentage under $10,000%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE 'Percentage under $10,000%' THEN 0 ELSE 10000 END))
        OR (Data.`Income Bracket` LIKE '$10,000 to $19,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$10,000 to $19,999%' THEN 10000 ELSE 19999 END))
        OR (Data.`Income Bracket` LIKE '$20,000 to $29,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$20,000 to $29,999%' THEN 20000 ELSE 29999 END))
        OR (Data.`Income Bracket` LIKE '$30,000 to $39,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$30,000 to $39,999%' THEN 30000 ELSE 39999 END))
        OR (Data.`Income Bracket` LIKE '$40,000 to $49,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$40,000 to $49,999%' THEN 40000 ELSE 49999 END))
        OR (Data.`Income Bracket` LIKE '$50,000 to $59,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$50,000 to $59,999%' THEN 50000 ELSE 59999 END))
        OR (Data.`Income Bracket` LIKE '$60,000 to $79,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$60,000 to $79,999%' THEN 60000 ELSE 79999 END))
        OR (Data.`Income Bracket` LIKE '$80,000 to $99,999%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$80,000 to $99,999%' THEN 80000 ELSE 99999 END))
        OR (Data.`Income Bracket` LIKE '$100,000 and over%' AND Data.`RentValue` * Data.`Rent Multiplier` <= 0.3 * (CASE WHEN Data.`Income Bracket` LIKE '$100,000 and over%' THEN 100000 ELSE 99999999 END)))
        THEN 1 ELSE 0 END AS UnAffordableUnit
FROM
    Data
CROSS JOIN
    RentStatistics RentStats;
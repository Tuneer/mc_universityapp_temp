CREATE DATABASE  IF NOT EXISTS `chec_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `chec_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: localhost    Database: chec_db
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `income_median`
--

DROP TABLE IF EXISTS `income_median`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `income_median` (
  `Geography (Province name)` varchar(512) DEFAULT NULL,
  `Geography (CMA name)` varchar(512) DEFAULT NULL,
  `Geography (CA name)` varchar(512) DEFAULT NULL,
  `Year` int DEFAULT NULL,
  `Median Total income` int DEFAULT NULL,
  `Median After-tax income` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `income_median`
--

LOCK TABLES `income_median` WRITE;
/*!40000 ALTER TABLE `income_median` DISABLE KEYS */;
INSERT INTO `income_median` VALUES ('Alberta','NA','NA',2000,68000,57700),('Alberta','NA','NA',2001,71100,62300),('Alberta','NA','NA',2002,70800,61400),('Alberta','NA','NA',2003,69100,60300),('Alberta','NA','NA',2004,72000,62600),('Alberta','NA','NA',2005,74200,65400),('Alberta','NA','NA',2006,80700,70400),('Alberta','NA','NA',2007,83500,72000),('Alberta','NA','NA',2008,87200,74800),('Alberta','NA','NA',2009,86300,74300),('Alberta','NA','NA',2010,84100,72800),('Alberta','NA','NA',2011,83400,72800),('Alberta','NA','NA',2012,88800,77800),('Alberta','NA','NA',2013,91500,79600),('Alberta','NA','NA',2014,94200,81000),('Alberta','NA','NA',2015,95300,82000),('Alberta','NA','NA',2016,90600,78400),('Alberta','NA','NA',2017,89500,77800),('Alberta','NA','NA',2018,90200,78900),('Alberta','NA','NA',2019,87500,76900),('Alberta','NA','NA',2020,91400,80300),('Alberta','NA','NA',2021,89200,77000),('British Columbia','NA','NA',2000,58300,50200),('British Columbia','NA','NA',2001,58900,52700),('British Columbia','NA','NA',2002,59600,52600),('British Columbia','NA','NA',2003,58600,51800),('British Columbia','NA','NA',2004,61400,54200),('British Columbia','NA','NA',2005,62400,55900),('British Columbia','NA','NA',2006,64700,57100),('British Columbia','NA','NA',2007,66800,59800),('British Columbia','NA','NA',2008,71100,62500),('British Columbia','NA','NA',2009,65000,59200),('British Columbia','NA','NA',2010,64000,58500),('British Columbia','NA','NA',2011,63900,57500),('British Columbia','NA','NA',2012,65200,59100),('British Columbia','NA','NA',2013,68000,61600),('British Columbia','NA','NA',2014,67600,61100),('British Columbia','NA','NA',2015,66400,59500),('British Columbia','NA','NA',2016,66900,60700),('British Columbia','NA','NA',2017,72200,65100),('British Columbia','NA','NA',2018,69700,63000),('British Columbia','NA','NA',2019,73600,65100),('British Columbia','NA','NA',2020,78100,69700),('British Columbia','NA','NA',2021,77500,68500),(' Alberta','Edmonton','NA',2000,71300,60100),(' Alberta','Edmonton','NA',2001,74100,63900),(' Alberta','Edmonton','NA',2002,67900,58500),(' Alberta','Edmonton','NA',2003,73300,63800),(' Alberta','Edmonton','NA',2004,73100,63800),(' Alberta','Edmonton','NA',2005,71900,65100),(' Alberta','Edmonton','NA',2006,79100,69500),(' Alberta','Edmonton','NA',2007,81300,70500),(' Alberta','Edmonton','NA',2008,84200,72900),(' Alberta','Edmonton','NA',2009,86300,72500),(' Alberta','Edmonton','NA',2010,86100,71600),(' Alberta','Edmonton','NA',2011,83300,72500),(' Alberta','Edmonton','NA',2012,89500,77700),(' Alberta','Edmonton','NA',2013,95800,80000),(' Alberta','Edmonton','NA',2014,89600,75400),(' Alberta','Edmonton','NA',2015,101200,85300),(' Alberta','Edmonton','NA',2016,109700,91700),(' Alberta','Edmonton','NA',2017,89600,76600),(' Alberta','Edmonton','NA',2018,94900,81500),(' Alberta','Edmonton','NA',2019,90100,78800),(' Alberta','Edmonton','NA',2020,98700,86300),(' Alberta','Edmonton','NA',2021,88600,76700),(' British Columbia','Vancouver','NA',2000,62100,52200),(' British Columbia','Vancouver','NA',2001,63400,55900),(' British Columbia','Vancouver','NA',2002,63700,57400),(' British Columbia','Vancouver','NA',2003,65600,57800),(' British Columbia','Vancouver','NA',2004,65800,57100),(' British Columbia','Vancouver','NA',2005,67300,59100),(' British Columbia','Vancouver','NA',2006,69100,59600),(' British Columbia','Vancouver','NA',2007,70400,61200),(' British Columbia','Vancouver','NA',2008,73500,63700),(' British Columbia','Vancouver','NA',2009,66100,59200),(' British Columbia','Vancouver','NA',2010,65900,58900),(' British Columbia','Vancouver','NA',2011,66400,59000),(' British Columbia','Vancouver','NA',2012,69600,62100),(' British Columbia','Vancouver','NA',2013,70000,62600),(' British Columbia','Vancouver','NA',2014,71500,63600),(' British Columbia','Vancouver','NA',2015,73000,66300),(' British Columbia','Vancouver','NA',2016,79100,70400),(' British Columbia','Vancouver','NA',2017,77900,69400),(' British Columbia','Vancouver','NA',2018,73000,65700),(' British Columbia','Vancouver','NA',2019,80000,70300),(' British Columbia','Vancouver','NA',2020,81700,72000),(' British Columbia','Vancouver','NA',2021,80100,70100),(' Alberta','NA','Brooks',2000,71300,60100),(' Alberta','NA','Brooks',2001,74100,63900),(' Alberta','NA','Brooks',2002,67900,58500),(' Alberta','NA','Brooks',2003,73300,63800),(' Alberta','NA','Brooks',2004,73100,63800),(' Alberta','NA','Brooks',2005,71900,65100),(' Alberta','NA','Brooks',2006,79100,69500),(' Alberta','NA','Brooks',2007,81300,70500),(' Alberta','NA','Brooks',2008,84200,72900),(' Alberta','NA','Brooks',2009,86300,72500),(' Alberta','NA','Brooks',2010,86100,71600),(' Alberta','NA','Brooks',2011,83300,72500),(' Alberta','NA','Brooks',2012,89500,77700),(' Alberta','NA','Brooks',2013,95800,80000),(' Alberta','NA','Brooks',2014,89600,75400),(' Alberta','NA','Brooks',2015,101200,85300),(' Alberta','NA','Brooks',2016,109700,91700),(' Alberta','NA','Brooks',2017,89600,76600),(' Alberta','NA','Brooks',2018,94900,81500),(' Alberta','NA','Brooks',2019,90100,78800),(' Alberta','NA','Brooks',2020,98700,86300),(' Alberta','NA','Brooks',2021,88600,76700),(' British Columbia','NA','Cranbrook',2000,62100,52200),(' British Columbia','NA','Cranbrook',2001,63400,55900),(' British Columbia','NA','Cranbrook',2002,63700,57400),(' British Columbia','NA','Cranbrook',2003,65600,57800),(' British Columbia','NA','Cranbrook',2004,65800,57100),(' British Columbia','NA','Cranbrook',2005,67300,59100),(' British Columbia','NA','Cranbrook',2006,69100,59600),(' British Columbia','NA','Cranbrook',2007,70400,61200),(' British Columbia','NA','Cranbrook',2008,73500,63700),(' British Columbia','NA','Cranbrook',2009,66100,59200),(' British Columbia','NA','Cranbrook',2010,65900,58900),(' British Columbia','NA','Cranbrook',2011,66400,59000),(' British Columbia','NA','Cranbrook',2012,69600,62100),(' British Columbia','NA','Cranbrook',2013,70000,62600),(' British Columbia','NA','Cranbrook',2014,71500,63600),(' British Columbia','NA','Cranbrook',2015,73000,66300),(' British Columbia','NA','Cranbrook',2016,79100,70400),(' British Columbia','NA','Cranbrook',2017,77900,69400),(' British Columbia','NA','Cranbrook',2018,73000,65700),(' British Columbia','NA','Cranbrook',2019,80000,70300),(' British Columbia','NA','Cranbrook',2020,81700,72000),(' British Columbia','NA','Cranbrook',2021,80100,70100);
/*!40000 ALTER TABLE `income_median` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-31  0:04:41

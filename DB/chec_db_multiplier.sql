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
-- Table structure for table `multiplier`
--

DROP TABLE IF EXISTS `multiplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `multiplier` (
  `Geography (Province name)` varchar(512) DEFAULT NULL,
  `Geography (CMA name)` varchar(512) DEFAULT NULL,
  `Geography (CA name)` varchar(512) DEFAULT NULL,
  `Year` int DEFAULT NULL,
  `Rent Multiplier` double DEFAULT NULL,
  `Utilities Multiplier` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiplier`
--

LOCK TABLES `multiplier` WRITE;
/*!40000 ALTER TABLE `multiplier` DISABLE KEYS */;
INSERT INTO `multiplier` VALUES ('Alberta','Edmonton','NA',2002,1.4,1.21),('Alberta','Edmonton','NA',2003,1.3,1.2),('Alberta','Edmonton','NA',2004,1.4,1.22),('Alberta','Edmonton','NA',2005,1.25,1.25),('Alberta','Edmonton','NA',2006,1.4,1.1),('Alberta','Edmonton','NA',2007,1.3,1.15),('Alberta','Edmonton','NA',2008,1.25,1.12),('Alberta','Edmonton','NA',2009,1.45,1.15),('Alberta','Edmonton','NA',2010,1.32,1.11),('Alberta','Edmonton','NA',2011,1.42,1.2),('Alberta','Edmonton','NA',2012,1.2,1.2),('Alberta','Edmonton','NA',2013,1.39,1.25),('Alberta','Edmonton','NA',2014,1.4,1.21),('Alberta','Edmonton','NA',2015,1.3,1.2),('Alberta','Edmonton','NA',2016,1.4,1.22),('Alberta','Edmonton','NA',2017,1.25,1.25),('Alberta','Edmonton','NA',2018,1.4,1.1),('Alberta','Edmonton','NA',2019,1.3,1.15),('Alberta','Edmonton','NA',2020,1.25,1.12),('Alberta','Edmonton','NA',2021,1.45,1.15),('Alberta','Edmonton','NA',2022,1.32,1.11),('Saskatchewan','Saskatoon','NA',2002,1.42,1.2),('Saskatchewan','Saskatoon','NA',2003,1.2,1.2),('Saskatchewan','Saskatoon','NA',2004,1.39,1.25),('Saskatchewan','Saskatoon','NA',2005,1.4,1.21),('Saskatchewan','Saskatoon','NA',2006,1.3,1.2),('Saskatchewan','Saskatoon','NA',2007,1.4,1.22),('Saskatchewan','Saskatoon','NA',2008,1.25,1.25),('Saskatchewan','Saskatoon','NA',2009,1.4,1.1),('Saskatchewan','Saskatoon','NA',2010,1.3,1.15),('Saskatchewan','Saskatoon','NA',2011,1.25,1.12),('Saskatchewan','Saskatoon','NA',2012,1.45,1.15),('Saskatchewan','Saskatoon','NA',2013,1.32,1.11),('Saskatchewan','Saskatoon','NA',2014,1.42,1.2),('Saskatchewan','Saskatoon','NA',2015,1.2,1.2),('Saskatchewan','Saskatoon','NA',2016,1.39,1.25),('Saskatchewan','Saskatoon','NA',2017,1.4,1.21),('Saskatchewan','Saskatoon','NA',2018,1.3,1.2),('Saskatchewan','Saskatoon','NA',2019,1.4,1.22),('Saskatchewan','Saskatoon','NA',2020,1.25,1.25),('Saskatchewan','NA','NA',2002,1.45,1.15),('Saskatchewan','NA','NA',2003,1.32,1.11),('Saskatchewan','NA','NA',2004,1.42,1.2),('Saskatchewan','NA','NA',2005,1.2,1.2),('Saskatchewan','NA','NA',2006,1.39,1.25),('Saskatchewan','NA','NA',2007,1.4,1.21),('Saskatchewan','NA','NA',2008,1.3,1.2),('Saskatchewan','NA','NA',2009,1.4,1.22),('Saskatchewan','NA','NA',2010,1.25,1.25);
/*!40000 ALTER TABLE `multiplier` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-31  0:04:42

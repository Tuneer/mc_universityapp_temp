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
-- Table structure for table `RentalRate_Ranking_CMA`
--

DROP TABLE IF EXISTS `RentalRate_Ranking_CMA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RentalRate_Ranking_CMA` (
  `CMA` varchar(512) DEFAULT NULL,
  `Year` int DEFAULT NULL,
  `Ranking` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RentalRate_Ranking_CMA`
--

LOCK TABLES `RentalRate_Ranking_CMA` WRITE;
/*!40000 ALTER TABLE `RentalRate_Ranking_CMA` DISABLE KEYS */;
INSERT INTO `RentalRate_Ranking_CMA` VALUES ('St. John\'s',2021,1),('Halifax',2021,2),('Moncton',2021,3),('Saint john',2021,4),('Fredericton',2021,5),('Saguenay',2021,6),('Québec',2021,7),('Sherbrooke',2021,8),('Trois-Rivieres',2021,9),('Drummondville',2021,10),('Montréal',2021,11),('Ottawa - Gatineau',2021,12),('Kingston',2021,13),('Belleville - Quinte West',2021,14),('Peterborough',2021,15),('Oshawa',2021,16),('Toronto',2021,17),('Hamilton',2021,18),('St. Catharines - Niagara',2021,19),('Kitchener - Cambridge - Waterloo',2021,20),('Brantford',2021,21),('Guelph',2021,22),('London',2021,23),('Windsor',2021,24),('Barrie',2021,25),('Greater Sudbury',2021,26),('Thunder Bay',2021,27),('Winnipeg',2021,28),('Regina',2021,29),('saskatoon',2021,30),('Lethbridge',2021,31),('Calgary',2021,32),('Red Deer',2021,33),('Edmonton',2021,34),('Kelowna',2021,35),('Kamloops',2021,36),('Chilliwack',2021,37),('Abbotsford - Mission',2021,38),('Vancouver',2021,39),('Victoria',2021,40),('Nanaimo',2021,41),('Victoria',2020,40),('Nanaimo',2020,41);
/*!40000 ALTER TABLE `RentalRate_Ranking_CMA` ENABLE KEYS */;
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

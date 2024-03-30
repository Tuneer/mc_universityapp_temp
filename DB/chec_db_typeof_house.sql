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
-- Table structure for table `typeof_house`
--

DROP TABLE IF EXISTS `typeof_house`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typeof_house` (
  `Sno` int DEFAULT NULL,
  `Types of Houses` text,
  `Also Called` text,
  `Government Canada` text,
  `Rentfaster` text,
  `Statistics Canada` text,
  `CMHC 1` text,
  `CMHC 2` text,
  `Rentals.ca` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeof_house`
--

LOCK TABLES `typeof_house` WRITE;
/*!40000 ALTER TABLE `typeof_house` DISABLE KEYS */;
INSERT INTO `typeof_house` VALUES (1,'Detached houses','Bungalows','Detached houses','House','Single-detached house','House','Single-detached house','House'),(2,'Semi-detached houses','','Semi-detached houses','','Semi-detached house','House','Semi-detached house','House'),(3,'Townhouses','Row Houses','','Townhouse','Row house/ Other attached dwelling/ Row structures of three units & over','House','Row/ Multiples','Townhouse'),(4,'Condominiums','Condos','Condominiums','Condo Unit','','Apartment','','Condominiums'),(5,'Movable houses','','','Mobile','Movable dwelling','','',''),(6,'Rental rooms','','Rental rooms','Room for Rent','','Apartment','',''),(7,'Apartment','','','Apartment','Apartment in a building that has five or more storeys,/Apartment in a building that has fewer than five storeys','Apartment','Apartment and other unit type','Apartment'),(8,'Duplex','','','','Apartment or flat in a duplex','House','',''),(9,'Others','','','','Other single-attached house','','','');
/*!40000 ALTER TABLE `typeof_house` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-31  0:04:40

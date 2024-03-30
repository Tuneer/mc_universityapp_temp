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
-- Table structure for table `household income statistics`
--

DROP TABLE IF EXISTS `household income statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `household income statistics` (
  `Sno` int DEFAULT NULL,
  `Country` text,
  `Province` text,
  `Geography` text,
  `Structural_type_of_dwelling` text,
  `Population_Type` text,
  `Median_Income_Before_Tax` text,
  `Median_Income_After_Tax` text,
  `Year` int DEFAULT NULL,
  `Total_as_Household_type_including_census_family_structure` text,
  `Census_family_households` text,
  `Only_one_census_family_without_additional_persons` text,
  `One_couple,_with_or_without_children_in_their_census_family` text,
  `Without_children` text,
  `With_children` text,
  `One_one_parent_census_family` text,
  `With_a_parent_that_is_a_man+_9_10` text,
  `With_a_parent_that_is_a_woman+_11_12` text,
  `Other_census_family_households_13` text,
  `Non_census_family_households` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `household income statistics`
--

LOCK TABLES `household income statistics` WRITE;
/*!40000 ALTER TABLE `household income statistics` DISABLE KEYS */;
INSERT INTO `household income statistics` VALUES (1,'Canada','Ontario','Ontario i2265','Single-detached house','','TRUE','',2021,'1,12,000','1,27,000','1,23,000','1,28,000','1,00,000','1,53,000','82,000','92,000','79,500','1,56,000','54,400'),(2,'Canada','Ontario','Ontario i2265','Single-detached house','','','TRUE',2021,'96,000','1,09,000','1,05,000','1,09,000','87,000','1,29,000','74,000','79,500','72,500','1,38,000','47,600'),(3,'Canada','Ontario','Ontario i2265','Semi-detached house','','TRUE','',2021,'1,01,000','1,15,000','1,09,000','1,18,000','96,000','1,30,000','76,500','84,000','75,000','1,40,000','55,200'),(4,'Canada','Ontario','Ontario i2265','Semi-detached house','','','TRUE',2021,'89,000','1,00,000','95,000','1,02,000','84,000','1,12,000','70,000','73,500','69,000','1,26,000','48,400'),(5,'Canada','Ontario','Ontario i2265','Row house','','TRUE','',2021,'92,000','1,04,000','1,01,000','1,12,000','1,02,000','1,18,000','70,000','82,000','68,500','1,29,000','60,000'),(6,'Canada','Ontario','Ontario i2265','Row house','','','TRUE',2021,'81,000','92,000','89,000','97,000','88,000','1,03,000','65,000','72,000','64,000','1,16,000','51,600'),(7,'Canada','Ontario','Ontario i2265','Apartment or flat in a duplex','','TRUE','',2021,'75,000','99,000','91,000','1,01,000','84,000','1,17,000','62,000','69,000','60,400','1,37,000','45,600'),(8,'Canada','Ontario','Ontario i2265','Apartment or flat in a duplex','','','TRUE',2021,'67,500','88,000','81,000','89,000','74,500','1,03,000','58,000','62,000','57,200','1,24,000','40,800'),(9,'Canada','Ontario','Ontario i2265','Apartment in a building that has fewer than five storeys','','TRUE','',2021,'53,600','79,000','76,000','85,000','78,000','97,000','55,200','60,000','54,400','1,11,000','38,400'),(10,'Canada','Ontario','Ontario i2265','Apartment in a building that has fewer than five storeys','','','TRUE',2021,'48,800','72,000','69,000','76,500','69,500','87,000','52,400','54,800','52,000','1,02,000','35,200'),(11,'Canada','Ontario','Ontario i2265','Apartment in a building that has five or more storeys','','TRUE','',2021,'62,000','83,000','81,000','88,000','86,000','91,000','59,200','67,500','58,400','1,05,000','45,200'),(12,'Canada','Ontario','Ontario i2265','Apartment in a building that has five or more storeys','','','TRUE',2021,'56,000','74,500','73,000','78,500','76,000','82,000','56,000','61,600','55,200','97,000','40,800'),(13,'Canada','Ontario','Ontario i2265','Other single-attached house','','TRUE','',2021,'67,000','93,000','87,000','96,000','82,000','1,14,000','59,200','62,800','58,400','1,26,000','41,600'),(14,'Canada','Ontario','Ontario i2265','Other single-attached house','','','TRUE',2021,'60,800','83,000','78,500','85,000','73,500','1,02,000','56,000','58,400','56,000','1,16,000','37,600'),(15,'Canada','Ontario','Ontario i2265','Movable dwelling 3','','TRUE','',2021,'53,200','71,500','70,000','72,500','65,500','1,00,000','57,600','61,600','57,200','1,08,000','35,200'),(16,'Canada','Ontario','Ontario i2265','Movable dwelling 3','','','TRUE',2021,'49,200','66,000','64,500','66,500','60,400','90,000','54,800','56,800','54,400','99,000','32,800'),(17,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Single-detached house','','TRUE','',2021,'79,000','95,000','93,000','98,000','77,000','1,34,000','60,400','71,500','58,000','1,22,000','37,600'),(18,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Single-detached house','','','TRUE',2021,'69,000','82,000','80,000','84,000','67,500','1,11,000','56,000','62,400','54,000','1,09,000','34,000'),(19,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Semi-detached house','','TRUE','',2021,'61,200','81,000','78,000','94,000','80,000','1,11,000','46,800','60,000','45,600','1,12,000','37,600'),(20,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Semi-detached house','','','TRUE',2021,'55,200','72,000','70,000','81,000','70,000','95,000','45,600','52,800','44,400','1,02,000','34,400'),(21,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Row house','','TRUE','',2021,'46,800','62,000','59,600','75,000','63,200','94,000','42,400','42,800','42,000','99,000','31,600'),(22,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Row house','','','TRUE',2021,'44,000','57,600','56,000','67,500','58,000','83,000','42,000','42,000','41,600','89,000','29,600'),(23,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Apartment or flat in a duplex','','TRUE','',2021,'64,500','90,000','87,000','99,000','81,000','1,24,000','54,000','66,000','52,400','1,24,000','42,000'),(24,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Apartment or flat in a duplex','','','TRUE',2021,'56,800','78,000','75,500','84,000','70,500','1,04,000','50,800','57,600','50,000','1,09,000','37,200'),(25,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Apartment in a building that has fewer than five storeys','','TRUE','',2021,'36,000','60,400','59,200','64,000','60,400','78,500','44,800','49,200','44,000','89,000','28,400'),(26,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Apartment in a building that has fewer than five storeys','','','TRUE',2021,'34,000','55,600','54,400','58,800','55,600','70,500','44,000','46,000','42,800','81,000','27,200'),(27,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Apartment in a building that has five or more storeys','','TRUE','',2021,'36,800','71,500','71,500','82,000','76,500','0','55,200','0','54,400','0','29,800'),(28,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Apartment in a building that has five or more storeys','','','TRUE',2021,'34,800','65,000','65,000','71,500','69,000','0','51,200','0','50,400','0','28,800'),(29,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Other single-attached house','','TRUE','',2021,'54,400','81,000','78,500','84,000','71,000','1,04,000','56,800','0','49,600','1,35,000','31,000'),(30,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Other single-attached house','','','TRUE',2021,'48,800','70,500','68,000','72,000','63,200','90,000','55,200','0','48,400','1,27,000','29,000'),(31,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Movable dwelling 3','','TRUE','',2021,'64,500','81,000','81,000','84,000','73,500','1,09,000','58,800','91,000','51,200','97,000','42,800'),(32,'Canada','Newfoundland and Labrador','Newfoundland and Labrador i2','Movable dwelling 3','','','TRUE',2021,'57,600','71,000','70,500','74,000','64,500','94,000','52,800','75,000','46,800','90,000','37,200');
/*!40000 ALTER TABLE `household income statistics` ENABLE KEYS */;
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

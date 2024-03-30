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
-- Table structure for table `RentalRate_Ranking_CA`
--

DROP TABLE IF EXISTS `RentalRate_Ranking_CA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RentalRate_Ranking_CA` (
  `CA` varchar(512) DEFAULT NULL,
  `Year` int DEFAULT NULL,
  `Ranking` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RentalRate_Ranking_CA`
--

LOCK TABLES `RentalRate_Ranking_CA` WRITE;
/*!40000 ALTER TABLE `RentalRate_Ranking_CA` DISABLE KEYS */;
INSERT INTO `RentalRate_Ranking_CA` VALUES ('Grand Falls-Windsor',2021,1),('Gander',2021,2),('Corner Brook',2021,3),('Charlottetown',2021,4),('Summerside',2021,5),('Kentville',2021,6),('Truro',2021,7),('New Glasgow',2021,8),('Cape Breton',2021,9),('Bathurst',2021,10),('Miramichi',2021,11),('Campbellton',2021,12),('Edmundston',2021,13),('Matane',2021,14),('Rimouski',2021,15),('Rivière-du-Loup',2021,16),('Baie-Comeau',2021,17),('Alma',2021,18),('Dolbeau-Mistassini',2021,19),('Sept-Îles',2021,20),('Sainte-Marie',2021,21),('Saint-Georges',2021,22),('Thetford Mines',2021,23),('Cowansville',2021,24),('Victoriaville',2021,25),('Shawinigan',2021,26),('Granby',2021,27),('Saint-Hyacinthe',2021,28),('Sorel-Tracy',2021,29),('Joliette',2021,30),('Salaberry-de-Valleyfield',2021,31),('Sainte-Agathe-des-Monts',2021,32),('Lachute',2021,33),('Val-d\'Or',2021,34),('Amos',2021,35),('Rouyn-Noranda',2021,36),('Cornwall',2021,37),('Hawkesbury',2021,38),('Brockville',2021,39),('Pembroke',2021,40),('Petawawa',2021,41),('Cobourg',2021,42),('Port Hope',2021,43),('Kawartha Lakes',2021,44),('Centre Wellington',2021,45),('Ingersoll',2021,46),('Woodstock',2021,47),('Tillsonburg',2021,48),('Norfolk',2021,49),('Stratford',2021,50),('Chatham-Kent',2021,51),('Sarnia',2021,52),('Essa',2021,53),('Wasaga Beach',2021,54),('Owen Sound',2021,55),('Collingwood',2021,56),('Orillia',2021,57),('Midland',2021,58),('North Bay',2021,59),('Elliot Lake',2021,60),('Timmins',2021,61),('Sault Ste. Marie',2021,62),('Kenora',2021,63),('Winkler',2021,64),('Steinbach',2021,65),('Portage la Prairie',2021,66),('Brandon',2021,67),('Thompson',2021,68),('Yorkton',2021,69),('Moose Jaw',2021,70),('Swift Current',2021,71),('North Battleford',2021,72),('Prince Albert',2021,73),('Estevan',2021,74),('Weyburn',2021,75),('Medicine Hat',2021,76),('Brooks',2021,77),('Okotoks',2021,78),('High River',2021,79),('Strathmore',2021,80),('Canmore',2021,81),('Sylvan Lake',2021,82),('Lacombe',2021,83),('Camrose',2021,84),('Lloydminster',2021,85),('Grande Prairie',2021,86),('Wood Buffalo',2021,87),('Wetaskiwin',2021,88),('Cranbrook',2021,89),('Nelson',2021,90),('Trail',2021,91),('Penticton',2021,92),('Vernon',2021,93),('Salmon Arm',2021,94),('Squamish',2021,95),('Ladysmith',2021,96),('Duncan',2021,97),('Parksville',2021,98),('Port Alberni',2021,99),('Courtenay',2021,100),('Campbell River',2021,101),('Powell River',2021,102),('Williams Lake',2021,103),('Quesnel',2021,104),('Prince Rupert',2021,105),('Terrace',2021,106),('Prince George',2021,107),('Dawson Creek',2021,108),('Fort St. John',2021,109),('Whitehorse',2021,110),('Yellowknife',2021,111),('Grand Falls-Windsor',2020,1),('Gander',2020,2),('Corner Brook',2020,3),('Charlottetown',2020,4),('Summerside',2020,5);
/*!40000 ALTER TABLE `RentalRate_Ranking_CA` ENABLE KEYS */;
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

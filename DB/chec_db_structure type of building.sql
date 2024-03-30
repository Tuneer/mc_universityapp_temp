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
-- Table structure for table `structure type of building`
--

DROP TABLE IF EXISTS `structure type of building`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `structure type of building` (
  `Sno` int DEFAULT NULL,
  `Country` text,
  `Province` text,
  `CMA` text,
  `CA` text,
  `CD` text,
  `CSD` text,
  `Year` int DEFAULT NULL,
  `Number of bedrooms (6) 1` text,
  `Total - Structural type of dwelling` double DEFAULT NULL,
  `Single-detached house` double DEFAULT NULL,
  `Apartment in a building that has five or more storeys` double DEFAULT NULL,
  `Other attached dwelling 3` double DEFAULT NULL,
  `Apartment or flat in a duple0` double DEFAULT NULL,
  `Apartment in a building that has fewer than five storeys` double DEFAULT NULL,
  `Other single-attached house` double DEFAULT NULL,
  `Row house` double DEFAULT NULL,
  `Semi-detached house` double DEFAULT NULL,
  `Movable dwelling 4` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `structure type of building`
--

LOCK TABLES `structure type of building` WRITE;
/*!40000 ALTER TABLE `structure type of building` DISABLE KEYS */;
INSERT INTO `structure type of building` VALUES (1,'Canada','Saskatchewan','','','Division No.  1','NA',2021,'Total - Number of bedrooms',12565,9925,35,1890,140,1115,30,315,290,715),(2,'Canada','Saskatchewan','','','Division No.  1','NA',2021,'No bedrooms',20,10,0,15,0,15,0,0,0,0),(3,'Canada','Saskatchewan','','','Division No.  1','NA',2021,'1 bedroom',890,295,10,565,20,355,10,125,55,20),(4,'Canada','Saskatchewan','','','Division No.  1','NA',2021,'2 bedrooms',2805,1685,30,925,45,670,15,85,110,165),(5,'Canada','Saskatchewan','','','Division No.  1','NA',2021,'3 bedrooms',4245,3490,0,285,45,55,0,95,90,470),(6,'Canada','Saskatchewan','','','Division No.  1','NA',2021,'4 or more bedrooms',4600,4440,0,100,35,25,0,10,35,60),(7,'Canada','Saskatchewan','','','Division No.  1','Argyle No. 1 ',2021,'Total - Number of bedrooms',115,115,0,0,0,0,0,0,0,0),(8,'Canada','Saskatchewan','','','Division No.  1','Argyle No. 1 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(9,'Canada','Saskatchewan','','','Division No.  1','Argyle No. 1 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(10,'Canada','Saskatchewan','','','Division No.  1','Argyle No. 1 ',2021,'2 bedrooms',30,30,0,0,0,0,0,0,0,0),(11,'Canada','Saskatchewan','','','Division No.  1','Argyle No. 1 ',2021,'3 bedrooms',30,30,0,0,0,0,0,0,0,0),(12,'Canada','Saskatchewan','','','Division No.  1','Argyle No. 1 ',2021,'4 or more bedrooms',45,45,0,0,0,0,0,0,0,0),(13,'Canada','Saskatchewan','','','Division No.  1','Gainsborough ',2021,'Total - Number of bedrooms',105,90,0,10,0,0,0,10,0,0),(14,'Canada','Saskatchewan','','','Division No.  1','Gainsborough ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(15,'Canada','Saskatchewan','','','Division No.  1','Gainsborough ',2021,'1 bedroom',15,0,0,10,0,0,0,10,0,0),(16,'Canada','Saskatchewan','','','Division No.  1','Gainsborough ',2021,'2 bedrooms',35,35,0,0,0,0,0,0,0,0),(17,'Canada','Saskatchewan','','','Division No.  1','Gainsborough ',2021,'3 bedrooms',25,15,0,0,0,0,0,0,0,0),(18,'Canada','Saskatchewan','','','Division No.  1','Gainsborough ',2021,'4 or more bedrooms',35,35,0,0,0,0,0,0,0,0),(19,'Canada','Saskatchewan','','','Division No.  1','Carievale ',2021,'Total - Number of bedrooms',45,45,0,0,0,0,0,0,0,0),(20,'Canada','Saskatchewan','','','Division No.  1','Carievale ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(21,'Canada','Saskatchewan','','','Division No.  1','Carievale ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(22,'Canada','Saskatchewan','','','Division No.  1','Carievale ',2021,'2 bedrooms',15,15,0,0,0,0,0,0,0,0),(23,'Canada','Saskatchewan','','','Division No.  1','Carievale ',2021,'3 bedrooms',10,10,0,0,0,0,0,0,0,0),(24,'Canada','Saskatchewan','','','Division No.  1','Carievale ',2021,'4 or more bedrooms',10,10,0,0,0,0,0,0,0,0),(25,'Canada','Saskatchewan','','','Division No.  1','Mount Pleasant No. 2 ',2021,'Total - Number of bedrooms',165,130,0,15,0,0,0,15,0,15),(26,'Canada','Saskatchewan','','','Division No.  1','Mount Pleasant No. 2 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(27,'Canada','Saskatchewan','','','Division No.  1','Mount Pleasant No. 2 ',2021,'1 bedroom',10,10,0,0,0,0,0,0,0,0),(28,'Canada','Saskatchewan','','','Division No.  1','Mount Pleasant No. 2 ',2021,'2 bedrooms',20,20,0,0,0,0,0,0,0,0),(29,'Canada','Saskatchewan','','','Division No.  1','Mount Pleasant No. 2 ',2021,'3 bedrooms',70,45,0,10,0,0,0,10,0,10),(30,'Canada','Saskatchewan','','','Division No.  1','Mount Pleasant No. 2 ',2021,'4 or more bedrooms',55,55,0,0,0,0,0,0,0,0),(31,'Canada','Saskatchewan','','','Division No.  1','Carnduff ',2021,'Total - Number of bedrooms',430,350,0,55,0,15,0,10,20,30),(32,'Canada','Saskatchewan','','','Division No.  1','Carnduff ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(33,'Canada','Saskatchewan','','','Division No.  1','Carnduff ',2021,'1 bedroom',35,15,0,25,0,15,0,10,0,0),(34,'Canada','Saskatchewan','','','Division No.  1','Carnduff ',2021,'2 bedrooms',80,50,0,25,0,0,0,0,15,0),(35,'Canada','Saskatchewan','','','Division No.  1','Carnduff ',2021,'3 bedrooms',135,115,0,0,0,0,0,0,0,25),(36,'Canada','Saskatchewan','','','Division No.  1','Carnduff ',2021,'4 or more bedrooms',180,180,0,0,0,0,0,0,0,0),(37,'Canada','Saskatchewan','','','Division No.  1','Enniskillen No. 3 ',2021,'Total - Number of bedrooms',175,175,0,0,0,0,0,0,0,0),(38,'Canada','Saskatchewan','','','Division No.  1','Enniskillen No. 3 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(39,'Canada','Saskatchewan','','','Division No.  1','Enniskillen No. 3 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(40,'Canada','Saskatchewan','','','Division No.  1','Enniskillen No. 3 ',2021,'2 bedrooms',0,0,0,0,0,0,0,0,0,0),(41,'Canada','Saskatchewan','','','Division No.  1','Enniskillen No. 3 ',2021,'3 bedrooms',90,90,0,0,0,0,0,0,0,0),(42,'Canada','Saskatchewan','','','Division No.  1','Enniskillen No. 3 ',2021,'4 or more bedrooms',80,80,0,0,0,0,0,0,0,0),(43,'Canada','Saskatchewan','','','Division No.  1','Glen Ewen ',2021,'Total - Number of bedrooms',75,75,0,0,0,0,0,0,0,0),(44,'Canada','Saskatchewan','','','Division No.  1','Glen Ewen ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(45,'Canada','Saskatchewan','','','Division No.  1','Glen Ewen ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(46,'Canada','Saskatchewan','','','Division No.  1','Glen Ewen ',2021,'2 bedrooms',15,15,0,0,0,0,0,0,0,0),(47,'Canada','Saskatchewan','','','Division No.  1','Glen Ewen ',2021,'3 bedrooms',0,0,0,0,0,0,0,0,0,0),(48,'Canada','Saskatchewan','','','Division No.  1','Glen Ewen ',2021,'4 or more bedrooms',50,50,0,0,0,0,0,0,0,0),(49,'Canada','Saskatchewan','','','Division No.  1','Obow ',2021,'Total - Number of bedrooms',495,410,0,55,0,0,0,25,20,30),(50,'Canada','Saskatchewan','','','Division No.  1','Obow ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(51,'Canada','Saskatchewan','','','Division No.  1','Obow ',2021,'1 bedroom',35,0,0,30,0,0,0,10,20,0),(52,'Canada','Saskatchewan','','','Division No.  1','Obow ',2021,'2 bedrooms',90,65,0,25,0,0,0,15,0,0),(53,'Canada','Saskatchewan','','','Division No.  1','Obow ',2021,'3 bedrooms',180,150,0,0,0,0,0,0,0,30),(54,'Canada','Saskatchewan','','','Division No.  1','Obow ',2021,'4 or more bedrooms',195,195,0,0,0,0,0,0,0,0),(55,'Canada','Saskatchewan','','','Division No.  1','Coalfields No. 4 ',2021,'Total - Number of bedrooms',110,105,0,0,0,0,0,0,0,0),(56,'Canada','Saskatchewan','','','Division No.  1','Coalfields No. 4 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(57,'Canada','Saskatchewan','','','Division No.  1','Coalfields No. 4 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(58,'Canada','Saskatchewan','','','Division No.  1','Coalfields No. 4 ',2021,'2 bedrooms',10,10,0,0,0,0,0,0,0,0),(59,'Canada','Saskatchewan','','','Division No.  1','Coalfields No. 4 ',2021,'3 bedrooms',40,40,0,0,0,0,0,0,0,0),(60,'Canada','Saskatchewan','','','Division No.  1','Coalfields No. 4 ',2021,'4 or more bedrooms',50,50,0,0,0,0,0,0,0,0),(61,'Canada','Saskatchewan','','','Division No.  1','Frobisher ',2021,'Total - Number of bedrooms',55,40,0,0,0,0,0,0,0,0),(62,'Canada','Saskatchewan','','','Division No.  1','Frobisher ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(63,'Canada','Saskatchewan','','','Division No.  1','Frobisher ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(64,'Canada','Saskatchewan','','','Division No.  1','Frobisher ',2021,'2 bedrooms',20,15,0,0,0,0,0,0,0,0),(65,'Canada','Saskatchewan','','','Division No.  1','Frobisher ',2021,'3 bedrooms',15,15,0,0,0,0,0,0,0,0),(66,'Canada','Saskatchewan','','','Division No.  1','Frobisher ',2021,'4 or more bedrooms',15,15,0,0,0,0,0,0,0,0),(67,'Canada','Saskatchewan','','','Division No.  1','North Portal ',2021,'Total - Number of bedrooms',50,35,0,10,0,0,0,0,10,10),(68,'Canada','Saskatchewan','','','Division No.  1','North Portal ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(69,'Canada','Saskatchewan','','','Division No.  1','North Portal ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(70,'Canada','Saskatchewan','','','Division No.  1','North Portal ',2021,'2 bedrooms',25,15,0,0,0,0,0,0,0,10),(71,'Canada','Saskatchewan','','','Division No.  1','North Portal ',2021,'3 bedrooms',20,20,0,10,0,0,0,0,10,0),(72,'Canada','Saskatchewan','','','Division No.  1','North Portal ',2021,'4 or more bedrooms',0,0,0,0,0,0,0,0,0,0),(73,'Canada','Saskatchewan','','','Division No.  1','Roche PercÃ©e ',2021,'Total - Number of bedrooms',40,30,0,0,0,0,0,0,0,0),(74,'Canada','Saskatchewan','','','Division No.  1','Roche PercÃ©e ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(75,'Canada','Saskatchewan','','','Division No.  1','Roche PercÃ©e ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(76,'Canada','Saskatchewan','','','Division No.  1','Roche PercÃ©e ',2021,'2 bedrooms',20,15,0,0,0,0,0,0,0,0),(77,'Canada','Saskatchewan','','','Division No.  1','Roche PercÃ©e ',2021,'3 bedrooms',10,10,0,0,0,0,0,0,0,0),(78,'Canada','Saskatchewan','','','Division No.  1','Roche PercÃ©e ',2021,'4 or more bedrooms',10,10,0,0,0,0,0,0,0,0),(79,'Canada','Saskatchewan','','','Division No.  1','Bienfait ',2021,'Total - Number of bedrooms',260,215,0,10,0,0,0,0,0,35),(80,'Canada','Saskatchewan','','','Division No.  1','Bienfait ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(81,'Canada','Saskatchewan','','','Division No.  1','Bienfait ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(82,'Canada','Saskatchewan','','','Division No.  1','Bienfait ',2021,'2 bedrooms',35,30,0,0,0,0,0,0,0,0),(83,'Canada','Saskatchewan','','','Division No.  1','Bienfait ',2021,'3 bedrooms',120,90,0,0,0,0,0,0,0,25),(84,'Canada','Saskatchewan','','','Division No.  1','Bienfait ',2021,'4 or more bedrooms',95,85,0,0,0,0,0,0,0,10),(85,'Canada','Saskatchewan','','','Division No.  1','Estevan No. 5 ',2021,'Total - Number of bedrooms',475,420,0,0,0,0,0,0,0,50),(86,'Canada','Saskatchewan','','','Division No.  1','Estevan No. 5 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(87,'Canada','Saskatchewan','','','Division No.  1','Estevan No. 5 ',2021,'1 bedroom',10,0,0,0,0,0,0,0,0,0),(88,'Canada','Saskatchewan','','','Division No.  1','Estevan No. 5 ',2021,'2 bedrooms',65,50,0,0,0,0,0,0,0,15),(89,'Canada','Saskatchewan','','','Division No.  1','Estevan No. 5 ',2021,'3 bedrooms',185,150,0,0,0,0,0,0,0,35),(90,'Canada','Saskatchewan','','','Division No.  1','Estevan No. 5 ',2021,'4 or more bedrooms',220,220,0,0,0,0,0,0,0,0),(91,'Canada','Saskatchewan','','','Division No.  1','Estevan ',2021,'Total - Number of bedrooms',4610,3045,35,1340,105,935,0,145,155,190),(92,'Canada','Saskatchewan','','','Division No.  1','Estevan ',2021,'No bedrooms',20,0,0,15,0,15,0,0,0,0),(93,'Canada','Saskatchewan','','','Division No.  1','Estevan ',2021,'1 bedroom',445,90,10,335,10,305,0,15,15,0),(94,'Canada','Saskatchewan','','','Division No.  1','Estevan ',2021,'2 bedrooms',1130,365,30,695,35,560,0,50,55,40),(95,'Canada','Saskatchewan','','','Division No.  1','Estevan ',2021,'3 bedrooms',1420,1075,0,225,40,50,0,80,55,120),(96,'Canada','Saskatchewan','','','Division No.  1','Estevan ',2021,'4 or more bedrooms',1600,1505,0,75,25,10,0,0,30,20),(97,'Canada','Saskatchewan','','','Division No.  1','Benson No. 35 ',2021,'Total - Number of bedrooms',160,135,0,0,0,0,0,0,0,25),(98,'Canada','Saskatchewan','','','Division No.  1','Benson No. 35 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(99,'Canada','Saskatchewan','','','Division No.  1','Benson No. 35 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(100,'Canada','Saskatchewan','','','Division No.  1','Benson No. 35 ',2021,'2 bedrooms',0,0,0,0,0,0,0,0,0,0),(101,'Canada','Saskatchewan','','','Division No.  1','Benson No. 35 ',2021,'3 bedrooms',105,85,0,0,0,0,0,0,0,25),(102,'Canada','Saskatchewan','','','Division No.  1','Benson No. 35 ',2021,'4 or more bedrooms',50,50,0,0,0,0,0,0,0,0),(103,'Canada','Saskatchewan','','','Division No.  1','Browning No. 34 ',2021,'Total - Number of bedrooms',170,165,0,0,0,0,0,0,0,0),(104,'Canada','Saskatchewan','','','Division No.  1','Browning No. 34 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(105,'Canada','Saskatchewan','','','Division No.  1','Browning No. 34 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(106,'Canada','Saskatchewan','','','Division No.  1','Browning No. 34 ',2021,'2 bedrooms',35,35,0,0,0,0,0,0,0,0),(107,'Canada','Saskatchewan','','','Division No.  1','Browning No. 34 ',2021,'3 bedrooms',60,45,0,0,0,0,0,0,0,0),(108,'Canada','Saskatchewan','','','Division No.  1','Browning No. 34 ',2021,'4 or more bedrooms',80,80,0,0,0,0,0,0,0,0),(109,'Canada','Saskatchewan','','','Division No.  1','Lampman ',2021,'Total - Number of bedrooms',260,215,0,10,0,0,0,10,0,30),(110,'Canada','Saskatchewan','','','Division No.  1','Lampman ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(111,'Canada','Saskatchewan','','','Division No.  1','Lampman ',2021,'1 bedroom',25,10,0,10,0,0,0,10,0,0),(112,'Canada','Saskatchewan','','','Division No.  1','Lampman ',2021,'2 bedrooms',60,55,0,0,0,0,0,0,0,10),(113,'Canada','Saskatchewan','','','Division No.  1','Lampman ',2021,'3 bedrooms',80,55,0,0,0,0,0,0,0,25),(114,'Canada','Saskatchewan','','','Division No.  1','Lampman ',2021,'4 or more bedrooms',95,95,0,0,0,0,0,0,0,0),(115,'Canada','Saskatchewan','','','Division No.  1','Moose Creek No. 33 ',2021,'Total - Number of bedrooms',100,100,0,0,0,0,0,0,0,0),(116,'Canada','Saskatchewan','','','Division No.  1','Moose Creek No. 33 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(117,'Canada','Saskatchewan','','','Division No.  1','Moose Creek No. 33 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(118,'Canada','Saskatchewan','','','Division No.  1','Moose Creek No. 33 ',2021,'2 bedrooms',0,0,0,0,0,0,0,0,0,0),(119,'Canada','Saskatchewan','','','Division No.  1','Moose Creek No. 33 ',2021,'3 bedrooms',35,35,0,0,0,0,0,0,0,0),(120,'Canada','Saskatchewan','','','Division No.  1','Moose Creek No. 33 ',2021,'4 or more bedrooms',65,65,0,0,0,0,0,0,0,0),(121,'Canada','Saskatchewan','','','Division No.  1','Alameda ',2021,'Total - Number of bedrooms',165,155,0,0,0,0,0,0,0,0),(122,'Canada','Saskatchewan','','','Division No.  1','Alameda ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(123,'Canada','Saskatchewan','','','Division No.  1','Alameda ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(124,'Canada','Saskatchewan','','','Division No.  1','Alameda ',2021,'2 bedrooms',40,35,0,0,0,0,0,0,0,0),(125,'Canada','Saskatchewan','','','Division No.  1','Alameda ',2021,'3 bedrooms',65,60,0,0,0,0,0,0,0,0),(126,'Canada','Saskatchewan','','','Division No.  1','Alameda ',2021,'4 or more bedrooms',60,60,0,0,0,0,0,0,0,0),(127,'Canada','Saskatchewan','','','Division No.  1','Reciprocity No. 32 ',2021,'Total - Number of bedrooms',160,150,0,0,0,0,0,0,0,15),(128,'Canada','Saskatchewan','','','Division No.  1','Reciprocity No. 32 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(129,'Canada','Saskatchewan','','','Division No.  1','Reciprocity No. 32 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(130,'Canada','Saskatchewan','','','Division No.  1','Reciprocity No. 32 ',2021,'2 bedrooms',40,35,0,0,0,0,0,0,0,0),(131,'Canada','Saskatchewan','','','Division No.  1','Reciprocity No. 32 ',2021,'3 bedrooms',45,40,0,0,0,0,0,0,0,0),(132,'Canada','Saskatchewan','','','Division No.  1','Reciprocity No. 32 ',2021,'4 or more bedrooms',70,70,0,0,0,0,0,0,0,0),(133,'Canada','Saskatchewan','','','Division No.  1','Alida ',2021,'Total - Number of bedrooms',55,45,0,0,0,0,0,0,0,0),(134,'Canada','Saskatchewan','','','Division No.  1','Alida ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(135,'Canada','Saskatchewan','','','Division No.  1','Alida ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(136,'Canada','Saskatchewan','','','Division No.  1','Alida ',2021,'2 bedrooms',15,15,0,0,0,0,0,0,0,0),(137,'Canada','Saskatchewan','','','Division No.  1','Alida ',2021,'3 bedrooms',25,20,0,0,0,0,0,0,0,0),(138,'Canada','Saskatchewan','','','Division No.  1','Alida ',2021,'4 or more bedrooms',10,10,0,0,0,0,0,0,0,0),(139,'Canada','Saskatchewan','','','Division No.  1','Storthoaks No. 31 ',2021,'Total - Number of bedrooms',110,105,0,0,0,0,0,0,0,0),(140,'Canada','Saskatchewan','','','Division No.  1','Storthoaks No. 31 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(141,'Canada','Saskatchewan','','','Division No.  1','Storthoaks No. 31 ',2021,'1 bedroom',10,10,0,0,0,0,0,0,0,0),(142,'Canada','Saskatchewan','','','Division No.  1','Storthoaks No. 31 ',2021,'2 bedrooms',0,0,0,0,0,0,0,0,0,0),(143,'Canada','Saskatchewan','','','Division No.  1','Storthoaks No. 31 ',2021,'3 bedrooms',30,30,0,0,0,0,0,0,0,0),(144,'Canada','Saskatchewan','','','Division No.  1','Storthoaks No. 31 ',2021,'4 or more bedrooms',70,70,0,0,0,0,0,0,0,0),(145,'Canada','Saskatchewan','','','Division No.  1','Storthoaks ',2021,'Total - Number of bedrooms',25,25,0,0,0,0,0,0,0,0),(146,'Canada','Saskatchewan','','','Division No.  1','Storthoaks ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(147,'Canada','Saskatchewan','','','Division No.  1','Storthoaks ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(148,'Canada','Saskatchewan','','','Division No.  1','Storthoaks ',2021,'2 bedrooms',0,0,0,0,0,0,0,0,0,0),(149,'Canada','Saskatchewan','','','Division No.  1','Storthoaks ',2021,'3 bedrooms',10,10,0,0,0,0,0,0,0,0),(150,'Canada','Saskatchewan','','','Division No.  1','Storthoaks ',2021,'4 or more bedrooms',25,25,0,0,0,0,0,0,0,0),(151,'Canada','Saskatchewan','','','Division No.  1','Antler No. 61 ',2021,'Total - Number of bedrooms',180,175,0,0,0,0,0,0,0,0),(152,'Canada','Saskatchewan','','','Division No.  1','Antler No. 61 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(153,'Canada','Saskatchewan','','','Division No.  1','Antler No. 61 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(154,'Canada','Saskatchewan','','','Division No.  1','Antler No. 61 ',2021,'2 bedrooms',30,30,0,0,0,0,0,0,0,0),(155,'Canada','Saskatchewan','','','Division No.  1','Antler No. 61 ',2021,'3 bedrooms',45,45,0,0,0,0,0,0,0,0),(156,'Canada','Saskatchewan','','','Division No.  1','Antler No. 61 ',2021,'4 or more bedrooms',105,105,0,0,0,0,0,0,0,0),(157,'Canada','Saskatchewan','','','Division No.  1','Redvers ',2021,'Total - Number of bedrooms',445,320,0,80,0,80,0,0,0,45),(158,'Canada','Saskatchewan','','','Division No.  1','Redvers ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(159,'Canada','Saskatchewan','','','Division No.  1','Redvers ',2021,'1 bedroom',45,20,0,25,0,25,0,0,0,0),(160,'Canada','Saskatchewan','','','Division No.  1','Redvers ',2021,'2 bedrooms',100,40,0,40,0,40,0,0,0,20),(161,'Canada','Saskatchewan','','','Division No.  1','Redvers ',2021,'3 bedrooms',135,105,0,0,0,0,0,0,0,20),(162,'Canada','Saskatchewan','','','Division No.  1','Redvers ',2021,'4 or more bedrooms',165,150,0,15,0,15,0,0,0,0),(163,'Canada','Saskatchewan','','','Division No.  1','Moose Mountain No. 63 ',2021,'Total - Number of bedrooms',190,185,0,0,0,0,0,0,0,0),(164,'Canada','Saskatchewan','','','Division No.  1','Moose Mountain No. 63 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(165,'Canada','Saskatchewan','','','Division No.  1','Moose Mountain No. 63 ',2021,'1 bedroom',10,10,0,0,0,0,0,0,0,0),(166,'Canada','Saskatchewan','','','Division No.  1','Moose Mountain No. 63 ',2021,'2 bedrooms',40,40,0,0,0,0,0,0,0,0),(167,'Canada','Saskatchewan','','','Division No.  1','Moose Mountain No. 63 ',2021,'3 bedrooms',70,65,0,0,0,0,0,0,0,0),(168,'Canada','Saskatchewan','','','Division No.  1','Moose Mountain No. 63 ',2021,'4 or more bedrooms',70,70,0,0,0,0,0,0,0,0),(169,'Canada','Saskatchewan','','','Division No.  1','Manor ',2021,'Total - Number of bedrooms',135,115,0,10,10,0,0,0,0,15),(170,'Canada','Saskatchewan','','','Division No.  1','Manor ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(171,'Canada','Saskatchewan','','','Division No.  1','Manor ',2021,'1 bedroom',10,0,0,0,0,0,0,0,0,0),(172,'Canada','Saskatchewan','','','Division No.  1','Manor ',2021,'2 bedrooms',30,30,0,0,0,0,0,0,0,0),(173,'Canada','Saskatchewan','','','Division No.  1','Manor ',2021,'3 bedrooms',65,55,0,0,0,0,0,0,0,10),(174,'Canada','Saskatchewan','','','Division No.  1','Manor ',2021,'4 or more bedrooms',30,25,0,0,0,0,0,0,0,0),(175,'Canada','Saskatchewan','','','Division No.  1','Carlyle ',2021,'Total - Number of bedrooms',620,430,0,140,10,50,0,50,30,45),(176,'Canada','Saskatchewan','','','Division No.  1','Carlyle ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(177,'Canada','Saskatchewan','','','Division No.  1','Carlyle ',2021,'1 bedroom',70,25,0,45,0,0,0,30,15,0),(178,'Canada','Saskatchewan','','','Division No.  1','Carlyle ',2021,'2 bedrooms',145,50,0,85,10,50,0,0,20,10),(179,'Canada','Saskatchewan','','','Division No.  1','Carlyle ',2021,'3 bedrooms',185,140,0,10,0,0,0,10,0,30),(180,'Canada','Saskatchewan','','','Division No.  1','Carlyle ',2021,'4 or more bedrooms',225,210,0,0,0,0,0,0,0,0),(181,'Canada','Saskatchewan','','','Division No.  1','Brock No. 64 ',2021,'Total - Number of bedrooms',120,105,0,0,0,0,0,0,0,10),(182,'Canada','Saskatchewan','','','Division No.  1','Brock No. 64 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(183,'Canada','Saskatchewan','','','Division No.  1','Brock No. 64 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(184,'Canada','Saskatchewan','','','Division No.  1','Brock No. 64 ',2021,'2 bedrooms',20,15,0,0,0,0,0,0,0,0),(185,'Canada','Saskatchewan','','','Division No.  1','Brock No. 64 ',2021,'3 bedrooms',40,40,0,0,0,0,0,0,0,0),(186,'Canada','Saskatchewan','','','Division No.  1','Brock No. 64 ',2021,'4 or more bedrooms',45,45,0,0,0,0,0,0,0,0),(187,'Canada','Saskatchewan','','','Division No.  1','Arcola ',2021,'Total - Number of bedrooms',275,250,0,0,0,0,0,0,0,20),(188,'Canada','Saskatchewan','','','Division No.  1','Arcola ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(189,'Canada','Saskatchewan','','','Division No.  1','Arcola ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(190,'Canada','Saskatchewan','','','Division No.  1','Arcola ',2021,'2 bedrooms',95,75,0,0,0,0,0,0,0,10),(191,'Canada','Saskatchewan','','','Division No.  1','Arcola ',2021,'3 bedrooms',80,75,0,0,0,0,0,0,0,0),(192,'Canada','Saskatchewan','','','Division No.  1','Arcola ',2021,'4 or more bedrooms',100,95,0,0,0,0,0,0,0,0),(193,'Canada','Saskatchewan','','','Division No.  1','Kisbey ',2021,'Total - Number of bedrooms',65,35,0,10,0,0,0,0,0,20),(194,'Canada','Saskatchewan','','','Division No.  1','Kisbey ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(195,'Canada','Saskatchewan','','','Division No.  1','Kisbey ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(196,'Canada','Saskatchewan','','','Division No.  1','Kisbey ',2021,'2 bedrooms',30,10,0,10,0,0,0,0,0,10),(197,'Canada','Saskatchewan','','','Division No.  1','Kisbey ',2021,'3 bedrooms',25,10,0,0,0,0,0,0,0,10),(198,'Canada','Saskatchewan','','','Division No.  1','Kisbey ',2021,'4 or more bedrooms',10,10,0,0,0,0,0,0,0,0),(199,'Canada','Saskatchewan','','','Division No.  1','Tecumseh No. 65 ',2021,'Total - Number of bedrooms',105,105,0,0,0,0,0,0,0,0),(200,'Canada','Saskatchewan','','','Division No.  1','Tecumseh No. 65 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(201,'Canada','Saskatchewan','','','Division No.  1','Tecumseh No. 65 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(202,'Canada','Saskatchewan','','','Division No.  1','Tecumseh No. 65 ',2021,'2 bedrooms',0,0,0,0,0,0,0,0,0,0),(203,'Canada','Saskatchewan','','','Division No.  1','Tecumseh No. 65 ',2021,'3 bedrooms',50,50,0,0,0,0,0,0,0,0),(204,'Canada','Saskatchewan','','','Division No.  1','Tecumseh No. 65 ',2021,'4 or more bedrooms',50,50,0,0,0,0,0,0,0,0),(211,'Canada','Saskatchewan','','','Division No.  1','Stoughton ',2021,'Total - Number of bedrooms',295,230,0,45,0,15,0,20,15,15),(212,'Canada','Saskatchewan','','','Division No.  1','Stoughton ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(213,'Canada','Saskatchewan','','','Division No.  1','Stoughton ',2021,'1 bedroom',35,15,0,25,0,0,0,15,0,0),(214,'Canada','Saskatchewan','','','Division No.  1','Stoughton ',2021,'2 bedrooms',55,40,0,15,0,0,0,10,0,0),(215,'Canada','Saskatchewan','','','Division No.  1','Stoughton ',2021,'3 bedrooms',145,115,0,15,0,0,0,0,15,15),(216,'Canada','Saskatchewan','','','Division No.  1','Stoughton ',2021,'4 or more bedrooms',60,60,0,0,0,0,0,0,0,0),(223,'Canada','Saskatchewan','','','Division No.  1','Golden West No. 95 ',2021,'Total - Number of bedrooms',150,135,0,0,0,0,0,0,0,0),(224,'Canada','Saskatchewan','','','Division No.  1','Golden West No. 95 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(225,'Canada','Saskatchewan','','','Division No.  1','Golden West No. 95 ',2021,'1 bedroom',10,10,0,0,0,0,0,0,0,0),(226,'Canada','Saskatchewan','','','Division No.  1','Golden West No. 95 ',2021,'2 bedrooms',35,30,0,0,0,0,0,0,0,0),(227,'Canada','Saskatchewan','','','Division No.  1','Golden West No. 95 ',2021,'3 bedrooms',40,40,0,0,0,0,0,0,0,0),(228,'Canada','Saskatchewan','','','Division No.  1','Golden West No. 95 ',2021,'4 or more bedrooms',65,60,0,0,0,0,0,0,0,0),(229,'Canada','Saskatchewan','','','Division No.  1','Hazelwood No. 94 ',2021,'Total - Number of bedrooms',100,95,0,0,0,0,0,0,0,0),(230,'Canada','Saskatchewan','','','Division No.  1','Hazelwood No. 94 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(231,'Canada','Saskatchewan','','','Division No.  1','Hazelwood No. 94 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(232,'Canada','Saskatchewan','','','Division No.  1','Hazelwood No. 94 ',2021,'2 bedrooms',20,10,0,0,0,0,0,0,0,0),(233,'Canada','Saskatchewan','','','Division No.  1','Hazelwood No. 94 ',2021,'3 bedrooms',35,35,0,0,0,0,0,0,0,0),(234,'Canada','Saskatchewan','','','Division No.  1','Hazelwood No. 94 ',2021,'4 or more bedrooms',45,45,0,0,0,0,0,0,0,0),(235,'Canada','Saskatchewan','','','Division No.  1','Wawken No. 93 ',2021,'Total - Number of bedrooms',275,255,0,0,0,0,0,0,0,10),(236,'Canada','Saskatchewan','','','Division No.  1','Wawken No. 93 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(237,'Canada','Saskatchewan','','','Division No.  1','Wawken No. 93 ',2021,'1 bedroom',10,10,0,0,0,0,0,0,0,0),(238,'Canada','Saskatchewan','','','Division No.  1','Wawken No. 93 ',2021,'2 bedrooms',70,70,0,0,0,0,0,0,0,0),(239,'Canada','Saskatchewan','','','Division No.  1','Wawken No. 93 ',2021,'3 bedrooms',120,115,0,0,0,0,0,0,0,10),(240,'Canada','Saskatchewan','','','Division No.  1','Wawken No. 93 ',2021,'4 or more bedrooms',60,55,0,0,0,0,0,0,0,0),(241,'Canada','Saskatchewan','','','Division No.  1','Kennedy ',2021,'Total - Number of bedrooms',115,95,0,15,0,0,0,0,0,10),(242,'Canada','Saskatchewan','','','Division No.  1','Kennedy ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(243,'Canada','Saskatchewan','','','Division No.  1','Kennedy ',2021,'1 bedroom',15,0,0,15,0,0,0,0,0,0),(244,'Canada','Saskatchewan','','','Division No.  1','Kennedy ',2021,'2 bedrooms',15,10,0,0,0,0,0,0,0,0),(245,'Canada','Saskatchewan','','','Division No.  1','Kennedy ',2021,'3 bedrooms',45,40,0,0,0,0,0,0,0,0),(246,'Canada','Saskatchewan','','','Division No.  1','Kennedy ',2021,'4 or more bedrooms',40,40,0,0,0,0,0,0,0,0),(247,'Canada','Saskatchewan','','','Division No.  1','Wawota ',2021,'Total - Number of bedrooms',250,205,0,40,0,0,0,25,10,10),(248,'Canada','Saskatchewan','','','Division No.  1','Wawota ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(249,'Canada','Saskatchewan','','','Division No.  1','Wawota ',2021,'1 bedroom',25,0,0,25,0,0,0,25,0,0),(250,'Canada','Saskatchewan','','','Division No.  1','Wawota ',2021,'2 bedrooms',80,65,0,10,0,0,0,0,10,10),(251,'Canada','Saskatchewan','','','Division No.  1','Wawota ',2021,'3 bedrooms',80,70,0,0,0,0,0,0,0,0),(252,'Canada','Saskatchewan','','','Division No.  1','Wawota ',2021,'4 or more bedrooms',65,65,0,0,0,0,0,0,0,0),(253,'Canada','Saskatchewan','','','Division No.  1','Kenosee Lake ',2021,'Total - Number of bedrooms',95,95,0,0,0,0,0,0,0,0),(254,'Canada','Saskatchewan','','','Division No.  1','Kenosee Lake ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(255,'Canada','Saskatchewan','','','Division No.  1','Kenosee Lake ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(256,'Canada','Saskatchewan','','','Division No.  1','Kenosee Lake ',2021,'2 bedrooms',35,35,0,0,0,0,0,0,0,0),(257,'Canada','Saskatchewan','','','Division No.  1','Kenosee Lake ',2021,'3 bedrooms',15,15,0,0,0,0,0,0,0,0),(258,'Canada','Saskatchewan','','','Division No.  1','Kenosee Lake ',2021,'4 or more bedrooms',40,40,0,0,0,0,0,0,0,0),(259,'Canada','Saskatchewan','','','Division No.  1','Walpole No. 92 ',2021,'Total - Number of bedrooms',125,120,0,0,0,0,0,0,0,10),(260,'Canada','Saskatchewan','','','Division No.  1','Walpole No. 92 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(261,'Canada','Saskatchewan','','','Division No.  1','Walpole No. 92 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(262,'Canada','Saskatchewan','','','Division No.  1','Walpole No. 92 ',2021,'2 bedrooms',20,20,0,0,0,0,0,0,0,0),(263,'Canada','Saskatchewan','','','Division No.  1','Walpole No. 92 ',2021,'3 bedrooms',60,55,0,0,0,0,0,0,0,10),(264,'Canada','Saskatchewan','','','Division No.  1','Walpole No. 92 ',2021,'4 or more bedrooms',45,45,0,0,0,0,0,0,0,0),(265,'Canada','Saskatchewan','','','Division No.  1','Maryfield No. 91 ',2021,'Total - Number of bedrooms',110,110,0,0,0,0,0,0,0,0),(266,'Canada','Saskatchewan','','','Division No.  1','Maryfield No. 91 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(267,'Canada','Saskatchewan','','','Division No.  1','Maryfield No. 91 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(268,'Canada','Saskatchewan','','','Division No.  1','Maryfield No. 91 ',2021,'2 bedrooms',20,20,0,0,0,0,0,0,0,0),(269,'Canada','Saskatchewan','','','Division No.  1','Maryfield No. 91 ',2021,'3 bedrooms',40,40,0,0,0,0,0,0,0,0),(270,'Canada','Saskatchewan','','','Division No.  1','Maryfield No. 91 ',2021,'4 or more bedrooms',40,40,0,0,0,0,0,0,0,0),(271,'Canada','Saskatchewan','','','Division No.  1','Maryfield ',2021,'Total - Number of bedrooms',130,120,0,0,0,0,0,0,0,0),(272,'Canada','Saskatchewan','','','Division No.  1','Maryfield ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(273,'Canada','Saskatchewan','','','Division No.  1','Maryfield ',2021,'1 bedroom',10,0,0,0,0,0,0,0,0,0),(274,'Canada','Saskatchewan','','','Division No.  1','Maryfield ',2021,'2 bedrooms',45,45,0,0,0,0,0,0,0,0),(275,'Canada','Saskatchewan','','','Division No.  1','Maryfield ',2021,'3 bedrooms',30,30,0,0,0,0,0,0,0,0),(276,'Canada','Saskatchewan','','','Division No.  1','Maryfield ',2021,'4 or more bedrooms',45,40,0,0,0,0,0,0,0,0),(283,'Canada','Saskatchewan','','','Division No.  1','White Bear 70 ',2021,'Total - Number of bedrooms',270,260,0,0,0,0,0,0,0,10),(284,'Canada','Saskatchewan','','','Division No.  1','White Bear 70 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(285,'Canada','Saskatchewan','','','Division No.  1','White Bear 70 ',2021,'1 bedroom',15,10,0,0,0,0,0,0,0,10),(286,'Canada','Saskatchewan','','','Division No.  1','White Bear 70 ',2021,'2 bedrooms',85,80,0,0,0,0,0,0,0,0),(287,'Canada','Saskatchewan','','','Division No.  1','White Bear 70 ',2021,'3 bedrooms',75,70,0,0,0,0,0,0,0,10),(288,'Canada','Saskatchewan','','','Division No.  1','White Bear 70 ',2021,'4 or more bedrooms',95,95,0,0,0,0,0,0,0,10),(289,'Canada','Saskatchewan','','','Division No.  1','Ocean Man 69 ',2021,'Total - Number of bedrooms',45,45,0,0,0,0,0,0,0,0),(290,'Canada','Saskatchewan','','','Division No.  1','Ocean Man 69 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(291,'Canada','Saskatchewan','','','Division No.  1','Ocean Man 69 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(292,'Canada','Saskatchewan','','','Division No.  1','Ocean Man 69 ',2021,'2 bedrooms',10,0,0,0,0,0,0,0,0,0),(293,'Canada','Saskatchewan','','','Division No.  1','Ocean Man 69 ',2021,'3 bedrooms',15,15,0,0,0,0,0,0,0,0),(294,'Canada','Saskatchewan','','','Division No.  1','Ocean Man 69 ',2021,'4 or more bedrooms',20,20,0,0,0,0,0,0,0,0),(343,'Canada','Saskatchewan','','','Division No.  1','Pheasant Rump Nakota 68 ',2021,'Total - Number of bedrooms',25,20,0,0,0,0,0,0,0,10),(344,'Canada','Saskatchewan','','','Division No.  1','Pheasant Rump Nakota 68 ',2021,'No bedrooms',0,0,0,0,0,0,0,0,0,0),(345,'Canada','Saskatchewan','','','Division No.  1','Pheasant Rump Nakota 68 ',2021,'1 bedroom',0,0,0,0,0,0,0,0,0,0),(346,'Canada','Saskatchewan','','','Division No.  1','Pheasant Rump Nakota 68 ',2021,'2 bedrooms',10,0,0,0,0,0,0,0,0,0),(347,'Canada','Saskatchewan','','','Division No.  1','Pheasant Rump Nakota 68 ',2021,'3 bedrooms',15,0,0,0,0,0,0,0,0,0),(348,'Canada','Saskatchewan','','','Division No.  1','Pheasant Rump Nakota 68 ',2021,'4 or more bedrooms',10,10,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `structure type of building` ENABLE KEYS */;
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

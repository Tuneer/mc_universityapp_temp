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
-- Table structure for table `ca_csd`
--

DROP TABLE IF EXISTS `ca_csd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ca_csd` (
  `Sno` int DEFAULT NULL,
  `Province` text,
  `CA` text,
  `CSD` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_csd`
--

LOCK TABLES `ca_csd` WRITE;
/*!40000 ALTER TABLE `ca_csd` DISABLE KEYS */;
INSERT INTO `ca_csd` VALUES (1,'Newfoundland and Labrador','Grand Falls-Windsor','Grand Falls-Windsor'),(2,'Newfoundland and Labrador','Gander',' Division No. 6, Subd. E'),(3,'Newfoundland and Labrador','Gander',' Gander'),(4,'Newfoundland and Labrador','Gander',' Appleton'),(5,'Newfoundland and Labrador','Gander',' Glenwood'),(6,'Newfoundland and Labrador','Corner Brook',' Division No. 5, Subd. F'),(7,'Newfoundland and Labrador','Corner Brook',' Steady Brook'),(8,'Newfoundland and Labrador','Corner Brook',' Pasadena'),(11945,'Newfoundland and Labrador','Corner Brook',' Massey Drive'),(10,'Newfoundland and Labrador','Corner Brook',' Corner Brook'),(11,'Newfoundland and Labrador','Corner Brook',' Humber Arm South'),(11946,'Newfoundland and Labrador','Corner Brook',' Meadows'),(13,'Newfoundland and Labrador','Corner Brook',' Hughes Brook'),(14,'Newfoundland and Labrador','Corner Brook','Irishtown-Summerside'),(11947,'Newfoundland and Labrador','Corner Brook',' Mount Moriah'),(16,'Prince Edward Island','Charlottetown',' East River, Part 2'),(17,'Prince Edward Island','Charlottetown',' Crossroads'),(11948,'Prince Edward Island','Charlottetown',' Johnstons River'),(19,'Prince Edward Island','Charlottetown',' New Glasgow'),(20,'Prince Edward Island','Charlottetown',' Kingston'),(11949,'Prince Edward Island','Charlottetown',' Rocky Point 3'),(22,'Prince Edward Island','Charlottetown',' Clyde River'),(23,'Prince Edward Island','Charlottetown',' Miltonvale Park'),(11950,'Prince Edward Island','Charlottetown',' Hunter River'),(25,'Prince Edward Island','Charlottetown',' Union Road'),(26,'Prince Edward Island','Charlottetown',' Brackley'),(11951,'Prince Edward Island','Charlottetown',' Scotchfort 4'),(28,'Prince Edward Island','Charlottetown',' Mount Stewart'),(29,'Prince Edward Island','Charlottetown',' York'),(11952,'Prince Edward Island','Charlottetown',' East River, Part 1'),(31,'Prince Edward Island','Charlottetown',' North Shore'),(32,'Prince Edward Island','Charlottetown',' West River'),(11953,'Prince Edward Island','Charlottetown',' Winsloe North'),(34,'Prince Edward Island','Charlottetown',' Warren Grove'),(35,'Prince Edward Island','Charlottetown',' North Shore'),(11954,'Prince Edward Island','Charlottetown',' Charlottetown'),(37,'Prince Edward Island','Charlottetown',' Stratford'),(38,'Prince Edward Island','Charlottetown',' Cornwall'),(11955,'Prince Edward Island','Summerside',' Linkletter'),(40,'Prince Edward Island','Summerside',' Miscouche'),(41,'Prince Edward Island','Summerside',' Summerside'),(11956,'Prince Edward Island','Summerside',' Miscouche'),(43,'Nova Scotia','Kentville',' Kings, Subd. C'),(44,'Nova Scotia','Kentville',' Kentville'),(11957,'Canada','Kentville',' Kings, Subd. B'),(46,'Nova Scotia','Truro',' Colchester, Subd. C'),(47,'Nova Scotia','Truro',' Millbrook 27'),(11958,'Canada','Truro',' Truro'),(49,'Nova Scotia','Truro',' Colchester, Subd. B'),(50,'Nova Scotia','New Glasgow',' Pictou, Subd. B'),(11959,'Nova Scotia','New Glasgow',' Westville'),(52,'Nova Scotia','New Glasgow',' Stellarton'),(53,'Nova Scotia','New Glasgow',' Pictou, Subd. C'),(11960,'Canada','New Glasgow',' New Glasgow'),(55,'Nova Scotia','New Glasgow',' Trenton'),(56,'Nova Scotia','New Glasgow',' Fisher\'s Grant 24'),(11961,'Canada','Saskatchewan',' Merigomish Harbour 31'),(58,'Nova Scotia','Cape Breton',' Membertou 28B'),(59,'Nova Scotia','Cape Breton',' Eskasoni 3'),(60,'Nova Scotia','Cape Breton',' Cape Breton'),(61,'New Brunswick','Bathurst',' Bathurst'),(62,'New Brunswick','Bathurst',' Pabineau 11'),(63,'New Brunswick','Bathurst',' Bathurst'),(64,'New Brunswick','Bathurst',' Beresford'),(65,'New Brunswick','Bathurst','Pointe-Verte'),(66,'New Brunswick','Bathurst','Petit-Rocher'),(67,'New Brunswick','Bathurst',' Beresford'),(68,'New Brunswick','Bathurst',' Nigadoo'),(69,'New Brunswick','Miramichi',' Glenelg'),(70,'New Brunswick','Miramichi',' Chatham'),(71,'New Brunswick','Miramichi',' Derby'),(72,'New Brunswick','Miramichi',' Nelson'),(73,'New Brunswick','Miramichi',' Red Bank 4'),(74,'New Brunswick','Miramichi',' Southesk'),(75,'New Brunswick','Miramichi',' Northesk'),(76,'New Brunswick','Miramichi',' Newcastle'),(77,'New Brunswick','Miramichi',' Big Hole Tract 8 (North Half)'),(11968,'New Brunswick','Miramichi',' Big Hole Tract 8 (South Half)'),(79,'New Brunswick','Miramichi',' Eel Ground 2'),(80,'New Brunswick','Miramichi',' Miramichi'),(11969,'Canada','Campbellton',' Addington'),(82,'New Brunswick / Quebec','Campbellton',' Atholville'),(83,'New Brunswick / Quebec','Campbellton',' Campbellton'),(11970,'Canada','Campbellton',' Tide Head'),(85,'New Brunswick / Quebec','Campbellton','Pointe-Ã -la-Croix'),(86,'New Brunswick / Quebec','Campbellton',' Listuguj'),(11971,'Canada','Edmundston','RiviÃ¨re-Verte'),(88,'New Brunswick','Edmundston','RiviÃ¨re-Verte'),(89,'New Brunswick','Edmundston','Saint-Basile'),(11972,'Canada','Saskatchewan','St. Basile 10'),(91,'New Brunswick','Edmundston','Saint-Joseph'),(92,'New Brunswick','Edmundston','Saint-Jacques'),(11973,'Canada','Saskatchewan',' Edmundston'),(94,'Quebec','Matane','Sainte-FÃ©licitÃ©'),(95,'Quebec','Matane','Saint-Adelme'),(11974,'Canada','Matane','Saint-RenÃ©-de-Matane'),(97,'Quebec','Matane','Matane'),(98,'Quebec','Matane','Saint-LÃ©andre'),(11975,'Canada','Saskatchewan','Saint-Ulric'),(100,'Quebec','Rimouski','Saint-Narcisse-de-Rimouski'),(101,'Quebec','Rimouski','Saint-Anaclet-de-Lessard'),(11976,'Canada','Saskatchewan','North Battleford'),(103,'Quebec','Rimouski','Saint-ValÃ©rien'),(104,'Quebec','RiviÃ¨re-du-Loup','Saint-Antonin'),(105,'Quebec','RiviÃ¨re-du-Loup','Saint-Modeste'),(106,'Quebec','RiviÃ¨re-du-Loup','Cacouna'),(11978,'Quebec','RiviÃ¨re-du-Loup','Saint-ArsÃ¨ne'),(108,'Quebec','RiviÃ¨re-du-Loup','RiviÃ¨re-du-Loup'),(109,'Quebec','RiviÃ¨re-du-Loup','Notre-Dame-du-Portage'),(11979,'Canada','Saskatchewan','Baie-Comeau'),(111,'Quebec','Baie-Comeau','Pointe-Lebel'),(112,'Quebec','Baie-Comeau','Pointe-aux-Outardes'),(11980,'Canada','Baie-Comeau','Chute-aux-Outardes'),(114,'Quebec','Baie-Comeau','Ragueneau'),(115,'Quebec','Alma',' Alma'),(11981,'Canada','Saskatchewan','Sainte-Jeanne-d\'Arc'),(117,'Quebec','Dolbeau-Mistassini','Dolbeau-Mistassini'),(118,'Quebec','Dolbeau-Mistassini','Saint-EugÃ¨ne-d\'Argentenay'),(119,'Quebec','Sept-ÃŽles','Sept-ÃŽles'),(120,'Quebec','Sept-ÃŽles','Uashat 27'),(11983,'Quebec','Sept-ÃŽles','Maliotenam'),(122,'Quebec','Sainte-Marie','Sainte-Marie'),(123,'Quebec','Saint-Georges','Saint-RenÃ©'),(11984,'Quebec','Saint-Georges','Saint-Philibert'),(125,'Quebec','Saint-Georges','Saint-Georges'),(126,'Quebec','Saint-Georges','Saint-Simon-les-Mines'),(11985,'Quebec','Thetford Mines','Saint-Joseph-de-Coleraine'),(128,'Quebec','Thetford Mines','Thetford Mines'),(129,'Quebec','Thetford Mines','Saint-Adrien-d\'Irlande'),(130,'Quebec','Cowansville',' Cowansville'),(131,'Quebec','Victoriaville',' Chesterville'),(132,'Quebec','Victoriaville','Saint-Christophe-d\'Arthabaska'),(133,'Quebec','Victoriaville',' Victoriaville'),(134,'Quebec','Victoriaville','Saint-ValÃ¨re'),(135,'Quebec','Shawinigan',' Shawinigan'),(11988,'Quebec','Granby',' Bromont'),(137,'Quebec','Granby','Saint-Alphonse-de-Granby'),(138,'Quebec','Granby',' Granby'),(11989,'Quebec','Granby',' Roxton Pond'),(140,'Quebec','Granby','Saint-Paul-d\'Abbotsford'),(141,'Quebec','Saint-Hyacinthe','Saint-Hyacinthe'),(11990,'Quebec','Saint-Hyacinthe','Saint-Dominique'),(143,'Quebec','Sorel-Tracy','Sainte-Victoire-de-Sorel'),(144,'Quebec','Sorel-Tracy','Saint-Joseph-de-Sorel'),(11991,'Canada','Sorel-Tracy','Sorel-Tracy'),(146,'Quebec','Sorel-Tracy','Sainte-Anne-de-Sorel'),(147,'Quebec','Joliette','Saint-Paul'),(11992,'Canada','Saskatchewan','Swift Current'),(149,'Quebec','Joliette','Notre-Dame-des-Prairies'),(11993,'Canada','Joliette','Saint-Charles-BorromÃ©e'),(151,'Quebec','Salaberry-de-Valleyfield','Salaberry-de-Valleyfield'),(11994,'Canada','Sainte-Agathe-des-Monts','Val-Morin'),(153,'Quebec','Sainte-Agathe-des-Monts','Val-David'),(154,'Quebec','Sainte-Agathe-des-Monts','Sainte-Agathe-des-Monts'),(155,'Quebec','Lachute','Lachute'),(156,'Quebec','Val-d\'Or','Val-d\'Or'),(157,'Quebec','Lachute','Lac Simon'),(158,'Quebec','Amos','Saint-Marc-de-Figuery'),(159,'Quebec','Amos','Saint-Mathieu-d\'Harricana'),(160,'Quebec','Amos','Amos'),(11997,'Quebec','Amos','Saint-FÃ©lix-de-Dalquier'),(162,'Quebec','Amos','Saint-Dominique-du-Rosaire'),(163,'Quebec','Amos','Berry'),(11998,'Quebec','Amos','TrÃ©cesson'),(165,'Quebec','Amos','Sainte-Gertrude-Manneville'),(166,'Quebec','Amos','Pikogan'),(11999,'Quebec','Rouyn-Noranda','Rouyn-Noranda'),(168,'Ontario','Cornwall',' South Stormont'),(169,'Ontario','Cornwall',' Cornwall'),(170,'Canada','Hawkesbury',' Grenville'),(171,'Ontario / Quebec','Hawkesbury',' Hawkesbury'),(172,'Ontario','Brockville','Elizabethtown-Kitley'),(12001,'Canada','Brockville',' Brockville'),(174,'Ontario','Pembroke',' Pembroke'),(175,'Ontario','Pembroke',' Laurentian Valley'),(176,'Ontario','Petawawa',' Petawawa'),(177,'Ontario','Cobourg',' Cobourg'),(178,'Ontario','Port Hope',' Port Hope'),(179,'Ontario','Kawartha Lakes',' Kawartha Lakes'),(180,'Ontario','Centre Wellington',' Centre Wellington'),(181,'Ontario','Ingersoll',' Ingersoll'),(182,'Ontario','Woodstock',' Woodstock'),(183,'Ontario','Tillsonburg',' Tillsonburg'),(184,'Ontario','Norfolk',' Norfolk County'),(185,'Ontario','Stratford',' Stratford'),(186,'Ontario','Chatham-Kent','Chatham-Kent'),(12006,'Ontario','Chatham-Kent',' Moravian 47'),(188,'Ontario','Sarnia',' St. Clair'),(189,'Ontario','Sarnia',' Sarnia 45'),(190,'Ontario','Sarnia',' Sarnia'),(191,'Ontario','Sarnia',' Point Edward'),(192,'Ontario','Sarnia',' Plympton Wyoming'),(12008,'Canada','Essa',' Essa'),(194,'Ontario','Wasaga Beach',' Wasaga Beach'),(195,'Ontario','Owen Sound',' Georgian Bluffs'),(12009,'Canada','Saskatchewan',' Owen Sound'),(197,'Ontario','Collingwood',' Collingwood'),(198,'Ontario','Orillia',' Orillia'),(12010,'Canada','Saskatchewan','Regina'),(200,'Ontario','Midland',' Midland'),(201,'Ontario','North Bay',' Bonfield'),(202,'Ontario','North Bay',' Chisholm'),(203,'Ontario','North Bay',' East Ferris'),(12012,'Ontario','North Bay',' North Bay'),(205,'Ontario','North Bay',' Nipissing, Unorganized, North Part'),(206,'Ontario','North Bay',' Powassan'),(12013,'Ontario','North Bay',' Callander'),(208,'Ontario','North Bay',' Nipissing'),(209,'Ontario','Elliot Lake',' Elliot Lake'),(12014,'Canada','Timmins',' Timmins'),(211,'Ontario','Sault Ste. Marie',' Laird'),(212,'Ontario','Sault Ste. Marie',' Macdonald, Meredith and Aberdeen Additional'),(12015,'Canada','Sault Ste. Marie',' Sault Ste. Marie'),(214,'Ontario','Sault Ste. Marie',' Prince'),(215,'Ontario','Sault Ste. Marie',' Garden River 14'),(12016,'Canada','Saskatchewan',' Rankin Location 15D'),(217,'Ontario','Kenora',' Kenora'),(218,'Manitoba','Winkler',' Stanley'),(219,'Manitoba','Winkler',' Winkler'),(220,'Manitoba','Winkler',' Morden'),(221,'Manitoba','Steinbach',' Steinbach'),(222,'Manitoba','Portage la Prairie',' Portage la Prairie'),(12019,'Canada','Brandon',' Whitehead'),(224,'Manitoba','Brandon',' Brandon'),(225,'Manitoba','Brandon',' Elton'),(12020,'Canada','Brandon',' Waywayseecappo Highway 10'),(227,'Manitoba','Thompson',' Thompson'),(228,'Saskatchewan','Yorkton',' Wallace No. 243'),(12021,'Canada','Yorkton',' Rhein'),(230,'Saskatchewan','Yorkton',' Orkney No. 244'),(231,'Saskatchewan','Yorkton',' Yorkton'),(12022,'Canada','Yorkton',' Ebenezer'),(233,'Saskatchewan','Yorkton',' Springside'),(234,'Saskatchewan','Moose Jaw',' Moose Jaw No. 161'),(12023,'Canada','Saskatchewan','Lloydminster'),(236,'Saskatchewan','Swift Current',' Swift Current No. 137'),(237,'Saskatchewan','Swift Current',' Swift Current'),(238,'Saskatchewan','North Battleford',' Battle River No. 438'),(239,'Saskatchewan','North Battleford',' Battleford'),(240,'Saskatchewan','North Battleford',' Sweet Grass 113 M16'),(241,'Saskatchewan','North Battleford',' Poundmaker 114 18B'),(242,'Saskatchewan','North Battleford',' North Battleford'),(243,'Saskatchewan','North Battleford',' North Battleford'),(244,'Saskatchewan','Prince Albert',' Prince Albert No. 461'),(245,'Saskatchewan','Prince Albert',' Prince Albert'),(246,'Saskatchewan','Prince Albert',' Garden River No. 490'),(247,'Saskatchewan','Prince Albert',' Albertville'),(248,'Saskatchewan','Prince Albert',' Meath Park'),(249,'Saskatchewan','Prince Albert',' Buckland No. 491'),(250,'Saskatchewan','Prince Albert',' Wahpaton 94A'),(251,'Saskatchewan','Estevan',' Bienfait'),(252,'Saskatchewan','Estevan',' Estevan No. 5'),(253,'Saskatchewan','Estevan',' Estevan'),(254,'Saskatchewan','Weyburn',' Weyburn No. 67'),(255,'Saskatchewan','Weyburn',' Weyburn'),(256,'Saskatchewan','Weyburn',' McTaggart'),(257,'Alberta','Medicine Hat',' Cypress County'),(258,'Alberta','Medicine Hat',' Medicine Hat'),(259,'Alberta','Medicine Hat',' Redcliff'),(260,'Alberta','Brooks',' Brooks'),(261,'Alberta','Okotoks',' Okotoks'),(12032,'Canada','Saskatchewan','Regina'),(263,'Alberta','Strathmore',' Strathmore'),(12033,'Canada','Saskatchewan','Weyburn'),(265,'Alberta','Sylvan Lake',' Jarvis Bay'),(266,'Alberta','Sylvan Lake',' Sylvan Lake'),(267,'Alberta','Sylvan Lake',' Norglenwold'),(12035,'Alberta','Lacombe',' Lacombe'),(269,'Alberta','Camrose',' Camrose'),(270,'Canada','Saskatchewan','Yorkton'),(271,'Alberta/Saskatchewan','Lloydminster',' Lashburn'),(272,'Alberta/Saskatchewan','Lloydminster',' Marshall'),(273,'Alberta/Saskatchewan','Lloydminster',' Britannia No. 502'),(274,'Alberta/Saskatchewan','Lloydminster',' Lloydminster (Part)'),(275,'Alberta/Saskatchewan','Lloydminster',' Lloydminster (Part)'),(276,'Alberta','Saskatchewan','Yorkton'),(277,'Alberta','Wood Buffalo',' Wood Buffalo'),(278,'Alberta','Wood Buffalo',' Fort Mckay 174'),(279,'Alberta','Wood Buffalo',' Janvier 194'),(280,'Alberta','Wood Buffalo',' Gregoire Lake 176'),(281,'Alberta','Wood Buffalo',' Gregoire Lake 176A'),(282,'Alberta','Wood Buffalo',' Old Fort 217'),(283,'Alberta','Wood Buffalo',' Allison Bay 219'),(284,'Alberta','Wood Buffalo',' Dog Head 218'),(285,'Alberta','Wood Buffalo',' Thabacha NÃ¡re 196A'),(286,'Alberta','Wetaskiwin',' Wetaskiwin'),(12042,'Canada','Saskatchewan',' Cranbrook'),(288,'British Columbia','Cranbrook',' East Kootenay C'),(289,'British Columbia','Cranbrook',' Isidore\'s Ranch 4'),(12043,'Canada','Saskatchewan',' Cassimayooks (Mayook) 5'),(291,'British Columbia','Nelson',' Nelson'),(292,'British Columbia','Nelson',' Central Kootenay E'),(12044,'Canada','Saskatchewan',' Central Kootenay F'),(294,'British Columbia','Trail',' Fruitvale'),(295,'British Columbia','Trail',' Montrose'),(12045,'Canada','Saskatchewan','North Battleford'),(297,'British Columbia','Trail',' Warfield'),(298,'British Columbia','Trail',' Kootenay Boundary A'),(299,'British Columbia','Penticton',' Penticton'),(300,'British Columbia','Penticton','Okanagan-Similkameen D'),(301,'British Columbia','Penticton','Okanagan-Similkameen I'),(302,'British Columbia','Penticton','Okanagan-Similkameen F'),(303,'British Columbia','Penticton',' Penticton 1'),(304,'British Columbia','Penticton',' Vernon'),(305,'British Columbia','Penticton','Lloydminster'),(306,'British Columbia','Vernon',' North Okanagan B'),(307,'British Columbia','Vernon',' North Okanagan C'),(308,'Canada','Saskatchewan','Prince Albert'),(309,'British Columbia','Vernon',' Priest\'s Valley 6'),(310,'British Columbia','Salmon Arm',' Salmon Arm'),(311,'British Columbia','Salmon Arm',' Switsemalph 3'),(312,'British Columbia','Salmon Arm',' Switsemalph'),(313,'British Columbia','Squamish',' Squamish'),(314,'British Columbia','Squamish',' Kowtain 17'),(12051,'Canada','Saskatchewan',' Seaichem 16'),(316,'British Columbia','Squamish',' Stawamus 24'),(317,'British Columbia','Squamish',' Waiwakum 14'),(12052,'Canada','Saskatchewan','Prince Albert'),(319,'British Columbia','Ladysmith',' Cowichan Valley G'),(320,'British Columbia','Ladysmith',' Cowichan Valley H'),(321,'British Columbia','Ladysmith',' Ladysmith'),(322,'British Columbia','Ladysmith',' Chemainus 13'),(323,'British Columbia','Ladysmith',' Penelakut Island 7'),(324,'British Columbia','Ladysmith',' Shingle Point 4'),(325,'British Columbia','Ladysmith',' Lyacksun 3'),(326,'British Columbia','Ladysmith',' Oyster Bay 12'),(327,'British Columbia','Ladysmith',' Portier Pass 5'),(12056,'British Columbia','Duncan',' North Cowichan'),(329,'British Columbia','Duncan',' Duncan'),(330,'British Columbia','Duncan',' Cowichan Valley D'),(12057,'British Columbia','Duncan',' Cowichan Valley E'),(332,'British Columbia','Duncan',' Halalt 2'),(333,'British Columbia','Duncan','Squaw-Hay-One 11'),(12058,'British Columbia','Duncan',' Tsussie 6'),(335,'British Columbia','Duncan','Kil-pah-las 3'),(336,'British Columbia','Duncan',' Theik 2'),(337,'British Columbia','Duncan','Tzart-Lam 5'),(338,'British Columbia','Duncan',' Cowichan'),(339,'British Columbia','Parksville',' Parksville'),(340,'British Columbia','Parksville',' Qualicum Beach'),(341,'British Columbia','Parksville',' Nanaimo G'),(342,'British Columbia','Port Alberni',' Port Alberni'),(343,'British Columbia','Port Alberni','Alberni-Clayoquot D'),(344,'British Columbia','Port Alberni','Alberni-Clayoquot E'),(345,'British Columbia','Port Alberni','Alberni-Clayoquot F'),(12062,'British Columbia','Port Alberni',' Ahahswinis 1'),(347,'British Columbia','Port Alberni',' Alberni 2'),(348,'British Columbia','Port Alberni',' Tsahaheh 1'),(12063,'British Columbia','Port Alberni',' Klehkoot 2'),(350,'British Columbia','Courtenay',' Comox'),(351,'British Columbia','Courtenay',' Courtenay'),(12064,'Canada','Courtenay',' Cumberland'),(353,'British Columbia','Courtenay',' Comox Valley A'),(12065,'Canada','Courtenay',' Comox Valley B (Lazo North)'),(355,'British Columbia','Courtenay',' Comox 1'),(356,'British Columbia','Campbell River',' Campbell River'),(357,'British Columbia','Campbell River','Strathcona D (Oyster Bay - Buttle Lake)'),(358,'British Columbia','Campbell River',' Campbell River 11'),(359,'British Columbia','Campbell River',' Quinsam 12'),(360,'British Columbia','Campbell River',' Homalco 9'),(361,'British Columbia','Campbell River',' Nenagwas 12'),(362,'British Columbia','Powell River',' Powell River'),(363,'British Columbia','Powell River',' qathet B'),(364,'British Columbia','Powell River',' qathet C'),(365,'British Columbia','Powell River','Moose Jaw'),(366,'British Columbia','Williams Lake',' Williams Lake'),(367,'British Columbia','Williams Lake',' Cariboo D'),(368,'British Columbia','Williams Lake',' Cariboo E'),(369,'British Columbia','Williams Lake',' Cariboo F'),(12071,'British Columbia','Williams Lake',' Alkali Lake 1'),(371,'British Columbia','Williams Lake',' Deep Creek 2'),(372,'British Columbia','Williams Lake',' Dog Creek 1'),(12072,'British Columbia','Williams Lake',' Dog Creek 2'),(374,'British Columbia','Williams Lake',' Soda Creek 1'),(375,'British Columbia','Williams Lake',' Johny Sticks 2'),(12073,'British Columbia','Williams Lake',' Williams Lake 1'),(377,'British Columbia','Williams Lake',' Sandy Harry 4'),(378,'British Columbia','Williams Lake',' Swan Lake 3'),(12074,'British Columbia','Williams Lake',' Alkali Lake 4A'),(380,'British Columbia','Williams Lake',' Little Springs'),(381,'British Columbia','Quesnel',' Quesnel'),(12075,'British Columbia','Quesnel',' Cariboo A'),(383,'British Columbia','Quesnel',' Cariboo B'),(384,'British Columbia','Quesnel',' Wells'),(12076,'Canada','Saskatchewan',' Cariboo C'),(386,'British Columbia','Quesnel',' Cariboo I'),(387,'British Columbia','Quesnel',' Quesnel 1'),(12077,'Canada','Saskatchewan',' Kluskus 1'),(389,'British Columbia','Quesnel',' Coglistiko River 29'),(390,'British Columbia','Quesnel',' Nazco 20'),(391,'British Columbia','Quesnel',' Trout Lake Alec 16'),(392,'British Columbia','Quesnel',' Sundayman\'s Meadow 3'),(393,'British Columbia','Quesnel',' Euchinico Creek 17'),(394,'British Columbia','Quesnel',' Baezaeko River 27'),(395,'British Columbia','Quesnel',' Alexandria'),(396,'British Columbia','Quesnel',' Dragon Lake 3'),(12080,'Canada','Saskatchewan',' Port Edward'),(398,'British Columbia','Prince Rupert',' Prince Rupert'),(399,'British Columbia','Prince Rupert',' North Coast A'),(12081,'Canada','Saskatchewan',' Lax Kw\'alaams 1'),(401,'British Columbia','Prince Rupert',' S1/2 Tsimpsean 2'),(402,'British Columbia','Terrace',' Terrace'),(12082,'Canada','Saskatchewan','Kitimat-Stikine C (Part 1)'),(404,'British Columbia','Terrace','Kitimat-Stikine E'),(405,'British Columbia','Terrace',' Kitsumkaylum 1'),(406,'British Columbia','Terrace',' Kshish 4'),(12084,'British Columbia','Terrace',' Kulspai 6'),(408,'British Columbia','Terrace',' Kitselas 1'),(409,'British Columbia','Prince George',' Prince George'),(12085,'British Columbia','Prince George',' Fraser Fort George A'),(411,'British Columbia','Prince George',' Fraser Fort George C'),(412,'British Columbia','Prince George',' Fraser Fort George D'),(12086,'Canada','Prince George',' Fraser Fort George F'),(414,'British Columbia','Prince George',' Fort George 2'),(415,'British Columbia','Dawson Creek',' Pouce Coupe'),(12087,'Canada','Saskatchewan',' Dawson Creek'),(417,'British Columbia','Dawson Creek',' Peace River D'),(12088,'Canada','Fort St. John',' Taylor'),(419,'British Columbia','Fort St. John',' Fort St. John'),(420,'British Columbia','Fort St. John',' Peace River C'),(12089,'Canada','Saskatchewan',' Whitehorse'),(422,'Yukon','Whitehorse',' Lake Laberge 1'),(423,'Yukon','Whitehorse',' Mt. Lorne'),(12090,'Canada','Saskatchewan',' Ibex Valley'),(425,'Yukon','Whitehorse',' Marsh Lake'),(426,'Yukon','Whitehorse','Macpherson-Grizzly Valley'),(12091,'Canada','Saskatchewan',' Whitehorse, Unorganized'),(428,'Northwest Territories','Yellowknife',' Yellowknife');
/*!40000 ALTER TABLE `ca_csd` ENABLE KEYS */;
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
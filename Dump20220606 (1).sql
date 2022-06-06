-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: gibdd
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `avto`
--

DROP TABLE IF EXISTS `avto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avto` (
  `pts` varchar(10) NOT NULL,
  `model` varchar(20) NOT NULL,
  `marka` varchar(20) NOT NULL,
  `year_release` date NOT NULL,
  PRIMARY KEY (`pts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avto`
--

LOCK TABLES `avto` WRITE;
/*!40000 ALTER TABLE `avto` DISABLE KEYS */;
INSERT INTO `avto` VALUES ('23gh678934','kia','crid 2020','2020-04-30'),('45jh985632','shkoda','yeti','2018-09-15');
/*!40000 ALTER TABLE `avto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner` (
  `id_owner` int NOT NULL AUTO_INCREMENT,
  `surname` varchar(30) NOT NULL,
  `name_owner` varchar(30) NOT NULL,
  `patronymic` varchar(30) DEFAULT NULL,
  `driver_license` mediumtext NOT NULL,
  `passport` mediumtext NOT NULL,
  `birthday` date NOT NULL,
  `address_owner` varchar(70) NOT NULL,
  PRIMARY KEY (`id_owner`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES (1,'petrov','petr','petrovich','7414292010','1234567890','1999-01-21','kaluga lenina 73 kv 8'),(2,'ivanov','ivan','ivanovich','9845674832','3489302819','1990-07-16','kaluga nicolskay 102 kv 30');
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_sotryd`
--

DROP TABLE IF EXISTS `post_sotryd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_sotryd` (
  `id_post` int NOT NULL AUTO_INCREMENT,
  `name_post` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_post`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_sotryd`
--

LOCK TABLES `post_sotryd` WRITE;
/*!40000 ALTER TABLE `post_sotryd` DISABLE KEYS */;
INSERT INTO `post_sotryd` VALUES (1,'inspector'),(2,'senior inspector');
/*!40000 ALTER TABLE `post_sotryd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `protokol`
--

DROP TABLE IF EXISTS `protokol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `protokol` (
  `id_protokol` int NOT NULL AUTO_INCREMENT,
  `pts` varchar(10) NOT NULL,
  `date_protokol` date NOT NULL,
  `id_shtraf` int NOT NULL,
  `id_sotryd` int NOT NULL,
  `fact_pay` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_protokol`),
  KEY `pts` (`pts`),
  KEY `id_sotryd` (`id_sotryd`),
  KEY `id_shtraf` (`id_shtraf`),
  CONSTRAINT `protokol_ibfk_1` FOREIGN KEY (`pts`) REFERENCES `avto` (`pts`),
  CONSTRAINT `protokol_ibfk_2` FOREIGN KEY (`id_sotryd`) REFERENCES `sotryd` (`id_sotryd`),
  CONSTRAINT `protokol_ibfk_3` FOREIGN KEY (`id_shtraf`) REFERENCES `shtraf` (`id_shtraf`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protokol`
--

LOCK TABLES `protokol` WRITE;
/*!40000 ALTER TABLE `protokol` DISABLE KEYS */;
INSERT INTO `protokol` VALUES (1,'23gh678934','2021-01-01',1,2,0);
/*!40000 ALTER TABLE `protokol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `id_registration` int NOT NULL AUTO_INCREMENT,
  `pts` varchar(10) NOT NULL,
  `gos_num` varchar(6) DEFAULT NULL,
  `date_registration` date NOT NULL,
  `id_owner` int NOT NULL,
  `id_sotryd` int NOT NULL,
  PRIMARY KEY (`id_registration`),
  UNIQUE KEY `gos_num` (`gos_num`),
  KEY `id_owner` (`id_owner`),
  KEY `id_sotryd` (`id_sotryd`),
  KEY `pts` (`pts`),
  CONSTRAINT `registration_ibfk_1` FOREIGN KEY (`id_owner`) REFERENCES `owner` (`id_owner`),
  CONSTRAINT `registration_ibfk_2` FOREIGN KEY (`id_sotryd`) REFERENCES `sotryd` (`id_sotryd`),
  CONSTRAINT `registration_ibfk_3` FOREIGN KEY (`pts`) REFERENCES `avto` (`pts`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (3,'23gh678934','h666op','2020-09-15',1,1);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shtraf`
--

DROP TABLE IF EXISTS `shtraf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shtraf` (
  `id_shtraf` int NOT NULL AUTO_INCREMENT,
  `type_shtraf` varchar(40) NOT NULL,
  `price_shtraf` int NOT NULL,
  PRIMARY KEY (`id_shtraf`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shtraf`
--

LOCK TABLES `shtraf` WRITE;
/*!40000 ALTER TABLE `shtraf` DISABLE KEYS */;
INSERT INTO `shtraf` VALUES (1,'speeding in city',550),(2,'did not miss a pedestrian',1100);
/*!40000 ALTER TABLE `shtraf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sotryd`
--

DROP TABLE IF EXISTS `sotryd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sotryd` (
  `id_sotryd` int NOT NULL AUTO_INCREMENT,
  `surname` varchar(30) NOT NULL,
  `name_sotryd` varchar(30) NOT NULL,
  `patronymic` varchar(30) DEFAULT NULL,
  `passport` mediumtext NOT NULL,
  `id_post` int NOT NULL,
  `address` varchar(70) NOT NULL,
  PRIMARY KEY (`id_sotryd`),
  KEY `id_post` (`id_post`),
  CONSTRAINT `sotryd_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `post_sotryd` (`id_post`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sotryd`
--

LOCK TABLES `sotryd` WRITE;
/*!40000 ALTER TABLE `sotryd` DISABLE KEYS */;
INSERT INTO `sotryd` VALUES (1,'gavrilov','oleg','petrovich','5698345687',2,'kaluga squaer pobedy 5 kv 17'),(2,'geroev','alexey','ivanov','9845761234',1,'kaluga squaer pobedy 10 kv 17');
/*!40000 ALTER TABLE `sotryd` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-06 12:28:48

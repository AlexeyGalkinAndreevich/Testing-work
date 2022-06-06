-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: newgibdd
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Dumping data for table `avto`
--

LOCK TABLES `avto` WRITE;
/*!40000 ALTER TABLE `avto` DISABLE KEYS */;
INSERT INTO `avto` VALUES ('23gh678934','kia','crid 2020','2020-04-30'),('45jh985632','shkoda','yeti','2018-09-15'),('98re234678','lada','priora','2000-02-15');
/*!40000 ALTER TABLE `avto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES (1,'petrov','petr','petrovich','7414292010','1234567890','1999-01-21','kaluga lenina 73 kv 8'),(2,'ivanov','ivan','ivanovich','9845674832','3489302819','1990-07-16','kaluga nicolskay 102 kv 30'),(3,'petrov','petr','sergeevich','9845673267','7659217509','2000-01-13','kaluga karachevskay 73 kv 15');
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `post_sotryd`
--

LOCK TABLES `post_sotryd` WRITE;
/*!40000 ALTER TABLE `post_sotryd` DISABLE KEYS */;
INSERT INTO `post_sotryd` VALUES (1,'inspector'),(2,'senior inspector');
/*!40000 ALTER TABLE `post_sotryd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `protokol`
--

LOCK TABLES `protokol` WRITE;
/*!40000 ALTER TABLE `protokol` DISABLE KEYS */;
INSERT INTO `protokol` VALUES (1,'23gh678934','2021-01-01',1,2,0,605),(2,'23gh678934','2021-01-01',2,2,0,1210),(3,'45jh985632','2021-09-01',1,2,0,1210),(4,'98re234678','2021-10-10',2,2,0,1210),(5,'98re234678','2021-10-10',2,2,0,1210);
/*!40000 ALTER TABLE `protokol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'23gh678934','О777АВ','2020-09-15',3,1),(2,'98re234678','v345cd','2019-11-15',2,1),(3,'45jh985632','n348tl','2018-01-03',1,1);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shtraf`
--

LOCK TABLES `shtraf` WRITE;
/*!40000 ALTER TABLE `shtraf` DISABLE KEYS */;
INSERT INTO `shtraf` VALUES (1,'article 12.3','speeding in city'),(2,'article 123','did not miss a pedestrian');
/*!40000 ALTER TABLE `shtraf` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2022-06-06 17:48:54

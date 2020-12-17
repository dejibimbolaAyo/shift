-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 17, 2020 at 12:48 PM
-- Server version: 8.0.18
-- PHP Version: 7.4.5

SET SQL_MODE
= "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone
= "+00:00";

CREATE DATABASE
IF NOT EXISTS perspective;
USE perspective;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perspective`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE
IF NOT EXISTS `Answers`
(
  `id` int
(11) NOT NULL,
  `user_id` int
(11) NOT NULL,
  `question_id` int
(11) NOT NULL,
  `response` int
(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE
IF NOT EXISTS `Questions`
(
  `id` int
(11) NOT NULL,
  `question` varchar
(255) DEFAULT NULL,
  `dimension` varchar
(2) DEFAULT NULL,
  `direction` int
(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `Questions` (`id`,`question`,`dimension`, `direction`, `createdAt`, `updatedAt`) VALUES
(1,'You find it takes effort to introduce yourself to other people.', 'EI', 1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(2, 'You consider yourself more practical than creative.', 'SN', -1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(3, 'Winning a debate matters less to you than making sure no one gets upset', 'TF', 1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(4,'You get energized going to social events that involve many interactions.', 'EI', -1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(5, 'You often spend time exploring unrealistic and impractical yet intriguing ideas.', 'SN', 1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(6, 'Deadlines seem to you to be of relative rather than absolute importance.', 'JP', 1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(7, 'Logic is usually more important than heart when it comes to making important decisions.', 'TF', -1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(8, 'Your home and work environments are quite tidy.', 'JP', -1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(9, 'You do not mind being at the center of attention.', 'EI', -1, '2020-02-16 13:23:17', '2020-02-16 13:23:17'),
(10, 'Keeping your options open is more important than having a to-do list.', 'JP', 1, '2020-02-16 13:23:17', '2020-02-16 13:23:17');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE
IF NOT EXISTS `sequelizemeta`
(
  `name` varchar
(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`)
VALUES
	('20201215151428-create-user.js'),
	('20201215152053-create-question.js'),
	('20201215152959-create-answer.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `Users`
(
  `id` int
(11) NOT NULL,
  `email` varchar
(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `Answers`
ADD PRIMARY KEY
(`id`),
ADD KEY `user_id`
(`user_id`),
ADD KEY `question_id`
(`question_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `Questions`
ADD PRIMARY KEY
(`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
ADD PRIMARY KEY
(`name`),
ADD UNIQUE KEY `name`
(`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `Users`
ADD PRIMARY KEY
(`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `Answers`
  MODIFY `id` int
(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `Questions`
  MODIFY `id` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `Users`
  MODIFY `id` int
(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `Answers`
ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY
(`user_id`) REFERENCES `Users`
(`id`),
ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY
(`question_id`) REFERENCES `Questions`
(`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

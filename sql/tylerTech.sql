-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 24, 2024 at 02:37 AM
-- Server version: 8.0.23
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tylerTech`
--

-- --------------------------------------------------------

--
-- Table structure for table `employeeManagers`
--

CREATE TABLE `employeeManagers` (
  `manager_id` int NOT NULL,
  `employee_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employeeManagers`
--

INSERT INTO `employeeManagers` (`manager_id`, `employee_id`) VALUES
(0, 1),
(74, 2),
(74, 3),
(75, 4),
(75, 5),
(75, 6),
(76, 7),
(76, 8),
(76, 9),
(76, 10);

-- --------------------------------------------------------

--
-- Table structure for table `employeeRoles`
--

CREATE TABLE `employeeRoles` (
  `role_id` int NOT NULL,
  `employee_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employeeRoles`
--

INSERT INTO `employeeRoles` (`role_id`, `employee_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(3, 4),
(4, 5),
(5, 6),
(6, 6),
(3, 7),
(5, 8),
(2, 9),
(6, 9),
(4, 10);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int NOT NULL,
  `fname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `fname`, `lname`, `employee_id`) VALUES
(74, 'Jeffery', 'Wells', 1),
(75, 'Victor', 'Atkins', 2),
(76, 'Kelli', 'Hamilton', 3),
(77, 'Adam', 'Braun', 4),
(78, 'Brian', 'Cruz', 5),
(79, 'Kristen', 'Floyd', 6),
(80, 'Lois', 'Martinez', 7),
(81, 'Michael', 'Lind', 8),
(82, 'Eric', 'Bay', 9),
(83, 'Brandon', 'Young', 10);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int NOT NULL,
  `role_name` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`) VALUES
(1, 'Director'),
(2, 'IT'),
(3, 'Support'),
(4, 'Accounting'),
(5, 'Analyst'),
(6, 'Sales');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

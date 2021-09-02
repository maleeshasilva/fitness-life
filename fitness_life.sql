-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2021 at 04:53 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fitness_life`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `email` varchar(255) NOT NULL,
  `trainerID` int(4) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`email`, `trainerID`, `date`, `time`) VALUES
('dami@gmail.com', 3, '2021-08-28', '00:00:00'),
('dami@gmail.com', 4, '2021-08-25', '00:00:00'),
('dami@gmail.com', 6, '2021-08-22', '00:00:00'),
('dphmalith@gmail.com', 1, '2021-08-25', '00:00:00'),
('dphmalith@gmail.com', 4, '2021-08-25', '00:00:00'),
('dphmalith@gmail.com', 7, '2021-08-22', '00:00:00'),
('susa@gmail.com', 2, '2021-08-26', '00:00:00'),
('susa@gmail.com', 3, '2021-08-30', '00:00:00'),
('susa@gmail.com', 5, '2021-08-21', '00:00:00'),
('susa@gmail.com', 8, '2021-08-23', '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `email` varchar(255) NOT NULL,
  `trainerID` int(4) NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`email`, `trainerID`, `dateTime`) VALUES
('dami@gmail.com', 2, '2021-08-24 16:29:07'),
('dphmalith@gmail.com', 3, '2021-08-19 14:30:07'),
('Emanuel@gmail.com ', 4, '2021-08-19 16:30:07'),
('Francis@gmail.com ', 6, '2021-08-20 10:30:07'),
('Harold@gmail.com ', 7, '2021-08-21 10:30:07'),
('hazel@gmail.com', 1, '2021-08-21 10:30:07'),
('jesse@gmail.com', 5, '2021-08-22 08:30:07'),
('susa@gmail.com', 1, '2021-08-20 10:00:07'),
('susa@gmail.com', 1, '2021-08-23 11:30:07'),
('susa@gmail.com', 8, '2021-08-19 10:00:07');

-- --------------------------------------------------------

--
-- Table structure for table `enrollment`
--

CREATE TABLE `enrollment` (
  `email` varchar(255) NOT NULL,
  `programID` int(4) NOT NULL,
  `enrollDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `email` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `memberType` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`email`, `password`, `firstName`, `lastName`, `telephone`, `memberType`, `createdAt`) VALUES
('dami@gmail.com', '', 'Damith', 'Darshane', '0701231232', 0, '2021-08-21'),
('dphmalith@gmail.com', '', 'Himal', 'Malith', '0701231231', 0, '2021-08-21'),
('dphmalith@gmail.comw', 'dbe766b39dc8', 'Himal', 'Malith', '', 0, '2021-08-27'),
('Emanuel@gmail.com ', '', 'Emanuel', 'Holloway', '0701231237', 1, '2021-08-22'),
('Francis@gmail.com ', '', 'Francis', 'Hays', '070123123', 1, '2021-08-22'),
('Harold@gmail.com ', '', 'Harold', 'Veilleux', '0701231239', 1, '2021-08-22'),
('hazel@gmail.com', '', 'Hazel', 'Wright', '0701231233', 0, '2021-08-19'),
('jesse@gmail.com', '', 'Jesse', 'Gomez', '0701231235', 0, '2021-08-21'),
('melanie@gmail.com', '', 'Melanie', 'Walko', '0701231234', 0, '2021-08-21'),
('susa@gmail.com', '', 'Shasika', 'Dilan', '0701231232', 1, '2021-08-20'),
('walker@gmail.com ', '', 'Walker', 'Gambrel', '0701231236', 0, '2021-08-22');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderID` varchar(10) NOT NULL,
  `invoiceNo` varchar(10) NOT NULL,
  `trackingNo` varchar(20) NOT NULL,
  `tStatus` int(1) NOT NULL DEFAULT 0,
  `orderDate` datetime NOT NULL DEFAULT current_timestamp(),
  `productID` int(4) NOT NULL,
  `quantity` int(3) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`orderID`, `invoiceNo`, `trackingNo`, `tStatus`, `orderDate`, `productID`, `quantity`, `email`) VALUES
('OD001', '123456789', '123456789', 1, '2021-08-20 22:53:34', 3, 2, 'dphmalith@gmail.com'),
('OD002', '123456781', '123456781', 1, '2021-08-20 23:54:49', 4, 1, 'dphmalith@gmail.com'),
('OD003', '123456782', '123456782', 1, '2021-08-18 23:54:49', 6, 3, 'dphmalith@gmail.com'),
('OD004', '123456783', '123456783', 1, '2021-08-19 23:54:49', 2, 2, 'dphmalith@gmail.com'),
('OD005', '123456784', '123456784', 1, '2021-08-18 23:54:49', 5, 1, 'dphmalith@gmail.com'),
('OD006', '123456785', '123456785', 0, '2021-08-21 23:54:49', 4, 1, 'dphmalith@gmail.com'),
('OD007', '123456786', '123456786', 0, '2021-08-21 23:54:49', 2, 1, 'dphmalith@gmail.com'),
('OD008', '123456787', '123456787', 2, '2021-08-20 23:54:49', 3, 1, 'dphmalith@gmail.com'),
('OD009', '123456788', '123456788', 2, '2021-08-19 23:54:49', 5, 3, 'dphmalith@gmail.com'),
('OD010', '123456789', '123456789', 2, '2021-08-18 23:54:49', 7, 2, 'dphmalith@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `owner`
--

CREATE TABLE `owner` (
  `username` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `telephone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymentID` varchar(10) NOT NULL,
  `invoiceNo` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `amount` double NOT NULL,
  `orderID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payroll`
--

CREATE TABLE `payroll` (
  `trainerId` int(4) NOT NULL,
  `salary` int(6) NOT NULL,
  `overtime` int(11) NOT NULL,
  `hours` int(11) NOT NULL,
  `dueDate` date NOT NULL,
  `paid` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payroll`
--

INSERT INTO `payroll` (`trainerId`, `salary`, `overtime`, `hours`, `dueDate`, `paid`) VALUES
(1, 50000, 1000, 2, '2021-08-31', 0),
(2, 25000, 500, 10, '2021-08-31', 0),
(3, 35000, 800, 5, '2021-08-31', 0),
(4, 35000, 800, 9, '2021-08-31', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productID` int(4) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `quantity` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productID`, `productName`, `price`, `quantity`) VALUES
(1, 'Test Product', 100, 10),
(2, 'Rubber Hex Dumbbells', 2000, 10),
(3, 'Cast Iron Kettlebells', 2600, 10),
(4, 'Standard Hex Bar', 14000, 10),
(5, 'Wall Balls', 9000, 10),
(6, 'Stability Ball', 2400, 10),
(7, 'Power Bands', 900, 10);

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `programID` int(4) NOT NULL,
  `programName` varchar(255) NOT NULL,
  `monthlyRental` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `programworkout`
--

CREATE TABLE `programworkout` (
  `programID` int(4) NOT NULL,
  `workoutID` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trainer`
--

CREATE TABLE `trainer` (
  `trainerId` int(4) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trainer`
--

INSERT INTO `trainer` (`trainerId`, `email`, `password`, `firstName`, `lastName`, `telephone`, `type`) VALUES
(1, 'scott@gmail.com', '', 'Scott', 'Smith', '0771231231', 0),
(2, 'anne@gmail.com', '', 'Anne', 'Wilson', '0771231232', 0),
(3, 'colin@gmail.com', '', 'Colin', 'Silva', '0771231233', 0),
(4, 'nalin@gmail.com', '', 'Nalin', 'Perera', '0771231234', 0),
(5, 'sakila@gmail.com', '', 'Sakila', 'Rajakaruna', '0771231235', 1),
(6, 'pathum@gmail.com', '', 'Pathum', 'Anuradha', '0771231236', 1),
(7, 'joel@gmail.com', '', 'Shehan', 'Joel', '0771231237', 1),
(8, 'sussie@gmail.com', '', 'Sussie', 'Moss', '0771231238', 1);

-- --------------------------------------------------------

--
-- Table structure for table `trainerattendance`
--

CREATE TABLE `trainerattendance` (
  `trainerId` int(4) NOT NULL,
  `date` date NOT NULL,
  `attendance` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trainerattendance`
--

INSERT INTO `trainerattendance` (`trainerId`, `date`, `attendance`) VALUES
(1, '2021-08-20', 1),
(2, '2021-08-20', 1),
(3, '2021-08-20', 1),
(4, '2021-08-20', 1),
(5, '2021-08-20', 1),
(6, '2021-08-20', 1),
(7, '2021-08-20', 1),
(8, '2021-08-20', 1);

-- --------------------------------------------------------

--
-- Table structure for table `workout`
--

CREATE TABLE `workout` (
  `workoutID` int(4) NOT NULL,
  `workoutName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `duration` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`email`,`trainerID`,`date`,`time`) USING BTREE,
  ADD KEY `trainerID` (`trainerID`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`email`,`trainerID`,`dateTime`),
  ADD KEY `trainerID` (`trainerID`);

--
-- Indexes for table `enrollment`
--
ALTER TABLE `enrollment`
  ADD PRIMARY KEY (`email`,`programID`,`enrollDate`),
  ADD KEY `enrollment_ibfk_3` (`programID`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `productID` (`productID`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`username`,`email`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentID`) USING BTREE,
  ADD KEY `orderID` (`orderID`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `payroll`
--
ALTER TABLE `payroll`
  ADD PRIMARY KEY (`trainerId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`programID`);

--
-- Indexes for table `programworkout`
--
ALTER TABLE `programworkout`
  ADD PRIMARY KEY (`programID`,`workoutID`),
  ADD KEY `workoutID` (`workoutID`);

--
-- Indexes for table `trainer`
--
ALTER TABLE `trainer`
  ADD PRIMARY KEY (`trainerId`);

--
-- Indexes for table `trainerattendance`
--
ALTER TABLE `trainerattendance`
  ADD PRIMARY KEY (`trainerId`);

--
-- Indexes for table `workout`
--
ALTER TABLE `workout`
  ADD PRIMARY KEY (`workoutID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `programID` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trainer`
--
ALTER TABLE `trainer`
  MODIFY `trainerId` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `workout`
--
ALTER TABLE `workout`
  MODIFY `workoutID` int(4) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`email`) REFERENCES `member` (`email`),
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`trainerID`) REFERENCES `trainer` (`trainerId`);

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`email`) REFERENCES `member` (`email`),
  ADD CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`trainerID`) REFERENCES `trainer` (`trainerId`);

--
-- Constraints for table `enrollment`
--
ALTER TABLE `enrollment`
  ADD CONSTRAINT `enrollment_ibfk_2` FOREIGN KEY (`email`) REFERENCES `member` (`email`),
  ADD CONSTRAINT `enrollment_ibfk_3` FOREIGN KEY (`programID`) REFERENCES `program` (`programID`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `product` (`productID`),
  ADD CONSTRAINT `order_ibfk_3` FOREIGN KEY (`email`) REFERENCES `member` (`email`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`orderID`) REFERENCES `order` (`orderID`),
  ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`email`) REFERENCES `member` (`email`);

--
-- Constraints for table `payroll`
--
ALTER TABLE `payroll`
  ADD CONSTRAINT `payroll_ibfk_1` FOREIGN KEY (`trainerId`) REFERENCES `trainer` (`trainerId`);

--
-- Constraints for table `programworkout`
--
ALTER TABLE `programworkout`
  ADD CONSTRAINT `programworkout_ibfk_1` FOREIGN KEY (`programID`) REFERENCES `program` (`programID`),
  ADD CONSTRAINT `programworkout_ibfk_2` FOREIGN KEY (`workoutID`) REFERENCES `workout` (`workoutID`);

--
-- Constraints for table `trainerattendance`
--
ALTER TABLE `trainerattendance`
  ADD CONSTRAINT `trainerattendance_ibfk_1` FOREIGN KEY (`trainerId`) REFERENCES `trainer` (`trainerId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

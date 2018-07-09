-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2018 at 08:17 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `connection`
--

CREATE TABLE `connection` (
  `userid` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `packageid` int(11) NOT NULL,
  `packageprice` int(11) NOT NULL,
  `date` date NOT NULL,
  `connectionid` int(11) NOT NULL,
  `expire` date NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `connection`
--

INSERT INTO `connection` (`userid`, `username`, `packageid`, `packageprice`, `date`, `connectionid`, `expire`, `status`) VALUES
(1, 'reza', 45455, 1200, '2018-07-07', 1, '2018-07-31', 'active'),
(2, 'admin', 654, 2650, '2018-07-08', 2, '2018-07-31', 'active'),
(6, 'abul', 258, 1650, '2018-07-07', 3, '2018-07-31', 'active'),
(8, 'efti', 45455, 1200, '2018-07-09', 4, '2018-07-29', 'active'),
(7, 'ishmam', 45456, 2100, '2018-07-08', 5, '2018-07-30', 'active'),
(9, 'rajesh', 258, 1650, '2018-07-10', 6, '2018-07-01', 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `userid` int(11) NOT NULL,
  `password` int(11) NOT NULL,
  `logindate` date NOT NULL,
  `username` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`userid`, `password`, `logindate`, `username`) VALUES
(1, 12, '2018-07-16', 'reza');

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `packagename` varchar(200) NOT NULL,
  `price` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `packageid` int(11) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`packagename`, `price`, `speed`, `packageid`, `description`) VALUES
('Durbar Standard', 1650, 20, 258, 'UNLIMITED'),
('Durbar Ultimate', 2650, 30, 654, 'UNLIMITED'),
('Durbar Economy', 1200, 15, 45455, 'UNLIMITED'),
('Durbar Advance', 2100, 25, 45456, 'UNLIMITED');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `connectionid` int(11) NOT NULL,
  `payingdate` date NOT NULL,
  `amount` int(11) NOT NULL,
  `paymentid` int(11) NOT NULL,
  `packageid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`connectionid`, `payingdate`, `amount`, `paymentid`, `packageid`) VALUES
(1, '2018-07-09', 1200, 1, 45455),
(2, '2018-07-07', 2650, 2, 258),
(3, '2018-07-08', 1650, 3, 258),
(4, '2018-07-11', 1200, 4, 45455),
(5, '2018-07-06', 2100, 5, 45455);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `userid` int(11) NOT NULL,
  `packageid` int(11) NOT NULL,
  `review` varchar(500) NOT NULL,
  `time` date NOT NULL,
  `reviewid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `phoneno` int(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `signuptime` date NOT NULL,
  `usertype` varchar(10) NOT NULL,
  `logindate` date DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `name`, `phoneno`, `address`, `email`, `signuptime`, `usertype`, `logindate`, `username`, `password`) VALUES
(1, 'reza ul karim', 1674086295, 'Kollanpur', 'reza@gmail.com', '2018-07-18', 'user', '2018-07-26', 'reza', '12'),
(3, 'robi ullah', 1723654789, 'Dhaka', 'robiullah@isp.com', '2018-07-07', 'admin', '2018-07-08', 'robi', 'robi'),
(6, 'abul kasem', 168234875, 'dhaka', 'abul@gmail.com', '2018-07-19', 'user', '2018-07-19', 'abul', 'abul'),
(7, 'Ishmam Islam', 1683889948, 'Bashundhara', 'Ishmam2050@gmail.com', '2018-07-08', 'user', '2018-07-08', 'ishmam', 'ishmam'),
(8, 'efti azam', 1548625462, 'mirpur 10', 'efti@gmail.com', '2018-07-18', 'user', '2018-07-11', 'efti', 'erfti'),
(9, 'rajesh saha', 1545896525, 'Narayangong', 'rajesh@gmail.com', '2018-07-11', 'user', '2018-07-12', 'rajesh', 'rajesh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `connection`
--
ALTER TABLE `connection`
  ADD PRIMARY KEY (`connectionid`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`packageid`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentid`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`reviewid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `connection`
--
ALTER TABLE `connection`
  MODIFY `connectionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `packageid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45463;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymentid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `reviewid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

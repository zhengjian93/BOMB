SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- CREATE DATABASE BOMB;

CREATE TABLE IF NOT EXISTS air_position (
  id int auto_increment primary key,
  air_head numeric(2) NOT NULL,
  air_wing1 numeric(2) NOT NULL,
  air_wing2 numeric(2) NOT NULL,
  air_wing3 numeric(2) NOT NULL,
  air_wing4 numeric(2) NOT NULL,
  air_wing5 numeric(2) NOT NULL,
  air_body numeric(2) NOT NULL,
  air_tail_wing1 numeric(2) NOT NULL,
  air_tail_wing2 numeric(2) NOT NULL,
  air_tail_wing3 numeric(2) NOT NULL,
  user numeric(18) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS user (
	id int auto_increment primary key,
	username varchar(20) NOT NULL,
    password varchar(20) NOT NULL,
    phone varchar(20) ,
    email varchar(20) ,
    createTime datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-09-2017 a las 07:41:23
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `habitaciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dt_habitacion`
--

CREATE TABLE `dt_habitacion` (
  `idDt_Habitacion` int(11) NOT NULL,
  `Etage` int(11) NOT NULL,
  `NombreHabitacion` int(11) NOT NULL,
  `Prix` float NOT NULL,
  `Estatus` enum('LIBRE','OCUPADA','RESERVADA','PEDIDO','ASEO','REPARACION') NOT NULL DEFAULT 'LIBRE',
  `DateEntree` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DateSortie` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dt_habitacion`
--

INSERT INTO `dt_habitacion` (`idDt_Habitacion`, `Etage`, `NombreHabitacion`, `Prix`, `Estatus`, `DateEntree`, `DateSortie`) VALUES
(1, 0, 1, 500, 'LIBRE', '2017-09-06 04:32:00', '2017-09-05 05:00:00'),
(2, 0, 1, 500, 'LIBRE', '2017-09-06 04:32:04', '2017-09-05 05:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dt_habitacion`
--
ALTER TABLE `dt_habitacion`
  ADD PRIMARY KEY (`idDt_Habitacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dt_habitacion`
--
ALTER TABLE `dt_habitacion`
  MODIFY `idDt_Habitacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

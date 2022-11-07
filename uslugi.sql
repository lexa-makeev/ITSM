-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 07 2022 г., 22:31
-- Версия сервера: 8.0.31
-- Версия PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `uslugi`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cataloguslug`
--

CREATE TABLE `cataloguslug` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `components` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `cataloguslug`
--

INSERT INTO `cataloguslug` (`id`, `name`, `components`) VALUES
(1, '1', '1'),
(2, 'Разработка модулей', 'Domictoz');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `pass`, `role`) VALUES
(1, 'ss@y.ru', '$2y$10$MNHgO9CiFx6Crz7QGPxQKe84i6PjZVzqzabi88CmrW6tjcyMceRaC', 1),
(2, '123@mail.ru', '$2y$10$pGX0QwYsQtmHnt0r0UGJieckuSdenyvICjQ2LXGQWyOIcLl3LRaJO', 2),
(3, '123@y.ru', '$2y$10$4NNY.dmsk1Zi5XMwmxbV8e.M3BKTXyiLB9O6I7EwuGyoTxXu5Hq.2', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cataloguslug`
--
ALTER TABLE `cataloguslug`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cataloguslug`
--
ALTER TABLE `cataloguslug`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

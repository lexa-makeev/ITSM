-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 22 2022 г., 13:52
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
-- Структура таблицы `components`
--

CREATE TABLE `components` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `components` varchar(255) NOT NULL,
  `opis` varchar(255) NOT NULL,
  `cost` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `components`
--

INSERT INTO `components` (`id`, `name`, `components`, `opis`, `cost`) VALUES
(2, 'Создание инфраструктуры', 'Bizagi, Ramus', 'Описание', 2000);

-- --------------------------------------------------------

--
-- Структура таблицы `incedent`
--

CREATE TABLE `incedent` (
  `id` int NOT NULL,
  `date` datetime NOT NULL,
  `type` varchar(255) NOT NULL,
  `topic` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `opis` varchar(255) NOT NULL,
  `components_id` int NOT NULL,
  `users_id` int NOT NULL,
  `contragent_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `incedent`
--

INSERT INTO `incedent` (`id`, `date`, `type`, `topic`, `status`, `end_date`, `opis`, `components_id`, `users_id`, `contragent_id`) VALUES
(4, '2022-11-15 18:27:26', 'Инцидент', 'Новая', 'В работе', '2022-11-25 20:31:00', 'мчапвыавы', 2, 5, 4),
(9, '2022-11-16 10:37:56', 'Инцидент', 'Сделать инфраструктуру', 'Новая', '2022-11-20 12:37:00', 'Надо сделать инфраструктуру', 2, 7, 4),
(10, '2022-11-16 10:42:17', 'Инцидент', 'Новая3', 'Новая', '2022-11-25 12:46:00', 'Новая3', 2, 5, 4),
(15, '2022-11-21 14:59:28', 'Инцидент', '23', 'Новая', '0000-00-00 00:00:00', 'выф', 2, 7, 8),
(70, '2022-11-21 15:24:09', 'Инцидент', '354', 'Новая', '2022-11-26 14:42:00', 'gfd', 2, 5, 4),
(95, '2022-11-21 15:39:36', 'Инцидент', '423', 'Новая', '2022-11-25 14:43:00', 'tret', 2, 5, 4),
(100, '2022-11-21 15:42:09', 'Инцидент', '123431', 'Новая', '0000-00-00 00:00:00', 'fdsfs', 2, 4, 9),
(101, '2022-11-21 15:43:46', 'Инцидент', '123431', 'Закончена', '0000-00-00 00:00:00', 'fdsfs', 2, 5, 9);

-- --------------------------------------------------------

--
-- Структура таблицы `message`
--

CREATE TABLE `message` (
  `id` int NOT NULL,
  `message` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `users_id` int NOT NULL,
  `users_id2` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `message`, `date`, `users_id`, `users_id2`) VALUES
(13, 'Почему не работаем?', '2022-11-15 20:31:59', 6, 4),
(14, 'Вы где?', '2022-11-15 20:32:09', 6, 5),
(15, 'На такси ехал на работу', '2022-11-15 20:32:30', 5, 6),
(16, 'Обед был', '2022-11-15 20:32:48', 4, 6),
(17, 'Не бейте', '2022-11-21 13:19:42', 4, 6),
(18, '12', '2022-11-21 16:14:13', 5, 6),
(19, '123', '2022-11-21 16:14:47', 5, 6),
(20, 'ок', '2022-11-21 16:16:31', 6, 5),
(21, '1', '2022-11-22 13:26:00', 6, 5),
(22, '2', '2022-11-22 13:26:02', 6, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `role` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `fam` varchar(255) NOT NULL,
  `otch` varchar(255) NOT NULL,
  `tel` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `pass`, `role`, `name`, `fam`, `otch`, `tel`) VALUES
(4, '123@mail.ru', '$2y$10$5Ye81Q4n0ReqZHw9AFAOQeFA1IjpwaY5mYaxaQb18kEAtkU/ur3s6', 2, 'Иван', 'Иванов', 'Сергеевич', NULL),
(5, '1234@mail.ru', '$2y$10$pTp7q0DEHQRWnpCRZzNTvuIeEmDW5DFg.Xq3mxW4B1LYhgg.HJgbu', 3, 'Эмильен', 'Жабер', 'Таксисович', NULL),
(6, '12345@mail.ru', '$2y$10$yHC7eG9Uhy0rEIa3nqhynO4W/iXzQ8f9/grUArnIZlkVrkxm5irgm', 1, 'Администратор', 'Админ', 'Админович', NULL),
(7, '123456@mail.ru', '$2y$10$3yPhFbx7Q42W0iBGZjbX4.roowXGOB5qUUiRE4y4tw/fNWvtpATAe', 3, 'Илья', 'Абросов', 'Фёдорович', NULL),
(8, 'client@mail.ru', '$2y$10$tgxLdrrr.Ua7MPt2jP/.teoTZTooWaLH7nGGrFyMeil7lzxphdGDC', 4, 'Клиент', 'Клиентов', 'Клиентович', NULL),
(9, 'client2@mail.ru', '$2y$10$bEDFHojbiGdazA2H1ciuSeOpbWsq9j3UUh3lGE.ffnFZ5GyQ5gcMS', 4, 'Клиент2', 'Клиент2', 'Клиент2', '+795435435432');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `components`
--
ALTER TABLE `components`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `incedent`
--
ALTER TABLE `incedent`
  ADD PRIMARY KEY (`id`,`components_id`,`users_id`,`contragent_id`) USING BTREE,
  ADD KEY `fk_incedent_components_idx` (`components_id`),
  ADD KEY `fk_incedent_users1_idx` (`users_id`),
  ADD KEY `fk_incedent_users2_idx` (`contragent_id`);

--
-- Индексы таблицы `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`,`users_id`,`users_id2`),
  ADD KEY `fk_message_users1_idx` (`users_id`),
  ADD KEY `fk_message_users2_idx` (`users_id2`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `components`
--
ALTER TABLE `components`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `incedent`
--
ALTER TABLE `incedent`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT для таблицы `message`
--
ALTER TABLE `message`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `incedent`
--
ALTER TABLE `incedent`
  ADD CONSTRAINT `fk_incedent_components` FOREIGN KEY (`components_id`) REFERENCES `components` (`id`),
  ADD CONSTRAINT `fk_incedent_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_incedent_users2` FOREIGN KEY (`contragent_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `fk_message_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_message_users2` FOREIGN KEY (`users_id2`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

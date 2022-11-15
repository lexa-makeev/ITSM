-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 15 2022 г., 20:39
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
  `components` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `components`
--

INSERT INTO `components` (`id`, `name`, `components`) VALUES
(2, 'Инфраструктура', '');

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
  `end_date` datetime NOT NULL,
  `opis` varchar(255) NOT NULL,
  `components_id` int NOT NULL,
  `users_id` int NOT NULL,
  `contragent_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `incedent`
--

INSERT INTO `incedent` (`id`, `date`, `type`, `topic`, `status`, `end_date`, `opis`, `components_id`, `users_id`, `contragent_id`) VALUES
(4, '2022-11-15 18:27:26', 'Инцидент', 'Новая', 'В работе', '2022-11-17 20:31:00', 'мчапвыавы', 2, 5, 4);

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
(16, 'Обед был', '2022-11-15 20:32:48', 4, 6);

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
  `otch` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `pass`, `role`, `name`, `fam`, `otch`) VALUES
(4, '123@mail.ru', '$2y$10$5Ye81Q4n0ReqZHw9AFAOQeFA1IjpwaY5mYaxaQb18kEAtkU/ur3s6', 2, 'Иван', 'Иванов', 'Сергеевич'),
(5, '1234@mail.ru', '$2y$10$pTp7q0DEHQRWnpCRZzNTvuIeEmDW5DFg.Xq3mxW4B1LYhgg.HJgbu', 3, 'Эмильен', 'Жабер', 'Таксисович'),
(6, '12345@mail.ru', '$2y$10$yHC7eG9Uhy0rEIa3nqhynO4W/iXzQ8f9/grUArnIZlkVrkxm5irgm', 1, 'Администратор', 'Админ', 'Админович');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `incedent`
--
ALTER TABLE `incedent`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `message`
--
ALTER TABLE `message`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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

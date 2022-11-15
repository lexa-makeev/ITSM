import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CardIncedent.css";
import axios from "axios";
function CardIncedent(props) {
  const { state } = useLocation();
  const { id } = state;
  const [getAllIncedent, setGetAllIncedent] = useState(null);

  useEffect(() => {
    let formData = new FormData();
    formData.append("id", id);
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/getIncedentID.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setGetAllIncedent(response.data[0]);
        console.log(response.data[0]);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }, []);
  function updateButton(value) {
    let formData = new FormData();
    formData.append("value", value);
    formData.append("id", id);
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/updateIncedent.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        window.location.reload();
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  return (
    <section id="card">
      <a href="/">Перейти на главную</a>
      <div className="container">
        <div className="left">
          <div className="info_kratk">
            <h2>Краткая информация</h2>
            <p>
              Тема:
              <span>{getAllIncedent !== null && getAllIncedent.topic}</span>
            </p>
            <p>
              Услуга:
              <span>
                {getAllIncedent !== null && getAllIncedent.components}
              </span>
            </p>
            <p>
              Тип заявки:
              <span>{getAllIncedent !== null && getAllIncedent.type}</span>
            </p>
            <p>
              Статус:
              <span>{getAllIncedent !== null && getAllIncedent.status}</span>
            </p>
            <p>
              Время завершения:
              <span>{getAllIncedent !== null && getAllIncedent.end_date}</span>
            </p>
          </div>
          <div className="opis">
            <h2>Полное описание</h2>
            <p>Описание:</p>
            <p>{getAllIncedent !== null && getAllIncedent.opis}</p>
          </div>
        </div>
        <div className="right">
          <div className="dannye">
            <h2>Данные о пользователе</h2>
            <p>
              Контрагент:{" "}
              <span>
                {getAllIncedent !== null &&
                  getAllIncedent.fam_kontr +
                    " " +
                    getAllIncedent.name_kontr +
                    " " +
                    getAllIncedent.otch_kontr}
              </span>
            </p>
          </div>
          <div className="otvetstv">
            <h2>Ответственный</h2>
            <p>
              Ответственный:{" "}
              <span>
                {getAllIncedent !== null &&
                  getAllIncedent.fam +
                    " " +
                    getAllIncedent.name +
                    " " +
                    getAllIncedent.otch}
              </span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="button">
        <button onClick={() => updateButton("В работе")}>В работе</button>
        <button onClick={() => updateButton("Выполнена")}>Выполнена</button>
        {localStorage.getItem("role") !== "3" && (
          <button onClick={() => updateButton("Закончена")}>Закончена</button>
        )}
      </div>
    </section>
  );
}

export default CardIncedent;

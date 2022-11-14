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
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }, []);
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
              Услуга:<span></span>
            </p>
            <p>
              Тип заявки:<span></span>
            </p>
            <p>
              Статус:<span></span>
            </p>
            <p>
              Время завершения:<span></span>
            </p>
          </div>
          <div className="opis">
            <h2>Полное описание</h2>
            <p>Описание</p>
            <p></p>
          </div>
        </div>
        <div className="right">
          <div className="dannye">
            <h2>Данные о пользователе</h2>
            <p>
              Контрагент <span></span>
            </p>
          </div>
          <div className="otvetstv">
            <h2>Ответственный</h2>
            <p>
              Ответственный: <span></span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardIncedent;
import React, { useEffect, useState } from "react";
import "../NewCardIncedent/NewCardIncedent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function NewCardIncedentClient(props) {
  const [valueName, setValueName] = useState(null);
  const [valueCatalog, setValueCatalog] = useState(null);
  const [valueUsersTex, setValueUsersTex] = useState(null);

  const [valueTopic, setValueTopic] = useState(null);
  const [valueUsluga, setValueUsluga] = useState(null);
  const [valueType, setValueType] = useState(null);
  const [valueStatus, setValueStatus] = useState(null);
  const [valueEndTime, setValueEndTime] = useState(null);
  const [valueOpis, setValueOpis] = useState(null);
  const [valueOtvetsv, setValueOtvetsv] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    let Data = new FormData();
    Data.append("email", localStorage.getItem("email"));
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/getName.php",
      data: Data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setValueName(response.data[0]);
        console.log(valueName);
      })
      .catch(function () {
        console.log("Ошибка");
      });

    axios({
      method: "get",
      url: "http://localhost:80/uslugi/api/getCatalog.php",
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setValueCatalog(response.data);
      })
      .catch(function () {
        console.log("Ошибка");
      });

    axios({
      method: "get",
      url: "http://localhost:80/uslugi/api/getUsersTex.php",
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setValueUsersTex(response.data);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }, []);
  function onSubmit(e) {
    console.log(valueUsluga);
    console.log(valueOtvetsv);
    e.preventDefault();
    let formData = new FormData();
    formData.append("topic", valueTopic);
    formData.append("usluga", valueUsluga);
    formData.append("type", valueType);
    formData.append("status", valueStatus);
    formData.append("EndTime", valueEndTime);
    formData.append("opis", valueOpis);
    formData.append("otvetsv", valueOtvetsv);
    formData.append("kontragent", localStorage.getItem("email"));
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/newIncedent.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        if (response.data === true) {
          navigate("/");
        }
        console.log(response);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  return (
    <section id="card">
      <a href="/">Перейти на главную</a>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="left">
            <div className="info_kratk">
              <h2>Краткая информация</h2>
              <p>
                Тема:
                <input
                  type="text"
                  onChange={(e) => setValueTopic(e.target.value)}
                  value={valueTopic}
                />
              </p>
              <p>
                Услуга:
                <select
                  name="usluga"
                  id="usluga"
                  onChange={(e) => setValueUsluga(e.target.value)}
                  value={valueUsluga}
                >
                  <option value="0"></option>
                  {valueCatalog !== null &&
                    valueCatalog.map((data) => (
                      <>
                        <option value={data.id}>{data.name}</option>
                      </>
                    ))}
                </select>
              </p>
              <p>
                Тип заявки:
                <select
                  name="type"
                  id="type"
                  onChange={(e) => setValueType(e.target.value)}
                  value={valueType}
                >
                  <option value="0"></option>
                  <option value="Инцидент">Инцидент</option>
                </select>
              </p>
              <p>
                Статус:
                <select
                  name="status"
                  id="status"
                  onChange={(e) => setValueStatus(e.target.value)}
                  value={valueStatus}
                >
                  <option value="0"></option>
                  <option value="Новая">Новая</option>
                </select>
              </p>
              {localStorage.getItem("role") === "3" && (
                <p>
                  Время завершения:
                  <input
                    name="EndTime"
                    id="EndTime"
                    type="datetime-local"
                    onChange={(e) => setValueEndTime(e.target.value)}
                    value={valueEndTime}
                  />
                </p>
              )}
            </div>
            <div className="opis">
              <h2>Полное описание</h2>
              <p>Описание</p>
              <textarea
                name="opis"
                id="opis"
                cols="30"
                rows="10"
                onChange={(e) => setValueOpis(e.target.value)}
                value={valueOpis}
              ></textarea>
            </div>
          </div>
          <div className="right">
            <div className="dannye">
              <h2>Данные о пользователе</h2>
              <p>
                Контрагент{" "}
                {valueName !== null && (
                  <input
                    name="kontragent"
                    id="kontragent"
                    type="text"
                    disabled
                    value={
                      valueName.fam +
                      " " +
                      valueName.name +
                      " " +
                      valueName.otch
                    }
                  />
                )}
              </p>
            </div>
            <div className="otvetstv">
              <h2>Ответственный</h2>
              <p>
                Ответственный:
                <select
                  name="otvetsv"
                  id="otvetsv"
                  onChange={(e) => setValueOtvetsv(e.target.value)}
                  value={valueOtvetsv}
                >
                  <option value="0"></option>
                  {valueUsersTex !== null &&
                    valueUsersTex.map((data) => (
                      <option value={data.id}>
                        {data.fam + " " + data.name + " " + data.otch}
                      </option>
                    ))}
                </select>
              </p>
              <p></p>
            </div>
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </section>
  );
}

export default NewCardIncedentClient;

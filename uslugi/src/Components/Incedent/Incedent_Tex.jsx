import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Incedent.css";
import { useNavigate } from "react-router-dom";

function IncedentTex() {
  const navigate = useNavigate();
  const [getAllIncedent, setGetAllIncedent] = useState(null);
  const [valueName, setValueName] = useState(null);

  useEffect(() => {
    let formData = new FormData();
    formData.append("email", localStorage.getItem("email"));
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/getIncedentTEX.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setGetAllIncedent(response.data);
      })
      .catch(function () {
        console.log("Ошибка");
      });

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
  }, []);
  return (
    <>
      <h1>
        Сотрудник{" "}
        {valueName !== null && (
          <span>
            {valueName.fam} {valueName.name} {valueName.otch}
          </span>
        )}
      </h1>
      {localStorage.getItem("role") !== "3" && (
        <button
          onClick={() => {
            navigate("/newcard");
          }}
        >
          Добавить новый инцидент
        </button>
      )}

      <table className="incedent">
        <tr>
          <th>Дата регистрации</th>
          <th>Номер</th>
          <th>Статус</th>
          <th>Тип заявки</th>
          <th>Отвественный</th>
          <th>Тема</th>
          <th>Описание</th>
        </tr>
        {getAllIncedent !== null &&
          getAllIncedent.map((data) => (
            <tr key={data.id}>
              <td>{data.date}</td>
              <td>{data.id}</td>
              <td>{data.status}</td>
              <td>{data.type}</td>
              <td>
                {data.fam} {data.name} {data.otch}
              </td>
              <td>{data.topic}</td>
              <td>{data.opis}</td>
              <td>
                <button
                  onClick={() => navigate("/card", { state: { id: data.id } })}
                >
                  Посмотреть
                </button>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
}

export default IncedentTex;

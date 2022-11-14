import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Incedent.css";
import { useNavigate } from "react-router-dom";

function IncedentTex() {
  const navigate = useNavigate();
  const [getAllIncedent, setGetAllIncedent] = useState(null);
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
  }, []);
  return (
    <>
      <h1>
        Сотрудник{" "}
        <span>
          {getAllIncedent !== null && getAllIncedent[0].fam}{" "}
          {getAllIncedent !== null && getAllIncedent[0].name}{" "}
          {getAllIncedent !== null && getAllIncedent[0].otch}
        </span>
      </h1>
      <table>
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

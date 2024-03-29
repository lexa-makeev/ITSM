import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Header.css";
function Header() {
  const [valueName, setValueName] = useState(null);
  useEffect(() => {
    let formData = new FormData();
    formData.append("email", localStorage.getItem("email"));
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/getName.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setValueName(response.data[0]);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }, []);
  const navigate = useNavigate();
  function clearStorage() {
    localStorage.clear();
    navigate("/auth");

    window.location.reload();
  }
  function role(value) {
    if (value === 1) {
      return "Администратор";
    } else if (value === 2) {
      return "Рядовой сотрудник";
    } else if (value === 3) {
      return "Сотрудник технической поддержки";
    } else if (value === 4) {
      return "Клиент";
    }
  }
  return (
    <header>
      <div className="container">
        {valueName !== null && (
          <p>
            {valueName.fam} {valueName.name} {valueName.otch}{" "}
            <span>Роль: {role(valueName.role)}</span>
          </p>
        )}

        <button onClick={() => clearStorage()}>Выйти</button>
      </div>
    </header>
  );
}

export default Header;

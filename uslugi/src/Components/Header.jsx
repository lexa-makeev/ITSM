import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    }
  }
  return (
    <div className="container">
      {valueName !== null && (
        <p>
          {valueName.fam} {valueName.name} {valueName.otch}{" "}
          {role(valueName.role)}
        </p>
      )}

      <button onClick={() => clearStorage()}>Выйти из аккаунта</button>
    </div>
  );
}

export default Header;

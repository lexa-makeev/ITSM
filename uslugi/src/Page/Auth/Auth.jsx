import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Auth() {
  const navigate = useNavigate();
  const [isReg, setReg] = useState(false);

  const [valueEmailReg, setValueEmailReg] = useState("");
  const [valuePassReg, setValuePassReg] = useState("");
  const [valueRoleReg, setValueRoleReg] = useState(1);
  const [valueNameReg, setValueNameReg] = useState("");
  const [valueFamReg, setValueFamReg] = useState("");
  const [valueOtchReg, setValueOtchReg] = useState("");

  const [valueEmail, setValueEmail] = useState("");
  const [valuePass, setValuePass] = useState("");
  function regSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email_reg", valueEmailReg);
    formData.append("pass_reg", valuePassReg);
    formData.append("role", valueRoleReg);
    formData.append("name_reg", valueNameReg);
    formData.append("fam_reg", valueFamReg);
    formData.append("otch_reg", valueOtchReg);
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/reg.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        if (response.data === true) {
          setReg(false);
        }
        if (response.data === 2) {
          console.log("Такой пользователь уже существует!");
        }
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  function authSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", valueEmail);
    formData.append("pass", valuePass);
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/auth.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response.data.auth);
        if (response.data.auth === true) {
          console.log("Вход успешный");
          localStorage.setItem("email", valueEmail);
          localStorage.setItem("role", response.data.role);
          navigate("/");
          window.location.reload();
        }
        if (response.data === 1) {
          console.log("Пароль неверный!");
        }
        if (response.data === 2) {
          console.log("Такого пользователя не существует!");
        }
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  return (
    <>
      <section id="Auth">
        {isReg === true ? (
          <>
            <form onSubmit={regSubmit}>
              <h1>Панель регистрации</h1>
              <div>
                <label htmlFor="email_reg">Имя:</label>
                <input
                  onChange={(e) => setValueNameReg(e.target.value)}
                  value={valueNameReg}
                  name="name_reg"
                  placeholder="Введите ваше имя"
                  id="name_reg"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email_reg">Фамилия:</label>
                <input
                  onChange={(e) => setValueFamReg(e.target.value)}
                  value={valueFamReg}
                  name="fam_reg"
                  placeholder="Введите вашу фамилию"
                  id="fam_reg"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email_reg">Отчество:</label>
                <input
                  onChange={(e) => setValueOtchReg(e.target.value)}
                  value={valueOtchReg}
                  name="otch_reg"
                  placeholder="Введите ваше отчество"
                  id="otch_reg"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email_reg">Ваша почта:</label>
                <input
                  onChange={(e) => setValueEmailReg(e.target.value)}
                  value={valueEmailReg}
                  name="email_reg"
                  placeholder="Введите вашу почту"
                  id="email_reg"
                  type="email"
                />
              </div>
              <div>
                <label htmlFor="pass_reg">Ваш пароль:</label>
                <input
                  type="password"
                  onChange={(e) => setValuePassReg(e.target.value)}
                  value={valuePassReg}
                  name="pass_reg"
                  placeholder="Введите ваш пароль"
                  id="pass_reg"
                />
                <label htmlFor="role">Зарегистрироваться как:</label>
                <select
                  id="role"
                  onChange={(e) => setValueRoleReg(e.target.value)}
                  value={valueRoleReg}
                >
                  <option id="admin">Администратор</option>
                  <option id="ryad_sotr">Рядовой сотрудник</option>
                  <option id="tehn_sotr">
                    Сотрудник технической поддержки
                  </option>
                </select>
              </div>
              <button type="submit">Регистрация</button>
            </form>
            <button
              onClick={() => {
                setReg(false);
              }}
            >
              Вернуться
            </button>
          </>
        ) : (
          <>
            <form onSubmit={authSubmit}>
              <h1>Панель входа</h1>
              <div>
                <label htmlFor="email">Ваша почта:</label>
                <input
                  onChange={(e) => setValueEmail(e.target.value)}
                  value={valueEmail}
                  type="email"
                  name="email"
                  placeholder="Введите вашу почту"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="pass">Ваш пароль:</label>
                <input
                  onChange={(e) => setValuePass(e.target.value)}
                  value={valuePass}
                  name="pass"
                  placeholder="Введите ваш пароль"
                  id="pass"
                  type="password"
                />
              </div>
              <button type="submit">Войти</button>
            </form>
            <button
              onClick={() => {
                setReg(true);
              }}
            >
              Зарегистрироваться
            </button>
          </>
        )}
      </section>
    </>
  );
}

export default Auth;

import React, { useEffect, useState } from "react";
import CatalogUslug from "../../Components/CatalogUslug/CatalogUslug";
import "./Main.css";
import Incedent_Tex from "../../Components/Incedent/Incedent_Tex";
import Message from "../../Components/Message/Message";
import Incedent_Sotr from "../../Components/Incedent/Incedent_Sotr";
import Incedent_Adm from "../../Components/Incedent/Incedent_Adm";
function Main() {
  const [nav, setNav] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("role") === "1") {
      setNav(1);
    } else if (localStorage.getItem("role") === "2") {
      setNav(1);
    } else if (localStorage.getItem("role") === "3") {
      setNav(2);
    } else if (localStorage.getItem("role") === "4") {
      setNav(1);
    }
  }, []);

  return (
    <section id="main">
      <div className="container">
        <nav>
          <ul>
            {localStorage.getItem("role") !== "3" && (
              <li onClick={() => setNav(1)}>Модуль управления каталогом</li>
            )}
            <li onClick={() => setNav(2)}>Модуль сервиса сообщений</li>
            <li onClick={() => setNav(3)}>Модуль управления инцидентами</li>
          </ul>
        </nav>
        {localStorage.getItem("role") !== "3" && nav === 1 && <CatalogUslug />}
        {localStorage.getItem("role") === "3" && nav === 3 && <Incedent_Tex />}
        {(localStorage.getItem("role") === "2" ||
          localStorage.getItem("role") === "4") &&
          nav === 3 && <Incedent_Sotr />}
        {localStorage.getItem("role") === "1" && nav === 3 && <Incedent_Adm />}
        {nav === 2 && <Message />}
      </div>
    </section>
  );
}

export default Main;

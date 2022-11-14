import React, { useEffect, useState } from "react";
import CatalogUslug from "../../Components/CatalogUslug/CatalogUslug";
import "./Main.css";
import Incedent_Tex from "../../Components/Incedent/Incedent_Tex";
import Message from "../../Components/Message/Message";
function Main() {
  const [nav, setNav] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("role") === "1") {
      setNav(1);
    }
    if (localStorage.getItem("role") === "2") {
    }
    if (localStorage.getItem("role") === "3") {
      setNav(2);
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
        {nav === 3 && <Incedent_Tex />}
        {nav === 2 && <Message />}
      </div>
    </section>
  );
}

export default Main;

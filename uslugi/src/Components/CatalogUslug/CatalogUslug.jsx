import React, { useEffect, useState } from "react";
import axios from "axios";

function CatalogUslug(props) {
  const [arrayCatalog, setArrayCatalog] = useState(null);
  const [idCatalog, setIdCatalog] = useState("");
  const [nameCatalog, setNameCatalog] = useState("");
  const [componentCatalog, setComponentCatalog] = useState("");
  const [refreshTables, setRefreshTables] = useState(false);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:80/uslugi/api/getCatalog.php",
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setArrayCatalog(response.data);
        setRefreshTables(false);
        setNameCatalog("");
        setComponentCatalog("");
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }, [refreshTables]);
  function edit(id, name, components) {
    setIdCatalog(id);
    setNameCatalog(name);
    setComponentCatalog(components);
  }
  function update() {
    let formData = new FormData();
    formData.append("id", idCatalog);
    formData.append("name", nameCatalog);
    formData.append("components", componentCatalog);
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/updateCatalog.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setRefreshTables(true);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  return (
    <table>
      <tr>
        <th>Наименование услуги</th>
        <th>Компоненты</th>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            defaultValue={nameCatalog}
            onChange={(e) => setNameCatalog(e.target.value)}
            value={nameCatalog}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={componentCatalog}
            onChange={(e) => setComponentCatalog(e.target.value)}
            value={componentCatalog}
          />
        </td>
        <td>
          <button disabled={idCatalog === "" ? "enabled" : ""} onClick={update}>
            Сохранить
          </button>
          <button disabled={idCatalog !== "" ? "enabled" : ""}>Добавить</button>
        </td>
      </tr>
      {arrayCatalog !== null &&
        arrayCatalog.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.components}</td>
            <td>
              <button onClick={() => edit(data.id, data.name, data.components)}>
                Изменить
              </button>
            </td>
          </tr>
        ))}
    </table>
  );
}

export default CatalogUslug;

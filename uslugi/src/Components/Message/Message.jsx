import React, { useEffect, useState } from "react";
import "./Message.css";
import axios from "axios";
function Message(props) {
  const [allMessage, setAllMessage] = useState(null);
  const [allMessageID, setAllMessageID] = useState(null);
  const [valueMessage, setValueMessage] = useState("");
  const [toMessage, setToMessage] = useState("");
  const [refreshMessage, setRefreshMessage] = useState(false);
  const [valueIdChat, setValueIdChat] = useState("");
  useEffect(() => {
    if (localStorage.getItem("role") !== "1") {
      let formData = new FormData();
      formData.append("email", localStorage.getItem("email"));
      axios({
        method: "post",
        url: "http://localhost:80/uslugi/api/getAllChat.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          setAllMessage(response.data);
          console.log(response);
        })
        .catch(function () {
          console.log("Ошибка");
        });
    } else {
      let formData = new FormData();
      formData.append("email", localStorage.getItem("email"));
      axios({
        method: "post",
        url: "http://localhost:80/uslugi/api/getAllChatAdmin.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          setAllMessage(response.data);
          console.log(response);
        })
        .catch(function () {
          console.log("Ошибка");
        });
    }
  }, []);
  useEffect(() => {
    getChatId(valueIdChat);
    setValueMessage("");
    setRefreshMessage(false);
  }, [refreshMessage]);
  function getChatId(id) {
    let formData = new FormData();
    console.log(id);
    formData.append("id", id);
    formData.append("email", localStorage.getItem("email"));
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/getChatID.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        if (response) {
          setAllMessageID(response.data);
          setToMessage(id);
        }

        console.log(response);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }

  function sendMessage(id) {
    let formData = new FormData();
    formData.append("toID", id);
    formData.append("from", localStorage.getItem("email"));
    formData.append("message", valueMessage);
    axios({
      method: "post",
      url: "http://localhost:80/uslugi/api/sendChat.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setRefreshMessage(true);
        // window.location.reload();
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  return (
    <section id="chat">
      <div className="container">
        <div className="left">
          <h2>Ваш чат</h2>
          {allMessage !== null &&
            allMessage.map((data) => (
              <div
                className="message_to"
                onClick={() => {
                  getChatId(data.id);
                  setValueIdChat(data.id);
                }}
              >
                <p>
                  {data.fam} {data.name} {data.otch}
                </p>
              </div>
            ))}
        </div>
        {valueIdChat !== "" && (
          <div className="right">
            {allMessageID !== null &&
              allMessageID.map((data) => (
                <div className="message">
                  <div className="date_name">
                    <p className="name_message">
                      {data.fam} {data.name} {data.otch}
                    </p>
                    <p className="date">{data.date}</p>
                  </div>
                  <p>{data.message}</p>
                </div>
              ))}

            <input
              type="text"
              onChange={(e) => setValueMessage(e.target.value)}
              value={valueMessage}
            />
            <button onClick={() => sendMessage(toMessage)}>Отправить</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Message;

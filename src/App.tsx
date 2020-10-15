import React, { useState } from 'react';
import axios from "axios";

function App() {

  const [token, setToken] = useState("");
  const [text, setText] = useState("");

  const onPress = async () => {
    await axios.get("http://localhost:8080/token").then(res => setToken(res.data));
  }

  const handleSubmit = async () => {
    await axios.get(`http://localhost:8080/api?token=${token}`).then(res => setText(JSON.stringify(res.data)));
  };

  return (
    <div>
      <button onClick={onPress}>GET TOKEN</button>
      <button onClick={handleSubmit}>SUBMIT</button>
      <div>{text}</div>
    </div>
  )
};

export default App;

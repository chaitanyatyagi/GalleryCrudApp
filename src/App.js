import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";
import Image from "./components/Image";
import Login from "./components/Login";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://server-nine-eosin.vercel.ap/images/all").then((res) => {
      setData(res.data.imgs);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/fill" element={<Form />} />
          <Route path="/header" element={<Header />} />
          {data.map((el) => (
            <Route
              path={`/${el.slug}`}
              key={el.slug}
              element={<Image elmnt={el} />}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

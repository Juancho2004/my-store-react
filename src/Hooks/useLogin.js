import { useState } from "react";
import { api, API_LOGIN } from "../Api/Api";
import { useNavigate } from "react-router-dom";
// import { saveTokenToLocalStorage } from "../Storage/Storage";
import axios from "axios";
import { saveTokenToLocalStorage } from "../Storage/Storage";

export function useLogin() {
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (event) => {
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const urlEnCodedData = new URLSearchParams();
    urlEnCodedData.append("username", username);
    urlEnCodedData.append("password", password);

    event.preventDefault();
    try {
      const response = await api.post(API_LOGIN, urlEnCodedData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response && response.data) {
        const { token } = response.data;
        const userResponse = await axios.get(
          "https://fakestoreapi.com/users/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (userResponse && userResponse.data) {
          const userLogin = userResponse.data;
          const user = userLogin.find((us) => us.username === username);
          navigate("/", { state: { user } });
        }
      }
    } catch (error) {
      console.error("No se pudo iniciar sesion", error);
    }
  };

  return { username, password, handleLogin, handleChange };
}

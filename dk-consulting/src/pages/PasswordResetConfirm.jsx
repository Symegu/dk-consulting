import { useState } from "react";
import { useParams } from "react-router";
import authService from "../services/authService";

const PasswordResetConfirm = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [msgVisible, setMsgVisible] = useState(false);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { token } = useParams();
  console.log(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsgVisible(true);
    setMessage("Загрузка");
    authService
      .resetPasswordConfirm({ token: token, password: password })
      .then((res) => {
        console.log(res);
        setMessage("Пароль успешно сброшен!");
        setTimeout(() => {
          setMsgVisible(false);
        }, "3000");
      })
      .catch((err) => {
        setMessage("Что-то пошло не так, попробуйте позже!");
        setTimeout(() => {
          setMsgVisible(false);
        }, "3000");
        console.log(err);
      });
  };

  return (
    <section className="w-[100%] min-h-[100vh]">
      <div className="w-[1290px] mx-auto flex flex-col items-center justify-center bg-slate-400">
        {msgVisible ? (
          <div>
            <h2>{message}</h2>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <h2>Создание нового пароля</h2>
              <input
                type="password"
                placeholder="Новый пароль"
                value={password}
                onChange={handlePasswordChange}
                minLength={8}
              ></input>
              <button type="submit">Создать новый пароль</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default PasswordResetConfirm;

import { useState } from "react";
import authService from "../services/authService";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msgVisible, setMsgVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsgVisible(true);
    setMessage("Загрузка");
    authService
      .resetPassword({ email: email })
      .then((res) => {
        setMessage(
          "Письмо со ссылкой для сброса пароля было отправлено вам на почту!"
        );
        setTimeout(() => {
          setMsgVisible(false);
        }, "3000");
        console.log(res);
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
              <h2>Восстановление пароля</h2>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
              ></input>
              <button type="submit">Сбросить пароль</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default PasswordReset;

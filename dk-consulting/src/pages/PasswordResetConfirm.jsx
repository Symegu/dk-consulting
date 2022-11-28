const PasswordResetConfirm = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    authService
      .resetPassword({ email: email })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="w-[100%] min-h-[100vh]">
      <div className="w-[1290px] mx-auto flex flex-col items-center justify-center bg-slate-400">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2>Создание нового пароля</h2>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <button type="submit">Сбросить пароль</button>
        </form>
      </div>
    </section>
  );
};

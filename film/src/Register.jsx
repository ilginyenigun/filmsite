import "./Register.css";

function Register({ onSuccess }) {
  const kayit = (e) => {
    e.preventDefault();
    onSuccess(); 
  };

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      <form onSubmit={kayit}>
        <input type="text" placeholder="Adınız" required />
        <input type="email" placeholder="E-posta" required />
        <input type="password" placeholder="Şifre" required />
        <button type="btn">Kayıt Ol</button>
      </form>
    </div>
  );
}

export default Register;

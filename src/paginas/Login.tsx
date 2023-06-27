import "./Css/Login.css";
import Logo from "../assets/Première Santé.png";
export const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <img src={Logo} alt="Logo do Site" title="Logo do Site" />
        </div>

        <div className="col-12 navegacao">
          <h1>Login</h1>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row align center">
          <div className="mx-auto col-1g-5" id="login">
            <form className="p-4 p-md-5">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
                <label htmlFor="inputEmail">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Senha"
                />
                <label htmlFor="inputPassword">Senha</label>
              </div>

              <button
                id="btncontato"
                className="btn btn-info rounded-pill px-3"
              >
                <a href="Admin">Entrar</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

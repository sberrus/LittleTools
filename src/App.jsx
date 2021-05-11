import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Partials/Header.jsx"
import Sidebar from "./components/Partials/Sidebar"
import FooterScripts from "./components/Partials/Footer.jsx"

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <h1 className="display-2">Hello World</h1>
          <Link to="/main">Siguiente</Link>
        </Route>

        <Route path="/main">
          <div className="container-fluid" id="page-wrapper">
            <div className="container" id="HeaderContainer">
              <Header />
            </div>
            <div className="container" id="BodyContainer">
              <h1 className="display-4">Bienvenidos</h1>
              <p>
                Little tools es una plataforma de desarrollo de componentes y librerias para desarrollo web de código abierto.
              </p>
              <p>
                La plataforma esta abierta en Github y si deseais incorporar y colaborar en la sección de <a href="contacto">contacto</a> encontrareis todos los enlaces para contactarme o directamente el repositorio de Github para acceder al código directamente.
              </p>
            </div>
            <Sidebar />
            <footer>
              <FooterScripts />
            </footer>
          </div>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;

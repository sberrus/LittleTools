import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";

//Sections
import Index from "./components/Pages/Index/Index.jsx";
import Main from "./components/Pages/Main/Main.jsx";
import QuickProjects from "./components/Pages/QuickProjects/QuickProjects";
import Aforo from "./components/Pages/QuickProjects/Aforo";
import Contadores from "./components/Pages/QuickProjects/Contadores";
import TextToSpeach from "./components/Pages/QuickProjects/TextToSpeech";
import LittleTools from "./components/Pages/LittleTools/LittleTools";

//Components
import Header from "./components/Partials/Header";
import Sidebar from "./components/Partials/Sidebar";
import Footer from "./components/Partials/Footer";

function App() {
    return (
        <Router>
            <div className="container-fluid p-0">
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Index />
                    </Route>

                    <Route path="/main">
                        <Main />
                    </Route>
                    <Route path="/quick-projects/aforo">
                        <Aforo />
                    </Route>
                    <Route path="/quick-projects/contadores:id">
                        <Contadores />
                    </Route>
                    <Route path="/quick-projects/text-to-speech">
                        <TextToSpeach />
                    </Route>
                    <Route path="/quick-projects">
                        <QuickProjects />
                    </Route>
                    <Route path="/little-tools">
                        <LittleTools />
                    </Route>
                    <Redirect to="/"></Redirect>
                </Switch>
                <Sidebar />
                <Footer />
            </div>
        </Router>
    );
}

export default App;

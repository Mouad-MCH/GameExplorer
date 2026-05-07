import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import Creators from "./pages/Creators"; //
import Games from "./pages/Games";
import CreatorDetails from "./pages/CreatorDetails";
import GameDetails from "./pages/GameDetails";
import DevelopersTeam from "./pages/DevelopersTeam";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/creators" element={<Creators />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/creators/:id" element={<CreatorDetails />} />
                    <Route path="/games/:id" element={<GameDetails />} />
                    <Route
                        path="/games/:id/development-team"
                        element={<DevelopersTeam />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;

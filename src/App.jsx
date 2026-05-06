import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import Creators from "./pages/Creators";//
import Games from "./pages/Games";
import CreatorDetails from "./pages/CreatorDetails";
import GameDetails from "./pages/GameDetails";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/creators" element={<Creators/>} />//
                    <Route path="/games" element={<Games />} />
                    <Route path="/creators/:id" element={<CreatorDetails />} />
                    <Route path="/details/:id" element={<GameDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;

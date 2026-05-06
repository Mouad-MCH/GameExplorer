import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import Games from "./pages/Games";
import CreatorDetails from "./pages/CreatorDetails";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/creators/:id" element={<CreatorDetails />} />
                    <Route path="/details/:id" element={<details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;

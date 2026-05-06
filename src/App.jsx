import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import gameDetailsPage from "./pages/GameDetails";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<gameDetailsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;

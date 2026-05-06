import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import Creators from "./pages/Creators";//

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/creators" element={<Creators/>} />//
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import CreatorDetails from "./pages/CreatorDetails";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/creators/:id" element={<CreatorDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;

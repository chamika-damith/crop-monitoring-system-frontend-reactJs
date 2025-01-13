import Navbar from "./components/Navbar.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideNavbar from "./components/SideNavbar.tsx";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <div className="flex">
                    <SideNavbar />
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import Field from "@/pages/Field";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <div className="flex">
                    <SideNavbar />
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/field" element={<Field/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App

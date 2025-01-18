import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import Field from "@/pages/Field";
import React from "react";
import Crop from "@/pages/Crop";
import Staff from "@/pages/Staff";
import Vehicle from "@/pages/Vehicle";

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
                        <Route path="/crop" element={<Crop/>}/>
                        <Route path="/staff" element={<Staff/>}/>
                        <Route path="/vehicle" element={<Vehicle/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App

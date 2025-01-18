import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClipboardList,
    faHouse,
    faLeaf,
    faSeedling,
    faTools,
    faTractor,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import React from "react";

const SideNavbar = () => {
    return (
        <div>
            <div className="hidden md:flex bg-white flex-auto w-12">
                <div className="w-32 h-auto bg-white flex flex-col items-center py-4 space-y-6 border-r-2 border-gray-300">
                    {/* Dashboard Button */}
                    <div className="group relative" id="dashboardBtn">
                        <Link to="/" className="text-gray-500 hover:text-gray-900">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <FontAwesomeIcon icon={faHouse} />
                            </div>
                        </Link>
                        <span className="tooltip hidden group-hover:block absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                            Dashboard
                        </span>
                    </div>

                    {/* Field Button */}
                    <div className="group relative" id="fieldBtn">
                        <Link to="/field" className="text-gray-500 hover:text-gray-900">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <FontAwesomeIcon icon={faSeedling} />
                            </div>
                        </Link>
                        <span className="tooltip hidden group-hover:block absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                            Field
                        </span>
                    </div>

                    {/* Crop Button */}
                    <div className="group relative" id="cropBtn">
                        <Link to="/crop" className="text-gray-500 hover:text-gray-900">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <FontAwesomeIcon icon={faLeaf} />
                            </div>
                        </Link>
                        <span className="tooltip hidden group-hover:block absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                            Crop
                        </span>
                    </div>

                    {/* Staff Button */}
                    <div className="group relative" id="staffBtn">
                        <Link to="/staff" className="text-gray-500 hover:text-gray-900">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                        </Link>
                        <span className="tooltip hidden group-hover:block absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                            Staff
                        </span>
                    </div>

                    {/* Vehicle Button */}
                    <div className="group relative" id="vehicleBtn">
                        <Link to="/vehicle" className="text-gray-500 hover:text-gray-900">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <FontAwesomeIcon icon={faTractor} />
                            </div>
                        </Link>
                        <span className="tooltip hidden group-hover:block absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                            Vehicle
                        </span>
                    </div>

                    {/* Equipment Button */}
                    <div className="group relative mt-auto" id="equipmentBtn">
                        <Link to="/equipment" className="text-gray-500 hover:text-gray-900">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <FontAwesomeIcon icon={faTools} />
                            </div>
                        </Link>
                        <span className="tooltip hidden group-hover:block absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                            Equipment
                        </span>
                    </div>

                    {/* Log Button */}
                    <div className="group relative mt-auto" id="logBtn">
                        <Link to="/log" className="text-gray-500 hover:text-gray-900">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                        </Link>
                        <span className="tooltip hidden group-hover:block absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                            Log
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;

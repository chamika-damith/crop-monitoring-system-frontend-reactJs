import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import AddVehicleForm from "@/components/vehicle/AddVehicleForm";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {deleteVehicle} from "@/redux/VehicleSlice";
import EditVehicleForm from "@/components/vehicle/EditVehicleForm";

const Vehicle = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const vehicles = useSelector((state:RootState)=>state.vehicle)
    const dispatch = useDispatch();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentVehicleData, setCurrentVehicleData] = useState(null);


    const handleDeleteVehicle = (vehicleId) => {
        console.log("Deleting field with code:", vehicleId);
        dispatch(deleteVehicle(vehicleId));
    };

    const handleEditButtonClick = (vehicle) => {
        setCurrentVehicleData(vehicle);
        setIsEditModalOpen(true);
    };

    return (
        <div className="w-full p-6 space-y-2 md:space-y-0 md:px-8">
            <section id="vehicle-section">
                <div id="vehicle">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Vehicle</h1>
                            <p className="text-gray-500">Manage your vehicle and view</p>
                        </div>
                        <div className="flex space-x-4">
                            <div
                                className="flex">
                                <Input type="text"
                                       className="bg-zinc-100/50 text-zinc-500 w-64"
                                       placeholder="Search..."
                                       id="cropSearchId"/>
                            </div>
                            <Button
                                onClick={() => setIsAddModalOpen(true)}
                                className="text-white px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg">
                                + Add Vehicle
                            </Button>

                        </div>
                    </div>

                    <div className="bg-white sadow-xl rounded-lg overflow-hidden">
                        <table className="w-full text-center">
                            <thead>
                            <tr className="bg-gradient-to-r from-gray-300 to-gray-300 text-gray-700">
                                <th className="p-4 font-semibold text-gray-600">
                                    Vehicle code
                                </th>
                                <th className="p-4 font-semibold text-gray-600">
                                    License Number
                                </th>
                                <th className="p-4 font-semibold text-gray-600">
                                    category
                                </th>
                                <th className="p-4 font-semibold text-gray-600">
                                    Fuel type
                                </th>
                                <th className="p-4 font-semibold text-gray-600">Status</th>
                                <th className="p-4 font-semibold text-gray-600">
                                    Staff member
                                </th>
                                <th className="p-4 font-semibold text-gray-600">Remarks</th>
                                <th className="p-4 font-semibold text-gray-600">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {vehicles.map((vehicle) => (
                                <tr key={vehicle.vehicleId} className="hover:bg-gray-100">
                                    <td className="p-4">{vehicle.vehicleId}</td>
                                    <td className="p-4">{vehicle.licensePlateNumber}</td>
                                    <td className="p-4">{vehicle.vehicleCategory}</td>
                                    <td className="p-4">{vehicle.fuelType}</td>
                                    <td className="p-4">{vehicle.status}</td>
                                    <td className="p-4">{vehicle.allocatedStaff}</td>
                                    <td className="p-4">{vehicle.remarks}</td>
                                    <td className="p-4 space-x-2">
                                        <button
                                            onClick={() => handleEditButtonClick(vehicle)}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteVehicle(vehicle.vehicleId)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            {isAddModalOpen && (
                <AddVehicleForm
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                />
            )}

            {isEditModalOpen && (
                <EditVehicleForm
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    vehicle={currentVehicleData}
                />
            )}
        </div>
    )
}
export default Vehicle

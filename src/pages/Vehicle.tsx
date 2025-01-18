import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import AddVehicleForm from "@/components/vehicle/AddVehicleForm";

const Vehicle = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
                            <tbody id="vehicleTableBody"></tbody>
                        </table>
                    </div>
                </div>

                <div id="editVehicleModal"
                     className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center hidden">
                    <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Edit Vehicle</h2>
                        <form id="editVehicleForm">
                            <div className="mb-4">
                                <label htmlFor="editvehicleId" className="block mb-2">Vehicle Id</label>
                                <input type="text" id="editvehicleId"
                                       className="border border-gray-300 bg-gray-200 rounded w-full p-2" readOnly/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="editLicensePlateNumber" className="block mb-2">License Plate
                                    Number</label>
                                <input type="text" id="editLicensePlateNumber"
                                       className="border border-gray-300 rounded w-full p-2" required/>
                                <span className="errorMessageEditlicensePlateNumber text-red-500 hidden text-xs">
                                            licensePlateNumber is required.
                                        </span>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="editVehicleCategory" className="block mb-2">Vehicle Category</label>
                                <input type="text" id="editVehicleCategory"
                                       className="border border-gray-300 rounded w-full p-2" required/>
                                <span className="errorMessageEditlicensePlateNumber text-red-500 hidden text-xs">
                                            vehicleCategory is required.
                                        </span>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="editFuelType" className="block mb-2">Fuel Type</label>
                                <select id="editFuelType" className="border border-gray-300 rounded w-full p-2"
                                        required>
                                    <option value="">Select Fuel Type</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="editStatus" className="block mb-2">Status</label>
                                <select id="editStatus" className="border border-gray-300 rounded w-full p-2"
                                        required>
                                    <option value="Available">Available</option>
                                    <option value="Out of Service">Out of Service</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="allocatedEditStaff" className="block mb-2">Allocated Staff Member
                                    Details</label>
                                <select id="allocatedEditStaff"
                                        className="border border-gray-300 rounded w-full p-2" required></select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="editRemarks" className="block mb-2">Remarks</label>
                                <textarea id="editRemarks" className="border border-gray-300 rounded w-full p-2"
                                          placeholder="Any special remarks or N/A"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" id="closeEditVehicleModal"
                                        className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {isAddModalOpen && (
                <AddVehicleForm
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                />
            )}
        </div>
    )
}
export default Vehicle

import React from 'react';
import { Input } from "@/components/ui/input";


const VehicleInputModel = ({setVehicleId, setLicensePlateNumber, setVehicleCategory, setFuelType, setStatus, setAllocatedStaff, setRemarks }) => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="vehicleId" className="block mb-2">Vehicle Id</label>
                <Input type="text" id="vehicleId" onChange={(e) => setVehicleId(e.target.value)}
                       required/>
            </div>
            <div>
                <label htmlFor="licensePlateNumber" className="block mb-2">License Plate Number</label>
                <Input type="text" id="licensePlateNumber" onChange={(e) => setLicensePlateNumber(e.target.value)}
                       required/>
            </div>
            <div>
                <label htmlFor="vehicleCategory" className="block mb-2">Vehicle Category</label>
                <Input type="text" id="vehicleCategory" onChange={(e) => setVehicleCategory(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="fuelType" className="block mb-2">Fuel Type</label>
                <select id="fuelType" onChange={(e) => setFuelType(e.target.value)} required>
                    <option value="">Select Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>
            <div>
                <label htmlFor="status" className="block mb-2">Status</label>
                <select id="status" onChange={(e) => setStatus(e.target.value)} required>
                    <option value="Available">Available</option>
                    <option value="Out of Service">Out of Service</option>
                </select>
            </div>
            <div>
                <label htmlFor="allocatedStaff" className="block mb-2">Allocated Staff Member</label>
                <select id="allocatedStaff" onChange={(e) => setAllocatedStaff(e.target.value)} required>
                    {/* Populate with staff options */}
                </select>
            </div>
            <div>
                <label htmlFor="remarks" className="block mb-2">Remarks</label>
                <textarea id="remarks" onChange={(e) => setRemarks(e.target.value)}
                          placeholder="Any special remarks or N/A"></textarea>
            </div>
        </div>
    );
};

export default VehicleInputModel;
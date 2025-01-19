import React from 'react';
import { Input } from "@/components/ui/input";
import {RootState} from "@/store/store";
import {useSelector} from "react-redux";


const VehicleInputModel = (props) => {
    const staffs = useSelector((state:RootState)=> state.staff)
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="vehicleId" className="block mb-2">Vehicle Id</label>
                <Input type="text" id="vehicleId" value={props.vehicleId} onChange={(e) => props.setVehicleId(e.target.value)}
                       required/>
            </div>
            <div>
                <label htmlFor="licensePlateNumber" className="block mb-2">License Plate Number</label>
                <Input type="text" id="licensePlateNumber" value={props.licensePlateNumber} onChange={(e) => props.setLicensePlateNumber(e.target.value)}
                       required/>
            </div>
            <div>
                <label htmlFor="vehicleCategory" className="block mb-2">Vehicle Category</label>
                <Input type="text" id="vehicleCategory" value={props.vehicleCategory} onChange={(e) => props.setVehicleCategory(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="fuelType" className="block mb-2">Fuel Type</label>
                <select id="fuelType" value={props.fuelType}
                        className="border border-gray-300 rounded w-full p-2"
                        onChange={(e) => props.setFuelType(e.target.value)} required >
                    <option value="">Select Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>
            <div>
                <label htmlFor="status" className="block mb-2">Status</label>
                <select id="status" value={props.status}
                        className="border border-gray-300 rounded w-full p-2"
                        onChange={(e) => props.setStatus(e.target.value)} required>
                    <option value="Select status">Select status</option>
                    <option value="Available">Available</option>
                    <option value="Out of Service">Out of Service</option>
                </select>
            </div>
            <div>
                <label htmlFor="allocatedStaff" className="block mb-2">Allocated Staff Member</label>
                <select id="allocatedStaff" value={props.allocatedStaff}
                        className="border border-gray-300 rounded w-full p-2"
                        onChange={(e) => props.setAllocatedStaff(e.target.value)} required>
                    <option value="">Select Staff member</option>
                    {staffs.map((staff, index) => {
                        return <option value={staff.staffId} key={index}>{staff.staffId}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="remarks" className="block mb-2">Remarks</label>
                <textarea id="remarks" value={props.remarks}
                          className="border border-gray-300 rounded w-full p-2"
                          onChange={(e) => props.setRemarks(e.target.value)}
                          placeholder="Any special remarks or N/A"></textarea>
            </div>
        </div>
    );
};

export default VehicleInputModel;
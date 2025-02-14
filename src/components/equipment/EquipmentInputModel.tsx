import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

const EquipmentInputModel = ({
                                 equipmentId,
                                 setEquipmentId,
                                 equipmentName,
                                 setEquipmentName,
                                 equipmentType,
                                 setEquipmentType,
                                 equipmentStatus,
                                 setEquipmentStatus,
                                 assignedStaff,
                                 setAssignedStaff,
                                 assignedField,
                                 setAssignedField
                             }) => {
    const fields = useSelector((state:RootState)=>state.field);
    const staffs = useSelector((state:RootState)=>state.staff);

    const handleChange = (e) => {
        const value = e.target.value === "Available";
        setEquipmentStatus(value);
    };

    return (
        <div className="space-y-4">
            <div className="mb-4">
                <label htmlFor="equipmentId" className="block mb-2">Equipment Id</label>
                <input
                    type="text"
                    id="equipmentId"
                    value={equipmentId}
                    onChange={(e) => setEquipmentId(e.target.value)}
                    required
                    className="border border-gray-300 rounded w-full p-2"
                    readOnly={true}
                    placeholder="Auto generate Equipment ID"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="equipmentName" className="block mb-2">Equipment Name</label>
                <input
                    type="text"
                    id="equipmentName"
                    value={equipmentName}
                    onChange={(e) => setEquipmentName(e.target.value)}
                    required
                    className="border border-gray-300 rounded w-full p-2"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="equipmentType" className="block mb-2">Equipment Type</label>
                <select
                    id="equipmentType"
                    value={equipmentType}
                    onChange={(e) => setEquipmentType(e.target.value)}
                    required
                    className="border border-gray-300 rounded w-full p-2"
                >
                    <option value="">Select Type</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Mechanical">Mechanical</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="equipmentStatus" className="block mb-2">Status</label>
                <select
                    id="equipmentStatus"
                    value={equipmentStatus ? "Available" : "Not Available"}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded w-full p-2"
                >
                    <option value="Select status">Select status</option>
                    <option value="AVAILABLE">AVAILABLE</option>
                    <option value="NOT_AVAILABLE">NOT_AVAILABLE</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="assignedStaff" className="block mb-2">Assigned Staff</label>
                <select
                    id="assignedStaff"
                    value={assignedStaff}
                    onChange={(e) => setAssignedStaff(e.target.value)}
                    required
                    className="border border-gray-300 rounded w-full p-2"
                >
                    <option value="Select staff">Select staff</option>
                    {staffs.map((staff,index) =>{
                        return <option value={staff.staffId} key={index}>{staff.staffId}</option>
                    })}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="assignedField" className="block mb-2">Assigned Field</label>
                <select
                    id="assignedField"
                    value={assignedField}
                    onChange={(e) => setAssignedField(e.target.value)}
                    required
                    className="border border-gray-300 rounded w-full p-2"
                >
                    <option value="Select field">Select field</option>
                    {fields.map((field,index) =>{
                        return <option value={field.fieldCode} key={index}>{field.fieldCode}</option>
                    })}
                </select>
            </div>
        </div>
    );
};

export default EquipmentInputModel;
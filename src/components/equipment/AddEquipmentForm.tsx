import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addEquipment } from "@/redux/EquipmentSlice";
import {EquipmentModel} from "@/model/EquipmentModel";
import EquipmentInputModel from "@/components/equipment/EquipmentInputModel";

const AddEquipmentForm = ({ isOpen, onClose }) => {
    const [equipmentId, setEquipmentId] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [equipmentType, setEquipmentType] = useState("");
    const [equipmentStatus, setEquipmentStatus] = useState(false);
    const [assignedStaff, setAssignedStaff] = useState("");
    const [assignedField, setAssignedField] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEquipment = new EquipmentModel(
            equipmentId,
            equipmentName,
            equipmentType,
            equipmentStatus,
            assignedStaff,
            assignedField
        );
        console.log('Equipment added:', newEquipment);
        dispatch(addEquipment(newEquipment));
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                onClose();
            }
        }}>
            <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Add New Equipment</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <EquipmentInputModel
                        equipmentId={equipmentId}
                        setEquipmentId={setEquipmentId}
                        equipmentName={equipmentName}
                        setEquipmentName={setEquipmentName}
                        equipmentType={equipmentType}
                        setEquipmentType={setEquipmentType}
                        equipmentStatus={equipmentStatus}
                        setEquipmentStatus={setEquipmentStatus}
                        assignedStaff={assignedStaff}
                        setAssignedStaff={setAssignedStaff}
                        assignedField={assignedField}
                        setAssignedField={setAssignedField}
                    />
                    <div className="flex justify-end space-x-4">
                        <Button type="button" variant="outline" onClick={onClose} className="border-zinc-200 text-zinc-700 hover:bg-zinc-100">Cancel</Button>
                        <Button type="submit" className="bg-zinc-900 text-white hover:bg-zinc-800">Add Equipment</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddEquipmentForm;